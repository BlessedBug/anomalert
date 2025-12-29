import { useState, useCallback } from 'react';
import { authApi, LoginResponse, TOTPResponse, MagicLinkResponse } from '@/lib/api';

export type AuthStep = 'password' | 'totp' | 'magic-link' | 'authenticated';

interface UseAuthFlowReturn {
  step: AuthStep;
  isLoading: boolean;
  error: string | null;
  email: string;
  setEmail: (email: string) => void;
  submitPassword: (password: string) => Promise<boolean>;
  submitTOTP: (code: string) => Promise<boolean>;
  verifyMagicLink: (token: string) => Promise<boolean>;
  reset: () => void;
}

export function useAuthFlow(): UseAuthFlowReturn {
  const [step, setStep] = useState<AuthStep>('password');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const submitPassword = useCallback(async (password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const response: LoginResponse = await authApi.login(email, password);
      
      if (response.success && response.requiresTOTP) {
        setStep('totp');
        return true;
      } else if (response.success) {
        setStep('authenticated');
        return true;
      } else {
        setError(response.message || 'Login failed');
        return false;
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during login');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  const submitTOTP = useCallback(async (code: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const response: TOTPResponse = await authApi.verifyTOTP(code);
      
      if (response.success && response.magicLinkSent) {
        setStep('magic-link');
        return true;
      } else if (response.success) {
        setStep('authenticated');
        return true;
      } else {
        setError(response.message || 'TOTP verification failed');
        return false;
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during TOTP verification');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const verifyMagicLink = useCallback(async (token: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const response: MagicLinkResponse = await authApi.verifyMagicLink(token);
      
      if (response.success) {
        setStep('authenticated');
        return true;
      } else {
        setError(response.message || 'Magic link verification failed');
        return false;
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during magic link verification');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setStep('password');
    setError(null);
    setEmail('');
  }, []);

  return {
    step,
    isLoading,
    error,
    email,
    setEmail,
    submitPassword,
    submitTOTP,
    verifyMagicLink,
    reset,
  };
}
