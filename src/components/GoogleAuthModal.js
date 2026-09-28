"use client";

import { useState } from "react";
import { X, Check, User, Mail, Image as ImageIcon, Sparkles } from "lucide-react";

export default function GoogleAuthModal({ isOpen, onClose, onGoogleSignIn }) {
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex.johnson@gmail.com");
  const [photoURL, setPhotoURL] = useState(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  );
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handlePresetSelect = (presetName, presetEmail, presetPhoto) => {
    setName(presetName);
    setEmail(presetEmail);
    setPhotoURL(presetPhoto);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await onGoogleSignIn({ name, email, photoURL });
    setSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl max-w-md w-full p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Google Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-2 border border-zinc-200 dark:border-zinc-700">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.75-2.1-6.69-4.93H1.36v3.15C3.34 21.32 7.39 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.31 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.36C.49 8.31 0 10.1 0 12s.49 3.69 1.36 5.42l3.95-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.39 0 3.34 2.68 1.36 6.58l3.95 3.15c.94-2.83 3.58-4.98 6.69-4.98z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
              Google Account Sign-In
            </h3>
            <p className="text-xs text-zinc-500">Sign in to StudyNook using Google</p>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
            Quick Select Google Profile
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() =>
                handlePresetSelect(
                  "Alex Johnson",
                  "alex.johnson@gmail.com",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                )
              }
              className={`p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center gap-2 ${
                email === "alex.johnson@gmail.com"
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-950/60 font-semibold text-teal-700 dark:text-teal-300"
                  : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-[10px]">
                AJ
              </div>
              <div className="truncate">
                <p className="truncate font-bold">Alex Johnson</p>
                <p className="text-[10px] text-zinc-400 truncate">alex.johnson@gmail.com</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() =>
                handlePresetSelect(
                  "Sarah Connor",
                  "sarah.connor@gmail.com",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                )
              }
              className={`p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center gap-2 ${
                email === "sarah.connor@gmail.com"
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-950/60 font-semibold text-teal-700 dark:text-teal-300"
                  : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">
                SC
              </div>
              <div className="truncate">
                <p className="truncate font-bold">Sarah Connor</p>
                <p className="text-[10px] text-zinc-400 truncate">sarah.connor@gmail.com</p>
              </div>
            </button>
          </div>
        </div>

        {/* Custom Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
              Google Account Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
              Google Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
              Google Avatar / Photo URL
            </label>
            <div className="relative">
              <ImageIcon className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm"
              />
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="w-2/3 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md"
            >
              {submitting ? "Signing in..." : "Continue with Google"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
