import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    pan: "",
    dob: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + "/api/auth/register", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });

      if (response.data.token) {
        setSuccess(true);
        // Redirect to dashboard login after 2 seconds
        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_URL + "/login";
        }, 2000);
      }
    } catch (err) {
      setErrors({
        submit: err.response?.data?.message || "Registration failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="signup-page">
        <div className="success-container">
          <div className="success-icon">✅</div>
          <h2>Account Created Successfully!</h2>
          <p>Redirecting you to login page...</p>
          <div className="success-loader"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Panel */}
        <div className="signup-left">
          <div className="signup-info">
            <h1>Open a Free Demat Account</h1>
            <p className="lead">Join 1.5+ Crore investors who trust Zerodha</p>

            <div className="benefits">
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <div className="benefit-text">
                  <h4>₹0 Account Opening</h4>
                  <p>Free demat account with no annual maintenance charges</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">📈</div>
                <div className="benefit-text">
                  <h4>₹0 Equity Delivery</h4>
                  <p>No brokerage on equity investments</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-text">
                  <h4>Instant Account Opening</h4>
                  <p>100% online KYC with Aadhaar</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">🔒</div>
                <div className="benefit-text">
                  <h4>Secure & Trusted</h4>
                  <p>Registered with SEBI, BSE, NSE & MCX</p>
                </div>
              </div>
            </div>

            <div className="trust-badges">
              <img src="https://zerodha.com/static/images/press-logos/economic-times.svg" alt="ET" />
              <img src="https://zerodha.com/static/images/press-logos/livemint.svg" alt="Livemint" />
              <img src="https://zerodha.com/static/images/press-logos/forbes.svg" alt="Forbes" />
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="signup-right">
          <div className="signup-form-container">
            <div className="form-header">
              <img
                src="https://zerodha.com/static/images/logo.svg"
                alt="Zerodha"
                className="form-logo"
              />
              <h2>Create Your Account</h2>
              <p>Start your investment journey today</p>
            </div>

            {/* Progress Steps */}
            <div className="progress-steps">
              <div className={`step ${step >= 1 ? "active" : ""}`}>
                <div className="step-number">1</div>
                <span>Contact</span>
              </div>
              <div className="step-line"></div>
              <div className={`step ${step >= 2 ? "active" : ""}`}>
                <div className="step-number">2</div>
                <span>Account</span>
              </div>
            </div>

            {errors.submit && (
              <div className="error-banner">
                <span>⚠️</span> {errors.submit}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="form-step">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <div className="input-wrapper">
                      <span className="input-icon">📧</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className={errors.email ? "error" : ""}
                      />
                    </div>
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <div className="input-wrapper phone-input">
                      <span className="country-code">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        maxLength={10}
                        className={errors.phone ? "error" : ""}
                      />
                    </div>
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label>PAN Number (Optional)</label>
                    <div className="input-wrapper">
                      <span className="input-icon">🪪</span>
                      <input
                        type="text"
                        name="pan"
                        value={formData.pan}
                        onChange={handleChange}
                        placeholder="Enter your PAN (e.g., ABCDE1234F)"
                        maxLength={10}
                        style={{ textTransform: "uppercase" }}
                      />
                    </div>
                    <span className="helper-text">Required for KYC verification</span>
                  </div>

                  <button type="button" className="next-btn" onClick={handleNext}>
                    Continue
                    <span className="arrow">→</span>
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="form-step">
                  <div className="form-group">
                    <label>Username *</label>
                    <div className="input-wrapper">
                      <span className="input-icon">👤</span>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Choose a username"
                        className={errors.username ? "error" : ""}
                      />
                    </div>
                    {errors.username && <span className="error-text">{errors.username}</span>}
                  </div>

                  <div className="form-group">
                    <label>Password *</label>
                    <div className="input-wrapper">
                      <span className="input-icon">🔐</span>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a strong password"
                        className={errors.password ? "error" : ""}
                      />
                      <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </button>
                    </div>
                    {errors.password && <span className="error-text">{errors.password}</span>}
                    <div className="password-strength">
                      <div
                        className={`strength-bar ${
                          formData.password.length >= 8
                            ? "strong"
                            : formData.password.length >= 6
                            ? "medium"
                            : formData.password.length > 0
                            ? "weak"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Confirm Password *</label>
                    <div className="input-wrapper">
                      <span className="input-icon">🔐</span>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={errors.confirmPassword ? "error" : ""}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <span className="error-text">{errors.confirmPassword}</span>
                    )}
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                      <span>
                        I agree to the{" "}
                        <a href="/terms" target="_blank">
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" target="_blank">
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <span className="error-text">{errors.agreeTerms}</span>
                    )}
                  </div>

                  <div className="form-buttons">
                    <button type="button" className="back-btn" onClick={handleBack}>
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className={`submit-btn ${loading ? "loading" : ""}`}
                      disabled={loading}
                    >
                      {loading ? <span className="spinner"></span> : "Create Account"}
                    </button>
                  </div>
                </div>
              )}
            </form>

            <div className="form-footer">
              <p>
                Already have an account?{" "}
                <a href={`${process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001'}/login`} className="login-link">
                  Login to Kite
                </a>
              </p>
            </div>

            <div className="security-note">
              <span>🔒</span>
              <span>Your data is protected with 256-bit SSL encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
