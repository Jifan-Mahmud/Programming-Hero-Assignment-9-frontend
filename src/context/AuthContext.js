"use client";

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check logged in user status on reload using HTTP-Only cookie / JWT
  const checkAuthStatus = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Login
  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid email or password");
      }

      setUser(data.user);
      toast.success("Welcome back! Login successful.");
      return { success: true, user: data.user };
    } catch (error) {
      toast.error(error.message || "Login failed. Please try again.");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Google Login / Registration
  const loginWithGoogle = async (googleData = {}) => {
    try {
      setLoading(true);
      // Fallback/Simulated Google OAuth user if not provided directly
      const payload = {
        name: googleData.name || "Alex Johnson",
        email: googleData.email || "alex.johnson@student.edu",
        photoURL: googleData.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      };

      const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Google authentication failed");
      }

      setUser(data.user);
      toast.success("Successfully logged in with Google!");
      return { success: true, user: data.user };
    } catch (error) {
      toast.error(error.message || "Google sign-in failed.");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Register
  const register = async (name, email, photoURL, password) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, photoURL, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      toast.success("Registration successful! Please login.");
      return { success: true };
    } catch (error) {
      toast.error(error.message || "Registration failed.");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      setLoading(true);
      await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        loginWithGoogle,
        register,
        logout,
        checkAuthStatus,
        API_BASE_URL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
