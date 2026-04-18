"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function CalculationPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      userInputRef.current?.focus();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulated verification delay
    setTimeout(() => {
      if (username === "Chemsept@123" && password === "Chemsept@2020") {
        setIsAuthenticated(true);
      } else {
        setError("Invalid username or password. Please try again.");
      }
      setIsLoading(false);
    }, 600);
  };

  if (isAuthenticated) {
    return (
      <div className="w-full h-screen bg-gray-100 overflow-hidden">
        {/* The Iframe - Full Screen */}
        <iframe
          src="https://thickness-calculation.vercel.app/"
          className="w-full h-full border-none"
          title="Thickness Calculation"
          allow="fullscreen"
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ 
        background: "linear-gradient(135deg, #0a1432 0%, #1a3a6e 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-fadeIn"
        style={{
          background: "linear-gradient(135deg, #0f2044 0%, #1a3a6e 60%, #0f2044 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {/* Modal header */}
        <div
          className="px-8 pt-6 pb-4 text-center"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Logo */}
          <div className="mx-auto mb-3 flex items-center justify-center">
            <div className="bg-white px-3 py-1.5 rounded-xl shadow-lg border border-white/20">
              <Image
                src="/chemlogo1.png"
                alt="ChemSepT Logo"
                width={100}
                height={36}
                priority
                className="h-auto w-auto object-contain"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white tracking-wide mb-1">Calculation Sheet</h2>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Sign in to access the portal</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="px-8 py-5 flex flex-col gap-4">
          {/* Username */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.4)" }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                ref={userInputRef}
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); setError(""); }}
                placeholder="Enter username"
                required
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm font-medium outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  color: "white",
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "rgba(255,255,255,0.4)" }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="Enter password"
                required
                className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm font-medium outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  color: "white",
                }}
              />
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div
              className="px-3 py-2 rounded-xl text-[13px] font-medium border"
              style={{ background: "rgba(232,93,47,0.18)", borderColor: "rgba(232,93,47,0.4)", color: "#ff9a7a" }}
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl text-sm font-bold tracking-wide uppercase shadow-lg transition-all mt-2"
            style={{
              background: "linear-gradient(135deg, #e85d2f, #ff8c5a)",
              color: "white",
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? "Verifying..." : "Login"}
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={() => window.location.href = "/"}
            className="text-center text-xs font-medium transition-colors mt-2"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
