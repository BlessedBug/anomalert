import { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Lock, Eye, EyeOff, Mail, KeyRound, LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/components/Logo';
import { useAuthFlow, AuthStep } from '@/hooks/useAuth';
import { authApi } from '@/lib/api';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const {
    step,
    isLoading,
    error,
    email,
    setEmail,
    submitPassword,
    submitTOTP,
    verifyMagicLink,
    reset,
  } = useAuthFlow();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [totpCode, setTotpCode] = useState('');

  // Check for magic link token in URL
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      handleMagicLinkVerification(token);
    }
  }, [searchParams]);

  // Handle authentication success
  useEffect(() => {
    if (step === 'authenticated') {
      toast({
        title: 'Success',
        description: 'Login successful',
      });
      navigate('/dashboard');
    }
  }, [step, navigate, toast]);

  // Show error toast
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        variant: 'destructive',
      });
    }
  }, [error, toast]);

  const handleMagicLinkVerification = async (token: string) => {
    const success = await verifyMagicLink(token);
    if (!success) {
      navigate('/login', { replace: true });
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitPassword(password);
  };

  const handleTOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitTOTP(totpCode);
  };

  const renderPasswordStep = () => (
    <form onSubmit={handlePasswordSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="analyst@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10"
            required
            minLength={6}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Verifying...' : 'Continue'}
      </Button>
    </form>
  );

  const renderTOTPStep = () => (
    <form onSubmit={handleTOTPSubmit} className="space-y-6">
      <div className="text-center mb-4">
        <KeyRound className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-medium text-foreground">Two-Factor Authentication</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Enter the 6-digit code from your authenticator app
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="totp">Authentication Code</Label>
        <Input
          id="totp"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          placeholder="000000"
          value={totpCode}
          onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, ''))}
          className="text-center text-2xl tracking-widest"
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading || totpCode.length !== 6}>
        {isLoading ? 'Verifying...' : 'Verify Code'}
      </Button>

      <button
        type="button"
        onClick={reset}
        className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Back to login
      </button>
    </form>
  );

  const renderMagicLinkStep = () => (
    <div className="text-center space-y-6">
      <div className="mb-4">
        <LinkIcon className="w-12 h-12 text-primary mx-auto mb-3" />
        <h3 className="text-lg font-medium text-foreground">Check Your Email</h3>
        <p className="text-sm text-muted-foreground mt-1">
          We've sent a secure login link to
        </p>
        <p className="text-foreground font-medium mt-1">{email}</p>
      </div>

      <div className="glass-card p-4 text-sm text-muted-foreground">
        <p>
          Click the link in your email to complete the login process. 
          The link will expire in 10 minutes.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Didn't receive the email?
        </p>
        <Button variant="outline" onClick={reset} className="w-full">
          Try Again
        </Button>
      </div>
    </div>
  );

  const renderAuthenticatingStep = () => (
    <div className="text-center space-y-4">
      <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto" />
      <p className="text-muted-foreground">Completing authentication...</p>
    </div>
  );

  const getStepContent = () => {
    switch (step) {
      case 'password':
        return renderPasswordStep();
      case 'totp':
        return renderTOTPStep();
      case 'magic-link':
        return renderMagicLinkStep();
      case 'authenticated':
        return renderAuthenticatingStep();
      default:
        return renderPasswordStep();
    }
  };

  const getStepIndicator = () => {
    const steps: { key: AuthStep; label: string }[] = [
      { key: 'password', label: 'Password' },
      { key: 'totp', label: 'Verify' },
      { key: 'magic-link', label: 'Confirm' },
    ];

    const currentIndex = steps.findIndex((s) => s.key === step);

    return (
      <div className="flex items-center justify-center gap-2 mb-6">
        {steps.map((s, index) => (
          <div key={s.key} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index <= currentIndex
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-8 h-0.5 ${
                  index < currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="w-full max-w-md relative z-10 mx-auto pt-32 px-4">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3">
            <Logo size={48} />
            <span className="text-2xl font-bold text-foreground">AnomAlert</span>
          </Link>
          <p className="text-muted-foreground mt-2">
            Sign in to your account
          </p>
        </div>

        <div className="glass-card p-8">
          {step !== 'authenticated' && getStepIndicator()}
          {getStepContent()}

          {step === 'password' && (
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Need access?{' '}
              <Link
                to="/contact"
                className="text-primary hover:underline"
              >
                Contact us
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
