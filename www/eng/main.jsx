import React from 'react'
import ReactDOM from 'react-dom/client'

        const { useState, useEffect } = React;

        const Heart = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
        const BookOpen = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
        const Wind = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>;
        const TrendingUp = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
        const Palette = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
        const Sparkles = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
        const Zap = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
        const Award = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></svg>;
        const Clock = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></svg>;
        const Settings = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>;
        const Shuffle = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5m0 0v5m0-5l-6 6M9 9L4 4m11 11l6 6m-6 0v-5m0 5h5" /></svg>;
        const Bot = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="10" x="3" y="11" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><circle cx="12" cy="5" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v4M8 16h.01M16 16h.01" /></svg>;
        const RefreshCw = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 4v6h6M23 20v-6h-6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" /></svg>;
        const CheckCircle = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
        const X = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
        const Info = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4M12 8h.01" /></svg>;
        const Key = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>;
        const AlertCircle = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4M12 16h.01" /></svg>;
        const Calendar = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" /></svg>;
        const Lightbulb = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
        const Volume2 = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" /></svg>;
        const Timer = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="13" r="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v5l3 3M9 2h6" /></svg>;
        const Play = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" /></svg>;
        const Pause = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h4v16H6zM14 4h4v16h-4z" /></svg>;
        const RotateCcw = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 4v6h6M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>;
        const Camera = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>;
        const Upload = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>;
        const ImageIcon = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><circle cx="8.5" cy="8.5" r="1.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15l-5-5L5 21" /></svg>;
        const BarChart = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 20V10M12 20V4M6 20v-6" /></svg>;
        const Brain = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 9.75a3.75 3.75 0 015.25 5.25m1.5-8.5a3.75 3.75 0 01-4.5 6m-3.75-3.75A3.75 3.75 0 014.5 15M15 3.75c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5M9 3.75C6.5 3.75 4.5 5.75 4.5 8.25s2 4.5 4.5 4.5" /></svg>;
        const FileText = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>;
        const Trash2 = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" /></svg>;
        const ChevronRight = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
        const HelpCircle = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" /></svg>;
        const MessageCircle = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>;

        // Wellness Icons
        const Flower = ({ className = "w-6 h-6" }) => <span className={`${className} flower`} style={{fontSize: '2.5em'}}>🌺</span>;
        const Butterfly = ({ className = "w-6 h-6" }) => <span className={`${className}`} style={{fontSize: '1.5em'}}>🦋</span>;
        const Leaf = ({ className = "w-6 h-6" }) => <span className={`${className}`} style={{fontSize: '1.5em'}}>✏️</span>;
        const Plant = ({ className = "w-6 h-6" }) => <span className={`${className}`} style={{fontSize: '1.5em'}}>🎼</span>;
        const HealthyFood = ({ className = "w-6 h-6" }) => <span className={`${className}`} style={{fontSize: '1.5em'}}>🎵</span>;
        const User = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
        const UserPlus = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>;
        const LogOut = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;
        const Cloud = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;
        const Share2 = ({ className = "w-6 h-6" }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><circle cx="6" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><circle cx="18" cy="19" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" /></svg>;

        // Initialize Firebase with your configuration
        const firebaseConfig = {
          apiKey: "AIzaSyA6k76_p6x8pBGWKd6dQe5xfDPqBR_tJjc",
          authDomain: "artist-mental-health.firebaseapp.com",
          projectId: "artist-mental-health",
          storageBucket: "artist-mental-health.firebasestorage.app",
          messagingSenderId: "66082074143",
          appId: "1:66082074143:web:7aa589564b946274ad2f2a"
        };

        // Initialize Firebase only if not already initialized
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        const auth = firebase.auth();
        const db = firebase.firestore();

        // Sistema Temi Stagionali
        const getSeasonalTheme = () => {
          const now = new Date();
          const month = now.getMonth() + 1; // 1-12
          const day = now.getDate();

          // Halloween: 10 Oct - 3 Nov (25 days)
          if ((month === 10 && day >= 10) || (month === 11 && day <= 3)) {
            return 'halloween';
          }

          // Christmas: 20 Nov - 8 Jan (50 days)
          if (
            (month === 11 && day >= 20) ||
            (month === 12) ||
            (month === 1 && day <= 8)
          ) {
            return 'christmas';
          }

          // Default: Artists
          return 'artists';
        };

        const themeConfigs = {
          artists: {
            name: 'Artists Edition',
            nameShort: 'Artists',
            colors: {
              primary: 'from-teal-400 to-green-500',
              secondary: 'from-green-300 to-teal-400',
              accent: 'bg-teal-400',
              card: 'from-teal-300 to-green-400',
              cardBorder: 'border-orange-300/50',
              button: 'from-sky-400 to-cyan-500'
            },
            emojis: ['🎵', '🎼', '✨', '🌿', '🦋'],
            particleEmoji: '🎼',
            greeting: 'Creative Wellness Coach for Musicians - Halloween Edition',
            subtitle: '🎼 Wellness Edition 🎼'
          },

          halloween: {
            name: '🎃 Halloween Edition',
            nameShort: 'Halloween',
            colors: {
              primary: 'from-orange-500 to-purple-600',
              secondary: 'from-purple-400 to-orange-500',
              accent: 'bg-orange-500',
              card: 'from-orange-400 to-purple-500',
              cardBorder: 'border-orange-500/50',
              button: 'from-orange-400 to-purple-500'
            },
            emojis: ['🎃', '👻', '🧟', '🎹', '🕷️', '🎵', '🎸', '🎹', '🎺', '🎻', '🦇', '🌙', '💀'],
            particleEmoji: '🎃',
            greeting: '🎃 Creative Wellness Coach for Musicians - Halloween Edition 👻',
            subtitle: '🕷️ Spooky Edition 🕷️',
            activeUntil: 'November 3rd'
          },

          christmas: {
            name: '🎄 Christmas Edition',
            nameShort: 'Christmas',
            colors: {
              primary: 'from-red-500 to-green-600',
              secondary: 'from-green-400 to-red-500',
              accent: 'bg-red-500',
              card: 'from-red-400 to-green-500',
              cardBorder: 'border-red-500/50',
              button: 'from-red-400 to-green-500'
            },
            emojis: ['🎄', '🎅', '⛄', '🎁', '❄️'],
            particleEmoji: '❄️',
            greeting: '🎄 Creative Wellness Coach for Musicians - Christmas Edition 🎅',
            subtitle: '❄️ Holiday Edition ❄️',
            activeUntil: 'January 8th'
          }
        };

        // MOVED OUTSIDE to prevent component re-creation on every render
        const CreativeLabView = ({
          creativeProfile,
          setCreativeProfile,
          saveCreativeProfileData,
          creativeRequest,
          setCreativeRequest,
          analyzeCreativeRequestData,
          creativeAnalyzing,
          creativeLabEntries,
          setCreativeLabEntries,
          setCurrentView,
          setShowApiSetup,
          openClarifications,
          setOpenClarifications
        }) => {
          return (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-purple-700">🎵 Creative Lab AI for Musicians</h2>

              {/* Back to Home Button */}
              <button
                onClick={() => setCurrentView('home')}
                className="mb-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-400 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md border border-orange-300"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                Back to Home
              </button>

              <div className="bg-gradient-to-r from-purple-100/60 to-pink-100/60 border-l-4 border-purple-500 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Bot className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-purple-800 font-semibold mb-1">💡 How Creative Lab AI for Musicians Works</p>
                    <p className="text-purple-700 text-sm">
                      Describe a musical idea, creative block, or challenge you're facing in your musical practice.
                      The AI will analyze your profile and propose <strong>3 personalized strategies</strong> with concrete approaches,
                      necessary techniques, and next steps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Creative Profile Form */}
              {!creativeProfile ? (
                <div className="space-y-4 bg-white/80 p-6 rounded-xl border-2 border-purple-400/50">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">🎹 Set Up Your Creative Profile</h3>
                  <p className="text-purple-600 text-sm mb-6">Answer these questions to receive personalized advice. Fields 5 and 6 are optional.</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">1. How old are you? <span className="text-red-500">*</span></label>
                      <input
                        type="number"
                        id="profile-age"
                        placeholder="e.g., 22"
                        className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">2. What do you study? / What did you study? <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="profile-study"
                        placeholder="e.g., Piano, Voice, Composition, Music Production..."
                        className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">3. At what level? <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="profile-level"
                        placeholder="e.g., 2nd year Bachelor, Pre-academic, Graduate..."
                        className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">4. Techniques/medium you prefer? <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="profile-genres"
                        placeholder="e.g., Classical, Jazz, Electronic, Improvisation..."
                        className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">5. Musical goals (optional)</label>
                      <textarea
                        id="profile-goals"
                        placeholder="e.g., Perform at a concert hall, release an album, become a session musician..."
                        className="w-full h-24 p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">6. Your unique skill/characteristic (optional)</label>
                      <textarea
                        id="profile-unique"
                        placeholder="e.g., Jazz improvisation, sight reading, bowing technique..."
                        className="w-full h-24 p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const age = document.getElementById('profile-age').value;
                      const study = document.getElementById('profile-study').value;
                      const level = document.getElementById('profile-level').value;
                      const genres = document.getElementById('profile-genres').value;
                      const goals = document.getElementById('profile-goals').value;
                      const uniqueSkill = document.getElementById('profile-unique').value;

                      if (!age || !study || !level || !genres) {
                        alert('Please fill in all required fields (1-4)');
                        return;
                      }

                      saveCreativeProfileData({ age, study, level, genres, goals, uniqueSkill });
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                  >
                    ✅ Save Creative Profile
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Show current profile */}
                  <div className="bg-white/80 p-4 rounded-lg border-2 border-purple-300/50">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-purple-700">Your Creative Profile</h4>
                      <button
                        onClick={() => {
                          if (confirm('Do you want to edit your creative profile?')) {
                            setCreativeProfile(null);
                            localStorage.removeItem('creativeProfile');
                          }
                        }}
                        className="text-purple-600 hover:text-purple-800 text-sm underline"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="text-sm text-purple-600 space-y-1">
                      <p><strong>Age:</strong> {creativeProfile.age} years</p>
                      <p><strong>Studies:</strong> {creativeProfile.study}</p>
                      <p><strong>Level:</strong> {creativeProfile.level}</p>
                      <p><strong>Genres:</strong> {creativeProfile.genres}</p>
                      {creativeProfile.goals && <p><strong>Goals:</strong> {creativeProfile.goals}</p>}
                      {creativeProfile.uniqueSkill && <p><strong>Unique skill:</strong> {creativeProfile.uniqueSkill}</p>}
                    </div>
                  </div>

                  {/* Request textarea */}
                  <div>
                    <label className="block text-purple-700 font-semibold mb-2">📝 Describe your creative idea or challenge</label>
                    <textarea
                      value={creativeRequest}
                      onChange={(e) => setCreativeRequest(e.target.value)}
                      placeholder="e.g., I have a creative block and can't develop my project... or: I want to create a cohesive portfolio but don't know where to start..."
                      className="w-full h-40 p-4 border-2 border-purple-400 bg-gray-50/50 text-purple-900 rounded-xl focus:border-purple-500 focus:outline-none resize-none placeholder-purple-400/60"
                    />

                    <button
                      onClick={analyzeCreativeRequestData}
                      disabled={!creativeRequest.trim() || creativeAnalyzing}
                      className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2 relative"
                    >
                      <span className="absolute top-1 right-1 bg-yellow-400 text-gray-800 px-2 py-0.5 rounded text-xs font-bold">API</span>
                      {creativeAnalyzing ? (
                        <>
                          <span className="animate-spin">⚙️</span>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Bot className="w-5 h-5" />
                          Analyze and Generate Strategies
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setShowApiSetup(true)}
                      className="mt-3 px-6 py-3 bg-gradient-to-r from-purple-300 to-pink-400 text-gray-800 rounded-lg hover:opacity-90 transition-opacity border-2 border-purple-400/40 font-semibold flex items-center gap-2"
                    >
                      <Settings className="w-5 h-5" />
                      API Settings 🔮
                    </button>
                  </div>

                  {/* Previous conversations */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-700">💬 Previous Conversations:</h3>
                    {!creativeLabEntries || creativeLabEntries.length === 0 ? (
                      <p className="text-purple-500 italic">No conversations yet. Start exploring!</p>
                    ) : (
                      <div className="space-y-4">
                        {creativeLabEntries.slice().reverse().map((entry, i) => {
                          if (!entry || !entry.date || !entry.request || !entry.response) {
                            return null;
                          }
                          const entryKey = entry.date;
                          return (
                          <div key={entryKey} className="bg-gradient-to-r from-purple-100/60 to-pink-100/60 p-5 rounded-lg border border-purple-400/50 shadow-sm">
                            <p className="text-purple-600 text-sm mb-3 font-semibold">
                              📅 {new Date(entry.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>

                            <div className="mb-4 bg-white/60 p-3 rounded-lg">
                              <p className="text-purple-800 font-semibold text-sm mb-1">Your request:</p>
                              <p className="text-purple-900 text-sm whitespace-pre-wrap">{entry.request}</p>
                            </div>

                            <div className="bg-white/80 p-4 rounded-lg prose prose-sm max-w-none prose-purple">
                              <p className="text-purple-800 font-semibold text-sm mb-2">AI Response:</p>
                              <div
                                className="text-purple-900"
                                dangerouslySetInnerHTML={{
                                  __html: (entry.response || '').replace(/\*\*(.*?)\*\*/g, '$1')
                                                          .replace(/###\s(.*?)(\n|$)/g, '<h3 class="text-lg font-bold mt-4 mb-2 text-purple-700">$1</h3>')
                                                          .replace(/##\s(.*?)(\n|$)/g, '<h2 class="text-xl font-bold mt-4 mb-2 text-purple-800">$1</h2>')
                                                          .replace(/\n/g, '<br />')
                                }}
                              />
                            </div>

                            {/* Clarification Section */}
                            <div className="mt-4 border-t-2 border-purple-200 pt-4">
                              <button
                                onClick={() => {
                                  setOpenClarifications(prev => ({
                                    ...prev,
                                    [entryKey]: !prev[entryKey]
                                  }));
                                }}
                                className="flex items-center gap-2 font-bold text-lg text-purple-700 hover:text-purple-900 transition-colors"
                              >
                                <HelpCircle className="w-5 h-5" />
                                Need clarification?
                                <span className="text-base ml-2">({openClarifications[entryKey] ? '▼' : '▶'})</span>
                              </button>

                              {openClarifications[entryKey] && (
                                <div className="space-y-4 mt-4 animate-fadeIn bg-purple-50/50 p-4 rounded-lg">
                                  <p className="text-purple-700 text-sm">
                                    Have questions about the proposed strategy? Want more details or suggestions on how to adapt it?
                                    Ask the AI coach!
                                  </p>

                                  <div className="space-y-3">
                                    <textarea
                                      id={`clarification-creative-${i}`}
                                      placeholder="E.g.: Can you give me more practical examples for the second strategy? How can I adapt it to my context?"
                                      className="w-full p-4 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:outline-none resize-none bg-white text-purple-800"
                                      rows="3"
                                      disabled={entry.isAskingClarification}
                                    />

                                    <button
                                      onClick={async () => {
                                        const reversedIndex = creativeLabEntries.length - 1 - i;
                                        const textarea = document.getElementById(`clarification-creative-${i}`);
                                        const question = textarea.value.trim();

                                        if (!question) {
                                          alert('Please write a question');
                                          return;
                                        }

                                        const newEntries = [...creativeLabEntries];
                                        newEntries[reversedIndex] = {
                                          ...newEntries[reversedIndex],
                                          isAskingClarification: true
                                        };
                                        setCreativeLabEntries(newEntries);

                                        try {
                                          const apiKey = localStorage.getItem('geminiApiKey');
                                          if (!apiKey) {
                                            alert('API key missing. Configure it in API settings.');
                                            const revertEntries = [...creativeLabEntries];
                                            revertEntries[reversedIndex] = {
                                              ...revertEntries[reversedIndex],
                                              isAskingClarification: false
                                            };
                                            setCreativeLabEntries(revertEntries);
                                            return;
                                          }

                                          const response = await fetch(
                                            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
                                            {
                                              method: 'POST',
                                              headers: { 'Content-Type': 'application/json' },
                                              body: JSON.stringify({
                                                contents: [{
                                                  parts: [{
                                                    text: `Context: I received this musical strategy:\n\n${entry.response}\n\nStudent's question: ${question}\n\nAnswer the question clearly and practically, providing concrete examples and applicable suggestions.`
                                                  }]
                                                }]
                                              })
                                            }
                                          );

                                          if (!response.ok) {
                                            throw new Error(`API Error: ${response.status} ${response.statusText}`);
                                          }

                                          const data = await response.json();
                                          console.log('Clarification API Response:', data);
                                          const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;

                                          if (!answer) {
                                            throw new Error('No response from AI');
                                          }

                                          const updatedEntries = [...creativeLabEntries];
                                          const currentClarifications = updatedEntries[reversedIndex].clarifications || [];
                                          updatedEntries[reversedIndex] = {
                                            ...updatedEntries[reversedIndex],
                                            clarifications: [...currentClarifications, { question, answer, date: new Date().toISOString() }],
                                            isAskingClarification: false
                                          };
                                          textarea.value = '';
                                          setCreativeLabEntries(updatedEntries);
                                          localStorage.setItem('creativeLabEntries', JSON.stringify(updatedEntries));
                                        } catch (error) {
                                          console.error('Error:', error);
                                          alert('Error in request. Check your API key.');
                                          const errorEntries = [...creativeLabEntries];
                                          errorEntries[reversedIndex] = {
                                            ...errorEntries[reversedIndex],
                                            isAskingClarification: false
                                          };
                                          setCreativeLabEntries(errorEntries);
                                        }
                                      }}
                                      disabled={entry.isAskingClarification}
                                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2 relative"
                                    >
                                      <span className="absolute top-1 right-1 bg-yellow-400 text-gray-800 px-2 py-0.5 rounded text-xs font-bold">API</span>
                                      {entry.isAskingClarification ? (
                                        <>
                                          <span className="animate-spin">⚙️</span>
                                          Asking...
                                        </>
                                      ) : (
                                        <>
                                          <MessageCircle className="w-4 h-4" />
                                          Ask for Clarification
                                        </>
                                      )}
                                    </button>
                                  </div>

                                  {entry.clarifications && entry.clarifications.length > 0 && (
                                    <div className="mt-4 space-y-3">
                                      <h4 className="font-semibold text-purple-800 text-sm">Clarifications received:</h4>
                                      {entry.clarifications.map((clarif, ci) => (
                                        <div key={ci} className="bg-white/80 p-3 rounded-lg border border-purple-300">
                                          <p className="text-purple-700 text-xs mb-2">
                                            <strong>Question:</strong> {clarif.question}
                                          </p>
                                          <div className="text-purple-900 text-sm prose prose-sm max-w-none">
                                            <strong>Answer:</strong>
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: clarif.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                                      .replace(/\n/g, '<br />')
                                              }}
                                            />
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        };

        const JournalView = ({
          journalSaved,
          journalEntry,
          setJournalEntry,
          saveJournalEntry,
          journalEntries,
          setCurrentView
        }) => {
          return (
            <div className="space-y-6 relative">
              {journalSaved && (
                <div className="absolute top-0 right-0 bg-green-500 text-gray-800 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-10">
                  <CheckCircle className="w-5 h-5" />
                  Journal saved!
                </div>
              )}

              <h2 className="text-3xl font-bold text-wellness-primary">Your Personal Journal</h2>

              {/* Back to Home Button */}
              <button
                onClick={() => setCurrentView('home')}
                className="mb-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-400 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md border border-orange-300"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                Back to Home
              </button>

              {/* Personal Diary */}
              <div className="space-y-6">
                  <div>
                    <p className="text-orange-600 mb-4">Write thoughts, reflections, personal inspirations. This space is yours alone.</p>

                    <textarea
                      value={journalEntry}
                      onChange={(e) => setJournalEntry(e.target.value)}
                      placeholder="Write freely here... Thoughts on projects, inspirations, doubts, successes..."
                      className="w-full h-64 p-4 border-2 border-orange-600 bg-gray-50/50 text-teal-800 rounded-xl focus:border-orange-300 focus:outline-none resize-none placeholder-orange-400/50"
                    />

                    <button
                      onClick={saveJournalEntry}
                      className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-300 to-amber-400 text-gray-800 rounded-lg hover:opacity-90 transition-opacity border border-orange-300"
                    >
                      💾 Save Entry
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-wellness-accent">Previous Entries:</h3>
                    {journalEntries.length === 0 ? (
                      <p className="text-teal-500 italic">No entries yet. Start writing!</p>
                    ) : (
                      <div className="space-y-3">
                        {journalEntries.slice().reverse().map((e, i) => (
                          <div key={i} className="bg-gradient-to-r from-orange-100/50 to-white/60 p-4 rounded-lg border border-orange-600/50 shadow-sm backdrop-blur-sm">
                            <p className="text-teal-500 text-sm mb-2 font-semibold">
                              📅 {new Date(e.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <p className="text-teal-800 whitespace-pre-wrap">{e.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
            </div>
          );
        };

        const MentalHealthCoachMusica = () => {
          const [currentView, setCurrentView] = useState('home');
          const [moodHistory, setMoodHistory] = useState(() => {
            const saved = localStorage.getItem('moodHistory');
            return saved ? JSON.parse(saved) : [];
          });
          const [journalEntries, setJournalEntries] = useState(() => {
            const saved = localStorage.getItem('journalEntries');
            return saved ? JSON.parse(saved) : [];
          });
          const [creativeLabEntries, setCreativeLabEntries] = useState(() => {
            try {
              const saved = localStorage.getItem('creativeLabEntries');
              return saved ? JSON.parse(saved) : [];
            } catch (error) {
              console.error('Error loading creativeLabEntries:', error);
              localStorage.removeItem('creativeLabEntries');
              return [];
            }
          });
          const [creativeProfile, setCreativeProfile] = useState(() => {
            const saved = localStorage.getItem('creativeProfile');
            return saved ? JSON.parse(saved) : null;
          });
          const [creativeRequest, setCreativeRequest] = useState('');
          const [creativeAnalyzing, setCreativeAnalyzing] = useState(false);
          const [journalEntry, setJournalEntry] = useState('');
          const [currentMood, setCurrentMood] = useState(null);
          const [selectedMoodId, setSelectedMoodId] = useState(null);
          const [plantTarget, setPlantTarget] = useState(null);
          const [plantScared, setPlantScared] = useState(false);
          const [geminiApiKey, setGeminiApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
          const [showApiSetup, setShowApiSetup] = useState(false);
          const [selectedExercise, setSelectedExercise] = useState(null);
          const [selectedCategory, setSelectedCategory] = useState(null);
          const [currentVariant, setCurrentVariant] = useState(null);
          const [exerciseSource, setExerciseSource] = useState('library'); // 'library' or 'api'
          const [useApiForExercises, setUseApiForExercises] = useState(() => {
            const saved = localStorage.getItem('use_api_for_exercises');
            return saved === 'true'; // Default: false (use offline)
          });
          const [isGenerating, setIsGenerating] = useState(false);
          const [showExamples, setShowExamples] = useState(false);
          const [exerciseCompleted, setExerciseCompleted] = useState(false);
          const [exerciseTab, setExerciseTab] = useState('library'); // 'library' | 'ai-generate'

          const [timerActive, setTimerActive] = useState(false);
          const [timerSeconds, setTimerSeconds] = useState(0);
          const [timerDuration, setTimerDuration] = useState(0);
          const [uploadedImages, setUploadedImages] = useState(() => {
            const saved = localStorage.getItem('uploadedImages');
            return saved ? JSON.parse(saved) : [];
          });
          const [showInsights, setShowInsights] = useState(false);
          const [generatingReport, setGeneratingReport] = useState(false);
          const [uploadSuccess, setUploadSuccess] = useState(false);
          const [lastUploadedImage, setLastUploadedImage] = useState(null);
          const [journalSaved, setJournalSaved] = useState(false);
          const clarificationQuestionRef = React.useRef('');
          const [clarificationAnswer, setClarificationAnswer] = useState('');
          const [isAskingClarification, setIsAskingClarification] = useState(false);
          const [showClarification, setShowClarification] = useState(false);
          const [openClarifications, setOpenClarifications] = useState({});
          const [apiKeySaved, setApiKeySaved] = useState(false);
          const [successMessage, setSuccessMessage] = useState({ show: false, message: '', type: 'success' });
          const [savedReports, setSavedReports] = useState(() => {
            const saved = localStorage.getItem('aiReports');
            return saved ? JSON.parse(saved) : [];
          });
          const [showReportModal, setShowReportModal] = useState(false);
          const [currentReport, setCurrentReport] = useState(null);
          const [showGuide, setShowGuide] = useState(false);
          const [showContactForm, setShowContactForm] = useState(false);

          // Stati profilo utente (localStorage - for guest mode)
          const [userProfile, setUserProfile] = useState(() => {
            const saved = localStorage.getItem('userProfile');
            return saved ? JSON.parse(saved) : null;
          });
          const [showProfileModal, setShowProfileModal] = useState(false);
          const [showProfileBenefits, setShowProfileBenefits] = useState(false);

          // Stati Firebase Authentication
          const [firebaseUser, setFirebaseUser] = useState(null);
          const [authLoading, setAuthLoading] = useState(true);
          const [showFirebaseAuth, setShowFirebaseAuth] = useState(false);
          const [useCloudSync, setUseCloudSync] = useState(false);

          // Sistema Tema Stagionale - Sempre rilevamento automatico dal calendario
          const detectedTheme = getSeasonalTheme(); // 'halloween', 'christmas', o 'artists'

          // Switch per usare tema speciale o forzare Artists
          const [useSeasonalTheme, setUseSeasonalTheme] = useState(() => {
            const saved = localStorage.getItem('use_seasonal_theme');
            return saved !== 'false'; // default: true (usa tema dal calendario)
          });

          const currentThemeKey = useSeasonalTheme ? detectedTheme : 'artists';
          const currentTheme = themeConfigs[currentThemeKey];

          // Smart Review Prompt System
          const [showReviewPrompt, setShowReviewPrompt] = useState(false);
          const [exercisesCompleted, setExercisesCompleted] = useState(() => {
            return parseInt(localStorage.getItem('exercises_completed') || '0');
          });
          const [firstUseDate, setFirstUseDate] = useState(() => {
            const saved = localStorage.getItem('first_use_date');
            if (!saved) {
              const now = Date.now();
              localStorage.setItem('first_use_date', now.toString());
              return now;
            }
            return parseInt(saved);
          });

          // AI is available with user's own API key
          const canUseAI = geminiApiKey.trim() !== '';

          useEffect(() => {
            localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
          }, [moodHistory]);

          useEffect(() => {
            localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
          }, [journalEntries]);

          useEffect(() => {
            localStorage.setItem('creativeLabEntries', JSON.stringify(creativeLabEntries));
          }, [creativeLabEntries]);

          useEffect(() => {
            if (creativeProfile) {
              localStorage.setItem('creativeProfile', JSON.stringify(creativeProfile));
            }
          }, [creativeProfile]);

          useEffect(() => {
            localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));
          }, [uploadedImages]);

          useEffect(() => {
            localStorage.setItem('aiReports', JSON.stringify(savedReports));
          }, [savedReports]);

          // Salva profilo utente locale
          useEffect(() => {
            if (userProfile) {
              localStorage.setItem('userProfile', JSON.stringify(userProfile));
            }
          }, [userProfile]);

          // Monitor autenticazione Firebase
          useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged(async (user) => {
              console.log('🔥 Firebase Auth State:', user ? user.email : 'No user');
              setFirebaseUser(user);
              setAuthLoading(false);

              // If user is logged in, load data from Firestore
              if (user) {
                setUseCloudSync(true);
                try {
                  const userDoc = await db.collection('users').doc(user.uid).get();
                  if (userDoc.exists) {
                    const data = userDoc.data();
                    console.log('📥 Loaded data from cloud:', data);
                    if (data.moodHistory) setMoodHistory(data.moodHistory);
                    if (data.journalEntries) setJournalEntries(data.journalEntries);
                    if (data.creativeLabEntries) setCreativeLabEntries(data.creativeLabEntries);
                    if (data.creativeProfile) setCreativeProfile(data.creativeProfile);
                    if (data.uploadedImages) setUploadedImages(data.uploadedImages);
                    if (data.savedReports) setSavedReports(data.savedReports);
                  }
                } catch (err) {
                  console.error('Error loading data:', err);
                }
              }
            });
            return () => unsubscribe();
          }, []);

          // Synchronize moodHistory to Firestore when user is logged in
          useEffect(() => {
            if (firebaseUser && useCloudSync && moodHistory.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                moodHistory: moodHistory
              }, { merge: true })
              .then(() => console.log('💾 moodHistory synchronized'))
              .catch(err => console.error('Error syncing moodHistory:', err));
            }
          }, [moodHistory, firebaseUser, useCloudSync]);

          // Synchronize journalEntries to Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && journalEntries.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                journalEntries: journalEntries
              }, { merge: true })
              .then(() => console.log('💾 journalEntries synchronized'))
              .catch(err => console.error('Error syncing journalEntries:', err));
            }
          }, [journalEntries, firebaseUser, useCloudSync]);

          // Synchronize creativeLabEntries to Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && creativeLabEntries.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                creativeLabEntries: creativeLabEntries
              }, { merge: true })
              .then(() => console.log('💾 creativeLabEntries synchronized'))
              .catch(err => console.error('Error syncing creativeLabEntries:', err));
            }
          }, [creativeLabEntries, firebaseUser, useCloudSync]);

          // Synchronize creativeProfile to Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && creativeProfile) {
              db.collection('users').doc(firebaseUser.uid).set({
                creativeProfile: creativeProfile
              }, { merge: true })
              .then(() => console.log('💾 creativeProfile synchronized'))
              .catch(err => console.error('Error syncing creativeProfile:', err));
            }
          }, [creativeProfile, firebaseUser, useCloudSync]);

          // Synchronize uploadedImages to Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && uploadedImages.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                uploadedImages: uploadedImages
              }, { merge: true })
              .then(() => console.log('💾 uploadedImages synchronized'))
              .catch(err => console.error('Error syncing uploadedImages:', err));
            }
          }, [uploadedImages, firebaseUser, useCloudSync]);

          // Synchronize savedReports to Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && savedReports.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                savedReports: savedReports
              }, { merge: true })
              .then(() => console.log('💾 savedReports synchronized'))
              .catch(err => console.error('Error syncing savedReports:', err));
            }
          }, [savedReports, firebaseUser, useCloudSync]);

          useEffect(() => {
            console.log('geminiApiKey changed:', geminiApiKey ? 'PRESENT (' + geminiApiKey.substring(0, 10) + '...)' : 'ABSENT');
          }, [geminiApiKey]);

          useEffect(() => {
            let interval;
            if (timerActive && timerSeconds > 0) {
              interval = setInterval(() => {
                setTimerSeconds(prev => {
                  if (prev <= 1) {
                    setTimerActive(false);
                    playSound();
                    showNotification('Timer completed!', 'Your exercise time is up.');
                    return 0;
                  }
                  return prev - 1;
                });
              }, 1000);
            }
            return () => clearInterval(interval);
          }, [timerActive, timerSeconds]);


          const playSound = () => {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
          };

          const showNotification = (title, body) => {
            if ('Notification' in window && Notification.permission === 'granted') {
              new Notification(title, { body, icon: '🎵' });
            } else if ('Notification' in window && Notification.permission !== 'denied') {
              Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                  new Notification(title, { body, icon: '🎵' });
                }
              });
            }
          };

          const showSuccessMessage = (message, duration = 2000) => {
            setSuccessMessage({ show: true, message, type: 'success' });
            setTimeout(() => setSuccessMessage({ show: false, message: '', type: 'success' }), duration);
          };

          const parseDuration = (durationStr) => {
            const match = durationStr.match(/(\d+)\s*(min|sec|h)/i);
            if (!match) return 300;
            const value = parseInt(match[1]);
            const unit = match[2].toLowerCase();
            if (unit === 'sec') return value;
            if (unit === 'min') return value * 60;
            if (unit === 'h') return value * 3600;
            return 300;
          };

          const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs.toString().padStart(2, '0')}`;
          };

          const startTimer = (duration) => {
            const seconds = parseDuration(duration);
            setTimerDuration(seconds);
            setTimerSeconds(seconds);
            setTimerActive(true);
            showNotification('Timer started!', `Timer set for ${duration}`);
          };

          const pauseTimer = () => {
            setTimerActive(false);
          };

          const resumeTimer = () => {
            setTimerActive(true);
          };

          const resetTimer = () => {
            setTimerActive(false);
            setTimerSeconds(0);
            setTimerDuration(0);
          };

          const resizeImage = (file, maxWidth = 300, maxHeight = 300) => {
            console.log('resizeImage called for file:', file.name, 'type:', file.type, 'size:', file.size, 'bytes');

            return new Promise((resolve, reject) => {
              const reader = new FileReader();

              reader.onload = (e) => {
                console.log('FileReader completato');
                const dataUrl = e.target.result;

                const img = new window.Image();

                img.onload = () => {
                  try {
                    console.log('Image loaded, original dimensions:', img.width, 'x', img.height);

                    if (img.width <= maxWidth && img.height <= maxHeight) {
                      console.log('Image already small enough, using original');
                      resolve(dataUrl);
                      return;
                    }

                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    const ratio = Math.min(maxWidth / width, maxHeight / height);
                    width = Math.floor(width * ratio);
                    height = Math.floor(height * ratio);

                    console.log('Ridimensiono a:', width, 'x', height);

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d', { alpha: false });
                    if (!ctx) {
                      console.error('Impossibile ottenere context 2d');
                      resolve(dataUrl);
                      return;
                    }

                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillRect(0, 0, width, height);
                    ctx.drawImage(img, 0, 0, width, height);

                    console.log('Converting to JPEG...');
                    const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    console.log('OK! Final size:', resizedDataUrl.length, 'characters');
                    resolve(resizedDataUrl);

                  } catch (err) {
                    console.error('Error during resize:', err);
                    console.log('Using original image as fallback');
                    resolve(dataUrl);
                  }
                };

                img.onerror = () => {
                  console.error('Error loading image, using original dataUrl');
                  resolve(dataUrl);
                };

                img.src = dataUrl;
              };

              reader.onerror = (err) => {
                console.error('Error reading file:', err);
                reject(new Error('Unable to read file'));
              };

              reader.readAsDataURL(file);
            });
          };

          const handleImageUpload = async (file) => {
            console.log('handleImageUpload called, geminiApiKey:', geminiApiKey ? 'PRESENT' : 'ABSENT');

            if (!geminiApiKey || geminiApiKey.trim() === '') {
              console.log('API key missing, opening configuration modal');
              alert('⚠️ API Key required! Please configure your API key first to upload images.');
              setShowApiSetup(true);
              return;
            }

            const validTypes = ['image/', '.heic', '.heif'];
            const isValid = validTypes.some(type =>
              file.type.startsWith(type) || file.name.toLowerCase().endsWith(type)
            );

            if (!file || !isValid) {
              alert('⚠️ Please upload a valid image file (jpg, png, heic, etc.)');
              return;
            }

            try {
              console.log('Starting image upload and resize...');
              setIsGenerating(true);

              const resizedDataUrl = await resizeImage(file);
              console.log('Image resized, starting AI analysis...');

              const imageData = {
                id: Date.now(),
                dataUrl: resizedDataUrl,
                uploadDate: new Date().toISOString(),
                exerciseId: selectedExercise,
                exerciseTitle: currentVariant?.title || 'Exercise',
                aiComment: null
              };

              try {
                console.log('Calling generateImageComment...');
                const comment = await generateImageComment(resizedDataUrl);
                console.log('Comment received:', comment ? 'YES' : 'NO');
                imageData.aiComment = comment;
              } catch (error) {
                console.error('Error generating comment:', error);
                imageData.aiComment = 'Error: ' + error.message;
              }

              setUploadedImages(prev => [imageData, ...prev]);
              setLastUploadedImage(imageData);
              setUploadSuccess(true);
              setTimeout(() => {
                setUploadSuccess(false);
                setLastUploadedImage(null);
              }, 10000);
              console.log('Upload completed successfully!');
            } catch (error) {
              console.error('Image upload error:', error);
              alert('❌ Error during image upload: ' + error.message);
            } finally {
              setIsGenerating(false);
            }
          };

          const generateImageComment = async (imageDataUrl) => {
            console.log('generateImageComment called');

            if (!geminiApiKey) {
              console.log('No API key, returning null');
              return null;
            }

            try {
              const base64Image = imageDataUrl.split(',')[1];
              console.log('Base64 estratto, lunghezza:', base64Image.length);

              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 15000);

              // Build prompt with exercise context
              const exerciseContext = currentVariant
                ? `\n\nEXERCISE CONTEXT:\nTitle: ${currentVariant.title}\nTask: ${currentVariant.prompt}\nDuration: ${currentVariant.duration}`
                : '';

              console.log('Invio richiesta a Gemini API...');
              const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${geminiApiKey}`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  signal: controller.signal,
                  body: JSON.stringify({
                    contents: [{
                      parts: [
                        {
                          text: `You are a conservatory professor and professional musician with a sense of humor, specialized in giving feedback to music students and musicians.

TASK: Analyze this musical material (sheet music, instrument photo, annotations, setup, practice photo) HONESTLY but constructively.${exerciseContext}

RESPONSE STRUCTURE (max 5 sentences, natural language):

1. EVALUATE RELEVANCE: If the image does NOT correspond at all to the exercise request (e.g., asked for improvisation score, sent landscape photo), start with a light IRONIC/PLAYFUL comment (e.g., "Nice photo... but where's the music? 😄"). If it's relevant, skip this point.

2. OBJECTIVE ANALYSIS: Describe what you see in the material in a technical/musical way. Be HONEST: if something doesn't work musically, say it clearly but respectfully (e.g., "The fingering could be more efficient" or "The harmony seems confusing").

3. WHAT WORKS: Find at least ONE specific positive element (musical idea, technical approach, notation, creativity, setup, etc.).

4. CONSTRUCTIVE SUGGESTION: Propose ONE concrete direction to develop/improve the musical work. If the material is off-topic, suggest how it could be reinterpreted musically.

5. MOTIVATING CLOSURE: Conclude with genuine encouragement related to the musical journey.

TONE: Direct, honest, professional but friendly. If the material is off-topic, use LIGHT irony at the beginning, then become serious and constructive.

DON'T use labels like "Analysis:", "Suggestion:", etc. Write in a fluid and conversational manner.`
                        },
                        {
                          inline_data: {
                            mime_type: "image/jpeg",
                            data: base64Image
                          }
                        }
                      ]
                    }],
                    generationConfig: {
                      temperature: 0.7,
                      maxOutputTokens: 500,
                    }
                  })
                }
              );

              clearTimeout(timeoutId);
              console.log('Response received, status:', response.status);

              if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error:', response.status, errorText);
                throw new Error(`API Error: ${response.status} - ${errorText}`);
              }

              const data = await response.json();
              console.log('Dati parsati:', data);
              const comment = data.candidates[0].content.parts[0].text;
              console.log('Commento estratto:', comment);
              return comment;
            } catch (error) {
              console.error('Error generating image comment:', error);
              if (error.name === 'AbortError') {
                return 'Timeout: comment generation took too long. Image saved anyway! 🎵';
              }
              return 'Analysis error: ' + error.message;
            }
          };

          const deleteImage = (imageId) => {
            if (confirm('Are you sure you want to delete this image?')) {
              setUploadedImages(prev => prev.filter(img => img.id !== imageId));
            }
          };

          const calculateMoodStats = () => {
            if (moodHistory.length === 0) return null;

            const moodCounts = moodHistory.reduce((acc, entry) => {
              acc[entry.mood] = (acc[entry.mood] || 0) + 1;
              return acc;
            }, {});

            const totalMoods = moodHistory.length;
            const avgMood = moodHistory.reduce((sum, entry) => sum + entry.mood, 0) / totalMoods;

            const now = new Date();
            const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
            const fourteenDaysAgo = new Date(now - 14 * 24 * 60 * 60 * 1000);

            const recentMoods = moodHistory.filter(m => new Date(m.date) >= sevenDaysAgo);
            const previousMoods = moodHistory.filter(m => {
              const d = new Date(m.date);
              return d >= fourteenDaysAgo && d < sevenDaysAgo;
            });

            const recentAvg = recentMoods.length > 0
              ? recentMoods.reduce((sum, m) => sum + m.mood, 0) / recentMoods.length
              : avgMood;
            const previousAvg = previousMoods.length > 0
              ? previousMoods.reduce((sum, m) => sum + m.mood, 0) / previousMoods.length
              : avgMood;

            const trend = recentAvg - previousAvg;

            return { moodCounts, avgMood, trend, recentMoods, totalMoods };
          };

          const findMoodPatterns = () => {
            const stats = calculateMoodStats();
            if (!stats) return [];

            const patterns = [];

            const dayOfWeekMoods = {};
            moodHistory.forEach(entry => {
              const day = new Date(entry.date).getDay();
              if (!dayOfWeekMoods[day]) dayOfWeekMoods[day] = [];
              dayOfWeekMoods[day].push(entry.mood);
            });

            const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayAverages = Object.entries(dayOfWeekMoods).map(([day, moods]) => ({
              day: dayNames[day],
              avg: moods.reduce((a, b) => a + b, 0) / moods.length
            })).sort((a, b) => a.avg - b.avg);

            if (dayAverages.length > 0) {
              const worstDay = dayAverages[0];
              const bestDay = dayAverages[dayAverages.length - 1];
              if (worstDay.avg < 3) {
                patterns.push({
                  type: 'warning',
                  title: `${worstDay.day} is your most difficult day`,
                  description: `Average mood: ${worstDay.avg.toFixed(1)}/5`
                });
              }
              if (bestDay.avg > 3.5) {
                patterns.push({
                  type: 'positive',
                  title: `${bestDay.day} is your best day`,
                  description: `Average mood: ${bestDay.avg.toFixed(1)}/5`
                });
              }
            }

            let currentStreak = 0;
            let maxStreak = 0;
            moodHistory.slice().reverse().forEach(entry => {
              if (entry.mood >= 3) {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
              } else {
                currentStreak = 0;
              }
            });

            if (maxStreak >= 3) {
              patterns.push({
                type: 'positive',
                title: `Streak of ${maxStreak} positive days!`,
                description: 'You are maintaining a high mood'
              });
            }

            return patterns;
          };

          const generateAIReport = async () => {
            if (!geminiApiKey) {
              setShowApiSetup(true);
              return null;
            }

            const stats = calculateMoodStats();
            if (!stats) {
              alert('⚠️ Track at least one mood to generate a report');
              return null;
            }

            // Rate limiter: 5 seconds between requests
            const now = Date.now();
            const timeSinceLastRequest = now - lastApiRequestTime;
            if (timeSinceLastRequest < 5000) {
              const waitSeconds = Math.ceil((5000 - timeSinceLastRequest) / 1000);
              alert(`⏱️ Wait ${waitSeconds} seconds before generating another report`);
              return null;
            }


            setGeneratingReport(true);

            try {
              const patterns = findMoodPatterns();

              const prompt = `You are a psychologist specialized in support for Music Students and Musicians. Analyze this data and write an empathetic and motivating report:

Data:
- ${stats.totalMoods} mood recordings in recent days
- Average mood: ${stats.avgMood.toFixed(1)}/5
- Trend: ${stats.trend > 0 ? 'improving' : stats.trend < 0 ? 'declining' : 'stable'}
- Identified patterns: ${patterns.map(p => p.title).join(', ') || 'none'}
- Number of uploaded images: ${uploadedImages.length}
- Journal entries: ${journalEntries.length}

Write a fluid and natural report that includes:
- An observation on your general emotional state
- What is going well in your journey
- Aspects to keep an eye on
- Practical and personalized advice for improvement

IMPORTANT: Write in a conversational and direct way. DO NOT use labels like "Summary:", "Strengths:", "Areas to monitor:", "Recommendations:". Write the text fluidly as if you were speaking directly to the person. Don't start with meta-textual phrases like "Here's an analysis" or "Based on the data". Start directly with the content. Be empathetic, positive but realistic. Max 300 words.`;

              console.log('🔄 Generazione report AI...');
              console.log('📊 Stats:', stats);
              console.log('📈 Patterns:', patterns);

              const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${geminiApiKey}`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                      temperature: 0.8,
                      maxOutputTokens: 1000,
                    }
                  })
                }
              );

              console.log('📍 Response status:', response.status);

              if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('❌ API Error:', errorData);
                throw new Error(`API Error: ${response.status}`);
              }

              const data = await response.json();
              console.log('✅ Dati ricevuti:', data);

              const report = data.candidates[0].content.parts[0].text;
              console.log('✅ Report generated successfully');


              setGeneratingReport(false);
              return report;
            } catch (error) {
              console.error('💥 Report generation error:', error);
              alert(`⚠️ Error generating report:\n\n${error.message}\n\nCheck the console (F12) for details.`);
              setGeneratingReport(false);
              return null;
            }
          };

          const moods = [
            { id: 1, name: 'Inspired', emoji: '🎵', color: 'bg-green-400' },
            { id: 2, name: 'Creative', emoji: '✨', color: 'bg-blue-400' },
            { id: 3, name: 'Happy', emoji: '😊', color: 'bg-green-400' },
            { id: 4, name: 'Energetic', emoji: '⚡', color: 'bg-yellow-400' },
            { id: 5, name: 'Spectral', emoji: '🎵', color: 'bg-amber-400' },
            { id: 6, name: 'Calm', emoji: '😌', color: 'bg-teal-400' },
            { id: 7, name: 'Neutral', emoji: '😐', color: 'bg-gray-400' },
            { id: 8, name: 'Anxious', emoji: '😰', color: 'bg-yellow-300' },
            { id: 9, name: 'Sad', emoji: '😢', color: 'bg-blue-300' },
            { id: 10, name: 'Blocked', emoji: '😟', color: 'bg-teal-300' },
            { id: 11, name: 'Frustrated', emoji: '😤', color: 'bg-rose-400' },
            { id: 12, name: 'Exhausted', emoji: '😫', color: 'bg-rose-300' },
            { id: 13, name: 'Melancholic', emoji: '😔', color: 'bg-indigo-300' },
            { id: 14, name: 'Motivated', emoji: '🔥', color: 'bg-teal-600' },
            { id: 15, name: 'Scared', emoji: '🎼', color: 'bg-green-500' }
          ];

          const exerciseVariants = {
            'esercizi-spettrali': [
              {
                title: "🌙 Candlelight Improvisation",
                description: "Create in darkness to free your creative unconscious",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Turn off all lights. Use only a candle. Improvise what the shadows suggest to you for 20 minutes.",
                duration: "20 min",
                examples: [
                  "🕯️ Example 1: Observe shadows on the wall and improvise sounds without thinking, let your hands follow instinct",
                  "👤 Example 2: Record yourself improvising, listen only to the emotional shadow, not technical perfection",
                  "🌑 Example 3: Compose a short piece inspired by a recent dream or nightmare in the flickering candlelight"
                ]
              },
              {
                title: "🎼 Spectral Automatic Writing",
                description: "Let the unconscious write through you",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Write for 10 minutes without stopping, without thinking, without rereading. The pen should never leave the paper.",
                duration: "10 min",
                examples: [
                  "✍️ Example 1: Start with 'In the darkest night...' and continue without censorship",
                  "📝 Example 2: Write a letter to your deepest fear, let everything emerges",
                  "🌙 Example 3: Describe an unsettling imaginary place where you'd like to create music"
                ]
              },
              {
                title: "🩸 Music with Unusual Techniques",
                description: "Use unconventional elements to create mysterious sounds",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a piece using only unusual techniques or prepared instruments (found objects, extended techniques, unconventional approaches).",
                duration: "30 min",
                examples: [
                  "🍂 Example 1: Create rhythmic patterns using dry leaves, stones and natural objects",
                  "🌿 Example 2: Prepare your instrument with paper, clips, or rubber bands to alter the sound",
                  "🪨 Example 3: Ephemeral composition with ambient sounds recorded in nature"
                ]
              },
              {
                title: "🦋 Total Inversion",
                description: "Do everything backwards to surprise the mind",
                interactionType: "visual",
                prompt: "Work in reverse: play melody backwards, compose from ending to beginning, record and reverse playback.",
                duration: "15 min",
                examples: [
                  "⬅️ Example 1: Compose a melody and play it in reverse, from last notes to first",
                  "🔄 Example 2: Record an improvisation and play it backwards to discover hidden structures",
                  "🎵 Example 3: Play your instrument with your non-dominant hand or in an unconventional position"
                ]
              },
              {
                title: "🍃 Creative Memento Mori",
                description: "Reflect on mortality to appreciate creative life",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a piece representing passing time, fragility, transformation. 25 minutes of deep reflection.",
                duration: "25 min",
                examples: [
                  "⏳ Example 1: Progressive composition that gradually fades into silence over time",
                  "🍂 Example 2: Sound collage with recordings from different periods of your life",
                  "🕰️ Example 3: Series of short variations showing musical aging or transformation"
                ]
              },
              {
                title: "🌿 Spider's Web: Hidden Connections",
                description: "Discover secret links between seemingly distant ideas",
                interactionType: "visual",
                prompt: "Choose 5 random words. Create a composition that connects them all in a surreal and unexpected way.",
                duration: "20 min",
                examples: [
                  "🎹 Example 1: Words: moon, scissors, memory, salt, mirror → Abstract sonic narrative",
                  "🎶 Example 2: Words: blood, feathers, book, stairs, glass → Mysterious soundscape",
                  "📖 Example 3: Words: shadow, key, ocean, smoke, rose → Musical micro-story"
                ]
              },
              {
                title: "🎵 Dark Transformation",
                description: "Take something familiar and make it unsettling",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose an innocent melody or sound. Transform it to make it mysterious, disturbing but fascinating.",
                duration: "30 min",
                examples: [
                  "🧸 Example 1: A children's lullaby played with distorted harmonies and unsettling rhythm",
                  "🏠 Example 2: A familiar tune deconstructed with unexpected dissonances and silences",
                  "🎪 Example 3: Childhood songs arranged in a surreal and symbolic way"
                ]
              },
              {
                title: "🌑 Musical Portrait of the Inner Shadow",
                description: "Explore the dark side of creative personality",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose a piece representing your 'shadow side' - the part of you that you hide. Be honest and courageous.",
                duration: "25 min",
                examples: [
                  "😈 Example 1: Split composition: half 'polished performance', half 'raw improvisation'",
                  "🎹 Example 2: Musical mask representing how you present yourself vs. your true musical voice",
                  "👥 Example 3: Two contrasting themes: your public musical self and private self"
                ]
              },
              {
                title: "🕯️ Nocturnal Creative Ritual",
                description: "Create a small musical ritual to honor creativity",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a sacred space for your music: candles, meaningful objects, ambient sounds. Work in this 'personal temple'.",
                duration: "40 min",
                examples: [
                  "🔮 Example 1: Musical altar with instrument, past recordings, personal symbols - create in this space",
                  "🌙 Example 2: 5 min meditation + 35 min intuitive improvisation in a space prepared with intention",
                  "✨ Example 3: Light candles for each completed project, create something new by their light"
                ]
              },
              {
                title: "🦴 Archaeology of the Soul",
                description: "Dig into buried memories and emotions",
                interactionType: "visual",
                prompt: "Find an old photo of yourself as a child. Create a piece that dialogues with that child, with their forgotten dreams.",
                duration: "30 min",
                examples: [
                  "👶 Example 1: Compose a melody using only notes that evoke your childhood memories",
                  "💭 Example 2: Musical letter to your child self: what would you tell them now?",
                  "🎵 Example 3: Create what that child would have wanted to play but couldn't"
                ]
              },
,
              {
                title: "🌌 Nocturnal Cosmic Drone",
                description: "Create paesaggi sonori ipnotici and misteriosi",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a drone of 15 minutes usando harmonics, overtones or sounds sostenuti. Explore microvariazioni timbral.",
                duration: "25 min",
                examples: [
                  "🎹 Example 1: Pedal thennt to the piano with harmonics overlapped that evolvono slowly",
                  "🎻 Example 2: Strings with longssime bow strokes, microintervals and nuances of vibrato",
                  "🎺 Example 3: Winds with notes sustained and multiphonics that create beats harmonics"
                ]
              },
              {
                title: "🕷️ Field Recording Misterioso",
                description: "Record sounds ambientali in places insoliti",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Go in a place unsettling (cimitero, abandoned building, nocturnal forest) and record 20 minutes of natural sounds.",
                duration: "35 min",
                examples: [
                  "🏚️ Example 1: Record scricchiolii, vento, echoes in a building void",
                  "🌲 Example 2: Suoni notturni in the forest: rustles, animali, silence denso",
                  "⛪ Example 3: Riverberazione naturale in chiese, tunnel or caves"
                ]
              },
              {
                title: "🎹 Prepared Instrument Ritual",
                description: "Prepara the tuo instrument with oggetti insoliti",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Insert oggetti on the/nello instrument (viti, carta, mollette). Explore the nuovi timbres for 30 minutes.",
                duration: "30 min",
                examples: [
                  "🎹 Example 1: Piano preparato style John Cage with viti, gomme, feltri",
                  "🎸 Example 2: Guitar with oggetti tra the strings (fermagli, carte, monete)",
                  "🥁 Example 3: Percussioni with tessuti, chains or oggetti metallici appoggiati"
                ]
              },
              {
                title: "🌑 Composition from the Sogno Oscuro",
                description: "Trasforma a nightmare recente in musica",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Remember a dream or nightmare recente. Traduci the sue immagini, emotions and atmospheres in a piece of 5 minutes.",
                duration: "40 min",
                examples: [
                  "😱 Example 1: Incubo of caduta → glissandi discendenti and cluster dissonanti",
                  "👻 Example 2: Presenza unsettling → pedal thennt obsessive with melodies frammentate",
                  "🌀 Example 3: Labirinto dreamlike → canon circolare without risoluzione"
                ]
              },
              {
                title: "🦇 Improvisation in Total Darkness",
                description: "Play completely in darkness without seesre the instrument",
                interactionType: "visual",
                prompt: "Blindfold gli occhi or spegni all the luci. Improvise for 20 minutes guidato only from the tatto and dall'udito.",
                duration: "20 min",
                examples: [
                  "🎹 Example 1: Pianista explore the keyboard by the cieca, scoprendo nuove posizioni",
                  "🎸 Example 2: Chitarrista find accordature and pattern only to the tatto",
                  "🎺 Example 3: Strumentista a fiato explore alternative fingerings without vista"
                ]
              },
              {
                title: "🕸️ Dark Orchestral Texture",
                description: "Build layers of dense and unsettling sounds",
                interactionType: "visual",
                prompt: "Record 8-10 separated layers of sounds and overlay them creating a dense texture, mysterious and enveloping.",
                duration: "45 min",
                examples: [
                  "🎼 Example 1: Layer of breaths, rustles, notes sustained, atonal clusters",
                  "🌫️ Example 2: Overlay of drones, glissandi, prepared noises",
                  "🌊 Example 3: Sonic masses with long reverbs and complex dissonances"
                ]
              },
              {
                title: "🔮 Musical Divination",
                description: "Use the chance to compose (I Ching, tarot, dice)",
                interactionType: "visual",
                prompt: "Roll dice, cards or use a aleatory method to decide pitches, durations, dynamics. Compose following the fate.",
                duration: "30 min",
                examples: [
                  "🎲 Example 1: 12-sided die for notes (do=1, do#=2...), 6-sided die for durations",
                  "🃏 Example 2: Tarot: each major arcanum = a musical emotion to translate",
                  "📖 Example 3: I Ching hexagrams determine formal structure and sections"
                ]
              },
              {
                title: "🌿 Progressive Decomposition",
                description: "Create a piece that dissolves gradually in the chaos",
                interactionType: "visual",
                prompt: "Compose a clear theme, then make it degrade progressively in fragmentation, noise, silence.",
                duration: "25 min",
                examples: [
                  "🎵 Example 1: Tonal melody → atonal clusters → prepared sounds → silence",
                  "🎼 Example 2: Harmonic chorale → growing dissonances → noises → nothing",
                  "🌊 Example 3: Regular rhythm → irregular → chaotic → rests infinite"
                ]
              },
              {
                title: "🦉 Composition from the 2 to the 4 of Night",
                description: "Work in the most mysterious hours and creative",
                interactionType: "visual",
                prompt: "Wake up in the heart of the night (2-4 AM). Compose what emerges from the unconscious half-asleep.",
                duration: "30 min",
                examples: [
                  "🌙 Example 1: Improvisation recorded just woken up, without thinking",
                  "💤 Example 2: Dreamlike composition influenced by hypnagogic state",
                  "✨ Example 3: Field recording + performance nocturnal by the window"
                ]
              },
              {
                title: "🕯️ Creative Black Mass",
                description: "Create a provocative musical ceremony",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose a 'rituale' musical ritual that subverts academic conventions. Use dark but liberating symbolism.",
                duration: "40 min",
                examples: [
                  "⛪ Example 1: Sacred motet rewritten with profane texts and blasphemous harmonizations",
                  "🎼 Example 2: Baroque fugue deconstructed and distorted beyond any recognition",
                  "🔥 Example 3: Lutheran chorale with extended techniques and modernist clusters"
                ]
              },
              {
                title: "🌑 Spectral Silence",
                description: "Compose with the silence as protagonist",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a piece where the silence is more important than the notes. Long rests charged with tension.",
                duration: "20 min",
                examples: [
                  "🤐 Example 1: 10 notes in 5 minutes, separated by dense and meaningful silences",
                  "⏸️ Example 2: Extreme Webern style: microfragments isolated by voids",
                  "🎹 Example 3: Performance where silent gestures count as much as sounds"
                ]
              },
              {
                title: "🦴 Musical Necromancy",
                description: "Bring dead composers back to life with a spiritualist seance",
                interactionType: "visual",
                prompt: "Choose a deceased composer. 'Evoke them' and improvise as if they were guiding you from beyond.",
                duration: "30 min",
                examples: [
                  "👻 Example 1: Spiritualist seance with Bach: what would they compose today?",
                  "🕯️ Example 2: Channel deaf Beethoven: music that 'sees' instead of 'hearing'",
                  "🌙 Example 3: Medium of Satie: compose their unfinished dreams"
                ]
              },
              {
                title: "🕷️ Dark Microtonality",
                description: "Explore the unsettling world of microintervals",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose using quarter-tones, sixth-tones or non-tempered intonations. Explore disturbing harmonics.",
                duration: "35 min",
                examples: [
                  "🎹 Example 1: Piano detuned with pure non-tempered harmonic ratios",
                  "🎻 Example 2: Strings with microintervals that create unsettling beats",
                  "🎺 Example 3: Winds with alternative fingerings for quarter-tones"
                ]
              },
              {
                title: "🌑 Reversed Composition",
                description: "Compose and then listen to everything backwards",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a normal piece, record it, then reverse it. Work on the reversed result as new composition.",
                duration: "40 min",
                examples: [
                  "🔄 Example 1: Melody that played backwards creates a mirror canon",
                  "⏮️ Example 2: Text sung that backwards reveals hidden messages",
                  "🎼 Example 3: Palindromic harmonic progression that works in both directions"
                ]
              },
              {
                title: "🦇 Extreme Nocturne",
                description: "Compose at night in an isolated and unsettling place",
                interactionType: "visual",
                prompt: "Bring your instrument to a solitary place at night (bosco, beach, ruin). Compose influenced by environment.",
                duration: "45 min",
                examples: [
                  "🏚️ Example 1: Improvisation in a abandoned building in darkness",
                  "🌊 Example 2: Composition on the deserted beach under the stars",
                  "🌲 Example 3: Performance in the nocturnal forest, dialogue with the natural sounds"
                ]
              },
              {
                title: "🕸️ Spectro-Morphological Composition",
                description: "Work only with spectral analysis and sound synthesis",
                interactionType: "visual",
                prompt: "Use software of spectral analysis. Compose looking at frequencies and harmonics, not traditional notes.",
                duration: "35 min",
                examples: [
                  "📊 Example 1: Draw spectral forms and translate them into sounds with synthesis",
                  "🌈 Example 2: Overlap spectra of different sounds creating hybrid timbres",
                  "🔬 Example 3: Work on timbral microevolutions invisible in notation"
                ]
              },
              {
                title: "🌑 The Voice of Shadow",
                description: "Sing or vocalize in dark ways and unconventional",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Explore extended vocal techniques: growl, whisper, overtone singing, screaming controlled. Create dark vocal landscape.",
                duration: "25 min",
                examples: [
                  "😱 Example 1: Whispers, breaths, subvocal vocalizations unsettling",
                  "🎤 Example 2: Harmonic singing (overtone singing) style throat singing",
                  "💀 Example 3: Deformed voice with effects, loop and layer spectral"
                ]
              },
              {
                title: "🦴 Skeletal Composition",
                description: "Compose thinking about the structure internal, invisible",
                interactionType: "visual",
                prompt: "Create a piece where the 'structure deep' (mathematical ratios, series, patterns) is hidden but governs everything.",
                duration: "40 min",
                examples: [
                  "🔢 Example 1: Dodecaphonic series hidden under apparent freedom",
                  "📐 Example 2: Golden proportions that determine durations and pitches",
                  "🧮 Example 3: Fibonacci or prime numbers as occult rhythmic structure"
                ]
              },
              {
                title: "🕯️ Repetitive Litany",
                description: "Use obsessive repetitions until trance",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose a fragment very brief (2-3 notes). Repeat it for 20 minutes with imperceptible microevolutions.",
                duration: "30 min",
                examples: [
                  "🔁 Example 1: Extreme minimalism Terry Riley style, pattern that mutates slowly",
                  "🌀 Example 2: Ostinato obsessive that induces hypnotic trance",
                  "🎵 Example 3: Loop with progressive microtonal variations"
                ]
              },
              {
                title: "🌑 Music for Ghosts",
                description: "Compose for a imaginary audience of spirits",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a piece as if should be performed for the dead. Which sounds would like? What would you communicate?",
                duration: "30 min",
                examples: [
                  "👻 Example 1: Requiem personal usando only sounds evanescent and reverbs",
                  "🕯️ Example 2: Nenia funeral contemporary with electronics and field recordings",
                  "💀 Example 3: Dialogo musical with un'entità imaginarya from the afterlife"
                ]
              },
              {
                title: "🦇 Extended Techniques Deep Dive",
                description: "Explore systematically all the techniques extended of the tuo instrument",
                interactionType: "visual",
                prompt: "Dedicate 5 minutes a each technique estesa possible: with the wood, on the bridge, percussion, harmonics...",
                duration: "45 min",
                examples: [
                  "🎻 Example 1: Strings: with the wood, on the bridge, behind the bridge, harmonics, tremolo extreme",
                  "🎹 Example 2: Piano: cluster, glissandi on the strings, pizzicato, percussion on the soundboard",
                  "🎺 Example 3: Winds: slap tongue, flutter tongue, multiphonics, sounds of air"
                ]
              },
              {
                title: "🕷️ Arachnoid Composition",
                description: "Create networks of connections non linear tra materials",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose 10 fragments disconnected. Poi find ways unpredictable of connect them as a web.",
                duration: "35 min",
                examples: [
                  "🕸️ Example 1: Frammenti connected by transitions timbral instead that melodic",
                  "🔗 Example 2: Collegamenti based on associations emotional, non logical musical",
                  "🌐 Example 3: Rete where each fragment can follow or precede any other"
                ]
              },
              {
                title: "🌑 Black MIDI Challenge",
                description: "Compose qualcosa of impossibilmente denso and chaotic",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a score extremely complex, almost unplayable. Spinge the limits of the notetion and performance.",
                duration: "30 min",
                examples: [
                  "🎼 Example 1: Partitura with notes overlapped, cluster very dense, rhythms impossible",
                  "⚡ Example 2: Sequenze MIDI with thousands of notes simultaneous",
                  "🌪️ Example 3: Poliritmie extreme, 13 against 17 against 23"
                ]
              },
              {
                title: "🦴 Musical Palimpsest",
                description: "Overlap eras and styles creating temporal stratifications",
                interactionType: "visual",
                prompt: "Take a piece ancient (rinascimentale, Baroque). Sovrapponilo a techniques modern creating palimpsest historical.",
                duration: "35 min",
                examples: [
                  "⏳ Example 1: Motet Renaissance with electronics ambient overlaid",
                  "🎼 Example 2: Fugue Bachian with glitch, distortions and samplings",
                  "📜 Example 3: Canto Gregorian processed with granular synthesis"
                ]
              },
              {
                title: "🕯️ Creative Rite of Passage",
                description: "Segna symbolically a transformation artistic",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a piece that represents the death of a old identity musical and the birth of a nuova.",
                duration: "40 min",
                examples: [
                  "🦋 Example 1: Prima part: old style, second: new style, third: fusion",
                  "🔥 Example 2: Distruggi symbolically old compositions and compose from the ashes",
                  "🌅 Example 3: Pezzo nocturnal (vecchio self) that dissolves in the'alba (nuovo self)"
                ]
              },
              {
                title: "🌑 Music of Oblivion",
                description: "Compose qualcosa destined to be forgotten",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a piece ephemeral that you won't record, you won't write, you won't preserve. Solo memory.",
                duration: "20 min",
                examples: [
                  "💨 Example 1: Improvisation with materials natural that disperse (sabbia, leaves)",
                  "🌊 Example 2: Composition on the sand of the beach before of the tide",
                  "❄️ Example 3: Performance with ice that melts, sounds that vanish"
                ]
              },
              {
                title: "🦇 Day/Night Inversion",
                description: "Compose backwards of the tuo rhythm naturale",
                interactionType: "visual",
                prompt: "Se sei morning person, compose of night. Se nocturnal, wake up at dawn. Explore the discomfort creative.",
                duration: "30 min",
                examples: [
                  "🌅 Example 1: Nottambulo compone at dawn: capture the discomfort in the'estetica",
                  "🌙 Example 2: Mattiniero work to the 3 AM: use the fatigue as texture",
                  "⏰ Example 3: Cambia completely rhythm circadian for a settimana"
                ]
              },
              {
                title: "🕷️ Web of Drones",
                description: "Intreccia multiple lines of drone in texture complex",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create 5-7 drones simultaneous on pitches different. Explore the beats, gli harmonics that emerges.",
                duration: "30 min",
                examples: [
                  "🎹 Example 1: Pedale to the piano with 7 notes sustained together, listen gli harmonics",
                  "🎻 Example 2: Quartetto of strings with harmonics sustained, microintervals",
                  "🎛️ Example 3: Sintesi electronics with waves sine pure in ratios complex"
                ]
              },
              {
                title: "🌑 Soundtrack for Incubo Ricorrente",
                description: "Sonorizza musically a nightmare that repeats",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Identify elementi recurring of the tuoi nightmares. Create leitmotiv and atmospheres for questo landscape dreamlike dark.",
                duration: "35 min",
                examples: [
                  "😱 Example 1: Leitmotiv for 'essere chased' + texture for 'luoghi labyrinthine'",
                  "🌀 Example 2: Ostinato for 'cadere in the void' + cluster for 'angoscia crescente'",
                  "👁️ Example 3: Droni for 'presenza threatening' + fragments for 'fugue impossible'"
                ]
              },
              {
                title: "🦴 Skeletal Composition",
                description: "Riduci everything all'essenziale absolute",
                interactionType: "visual",
                prompt: "Compose usando the minor numero possible of elementi. Extreme minimalism: maximum impact, minimal resources.",
                duration: "25 min",
                examples: [
                  "🎵 Example 1: Brano with a sola note (variations of dynamics, rhythm, timbre)",
                  "🎼 Example 2: Due only pitches for 5 minutes of composition",
                  "🥁 Example 3: Un only rhythm repeated with timbral microevolutions"
                ]
              },
              {
                title: "🕯️ Music for One's Own Death",
                description: "Compose the piece that would want to the tuo funeral",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Memento mori radical: create the piece that would represent perfectly the tua vita and morte. What leave to the world?",
                duration: "45 min",
                examples: [
                  "⚰️ Example 1: Epitaffio musicale: essence of the tua identity artistic in 3 minutes",
                  "🌹 Example 2: Requiem personal that merges all the tuoi styles and influences",
                  "💀 Example 3: Testamento sonic: what vuoi that remember of te?"
                ]
              },
              {
                title: "🌑 Dark Ambient Meditation",
                description: "Create landscape sonic dark but meditative",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose 15 minutes of dark ambient: drones deep, dense texture, atmosfera mysterious but non anxiety-inducing.",
                duration: "40 min",
                examples: [
                  "🌫️ Example 1: Layer of pad synthetic, field recordings processed, noises filtered",
                  "🌊 Example 2: Registrazioni of caves, reverbs infinite, sounds underwater",
                  "🌌 Example 3: Sintesi granular of sounds organic with effects spatial"
                ]
              },
              {
                title: "🦇 Bat Echolocation Music",
                description: "Compose usando principles of echolocation",
                interactionType: "visual",
                prompt: "Create music based on echoes, delay, reverbs. I sounds propagate, bounce, return transformed.",
                duration: "30 min",
                examples: [
                  "📡 Example 1: Impulsi brief with delay multiple that create rhythms secondri",
                  "🏔️ Example 2: Performance in spaces with reverberation naturale long",
                  "🎛️ Example 3: Catene of reverbs with feedback that generate texture infinite"
                ]
              },
              {
                title: "🕷️ Sonic Cobweb",
                description: "Use harmonics natural as web of relazioni",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose usando only harmonics natural of a fundamental. Explore the series harmonic as structure organizing.",
                duration: "30 min",
                examples: [
                  "🎻 Example 1: Strings with only harmonics natural, nessuna note stopped",
                  "🎺 Example 2: Ottoni exploring the series harmonic with different fundamentals",
                  "🎹 Example 3: Piano with overtones amplified by resonance sympathetic"
                ]
              },
              {
                title: "🌑 Curse Composition",
                description: "Compose a 'maledizione' musical symbolic",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a piece that represents a curse ritual against a enemy imaginary (perfezionismo, self-criticism, fear).",
                duration: "25 min",
                examples: [
                  "⚡ Example 1: 'Maledizione against the block creative': music chaotic liberating",
                  "🔥 Example 2: 'Esorcismo dell'anxiety by performance': crescendo cathartic",
                  "💀 Example 3: 'Incantesimo against the procrastination': rhythm obsessive imperative"
                ]
              },
              {
                title: "🦴 Fossil Music",
                description: "Compose as if scavessi reperti archeologici sonori",
                interactionType: "visual",
                prompt: "Imagine of discover fragments musical of civilizations lost. Ricostruisci the music by 'fossili' imaginary.",
                duration: "35 min",
                examples: [
                  "🏺 Example 1: Melody 'antica' ricostruita by fragments, with lacune and incertezze",
                  "📜 Example 2: Rituale musical of cultura imaginarya, with instruments inventati",
                  "⏳ Example 3: Palinsesto of ere different stratificate as scavo archeologico"
                ]
              },
              {
                title: "🕯️ Candlelight Sonic Vigil",
                description: "Veglia musical nocturnal with intento spirituale",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Veglia creative from the 23 to the 2 of night. Candele, incenso opzionale, atmosfera sacra. Compose as preghiera laica.",
                duration: "45 min",
                examples: [
                  "🙏 Example 1: Improvisation meditativa as practice spirituale non religiosa",
                  "🕉️ Example 2: Mantra musical ripetitivo that induces trance leggera",
                  "✨ Example 3: Composition as offerta symbolic by the creativity stessa"
                ]
              },
              {
                title: "🌑 The Void Piece",
                description: "Compose thinking to the nothing, to the void cosmico",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create music that evoca the void: silence denso, sounds rarefatti, assenza as presenza.",
                duration: "30 min",
                examples: [
                  "🌌 Example 1: Lunghissimi silences with sounds isolatedssimi, rarefazione estrema",
                  "⚫ Example 2: Brano that svanisce progressively in the nothing absolute",
                  "🕳️ Example 3: Droni that diventano always more sottili until a dissolvesrsi"
                ]
              },
              {
                title: "🦇 Chiroptera Symphony",
                description: "Compose usando only ultrasuoni and infrasuoni concettuali",
                interactionType: "visual",
                prompt: "Imagine music beyond the spettro udibile. Compose thinking a frequencies extreme (sotto 20Hz, sopra 20kHz).",
                duration: "30 min",
                examples: [
                  "📉 Example 1: Infrasuoni concettuali: bassi subliminali that 'si sentono' in the corpo",
                  "📈 Example 2: Ultrasuoni imaginary: notes altissime beyond the percezione umana",
                  "🦇 Example 3: Traduzione of concetti of echolocation in music udibile"
                ]
              },
              {
                title: "🕷️ Poisonous Intervals",
                description: "Explore gli intervals storicamente 'proibiti'",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Use systematically tritoni, semitoni, seconde minori. Abbraccia the dissonanza as bellezza dark.",
                duration: "25 min",
                examples: [
                  "😈 Example 1: Composition based only on tritoni (diabolus in musica)",
                  "🎵 Example 2: Melody cromatica discendente with only seconde minori",
                  "⚡ Example 3: Armonizzazione with only intervals dissonanti, nessuna consonanza"
                ]
              },
              {
                title: "🌑 Funeral March for Your Old Self",
                description: "Marcia funeral symbolic for old identità",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose a marcia funeral for aspetti of te that vuoi lasciar andare. Rituale musical of trasformazione.",
                duration: "30 min",
                examples: [
                  "⚰️ Example 1: Marcia lenta for 'il perfezionista that blocca the creativity'",
                  "🥀 Example 2: Requiem for 'l'artista that cerca always approvazione esterna'",
                  "💀 Example 3: Processione sonora for 'la fear of being autentico'"
                ]
              },
              {
                title: "🦴 Skeletal Reduction",
                description: "Take piece complesso and riducilo all'essenza",
                interactionType: "visual",
                prompt: "Choose composition famosa complex. Riducila a 3-4 notes essenziali. What rimane when togli everything the superfluo?",
                duration: "25 min",
                examples: [
                  "🎼 Example 1: Sinfonia of Beethoven ridotta a 5 notes, 2 chords",
                  "🎹 Example 2: Sonata of Chopin distillata by the sua progression harmonic base",
                  "🎵 Example 3: Opera complex ridotta to the suo nucleo melodico primordiale"
                ]
              },
              {
                title: "🕯️ Shadow Dancing",
                description: "Improvise following the ombre proiettate by candele",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Luce of candela, muri bianchi. Observe the ombre danzanti. Improvise following the loro movimenti unpredictable.",
                duration: "20 min",
                examples: [
                  "💃 Example 1: Le ombre veloci = notes rapide, ombre lente = notes lunghe",
                  "🌑 Example 2: Direzione movimento shadow = direzione melodica (su/giù)",
                  "🕯️ Example 3: Intensità shadow = dynamics (scuro=forte, clear=piano)"
                ]
              },
              {
                title: "🌑 Moonless Night Symphony",
                description: "Compose in the'oscurità totale of night without luna",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Night without luna, place darkness. Compose 'by the cieca' in all the sensi. Lascia that l'oscurità guidi.",
                duration: "40 min",
                examples: [
                  "🌑 Example 1: Go in campagna in night without luna, compose all'aperto",
                  "🏚️ Example 2: Stanza completely buia, nessuna fonte of light, compose to the tatto",
                  "🦇 Example 3: Occhi bendati, cuffie with isolamento, privazione sensoriale totale"
                ]
              },
              {
                title: "🦴 Ossuary Orchestra",
                description: "Compose thinking by the mortalità collettiva",
                interactionType: "visual",
                prompt: "Visita (or immagina) a ossario. Compose thinking to the vite musical passate, to the artists dimenticati.",
                duration: "35 min",
                examples: [
                  "💀 Example 1: Requiem collettivo for all the artists anonimi of the storia",
                  "🏛️ Example 2: Composition ispirata a ossari storici (Parigi, Sedlec, Roma)",
                  "⚰️ Example 3: Meditazione sonora on the comune destinazione of all gli artisti"
                ]
              },
              {
                title: "🕯️ Wax and Wane",
                description: "Compose following fasi lunari simboliche",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create piece in 4 movimenti: Luna Nuova (silence), Crescente (crescendo), Piena (apice), Calante (dissoluzione).",
                duration: "40 min",
                examples: [
                  "🌑 Example 1: I mov. void, II mov. costruzione, III mov. climax, IV mov. decadenza",
                  "🌕 Example 2: Dinamiche that seguono ciclo lunare (pp → ff → pp)",
                  "🌙 Example 3: Densità harmonic as metafora of the fasi lunari"
                ]
              },
              {
                title: "🌑 The Last Piece on Earth",
                description: "Compose as if fosse l'ultima music never creata",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Scenario apocalittico: sei l'ultimo artist. What composesti as ultima eredità dell'umanità?",
                duration: "45 min",
                examples: [
                  "🌍 Example 1: Epitaffio for the civiltà: synthesis of all the tradizioni musical",
                  "🎵 Example 2: Messaggio musical for eventuali alieni futuri",
                  "💔 Example 3: Requiem for l'umanità: emotion pura without tecnicismi"
                ]
              },
              {
                title: "🌑 Midnight Madness Session",
                description: "Composition totale a mezzanotte esatta",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Aspetta mezzanotte. Al rintocco inizia a compose. Cattura l'energia of the confine tra giorni.",
                duration: "30 min",
                examples: [
                  "🕛 Example 1: Mezzanotte → improvise what emerges from the limbo temporale",
                  "🌃 Example 2: Record sensazioni of the 'momento zero' each day",
                  "⏰ Example 3: Compositio transition: what muore, what nasce with new day"
                ]
              },
              {
                title: "🦴 Bone Conduction Music",
                description: "Compose thinking a vibrazioni ossee",
                interactionType: "visual",
                prompt: "Create music thinking a as vibra in the cranio, in the ossa. Suono tattile, non only uditivo.",
                duration: "25 min",
                examples: [
                  "💀 Example 1: Frequenze gravi that 'senti' in the corpo more that orecchio",
                  "🎧 Example 2: Sperimenta bone conduction headphones se disponibili",
                  "🌊 Example 3: Sub-bass music: sound as esperienza fisica"
                ]
              },
              {
                title: "🕯️ Séance Compositiva",
                description: "Spiritualist seance with the tuoi brani non finiti",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "'Evoca' the tuoi progetti abbandonati. Chiedi loro perché sono dead. Forse uno vuole rinascere.",
                duration: "35 min",
                examples: [
                  "👻 Example 1: Apri all the progetti unfinished, choose uno by resuscitare",
                  "🔮 Example 2: Dialogo imaginary: 'Perché ti ho abandoned?' - listen risposta",
                  "💀 Example 3: Create new piece from the ashes of 3 progetti dead"
                ]
              }
],
            'blocco-creativo': [
              {
                title: "5-Minute Ugly Improvisation",
                description: "Improvise intentionally ugly to free yourself from perfectionism",
                interactionType: "visual",
                prompt: "Create a deliberately messy improvisation. The goal is to mess up on purpose.",
                duration: "5 min",
                examples: [
                  "🎹 Example 1: Play using only your non-dominant hand, without looking at the instrument",
                  "🌳 Example 2: Improvise with eyes closed, let your hands go where they want",
                  "👤 Example 3: Play while looking in a mirror, NEVER at your hands or instrument"
                ]
              },
              {
                title: "Wrong Instrument Challenge",
                description: "Use the 'wrong' instrument for your usual style",
                interactionType: "visual",
                prompt: "If you play piano, compose for guitar. If you're a violinist, try percussion. Exit your comfort zone.",
                duration: "20 min",
                examples: [
                  "🎼 Example 1: Pianist → Compose for wind instruments or voice",
                  "🗿 Example 2: String player → Create rhythmic piece only with body percussion",
                  "📸 Example 3: Singer → Write instrumental piece for unfamiliar instruments"
                ]
              },
              {title:"🎲 100 Ideas Sprint",description:"Generate masses of raw material",prompt:"30sec per musical idea. Record 100 fragments in 50 minutes. Zero judgment.",duration:"50 min",examples:["⚡ Timer 30sec, play, save, next","🎯 Mix random genres each time","📦 Raw archive to refine later"]},,
              {title:"🔄 Hypnotic Loop",description:"Repetitive pattern until trance state",prompt:"Loop 4 bars, repeat 100 times without stopping. Enter meditative state.",duration:"15 min",examples:["🌀 Simple ostinato repeated","🧘 Mind empties, hands continue","✨ Small variations emerge naturally"]},,
              {title:"⚡ Continuous Solo 10min",description:"Never stop",prompt:"Improvise 10 minutes without pauses. Sound must never stop.",duration:"10 min",examples:["🎸 Use constant pedal/drone","🔊 Breaths become part of sound","🌊 Continuous flow, no silence"]},,
              {title:"🎯 2-Chord Limit",description:"Creativity within extreme constraints",prompt:"Compose using only 2 chords. Vary everything else: rhythm, melody, timbre.",duration:"20 min",examples:["🎹 C-G, create 5 different pieces","🔢 Polyrhythm over simple progression","🎨 Different texture each time"]},,
              {title:"🌪️ Chaos and Order",description:"Alternate opposite extremes",prompt:"3min total chaos → 3min perfect order → 3min mix. Sharp contrasts.",duration:"10 min",examples:["💥 Chaos=random clusters ff","📐 Order=perfect scale ppp","⚖️ Mix=tension balance"]},,
              {title:"📸 Sound Snapshots",description:"Instant musical photographs",prompt:"1 minute of music = 1 'sound photo'. Take 15 snapshots of moments/emotions.",duration:"15 min",examples:["📷 Morning, lunch, evening=3 snapshots","😊 Each emotion=1 sound photo","🎬 Imaginary film scenes"]},,
              {title:"🎭 3 Musical Personalities",description:"Three distinct 'voices' in dialogue",prompt:"Create 3 musical characters. Make them dialogue for 20 minutes.",duration:"20 min",examples:["👑 Protagonist, antagonist, narrator","🎹 High, mid, low register","⚔️ Conflict and resolution between voices"]},,
              {title:"🔥 Burn After Playing",description:"Create knowing you'll delete it",prompt:"Compose 15min knowing you'll delete everything. Total freedom from judgment.",duration:"15 min",examples:["🗑️ Record, then DELETE immediately","💭 Experiment without fear","🎨 Ephemeral art, process matters"]},,
              {title:"⏱️ Speed Metal Acoustic",description:"Incompatible genres mixed",prompt:"Take 2 opposite genres, fuse them. Ex: metal+classical, jazz+folk.",duration:"15 min",examples:["🎸 Metal riff on classical guitar","🎺 Jazz solo on country base","🎹 Techno played on piano"]},,
              {title:"🌈 Invented Scale",description:"Create your own tonal system",prompt:"Invent personal (non-standard) scale. Compose using only that.",duration:"20 min",examples:["🎵 Scale with random intervals","🔢 Custom 5-note system","🎹 Personalized microtonality"]},,
              {title:"💪 Technical Exercise→Art",description:"Transform practice into art",prompt:"Take boring technical exercise. Transform it into artistic piece.",duration:"15 min",examples:["🎹 Scale=melody with rhythm","🎸 Arpeggio=ambient composition","🎺 Pattern=jazz theme"]},,
              {title:"🎲 Dice Composition",description:"Dice decides everything",prompt:"Roll die for each choice: note, duration, dynamic. Accept result.",duration:"20 min",examples:["🎯 1-7=note in major scale","⏱️ 1-6=note duration","📢 1-3=ppp, 4-6=fff"]},,
              {title:"📱 Musical Interruptions",description:"Embrace distractions",prompt:"Every real distraction becomes part of music. Phone, noise, thought.",duration:"15 min",examples:["📞 Phone ring→rhythm","🚗 Car outside→bass pedal","💭 Random thought→melody"]},,
              {title:"🎨 Sound Dripping",description:"Musical action painting",prompt:"Improvise like Pollock painted: instinctive gestures, sound splatters, pure energy.",duration:"10 min",examples:["💥 Random clusters on piano","🎸 Chaotic guitar slides","🥁 Violent gestural percussion"]},,
              {title:"🔁 Extreme Versioning",description:"Same idea, 10 versions",prompt:"Take simple melody. Create 10 radically different versions in 20min.",duration:"20 min",examples:["🎵 V1=slow, V2=fast, V3=jazz...","🎭 Each version=different mood","🌍 Each version=different musical culture"]},,
              {title:"⚡ 1-Minute Masterpieces",description:"Perfect micro-compositions",prompt:"Compose 20 one-minute tracks. Each must be complete: intro-body-ending.",duration:"25 min",examples:["⏱️ 15sec setup, 45sec execution","🎯 Each piece=unique idea","💎 Quality>quantity in 60 seconds"]},,
              {title:"🌙 Night Stream",description:"Improvise until you fall asleep",prompt:"Play in bed until you fall asleep. Record everything. Magic pre-sleep moment.",duration:"Variable",examples:["😴 Portable instrument in bed","💭 Gradual dream logic","🎵 Last notes before sleep"]},,
              {title:"🎪 Musical Pranks",description:"Surprises and humor",prompt:"Compose something that makes you laugh, surprises, confuses. Fun is liberating.",duration:"10 min",examples:["🤡 Serious melody→comic honk","🎭 Genre change every 10sec","😄 Absurd quotes mixed"]},,
              {title:"🔊 Feedback Loop Art",description:"Use controlled feedback",prompt:"Create composition using feedback as instrument. Control sound chaos.",duration:"15 min",examples:["🎸 Guitar→amp→orchestrated feedback","🎙️ Microphone loop→layer","⚡ Controlled larsen=melody"]},,
              {title:"📐 Musical Geometry",description:"Visual shapes→sound shapes",prompt:"Draw geometric shape. Translate it to music: circle=loop, triangle=crescendo.",duration:"15 min",examples:["⭕ Circle=circular pattern","△ Triangle=increasing intensity","▢ Square=rigid 4/4 structure"]},,
              {title:"🎯 Target Practice",description:"Impossible goal",prompt:"Compose something technically beyond your abilities. Failure is learning.",duration:"20 min",examples:["🔥 Unthinkable speed","🎹 Impossible chord stretch","🎺 High notes out of range"]},,
              {title:"💥 Destruktur",description:"Deconstruct everything",prompt:"Take famous piece. Deconstruct it until unrecognizable.",duration:"15 min",examples:["🎵 Beethoven→industrial noise","🎹 Pop song→avant-garde","🎸 Classic→granular synthesis"]},,
              {title:"🌊 Tide Composition",description:"Music follows natural rhythms",prompt:"Compose following natural cycles: breath, heartbeat, waves. Synchronize.",duration:"20 min",examples:["🫀 Heartbeat=variable base tempo","🌊 Waves=cyclic dynamics","🫁 Breath=natural phrasing"]},,
              {title:"🎭 Emotion Roulette",description:"Random rapid emotions",prompt:"Every 2 minutes change emotion radically. Anger→joy→sadness→fear.",duration:"10 min",examples:["😡 Anger→😊 Immediate joy","💔 Sadness→😨 Sudden fear","🎭 Extreme emotional contrasts"]},,
              {title:"🔮 Future Archaeology",description:"Music from imaginary future",prompt:"Compose as if it were year 3000. What does future music sound like?",duration:"20 min",examples:["🚀 Imagined nonexistent instruments","🌌 Non-terrestrial rhythms","✨ Synthetic alien timbres"]},,
              {title:"📻 Radio Scanning",description:"Continuously change stations",prompt:"Every 30sec change genre/style like radio scanning. 10 genres in 5 minutes.",duration:"5 min",examples:["📻 Jazz→Rock→Classical→Techno","🔄 Abrupt transitions no preparation","🎭 Embraced stylistic schizophrenia"]},,
              {title:"🎨 Musical Monochrome",description:"Single timbre, maximum variety",prompt:"Use only 1 instrument/sound. Create maximum variety with it.",duration:"15 min",examples:["🎹 Piano only: prepared, harmonics, clusters","🎸 Guitar only: tapping, slide, percussive","🎺 Voice only: beatbox, melody, noise"]},,
              {title:"⏰ Reverse Engineering",description:"Compose from ending to intro",prompt:"Decide how it must end. Work backwards to the beginning.",duration:"20 min",examples:["🔙 Final climax→backwards build","🎬 Film ending→flashback to beginning","⏮️ Record reverse sections then flip"]},,
              {title:"🌪️ Chaos Seeds",description:"One chaotic element in order",prompt:"Ordered composition with 1 totally random disturbing element.",duration:"15 min",examples:["📐 Perfect melody+random noise burst","🎹 Classical harmony+dissonant cluster","⏱️ Regular rhythm+chaotic interruption"]},,
              {title:"💎 Minimal Materials",description:"Maximum result, minimum input",prompt:"Use least material possible: 1 interval, 1 rhythm. Maximum expressiveness.",duration:"20 min",examples:["🎵 Only fifth interval, vary everything else","🥁 Only eighth note, change accents dynamics","🔊 1 sound, 1000 ways to play it"]},
              {
                title: "Public Performance Session",
                description: "Create music in a public place without hiding",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Go to a cafe, park, or square. Play/compose for 30 minutes. Accept curious looks.",
                duration: "30 min",
                examples: [
                  "☕ Example 1: Improvise in a cafe, share your music if people ask",
                  "🌳 Example 2: Play en plein air in a crowded park",
                  "🚉 Example 3: Urban busking in a station, leave your case open"
                ]
              },
              {
                title: "Collaboration Chaos",
                description: "Start a piece and let others 'ruin' it",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create a base. Ask 3 people (even non-artists) to add elements. Accept everything.",
                duration: "45 min",
                examples: [
                  "👥 Example 1: Basic melody → Everyone adds random notes or sounds",
                  "✏️ Example 2: Chord progression → Others improvise rhythms of their choice",
                  "🎹 Example 3: Initial composition → Others add found sounds or vocalizations"
                ]
              },
              {
                title: "Speed Creation 30 Seconds",
                description: "No time to judge",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "30 second timer. Create something complete. Stop when it rings.",
                duration: "30 sec",
                examples: [
                  "⚡ Example 1: Expressive melody in 30 seconds, only essential notes",
                  "🎵 Example 2: Abstract soundscape, improvise clusters/notes quickly",
                  "✂️ Example 3: Super fast composition, record and stop without thinking"
                ]
              },
              {
                title: "Childhood Music Recreation",
                description: "Play like when you were 5 years old",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Only basic sounds: simple melodies, repetitive rhythms. Play freely. Zero rules.",
                duration: "15 min",
                examples: [
                  "👨‍👩‍👧 Example 1: Simple song about your family like a child (nursery rhyme style)",
                  "🏠 Example 2: Musical story with basic sounds, all simple and playful",
                  "🐶 Example 3: Your favorite animal as sound, child version (silly and funny)"
                ]
              },
              {
                title: "No Undo Challenge",
                description: "Every notes stays, every 'mistake' becomes part of the composition",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Record in one take. Play something complex. No editing. Errors are features.",
                duration: "20 min",
                examples: [
                  "🏛️ Example 1: Complex composition recorded live, if you mess up integrate the error",
                  "👤 Example 2: Performance from memory, wrong notes become variations",
                  "🌆 Example 3: Improvisation, unexpected choices create unique style"
                ]
              },
              {
                title: "Backwards Process",
                description: "Reverse your usual creative process",
                interactionType: "visual",
                prompt: "If you start with planning → Start with improvisation. If you practice → Perform directly.",
                duration: "30 min",
                examples: [
                  "🎵 Example 1: Record random sounds first, THEN find structure within them",
                  "✏️ Example 2: Perform without preparedon, let it emerges",
                  "🗿 Example 3: Compose without a plan, discover what it becomes as you work"
                ]
              },
              {
                title: "Anonymous Music Drop",
                description: "Create and abandon a recording in public, unsigned",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Leave a finished recording in a public place. No name. Observe reactions from afar.",
                duration: "1 hour",
                examples: [
                  "🎹 Example 1: USB stick with your composition on a park bench",
                  "📝 Example 2: QR code linking to your piece at bus stop with notes 'Listen to me'",
                  "🎵 Example 3: Recording hidden in a public library with instructions to find it"
                ]
              },
              {
                title: "Criticism to Music",
                description: "Transform received criticism into creative work",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Remember a harsh criticism. Create a piece that reinterprets it, challenges it, or celebrates it ironically.",
                duration: "40 min",
                examples: [
                  "💬 Example 1: 'Too dark' → Intentionally somber piece with only one bright moment",
                  "🎵 Example 2: 'Not technical' → Composition of 'wrong' techniques that work together",
                  "📐 Example 3: 'Off rhythm' → Piece celebrating impossible polyrhythms"
                ]
              },
              {
                title: "Stream of Consciousness Composing",
                description: "Play/compose while thinking out loud",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Record audio while working. Talk about everything that crosses your mind. Don't stop thinking or talking.",
                duration: "20 min",
                examples: [
                  "🎤 Example 1: Abstract improvisation + monologue about your day",
                  "🗣️ Example 2: Automatic composition while talking about your musical doubts",
                  "💭 Example 3: Performance + stream-of-consciousness narration of your childhood"
                ]
              },
              {
                title: "Opposite Style Day",
                description: "Do the exact opposite of your style",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Minimalist? Today go baroque. Classical? Today totally experimental. Major keys? Only minor.",
                duration: "1 hour",
                examples: [
                  "🔄 Example 1: Atonal composer → Romantic tonal piece",
                  "🎹 Example 2: Tonal → Totally atonal improvisation",
                  "🌈 Example 3: Simple → Complex polyrhythmic explosion"
                ]
              },
              {
                title: "Found Sounds Composition",
                description: "Create only with randomly found sounds",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "30 minutes to collect random sounds. 30 minutes to assemble them into a piece. No instruments.",
                duration: "1 hour",
                examples: [
                  "🗑️ Example 1: Composition from street sounds recorded on phone",
                  "🍂 Example 2: Sound piece with only natural elements (wind, water, footsteps)",
                  "📦 Example 3: Assembly of household sounds (keys, buttons, tapping)"
                ]
              },
              {
                title: "Time Limit Escalation",
                description: "Same piece in progressively tighter times",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Version 1: 30 min. Version 2: 10 min. Version 3: 2 min. Compare results.",
                duration: "42 min total",
                examples: [
                  "⏱️ Example 1: Same theme in 3 different time versions",
                  "🍎 Example 2: Melody that becomes increasingly essential",
                  "🏙️ Example 3: Improvisation, discover what's truly essential"
                ]
              },
              {
                title: "Blindfold Challenge",
                description: "Create with eyes closed or blindfolded",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Blindfold for entire duration. Trust touch, hearing and instinct.",
                duration: "15 min",
                examples: [
                  "👁️ Example 1: Play blindfolded, let your hands guide by touch",
                  "🎵 Example 2: Improvise without seeing, only auditory sensations",
                  "✏️ Example 3: Compose blindfolded, feel the instrument texture"
                ]
              },
              {
                title: "Social Media Live Creation",
                description: "Create live on social media",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Instagram/TikTok Live or record video. Show errors, hesitations, entire raw process.",
                duration: "30 min",
                examples: [
                  "📱 Example 1: Time-lapse of a composition, show ALL failed attempts",
                  "🎥 Example 2: Live performance with real-time commentary on your doubts",
                  "📸 Example 3: Progressive Stories of a piece, even the 'mistakes'"
                ]
              },
              {
                title: "Extreme Constraint Box",
                description: "Absurd rules that drastically limit",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Only 1 note, 3 rhythms maximum, absurd techniques. Creativity comes from extreme constraints.",
                duration: "25 min",
                examples: [
                  "📏 Example 1: Composition with ONLY 5 different pitches",
                  "🎵 Example 2: Piece using ONLY staccato notes (extreme separation)",
                  "✂️ Example 3: Composition with ONLY perfect fifths, nothing else"
                ]
              },
              {
                title: "Audience Choice Creation",
                description: "The audience decides what you create",
                interactionType: "visual",
                prompt: "Ask 5 random people: theme, mood, tempo. You must use ALL suggesturesons.",
                duration: "40 min",
                examples: [
                  "👥 Example 1: Instagram poll to choose theme + mood + genre",
                  "🎲 Example 2: Dice with random words, roll 3 times, incorporate everything",
                  "📱 Example 3: Ask passersby what to compose, take first 3 suggesturesons"
                ]
              },
              {
                title: "Destruction as Creation",
                description: "Create by destroying previous compositions",
                interactionType: "visual",
                prompt: "Take 3 old 'failed' recordings. Cut them, remix them, reassemble into something new.",
                duration: "35 min",
                examples: [
                  "✂️ Example 1: Collage from rejected recordings, overlap fragments",
                  "🔥 Example 2: Layer new improvisation over old recording, let the underneath show through",
                  "🎹 Example 3: Composition assembling broken pieces of previous pieces"
                ]
              },
              {
                title: "Impossible Replica",
                description: "Try to remake exactly the same piece 5 times",
                prompt: "Create something. Now remake it identically 4 more times. Observe how each attempt is different.",
                duration: "50 min",
                examples: [
                  "🔁 Example 1: Same melody 5 times, notes involuntary variations",
                  "🎵 Example 2: Same improvisation, diverges more and more",
                  "✏️ Example 3: Same quick composition, celebrate the differences"
                ]
              },
,
              {
                title: "🎲 Improvisation with Extreme Constraints",
                description: "Più limitazioni = more creativity paradossale",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Improvise for 10 min with almeno 3 vincoli assurdi: only 2 notes, only mano sinistra, only dynamics pianissimo, etc.",
                duration: "10 min",
                examples: [
                  "🎹 Example 1: Solo do and re, only mano sinistra, never forte",
                  "🎸 Example 2: Solo strings vuote, only arpeggi, maximum 60 BPM",
                  "🎺 Example 3: Solo respiro and valve clicks, nessuna note reale"
                ]
              },
              {
                title: "🌪️ Speed Composition Challenge",
                description: "Compose a piece completo in 5 minutes netti",
                interactionType: "visual",
                prompt: "Timer of 5 minutes. Create a piece with inizio-sviluppo-fine. Zero editing. Accetta everything.",
                duration: "5 min",
                examples: [
                  "⚡ Example 1: Forma ABA in 5 minutes: 2min A, 1min B, 2min A variato",
                  "🎵 Example 2: Tema + 2 variations velocissime",
                  "🎼 Example 3: Stream of consciousness musical without fermarti"
                ]
              },
              {
                title: "🎹 Character Composition",
                description: "Compose from the punto of vista of a personaggio inventato",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Inventa a personaggio musical imaginary. Compose as farebbe lui/lei, non tu.",
                duration: "20 min",
                examples: [
                  "👴 Example 1: 'Vecchio jazzista nostalgico': what would they compose today?",
                  "🧚 Example 2: 'Fata of the forest': natural sounds, magici, eterei",
                  "🤖 Example 3: 'Robot that impara the emotions': meccanico that diventa umano"
                ]
              },
              {
                title: "🔄 Reverse Engineering Musical",
                description: "Parti from the result finale desiderato, risali at the beginning",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Decidi as vuoi that finisca the brano. Poi work all'indietro until at the beginning logico.",
                duration: "25 min",
                examples: [
                  "🎯 Example 1: Vuoi finire on Do major pianissimo → as ci arrivo by lontano?",
                  "🌅 Example 2: Finale = singola note tenuta → costruisci densità that si riduce",
                  "💥 Example 3: Climax fortissimo finale → create tension graduale that ci porta"
                ]
              },
              {
                title: "🎵 Non-Musical Inspiration",
                description: "Traduci in music qualcosa of completely extra-musicale",
                interactionType: "visual",
                prompt: "Take a dipinto, a ricetta, a mappa. Traducilo letteralmente in parametri musical.",
                duration: "30 min",
                examples: [
                  "🎶 Example 1: Colori of the dipinto = timbri, lines = melodie, texture = densità",
                  "🍝 Example 2: Ricetta culinaria: ingredienti = strumenti, procedimento = forma",
                  "🗺️ Example 3: Mappa geografica: altitudini = pitches, distanze = durations"
                ]
              },
              {
                title: "🎯 One-Take Recording",
                description: "Record in presa unica, pubblica without editing",
                interactionType: "visual",
                prompt: "Improvise or compose and record in a sola take. Zero editing. Quello that esce is the piece finale.",
                duration: "15 min",
                examples: [
                  "🎙️ Example 1: Improvisation of 5 minutes, stop, pubblicata così com'è",
                  "🎬 Example 2: Performance live without network of sicurezza",
                  "📹 Example 3: Video performance, errori inclusi, nessun taglio"
                ]
              },
              {
                title: "🌈 Genre Mashup Impossibile",
                description: "Fondi generi that non dovrebbero never incontrarsi",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose 2-3 generi opposti. Create a piece that li merges in modo credibile and interessante.",
                duration: "25 min",
                examples: [
                  "🎼 Example 1: Fugue baroque + trap beats + throat singing",
                  "🎸 Example 2: Death metal + bossa nova + music Renaissance",
                  "🎹 Example 3: Minimalismo + gospel + dubstep"
                ]
              },
              {
                title: "🎪 Circus of Errors",
                description: "Incorpora deliberatamente 'errori' as feature",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Play and when sbagli, amplifica quell'errore. Rendilo part integrante of the brano.",
                duration: "20 min",
                examples: [
                  "🎵 Example 1: Nota sbagliata diventa new theme by sviluppare",
                  "🥁 Example 2: Rhythm zoppicante diventa groove caratteristico",
                  "🎹 Example 3: Dissonanza accidentale diventa colore harmonic ricorrente"
                ]
              },
              {
                title: "📦 Found Sounds Orchestra",
                description: "Compose usando only oggetti non musical",
                interactionType: "visual",
                prompt: "Nessuno instrument tradizionale. Solo oggetti: bicchieri, carta, mobili, corpo. Create a brano.",
                duration: "30 min",
                examples: [
                  "🍶 Example 1: Bicchieri d'acqua a different pitches + cucchiaini",
                  "📰 Example 2: Carta stropicciata, strappata, sfregata, soffiata",
                  "🪑 Example 3: Percussioni on mobili + body percussion + vocalizzi"
                ]
              },
              {
                title: "🎹 Musical Exquisite Corpse",
                description: "Collabora without sapere what ha fatto l'altro",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose 16 battute. Dai only the ultime 4 a a amico. Lui continua. Riunisci without seesre the mezzo.",
                duration: "40 min",
                examples: [
                  "🎼 Example 1: Tu fai A (16b), mostri only ultime 4, amico fa B, tu fai C",
                  "🎵 Example 2: Catena of 3 composers, ognuno sees only 4 battute precedenti",
                  "🎹 Example 3: Tu melody, amico harmony, terzo persona rhythm, never comunicano"
                ]
              },
              {
                title: "⏱️ Micro-Composition Sprint",
                description: "10 brani of 30 secondi in 15 minutes",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Compose 10 mini-pezzi completi, 30 secondi ciascuno. Velocità assoluta, zero perfectionism.",
                duration: "15 min",
                examples: [
                  "🎵 Example 1: Ogni piece = an emotion diversa in 30 sec",
                  "🎼 Example 2: 10 generi different, 30 secondi ciascuno",
                  "🎹 Example 3: 10 variations extreme of a single motivo"
                ]
              },
              {
                title: "🎲 Algorithmic Improvisation",
                description: "Create a algoritmo semplice, seguilo ciecamente",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Regola: 'each 4 notes, salta un'ottava'. O: 'each 8 battute change tonality of a tritono'. Improvise followingla.",
                duration: "20 min",
                examples: [
                  "🔢 Example 1: Fibonacci for durations: 1-1-2-3-5-8-13 ottavi",
                  "🎯 Example 2: Ogni note genera the successiva for intervals fissi (+5, -3, +7...)",
                  "🌀 Example 3: Pattern of dynamics predefinito that repeats: p-mf-ff-pp-f"
                ]
              },
              {
                title: "🎹 Emotion Roulette",
                description: "Cambia emotion each 2 minutes",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Timer each 2 min. Cambia drasticamente emotion: joy→terrore→malinconia→anger→pace. Un piece unico.",
                duration: "10 min",
                examples: [
                  "😊😱😢😡😌 Example 1: 5 sections by 2 min with cambi emotivi estremi",
                  "🎹 Example 2: Stessa melody, 5 trattamenti emotivi different",
                  "🎵 Example 3: Improvisation that attraversa everything the spettro emotivo"
                ]
              },
              {
                title: "🔁 Loop Layering Meditation",
                description: "Build loop complesso aggiungendo layer uno by the volta",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Inizia with a loop of 4 battute. Ogni 2 minutes aggiungi a new layer. Build densità gradually.",
                duration: "20 min",
                examples: [
                  "🥁 Example 1: Bass → drums → harmony → melody → texture → effects",
                  "🎹 Example 2: Drone → rhythm → counter-melody → improvisation",
                  "🎸 Example 3: Riff → percussion → chords → lead → ambient"
                ]
              },
              {
                title: "🎵 Texture Over Melody",
                description: "Compose thinking only a texture and timbri",
                interactionType: "visual",
                prompt: "Dimentica melodies and armonie. Pensa only a: ruvido/liscio, denso/rado, brillante/opaco. Create landscape timbrico.",
                duration: "25 min",
                examples: [
                  "🌊 Example 1: Texture fluida → granular → cristallina → dense",
                  "🎵 Example 2: Timbri that si fondono as colori on tela bagnata",
                  "🌫️ Example 3: Sonic masses without contorni melodici definiti"
                ]
              },
              {
                title: "🎯 Target Practice",
                description: "Compose specificamente for a ascoltatore imaginary",
                interactionType: "visual",
                prompt: "Choose qualcuno (nonno, bambino, alieno, cane). Compose perfectly for quel audience unico.",
                duration: "20 min",
                examples: [
                  "👶 Example 1: Per neonato: sounds semplici, ripetitivi, rassicuranti",
                  "🐕 Example 2: Per cane: frequencies alte, pattern ritmici semplici",
                  "👽 Example 3: Per alieno: sounds astratti, no conventions terrestri"
                ]
              },
              {
                title: "⚡ Electric Silence",
                description: "Compose usando only silence and spazio",
                interactionType: "visual",
                prompt: "Brano of 5 minutes with maximum 20 notes totali. Il silence is more important of the sound.",
                duration: "15 min",
                examples: [
                  "🎵 Example 1: 4 notes to the minuto, silences dense of significato",
                  "⏸️ Example 2: Gesti musical isolated in oceani of silence",
                  "🎹 Example 3: Performance where the breaths count as much as the notes"
                ]
              },
              {
                title: "🎪 Medium Swap",
                description: "Musicians swap instruments never used before",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],

                prompt: "Pick an instrument you've never played. Create for 15 minutes. Embrace the awkwardness.",
                duration: "15 min",
                examples: [
                  "🎼 Example 1: Pianist tries drums, discovers rhythm from new angle",
                  "✏️ Example 2: Violinist tries electric bass, tactile groove approach",
                  "🎵 Example 3: Classical singer tries beatboxing, explores percussive voice"
                ]
              },
              {
                title: "📱 Smartphone Orchestra",
                description: "Compose usando only the telefono as instrument",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Nessuno instrument tradizionale. Solo smartphone: apps, sounds registrati, synthesis. Create a piece completo.",
                duration: "30 min",
                examples: [
                  "📲 Example 1: Apps of synthesis + sampler + effects",
                  "🎙️ Example 2: Field recordings from the telefono + loop apps",
                  "🎵 Example 3: Touchscreen as controller gestuale + processing"
                ]
              },
              {
                title: "🌀 Circular Composition",
                description: "Compose a piece that can ricominciare infinitamente",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Ultima note = before note. Fine = inizio. Create a loop perfetto that can girare all'infinito.",
                duration: "25 min",
                examples: [
                  "🔄 Example 1: Armonia that risolve on the tonica that is also dominante",
                  "🎵 Example 2: Melody that termina on the sensibile of the re-inizio",
                  "🌀 Example 3: Rhythm that l'ultima battuta is anacrusis of the prima"
                ]
              },
              {
                title: "🎹 Persona Non-Grata",
                description: "Compose nello style that odi of more",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Qual is the genere that detesti? Compose seriamente in quello style. Scopri perché funziona.",
                duration: "20 min",
                examples: [
                  "🎸 Example 1: Classicista compone death metal onesto",
                  "🎹 Example 2: Jazzista compone pop commerciale without ironia",
                  "🎺 Example 3: Sperimentalista compone music tonal romantica"
                ]
              },
              {
                title: "⏰ Time Signature Chaos",
                description: "Cambia metro each battuta",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "4/4 → 7/8 → 3/4 → 5/4 → 9/8... Cambia metro each misura. Find the groove in the chaos.",
                duration: "20 min",
                examples: [
                  "🎵 Example 1: Sequenza fissa of metri that repeats",
                  "🎼 Example 2: Metri random, find comunque the senso ritmico",
                  "🥁 Example 3: Polimetria estrema with layer in metri different"
                ]
              },
              {
                title: "🎵 Paint with Sound",
                description: "Compose looking at only forms visive, non pensare a notes",
                interactionType: "visual",
                prompt: "Draw forms astratte. Traducile direttamente in sound without thinking a teoria musicale.",
                duration: "25 min",
                examples: [
                  "🎼 Example 1: Linea curva = glissando, angolo = accento",
                  "🎵 Example 2: Colori = timbri, densità = volume",
                  "📐 Example 3: Forme geometriche = strutture ritmiche"
                ]
              },
              {
                title: "🔥 Controlled Burn",
                description: "Improvise and destroy progressively the structure",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Inizia with forma chiara. Progressivamente decostruisci, distorci, caotizza until to the noise puro.",
                duration: "15 min",
                examples: [
                  "🎼 Example 1: Tema riconoscibile → variations always more extreme → chaos",
                  "🎹 Example 2: Tonalità chiara → ambiguità → atonaltà → noise",
                  "🎵 Example 3: Metro stabile → irregular → metric modulation → poliritmia chaotic"
                ]
              },
              {
                title: "🎯 Minimalist Challenge",
                description: "Compose usando the minor numero of elementi possible",
                interactionType: "visual",
                prompt: "Massimo 3 pitches different. Massimo 2 ritmi. Massimo 3 dynamics. Create interesse with almost nothing.",
                duration: "20 min",
                examples: [
                  "🎵 Example 1: Solo do-mi-sol, croma and semiminima, p and f",
                  "🎼 Example 2: Due notes, infinite variations timbral",
                  "🥁 Example 3: Un rhythm, espanso on 15 minutes of esplorazione"
                ]
              },
              {
                title: "🌊 Wave Composition",
                description: "Struttura based on cicli of tension/rilascio",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create 5 waves emotional: accumula tension → rilascia. Ogni onda more intensa of the precedente.",
                duration: "25 min",
                examples: [
                  "📈 Example 1: 5 crescendo/diminuendo progressively more ampi",
                  "🌀 Example 2: Dissonanza crescente → risoluzione, repeated with intensità",
                  "🎵 Example 3: Densità orchestrale ondeggiante as maree"
                ]
              },
              {
                title: "🎹 Multiple Personality Piece",
                description: "Un brano, 4 personalità musical distinte",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Dividi piece in 4 sections. Ogni section = personalità completely diversa. Come si relazionano?",
                duration: "30 min",
                examples: [
                  "🎹 Example 1: Bambino → adolescente → adulto → anziano",
                  "🌈 Example 2: Timido → aggressivo → melanconico → euforico",
                  "🎵 Example 3: Razionale → emotivo → spirituale → istintivo"
                ]
              },
              {
                title: "⚡ Instant Remix",
                description: "Take piece famoso, remixalo in 10 minutes",
                interactionType: "visual",
                prompt: "Choose classico noto. Decostruiscilo and ricomponilo totalmente in 10 minutes. Riconoscibile but nuovo.",
                duration: "10 min",
                examples: [
                  "🎼 Example 1: Beethoven 5a sinfonia → trap remix in 10 min",
                  "🎹 Example 2: Bach Preludio → ambient/drone reinterpretation",
                  "🎸 Example 3: Mozart → heavy metal arrangement immediato"
                ]
              },
              {
                title: "🎪 Circus Rondo",
                description: "Forma rondò with sections assurdamente contrastanti",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "ABACADA: A = theme fisso, each altra section = genere completely diverso.",
                duration: "30 min",
                examples: [
                  "🎹 Example 1: A=valzer, B=metal, C=blues, D=elettronica",
                  "🎼 Example 2: Tema Baroque torna always, mezzo: jazz, rap, ambient",
                  "🎵 Example 3: Ritornello pop tra episodi of noise, classica, folk"
                ]
              },
              {
                title: "🔮 Prophecy Composition",
                description: "Compose the tuo futuro musical ideale",
                interactionType: "visual",
                prompt: "Come suonerai tra 10 anni in the tuo scenario perfetto? Compose quel piece ORA, also se 'non sei pronto'.",
                duration: "35 min",
                examples: [
                  "✨ Example 1: Il capolavoro that farai in the 2035, prova hour",
                  "🎯 Example 2: Style that vuoi padroneggiare, make it adesso imperfettamente",
                  "🌟 Example 3: Pezzo 'impossibile' for te hour, provaci comunque"
                ]
              },
              {
                title: "🎲 Dice Composition System",
                description: "Ogni parametro musical deciso by dice",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Die 1 = altezza, Die 2 = durata, Die 3 = dynamics. Roll and compose obbedendo to the risultati.",
                duration: "20 min",
                examples: [
                  "🎲 Example 1: D12 for notes, D6 for durations, D4 for dynamics",
                  "🎯 Example 2: Dadi determine also registro, articolazione, tempo",
                  "🔢 Example 3: Sistema aleatory completo style Cage/Xenakis"
                ]
              },
              {
                title: "🌈 Synesthesia Exercise",
                description: "Traduci altri sensi in musica",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Assaggia, annusa, tocca qualcosa. Traduci quelle sensazioni non-uditive in parametri musical precisi.",
                duration: "25 min",
                examples: [
                  "👃 Example 1: Profumo floreale → timbri, intensità → dynamics",
                  "👅 Example 2: Sapori: dolce=consonanze, amaro=dissonances, piccante=staccato",
                  "✋ Example 3: Texture: liscio=legato, ruvido=staccato, morbido=harmonics"
                ]
              },
              {
                title: "🎹 Anti-Comfort Zone",
                description: "Fai everything what ti mette a discomfort musicalmente",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Lista of 5 cose that eviti always. Falle all in a single brano. Abbraccia the disagio.",
                duration: "30 min",
                examples: [
                  "😰 Example 1: Eviti: dissonances, improvvisare, cantare, rhythms complex, silence",
                  "🎯 Example 2: Paure: condividere lavori, suonare without score, sperimentare",
                  "💪 Example 3: Debolezze techniques: incorporale as features necessarie"
                ]
              },
              {
                title: "⏱️ 60-Second Masterpiece",
                description: "Create the tuo capolavoro in a minuto netto",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Un only minuto for catturare the tua intera visione artistic. Massima concentrazione emotiva.",
                duration: "5 min",
                examples: [
                  "💎 Example 1: Essenza of chi sei as artist in 60 secondi",
                  "🎵 Example 2: Messaggio emotivo more important, ultra-concentrato",
                  "⚡ Example 3: Haiku musicale: maximum impact, minimo tempo"
                ]
              },
              {
                title: "🎪 Musical Frankenstein",
                description: "Assembla parti of compositions different in new mostro",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Take introduzione by piece A, sviluppo by B, conclusione by C. Cuci together. Create mostro affascinante.",
                duration: "25 min",
                examples: [
                  "🧟 Example 1: Intro Bach + sviluppo Coltrane + finale Radiohead",
                  "🎹 Example 2: 5 composers different, 1 piece ibrido",
                  "🎼 Example 3: Tue compositions passate mescolate beyond riconoscimento"
                ]
              },
              {
                title: "🔥 Burn After Playing",
                description: "Compose sapendo that verrà distrutto subito dopo",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create qualcosa of bellissimo that esisterà only for 10 minutes. Poi cancellalo for always. Zero attaccamento.",
                duration: "20 min",
                examples: [
                  "🔥 Example 1: Improvisation recorded, ascoltata a volta, file eliminato",
                  "💨 Example 2: Composition on foglio, eseguita, bruciato the score",
                  "🌊 Example 3: Scultura sonora effimera, zero documentazione"
                ]
              },
              {
                title: "🎯 Target Emotion Precision",
                description: "Comunica an emotion specifica with precisione chirurgica",
                interactionType: "visual",
                prompt: "Choose emotion iperspecifica: 'nostalgia of futuro never vissuto'. Componila with precisione assoluta.",
                duration: "30 min",
                examples: [
                  "😌 Example 1: 'Pace dopo tempesta emotiva'",
                  "🌅 Example 2: 'Speranza fragile but persistente'",
                  "💭 Example 3: 'Malinconia gioiosa' (saudade)"
                ]
              },
              {
                title: "🎪 Controlled Chaos Practice",
                description: "Struttura rigida, contenuto completely chaotic",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Forma ferrissima (sonata, fugue). Riempila with materiale chaotic, atonal, imprevedibile. Tensione forma/contenuto.",
                duration: "35 min",
                examples: [
                  "🎼 Example 1: Forma-sonata perfetta, harmony completely atonal",
                  "🎵 Example 2: Fugue rigorosa with soggetto noise and controsoggetto aleatory",
                  "🎹 Example 3: Rondò ABACA with sections improvvisate caotiche"
                ]
              },
              {
                title: "🎯 One-Instrument Orchestra",
                description: "Create intera orchestra with a only instrument",
                interactionType: "visual",
                prompt: "Use only the tuo instrument but create effetto orchestrale tramite layering, techniques, registri.",
                duration: "35 min",
                examples: [
                  "🎹 Example 1: Piano only that play as orchestra (Liszt, Rachmaninoff style)",
                  "🎸 Example 2: Guitar with loop station, create quartet d'strings",
                  "🎤 Example 3: Voce umana fa percussion, bassi, melodies (beatbox + canto)"
                ]
              },
              {
                title: "🌈 Emotional Alchemy",
                description: "Trasforma emotion negativa in bellezza musicale",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Take anger, sadness, frustrazione. Componila letteralmente, trasformala in arte catartica.",
                duration: "30 min",
                examples: [
                  "😡 Example 1: Rabbia → energia rhythmic violenta but controllata",
                  "😢 Example 2: Tristezza → melody minore deep and terapeutica",
                  "😰 Example 3: Ansia → pattern ripetitivo that gradually si calma"
                ]
              },
              {title:"🤝 Compassionate Composer",description:"Create to support yourself",prompt:"Compose a piece that the 'tomorrow you' would want to hear when tired or discouraged. Offer yourself support through music. 15-20 minutes of pure sonic gentileness.",duration:"30 min",examples:["💚 Consoling melody for difficult moments","🌅 Progressions that give hope","🫂 Imagine yourself listening to this tomorrow, what would you want to hear?"]},
              {title:"🎁 Anonymous Sonic Gift",description:"Compose for a stranger",prompt:"Create a brief piece (5min) as a gift for someone you don't know but imagine: maybe a tired nurse, a lonely elderly person, a curious child. Music as an act of universal kindness.",duration:"20 min",examples:["🫂 Empathy toward unknown humanity","💝 No expectation of recognition","🌍 Contribution to collective good"]},
              {title:"🌱 Micro-Ritual to Begin Sessions",description:"Prepare body and mind in 5 minutes",prompt:"Before every creative session: 2 min gentle stretching, 2 min mindful breathing, 1 min intention ('Today I explore without judging'). Signal to brain: 'Now we create'.",duration:"5 min",examples:["🧘 Create boundary between daily life and creative space","🎯 Positive intention instead of expectation","🌟 Repeat always: becomes flow trigger"]}
],
            'mancanza-ispirazione': [
              {
                title: "Random Music Prompts Generator",
                description: "Three random words become a concept",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Generate 3 completely random words. Create a piece that includes all of them.",
                duration: "15 min",
                examples: [
                  "🎲 Example 1: 'Melancholy + Geometry + Blue' → Cold structured piece with sad mood",
                  "✨ Example 2: 'Chaos + Nature + Found sounds' → Chaotic organic soundscape",
                  "🌙 Example 3: 'Memory + Texture + Monochrome' → Layered piece about memories"
                ]
              },
              {
                title: "Music History Mashup",
                description: "Combine two opposite musical movements",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Baroque + Hip Hop, or Impressionism + Metal. Create the impossible fusion.",
                duration: "45 min",
                examples: [
                  "🏛️ Example 1: Bach fugue with trap beats",
                  "🎵 Example 2: Debussy harmonies with distorted guitars",
                  "🗿 Example 3: Classical form assembled with electronic sounds"
                ]
              },
              {
                title: "Environment Inspiration Hunt",
                description: "Find inspiration in the most mundane sounds",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Record 10 ignored sounds in your room. Use those rhythms/textures/timbres for a piece.",
                duration: "30 min",
                examples: [
                  "🔍 Example 1: Dripping faucet rhythm → Minimalist percussion piece",
                  "💡 Example 2: Wind through window → Breath sounds for composition",
                  "📚 Example 3: Random household sounds → Palette for soundscape"
                ]
              },
              {
                title: "Visual to Music",
                description: "Translate a visual image into music",
                interactionType: "visual",
                prompt: "Choose a visual image. Observe 3 times. Create what you 'hear' while looking.",
                duration: "25 min",
                examples: [
                  "🎵 Example 1: Abstract expressionism → Fluid improvised melodies, sonic rhythm",
                  "🎸 Example 2: Pop art → Energetic composition with bold sounds",
                  "🎻 Example 3: Renaissance painting → Harmonious and balanced structure"
                ]
              },
              {
                title: "Opposite Thinking Exercise",
                description: "Completely flip your initial idea",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Think of a piece you want to write. Now do the EXACT OPPOSITE of every choice you would have made.",
                duration: "20 min",
                examples: [
                  "↔️ Example 1: Wanted to compose short? Make epic long piece",
                  "🔄 Example 2: Wanted serious mood? Make it playful and humorous",
                  "⚡ Example 3: Wanted slow tempo? Complete it at breakneck speed"
                ]
              },
              {
                title: "Constraint Creativity Box",
                description: "Extreme limits force creative solutions",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose 3 absurd limits: only 2 notes, only one rhythm, only whispered sounds, etc.",
                duration: "30 min",
                examples: [
                  "📐 Example 1: Only two pitches + only quarter notes → Minimalist piece",
                  "♻️ Example 2: Only found sounds + only duple meter",
                  "✂️ Example 3: Only vocal sounds + no words"
                ]
              },
              {
                title: "Dream Journal Music",
                description: "Transform recent dreams into sonic works",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Remember a dream from recent days. Recreate it sonically, even if absurd or fragmented.",
                duration: "35 min",
                examples: [
                  "💤 Example 1: Surreal dream → Sound collage of disconnected but emotionally coherent elements",
                  "🌙 Example 2: Nightmare → Dark piece capturing the atmosphere",
                  "✨ Example 3: Lucid dream → Hyper-saturated and impossible soundscape"
                ]
              },
              {
                title: "Childhood Nostalgia Mining",
                description: "Return to what fascinated you as a child",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "3 things you loved at age 8. Incorporate them into a mature adult project.",
                duration: "40 min",
                examples: [
                  "🦖 Example 1: Loved dinosaurs → Art seriess on extinction and fossils",
                  "🚀 Example 2: Loved space → Installation about exploration and solitude",
                  "🎮 Example 3: Loved video games → Conceptual pixel art about virtual reality"
                ]
              },
              {
                title: "Cultural Fusion Project",
                description: "Mix elements from different cultures",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose 2 distant cultures. Unite symbols, patterns, musical styles in a hybrid work.",
                duration: "50 min",
                examples: [
                  "🗾 Example 1: Japanese traditional music + European Baroque",
                  "🌍 Example 2: African rhythms + Scandinavian minimalism",
                  "🎹 Example 3: Indian ragas + Latin American rhythms"
                ]
              },
              {
                title: "Synesthesia Experiment",
                description: "Visualize one sense with another",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "What does the sound of rain look like? What color is Monday? What shape is happiness?",
                duration: "20 min",
                examples: [
                  "👃 Example 1: Compose the smell of morning coffee as sound",
                  "👂 Example 2: Notate the sonic texture of city traffic",
                  "👅 Example 3: Sound piece representing the taste of lemon"
                ]
              },
              {
                title: "Time Traveler Artist",
                description: "What would your music be like in another era?",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Imagine your style in 1920, or 2120. Recreate with techniques/instruments from that era.",
                duration: "45 min",
                examples: [
                  "⏰ Example 1: Your style but with Baroque techniques",
                  "🚀 Example 2: Your subject but in futuristic cyberpunk aesthetic",
                  "📜 Example 3: Your vision but as medieval illuminated manuscript"
                ]
              },
              {
                title: "Emotion Color Mapping",
                description: "Emotional sound palette becomes musical concept",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose a complex emotion. Create sound palette of 5 tonal qualities representing it. Work based only on that sound palette.",
                duration: "30 min",
                examples: [
                  "😌 Example 1: 'Nostalgia' → Warm, muted, nostalgic sound palette",
                  "😰 Example 2: 'Anxiety' → Acid yellow, gray, electric green",
                  "🥰 Example 3: 'Tenderness' → Pale pink, beige, lavender"
                ]
              },
              {
                title: "Fictional Collaboration",
                description: "Work 'with' a artist you admire",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "If you collaborated with Bach / Miles Davis / Björk, what would you create? Start their half.",
                duration: "40 min",
                examples: [
                  "🎵 Example 1: Half piece in Debussy's style, half in yours",
                  "✍️ Example 2: Start as atonal Schoenberg, finish with your approach",
                  "🎶 Example 3: Composition merging Satie and your aesthetic"
                ]
              },
              {
                title: "Problem Solving Art",
                description: "Solve a real problem with creativity",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Daily problem (traffic, waste, loneliness). 10 creative solutions expressed musically.",
                duration: "35 min",
                examples: [
                  "🚗 Example 1: Traffic → Composition about urban chaos with found sounds",
                  "🌱 Example 2: Plastic → Piece using recycled materials as instruments",
                  "💔 Example 3: Isolation → Interactive musical work connecting people"
                ]
              },
              {
                title: "ABC Rapid Ideas",
                description: "One idea for every letter of alphabet",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "A = Cyberpunk soundscape, B = Children as theme, etc. Until Z. Complete list in 15 minutes.",
                duration: "15 min",
                examples: [
                  "📝 Example 1: Mini-sketches for each letter, develop 3 favorites",
                  "💡 Example 2: Only titles, then choose which to realize",
                  "🎵 Example 3: Different sound palette for each letter"
                ]
              },
              {
                title: "Scale Extremes",
                description: "Same work, extreme dimensions",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Version 1: as brief as possible. Version 2: as long as possible. Compare.",
                duration: "1 hour",
                examples: [
                  "🔬 Example 1: 10-second micro-piece vs 30-minute extended composition",
                  "📏 Example 2: Small intimate solo vs large orchestral arrangement",
                  "🎵 Example 3: Minimal haiku-like phrase vs expansive sonic landscape"
                ]
              },
              {
                title: "Remix Your Favorite Piece",
                description: "Reinterpret a masterpiece in your style",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Famous piece you love. Recreate it completely in your musical language.",
                duration: "50 min",
                examples: [
                  "🎶 Example 1: 'Starry Night' in urban collage style",
                  "👩 Example 2: 'Mona Lisa' in abstract expressionist version",
                  "🍎 Example 3: Baroque counterthennt in electronic style"
                ]
              },
              {
                title: "Sensory Deprivation Creation",
                description: "Remove one sense to amplify others",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Work blindfolded, with earplugs, or in total silence. Intensify other senses.",
                duration: "25 min",
                examples: [
                  "🙈 Example 1: Composition with eyes closed, only sound guides",
                  "🙉 Example 2: Composing in absolute silence, total concentration",
                  "🎵 Example 3: Composing in the dark, surprise when you listen back"
                ]
              },
              {
                title: "Weather as Co-Creator",
                description: "Natural elements participate in creation",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Let rain, wind, sun modify your performance while you create it outdoors.",
                duration: "1 hour",
                examples: [
                  "🌧️ Example 1: Recording outdoors in light rain, natural percussion effects",
                  "💨 Example 2: Wind chimes or sustained tones, wind as collaborator",
                  "☀️ Example 3: Playing at dawn/dusk, observe how light changes perception"
                ]
              },
              {
                title: "Future Archaeologist",
                description: "Create 'artifacts' of a future civilization",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Year 3000. Archaeologists find your work. What does it tell about our era?",
                duration: "45 min",
                examples: [
                  "🏺 Example 1: 'Ancient vase' from 2024 with digital symbols",
                  "📱 Example 2: Fossilized smartphone as artifact",
                  "🗿 Example 3: Totem representing social media society"
                ]
              },
,
              {
                title: "🎵 Colori in Suoni",
                description: "Traduci palette cromatiche in palette sonic",
                interactionType: "visual",
                prompt: "Choose 5 colori (da quadro, natura, immagine). Assegna a each colore a timbre/harmony. Compose basandoti on quella palette.",
                duration: "30 min",
                examples: [
                  "🎵 Example 1: Rosso=brass, Blu=strings, Giallo=percussion, Verde=legni",
                  "🌈 Example 2: Palette pastello = tonality maggiori delicate, timbres soft",
                  "🖤 Example 3: Monocromatico nero = a note with infinite variations timbral"
                ]
              },
              {
                title: "📚 Letteratura Sonora",
                description: "Traduci trama of libro/film in structure musicale",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose racconto or film amato. Create piece that segue esattamente the structure narrativa: introduzione, conflitto, climax, risoluzione.",
                duration: "40 min",
                examples: [
                  "📖 Example 1: 'Romeo and Giulietta': theme amoroso → conflitto → tragedia",
                  "🎬 Example 2: 'Inception': layer of realtà = layer musical sovrapposti",
                  "📕 Example 3: 'Il Signore of the Anelli': viaggio epico in forma sonata espansa"
                ]
              },
              {
                title: "🏛️ Architettura Acustica",
                description: "Compose ispirato a edifici and spaces architettonici",
                interactionType: "visual",
                prompt: "Choose building (cattedrale, grattacielo, capanna). Traduci the sue proporzioni, materials, sensazioni in musica.",
                duration: "35 min",
                examples: [
                  "⛪ Example 1: Cattedrale gotica = harmonics aperte, riverbero lungo, verticalità",
                  "🏢 Example 2: Grattacielo moderno = strutture geometriche, rhythms meccanici",
                  "🏡 Example 3: Casa rurale = intimità, materials natural, semplicità"
                ]
              },
              {
                title: "🌍 Musical Tourism",
                description: "Compose nello style of a cultura never studiata",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose tradizione musical sconosciuta (gamelan, flamenco, music tuareg). Studia 30 min, then compose 'by the maniera di'.",
                duration: "45 min",
                examples: [
                  "🎶 Example 1: Gamelan balinese: metallofoni, scale slendro/pelog, interlock",
                  "👏 Example 2: Flamenco: palmas, compás, cante jondo elements",
                  "🪘 Example 3: Poliritmie africane: timeline patterns, call-response"
                ]
              },
              {
                title: "🔬 Scientific Sonification",
                description: "Traduci dati scientifici in musica",
                interactionType: "visual",
                prompt: "Take dataset (temperature, waves cerebrali, fasi lunari). Mappa each parametro a elemento musicale.",
                duration: "40 min",
                examples: [
                  "🌡️ Example 1: Temperature settimanali = pitches (caldo=acuto, freddo=grave)",
                  "🧠 Example 2: Onde alfa/beta = rhythms corrispondenti, theta = drone",
                  "🌙 Example 3: Ciclo lunare = dynamics (luna piena=ff, nuova=pp)"
                ]
              },
              {
                title: "🎹 Character Leitmotiv",
                description: "Create theme musical for 5 personaggi inventati",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Inventa 5 personalità completely different. Compose leitmotiv of 30 secondi for ognuno that capture the sua essenza.",
                duration: "35 min",
                examples: [
                  "👑 Example 1: Regina malvagia = cromatismi discendenti, register grave",
                  "🧚 Example 2: Fatina curiosa = staccati leggeri, register acuto, tonality major",
                  "🦸 Example 3: Eroe riluttante = theme esitante that diventa deciso"
                ]
              },
              {
                title: "🌊 Elements Fusion",
                description: "Compose fusion musical of acqua+fuoco or terra+aria",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose due elementi opposti. Create piece that li fonde: fluido+aggressivo, pesante+etereo.",
                duration: "30 min",
                examples: [
                  "💧🔥 Example 1: Acqua+Fuoco = fluidità with esplosioni improvvise",
                  "🌍💨 Example 2: Terra+Aria = bassi gravi with harmonics acute eteree",
                  "❄️⚡ Example 3: Ghiaccio+Elettricità = cristallino with scariche dissonanti"
                ]
              },
              {
                title: "📐 Golden Ratio Music",
                description: "Use proportions golden for structurere composition",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Sezione aurea (1:1.618). Use questo rapporto for decide durations sections, climax, densità.",
                duration: "40 min",
                examples: [
                  "🎵 Example 1: Brano of 100 battute, climax a battuta 62 (61.8%)",
                  "📊 Example 2: Fibonacci for durations: 1-1-2-3-5-8-13 battute for sections",
                  "🌀 Example 3: Spirale aurea visiva tradotta in crescendo/diminuendo"
                ]
              },
              {
                title: "🎪 Circus Maximalist",
                description: "Più is troppo, more is meglio: massimalismo extreme",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Sovraccarica each parametro: troppi strumenti, troppe notes, troppi generi. Find bellezza in the chaos denso.",
                duration: "35 min",
                examples: [
                  "🎼 Example 1: 10 melodies simultaneous, 5 metri sovrapposti, 3 tonalità",
                  "🌪️ Example 2: Wall of sound tipo Phil Spector but ancora more denso",
                  "🎵 Example 3: Ogni famiglia orchestrale fa cose completely different together"
                ]
              },
              {
                title: "🕰️ Temporal Displacement",
                description: "Compose as if fossi in un'altra epoca",
                interactionType: "visual",
                prompt: "Anno 1600 or 2500. Come composesti with mentalità and resources of quell'epoca?",
                duration: "35 min",
                examples: [
                  "🎻 Example 1: Anno 1600: only instruments d'epoca, contrappunto Renaissance",
                  "🤖 Example 2: Anno 2500: synthesis impossible hour, strutture post-umane",
                  "🏺 Example 3: Anno 500 AC: instruments primetivi, scale modali antiche"
                ]
              },
              {
                title: "🌈 Synesthesia Composition",
                description: "Ogni sound ha odore, sapore, texture tattile",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Assegna caratteristiche non-uditive a each elemento musicale. Compose orchestrando sensazioni multi-sensoriali.",
                duration: "30 min",
                examples: [
                  "👃 Example 1: Violino=lavanda, contrabbasso=legno, flauto=menta",
                  "👅 Example 2: Maggiore=dolce, minore=amaro, dissonanza=piccante",
                  "✋ Example 3: Legato=seta, staccato=vetro, tremolo=sabbia"
                ]
              },
              {
                title: "🎲 Tarot Composition",
                description: "Use tarot for decide structure and mood",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Pesca 5 carte. Ogni carta = a section of the brano. Interpreta symbolism and traducilo in musica.",
                duration: "45 min",
                examples: [
                  "🃏 Example 1: Torre = crollo cathartic, Stella = speranza cristallina",
                  "🔮 Example 2: Morte = trasformazione, Sole = esplosione gioiosa",
                  "🌙 Example 3: Luna = mistero dreamlike, Matto = chaos liberating"
                ]
              },
              {
                title: "🏔️ Topographical Music",
                description: "Profilo montagna = profilo melodico",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Find silhouette geografica (catena montuosa, skyline città). Tracciala as linea melodica.",
                duration: "30 min",
                examples: [
                  "⛰️ Example 1: Alpi = melody with picchi acuti and valli profonde",
                  "🏙️ Example 2: Skyline Manhattan = rhythm serrato with grattacieli = accenti",
                  "🌊 Example 3: Costa frastagliata = melody irregular, organica"
                ]
              },
              {
                title: "🎵 Museum Soundtrack",
                description: "Compose colonna sonora for mostra d'arte",
                interactionType: "visual",
                prompt: "Choose 5 quadri famosi. Create piece that funzioni as tour sonic attraverso the galleria.",
                duration: "40 min",
                examples: [
                  "🎶 Example 1: Impressionisti = texture sfumate, colori harmonics pastello",
                  "🎵 Example 2: Espressionisti = dissonances espressive, contrasti dinamici",
                  "🎼 Example 3: Arte astratta = forms musical non-narrative"
                ]
              },
              {
                title: "🌀 Musical Mandala",
                description: "Composition simmetrica radiale as mandala",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Centro = motivo base. Espandilo radialmente with simmetrie perfette. Forma musical circolare.",
                duration: "35 min",
                examples: [
                  "🎵 Example 1: Motivo centrale si espande with variations simmetriche",
                  "🎵 Example 2: 8 sections identiche but trasposte (as art layers)",
                  "☸️ Example 3: Ogni layer aggiunge simmetria to the precedente"
                ]
              },
              {
                title: "📖 Dictionary Roulette",
                description: "Parola random = concept musicale",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Apri dizionario a chance. Prima parola that leggi = theme of the brano. Interpretala musicalmente.",
                duration: "25 min",
                examples: [
                  "📕 Example 1: 'Ebollizione' = crescendo frenetico, bolle sonic",
                  "📗 Example 2: 'Crepuscolo' = transizione lenta tra luminoso and dark",
                  "📘 Example 3: 'Rizoma' = structure non-gerarchica, connections multiple"
                ]
              },
              {
                title: "🎹 Emotion Gradient",
                description: "Transizione impercettibile tra emotions opposte",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Gioia → sadness in 10 minutes. Cambiamento così graduale by being almost impercettibile.",
                duration: "25 min",
                examples: [
                  "😊😐😢 Example 1: Maggiore → modale → minore with microgradualità",
                  "😡😌😴 Example 2: Agitato → calmo → ipnotico, transitions fluide",
                  "😱😐🙂 Example 3: Terrore → neutralità → serenità, morphing emotivo"
                ]
              },
              {
                title: "🌍 World Fusion Experiment",
                description: "Mescola 3 tradizioni musical completely different",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose 3 culture lontane (es: giapponese, brasiliana, irlandese). Fondile rispettosamente in a brano.",
                duration: "40 min",
                examples: [
                  "🎌🇧🇷🇮🇪 Example 1: Koto + samba + jig = fusion impossible but affascinante",
                  "🎵 Example 2: Raga indiano + blues + tarantella",
                  "🌏 Example 3: Gamelan + tango + throat singing"
                ]
              },
              {
                title: "🔢 Prime Numbers Music",
                description: "Use prime numbers as structure organizing",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "2,3,5,7,11,13... Use for durations, intervalli, numero ripetizioni. Create ordine from the chaos matematico.",
                duration: "35 min",
                examples: [
                  "🎵 Example 1: Sezioni lunghe 2-3-5-7-11-13 battute",
                  "🎼 Example 2: Intervalli of 2-3-5-7 semitoni determine melody",
                  "🥁 Example 3: Pattern ritmici with cicli prime sovrapposti"
                ]
              },
              {
                title: "🎵 Action Painting Sonoro",
                description: "Compose with gestures fisici estremi, record energia",
                interactionType: "visual",
                prompt: "Movimenti ampi, energici, almost violenti with the instrument. Record l'energia cinetica pura.",
                duration: "20 min",
                examples: [
                  "🎹 Example 1: Cluster pianistici with avambracci, energia fisica",
                  "🎸 Example 2: Slide guitar aggressivo, feedback controlled",
                  "🥁 Example 3: Percussioni tribali, everything the corpo coinvolto"
                ]
              },
              {
                title: "🌙 Nocturne Urbano",
                description: "Soundscape of the tua città of night",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Esci from the 23 to the 2. Record sounds urbani notturni. Usali as materiale compositivo.",
                duration: "45 min",
                examples: [
                  "🚗 Example 1: Traffico nocturnal + voci lontane + sirene occasionali",
                  "🏙️ Example 2: Rumori industriali + echoes urbani + silence denso",
                  "🌃 Example 3: Bar that chiudono + passi + conversazioni frammentate"
                ]
              },
              {
                title: "🎹 Alter Ego Composition",
                description: "Create music as the tuo opposto totale",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Introverso? Compose by estroverso. Razionale? Compose emotivamente. Ribalta completely the tuo approccio.",
                duration: "30 min",
                examples: [
                  "🎵 Example 1: Perfezionista compone spontaneamente without riseesre",
                  "🎼 Example 2: Artist cerebrale compone only of pancia",
                  "🎹 Example 3: Minimalista compone massimalismo Baroque"
                ]
              },
              {
                title: "🌊 Tidal Composition",
                description: "Struttura based on maree: flusso and riflusso",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Movimento ondulatorio costante. Materiale that va and torna, cresce and cala as tide.",
                duration: "30 min",
                examples: [
                  "🌊 Example 1: 6 hours of tide in 6 minutes: crescita lenta and calo",
                  "🎵 Example 2: Materiale tematico that torna trasformato ad each ciclo",
                  "🌀 Example 3: Dinamiche and densità that seguono pattern of maree"
                ]
              },
              {
                title: "🎵 Genre-Bending Challenge",
                description: "Take cliché of a genere, usalo in other genere",
                interactionType: "visual",
                prompt: "Power chord metal in piece Baroque. Shuffle jazz in piece techno. Sovverti aspettative.",
                duration: "30 min",
                examples: [
                  "🎸 Example 1: Fugue Bachian with power chords distorti",
                  "🎷 Example 2: Motet Renaissance with swing jazz",
                  "🎹 Example 3: Aria d'opera with beat trap"
                ]
              },
              {
                title: "🔮 Dream Journal Music",
                description: "Sogni of the settimana = materiale compositivo",
                interactionType: "visual",
                prompt: "Tieni diario dreams for 7 giorni. Compose suite in 7 movimenti, uno for each dream.",
                duration: "60 min",
                examples: [
                  "💭 Example 1: Ogni dream = carattere diverso, atmosfera unica",
                  "🌙 Example 2: Logica dreamlike (salti, assurdità) = forma musicale",
                  "😴 Example 3: Emozioni oniriche tradotte direttamente in sound"
                ]
              },
              {
                title: "🏺 Ancient Scales Revival",
                description: "Use ways medievali, scale esotiche dimenticate",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Explore modi: dorico, frigio, lidio, misolidio. O scale persiane, arabe, bizantine.",
                duration: "35 min",
                examples: [
                  "🎵 Example 1: Modo frigio (suono spagnolo/mediorientale)",
                  "🎼 Example 2: Scala araba maqam hijaz with microintervals",
                  "🎹 Example 3: Modi greci antichi: ippodorico, ipofrigio"
                ]
              },
              {
                title: "🎪 Vaudeville Collage",
                description: "Sequenza frenetica of sketch musical brevissimi",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "10 sketch by 30 secondi. Generi, mood, styles completely different. Montaggio rapido.",
                duration: "20 min",
                examples: [
                  "🎹 Example 1: Valzer → dubstep → Gregorian → funk → noise",
                  "🎵 Example 2: Ogni sketch = parodia of uno style diverso",
                  "🎬 Example 3: Zapping musical as cambio canali TV"
                ]
              },
              {
                title: "🌈 Additive Synthesis Life",
                description: "Parti by onda sinusoidale, aggiungi harmonics a a una",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Inizia with sound purissimo (sinus). Aggiungi harmonics progressively. Observe timbre that si costruisce.",
                duration: "30 min",
                examples: [
                  "🎵 Example 1: Fondamentale + 3a harmonic + 5a + 7a... sound that si arricchisce",
                  "🎹 Example 2: Build timbre by zero, controllo totale on harmonics",
                  "🔬 Example 3: Sintesi additiva for comprendere natura of the sound"
                ]
              },
              {
                title: "🎹 Persona Shuffle",
                description: "Ogni 2 minutes diventi composer diverso",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "2 min = Mozart, 2 min = Coltrane, 2 min = Aphex Twin. Cambia personalità compositiva rapidamente.",
                duration: "15 min",
                examples: [
                  "🎼 Example 1: Classico → jazz → electronics → folk → avant-garde",
                  "🎵 Example 2: Impersona styles opposti in rapida successione",
                  "🎹 Example 3: Channel different composers each section"
                ]
              },
              {
                title: "🌍 GPS Composition",
                description: "Coordinate geografiche = parametri musical",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Latitudine = pitches, longitudine = durations. Mappa the world in musica.",
                duration: "35 min",
                examples: [
                  "🗺️ Example 1: Coordinate città natale determina theme principale",
                  "🌏 Example 2: Viaggio geografico = viaggio melodico",
                  "📍 Example 3: Ogni place important of the tua vita = a section"
                ]
              },
              {
                title: "🎵 Pixelation Sonora",
                description: "Riduci risoluzione musical progressively",
                interactionType: "visual",
                prompt: "Alta definizione → lo-fi → 8-bit → 4-bit. Degradazione qualitativa as estetica.",
                duration: "25 min",
                examples: [
                  "🎹 Example 1: Orchestrale lush → chiptune degradato",
                  "🎵 Example 2: Audio that perde campioni progressively",
                  "🔊 Example 3: Bit-crushing as processo compositivo"
                ]
              },
              {
                title: "🌀 Fractal Composition",
                description: "Auto-similarità a scale different: frattali musical",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create pattern. Ripetilo identico but a scale temporal different (metà velocità, doppia, 4x...).",
                duration: "40 min",
                examples: [
                  "🎵 Example 1: Motivo of 4 notes diventa 4 battute diventa 4 sections",
                  "🌿 Example 2: Stessa forma ricorre a micro, meso and macro livello",
                  "❄️ Example 3: Cristallo of neve: simmetria a all the scale"
                ]
              },
              {
                title: "🎹 Unreliable Narrator Music",
                description: "Musica that contraddice se stessa, narratore inaffidabile",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Melody dice a cosa, harmony un'altra, rhythm a third. Messaggi contrastanti intenzionali.",
                duration: "30 min",
                examples: [
                  "🎵 Example 1: Melody gioiosa on harmony triste",
                  "🎼 Example 2: Testo felice sung with melody lugubre",
                  "🎹 Example 3: Rhythm agitato with armonie statiche zen"
                ]
              },
              {
                title: "🌊 Granular Stories",
                description: "Racconta 5 micro-storie in 5 minutes totali",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Ogni minuto = storia completa with inizio-sviluppo-fine. Narrativa condensata.",
                duration: "15 min",
                examples: [
                  "📖 Example 1: Min 1: risveglio, Min 2: avventura, Min 3: amore, Min 4: perdita, Min 5: rinascita",
                  "🎹 Example 2: 5 emotions, 5 micro-drammi completi",
                  "🎵 Example 3: Haiku musical: massima narrazione, minimo tempo"
                ]
              },
              {
                title: "🔥 Phoenix Composition",
                description: "Distruggi the piece a metà, risorge from the ashes",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Prima metà: costruisci. Centro: distruzione totale. Seconda metà: rinascita trasformata.",
                duration: "30 min",
                examples: [
                  "🎼 Example 1: Tema → chaos noise → theme trasfigurato",
                  "🦅 Example 2: Struttura ordinata → collasso → new ordine emergesnte",
                  "🔥 Example 3: Morte symbolic and resurrezione musicale"
                ]
              },
              {
                title: "🎵 Negative Space Music",
                description: "Compose what NON sounds",
                interactionType: "visual",
                prompt: "Importante non is what c'è, but what manca. Vuoti intenzionali eloquenti.",
                duration: "25 min",
                examples: [
                  "🎵 Example 1: Melody implicita creata by pattern of silences",
                  "⚪ Example 2: Scultura sonora for sottrazione, non addizione",
                  "🎹 Example 3: Pause that 'suonano' more of the notes"
                ]
              },
              {
                title: "🌍 Linguistic Music",
                description: "Prosodia of lingua straniera = rhythm and melody",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Record qualcuno that parla lingua sconosciuta. Trascrivi l'intonazione and the rhythm as musica.",
                duration: "35 min",
                examples: [
                  "🗣️ Example 1: Cinese mandarino (tonal) = melody naturale",
                  "🎵 Example 2: Arabo = ornamentazioni melismatiche",
                  "🎼 Example 3: Sseesse = pattern ritmici peculiari"
                ]
              },
              {
                title: "🎪 Musical ADHD",
                description: "Cambia idea each 15 secondi, abbraccia l'instabilità",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Inizia idea. 15 sec dopo, idea completely nuova. Ripeti 12 volte. 3 minutes of chaos affascinante.",
                duration: "10 min",
                examples: [
                  "🎵 Example 1: 12 idee sconnesse in 3 minutes, schizofrenia creative",
                  "🎹 Example 2: Stream of consciousness musical puro",
                  "🌪️ Example 3: ADHD musical as forza creative"
                ]
              },
              {
                title: "🔮 Musical Prophecy",
                description: "Compose the colonna sonora of the tuo futuro ideale",
                interactionType: "visual",
                prompt: "Come suonerà the tua vita tra 10 anni se everything va perfettamente? Compose quella realtà.",
                duration: "40 min",
                examples: [
                  "✨ Example 1: Soundtrack of the tuo successo artistico futuro",
                  "🌟 Example 2: Musica of the te stesso pienamente realizzato",
                  "🎯 Example 3: Manifestazione sonora of the tuoi dreams"
                ]
              },
              {
                title: "🌍 Global Collaboration Virtual",
                description: "Collabora online with artists by altri continenti",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Find artist dall'altra part of the world (forum, social). Scambiate idee, create piece together online.",
                duration: "Variabile",
                examples: [
                  "🌏 Example 1: Reddit r/WeAreTheMusicMakers, find collaboratore casuale",
                  "🎵 Example 2: BandLab, Soundtrap: DAW collaborative online",
                  "🌐 Example 3: Scambio culturale: tu insegni tua tradizione, impari the loro"
                ]
              },
              {title:"🎯 Micro-Genre Invention",description:"Create a musical subgenre all your own",prompt:"Invent a micro-genre with absurd name. Describe its rules, then compose the first piece of the genre.",duration:"30 min",examples:["🔮 Example: 'Post-Gregorian Glitch' with precise rules","🌊 Genre manifesto + 3-minute demo","📜 Complete documentation + sample track"]},,
              {title:"🌈 Impossible Chord",description:"Sound that shouldn't work but does",prompt:"Apparently wrong note combination. Build piece around that 'ugly' chord.",duration:"20 min",examples:["😱 Dissonant cluster as foundation","🎨 Extreme altered chord as home chord","⚡ Unconventional combination repeated until familiar"]},,
              {title:"📻 Imaginary Radio",description:"Create a fictional music radio program",prompt:"Radio program theme, playlist of 5 original 2-3 minute tracks each.",duration:"1 hour",examples:["🎙️ 'Night Radio' with 5 ambient pieces","🌍 'World Music Fusion Show' with 5 cultural fusions","🚀 'Sounds from Future' with 5 experimental pieces"]},,
              {title:"🎭 Sound Character",description:"Compose as if you were someone else",prompt:"Invent fictional musician with biography. Compose in their style, not yours.",duration:"35 min",examples:["👤 Icelandic folk guitarist from 1800","🎹 Martian jazz pianist from 2200","🥁 Futuristic tribal percussionist"]},,
              {title:"🔢 Musical Mathematics",description:"Fibonacci, prime numbers, fractals applied",prompt:"Mathematical sequence governs melody, rhythm or structure. Ex: Fibonacci for section lengths.",duration:"40 min",examples:["📐 Fibonacci: 1-1-2-3-5-8 bars per section","🔢 Prime numbers: notes only on prime beats","🌀 Fractal: pattern repeats at different scales"]},,
              {title:"🎬 Life Soundtrack",description:"Soundtrack for mundane everyday moment",prompt:"Choose boring moment: washing dishes, waiting for bus. Compose epic soundtrack.",duration:"25 min",examples:["🍽️ Washing dishes as action scene","🚌 Bus wait as psychological thriller","☕ Morning coffee as mystical revelation"]},,
              {title:"🌍 Field Recording Opera",description:"Only ambient sounds, zero instruments",prompt:"Record 20 external sounds in 15 min. Compose piece only with those, no traditional instruments.",duration:"40 min",examples:["🚗 Traffic + wind + distant voices = Urban drone","🌳 Nature + footsteps + rain = Organic ambient","🏗️ Construction + machinery = Industrial composition"]},,
              {title:"⏱️ 60 Second Masterpiece",description:"Perfect micropiece in one minute",prompt:"Complete piece (intro, development, ending) in exactly 60 seconds. Count every second.",duration:"15 min",examples:["⚡ Condensed mini-symphony","🎵 Ultra-compressed complete song","🔊 Quick but intense emotional journey"]},,
              {title:"🎨 Texture Palette",description:"Only timbres, zero clear melody or rhythm",prompt:"Piece based only on sound textures. No recognizable melody, only timbral atmospheres.",duration:"30 min",examples:["🌫️ Layering of pads and drones","🎻 Extended techniques on strings","🔊 Extreme processing of simple sounds"]},,
              {title:"🔄 Parallel Versions",description:"Same theme, 5 different arrangements",prompt:"8-bar base melody. Create 5 radically different versions (acoustic, electronic, orchestral, etc).",duration:"50 min",examples:["🎸 Version 1: Solo classical guitar","🎹 Version 2: Ambient synth pad","🥁 Version 3: Percussion only","🎻 Version 4: String quartet","🔊 Version 5: Electronic glitch"]},,
              {title:"🌙 Compose at Night",description:"Explore creativity at unusual hours",prompt:"Wake up at 3 AM. Compose without overthinking, capture that unique mental state.",duration:"20 min",examples:["😴 Semi-lucid dream becomes piece","🌃 Surreal night atmosphere","✨ Musical stream of consciousness"]},,
              {title:"📖 Story in 3 Movements",description:"Musical narrative with beginning, middle, end",prompt:"Tell a story in 3 distinct movements. Can be autobiographical, fantasy, or abstract.",duration:"45 min",examples:["📚 Movement 1: Innocent childhood","⚔️ Movement 2: Conflict and growth","🌅 Movement 3: Resolution and peace"]},,
              {title:"🎲 Compositional Dice",description:"Decisions left to chance",prompt:"Roll dice for: key, tempo, instruments, duration. Compose with those constraints.",duration:"30 min",examples:["🎯 Die 1: Key (1=C, 2=D, etc)","⏱️ Die 2: BPM (×20)","🎸 Die 3: Lead instrument"]},,
              {title:"🔊 Dynamics Extremes",description:"Only pianissimo and fortissimo, nothing in between",prompt:"Piece that alternates only pp and ff. No intermediate dynamics. Extreme contrasts.",duration:"20 min",examples:["🌊 Whisper vs continuous shout","🎵 Extreme delicacy vs maximum power","⚡ Tension built on contrasts"]},,
              {title:"🎼 Graphic Score",description:"Unconventional visual notation",prompt:"Draw graphic scores (lines, shapes, colors). Then interpret them in music.",duration:"35 min",examples:["🎨 Colored doodles = free improvisation","📐 Precise geometries = rigorous structure","🌊 Fluid waves = organic melodies"]},,
              {title:"🌍 Imaginary Collaborative Piece",description:"Each instrument a different 'collaborator'",prompt:"Each track as if played by different musician with own personality.",duration:"40 min",examples:["🎸 Aggressive guitarist vs Contemplative pianist","🥁 Chaotic drummer vs Minimalist bassist","🎻 Romantic violinist vs Cold digital synth"]},,
              {title:"📱 Lo-Fi Intentional",description:"Low quality as aesthetic choice",prompt:"Record deliberately with terrible quality. Distortion, noise, exaggerated compression.",duration:"25 min",examples:["📻 80s cassette aesthetic","☎️ Deliberately degraded phone recording","🔊 Extreme bitcrushing and downsampling"]},,
              {title:"🎵 Ancient Modalities",description:"Pre-tonal modal scales",prompt:"Use Gregorian modes (Dorian, Phrygian, Lydian, etc) instead of major/minor.",duration:"30 min",examples:["🏛️ Dorian mode: mysterious medieval sound","⛪ Phrygian mode: Spanish/oriental atmosphere","✨ Lydian mode: dreamy and airy"]},,
              {title:"🌊 Sound Morphing",description:"Gradual transformation A→B",prompt:"Initial sound slowly transforms into completely different sound.",duration:"25 min",examples:["🎹 Acoustic piano → digital synth (3 min)","🌳 Natural sounds → electronic textures","😊 Happy mood → dark mood gradually"]},,
              {title:"🎯 One-Take Challenge",description:"No possibility of editing",prompt:"Record in one take. All mistakes stay. Total authenticity.",duration:"15 min",examples:["🎤 Live performance with no net","⚡ Improvisation captured on the fly","🔴 Continuous recording no stops"]},,
              {title:"🔮 Jungian Archetypes",description:"Shadow, Anima, Persona in music",prompt:"Compose pieces for psychological archetypes: Shadow (dark side), Anima (feminine), Persona (mask).",duration:"50 min",examples:["🌑 Shadow: Dark piece on repressed aspects","✨ Anima: Melody on vulnerability","🎭 Persona: Theme on social identity"]},,
              {title:"🎪 Sound Circus",description:"Grotesque and surreal atmosphere",prompt:"Distorted waltzes, broken carousel organs, disturbing carnivalesque atmosphere.",duration:"30 min",examples:["🎠 3/4 waltz but deformed and glitchy","🤡 Cheerful but unsettling melodies","🎡 Distorted and surreal nostalgia"]},,
              {title:"📦 Sample Mangling",description:"Destroy and reconstruct existing audio",prompt:"Take sample of anything. Process until unrecognizable but musical.",duration:"35 min",examples:["🔊 Human voice → pad texture","🎸 Guitar → granular percussion","🌊 Field recording → atmospheric drone"]},,
              {title:"⚡ Speed Composition",description:"10 tracks in 60 minutes",prompt:"6 minutes per track. Don't think, just create. Quantity over quality.",duration:"1 hour",examples:["💨 Timer 6 min per track","🎯 Accept imperfections","📦 Raw archive to refine later"]},,
              {title:"🌈 Extreme Synesthesia",description:"All senses mixed in music",prompt:"Compose piece representing: taste+color+temperature+emotion together.",duration:"30 min",examples:["🔥 Red + Spicy + Hot + Anger","❄️ Blue + Mint + Cold + Melancholy","🌻 Yellow + Sweet + Warm + Joy"]},,
              {title:"🎭 Musical Antithesis",description:"Two irreconcilable opposite sections",prompt:"First half: style A. Second half: complete opposite. No transition.",duration:"25 min",examples:["😇 Part 1: Angelic chorale | Part 2: Death metal","🌸 Part 1: Delicate ambient | Part 2: Aggressive industrial","🎹 Part 1: Refined classical | Part 2: Brutal trap"]},,
              {title:"🌍 Polyrhythm Chaos",description:"Rhythmic layers all in different meters",prompt:"3/4 + 5/8 + 7/16 simultaneously. Extreme rhythmic complexity.",duration:"40 min",examples:["🥁 Drums in 4/4, bass in 5/8","🎹 Piano in 7/8, strings in 3/4","🔊 Controlled polyrhythmic chaos"]},,
              {title:"📻 Ghost Radio Stations",description:"Fragments of imaginary transmissions",prompt:"Compose as if scanning night radio: music fragments, voices, interference.",duration:"30 min",examples:["📡 Mix of disturbed random genres","🌌 Fragmented distant voices","📻 Static and interrupted melodies"]},,
              {title:"🎼 Invented Notation",description:"Create new musical writing system",prompt:"Invent symbols and rules for writing music. Then compose using only that system.",duration:"45 min",examples:["🎨 Colors = pitches, shapes = durations","📐 Geometries = harmonies","🔣 Personal musical alphabet"]},,
              {title:"🌊 Wave Meditation",description:"Single note evolves for 10 minutes",prompt:"One note only. Modulate it, process it, evolve it slowly for 10 full minutes.",duration:"15 min",examples:["🎹 Middle C with infinite reverb","🌀 Drone that changes timbre gradually","🔊 Static note becoming landscape"]},,
              {title:"🎪 Musical Dadaism",description:"Total non-sense becomes art",prompt:"Dada approach: absolute randomness, absurd, anti-logic. Non-musical performance.",duration:"20 min",examples:["🎲 Completely random sounds","📦 Non-musical objects as instruments","🤪 Deliberately illogical composition"]},
              {title:"🌟 Sonic Gratitude",description:"Compose musical thanksgiving",prompt:"Think of 3 people/things you're grateful for. Create a brief melodic theme for each (2-3 min). At the end, weave them into a single piece of gratitude.",duration:"20 min",examples:["💝 Theme for a teacher who inspired you","🌳 Theme for nature that nourishes you","🎵 Theme for music itself that heals you"]},
              {title:"🎁 Healing Song for Child You",description:"Write for your 8-year-old self",prompt:"Imagine yourself at 8 years old. What would they have wanted to hear? Compose a song/piece that offers comfort, validation, encouragement to that child. Can be moving.",duration:"40 min",examples:["🧸 Simple words, gentle melody","💙 'You are enough', 'You are loved', 'It's okay'","😭 Allow it to be emotionally intense"]},
              {title:"📸 Today's Sonic Snapshot",description:"Musical documentary of your mood now",prompt:"Without overthinking: improvise 5 minutes that capture exactly how you feel in this precise moment. Honest emotional snapshot.",duration:"5 min",examples:["📷 Raw mood, unfiltered","🎤 Always record, even if 'ugly'","📅 Do regularly: emotional archive"]}
],
            'burnout-accademico': [
              {
                title: "5-Minute Brain Dump",
                description: "Unload all worries onto paper",
                interactionType: "visual",
                prompt: "5 minute timer. Write EVERYTHING that stresses you at Conservatory, exams, projects. Then tear it up.",
                duration: "5 min",
                examples: [
                  "📝 Example 1: Stream of consciousness about deadlines, then burn it",
                  "✏️ Example 2: List fears/anxieties, then compose relaxing motifs over them",
                  "🗑️ Example 3: Letter to anxiety, read it aloud, then throw away"
                ]
              },
              {title:"🎯 Musical Pomodoro",description:"25 min focus + 5 min break",prompt:"Timer 25 min for specific task. 5 min break mandatory. Repeat. Prevents burnout from too-long sessions.",duration:"30 min",examples:["🍅 4 pomodoros = 2 productive hours","⏱️ Break is sacred, don't skip","🎵 Total focus during the 25 min"]},,
              {title:"📵 Phone Lock Session",description:"Lock phone for 90 minutes",prompt:"Blocker app or give phone to roommate. 90 min without digital distractions.",duration:"90 min",examples:["🔒 Freedom, Forest, or locked drawer","📚 Deep work on important project","✨ Regained deep concentration"]},,
              {title:"🌅 Morning Pages Routine",description:"3 pages stream of consciousness in morning",prompt:"Right after waking, 3 pages of free writing. No judgment. Empty mind before starting day.",duration:"15 min",examples:["📝 Automatic writing, no rereading","🌄 Becomes morning ritual","💭 Clarifies mind and priorities"]},,
              {title:"🎨 Joy List Activation",description:"10 things that bring you musical joy",prompt:"List 10 musical activities you genuinely love. Insert at least 1 in the week.",duration:"10 min",examples:["🎵 Examples: jam sessions, vinyl listening, concerts","📅 Schedule 1 joy activity per week","💜 Not everything must be productive"]},,
              {title:"🚶 Walk & Talk Therapy",description:"Walk while solving problem mentally",prompt:"Problem that stresses you. 30 min walk thinking about it. Movement helps perspective.",duration:"30 min",examples:["🌳 Walk in nature preferable","🗣️ Talk out loud if alone","💡 Solutions emerge while walking"]},,
              {title:"🧘 Progressive Muscle Relaxation",description:"Tense and relax muscles systematically",prompt:"Start from feet. Tense muscles 5 sec, relax 10 sec. Go up to head. Release accumulated tensions.",duration:"20 min",examples:["💪 Clenched fists → open hands","😬 Tense shoulders → dropped shoulders","🦵 Contracted legs → relaxed legs"]},,
              {title:"🎭 Alter Ego Practice",description:"Practice as if you were your musical idol",prompt:"Imagine being musician you admire. How would they approach this practice? Imitate approach.",duration:"45 min",examples:["🎸 'How would Miles Davis play this?'","🎹 'How would Glenn Gould practice?'","🎵 Adopt master's mindset"]},,
              {title:"📊 Weekly Review Ritual",description:"Sunday evening: week review",prompt:"What went well? What to improve? 3 priorities next week. Reset and restart.",duration:"30 min",examples:["✅ Celebrate successes (even small)","🔄 Adjust strategy if necessary","🎯 Max 3 priorities (not 10!)"]},,
              {title:"🍃 Minimal Commitment Day",description:"One day a week: zero extra commitments",prompt:"Choose one day. No social events, no extra projects. Only essential + rest.",duration:"1 day",examples:["📅 Ex: every Sunday = sacred rest day","🚫 Learn to protect free time","🔋 Complete weekly recharge"]},,
              {title:"🎧 Binaural Beats Focus",description:"Frequencies for concentration or relaxation",prompt:"YouTube/Spotify: binaural beats. 40Hz for focus, 4Hz for sleep. Background during study.",duration:"Variable",examples:["🧠 40Hz gamma waves = concentration","😴 4Hz delta waves = deep sleep","🎵 Integrate in daily routine"]},,
              {title:"📖 Read for Pleasure",description:"Non-academic reading for 20 minutes",prompt:"Book, comic, magazine you like. Zero guilt. Feeds creativity.",duration:"20 min",examples:["📚 Fiction, fantasy, thriller, graphic novel","🚫 NO manuals, NO music theory","🌟 Pure pleasure of reading"]},,
              {title:"🍵 Tea Ritual Meditation",description:"Prepare and drink tea with full presence",prompt:"Heat water. Observe infusion. Drink slowly. Mindfulness through daily routine.",duration:"15 min",examples:["🫖 Japanese tea ceremony as inspiration","👃 Smell aroma, feel cup warmth","🧘 Active and accessible meditation"]},,
              {title:"🎯 Done List (not To-Do)",description:"End of day: list what you HAVE done",prompt:"Instead of infinite to-do list, write what you completed today. Recognize actual productivity.",duration:"5 min",examples:["✅ Validate real efforts made","🎊 Celebrate micro-progress","💪 Fights feeling 'I did nothing'"]},,
              {title:"🌡️ Stress Temperature Check",description:"Scale 1-10: how stressed are you now?",prompt:"Number from 1 to 10. If >7, mandatory break. If >9, day off. Listen to signals.",duration:"1 min",examples:["📊 Track stress daily","🚨 Threshold 7 = intervention needed","🛑 Threshold 9 = forced rest"]},,
              {title:"🎨 Creative Cross-Training",description:"Do art different from music",prompt:"Paint, write poetry, photography, dance. 30 min of alternative creative expression.",duration:"30 min",examples:["🖌️ Emotional abstract painting","✍️ Creative writing stream of consciousness","📸 Urban walk photography"]},,
              {title:"🤝 Accountability Partner",description:"Weekly check-in with fellow musician",prompt:"Find study companion. 15 min check-in every week: goals, challenges, mutual support.",duration:"15 min/week",examples:["📞 Video call or coffee together","🎯 Share goals and progress","💬 Mutual emotional support"]},,
              {title:"🏃 Cardio Energy Boost",description:"15 minutes aerobic activity",prompt:"Running, bike, rope, dance. Elevate heartbeat for 15 min. Endorphins counter burnout.",duration:"15 min",examples:["🏃 Light jogging","🚴 Bike around block","🎵 Cardio dance at home"]},,
              {title:"🌙 Digital Sunset Ritual",description:"No screens 1 hour before sleep",prompt:"From 10pm (or your time): zero screens. Books, stretching, acoustic music, meditation.",duration:"1 hour",examples:["📚 Paper reading","🎸 Acoustic instrument improvisation","🧘 Restorative yoga"]},,
              {title:"🎵 Emotional Playlist",description:"Create playlist for each mood",prompt:"5 playlists: Energy, Focus, Relax, Sadness, Joy. Use music as mood medicine.",duration:"30 min setup",examples:["⚡ Energy playlist: uptempo, motivating","🧠 Focus playlist: instrumental, minimal","😌 Relax playlist: ambient, nature"]},,
              {title:"📝 Exam Anxiety Protocol",description:"Pre-exam routine to manage anxiety",prompt:"Day before: light review (NO cramming), 8h sleep, healthy breakfast, 4-7-8 breathing before entering.",duration:"Variable",examples:["🚫 NO all-nighter before exam","🥗 Nutrition and hydration","🌬️ Breathing technique before starting"]},,
              {title:"🏆 Progress Portfolio",description:"Collect evidence of your improvements",prompt:"Recordings, scores, projects each month. Compare: growth is gradual but real.",duration:"15 min/month",examples:["📼 Monthly recordings same piece","📊 Track skill progression","🎉 Celebrate concrete improvements"]},,
              {title:"🌍 Comparison Detox",description:"One week without looking at other musicians online",prompt:"Uninstall social or block musicians' profiles for 7 days. Focus on YOUR path.",duration:"7 days",examples:["📵 Instagram, YouTube, TikTok pause","🎯 Focus only on yourself","💪 Regain personal confidence"]},,
              {title:"🎭 Failure Resume",description:"List of your failures and what you learned",prompt:"Write 5 musical failures. Next to each: what you learned. Normalize errors as part of growth.",duration:"20 min",examples:["❌ Failed audition → Learn anxiety management","🎵 Rejected piece → Improve orchestration","📚 Repeated exam → Study different strategies"]},,
              {title:"🔥 Burnout Symptom Tracker",description:"Recognize early warning signs",prompt:"Burnout symptoms: cynicism, exhaustion, detachment. Weekly check. Intervene early.",duration:"5 min/week",examples:["😞 Symptoms: irritability, apathy, insomnia","🚨 Early intervention prevents collapse","🩺 Seek professional support if necessary"]},,
              {title:"🎨 Passion Reignite Exercise",description:"Why did you start making music?",prompt:"Write letter to child you: why did you love music? Reconnect to that original spark.",duration:"15 min",examples:["💭 Remember first instrument, first emotion","✨ First time music moved you","🎵 Recover pure love for music"]},,
              {title:"🧩 Skill Stack Diversification",description:"Develop complementary skill",prompt:"Beyond instrument: audio production, teaching, music history. Reduces pressure on single skill.",duration:"Variable",examples:["🎛️ Learn DAW (Logic, Ableton)","👨‍🏫 Tutor beginners","📚 Study history and cultural context"]},,
              {title:"🌈 Values Alignment Check",description:"Does what you do reflect your values?",prompt:"List 5 personal values. Academic activities aligned? If no, adjust or accept temporary misalignment.",duration:"20 min",examples:["💎 Ex: Creativity, Authenticity, Growth","⚖️ Conservatory vs Values: compatible?","🎯 If conflict: long-term strategy"]},,
              {title:"🎤 Speak Your Struggle",description:"Share difficulties with trusted person",prompt:"Call friend, mentor, family. Verbalize stress. You're not alone, talking helps.",duration:"30 min",examples:["📞 'I feel overwhelmed, can I vent?'","👂 Empathetic listening is therapeutic","🤗 Vulnerability is strength, not weakness"]},,
              {title:"🏖️ Staycation Mini-Retreat",description:"Weekend completely disconnected",prompt:"48 hours zero academic music. Be tourist in your city, explore, rest, play.",duration:"2 days",examples:["🗺️ New places in city","🎨 Museums, cinema, nature","🚫 NO scores, NO DAW, NO theory"]},,
              {title:"🎯 Energy ROI Analysis",description:"What gives maximum return for minimum effort?",prompt:"List study activities. Which give max results with min energy? Focus on those.",duration:"15 min",examples:["📊 80/20 rule: 20% activities = 80% results","🎯 Specific technique vs generic hours","⚡ Work smart, not just hard"]},,
              {title:"🌟 Future Self Visualization",description:"Imagine yourself 5 years from now serene and fulfilled",prompt:"Close eyes. Visualize yourself in 5 years: where are you? What do you do? How do you feel? Still music?",duration:"10 min",examples:["🔮 Clear vision gives direction","💭 It's ok if future doesn't include conservatory","🎵 Or maybe includes happy musical career"]},,
              {title:"🧘 Yoga Nidra Session",description:"Yogic sleep for deep rest",prompt:"YouTube 'Yoga Nidra'. 20-30 min deep relaxation. Equivalent to 2 hours normal sleep.",duration:"30 min",examples:["😴 Body immobile, mind alert","🧠 Restores nervous system","🌙 Ideal afternoon or pre-sleep"]},
              {
                title: "Single Task Promise",
                description: "Today do ONLY one thing, but do it well",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "List of 10 things to do. Choose ONE. Do only that today. Ignore the rest.",
                duration: "Variable",
                examples: [
                  "✅ Example 1: Only preparatory sketches, nothing else",
                  "🎵 Example 2: Only base color application, stop",
                  "📚 Example 3: Only reference research, no production"
                ]
              },
              {
                title: "Digital Detox Studio Time",
                description: "2 hours of completely offline work",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Turn off phone and PC. Work only with hands and physical materials for 2 hours.",
                duration: "2 hours",
                examples: [
                  "📵 Example 1: Only acoustic instruments, no digital",
                  "🚫 Example 2: Acoustic practice, zero tech distractions",
                  "🎵 Example 3: Traditional notetion, no online tutorials"
                ]
              },
              {
                title: "Energy Audit Worksheet",
                description: "Map what drains and what recharges you",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Divide sheet: left = energy vampires, right = energy boosters. Reorganize priorities.",
                duration: "15 min",
                examples: [
                  "🔋 Example 1: Avoid draining projects, focus on energizing ones",
                  "💡 Example 2: Identify toxic people/situations, reduce exposure",
                  "⚡ Example 3: Schedule restorative activities between demanding ones"
                ]
              },
              {
                title: "Micro-Break Protocol",
                description: "3-minute breaks every hour of work",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Timer every 60 minutes. Stop 3 minutes: stretching, breathing, or look outside. No screens.",
                duration: "3 min x N",
                examples: [
                  "🧘 Example 1: Neck and shoulder stretching, release tension",
                  "🌬️ Example 2: 10 deep breaths at window",
                  "👀 Example 3: Palming (hands over closed eyes) to relax vision"
                ]
              },
              {
                title: "Permission to Be Mediocre",
                description: "Today 60% effort is enough",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose a task. Do it with 60% of usual effort. It's enough. Really.",
                duration: "Variable",
                examples: [
                  "📐 Example 1: Rough improvisation instead of finished",
                  "🎵 Example 2: Approximate color study, not final rendering",
                  "✏️ Example 3: Rough concept, not perfect presentation"
                ]
              },
              {
                title: "Passion Project 30 Minutes",
                description: "Work on something you LOVE, not something you must do",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "30 minutes ONLY for personal project that excites you. Zero guilt.",
                duration: "30 min",
                examples: [
                  "💜 Example 1: Fantasy illustration you've wanted to do for months",
                  "🎵 Example 2: New technique you want to experiment with",
                  "✨ Example 3: Personal seriess unrelated to Conservatory"
                ]
              },
              {
                title: "Say No Practice",
                description: "Politely decline a request today",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Identify something you can say no to. Practice: 'I can't right now, thank you'.",
                duration: "5 min",
                examples: [
                  "🚫 Example 1: Non-essential collaboration that stresses you",
                  "❌ Example 2: Social request taking away creative time",
                  "🛑 Example 3: Non-fundamental extra-academic commitment"
                ]
              },
              {
                title: "Body Scan Relaxation",
                description: "Systematically relax every muscle",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Lie down. Start from feet, slowly go up. Consciously relax each body part.",
                duration: "15 min",
                examples: [
                  "🦶 Example 1: Feet → legs → pelvis → back → shoulders → head",
                  "💆 Example 2: Extra focus on tense areas (shoulders, jaw)",
                  "😌 Example 3: Repeat 2-3 times if particularly stressed"
                ]
              },
              {
                title: "Gratitude Art Journal",
                description: "Draw 5 things you're grateful for today",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Sketchbook: 5 mini-compositions of today's positive sounds, even tiny ones.",
                duration: "10 min",
                examples: [
                  "☕ Example 1: Good coffee, beautiful light, friend who texted",
                  "🌞 Example 2: Successful project, pleasant break, nice sunset",
                  "💛 Example 3: Illustrate gratitude for tools, studio space, health"
                ]
              },
              {
                title: "Movement Snack",
                description: "5 minutes of energizing movement",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Put on music. Move freely for 5 minutes: dance, jump, dynamic stretching.",
                duration: "5 min",
                examples: [
                  "💃 Example 1: Dance to a song you love, let loose",
                  "🤸 Example 2: Jumping jacks, stretching, wide movements",
                  "🧘 Example 3: Quick yoga flow to reactivate body"
                ]
              },
              {
                title: "Sleep Hygiene Setup",
                description: "Create evening ritual for better sleep",
                interactionType: "visual",
                prompt: "30 min pre-sleep: no screens, herbal tea, reading or stretching. Repeat every night.",
                duration: "30 min",
                examples: [
                  "📚 Example 1: Reading + chamomile + soft lights",
                  "🧘 Example 2: Guided meditation + journal + breathing",
                  "🎵 Example 3: Relaxing practice journal + calm music + routine"
                ]
              },
              {
                title: "Workload Triage",
                description: "Reorganize priorities realistically",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "List everything. Categories: Urgent, Important, Can wait, Delegable. Recalculate deadlines.",
                duration: "20 min",
                examples: [
                  "📋 Example 1: Exam next week = Urgent, online tutorial = Wait",
                  "✅ Example 2: Portfolio = Important, studio cleaning = Delegate",
                  "🎯 Example 3: Final project = Urgent+Important, side project = Wait"
                ]
              },
              {
                title: "Forest Bathing (Shinrin-yoku)",
                description: "Mindful immersion in nature",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "40 minutes in park/nature. Walk slowly. Observe, smell, touch. Zero phone.",
                duration: "40 min",
                examples: [
                  "🌳 Example 1: City park, observe trees and birds",
                  "🌿 Example 2: Forest walk, collect interesting leaves",
                  "🏞️ Example 3: Lake or river, listen to water sounds"
                ]
              },
              {
                title: "Worry Time Container",
                description: "15 minutes dedicated ONLY to worrying",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose a time. 15 min for anxieties. Outside that window, postpone worries.",
                duration: "15 min",
                examples: [
                  "⏰ Example 1: 6:00 PM = worry time, rest of day = worry-free zone",
                  "📝 Example 2: Write anxieties during worry time, then close notebook",
                  "🚫 Example 3: When worries emerges outside time: 'I'll think about it at 6'"
                ]
              },
              {
                title: "Perfection Release Exercise",
                description: "Complete something at 70% and consider it done",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Project you're procrastinating due to perfectionism? Take it to 70% and STOP. It's enough.",
                duration: "Variable",
                examples: [
                  "✅ Example 1: Portfolio 'good enough' publish it",
                  "🎵 Example 2: Work '70% done' = Done. Start new one",
                  "📱 Example 3: 'Decent' social post publish it, not perfect"
                ]
              },
              {
                title: "Social Battery Check",
                description: "Assess if you need people or solitude",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Ask yourself: social energy high or low? Honor answer. Ok to say no to outings, ok to ask for company.",
                duration: "5 min",
                examples: [
                  "👥 Example 1: Battery low → Decline invites, recharge alone",
                  "🤗 Example 2: Battery high → Call friend, study with company",
                  "⚖️ Example 3: Alternate social days and solitary days"
                ]
              },
              {
                title: "Breathing Reset 4-7-8",
                description: "Breathing technique to calm nervous system",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Inhale 4 seconds, hold 7, exhale 8. Repeat 4 cycles. Resets acute anxiety.",
                duration: "2 min",
                examples: [
                  "🌬️ Example 1: Before presentations or exams",
                  "😰 Example 2: When you feel anxiety rising suddenly",
                  "🧘 Example 3: In morning to start day calm"
                ]
              },
              {
                title: "Studio Environment Reset",
                description: "Reorganize workspace for fresh energy",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "20 minutes: clean, tidy, change arrangement. New space = new energy.",
                duration: "20 min",
                examples: [
                  "🧹 Example 1: Remove old projects, clean space",
                  "💡 Example 2: Change lighting, add plant",
                  "🎵 Example 3: Organize materials for accessibility"
                ]
              },
              {
                title: "Self-Compassion Letter",
                description: "Write to yourself as you would to a friend",
                interactionType: "visual",
                prompt: "What are you blaming yourself for? Write what you'd tell a friend in same situation.",
                duration: "10 min",
                examples: [
                  "💌 Example 1: 'I'm behind' → 'You're doing your best'",
                  "💙 Example 2: 'I made mistakes' → 'Mistakes are learning'",
                  "🤗 Example 3: 'I'm not enough' → 'You're growing, it takes time'"
                ]
              },
,
              {
                title: "🎵 Musical Micro-Breaks",
                description: "Pause of 3 minutes each 25 minutes of studio",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Tecnica Pomodoro adattata: 25 min studio intenso + 3 min rest totale (stretching, respiro, acqua).",
                duration: "3 min",
                examples: [
                  "🍅 Example 1: Timer 25 min studio → 3 min stretching collo/spalle",
                  "💧 Example 2: 25 min technique → 3 min bevi acqua, guarda lontano",
                  "🧘 Example 3: 25 min repertorio → 3 min respirazione deep"
                ]
              },
              {
                title: "🌅 Morning Pages Musicali",
                description: "Scrivi stream of consciousness musical to the mattino",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "3 pagine or 10 minutes of scrittura libera on musica, emotions, obiettivi. Nessun filtro.",
                duration: "10 min",
                examples: [
                  "📝 Example 1: Scrivi paure, speranze, idee without rileggere",
                  "💭 Example 2: Dialogo scritto with the tuo perfezionista interiore",
                  "✍️ Example 3: Lista of gratitudine musical + preoccupazioni scaricate"
                ]
              },
              {
                title: "🎹 Playful Practice",
                description: "15 minutes of studio completely giocoso",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Studia as a bambino that gioca: without giudizio, only esplorazione divertente.",
                duration: "15 min",
                examples: [
                  "🎈 Example 1: Improvise melodies stupide on the piece difficile",
                  "🎪 Example 2: Play the piece 'sbagliato' of proposito, then normal",
                  "🌈 Example 3: Inventa storie assurde for each frase musicale"
                ]
              },
              {
                title: "💤 Power Nap Musicale",
                description: "20 minutes of riposo profondo tra sessioni",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Dopo 2 hours of studio intenso, 20 min of nap or riposo totale. Aumenta produttività.",
                duration: "20 min",
                examples: [
                  "😴 Example 1: Dopo technique mattutina, 20 min pennichella",
                  "🛌 Example 2: Pomeriggio: riposo with timer, darkness, silence",
                  "🎧 Example 3: Riposo guidato with meditazione (Headspace, Calm)"
                ]
              },
              {
                title: "🍃 Nature Reset",
                description: "30 minutes in natura without telefono",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Esci, cammina in parco/bosco. Zero tecnologia. Solo osservazione and respiro.",
                duration: "30 min",
                examples: [
                  "🌳 Example 1: Passeggiata in the parco, osserva alberi",
                  "🌊 Example 2: Siedi vicino acqua (fiume, mare, fontana)",
                  "🎵 Example 3: Concert hall or music library, walk slowly"
                ]
              },
              {
                title: "🎹 Role Reversal",
                description: "Imagine of consigliare a amico in the tua situazione",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Se a amico avesse the tuo burnout, what would you tell them? Poi applicalo a te stesso.",
                duration: "10 min",
                examples: [
                  "💬 Example 1: Scrivi lettera of consigli all'amico, then rileggila for te",
                  "🤝 Example 2: Dialogo imaginary where consigli te stesso",
                  "💙 Example 3: Compassione for altri = compassione for te"
                ]
              },
              {
                title: "📊 Energy Audit",
                description: "Traccia energia durante the giornata for 3 giorni",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Ogni 2 ore: marks livello energia 1-10. Identify pattern, ottimizza orari.",
                duration: "5 min x 3 giorni",
                examples: [
                  "📈 Example 1: 8:00=7, 10:00=9, 12:00=6... Picco morning!",
                  "🕐 Example 2: Scopri that dopo pranzo energia cala: studia technique prima",
                  "⚡ Example 3: Sera alto: work on creativity/espressione"
                ]
              },
              {
                title: "🎵 Slow Practice Meditation",
                description: "Play 10x more lento of the normal, piena presenza",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Passaggio difficile: rallentalo assurdamente. Ogni note diventa meditazione.",
                duration: "15 min",
                examples: [
                  "🐌 Example 1: Scala veloce → suonala lentissima, massima qualità",
                  "🧘 Example 2: Passaggio virtuoso → ultra-slow, respira tra notes",
                  "🎼 Example 3: Frase musical → 5x more lenta, presence totale"
                ]
              },
              {
                title: "💬 Venting Session",
                description: "15 minutes of sfogo totale, then chiudi",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Timer 15 min. Scrivi/parla all the frustrazioni. Poi basta, passa beyond.",
                duration: "15 min",
                examples: [
                  "😤 Example 1: Scrivi everything what ti fa inc**re, then strappa foglio",
                  "🗣️ Example 2: Record vocal of sfogo, then cancella",
                  "📝 Example 3: Lista lamentele, then lista gratitudini (bilancia)"
                ]
              },
              {
                title: "🎵 Creative Cross-Training",
                description: "1 hour of arte non-musicale",
                interactionType: "visual",
                prompt: "Fai qualcosa of creative that non sia musica: disegna, scrivi, balla, cucina.",
                duration: "60 min",
                examples: [
                  "🎼 Example 1: Disegno astratto with pennarelli, zero giudizio",
                  "📖 Example 2: Scrivi racconto breve, poesia, diario creative",
                  "🍳 Example 3: Cucina ricetta nuova, improvise ingredienti"
                ]
              },
              {
                title: "🤝 Peer Support Circle",
                description: "Condividi burnout with 2-3 colleghi artists",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Find altri students/artists. Condividete fatiche, supportatevi. Non siete soli.",
                duration: "30 min",
                examples: [
                  "☕ Example 1: Caffè with compagni, parlate of stress",
                  "💬 Example 2: Gruppo WhatsApp 'Burnout Support' tra artists",
                  "🎓 Example 3: Study buddy: studiate together, fate rests together"
                ]
              },
              {
                title: "📵 Digital Detox Evening",
                description: "Dopo the 20:00, zero schermi",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Dalle 20 a letto: no telefono, no PC. Leggi, play for piacere, riposa.",
                duration: "Serata",
                examples: [
                  "📚 Example 1: Leggi libro cartaceo, tè caldo, light soffusa",
                  "🎹 Example 2: Play for puro piacere, niente by studiare",
                  "🛁 Example 3: Bagno caldo, candele, music rilassante"
                ]
              },
              {
                title: "🎯 One Thing Only",
                description: "Choose UNA priorità for today, ignora resto",
                interactionType: "visual",
                prompt: "Burnout = troppe cose. Oggi: a sola priorità important. Resto can aspettare.",
                duration: "5 min",
                examples: [
                  "📋 Example 1: Oggi only: 'Memorizzare before pagina Sonata'",
                  "🎵 Example 2: Una priorità: 'Studiare rhythm passaggio batt. 45-60'",
                  "✅ Example 3: Focus unico: 'Respirazione for controllo nervosismo'"
                ]
              },
              {
                title: "🌊 Progressive Muscle Relaxation",
                description: "Rilassa each gruppo muscolare sistematicamente",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Tensione 5 sec → rilascio. Parti piedi, sali until a testa. 15 min totali.",
                duration: "15 min",
                examples: [
                  "🦶 Example 1: Piedi→polpacci→cosce→addome→petto→braccia→viso",
                  "💪 Example 2: Tendi each muscolo 5 sec, then rilascia completamente",
                  "😌 Example 3: Audio guidato (YouTube: PMR guided meditation)"
                ]
              },
              {
                title: "🎵 Gratitude for Music",
                description: "Lista 10 cose that ami of the musica",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Burnout fa dimenticare perché ami the musica. Remember: 10 motivi of gratitudine.",
                duration: "10 min",
                examples: [
                  "💙 Example 1: 'Amo when un'harmony mi fa venire brividi'",
                  "✨ Example 2: 'Quando improvviso and the dita sanno where andare'",
                  "🎶 Example 3: 'Commozione when eseguo piece that amo'"
                ]
              },
              {
                title: "🔄 Routine Shuffle",
                description: "Cambia ordine solito studio for a settimana",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Se always: technique→repertorio→teoria, prova: teoria→repertorio→technique. Nuova energia.",
                duration: "7 giorni",
                examples: [
                  "🔀 Example 1: Inizia with what of solito finisci",
                  "🎲 Example 2: Ogni day ordine diverso casuale",
                  "🌈 Example 3: Settimana 'al contrario': evening/morning invertiti"
                ]
              },
              {
                title: "🎵 Study Space Refresh",
                description: "Cambia ambiente of studio for rinnovare energia",
                interactionType: "visual",
                prompt: "Nuovi posti: biblioteca, parco, caffè, sala diversa. Ambiente influenza energia.",
                duration: "Variabile",
                examples: [
                  "☕ Example 1: Studia teoria to the bar, repertorio a casa",
                  "🌳 Example 2: Tecnica to the chiuso, creativity all'aperto",
                  "📚 Example 3: Rota 3 places different in the settimana"
                ]
              },
              {
                title: "💆 Self-Massage Ritual",
                description: "5 minutes of auto-massaggio mani, collo, spalle",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Artists accumulano tension. Massaggia: mani, avambracci, collo, spalle.",
                duration: "5 min",
                examples: [
                  "👐 Example 1: Massaggio profondo tra pollice-indice (punti tension)",
                  "💆 Example 2: Rotazioni collo, massaggio trapezi",
                  "🤲 Example 3: Stretching + massaggio avambracci (pianisti/chitarristi)"
                ]
              },
              {
                title: "📖 Inspiring Biography",
                description: "Leggi of artist that ha superato difficoltà",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Biografia/autobiografia of artista resiliente. Trovi forza in the loro storie.",
                duration: "30 min/giorno",
                examples: [
                  "🎹 Example 1: Glenn Gould, Nina Simone, Ludovico Einaudi",
                  "🎺 Example 2: Miles Davis, Chet Baker (and the loro battaglie)",
                  "📚 Example 3: 'The Inner Game of Music' (Barry Green)"
                ]
              },
              {
                title: "🎯 Weekly Reset Ritual",
                description: "Domenica: review settimana, plan prossima",
                interactionType: "visual",
                prompt: "1 hour domenica: what is andato bene? What migliorare? Piano semplice prossima settimana.",
                duration: "60 min",
                examples: [
                  "📊 Example 1: Review: 3 successi, 2 sfide, 1 obiettivo nuovo",
                  "📅 Example 2: Plan: 3 priorità settimana, calendario realistico",
                  "🧘 Example 3: Chiusura settimana: gratitudine + intenzioni nuove"
                ]
              },
              {
                title: "🌙 Sleep Hygiene Upgrade",
                description: "Migliora qualità sonno with ritual serale",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Stesso orario a letto, camera fresca/buia, no schermi 1h prima, rilassamento.",
                duration: "Ogni sera",
                examples: [
                  "😴 Example 1: Letto to the 23, sveglia 7, darkness totale",
                  "📵 Example 2: No telefono by 22, lettura carta, tè camomilla",
                  "🧘 Example 3: Meditazione 10 min pre-sonno, respiro 4-7-8"
                ]
              },
              {
                title: "🎵 Performance Autopsy (Kind)",
                description: "Analizza esibizioni passate with gentilezza",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Revisita performance. Non for giudicare but for imparare with autocompassione.",
                duration: "20 min",
                examples: [
                  "🎥 Example 1: Guarda video, note: 3 cose buone, 1 by migliorare",
                  "📝 Example 2: Scrivi: what is andato bene, what ho imparato",
                  "💙 Example 3: Trattati as tratteresti student: costruttivo non critico"
                ]
              },
              {
                title: "🤸 Movement Medicine",
                description: "20 minutes movimento fisico liberating",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Yoga, danza libera, corsa, stretching. Corpo influenza mente.",
                duration: "20 min",
                examples: [
                  "🧘 Example 1: Yoga for artists (YouTube)",
                  "💃 Example 2: Danza libera on music amata, nessun giudizio",
                  "🏃 Example 3: Corsa leggera 20 min, endorfine natural"
                ]
              },
              {
                title: "📞 Call a Friend",
                description: "Connessione umana non-musicale",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Chiama amico/familiare that ti fa ridere. 20 min conversazione leggera.",
                duration: "20 min",
                examples: [
                  "😊 Example 1: Amico d'infanzia, ricordi divertenti",
                  "👪 Example 2: Genitore/fratello, parlate of other",
                  "💬 Example 3: Amico non-artist, prospettiva diversa"
                ]
              },
              {
                title: "🎵 Dopamine Menu",
                description: "Lista attività that ti danno joy facile",
                interactionType: "visual",
                prompt: "Create menu of cose that ti ricaricano rapidamente. Usalo when burnout.",
                duration: "10 min creazione",
                examples: [
                  "📋 Example 1: Tè preferito, video divertente, coccole gatto",
                  "🌟 Example 2: Doccia calda, playlist felice, snack preferito",
                  "💙 Example 3: Chiamata amico, passeggiate, lettura manga"
                ]
              },
              {
                title: "🧘 Mindful Eating",
                description: "Un pasto to the day in piena presenza",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Niente schermo, only cibo. Assapora each boccone. Digesturesone + mindfulness.",
                duration: "20 min",
                examples: [
                  "🍽️ Example 1: Colazione without telefono, mastica slowly",
                  "🥗 Example 2: Pranzo: osserva colori, texture, sapori",
                  "🍜 Example 3: Cena: gratitudine for cibo, presence totale"
                ]
              },
              {
                title: "💭 Thought Stopping",
                description: "Interrompi spirali negative with technique",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Quando pensiero negativo loop: urla (mentalmente) STOP, then sostituisci with affermazione.",
                duration: "Istantaneo",
                examples: [
                  "🛑 Example 1: 'Non ce the farò' → STOP → 'Ho the resources'",
                  "⛔ Example 2: 'Sono scarso' → STOP → 'Sto migliorando'",
                  "🚫 Example 3: Rumination → STOP → Respiro profondo"
                ]
              },
              {
                title: "🌈 Color Therapy Study",
                description: "Use colori for influenzare umore studio",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Oggetti colorati in sala studio: blu=calma, giallo=energia, verde=equilibrio.",
                duration: "Setup a volta",
                examples: [
                  "💙 Example 1: Coperta blu for sessioni serali rilassanti",
                  "💛 Example 2: Post-it gialli for motivazione mattutina",
                  "💚 Example 3: Piante verdi for equilibrio costante"
                ]
              },
              {
                title: "🎵 Listening Pleasure",
                description: "30 min ascolto puro without analisi",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Listen music amata only for piacere. Non analizzare, only sentire.",
                duration: "30 min",
                examples: [
                  "🎧 Example 1: Album preferito, occhi chiusi, immersione totale",
                  "🎼 Example 2: Playlist comfort, nessun pensiero tecnico",
                  "💿 Example 3: Concerto registrato, goditi as ascoltatore"
                ]
              },
              {
                title: "📅 Boundary Setting",
                description: "Stabilisci orari studio fissi, then STOP",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Es: studio 9-13 and 15-18. Fuori by quegli orari: zero music academic.",
                duration: "Setup",
                examples: [
                  "⏰ Example 1: Mattina technique, pomeriggio repertorio, evening OFF",
                  "🚪 Example 2: Alle 19 chiudi spartiti, esci sala studio",
                  "📵 Example 3: Weekend: sabato mezzo day, domenica riposo"
                ]
              },
              {
                title: "🎹 Alter Ego Confident",
                description: "Inventa persona artist sicuro, channelizza",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Create alter ego artist: nome, personalità sicura. Nei momenti duri, 'diventa' lui/lei.",
                duration: "15 min creazione",
                examples: [
                  "⭐ Example 1: 'Marco the Magnifico': sicuro, calmo, competente",
                  "💪 Example 2: 'Sofia Serena': rilassata, flow state naturale",
                  "🎵 Example 3: Prima esibizione, pensa: 'What farebbe [alter ego]?'"
                ]
              },
              {
                title: "🌟 Inspiration Folder",
                description: "Raccolta digitale/fisica of ispirazione",
                interactionType: "visual",
                prompt: "Cartella with: email positive, complimenti, successi passati. Rileggi when burnout.",
                duration: "30 min setup",
                examples: [
                  "📁 Example 1: Screenshot complimenti, email professori incoraggianti",
                  "📸 Example 2: Foto performance felici, certificati successi",
                  "💌 Example 3: Note of ringraziamento pubblico, feedback positivi"
                ]
              },
              {
                title: "🎵 Karaoke Therapy",
                description: "Canta a squarciagola for liberazione emotiva",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "20 min karaoke (auto, doccia, casa). Canta forte, libera emotions.",
                duration: "20 min",
                examples: [
                  "🚗 Example 1: In auto: playlist preferita, volume alto, sing forte",
                  "🛁 Example 2: Doccia: acustica naturale, chant liberating",
                  "🎤 Example 3: Camera chiusa: karaoke app, zero vergogna"
                ]
              },
              {
                title: "🧩 Puzzle Brain Break",
                description: "Attività that distrae mente produttivamente",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Puzzle, sudoku, giochi logica. Distrazione produttiva for reset mentale.",
                duration: "15 min",
                examples: [
                  "🧩 Example 1: 100 pezzi puzzle tra sessioni studio",
                  "🔢 Example 2: Sudoku medio, only focus logica",
                  "🎮 Example 3: Gioco puzzle app (Monument Valley, Flow)"
                ]
              },
              {
                title: "💧 Hydration Ritual",
                description: "Bevi acqua regolarmente, note effects energia",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Bottiglia 1.5L, finiscila entro giornata. Nota as disidratazione = fatigue.",
                duration: "Tutto giorno",
                examples: [
                  "💦 Example 1: Bottiglia segnata: bevi tot each hour",
                  "🍋 Example 2: Acqua + limone, rende more piacevole",
                  "⏰ Example 3: Timer each 30 min: bevi sorso"
                ]
              },
              {
                title: "🎵 Imperfection Practice",
                description: "Fai qualcosa volutamente imperfetto",
                interactionType: "visual",
                prompt: "Disegno brutto, scrittura chaotic, improvisation 'sbagliata'. Allena tolleranza imperfezione.",
                duration: "15 min",
                examples: [
                  "🖍️ Example 1: Disegno with mano non dominante, accetta bruttezza",
                  "📝 Example 2: Scrivi without rileggere, lascia errori",
                  "🎵 Example 3: Improvisation volontariamente goffa, ridi"
                ]
              },
              {
                title: "🌅 Sunrise/Sunset Ritual",
                description: "Guarda alba or tramonto, prospettiva",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "5 min guardare cielo that cambia. Remember: sei part of qualcosa more grande.",
                duration: "5 min",
                examples: [
                  "🌄 Example 1: Alba from the balcone, caffè, silence",
                  "🌇 Example 2: Tramonto to the parco, respira, osserva",
                  "📸 Example 3: Foto each evening, diario visivo gratitudine"
                ]
              },
              {
                title: "🎯 Radical Acceptance",
                description: "Accetta situazione without giudizio for 24h",
                interactionType: "visual",
                prompt: "1 day: accetta everything without resistenza. 'È così hour'. Observe sollievo.",
                duration: "24 ore",
                examples: [
                  "🧘 Example 1: 'Sono stanco' → accetta, non combattere",
                  "💭 Example 2: 'Studio va lento' → ok, is così today",
                  "😌 Example 3: 'Mi sento sopraffatto' → valido, accetto"
                ]
              },
              {
                title: "🎵 Legacy Perspective",
                description: "What would want aver fatto tra 10 anni?",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Visualizza te tra 10 anni. What ti ringrazia for aver fatto/non fatto hour?",
                duration: "15 min",
                examples: [
                  "⏰ Example 1: 'Grazie for aver riposato when serviva'",
                  "💙 Example 2: 'Grazie for aver curato wellness, non only technique'",
                  "🌟 Example 3: 'Grazie for aver perseverato with gentilezza'"
                ]
              },
              {
                title: "🎵 Creativity Sabbatical Day",
                description: "Un day intero zero obblighi musical",
                interactionType: "visual",
                prompt: "Una volta to the mese: day without studiare, without performance, without sensi of colpa. Solo riposo creative.",
                duration: "1 giorno",
                examples: [
                  "🌴 Example 1: Domenica totalmente libera: natura, amici, riposo",
                  "📚 Example 2: Giorno dedicato ad arte diversa: pittura, scrittura, danza",
                  "🧘 Example 3: Digital detox + attività rigeneranti non-musicali"
                ]
              },
              {title:"💝 Self-Compassion for the Tired Musician",description:"Treat yourself as you'd treat a dear friend",prompt:"Write a gentle letter to yourself acknowledging how difficult it is to be a music student. Use the tone of a loving friend, not a harsh critic. What would you say to a classmate suffering like you?",duration:"15 min",examples:["💙 'You're doing your best in difficult conditions'","🌟 'It's normal to feel overwhelmed, you're not weak'","🤗 'You deserve rest and kindness, not just productivity'"]},
              {title:"⏰ Sacred Time Blocks",description:"Protect non-negotiable hours for rest",prompt:"Calendar: highlight 3 weekly blocks (min 2h each) dedicated ONLY to rest, non-musical hobbies, socializing. These are as sacred as lessons. Defend them.",duration:"20 min planning",examples:["🚫 NO music in these blocks","✅ Read, cook, friends, nature","⚖️ Productivity requires recovery"]},
              {title:"🌱 Micro-Restorative Pauses",description:"Every 50 minutes, a true 10-minute break",prompt:"Modified Pomodoro technique: 50 min intense study, 10 min TOTAL break. No scrolling, no music. Only: stretching, air, water, look far away.",duration:"10 min every hour",examples:["🧘 Neck and shoulder stretches","🌳 Look out window, gaze at horizon","💧 Hydration and movement"]},
              {title:"🙅 Practice of the Gentle No",description:"Learn to refuse without guilt",prompt:"Script for saying no: 'Thank you for thinking of me, but right now I need to protect my time/energy for [priority]. I hope you understand.' Practice 3 realistic scenarios.",duration:"20 min",examples:["🎤 'No, I can't play at your event for free'","📚 'No, I can't help you with your project now'","🎵 'No, I'm not taking extra lessons this week'"]},
              {title:"🛀 Total Recovery Sunday",description:"One entirely free day each week",prompt:"One Sunday a month: ZERO academic music. Sleep in, cook slow meals, long bath, read for pleasure, walk without destination. Deep recharge.",duration:"1 full day",examples:["🛌 Sleep as long as you want","🍳 Cook complex recipes and enjoy them","📖 Non-educational book, just pleasure"]}
],
            'ansia-critica': [
              {
                title: "Small Wins Inventory",
                description: "Celebrate even tiny successes",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "5 small things you did today, even just getting up or having breakfast. They are victories.",
                duration: "5 min",
                examples: [
                  "✨ Example 1: I got up → I did stretching → I opened practice journal",
                  "🎵 Example 2: I mixed colors → I made a mark → I continued",
                  "💪 Example 3: I went to Conservatory → I talked with teacher → I started composition"
                ]
              },
              {
                title: "Pre-Critique Ritual",
                description: "Calming routine before reviews/exams",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "3 repetitive actions you always do before critiques. Becomes safety anchor.",
                duration: "10 min",
                examples: [
                  "🧘 Example 1: 4-7-8 breathing + Mantra + Positive visualization",
                  "🎵 Example 2: Specific song + Stretching + Affirmations",
                  "☕ Example 3: Ritual coffee + Review key thennts + Touch talisman"
                ]
              },
              {
                title: "Expectation vs Reality",
                description: "Compare fears with real probabilities",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Column 1: What you fear will happen. Column 2: What will probably actually happen.",
                duration: "10 min",
                examples: [
                  "😰 Example 1: Fear: 'They'll say I suck' → Reality: 'They'll give constructive feedback'",
                  "🎓 Example 2: Fear: 'I'll fail exam' → Reality: 'I studied, likely to pass'",
                  "🎵 Example 3: Fear: 'They'll laugh at my work' → Reality: 'Technical critiques, not personal'"
                ]
              },
              {
                title: "Past Success Recall",
                description: "Remember when you already did well",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "3 similar past situations where you succeeded. What helped you then?",
                duration: "8 min",
                examples: [
                  "🏆 Example 1: Exam last year → Preparation + Breathing → Passed with 27",
                  "✅ Example 2: Project presentation → Rehearsals + Friends' support → Good feedback",
                  "🎵 Example 3: Group show → Authentic work + Confidence → Appreciation"
                ]
              },
              {
                title: "Lower the Bar Day",
                description: "Redefine success in achievable way",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Instead of 'I must be perfect', define success as 'I'll do my best today'.",
                duration: "5 min",
                examples: [
                  "📊 Example 1: Success = Complete project, not make it perfect",
                  "🎯 Example 2: Success = Present, not get standing ovation",
                  "✅ Example 3: Success = Improve by 1%, not be the best"
                ]
              },
              {
                title: "Body Anchoring Technique",
                description: "Physical gesture that brings you back to calm",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose gesture (touch thumb-index, hand on heart). Use it when anxious.",
                duration: "3 min",
                examples: [
                  "🤲 Example 1: Thumb-index = calm anchor, practice it in serene moments",
                  "💓 Example 2: Hand on heart + deep breath = self-comfort",
                  "✊ Example 3: Gentle fist = signal to yourself 'You can do it'"
                ]
              },
              {
                title: "Visualization Practice",
                description: "Imagine successful performance",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Close eyes. Visualize yourself presenting/exhibiting with calm and competence. Sensory details.",
                duration: "10 min",
                examples: [
                  "🎬 Example 1: See yourself speaking clearly, profs nodding, you feel confident",
                  "🎶 Example 2: Imagine work displayed, people interested, positive feedback",
                  "🎓 Example 3: Exam: you answer calmly, show work, it goes well"
                ]
              },
              {
                title: "Worst Case Scenario Acceptance",
                description: "Face worst fear, then resize it",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Worst possible scenario. Then: How would you survive anyway? Resize fear.",
                duration: "12 min",
                examples: [
                  "💭 Example 1: Worst: 'Failed' → Survival: 'Retake exam, learn, pass'",
                  "😰 Example 2: Worst: 'Devastating critique' → 'I'll use feedback, improve'",
                  "🎵 Example 3: Worst: 'Work not appreciated' → 'I'll make other, grow'"
                ]
              },
              {
                title: "Affirmation Recording",
                description: "Your voice encouraging you",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Record 5 positive affirmations. Listen to them on loop before stressful events.",
                duration: "10 min",
                examples: [
                  "🎤 Example 1: 'I'm capable' / 'I worked hard' / 'I deserve success'",
                  "💪 Example 2: 'I have talent' / 'I can handle critiques' / 'I'm growing'",
                  "✨ Example 3: 'I'm a valid artist' / 'My work has value' / 'I'll make it'"
                ]
              },
              {
                title: "Progress Not Perfection",
                description: "Celebrate improvement, not just result",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "3 ways you've improved in last month, even small progress.",
                duration: "7 min",
                examples: [
                  "📈 Example 1: I draw perspective better than before, even if not perfect",
                  "🎵 Example 2: I handle critiques more serenely than at year start",
                  "💪 Example 3: I finish projects faster, even if not at 100%"
                ]
              },
              {
                title: "Comparison Detox",
                description: "Challenge harmful comparisons with others",
                interactionType: "visual",
                prompt: "Who are you comparing yourself to? Write 3 reasons why comparison isn't valid/useful.",
                duration: "8 min",
                examples: [
                  "👥 Example 1: 'They have different background/time/resources'",
                  "🎯 Example 2: 'I only see their result, not their process/difficulties'",
                  "✨ Example 3: 'My path is unique, not measurable with others' metrics'"
                ]
              },
              {
                title: "Feedback Filter Practice",
                description: "Distinguish constructive critique from projection",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Last feedback received. Which parts useful? Which personal projections of the critic?",
                duration: "10 min",
                examples: [
                  "💬 Example 1: Useful: 'Proportions to improve' / Projection: 'Too bold'",
                  "🎵 Example 2: Useful: 'Technique X to study' / Projection: 'Not my style'",
                  "✅ Example 3: Take technical critiques, ignore personal taste judgments"
                ]
              },
              {
                title: "Grounding 5-4-3-2-1",
                description: "Sensory technique for acute pre-critique anxiety",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste. Brings back to present.",
                duration: "4 min",
                examples: [
                  "👀 Example 1: Before entering critique room, do exercise outside door",
                  "🧠 Example 2: During exam break, reset with 5-4-3-2-1",
                  "✋ Example 3: While waiting for results, anchor to present with exercise"
                ]
              },
              {
                title: "Process vs Outcome Focus",
                description: "Control the controllable, let go of rest",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "You control: effort, preparedon, presence. You don't control: grade, prof's reaction, comparison with others.",
                duration: "10 min",
                examples: [
                  "✅ Example 1: Focus on: 'I gave my best in research and execution'",
                  "🎯 Example 2: Focus on: 'I present clearly what I did'",
                  "💪 Example 3: Let go: 'If they'll like it', 'If I'll get high grade'"
                ]
              },
              {
                title: "Support Network Activation",
                description: "Who can support you before/during/after critiques",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "3 people you can contact when anxious. Save them as 'Exam Support'.",
                duration: "5 min",
                examples: [
                  "👥 Example 1: Friend X for pep talk, Friend Y for post-exam distraction",
                  "💙 Example 2: Course mate to study together, Mentor for doubts",
                  "🤗 Example 3: Family member for emotional support, Colleague for technical feedback"
                ]
              },
              {
                title: "Post-Critique Debrief",
                description: "Objectively analyze after critiques/exams",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "What went well? 1 thing to improve? 1 lesson learned? No catastrophizing.",
                duration: "15 min",
                examples: [
                  "📝 Example 1: Good: clear presentation / Improve: time management / Lesson: prepare outline",
                  "✅ Example 2: Good: strong concept / Improve: color technique / Lesson: more color tests",
                  "🎯 Example 3: Focus on objective data, not on moment's emotions"
                ]
              },
              {
                title: "Identity Decoupling",
                description: "Separate your worth from your result",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Complete: 'My worth as person does NOT depend on [grade/critique/performance]'.",
                duration: "5 min",
                examples: [
                  "💎 Example 1: 'I'm worthy as person regardless of today's grade'",
                  "✨ Example 2: 'A failed project doesn't make me a failure'",
                  "🌟 Example 3: 'My musical worth isn't measured by an exam'"
                ]
              },
              {
                title: "Energy Management Pre-Critique",
                description: "Optimize physical energy before performance",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Plan day before: what to eat, when to sleep, how to move for optimal energy.",
                duration: "20 min",
                examples: [
                  "🥗 Example 1: Light dinner night before, protein breakfast, hydration",
                  "😴 Example 2: Bed early, 8 hours sleep, wake with time",
                  "🏃 Example 3: Morning walk, stretching, avoid excessive caffeine"
                ]
              },
              {
                title: "Reframe Anxiety as Excitement",
                description: "Transform nervousness into positive energy",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "When you feel anxiety, say out loud: 'I'm excited for this opportunity'. Body doesn't know difference.",
                duration: "2 min",
                examples: [
                  "🎉 Example 1: Fast heartbeat? 'I'm pumped to show my work!'",
                  "⚡ Example 2: Sweaty hands? 'I'm enthusiastic about this presentation!'",
                  "✨ Example 3: Short breath? 'I'm energized for this challenge!'"
                ]
              },
              {
                title: "Mentor Visualization",
                description: "Imagine your mentor encouraging you",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Close eyes. Imagine artist/teacher/person you admire telling you words of support.",
                duration: "7 min",
                examples: [
                  "👨‍🎵 Example 1: Van Gogh tells you: 'Express your vision, don't seek approval'",
                  "👩‍🏫 Example 2: Favorite prof: 'You worked well, show with confidence'",
                  "🎵 Example 3: Admired artist: 'I also had critiques, it's part of the journey'"
                ]
              },
,
              {
                title: "🎯 Pre-Performance Checklist",
                description: "Routine pre-exam that ti ancora",
                interactionType: "visual",
                prompt: "Create checklist fisica: 1) Respiro, 2) Revisione mentale, 3) Affermazione, 4) Sorriso. Ripeti each volta.",
                duration: "5 min",
                examples: [
                  "✅ Example 1: Respiro 4-7-8 → vedo me that sound bene → 'Sono pronto' → sorridi",
                  "📋 Example 2: Lista scritta on carta, spunta each punto before entrare",
                  "🎵 Example 3: Stesso ordine always: diventa ritual rassicurante"
                ]
              },
              {
                title: "🎹 Act 'As If'",
                description: "Comportati as if fossi già sicuro",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Postura, camminata, tono voice of persona sicura. Corpo influenza mente (embodied cognition).",
                duration: "10 min pratica",
                examples: [
                  "🚶 Example 1: Cammina with spalle indietro, testa alta, passo deciso",
                  "🗣️ Example 2: Parla with tono calmo, pausato, sicuro (also se non the senti)",
                  "💪 Example 3: Power pose 2 min before exam (mani sui fianchi, petto aperto)"
                ]
              },
              {
                title: "📊 Probability Check",
                description: "Valuta realisticamente probabilità scenari negativi",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Quanto is probabile that [scenario catastrofico]? Di solito <5%. Ansia mente on the probabilità.",
                duration: "8 min",
                examples: [
                  "🔢 Example 1: 'Bocciatura totale': as much as probabile? Probabilmente <3%",
                  "📈 Example 2: 'Critica devastante that distrugge carriera': <1%",
                  "💭 Example 3: Scrivi scenari temuti, assegna % reale (non emotiva)"
                ]
              },
              {
                title: "🎵 Anchor Song",
                description: "Canzone that ti bring back a calma and fiducia",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Choose piece that ti fa sentire potente/calmo. Ascoltalo before each exam. Diventa ancora emotivo.",
                duration: "5 min",
                examples: [
                  "🎧 Example 1: Stesso piece always, associa a calma and successo",
                  "🎶 Example 2: Playlist 3-4 brani, routine pre-performance costante",
                  "💙 Example 3: Brano that hai suonato with successo in passato"
                ]
              },
              {
                title: "🧘 Body Scan Rapido",
                description: "5 minutes of consapevolezza corporea pre-exam",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Scansiona corpo by piedi a testa. Nota tensioni, rilasciale consciamente.",
                duration: "5 min",
                examples: [
                  "🦶 Example 1: Piedi→gambe→addome→petto→braccia→collo→viso, rilascia everything",
                  "💆 Example 2: Dove tieni tension? Spalle? Mascella? Rilascia intenzionalmente",
                  "😌 Example 3: Body scan guidato app (Headspace, Calm)"
                ]
              },
              {
                title: "📝 Evidence Log",
                description: "Lista prove that sei capace",
                interactionType: "visual",
                prompt: "Scrivi 10 prove oggettive that sei competente: esami passati, feedback positivi, miglioramenti.",
                duration: "15 min",
                examples: [
                  "✅ Example 1: 'Ho passato 15 esami', 'Prof X ha detto that ho talento'",
                  "🏆 Example 2: 'Ho suonato in 5 concerti', 'Compagni mi chiedono consigli'",
                  "📊 Example 3: 'Sono migliorato in X', 'Ho imparato piece difficile Y'"
                ]
              },
              {
                title: "🎯 Focus Redirection",
                description: "Sposta focus by giudizio a processo",
                interactionType: "visual",
                prompt: "Invece of 'Come mi giudicheranno?', pensa 'Come esprimo the musica?'",
                duration: "Ogni volta",
                examples: [
                  "🎵 Example 1: Non 'Piacerò?', but 'What vuole dire questo brano?'",
                  "🎼 Example 2: Non 'Sbagliare?', but 'Which emotions trasmettere?'",
                  "🎹 Example 3: Focus: comunicazione musicale, non approvazione"
                ]
              },
              {
                title: "🌊 Anxiety Surfing",
                description: "Cavalca l'onda dell'anxiety without resistere",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Ansia arriva, raggiunge picco (5-10 min), then cala naturalmente. Observe without combattere.",
                duration: "10 min",
                examples: [
                  "🏄 Example 1: Senti anxiety salire, respira, osserva, aspetta that cali (always cala)",
                  "🌊 Example 2: Imagine anxiety as onda: sale, cresta, scende",
                  "⏱️ Example 3: Cronometra: picco anxiety raramente dura beyond 10 min"
                ]
              },
              {
                title: "💬 Supportive Self-Talk Scripts",
                description: "Frasi preimpostate for momenti of panico",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Prepara 5 frasi for when anxiety sale. Ripetile as mantra.",
                duration: "10 min prep",
                examples: [
                  "🗣️ Example 1: 'Ho studiato, sono preparato, questo passa'",
                  "💪 Example 2: 'L'anxiety is scomoda but non pericolosa, posso gesturesrla'",
                  "✨ Example 3: 'Faccio of the mio meglio, is abbastanza'"
                ]
              },
              {
                title: "🎵 Creative Distraction",
                description: "Attività assorbente before exam",
                interactionType: "visual",
                prompt: "30-60 min prima: fai qualcosa that assorbe mente (disegno, puzzle, lettura). Interrompe rumination.",
                duration: "30-60 min",
                examples: [
                  "📚 Example 1: Leggi capitolo libro coinvolgente",
                  "🎵 Example 2: Draw mandala, colorazione mindful",
                  "🧩 Example 3: Puzzle, sudoku, gioco focus"
                ]
              },
              {
                title: "🤝 Social Connection",
                description: "Breve interazione sociale positiva pre-exam",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "10 min conversazione leggera with amico/compagno. Riduce cortisolo, aumenta ossitocina.",
                duration: "10 min",
                examples: [
                  "☕ Example 1: Caffè with amico, parlate of cose leggere",
                  "💬 Example 2: Chiamata breve a persona that ti fa ridere",
                  "🤗 Example 3: Abbraccio (rilascia ossitocina, calma sistema nervoso)"
                ]
              },
              {
                title: "🎯 Controllables vs Uncontrollables",
                description: "Focus only on what puoi controllare",
                interactionType: "visual",
                prompt: "Lista: what controllo? (preparazione, respiro, attitudine). What no? (giudizio altri). Lascia andare #2.",
                duration: "10 min",
                examples: [
                  "✅ Example 1: Controllo: as much as studio, as respiro, postura",
                  "❌ Example 2: Non controllo: umore prof, paragoni with altri, risultato",
                  "🎯 Example 3: Energia only on controllo, ignora resto"
                ]
              },
              {
                title: "🌈 Spectrum Thinking",
                description: "Evita pensiero everything-or-niente",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Non 'successo perfetto' or 'fallimento totale'. Scala 1-10, ci sono infinite gradi.",
                duration: "8 min",
                examples: [
                  "📊 Example 1: 'Anche se non is 10/10, can being 7/10 and va bene'",
                  "🌈 Example 2: 'Successo parziale is comunque successo'",
                  "💭 Example 3: 'Crescita is spettro, non binario'"
                ]
              },
              {
                title: "🎵 Past Success Anchoring",
                description: "Rivivi sensorialmente successo passato",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Chiudi occhi. Remember esecuzione/exam andato bene. Rivivi sensazioni fisiche, emotions. Ancora quello state.",
                duration: "10 min",
                examples: [
                  "🏆 Example 1: Rivivi concerto riuscito: what seesvi, sentivi, provavi",
                  "✨ Example 2: Esame passato with successo: bring back quella sicurezza to the presente",
                  "🎯 Example 3: Tocca pollice-indice mentre rivivi, create ancora fisica"
                ]
              },
              {
                title: "📱 Anxiety Playlist",
                description: "Musica scientificamente calmante",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Playlist with brani 60-80 BPM, tonality maggiori, volume moderato. Calma sistema nervoso.",
                duration: "15-30 min",
                examples: [
                  "🎧 Example 1: Debussy, Satie, Brian Eno, Ludovico Einaudi",
                  "🎶 Example 2: Playlists 'Peaceful Piano' 'Ambient Chill'",
                  "💙 Example 3: Evita metal/trap before esami (aumenta attivazione)"
                ]
              },
              {
                title: "🧘 Loving-Kindness Meditation",
                description: "Metta meditation for auto-compassione",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "5 min: 'Che self possa being felice, sano, in pace, to the sicuro'. Ripeti verso te stesso.",
                duration: "5 min",
                examples: [
                  "💙 Example 1: Mano on the heart, ripeti frasi gentilezza verso te",
                  "🙏 Example 2: Estendi gentilezza: te→amici→all→critici",
                  "✨ Example 3: Guided metta meditation (Insight Timer app)"
                ]
              },
              {
                title: "🎯 Performance Cue Cards",
                description: "Promemoria fisici of strategie",
                interactionType: "visual",
                prompt: "Cartoncini tascabili with: respiro, affermazioni, strategie. Consulta prima/durante exam se permesso.",
                duration: "Creazione",
                examples: [
                  "📇 Example 1: Card 1: 'Respira 4-7-8', Card 2: 'Focus music non giudizio'",
                  "📝 Example 2: Citazioni ispiranti, techniques calma, affermazioni",
                  "🎴 Example 3: Foto that ti ispirano calma (natura, mentore, successo passato)"
                ]
              },
              {
                title: "🌟 Future Self Letter",
                description: "Lettera from the tuo sé futuro that ha superato",
                interactionType: "visual",
                prompt: "Scrivi as if fossi te tra 1 anno, dopo aver superato esami. What diresti to the te presente?",
                duration: "15 min",
                examples: [
                  "💌 Example 1: 'Caro me of the passato, ce l'hai fatta! L'anxiety is passata, sei cresciuto'",
                  "✉️ Example 2: 'Quelle paure erano normali, but non reali. Ora sounds with joy'",
                  "📬 Example 3: 'Grazie for aver perseverato. Ora sei more forte'"
                ]
              },
              {
                title: "🎹 Role Play Exam",
                description: "Simula exam with amici that fanno domande",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Amici/compagni simulano commissione. Tu esegui as exam reale. Exposure graduale.",
                duration: "30-60 min",
                examples: [
                  "🎬 Example 1: Amici fanno domande difficili, tu rispondi under pressione simulata",
                  "🎹 Example 2: Simula intero exam: entrata, esecuzione, domande, uscita",
                  "🎯 Example 3: Ripeti 3-4 volte: anxiety si riduce with esposizione"
                ]
              },
              {
                title: "💆 Progressive Relaxation Recording",
                description: "Tua voice that ti guida to the rilassamento",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Record te that guidi PMR. Listen before esami. Voce familiare rassicura.",
                duration: "15 min registrazione",
                examples: [
                  "🎙️ Example 1: 'Rilassa the piedi... hour the gambe...' (tua voce)",
                  "🎧 Example 2: Aggiungi music calma in sottofondo",
                  "📱 Example 3: Salva on telefono, disponibile always"
                ]
              },
              {
                title: "🌊 Grounding 5-4-3-2-1",
                description: "Tecnica sensoriale anti-panico rapida",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Nomina: 5 cose that vedi, 4 that tocchi, 3 that senti, 2 that annusi, 1 that assapori. Bring back to the presente.",
                duration: "3 min",
                examples: [
                  "👀 Example 1: Vedo: porta, sedia, window, quadro, tappeto",
                  "✋ Example 2: Tocco: stoffa vestito, wood tavolo, metallo penna, carta",
                  "👂 Example 3: Sento: voci lontane, traffico, respiro mio"
                ]
              },
              {
                title: "🎯 Micro-Goals Setting",
                description: "Obiettivi minuscoli for ridurre pressione",
                interactionType: "visual",
                prompt: "Non 'Devo suonare perfetto'. Ma: 'Obiettivo 1: respirare prima', 'Obiettivo 2: iniziare with calma'.",
                duration: "5 min",
                examples: [
                  "📋 Example 1: Mini-goals: 1) Entra with calma, 2) Prima note chiara, 3) Respira tra sections",
                  "🎯 Example 2: Focus processo non risultato: esegui passaggi non 'voto alto'",
                  "✅ Example 3: Ogni micro-goal raggiunto = successo parziale cumulativo"
                ]
              },
              {
                title: "💙 Self-Compassion Break",
                description: "Pratica Kristin Neff pre-exam",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "3 steps: 1) 'Questo is difficile' (mindfulness), 2) 'Altri provano questo' (umanità comune), 3) 'Che self sia gentile with me'.",
                duration: "5 min",
                examples: [
                  "🤗 Example 1: Mano on the heart, riconosci difficoltà, connetti with altri, autocompassione",
                  "💭 Example 2: 'L'anxiety by exam is normal, non sono only, merito gentilezza'",
                  "✨ Example 3: Ripeti when self-criticism emerges"
                ]
              },
              {
                title: "🎵 Artistic Expression Outlet",
                description: "Trasforma anxiety in arte",
                interactionType: "visual",
                prompt: "Draw/scrivi/componi l'anxiety. Esternalizzarla riduce potere.",
                duration: "20 min",
                examples: [
                  "🎼 Example 1: Draw l'anxiety as forma/colore, then trasformala",
                  "✍️ Example 2: Scrivi stream of consciousness all paure, then brucia foglio (rituale)",
                  "🎵 Example 3: Improvise 'theme dell'anxiety', then 'theme of the calma'"
                ]
              },
              {
                title: "🌙 Night-Before Ritual",
                description: "Routine serale before exam for sonno migliore",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Sera prima: no studio dopo 20, bagno caldo, lettura leggera, affermazioni, letto presto.",
                duration: "Serata",
                examples: [
                  "🛁 Example 1: 20:00 stop studio, 21:00 bagno caldo, 22:00 lettura, 23:00 letto",
                  "📚 Example 2: No ripasso ultimo minuto (aumenta anxiety), fida of the prep",
                  "😴 Example 3: Meditazione sonno, magnesio, camomilla"
                ]
              },
              {
                title: "🎯 Detachment Practice",
                description: "Distaccati dall'outcome, connettiti to the processo",
                interactionType: "visual",
                prompt: "Mantra: 'Faccio of the mio meglio, then lascio andare the risultato'. Non puoi controllare everything.",
                duration: "Ogni giorno",
                examples: [
                  "🧘 Example 1: 'La mia preparazione is sufficiente, the result non mi definisce'",
                  "💭 Example 2: 'Controllo l'impegno, non l'esito. Pace with incertezza'",
                  "✨ Example 3: 'Valore as artist non dipende by a voto'"
                ]
              },
              {
                title: "🌈 Cognitive Defusion",
                description: "Separa te from the pensieri ansiosi",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Invece of 'Fallirò', pensa 'Ho the pensiero that fallirò'. Pensieri non sono fatti.",
                duration: "Ogni volta",
                examples: [
                  "💭 Example 1: 'Sto avendo the pensiero that non sono pronto' (vs. 'Non sono pronto')",
                  "🎹 Example 2: Observe pensieri as nuvole passing byno, non verità",
                  "🌊 Example 3: 'La mia mente dice X' (non 'X is vero')"
                ]
              },
              {
                title: "🎵 Post-Exam Debrief Ritual",
                description: "Processa exam with gentilezza dopo",
                interactionType: "reflection",
                reflectionQuestions: [
                  "How did you feel during the exercise? (1-5 stars)",
                  "What was most difficult or surprising?",
                  "Did you discover something new about yourself or your music?",
                  "Personal notes (optional)"
                ],
                
                prompt: "Dopo exam: 30 min for scrivere what is andato bene, what imparato, what migliorare (without giudizio).",
                duration: "30 min dopo",
                examples: [
                  "📝 Example 1: 3 successi, 2 lezioni, 1 miglioramento futuro",
                  "💙 Example 2: Celebra coraggio of esserti presentato",
                  "🎯 Example 3: Feedback costruttivo non punitivo a te stesso"
                ]
              },
              {
                title: "🎯 Identity Beyond Performance",
                description: "Il tuo valore non dipende by esami or performance",
                interactionType: "visual",
                prompt: "Scrivi 20 qualità tue that non hanno nothing a that fare with musica. Sei very more of a artist.",
                duration: "15 min",
                examples: [
                  "💙 Example 1: Amico leale, persona curiosa, figlio amorevole...",
                  "🌟 Example 2: Valori: onestà, gentilezza, resilienza, empatia...",
                  "✨ Example 3: Interessi: natura, letteratura, cucina, viaggi..."
                ]
              },
              {title:"🎯 Exposure Ladder",description:"Gradual exposure to anxiety-inducing situations",prompt:"List situations from least to most stressful. Face easiest first, then climb gradually.",duration:"Variable",examples:["📊 Ex: 1.Play alone → 2.Friend → 3.Small group → 4.Class → 5.Concert","🎵 Increase difficulty only after previous success","💪 Gradual desensitization reduces anxiety"]},,
              {title:"🧘 Box Breathing Technique",description:"Square breathing 4-4-4-4",prompt:"Inhale 4, hold 4, exhale 4, pause 4. Repeat 5 cycles. Instantly calms nervous system.",duration:"3 min",examples:["📦 Visualize square while breathing","🌬️ Before performances or criticism","🧠 Activates parasympathetic response (calm)"]},,
              {title:"📝 Cognitive Restructuring",description:"Challenge irrational thoughts",prompt:"Anxious thought: write it. Evidence for/against. Alternative rational thought.",duration:"15 min",examples:["💭 'I'll do terrible' → Evidence? → 'I've practiced, it'll be fine'","🎯 'Everyone will judge me' → True? → 'Prof evaluates performance, not me'","✅ Replace catastrophizing with reality"]},,
              {title:"🎵 Power Pose Pre-Performance",description:"2 minutes power posture",prompt:"Hands on hips or arms raised. 2 min before performance. Increases testosterone, reduces cortisol.",duration:"2 min",examples:["🦸 Wonder Woman pose: hands on hips, chest open","🏆 Victory pose: arms raised in V","💪 Posture influences biochemistry and confidence"]},,
              {title:"🌊 Urge Surfing",description:"Ride the wave of anxiety without reacting",prompt:"Feel anxiety rising? Observe it like a wave. Rises, peaks, falls. Don't fight it, ride it.",duration:"10 min",examples:["🏄 Anxiety rises → Observe → Wait for peak → Falls naturally","🌀 Don't resist, don't react, just observe","🧠 Acceptance reduces intensity"]},,
              {title:"🎭 Role Reversal",description:"What would you tell a friend in your situation?",prompt:"Friend has your exam tomorrow with your same fears. What would you tell them to reassure them?",duration:"8 min",examples:["💬 To them you'd say: 'You've studied, it'll be fine' → Tell yourself too","🤗 Compassion for others is easy, apply it to yourself","💙 Self-compassion like talking to dear friend"]},,
              {title:"📊 Anxiety Meter Tracking",description:"Scale 0-10, track anxiety over time",prompt:"Every hour: how anxious 0-10? Discover patterns: what increases/decreases anxiety?",duration:"1 day",examples:["📈 Track for 3 days, identify triggers","🎯 Anxiety rises before lunch? Maybe hypoglycemia","💡 Patterns reveal practical solutions"]},,
              {title:"🎨 Anxiety Art Expression",description:"Draw your anxiety",prompt:"Colors, shapes, lines representing anxiety. Externalize visually instead of somatizing.",duration:"20 min",examples:["🖍️ Red/black = intense anxiety, chaotic shapes","🎨 Creative process as catharsis","📄 Then tear drawing = symbolic release"]},,
              {title:"🔄 Thought Stopping Technique",description:"Interrupt cycle of obsessive thoughts",prompt:"When recurrent anxious thought: say STOP out loud. Visualize STOP sign.",duration:"1 min",examples:["🛑 Thought 'What if I fail?' → STOP → Redirect to task","🧠 Interrupt rumination loop","🎯 Replace with positive affirmation"]},,
              {title:"🎵 Performance Mock Runs",description:"Simulate performance in real conditions",prompt:"Perform 3 times in similar conditions: small audience, same time, same location.",duration:"Variable",examples:["🎭 Mock audition with friends as jury","⏰ Same time as real exam","🧠 Familiarity reduces novelty anxiety"]},,
              {title:"💪 Strengths Inventory",description:"List 10 of your musical qualities",prompt:"10 things you do well musically. Reread before criticism to balance self-criticism.",duration:"10 min",examples:["🎵 Ex: Great intonation, expressiveness, dedication","💎 Recognize value beyond single performance","✨ Real strengths counterbalance self-criticism"]},,
              {title:"🎬 Video Self-Review",description:"Record yourself and observe with objective eye",prompt:"Record performance. Watch it as if you were professor: what do you notice good/improvable?",duration:"30 min",examples:["📹 Distance from performance helps objectivity","🎯 Often you're more critical than actual professors","✅ Identify strengths you ignore"]},,
              {title:"🌅 Morning Intention Setting",description:"Start day with clear intention",prompt:"In morning: 'Today I intend to [face exam/criticism] with [calm/openness/courage]'.",duration:"3 min",examples:["🎯 Intention gives direction to day","💭 Focus energy on attitude, not outcome","🌟 Repeat intention during day"]},,
              {title:"🤝 Criticism Workshop",description:"Practice receiving feedback",prompt:"Ask 3 friends for honest feedback on performance. Practice listening without defending.",duration:"45 min",examples:["👂 Listen to everything without interrupting","🚫 No immediate justifications","✍️ Take notes, reflect later"]},,
              {title:"🎧 Bilateral Stimulation",description:"Alternating audio left/right ear for calm",prompt:"EMDR music or bilateral beats. Reduces emotional activation pre-anxiety.",duration:"15 min",examples:["🎵 YouTube: 'EMDR bilateral music'","🧠 Alternating stimulation calms amygdala","😌 Use before stressful situations"]},,
              {title:"📖 Rejection Journal",description:"Track rejections and consequent growth",prompt:"Each criticism/rejection: date, what happened, what you learned, how you grew.",duration:"10 min/event",examples:["❌ Ex: Failed exam → Studied theory better → Passed with high grade","📈 Rejection as data point, not identity","💪 Portfolio of resilience"]},,
              {title:"🎯 Selective Attention Training",description:"Focus on positive during criticism",prompt:"During feedback: actively count how many positive comments you receive. Balance negative bias.",duration:"Variable",examples:["✅ Mind remembers negative more (bias)","🎯 Force yourself to notice positive too","📝 Write both positive and negative"]},,
              {title:"🌳 Forest Bathing Pre-Exam",description:"Nature reduces cortisol pre-stress",prompt:"Day before exam: 30 min in nature. Walk slowly, observe trees.",duration:"30 min",examples:["🌲 Shinrin-yoku (forest bathing) reduces stress","🧘 Nature resets nervous system","📵 No phone, only presence"]},,
              {title:"🎵 Confidence Playlist",description:"Tracks that make you feel powerful",prompt:"10 songs that give you confidence. Listen on loop before performance.",duration:"30 min",examples:["💪 Rocky theme, Eye of Tiger, motivational tracks","🎵 Music influences mood and energy","⚡ Becomes pre-performance ritual"]},,
              {title:"📝 Catastrophe Scale",description:"How serious is the worst case scenario really?",prompt:"Scale 1-100: death = 100. Failing exam? Probably 15. Resize catastrophe.",duration:"5 min",examples:["📊 Perspective: failed exam vs real tragedies","🎯 Anxiety disproportionate to real risk","✅ Recalibrate emotional response"]},,
              {title:"🎭 Persona Creation",description:"Create confident alter ego for performance",prompt:"Imagine super-confident version of you. Give them a name. 'Channel' that person during exams.",duration:"15 min",examples:["🎸 Ex: 'Mark the Confident' vs 'Mark the Anxious'","🎭 Beyoncé uses Sasha Fierce as alter ego","💪 Psychological distance reduces pressure"]},,
              {title:"🧠 Mindfulness Bell Practice",description:"App that sounds bell randomly for mindfulness",prompt:"Install app (ex: Mindfulness Bell). Each time it sounds: 3 conscious breaths. All day.",duration:"All day",examples:["🔔 Interrupts anxious autopilot","🧘 Cumulative micro-moments of mindfulness","📱 Free apps available"]},,
              {title:"💌 Future Self Letter",description:"Write letter to yourself after exam",prompt:"Imagine having already done exam. Write letter of encouragement to pre-exam you.",duration:"15 min",examples:["✍️ 'Dear past me, it went better than you feared...'","🔮 Future perspective reduces present anxiety","💙 Retroactive compassion"]},,
              {title:"🎯 Attention Spotlight",description:"Where you put attention grows",prompt:"Experiment: focus 1 day only on what goes well. Notice how perception changes.",duration:"1 day",examples:["✨ Attention on positive → see more positive","🧠 Confirmation bias works both directions","📊 Use it in your favor"]},,
              {title:"🏃 Anxiety Shakeout",description:"Physically shake body to release tension",prompt:"3 minutes: shake arms, legs, jump. Release accumulated adrenaline.",duration:"3 min",examples:["🐕 Animals shake body after stress","💥 Release trapped anxious energy","⚡ Do before entering exam room"]},,
              {title:"📊 Success Log",description:"Journal only of musical successes",prompt:"Each evening: 1 musical thing you did well today. Even tiny.",duration:"5 min/day",examples:["🎵 Ex: 'Improved intonation', 'Finished arrangement'","📖 Reread before exams for confidence","✅ Counters selective negative memory"]},,
              {title:"🎵 Pre-Performance Ritual",description:"Fixed sequence of pre-performance actions",prompt:"Create ritual: Ex. 1.Stretching 2.Breathing 3.Affirmation 4.Song. Always the same.",duration:"10 min",examples:["🔄 Repetition creates security","🧠 Brain associates ritual with performance","⚓ Becomes anchor of calm"]},,
              {title:"💭 Worry Postponement",description:"Postpone worries to fixed time",prompt:"When anxiety emerges: 'I'll think about it at 6pm in worry time'. Temporal containment.",duration:"Variable",examples:["⏰ Worry time = 15 min dedicated only to anxieties","🚫 Outside that window: postpone thoughts","🧠 Teaches that anxieties aren't urgent"]},
              {title:"🌸 Loving-Kindness for the Performer",description:"Metta meditation adapted for musicians",prompt:"5 min sitting comfortably. Repeat mentally: 'May I perform with joy. May I be free from fear. May my music bring beauty.' Breathe between each phrase. Kindness toward yourself as a performer.",duration:"5 min",examples:["💙 Metta = Buddhist loving-kindness","🎵 Adapted for performance anxiety","🧘 Repeat every morning for 30 days"]},
              {title:"📿 Personalized Pre-Exam Mantra",description:"Anchor phrase for peak anxiety moments",prompt:"Create your brief mantra (5-7 words) that calms you. Repeat it 108 times with breaths. Ex: 'I am prepared, I am capable, I'm okay.' Use before every exam.",duration:"10 min",examples:["🔄 'I do my best, that's enough'","🌟 'I am more than my performance'","💪 'I did the work, now I trust'"]},
              {title:"🌈 Post-Performance Gratitude",description:"Regardless of outcome, find what to appreciate",prompt:"Right after exam/performance, write 3 things you're grateful for about that experience. Even if it went badly. Ex: 'I'm grateful I tried', 'Grateful for lesson learned', 'Grateful it's over'.",duration:"5 min",examples:["🙏 Gratitude breaks self-criticism cycle","💎 Even 'failures' have value","📈 Every experience is growth"]}
            ],
            'paesaggio-sonoro': [
              {title:"🎧 Personal Acoustic Inventory",description:"Catalog everything your ears perceive",prompt:"Stop for 5 minutes. Note every sound you hear, from the most obvious to the most hidden. If in a group, compare lists: everyone will have perceived a different acoustic reality.",duration:"10 min",examples:["🌳 Try in different places: park, subway, home","📝 No answer is wrong, every listening is unique","💡 Develop daily active listening habit"]},
              {title:"🔤 N-U-T Sound Classification",description:"Analyze the origin of perceived sounds",prompt:"Review your sound list. Mark N (nature), U (human), T (technological) for each sound. Which category dominates? How many sounds did you produce yourself?",duration:"8 min",examples:["🌊 N = wind, birds, rain","👥 U = voices, footsteps, breathing","🔌 T = engines, electronics, machinery"]},
              {title:"⏱️ C-R-U Acoustic Temporality",description:"Distinguish temporal patterns of sounds",prompt:"From your list, classify each sound as: C (continuous), R (repetitive), U (unique). Can you remember if a continuous sound existed before you started listening?",duration:"10 min",examples:["🔊 C = refrigerator, distant traffic, fan","🔔 R = bells, sirens, notifications","⚡ U = single honk, door slam, isolated voice"]},
              {title:"📊 Loud-Soft Dynamic Map",description:"Spatialize sounds by intensity",prompt:"Sheet divided horizontally: top = loud sounds, bottom = soft sounds. Position each perceived sound. Then repeat: top = pleasant, bottom = unpleasant.",duration:"12 min",examples:["💥 Loud: traffic, music, loud voices","🍃 Soft: rustling leaves, keyboard, clock","😊 Pleasant/unpleasant is subjective"]},
              {title:"🧭 Egocentric Spatial Map",description:"Draw the geography of sounds around you",prompt:"Circle in center of sheet = you. Write inside the sounds you produce. Outside, position other sounds based on actual distance and direction they come from.",duration:"15 min",examples:["📍 Nearby sounds: breathing, clothes, chair","🌍 Distant sounds: traffic, planes, bells","🎯 Precise in direction: front, back, left"]},
              {title:"🚶 Static vs Dynamic Sounds",description:"Identify who's moving: you or the sound?",prompt:"Three categories: stationary sounds you pass by, sounds that move in front of you, sounds that move with you. Give examples for each.",duration:"10 min",examples:["🏛️ Fixed: sirens, systems, bells","🚗 Mobile: cars, planes, animals","👟 With you: voice, steps, clothes, accessories"]},
              {title:"👁️ Seeing with Your Ears",description:"Locate a moving voice with eyes closed",prompt:"In pairs or groups. One person walks while talking, others with eyes closed follow with hearing. Point to them as they move. Do you perceive acoustic shadows when they pass behind objects?",duration:"15 min",examples:["🎭 Front or back? Sound changes","🚪 Behind curtain or door? Sound muffled","🪑 Behind small objects? Subtle shadows"]},
              {title:"🚦 Acoustic Intersection",description:"Immersion in urban chaos",prompt:"Go to a busy intersection. Eyes closed. Listen for 5 minutes to all sound movements. Nearby sounds (even frighteningly close) vs distant sounds.",duration:"20 min",examples:["🚗 Dense traffic = restricted sound field","🌳 Light traffic = you can hear far","⚠️ Safety first, choose protected spot"]},
              {title:"🌄 Soundscape Expansion",description:"How far can you hear?",prompt:"In open environment (park, hill). Identify the farthest perceivable sound. Estimate the distance. Can you do the same in the city? Compare.",duration:"15 min",examples:["🏙️ City = nearby sounds, buildings limit","🌾 Countryside = distant sounds, open horizons","📏 Train yourself to estimate sound distances"]},
              {title:"🎯 Count Specific Sounds",description:"Selective concentration on category",prompt:"Choose a type of sound (brakes, dogs, motorcycles). Count how many times you hear it in 10 minutes. Familiarity with landscape details.",duration:"10 min",examples:["🚙 Screeching brakes at intersection","🐕 Dog barks in neighborhood","🏍️ Motorcycles passing by"]},
              {title:"👞 Dictionary of Footsteps",description:"Identify shoes and gaits",prompt:"Crowded street. How many different types of shoes can you distinguish? Heels, sneakers, boots, sandals... Every step is unique.",duration:"15 min",examples:["👠 High heels: fast rhythm, sharp sound","👟 Sneakers: muffled, light","🥾 Boots: heavy, decisive, rhythmic"]},
              {title:"🎵 Walking Tonal Memory",description:"Maintain a pitch while walking",prompt:"Find a continuous hum (fan, electrical). Hum it. Walk 10 minutes in the neighborhood continuing to hum. Return: are you still in tune?",duration:"20 min",examples:["⬆️ Fast walking = pitch rises","⬇️ Slow walking = pitch drops","❓ Why does it happen? Physical energy influences perception"]},
              {title:"🏪 Commercial Silence Hunt",description:"Find the quietest shop",prompt:"Enter various shops. Which is the quietest? What type of shop is it? How many have music or radio? What sounds characterize specific places?",duration:"25 min",examples:["📚 Bookstores often silent","🎵 Clothing = music almost always","🍕 Restaurants = chatter + kitchen"]},
              {title:"🪜 Staircase Asymmetry",description:"Going up vs down produces different sounds?",prompt:"Find busy public stairs. Listen to people going up and down. Same sound? Which louder? Why?",duration:"10 min",examples:["⬆️ Upward: effort, heavy landing","⬇️ Downward: lighter, faster","👟 Also depends on shoes and speed"]},
              {title:"🚶 Silent Single-File Walk",description:"Group walk in deep listening",prompt:"Group in line. Distance such that you can't hear steps of person ahead. Walk 15 minutes in total silence. After, write answers to questions about the experience.",duration:"30 min",examples:["❓ Loudest/softest sound heard?","❓ Farthest sound? Estimated distance?","❓ Most interesting/ugliest sound?"]},
              {title:"🔍 Commission Sound Search",description:"Find or create specific requested sounds",prompt:"List of sounds to find/produce: drop, phone, steps, wind, bell, knocking, rustling, small explosion. Search in reality or creatively.",duration:"20 min",examples:["💧 Drop: faucet, glass, wet finger","📞 Phone: real or vocal imitation","🌬️ Wind: blow, waving paper, synth"]},
              {title:"🎨 Real-Time Sound Drawing",description:"Translate sound into graphic mark",prompt:"Someone produces a sound. Draw it while it happens, until it fades. Not objects, only impressions: texture, shapes, energy, rhythm.",duration:"15 min",examples:["🌊 Long sound = flowing line","💥 Explosive sound = rapid fragmented stroke","🎵 Rhythmic sound = repeated pattern"]},
              {title:"🌈 Synesthesia: Colors of Sounds",description:"What colors do sounds have for you?",prompt:"Take sounds from your collection. Assign a color to each. Discuss: why that association? Is it subjective or shared?",duration:"12 min",examples:["🔴 Red = aggressive, loud sounds","💙 Blue = calm, aquatic sounds","🟡 Yellow = high-pitched, bright sounds"]},
              {title:"📐 Acoustic Geometry",description:"Do sounds have shapes?",prompt:"Listen to different sounds. Which are round? Triangular? Square? Linear? Associate geometric shapes with sound qualities.",duration:"15 min",examples:["⭕ Round: bells, drone, waves","🔺 Triangular: high-pitched, percussive sounds","⬛ Square: dry, defined sounds"]},
              {title:"🎤 Natural Vocal Concert",description:"Imitate a soundscape with voices",prompt:"Group divided into 2 teams (6-8 people). Choose environment (urban/rural). Create vocal composition imitating all sounds: birds, traffic, wind, water, animals, machines.",duration:"30 min",examples:["🌳 Forest: birds, rustling, wind, stream","🏙️ City: traffic, sirens, voices, construction","🌊 Sea: waves, seagulls, wind, boats"]},
              {title:"🔄 Oral Transmission of Composition",description:"Teach your concert to another group",prompt:"Group A performs their natural concert. Group B observes (each member follows a specific performer). Then Group B must replicate the composition without score.",duration:"25 min",examples:["👂 Learning through imitation","🎭 How oral music is transmitted","🔁 Repeat exercise multiple times for precision"]},
              {title:"🗣️ Personal Onomatopoeia",description:"Invent sound words for concepts",prompt:"Theory: language was born imitating sounds. Invent onomatopoeic words in your private language for: bell, sneeze, bomb, purring cat, moonlight.",duration:"15 min",examples:["🔔 Bell: 'dingolon', 'tambalà'","💥 Bomb: 'krapùm', 'bùmfra'","😺 Purring: 'rrrónron', 'prururù'"]},
              {title:"💧 Vocabulary of Water",description:"Create invented terms for water states",prompt:"Water has infinite sound forms. Invent onomatopoeic words for: rain drops, current, waterfall, river, ocean waves.",duration:"12 min",examples:["💧 Drops: 'plic-plic', 'tichetì'","🌊 Waves: 'frùscia-retràh', 'uoooosh'","🏞️ Waterfall: 'shhhrrraaaah', 'tùmbala'"]},
              {title:"🎯 Complex Sound Sequences",description:"Find sounds with specific transitions",prompt:"Detailed task: find a sound that starts scraping and ends tinkling. One that starts with a thud and ends with chirping. One that rises in pitch as it fades.",duration:"20 min",examples:["🔧 Scrape→tinkle: tool on metal","💥 Thud→chirp: object falls on surface","📻 Rises while fading: feedback, inverse Doppler"]},
              {title:"🎭 Improvisation with Shoes",description:"Rhythmic composition with footwear",prompt:"Everyone brings a pair of shoes. Group similar shoes: boots, heels, sandals, sneakers. Each group creates 10-minute improvisation. Then unite everything into single composition.",duration:"40 min",examples:["👠 Heels: dry, fast rhythms","🥾 Boots: heavy, martial groove","👟 Sneakers: soft texture, shuffle"]},
              {title:"🎵 Images vs Sounds Comparison",description:"Translatability between sensory modes",prompt:"Take some sounds and draw them while performing them. Drawing duration = sound duration. Not objects: only impressions, textures, energies.",duration:"18 min",examples:["🌀 Spiraling sound = spiral drawing","💥 Explosive sound = lines exploding from center","🎵 Melodic sound = flowing wavy line"]},
              {title:"🌍 Guided Soundwalk - Post Questions",description:"Structured experience with questionnaire",prompt:"After silent walk, answer in writing: loudest sound? Softest? Highest pitched? Three in motion? Three from above? Ugliest? Most beautiful? Farthest? One to eliminate?",duration:"45 min total",examples:["📝 18 specific questions about experience","🎯 Train detailed acoustic observation","💬 Group discussion of answers"]},
              {title:"🔊 Analysis of Vocal Changes in Movement",description:"Voice quality variations in space",prompt:"Group with eyes closed. One person walks talking. Others follow with ears and point. Are they facing forward or backward? In corner or by door? Behind curtain?",duration:"15 min",examples:["👤 Front vs back: different timbre","🚪 Door passage: reverb changes","🪟 Curtain: muffled, dampened sound"]},
              {title:"🌐 Cultural Soundscape",description:"Typical sounds of geographical places",prompt:"Research and explore how different places in the world have characteristic sounds. Italian shoes vs Canadian vs Nigerian. Create geographic sound catalog.",duration:"30 min",examples:["🇮🇹 Italy: heels on cobblestones","🇯🇵 Japan: wooden geta","🇧🇷 Brazil: slapping flip-flops"]},
              {title:"🎶 Composition with Onomatopoeic Qualities",description:"Create piece using only vocal imitations",prompt:"Group creates entirely vocal composition imitating complex soundscape: urban or natural. Each member = one instrument of the landscape.",duration:"35 min",examples:["🚗 Traffic: voices = different cars","🌳 Forest: voices = birds, wind, animals","🏭 Factory: voices = machinery, sirens, echoes"]},
              {title:"👂 Long-Term Acoustic Memory",description:"Reconstruct soundscape from memory",prompt:"Think of a childhood place. What sounds do you remember? List them. Then create vocal sound representation of that memory. Sound evokes powerful memory.",duration:"20 min",examples:["🏡 Childhood home: TV, pots, family voices","🏫 School: bell, corridor voices, pens","🌳 Playground: swings, screams, ball"]},
              {title:"🎚️ Dynamics: Comparative Audition",description:"Classify sounds by relative volume",prompt:"During walk or static listening, create 1-10 intensity scale. Position each perceived sound. Which category (loud/soft) dominates?",duration:"15 min",examples:["📊 1-3: whispers, rustles, breaths","📊 4-7: conversations, steps, doors","📊 8-10: traffic, sirens, loud music"]},
              {title:"🧩 Deconstructive Acoustic Puzzle",description:"Decompose complex landscape into layers",prompt:"In rich environment (square, station). Identify each sound layer separately: traffic, voices, music, nature, technology. How many overlapping layers do you perceive?",duration:"20 min",examples:["🎧 Layer 1: constant traffic (base)","🎧 Layer 2: intermittent voices (middle)","🎧 Layer 3: punctual events (foreground)"]},
              {title:"🔴 360° Mental Recording",description:"Memorize complete sound space",prompt:"Stand still 5 minutes. Memorize the entire sound field around you (360 degrees). Then move and try to mentally reconstruct that acoustic scene.",duration:"15 min",examples:["🧠 Train spatial acoustic memory","🎯 Forgotten details emerge later","🔄 Compare memory vs reality by returning"]},
              {title:"🎼 Graphic Notation of Landscape",description:"Create visual score of environment",prompt:"Listen to soundscape 10 minutes. Create personal graphic notation representing its structure, dynamics, events. Not traditional score: your own symbols.",duration:"25 min",examples:["📊 Continuous lines = drones","⚡ Dots = isolated events","🌊 Waves = variable repetitive patterns"]},
              {title:"🕰️ Daily Sound Clock",description:"Rhythms and cycles of landscape in 24h",prompt:"Document how your area's soundscape changes at different hours: dawn, noon, evening, night. What sounds mark time?",duration:"1 day",examples:["🌅 Dawn: birds, first traffic","🌆 Noon: maximum chaos","🌙 Night: silences, distant sounds amplified"]},
              {title:"👥 Collective Acoustic Theater",description:"Site-specific vocal performance",prompt:"Group chooses public place. Create vocal performance that dialogues with existing soundscape. Voices integrate, respond, contrast with environment.",duration:"45 min",examples:["🚉 Station: voices imitate/alter announcements","🌳 Park: voices blend with nature","🏛️ Museum: whispers echo architecture"]},
              {title:"🎯 Mobile Sound Target",description:"Follow a specific sound in chaos",prompt:"Complex environment (market, station). Choose a sound type (e.g. children laughing). Follow it exclusively ignoring everything else. Extreme selective concentration.",duration:"15 min",examples:["👶 Children's voices in chaos","🔔 Little bells among noises","🎵 Distant music in traffic"]},
              {title:"🌊 Thematic Soundwalk",description:"Walk searching for specific category",prompt:"Walk with theme: find only water sounds. Or only metallic sounds. Or only human voices. Document variations within the category.",duration:"30 min",examples:["💧 Water: fountains, drops, pipes, rain","🔩 Metal: gates, keys, coins, cans","🗣️ Voices: languages, ages, emotions, distances"]},
              {title:"🎭 Acoustic Archaeology",description:"Disappeared sounds vs new sounds",prompt:"Interview elderly person: what sounds from their youth have disappeared? What new ones appeared? Create sound documentary of transformations.",duration:"1 hour",examples:["❌ Disappeared: bell-ringers, carriages, street vendors","✅ Appeared: drones, smartphones, electric cars","🔄 Transformation of urban soundscape"]},
              {title:"🧘 Single Sound Meditation",description:"Total focus on one source",prompt:"Choose a continuous sound (refrigerator, distant traffic). Listen to it exclusively for 10 minutes. Do you perceive microtonal variations? Hidden rhythms?",duration:"10 min",examples:["🔊 'Constant' sound reveals variations","🎵 Patterns emerge from apparent chaos","🧠 Deep listening vs superficial listening"]},
              {title:"🌍 Community Sound Map",description:"Collective documentation project",prompt:"Group creates sound map of neighborhood. Everyone documents specific area. Assemble complete map with descriptions, recordings, drawings.",duration:"2-3 hours",examples:["🗺️ Use collaborative mapping apps","📍 Mark points of sound interest","🎧 Attach recordings and descriptions"]},
              {title:"🎪 Virtuoso Imitation Contest",description:"Precise vocal reproduction competition",prompt:"Group chooses 10 difficult sounds to imitate. Everyone tries. Vote for best imitations. Analyze what makes an imitation convincing.",duration:"30 min",examples:["🚁 Helicopter, chainsaw, alarm","🐸 Animals: cat, frog, horse","🔧 Objects: blender, zipper, tearing paper"]},
              {title:"📻 Radiodrama of the Everyday",description:"Transform routine into sound narrative",prompt:"Record or vocally recreate your typical morning only with sounds: alarm, water, steps, door, traffic, etc. Narrative composition purely acoustic.",duration:"25 min",examples:["⏰ Alarm → bathroom → breakfast → exit","🎭 Only sounds, no words","🎬 Storytelling through soundscape"]},
              {title:"🌈 Acoustic Emotional Spectrum",description:"Associate emotions with environmental sounds",prompt:"Emotional walk: document which sounds make you happy, sad, anxious, calm, nostalgic. Create your emotional map of the landscape.",duration:"30 min",examples:["😊 Happy: birds, laughter, music","😰 Anxious: sirens, brakes, screams","😌 Calm: fountains, wind, silence"]},
              {title:"🔬 Micro-Listening: The Invisible Sound",description:"Sounds below normal attention threshold",prompt:"Use microphone or extreme concentration. Search for the weakest existing sounds: your breathing, clock, electricity, insects. Hidden sound world.",duration:"20 min",examples:["🦗 Almost imperceptible insects","⚡ Continuous electrical hum","💨 Micro-movements of air and clothes"]},
              {title:"💚 Sonic Wellness Walk",description:"Walk for intentional acoustic wellbeing",prompt:"Plan a 30 min route that maximizes beneficial sounds for you: nature, water, silence, pleasant music. Consciously avoid sound stress zones. Map your personal acoustic wellness.",duration:"45 min",examples:["🌳 Park with fountain and birds","🏛️ Silent cloister","🎵 Street with your favorite street musician"]},
              {title:"📍 Secret Listening Points",description:"Discover acoustically unique corners in your city",prompt:"Search for 5 special 'listening points': places where acoustics are unusual, beautiful or strange. Spiral staircase? Underpass? Inner courtyard? Document with recording or detailed description.",duration:"60 min",examples:["🌀 Spiral staircase: circular reverb","🌉 Under bridge: metallic echo","🏛️ Dome: amplified whispers"]},
              {title:"🌧️ Seasonal Acoustic Diary",description:"Document how sounds change with seasons",prompt:"One audio recording or written description 15 min, same place, each season. How does soundscape change between summer, autumn, winter, spring? Annual project.",duration:"15 min x 4 seasons",examples:["🌸 Spring: birds nesting, rains","☀️ Summer: crickets, air conditioners, voices outside","🍂 Autumn: wind in dry leaves","❄️ Winter: snow silence, heating systems"]},
              {title:"💝 Sonic Love Letter",description:"Create sound map dedicated to loved one",prompt:"Think of someone you love. What sounds do you associate with them? Create 'sonic love letter': collage of recordings or descriptions of sounds that represent that person and your bond.",duration:"40 min",examples:["☕ Sound of their coffee maker in morning","🎵 Song they sing in shower","😂 Their specific laugh you'd recognize anywhere"]}
            ]
          };

          const exerciseCategories = [
            {
              id: 'esercizi-spettrali',
              title: '🎵 Spectral Exercises!',
              description: 'Mysterious practices to unleash dark creativity',
              icon: Flower,
              color: 'from-teal-300 via-teal-400 to-teal-500'
            },
            {
              id: 'blocco-creativo',
              title: 'Creative Block',
              description: 'Overcome perfectionism and fear of the blank page',
              icon: Palette,
              color: 'from-teal-300 via-teal-400 to-teal-500'
            },
            {
              id: 'mancanza-ispirazione',
              title: 'Lack of Inspiration',
              description: 'Rediscover fresh ideas and new perspectives',
              icon: Lightbulb,
              color: 'from-teal-300 via-teal-400 to-teal-500'
            },
            {
              id: 'burnout-accademico',
              title: 'Academic Burnout',
              description: 'Manage stress from projects and deadlines',
              icon: Zap,
              color: 'from-teal-300 via-teal-400 to-teal-500'
            },
            {
              id: 'ansia-critica',
              title: 'Exam Anxiety',
              description: 'Face reviews and exams with serenity',
              icon: Award,
              color: 'from-teal-300 via-teal-400 to-teal-500'
            },
            {
              id: 'paesaggio-sonoro',
              title: '🌍 Soundscape',
              description: 'Explore and map the acoustic environment around you',
              icon: Flower,
              color: 'from-amber-300 via-orange-300 to-amber-400'
            }
          ];

          const getRandomVariant = (category) => {
            const variants = exerciseVariants[category];

            // All exercises available for free (474 total exercises)
            const availableVariants = variants;

            // Non-repetition system: track already shown exercises per category
            const seenKey = `seen_exercises_${category}`;
            let seenIndices = [];

            try {
              const stored = localStorage.getItem(seenKey);
              seenIndices = stored ? JSON.parse(stored) : [];
            } catch (e) {
              seenIndices = [];
            }

            // Verify validity of saved indices (could be obsolete)
            seenIndices = seenIndices.filter(idx => idx >= 0 && idx < availableVariants.length);

            // Create array of unseen indices
            const unseenIndices = [];
            for (let i = 0; i < availableVariants.length; i++) {
              if (!seenIndices.includes(i)) {
                unseenIndices.push(i);
              }
            }

            // If all exercises have been seen, reset the list
            let indicesToUse = unseenIndices.length > 0 ? unseenIndices : Array.from({length: availableVariants.length}, (_, i) => i);
            if (unseenIndices.length === 0) {
              console.log(`✅ Category ${category}: all ${availableVariants.length} exercises seen! Automatic reset.`);
              seenIndices = [];
              localStorage.setItem(seenKey, JSON.stringify([]));
            }

            // Random selection from available indices (not yet seen)
            const randomArrayIndex = Math.floor(Math.random() * indicesToUse.length);
            const selectedIndex = indicesToUse[randomArrayIndex];
            const randomVariant = availableVariants[selectedIndex];

            // Save the index as seen
            seenIndices.push(selectedIndex);
            localStorage.setItem(seenKey, JSON.stringify(seenIndices));

            console.log(`🎲 Category ${category}: shown exercise ${seenIndices.length}/${availableVariants.length} - "${randomVariant.title}"`);

            return randomVariant;
          };

          const getMoodEmoji = (mood) => {
            if (mood <= 1) return '😢';
            if (mood <= 2) return '😟';
            if (mood <= 3) return '😐';
            if (mood <= 4) return '😊';
            return '🤩';
          };

          const generateWithGemini = async (category) => {
            if (!geminiApiKey) {
              alert('⚠️ First configure your Gemini API key in settings!');
              setShowApiSetup(true);
              return null;
            }

            // Rate limiter: 5 seconds between requests (to avoid Gemini errors)
            const now = Date.now();
            const timeSinceLastRequest = now - lastApiRequestTime;
            if (timeSinceLastRequest < 5000) {
              const waitSeconds = Math.ceil((5000 - timeSinceLastRequest) / 1000);
              setRateLimitCountdown(waitSeconds);
              alert(`⏱️ Wait ${waitSeconds} seconds before generating another exercise`);
              return null;
            }

            const prompts = {
              'esercizi-spettrali': `You are a creative coach for Music students specialized in unconventional musical processes and creative psychology.

TASK: Generate a spectral/dark exercise that frees creative unconscious through unusual sonic practices.

TECHNICAL CONSTRAINTS:
- DURATION: freely choose between 3 minutes and 90 minutes depending on the exercise's complexity
- Vary the duration: alternate short/medium/long exercises
- Specific techniques for Music: automatic improvisation, gestural performance, symbolic sound collage, conceptual recording, experimental composition
- Materials: specify exactly what's needed (instruments, voice, objects, recording devices, etc.)
- Process: clear step-by-step sequential instructions

APPROACH:
- Explore inner shadows and personal symbolism
- Provocative but psychologically safe
- Focus on process, not aesthetic result
- Mysterious but therapeutic atmosphere

EXAMPLES: Provide 3 concrete examples with DIFFERENT techniques (e.g., one with improvisation, one with sound collage, one with field recording/voice)

OUTPUT FORMAT - IMPORTANT:
Respond EXCLUSIVELY with a valid JSON object. NO text before or after the JSON.
DO NOT use newlines (\\n) inside strings - use spaces only.
DO NOT use trailing commas.
Use ONLY double quotes ("), never single quotes (').

Format: {"title": "Evocative name with emoji 🌑", "description": "Brief description", "prompt": "Detailed instructions", "duration": "X min (choose the appropriate duration yourself)", "examples": ["Example 1", "Example 2", "Example 3"]}`,

              'blocco-creativo': `You are a coach for Music Students specialized in anti-perfectionism techniques.

TASK: Generate exercise to demolish creative block and liberate immediate musical action.

TECHNICAL CONSTRAINTS:
- DURATION: freely choose between 3 minutes and 90 minutes depending on the exercise's complexity
- Vary the duration: alternate short/medium/long exercises
- Specific techniques: blind improvisation, timed composition, rapid arrangements, instinctive sound collage, serial sketches
- Materials: precise list of what's needed
- Approach: provocative, anti-perfectionist, focus on quantity > quality

EXPECTED RESULT:
- Bypass internal judgment
- Produce concrete musical work (sketches, prototypes, drafts)
- Generate raw material for future projects

EXAMPLES: 3 variants with DIFFERENT techniques/approaches (improvisation/composition/performance/electronic/acoustic)

OUTPUT FORMAT - IMPORTANT:
Respond EXCLUSIVELY with a valid JSON object. NO text before or after the JSON.
DO NOT use newlines (\\n) inside strings - use spaces only.
DO NOT use trailing commas.
Use ONLY double quotes ("), never single quotes (').

Format: {"title": "Direct name", "description": "What you'll achieve", "prompt": "Practical instructions", "duration": "X min (choose the appropriate duration yourself)", "examples": ["Example 1", "Example 2", "Example 3"]}`,

              'mancanza-ispirazione': `You are a creative coach for musicians specialized in lateral thinking and musical brainstorming.

TASK: Generate exercise to unlock fresh inspiration through unexpected musical stimuli.

TECHNICAL CONSTRAINTS:
- DURATION: freely choose between 3 minutes and 90 minutes depending on the exercise's complexity
- Vary the duration: alternate short/medium/long exercises
- Methods: constraint-based creativity, random combinations, sound reinterpretation, musical research sprint
- Output: musical sketches, sound palettes, melodic/rhythmic fragments, recordings
- Approach: playful, experimental, divergent

FOCUS:
- Generate CONCRETE ideas for musical projects/compositions
- Explore non-obvious sonic territories
- Create archive of usable musical prompts

EXAMPLES: 3 exercises with DIFFERENT approaches (sonic/rhythmic/harmonic)

OUTPUT FORMAT - IMPORTANT:
Respond EXCLUSIVELY with a valid JSON object. NO text before or after the JSON.
DO NOT use newlines (\\n) inside strings - use spaces only.
DO NOT use trailing commas.
Use ONLY double quotes ("), never single quotes (').

Format: {"title": "Stimulating name", "description": "What you'll discover", "prompt": "Step-by-step process", "duration": "X min (choose the appropriate duration yourself)", "examples": ["Example 1", "Example 2", "Example 3"]}`,

              'burnout-accademico': `You are a wellness specialist for Music Students facing deadline and audition stress.

TASK: Generate regenerating exercise that provides immediate relief while maintaining connection with musical practice.

TECHNICAL CONSTRAINTS:
- DURATION: freely choose between 3 minutes and 90 minutes depending on the exercise's complexity
- Vary the duration: alternate short/medium/long exercises
- Relaxing techniques: meditative improvisation, repetitive rhythmic work, intuitive sound exploration, contemplative listening
- Materials: simple and accessible (even just voice or simple instrument)
- Approach: low-pressure, process-oriented, sensory

RESULT:
- Lower anxiety and cortisol
- Reconnect with joy of music-making
- Doable even with low mental energy

EXAMPLES: 3 DIFFERENT practices for different energy levels

OUTPUT FORMAT - IMPORTANT:
Respond EXCLUSIVELY with a valid JSON object. NO text before or after the JSON.
DO NOT use newlines (\\n) inside strings - use spaces only.
DO NOT use trailing commas.
Use ONLY double quotes ("), never single quotes (').

Format: {"title": "Welcoming name", "description": "Immediate benefit", "prompt": "Gentle instructions", "duration": "X min (choose the appropriate duration yourself)", "examples": ["Variant 1", "Variant 2", "Variant 3"]}`,

              'ansia-critica': `You are a coach for Music students specialized in managing anxiety from musical exposure.

TASK: Generate exercise to face critiques, auditions and external judgment with healthy detachment.

TECHNICAL CONSTRAINTS:
- DURATION: freely choose between 3 minutes and 90 minutes depending on the exercise's complexity
- Vary the duration: alternate short/medium/long exercises
- Focus: separate personal identity from performance/composition
- Techniques: constructive self-critique, mental reframing, process documentation
- Concrete output: tools usable before/during/after critiques

APPROACH:
- Reduce emotional reactivity
- Increase confidence in musical choices
- Practical mental preparation

EXAMPLES: 3 applications for DIFFERENT contexts (jury/exam/concert)

OUTPUT FORMAT - IMPORTANT:
Respond EXCLUSIVELY with a valid JSON object. NO text before or after the JSON.
DO NOT use newlines (\\n) inside strings - use spaces only.
DO NOT use trailing commas.
Use ONLY double quotes ("), never single quotes (').

Format: {"title": "Reassuring name", "description": "What you'll learn", "prompt": "Step-by-step strategy", "duration": "X min (choose the appropriate duration yourself)", "examples": ["Scenario 1", "Scenario 2", "Scenario 3"]}`,

              'paesaggio-sonoro': `You are a coach specialized in deep listening, field recording and acoustic ecology. Draw inspiration from the teachings of R. Murray Schafer and Bernie Krause.

TASK: Generate exercise for exploring and documenting the surrounding soundscape, developing acoustic awareness and active listening skills.

TECHNICAL CONSTRAINTS:
- DURATION: freely choose between 3 minutes and 90 minutes depending on the exercise's complexity
- Vary the duration: alternate short/medium/long exercises
- Techniques: analytical listening, sound mapping, sound classification, vocal imitation, graphic notation, mental field recording
- Setting: can be indoor, outdoor urban, nature, or combinations
- Output: lists, maps, drawings, mental recordings, vocal compositions based on real observation

APPROACH:
- From passive listening to active and analytical listening
- Development of "acoustic sight" (ability to see with ears)
- Awareness of emotional and cultural impact of sounds
- Transformation of environment into musical and creative material
- Documentation and memory of soundscape

KEY ELEMENTS TO EXPLORE:
- Origin: nature (N), human (U), technological (T)
- Temporality: continuous (C), repetitive (R), unique (U)
- Spatiality: distance, direction, movement
- Dynamics: loud/soft, pleasant/unpleasant
- Quality: pitch, timbre, rhythm, texture

EXAMPLES: 3 variants with DIFFERENT SETTINGS (indoor/urban street/nature - or original combinations)

OUTPUT FORMAT - IMPORTANT:
Respond EXCLUSIVELY with a valid JSON object. NO text before or after the JSON.
DO NOT use newlines (\\n) inside strings - use spaces only.
DO NOT use trailing commas.
Use ONLY double quotes ("), never single quotes (').

Format: {"title": "Evocative name with emoji 🎧🌍", "description": "Listening objective", "prompt": "Detailed exploration instructions", "duration": "X min (choose the appropriate duration yourself)", "examples": ["Setting 1 with focus", "Setting 2 with variation", "Setting 3 with specific aspect"]}`
            };

            setIsGenerating(true);
            
            try {
              console.log('🔄 Calling Gemini API...');
              console.log('📍 API Key present:', geminiApiKey ? 'Yes' : 'No');
              console.log('📍 API Key length:', geminiApiKey?.length);

              const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${geminiApiKey}`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    contents: [{
                      parts: [{
                        text: prompts[category]
                      }]
                    }],
                    generationConfig: {
                      temperature: 0.9,
                      topK: 40,
                      topP: 0.95,
                      maxOutputTokens: 2048,
                    }
                  })
                }
              );

              console.log('📍 Response status:', response.status);
              console.log('📍 Response ok:', response.ok);

              if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Cannot read response' }));
                console.error('❌ Full API error:', JSON.stringify(errorData, null, 2));

                let errorMessage = 'Unknown error';
                if (errorData.error) {
                  if (errorData.error.code === 400) {
                    errorMessage = 'Invalid API Key or wrong request format';
                  } else if (errorData.error.code === 403) {
                    errorMessage = 'Unauthorized API Key. Verify that Gemini API is enabled in your Google Cloud project';
                  } else if (errorData.error.code === 429) {
                    errorMessage = 'Rate limit reached. Try again in a few minutes';
                  } else {
                    errorMessage = errorData.error.message || `Error ${errorData.error.code}`;
                  }
                }

                throw new Error(errorMessage);
              }

              const data = await response.json();
              console.log('📍 API response received:', data);

              if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                console.error('❌ Invalid response structure:', data);
                throw new Error('Invalid API response: missing structure');
              }

              let generatedText = data.candidates[0].content.parts[0].text;
              console.log('📍 Generated text:', generatedText.substring(0, 200) + '...');

              // Aggressive text cleaning
              generatedText = generatedText
                .replace(/```json\s*/g, '')
                .replace(/```\s*/g, '')
                .trim();

              // Search JSON - use simpler method that captures everything between { and }
              const jsonStart = generatedText.indexOf('{');
              const jsonEnd = generatedText.lastIndexOf('}');

              if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
                let jsonString = generatedText.substring(jsonStart, jsonEnd + 1);

                // AGGRESSIVE cleaning of extracted JSON
                jsonString = jsonString
                  .replace(/,(\s*[}\]])/g, '$1')  // Remove trailing commas
                  .replace(/\n/g, ' ')  // REMOVE newlines (not escape!)
                  .replace(/\r/g, ' ')  // Remove carriage returns
                  .replace(/\t/g, ' ')  // Replace tabs with spaces
                  .replace(/\s+/g, ' ');  // Compact multiple spaces into one

                console.log('📍 Extracted JSON (first 200 chars):', jsonString.substring(0, 200));

                try {
                  const exercise = JSON.parse(jsonString);

                  // Validate required fields
                  if (!exercise.title || !exercise.prompt || !exercise.duration) {
                    throw new Error('JSON missing required fields (title, prompt, duration)');
                  }

                  setIsGenerating(false);
                  console.log('✅ Exercise generated successfully');

                  // Increment counter and save timestamp

                  return exercise;
                } catch (parseError) {
                  console.error('❌ JSON parsing error:', parseError);
                  console.error('📍 Complete JSON:', jsonString);
                  throw new Error('Invalid JSON received from Gemini. Please retry.');
                }
              } else {
                setIsGenerating(false);
                console.log('⚠️ JSON format not found, using raw text');
                return {
                  title: "AI Generated Exercise",
                  description: "Personalized exercise",
                  prompt: generatedText,
                  duration: `${duration} min`,
                  examples: []
                };
              }
            } catch (error) {
              console.error('💥 Full error:', error);
              console.error('💥 Stack trace:', error.stack);
              alert(`⚠️ Generation error:\n\n${error.message}\n\nCheck browser console (F12) for more details.`);
              setIsGenerating(false);
              return null;
            }
          };

          const askClarification = async (question) => {
            if (!geminiApiKey) {
              alert('⚠️ First configure your Gemini API key in settings!');
              setShowApiSetup(true);
              return null;
            }

            if (!question || question.trim() === '') {
              alert('⚠️ Please write a question before submitting.');
              return null;
            }

            setIsAskingClarification(true);

            try {
              const prompt = `You are a creative coach for Music Students. The student is doing this exercise:

TITLE: ${currentVariant.title}
DESCRIPTION: ${currentVariant.description}
INSTRUCTIONS: ${currentVariant.prompt}
DURATION: ${currentVariant.duration}

The student has this question or request for clarification:
"${question}"

Provide a clear, practical and encouraging answer. Be specific and concrete. If necessary, suggest variants or adaptations of the exercise.

Answer directly, without special formatting. Maximum 300 words.`;

              const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${geminiApiKey}`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    contents: [{
                      parts: [{
                        text: prompt
                      }]
                    }],
                    generationConfig: {
                      temperature: 0.7,
                      topK: 40,
                      topP: 0.95,
                      maxOutputTokens: 1024,
                    }
                  })
                }
              );

              if (!response.ok) {
                throw new Error('API call error');
              }

              const data = await response.json();

              if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid API response');
              }

              const answer = data.candidates[0].content.parts[0].text;
              setClarificationAnswer(answer);
              setIsAskingClarification(false);
              return answer;
            } catch (error) {
              console.error('💥 Clarification request error:', error);
              alert(`⚠️ Request error:\n\n${error.message}`);
              setIsAskingClarification(false);
              return null;
            }
          };

          const saveApiKey = () => {
            localStorage.setItem('gemini_api_key', geminiApiKey);
            setShowApiSetup(false);
            setApiKeySaved(true);
            setTimeout(() => setApiKeySaved(false), 2000);
          };

          // AI Trial Functions
          const activateAITrial = () => {
            const now = Date.now();
            localStorage.setItem('ai_trial_start', now.toString());
            setAiTrialActive(true);
            setTrialDaysLeft(7);
            setShowTrialBanner(false);
            alert('🎉 AI Trial activated! You have 7 days to try unlimited AI generation.\n\n💡 Configure your API key in settings to use AI.');
            setShowApiSetup(true);
          };

          const dismissTrialBanner = () => {
            localStorage.setItem('ai_trial_dismissed', 'true');
            setShowTrialBanner(false);
          };

          const completeExercise = () => {
            setExerciseCompleted(true);
            const newCount = exercisesCompleted + 1;
            setExercisesCompleted(newCount);
            localStorage.setItem('exercises_completed', newCount.toString());
            checkReviewPrompt(newCount);
          };

          const checkReviewPrompt = (completedCount) => {
            const hasAskedReview = localStorage.getItem('has_asked_review');
            const daysSinceFirstUse = (Date.now() - firstUseDate) / (1000 * 60 * 60 * 24);

            if (!hasAskedReview && daysSinceFirstUse >= 3 && completedCount >= 5) {
              setTimeout(() => setShowReviewPrompt(true), 2000);
            }
          };

          const handleReviewResponse = (action) => {
            setShowReviewPrompt(false);
            localStorage.setItem('has_asked_review', 'true');

            if (action === 'review') {
              window.open('https://apps.apple.com/app/YOUR_APP_ID', '_blank');
            }
          };


          const HomeView = () => (
            <div className="space-y-6">
              <div className={`text-center py-8 bg-gradient-to-r ${currentTheme.colors.primary}/20 via-white/20 to-${currentTheme.colors.accent}/10 rounded-2xl border-2 ${currentTheme.colors.cardBorder} shadow-lg calm-glow`}>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {currentTheme.greeting}
                </h1>
                <p className="text-gray-700 text-lg font-semibold">{currentTheme.subtitle}</p>
                {currentTheme.activeUntil && (
                  <p className="text-sm mt-2 opacity-75 italic">
                    ✨ Theme active until {currentTheme.activeUntil} ✨
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-2">Your support for musical wellbeing</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setCurrentView('mood')}
                  className="card-hover p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl text-gray-800 shadow-lg border-2 border-orange-200/50"
                >
                  <div className="flex justify-center mb-4">
                    <Palette className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Track Your Mood</h3>
                  <p className="text-teal-800">How do you feel today?</p>
                </button>

                <button
                  onClick={() => setCurrentView('journal')}
                  className="card-hover p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl text-gray-800 shadow-lg border-2 border-green-200/50"
                >
                  <Leaf className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Creative Journal</h3>
                  <p className="text-green-800">Write thoughts and reflections</p>
                </button>

                <button
                  onClick={() => setCurrentView('exercises')}
                  className="col-span-2 card-hover p-8 bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl text-gray-800 shadow-xl border-4 border-pink-200/70 transform"
                >
                  <div className="flex justify-center mb-4">
                    <Plant className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Guided Exercises for Musicians</h3>
                  <p className="text-pink-900 font-medium">Hundreds of wellness practices</p>
                </button>

                <button
                  onClick={() => setCurrentView('creativelab')}
                  className="col-span-2 card-hover p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl text-gray-800 shadow-xl border-4 border-purple-200/70 transform"
                >
                  <div className="flex justify-center mb-4">
                    <span className="text-6xl">🎵</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Creative Lab AI</h3>
                  <p className="text-purple-900 font-medium">Unlock your creativity with AI</p>
                </button>

                <button
                  onClick={() => setCurrentView('progress')}
                  className="card-hover p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl text-gray-800 shadow-lg border-2 border-teal-200/50"
                >
                  <Butterfly className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Your Progress</h3>
                  <p className="text-teal-800">Visualize your journey</p>
                </button>

                <button
                  onClick={() => setCurrentView('insights')}
                  className="card-hover p-6 bg-gradient-to-br from-lime-50 to-green-100 rounded-2xl text-gray-800 shadow-lg border-2 border-green-200/50"
                >
                  <div className="flex justify-center mb-4">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Analysis & Insights</h3>
                  <p className="text-green-900">Discover patterns and receive feedback</p>
                </button>
              </div>

              <div className="bg-gradient-to-r from-orange-100/50 via-green-100/40 to-white/60 p-6 rounded-xl border-2 border-orange-300/50 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-wellness-accent">
                  <HealthyFood className="w-6 h-6" />
                  Designed for Musicians and Music Students
                </h3>
                <p className="text-teal-700 mb-2">
                  Specific exercises for Music Students and Musicians: manage creative block, project burnout,
                  exam anxiety and rediscover inspiration... even in the darkest nights! 🌙
                </p>
                <p className="text-orange-600 text-sm">
                  🎵 hundreds of exercises with 3 examples each | 📓 Journal | ✨ Results analysis
                </p>
              </div>
            </div>
          );

          const MoodView = () => {
            const handleMoodClick = (mood, event) => {
              // Save the mood
              setCurrentMood(mood);
              setMoodHistory([...moodHistory, { ...mood, date: new Date().toISOString() }]);
              setSelectedMoodId(mood.id);

              // Get position of clicked button
              const rect = event.currentTarget.getBoundingClientRect();
              const targetX = (rect.left / window.innerWidth) * 100;
              const targetY = (rect.top / window.innerHeight) * 100;

              // Make the spider run toward the mood
              setPlantTarget({ x: targetX, y: targetY });

              // After animation (3 seconds), return to home automatically
              setTimeout(() => {
                setSelectedMoodId(null);
                setPlantTarget(null);
                setCurrentView('home');
              }, 3000);
            };

            return (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-wellness-primary">How do you feel today?</h2>
                <p className="text-orange-600">Track your daily emotional state</p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {moods.map(mood => (
                    <button
                      key={mood.id}
                      onClick={(e) => handleMoodClick(mood, e)}
                      className={`${mood.color} p-6 rounded-xl hover:scale-105 transition-transform shadow-md ${selectedMoodId === mood.id ? 'mood-selected animate-mood-fullscreen' : ''}`}
                    >
                      <div className="text-5xl mb-2">{mood.emoji}</div>
                      <p className="text-teal-800 font-semibold">{mood.name}</p>
                    </button>
                  ))}
                </div>

              {currentMood && (
                <div className="bg-gradient-to-r from-orange-100/50 to-white/60 p-6 rounded-xl border-2 border-orange-300 shadow-lg animate-fadeIn backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-teal-500">
                    <CheckCircle className="w-6 h-6 text-teal-500" />
                    Recorded!
                  </h3>
                  <p className="text-teal-700">
                    You recorded: <span className="font-bold text-lg text-wellness-primary">{currentMood.name}</span> {currentMood.emoji}
                  </p>
                </div>
              )}

                <button
                  onClick={() => setCurrentView('home')}
                  className="px-6 py-3 bg-gradient-to-r from-orange-300 to-amber-400 text-gray-800 rounded-lg hover:opacity-90 transition-opacity border border-orange-300"
                >
                  ← Back Home
                </button>
              </div>
            );
          };

          // Journal helper functions
          const saveJournalEntry = () => {
            if (journalEntry.trim()) {
              const newEntries = [...journalEntries, { text: journalEntry, date: new Date().toISOString() }];
              setJournalEntries(newEntries);
              localStorage.setItem('journalEntries', JSON.stringify(newEntries));
              setJournalEntry('');
              setJournalSaved(true);
              setTimeout(() => setJournalSaved(false), 2000);
            }
          };

          const saveCreativeProfileData = (profile) => {
            setCreativeProfile(profile);
            localStorage.setItem('creativeProfile', JSON.stringify(profile));
          };

          const analyzeCreativeRequestData = async () => {
            if (!creativeRequest.trim() || !creativeProfile) return;

            setCreativeAnalyzing(true);

            const prompt = `YOU ARE A CREATIVE COACH SPECIALIZED FOR MUSIC STUDENTS AND MUSICAL DISCIPLINES.

EXPERTISE:
- Musical techniques: composition, improvisation, performance, arranging, production, sound design, electronic music
- Creative process: ideation, repertoire development, musical statement, musical research
- Academic context: critiques, juries, auditions, concerts, recitals, thesis, projects
- Specific blocks: performance anxiety, writer's block, fear of critical judgment, technique plateaus

STUDENT PROFILE:
- Age: ${creativeProfile.age} years old
- Course/Discipline: ${creativeProfile.study}
- Academic level: ${creativeProfile.level}
- Preferred techniques/medium: ${creativeProfile.genres}
- Musical goals: ${creativeProfile.goals || 'Not specified'}
- Unique skill: ${creativeProfile.uniqueSkill || 'Not specified'}

STUDENT REQUEST:
${creativeRequest}

TASK:
Analyze the student's profile and request, then propose exactly 3 concrete and personalized creative strategies.

LANGUAGE TO USE:
- Terms: piece, composition, repertoire, concert, audition, exam, interpretation, improvisation, practice
- References: musical genres, composers, instrumental/vocal techniques, music theory
- Concrete examples specific to musical disciplines

RESPONSE FORMAT (use markdown):

## 🎯 Analysis of Your Request
[brief empathetic summary of what you understood - 2-3 lines]

## 💡 Three Personalized Creative Strategies

### Strategy 1: [Evocative name]
**🎵 Approach:** [creative method description - 2-3 lines]
**🛠️ Materials/Tools needed:** [what's concretely needed]
**✨ Expected result:** [what you'll achieve for your portfolio/process]
**⏱️ Time/Effort:** [realistic estimate]

### Strategy 2: [Evocative name]
**🎵 Approach:** [creative method description - 2-3 lines]
**🛠️ Materials/Tools needed:** [what's concretely needed]
**✨ Expected result:** [what you'll achieve for your portfolio/process]
**⏱️ Time/Effort:** [realistic estimate]

### Strategy 3: [Evocative name]
**🎵 Approach:** [creative method description - 2-3 lines]
**🛠️ Materials/Tools needed:** [what's concretely needed]
**✨ Expected result:** [what you'll achieve for your portfolio/process]
**⏱️ Time/Effort:** [realistic estimate]

## 🚀 Recommended Next Step
[ONE concrete and actionable step to take today or this week - max 2 lines]

APPROACH:
- Practical and musical
- Encourage sonic and process experimentation
- Emphasize creative process > perfect final result
- Acknowledge vulnerability of musical exposure
- Tone: professional, encouraging, concrete but empathetic`;

            try {
              const apiKey = localStorage.getItem('gemini_api_key');
              if (!apiKey) {
                alert('⚠️ Configure your API Key in settings before using this feature.');
                setCreativeAnalyzing(false);
                return;
              }

              // Rate limiter: 5 seconds between requests
              const now = Date.now();
              const timeSinceLastRequest = now - lastApiRequestTime;
              if (timeSinceLastRequest < 5000) {
                const waitSeconds = Math.ceil((5000 - timeSinceLastRequest) / 1000);
                alert(`⏱️ Wait ${waitSeconds} seconds before generating another analysis`);
                setCreativeAnalyzing(false);
                return;
              }


              const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: [{ parts: [{ text: prompt }] }],
                  generationConfig: {
                    temperature: 0.9,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                  }
                })
              });

              const data = await response.json();

              console.log('API Response:', data);

              if (!response.ok) {
                console.error('API Error Response:', data);
                alert(`API Error: ${data.error?.message || 'Invalid response'}`);
                setCreativeAnalyzing(false);
                return;
              }

              if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                const aiResponse = data.candidates[0].content.parts[0].text;
                const newEntry = {
                  date: new Date().toISOString(),
                  request: creativeRequest,
                  response: aiResponse,
                  profile: { ...creativeProfile }
                };

                const newEntries = [...creativeLabEntries, newEntry];
                setCreativeLabEntries(newEntries);
                localStorage.setItem('creativeLabEntries', JSON.stringify(newEntries));
                setCreativeRequest('');
                setJournalSaved(true);
                setTimeout(() => setJournalSaved(false), 3000);

              } else {
                console.error('Unexpected response structure:', data);
                alert('Error in AI response. Please try again.');
              }
            } catch (error) {
              console.error('Creative Lab error:', error);
              alert('Connection error. Check your API Key and console.');
            }

            setCreativeAnalyzing(false);
          };

          // OLD JournalView REMOVED - Now defined outside the main component (before MentalHealthCoachMusica)


          const ExercisesView = () => (
            <div className="space-y-6">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-wellness-primary">Exercises for Musicians</h2>
                  <p className="text-orange-600 mt-1">Choose a category to begin</p>
                </div>
                <button
                  onClick={() => setShowApiSetup(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-500 text-gray-800 rounded-lg hover:opacity-90 transition-opacity border-2 border-orange-300/40"
                >
                  <Settings className="w-5 h-5" />
                  API Settings 🔮
                </button>
              </div>

              <div className="bg-gradient-to-r from-orange-100/50 to-white/60 border-l-4 border-orange-300 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-orange-600 font-semibold mb-1">💡 How it works</p>
                    <p className="text-teal-700 text-sm">
                      Every exercise includes <strong>3 practical examples</strong>.
                      Click on <Shuffle className="w-4 h-4 inline" /> to change exercise,
                      or activate <Bot className="w-4 h-4 inline" /> API mode for infinite content!
                    </p>
                  </div>
                </div>
              </div>

              {/* API/Offline Mode Toggle */}
              <div className="bg-gradient-to-r from-purple-100/60 to-pink-100/60 border-2 border-purple-400 p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Bot className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-bold text-purple-800">Exercise Mode</p>
                      <p className="text-sm text-purple-600">
                        {useApiForExercises
                          ? '🤖 AI Active - Infinite generation with Gemini'
                          : '📚 Offline - Use predefined exercises without API'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const newValue = !useApiForExercises;
                      setUseApiForExercises(newValue);
                      localStorage.setItem('use_api_for_exercises', newValue.toString());
                    }}
                    className={`px-6 py-3 rounded-lg font-bold text-white transition-all transform hover:scale-105 shadow-lg ${
                      useApiForExercises
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-purple-600'
                        : 'bg-gradient-to-r from-gray-400 to-gray-500 border-2 border-gray-600'
                    }`}
                  >
                    {useApiForExercises ? '🤖 AI Mode' : '📚 Offline Mode'}
                  </button>
                </div>
                {geminiApiKey && geminiApiKey.trim() !== '' && useApiForExercises && (
                  <div className="mt-2 space-y-2">
                    <p className="text-green-600 text-sm">✅ API key configured - Unlimited AI generation active</p>
                  </div>
                )}
                {useApiForExercises && (!geminiApiKey || geminiApiKey.trim() === '') && (
                  <p className="text-orange-600 text-sm mt-2">⚠️ AI mode selected but no API key configured. Click "API Settings" to configure it.</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {exerciseCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setExerciseTab('library');
                      setCurrentView('category-exercises-list');
                    }}
                    className={`card-hover p-6 bg-gradient-to-br ${category.color} rounded-2xl text-gray-800 shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-orange-300`}
                  >
                    <category.icon className="w-16 h-16 mb-3 transform hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-800/90 text-lg">{category.description}</p>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentView('home')}
                className="px-6 py-3 bg-gradient-to-r from-orange-300 to-amber-400 text-gray-800 rounded-lg hover:opacity-90 transition-opacity border border-orange-300"
              >
                ← Back Home
              </button>
            </div>
          );

          const CategoryExercisesListView = () => {
            if (!selectedCategory) return null;

            const categoryData = exerciseCategories.find(c => c.id === selectedCategory);
            const availableExercises = exerciseVariants[selectedCategory] || [];

            const generateExercise = async (category) => {
              setIsGenerating(true);
              const generated = await generateWithGemini(category);
              setIsGenerating(false);

              if (generated) {
                setCurrentVariant(generated);
                setSelectedExercise(category);
                setExerciseSource('api'); // Mark as from API
                setCurrentView('exercise-detail');
              }
            };

            return (
              <div className="space-y-6">
                {/* Header with Settings icon */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setCurrentView('exercises')}
                    className="flex items-center text-orange-600 hover:text-teal-700"
                  >
                    ← Back
                  </button>

                  <h2 className="text-2xl font-bold text-gray-800 flex-1 text-center">
                    {selectedCategory === 'esercizi-spettrali' && '🎵 Spectral Exercises'}
                    {selectedCategory === 'blocco-creativo' && '🎹 Creative Block'}
                    {selectedCategory === 'mancanza-ispirazione' && '🌈 Lack of Inspiration'}
                    {selectedCategory === 'burnout-accademico' && '💙 Academic Burnout'}
                    {selectedCategory === 'ansia-critica' && '🎯 Exam Anxiety'}
                    {selectedCategory === 'paesaggio-sonoro' && '🌍 Soundscape'}
                  </h2>

                  {/* Empty space for balance */}
                  <div className="w-10"></div>
                </div>

                {/* Library / AI Generate Tabs */}
                <div className="flex gap-2 mb-6 border-b-2 border-gray-200">
                  <button
                    onClick={() => setExerciseTab('library')}
                    className={`px-6 py-3 font-semibold transition-all ${
                      exerciseTab === 'library'
                        ? 'border-b-4 border-teal-500 text-orange-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    📚 Library ({availableExercises.length})
                  </button>
                  <button
                    onClick={() => setExerciseTab('ai-generate')}
                    className={`px-6 py-3 font-semibold transition-all ${
                      exerciseTab === 'ai-generate'
                        ? 'border-b-4 border-purple-500 text-purple-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    ✨ AI Generate
                  </button>
                </div>

                {/* Conditional content based on tab */}
                {exerciseTab === 'library' && (
                  <div className="space-y-3">
                    {/* All exercises list (completely free) */}
                    {availableExercises.map((exercise, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setCurrentVariant(exercise);
                          setSelectedExercise(selectedCategory);
                          setExerciseSource('library'); // Mark as from library
                          setCurrentView('exercise-detail');
                        }}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-orange-300"
                      >
                        <h4 className="font-bold text-gray-800 mb-2">{exercise.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{exercise.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{exercise.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {exerciseTab === 'ai-generate' && (
                  <div className="space-y-4">
                    {!canUseAI ? (
                      // Show API setup
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl border-2 border-purple-300 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          🤖 AI Exercise Generator
                        </h3>
                        <p className="text-gray-700 mb-6">
                          Generate unlimited personalized exercises based on your current mood and goals.
                        </p>

                        <div className="space-y-4">
                          <p className="text-sm text-gray-600">
                            Configure your API Key to get started
                          </p>
                          <button
                            onClick={() => setShowApiSetup(true)}
                            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
                          >
                            ⚙️ Configure API Key
                          </button>
                        </div>
                      </div>
                    ) : (
                      // AI generation form
                      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
                        <h3 className="text-xl font-bold text-gray-800">
                          🤖 Generate Personalized Exercise
                        </h3>

                        <div className="bg-teal-50 p-4 rounded-lg space-y-2">
                          <p className="text-sm font-semibold">Based on:</p>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{getMoodEmoji(moodHistory[moodHistory.length - 1]?.mood || 3)}</span>
                            <span className="text-sm">Current mood: {moodHistory[moodHistory.length - 1]?.mood || 3}/5</span>
                          </div>
                          <p className="text-sm">Category: <strong>{selectedCategory.replace(/-/g, ' ')}</strong></p>
                        </div>


                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Desired difficulty:
                          </label>
                          <select className="w-full p-2 border rounded-lg">
                            <option>Easy (5-10 min)</option>
                            <option selected>Medium (15-20 min)</option>
                            <option>Challenging (30+ min)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Personal note (optional):
                          </label>
                          <textarea
                            className="w-full p-2 border rounded-lg"
                            rows="2"
                            placeholder="E.g., I feel stuck with jazz improvisations..."
                          />
                        </div>

                        <button
                          onClick={() => generateExercise(selectedCategory)}
                          disabled={isGenerating}
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition disabled:opacity-50 relative"
                        >
                          <span className="absolute top-1 right-1 bg-yellow-400 text-gray-800 px-2 py-0.5 rounded text-xs font-bold">API</span>
                          {isGenerating ? '⏳ Generating...' : '🎲 Generate New Exercise'}
                        </button>

                        <p className="text-xs text-gray-500 text-center">
                          Each generation creates a unique exercise based on your data
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          };

          const ExerciseDetailView = () => {
            if (!currentVariant) return null;
            
            const categoryData = exerciseCategories.find(c => c.id === selectedExercise);
            
            const loadNewVariant = async () => {
              setExerciseCompleted(false); // Reset completion status
              if (geminiApiKey && geminiApiKey.trim() !== '') {
                const generated = await generateWithGemini(selectedExercise);
                if (generated) {
                  setCurrentVariant(generated);
                  setExerciseSource('api'); // Mark as from API
                }
              } else {
                setCurrentVariant(getRandomVariant(selectedExercise));
                setExerciseSource('library'); // Mark as from library
              }
            };

            return (
              <div className="space-y-6">
                {/* Back Button */}
                <button
                  onClick={() => setCurrentView('category-exercises-list')}
                  className="mb-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-400 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md border border-orange-300"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  ← Back to Exercises
                </button>

                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h2 className="text-4xl font-bold text-wellness-primary">{categoryData.title}</h2>
                    <p className="text-orange-600 mt-1 text-lg">{categoryData.description}</p>
                  </div>
                </div>

                <div className={`bg-gradient-to-br from-sky-300 to-blue-300 p-8 rounded-2xl text-gray-800 relative shadow-2xl border-4 border-orange-300/50`}>
                  
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <div className="flex-1 min-w-[200px]">
                      <h3 className="text-2xl font-bold mb-2">{currentVariant.title}</h3>
                      <p className="text-gray-800/90 text-lg">{currentVariant.description}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 border-2 border-orange-300 backdrop-blur px-4 py-2 rounded-full flex-shrink-0 shadow-lg">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold text-lg">{currentVariant.duration}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-200/60 to-teal-300/80 border-2 border-orange-300 backdrop-blur p-6 rounded-xl mb-4 shadow-inner">
                    <p className="text-xl leading-relaxed font-medium">{currentVariant.prompt}</p>
                  </div>

                  {currentVariant.examples && currentVariant.examples.length > 0 && (
                    <div className="bg-gradient-to-r from-teal-800/60 to-black/80 border-2 border-orange-300 backdrop-blur p-6 rounded-xl shadow-inner">
                      <button
                        onClick={() => setShowExamples(!showExamples)}
                        className="flex items-center gap-2 font-bold text-xl mb-3 hover:text-orange-600 transition-colors"
                      >
                        <Lightbulb className="w-6 h-6" />
                        {showExamples ? 'Hide' : 'Show'} 3 Practical Examples
                        <span className="text-lg ml-2">({showExamples ? '▼' : '▶'})</span>
                      </button>

                      {showExamples && (
                        <div className="space-y-3 mt-4 animate-fadeIn">
                          {currentVariant.examples.map((example, idx) => (
                            <div key={idx} className="bg-gradient-to-r from-teal-100/60 to-teal-200/80 border-2 border-orange-300 p-4 rounded-lg shadow-md">
                              <p className="leading-relaxed text-lg">{example}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Clarification Q&A Section - Only shown when API key is configured */}
                  {geminiApiKey && geminiApiKey.trim() !== '' && (
                    <div className="bg-gradient-to-r from-blue-100/60 to-indigo-100/80 border-2 border-blue-400 backdrop-blur p-6 rounded-xl shadow-inner mt-6">
                      <button
                        onClick={() => {
                          setShowClarification(!showClarification);
                          if (!showClarification) {
                            setClarificationAnswer('');
                            setClarificationQuestion('');
                          }
                        }}
                        className="flex items-center gap-2 font-bold text-xl mb-3 hover:text-blue-600 transition-colors"
                      >
                        <HelpCircle className="w-6 h-6" />
                        Need clarification?
                        <span className="text-lg ml-2">({showClarification ? '▼' : '▶'})</span>
                      </button>

                      {showClarification && (
                        <div className="space-y-4 mt-4 animate-fadeIn">
                          <p className="text-gray-700 text-sm">
                            Have doubts about the exercise? Want a more in-depth guide or suggestions on how to adapt it?
                            Ask the AI coach!
                          </p>

                          <div className="space-y-3">
                            <textarea
                              ref={(el) => {
                                if (el) {
                                  el.value = clarificationQuestionRef.current;
                                  el.oninput = (e) => {
                                    clarificationQuestionRef.current = e.target.value;
                                  };
                                }
                              }}
                              placeholder="E.g., How can I adapt this exercise if I don't have the suggested materials? Can you give me more practical examples?"
                              className="w-full p-4 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:outline-none resize-none bg-white/90 text-gray-800"
                              rows="3"
                              disabled={isAskingClarification}
                              autoComplete="off"
                              autoCorrect="off"
                              autoCapitalize="off"
                              spellCheck="false"
                            />

                            <button
                              onClick={async () => {
                                const question = clarificationQuestionRef.current;
                                if (!question || !question.trim()) {
                                  alert('⚠️ Please write a question before submitting.');
                                  return;
                                }
                                const answer = await askClarification(question);
                                if (answer) {
                                  clarificationQuestionRef.current = '';
                                  // Clear textarea visually
                                  const textarea = document.querySelector('textarea[placeholder*="adapt this exercise"]');
                                  if (textarea) textarea.value = '';
                                }
                              }}
                              disabled={isAskingClarification}
                              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-2 border-blue-500 hover:from-blue-500 hover:to-indigo-600 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative"
                            >
                              <span className="absolute top-1 right-1 bg-yellow-400 text-gray-800 px-2 py-0.5 rounded text-xs font-bold">API</span>
                              {isAskingClarification ? (
                                <>
                                  <RefreshCw className="w-5 h-5 animate-spin" />
                                  Thinking...
                                </>
                              ) : (
                                <>
                                  <HelpCircle className="w-5 h-5" />
                                  Ask for Clarification
                                </>
                              )}
                            </button>
                          </div>

                          {clarificationAnswer && (
                            <div className="bg-white/90 border-2 border-indigo-400 p-5 rounded-lg shadow-md mt-4 animate-fadeIn">
                              <div className="flex items-center gap-2 mb-3">
                                <Bot className="w-5 h-5 text-indigo-600" />
                                <span className="font-bold text-indigo-800">AI Coach Answer:</span>
                              </div>
                              <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{clarificationAnswer}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-3 mt-6 flex-wrap">
                    <button
                      onClick={loadNewVariant}
                      disabled={isGenerating}
                      className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 border-2 border-orange-300 hover:from-teal-500 hover:to-teal-600 px-6 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative"
                    >
                      {exerciseSource === 'api' && geminiApiKey && geminiApiKey.trim() !== '' && (
                        <span className="absolute top-1 right-1 bg-yellow-400 text-gray-800 px-2 py-0.5 rounded text-xs font-bold">API</span>
                      )}
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Shuffle className="w-5 h-5" />
                          {geminiApiKey ? 'Generate Exercise' : 'New Exercise'}
                        </>
                      )}
                    </button>

                    <button
                      onClick={completeExercise}
                      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                        exerciseCompleted
                          ? 'bg-gradient-to-r from-green-400 to-teal-500 border-2 border-green-500 text-white animate-bounce-once'
                          : 'bg-gradient-to-r from-teal-100/50 to-teal-200/70 border border-teal-300/40 text-gray-800 hover:bg-teal-200/50'
                      }`}
                    >
                      {exerciseCompleted && <CheckCircle className="w-5 h-5" />}
                      Completed
                    </button>
                  </div>
                </div>

                {uploadSuccess && lastUploadedImage && (
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl shadow-2xl animate-fadeIn mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">Photo uploaded!</h4>
                        <p className="text-sm text-green-100">AI analyzed your work</p>
                      </div>
                    </div>
                    {lastUploadedImage.aiComment && (
                      <>
                        <div className="bg-white/80 rounded-lg p-3 mb-3 text-sm">
                          <p className="text-gray-800 leading-relaxed">{lastUploadedImage.aiComment}</p>
                        </div>
                        <button
                          onClick={() => {
                            const text = `🎵 *${lastUploadedImage.exerciseTitle}*\n\n${lastUploadedImage.aiComment}\n\n_Analysis generated by Creative Wellness Coach for Musicians_`;
                            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
                            window.open(whatsappUrl, '_blank');
                          }}
                          className="w-full bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition-colors flex items-center justify-center gap-2"
                        >
                          <Share2 className="w-4 h-4" />
                          Share on WhatsApp
                        </button>
                      </>
                    )}
                  </div>
                )}

                {/* Conditional upload section based on interactionType */}
                {currentVariant?.interactionType === 'reflection' && (
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border-2 border-teal-300 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Brain className="w-6 h-6 text-teal-500" />
                      Reflection Exercise
                    </h3>
                    <p className="text-gray-700 mb-4">
                      This is an introspective exercise - no upload needed. Focus on your inner emotional and musical wellbeing.
                    </p>
                    <div className="bg-white/50 p-4 rounded-lg text-sm text-gray-600">
                      <p className="font-semibold mb-2">💡 Tip:</p>
                      <p>
                        For this type of exercise, what matters is the lived experience, not the result.
                        Focus on the feelings and insights that emerge.
                      </p>
                    </div>
                  </div>
                )}

                {currentVariant?.interactionType === 'visual' && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Camera className="w-6 h-6 text-blue-500" />
                      Visual Diary of the Exercise
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Document your creative experience (optional):
                    </p>
                    <ul className="text-sm text-gray-600 mb-4 space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">📝</span>
                        <span>Photo of score with annotations or notes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">🎹</span>
                        <span>Setup of your creative space or instrument</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">📖</span>
                        <span>Handwritten reflections or sketches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">🎼</span>
                        <span>Screenshots of compositional process</span>
                      </li>
                    </ul>

                    {!geminiApiKey || geminiApiKey.trim() === '' ? (
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-yellow-800 mb-2">API Key required</p>
                            <p className="text-sm text-yellow-700 mb-3">
                              To upload images and receive feedback, you must configure your Google Gemini API key.
                            </p>
                            <button
                              onClick={() => setShowApiSetup(true)}
                              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-semibold"
                            >
                              Configure API Key
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {isGenerating ? (
                          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-sky-200 rounded-xl cursor-not-allowed">
                            <RefreshCw className="w-5 h-5 animate-spin" />
                            <span className="font-semibold text-gray-700">Uploading...</span>
                          </div>
                        ) : (
                          <label className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-xl cursor-pointer hover:from-blue-500 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg">
                            <Upload className="w-5 h-5" />
                            <span className="font-semibold">Upload Process Image</span>
                            <input
                              type="file"
                              accept="image/*,.heic,.heif"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files[0]) {
                                  handleImageUpload(e.target.files[0]);
                                  e.target.value = '';
                                }
                              }}
                            />
                          </label>
                        )}
                      </>
                    )}
                  </div>
                )}

                {currentVariant?.interactionType === 'video' && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-400 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Camera className="w-6 h-6 text-purple-500" />
                      Video Performance (Premium)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Document your performance for complete AI feedback on your execution.
                    </p>
                    <div className="bg-purple-100/50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-purple-800 font-semibold mb-2">🎥 Recording tips:</p>
                      <ul className="text-sm text-purple-700 space-y-1 ml-4">
                        <li>• Make sure you have good lighting</li>
                        <li>• Frame yourself and your instrument</li>
                        <li>• Record horizontally if possible</li>
                        <li>• Keep video under 2 minutes for best feedback</li>
                      </ul>
                    </div>

                    {!geminiApiKey || geminiApiKey.trim() === '' ? (
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-yellow-800 mb-2">API Key required</p>
                            <p className="text-sm text-yellow-700 mb-3">
                              To upload videos and receive feedback, you must configure your Google Gemini API key.
                            </p>
                            <button
                              onClick={() => setShowApiSetup(true)}
                              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-semibold"
                            >
                              Configure API Key
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {isGenerating ? (
                          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-sky-200 rounded-xl cursor-not-allowed">
                            <RefreshCw className="w-5 h-5 animate-spin" />
                            <span className="font-semibold text-gray-700">Uploading...</span>
                          </div>
                        ) : (
                          <label className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl cursor-pointer hover:from-purple-500 hover:to-pink-600 transition-all shadow-md hover:shadow-lg">
                            <Upload className="w-5 h-5" />
                            <span className="font-semibold">Upload Video Performance</span>
                            <input
                              type="file"
                              accept="video/*,image/*,.heic,.heif"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files[0]) {
                                  handleImageUpload(e.target.files[0]);
                                  e.target.value = '';
                                }
                              }}
                            />
                          </label>
                        )}
                      </>
                    )}
                  </div>
                )}

                {uploadedImages.filter(img => img.exerciseId === selectedExercise).length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Your images for this exercise:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {uploadedImages
                        .filter(img => img.exerciseId === selectedExercise)
                        .map(img => (
                          <div key={img.id} className="bg-white/60 border border-green-300 rounded-lg overflow-hidden shadow">
                            <img src={img.dataUrl} alt="Musical performance" className="w-full h-48 object-cover" />
                            <div className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-sm text-gray-500">
                                  {new Date(img.uploadDate).toLocaleDateString('en-US')}
                                </span>
                                <button
                                  onClick={() => deleteImage(img.id)}
                                  className="text-rose-500 hover:text-rose-700"
                                  title="Delete"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                              {img.aiComment && (
                                <div className="bg-teal-50 p-3 rounded-lg text-sm text-gray-700 border-l-4 border-green-500">
                                  <div className="flex items-start gap-2">
                                    <Bot className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <p>{img.aiComment}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setCurrentView('exercises')}
                  className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  ← Back to Exercises
                </button>

                {/* Loading popup during generation */}
                {isGenerating && (
                  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-4 text-center">
                      <div className="mb-4">
                        <RefreshCw className="w-12 h-12 text-purple-600 animate-spin mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Generating exercise...</h3>
                      <p className="text-gray-600 text-sm">AI-powered personalized creation</p>
                    </div>
                  </div>
                )}
              </div>
            );
          };

          const ProgressView = () => (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Your Progress</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-6 rounded-xl shadow-md">
                  <Calendar className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-3xl font-bold text-gray-800">{moodHistory.length}</h3>
                  <p className="text-orange-600">Mood Trackings</p>
                </div>

                <div className="bg-green-100 p-6 rounded-xl shadow-md">
                  <BookOpen className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="text-3xl font-bold text-gray-800">{journalEntries.length}</h3>
                  <p className="text-orange-600">Journal Entries</p>
                </div>

                <div className="bg-green-100 p-6 rounded-xl shadow-md">
                  <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="text-3xl font-bold text-gray-800">{Math.max(1, moodHistory.length + journalEntries.length)}</h3>
                  <p className="text-orange-600">Active Days</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40 p-6 rounded-xl border border-teal-600/40 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Recent Mood History</h3>
                {moodHistory.length === 0 ? (
                  <p className="text-teal-500 italic">Start tracking your mood to see progress!</p>
                ) : (
                  <div className="space-y-2">
                    {moodHistory.slice(-10).reverse().map((mood, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50/40 border border-teal-700/30 rounded-lg hover:bg-teal-900/50 transition-colors">
                        <span className="text-3xl">{mood.emoji}</span>
                        <div className="flex-1">
                          <p className="font-semibold">{mood.name}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(mood.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setCurrentView('home')}
                className="px-6 py-3 bg-gradient-to-r from-orange-300 to-amber-400 text-gray-800 rounded-lg hover:opacity-90 transition-opacity border border-orange-300"
              >
                ← Back Home
              </button>
            </div>
          );

          const InsightsView = () => {
            const [aiReport, setAiReport] = React.useState(null);
            const stats = calculateMoodStats();
            const patterns = findMoodPatterns();

            const handleGenerateReport = async () => {
              console.log('🔘 Click on Genera Report');

              const report = await generateAIReport();
              console.log('📄 Report ricevuto:', !!report);

              if (report) {
                const reportData = {
                  id: Date.now(),
                  content: report,
                  date: new Date().toISOString(),
                  stats: {
                    totalMoods: stats?.totalMoods || 0,
                    avgMood: stats?.avgMood || 0,
                    trend: stats?.trend || 0
                  }
                };

                setSavedReports(prev => [reportData, ...prev]);

                setCurrentReport(reportData);
                setShowReportModal(true);

                const wordCount = report.split(/\s+/).length;
                const duration = (wordCount / 2) * 1000;
                console.log(`📊 ${wordCount} parole, durata: ${duration}ms (${duration/1000}s)`);

                setTimeout(() => {
                  setShowReportModal(false);
                }, duration);

                console.log('✅ Report saved and displayed');
              } else {
                console.log('⚠️ No report generated');
              }
            };

            console.log('🎵 Render InsightsView - aiReport:', !!aiReport, aiReport ? `(${aiReport.length} characters)` : 'null');

            return (
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-wellness-primary flex items-center gap-3">
                  <Brain className="w-10 h-10 text-teal-500" />
                  Analisi & Insights
                </h2>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-teal-600 to-pink-700 p-6 rounded-xl shadow-lg text-gray-800 border-2 border-orange-300">
                    <Calendar className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="text-3xl font-bold">{stats?.totalMoods || 0}</h3>
                    <p className="text-teal-800">Tracked moods</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600 to-teal-700 p-6 rounded-xl shadow-lg text-gray-800 border-2 border-orange-300">
                    <Heart className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="text-3xl font-bold">{stats?.avgMood.toFixed(1) || '0'}/5</h3>
                    <p className="text-teal-800">Average mood</p>
                  </div>

                  <div className="bg-gradient-to-br from-pink-600 to-teal-600 p-6 rounded-xl shadow-lg text-gray-800 border-2 border-orange-300">
                    <Flower className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="text-3xl font-bold">{uploadedImages.length}</h3>
                    <p className="text-teal-800">Uploaded images</p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-500 to-yellow-600 p-6 rounded-xl shadow-lg text-gray-800 border-2 border-orange-300">
                    <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="text-3xl font-bold">
                      {stats?.trend > 0 ? '📈' : stats?.trend < 0 ? '📉' : '➡️'}
                    </h3>
                    <p className="text-teal-800">
                      {stats?.trend > 0 ? 'Improving' : stats?.trend < 0 ? 'To monitor' : 'Stable'}
                    </p>
                  </div>
                </div>

                {patterns.length > 0 && (
                  <div className="bg-gradient-to-r from-teal-900/40 to-black/70 border-2 border-orange-300 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-wellness-primary mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-teal-500" />
                      Identified Patterns
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {patterns.map((pattern, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-lg border-2 ${
                            pattern.type === 'positive'
                              ? 'bg-gradient-to-r from-green-900/40 to-teal-900/40 border-green-500'
                              : 'bg-gradient-to-r from-teal-900/40 to-pink-900/40 border-orange-300'
                          }`}
                        >
                          <h4 className="font-bold text-teal-700 mb-1 text-lg">{pattern.title}</h4>
                          <p className="text-sm text-orange-600">{pattern.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {stats && stats.recentMoods.length > 0 && (
                  <div className="bg-gradient-to-r from-teal-900/40 to-black/70 border-2 border-orange-300 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-wellness-primary mb-4 flex items-center gap-2">
                      <BarChart className="w-6 h-6 text-teal-500" />
                      Mood Last 7 Days
                    </h3>
                    <div className="space-y-3">
                      {stats.recentMoods.slice(-7).reverse().map((entry, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-32 text-sm text-orange-600 font-semibold">
                            {new Date(entry.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                          </div>
                          <div className="flex-1 bg-gray-50/60 border-2 border-teal-600 rounded-full h-10 overflow-hidden">
                            <div
                              className={`h-full flex items-center px-3 text-gray-800 font-semibold ${
                                entry.mood >= 4 ? 'bg-gradient-to-r from-green-600 to-teal-500' :
                                entry.mood === 3 ? 'bg-gradient-to-r from-yellow-600 to-teal-600' :
                                'bg-gradient-to-r from-pink-600 to-teal-600'
                              }`}
                              style={{ width: `${(entry.mood / 5) * 100}%` }}
                            >
                              {entry.emoji} {entry.name}
                            </div>
                          </div>
                          <div className="w-12 text-right font-bold text-teal-700 text-lg">
                            {entry.mood}/5
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-br from-orange-100/50 to-white/60 p-6 rounded-2xl border-2 border-orange-300 shadow-lg">
                  <h3 className="text-2xl font-bold text-wellness-primary mb-4 flex items-center gap-2">
                    <Sparkles className="w-8 h-8" />
                    Generate New Report
                  </h3>

                  <div className="text-center py-6">
                    <p className="text-teal-700 mb-4 text-lg">
                      Generate a personalized report based on your data
                    </p>
                    <button
                      onClick={handleGenerateReport}
                      disabled={generatingReport}
                      className="flex items-center justify-center gap-2 mx-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-pink-700 border-2 border-orange-300 text-gray-800 rounded-xl font-bold text-lg hover:from-teal-500 hover:to-pink-600 transition-all transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {generatingReport ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Generate Report
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {uploadedImages.length > 0 && (
                  <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Camera className="w-6 h-6" />
                      Work Gallery ({uploadedImages.length})
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {uploadedImages.map(img => (
                        <div key={img.id} className="bg-gray-50/40 border border-teal-700/30 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                          <img src={img.dataUrl} alt="Work" className="w-full h-48 object-cover" />
                          <div className="p-4 space-y-3">
                            <div>
                              <p className="text-sm font-semibold text-orange-600">{img.exerciseTitle}</p>
                              <p className="text-xs text-teal-500/70">{new Date(img.uploadDate).toLocaleDateString('en-US')}</p>
                            </div>

                            {img.aiComment && (
                              <div className="bg-green-900/30 border border-green-600/30 rounded-lg p-3">
                                <p className="text-xs text-teal-700 leading-relaxed">{img.aiComment}</p>
                              </div>
                            )}

                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  const text = `🎶 *${img.exerciseTitle}*\n\n${img.aiComment || 'No comment available'}\n\n_Created with Creative Wellness Coach for Musicians_`;
                                  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
                                  window.open(whatsappUrl, '_blank');
                                }}
                                className="flex-1 bg-green-600 hover:bg-green-700 text-gray-800 px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                                title="Share on WhatsApp"
                              >
                                <Share2 className="w-4 h-4" />
                                WhatsApp
                              </button>
                              <button
                                onClick={() => deleteImage(img.id)}
                                className="bg-rose-900/50 hover:bg-rose-900/70 text-rose-300 px-3 py-2 rounded-lg transition-colors"
                                title="Delete image"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {savedReports.length > 0 && (
                  <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-green-600" />
                      Historical Reports ({savedReports.length})
                    </h3>
                    <div className="space-y-4">
                      {savedReports.map(report => (
                        <div
                          key={report.id}
                          className="bg-gradient-to-br from-orange-100/50 to-white/60 p-4 rounded-xl border-2 border-green-200 hover:shadow-md transition-shadow cursor-thennter"
                          onClick={() => {
                            setCurrentReport(report);
                            setShowReportModal(true);
                          }}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <Bot className="w-5 h-5 text-green-600" />
                              <span className="font-semibold text-gray-800">
                                {new Date(report.date).toLocaleDateString('en-US', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const updatedReports = savedReports.filter(r => r.id !== report.id);
                                setSavedReports(updatedReports);
                                localStorage.setItem('aiReports', JSON.stringify(updatedReports));
                              }}
                              className="p-1 hover:bg-rose-100 rounded-lg transition-colors"
                              title="Delete report"
                            >
                              <Trash2 className="w-4 h-4 text-rose-500" />
                            </button>
                          </div>

                          <div className="grid grid-cols-3 gap-3 mb-3 text-sm">
                            <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40/60 rounded-lg p-2 text-center">
                              <div className="font-bold text-green-600">{report.stats.totalMoods}</div>
                              <div className="text-xs text-gray-600">Mood</div>
                            </div>
                            <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40/60 rounded-lg p-2 text-center">
                              <div className="font-bold text-pink-600">{report.stats.avgMood.toFixed(1)}/5</div>
                              <div className="text-xs text-gray-600">Average</div>
                            </div>
                            <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40/60 rounded-lg p-2 text-center">
                              <div className={`font-bold ${report.stats.trend > 0 ? 'text-green-600' : report.stats.trend < 0 ? 'text-orange-600' : 'text-gray-600'}`}>
                                {report.stats.trend > 0 ? '+' : ''}{report.stats.trend.toFixed(1)}%
                              </div>
                              <div className="text-xs text-gray-600">Trend</div>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 line-clamp-2">
                            {report.content.substring(0, 150)}...
                          </p>

                          <div className="mt-3 text-sm text-green-600 font-semibold flex items-center gap-1">
                            Read full report
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setCurrentView('home')}
                  className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  ← Back Home
                </button>
              </div>
            );
          };

          const ReflectionForm = ({ exercise, onComplete, onSkip }) => {
            const [responses, setResponses] = useState({});
            const [feeling, setFeeling] = useState(3);

            const handleResponse = (index, value) => {
              setResponses({...responses, [index]: value});
            };

            const handleSubmit = () => {
              onComplete({ feeling, responses, timestamp: new Date().toISOString() });
            };

            if (!exercise || !exercise.reflectionQuestions) return null;

            return (
              <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 border-2 border-teal-300 animate-slideIn">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-teal-500" />
                  Post-Exercise Reflection
                </h3>

                <p className="text-sm text-gray-600">
                  Take a moment to reflect on the experience you just lived.
                </p>

                {/* Emotional rating */}
                <div className="bg-teal-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium mb-3 text-gray-700">
                    How did you feel? ({feeling}/5)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={feeling}
                    onChange={(e) => setFeeling(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>😞 Bad</span>
                    <span>😐 So-so</span>
                    <span>😊 Neutral</span>
                    <span>😄 Good</span>
                    <span>🤩 Great</span>
                  </div>
                </div>

                {/* Guided questions */}
                {exercise.reflectionQuestions?.map((question, index) => (
                  <div key={index} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {question}
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      rows="2"
                      placeholder="Write here..."
                      value={responses[index] || ''}
                      onChange={(e) => handleResponse(index, e.target.value)}
                    />
                  </div>
                ))}

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-amber-400 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-all flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Save Reflection
                  </button>
                  {onSkip && (
                    <button
                      onClick={onSkip}
                      className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-gray-700"
                    >
                      Skip
                    </button>
                  )}
                </div>
              </div>
            );
          };

          const ReportModal = () => {
            if (!showReportModal || !currentReport) return null;

            return (
              <div className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-slideIn">
                  <div className="sticky top-0 bg-gradient-to-r from-purple-500 to-pink-500 text-gray-800 p-6 rounded-t-2xl flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Brain className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Generated Report</h2>
                        <p className="text-sm text-gray-800/80">
                          {new Date(currentReport.date).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowReportModal(false)}
                      className="p-2 hover:bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40/20 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-8">
                    <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                      {currentReport.content}
                    </div>

                    <div className="mt-6 pt-6 border-t border-teal-600/40 grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{currentReport.stats.totalMoods}</div>
                        <div className="text-sm text-gray-600">Tracked moods</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">{currentReport.stats.avgMood.toFixed(1)}/5</div>
                        <div className="text-sm text-gray-600">Average mood</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {currentReport.stats.trend > 0 ? '📈' : currentReport.stats.trend < 0 ? '📉' : '➡️'}
                        </div>
                        <div className="text-sm text-gray-600">Trend</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };

          const GuideModal = () => {
            if (!showGuide) return null;

            return (
              <div className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-500 text-gray-800 p-6 rounded-t-2xl flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Guide and Instructions</h2>
                        <p className="text-sm text-gray-800/80">How to use Creative Wellness Coach for Musicians</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowGuide(false)}
                      className="p-2 hover:bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40/20 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-8 space-y-8">
                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Heart className="w-7 h-7 text-rose-500" />
                        1. Track Your Mood
                      </h3>
                      <div className="bg-rose-50 p-5 rounded-xl space-y-3">
                        <p className="text-teal-700"><strong>What it does:</strong> Track how you feel every day using 5 emojis (from terrible to excellent).</p>
                        <p className="text-teal-700"><strong>How to use it:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Click "Track Mood" from home</li>
                          <li>Select the emoji that represents your mood</li>
                          <li>Add an optional notes to remember why you feel this way</li>
                          <li>Your moods are saved automatically</li>
                        </ul>
                        <p className="text-teal-700"><strong>Why it's useful:</strong> Tracking your mood helps identify patterns and understand what influences your wellbeing.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <BookOpen className="w-7 h-7 text-blue-500" />
                        2. Personal Journal
                      </h3>
                      <div className="bg-blue-50 p-5 rounded-xl space-y-3">
                        <p className="text-teal-700"><strong>What it does:</strong> Write thoughts, reflections, and daily experiences.</p>
                        <p className="text-teal-700"><strong>How to use it:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Click "Journal" from home</li>
                          <li>Write freely in the text field</li>
                          <li>Press "Save Journal" to preserve your reflection</li>
                          <li>View your previous entries by scrolling down</li>
                        </ul>
                        <p className="text-teal-700"><strong>Why it's useful:</strong> Therapeutic writing helps process emotions and reduce stress.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Palette className="w-7 h-7 text-green-500" />
                        3. Creative Exercises
                      </h3>
                      <div className="bg-green-50 p-5 rounded-xl space-y-3">
                        <p className="text-teal-700"><strong>What it does:</strong> Hundreds of creative exercises specifically for Music Students and Musicians.</p>
                        <p className="text-teal-700"><strong>How to use it:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Click "Exercises" from home</li>
                          <li>Choose a category (Composition, Improvisation, Instrumental Technique, Performance)</li>
                          <li>Each exercise has 3 variants with examples</li>
                          <li>Click "Generate New" to get fresh ideas (requires API)</li>
                        </ul>
                        <p className="text-teal-700"><strong>Extra features:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li><strong>Timer:</strong> Set durations (e.g., "5m", "30m", "1h") for timed exercises</li>
                          <li><strong>Photo Upload:</strong> Upload images of your work and receive feedback</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <BarChart className="w-7 h-7 text-green-500" />
                        4. Analysis and Insights
                      </h3>
                      <div className="bg-green-50 p-5 rounded-xl space-y-3">
                        <p className="text-teal-700"><strong>What it does:</strong> Analyzes your data and identifies patterns in your wellbeing.</p>
                        <p className="text-teal-700"><strong>What you'll find:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li><strong>Statistics:</strong> Total moods tracked, average, increasing/decreasing trends</li>
                          <li><strong>Patterns:</strong> Best/worst days of the week, positive streaks</li>
                          <li><strong>Chart:</strong> Visualization of last 7 days</li>
                          <li><strong>Report:</strong> Personalized analysis with recommendations (requires API)</li>
                          <li><strong>Historical Reports:</strong> All reports generated in the past</li>
                          <li><strong>Gallery:</strong> All your uploaded images</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Key className="w-7 h-7 text-yellow-500" />
                        5. API Configuration (Optional)
                      </h3>
                      <div className="bg-yellow-50 p-5 rounded-xl space-y-3">
                        <p className="text-teal-700"><strong>What it does:</strong> Enables advanced features using Google Gemini.</p>
                        <p className="text-teal-700"><strong>How to configure:</strong></p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                          <li>Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener" className="text-blue-600 underline">Google AI Studio</a></li>
                          <li>Log in with your Google account</li>
                          <li>Click "Create API Key"</li>
                          <li>Copy the generated key</li>
                          <li>Return to the app and click "Configure API Key", then paste the key</li>
                        </ol>
                        <p className="text-teal-700"><strong>Features unlocked with API:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Infinite generation of new creative exercises</li>
                          <li>Feedback on your uploaded performances/compositions</li>
                          <li>Personalized reports based on your data</li>
                        </ul>
                        <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40 p-4 rounded-lg border-l-4 border-yellow-500 mt-3">
                          <p className="text-sm text-gray-700"><strong>🔒 Privacy:</strong> Your API key is saved only on your device (localStorage). It's never sent to external servers except directly to Google Gemini.</p>
                          <p className="text-sm text-gray-700 mt-2"><strong>💰 Cost:</strong> Google Gemini has a generous free tier. Perfect for personal use!</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Camera className="w-7 h-7 text-indigo-500" />
                        6. Photo Upload (iPhone Compatible)
                      </h3>
                      <div className="bg-indigo-50 p-5 rounded-xl space-y-3">
                        <p className="text-teal-700"><strong>What it does:</strong> Upload photos/videos of your performances and compositions and receive feedback.</p>
                        <p className="text-teal-700"><strong>How to use it:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Go to a specific exercise</li>
                          <li>Click "Select Image"</li>
                          <li>Choose a photo from gallery or take a new one</li>
                          <li>The image is automatically resized (optimized for iPhone)</li>
                          <li>If API is active, receive personalized feedback</li>
                        </ul>
                        <p className="text-teal-700"><strong>Supported formats:</strong> JPG, PNG, HEIC (native iPhone photos)</p>
                      </div>
                    </section>

                    {/* Coach Philosophy Section */}
                    <section className="bg-gradient-to-r from-teal-100 to-blue-100 p-6 rounded-xl border-2 border-orange-300 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Lightbulb className="w-7 h-7 text-yellow-500" />
                        Creative Wellness Coach Philosophy
                      </h3>
                      <div className="space-y-4">
                        <p className="text-gray-800 text-lg leading-relaxed">
                          This coach focuses on your <strong className="text-teal-700">creative and emotional wellbeing</strong>,
                          not on technical performance analysis.
                        </p>

                        <div className="bg-white/70 p-5 rounded-lg space-y-3 border-l-4 border-teal-500">
                          <div>
                            <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                              <span className="text-2xl">🎓</span>
                              For technical feedback:
                            </p>
                            <p className="text-gray-700 ml-8">
                              Intonation, instrumental technique, music theory, academic interpretation
                              <br />
                              <strong className="text-orange-600">→ Consult your Conservatory teacher</strong>
                            </p>
                          </div>

                          <div className="mt-4">
                            <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                              <span className="text-2xl">💚</span>
                              For creative and emotional support:
                            </p>
                            <p className="text-gray-700 ml-8">
                              Inspiration, anxiety, creative blocks, performance preparation, artistic identity
                              <br />
                              <strong className="text-orange-600">→ Use this Creative Wellness Coach</strong>
                            </p>
                          </div>
                        </div>

                        <div className="bg-teal-50 p-4 rounded-lg border border-teal-300">
                          <p className="text-gray-800 text-sm">
                            <strong className="text-teal-700">🎯 Goal:</strong> Help you develop a healthier,
                            more balanced relationship with music, overcome creative blocks,
                            and find joy in your musical practice without judgment or academic pressure.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Useful Tips</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>✅ Track your mood every day for accurate analysis</li>
                        <li>✅ Write in your journal when feeling overwhelmed - it helps!</li>
                        <li>✅ Try different creative exercises to find what relaxes you</li>
                        <li>✅ Use the timer for focused work sessions</li>
                        <li>✅ Upload photos of your work to track progress</li>
                        <li>✅ Generate reports weekly to see your progress</li>
                      </ul>
                    </section>

                    <section className="text-center pt-4 border-t border-teal-600/40">
                      <p className="text-orange-600">
                        Developed with ❤️ for Music Students and Musicians
                      </p>
                      <p className="text-sm text-teal-500 mt-2">
                        Have questions or suggesturesons? <button onClick={() => { setShowGuide(false); setShowContactForm(true); }} className="text-green-400 hover:text-green-300 underline font-semibold">Contact Me</button>
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            );
          };

          const ContactFormModal = () => {
            const [formData, setFormData] = useState({
              name: userProfile?.name || '',
              email: userProfile?.email || '',
              message: ''
            });
            const [sending, setSending] = useState(false);
            const [sent, setSent] = useState(false);
            const [error, setError] = useState('');

            if (!showContactForm) return null;

            const handleSubmit = async (e) => {
              e.preventDefault();
              setSending(true);
              setError('');

              try {
                // Use Web3Forms for inviare email direttamente
                const response = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    access_key: 'c99e581c-6e45-4d7a-b889-abeb30f38fb1',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: '🎵 Nuovo messaggio by Creative Wellness Coach for Musicians',
                  })
                });

                const result = await response.json();

                if (result.success) {
                  setSent(true);
                  setTimeout(() => {
                    setShowContactForm(false);
                    setSent(false);
                    setFormData({
                      name: userProfile?.name || '',
                      email: userProfile?.email || '',
                      message: ''
                    });
                  }, 3000);
                } else {
                  setError('Error sending. Try again later.');
                }
              } catch (err) {
                setError('Connection error. Check your network.');
              } finally {
                setSending(false);
              }
            };

            return (
              <div className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40 rounded-2xl max-w-lg w-full shadow-2xl">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-gray-800 p-6 rounded-t-2xl flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold">📬 Contact Me</h2>
                      <p className="text-sm text-gray-800/80">Send a message or suggestureson</p>
                    </div>
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-6">
                    {sent ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-green-300 mb-2">Message inviato!</h3>
                        <p className="text-orange-600">I'll reply as soon as possible. Thank you! 🎵</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-orange-600 font-semibold mb-2">Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-2 border-2 border-teal-600 bg-gray-50/50 text-teal-800 rounded-lg focus:border-green-500 focus:outline-none placeholder-teal-400/50"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label className="block text-orange-600 font-semibold mb-2">Email</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-2 border-2 border-teal-600 bg-gray-50/50 text-teal-800 rounded-lg focus:border-green-500 focus:outline-none placeholder-teal-400/50"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-orange-600 font-semibold mb-2">Message</label>
                          <textarea
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            rows="5"
                            className="w-full px-4 py-2 border-2 border-teal-600 bg-gray-50/50 text-teal-800 rounded-lg focus:border-green-500 focus:outline-none resize-none placeholder-teal-400/50"
                            placeholder="Write your message, suggestureson or question..."
                          />
                        </div>

                        {error && (
                          <div className="bg-rose-900/30 border border-rose-500 text-rose-300 p-3 rounded-lg text-sm">
                            {error}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={sending}
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-gray-800 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {sending ? (
                            <>
                              <RefreshCw className="w-5 h-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              📤 Invia Message
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            );
          };

          const ProfileBenefitsModal = () => {
            if (!showProfileBenefits) return null;

            return (
              <div className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-white/95 border border-purple-200 rounded-2xl max-w-lg w-full shadow-2xl">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 p-6 rounded-t-2xl">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Sparkles className="w-8 h-8" />
                      Why create a Profile?
                    </h2>
                    <p className="text-sm text-gray-700 mt-1">Discover the benefits of having a personalized profile</p>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Personalized greeting</h3>
                          <p className="text-sm text-gray-800">We'll greet you by name every time</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Quick contact form</h3>
                          <p className="text-sm text-gray-800">Pre-filled email when you contact me</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Registered User Badge</h3>
                          <p className="text-sm text-gray-800">Show your special status in the app</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Data always yours</h3>
                          <p className="text-sm text-gray-800">Everything saved locally on your device</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>100% Free</strong> • No spam emails • Privacy guaranteed
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setShowProfileBenefits(false);
                          setShowProfileModal(true);
                        }}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-gray-800 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        ✨ Create my Profile
                      </button>
                      <button
                        onClick={() => setShowProfileBenefits(false)}
                        className="px-6 py-3 bg-teal-900/50 text-teal-700 rounded-lg hover:bg-teal-900/70 transition-colors border border-teal-600"
                      >
                        Maybe later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          };

          const ProfileModal = () => {
            const [formData, setFormData] = useState({ name: '', email: '' });
            const [error, setError] = useState('');

            if (!showProfileModal) return null;

            const handleSubmit = (e) => {
              e.preventDefault();
              if (!formData.name.trim() || !formData.email.trim()) {
                setError('Compila all the campi');
                return;
              }

              setUserProfile({
                name: formData.name,
                email: formData.email,
                createdAt: new Date().toISOString()
              });

              setShowProfileModal(false);
            };

            return (
              <div className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-white/95 border border-orange-200 rounded-2xl max-w-md w-full shadow-2xl">
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 text-gray-800 p-6 rounded-t-2xl flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold">🎵 Create your Profile</h2>
                      <p className="text-sm text-gray-700">Only 2 pieces of information needed</p>
                    </div>
                    <button
                      onClick={() => setShowProfileModal(false)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">What's your name?</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 border-2 border-orange-300 bg-white text-gray-800 rounded-lg focus:border-orange-400 focus:outline-none placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2 border-2 border-orange-300 bg-white text-gray-800 rounded-lg focus:border-orange-400 focus:outline-none placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                      <p className="text-xs text-gray-600 mt-1">
                        🔒 Saved only on your device
                      </p>
                    </div>

                    {error && (
                      <div className="bg-rose-900/30 border border-rose-500 text-rose-300 p-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-gray-800 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      ✨ Create Profile
                    </button>
                  </form>
                </div>
              </div>
            );
          };

          // Review Prompt Modal
          const ReviewPromptModal = () => {
            if (!showReviewPrompt) return null;

            return (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 border-4 border-purple-400 rounded-3xl max-w-md w-full p-8 shadow-2xl transform animate-fadeIn">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎵</div>
                    <h2 className="text-3xl font-bold text-purple-800 mb-4">Enjoying the app?</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      If <strong>Creative Wellness Coach</strong> is helping you, a <strong>5⭐ review</strong> helps us reach more artists!
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={() => handleReviewResponse('review')}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        ⭐ Leave 5-Star Review
                      </button>
                      <button
                        onClick={() => handleReviewResponse('later')}
                        className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                      >
                        Later
                      </button>
                      <button
                        onClick={() => handleReviewResponse('never')}
                        className="w-full text-gray-500 text-sm hover:text-gray-700 transition-colors"
                      >
                        Don't ask again
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          };

          const FirebaseAuthModal = () => {
            const [isLogin, setIsLogin] = useState(true);
            const [formData, setFormData] = useState({ email: '', password: '', name: '' });
            const [error, setError] = useState('');
            const [loading, setLoading] = useState(false);

            if (!showFirebaseAuth) return null;

            const handleSubmit = async (e) => {
              e.preventDefault();
              setError('');
              setLoading(true);

              try {
                if (isLogin) {
                  // Login
                  await auth.signInWithEmailAndPassword(formData.email, formData.password);
                  setShowFirebaseAuth(false);
                } else {
                  // Registrazione
                  const userCredential = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
                  // Aggiorna the profilo with the nome
                  await userCredential.user.updateProfile({
                    displayName: formData.name
                  });
                  setShowFirebaseAuth(false);
                }
              } catch (err) {
                console.error('Auth error:', err);
                if (err.code === 'auth/email-already-in-use') {
                  setError('Email already registered. Try logging in.');
                } else if (err.code === 'auth/weak-password') {
                  setError('Password too weak. Use at least 6 characters.');
                } else if (err.code === 'auth/invalid-email') {
                  setError('Invalid email.');
                } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                  setError('Incorrect email or password.');
                } else {
                  setError('Authentication error. Try again.');
                }
              } finally {
                setLoading(false);
              }
            };

            return (
              <div className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-white/95 border border-blue-200 rounded-2xl max-w-md w-full shadow-2xl">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 p-6 rounded-t-2xl flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Cloud className="w-7 h-7" />
                        {isLogin ? 'Login' : 'Register'}
                      </h2>
                      <p className="text-sm text-gray-700">Sync your data to cloud</p>
                    </div>
                    <button
                      onClick={() => setShowFirebaseAuth(false)}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {!isLogin && (
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-2 border-2 border-blue-300 bg-white text-gray-800 rounded-lg focus:border-blue-400 focus:outline-none placeholder-gray-400"
                          placeholder="Your name"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-2 border-2 border-blue-300 bg-white text-gray-800 rounded-lg focus:border-blue-400 focus:outline-none placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Password</label>
                      <input
                        type="password"
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full px-4 py-2 border-2 border-blue-300 bg-white text-gray-800 rounded-lg focus:border-blue-400 focus:outline-none placeholder-gray-400"
                        placeholder="Minimum 6 characters"
                        minLength="6"
                      />
                    </div>

                    {error && (
                      <div className="bg-rose-900/30 border border-rose-500 text-rose-300 p-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          {isLogin ? 'Logging in...' : 'Registering...'}
                        </>
                      ) : (
                        <>
                          <Cloud className="w-5 h-5" />
                          {isLogin ? 'Login' : 'Register'}
                        </>
                      )}
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => {
                          setIsLogin(!isLogin);
                          setError('');
                          setFormData({ email: '', password: '', name: '' });
                        }}
                        className="text-blue-600 hover:text-blue-700 text-sm underline"
                      >
                        {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
                      </button>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                      <p className="text-xs text-gray-800">
                        <strong>🔒 Safe and private</strong> • Your data is synchronized on Firebase Cloud • Accessible from any device
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            );
          };

          const ApiSetupModal = () => (
            <div className="fixed inset-0 bg-gray-50/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-gradient-to-r from-teal-900/30 to-black/70 border border-teal-600/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">🤖 Gemini API Configuration</h2>
                    <p className="text-orange-600">Activate API for infinite personalized exercises</p>
                  </div>
                  <button 
                    onClick={() => setShowApiSetup(false)} 
                    className="p-2 hover:bg-teal-900/50 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-orange-100/50 to-white/60 p-6 rounded-xl border-2 border-green-200">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-green-600" />
                      API Mode Benefits
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Infinite exercises:</strong> Always new and different content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Personalized:</strong> Exercises specific to your musical context</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Free:</strong> Google Gemini API ha a tier gratuito generoso (60 richieste/minuto)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">📋 Setup Veloce (5 minuti)</h3>
                    <div className="space-y-3">
                      {[
                        { 
                          n: 1, 
                          title: "Vai on Google AI Studio", 
                          content: <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm flex items-center gap-1">https://aistudio.google.com/app/apikey <span className="text-xs">🔗</span></a> 
                        },
                        { n: 2, title: "Login with Google", content: "Use any personal Gmail account" },
                        { n: 3, title: 'Click "Create API Key"', content: "Choose existing project or create new one" },
                        { n: 4, title: "Copy your API Key", content: "String like: AIzaSy..." },
                        { n: 5, title: "Paste below", content: "Saved only on your device, 100% private" }
                      ].map(step => (
                        <div key={step.n} className="flex gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-gray-800 rounded-full flex items-center justify-center font-bold text-sm">
                            {step.n}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold mb-1">{step.title}</p>
                            <div className="text-sm text-gray-600">{step.content}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 flex items-center gap-2">
                      <Key className="w-5 h-5" />
                      Enter your API Key
                    </label>
                    <input
                      type="password"
                      value={geminiApiKey}
                      onChange={(e) => setGeminiApiKey(e.target.value)}
                      placeholder="AIzaSy..."
                      className="w-full px-4 py-3 border-2 border-teal-600 rounded-lg focus:border-green-500 focus:outline-none font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      🔒 Salvata only localmente in the browser, mai inviata a server esterni
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-yellow-800">
                        <p className="font-semibold mb-1">⚠️ Security</p>
                        <p>Never share your API key. Gemini's free tier has limits that protect from accidental abuse.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={saveApiKey}
                      disabled={!geminiApiKey.trim()}
                      className="flex-1 min-w-[150px] bg-gradient-to-r from-purple-500 to-pink-500 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      💾 Save API Key
                    </button>
                    <button
                      onClick={() => setShowApiSetup(false)}
                      className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Close
                    </button>
                  </div>

                  {geminiApiKey && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded animate-fadeIn">
                      <div className="flex items-center gap-2 text-green-800">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">API Key configured!</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        Now you can enable API mode in exercises to generate infinite content
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );

          return (
            <div className="min-h-screen bg-gray-50 p-4">
              {/* TEST ONLY: Reset to Free Mode Button - REMOVE BEFORE PRODUCTION */}
              <button
                onClick={() => {
                  if (confirm('🧪 TEST MODE: Reset to Free tier?\n\nThis will clear:\n- API Key\n- Premium Tier\n- Will keep your mood data\n\n⚠️ REMOVE before production!')) {
                    localStorage.removeItem('gemini_api_key');
                    localStorage.removeItem('premium_tier');
                    localStorage.removeItem('user_api_key');
                    location.reload();
                  }
                }}
                className="fixed top-2 left-2 z-50 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg shadow-md hover:shadow-lg transition-all text-xs font-bold"
                title="TEST ONLY - Reset to Free Mode"
              >
                🧪 RESET TEST
              </button>

              {/* Top Buttons - Compact and Horizontal */}
              <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[9999] flex gap-1 items-center pointer-events-auto">
                {/* Language Selection Button */}
                <button
                  onClick={() => {
                    window.location.href = '/index.html';
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded shadow-md hover:shadow-lg transition-all text-xs font-semibold"
                  title="Back to language selection / Torna alla selezione lingua"
                >
                  ITA-ENG
                </button>

                {firebaseUser ? (
                  <div className="bg-blue-600 text-white px-2 py-1 rounded shadow-md flex items-center gap-1 text-xs">
                    <Cloud className="w-3 h-3" />
                    <button
                      onClick={() => auth.signOut()}
                      className="ml-1 p-0.5 hover:bg-white/20 rounded transition-colors"
                      title="Logout"
                    >
                      <LogOut className="w-3 h-3" />
                    </button>
                  </div>
                ) : userProfile ? (
                  <>
                    <button
                      onClick={() => setShowProfileBenefits(true)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded shadow-md hover:shadow-lg transition-all text-xs font-semibold flex items-center gap-1"
                      title="View Profile"
                      style={{ position: 'relative', zIndex: 10000, pointerEvents: 'auto' }}
                    >
                      <User className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setShowFirebaseAuth(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded shadow-md hover:shadow-lg transition-all text-xs font-semibold flex items-center gap-1"
                      title="Register on Cloud"
                      style={{ position: 'relative', zIndex: 10000, pointerEvents: 'auto' }}
                    >
                      <Cloud className="w-3 h-3" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setShowFirebaseAuth(true)}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-2 py-1 rounded shadow-md hover:shadow-lg transition-all text-xs font-semibold flex items-center gap-1"
                      title="Sign up for cloud sync"
                      style={{ position: 'relative', zIndex: 10000, pointerEvents: 'auto' }}
                    >
                      <span className="text-sm">🎵</span>
                    </button>
                    <button
                      onClick={() => setShowProfileBenefits(true)}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded shadow-md hover:shadow-lg transition-all text-xs font-semibold flex items-center gap-1"
                      title="Continue without registration"
                      style={{ position: 'relative', zIndex: 10000, pointerEvents: 'auto' }}
                    >
                      <span className="text-sm">👤</span>
                    </button>
                  </>
                )}
              </div>

              <div className="max-w-5xl mx-auto py-6">
                <div className="bg-gradient-to-br from-white via-teal-50 to-green-50 rounded-3xl shadow-2xl p-6 md:p-8 border-2 border-orange-300/30">
                  {currentView === 'home' && <HomeView />}
                  {currentView === 'mood' && <MoodView />}
                  {currentView === 'journal' && <JournalView
                    journalSaved={journalSaved}
                    journalEntry={journalEntry}
                    setJournalEntry={setJournalEntry}
                    saveJournalEntry={saveJournalEntry}
                    journalEntries={journalEntries}
                    setCurrentView={setCurrentView}
                  />}
                  {currentView === 'creativelab' && <CreativeLabView
                    creativeProfile={creativeProfile}
                    setCreativeProfile={setCreativeProfile}
                    saveCreativeProfileData={saveCreativeProfileData}
                    creativeRequest={creativeRequest}
                    setCreativeRequest={setCreativeRequest}
                    analyzeCreativeRequestData={analyzeCreativeRequestData}
                    creativeAnalyzing={creativeAnalyzing}
                    creativeLabEntries={creativeLabEntries}
                    setCreativeLabEntries={setCreativeLabEntries}
                    setCurrentView={setCurrentView}
                    setShowApiSetup={setShowApiSetup}
                    openClarifications={openClarifications}
                    setOpenClarifications={setOpenClarifications}
                  />}
                  {currentView === 'exercises' && <ExercisesView />}
                  {currentView === 'category-exercises-list' && <CategoryExercisesListView />}
                  {currentView === 'exercise-detail' && <ExerciseDetailView />}
                  {currentView === 'progress' && <ProgressView />}
                  {currentView === 'insights' && <InsightsView />}
                </div>

                <div className="text-center mt-6 text-orange-600 text-sm space-y-4">
                  <p className="text-wellness-primary font-bold">🎵 Creative Wellness Coach for Musicians v2.0 - Wellness Edition 🎵</p>
                  <p className="mt-1 text-wellness-accent">Made with 🧡 for musicians • hundreds of spectral exercises</p>

                  {/* Bottoni Condivisione and Donazione */}
                  <div className="flex justify-center gap-3 flex-wrap mt-4">
                    <button
                      onClick={() => {
                        const text = `🎵 *Creative Wellness Coach for Musicians* 🎵\n\nA free creative wellness app dedicated to music students and musicians!\n\n✨ Track your mood\n📝 Personal journal\n🎵 AI analysis of your creative work\n🧘 Hundreds of creative exercises\n\nTry it now: ${window.location.href}`;
                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="bg-green-600 hover:bg-green-700 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-lg"
                    >
                      <Share2 className="w-4 h-4" />
                      WhatsApp
                    </button>

                    <button
                      onClick={() => {
                        const shareUrl = window.location.href;
                        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                        window.open(facebookUrl, '_blank');
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-lg"
                    >
                      <Share2 className="w-4 h-4" />
                      Facebook
                    </button>

                    <button
                      onClick={() => {
                        alert('To share on Instagram:\n\n1. Take a screenshot of the app\n2. Open Instagram\n3. Create a new Story\n4. Upload the screenshot\n5. Add the link: ' + window.location.href);
                      }}
                      className="bg-gradient-to-r from-pink-600 to-purple-700 hover:opacity-90 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-opacity flex items-center gap-2 shadow-lg"
                    >
                      <Share2 className="w-4 h-4" />
                      Instagram
                    </button>

                    <button
                      onClick={() => {
                        window.open('https://paypal.me/FrancescoMarianoIT', '_blank');
                      }}
                      className="bg-gradient-to-r from-teal-600 to-pink-600 hover:opacity-90 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-opacity flex items-center gap-2 shadow-lg"
                    >
                      ❤️ Support the project
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-orange-300/30">
                    <p className="text-teal-700 font-medium">Designed and developed by: Francesco Mariano</p>
                    <p className="text-teal-500 text-xs mt-1">2023 • Wellness Edition: October 31, 2025</p>
                    <p className="text-orange-600 mt-2">
                      <button
                        onClick={() => setShowContactForm(true)}
                        className="text-wellness-primary hover:text-wellness-accent underline font-semibold"
                      >
                        📬 Send feedback or suggesturesons
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              {showApiSetup && <ApiSetupModal />}
              <ReviewPromptModal />
              <ReportModal />
              <GuideModal />
              <ContactFormModal />
              <ProfileBenefitsModal />
              <ProfileModal />
              <FirebaseAuthModal />

              <button
                onClick={() => setShowGuide(true)}
                className="fixed bottom-20 right-6 bg-gradient-to-r from-teal-600 to-purple-700 text-gray-800 p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-40 flex items-center gap-2 group border-2 border-orange-300/50"
                title="Guide and Instructions"
              >
                <BookOpen className="w-6 h-6" />
                <span className="hidden group-hover:inline-block font-semibold pr-2 whitespace-nowrap">
                  Guide
                </span>
              </button>

              {apiKeySaved && (
                <div className="fixed top-4 right-4 bg-green-500 text-gray-800 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fadeIn z-50">
                  <CheckCircle className="w-5 h-5" />
                  API Key saved successfully!
                </div>
              )}
            </div>
          );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MentalHealthCoachMusica />);
