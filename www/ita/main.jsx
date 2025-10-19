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

        // Inizializza Firebase con la tua configurazione
        const firebaseConfig = {
          apiKey: "AIzaSyA6k76_p6x8pBGWKd6dQe5xfDPqBR_tJjc",
          authDomain: "artist-mental-health.firebaseapp.com",
          projectId: "artist-mental-health",
          storageBucket: "artist-mental-health.firebasestorage.app",
          messagingSenderId: "66082074143",
          appId: "1:66082074143:web:7aa589564b946274ad2f2a"
        };

        // Inizializza Firebase solo se non già inizializzato
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        const auth = firebase.auth();
        const db = firebase.firestore();

        // SPOSTATO FUORI per evitare re-creazione del componente ad ogni render
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
          setShowApiSetup
        }) => {
          return (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-purple-700">🎵 Creative Lab AI per Musicisti</h2>

              {/* Back to Home Button */}
              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentView('home')}
                  className="mb-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-400 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md border border-orange-300"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  Torna alla Home
                </button>

                <button
                  onClick={() => {
                    if (confirm('Vuoi cancellare tutti i dati del Creative Lab? Questa azione non può essere annullata.')) {
                      localStorage.removeItem('creativeLabEntries');
                      setCreativeLabEntries([]);
                      alert('Dati cancellati con successo!');
                    }
                  }}
                  className="mb-4 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md"
                >
                  Cancella Dati Lab
                </button>
              </div>

              <div className="bg-gradient-to-r from-purple-100/60 to-pink-100/60 border-l-4 border-purple-500 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Bot className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-purple-800 font-semibold mb-1">💡 Come funziona il Creative Lab AI per Musicisti</p>
                    <p className="text-purple-700 text-sm">
                      Descrivi un'idea musicale, un blocco creativo, o una sfida che stai affrontando nella tua pratica musicale.
                      L'AI analizzerà il tuo profilo e ti proporrà <strong>3 strategie personalizzate</strong> con approcci concreti,
                      tecniche necessarie, e passi successivi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Creative Profile Form */}
              {!creativeProfile ? (
                <div className="space-y-4 bg-white/80 p-6 rounded-xl border-2 border-purple-400/50">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">🎹 Configura il tuo Profilo Creativo</h3>
                  <p className="text-purple-600 text-sm mb-6">Rispondi a queste domande per ricevere consigli personalizzati. I campi 5 e 6 sono opzionali.</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">1. Quanti anni hai? <span className="text-red-500">*</span></label>
                      <input
                        type="number"
                        id="profile-age"
                        placeholder="Es: 22"
                        className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">2. Cosa studi? / Cosa hai studiato? <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="profile-study"
                        placeholder="Es: Pianoforte, Canto, Composizione, Violino, Jazz..."
                        className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">3. A che livello? <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="profile-level"
                        placeholder="Es: Triennio 2° anno, Diploma, Biennio Specialistico..."
                        className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">4. Generi/stili che preferisci? <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="profile-genres"
                        placeholder="Es: Classico, Jazz, Contemporaneo, Pop, Barocco..."
                        className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">5. Obiettivi musicali (opzionale)</label>
                      <textarea
                        id="profile-goals"
                        placeholder="Es: Suonare in concerto, vincere audizione, pubblicare album, entrare in orchestra..."
                        className="w-full h-24 p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-purple-700 font-semibold mb-2">6. Una tua competenza/caratteristica unica (opzionale)</label>
                      <textarea
                        id="profile-unique"
                        placeholder="Es: Improvvisazione jazz, lettura a prima vista, tecnica dell'arco..."
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
                        alert('Per favore compila tutti i campi obbligatori (1-4)');
                        return;
                      }

                      saveCreativeProfileData({ age, study, level, genres, goals, uniqueSkill });
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                  >
                    ✅ Salva Profilo Creativo
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Show current profile */}
                  <div className="bg-white/80 p-4 rounded-lg border-2 border-purple-300/50">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-purple-700">Il tuo Profilo Creativo</h4>
                      <button
                        onClick={() => {
                          if (confirm('Vuoi modificare il tuo profilo creativo?')) {
                            setCreativeProfile(null);
                            localStorage.removeItem('creativeProfile');
                          }
                        }}
                        className="text-purple-600 hover:text-purple-800 text-sm underline"
                      >
                        Modifica
                      </button>
                    </div>
                    <div className="text-sm text-purple-600 space-y-1">
                      <p><strong>Età:</strong> {creativeProfile.age} anni</p>
                      <p><strong>Studi:</strong> {creativeProfile.study}</p>
                      <p><strong>Livello:</strong> {creativeProfile.level}</p>
                      <p><strong>Generi:</strong> {creativeProfile.genres}</p>
                      {creativeProfile.goals && <p><strong>Obiettivi:</strong> {creativeProfile.goals}</p>}
                      {creativeProfile.uniqueSkill && <p><strong>Competenza unica:</strong> {creativeProfile.uniqueSkill}</p>}
                    </div>
                  </div>

                  {/* Request textarea */}
                  <div>
                    <label className="block text-purple-700 font-semibold mb-2">📝 Descrivi la tua idea o sfida creativa</label>
                    <textarea
                      value={creativeRequest}
                      onChange={(e) => setCreativeRequest(e.target.value)}
                      placeholder="Es: Ho un blocco creativo e non riesco a sviluppare il mio progetto... oppure: Voglio creare un portfolio coerente ma non so da dove partire..."
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
                          Analizzando...
                        </>
                      ) : (
                        <>
                          <Bot className="w-5 h-5" />
                          Analizza e Genera Strategie
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
                    <h3 className="text-xl font-semibold text-purple-700">💬 Conversazioni Precedenti:</h3>
                    {creativeLabEntries.length === 0 ? (
                      <p className="text-purple-500 italic">Nessuna conversazione ancora. Inizia a esplorare!</p>
                    ) : (
                      <div className="space-y-4">
                        {creativeLabEntries.slice().reverse().map((entry, i) => {
                          if (!entry || !entry.date || !entry.request || !entry.response) {
                            return null;
                          }
                          return (
                          <div key={i} className="bg-gradient-to-r from-purple-100/60 to-pink-100/60 p-5 rounded-lg border border-purple-400/50 shadow-sm">
                            <p className="text-purple-600 text-sm mb-3 font-semibold">
                              📅 {new Date(entry.date).toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>

                            <div className="mb-4 bg-white/60 p-3 rounded-lg">
                              <p className="text-purple-800 font-semibold text-sm mb-1">La tua richiesta:</p>
                              <p className="text-purple-900 text-sm whitespace-pre-wrap">{entry.request}</p>
                            </div>

                            <div className="bg-white/80 p-4 rounded-lg prose prose-sm max-w-none prose-purple">
                              <p className="text-purple-800 font-semibold text-sm mb-2">Risposta AI:</p>
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
                                  try {
                                    const reversedIndex = creativeLabEntries.length - 1 - i;
                                    const newEntries = [...creativeLabEntries];
                                    if (newEntries[reversedIndex]) {
                                      newEntries[reversedIndex] = {
                                        ...newEntries[reversedIndex],
                                        showClarification: !(newEntries[reversedIndex].showClarification || false)
                                      };
                                      setCreativeLabEntries(newEntries);
                                      localStorage.setItem('creativeLabEntries', JSON.stringify(newEntries));
                                    }
                                  } catch (error) {
                                    console.error('Error toggling clarification:', error);
                                  }
                                }}
                                className="flex items-center gap-2 font-bold text-lg text-purple-700 hover:text-purple-900 transition-colors"
                              >
                                <HelpCircle className="w-5 h-5" />
                                Hai bisogno di chiarimenti?
                                <span className="text-base ml-2">({entry.showClarification ? '▼' : '▶'})</span>
                              </button>

                              {entry.showClarification && (
                                <div className="space-y-4 mt-4 animate-fadeIn bg-purple-50/50 p-4 rounded-lg">
                                  <p className="text-purple-700 text-sm">
                                    Hai dubbi sulla strategia proposta? Vuoi approfondimenti o suggerimenti su come adattarla?
                                    Chiedi all'AI coach!
                                  </p>

                                  <div className="space-y-3">
                                    <textarea
                                      id={`clarification-creative-${i}`}
                                      placeholder="Es: Puoi darmi più esempi pratici per la seconda strategia? Come posso adattarla al mio contesto?"
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
                                          alert('Per favore scrivi una domanda');
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
                                            alert('Chiave API mancante. Configurala nelle impostazioni API.');
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
                                                    text: `Contesto: Ho ricevuto questa strategia musicale:\n\n${entry.response}\n\nDomanda dello studente: ${question}\n\nRispondi in modo chiaro e pratico alla domanda, fornendo esempi concreti e suggerimenti applicabili.`
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
                                            throw new Error('Nessuna risposta dall\'AI');
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
                                          alert('Errore nella richiesta. Verifica la tua chiave API.');
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
                                          Chiedendo...
                                        </>
                                      ) : (
                                        <>
                                          <MessageCircle className="w-4 h-4" />
                                          Chiedi Chiarimento
                                        </>
                                      )}
                                    </button>
                                  </div>

                                  {entry.clarifications && entry.clarifications.length > 0 && (
                                    <div className="mt-4 space-y-3">
                                      <h4 className="font-semibold text-purple-800 text-sm">Chiarimenti ricevuti:</h4>
                                      {entry.clarifications.map((clarif, ci) => (
                                        <div key={ci} className="bg-white/80 p-3 rounded-lg border border-purple-300">
                                          <p className="text-purple-700 text-xs mb-2">
                                            <strong>Domanda:</strong> {clarif.question}
                                          </p>
                                          <div className="text-purple-900 text-sm prose prose-sm max-w-none">
                                            <strong>Risposta:</strong>
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
                  Diario salvato!
                </div>
              )}

              <h2 className="text-3xl font-bold text-wellness-primary">Il tuo Diario Personale</h2>

              {/* Back to Home Button */}
              <button
                onClick={() => setCurrentView('home')}
                className="mb-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-400 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md border border-orange-300"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                Torna alla Home
              </button>

              {/* Personal Diary */}
              <div className="space-y-6">
                  <div>
                    <p className="text-orange-600 mb-4">Scrivi pensieri, riflessioni, ispirazioni personali. Questo spazio è solo tuo.</p>

                    <textarea
                      value={journalEntry}
                      onChange={(e) => setJournalEntry(e.target.value)}
                      placeholder="Scrivi liberamente qui... Pensieri su progetti, ispirazioni, dubbi, successi..."
                      className="w-full h-64 p-4 border-2 border-orange-600 bg-gray-50/50 text-teal-800 rounded-xl focus:border-orange-300 focus:outline-none resize-none placeholder-orange-400/50"
                    />

                    <button
                      onClick={saveJournalEntry}
                      className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-300 to-amber-400 text-gray-800 rounded-lg hover:opacity-90 transition-opacity border border-orange-300"
                    >
                      💾 Salva Entrata
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-wellness-accent">Entrate Precedenti:</h3>
                    {journalEntries.length === 0 ? (
                      <p className="text-teal-500 italic">Nessuna entrata ancora. Inizia a scrivere!</p>
                    ) : (
                      <div className="space-y-3">
                        {journalEntries.slice().reverse().map((e, i) => (
                          <div key={i} className="bg-gradient-to-r from-orange-100/50 to-white/60 p-4 rounded-lg border border-orange-600/50 shadow-sm backdrop-blur-sm">
                            <p className="text-teal-500 text-sm mb-2 font-semibold">
                              📅 {new Date(e.date).toLocaleDateString('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <p className="text-teal-800 whitespace-pre-wrap">{e.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              <button
                onClick={() => setCurrentView('home')}
                className="mt-6 px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                ← Torna Home
              </button>
            </div>
          );
        };

        const MentalHealthCoachArte = () => {
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
          const [currentVariant, setCurrentVariant] = useState(null);
          const [useApiForExercises, setUseApiForExercises] = useState(() => {
            const saved = localStorage.getItem('use_api_for_exercises');
            return saved === 'true'; // Default: false (usa offline)
          });
          const [isGenerating, setIsGenerating] = useState(false);
          const [showExamples, setShowExamples] = useState(false);
          const [exerciseCompleted, setExerciseCompleted] = useState(false);

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

          // Stati profilo utente (localStorage - per guest mode)
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

              // Se utente è loggato, carica dati da Firestore
              if (user) {
                setUseCloudSync(true);
                try {
                  const userDoc = await db.collection('users').doc(user.uid).get();
                  if (userDoc.exists) {
                    const data = userDoc.data();
                    console.log('📥 Caricati dati da cloud:', data);
                    if (data.moodHistory) setMoodHistory(data.moodHistory);
                    if (data.journalEntries) setJournalEntries(data.journalEntries);
                    if (data.uploadedImages) setUploadedImages(data.uploadedImages);
                    if (data.savedReports) setSavedReports(data.savedReports);
                  }
                } catch (err) {
                  console.error('Errore caricamento dati:', err);
                }
              }
            });
            return () => unsubscribe();
          }, []);

          // Sincronizza moodHistory su Firestore quando l'utente è loggato
          useEffect(() => {
            if (firebaseUser && useCloudSync && moodHistory.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                moodHistory: moodHistory
              }, { merge: true })
              .then(() => console.log('💾 moodHistory sincronizzato'))
              .catch(err => console.error('Errore sync moodHistory:', err));
            }
          }, [moodHistory, firebaseUser, useCloudSync]);

          // Sincronizza journalEntries su Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && journalEntries.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                journalEntries: journalEntries
              }, { merge: true })
              .then(() => console.log('💾 journalEntries sincronizzato'))
              .catch(err => console.error('Errore sync journalEntries:', err));
            }
          }, [journalEntries, firebaseUser, useCloudSync]);

          // Sincronizza uploadedImages su Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && uploadedImages.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                uploadedImages: uploadedImages
              }, { merge: true })
              .then(() => console.log('💾 uploadedImages sincronizzato'))
              .catch(err => console.error('Errore sync uploadedImages:', err));
            }
          }, [uploadedImages, firebaseUser, useCloudSync]);

          // Sincronizza savedReports su Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && savedReports.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                savedReports: savedReports
              }, { merge: true })
              .then(() => console.log('💾 savedReports sincronizzato'))
              .catch(err => console.error('Errore sync savedReports:', err));
            }
          }, [savedReports, firebaseUser, useCloudSync]);

          // Sincronizza creativeLabEntries su Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && creativeLabEntries.length > 0) {
              db.collection('users').doc(firebaseUser.uid).set({
                creativeLabEntries: creativeLabEntries
              }, { merge: true })
              .then(() => console.log('💾 creativeLabEntries sincronizzato'))
              .catch(err => console.error('Errore sync creativeLabEntries:', err));
            }
          }, [creativeLabEntries, firebaseUser, useCloudSync]);

          // Sincronizza creativeProfile su Firestore
          useEffect(() => {
            if (firebaseUser && useCloudSync && creativeProfile) {
              db.collection('users').doc(firebaseUser.uid).set({
                creativeProfile: creativeProfile
              }, { merge: true })
              .then(() => console.log('💾 creativeProfile sincronizzato'))
              .catch(err => console.error('Errore sync creativeProfile:', err));
            }
          }, [creativeProfile, firebaseUser, useCloudSync]);

          useEffect(() => {
            console.log('geminiApiKey cambiato:', geminiApiKey ? 'PRESENTE (' + geminiApiKey.substring(0, 10) + '...)' : 'ASSENTE');
          }, [geminiApiKey]);

          useEffect(() => {
            let interval;
            if (timerActive && timerSeconds > 0) {
              interval = setInterval(() => {
                setTimerSeconds(prev => {
                  if (prev <= 1) {
                    setTimerActive(false);
                    playSound();
                    showNotification('Timer completato!', 'Il tempo per il tuo esercizio è finito.');
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

            const prompt = `SEI UN COACH CREATIVO SPECIALIZZATO PER STUDENTI DI MUSICA E MUSICISTI.

EXPERTISE:
- Tecniche musicali: strumenti, canto, composizione, arrangiamento, produzione musicale, improvvisazione
- Processo creativo: ideazione musicale, sviluppo repertorio, interpretazione, ricerca sonora
- Contesto accademico: critiche, revisioni, audizioni, concerti, esami, tesi di laurea, progetti
- Blocchi specifici: ansia da prestazione, blocco creativo, paura del giudizio critico

PROFILO STUDENTE:
- Età: ${creativeProfile.age} anni
- Corso/Disciplina: ${creativeProfile.study}
- Livello accademico: ${creativeProfile.level}
- Tecniche/Strumenti preferiti: ${creativeProfile.genres}
- Obiettivi musicali: ${creativeProfile.goals || 'Non specificati'}
- Competenza unica: ${creativeProfile.uniqueSkill || 'Non specificata'}

RICHIESTA DELLO STUDENTE:
${creativeRequest}

COMPITO:
Analizza il profilo dello studente e la sua richiesta, poi proponi esattamente 3 strategie creative concrete e personalizzate.

LINGUAGGIO DA USARE:
- Termini: brano, composizione, repertorio, concerto, audizione, esame, interpretazione, improvvisazione, studio
- Riferimenti: generi musicali, compositori, tecniche strumentali/vocali, teoria musicale
- Esempi concreti specifici per discipline musicali

FORMATO RISPOSTA (usa markdown):

## 🎯 Analisi della Tua Richiesta
[breve sintesi empatica di cosa hai capito - 2-3 righe]

## 💡 Tre Strategie Creative Personalizzate

### Strategia 1: [Nome evocativo]
**🎵 Approccio:** [descrizione del metodo creativo - 2-3 righe]
**🛠️ Materiali/Strumenti necessari:** [cosa serve concretamente]
**✨ Risultato atteso:** [cosa otterrai per il tuo portfolio/processo]
**⏱️ Tempo/Impegno:** [stima realistica]

### Strategia 2: [Nome evocativo]
**🎵 Approccio:** [descrizione del metodo creativo - 2-3 righe]
**🛠️ Materiali/Strumenti necessari:** [cosa serve concretamente]
**✨ Risultato atteso:** [cosa otterrai per il tuo portfolio/processo]
**⏱️ Tempo/Impegno:** [stima realistica]

### Strategia 3: [Nome evocativo]
**🎵 Approccio:** [descrizione del metodo creativo - 2-3 righe]
**🛠️ Materiali/Strumenti necessari:** [cosa serve concretamente]
**✨ Risultato atteso:** [cosa otterrai per il tuo portfolio/processo]
**⏱️ Tempo/Impegno:** [stima realistica]

## 🚀 Prossimo Passo Consigliato
[UN'azione concreta e actionable da fare oggi o questa settimana - max 2 righe]

APPROCCIO:
- Pratico e musicale
- Incoraggia sperimentazione sonora e processuale
- Enfatizza processo creativo > risultato finale perfetto
- Riconosci la vulnerabilità dell'esposizione musicale
- Tono: professionale, incoraggiante, concreto ma empatico`;

            try {
              const apiKey = localStorage.getItem('gemini_api_key');
              if (!apiKey) {
                alert('⚠️ Configura la tua API Key nelle impostazioni prima di usare questa funzione.');
                setCreativeAnalyzing(false);
                return;
              }

              // Rate limiter: 5 secondi tra richieste
              const now = Date.now();
              const timeSinceLastRequest = now - lastApiRequestTime;
              if (timeSinceLastRequest < 5000) {
                const waitSeconds = Math.ceil((5000 - timeSinceLastRequest) / 1000);
                alert(`⏱️ Attendi ${waitSeconds} secondi prima di generare un'altra analisi`);
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
                alert(`Errore API: ${data.error?.message || 'Risposta non valida'}`);
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
                console.error('Struttura risposta inaspettata:', data);
                alert('Errore nella risposta AI. Riprova.');
              }
            } catch (error) {
              console.error('Errore Creative Lab:', error);
              alert('Errore di connessione. Controlla la tua API Key e la console.');
            }

            setCreativeAnalyzing(false);
          };

          const startTimer = (duration) => {
            const seconds = parseDuration(duration);
            setTimerDuration(seconds);
            setTimerSeconds(seconds);
            setTimerActive(true);
            showNotification('Timer avviato!', `Timer impostato per ${duration}`);
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
            console.log('resizeImage chiamata per file:', file.name, 'tipo:', file.type, 'dimensione:', file.size, 'bytes');

            return new Promise((resolve, reject) => {
              const reader = new FileReader();

              reader.onload = (e) => {
                console.log('FileReader completato');
                const dataUrl = e.target.result;

                const img = new window.Image();

                img.onload = () => {
                  try {
                    console.log('Immagine caricata, dimensioni originali:', img.width, 'x', img.height);

                    if (img.width <= maxWidth && img.height <= maxHeight) {
                      console.log('Immagine già abbastanza piccola, uso originale');
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

                    console.log('Conversione a JPEG...');
                    const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    console.log('OK! Dimensione finale:', resizedDataUrl.length, 'caratteri');
                    resolve(resizedDataUrl);

                  } catch (err) {
                    console.error('Errore durante resize:', err);
                    console.log('Uso immagine originale come fallback');
                    resolve(dataUrl);
                  }
                };

                img.onerror = () => {
                  console.error('Errore caricamento immagine, uso dataUrl originale');
                  resolve(dataUrl);
                };

                img.src = dataUrl;
              };

              reader.onerror = (err) => {
                console.error('Errore lettura file:', err);
                reject(new Error('Impossibile leggere il file'));
              };

              reader.readAsDataURL(file);
            });
          };

          const handleImageUpload = async (file) => {
            console.log('handleImageUpload chiamata, geminiApiKey:', geminiApiKey ? 'PRESENTE' : 'ASSENTE');

            if (!geminiApiKey || geminiApiKey.trim() === '') {
              console.log('API key mancante, apro modal configurazione');
              alert('⚠️ API Key richiesta! Configura prima la Tua API key per caricare immagini.');
              setShowApiSetup(true);
              return;
            }

            const validTypes = ['image/', '.heic', '.heif'];
            const isValid = validTypes.some(type =>
              file.type.startsWith(type) || file.name.toLowerCase().endsWith(type)
            );

            if (!file || !isValid) {
              alert('⚠️ Per favore carica un file immagine valido (jpg, png, heic, etc.)');
              return;
            }

            try {
              console.log('Inizio upload e ridimensionamento immagine...');
              setIsGenerating(true);

              const resizedDataUrl = await resizeImage(file);
              console.log('Immagine ridimensionata, inizio analisi AI...');

              const imageData = {
                id: Date.now(),
                dataUrl: resizedDataUrl,
                uploadDate: new Date().toISOString(),
                exerciseId: selectedExercise,
                exerciseTitle: currentVariant?.title || 'Esercizio',
                aiComment: null
              };

              try {
                console.log('Chiamata generateImageComment...');
                const comment = await generateImageComment(resizedDataUrl);
                console.log('Commento ricevuto:', comment ? 'SI' : 'NO');
                imageData.aiComment = comment;
              } catch (error) {
                console.error('Errore generazione commento:', error);
                imageData.aiComment = 'Errore: ' + error.message;
              }

              setUploadedImages(prev => [imageData, ...prev]);
              setLastUploadedImage(imageData);
              setUploadSuccess(true);
              setTimeout(() => {
                setUploadSuccess(false);
                setLastUploadedImage(null);
              }, 10000);
              console.log('Upload completato con successo!');
            } catch (error) {
              console.error('Errore upload immagine:', error);
              alert('❌ Errore durante il caricamento dell\'immagine: ' + error.message);
            } finally {
              setIsGenerating(false);
            }
          };

          const generateImageComment = async (imageDataUrl) => {
            console.log('generateImageComment chiamata');

            if (!geminiApiKey) {
              console.log('Nessuna API key, ritorno null');
              return null;
            }

            try {
              const base64Image = imageDataUrl.split(',')[1];
              console.log('Base64 estratto, lunghezza:', base64Image.length);

              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 15000);

              // Costruisci prompt con contesto esercizio
              const exerciseContext = currentVariant
                ? `\n\nCONTESTO ESERCIZIO:\nTitolo: ${currentVariant.title}\nRichiesta: ${currentVariant.prompt}\nDurata: ${currentVariant.duration}`
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
                          text: `Sei un docente di conservatorio e musicista professionista ma con senso dell'umorismo, specializzato in dare feedback a studenti di musica e musicisti.

COMPITO: Analizza questo materiale musicale (spartito, foto di strumento, annotazioni, setup, foto di esercitazione) in modo ONESTO ma costruttivo.${exerciseContext}

STRUTTURA RISPOSTA (max 5 frasi, linguaggio naturale):

1. VALUTA PERTINENZA: Se l'immagine NON corrisponde per niente alla richiesta dell'esercizio (es: chiesto spartito di improvvisazione, inviato foto di paesaggio), inizia con un commento IRONICO/SCHERZOSO ma leggero (es: "Mmh, bella foto... ma dov'è la musica? 😄"). Se invece è pertinente, salta questo punto.

2. ANALISI OBIETTIVA: Descrivi cosa vedi nel materiale in modo tecnico/musicale. Sii SINCERO: se qualcosa non funziona musicalmente, dillo chiaramente ma con rispetto (es: "La diteggiatura potrebbe essere più efficiente" o "L'armonia risulta confusa").

3. COSA FUNZIONA: Trova almeno UN elemento positivo specifico (idea musicale, approccio tecnico, notazione, creatività, setup, etc.).

4. SUGGERIMENTO COSTRUTTIVO: Proponi UNA direzione concreta per sviluppare/migliorare il lavoro musicale. Se il materiale è fuori tema, suggerisci come potrebbe essere reinterpretato musicalmente.

5. CHIUSURA MOTIVANTE: Concludi con incoraggiamento genuino riferito al percorso musicale.

TONO: Diretto, onesto, professionale ma friendly. Se il materiale è fuori tema usa ironia LEGGERA all'inizio, poi diventa serio e costruttivo.

NON usare etichette tipo "Analisi:", "Suggerimento:", etc. Scrivi in modo fluido e conversazionale.`
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
              console.log('Risposta ricevuta, status:', response.status);

              if (!response.ok) {
                const errorText = await response.text();
                console.error('Errore API:', response.status, errorText);
                throw new Error(`API Error: ${response.status} - ${errorText}`);
              }

              const data = await response.json();
              console.log('Dati parsati:', data);
              const comment = data.candidates[0].content.parts[0].text;
              console.log('Commento estratto:', comment);
              return comment;
            } catch (error) {
              console.error('Errore generazione commento immagine:', error);
              if (error.name === 'AbortError') {
                return 'Timeout: la generazione del commento ha richiesto troppo tempo. Immagine salvata comunque! 🎵';
              }
              return 'Errore nell\'analisi: ' + error.message;
            }
          };

          const deleteImage = (imageId) => {
            if (confirm('Sei sicuro di voler eliminare questa foto?')) {
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

            const recentMoods = moodHistory.filter(e => new Date(e.date) >= sevenDaysAgo);
            const previousMoods = moodHistory.filter(e => {
              const d = new Date(e.date);
              return d >= fourteenDaysAgo && d < sevenDaysAgo;
            });

            const recentAvg = recentMoods.length > 0
              ? recentMoods.reduce((sum, e) => sum + e.mood, 0) / recentMoods.length
              : avgMood;
            const previousAvg = previousMoods.length > 0
              ? previousMoods.reduce((sum, e) => sum + e.mood, 0) / previousMoods.length
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

            const dayNames = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabutterflyo'];
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
                  title: `${worstDay.day} è il tuo giorno più difficile`,
                  description: `Media mood: ${worstDay.avg.toFixed(1)}/5`
                });
              }
              if (bestDay.avg > 3.5) {
                patterns.push({
                  type: 'positive',
                  title: `${bestDay.day} è il tuo giorno migliore`,
                  description: `Media mood: ${bestDay.avg.toFixed(1)}/5`
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
                title: `Streak di ${maxStreak} giorni positivi!`,
                description: 'Stai mantenendo un mood elevato'
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
              alert('⚠️ Registra almeno un mood per generare un report');
              return null;
            }

            // Rate limiter: 5 secondi tra richieste
            const now = Date.now();
            const timeSinceLastRequest = now - lastApiRequestTime;
            if (timeSinceLastRequest < 5000) {
              const waitSeconds = Math.ceil((5000 - timeSinceLastRequest) / 1000);
              alert(`⏱️ Attendi ${waitSeconds} secondi prima di generare un altro report`);
              return null;
            }

            setGeneratingReport(true);

            try {
              const patterns = findMoodPatterns();

              const prompt = `Sei uno psicologo specializzato in supporto per Studenti di Musica e Musicisti. Analizza questi dati e scrivi un report empatico e motivante:

Dati:
- ${stats.totalMoods} registrazioni mood negli ultimi giorni
- Mood medio: ${stats.avgMood.toFixed(1)}/5
- Trend: ${stats.trend > 0 ? 'in miglioramento' : stats.trend < 0 ? 'in peggioramento' : 'stabile'}
- Pattern identificati: ${patterns.map(p => p.title).join(', ') || 'nessuno'}
- Numero immagini caricate: ${uploadedImages.length}
- Voci diario: ${journalEntries.length}

Scrivi un report fluido e naturale che include:
- Un'osservazione sul tuo stato emotivo generale
- Cosa sta andando bene nel tuo percorso
- Aspetti da tenere sotto controllo
- Consigli pratici e personalizzati per migliorare

IMPORTANTE: Scrivi in modo conversazionale e diretto. NON usare etichette come "Sommario:", "Punti di forza:", "Aree da monitorare:", "Raccomandazioni:". Scrivi il testo in modo fluido come se stessi parlando direttamente alla persona. Non iniziare con frasi meta-testuali come "Ecco un'analisi" o "Basandomi sui dati". Inizia direttamente con il contenuto. Sii empatico, positivo ma realistico. Max 300 parole.`;

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
              console.log('✅ Report generato con successo');

              setGeneratingReport(false);
              return report;
            } catch (error) {
              console.error('💥 Errore generazione report:', error);
              alert(`⚠️ Errore nella generazione del report:\n\n${error.message}\n\nControlla la console (F12) per dettagli.`);
              setGeneratingReport(false);
              return null;
            }
          };

          const moods = [
            { id: 1, name: 'Ispirato', emoji: '🎵', color: 'bg-green-400' },
            { id: 2, name: 'Creativo', emoji: '✨', color: 'bg-blue-400' },
            { id: 3, name: 'Felice', emoji: '😊', color: 'bg-green-400' },
            { id: 4, name: 'Energico', emoji: '⚡', color: 'bg-yellow-400' },
            { id: 5, name: 'Spettrale', emoji: '🎵', color: 'bg-amber-400' },
            { id: 6, name: 'Tranquillo', emoji: '😌', color: 'bg-teal-400' },
            { id: 7, name: 'Neutrale', emoji: '😐', color: 'bg-gray-400' },
            { id: 8, name: 'Ansioso', emoji: '😰', color: 'bg-yellow-300' },
            { id: 9, name: 'Triste', emoji: '😢', color: 'bg-blue-300' },
            { id: 10, name: 'Bloccato', emoji: '😟', color: 'bg-teal-300' },
            { id: 11, name: 'Frustrato', emoji: '😤', color: 'bg-rose-400' },
            { id: 12, name: 'Esausto', emoji: '😫', color: 'bg-rose-300' },
            { id: 13, name: 'Malinconico', emoji: '😔', color: 'bg-indigo-300' },
            { id: 14, name: 'Motivato', emoji: '🔥', color: 'bg-teal-600' },
            { id: 15, name: 'Spaventato', emoji: '🎼', color: 'bg-green-500' }
          ];

          const exerciseVariants = {
            'esercizi-spettrali': [
              {
                title: "🌙 Improvvisazione alla Luce di Candela",
                description: "Suona nell'oscurità per liberare l'inconscio musicale",
                prompt: "Spegni tutte le luci. Usa solo una candela. Improvvisa ciò che le ombre e il silenzio ti suggeriscono per 20 minuti.",
                duration: "20 min",
                examples: [
                  "🕯️ Esempio 1: Osserva le ombre danzanti e traducile in suoni, lascia che le dita seguano l'istinto",
                  "👤 Esempio 2: Suona una melodia che rappresenta la tua ombra interiore, non la tua immagine pubblica",
                  "🌑 Esempio 3: Improvvisa una composizione ispirata a un sogno o incubo recente"
                ]
              },
              {
                title: "🎼 Composizione Automatica Spettrale",
                description: "Lascia che l'inconscio componga attraverso di te",
                prompt: "Componi per 10 minuti senza fermarti, senza pensare, senza correggere. Il suono non deve mai interrompersi.",
                duration: "10 min",
                examples: [
                  "✍️ Esempio 1: Inizia con un pedale scuro e improvvisa sopra senza censure melodiche",
                  "📝 Esempio 2: Suona una melodia che rappresenta la tua paura più profonda, lascia emergere tutto",
                  "🌙 Esempio 3: Crea un brano ispirato a un luogo inquietante immaginario"
                ]
              },
              {
                title: "🩸 Musica con Suoni Insoliti",
                description: "Usa elementi naturali per creare composizioni misteriose",
                prompt: "Crea una composizione usando solo suoni naturali trovati (foglie, acqua, legno, pietre).",
                duration: "30 min",
                examples: [
                  "🍂 Esempio 1: Registra e arrangia suoni di foglie, pioggia e vento in una composizione ambientale",
                  "🌿 Esempio 2: Suona usando solo oggetti naturali come percussioni (pietre, rami, conchiglie)",
                  "🪨 Esempio 3: Improvvisazione con risonanze di rocce e legno, cattura l'effimero"
                ]
              },
              {
                title: "🦋 Inversione Totale",
                description: "Fai tutto al contrario per sorprendere la mente",
                prompt: "Lavora al contrario: suona da destra a sinistra sulla tastiera, componi dalla fine all'inizio, inverti ritmo e melodia.",
                duration: "15 min",
                examples: [
                  "⬅️ Esempio 1: Suona una melodia familiare partendo dall'ultima nota e risalendo alla prima",
                  "🔄 Esempio 2: Componi un brano partendo dalla coda, costruendo a ritroso verso l'intro",
                  "🎵 Esempio 3: Improvvisa con la mano non dominante o suona lo strumento in posizione invertita"
                ]
              },
              {
                title: "🍃 Memento Mori Creativo",
                description: "Rifletti sulla mortalità per apprezzare la vita creativa",
                prompt: "Crea una composizione che rappresenta il tempo che passa, la fragilità, la trasformazione. 25 minuti di riflessione profonda.",
                duration: "25 min",
                examples: [
                  "⏳ Esempio 1: Registra lo stesso tema melodico in varie fasi, aggiungendo progressivamente decadimento e silenzio",
                  "🍂 Esempio 2: Composizione che usa suoni di vecchi strumenti, registrazioni sbiadite, echi del passato",
                  "🕰️ Esempio 3: Serie di variazioni che mostrano una melodia che invecchia, si trasforma e dissolve"
                ]
              },
              {
                title: "🌿 Tela del Ragno: Connessioni Nascoste",
                description: "Scopri legami segreti tra idee apparentemente distanti",
                prompt: "Scegli 5 parole random. Crea una composizione che le connette tutte in modo surreale e inaspettato.",
                duration: "20 min",
                examples: [
                  "🎹 Esempio 1: Parole: luna, forbici, memoria, sale, specchio → Composizione che intreccia questi elementi sonori",
                  "🎶 Esempio 2: Parole: sangue, piume, libro, scale, vetro → Brano misterioso con timbri evocativi",
                  "📖 Esempio 3: Parole: ombra, chiave, oceano, fumo, rosa → Suite breve che narra queste immagini in musica"
                ]
              },
              {
                title: "🎵 Trasformazione Oscura",
                description: "Prendi qualcosa di familiare e rendilo inquietante",
                prompt: "Scegli una melodia familiare e innocua. Arrangiala in modo da renderla misteriosa, perturbante ma affascinante.",
                duration: "30 min",
                examples: [
                  "🧸 Esempio 1: Ninna nanna infantile suonata in tonalità minore con risonanze vuote e distanti",
                  "🏠 Esempio 2: Canzone popolare familiare con armonie dissonanti e timbri innaturali",
                  "🎪 Esempio 3: Melodie d'infanzia arrangiate in una suite surreale e inquietante"
                ]
              },
              {
                title: "🌑 Ritratto dell'Ombra Interiore",
                description: "Esplora il lato oscuro della personalità creativa",
                prompt: "Componi il tuo 'lato ombra' musicale - la parte di te che nascondi. Sii onesto e coraggioso.",
                duration: "25 min",
                examples: [
                  "😈 Esempio 1: Auto-ritratto sonoro diviso: metà pubblico (melodico, pulito), metà privato (dissonante, crudo)",
                  "🎹 Esempio 2: Tema che rappresenta come suoni per gli altri vs. improvvisazione che mostra chi sei davvero",
                  "👥 Esempio 3: Due temi che dialogano: il tuo io da concerto e quello da sala prove notturna"
                ]
              },
              {
                title: "🕯️ Rituale Creativo Notturno",
                description: "Crea un piccolo rito musicale per onorare la creatività",
                prompt: "Crea uno spazio sacro per la tua musica: candele, oggetti significativi, silenzio. Suona in questo 'tempio personale'.",
                duration: "40 min",
                examples: [
                  "🔮 Esempio 1: Altar musicale con strumento, spartiti passati, simboli personali - componi in questo spazio",
                  "🌙 Esempio 2: Meditazione 5 min + improvvisazione intuitiva 35 min in uno spazio preparato con intenzione",
                  "✨ Esempio 3: Accendi candele per ogni brano completato, componi qualcosa di nuovo alla loro luce"
                ]
              },
              {
                title: "🦴 Archeologia dell'Anima",
                description: "Scava nei ricordi e nelle emozioni sepolte",
                prompt: "Trova una vecchia foto di te bambino. Crea una composizione che dialoga con quel bambino, con i suoi sogni dimenticati.",
                duration: "30 min",
                examples: [
                  "👶 Esempio 1: Componi usando melodie che amavi da bambino, aggiungendo elementi che rappresentano sogni persi",
                  "💭 Esempio 2: Brano dedicato al te stesso bambino: che musica gli avresti voluto far sentire?",
                  "🎵 Esempio 3: Componi ciò che quel bambino avrebbe voluto suonare ma non poteva"
                ]
              },
              {
                title: "🌑 Ascolto al Buio Totale",
                description: "Esplora il suono senza vista per amplificare percezione",
                prompt: "In una stanza completamente buia, suona bendato per 15 minuti. Lascia che l'assenza di vista amplifichi l'ascolto.",
                duration: "15 min",
                examples: [
                  "👁️ Esempio 1: Bendati, esplora il tuo strumento come se fosse la prima volta - scopri nuove sonorità",
                  "🎹 Esempio 2: Suona pattern ripetitivi al buio finché non emergono micro-variazioni inaspettate",
                  "🔊 Esempio 3: Registra, poi riascolta - scopri suoni che non sapevi di aver prodotto"
                ]
              },
              {
                title: "🪞 Specchio Sonoro",
                description: "Dialoga musicalmente con te stesso",
                prompt: "Registra 3 minuti di improvvisazione. Riascolta e rispondi musicalmente a te stesso per altri 7 minuti.",
                duration: "10 min",
                examples: [
                  "🎙️ Esempio 1: Prima parte aggressiva, seconda parte consolante - dialogo interno",
                  "💬 Esempio 2: Crea domanda musicale, poi rispondi con frase contrapposta",
                  "🔄 Esempio 3: Loop di 30 sec, improvvisa sopra creando strati di dialogo"
                ]
              },
              {
                title: "⚡ Improvvisazione a 3 Note",
                description: "Vincolo estremo per liberare creatività",
                prompt: "Scegli solo 3 note. Crea variazioni per 20 minuti usando solo quelle 3 note. Esplora ritmo, dinamica, timbro.",
                duration: "20 min",
                examples: [
                  "🎵 Esempio 1: Do-Mi-Sol - varia registro, velocità, intensità per 20 minuti",
                  "🔢 Esempio 2: Usa le 3 note in pattern matematici: 1-2-3, 3-2-1, 1-3-2",
                  "🎶 Esempio 3: Microtonalità: esplora spazi tra le 3 note con bend, glissandi"
                ]
              },
              {
                title: "🌊 Composizione Liquida",
                description: "Musica che scorre come acqua, senza forma fissa",
                prompt: "Componi qualcosa che non ha inizio né fine definiti. Può iniziare ovunque, finire ovunque. 30 minuti di flusso.",
                duration: "30 min",
                examples: [
                  "💧 Esempio 1: Drone continuo con micro-variazioni che emergono e scompaiono",
                  "🌀 Esempio 2: Frasi che si sovrappongono senza interruzione, come onde",
                  "🎐 Esempio 3: Improvvisazione circolare che ritorna ma mai identica"
                ]
              },
              {
                title: "🎭 Personaggi Sonori",
                description: "Crea 5 personaggi musicali distinti",
                prompt: "Inventa 5 personaggi (eroe, villain, saggio, folle, bambino). Componi tema di 2 minuti per ognuno.",
                duration: "15 min",
                examples: [
                  "👑 Esempio 1: Eroe = melodia ascendente forte, Villain = cromatismi oscuri",
                  "🧙 Esempio 2: Saggio = note lunghe meditative, Folle = salti caotici",
                  "👶 Esempio 3: Bambino = melodia semplice giocosa con progressione ingenua"
                ]
              },
              {
                title: "🕸️ Suono come Ragnatela",
                description: "Costruisci tessiture sonore complesse",
                prompt: "Crea strati sonori che si intrecciano come fili di ragnatela. Ogni layer aggiunge complessità. 25 minuti.",
                duration: "25 min",
                examples: [
                  "🎹 Esempio 1: Pedale basso + ostinato medio + improvvisazione acuta = 3 layer",
                  "🔄 Esempio 2: Loop di 4 battute, aggiungi layer ogni 5 minuti",
                  "🕷️ Esempio 3: Ogni nota si collega alla precedente formando pattern geometrico"
                ]
              },
              {
                title: "🔥 Musica di Fuoco e Ghiaccio",
                description: "Contrasti estremi in una composizione",
                prompt: "5 minuti di 'fuoco' (intenso, veloce, caotico) + 5 minuti di 'ghiaccio' (statico, lento, cristallino).",
                duration: "10 min",
                examples: [
                  "🔥 Esempio 1: Fuoco = arpeggi veloci fortissimo, Ghiaccio = note lunghe pppp",
                  "❄️ Esempio 2: Passa gradualmente da fuoco a ghiaccio in 2 minuti centrali",
                  "⚡ Esempio 3: Alterna 30sec fuoco/ghiaccio creando tensione ritmica"
                ]
              },
              {
                title: "🧘 Meditazione sul Singolo Suono",
                description: "Concentrazione totale su un'unica nota",
                prompt: "Scegli una nota. Suonala per 20 minuti esplorando ogni micro-sfumatura: attacco, rilascio, risonanza, armoniche.",
                duration: "20 min",
                examples: [
                  "🎹 Esempio 1: Do centrale - suonalo 100 volte, ogni volta diverso",
                  "🔍 Esempio 2: Esplora dinamiche: ppp → fff graduale su singola nota",
                  "🎵 Esempio 3: Stessa nota in ottave diverse, confronta timbri"
                ]
              },
              {
                title: "🌌 Paesaggio Onirico",
                description: "Traduci un sogno in musica",
                prompt: "Ricorda un sogno recente. Crea soundscape di 15 minuti che ne catturi atmosfera, emozioni, stranezza.",
                duration: "15 min",
                examples: [
                  "💭 Esempio 1: Sogno di volo = arpeggi ascendenti, textures aeree",
                  "😰 Esempio 2: Incubo = dissonanze, ritmi irregolari, tensione",
                  "🌈 Esempio 3: Sogno surreale = suoni incongruenti, logica sospesa"
                ]
              },
              {
                title: "⏰ Composizione Cronometrata: 60 Idee",
                description: "Velocità estrema per bypassare autocensura",
                prompt: "30 secondi per idea. Componi 60 micro-frammenti in 30 minuti. Non fermarti, non giudicare.",
                duration: "30 min",
                examples: [
                  "⚡ Esempio 1: Timer 30sec, registra frammento, next - 60 volte",
                  "🎲 Esempio 2: Ogni frammento in tonalità/modo casuale",
                  "📝 Esempio 3: Dopo 60 frammenti, scegline 3 e sviluppali"
                ]
              },
              {
                title: "🎨 Sinestesia: Colore→Suono",
                description: "Traduci colori in musica",
                prompt: "Scegli 5 colori. Assegna carattere musicale a ognuno (rosso=passione, blu=calma). Componi suite di 20 minuti.",
                duration: "20 min",
                examples: [
                  "🔴 Esempio 1: Rosso=fortissimo+cromatismi, Blu=pianissimo+tonale",
                  "🌈 Esempio 2: Crea progressione cromatica parallela a arcobaleno",
                  "🎨 Esempio 3: Dipingi quadro astratto, traducilo nota per nota"
                ]
              },
              {
                title: "🌀 Loop Infinito Evolutivo",
                description: "Pattern che si trasforma gradualmente",
                prompt: "Crea loop di 8 battute. Ogni ripetizione cambia 1 elemento. Continua per 25 minuti fino a trasformazione totale.",
                duration: "25 min",
                examples: [
                  "🔄 Esempio 1: Loop iniziale Do-Mi-Sol, ogni 8 batt aggiungi/rimuovi nota",
                  "🎵 Esempio 2: Pattern ritmico che perde/guadagna 1 suddivisione ogni loop",
                  "📈 Esempio 3: Dinamica che cresce progressivamente: pp → ff in 25 min"
                ]
              },
              {
                title: "🎪 Assurdo Musicale",
                description: "Logica impossibile, surreale",
                prompt: "Componi brano con regole assurde: melodia senza ritmo, ritmo senza altezze, silenzio come protagonista. 15 minuti.",
                duration: "15 min",
                examples: [
                  "🎭 Esempio 1: Melodia dove pause sono più importanti delle note",
                  "🤹 Esempio 2: Brano dove ogni nota è 'sbagliata' ma il risultato funziona",
                  "🎨 Esempio 3: Improvvisazione che viola deliberatamente ogni regola armonica"
                ]
              },
              {
                title: "🔮 Divinazione Sonora",
                description: "Lascia che il caso guidi la composizione",
                prompt: "Lancia dado/moneta per decisioni: nota successiva, dinamica, ritmo. Accetta il risultato. 20 minuti.",
                duration: "20 min",
                examples: [
                  "🎲 Esempio 1: Dado = 1-7 per nota scala, componi seguendo lancio",
                  "🪙 Esempio 2: Moneta: testa=ascendente, croce=discendente",
                  "🃏 Esempio 3: Carte da gioco = parametri musicali random"
                ]
              },
              {
                title: "🌙 Notturno dell'Inconscio",
                description: "Componi in stato semi-sonno",
                prompt: "Prima di dormire o appena sveglio (stato ipnagogico), registra improvvisazione di 10 minuti. Non pensare.",
                duration: "10 min",
                examples: [
                  "😴 Esempio 1: Improvvisazione a letto prima di alzarsi, occhi chiusi",
                  "🌅 Esempio 2: Registra sogno sonoro alle 3am se ti svegli",
                  "💭 Esempio 3: Meditazione→improvvisazione senza interruzione coscienza"
                ]
              },
              {
                title: "⚗️ Alchimia Musicale",
                description: "Trasforma materiale 'povero' in oro",
                prompt: "Prendi scala più banale (Do maggiore), trasformala in qualcosa di magico con timbro, ritmo, dinamica. 15 minuti.",
                duration: "15 min",
                examples: [
                  "🎹 Esempio 1: Do-Re-Mi diventa exotic con micro-ritardi e glissandi",
                  "✨ Esempio 2: Scala maggiore con pedalizzazioni diventa modale",
                  "🔮 Esempio 3: Note semplici, ma articolazioni complesse creano magia"
                ]
              },
              {
                title: "🎯 Caccia al Tesoro Sonoro",
                description: "Cerca suoni nascosti nel tuo ambiente",
                prompt: "20 minuti: cerca 10 suoni insoliti in casa (vetro, acqua, carta). Usali in composizione field recording.",
                duration: "20 min",
                examples: [
                  "🏠 Esempio 1: Registra rubinetto, porta, finestra - crea ritmo",
                  "🔊 Esempio 2: Oggetti quotidiani come percussioni: libri, chiavi, bicchieri",
                  "🎙️ Esempio 3: Layer di suoni casalinghi creano soundscape urbano intimo"
                ]
              },
              {
                title: "🕯️ Rituale di Purificazione Sonora",
                description: "Usa suono per cleansing emotivo",
                prompt: "Crea rituale: accendi candela, suona per 25 minuti con intenzione di rilasciare emozioni negative. Lascia andare.",
                duration: "25 min",
                examples: [
                  "🧘 Esempio 1: Breathing sonoro - inspiro=note ascendenti, espiro=discendenti",
                  "💨 Esempio 2: Ogni nota porta via una preoccupazione, visualizza liberazione",
                  "🌊 Esempio 3: Wave sonore che lavano via tensione accumulata"
                ]
              },
              {
                title: "🎪 Carnevale dell'Assurdo",
                description: "Celebra il nonsense musicale",
                prompt: "15 minuti di musica che fa ridere, sorprende, confonde. Esagera, sovverti, gioca.",
                duration: "15 min",
                examples: [
                  "🤡 Esempio 1: Brano 'serio' interrotto da suoni comici random",
                  "🎠 Esempio 2: Generi che non dovrebbero stare insieme: valzer+metal+jazz",
                  "🎭 Esempio 3: Melodia 'classica' con ritmo totalmente incompatibile"
                ]
              },
              {
                title: "🌑 Eclissi Musicale",
                description: "Momento in cui luce e oscurità si toccano",
                prompt: "Componi transizione da luminoso a oscuro (o viceversa) in 10 minuti. Il momento di passaggio è il climax.",
                duration: "10 min",
                examples: [
                  "☀️ Esempio 1: Maggiore→Minore graduale, il momento di ambiguità è speciale",
                  "🌓 Esempio 2: Da consonante a dissonante con zona grigia centrale",
                  "⚫ Esempio 3: Dinamica: fff luminoso → ppp oscuro, centro = mezzoforte magico"
                ]
              },
              {
                title: "🧬 DNA Musicale Personale",
                description: "Identifica la tua firma sonora unica",
                prompt: "30 minuti: improvvisa liberamente, poi riascolta cercando pattern ricorrenti. Quello è il tuo DNA musicale.",
                duration: "30 min",
                examples: [
                  "🔍 Esempio 1: Registra 30min, trova gli intervalli che usi di più",
                  "📊 Esempio 2: Identifica ritmi ricorrenti - quella è la tua metrica naturale",
                  "🎵 Esempio 3: Note che graviti inconsciamente = tuo 'home base'"
                ]
              },
              {
                title: "⚡ Speed Composition: 5 Brani in 30 Min",
                description: "Quantità estrema per qualità inaspettata",
                prompt: "6 minuti per brano completo (intro-corpo-outro). Fai 5 brani. No editing, no pensare.",
                duration: "30 min",
                examples: [
                  "⏱️ Esempio 1: Timer 6min, componi start-to-finish, salva, next",
                  "🎯 Esempio 2: Ogni brano genere diverso: rock-jazz-ambient-classica-experimental",
                  "🎲 Esempio 3: Estrai random: tonalità, tempo, mood - componi 6min"
                ]
              },
              {
                title: "🌊 Improvvisazione Mareale",
                description: "Segui ritmi naturali del respiro e del mare",
                prompt: "20 minuti: suona seguendo ritmo della respirazione. Inspiro=crescendo, espiro=diminuendo. Come onde.",
                duration: "20 min",
                examples: [
                  "🫁 Esempio 1: Frase melodica lunga quanto un respiro completo",
                  "🌊 Esempio 2: 7 onde/respirazioni crescenti, poi 7 decrescenti",
                  "💨 Esempio 3: Respiro irregolare = musica irregolare, poi stabilizza"
                ]
              },
              {
                title: "🎭 Teatro delle Ombre Sonore",
                description: "Crea narrativa musicale oscura",
                prompt: "15 minuti: componi storia musicale di un personaggio nell'oscurità. Inizio-svolta-rivelazione-fine.",
                duration: "15 min",
                examples: [
                  "👤 Esempio 1: Entrata in foresta oscura, scoperta, fuga - 3 atti musicali",
                  "🌑 Esempio 2: Motivo che si ripete ma si trasforma rivelando significato",
                  "🎬 Esempio 3: Suspense sonora → climax → risoluzione inaspettata"
                ]
              },
              {
                title: "🔊 Dinamiche Estreme",
                description: "Esplora limiti di volume e intensità",
                prompt: "10 minuti: 5min pianississimo (quasi inudibile) + 5min fortississimo (quasi urlato). Contrasto totale.",
                duration: "10 min",
                examples: [
                  "🤫 Esempio 1: pppp sussurrato, concentrazione massima → ffff esplosivo",
                  "📢 Esempio 2: Crescendo graduale da silenzio a saturazione in 10min",
                  "⚡ Esempio 3: Alternanza shock ogni 30sec: ppp/fff/ppp/fff"
                ]
              },
              {
                title: "🌌 Viaggio Astrale Sonoro",
                description: "Musica per stati alterati di coscienza",
                prompt: "25 minuti: crea soundscape che porta in 'altro luogo'. Droni, textures, evoluzioni lente.",
                duration: "25 min",
                examples: [
                  "🛸 Esempio 1: Drone base + overtones che emergono gradualmente",
                  "🌠 Esempio 2: Field recording cosmico: synth pad + delay infinito",
                  "✨ Esempio 3: Meditazione guidata sonora attraverso spazio immaginario"
                ]
              },
              {
                title: "🎲 Composizione Algoritmica Manuale",
                description: "Crea sistema di regole, poi seguilo",
                prompt: "Inventa 5 regole assurde (es: ogni 4 note una pausa, solo intervalli dispari). Componi seguendole per 20 minuti.",
                duration: "20 min",
                examples: [
                  "📐 Esempio 1: Regole matematiche: Fibonacci per ritmo, numeri primi per note",
                  "🎯 Esempio 2: Se suono Do devo subito suonare Fa#, sistema di implicazioni",
                  "🔢 Esempio 3: Ogni frase deve avere 7 note, 5 pause, 3 accenti"
                ]
              },
              {
                title: "🕷️ Texture Viscerali",
                description: "Suoni che evocano sensazioni fisiche",
                prompt: "15 minuti: crea musica che fa sentire texture (ruvido, liscio, appiccicoso, spinoso). Non melodia, ma sensazione tattile.",
                duration: "15 min",
                examples: [
                  "🪨 Esempio 1: Suoni granulari, stridenti = ruvido/abrasivo",
                  "🧈 Esempio 2: Pad sintetici smooth, legato perfetto = liscio/vellutato",
                  "🌵 Esempio 3: Staccati acuti irregolari = spinoso/pungente"
                ]
              },
              {
                title: "🌀 Spirale Musicale Infinita",
                description: "Pattern che sembra salire/scendere all'infinito",
                prompt: "20 minuti: crea illusione sonora tipo 'scala di Shepard' - sembra sempre salire ma non arriva mai da nessuna parte.",
                duration: "20 min",
                examples: [
                  "🔼 Esempio 1: Arpeggio ascendente che ricomincia un'ottava sotto mentre continua",
                  "🎶 Esempio 2: Melodia circolare che sembra progredire ma ritorna sempre",
                  "♾️ Esempio 3: Layer che entrano/escono creando perpetual motion"
                ]
              },
              {
                title: "💀 Danse Macabre Personale",
                description: "Danza con l'idea della mortalità",
                prompt: "Componi danza della morte personalizzata. 25 minuti. Accetta impermanenza, celebra vita attraverso consapevolezza fine.",
                duration: "25 min",
                examples: [
                  "🎭 Esempio 1: Tema vitale gioioso che gradualmente si dissolve in silenzio",
                  "⏳ Esempio 2: Ritmo regolare (heartbeat) che rallenta progressivamente",
                  "🌹 Esempio 3: Melodie di memorie felici che sfumano come ricordi"
                ]
              },
              {
                title: "🎪 Glitch come Estetica",
                description: "Abbraccia errori e imperfezioni",
                prompt: "15 minuti: suona deliberatamente 'sbagliato'. Errori diventano feature. Note sbagliate, ritmi zoppicanti, tutto è benvenuto.",
                duration: "15 min",
                examples: [
                  "🔧 Esempio 1: Improvvisazione dove ogni 'errore' viene ripetuto e sviluppato",
                  "💥 Esempio 2: Ritmo perfetto interrotto da interruzioni casuali che diventano pattern",
                  "🎨 Esempio 3: Melodia 'corretta' deformata progressivamente in glitch art"
                ]
              },
              {
                title: "🌊 Oceano di Overtones",
                description: "Esplora armoniche e risonanze nascoste",
                prompt: "30 minuti: una nota base, esplora tutti gli armonici possibili. Usa risonanza, feedback, amplificazione microtonale.",
                duration: "30 min",
                examples: [
                  "🎹 Esempio 1: Do basso tenuto 30min, melodie emergono dalle sue armoniche",
                  "🔊 Esempio 2: Feedback controllato che rivela overtones nascosti",
                  "🎵 Esempio 3: Corda tenuta, variando pressione/posizione emergono armonici"
                ]
              },
              {
                title: "⏰ Composizione Temporale Inversa",
                description: "Componi dalla fine all'inizio",
                prompt: "20 minuti: decidi finale perfetto. Lavora a ritroso costruendo causa-effetto inverso fino ad arrivare all'inizio.",
                duration: "20 min",
                examples: [
                  "🔙 Esempio 1: Accordo finale risoluto, costruisci tensioni a ritroso",
                  "🎬 Esempio 2: Scena finale movie = fff drammatico, lavora verso intro silenzioso",
                  "⏮️ Esempio 3: Registra finale, poi middle, poi intro - ascolta normale direction"
                ]
              },
              {
                title: "🎨 Colore Emotivo: 7 Sfumature",
                description: "Palette cromatica di stati d'animo",
                prompt: "Componi 7 brevi pezzi (2min ciascuno) = 7 emozioni primarie. Gioia, Tristezza, Rabbia, Paura, Sorpresa, Disgusto, Calma.",
                duration: "15 min",
                examples: [
                  "😊 Esempio 1: Gioia = maggiore allegro, Tristezza = minore lento",
                  "😡 Esempio 2: Rabbia = dissonanze fff, Calma = consonanze ppp",
                  "😨 Esempio 3: Paura = cromatismi irregolari, Sorpresa = cambi armonici shock"
                ]
              },
              {
                title: "🌙 Improvvisazione Lucida (Pre-Sleep)",
                description: "Suona nel momento prima del sonno",
                prompt: "10 minuti: quando sei molto assonnato ma non ancora addormentato, improvvisa. Registra questo stato borderline.",
                duration: "10 min",
                examples: [
                  "😴 Esempio 1: A letto con strumento portatile, suona fino a dormire quasi",
                  "💭 Esempio 2: Note che emergono da pre-sonno hanno qualità onirica",
                  "🌌 Esempio 3: Lasciti guidare da logica del sogno, non da teoria"
                ]
              },
              {
                title: "🔮 Archetipi Junghiani in Musica",
                description: "Tradurre archetipi dell'inconscio collettivo",
                prompt: "25 minuti: componi 5 temi = 5 archetipi (Eroe, Saggio, Trickster, Amante, Creatore). 5min ciascuno.",
                duration: "25 min",
                examples: [
                  "⚔️ Esempio 1: Eroe = tema eroico ascendente, Trickster = melodia imprevedibile",
                  "💘 Esempio 2: Amante = melodia sensuale languida, Saggio = contemplativa",
                  "🎨 Esempio 3: Creatore = theme con variazioni continue, sempre nuovo"
                ]
              },
              {
                title: "🌪️ Caos Controllato",
                description: "Improvvisazione ai limiti del collasso",
                prompt: "15 minuti: suona al limite delle tue capacità tecniche. Quasi caos, quasi controllo. Bilancia sul filo del rasoio.",
                duration: "15 min",
                examples: [
                  "⚡ Esempio 1: Velocità massima possibile senza perdere controllo totale",
                  "🎪 Esempio 2: Poliritmia complessa che quasi ma non del tutto collassa",
                  "🌀 Esempio 3: Improvvisazione dove 30% è intenzionale, 70% è reazione istintiva"
                ]
              },
              {
                title: "🎭 Maschera Sonora",
                description: "Componi come se fossi qualcun altro",
                prompt: "20 minuti: scegli musicista/compositore che ammiri. Componi 'alla sua maniera'. Indossa la maschera musicale.",
                duration: "20 min",
                examples: [
                  "🎹 Esempio 1: Componi come Bach - contrappunto, armonie barocche",
                  "🎸 Esempio 2: Improvvisa come Hendrix - blues psichedelico feedback",
                  "🎵 Esempio 3: Scrivi come Debussy - impressionismo, scale whole-tone"
                ]
              },
              {
                title: "⚗️ Trasmutazione Timbrica",
                description: "Un suono diventa completamente diverso",
                prompt: "15 minuti: inizia con timbro puro (flauto/piano), trasformalo gradualmente in noise/percussione attraverso manipolazione.",
                duration: "15 min",
                examples: [
                  "🎹 Esempio 1: Piano delicato → preparato → percussivo → noise in 15min",
                  "🎺 Esempio 2: Fiato melodico → multiphonics → air sound → whisper",
                  "🎸 Esempio 3: Chitarra tonica → FX chain → irriconoscibile gradual"
                ]
              },
              {
                title: "🌑 Silenzio come Protagonista",
                description: "Componi con le pause",
                prompt: "10 minuti: le pause sono più importanti delle note. Componi dove silenzio è il messaggio, suono è punteggiatura.",
                duration: "10 min",
                examples: [
                  "🤫 Esempio 1: Nota singola ogni 30 secondi, silenzio è spazio meditativo",
                  "⏸️ Esempio 2: Frasi brevi separate da lunghe pause - contemplazione",
                  "🎵 Esempio 3: Cage-inspired: silenzio rivela rumori ambientali"
                ]
              },
              {
                title: "🦋 Metamorfosi Musicale",
                description: "Trasformazione completa di materiale",
                prompt: "30 minuti: prendi melodia semplice (es. Frère Jacques), trasformala completamente mantendone 'essenza'. Finale irriconoscibile.",
                duration: "30 min",
                examples: [
                  "🐛 Esempio 1: Melodia infantile → variazioni progressive → avant-garde",
                  "🦋 Esempio 2: Mantieni solo contorno intervalli, cambia tutto il resto",
                  "✨ Esempio 3: Ogni 3 minuti altera 1 parametro: ritmo, modo, registro, timbro"
                ]
              },
              {
                title: "🎪 Nonsense Logico",
                description: "Regole assurde applicate rigorosamente",
                prompt: "20 minuti: crea sistema logico ma assurdo (es: suono solo su numeri primi del metronomo). Seguilo con rigore.",
                duration: "20 min",
                examples: [
                  "🔢 Esempio 1: Improvvisa solo su battiti primi: 2,3,5,7,11,13,17,19,23...",
                  "📏 Esempio 2: Lunghezza frase = sequenza Fibonacci (1,1,2,3,5,8,13 note)",
                  "🎯 Esempio 3: Ogni nota deve distare almeno tritono dalla precedente"
                ]
              },
              {
                title: "🌊 Flusso di Coscienza Sonoro",
                description: "Stream of consciousness musicale",
                prompt: "15 minuti: suona esattamente ciò che passa per la mente. Zero filtro. Registra flusso grezzo di pensiero musicale.",
                duration: "15 min",
                examples: [
                  "💭 Esempio 1: Ogni pensiero diventa nota, ogni distrazione diventa pausa",
                  "🔄 Esempio 2: Non pianificare prossima nota fino a suonare quella corrente",
                  "🎵 Esempio 3: Lascia mani vagare, cervello spento, istinto acceso"
                ]
              },
              {
                title: "🕯️ Rituale di Congedo",
                description: "Dì addio a qualcosa attraverso musica",
                prompt: "25 minuti: componi rituale per lasciare andare qualcosa (abitudine, persona, sogno). Musica come cerimonia di chiusura.",
                duration: "25 min",
                examples: [
                  "👋 Esempio 1: Tema che rappresenta ciò che lasci, poi lo dissolvi gradualmente",
                  "🌅 Esempio 2: Tre movimenti: ciò che era, il distacco, nuova alba",
                  "🔥 Esempio 3: Crescendo emotivo → rilascio catartico → pace finale"
                ]
              },
              {
                title: "🎭 Doppia Personalità Musicale",
                description: "Due voci che dialogano e confliggono",
                prompt: "20 minuti: componi dialogo tra due aspetti di te (razionale/emotivo, oscuro/luminoso). Usa mano dx/sx o layer.",
                duration: "20 min",
                examples: [
                  "🎹 Esempio 1: Mano dx = melodia ordinata, mano sx = accompagnamento caotico",
                  "🎭 Esempio 2: Track 1 = pensieri, Track 2 = emozioni - sovrapponi",
                  "⚖️ Esempio 3: Registro acuto vs grave, ognuno con sua logica musicale"
                ]
              },
              {
                title: "🌌 Astrazione Progressiva",
                description: "Da concreto a astratto gradualmente",
                prompt: "30 minuti: inizia con melodia riconoscibile, trasformala passo dopo passo in texture astratta totale.",
                duration: "30 min",
                examples: [
                  "🎵 Esempio 1: Melodia tonale → modale → atonale → noise texture",
                  "📐 Esempio 2: Forma chiara → frammentazione → pointillismo → drone",
                  "🌀 Esempio 3: Ogni 5 minuti rimuovi 1 elemento: melodia, armonia, ritmo, altezza"
                ]
              },
              {title:"💝 Melodia della Gentilezza",description:"Componi per portare conforto a qualcuno",prompt:"Pensa a una persona che sta attraversando un momento difficile. Crea un breve brano (3-5 minuti) con l'intenzione di offrirle conforto, speranza o semplicemente farla sentire vista e compresa. Può essere strumentale o con parole.",duration:"25 min",examples:["💌 Invia registrazione come dono sonoro","🎵 Dedica scritta nel titolo del pezzo","🤗 Melodia semplice ma emotivamente sincera"]},
              {title:"🌙 Rituale Sonoro Notturno di Rilascio",description:"Cerimonia musicale per lasciare andare il giorno",prompt:"Prima di dormire, crea rituale di 10 minuti: suona dolcemente mentre visualizzi il rilascio di tensioni, preoccupazioni e pensieri del giorno. Ogni nota è un respiro, ogni frase musicale lascia andare qualcosa. Termina nel silenzio.",duration:"10 min",examples:["🕯️ Luci soffuse, incenso o candele","🎹 Improvvisazione lenta su tonalità calme (La min, Re min)","😴 Ultimo minuto: solo silenzio e respiro"]},
              {title:"⚡ Micro-Composizione Sprint 3 Minuti",description:"Brano completo in soli 3 minuti",prompt:"Timer 3 minuti. Componi pezzo intero dall'inizio alla fine. Accetta imperfezioni. L'obiettivo è catturare un'idea pura senza overthinking. Registra per memoria.",duration:"3 min",examples:["💨 Tema melodico + variazione minima","🎯 Struttura ABA ultra-rapida","⏱️ Stop esatto a 3 minuti, anche se incompleto"]},
              {title:"🌊 Oceano Interiore: Viaggio Sonoro Guidato",description:"Esplorazione profonda di 60 minuti del tuo paesaggio emotivo",prompt:"Sessione estesa di improvvisazione meditativa. Parte 1 (20min): esplora superficie - pensieri quotidiani. Parte 2 (20min): scendi in profondità - emozioni nascoste. Parte 3 (20min): tocca il fondo - silenzio interiore e risalita. Registra tutto. Non giudicare nulla. Lascia che la musica sia testimone del tuo mondo interno.",duration:"60 min",examples:["🎧 Usa cuffie per massima intimità","📝 Diario post-sessione: cosa hai scoperto?","🧘 Ambiente sicuro, nessuna interruzione possibile","💎 Questa è terapia sonora, non performance"]}
            ],
            'blocco-creativo': [
              {
                title: "5-Minute Ugly Improvisation",
                description: "Improvvisa intenzionalmente male per liberarti dal perfezionismo",
                prompt: "Crea un'improvvisazione volutamente brutta. L'obiettivo è sbagliare di proposito.",
                duration: "5 min",
                examples: [
                  "🎹 Esempio 1: Improvvisa usando solo la mano non dominante, senza guardare i tasti",
                  "🌳 Esempio 2: Suona con occhi chiusi seguendo impulsi casuali, lascia che le dita vadano dove vogliono",
                  "👤 Esempio 3: Canta o suona guardando solo fuori dalla finestra, MAI lo strumento"
                ]
              },
              {
                title: "Wrong Instrument Challenge",
                description: "Usa uno strumento 'sbagliato' per il tuo stile abituale",
                prompt: "Se suoni piano, usa solo percussioni. Se sei cantante, usa uno strumento. Esci dalla comfort zone.",
                duration: "20 min",
                examples: [
                  "🎼 Esempio 1: Pianista → Usa oggetti di casa come percussioni per 'comporre' nel ritmo",
                  "🗿 Esempio 2: Strumentista → Crea un brano solo con la voce, beatbox o canto",
                  "📸 Esempio 3: Cantante → Suona uno strumento che non conosci, improvvisa senza tecnica"
                ]
              },
              {
                title: "Public Music Session",
                description: "Fai musica in un luogo pubblico senza nasconderti",
                prompt: "Vai in un bar, parco o piazza. Suona per 30 minuti. Accetta gli sguardi curiosi.",
                duration: "30 min",
                examples: [
                  "☕ Esempio 1: Improvvisa al bar con uno strumento portatile, se chiedono spiega cosa fai",
                  "🌳 Esempio 2: Canta o suona in un parco affollato, busking creativo",
                  "🚉 Esempio 3: Porta strumento in stazione, improvvisa brevi brani, lascia il caso aperto"
                ]
              },
              {
                title: "Collaboration Chaos",
                description: "Inizia un brano e lascia che altri lo 'rovinino'",
                prompt: "Crea una base musicale. Chiedi a 3 persone (anche non musicisti) di aggiungere suoni. Accetta tutto.",
                duration: "45 min",
                examples: [
                  "👥 Esempio 1: Loop di base → Ognuno aggiunge percussioni o rumori random",
                  "✏️ Esempio 2: Melodia iniziale → Altri improvvisano sopra a loro scelta",
                  "🎹 Esempio 3: Progressione armonica → Altri aggiungono suoni trovati o vocalizzi"
                ]
              },
              {
                title: "Speed Creation 30 Seconds",
                description: "Non c'è tempo per giudicare",
                prompt: "Timer 30 secondi. Componi qualcosa di completo. Stop quando suona.",
                duration: "30 sec",
                examples: [
                  "⚡ Esempio 1: Tema espressivo in 30 secondi, solo note essenziali",
                  "🎵 Esempio 2: Improvvisazione ritmica, suona rapidamente senza pensare",
                  "✂️ Esempio 3: Mini-canzone velocissima, melodia e testo istantanei"
                ]
              },
              {
                title: "Childhood Music Recreation",
                description: "Componi come quando avevi 5 anni",
                prompt: "Solo note semplici: scale base, ritmi elementari. Canta stonato senza vergogna. Zero teoria musicale.",
                duration: "15 min",
                examples: [
                  "👨‍👩‍👧 Esempio 1: Componi una canzoncina sulla tua famiglia come farebbe un bambino (semplice, ripetitiva)",
                  "🏠 Esempio 2: Melodia su casa, alberi e nuvole, tutto piano e ingenuo",
                  "🐶 Esempio 3: Canzone sul tuo animale preferito, versione bambino (stonata e buffa)"
                ]
              },
              {
                title: "No Delete Challenge",
                description: "Ogni nota resta, ogni 'errore' diventa parte del brano",
                prompt: "Registra in diretta. Suona qualcosa di complesso. Niente cancellature o editing. Gli errori sono features.",
                duration: "20 min",
                examples: [
                  "🏛️ Esempio 1: Composizione complessa in live recording, se sbagli integra l'errore nella melodia",
                  "👤 Esempio 2: Improvvisazione dal vivo, note 'sbagliate' diventano cromatismi interessanti",
                  "🌆 Esempio 3: Brano complesso, tempi imperfetti creano groove unico"
                ]
              },
              {
                title: "Backwards Process",
                description: "Inverti il tuo processo creativo abituale",
                prompt: "Se inizi con spartito → Inizia improvvisando. Se improvvisi sempre → Scrivi tutto prima.",
                duration: "30 min",
                examples: [
                  "🎵 Esempio 1: Suona note random prima, POI trova struttura e armonia al loro interno",
                  "✏️ Esempio 2: Componi senza pianificare, lascia che il brano emerga istintivamente",
                  "🗿 Esempio 3: Registra suoni caotici senza progetto, scopri la forma mentre ascolti"
                ]
              },
              {
                title: "Anonymous Music Drop",
                description: "Crea e abbandona una registrazione in pubblico, senza firmare",
                prompt: "Lascia una registrazione musicale in un luogo pubblico. Niente nome. Osserva da lontano le reazioni.",
                duration: "1 ora",
                examples: [
                  "🎹 Esempio 1: CD o chiavetta USB con brano originale in una panchina del parco",
                  "📝 Esempio 2: QR code che porta a tuo brano alla fermata dell'autobus con nota 'Ascolta'",
                  "🎵 Esempio 3: Mini-registratore con loop musicale nascosto in una biblioteca pubblica"
                ]
              },
              {
                title: "Criticism to Music",
                description: "Trasforma una critica ricevuta in brano creativo",
                prompt: "Ricorda una critica dura. Creane un brano che la reinterpreta, la sfida, o la celebra ironicamente.",
                duration: "40 min",
                examples: [
                  "💬 Esempio 1: 'Troppo lento' → Brano intenzionalmente lentissimo con un solo momento veloce",
                  "🎵 Esempio 2: 'Non tecnico' → Composizione che usa tecniche 'sbagliate' che funzionano insieme",
                  "📐 Esempio 3: 'Fuori tempo' → Brano che celebra poliritmie impossibili e metri irregolari"
                ]
              },
              {
                title: "Stream of Consciousness Music",
                description: "Suona/canta mentre pensi ad alta voce",
                prompt: "Registra mentre improvvisi. Parla di tutto ciò che ti passa per la mente. Non fermarti né a pensare né a parlare né a suonare.",
                duration: "20 min",
                examples: [
                  "🎤 Esempio 1: Improvvisazione al piano + monologo sulla tua giornata",
                  "🗣️ Esempio 2: Voce e strumento mentre parli dei tuoi dubbi musicali",
                  "💭 Esempio 3: Loop ritmico + narrazione stream-of-consciousness della tua infanzia"
                ]
              },
              {
                title: "Opposite Style Day",
                description: "Fai l'esatto opposto del tuo stile",
                prompt: "Minimalista? Oggi fai barocco. Classico? Oggi totalmente sperimentale. Melodico? Solo percussivo.",
                duration: "1 ora",
                examples: [
                  "🔄 Esempio 1: Improvvisatore → Composizione rigidamente scritta e strutturata",
                  "🎹 Esempio 2: Classico → Brano totalmente atonale e sperimentale",
                  "🌈 Esempio 3: Armonico → Brano solo ritmico con tutte le percussioni possibili"
                ]
              },
              {
                title: "Found Sounds Composition",
                description: "Componi solo con suoni trovati casualmente",
                prompt: "30 minuti per registrare suoni random. 30 minuti per assemblarli in un brano. Nessuno strumento tradizionale.",
                duration: "1 ora",
                examples: [
                  "🗑️ Esempio 1: Composizione da suoni urbani trovati per strada (traffico, passi, porte)",
                  "🍂 Esempio 2: Brano con solo elementi naturali (foglie, rami, pietre, acqua)",
                  "📦 Esempio 3: Pezzo da oggetti di casa (chiavi tintinnanti, bicchieri, cerniere)"
                ]
              },
              {
                title: "Time Limit Escalation",
                description: "Stesso brano in tempi progressivamente più stretti",
                prompt: "Versione 1: 30 min. Versione 2: 10 min. Versione 3: 2 min. Confronta i risultati.",
                duration: "42 min totali",
                examples: [
                  "⏱️ Esempio 1: Auto-ritratto melodico in 3 versioni temporali diverse",
                  "🍎 Esempio 2: Stesso tema, diventa sempre più essenziale",
                  "🏙️ Esempio 3: Soundscape urbano, scopri cosa è davvero essenziale"
                ]
              },
              {
                title: "Blindfold Challenge",
                description: "Suona a occhi chiusi o bendati",
                prompt: "Benda sugli occhi per tutta la durata. Fidati dell'udito e dell'istinto.",
                duration: "15 min",
                examples: [
                  "👁️ Esempio 1: Improvvisazione bendato, lascia che le orecchie e le mani guidino",
                  "🎵 Esempio 2: Suona senza vedere lo strumento, solo sensazioni tattili e sonore",
                  "✏️ Esempio 3: Canta o fischia bendato, senti solo le vibrazioni e il suono"
                ]
              },
              {
                title: "Social Media Live Creation",
                description: "Componi dal vivo in diretta sui social",
                prompt: "Instagram/TikTok Live o registra video. Mostra errori, indecisioni, tutto il processo grezzo.",
                duration: "30 min",
                examples: [
                  "📱 Esempio 1: Time-lapse di una composizione, mostra TUTTI i tentativi falliti",
                  "🎥 Esempio 2: Live improvvisazione con commento in tempo reale dei tuoi dubbi",
                  "📸 Esempio 3: Stories progressive di un brano, anche le note 'sbagliate'"
                ]
              },
              {
                title: "Extreme Constraint Box",
                description: "Regole assurde che limitano drasticamente",
                prompt: "Solo 1 nota, 3 accordi massimo, strumenti assurdi. Creatività nasce da vincoli estremi.",
                duration: "25 min",
                examples: [
                  "📏 Esempio 1: Brano usando SOLO una nota (variando ritmo, dinamica, timbro)",
                  "🎵 Esempio 2: Composizione usando SOLO 3 accordi ripetuti all'infinito",
                  "✂️ Esempio 3: Pezzo con SOLO suoni percussivi, nessuna melodia"
                ]
              },
              {
                title: "Audience Choice Creation",
                description: "Il pubblico decide cosa componi",
                prompt: "Chiedi a 5 persone random: genere, tonalità, tempo. Devi usare TUTTI i suggerimenti.",
                duration: "40 min",
                examples: [
                  "👥 Esempio 1: Sondaggio Instagram per scegliere genere + tonalità + strumento",
                  "🎲 Esempio 2: Dadi con parametri musicali random, tira 3 volte, incorpora tutto",
                  "📱 Esempio 3: Chiedi ai passanti cosa dovrebbe evocare il brano, prendi primi 3 suggerimenti"
                ]
              },
              {
                title: "Destruction as Creation",
                description: "Crea distruggendo brani precedenti",
                prompt: "Prendi 3 vecchie composizioni 'fallite'. Frammentale, riordinale, riassemblale in qualcosa di nuovo.",
                duration: "35 min",
                examples: [
                  "✂️ Esempio 1: Mashup da brani bocciati, sovrapponi frammenti melodici",
                  "🔥 Esempio 2: Suona sopra a una vecchia registrazione, lascia emergere strati",
                  "🎹 Esempio 3: Nuova composizione assemblando battute sparse di brani precedenti"
                ]
              },
              {
                title: "Replica Impossibile",
                description: "Prova a rifare esattamente lo stesso brano 5 volte",
                prompt: "Improvvisa qualcosa. Ora rifallo identico altre 4 volte. Osserva come ogni tentativo è diverso.",
                duration: "50 min",
                examples: [
                  "🔁 Esempio 1: Stessa improvvisazione 5 volte, nota le variazioni involontarie",
                  "🎵 Esempio 2: Stesso tema, diverge sempre più a ogni ripetizione",
                  "✏️ Esempio 3: Stessa melodia rapida, celebra le differenze ritmiche e dinamiche"
                ]
              },
              {title:"🎲 100 Idee Sprint",description:"Genera masse di materiale grezzo",prompt:"30sec per idea musicale. Registra 100 frammenti in 50 minuti. Zero giudizio.",duration:"50 min",examples:["⚡ Timer 30sec, suona, salva, next","🎯 Mix di generi random ogni volta","📦 Archivio grezzo da raffinare dopo"]},
              {title:"🔄 Loop Ipnotico",description:"Pattern ripetitivo fino a trance",prompt:"Loop 4 battute, ripeti 100 volte senza fermarti. Entra in stato meditativo.",duration:"15 min",examples:["🌀 Ostinato semplice ripetuto","🧘 Mente si svuota, mani continuano","✨ Piccole variazioni emergono naturalmente"]},
              {title:"⚡ Assolo Continuo 10min",description:"Non fermarti mai",prompt:"Improvvisa 10 minuti senza pause. Il suono non deve mai interrompersi.",duration:"10 min",examples:["🎸 Usa pedale/drone costante","🔊 Respiri diventano parte del suono","🌊 Flusso continuo, no silenzi"]},
              {title:"🎯 Limite 2 Accordi",description:"Creatività in vincolo estremo",prompt:"Componi usando solo 2 accordi. Varia tutto il resto: ritmo, melodia, timbro.",duration:"20 min",examples:["🎹 Do-Sol, crea 5 brani diversi","🔢 Poliritmia sopra progressione semplice","🎨 Texture diversa ogni volta"]},
              {title:"🌪️ Caos e Ordine",description:"Alterna estremi opposti",prompt:"3min caos totale → 3min ordine perfetto → 3min mix. Contrasti netti.",duration:"10 min",examples:["💥 Caos=cluster random ff","📐 Ordine=scala perfetta ppp","⚖️ Mix=equilibrio tensione"]},
              {title:"📸 Snapshot Sonori",description:"Fotografie musicali istantanee",prompt:"1 minuto di musica = 1 'foto sonora'. Fai 15 snapshot di momenti/emozioni.",duration:"15 min",examples:["📷 Mattina, pranzo, sera=3 snapshot","😊 Ogni emozione=1 foto sonora","🎬 Scene film immaginario"]},
              {title:"🎭 3 Personalità Musicali",description:"Tre 'voci' distinte in dialogo",prompt:"Crea 3 personaggi musicali. Fai dialogare per 20 minuti.",duration:"20 min",examples:["👑 Protagonista, antagonista, narratore","🎹 Registro acuto, medio, grave","⚔️ Conflitto e risoluzione tra voci"]},
              {title:"🔥 Burn After Playing",description:"Crea sapendo che cancellerai",prompt:"Componi 15min sapendo che cancellerai tutto. Libertà totale dal giudizio.",duration:"15 min",examples:["🗑️ Registra, poi DELETE immediato","💭 Sperimenta senza paura","🎨 Arte effimera, processo conta"]},
              {title:"⏱️ Speed Metal Acoustic",description:"Generi incompatibili mescolati",prompt:"Prendi 2 generi opposti, fondili. Es: metal+classica, jazz+folk.",duration:"15 min",examples:["🎸 Riff metal su chitarra classica","🎺 Solo jazz su base country","🎹 Techno suonato al piano"]},
              {title:"🌈 Scala Inventata",description:"Crea il tuo sistema tonale",prompt:"Inventa scala personale (non standard). Componi usando solo quella.",duration:"20 min",examples:["🎵 Scala con intervalli casuali","🔢 Sistema a 5 note custom","🎹 Microtonalità personalizzata"]},
              {title:"💪 Esercizio Tecnico→Arte",description:"Trasforma studio in musica",prompt:"Prendi esercizio tecnico noioso. Trasformalo in brano artistico.",duration:"15 min",examples:["🎹 Scala=melodia con ritmo","🎸 Arpeggio=composizione ambient","🎺 Pattern=tema jazz"]},
              {title:"🎲 Dice Composition",description:"Dado decide tutto",prompt:"Lancia dado per ogni scelta: nota, durata, dinamica. Accetta risultato.",duration:"20 min",examples:["🎯 1-7=nota scala maggiore","⏱️ 1-6=durata nota","📢 1-3=ppp, 4-6=fff"]},
              {title:"📱 Interruzioni Musicali",description:"Abbraccia distrazioni",prompt:"Ogni distrazione reale diventa parte della musica. Telefono, rumore, pensiero.",duration:"15 min",examples:["📞 Squillo telefono→ritmo","🚗 Auto fuori→pedale basso","💭 Pensiero casuale→melodia"]},
              {title:"🎨 Dripping Sonoro",description:"Action painting musicale",prompt:"Improvvisa come Pollock dipingeva: gesti istintivi, splatter sonori, energia pura.",duration:"10 min",examples:["💥 Cluster random sul piano","🎸 Slide caotici chitarra","🥁 Percussioni gestuali violente"]},
              {title:"🔁 Versioning Estremo",description:"Stessa idea, 10 versioni",prompt:"Prendi melodia semplice. Crea 10 versioni radicalmente diverse in 20min.",duration:"20 min",examples:["🎵 V1=lenta, V2=veloce, V3=jazz...","🎭 Ogni versione=mood diverso","🌍 Ogni versione=cultura musicale diversa"]},
              {title:"⚡ 1-Minute Masterpieces",description:"Micro-composizioni perfette",prompt:"Componi 20 brani di 1 minuto. Ognuno deve essere completo: intro-corpo-fine.",duration:"25 min",examples:["⏱️ 15sec setup, 45sec esecuzione","🎯 Ogni brano=idea unica","💎 Qualità>quantità in 60 secondi"]},
              {title:"🌙 Stream Notturno",description:"Improvvisa fino ad addormentarti",prompt:"Suona a letto finché non ti addormenti. Registra tutto. Momento magico pre-sonno.",duration:"Variable",examples:["😴 Strumento portatile in letto","💭 Logica onirica graduale","🎵 Ultime note prima del sogno"]},
              {title:"🎪 Musical Pranks",description:"Sorprese e humor",prompt:"Componi qualcosa che fa ridere, sorprende, confonde. Divertimento è liberatorio.",duration:"10 min",examples:["🤡 Melodia seria→honk comico","🎭 Cambio genere ogni 10sec","😄 Citazioni assurde mescolate"]},
              {title:"🔊 Feedback Loop Art",description:"Usa feedback controllato",prompt:"Crea composizione usando feedback come strumento. Controllo caos sonoro.",duration:"15 min",examples:["🎸 Chitarra→amp→feedback orchestrato","🎙️ Microfono loop→layer","⚡ Larsen controllato=melodia"]},
              {title:"📐 Geometria Musicale",description:"Forme visive→forme sonore",prompt:"Disegna forma geometrica. Traducila in musica: cerchio=loop, triangolo=crescendo.",duration:"15 min",examples:["⭕ Cerchio=pattern circolare","△ Triangolo=intensità crescente","▢ Quadrato=struttura rigida 4/4"]},
              {title:"🎯 Target Practice",description:"Obiettivo impossibile",prompt:"Componi qualcosa tecnicamente oltre le tue capacità. Fallimento è apprendimento.",duration:"20 min",examples:["🔥 Velocità impensabile","🎹 Stretch impossibile accordi","🎺 Note alte fuori range"]},
              {title:"💥 Destruktur",description:"Decostruisci tutto",prompt:"Prendi brano famoso. Decostruiscilo fino a renderlo irriconoscibile.",duration:"15 min",examples:["🎵 Beethoven→noise industrial","🎹 Pop song→avant-garde","🎸 Classic→granular synthesis"]},
              {title:"🌊 Tide Composition",description:"Musica segue ritmi naturali",prompt:"Componi seguendo cicli naturali: respiro, battito, onde. Sincronizza.",duration:"20 min",examples:["🫀 Battito=tempo base variabile","🌊 Onde=dinamica ciclica","🫁 Respiro=fraseggio naturale"]},
              {title:"🎭 Emotion Roulette",description:"Emozioni casuali rapide",prompt:"Ogni 2 minuti cambia emozione radicalmente. Rabbia→gioia→tristezza→paura.",duration:"10 min",examples:["😡 Rabbia→😊 Gioia immediata","💔 Tristezza→😨 Paura subita","🎭 Contrasti emotivi estremi"]},
              {title:"🔮 Future Archaeology",description:"Musica dal futuro immaginario",prompt:"Componi come se fosse l'anno 3000. Come suona la musica futura?",duration:"20 min",examples:["🚀 Strumenti inesistenti immaginati","🌌 Ritmi non-terrestri","✨ Timbri alieni sintetici"]},
              {title:"📻 Radio Scanning",description:"Cambia stazione continuamente",prompt:"Ogni 30sec cambia genere/stile come zapping radio. 10 generi in 5 minuti.",duration:"5 min",examples:["📻 Jazz→Rock→Classical→Techno","🔄 Transizioni brusche senza preparazione","🎭 Schizofrenia stilistica abbracciata"]},
              {title:"🎨 Monocromatico Musicale",description:"Un solo timbro, massima varietà",prompt:"Usa solo 1 strumento/sound. Crea varietà massima con quello.",duration:"15 min",examples:["🎹 Solo piano: prep, armonici, cluster","🎸 Solo chitarra: tapping, slide, percussivo","🎺 Solo voce: beatbox, melodia, noise"]},
              {title:"⏰ Reverse Engineering",description:"Componi dal finale all'intro",prompt:"Decide come deve finire. Lavora a ritroso fino all'inizio.",duration:"20 min",examples:["🔙 Climax finale→build a ritroso","🎬 Fine film→flashback all'inizio","⏮️ Registra sezioni inverse poi flip"]},
              {title:"🌪️ Chaos Seeds",description:"Un elemento caotico in ordine",prompt:"Composizione ordinata con 1 elemento totalmente random che disturba.",duration:"15 min",examples:["📐 Melodia perfetta+noise burst random","🎹 Armonia classica+cluster dissonante","⏱️ Ritmo regolare+interruzione caotica"]},
              {title:"💎 Minimal Materials",description:"Massimo risultato, minimo input",prompt:"Usa meno materiale possibile: 1 intervallo, 1 ritmo. Massima espressività.",duration:"20 min",examples:["🎵 Solo intervallo quinta, varia tutto altro","🥁 Solo croma, cambia accenti dinamiche","🔊 1 suono, 1000 modi di suonarlo"]},
              {title:"🤝 Compositore Compassionevole",description:"Crea per supportare te stesso",prompt:"Componi un brano che il 'te di domani' vorrebbe sentire quando sarà stanco o scoraggiato. Offri a te stesso sostegno attraverso la musica. 15-20 minuti di pura gentilezza sonora.",duration:"30 min",examples:["💚 Melodia consolatoria per momenti difficili","🌅 Progressioni che danno speranza","🫂 Immaginati che ascolti questo domani, cosa vorresti sentire?"]},
              {title:"⏱️ 7-Second Loops Madness",description:"Micro-loop ossessivi",prompt:"Crea loop di esattamente 7 secondi. Ripetilo 20 volte. Osserva come diventa ipnotico. Poi creane altri 4 diversi. Registra tutto.",duration:"25 min",examples:["🔁 7 sec pattern ripetuto fino a trance","🎧 5 loop differenti da sovrapporre","🌀 Lunghezza dispari crea fase interessante"]},
              {title:"🎭 Alter-Ego Musicale",description:"Componi come se fossi qualcun altro",prompt:"Inventa un personaggio musicista completo (nome, storia, stile). Componi esattamente come farebbe lui/lei, non tu. Entra nel personaggio totalmente.",duration:"40 min",examples:["👤 Chitarrista blues 70enne del Mississippi","🎹 Produttrice elettronica berlinese 25enne","🎺 Jazzista giapponese sperimentale"]},
              {title:"🔥 Burn After Creating",description:"Crea qualcosa che non salverai mai",prompt:"Improvvisa/componi 10 minuti. NON registrare. Lascia che esista solo nel momento. Pratica il non-attaccamento. L'arte effimera è liberatoria.",duration:"10 min",examples:["🕊️ Lascia andare il controllo","⏳ Musica come sabbia nel vento","💫 Bellezza nell'impermanenza"]},
              {title:"🌈 Colori Come Compositori",description:"Sinestesia guidata",prompt:"Scegli 5 colori. Ogni colore diventa sezione musicale. Rosso = forte e aggressivo, Blu = calmo fluido, Giallo = brillante acuto, Verde = naturale organico, Viola = misterioso profondo. Componi suite cromatica.",duration:"35 min",examples:["🎨 Ogni colore = 3-4 minuti","🖌️ Transizioni graduali o brusche?","🌈 Finale: tutti i colori insieme"]},
              {title:"💪 Confidence Anthem Personale",description:"Inno per la tua forza interiore",prompt:"Componi brano che celebra la tua resilienza. Pensa a ostacoli che hai superato. Crea anthem potente che onora il tuo coraggio. Strumentale o con parole.",duration:"30 min",examples:["⚡ Tempo energico, ritmo deciso","🎺 Melodia ascendente, trionfante","👑 'Io ce la posso fare' in musica"]},
              {title:"🎲 Improvvisazione con Vincoli Dadaisti",description:"Regole assurde limitano creativamente",prompt:"Tira dadi per decidere regole assurde: 'Solo note dispari della scala', 'Mai usare nota ripetuta', 'Cambia dinamica ogni 3 secondi'. Applica 3 regole random simultanee.",duration:"15 min",examples:["🎯 Vincoli forzano soluzioni creative","🔀 Randomness = alleato contro blocco","📜 Scrivi regole prima, poi improvvisa"]},
              {title:"🌊 Flow State Musicale Esteso",description:"Immersione totale di 90 minuti",prompt:"Sessione maratona senza interruzioni. Prepara strumento, acqua, ambiente confortevole. 90 minuti di esplorazione musicale continua. Permetti pause silenziose ma resta nella pratica. Questo è allenamento di resistenza creativa. Documentario sul tuo flusso creativo.",duration:"90 min",examples:["🎧 No telefono, no distrazioni","💧 Idratazione preparata","📝 Note post-sessione: dove sei arrivato?","🌟 Breakthrough spesso dopo 60min"]},
              {title:"🎁 Regalo Sonoro Anonimo",description:"Componi per uno sconosciuto",prompt:"Crea breve pezzo (5min) come regalo per una persona che non conosci ma immagini: magari un infermiere stanco, un anziano solo, un bambino curioso. Musica come atto di gentilezza universale.",duration:"20 min",examples:["🫂 Empatia verso umanità sconosciuta","💝 Nessuna aspettativa di riconoscimento","🌍 Contributo al bene collettivo"]},
              {title:"🌱 Micro-Rituale di Inizio Sessione",description:"Prepara corpo e mente in 5 minuti",prompt:"Prima di ogni sessione creativa: 2 min stretching dolce, 2 min respirazione consapevole, 1 min intenzione ('Oggi esploro senza giudicare'). Segnale al cervello: 'Ora creiamo'.",duration:"5 min",examples:["🧘 Crea confine tra vita quotidiana e spazio creativo","🎯 Intenzione positiva invece di aspettativa","🌟 Ripeti sempre: diventa trigger di flow"]}
            ],
            'mancanza-ispirazione': [
              {
                title: "Random Music Prompts Generator",
                description: "Tre parole casuali diventano un concept musicale",
                prompt: "Genera 3 parole completamente random. Crea un brano che le include tutte.",
                duration: "15 min",
                examples: [
                  "🎲 Esempio 1: 'Malinconia + Geometria + Blu' → Brano geometrico freddo con mood triste",
                  "✨ Esempio 2: 'Caos + Natura + Rumori riciclati' → Composizione organica caotica",
                  "🌙 Esempio 3: 'Memoria + Texture + Monocromo' → Pezzo timbrico sui ricordi"
                ]
              },
              {
                title: "Music History Mashup",
                description: "Combina due periodi musicali opposti",
                prompt: "Barocco + Hip-Hop, o Impressionismo + Metal. Crea l'impossibile fusione.",
                duration: "45 min",
                examples: [
                  "🏛️ Esempio 1: Fuga di Bach con beat hip-hop e scratching",
                  "🎵 Esempio 2: Melodia impressionista di Debussy con distorsioni metal",
                  "🗿 Esempio 3: Corale rinascimentale arrangiato con sintetizzatori elettronici"
                ]
              },
              {
                title: "Environment Inspiration Hunt",
                description: "Trova ispirazione nei suoni più banali",
                prompt: "Registra 10 suoni ignorati nella tua stanza. Usa quei pattern/ritmi/timbri per un brano.",
                duration: "30 min",
                examples: [
                  "🔍 Esempio 1: Suono del riscaldamento → Drone base con stessa frequenza",
                  "💡 Esempio 2: Ritmo della lavatrice → Pattern ritmico per una composizione",
                  "📚 Esempio 3: Tintinnio di oggetti → Melodia percussiva per un brano"
                ]
              },
              {
                title: "Visual to Music",
                description: "Traduci un'immagine in musica",
                prompt: "Scegli un'opera d'arte. Osservala 3 volte. Componi cosa 'senti' mentre guardi.",
                duration: "25 min",
                examples: [
                  "🎵 Esempio 1: Kandinsky → Melodie astratte e improvvisate, ritmo irregolare",
                  "🎸 Esempio 2: Pollock → Composizione caotica con dinamiche aggressive",
                  "🎻 Esempio 3: Mondrian → Strutture geometriche e armonie bilanciate"
                ]
              },
              {
                title: "Opposite Thinking Exercise",
                description: "Capovolgi completamente la tua idea iniziale",
                prompt: "Pensa a un brano che vuoi comporre. Ora fai l'ESATTO OPPOSTO di ogni scelta che avresti fatto.",
                duration: "20 min",
                examples: [
                  "↔️ Esempio 1: Volevi brano breve? Fai suite di 10 minuti",
                  "🔄 Esempio 2: Volevi mood serio? Fallo ironico e giocoso",
                  "⚡ Esempio 3: Volevi composizione elaborata? Completala in 5 minuti"
                ]
              },
              {
                title: "Constraint Creativity Box",
                description: "Limiti estremi forzano soluzioni creative",
                prompt: "Scegli 3 limiti assurdi: solo 2 note, solo ritmi in terzine, solo suoni registrati, etc.",
                duration: "30 min",
                examples: [
                  "📐 Esempio 1: Solo Do e Sol + solo ritmi binari → Minimalismo ipnotico",
                  "♻️ Esempio 2: Solo suoni di carta + solo intervalli di quinta",
                  "✂️ Esempio 3: Solo voce umana + nessuna parola comprensibile"
                ]
              },
              {
                title: "Dream Journal Music",
                description: "Trasforma sogni recenti in composizioni",
                prompt: "Ricorda un sogno degli ultimi giorni. Ricrealo musicalmente, anche se assurdo o frammentato.",
                duration: "35 min",
                examples: [
                  "💤 Esempio 1: Sogno surreale → Suite di frammenti disconnessi ma emotivamente coerenti",
                  "🌙 Esempio 2: Incubo → Brano oscuro che cattura l'atmosfera disturbante",
                  "✨ Esempio 3: Sogno lucido → Composizione iper-colorata e impossibile armonicamente"
                ]
              },
              {
                title: "Childhood Nostalgia Mining",
                description: "Torna a cosa ti affascinava da bambino",
                prompt: "3 cose che adoravi a 8 anni. Incorporale in una composizione adulta e matura.",
                duration: "40 min",
                examples: [
                  "🦖 Esempio 1: Amavi dinosauri → Suite musicale su estinzione e fossili",
                  "🚀 Esempio 2: Amavi spazio → Composizione ambient su esplorazione e solitudine",
                  "🎮 Esempio 3: Amavi videogiochi → Brano chiptune riarrangiato su realtà virtuale"
                ]
              },
              {
                title: "Cultural Fusion Project",
                description: "Mescola elementi di culture musicali diverse",
                prompt: "Scegli 2 culture lontane. Unisci scale, ritmi, strumenti in un brano ibrido.",
                duration: "50 min",
                examples: [
                  "🗾 Esempio 1: Pentatonica giapponese + Armonie jazz europee",
                  "🌍 Esempio 2: Percussioni tribali africane + Minimalismo scandinavo",
                  "🎹 Esempio 3: Raga indiano + Ritmi latinoamericani"
                ]
              },
              {
                title: "Synesthesia Experiment",
                description: "Sonorizza un senso con un altro",
                prompt: "Che suono ha il colore rosso? Che melodia ha il sapore del limone? Che armonia ha il lunedì?",
                duration: "20 min",
                examples: [
                  "👃 Esempio 1: Componi l'odore del caffè mattutino in musica",
                  "👂 Esempio 2: Traduci in note un quadro colorato",
                  "👅 Esempio 3: Brano che rappresenta il sapore del limone (acido, pungente)"
                ]
              },
              {
                title: "Time Traveler Musician",
                description: "Come sarebbe la tua musica in un'altra epoca?",
                prompt: "Immagina il tuo stile nel 1720, o nel 2120. Componi con strumenti/tecniche di quell'epoca.",
                duration: "45 min",
                examples: [
                  "⏰ Esempio 1: Il tuo stile ma con strumenti barocchi (clavicembalo, liuto)",
                  "🚀 Esempio 2: Il tuo tema ma in estetica cyberpunk futuristica (synth modulari)",
                  "📜 Esempio 3: La tua melodia ma come canto gregoriano medievale"
                ]
              },
              {
                title: "Emotion Sound Mapping",
                description: "Palette sonora emotiva diventa concept",
                prompt: "Scegli un'emozione complessa. Crea palette di 5 timbri che la rappresenta. Brano basato solo su quella palette.",
                duration: "30 min",
                examples: [
                  "😌 Esempio 1: 'Nostalgia' → Pianoforte caldo, archi velati, chitarra lontana",
                  "😰 Esempio 2: 'Ansia' → Synth acuto, percussioni irregolari, drone dissonante",
                  "🥰 Esempio 3: 'Tenerezza' → Voce sussurrata, arpa delicata, pad morbido"
                ]
              },
              {
                title: "Fictional Collaboration",
                description: "Lavora 'con' un musicista che ammiri",
                prompt: "Se collaborassi con Miles Davis / Björk / Radiohead, cosa creereste? Inizia tu la loro metà.",
                duration: "40 min",
                examples: [
                  "🎵 Esempio 1: Metà brano nello stile di Bach, metà nel tuo",
                  "✍️ Esempio 2: Inizia come Coltrane jazz, finisci con il tuo approccio",
                  "🎶 Esempio 3: Composizione che fonde Debussy e la tua estetica"
                ]
              },
              {
                title: "Problem Solving Music",
                description: "Risolvi un problema reale con creatività musicale",
                prompt: "Problema quotidiano (traffico, spreco, solitudine). Crea brano che lo esplora e propone soluzioni.",
                duration: "35 min",
                examples: [
                  "🚗 Esempio 1: Traffico → Composizione caotica che evolve in armonia",
                  "🌱 Esempio 2: Spreco → Brano con solo suoni di oggetti riciclati",
                  "💔 Esempio 3: Isolamento → Pezzo partecipativo che invita al canto collettivo"
                ]
              },
              {
                title: "ABC Rapid Ideas",
                description: "Un'idea musicale per ogni lettera dell'alfabeto",
                prompt: "A = Ambient, B = Blues come base, etc. Fino a Z. Lista completa in 15 minuti.",
                duration: "15 min",
                examples: [
                  "📝 Esempio 1: Mini-temi melodici per ogni lettera, sviluppi 3 favoriti",
                  "💡 Esempio 2: Solo titoli di brani, poi scegli quale comporre",
                  "🎵 Esempio 3: Tonalità diversa per ogni lettera (A=La, B=Si♭, etc.)"
                ]
              },
              {
                title: "Scale Extremes",
                description: "Stesso brano, durate estreme",
                prompt: "Versione 1: 10 secondi. Versione 2: 10 minuti. Confronta come cambia l'essenza.",
                duration: "1 ora",
                examples: [
                  "🔬 Esempio 1: Tema concentrato in 10 sec vs sviluppo orchestrale di 10 min",
                  "📏 Esempio 2: Jingle brevissimo vs suite estesa",
                  "🎵 Esempio 3: Haiku sonoro vs sinfonia completa"
                ]
              },
              {
                title: "Remix Your Favorite Piece",
                description: "Reinterpreta un capolavoro musicale nel tuo stile",
                prompt: "Brano famoso che ami. Ricrealo completamente nel tuo linguaggio musicale.",
                duration: "50 min",
                examples: [
                  "🎶 Esempio 1: Beethoven 5a sinfonia in stile trap/hip-hop",
                  "👩 Esempio 2: 'Fur Elise' in versione ambient sperimentale",
                  "🍎 Esempio 3: Aria barocca in versione elettronica/EDM"
                ]
              },
              {
                title: "Sensory Deprivation Creation",
                description: "Rimuovi un senso per amplificarne altri",
                prompt: "Componi senza vedere lo strumento, o senza udire (usa solo vibrazione), o senza toccare.",
                duration: "25 min",
                examples: [
                  "🙈 Esempio 1: Improvvisa a occhi chiusi, solo tatto e orecchio guidano",
                  "🙉 Esempio 2: Componi con tappi o cuffie isolanti, senti solo vibrazioni",
                  "🎵 Esempio 3: Scrivi spartito senza suonare, sorpresa quando lo esegui"
                ]
              },
              {title:"🎯 Micro-Genere Invenzione",description:"Crea un sottogenere musicale tutto tuo",prompt:"Inventa un micro-genere con nome assurdo. Descrivi le sue regole, poi componi il primo pezzo del genere.",duration:"30 min",examples:["🔮 Esempio: 'Post-Gregorian Glitch' con regole precise","🌊 Manifesto del genere + demo di 3 minuti","📜 Documentazione completa + traccia esempio"]},
              {title:"🌈 Accordo Impossibile",description:"Suono che non dovrebbe funzionare ma funziona",prompt:"Combinazione di note apparentemente sbagliate. Costruisci brano intorno a quell'accordo 'brutto'.",duration:"20 min",examples:["😱 Cluster dissonante come fondazione","🎨 Accordo alterato estremo come home chord","⚡ Combinazione non-convenzionale ripetuta fino a diventare familiare"]},
              {title:"📻 Radio Immaginaria",description:"Crea un programma radio musicale fittizio",prompt:"Tema del programma radio, playlist di 5 brani originali da 2-3 minuti ciascuno.",duration:"1 ora",examples:["🎙️ 'Radio Notturna' con 5 brani ambient","🌍 'World Music Fusion Show' con 5 fusioni culturali","🚀 'Suoni dal Futuro' con 5 pezzi sperimentali"]},
              {title:"🎭 Personaggio Sonoro",description:"Componi come se fossi un'altra persona",prompt:"Inventa musicista fittizio con biografia. Componi nel suo stile, non nel tuo.",duration:"35 min",examples:["👤 Chitarrista folk islandese del 1800","🎹 Pianista jazz marziano del 2200","🥁 Percussionista tribale futurista"]},
              {title:"🔢 Matematica Musicale",description:"Fibonacci, numeri primi, frattali applicati",prompt:"Sequenza matematica governa melodia, ritmo o struttura. Es: Fibonacci per lunghezze di sezioni.",duration:"40 min",examples:["📐 Fibonacci: 1-1-2-3-5-8 battute per sezione","🔢 Numeri primi: note suonano solo su battiti primi","🌀 Frattale: pattern si ripete a scale diverse"]},
              {title:"🎬 Colonna Sonora Vita",description:"Soundtrack per momento quotidiano banale",prompt:"Scegli momento noioso: lavare piatti, aspettare bus. Componi colonna sonora epica.",duration:"25 min",examples:["🍽️ Lavare piatti come scena d'azione","🚌 Attesa bus come thriller psicologico","☕ Caffè mattutino come rivelazione mistica"]},
              {title:"🌍 Field Recording Opera",description:"Solo suoni ambientali, zero strumenti",prompt:"Registra 20 suoni esterni in 15 min. Componi brano solo con quelli, no strumenti tradizionali.",duration:"40 min",examples:["🚗 Traffico + vento + voci lontane = Drone urbano","🌳 Natura + passi + pioggia = Ambient organico","🏗️ Cantiere + macchinari = Composizione industriale"]},
              {title:"⏱️ 60 Secondi Capolavoro",description:"Micropezzo perfetto in un minuto",prompt:"Brano completo (intro, sviluppo, finale) in esattamente 60 secondi. Conta ogni secondo.",duration:"15 min",examples:["⚡ Mini-sinfonia condensata","🎵 Canzone completa ultra-compressa","🔊 Viaggio emotivo rapido ma intenso"]},
              {title:"🎨 Texture Palette",description:"Solo timbri, zero melodia o ritmo chiaro",prompt:"Brano basato solo su texture sonore. Nessuna melodia riconoscibile, solo atmosfere timbriche.",duration:"30 min",examples:["🌫️ Layering di pad e drone","🎻 Tecniche estese sugli archi","🔊 Processing estremo di suoni semplici"]},
              {title:"🔄 Versioni Parallele",description:"Stesso tema, 5 arrangiamenti diversi",prompt:"Melodia base di 8 battute. Crea 5 versioni radicalmente diverse (acustica, elettronica, orchestrale, etc).",duration:"50 min",examples:["🎸 Versione 1: Solo chitarra classica","🎹 Versione 2: Synth pad ambientale","🥁 Versione 3: Solo percussioni","🎻 Versione 4: Quartetto d'archi","🔊 Versione 5: Glitch elettronico"]},
              {title:"🌙 Componi di Notte",description:"Esplora creatività in orari insoliti",prompt:"Svegliati alle 3 AM. Componi senza pensare troppo, cattura quello stato mentale unico.",duration:"20 min",examples:["😴 Sogno semi-lucido diventa brano","🌃 Atmosfera notturna surreale","✨ Stream of consciousness musicale"]},
              {title:"📖 Storia in 3 Movimenti",description:"Narrazione musicale con inizio, centro, fine",prompt:"Racconta una storia in 3 movimenti distinti. Può essere autobiografica, fantasy, o astratta.",duration:"45 min",examples:["📚 Movimento 1: Infanzia innocente","⚔️ Movimento 2: Conflitto e crescita","🌅 Movimento 3: Risoluzione e pace"]},
              {title:"🎲 Dadi Compositivi",description:"Decisioni affidate al caso",prompt:"Tira dadi per: tonalità, tempo, strumenti, durata. Componi con quelle limitazioni.",duration:"30 min",examples:["🎯 Dado 1: Tonalità (1=Do, 2=Re, etc)","⏱️ Dado 2: BPM (×20)","🎸 Dado 3: Strumento principale"]},
              {title:"🔊 Dynamics Extremes",description:"Solo pianissimo e fortissimo, nulla in mezzo",prompt:"Brano che alterna solo pp e ff. Nessuna dinamica intermedia. Contrasti estremi.",duration:"20 min",examples:["🌊 Sussurro vs urlo continuo","🎵 Delicatezza estrema vs potenza massima","⚡ Tensione costruita sui contrasti"]},
              {title:"🎼 Spartito Grafico",description:"Notazione visuale non convenzionale",prompt:"Disegna partiture grafiche (linee, forme, colori). Poi interpretale in musica.",duration:"35 min",examples:["🎨 Scarabocchi colorati = improvvisazione libera","📐 Geometrie precise = struttura rigorosa","🌊 Onde fluide = melodie organiche"]},
              {title:"🌍 Brano Collaborativo Immaginario",description:"Ogni strumento un 'collaboratore' diverso",prompt:"Ogni traccia come se suonasse un musicista diverso con personalità propria.",duration:"40 min",examples:["🎸 Chitarrista aggressivo vs Pianista contemplativo","🥁 Batterista caotico vs Bassista minimalista","🎻 Violinista romantico vs Synth freddo digitale"]},
              {title:"📱 Lo-Fi Intentional",description:"Qualità bassa come scelta estetica",prompt:"Registra volutamente con qualità pessima. Distorsione, rumore, compressione esagerata.",duration:"25 min",examples:["📻 Estetica cassetta anni '80","☎️ Registrazione telefonica volutamente degradata","🔊 Bitcrushing e downsampling estremo"]},
              {title:"🎵 Modalità Antiche",description:"Scale modali pre-tonali",prompt:"Usa modi gregoriani (dorico, frigio, lidio, etc) invece di maggiore/minore.",duration:"30 min",examples:["🏛️ Modo Dorico: suono medievale misterioso","⛪ Modo Frigio: atmosfera spagnola/orientale","✨ Modo Lidio: sognante e aereo"]},
              {title:"🌊 Morphing Sonoro",description:"Trasformazione graduale A→B",prompt:"Suono iniziale si trasforma lentamente in suono completamente diverso.",duration:"25 min",examples:["🎹 Piano acustico → synth digitale (3 min)","🌳 Suoni naturali → texture elettroniche","😊 Mood felice → mood cupo gradualmente"]},
              {title:"🎯 One-Take Challenge",description:"Nessuna possibilità di editing",prompt:"Registra in una sola ripresa. Tutti gli errori restano. Autenticità totale.",duration:"15 min",examples:["🎤 Performance live senza rete","⚡ Improvvisazione catturata al volo","🔴 Registrazione continua senza stop"]},
              {title:"🔮 Archetipi Junghiani",description:"Ombra, Anima, Persona in musica",prompt:"Componi brani per archetipi psicologici: Ombra (lato oscuro), Anima (femminile), Persona (maschera).",duration:"50 min",examples:["🌑 Ombra: Brano oscuro su aspetti repressi","✨ Anima: Melodia su vulnerabilità","🎭 Persona: Tema su identità sociale"]},
              {title:"🎪 Circo Sonoro",description:"Atmosfera grottesca e surreale",prompt:"Valzer distorti, organi carousel rotti, atmosfera carnascialesca disturbante.",duration:"30 min",examples:["🎠 Valzer 3/4 ma deformato e glitchy","🤡 Melodie allegre ma inquietanti","🎡 Nostalgia distorta e surreale"]},
              {title:"📦 Sample Mangling",description:"Distruggi e ricostruisci audio esistente",prompt:"Prendi sample di qualsiasi cosa. Processa fino a renderlo irriconoscibile ma musicale.",duration:"35 min",examples:["🔊 Voce umana → texture pad","🎸 Chitarra → percussioni granulari","🌊 Field recording → drone atmosferico"]},
              {title:"⚡ Speed Composition",description:"10 brani in 60 minuti",prompt:"6 minuti a brano. Non pensare, solo crea. Quantità sopra qualità.",duration:"1 ora",examples:["💨 Timer 6 min per ogni traccia","🎯 Accetta imperfezioni","📦 Archivio grezzo da raffinare dopo"]},
              {title:"🌈 Sinestesia Estrema",description:"Tutti i sensi mischiati in musica",prompt:"Componi pezzo che rappresenta: gusto+colore+temperatura+emozione insieme.",duration:"30 min",examples:["🔥 Rosso + Piccante + Caldo + Rabbia","❄️ Blu + Menta + Freddo + Malinconia","🌻 Giallo + Dolce + Tiepido + Gioia"]},
              {title:"🎭 Antitesi Musicale",description:"Due sezioni opposte inconciliabili",prompt:"Prima metà: stile A. Seconda metà: completo opposto. Nessuna transizione.",duration:"25 min",examples:["😇 Parte 1: Corale angelico | Parte 2: Death metal","🌸 Parte 1: Ambient delicato | Parte 2: Industrial aggressivo","🎹 Parte 1: Classico raffinato | Parte 2: Trap brutale"]},
              {title:"🌍 Polyrhythm Chaos",description:"Strati ritmici tutti in metri diversi",prompt:"3/4 + 5/8 + 7/16 contemporaneamente. Complessità ritmica estrema.",duration:"40 min",examples:["🥁 Batteria in 4/4, basso in 5/8","🎹 Piano in 7/8, archi in 3/4","🔊 Chaos controllato poliritmico"]},
              {title:"📻 Stazioni Radio Fantasma",description:"Frammenti di trasmissioni immaginarie",prompt:"Componi come se scandagliassi radio notturna: frammenti di musica, voci, interferenze.",duration:"30 min",examples:["📡 Mix di generi random disturbati","🌌 Voci lontane frammentate","📻 Statico e melodie interrotte"]},
              {title:"🎼 Notazione Inventata",description:"Crea sistema di scrittura musicale nuovo",prompt:"Inventa simboli e regole per scrivere musica. Poi componi usando solo quel sistema.",duration:"45 min",examples:["🎨 Colori = altezze, forme = durate","📐 Geometrie = armonie","🔣 Alfabeto personale musicale"]},
              {title:"🌊 Wave Meditation",description:"Singola nota evolve per 10 minuti",prompt:"Una nota sola. Modulala, processala, evolvila lentamente per 10 minuti interi.",duration:"15 min",examples:["🎹 Do centrale con reverb infinito","🌀 Drone che cambia timbro gradualmente","🔊 Nota statica che diventa paesaggio"]},
              {title:"🎪 Musical Dadaism",description:"Non-sense totale diventa arte",prompt:"Approccio Dada: casualità assoluta, assurdo, anti-logica. Performance non-musicale.",duration:"20 min",examples:["🎲 Suoni completamente casuali","📦 Oggetti non-musicali come strumenti","🤪 Composizione volutamente illogica"]},
              {
                title: "Weather as Co-Creator",
                description: "Elementi naturali partecipano alla creazione musicale",
                prompt: "Lascia che pioggia, vento, sole influenzino il brano mentre componi all'aperto.",
                duration: "1 ora",
                examples: [
                  "🌧️ Esempio 1: Registra improvvisazione sotto pioggia, incorpora gocce come percussioni",
                  "💨 Esempio 2: Suona all'aperto, vento come collaboratore sonoro",
                  "☀️ Esempio 3: Componi al tramonto, osserva come luce cambia il mood del brano"
                ]
              },
              {
                title: "Future Archaeologist",
                description: "Crea 'reperto sonoro' di una civiltà futura",
                prompt: "Anno 3000. Gli archeologi trovano la tua registrazione. Cosa racconta della nostra epoca?",
                duration: "45 min",
                examples: [
                  "🏺 Esempio 1: 'Canto antico' del 2024 con suoni digitali e glitch",
                  "📱 Esempio 2: Soundscape che cattura l'era degli smartphone e notifiche",
                  "🗿 Esempio 3: Composizione che rappresenta la società dei social media"
                ]
              },
              {title:"🌟 Gratitudine Sonora",description:"Componi ringraziamento musicale",prompt:"Pensa a 3 persone/cose per cui sei grato. Crea breve tema melodico per ciascuno (2-3 min). Alla fine, intrecciali in un pezzo unico di gratitudine.",duration:"20 min",examples:["💝 Tema per un insegnante che ti ha ispirato","🌳 Tema per la natura che ti nutre","🎵 Tema per la musica stessa che ti guarisce"]},
              {title:"⚡ Lightning Ideas: 30 in 30",description:"30 idee musicali in 30 minuti",prompt:"1 minuto per idea. Suona/canta/registra frammento. No giudizio. Quantità assoluta. Almeno 3 saranno oro grezzo.",duration:"30 min",examples:["🎯 Timer 1 min per ogni idea","📦 Archivio di materiale per mesi","💎 Scegli migliori dopo, non durante"]},
              {title:"🎭 Musicoterapia per un'Emozione Difficile",description:"Esplora emozione scomoda attraverso suono",prompt:"Scegli emozione che tendi a evitare (vergogna, gelosia, rabbia). Dai voce musicale a quell'emozione per 15 minuti. Lasciala esistere senza giudizio. Ascolto compassionevole del tuo mondo interiore.",duration:"20 min",examples:["😔 Vergogna: suoni sussurrati, nascosti","😡 Rabbia: percussioni aggressive, dissonanze","😰 Paura: texture instabili, silenzi improvvisi"]},
              {title:"🌍 Inspirazione da Cultura Sconosciuta",description:"Esplora tradizione musicale nuova",prompt:"Scegli cultura musicale che non conosci (gamelan balinese, canto tuva, fado portoghese). Ascolta 10 minuti. Poi crea tua interpretazione senza copiare, solo ispirare.",duration:"35 min",examples:["🎵 Gamelan→esplora poliritmia","🗣️ Canto difonico→sperimenta armonici","🎻 Fado→lavora sulla saudade (nostalgia)"]},
              {title:"🔊 Volume Come Parametro Compositivo",description:"Componi solo con dinamiche",prompt:"Stessa nota ripetuta per 10 minuti. Varia SOLO il volume: ppp → fff in curve complesse. Scopri espressività delle dinamiche pure.",duration:"10 min",examples:["🔉 Crescendo lentissimi 2 minuti","🔊 Subito forte poi pp immediato","🎚️ Ondate dinamiche irregolari"]},
              {title:"🎁 Canzone di Guarigione per Te Bambino",description:"Scrivi per il te di 8 anni",prompt:"Immagina te stesso a 8 anni. Cosa avrebbe voluto sentirsi dire? Componi canzone/brano che offre conforto, validazione, incoraggiamento a quel bambino. Può essere commovente.",duration:"40 min",examples:["🧸 Parole semplici, melodia dolce","💙 'Sei abbastanza', 'Sei amato', 'Va bene così'","😭 Permetti che sia emotivamente intenso"]},
              {title:"📸 Istantanea Sonora di Oggi",description:"Documentario musicale del tuo stato d'animo ora",prompt:"Senza pensare troppo: improvvisa 5 minuti che catturano esattamente come ti senti in questo preciso momento. Snapshot emotivo onesto.",duration:"5 min",examples:["📷 Stato d'animo crudo, non filtrato","🎤 Registra sempre, anche se 'brutto'","📅 Fai regolarmente: archivio emotivo"]},
              {title:"🌙 Improvvisazione Notturna Meditativa",description:"Suona nel buio completo prima di dormire",prompt:"Luci spente, buio totale. 20 minuti di improvvisazione dolce sullo strumento. Lascia che le mani vadano dove vogliono. Medita suonando. Preparazione per sonno profondo.",duration:"20 min",examples:["🕯️ Nessuna luce, solo suono","😌 Tempo lento, dinamiche soft","💤 Conclusione graduale nel silenzio"]},
              {title:"🎯 Reverse Prompt Engineering",description:"Crea pezzo, poi descrivi il prompt",prompt:"Improvvisa/componi 10 minuti liberamente senza concept. DOPO, ascolta e inventa il prompt fittizio che avresti potuto usare per creare quel pezzo. Razionalizza l'intuizione retroattivamente.",duration:"25 min",examples:["🎲 Prima crea, poi spiega","🧠 Consapevolezza del processo inconscio","📝 Documenta scoperte casuali"]}
            ],
            'burnout-accademico': [
              {
                title: "5-Minute Brain Dump",
                description: "Scarica tutte le preoccupazioni su carta",
                prompt: "Timer 5 minuti. Scrivi TUTTO ciò che ti stressa in Accademia, esami, progetti. Poi straccia.",
                duration: "5 min",
                examples: [
                  "📝 Esempio 1: Stream of consciousness su scadenze, poi brucialo",
                  "✏️ Esempio 2: Lista paure/ansie, poi trasformale in melodia catartica",
                  "🗑️ Esempio 3: Lettera all'ansia, leggila ad alta voce, poi butta via"
                ]
              },
              {
                title: "Single Task Promise",
                description: "Oggi fai SOLO una cosa, ma fatta bene",
                prompt: "Lista di 10 cose da fare. Scegline UNA. Fai solo quella oggi. Ignora il resto.",
                duration: "Variabile",
                examples: [
                  "✅ Esempio 1: Solo esercizi tecnici, niente altro",
                  "🎵 Esempio 2: Solo improvvisazione su un tema, stop",
                  "📚 Esempio 3: Solo ascolto e analisi, niente composizione"
                ]
              },
              {
                title: "Digital Detox Studio Time",
                description: "2 ore di lavoro completamente offline",
                prompt: "Spegni telefono e PC. Lavora solo con mani e materiali fisici per 2 ore.",
                duration: "2 ore",
                examples: [
                  "📵 Esempio 1: Solo strumento acustico, niente software",
                  "🚫 Esempio 2: Pratica vocale o strumentale, zero distrazioni tech",
                  "🎵 Esempio 3: Composizione su carta, niente computer o tutorial online"
                ]
              },
              {
                title: "Energy Audit Worksheet",
                description: "Mappa cosa ti drena e cosa ti ricarica",
                prompt: "Dividi foglio: sinistra = energy vampires, destra = energy boosters. Riorganizza priorità.",
                duration: "15 min",
                examples: [
                  "🔋 Esempio 1: Evita progetti che prosciugano, focalizza su quelli energizzanti",
                  "💡 Esempio 2: Identifica persone/situazioni tossiche, riduci esposizione",
                  "⚡ Esempio 3: Pianifica attività ricostituenti tra quelle impegnative"
                ]
              },
              {
                title: "Micro-Break Protocol",
                description: "Pause di 3 minuti ogni ora di lavoro",
                prompt: "Timer ogni 60 minuti. Stop 3 minuti: stretching, respiro, o guarda fuori. No schermi.",
                duration: "3 min x N",
                examples: [
                  "🧘 Esempio 1: Stretching collo e spalle, sciogli tensioni",
                  "🌬️ Esempio 2: 10 respiri profondi alla finestra",
                  "👀 Esempio 3: Palming (mani su occhi chiusi) per rilassare vista"
                ]
              },
              {
                title: "Permission to Be Mediocre",
                description: "Oggi il 60% di sforzo è sufficiente",
                prompt: "Scegli un task. Fallo con il 60% dello sforzo abituale. È abbastanza. Davvero.",
                duration: "Variabile",
                examples: [
                  "📐 Esempio 1: Improvvisazione abbozzata invece che brano finito",
                  "🎵 Esempio 2: Studio armonico approssimativo, non arrangiamento completo",
                  "✏️ Esempio 3: Idea melodica grezza, non composizione perfetta"
                ]
              },
              {
                title: "Passion Project 30 Minutes",
                description: "Lavora su qualcosa che AMI, non che devi fare",
                prompt: "30 minuti SOLO per progetto personale che ti entusiasma. Zero sensi di colpa.",
                duration: "30 min",
                examples: [
                  "💜 Esempio 1: Brano sperimentale che vuoi provare da mesi",
                  "🎵 Esempio 2: Tecnica vocale o strumentale nuova che vuoi sperimentare",
                  "✨ Esempio 3: Composizione personale che non c'entra con il conservatorio"
                ]
              },
              {
                title: "Say No Practice",
                description: "Declina educatamente una richiesta oggi",
                prompt: "Identifica qualcosa a cui puoi dire no. Pratica: 'Non posso in questo momento, grazie'.",
                duration: "5 min",
                examples: [
                  "🚫 Esempio 1: Collaborazione non essenziale che ti stressa",
                  "❌ Esempio 2: Richiesta social che toglie tempo creativo",
                  "🛑 Esempio 3: Impegno extra-accademico non fondamentale"
                ]
              },
              {
                title: "Body Scan Relaxation",
                description: "Rilassa sistematicamente ogni muscolo",
                prompt: "Sdraiati. Parti dai piedi, sali lentamente. Rilassa consapevolmente ogni parte del corpo.",
                duration: "15 min",
                examples: [
                  "🦶 Esempio 1: Piedi → gambe → bacino → schiena → spalle → testa",
                  "💆 Esempio 2: Focus extra su zone tese (spalle, mandibola)",
                  "😌 Esempio 3: Ripeti 2-3 volte se particolarmente stressato"
                ]
              },
              {
                title: "Gratitude Art Journal",
                description: "Disegna 5 cose per cui sei grato oggi",
                prompt: "Sketchbook: 5 mini-disegni di cose positive di oggi, anche minuscole.",
                duration: "10 min",
                examples: [
                  "☕ Esempio 1: Caffè buono, luce bella, amico che ha scritto",
                  "🌞 Esempio 2: Brano riuscito, pausa piacevole, bel tramonto",
                  "💛 Esempio 3: Esprimi gratitudine per strumento, sala prove, salute"
                ]
              },
              {
                title: "Movement Snack",
                description: "5 minuti di movimento energizzante",
                prompt: "Metti musica. Muoviti liberamente 5 minuti: balla, salta, stretching dinamico.",
                duration: "5 min",
                examples: [
                  "💃 Esempio 1: Balla una canzone che ami, scatenati",
                  "🤸 Esempio 2: Jumping jacks, stretching, movimenti ampi",
                  "🧘 Esempio 3: Yoga flow veloce per riattivare corpo"
                ]
              },
              {
                title: "Sleep Hygiene Setup",
                description: "Crea rituale serale per dormire meglio",
                prompt: "30 min pre-sonno: no schermi, tisana, lettura o stretching. Ripeti ogni sera.",
                duration: "30 min",
                examples: [
                  "📚 Esempio 1: Lettura + camomilla + luci soffuse",
                  "🧘 Esempio 2: Meditazione guidata + diario + respirazione",
                  "🎵 Esempio 3: Ascolto rilassante + notazione leggera + routine"
                ]
              },
              {
                title: "Workload Triage",
                description: "Riorganizza priorità realisticamente",
                prompt: "Lista tutto. Categorie: Urgente, Importante, Può aspettare, Delegabile. Ricalcola deadline.",
                duration: "20 min",
                examples: [
                  "📋 Esempio 1: Esame settimana prossima = Urgente, tutorial online = Aspetta",
                  "✅ Esempio 2: Portfolio = Importante, pulizia studio = Delega",
                  "🎯 Esempio 3: Progetto finale = Urgente+Importante, side project = Aspetta"
                ]
              },
              {
                title: "Forest Butterflyh (Shinrin-yoku)",
                description: "Immersione consapevole nella natura",
                prompt: "40 minuti in parco/natura. Cammina lentamente. Osserva, annusa, tocca. Zero phone.",
                duration: "40 min",
                examples: [
                  "🌳 Esempio 1: Parco cittadino, osserva alberi e uccelli",
                  "🌿 Esempio 2: Passeggiata in bosco, raccogli foglie interessanti",
                  "🏞️ Esempio 3: Lago o fiume, ascolta suoni acqua"
                ]
              },
              {
                title: "Worry Time Container",
                description: "15 minuti dedicati SOLO a preoccuparti",
                prompt: "Scegli orario. 15 min per ansie. Fuori da quella finestra, rimanda le preoccupazioni.",
                duration: "15 min",
                examples: [
                  "⏰ Esempio 1: Ore 18:00 = worry time, resto giornata = zone free",
                  "📝 Esempio 2: Scrivi ansie durante il worry time, poi chiudi quaderno",
                  "🚫 Esempio 3: Quando preoccupazioni emergono fuori orario: 'Ci penso alle 18'"
                ]
              },
              {
                title: "Perfection Release Exercise",
                description: "Completa qualcosa al 70% e consideralo finito",
                prompt: "Progetto che procrastini per perfezionismo? Portalo a 70% e STOP. È sufficiente.",
                duration: "Variabile",
                examples: [
                  "✅ Esempio 1: Registrazione 'abbastanza buona' pubblicala",
                  "🎵 Esempio 2: Brano '70% finito' = Done. Inizia nuovo",
                  "📱 Esempio 3: Performance 'decente' condividila, non perfetta"
                ]
              },
              {
                title: "Social Butterflytery Check",
                description: "Valuta se hai bisogno di persone o solitudine",
                prompt: "Chiediti: energia sociale alta o bassa? Onora risposta. Ok dire no a uscite, ok chiedere compagnia.",
                duration: "5 min",
                examples: [
                  "👥 Esempio 1: Butterflyteria bassa → Declina inviti, ricaricati da solo",
                  "🤗 Esempio 2: Butterflyteria alta → Chiama amico, studia in compagnia",
                  "⚖️ Esempio 3: Alterna giorni sociali e giorni solitari"
                ]
              },
              {
                title: "Breathing Reset 4-7-8",
                description: "Tecnica respirazione per calmare sistema nervoso",
                prompt: "Inspira 4 secondi, trattieni 7, espira 8. Ripeti 4 cicli. Resetta ansia acuta.",
                duration: "2 min",
                examples: [
                  "🌬️ Esempio 1: Prima di presentazioni o esami",
                  "😰 Esempio 2: Quando senti ansia salire improvvisamente",
                  "🧘 Esempio 3: Al mattino per iniziare giornata calmo"
                ]
              },
              {
                title: "Studio Environment Reset",
                description: "Riorganizza spazio lavoro per energia fresca",
                prompt: "20 minuti: pulisci, riordina, cambia disposizione. Nuovo spazio = nuova energia.",
                duration: "20 min",
                examples: [
                  "🧹 Esempio 1: Rimuovi spartiti vecchi, spazio pulito",
                  "💡 Esempio 2: Cambia illuminazione, aggiungi pianta",
                  "🎵 Esempio 3: Organizza strumenti e materiali per accessibilità"
                ]
              },
              {
                title: "Self-Compassion Letter",
                description: "Scrivi a te stesso come faresti con un amico",
                prompt: "Cosa ti stai rimproverando? Scrivi cosa diresti a un amico nella stessa situazione.",
                duration: "10 min",
                examples: [
                  "💌 Esempio 1: 'Sono indietro' → 'Stai facendo del tuo meglio'",
                  "💙 Esempio 2: 'Ho sbagliato' → 'Errori sono apprendimento'",
                  "🤗 Esempio 3: 'Non sono abbastanza' → 'Stai crescendo, serve tempo'"
                ]
              },
              {title:"🎯 Pomodoro Musicale",description:"25 min focus + 5 min pausa",prompt:"Timer 25 min per task specifico. Pausa 5 min obbligatoria. Ripeti. Previene burnout da sessioni troppo lunghe.",duration:"30 min",examples:["🍅 4 pomodori = 2 ore produttive","⏱️ Pausa sacra, non saltare","🎵 Focus totale durante i 25 min"]},
              {title:"📵 Phone Lock Session",description:"Blocca telefono per 90 minuti",prompt:"App blocker o consegna phone a coinquilino. 90 min senza distrazioni digitali.",duration:"90 min",examples:["🔒 Freedom, Forest, o cassetto chiuso","📚 Deep work su progetto importante","✨ Concentrazione profonda ritrovata"]},
              {title:"🌅 Morning Pages Routine",description:"3 pagine stream of consciousness al mattino",prompt:"Appena sveglio, 3 pagine di scrittura libera. Nessun giudizio. Svuota mente prima di iniziare giornata.",duration:"15 min",examples:["📝 Scrittura automatica, no rilettura","🌄 Diventa rituale mattutino","💭 Chiarisce mente e priorità"]},
              {title:"🎨 Joy List Activation",description:"10 cose che ti portano gioia musicale",prompt:"Lista 10 attività musicali che ami genuinamente. Inseriscine almeno 1 nella settimana.",duration:"10 min",examples:["🎵 Esempi: jam session, ascolto vinili, concerti","📅 Programma 1 joy activity per settimana","💜 Non tutto dev'essere produttivo"]},
              {title:"🚶 Walk & Talk Therapy",description:"Passeggiata mentre risolvi problema mentalmente",prompt:"Problema che ti stressa. Camminata 30 min pensandoci. Movimento aiuta prospettiva.",duration:"30 min",examples:["🌳 Passeggiata in natura preferibile","🗣️ Parla ad alta voce se da solo","💡 Soluzioni emergono camminando"]},
              {title:"🧘 Progressive Muscle Relaxation",description:"Tendi e rilassa muscoli sistematicamente",prompt:"Parti da piedi. Tendi muscoli 5 sec, rilassa 10 sec. Sali fino a testa. Rilascia tensioni accumulate.",duration:"20 min",examples:["💪 Pugni serrati → mani aperte","😬 Spalle tese → spalle cadenti","🦵 Gambe contratte → gambe rilassate"]},
              {title:"🎭 Alter Ego Practice",description:"Pratica come se fossi il tuo idolo musicale",prompt:"Immagina di essere musicista che ammiri. Come si avvicinerebbe a questa pratica? Imita approccio.",duration:"45 min",examples:["🎸 'Come suonerebbe Miles Davis questo?'","🎹 'Come praticarrebbe Glenn Gould?'","🎵 Adotta mentalità del maestro"]},
              {title:"📊 Weekly Review Ritual",description:"Domenica sera: bilancio settimana",prompt:"Cosa è andato bene? Cosa migliorare? 3 priorità prossima settimana. Reset e ripartenza.",duration:"30 min",examples:["✅ Celebra successi (anche piccoli)","🔄 Aggiusta strategia se necessario","🎯 Max 3 priorità (non 10!)"]},
              {title:"🍃 Minimal Commitment Day",description:"Un giorno a settimana: zero impegni extra",prompt:"Scegli un giorno. Nessun evento sociale, nessun progetto extra. Solo essenziale + riposo.",duration:"1 giorno",examples:["📅 Es: ogni domenica = sacred rest day","🚫 Impara a proteggere tempo libero","🔋 Ricarica completa settimanale"]},
              {title:"🎧 Binaural Beats Focus",description:"Frequenze per concentrazione o relax",prompt:"YouTube/Spotify: binaural beats. 40Hz per focus, 4Hz per sonno. Sottofondo durante studio.",duration:"Variabile",examples:["🧠 40Hz gamma waves = concentrazione","😴 4Hz delta waves = sonno profondo","🎵 Integra in routine quotidiana"]},
              {title:"📖 Read for Pleasure",description:"Lettura non-accademica per 20 minuti",prompt:"Libro, fumetto, rivista che ti piace. Zero sensi di colpa. Alimenta creatività.",duration:"20 min",examples:["📚 Fiction, fantasy, thriller, graphic novel","🚫 NO manuali, NO teoria musicale","🌟 Puro piacere di leggere"]},
              {title:"🍵 Tea Ritual Meditation",description:"Prepara e bevi tè con piena presenza",prompt:"Scalda acqua. Osserva infusione. Bevi lentamente. Mindfulness attraverso routine quotidiana.",duration:"15 min",examples:["🫖 Cerimonia del tè giapponese come ispirazione","👃 Annusa aroma, senti calore tazza","🧘 Meditazione attiva e accessibile"]},
              {title:"🎯 Done List (not To-Do)",description:"Fine giornata: lista cosa HAI fatto",prompt:"Invece di to-do list infinita, scrivi cosa hai completato oggi. Riconosci produttività effettiva.",duration:"5 min",examples:["✅ Valida sforzi reali fatti","🎊 Celebra micro-progressi","💪 Combatte sensazione 'non ho fatto niente'"]},
              {title:"🌡️ Stress Temperature Check",description:"Scala 1-10: quanto sei stressato ora?",prompt:"Numero da 1 a 10. Se >7, pausa obbligatoria. Se >9, giornata staccata. Ascolta segnali.",duration:"1 min",examples:["📊 Traccia stress quotidianamente","🚨 Soglia 7 = intervento necessario","🛑 Soglia 9 = riposo forzato"]},
              {title:"🎨 Creative Cross-Training",description:"Fai arte diversa dalla musica",prompt:"Dipingi, scrivi poesia, fotografia, danza. 30 min di espressione creativa alternativa.",duration:"30 min",examples:["🖌️ Pittura astratta emotiva","✍️ Scrittura creativa stream of consciousness","📸 Fotografia passeggiata urbana"]},
              {title:"🤝 Accountability Partner",description:"Check-in settimanale con collega musicista",prompt:"Trova compagno di studi. Check-in 15 min ogni settimana: obiettivi, sfide, supporto reciproco.",duration:"15 min/settimana",examples:["📞 Video call o caffè insieme","🎯 Condividi obiettivi e progressi","💬 Supporto emotivo reciproco"]},
              {title:"🏃 Cardio Energy Boost",description:"15 minuti attività aerobica",prompt:"Corsa, bici, corda, ballo. Eleva battito per 15 min. Endorfine contrastano burnout.",duration:"15 min",examples:["🏃 Jogging leggero","🚴 Bici intorno isolato","🎵 Cardio dance a casa"]},
              {title:"🌙 Digital Sunset Ritual",description:"No schermi 1 ora prima di dormire",prompt:"Dalle 22:00 (o tuo orario): zero schermi. Libri, stretching, musica acustica, meditazione.",duration:"1 ora",examples:["📚 Lettura cartacea","🎸 Strumento acustico improvvisazione","🧘 Yoga restorative"]},
              {title:"🎵 Playlist Emozionale",description:"Crea playlist per ogni mood",prompt:"5 playlist: Energia, Focus, Relax, Tristezza, Gioia. Usa music as mood medicine.",duration:"30 min setup",examples:["⚡ Playlist Energia: uptempo, motivante","🧠 Playlist Focus: strumentale, minimal","😌 Playlist Relax: ambient, natura"]},
              {title:"📝 Exam Anxiety Protocol",description:"Routine pre-esame per gestire ansia",prompt:"Giorno prima: revisione leggera (NO cramming), sonno 8h, colazione sana, respirazione 4-7-8 prima di entrare.",duration:"Variabile",examples:["🚫 NO all-nighter pre-esame","🥗 Nutrizione e idratazione","🌬️ Tecnica respirazione prima di iniziare"]},
              {title:"🏆 Progress Portfolio",description:"Raccogli prove dei tuoi miglioramenti",prompt:"Registrazioni, spartiti, progetti ogni mese. Confronta: crescita è graduale ma reale.",duration:"15 min/mese",examples:["📼 Registrazioni mensili stesso pezzo","📊 Traccia skill progression","🎉 Celebra miglioramenti concreti"]},
              {title:"🌍 Comparison Detox",description:"Una settimana senza guardare altri musicisti online",prompt:"Disinstalla social o blocca profili musicisti per 7 giorni. Focalizza su TUO percorso.",duration:"7 giorni",examples:["📵 Instagram, YouTube, TikTok pause","🎯 Concentrati solo su te","💪 Ritrova fiducia personale"]},
              {title:"🎭 Failure Resume",description:"Lista dei tuoi fallimenti e cosa hai imparato",prompt:"Scrivi 5 fallimenti musicali. Accanto: cosa hai appreso. Normalizza errori come parte crescita.",duration:"20 min",examples:["❌ Audizione fallita → Impara gestione ansia","🎵 Pezzo bocciato → Migliora orchestrazione","📚 Esame ripetuto → Studia strategie diverse"]},
              {title:"🔥 Burnout Symptom Tracker",description:"Riconosci early warning signs",prompt:"Sintomi burnout: cinismo, esaurimento, distacco. Check settimanale. Intervieni precocemente.",duration:"5 min/settimana",examples:["😞 Sintomi: irritabilità, apatia, insomnia","🚨 Early intervention previene crollo","🩺 Cerca supporto professionale se necessario"]},
              {title:"🎨 Passion Reignite Exercise",description:"Perché hai iniziato a fare musica?",prompt:"Scrivi lettera a te bambino: perché amavi musica? Riconnettiti a quella scintilla originale.",duration:"15 min",examples:["💭 Ricorda primo strumento, prima emozione","✨ Prima volta che musica ti ha mosso","🎵 Recupera amore puro per musica"]},
              {title:"🧩 Skill Stack Diversification",description:"Sviluppa competenza complementare",prompt:"Oltre a strumento: produzione audio, insegnamento, storia musica. Riduce pressione su singola skill.",duration:"Variabile",examples:["🎛️ Impara DAW (Logic, Ableton)","👨‍🏫 Fai tutoring a principianti","📚 Studia storia e contesto culturale"]},
              {title:"🌈 Values Alignment Check",description:"Quello che fai riflette i tuoi valori?",prompt:"Lista 5 valori personali. Attività accademiche allineate? Se no, aggiusta o accetta disallineamento temporaneo.",duration:"20 min",examples:["💎 Es: Creatività, Autenticità, Crescita","⚖️ Conservatorio vs Valori: compatibili?","🎯 Se conflitto: strategia long-term"]},
              {title:"🎤 Speak Your Struggle",description:"Condividi difficoltà con persona fidata",prompt:"Chiama amico, mentor, famiglia. Verbalizza stress. Non sei solo, parlare aiuta.",duration:"30 min",examples:["📞 'Mi sento sopraffatto, posso sfogarmi?'","👂 Ascolto empatico è terapeutico","🤗 Vulnerabilità è forza, non debolezza"]},
              {title:"🏖️ Staycation Mini-Retreat",description:"Weekend completamente staccato",prompt:"48 ore zero musica accademica. Fai turista nella tua città, esplora, riposa, gioca.",duration:"2 giorni",examples:["🗺️ Luoghi nuovi in città","🎨 Musei, cinema, natura","🚫 NO spartiti, NO DAW, NO teoria"]},
              {title:"🎯 Energy ROI Analysis",description:"Cosa dà massimo ritorno per sforzo minimo?",prompt:"Lista attività studio. Quali danno max risultati con min energia? Focalizza su quelle.",duration:"15 min",examples:["📊 80/20 rule: 20% attività = 80% risultati","🎯 Tecnica specifica vs ore generiche","⚡ Lavora smart, non solo hard"]},
              {title:"🌟 Future Self Visualization",description:"Immagina te tra 5 anni sereno e realizzato",prompt:"Chiudi occhi. Visualizza te tra 5 anni: dove sei? Cosa fai? Come ti senti? Ancora musica?",duration:"10 min",examples:["🔮 Visione chiara dà direzione","💭 Va bene se futuro non include conservatorio","🎵 O forse include carriera musicale felice"]},
              {title:"🧘 Yoga Nidra Session",description:"Sonno yogico per deep rest",prompt:"YouTube 'Yoga Nidra'. 20-30 min rilassamento profondo. Equivalente 2 ore sonno normale.",duration:"30 min",examples:["😴 Corpo immobile, mente vigile","🧠 Ripristina sistema nervoso","🌙 Ideale pomeriggio o pre-sonno"]},
              {title:"💝 Autocompassione per il Musicista Stanco",description:"Tratta te stesso come tratteresti un amico caro",prompt:"Scrivi lettera gentile a te stesso riconoscendo quanto è difficile essere studente di musica. Usa tono di un amico amorevole, non di un critico severo. Cosa diresti a un compagno che sta soffrendo come te?",duration:"15 min",examples:["💙 'Stai facendo del tuo meglio in condizioni difficili'","🌟 'È normale sentirsi sopraffatti, non sei debole'","🤗 'Meriti riposo e gentilezza, non solo produttività'"]},
              {title:"⏰ Blocchi di Tempo Sacri",description:"Proteggi ore non negoziabili per riposo",prompt:"Calendario: evidenzia 3 blocchi settimanali (min 2h ciascuno) dedicati SOLO a riposo, hobby non musicali, socialità. Questi sono sacri quanto le lezioni. Difendili.",duration:"20 min pianificazione",examples:["🚫 NO musica in questi blocchi","✅ Leggi, cucina, amici, natura","⚖️ Produttività richiede recupero"]},
              {title:"🎭 Rituale di Chiusura Giornaliera",description:"Separa studio da vita personale",prompt:"Fine giornata studio: 5 min per chiudere mentalmente. Scrivi 3 cose fatte oggi, 1 cosa da fare domani. Poi gesto fisico simbolico (chiudi quaderno, spegni luce sala prove). Giornata musicale finita, inizia vita personale.",duration:"5 min",examples:["📔 Chiudi e riponi spartiti con intenzione","🕯️ Spegni luce studio = fine lavoro","🚪 Esci fisicamente da spazio studio"]},
              {title:"🌱 Micro-Pause Rigenerative",description:"Ogni 50 minuti, pausa 10 minuti vera",prompt:"Tecnica Pomodoro modificata: 50 min studio intenso, 10 min pausa TOTALE. Niente scroll, niente musica. Solo: stretching, aria, acqua, guardare lontano.",duration:"10 min ogni ora",examples:["🧘 Stretching collo e spalle","🌳 Affacciati, guarda orizzonte","💧 Idratazione e movimento"]},
              {title:"🙅 Pratica del No Gentile",description:"Impara a rifiutare senza sensi di colpa",prompt:"Script per dire no: 'Grazie per avermi pensato, ma al momento ho bisogno di proteggere il mio tempo/energia per [priorità]. Spero capirai.' Pratica 3 scenari realistici.",duration:"20 min",examples:["🎤 'No, non posso suonare al tuo evento gratis'","📚 'No, non posso aiutarti con il tuo progetto ora'","🎵 'No, non prendo lezioni extra questa settimana'"]},
              {title:"🛀 Domenica di Recupero Totale",description:"Un giorno intero ogni settimana completamente libero",prompt:"Una domenica al mese: ZERO musica accademica. Dormi, cucina pasti lenti, bagno lungo, leggi per piacere, cammina senza meta. Ricarica profonda.",duration:"1 giorno intero",examples:["🛌 Dormi fino a quando vuoi","🍳 Cucina ricette complesse e goditi","📖 Libro non didattico, solo piacere"]},
              {title:"🎯 Sessione di Management Energetico",description:"Pianifica settimana in base a energia, non solo tempo",prompt:"Identifica quando hai più energia (mattina? sera?). Alloca compiti difficili in momenti di picco energetico, compiti facili in momenti bassi. Non tutto nelle ore di alta energia.",duration:"30 min pianificazione",examples:["⚡ Alta energia: tecnica, composizione difficile","🔋 Media: ascolto, trascrizioni","😴 Bassa: admin, organizzazione, email"]},
              {title:"🌊 Deep Rest Ritual Esteso",description:"Sessione di recupero profondo mensile",duration:"90 min",prompt:"Una volta al mese: 90 minuti dedicati esclusivamente a riposo profondo. Yoga Nidra, meditazione body scan, bagno caldo con musica rilassante (non tua), journaling gentile. Niente produttività, solo essere.",examples:["🧘 Yoga Nidra 40 min","🛁 Bagno con sali 30 min","📔 Journaling compassionevole 20 min"]}
            ],
            'ansia-critica': [
              {
                title: "Small Wins Inventory",
                description: "Celebra anche i successi minuscoli",
                prompt: "5 cose piccole che hai fatto oggi, anche solo alzarti o fare colazione. Sono vittorie.",
                duration: "5 min",
                examples: [
                  "✨ Esempio 1: Mi sono alzato → Ho fatto stretching → Ho aperto lo strumento",
                  "🎵 Esempio 2: Ho accordato → Ho suonato una scala → Ho continuato",
                  "💪 Esempio 3: Sono andato in conservatorio → Ho parlato con prof → Ho iniziato a provare"
                ]
              },
              {
                title: "Pre-Critique Ritual",
                description: "Routine calmante prima di revisioni/esami",
                prompt: "3 azioni ripetitive che fai sempre prima di critiche. Diventa àncora di sicurezza.",
                duration: "10 min",
                examples: [
                  "🧘 Esempio 1: Respiro 4-7-8 + Mantra + Visualizzazione positiva",
                  "🎵 Esempio 2: Canzone specifica + Stretching + Affermazioni",
                  "☕ Esempio 3: Caffè rituale + Ripassare punti chiave + Toccare talismano"
                ]
              },
              {
                title: "Expectation vs Reality",
                description: "Confronta paure con probabilità reali",
                prompt: "Colonna 1: Cosa temi succeda. Colonna 2: Cosa probabilmente succederà davvero.",
                duration: "10 min",
                examples: [
                  "😰 Esempio 1: Paura: 'Diranno che suono male' → Realtà: 'Daranno feedback costruttivi'",
                  "🎓 Esempio 2: Paura: 'Boccerò esame' → Realtà: 'Ho praticato, probabile passare'",
                  "🎵 Esempio 3: Paura: 'Rideranno della mia performance' → Realtà: 'Critiche tecniche, non personali'"
                ]
              },
              {
                title: "Past Success Recall",
                description: "Ricorda quando hai già fatto bene",
                prompt: "3 situazioni simili passate dove hai avuto successo. Cosa ti ha aiutato allora?",
                duration: "8 min",
                examples: [
                  "🏆 Esempio 1: Esame anno scorso → Preparazione + Respirazione → Passato con 27",
                  "✅ Esempio 2: Saggio pubblico → Prove + Supporto amici → Buon feedback",
                  "🎵 Esempio 3: Concerto collettivo → Performance autentica + Fiducia → Apprezzamenti"
                ]
              },
              {
                title: "Lower the Bar Day",
                description: "Ridefinisci successo in modo raggiungibile",
                prompt: "Invece di 'Devo essere perfetto', definisci successo come 'Farò del mio meglio oggi'.",
                duration: "5 min",
                examples: [
                  "📊 Esempio 1: Successo = Completare progetto, non farlo perfetto",
                  "🎯 Esempio 2: Successo = Presentare, non avere standing ovation",
                  "✅ Esempio 3: Successo = Migliorare di 1%, non essere il migliore"
                ]
              },
              {
                title: "Body Anchoring Technique",
                description: "Gesto fisico che ti riporta a calma",
                prompt: "Scegli gesto (toccare pollice-indice, mano sul cuore). Usalo quando ansioso.",
                duration: "3 min",
                examples: [
                  "🤲 Esempio 1: Pollice-indice = àncora di calma, praticala in momenti sereni",
                  "💓 Esempio 2: Mano sul cuore + respiro profondo = auto-conforto",
                  "✊ Esempio 3: Pugno gentile = segnale a te stesso 'Ce la fai'"
                ]
              },
              {
                title: "Visualization Practice",
                description: "Immagina performance di successo",
                prompt: "Chiudi occhi. Visualizza te stesso che presenti/esponi con calma e competenza. Dettagli sensoriali.",
                duration: "10 min",
                examples: [
                  "🎬 Esempio 1: Ti vedi suonare con sicurezza, prof annuiscono, ti senti concentrato",
                  "🎶 Esempio 2: Immagina la tua performance fluida, pubblico attento, feedback positivi",
                  "🎓 Esempio 3: Esame: esegui con calma, mostri preparazione, va bene"
                ]
              },
              {
                title: "Worst Case Scenario Acceptance",
                description: "Affronta la paura peggiore, poi ridimensionala",
                prompt: "Scenario peggiore possibile. Poi: Come sopravviveresti comunque? Ridimensiona paura.",
                duration: "12 min",
                examples: [
                  "💭 Esempio 1: Peggio: 'Bocciato' → Sopravvivenza: 'Ripeto esame, imparo, passo'",
                  "😰 Esempio 2: Peggio: 'Critica devastante' → 'Userò feedback, migliorerò'",
                  "🎵 Esempio 3: Peggio: 'Performance non apprezzata' → 'Farò meglio, crescerò'"
                ]
              },
              {
                title: "Affirmation Recording",
                description: "La tua voce che ti incoraggia",
                prompt: "Registra 5 affermazioni positive. Ascoltale in loop prima di eventi stressanti.",
                duration: "10 min",
                examples: [
                  "🎤 Esempio 1: 'Sono capace' / 'Ho praticato duramente' / 'Merito successo'",
                  "💪 Esempio 2: 'Ho talento' / 'Posso gestire critiche' / 'Sto crescendo'",
                  "✨ Esempio 3: 'Sono musicista valido' / 'La mia musica ha valore' / 'Ce la farò'"
                ]
              },
              {
                title: "Progress Not Perfection",
                description: "Celebra il miglioramento, non solo il risultato",
                prompt: "3 modi in cui sei migliorato nell'ultimo mese, anche piccoli progressi.",
                duration: "7 min",
                examples: [
                  "📈 Esempio 1: Suono con più sicurezza di prima, anche se non perfetto",
                  "🎵 Esempio 2: Gestisco critiche più serenamente che a inizio anno",
                  "💪 Esempio 3: Completo brani più velocemente, anche se non al 100%"
                ]
              },
              {
                title: "Comparison Detox",
                description: "Sfida confronti dannosi con altri",
                prompt: "Chi stai confrontando con te? Scrivi 3 motivi per cui confronto non è valido/utile.",
                duration: "8 min",
                examples: [
                  "👥 Esempio 1: 'Loro hanno diverso background/tempo/risorse'",
                  "🎯 Esempio 2: 'Vedo solo loro risultato, non loro processo/difficoltà'",
                  "✨ Esempio 3: 'Il mio percorso è unico, non misurabile con metri altri'"
                ]
              },
              {
                title: "Feedback Filter Practice",
                description: "Distingui critica costruttiva da proiezione",
                prompt: "Ultimo feedback ricevuto. Quali parti utili? Quali proiezioni personali di chi critica?",
                duration: "10 min",
                examples: [
                  "💬 Esempio 1: Utile: 'Intonazione da migliorare' / Proiezione: 'Troppo audace'",
                  "🎵 Esempio 2: Utile: 'Tecnica X da studiare' / Proiezione: 'Non il mio stile'",
                  "✅ Esempio 3: Prendo critiche tecniche, ignoro giudizi di gusto personale"
                ]
              },
              {
                title: "Grounding 5-4-3-2-1",
                description: "Tecnica sensoriale per ansia acuta pre-critica",
                prompt: "5 cose che vedi, 4 che tocchi, 3 che senti, 2 che annusi, 1 che assapori. Riporta a presente.",
                duration: "4 min",
                examples: [
                  "👀 Esempio 1: Prima di entrare in aula critica, fai esercizio fuori porta",
                  "🧠 Esempio 2: Durante pausa esame, reset con 5-4-3-2-1",
                  "✋ Esempio 3: In attesa risultati, ancòrati al presente con esercizio"
                ]
              },
              {
                title: "Process vs Outcome Focus",
                description: "Controlla il controllabile, lascia andare il resto",
                prompt: "Controlli: impegno, preparazione, presenza. Non controlli: voto, reazione prof, confronto con altri.",
                duration: "10 min",
                examples: [
                  "✅ Esempio 1: Focus su: 'Ho dato il massimo nella ricerca e esecuzione'",
                  "🎯 Esempio 2: Focus su: 'Presento con chiarezza ciò che ho fatto'",
                  "💪 Esempio 3: Lascia andare: 'Se piacerà', 'Se avrò voto alto'"
                ]
              },
              {
                title: "Support Network Activation",
                description: "Chi può supportarti prima/durante/dopo critiche",
                prompt: "3 persone che puoi contattare quando ansioso. Salvale come 'Supporto Esame'.",
                duration: "5 min",
                examples: [
                  "👥 Esempio 1: Amico X per pep talk, Amico Y per distrazione post-esame",
                  "💙 Esempio 2: Compagno corso per studiare insieme, Mentor per dubbi",
                  "🤗 Esempio 3: Familiare per supporto emotivo, Collega per confronto tecnico"
                ]
              },
              {
                title: "Post-Critique Debrief",
                description: "Analizza oggettivamente dopo critiche/esami",
                prompt: "Cosa è andato bene? 1 cosa da migliorare? 1 lezione appresa? No catastrofizzazione.",
                duration: "15 min",
                examples: [
                  "📝 Esempio 1: Bene: esecuzione chiara / Migliorare: gestione tempo / Lezione: preparare scaletta",
                  "✅ Esempio 2: Bene: interpretazione forte / Migliorare: tecnica / Lezione: più esercizi tecnici",
                  "🎯 Esempio 3: Focus su dati oggettivi, non su emozioni del momento"
                ]
              },
              {
                title: "Identity Decoupling",
                description: "Separa il tuo valore dal tuo risultato",
                prompt: "Completa: 'Il mio valore come persona NON dipende da [voto/critica/performance]'.",
                duration: "5 min",
                examples: [
                  "💎 Esempio 1: 'Valgo come persona indipendentemente dal voto di oggi'",
                  "✨ Esempio 2: 'Una performance imperfetta non mi rende fallimento'",
                  "🌟 Esempio 3: 'Il mio valore musicale non si misura con un esame'"
                ]
              },
              {
                title: "Energy Management Pre-Critique",
                description: "Ottimizza energia fisica prima di performance",
                prompt: "Piano giorno prima: cosa mangiare, quando dormire, come muoversi per energia ottimale.",
                duration: "20 min",
                examples: [
                  "🥗 Esempio 1: Cena leggera sera prima, colazione proteica, idratazione",
                  "😴 Esempio 2: Letto presto, 8 ore sonno, sveglia con tempo",
                  "🏃 Esempio 3: Passeggiata mattina, stretching, evita caffeina eccessiva"
                ]
              },
              {
                title: "Reframe Anxiety as Excitement",
                description: "Trasforma nervosismo in energia positiva",
                prompt: "Quando senti ansia, dì ad alta voce: 'Sono eccitato per questa opportunità'. Corpo non sa differenza.",
                duration: "2 min",
                examples: [
                  "🎉 Esempio 1: Battito veloce? 'Sono carico per suonare!'",
                  "⚡ Esempio 2: Mani sudate? 'Sono entusiasta di questa esibizione!'",
                  "✨ Esempio 3: Respiro corto? 'Sono energizzato per questa performance!'"
                ]
              },
              {
                title: "Mentor Visualization",
                description: "Immagina il tuo mentore che ti incoraggia",
                prompt: "Chiudi occhi. Immagina musicista/prof/persona che ammiri che ti dice parole di supporto.",
                duration: "7 min",
                examples: [
                  "👨‍🎵 Esempio 1: Miles Davis ti dice: 'Esprimi la tua voce, non cercare approvazione'",
                  "👩‍🏫 Esempio 2: Prof preferito: 'Hai studiato bene, suona con fiducia'",
                  "🎵 Esempio 3: Musicista ammirato: 'Anche io ho avuto critiche, fa parte del percorso'"
                ]
              },
              {title:"🎯 Exposure Ladder",description:"Graduale esposizione a situazioni ansiogene",prompt:"Lista situazioni da meno a più stressante. Affronta prima quella più facile, poi sali gradualmente.",duration:"Variabile",examples:["📊 Es: 1.Suona da solo → 2.Amico → 3.Piccolo gruppo → 4.Classe → 5.Concerto","🎵 Aumenta difficoltà solo dopo successo precedente","💪 Desensibilizzazione graduale riduce ansia"]},
              {title:"🧘 Box Breathing Tecnica",description:"Respiro quadrato 4-4-4-4",prompt:"Inspira 4, trattieni 4, espira 4, pausa 4. Ripeti 5 cicli. Calma istantanea sistema nervoso.",duration:"3 min",examples:["📦 Visualizza quadrato mentre respiri","🌬️ Prima di esibizioni o critiche","🧠 Attiva risposta parasimpatica (calma)"]},
              {title:"📝 Cognitive Restructuring",description:"Sfida pensieri irrazionali",prompt:"Pensiero ansioso: scrivilo. Evidence pro/contro. Pensiero alternativo razionale.",duration:"15 min",examples:["💭 'Farò pessima figura' → Evidence? → 'Ho praticato, andrà bene'","🎯 'Tutti mi giudicheranno' → Vero? → 'Prof valuta performance, non me'","✅ Sostituisci catastrofizzazione con realtà"]},
              {title:"🎵 Power Pose Pre-Performance",description:"2 minuti postura di potenza",prompt:"Mani sui fianchi o braccia alzate. 2 min prima di performance. Aumenta testosterone, riduce cortisol.",duration:"2 min",examples:["🦸 Wonder Woman pose: mani fianchi, petto aperto","🏆 Victory pose: braccia alzate a V","💪 Postura influenza biochimica e fiducia"]},
              {title:"🌊 Urge Surfing",description:"Cavalca l'onda dell'ansia senza reagire",prompt:"Senti ansia salire? Osservala come onda. Sale, picco, scende. Non combatterla, cavalcala.",duration:"10 min",examples:["🏄 Ansia sale → Osservi → Aspetti picco → Scende naturalmente","🌀 Non resistere, non reagire, solo osserva","🧠 Accettazione riduce intensità"]},
              {title:"🎭 Role Reversal",description:"Cosa diresti a un amico nella tua situazione?",prompt:"Amico ha il tuo esame domani con tue stesse paure. Cosa gli diresti per rassicurarlo?",duration:"8 min",examples:["💬 A lui diresti: 'Hai studiato, andrà bene' → Dillo anche a te","🤗 Compassione per altri è facile, applicala a te","💙 Auto-compassione come parlare ad amico caro"]},
              {title:"📊 Anxiety Meter Tracking",description:"Scala 0-10, traccia ansia nel tempo",prompt:"Ogni ora: quanto ansioso 0-10? Scopri pattern: cosa aumenta/diminuisce ansia?",duration:"1 giorno",examples:["📈 Traccia per 3 giorni, identifica trigger","🎯 Ansia sale prima pranzo? Forse ipoglicemia","💡 Pattern rivelano soluzioni pratiche"]},
              {title:"🎨 Anxiety Art Expression",description:"Disegna la tua ansia",prompt:"Colori, forme, linee che rappresentano ansia. Esternalizza visivamente invece che somatizzare.",duration:"20 min",examples:["🖍️ Rosso/nero = ansia intensa, forme caotiche","🎨 Processo creativo come catarsi","📄 Poi straccia disegno = rilascio simbolico"]},
              {title:"🔄 Thought Stopping Technique",description:"Interrompi ciclo pensieri ossessivi",prompt:"Quando pensiero ansioso ricorrente: dì STOP ad alta voce. Visualizza segnale STOP.",duration:"1 min",examples:["🛑 Pensiero 'E se fallisco?' → STOP → Redirect a task","🧠 Interrompi rumination loop","🎯 Sostituisci con affermazione positiva"]},
              {title:"🎵 Performance Mock Runs",description:"Simula esibizione in condizioni reali",prompt:"Esegui performance 3 volte in condizioni simili: pubblico piccolo, stessa ora, stessa location.",duration:"Variabile",examples:["🎭 Mock audition con amici come giuria","⏰ Stesso orario dell'esame reale","🧠 Familiarità riduce ansia da novità"]},
              {title:"💪 Strengths Inventory",description:"Lista 10 tue qualità musicali",prompt:"10 cose che fai bene musicalmente. Rileggi prima di critiche per bilanciare autocritica.",duration:"10 min",examples:["🎵 Es: Ottima intonazione, espressività, dedizione","💎 Riconosci valore oltre performance singola","✨ Strengths reali controbilanciano autocritica"]},
              {title:"🎬 Video Self-Review",description:"Registrati e osserva con occhio oggettivo",prompt:"Registra performance. Guardala come se fossi prof: cosa noti di buono/migliorabile?",duration:"30 min",examples:["📹 Distanza da performance aiuta obiettività","🎯 Spesso sei più critico di prof reali","✅ Identifica punti forti che ignori"]},
              {title:"🌅 Morning Intention Setting",description:"Inizio giornata con intenzione chiara",prompt:"Al mattino: 'Oggi intendo [affrontare esame/critica] con [calma/apertura/coraggio]'.",duration:"3 min",examples:["🎯 Intenzione dà direzione alla giornata","💭 Focalizza energia su atteggiamento, non risultato","🌟 Ripeti intenzione durante giornata"]},
              {title:"🤝 Criticism Workshop",description:"Esercitati a ricevere feedback",prompt:"Chiedi a 3 amici feedback onesto su performance. Pratica ascolto senza difenderti.",duration:"45 min",examples:["👂 Ascolta tutto senza interrompere","🚫 No giustificazioni immediate","✍️ Prendi note, rifletti dopo"]},
              {title:"🎧 Bilateral Stimulation",description:"Audio alternato orecchio dx/sx per calma",prompt:"EMDR music o bilateral beats. Riduce attivazione emotiva pre-ansia.",duration:"15 min",examples:["🎵 YouTube: 'EMDR bilateral music'","🧠 Stimolazione alternata calma amigdala","😌 Usa prima situazioni stressanti"]},
              {title:"📖 Rejection Journal",description:"Traccia rifiuti e crescita conseguente",prompt:"Ogni critica/bocciatura: data, cosa è successo, cosa hai imparato, come sei cresciuto.",duration:"10 min/evento",examples:["❌ Es: Bocciato esame → Studiato meglio teoria → Passato con voto alto","📈 Rifiuto come data point, non identità","💪 Portfolio di resilienza"]},
              {title:"🎯 Selective Attention Training",description:"Focalizza su positivo durante critiche",prompt:"Durante feedback: conta attivamente quanti commenti positivi ricevi. Bilancia bias negativo.",duration:"Variabile",examples:["✅ Mente ricorda negativo di più (bias)","🎯 Forzati notare anche positivo","📝 Scrivi sia positivo che negativo"]},
              {title:"🌳 Forest Bathing Pre-Exam",description:"Natura riduce cortisolo pre-stress",prompt:"Giorno prima esame: 30 min in natura. Cammina lentamente, osserva alberi.",duration:"30 min",examples:["🌲 Shinrin-yoku (bagno foresta) riduce stress","🧘 Natura resetta sistema nervoso","📵 No phone, solo presenza"]},
              {title:"🎵 Confidence Playlist",description:"Brani che ti fanno sentire potente",prompt:"10 canzoni che ti danno fiducia. Ascolta loop prima di performance.",duration:"30 min",examples:["💪 Rocky theme, Eye of Tiger, brani motivazionali","🎵 Musica influenza mood e energia","⚡ Diventa rituale pre-performance"]},
              {title:"📝 Catastrophe Scale",description:"Quanto è davvero grave scenario peggiore?",prompt:"Scala 1-100: morte = 100. Bocciare esame? Probabile 15. Ridimensiona catastrofe.",duration:"5 min",examples:["📊 Prospettiva: esame fallito vs tragedie reali","🎯 Ansia sproporzionata a rischio reale","✅ Ricalibra risposta emotiva"]},
              {title:"🎭 Persona Creation",description:"Crea alter ego sicuro per performance",prompt:"Immagina versione di te super-fiduciosa. Dagli nome. 'Canalizzi' quella persona durante esami.",duration:"15 min",examples:["🎸 Es: 'Marco il Confidente' vs 'Marco l'Ansioso'","🎭 Beyoncé usa Sasha Fierce come alter ego","💪 Distanza psicologica riduce pressione"]},
              {title:"🧠 Mindfulness Bell Practice",description:"App che suona bell random per mindfulness",prompt:"Installa app (es: Mindfulness Bell). Ogni volta suona: 3 respiri consapevoli. Tutto il giorno.",duration:"Tutto giorno",examples:["🔔 Interrompe autopilota ansioso","🧘 Micro-momenti mindfulness cumulativi","📱 App gratuite disponibili"]},
              {title:"💌 Future Self Letter",description:"Scrivi lettera a te dopo l'esame",prompt:"Immagina di aver già fatto esame. Scrivi lettera di incoraggiamento a te pre-esame.",duration:"15 min",examples:["✍️ 'Caro me del passato, è andato meglio di quanto temessi...'","🔮 Prospettiva futura riduce ansia presente","💙 Compassione retroattiva"]},
              {title:"🎯 Attention Spotlight",description:"Dove metti attenzione cresce",prompt:"Esperimento: focus 1 giorno solo su cosa va bene. Nota come cambia percezione.",duration:"1 giorno",examples:["✨ Attenzione su positivo → vedi più positivo","🧠 Bias conferma funziona in entrambe direzioni","📊 Usa a tuo favore"]},
              {title:"🏃 Anxiety Shakeout",description:"Scuoti fisicamente il corpo per rilasciare tensione",prompt:"3 minuti: scuoti braccia, gambe, salta. Rilascia adrenalina accumulata.",duration:"3 min",examples:["🐕 Animali scuotono corpo dopo stress","💥 Rilascia energia ansiosa intrappolata","⚡ Fai prima di entrare in aula esame"]},
              {title:"📊 Success Log",description:"Diario solo di successi musicali",prompt:"Ogni sera: 1 cosa musicale che hai fatto bene oggi. Anche minuscola.",duration:"5 min/giorno",examples:["🎵 Es: 'Intonazione migliorata', 'Finito arrangiamento'","📖 Rileggi prima di esami per fiducia","✅ Contrasta memoria selettiva negativa"]},
              {title:"🎵 Pre-Performance Ritual",description:"Sequenza fissa azioni pre-esibizione",prompt:"Crea rituale: Es. 1.Stretching 2.Respiro 3.Affermazione 4.Canzone. Sempre uguale.",duration:"10 min",examples:["🔄 Ripetizione crea sicurezza","🧠 Cervello associa rituale con performance","⚓ Diventa àncora di calma"]},
              {title:"💭 Worry Postponement",description:"Rimanda preoccupazioni a orario fisso",prompt:"Quando ansia emerge: 'Ci penserò alle 18 nel worry time'. Contenimento temporale.",duration:"Variabile",examples:["⏰ Worry time = 15 min dedicati solo ad ansie","🚫 Fuori da quella finestra: rimanda pensieri","🧠 Insegna che ansie non sono urgenze"]},
              {title:"🌸 Loving-Kindness per il Performer",description:"Meditazione metta adattata per musicisti",prompt:"5 min seduto comodo. Ripeti mentalmente: 'Possa io esibirmi con gioia. Possa io essere libero dalla paura. Possa la mia musica portare bellezza.' Respira tra ogni frase. Gentilezza verso te stesso come performer.",duration:"5 min",examples:["💙 Metta = gentilezza amorevole buddhista","🎵 Adattato per ansia da performance","🧘 Ripeti ogni mattina per 30 giorni"]},
              {title:"🎭 Ansia Come Personaggio",description:"Esternalizza l'ansia dandole identità separata",prompt:"Dai nome e aspetto alla tua ansia (es. 'Ansiolina', piccola creatura grigia). Quando appare, salutala: 'Ciao Ansiolina, ti vedo. Grazie per cercare di proteggermi, ma ora gestisco io.' Dialogo gentile.",duration:"10 min",examples:["👋 Riconoscimento senza fusione","🗣️ 'Grazie, ma non hai ragione questa volta'","💚 Compassione anche per parti ansiose di te"]},
              {title:"🌊 Body Scan Anti-Ansia",description:"Rilascio tensione fisica parte per parte",prompt:"Sdraiato o seduto. 15 min: porta attenzione a ogni parte del corpo dalla testa ai piedi. Dove senti tensione? Respira in quel punto, rilascia con l'espirazione. Ansia vive nel corpo, liberala.",duration:"15 min",examples:["🧠 Testa: mascella serrata? Rilascia","💪 Spalle: alzate? Abbassale consapevolmente","🦵 Gambe: tese? Lascia andare"]},
              {title:"🎨 Performance Immaginata con Gentilezza",description:"Visualizzazione positiva ma realistica",prompt:"Chiudi occhi. Immagina tua performance: non perfetta, ma piena di presenza e gentilezza verso te stesso. Fai errore minore? Ti sorridi internamente e continui con grazia. Focus su resilienza gentile, non perfezione.",duration:"10 min",examples:["✨ Perfezione non è il goal, connessione sì","💙 Errori gestiti con auto-compassione","🎵 Pubblico sente la tua umanità e presenza"]},
              {title:"📿 Mantra Pre-Esame Personalizzato",description:"Frase ancora per momenti di picco ansia",prompt:"Crea tuo mantra breve (5-7 parole) che ti calma. Ripetilo 108 volte con respiri. Es: 'Sono preparato, sono capace, vado bene.' Usa prima di ogni esame.",duration:"10 min",examples:["🔄 'Faccio del mio meglio, è sufficiente'","🌟 'Sono più della mia performance'","💪 'Ho fatto il lavoro, ora mi fido'"]},
              {title:"🤝 Buddy System Anti-Panico",description:"Patto con compagno per supporto reciproco",prompt:"Trova compagno fidato. Scambiate numeri. Prima di esami: messaggini di incoraggiamento. Durante ansia: chiamata breve per razionalizzare paure. Supporto reciproco, non competizione.",duration:"Variabile",examples:["📱 'Ehi, tutto ok? Respira con me 3 volte'","💬 'Ricorda: hai studiato, sei pronto'","🤗 Vulnerabilità condivisa crea connessione"]},
              {title:"🎯 Ansia Come Energia Utile",description:"Reframe: ansia è eccitazione, non minaccia",prompt:"Lista sensazioni fisiche ansia: cuore veloce, respiro corto, mani fredde. Ora rileggila come 'eccitazione per performance'. Stessi sintomi, interpretazione diversa. Corpo si prepara, non ti sabota.",duration:"5 min",examples:["💓 Cuore veloce = energia per eseguire","🌬️ Respiro rapido = ossigenazione muscoli","❄️ Mani fredde = sangue va ai muscoli grandi"]},
              {title:"🌈 Gratitudine Post-Performance",description:"Indipendentemente dal risultato, trova cosa apprezzare",prompt:"Subito dopo esame/esibizione, scrivi 3 cose per cui sei grato riguardo a quell'esperienza. Anche se è andata male. Es: 'Sono grato di averci provato', 'Grato per lezione appresa', 'Grato di aver finito'.",duration:"5 min",examples:["🙏 Gratitudine spezza ciclo autocritica","💎 Anche 'fallimenti' hanno valore","📈 Ogni esperienza è crescita"]},
              {title:"🧘 Respirazione 4-7-8 Pre-Palco",description:"Tecnica respiratoria per calmare sistema nervoso",prompt:"Proprio prima di entrare: inspira 4 secondi, trattieni 7, espira 8. Ripeti 4 cicli. Attiva sistema parasimpatico (calma). Pratica settimane prima, non solo giorno dell'esame.",duration:"3 min",examples:["🫁 4 in, 7 hold, 8 out","🧠 Scientificamente provato ridurre cortisolo","⚡ Diventa automatismo pre-performance"]},
              {title:"🎭 Esposizione Graduale alle Critiche",description:"Desensibilizzazione progressiva al feedback",prompt:"Settimana 1: chiedi feedback a 1 amico fidato. Settimana 2: a 2 persone. Settimana 3: a piccolo gruppo. Settimana 4: a pubblico più ampio. Aumenta tolleranza gradualmente.",duration:"4 settimane",examples:["📊 Esposizione graduale riduce reattività","💪 Muscolo della resilienza si allena","🎯 Critiche diventano dati, non attacchi"]},
              {title:"🌅 Routine Mattutina di Centratura",description:"Inizia giornata ancorato, non ansioso",prompt:"Prima di guardare telefono: 5 min di stretching, 5 min journaling ('Come mi sento? Cosa serve oggi alla mia parte ansiosa?'), 5 min meditazione o respirazione. 15 min totali per centrarti.",duration:"15 min",examples:["🚫 NO telefono prima di routine","📔 Journaling connette con bisogni interni","🧘 Meditazione crea spazio tra te e ansia"]},
              {title:"💖 Lettera di Compassione a Te Ansioso",description:"Scrivi come se fossi il tuo migliore amico",prompt:"Immagina migliore amico sta soffrendo la tua stessa ansia da esame. Cosa gli scriveresti? Ora scrivi quella lettera a te stesso. Usa gentilezza, validazione, incoraggiamento che useresti per loro.",duration:"20 min",examples:["💌 'Caro [tuo nome], vedo quanto sei spaventato...'","🤗 'È comprensibile sentirti così, è difficile'","🌟 'Sei coraggioso ad affrontarlo comunque'"]}
            ],
            'paesaggio-sonoro': [
              {title:"🎧 Inventario Acustico Personale",description:"Cataloga tutto ciò che le tue orecchie percepiscono",prompt:"Fermati 5 minuti. Annota ogni suono che senti, dal più evidente al più nascosto. Se in gruppo, confronta le liste: ognuno avrà percepito una realtà acustica diversa.",duration:"10 min",examples:["🌳 Prova in luoghi diversi: parco, metro, casa","📝 Nessuna risposta è sbagliata, ogni ascolto è unico","💡 Sviluppa l'abitudine quotidiana all'ascolto attivo"]},
              {title:"🔤 Classificazione Sonora N-U-T",description:"Analizza l'origine dei suoni percepiti",prompt:"Riprendi la tua lista di suoni. Segna N (natura), U (umano), T (tecnologico) per ogni suono. Quale categoria domina? Quanti suoni hai prodotto tu stesso?",duration:"8 min",examples:["🌊 N = vento, uccelli, pioggia","👥 U = voci, passi, respiro","🔌 T = motori, elettronica, macchinari"]},
              {title:"⏱️ Temporalità Acustica C-R-U",description:"Distingui pattern temporali dei suoni",prompt:"Dalla tua lista, classifica ogni suono come: C (continuo), R (ripetitivo), U (unico). Riesci a ricordare se un suono continuo esisteva prima che iniziassi ad ascoltare?",duration:"10 min",examples:["🔊 C = frigorifero, traffico lontano, ventilatore","🔔 R = campane, sirene, notifiche","⚡ U = clacson singolo, porta che sbatte, voce isolata"]},
              {title:"📊 Mappa Dinamica Forte-Debole",description:"Spazializza i suoni per intensità",prompt:"Foglio diviso orizzontalmente: sopra = suoni forti, sotto = suoni deboli. Posiziona ogni suono percepito. Poi ripeti: sopra = piacevoli, sotto = sgradevoli.",duration:"12 min",examples:["💥 Forti: traffico, musica, voci alte","🍃 Deboli: fruscio foglie, tastiera, orologio","😊 Piacevole/sgradevole è soggettivo"]},
              {title:"🧭 Mappa Spaziale Egocentrica",description:"Disegna la geografia dei suoni intorno a te",prompt:"Cerchio al centro del foglio = tu. Scrivi dentro i suoni che produci. Fuori, posiziona gli altri suoni in base a distanza e direzione reale da cui provengono.",duration:"15 min",examples:["📍 Suoni vicini: respiro, vestiti, sedia","🌍 Suoni distanti: traffico, aerei, campane","🎯 Precisi nella direzione: davanti, dietro, sinistra"]},
              {title:"🚶 Suoni Statici vs Dinamici",description:"Identifica chi si muove: tu o il suono?",prompt:"Tre categorie: suoni fermi che oltrepassi, suoni che si muovono davanti a te, suoni che si muovono con te. Fai esempi per ciascuna.",duration:"10 min",examples:["🏛️ Fissi: sirene, impianti, campane","🚗 Mobili: auto, aerei, animali","👟 Con te: voce, passi, vestiti, accessori"]},
              {title:"👁️ Vedere con le Orecchie",description:"Localizza una voce in movimento a occhi chiusi",prompt:"In coppia o gruppo. Una persona cammina parlando, gli altri a occhi chiusi la seguono con l'udito. Indicala mentre si sposta. Percepisci ombre acustiche quando passa dietro oggetti?",duration:"15 min",examples:["🎭 Davanti o di spalle? Suono cambia","🚪 Dietro tenda o porta? Suono attutito","🪑 Dietro oggetti piccoli? Ombre sottili"]},
              {title:"🚦 Incrocio Acustico",description:"Immersione nel caos urbano",prompt:"Vai a un incrocio trafficato. Occhi chiusi. Ascolta 5 minuti tutti i movimenti sonori. Suoni vicini (anche spaventosamente vicini) vs suoni lontani.",duration:"20 min",examples:["🚗 Traffico denso = campo sonoro ristretto","🌳 Traffico scarso = puoi udire lontano","⚠️ Attenzione alla sicurezza, scegli posto protetto"]},
              {title:"🌄 Espansione del Paesaggio Sonoro",description:"Quanto lontano riesci a sentire?",prompt:"In ambiente aperto (parco, collina). Identifica il suono più lontano percepibile. Stima la distanza. In città riesci a fare lo stesso? Confronta.",duration:"15 min",examples:["🏙️ Città = suoni vicini, edifici limitano","🌾 Campagna = suoni lontani, orizzonti aperti","📏 Allenati a stimare distanze sonore"]},
              {title:"🎯 Conta Suoni Specifici",description:"Concentrazione selettiva su categoria",prompt:"Scegli un tipo di suono (freni, cani, motociclette). Conta quante volte lo senti in 10 minuti. Familiarità con dettagli del paesaggio.",duration:"10 min",examples:["🚙 Freni stridenti in incrocio","🐕 Abbaio cani in quartiere","🏍️ Motociclette che passano"]},
              {title:"👞 Dizionario dei Passi",description:"Identifica scarpe e andature",prompt:"Strada affollata. Quanti tipi di scarpe diverse riesci a distinguere? Tacchi, sneakers, stivali, sandali... Ogni passo è unico.",duration:"15 min",examples:["👠 Tacchi alti: ritmo veloce, suono secco","👟 Sneakers: ovattato, leggero","🥾 Stivali: pesante, deciso, ritmico"]},
              {title:"🎵 Memoria Tonale Ambulante",description:"Mantieni un'altezza mentre cammini",prompt:"Trova un ronzio continuo (ventilatore, elettrico). Canticchialo. Cammina 10 minuti nel quartiere continuando a canticchiare. Torna: sei ancora in tono?",duration:"20 min",examples:["⬆️ Camminata veloce = pitch sale","⬇️ Camminata lenta = pitch scende","❓ Perché accade? Energia fisica influenza percezione"]},
              {title:"🏪 Caccia al Silenzio Commerciale",description:"Trova il negozio più silenzioso",prompt:"Entra in vari negozi. Quale è il più silenzioso? Che tipo di negozio è? Quanti hanno musica o radio? Quali suoni caratterizzano luoghi specifici?",duration:"25 min",examples:["📚 Librerie spesso silenziose","🎵 Abbigliamento = musica quasi sempre","🍕 Ristoranti = chiacchiere + cucina"]},
              {title:"🪜 Asimmetria delle Scale",description:"Salire vs scendere produce suoni diversi?",prompt:"Trova scale pubbliche frequentate. Ascolta chi sale e chi scende. Stesso suono? Quale più forte? Perché?",duration:"10 min",examples:["⬆️ Salita: sforzo, appoggio pesante","⬇️ Discesa: più leggero, veloce","👟 Dipende anche da scarpe e velocità"]},
              {title:"🚶 Passeggiata in Fila Indiana Silenziosa",description:"Cammino di gruppo in ascolto profondo",prompt:"Gruppo in fila. Distanza tale da non sentire passi di chi precede. Camminate 15 minuti in silenzio totale. Dopo, scrivi risposte a domande sull'esperienza.",duration:"30 min",examples:["❓ Suono più forte/debole udito?","❓ Suono più lontano? Distanza stimata?","❓ Suono più interessante/più brutto?"]},
              {title:"🔍 Ricerca Suoni su Commissione",description:"Trova o crea suoni specifici richiesti",prompt:"Lista di suoni da trovare/produrre: goccia, telefono, passi, vento, campana, bussare, fruscio, piccola esplosione. Cerca nella realtà o creativamente.",duration:"20 min",examples:["💧 Goccia: rubinetto, bicchiere, dito bagnato","📞 Telefono: vero o imitazione vocale","🌬️ Vento: soffio, foglio agitato, synth"]},
              {title:"🎨 Disegno Sonoro in Tempo Reale",description:"Traduci suono in segno grafico",prompt:"Qualcuno produce un suono. Disegnalo mentre accade, fino a quando si estingue. Non oggetti, solo impressioni: texture, forme, energia, ritmo.",duration:"15 min",examples:["🌊 Suono lungo = linea fluida","💥 Suono esplosivo = tratto rapido frammentato","🎵 Suono ritmico = pattern ripetuto"]},
              {title:"🌈 Sinestesia: Colori dei Suoni",description:"Quali colori hanno i suoni per te?",prompt:"Prendi suoni della tua collezione. Assegna un colore a ciascuno. Discuti: perché quella associazione? È soggettiva o condivisa?",duration:"12 min",examples:["🔴 Rosso = suoni aggressivi, forti","💙 Blu = suoni calmi, acquatici","🟡 Giallo = suoni acuti, brillanti"]},
              {title:"📐 Geometria Acustica",description:"I suoni hanno forme?",prompt:"Ascolta diversi suoni. Quali sono rotondi? Triangolari? Quadrati? Lineari? Associa forme geometriche a qualità sonore.",duration:"15 min",examples:["⭕ Rotondi: campane, bordone, onde","🔺 Triangolari: suoni acuti, percussivi","⬛ Quadrati: suoni secchi, definiti"]},
              {title:"🎤 Concerto Naturale Vocale",description:"Imita un paesaggio sonoro con voci",prompt:"Gruppo diviso in 2 squadre (6-8 persone). Scegliete ambiente (urbano/rurale). Create composizione vocale imitando tutti i suoni: uccelli, traffico, vento, acqua, animali, macchine.",duration:"30 min",examples:["🌳 Bosco: uccelli, fruscio, vento, ruscello","🏙️ Città: traffico, sirene, voci, costruzioni","🌊 Mare: onde, gabbiani, vento, barche"]},
              {title:"🔄 Trasmissione Orale di Composizione",description:"Insegna il tuo concerto a un altro gruppo",prompt:"Gruppo A esegue il proprio concerto naturale. Gruppo B osserva (ogni membro segue un esecutore specifico). Poi Gruppo B deve replicare la composizione senza spartito.",duration:"25 min",examples:["👂 Apprendimento per imitazione","🎭 Come si tramanda musica orale","🔁 Ripeti esercizio più volte per precisione"]},
              {title:"🗣️ Onomatopee Personali",description:"Inventa parole sonore per concetti",prompt:"Teoria: linguaggio nacque imitando suoni. Inventa parole onomatopeiche nella tua lingua privata per: campana, starnuto, bomba, gatto che fa le fusa, chiaro di luna.",duration:"15 min",examples:["🔔 Campana: 'dingolon', 'tambalà'","💥 Bomba: 'krapùm', 'bùmfra'","😺 Fusa: 'rrrónron', 'prururù'"]},
              {title:"💧 Vocabolario dell'Acqua",description:"Crea termini inventati per stati dell'acqua",prompt:"L'acqua ha infinite forme sonore. Inventa parole onomatopeiche per: gocce di pioggia, corrente, cascata, fiume, onde oceano.",duration:"12 min",examples:["💧 Gocce: 'plic-plic', 'tichetì'","🌊 Onde: 'frùscia-retràh', 'uoooosh'","🏞️ Cascata: 'shhhrrraaaah', 'tùmbala'"]},
              {title:"🎯 Sequenze Sonore Complesse",description:"Trova suoni con transizioni specifiche",prompt:"Compito dettagliato: trova un suono che inizia raschiando e finisce tintinnando. Uno che inizia con tonfo e finisce con cinguettio. Uno che estinguendosi sale di tono.",duration:"20 min",examples:["🔧 Raschiare→tintinnare: attrezzo su metallo","💥 Tonfo→cinguettio: oggetto cade su piano","📻 Sale estinguendosi: feedback, Doppler invertito"]},
              {title:"🎭 Improvvisazione con Scarpe",description:"Composizione ritmica con calzature",prompt:"Ognuno porta un paio di scarpe. Raggruppate scarpe simili: stivali, tacchi, sandali, sneakers. Ogni gruppo crea improvvisazione 10 minuti. Poi unite tutto in composizione unica.",duration:"40 min",examples:["👠 Tacchi: ritmi secchi, veloci","🥾 Stivali: groove pesante, marziale","👟 Sneakers: texture morbida, shuffle"]},
              {title:"🎵 Confronto Immagini vs Suoni",description:"Traducibilità tra modalità sensoriali",prompt:"Prendi alcuni suoni e disegnali mentre li esegui. Durata disegno = durata suono. Non oggetti: solo impressioni, texture, energie.",duration:"18 min",examples:["🌀 Suono spiralante = disegno a spirale","💥 Suono esplosivo = linee che esplodono dal centro","🎵 Suono melodico = linea fluida ondeggiante"]},
              {title:"🌍 Passeggiata Acustica Guidata - Domande Post",description:"Esperienza strutturata con questionario",prompt:"Dopo passeggiata silenziosa, rispondi per iscritto: suono più forte? Più debole? Più acuto? Tre in movimento? Tre dall'alto? Il più brutto? Il più bello? Più lontano? Uno da eliminare?",duration:"45 min totali",examples:["📝 18 domande specifiche sull'esperienza","🎯 Allena osservazione acustica dettagliata","💬 Discussione di gruppo sulle risposte"]},
              {title:"🔊 Analisi Cambiamenti Vocali in Movimento",description:"Variazioni qualità voce nello spazio",prompt:"Gruppo a occhi chiusi. Una persona cammina parlando. Gli altri seguono con le orecchie e indicano. Sta di fronte o di spalle? In angolo o presso porta? Dietro tenda?",duration:"15 min",examples:["👤 Fronte vs spalle: timbro diverso","🚪 Passaggio porta: riverbero cambia","🪟 Tenda: suono attutito, ovattato"]},
              {title:"🌐 Paesaggio Sonoro Culturale",description:"Suoni tipici di luoghi geografici",prompt:"Ricerca ed esplora come diversi luoghi del mondo hanno suoni caratteristici. Scarpe italiane vs canadesi vs nigeriane. Crea catalogo sonoro geografico.",duration:"30 min",examples:["🇮🇹 Italia: tacchi su sampietrini","🇯🇵 Giappone: geta di legno","🇧🇷 Brasile: havaianas che schioccano"]},
              {title:"🎶 Composizione con Qualità Onomatopeiche",description:"Crea pezzo usando solo imitazioni vocali",prompt:"Gruppo crea composizione interamente vocale imitando paesaggio sonoro complesso: urbano o naturale. Ogni membro = uno strumento del paesaggio.",duration:"35 min",examples:["🚗 Traffico: voci = auto diverse","🌳 Foresta: voci = uccelli, vento, animali","🏭 Fabbrica: voci = macchinari, sirene, echi"]},
              {title:"👂 Memoria Acustica a Lungo Termine",description:"Ricostruisci paesaggio sonoro dal ricordo",prompt:"Pensa a un luogo dell'infanzia. Quali suoni ricordi? Elencali. Poi crea rappresentazione sonora vocale di quel ricordo. Il suono evoca memoria potente.",duration:"20 min",examples:["🏡 Casa infanzia: TV, pentole, voci familiari","🏫 Scuola: campanella, voci corridoio, penne","🌳 Parco giochi: altalene, grida, palla"]},
              {title:"🎚️ Dinamiche: Audizione Comparativa",description:"Classifica suoni per volume relativo",prompt:"Durante passeggiata o ascolto statico, crea scala 1-10 di intensità. Posiziona ogni suono percepito. Quale categoria (forte/debole) domina?",duration:"15 min",examples:["📊 1-3: sussurri, fruscii, respiri","📊 4-7: conversazioni, passi, porte","📊 8-10: traffico, sirene, musica alta"]},
              {title:"🧩 Puzzle Acustico Decostruttivo",description:"Scomponi paesaggio complesso in layer",prompt:"In ambiente ricco (piazza, stazione). Identifica ogni layer sonoro separatamente: traffico, voci, musica, natura, tecnologia. Quanti layer sovrapposti percepisci?",duration:"20 min",examples:["🎧 Layer 1: traffico costante (base)","🎧 Layer 2: voci intermittenti (medio)","🎧 Layer 3: eventi puntuali (primo piano)"]},
              {title:"🔴 Registrazione Mentale 360°",description:"Memorizza spazio sonoro completo",prompt:"Stai fermo 5 minuti. Memorizza tutto il campo sonoro intorno a te (360 gradi). Poi spostati e cerca di ricostruire mentalmente quella scena acustica.",duration:"15 min",examples:["🧠 Allena memoria acustica spaziale","🎯 Dettagli dimenticati emergono dopo","🔄 Confronta memoria vs realtà ritornando"]},
              {title:"🎼 Notazione Grafica del Paesaggio",description:"Crea partitura visiva di ambiente",prompt:"Ascolta paesaggio sonoro 10 minuti. Crea notazione grafica personale che ne rappresenti struttura, dinamiche, eventi. Non spartito tradizionale: simboli tuoi.",duration:"25 min",examples:["📊 Linee continue = droni","⚡ Punti = eventi isolati","🌊 Onde = pattern ripetitivi variabili"]},
              {title:"🕰️ Orologio Sonoro Quotidiano",description:"Ritmi e cicli del paesaggio nelle 24h",prompt:"Documenta come cambia paesaggio sonoro della tua zona in diverse ore: alba, mezzogiorno, sera, notte. Quali suoni segnano il tempo?",duration:"1 giorno",examples:["🌅 Alba: uccelli, primi traffico","🌆 Mezzogiorno: caos massimo","🌙 Notte: silenzi, suoni lontani amplificati"]},
              {title:"👥 Teatro Acustico Collettivo",description:"Performance site-specific vocale",prompt:"Gruppo sceglie luogo pubblico. Crea performance vocale che dialoga con paesaggio sonoro esistente. Voci si integrano, rispondono, contrastano con ambiente.",duration:"45 min",examples:["🚉 Stazione: voci imitano/alterano annunci","🌳 Parco: voci si fondono con natura","🏛️ Museo: sussurri riecheggiano architettura"]},
              {title:"🎯 Bersaglio Sonoro Mobile",description:"Segui un suono specifico nel caos",prompt:"Ambiente complesso (mercato, stazione). Scegli un tipo di suono (es. bambini che ridono). Seguilo esclusivamente ignorando tutto il resto. Concentrazione selettiva estrema.",duration:"15 min",examples:["👶 Voci bambini nel caos","🔔 Campanelli tra rumori","🎵 Musica lontana nel traffico"]},
              {title:"🌊 Soundwalk Tematico",description:"Passeggiata cercando categoria specifica",prompt:"Passeggiata con tema: trova solo suoni d'acqua. O solo suoni metallici. O solo voci umane. Documenta variazioni all'interno della categoria.",duration:"30 min",examples:["💧 Acqua: fontane, gocce, tubi, pioggia","🔩 Metallo: cancelli, chiavi, monete, lattine","🗣️ Voci: lingue, età, emozioni, distanze"]},
              {title:"🎭 Archeologia Acustica",description:"Suoni scomparsi vs suoni nuovi",prompt:"Intervista persona anziana: quali suoni della loro gioventù sono scomparsi? Quali nuovi sono apparsi? Crea documentario sonoro delle trasformazioni.",duration:"1 ora",examples:["❌ Scomparsi: campanari, carrozze, venditori ambulanti","✅ Apparsi: droni, smartphone, auto elettriche","🔄 Trasformazione del paesaggio sonoro urbano"]},
              {title:"🧘 Meditazione sul Suono Singolo",description:"Focalizzazione totale su una sorgente",prompt:"Scegli un suono continuo (frigorifero, traffico lontano). Ascoltalo esclusivamente per 10 minuti. Percepisci variazioni microtonali? Ritmi nascosti?",duration:"10 min",examples:["🔊 Suono 'costante' rivela variazioni","🎵 Pattern emergono dal caos apparente","🧠 Ascolto profondo vs ascolto superficiale"]},
              {title:"🌍 Mappa Acustica Comunitaria",description:"Progetto di documentazione collettiva",prompt:"Gruppo crea mappa sonora del quartiere. Ognuno documenta zona specifica. Assemblate mappa completa con descrizioni, registrazioni, disegni.",duration:"2-3 ore",examples:["🗺️ Usa app di mappe collaborative","📍 Segna punti di interesse sonoro","🎧 Allega registrazioni e descrizioni"]},
              {title:"🎪 Concorso Imitazione Virtuosa",description:"Gara di riproduzione vocale precisa",prompt:"Gruppo sceglie 10 suoni difficili da imitare. Ognuno prova. Votate le imitazioni migliori. Analizzate cosa rende una imitazione convincente.",duration:"30 min",examples:["🚁 Elicottero, motosega, allarme","🐸 Animali: gatto, rana, cavallo","🔧 Oggetti: frullatore, zip, carta strappata"]},
              {title:"📻 Radiodramma del Quotidiano",description:"Trasforma routine in narrazione sonora",prompt:"Registra o ricrea vocalmente la tua mattina tipo solo con suoni: sveglia, acqua, passi, porta, traffico, ecc. Composizione narrative solo acustica.",duration:"25 min",examples:["⏰ Sveglia → bagno → colazione → uscita","🎭 Solo suoni, no parole","🎬 Storytelling attraverso paesaggio sonoro"]},
              {title:"🌈 Spectrum Emotivo Acustico",description:"Associa emozioni a suoni ambientali",prompt:"Passeggiata emotiva: documenta quali suoni ti rendono felice, triste, ansioso, calmo, nostalgico. Crea tua mappa emotiva del paesaggio.",duration:"30 min",examples:["😊 Felice: uccelli, risate, musica","😰 Ansioso: sirene, freni, urla","😌 Calmo: fontane, vento, silenzio"]},
              {title:"🔬 Micro-Ascolto: Il Suono Invisibile",description:"Suoni sotto la soglia di attenzione normale",prompt:"Usa microfono o concentrazione estrema. Cerca i suoni più deboli esistenti: respiro tuo, orologio, elettricità, insetti. Mondo sonoro nascosto.",duration:"20 min",examples:["🦗 Insetti quasi impercettibili","⚡ Ronzio elettrico continuo","💨 Micromovimenti aria e vestiti"]},
              {title:"🎧 Ascolto Compassionevole della Città",description:"Ascolta suoni urbani con gentilezza, non giudizio",prompt:"Passeggiata urbana in zona trafficata. Invece di giudicare suoni come 'piacevoli' o 'fastidiosi', ascoltali con curiosità compassionevole. Ogni suono racconta storia di qualcuno che vive, lavora, si muove. 20 minuti di ascolto gentile.",duration:"20 min",examples:["🚗 Traffico = persone che vanno a lavorare, a casa, da amati","🔨 Lavori = qualcuno costruisce, ripara, crea","👶 Pianti bimbi = nuova vita, vulnerabilità umana"]},
              {title:"🌍 Mappatura Sonora Comunitaria Intergenerazionale",description:"Intervista 3 generazioni sui loro paesaggi sonori",prompt:"Intervista bambino (6-10 anni), adulto (30-50), anziano (70+). Quali suoni caratterizzano la loro giornata tipo? Confronta differenze generazionali. Crea mappa sonora che integra tutte e tre le prospettive.",duration:"90 min",examples:["👶 Bambino: tablet, cartoni, parco giochi","💼 Adulto: notifiche, traffico, ufficio","👴 Anziano: radio, campane, silenzio relativo"]},
              {title:"💚 Sonic Wellness Walk",description:"Passeggiata per benessere acustico intenzionale",prompt:"Pianifica percorso 30 min che massimizza suoni benefici per te: natura, acqua, silenzio, musica piacevole. Evita consapevolmente zone di stress sonoro. Mappa del tuo wellness acustico personale.",duration:"45 min",examples:["🌳 Parco con fontana e uccelli","🏛️ Chiostro silenzioso","🎵 Via con musicista di strada preferito"]},
              {title:"🔊 Contrasti Acustici Estremi",description:"Sperimenta differenze massime in breve tempo",prompt:"Vai dal luogo più rumoroso al più silenzioso che conosci, nel giro di 30 minuti. Nota come cambia tuo stato mentale/fisico. Documenta sensazioni nel passaggio da uno all'altro.",duration:"30 min",examples:["🚉 Stazione metro → biblioteca","🏗️ Cantiere → chiesa vuota","🎪 Mercato → giardino zen"]},
              {title:"🎨 Sinestesia Acustica: Colori dei Suoni",description:"Associa colori a paesaggio sonoro",prompt:"Passeggiata 20 min. Assegna colore a ogni suono percepito. Traffico = grigio? Uccelli = verde? Risate = giallo? Poi disegna mappa cromatica del percorso basata solo sui suoni.",duration:"35 min",examples:["🔵 Acqua = blu, azzurro","🔴 Sirene = rosso acceso","🟡 Bambini che giocano = giallo brillante"]},
              {title:"📍 Punti di Ascolto Segreti",description:"Scopri angoli acusticamente unici nella tua città",prompt:"Cerca 5 'punti d'ascolto' speciali: luoghi dove acustica è insolita, bella o strana. Scala a chiocciola? Sottopassaggio? Cortile interno? Documenta con registrazione o descrizione dettagliata.",duration:"60 min",examples:["🌀 Scala a chiocciola: riverbero circolare","🌉 Sotto ponte: eco metallico","🏛️ Cupola: sussurri amplificati"]},
              {title:"🎼 Partitura Acustica della Giornata Ideale",description:"Componi il paesaggio sonoro dei tuoi sogni",prompt:"Descrivi in dettaglio il paesaggio sonoro della tua giornata ideale, ora per ora. Alba: quali suoni? Mattino? Sera? Quanto di questo è già accessibile? Cosa puoi cambiare?",duration:"25 min",examples:["🌅 Alba: uccelli, non sveglia","☕ Mattino: caffettiera, jazz soft","🌙 Sera: pioggia leggera, pagine di libro"]},
              {title:"👂 Ascolto Binaurale Consapevole",description:"Esplora differenze tra orecchio destro e sinistro",prompt:"10 min con orecchio destro tappato, 10 min sinistro tappato, 10 min entrambi aperti. Come cambia percezione spaziale? Quale orecchio preferisci? Perché?",duration:"30 min",examples:["👂 Destro vs sinistro: preferenza inconscia?","🎯 Localizzazione suoni cambia drasticamente","🧠 Cervello integra informazioni da entrambi"]},
              {title:"🌧️ Diario Acustico Stagionale",description:"Documenta come suoni cambiano con le stagioni",prompt:"Una registrazione audio o descrizione scritta 15 min, stesso luogo, ogni stagione. Come cambia paesaggio sonoro tra estate, autunno, inverno, primavera? Progetto annuale.",duration:"15 min x 4 stagioni",examples:["🌸 Primavera: uccelli nidificano, piogge","☀️ Estate: grilli, condizionatori, voci fuori","🍂 Autunno: vento in foglie secche","❄️ Inverno: silenzio neve, riscaldamenti"]},
              {title:"🎭 Performance di Ascolto Pubblico",description:"Invita altri ad ascoltare con te in luogo pubblico",prompt:"Organizza evento: 10-15 persone, luogo pubblico, 20 min ascolto collettivo silenzioso. Dopo: discussione su cosa ognuno ha percepito. Performance di consapevolezza acustica condivisa.",duration:"45 min totali",examples:["🌳 Parco all'alba: ascolto collettivo canti uccelli","🏛️ Piazza serale: ascolto vita urbana","🌊 Lungo fiume: ascolto scorrere acqua"]},
              {title:"🔄 Trasformazione Acustica Temporale",description:"Stesso luogo, ore diverse, documenta cambiamenti",prompt:"Scegli luogo. Visitalo a 6am, 12pm, 6pm, 12am (mezzanotte). Registra o scrivi dettagli acustici. Come si trasforma completamente lo stesso spazio fisico attraverso il suono nelle 24h?",duration:"15 min x 4 momenti",examples:["🌅 6am: silenzio, primi uccelli, primi passi","☀️ 12pm: picco traffico, voci, caos","🌆 6pm: flusso ritorno a casa","🌙 12am: silenzi profondi, suoni distanti amplificati"]},
              {title:"💝 Sonic Love Letter",description:"Crea mappa sonora dedicata a persona cara",prompt:"Pensa a persona amata. Quali suoni associ a lei/lui? Crea 'lettera d'amore sonora': collage di registrazioni o descrizioni di suoni che rappresentano quella persona e il vostro legame.",duration:"40 min",examples:["☕ Rumore loro caffettiera al mattino","🎵 Canzone che cantano sotto doccia","😂 Loro risata specifica che riconosceresti ovunque"]},
              {title:"🧘 Meditazione Camminata Acustica",description:"Camminata lentissima con focus totale su suoni",prompt:"Cammina il più lentamente possibile per 15 minuti. Ogni passo: consapevolezza completa del suono che produce. Ogni suono ambientale: piena presenza. Meditazione in movimento attraverso l'ascolto.",duration:"15 min",examples:["👣 Ogni passo: ascolta contatto suolo","🍃 Vento: quando soffia, dove tocca","🎵 Lontano/vicino: nota distanze in cambiamento"]},
              {title:"🎯 Progetto Completo: Documentario del Tuo Paesaggio",description:"Progetto esteso di ricerca e documentazione",prompt:"Crea documentario audio/visivo completo del paesaggio sonoro della tua zona. Include: interviste, registrazioni, mappe, analisi storiche, previsioni future. Progetto comprensivo che integra tutto ciò che hai imparato.",duration:"2-3 ore distribuite",examples:["🎤 Interviste: residenti su come è cambiato","📍 Mappa interattiva con punti sonori chiave","🔊 Registrazioni curate con descrizioni","📊 Analisi pattern giornalieri/settimanali"]}
            ]
          };

          const exerciseCategories = [
            {
              id: 'esercizi-spettrali',
              title: '🎵 Esercizi Spettrali!',
              description: 'Pratiche misteriose per liberare la creatività oscura',
              icon: Flower,
              color: 'from-cyan-300 via-teal-300 to-cyan-400'
            },
            {
              id: 'blocco-creativo',
              title: 'Blocco Creativo',
              description: 'Supera perfezionismo e paura del foglio bianco',
              icon: Palette,
              color: 'from-purple-300 via-pink-300 to-purple-400'
            },
            {
              id: 'mancanza-ispirazione',
              title: 'Mancanza Ispirazione',
              description: 'Ritrova idee fresche e prospettive nuove',
              icon: Lightbulb,
              color: 'from-green-300 via-emerald-300 to-teal-300'
            },
            {
              id: 'burnout-accademico',
              title: 'Burnout Accademico',
              description: 'Gestisci stress da progetti e scadenze',
              icon: Zap,
              color: 'from-sky-300 via-blue-300 to-cyan-300'
            },
            {
              id: 'ansia-critica',
              title: 'Ansia da esami',
              description: 'Affronta revisioni ed esami con serenità',
              icon: Award,
              color: 'from-rose-300 via-pink-300 to-rose-400'
            },
            {
              id: 'paesaggio-sonoro',
              title: '🌍 Paesaggio Sonoro',
              description: 'Esplora e mappa l\'ambiente acustico che ti circonda',
              icon: Flower,
              color: 'from-amber-300 via-orange-300 to-amber-400'
            }
          ];

          const getRandomVariant = (category) => {
            const variants = exerciseVariants[category];

            // Tutti gli esercizi disponibili gratuitamente (360 esercizi totali)
            const availableVariants = variants;

            // Sistema di non ripetizione: traccia esercizi già mostrati per categoria
            const seenKey = `seen_exercises_${category}`;
            let seenIndices = [];

            try {
              const stored = localStorage.getItem(seenKey);
              seenIndices = stored ? JSON.parse(stored) : [];
            } catch (e) {
              seenIndices = [];
            }

            // Verifica validità degli indici salvati (potrebbero essere obsoleti)
            seenIndices = seenIndices.filter(idx => idx >= 0 && idx < availableVariants.length);

            // Crea array di indici non ancora visti
            const unseenIndices = [];
            for (let i = 0; i < availableVariants.length; i++) {
              if (!seenIndices.includes(i)) {
                unseenIndices.push(i);
              }
            }

            // Se tutti gli esercizi sono stati visti, resetta la lista
            let indicesToUse = unseenIndices.length > 0 ? unseenIndices : Array.from({length: availableVariants.length}, (_, i) => i);
            if (unseenIndices.length === 0) {
              console.log(`✅ Categoria ${category}: tutti i ${availableVariants.length} esercizi visti! Reset automatico.`);
              seenIndices = [];
              localStorage.setItem(seenKey, JSON.stringify([]));
            }

            // Selezione random dagli indici disponibili (non ancora visti)
            const randomArrayIndex = Math.floor(Math.random() * indicesToUse.length);
            const selectedIndex = indicesToUse[randomArrayIndex];
            const randomVariant = availableVariants[selectedIndex];

            // Salva l'indice come già visto
            seenIndices.push(selectedIndex);
            localStorage.setItem(seenKey, JSON.stringify(seenIndices));

            console.log(`🎲 Categoria ${category}: mostrato esercizio ${seenIndices.length}/${availableVariants.length} - "${randomVariant.title}"`);

            return randomVariant;
          };

          const generateWithGemini = async (category) => {
            if (!geminiApiKey) {
              alert('⚠️ Configura prima la tua API key di Gemini nelle impostazioni!');
              setShowApiSetup(true);
              return null;
            }

            // Rate limiter: 5 secondi tra richieste (per evitare errori Gemini)
            const now = Date.now();
            const timeSinceLastRequest = now - lastApiRequestTime;
            if (timeSinceLastRequest < 5000) {
              const waitSeconds = Math.ceil((5000 - timeSinceLastRequest) / 1000);
              setRateLimitCountdown(waitSeconds);
              alert(`⏱️ Attendi ${waitSeconds} secondi prima di generare un altro esercizio`);
              return null;
            }

            const prompts = {
              'esercizi-spettrali': `Sei un coach creativo per studenti di musica e musicisti specializzato in processi artistici non convenzionali e psicologia creativa.

COMPITO: Genera un esercizio spettrale/oscuro che liberi l'inconscio creativo attraverso pratiche musicali insolite.

VINCOLI TECNICI:
- DURATA: scegli liberamente tra 3 minuti e 90 minuti a seconda della complessità dell'esercizio
- Varia la durata: alterna esercizi brevi (3-10 min), medi (15-30 min), lunghi (45-90 min)
- Tecniche specifiche musicali: improvvisazione automatica, scrittura gestuale di melodie, composizione simbolica, registrazione concettuale, sound design sperimentale
- Materiali/Strumenti: specifica esattamente cosa serve (strumento, registratore, oggetti sonori, software, etc.)
- Processo: istruzioni step-by-step chiare e sequenziali

APPROCCIO:
- Esplorare ombre interiori e simbolismo personale attraverso il suono
- Provocatorio ma psicologicamente sicuro
- Focus sul processo creativo, non sul risultato tecnico perfetto
- Atmosfera misteriosa ma terapeutica

ESEMPI: Fornisci 3 esempi concreti con tecniche DIVERSE (es: uno con improvvisazione, uno con composizione, uno con sound design)

FORMATO OUTPUT - IMPORTANTE:
Rispondi ESCLUSIVAMENTE con un oggetto JSON valido. NESSUN testo prima o dopo il JSON.
NON usare newline (\\n) dentro le stringhe - usa solo spazi.
NON usare virgole finali (trailing commas).
Usa SOLO double quotes ("), mai single quotes (').

Formato: {"title": "Nome evocativo con emoji 🌑", "description": "Breve descrizione", "prompt": "Istruzioni dettagliate", "duration": "X min" (scegli tu la durata appropriata), "examples": ["Esempio 1", "Esempio 2", "Esempio 3"]}`,

              'blocco-creativo': `Sei un coach per Studenti di Musica specializzato in tecniche anti-perfezionismo.

COMPITO: Genera esercizio per demolire il blocco creativo e liberare l'azione musicale immediata.

VINCOLI TECNICI:
- DURATA: scegli liberamente tra 3 minuti e 90 minuti a seconda della complessità dell'esercizio
- Varia la durata: alterna esercizi rapidi (3-10 min), medi (15-30 min), intensivi (45-90 min)
- Tecniche specifiche musicali: improvvisazione cieca, composizione a tempo, loop istintivi, melodie seriali, ritmi spontanei
- Materiali/Strumenti: lista precisa di cosa serve (strumento, metronomo, registratore, app, etc.)
- Approccio: provocatorio, anti-perfezionista, focus su quantità > qualità

RISULTATO ATTESO:
- Bypassare il giudizio interno
- Produrre materiale musicale concreto (frammenti, idee, bozze)
- Generare materiale grezzo per composizioni future

ESEMPI: 3 varianti con tecniche/approcci DIVERSI (strumentale/vocale/elettronico/percussivo)

FORMATO OUTPUT - IMPORTANTE:
Rispondi ESCLUSIVAMENTE con un oggetto JSON valido. NESSUN testo prima o dopo il JSON.
NON usare newline (\\n) dentro le stringhe - usa solo spazi.
NON usare virgole finali (trailing commas).
Usa SOLO double quotes ("), mai single quotes (').

Formato: {"title": "Nome diretto", "description": "Cosa otterrai", "prompt": "Istruzioni pratiche", "duration": "X min" (scegli tu la durata appropriata), "examples": ["Esempio 1", "Esempio 2", "Esempio 3"]}`,

              'mancanza-ispirazione': `Sei un coach creativo per musicisti specializzato in pensiero laterale e brainstorming musicale.

COMPITO: Genera esercizio per sbloccare ispirazione fresca attraverso stimoli sonori e musicali inaspettati.

VINCOLI TECNICI:
- DURATA: scegli liberamente tra 3 minuti e 90 minuti a seconda della complessità dell'esercizio
- Varia la durata: alterna sprint creativi (3-10 min), esplorazioni medie (15-30 min), ricerche approfondite (45-90 min)
- Metodi musicali: constraint-based creativity, combinazioni random di scale/accordi, reinterpretazione stili, sound research sprint
- Output: frammenti melodici, progressioni, idee ritmiche, concept sonori, registrazioni di prova
- Approccio: ludico, sperimentale, divergente

FOCUS:
- Generare IDEE concrete per composizioni/performance
- Esplorare territori sonori non ovvi
- Creare archivio di spunti musicali utilizzabili

ESEMPI: 3 esercizi con approcci DIFFERENTI (melodico/armonico/ritmico/timbrico)

FORMATO OUTPUT - IMPORTANTE:
Rispondi ESCLUSIVAMENTE con un oggetto JSON valido. NESSUN testo prima o dopo il JSON.
NON usare newline (\\n) dentro le stringhe - usa solo spazi.
NON usare virgole finali (trailing commas).
Usa SOLO double quotes ("), mai single quotes (').

Formato: {"title": "Nome stimolante", "description": "Cosa scoprirai", "prompt": "Processo passo-passo", "duration": "X min" (scegli tu la durata appropriata), "examples": ["Esempio 1", "Esempio 2", "Esempio 3"]}`,

              'burnout-accademico': `Sei uno specialista di benessere per Studenti di Musica che affrontano stress da deadline, esami e audizioni.

COMPITO: Genera esercizio rigenerante che dia sollievo immediato pur mantenendo connessione con la pratica musicale.

VINCOLI TECNICI:
- DURATA: scegli liberamente tra 3 minuti e 90 minuti a seconda della complessità dell'esercizio
- Varia la durata: alterna pratiche brevi (3-10 min), medie (15-30 min), immersive (45-90 min)
- Tecniche rilassanti musicali: droni meditativi, ostinati ripetitivi, improvvisazione intuitiva su scala pentatonica, esplorazione timbrica contemplativa
- Materiali/Strumenti: semplici e accessibili (anche solo voce o oggetti quotidiani)
- Approccio: low-pressure, processuale, sensoriale

RISULTATO:
- Abbassare ansia e cortisolo attraverso il suono
- Riconnettersi con il piacere di fare musica
- Fattibile anche con poca energia mentale o fisica

ESEMPI: 3 pratiche DIVERSE per livelli di energia diversi (bassa/media/alta energia)

FORMATO OUTPUT - IMPORTANTE:
Rispondi ESCLUSIVAMENTE con un oggetto JSON valido. NESSUN testo prima o dopo il JSON.
NON usare newline (\\n) dentro le stringhe - usa solo spazi.
NON usare virgole finali (trailing commas).
Usa SOLO double quotes ("), mai single quotes (').

Formato: {"title": "Nome accogliente", "description": "Beneficio immediato", "prompt": "Istruzioni gentili", "duration": "X min" (scegli tu la durata appropriata), "examples": ["Variante 1", "Variante 2", "Variante 3"]}`,

              'ansia-critica': `Sei un coach per studenti di musica e musicisti specializzato in gestione dell'ansia da esposizione musicale.

COMPITO: Genera esercizio per affrontare critiche, revisioni e giudizio esterno con distacco sano.

VINCOLI TECNICI:
- DURATA: scegli liberamente tra 3 minuti e 90 minuti a seconda della complessità dell'esercizio
- Varia la durata: alterna tecniche rapide (3-10 min), protocolli medi (15-30 min), preparazioni complete (45-90 min)
- Focus: separare identità personale dal lavoro musicale
- Tecniche: auto-critica costruttiva, reframing mentale, documentazione processuale, visualization
- Output concreto: strumenti utilizzabili prima/durante/dopo critiche

APPROCCIO:
- Ridurre reattività emotiva
- Aumentare fiducia nelle scelte musicali
- Preparazione mentale pratica e progressiva

ESEMPI: 3 applicazioni per contesti DIVERSI (revisione/esame/audizione/concerto)

FORMATO OUTPUT - IMPORTANTE:
Rispondi ESCLUSIVAMENTE con un oggetto JSON valido. NESSUN testo prima o dopo il JSON.
NON usare newline (\\n) dentro le stringhe - usa solo spazi.
NON usare virgole finali (trailing commas).
Usa SOLO double quotes ("), mai single quotes (').

Formato: {"title": "Nome rassicurante", "description": "Cosa imparerai", "prompt": "Strategia step-by-step", "duration": "X min" (scegli tu la durata appropriata), "examples": ["Scenario 1", "Scenario 2", "Scenario 3"]}`,

              'paesaggio-sonoro': `Sei un coach specializzato in ascolto profondo, field recording e ecologia acustica. Ispirati agli insegnamenti di R. Murray Schafer e Bernie Krause.

COMPITO: Genera esercizio di esplorazione e documentazione del paesaggio sonoro circostante, sviluppando consapevolezza acustica e capacità di ascolto attivo.

VINCOLI TECNICI:
- DURATA: scegli liberamente tra 3 minuti e 90 minuti a seconda della complessità dell'esercizio
- Varia la durata: alterna ascolti brevi (3-10 min), esplorazioni medie (15-30 min), soundwalk estesi (45-90 min)
- Tecniche: ascolto analitico, mappatura sonora, classificazione suoni, imitazione vocale, notazione grafica, field recording mentale
- Setting: può essere indoor, outdoor urbano, natura, o combinazioni
- Output: liste, mappe, disegni, registrazioni mentali, composizioni vocali basate su osservazione reale

APPROCCIO:
- Dall'ascolto passivo all'ascolto attivo e analitico
- Sviluppo della "vista acustica" (capacità di vedere con le orecchie)
- Consapevolezza dell'impatto emotivo e culturale dei suoni
- Trasformazione dell'ambiente in materiale musicale e creativo
- Documentazione e memoria del paesaggio sonoro

ELEMENTI CHIAVE DA ESPLORARE:
- Origine: natura (N), umano (U), tecnologico (T)
- Temporalità: continuo (C), ripetitivo (R), unico (U)
- Spazialità: distanza, direzione, movimento
- Dinamica: forte/debole, piacevole/sgradevole
- Qualità: pitch, timbro, ritmo, texture

ESEMPI: 3 varianti con SETTING DIVERSI (indoor/strada urbana/natura - o combinazioni originali)

FORMATO OUTPUT - IMPORTANTE:
Rispondi ESCLUSIVAMENTE con un oggetto JSON valido. NESSUN testo prima o dopo il JSON.
NON usare newline (\\n) dentro le stringhe - usa solo spazi.
NON usare virgole finali (trailing commas).
Usa SOLO double quotes ("), mai single quotes (').

Formato: {"title": "Nome evocativo con emoji 🎧🌍", "description": "Obiettivo ascolto", "prompt": "Istruzioni esplorazione dettagliate", "duration": "X min" (scegli tu la durata appropriata), "examples": ["Setting 1 con focus", "Setting 2 con variazione", "Setting 3 con aspetto specifico"]}`
            };

            setIsGenerating(true);
            
            try {
              console.log('🔄 Chiamata API Gemini...');
              console.log('📍 API Key presente:', geminiApiKey ? 'Sì' : 'No');
              console.log('📍 Lunghezza API Key:', geminiApiKey?.length);

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
                const errorData = await response.json().catch(() => ({ error: 'Impossibile leggere risposta' }));
                console.error('❌ Errore API completo:', JSON.stringify(errorData, null, 2));

                let errorMessage = 'Errore sconosciuto';
                if (errorData.error) {
                  if (errorData.error.code === 400) {
                    errorMessage = 'API Key non valida o formato richiesta errato';
                  } else if (errorData.error.code === 403) {
                    errorMessage = 'API Key non autorizzata. Verifica che l\'API Gemini sia abilitata nel tuo progetto Google Cloud';
                  } else if (errorData.error.code === 429) {
                    errorMessage = 'Limite rate raggiunto. Riprova tra qualche minuto';
                  } else {
                    errorMessage = errorData.error.message || `Errore ${errorData.error.code}`;
                  }
                }

                throw new Error(errorMessage);
              }

              const data = await response.json();
              console.log('📍 Risposta API ricevuta:', data);

              if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                console.error('❌ Struttura risposta non valida:', data);
                throw new Error('Risposta API non valida: struttura mancante');
              }

              let generatedText = data.candidates[0].content.parts[0].text;
              console.log('📍 Testo generato:', generatedText.substring(0, 200) + '...');

              // Pulizia aggressiva del testo
              generatedText = generatedText
                .replace(/```json\s*/g, '')
                .replace(/```\s*/g, '')
                .trim();

              // Cerca JSON - usa una regex più semplice che cattura tutto tra { e }
              const jsonStart = generatedText.indexOf('{');
              const jsonEnd = generatedText.lastIndexOf('}');

              if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
                let jsonString = generatedText.substring(jsonStart, jsonEnd + 1);

                // Pulizia AGGRESSIVA del JSON estratto
                jsonString = jsonString
                  .replace(/,(\s*[}\]])/g, '$1')  // Rimuovi trailing commas
                  .replace(/\n/g, ' ')  // RIMUOVI newlines (non escape!)
                  .replace(/\r/g, ' ')  // Rimuovi carriage returns
                  .replace(/\t/g, ' ')  // Sostituisci tab con spazi
                  .replace(/\s+/g, ' ');  // Compatta spazi multipli in uno solo

                console.log('📍 JSON estratto (primi 200 char):', jsonString.substring(0, 200));

                try {
                  const exercise = JSON.parse(jsonString);

                  // Valida che abbia i campi richiesti
                  if (!exercise.title || !exercise.prompt || !exercise.duration) {
                    throw new Error('JSON manca di campi obbligatori (title, prompt, duration)');
                  }

                  setIsGenerating(false);
                  console.log('✅ Esercizio generato con successo');

                  return exercise;
                } catch (parseError) {
                  console.error('❌ Errore parsing JSON:', parseError);
                  console.error('📍 JSON completo:', jsonString);
                  throw new Error('JSON non valido ricevuto da Gemini. Riprova.');
                }
              } else {
                setIsGenerating(false);
                console.log('⚠️ Formato JSON non trovato, uso testo raw');
                return {
                  title: "Esercizio Generato da AI",
                  description: "Esercizio personalizzato",
                  prompt: generatedText,
                  duration: `${duration} min`,
                  examples: []
                };
              }
            } catch (error) {
              console.error('💥 Errore completo:', error);
              console.error('💥 Stack trace:', error.stack);
              alert(`⚠️ Errore nella generazione:\n\n${error.message}\n\nControlla la console del browser (F12) per maggiori dettagli.`);
              setIsGenerating(false);
              return null;
            }
          };

          const askClarification = async (question) => {
            if (!geminiApiKey) {
              alert('⚠️ Configura prima la tua API key di Gemini nelle impostazioni!');
              setShowApiSetup(true);
              return null;
            }

            if (!question || question.trim() === '') {
              alert('⚠️ Per favore, scrivi una domanda prima di inviare.');
              return null;
            }

            setIsAskingClarification(true);

            try {
              const prompt = `Sei un coach creativo per studenti di musica e musicisti. Lo studente sta seguendo questo esercizio:

TITOLO: ${currentVariant.title}
DESCRIZIONE: ${currentVariant.description}
ISTRUZIONI: ${currentVariant.prompt}
DURATA: ${currentVariant.duration}

Lo studente ha questa domanda o richiesta di chiarimento:
"${question}"

Fornisci una risposta chiara, pratica e incoraggiante. Sii specifico e concreto. Se necessario, suggerisci varianti o adattamenti dell'esercizio.

Rispondi in modo diretto, senza formattazioni particolari. Massimo 300 parole.`;

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
                throw new Error('Errore nella chiamata API');
              }

              const data = await response.json();

              if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Risposta API non valida');
              }

              const answer = data.candidates[0].content.parts[0].text;
              setClarificationAnswer(answer);
              setIsAskingClarification(false);
              return answer;
            } catch (error) {
              console.error('💥 Errore richiesta chiarimenti:', error);
              alert(`⚠️ Errore nella richiesta:\n\n${error.message}`);
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

          const HomeView = () => (
            <div className="space-y-6">
              <div className="text-center py-8 bg-gradient-to-r from-orange-200/30 via-amber-200/30 to-yellow-100/40 rounded-2xl border-2 border-orange-300/40 shadow-lg calm-glow">
                <h1 className="text-4xl font-bold text-wellness-primary mb-2">
                  🎵 Creative Wellness Coach for Musicians 🎵
                </h1>
                <p className="text-wellness-accent text-lg font-semibold">🎼 Edizione Musicisti 🎼</p>
                <p className="text-orange-600 text-sm mt-2">Il tuo supporto wellness per il benessere musicale</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setCurrentView('mood')}
                  className="card-hover p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl text-gray-800 shadow-lg border-2 border-orange-200/50"
                >
                  <div className="flex justify-center mb-4">
                    <Palette className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Traccia il tuo Umore</h3>
                  <p className="text-teal-800">Come Ti senti oggi?</p>
                </button>

                <button
                  onClick={() => setCurrentView('journal')}
                  className="card-hover p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl text-gray-800 shadow-lg border-2 border-green-200/50"
                >
                  <div className="flex justify-center mb-4">
                    <Leaf className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Diario Creativo</h3>
                  <p className="text-green-800">Scrivi pensieri e riflessioni</p>
                </button>

                <button
                  onClick={() => setCurrentView('exercises')}
                  className="col-span-2 card-hover p-8 bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl text-gray-800 shadow-xl border-4 border-pink-200/70 transform"
                >
                  <div className="flex justify-center mb-4">
                    <Plant className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Esercizi Guidati per Musicisti</h3>
                  <p className="text-pink-900 font-medium">Centinaia di pratiche per il benessere</p>
                </button>

                <button
                  onClick={() => setCurrentView('creativelab')}
                  className="col-span-2 card-hover p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl text-gray-800 shadow-xl border-4 border-purple-200/70 transform"
                >
                  <div className="flex justify-center mb-4">
                    <span className="text-6xl">🎵</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Creative Lab AI</h3>
                  <p className="text-purple-900 font-medium">Sblocca la tua creatività con AI</p>
                </button>

                <button
                  onClick={() => setCurrentView('progress')}
                  className="card-hover p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl text-gray-800 shadow-lg border-2 border-teal-200/50"
                >
                  <div className="flex justify-center mb-4">
                    <Butterfly className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">I Tuoi Progressi</h3>
                  <p className="text-teal-800">Visualizza il Tuo percorso</p>
                </button>

                <button
                  onClick={() => setCurrentView('insights')}
                  className="card-hover p-6 bg-gradient-to-br from-lime-50 to-green-100 rounded-2xl text-gray-800 shadow-lg border-2 border-green-200/50"
                >
                  <div className="flex justify-center mb-4">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Analisi & Insights</h3>
                  <p className="text-green-900">Scopri pattern e ricevi feedback</p>
                </button>
              </div>

              <div className="bg-gradient-to-r from-orange-100/50 via-green-100/40 to-white/60 p-6 rounded-xl border-2 border-orange-300/50 backdrop-blur-sm">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-wellness-accent">
                  <HealthyFood className="w-6 h-6" />
                  Progettato per Musicisti e Studenti
                </h3>
                <p className="text-orange-700 mb-2">
                  Esercizi specifici per Studenti di Musica e Musicisti: gestisci blocco creativo, burnout da progetti,
                  ansia da esami e ritrova l'ispirazione... anche nelle notti più oscure! 🌙
                </p>
                <p className="text-orange-600 text-sm">
                  🎵 centinaia di esercizi con 3 esempi ciascuno | 📓 Diario | ✨ Analisi risultati
                </p>
              </div>
            </div>
          );

          const MoodView = () => {
            const handleMoodClick = (mood, event) => {
              // Salva il mood
              setCurrentMood(mood);
              setMoodHistory([...moodHistory, { ...mood, date: new Date().toISOString() }]);
              setSelectedMoodId(mood.id);

              // Ottieni posizione del bottone cliccato
              const rect = event.currentTarget.getBoundingClientRect();
              const targetX = (rect.left / window.innerWidth) * 100;
              const targetY = (rect.top / window.innerHeight) * 100;

              // Fai correre il ragno verso il mood
              setPlantTarget({ x: targetX, y: targetY });

              // Dopo l'animazione (3 secondi), torna alla home
              setTimeout(() => {
                setSelectedMoodId(null);
                setPlantTarget(null);
                setCurrentView('home');
              }, 3000);
            };

            return (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-wellness-primary">Come ti senti oggi?</h2>
                <p className="text-orange-600">Traccia il tuo stato emotivo quotidiano</p>

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

              </div>
            );
          };

          const ExercisesView = () => (
            <div className="space-y-6">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-wellness-primary">Esercizi per Musicisti</h2>
                  <p className="text-orange-600 mt-1">Scegli una categoria per iniziare</p>
                </div>
                <button
                  onClick={() => setShowApiSetup(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-300 to-teal-400 text-gray-800 rounded-lg hover:opacity-90 transition-opacity border-2 border-orange-300/40"
                >
                  <Settings className="w-5 h-5" />
                  API Settings 🔮
                </button>
              </div>

              <div className="bg-gradient-to-r from-orange-100/50 to-white/60 border-l-4 border-orange-300 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-orange-600 font-semibold mb-1">💡 Come funziona</p>
                    <p className="text-orange-700 text-sm">
                      Ogni esercizio include <strong>3 esempi pratici</strong> diversi.
                      Click su <Shuffle className="w-4 h-4 inline" /> per cambiare esercizio,
                      o attiva <Bot className="w-4 h-4 inline" /> modalità API per contenuti infiniti!
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
                      <p className="font-bold text-purple-800">Modalità Esercizi</p>
                      <p className="text-sm text-purple-600">
                        {useApiForExercises
                          ? '🤖 AI Attiva - Generazione infinita con Gemini'
                          : '📚 Offline - Usa esercizi predefiniti senza API'}
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
                    {useApiForExercises ? '🤖 Modalità AI' : '📚 Modalità Offline'}
                  </button>
                </div>
                {geminiApiKey && geminiApiKey.trim() !== '' && useApiForExercises && (
                  <div className="mt-2">
                    <p className="text-green-600 text-sm">✅ API key configurata - Generazioni AI illimitate</p>
                  </div>
                )}
                {useApiForExercises && (!geminiApiKey || geminiApiKey.trim() === '') && (
                  <p className="text-orange-600 text-sm mt-2">⚠️ Modalità AI selezionata ma nessuna API key configurata. Clicca "API Settings" per configurarla.</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {exerciseCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedExercise(category.id);
                      setCurrentVariant(getRandomVariant(category.id));
                      setCurrentView('exercise-detail');
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
                ← Torna Home
              </button>
            </div>
          );

          const ExerciseDetailView = () => {
            if (!currentVariant) return null;
            
            const categoryData = exerciseCategories.find(c => c.id === selectedExercise);
            
            const loadNewVariant = async () => {
              setExerciseCompleted(false); // Reset completion status
              // Use API only if toggle is ON and API key exists
              if (useApiForExercises && geminiApiKey && geminiApiKey.trim() !== '') {
                const generated = await generateWithGemini(selectedExercise);
                if (generated) setCurrentVariant(generated);
              } else {
                // Use offline variant
                setCurrentVariant(getRandomVariant(selectedExercise));
              }
            };

            return (
              <div className="space-y-6">
                {/* Back Button */}
                <button
                  onClick={() => setCurrentView('exercises')}
                  className="mb-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-300 to-amber-400 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md border border-orange-300"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                  ← Torna agli Esercizi
                </button>

                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h2 className="text-4xl font-bold text-wellness-primary">{categoryData.title}</h2>
                    <p className="text-orange-600 mt-1 text-lg">{categoryData.description}</p>
                  </div>
                </div>

                <div className={`bg-gradient-to-br ${categoryData.color} p-8 rounded-2xl text-gray-800 relative shadow-2xl border-4 border-orange-300/50`}>
                  
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <div className="flex-1 min-w-[200px]">
                      <h3 className="text-2xl font-bold mb-2">{currentVariant.title}</h3>
                      <p className="text-gray-800/90 text-lg">{currentVariant.description}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-sky-300 to-cyan-400 border-2 border-cyan-400 backdrop-blur px-4 py-2 rounded-full flex-shrink-0 shadow-lg">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold text-lg">{currentVariant.duration}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-100/60 to-sky-100/80 border-2 border-cyan-400 backdrop-blur p-6 rounded-xl mb-4 shadow-inner">
                    <p className="text-xl leading-relaxed font-medium">{currentVariant.prompt}</p>
                  </div>


                  {currentVariant.examples && currentVariant.examples.length > 0 && (
                    <div className="bg-gradient-to-r from-green-100/60 to-teal-100/80 border-2 border-orange-300 backdrop-blur p-6 rounded-xl shadow-inner">
                      <button
                        onClick={() => setShowExamples(!showExamples)}
                        className="flex items-center gap-2 font-bold text-xl mb-3 hover:text-orange-600 transition-colors"
                      >
                        <Lightbulb className="w-6 h-6" />
                        {showExamples ? 'Nascondi' : 'Mostra'} 3 Esempi Pratici
                        <span className="text-lg ml-2">({showExamples ? '▼' : '▶'})</span>
                      </button>

                      {showExamples && (
                        <div className="space-y-3 mt-4 animate-fadeIn">
                          {currentVariant.examples.map((example, idx) => (
                            <div key={idx} className="bg-gradient-to-r from-emerald-100/60 to-green-100/80 border-2 border-green-400 p-4 rounded-lg shadow-md">
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
                        Hai bisogno di chiarimenti?
                        <span className="text-lg ml-2">({showClarification ? '▼' : '▶'})</span>
                      </button>

                      {showClarification && (
                        <div className="space-y-4 mt-4 animate-fadeIn">
                          <p className="text-gray-700 text-sm">
                            Hai dubbi sull'esercizio? Vuoi una guida più approfondita o suggerimenti su come adattarlo?
                            Chiedi all'AI coach!
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
                              placeholder="Es: Come posso adattare questo esercizio se non ho i materiali suggeriti? Puoi darmi più esempi pratici?"
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
                                  alert('⚠️ Per favore, scrivi una domanda prima di inviare.');
                                  return;
                                }
                                const answer = await askClarification(question);
                                if (answer) {
                                  clarificationQuestionRef.current = '';
                                  // Clear textarea visually
                                  const textarea = document.querySelector('textarea[placeholder*="adattare questo esercizio"]');
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
                                  Sto pensando...
                                </>
                              ) : (
                                <>
                                  <HelpCircle className="w-5 h-5" />
                                  Chiedi Chiarimenti
                                </>
                              )}
                            </button>
                          </div>

                          {clarificationAnswer && (
                            <div className="bg-white/90 border-2 border-indigo-400 p-5 rounded-lg shadow-md mt-4 animate-fadeIn">
                              <div className="flex items-center gap-2 mb-3">
                                <Bot className="w-5 h-5 text-indigo-600" />
                                <span className="font-bold text-indigo-800">Risposta del Coach AI:</span>
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
                      className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-gradient-to-r from-purple-300 to-pink-400 border-2 border-purple-400 hover:from-purple-400 hover:to-pink-500 px-6 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative"
                    >
                      {useApiForExercises && geminiApiKey && geminiApiKey.trim() !== '' && (
                        <span className="absolute top-1 right-1 bg-yellow-400 text-gray-800 px-2 py-0.5 rounded text-xs font-bold">API</span>
                      )}
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          Generando...
                        </>
                      ) : (
                        <>
                          <Shuffle className="w-5 h-5" />
                          {useApiForExercises && geminiApiKey ? 'Genera Esercizio' : 'Nuovo Esercizio'}
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setExerciseCompleted(true)}
                      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                        exerciseCompleted
                          ? 'bg-gradient-to-r from-green-400 to-teal-500 border-2 border-green-500 text-white animate-bounce-once'
                          : 'bg-gradient-to-r from-green-200/60 to-teal-200/80 border border-green-400 text-gray-800 hover:bg-teal-300/60'
                      }`}
                    >
                      {exerciseCompleted && <CheckCircle className="w-5 h-5" />}
                      Completato
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100/60 to-emerald-100/80 p-6 rounded-2xl shadow-lg relative border-2 border-green-400">
                  {uploadSuccess && lastUploadedImage && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-300 to-emerald-400 text-gray-800 p-4 rounded-xl shadow-2xl animate-fadeIn z-10 max-w-md">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-1">Foto caricata!</h4>
                          <p className="text-sm text-gray-700">L'AI ha analizzato la tua opera</p>
                        </div>
                      </div>
                      {lastUploadedImage.aiComment && (
                        <>
                          <div className="bg-white/80 rounded-lg p-3 mb-3 text-sm">
                            <p className="text-gray-800 leading-relaxed">{lastUploadedImage.aiComment}</p>
                          </div>
                          <button
                            onClick={() => {
                              const text = `🎵 *${lastUploadedImage.exerciseTitle}*\n\n${lastUploadedImage.aiComment}\n\n_Analisi generata da Coach di Benessere Creativo per Musicisti_`;
                              const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
                              window.open(whatsappUrl, '_blank');
                            }}
                            className="w-full bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition-colors flex items-center justify-center gap-2"
                          >
                            <Share2 className="w-4 h-4" />
                            Condividi su WhatsApp
                          </button>
                        </>
                      )}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Camera className="w-6 h-6" />
                    Carica il tuo Lavoro
                  </h3>
                  <p className="text-orange-600 mb-4">
                    Condividi un'immagine del tuo esercizio e ricevi un feedback
                  </p>

                  {!geminiApiKey || geminiApiKey.trim() === '' ? (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-yellow-800 mb-2">API Key richiesta</p>
                          <p className="text-sm text-yellow-700 mb-3">
                            Per caricare immagini e ricevere feedback, devi configurare la tua API key di Google Gemini.
                          </p>
                          <button
                            onClick={() => setShowApiSetup(true)}
                            className="px-4 py-2 bg-yellow-600 text-gray-800 rounded-lg hover:bg-yellow-700 transition-colors text-sm font-semibold"
                          >
                            Configura API Key
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {isGenerating ? (
                        <div className="flex items-center justify-center gap-3 px-6 py-4 bg-sky-200 rounded-xl cursor-not-allowed">
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span className="font-semibold text-gray-700">Caricamento in corso...</span>
                        </div>
                      ) : (
                        <label className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-300 to-pink-400 text-gray-800 rounded-xl cursor-pointer hover:from-purple-400 hover:to-pink-500 transition-all">
                          <Upload className="w-5 h-5" />
                          <span className="font-semibold">Seleziona Immagine</span>
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

                  {uploadedImages.filter(img => img.exerciseId === selectedExercise).length > 0 && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Le tue immagini per questo esercizio:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {uploadedImages
                          .filter(img => img.exerciseId === selectedExercise)
                          .map(img => (
                            <div key={img.id} className="bg-white/60 border border-green-300 rounded-lg overflow-hidden shadow">
                              <img src={img.dataUrl} alt="Lavoro musicale" className="w-full h-48 object-cover" />
                              <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <span className="text-sm text-gray-500">
                                    {new Date(img.uploadDate).toLocaleDateString('it-IT')}
                                  </span>
                                  <button
                                    onClick={() => deleteImage(img.id)}
                                    className="text-rose-500 hover:text-rose-700"
                                    title="Elimina"
                                  >
                                    <X className="w-5 h-5" />
                                  </button>
                                </div>
                                {img.aiComment && (
                                  <div className="bg-gradient-to-r from-cyan-100/60 to-teal-100/80 border border-orange-300 p-3 rounded-lg text-sm text-gray-700 border-l-4 border-green-500">
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
                </div>

                <button
                  onClick={() => setCurrentView('exercises')}
                  className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  ← Torna agli Esercizi
                </button>

                {/* Popup generazione in corso */}
                {isGenerating && (
                  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-4 text-center">
                      <div className="mb-4">
                        <RefreshCw className="w-12 h-12 text-purple-600 animate-spin mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Generazione esercizio in corso...</h3>
                      <p className="text-gray-600 text-sm">Creazione personalizzata con AI</p>
                    </div>
                  </div>
                )}
              </div>
            );
          };

          const ProgressView = () => (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">I Tuoi Progressi</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-6 rounded-xl shadow-md">
                  <Calendar className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-3xl font-bold text-gray-800">{moodHistory.length}</h3>
                  <p className="text-orange-600">Tracciamenti Umore</p>
                </div>

                <div className="bg-green-100 p-6 rounded-xl shadow-md">
                  <BookOpen className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="text-3xl font-bold text-gray-800">{journalEntries.length}</h3>
                  <p className="text-orange-600">Entrate Diario</p>
                </div>

                <div className="bg-green-100 p-6 rounded-xl shadow-md">
                  <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="text-3xl font-bold text-gray-800">{Math.max(1, moodHistory.length + journalEntries.length)}</h3>
                  <p className="text-orange-600">Giorni Attivi</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-100/60 to-cyan-100/80 border border-cyan-400 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Storico Umore Recente</h3>
                {moodHistory.length === 0 ? (
                  <p className="text-teal-500 italic">Inizia a tracciare il tuo umore per vedere i progressi!</p>
                ) : (
                  <div className="space-y-2">
                    {moodHistory.slice(-10).reverse().map((mood, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50/40 border border-orange-300/30 rounded-lg hover:bg-teal-100/50 transition-colors">
                        <span className="text-3xl">{mood.emoji}</span>
                        <div className="flex-1">
                          <p className="font-semibold">{mood.name}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(mood.date).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' })}
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
                ← Torna Home
              </button>
            </div>
          );

          const InsightsView = () => {
            const [aiReport, setAiReport] = React.useState(null);
            const stats = calculateMoodStats();
            const patterns = findMoodPatterns();

            const handleGenerateReport = async () => {
              console.log('🔘 Click su Genera Report');

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

                console.log('✅ Report salvato e visualizzato');
              } else {
                console.log('⚠️ Nessun report generato');
              }
            };

            console.log('🎵 Render InsightsView - aiReport:', !!aiReport, aiReport ? `(${aiReport.length} caratteri)` : 'null');

            return (
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-wellness-primary flex items-center gap-3">
                  <Brain className="w-10 h-10 text-teal-500" />
                  Analisi & Insights
                </h2>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-cyan-300 to-sky-400 p-6 rounded-xl shadow-lg text-gray-800 border-2 border-cyan-400">
                    <Calendar className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="text-3xl font-bold">{stats?.totalMoods || 0}</h3>
                    <p className="text-teal-800">Mood tracciati</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-300 to-pink-400 p-6 rounded-xl shadow-lg text-gray-800 border-2 border-purple-400">
                    <Heart className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="text-3xl font-bold">{stats?.avgMood.toFixed(1) || '0'}/5</h3>
                    <p className="text-teal-800">Mood medio</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-300 to-emerald-400 p-6 rounded-xl shadow-lg text-gray-800 border-2 border-green-400">
                    <Flower className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="text-3xl font-bold">{uploadedImages.length}</h3>
                    <p className="text-teal-800">Immagini caricate</p>
                  </div>

                  <div className="bg-gradient-to-br from-rose-300 to-pink-400 p-6 rounded-xl shadow-lg text-gray-800 border-2 border-rose-400">
                    <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
                    <h3 className="text-3xl font-bold">
                      {stats?.trend > 0 ? '📈' : stats?.trend < 0 ? '📉' : '➡️'}
                    </h3>
                    <p className="text-teal-800">
                      {stats?.trend > 0 ? 'In miglioramento' : stats?.trend < 0 ? 'Da monitorare' : 'Stabile'}
                    </p>
                  </div>
                </div>

                {patterns.length > 0 && (
                  <div className="bg-gradient-to-r from-purple-100/60 to-pink-100/80 border-2 border-purple-400 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-wellness-primary mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-teal-500" />
                      Pattern Identificati
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {patterns.map((pattern, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-lg border-2 ${
                            pattern.type === 'positive'
                              ? 'bg-gradient-to-r from-green-100/60 to-emerald-100/80 border-green-400'
                              : 'bg-gradient-to-r from-sky-100/60 to-cyan-100/80 border-cyan-400'
                          }`}
                        >
                          <h4 className="font-bold text-orange-700 mb-1 text-lg">{pattern.title}</h4>
                          <p className="text-sm text-orange-600">{pattern.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {stats && stats.recentMoods.length > 0 && (
                  <div className="bg-gradient-to-r from-rose-100/60 to-pink-100/80 border-2 border-rose-400 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-wellness-primary mb-4 flex items-center gap-2">
                      <BarChart className="w-6 h-6 text-teal-500" />
                      Mood Ultimi 7 Giorni
                    </h3>
                    <div className="space-y-3">
                      {stats.recentMoods.slice(-7).reverse().map((entry, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-32 text-sm text-orange-600 font-semibold">
                            {new Date(entry.date).toLocaleDateString('it-IT', { weekday: 'short', day: 'numeric', month: 'short' })}
                          </div>
                          <div className="flex-1 bg-gray-50/60 border-2 border-orange-300 rounded-full h-10 overflow-hidden">
                            <div
                              className={`h-full flex items-center px-3 text-gray-800 font-semibold ${
                                entry.mood >= 4 ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                                entry.mood === 3 ? 'bg-gradient-to-r from-sky-400 to-cyan-500' :
                                'bg-gradient-to-r from-rose-400 to-pink-500'
                              }`}
                              style={{ width: `${(entry.mood / 5) * 100}%` }}
                            >
                              {entry.emoji} {entry.name}
                            </div>
                          </div>
                          <div className="w-12 text-right font-bold text-orange-700 text-lg">
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
                    Genera Nuovo Report
                  </h3>

                  <div className="text-center py-6">
                    <p className="text-orange-700 mb-4 text-lg">
                      Genera un report personalizzato basato sui tuoi dati
                    </p>
                    <button
                      onClick={handleGenerateReport}
                      disabled={generatingReport}
                      className="flex items-center justify-center gap-2 mx-auto px-8 py-4 bg-gradient-to-r from-purple-300 to-pink-400 border-2 border-purple-400 text-gray-800 rounded-xl font-bold text-lg hover:from-purple-400 hover:to-pink-500 transition-all transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {generatingReport ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          Generazione in corso...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Genera Report
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {uploadedImages.length > 0 && (
                  <div className="bg-gradient-to-r from-teal-100/60 to-cyan-100/80 border border-cyan-400 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Camera className="w-6 h-6" />
                      Galleria Lavori ({uploadedImages.length})
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {uploadedImages.map(img => (
                        <div key={img.id} className="bg-gray-50/40 border border-orange-300/30 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                          <img src={img.dataUrl} alt="Lavoro" className="w-full h-48 object-cover" />
                          <div className="p-4 space-y-3">
                            <div>
                              <p className="text-sm font-semibold text-orange-600">{img.exerciseTitle}</p>
                              <p className="text-xs text-teal-500/70">{new Date(img.uploadDate).toLocaleDateString('it-IT')}</p>
                            </div>

                            {img.aiComment && (
                              <div className="bg-green-900/30 border border-green-600/30 rounded-lg p-3">
                                <p className="text-xs text-orange-700 leading-relaxed">{img.aiComment}</p>
                              </div>
                            )}

                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  const text = `🎵 *${img.exerciseTitle}*\n\n${img.aiComment || 'Nessun commento disponibile'}\n\n_Creato con Coach di Benessere Creativo per Musicisti_`;
                                  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
                                  window.open(whatsappUrl, '_blank');
                                }}
                                className="flex-1 bg-green-600 hover:bg-green-700 text-gray-800 px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                                title="Condividi su WhatsApp"
                              >
                                <Share2 className="w-4 h-4" />
                                WhatsApp
                              </button>
                              <button
                                onClick={() => deleteImage(img.id)}
                                className="bg-rose-900/50 hover:bg-rose-900/70 text-rose-300 px-3 py-2 rounded-lg transition-colors"
                                title="Elimina immagine"
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
                  <div className="bg-gradient-to-r from-green-100/60 to-emerald-100/80 border border-green-400 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-green-600" />
                      Report Storici ({savedReports.length})
                    </h3>
                    <div className="space-y-4">
                      {savedReports.map(report => (
                        <div
                          key={report.id}
                          className="bg-gradient-to-br from-orange-100/50 to-white/60 p-4 rounded-xl border-2 border-green-200 hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => {
                            setCurrentReport(report);
                            setShowReportModal(true);
                          }}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                              <Bot className="w-5 h-5 text-green-600" />
                              <span className="font-semibold text-gray-800">
                                {new Date(report.date).toLocaleDateString('it-IT', {
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
                              title="Elimina report"
                            >
                              <Trash2 className="w-4 h-4 text-rose-500" />
                            </button>
                          </div>

                          <div className="grid grid-cols-3 gap-3 mb-3 text-sm">
                            <div className="bg-gradient-to-r from-sky-100/60 to-cyan-100/80 border border-cyan-400/60 rounded-lg p-2 text-center">
                              <div className="font-bold text-green-600">{report.stats.totalMoods}</div>
                              <div className="text-xs text-gray-600">Mood</div>
                            </div>
                            <div className="bg-gradient-to-r from-rose-100/60 to-pink-100/80 border border-pink-400/60 rounded-lg p-2 text-center">
                              <div className="font-bold text-pink-600">{report.stats.avgMood.toFixed(1)}/5</div>
                              <div className="text-xs text-gray-600">Media</div>
                            </div>
                            <div className="bg-gradient-to-r from-green-100/60 to-emerald-100/80 border border-green-400/60 rounded-lg p-2 text-center">
                              <div className={`font-bold ${report.stats.trend > 0 ? 'text-green-600' : report.stats.trend < 0 ? 'text-rose-600' : 'text-gray-600'}`}>
                                {report.stats.trend > 0 ? '+' : ''}{report.stats.trend.toFixed(1)}%
                              </div>
                              <div className="text-xs text-gray-600">Trend</div>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 line-clamp-2">
                            {report.content.substring(0, 150)}...
                          </p>

                          <div className="mt-3 text-sm text-green-600 font-semibold flex items-center gap-1">
                            Leggi report completo
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
                  ← Torna Home
                </button>
              </div>
            );
          };

          const ReportModal = () => {
            if (!showReportModal || !currentReport) return null;

            return (
              <div className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-gradient-to-r from-purple-100/80 to-pink-100/90 border border-purple-400 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-slideIn">
                  <div className="sticky top-0 bg-gradient-to-r from-purple-400 to-pink-400 text-gray-800 p-6 rounded-t-2xl flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Brain className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Report Generato</h2>
                        <p className="text-sm text-gray-800/80">
                          {new Date(currentReport.date).toLocaleDateString('it-IT', {
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
                      className="p-2 hover:bg-purple-200/40 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-8">
                    <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                      {currentReport.content}
                    </div>

                    <div className="mt-6 pt-6 border-t border-purple-400 grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{currentReport.stats.totalMoods}</div>
                        <div className="text-sm text-gray-600">Mood tracciati</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">{currentReport.stats.avgMood.toFixed(1)}/5</div>
                        <div className="text-sm text-gray-600">Mood medio</div>
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
                <div className="bg-gradient-to-r from-sky-100/80 to-cyan-100/90 border border-cyan-400 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="sticky top-0 bg-gradient-to-r from-sky-400 to-cyan-400 text-gray-800 p-6 rounded-t-2xl flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold">Guida e Istruzioni</h2>
                        <p className="text-sm text-gray-800/80">Come usare Coach di Benessere Creativo per Musicisti</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowGuide(false)}
                      className="p-2 hover:bg-sky-200/40 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-8 space-y-8">
                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Heart className="w-7 h-7 text-rose-500" />
                        1. Traccia il tuo Mood
                      </h3>
                      <div className="bg-rose-50 p-5 rounded-xl space-y-3">
                        <p className="text-orange-700"><strong>Cosa fa:</strong> Registra come ti senti ogni giorno usando 5 emoji (da pessimo a ottimo).</p>
                        <p className="text-orange-700"><strong>Come usarlo:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Clicca su "Traccia Mood" dalla home</li>
                          <li>Seleziona l'emoji che rappresenta il tuo stato d'animo</li>
                          <li>Aggiungi una nota opzionale per ricordare perché ti senti così</li>
                          <li>I tuoi mood vengono salvati automaticamente</li>
                        </ul>
                        <p className="text-orange-700"><strong>Perché è utile:</strong> Tenere traccia del tuo umore ti aiuta a identificare pattern e capire cosa influenza il tuo benessere.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <BookOpen className="w-7 h-7 text-blue-500" />
                        2. Diario Personale
                      </h3>
                      <div className="bg-blue-50 p-5 rounded-xl space-y-3">
                        <p className="text-orange-700"><strong>Cosa fa:</strong> Scrivi pensieri, riflessioni e esperienze quotidiane.</p>
                        <p className="text-orange-700"><strong>Come usarlo:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Clicca su "Diario" dalla home</li>
                          <li>Scrivi liberamente nel campo di testo</li>
                          <li>Premi "Salva Diario" per conservare la tua riflessione</li>
                          <li>Visualizza i tuoi diari precedenti scorrendo in basso</li>
                        </ul>
                        <p className="text-orange-700"><strong>Perché è utile:</strong> La scrittura terapeutica aiuta a processare emozioni e ridurre lo stress.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Palette className="w-7 h-7 text-green-500" />
                        3. Esercizi Creativi
                      </h3>
                      <div className="bg-green-50 p-5 rounded-xl space-y-3">
                        <p className="text-orange-700"><strong>Cosa fa:</strong> Centinaia di esercizi creativi specifici per Studenti di Musica e Musicisti.</p>
                        <p className="text-orange-700"><strong>Come usarlo:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Clicca su "Esercizi" dalla home</li>
                          <li>Scegli una categoria (Disegno, Pittura, Scultura, etc.)</li>
                          <li>Ogni esercizio ha 3 varianti con esempi</li>
                          <li>Clicca "Genera Nuovo" per ottenere nuove idee (richiede API)</li>
                        </ul>
                        <p className="text-orange-700"><strong>Funzioni extra:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li><strong>Timer:</strong> Imposta durate (es: "5m", "30m", "1h") per esercizi cronometrati</li>
                          <li><strong>Upload Foto:</strong> Carica immagini dei tuoi lavori e ricevi feedback</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <BarChart className="w-7 h-7 text-green-500" />
                        4. Analisi e Insights
                      </h3>
                      <div className="bg-green-50 p-5 rounded-xl space-y-3">
                        <p className="text-orange-700"><strong>Cosa fa:</strong> Analizza i tuoi dati e identifica pattern nel tuo benessere.</p>
                        <p className="text-orange-700"><strong>Cosa trovi:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li><strong>Statistiche:</strong> Mood totali tracciati, media, trend in aumento/calo</li>
                          <li><strong>Pattern:</strong> Giorni della settimana migliori/peggiori, streak positivi</li>
                          <li><strong>Grafico:</strong> Visualizzazione ultimi 7 giorni</li>
                          <li><strong>Report:</strong> Analisi personalizzata con consigli (richiede API)</li>
                          <li><strong>Report Storici:</strong> Tutti i report generati in passato</li>
                          <li><strong>Galleria:</strong> Tutte le tue immagini caricate</li>
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Key className="w-7 h-7 text-yellow-500" />
                        5. Configurazione API (Opzionale)
                      </h3>
                      <div className="bg-yellow-50 p-5 rounded-xl space-y-3">
                        <p className="text-orange-700"><strong>Cosa fa:</strong> Abilita funzionalità avanzate usando Google Gemini.</p>
                        <p className="text-orange-700"><strong>Come configurare:</strong></p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                          <li>Vai su <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener" className="text-blue-600 underline">Google AI Studio</a></li>
                          <li>Accedi con il tuo account Google</li>
                          <li>Clicca "Create API Key"</li>
                          <li>Copia la chiave generata</li>
                          <li>Torna all'app e clicca "Configura API Key", poi incolla la chiave</li>
                        </ol>
                        <p className="text-orange-700"><strong>Funzioni sbloccate con API:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Generazione infinita di nuovi esercizi creativi</li>
                          <li>Feedback sulle tue opere caricate</li>
                          <li>Report personalizzati basati sui tuoi dati</li>
                        </ul>
                        <div className="bg-gradient-to-r from-green-100/60 to-emerald-100/80 border border-green-400 p-4 rounded-lg border-l-4 border-yellow-500 mt-3">
                          <p className="text-sm text-gray-700"><strong>🔒 Privacy:</strong> La tua API key viene salvata solo sul tuo dispositivo (localStorage). Non viene mai inviata a server esterni se non direttamente a Google Gemini.</p>
                          <p className="text-sm text-gray-700 mt-2"><strong>💰 Costo:</strong> Google Gemini ha un tier gratuito generoso. Perfetto per uso personale!</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Camera className="w-7 h-7 text-indigo-500" />
                        6. Upload Foto (iPhone Compatible)
                      </h3>
                      <div className="bg-indigo-50 p-5 rounded-xl space-y-3">
                        <p className="text-orange-700"><strong>Cosa fa:</strong> Carica foto delle tue opere e ricevi feedback.</p>
                        <p className="text-orange-700"><strong>Come usarlo:</strong></p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                          <li>Vai in un esercizio specifico</li>
                          <li>Clicca "Seleziona Immagine"</li>
                          <li>Scegli foto dalla galleria o scatta una nuova</li>
                          <li>L'immagine viene automaticamente ridimensionata (ottimizzato per iPhone)</li>
                          <li>Se API attiva, ricevi un feedback personalizzato</li>
                        </ul>
                        <p className="text-orange-700"><strong>Formati supportati:</strong> JPG, PNG, HEIC (foto iPhone native)</p>
                      </div>
                    </section>

                    <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Consigli Utili</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>✅ Traccia il tuo mood ogni giorno per ottenere analisi accurate</li>
                        <li>✅ Scrivi nel diario quando ti senti sopraffatto - aiuta!</li>
                        <li>✅ Prova diversi esercizi creativi per trovare ciò che ti rilassa</li>
                        <li>✅ Usa il timer per sessioni di lavoro concentrate</li>
                        <li>✅ Carica foto dei tuoi lavori per tracciare progressi</li>
                        <li>✅ Genera report ogni settimana per vedere i tuoi progressi</li>
                      </ul>
                    </section>

                    <section className="text-center pt-4 border-t border-orange-600/40">
                      <p className="text-orange-600">
                        Sviluppato con ❤️ per Studenti di Musica e Musicisti
                      </p>
                      <p className="text-sm text-teal-500 mt-2">
                        Hai domande o suggerimenti? <button onClick={() => { setShowGuide(false); setShowContactForm(true); }} className="text-green-400 hover:text-green-300 underline font-semibold">Contattami</button>
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
                // Usa Web3Forms per inviare email direttamente
                const response = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    access_key: 'c99e581c-6e45-4d7a-b889-abeb30f38fb1',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: '🎵 Nuovo messaggio da Coach di Benessere Creativo per Musicisti',
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
                  setError('Errore nell\'invio. Riprova più tardi.');
                }
              } catch (err) {
                setError('Errore di connessione. Verifica la tua rete.');
              } finally {
                setSending(false);
              }
            };

            return (
              <div className="fixed inset-0 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                <div className="bg-gradient-to-r from-rose-100/80 to-pink-100/90 border border-rose-400 rounded-2xl max-w-lg w-full shadow-2xl">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-400 text-gray-800 p-6 rounded-t-2xl flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold">📬 Contattami</h2>
                      <p className="text-sm text-gray-800/80">Invia un messaggio o suggerimento</p>
                    </div>
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="p-2 hover:bg-rose-200/40 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-6">
                    {sent ? (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-green-300 mb-2">Messaggio inviato!</h3>
                        <p className="text-orange-600">Ti risponderò al più presto. Grazie! 🎵</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-orange-600 font-semibold mb-2">Nome</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-2 border-2 border-orange-600 bg-gray-50/50 text-teal-800 rounded-lg focus:border-green-500 focus:outline-none placeholder-orange-400/50"
                            placeholder="Il tuo nome"
                          />
                        </div>

                        <div>
                          <label className="block text-orange-600 font-semibold mb-2">Email</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-2 border-2 border-orange-600 bg-gray-50/50 text-teal-800 rounded-lg focus:border-green-500 focus:outline-none placeholder-orange-400/50"
                            placeholder="tua@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-orange-600 font-semibold mb-2">Messaggio</label>
                          <textarea
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            rows="5"
                            className="w-full px-4 py-2 border-2 border-orange-600 bg-gray-50/50 text-teal-800 rounded-lg focus:border-green-500 focus:outline-none resize-none placeholder-orange-400/50"
                            placeholder="Scrivi il tuo messaggio, suggerimento o domanda..."
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
                              Invio in corso...
                            </>
                          ) : (
                            <>
                              📤 Invia Messaggio
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
                      Perché creare un Profilo?
                    </h2>
                    <p className="text-sm text-gray-700 mt-1">Scopri i vantaggi di avere un profilo personalizzato</p>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Saluto personalizzato</h3>
                          <p className="text-sm text-gray-800">Ti accoglieremo con il tuo nome ogni volta</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Form contatto rapido</h3>
                          <p className="text-sm text-gray-800">Email pre-compilata quando mi contatti</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Badge Utente Registrato</h3>
                          <p className="text-sm text-gray-800">Mostra il tuo status speciale nell'app</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Dati sempre tuoi</h3>
                          <p className="text-sm text-gray-800">Tutto salvato localmente sul tuo dispositivo</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>100% Gratuito</strong> • Nessuna email di spam • Privacy garantita
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
                        ✨ Crea il mio Profilo
                      </button>
                      <button
                        onClick={() => setShowProfileBenefits(false)}
                        className="px-6 py-3 bg-teal-900/50 text-orange-700 rounded-lg hover:bg-teal-900/70 transition-colors border border-orange-600"
                      >
                        Forse dopo
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
                setError('Compila tutti i campi');
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
                      <h2 className="text-2xl font-bold">🎵 Crea il tuo Profilo</h2>
                      <p className="text-sm text-gray-700">Servono solo 2 informazioni</p>
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
                      <label className="block text-gray-700 font-semibold mb-2">Come ti chiami?</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-2 border-2 border-orange-300 bg-white text-gray-800 rounded-lg focus:border-orange-400 focus:outline-none placeholder-gray-400"
                        placeholder="Il tuo nome"
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
                        placeholder="tua@email.com"
                      />
                      <p className="text-xs text-gray-600 mt-1">
                        🔒 Salvata solo sul tuo dispositivo
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
                      ✨ Crea Profilo
                    </button>
                  </form>
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
                  // Aggiorna il profilo con il nome
                  await userCredential.user.updateProfile({
                    displayName: formData.name
                  });
                  setShowFirebaseAuth(false);
                }
              } catch (err) {
                console.error('Errore auth:', err);
                if (err.code === 'auth/email-already-in-use') {
                  setError('Email già registrata. Prova ad accedere.');
                } else if (err.code === 'auth/weak-password') {
                  setError('Password troppo debole. Usa almeno 6 caratteri.');
                } else if (err.code === 'auth/invalid-email') {
                  setError('Email non valida.');
                } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                  setError('Email o password errati.');
                } else {
                  setError('Errore di autenticazione. Riprova.');
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
                        {isLogin ? 'Accedi' : 'Registrati'}
                      </h2>
                      <p className="text-sm text-gray-700">Sincronizza i tuoi dati su cloud</p>
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
                        <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-2 border-2 border-blue-300 bg-white text-gray-800 rounded-lg focus:border-blue-400 focus:outline-none placeholder-gray-400"
                          placeholder="Il tuo nome"
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
                        placeholder="tua@email.com"
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
                        placeholder="Minimo 6 caratteri"
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
                          {isLogin ? 'Accesso...' : 'Registrazione...'}
                        </>
                      ) : (
                        <>
                          <Cloud className="w-5 h-5" />
                          {isLogin ? 'Accedi' : 'Registrati'}
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
                        {isLogin ? 'Non hai un account? Registrati' : 'Hai già un account? Accedi'}
                      </button>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                      <p className="text-xs text-gray-800">
                        <strong>🔒 Sicuro e privato</strong> • I tuoi dati sono sincronizzati su Firebase Cloud • Accessibili da qualsiasi dispositivo
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            );
          };

          const ApiSetupModal = () => (
            <div className="fixed inset-0 bg-gray-50/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-gradient-to-r from-green-100/80 to-emerald-100/90 border border-green-400 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">🤖 Configurazione Gemini API</h2>
                    <p className="text-orange-600">Attiva API per esercizi personalizzati infiniti</p>
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
                      Vantaggi Modalità API
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Esercizi infiniti:</strong> Contenuti sempre nuovi e diversi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Personalizzati:</strong> Esercizi specifici per il tuo contesto musicale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Gratis:</strong> Google Gemini API ha un tier gratuito generoso (60 richieste/minuto)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">📋 Setup Veloce (5 minuti)</h3>
                    <div className="space-y-3">
                      {[
                        { 
                          n: 1, 
                          title: "Vai su Google AI Studio", 
                          content: <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm flex items-center gap-1">https://aistudio.google.com/app/apikey <span className="text-xs">🔗</span></a> 
                        },
                        { n: 2, title: "Accedi con Google", content: "Usa qualsiasi account Gmail personale" },
                        { n: 3, title: 'Click "Create API Key"', content: "Scegli progetto esistente o crea nuovo" },
                        { n: 4, title: "Copia la tua API Key", content: "Stringa tipo: AIzaSy..." },
                        { n: 5, title: "Incolla qui sotto", content: "Salvata solo sul tuo dispositivo, 100% privata" }
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
                      Inserisci la tua API Key
                    </label>
                    <input
                      type="password"
                      value={geminiApiKey}
                      onChange={(e) => setGeminiApiKey(e.target.value)}
                      placeholder="AIzaSy..."
                      className="w-full px-4 py-3 border-2 border-orange-600 rounded-lg focus:border-green-500 focus:outline-none font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      🔒 Salvata solo localmente nel browser, mai inviata a server esterni
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-yellow-800">
                        <p className="font-semibold mb-1">⚠️ Sicurezza</p>
                        <p>Non condividere mai la tua API key. Il tier gratuito di Gemini ha limiti che proteggono da abusi accidentali.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={saveApiKey}
                      disabled={!geminiApiKey.trim()}
                      className="flex-1 min-w-[150px] bg-gradient-to-r from-purple-500 to-pink-500 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      💾 Salva API Key
                    </button>
                    <button
                      onClick={() => setShowApiSetup(false)}
                      className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Chiudi
                    </button>
                  </div>

                  {geminiApiKey && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded animate-fadeIn">
                      <div className="flex items-center gap-2 text-green-800">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">API Key configurata!</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        Ora puoi attivare la modalità API negli esercizi per generare contenuti infiniti 
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );

          return (
            <div className="min-h-screen bg-gray-50 p-4">
              {/* Bottoni Profilo e Firebase Fissi */}
              <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[9999] flex gap-1 items-center pointer-events-auto">
                {/* Bottone Cambia Versione */}
                <button
                  onClick={() => {
                    window.location.href = '../eng/index.html';
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded shadow-md hover:shadow-lg transition-all text-xs font-semibold flex items-center gap-1"
                  title="Passa all'inglese / Switch to English"
                >
                  <span className="text-sm">🇬🇧</span>
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
                      title="Vedi Profilo"
                      style={{ position: 'relative', zIndex: 10000, pointerEvents: 'auto' }}
                    >
                      <User className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setShowFirebaseAuth(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded shadow-md hover:shadow-lg transition-all text-xs font-semibold flex items-center gap-1"
                      title="Registrati su Cloud"
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
                      title="Registrati GRATIS"
                      style={{ position: 'relative', zIndex: 10000, pointerEvents: 'auto' }}
                    >
                      <span className="text-sm">🎵</span>
                    </button>
                    <button
                      onClick={() => setShowProfileBenefits(true)}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded shadow-md hover:shadow-lg transition-all text-xs font-semibold flex items-center gap-1"
                      title="Solo Visita"
                      style={{ position: 'relative', zIndex: 10000, pointerEvents: 'auto' }}
                    >
                      <span className="text-sm">👤</span>
                    </button>
                  </>
                )}
              </div>

              {/* Ragno animato controllato */}
              <div
                className={`butterfly-float ${plantScared ? 'plant-scared' : plantTarget ? 'plant-run-to-target' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  // Calcola posizione casuale lontana per scappare
                  const randomX = Math.random() * 100;
                  const randomY = Math.random() * 100;
                  setPlantScared({ x: randomX, y: randomY });
                  setPlantTarget(null);

                  // Torna normale dopo che ha finito di scappare
                  setTimeout(() => {
                    setPlantScared(false);
                  }, 3000);
                }}
                style={{
                  ...(plantTarget || plantScared) ? {
                    top: `${(plantTarget || plantScared)?.y || 0}%`,
                    left: `${(plantTarget || plantScared)?.x || 0}%`
                  } : {},
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                  zIndex: 10
                }}
              >
                🌿
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
                  />}
                  {currentView === 'exercises' && <ExercisesView />}
                  {currentView === 'exercise-detail' && <ExerciseDetailView />}
                  {currentView === 'progress' && <ProgressView />}
                  {currentView === 'insights' && <InsightsView />}
                </div>

                <div className="text-center mt-6 text-orange-600 text-sm space-y-4">
                  <p className="text-wellness-primary font-bold">🎵 Coach di Benessere Creativo per Musicisti v2.0 - Wellness Edition 🎵</p>
                  <p className="mt-1 text-wellness-accent">Made with 🧡 for musicians • centinaia di esercizi spettrali</p>

                  {/* Bottoni Condivisione e Donazione */}
                  <div className="flex justify-center gap-3 flex-wrap mt-4">
                    <button
                      onClick={() => {
                        const text = `🎵 *Coach di Benessere Creativo per Musicisti* 🎼\n\nUn'app gratuita per il benessere musicale dedicata a studenti di musica e musicisti!\n\n✨ Traccia il tuo mood\n📝 Diario personale\n🎵 Analisi AI del tuo materiale musicale\n🧘 Centinaia di esercizi creativi\n\nProva ora: ${window.location.href}`;
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
                        alert('Per condividere su Instagram:\n\n1. Fai uno screenshot dell\'app\n2. Apri Instagram\n3. Crea una nuova Storia\n4. Carica lo screenshot\n5. Aggiungi il link: ' + window.location.href);
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
                      className="bg-gradient-to-r from-rose-400 to-pink-500 hover:opacity-90 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-opacity flex items-center gap-2 shadow-lg"
                    >
                      ❤️ Supporta il progetto
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-orange-300/30">
                    <p className="text-orange-700 font-medium">Ideato e sviluppato da: Francesco Mariano</p>
                    <p className="text-teal-500 text-xs mt-1">2023 • Edizione Wellness: 31 ottobre 2025</p>
                    <p className="text-orange-600 mt-2">
                      <button
                        onClick={() => setShowContactForm(true)}
                        className="text-wellness-primary hover:text-wellness-accent underline font-semibold"
                      >
                        📬 Invia feedback o suggerimenti
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              {showApiSetup && <ApiSetupModal />}
              <ReportModal />
              <GuideModal />
              <ContactFormModal />
              <ProfileBenefitsModal />
              <ProfileModal />
              <FirebaseAuthModal />

              <button
                onClick={() => setShowGuide(true)}
                className="fixed bottom-24 right-6 bg-gradient-to-r from-sky-400 to-cyan-500 text-gray-800 px-4 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-40 flex items-center gap-2 border-2 border-orange-300/50"
                title="Guida e Istruzioni"
              >
                <BookOpen className="w-6 h-6" />
                <span className="font-semibold text-sm whitespace-nowrap">
                  Guida
                </span>
              </button>

              {apiKeySaved && (
                <div className="fixed top-4 right-4 bg-green-500 text-gray-800 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fadeIn z-50">
                  <CheckCircle className="w-5 h-5" />
                  API Key salvata con successo!
                </div>
              )}
            </div>
          );
        };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MentalHealthCoachArte />);
