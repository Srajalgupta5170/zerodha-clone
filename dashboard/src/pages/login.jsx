import { useState } from "react";
import { login } from "../api/auth";
import "./login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validation
    if (!userId.trim()) {
      setError("Please enter your User ID");
      setLoading(false);
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password");
      setLoading(false);
      return;
    }

    try {
      const { data } = await login({ email: userId, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Left Side - Illustration */}
      <div className="login-left">
        <div className="login-illustration">
          <img
            src="https://zerodha.com/static/images/kite-logo.svg"
            alt="Kite Logo"
            className="kite-logo"
          />
          <h2>Kite</h2>
          <p className="tagline">The investment platform trusted by millions</p>
          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>Advanced charting tools</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Ultra-fast order execution</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Bank-grade security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="login-right">
        <div className="login-container">
          <div className="login-header">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha"
              className="zerodha-logo"
            />
            <h1>Login to Kite</h1>
            <p className="login-subtitle">Enter your credentials to access your trading account</p>
          </div>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="userId">User ID</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="userId"
                  placeholder="Enter your User ID or Email"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔐</span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className={`login-btn ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <span className="spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account?{" "}
              <a href={(process.env.REACT_APP_FRONTEND_URL || "http://localhost:3001") + "/signup"} className="signup-link">
                Open an account
              </a>
            </p>
            <div className="help-links">
              <a href={(process.env.REACT_APP_FRONTEND_URL || "http://localhost:3001") + "/support"}>Need help?</a>
              <span className="divider">|</span>
              <a href={(process.env.REACT_APP_FRONTEND_URL || "http://localhost:3001") + "/about"}>Contact us</a>
            </div>
          </div>

          <div className="security-badge">
            <span className="lock-icon">🔒</span>
            <span>Secured by 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
