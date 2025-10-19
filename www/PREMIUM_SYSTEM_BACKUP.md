# Premium System Backup

Questo file contiene tutto il codice del sistema tier (free/premium) rimosso dalla versione gratuita.
Conservato per eventuale implementazione futura di un modello a pagamento.

## Data rimozione
19 Ottobre 2025

## Strategia per reintrodurre il sistema premium

### Opzione A: "Grandfather Clause" (consigliata)
Gli utenti che hanno installato l'app prima della versione a pagamento mantengono accesso gratuito permanente.

```javascript
// Al primo accesso dell'app
if (!localStorage.getItem('installDate')) {
  localStorage.setItem('installDate', Date.now());
}

// Definire la data del lancio versione premium
const PREMIUM_LAUNCH_DATE = new Date('2026-01-01').getTime(); // Esempio

// Controllo grandfather clause
const userInstallDate = parseInt(localStorage.getItem('installDate'));
const isPermanentlyFree = userInstallDate < PREMIUM_LAUNCH_DATE;

// Usare questo flag per determinare l'accesso
const userTier = isPermanentlyFree ? 'full_content' : getUserPaidTier();
```

### Opzione B: Freemium permanente
Tutti hanno accesso base gratis, contenuti premium a pagamento per tutti (vecchi e nuovi utenti).

---

## Codice da reintegrare

### 1. Stati React da aggiungere

```javascript
// Aggiungere questi stati all'inizio del componente MentalHealthCoachArte

// Sistema tier utente
const [userTier, setUserTier] = useState(() => {
  try {
    return localStorage.getItem('userTier') || 'free';
  } catch (e) {
    return 'free';
  }
});

// Modal upgrade
const [showUpgradeModal, setShowUpgradeModal] = useState(false);
```

### 2. Funzione getRandomVariant modificata

```javascript
// VERSIONE CON TIER SYSTEM
const getRandomVariant = (category) => {
  const variants = exerciseVariants[category];

  // Sistema tier: utenti free vedono solo primi 10 esercizi
  const availableVariants = userTier === 'free'
    ? variants.slice(0, 10)
    : variants;

  // Sistema di non ripetizione: traccia esercizi già mostrati per categoria
  const seenKey = `seen_exercises_${category}_${userTier}`;
  let seenIndices = [];

  try {
    const stored = localStorage.getItem(seenKey);
    seenIndices = stored ? JSON.parse(stored) : [];
  } catch (e) {
    seenIndices = [];
  }

  // Verifica validità degli indici salvati
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

  // Selezione random dagli indici disponibili
  const randomArrayIndex = Math.floor(Math.random() * indicesToUse.length);
  const selectedIndex = indicesToUse[randomArrayIndex];
  const randomVariant = availableVariants[selectedIndex];

  // Salva l'indice come già visto
  seenIndices.push(selectedIndex);
  localStorage.setItem(seenKey, JSON.stringify(seenIndices));

  console.log(`🎲 Categoria ${category}: mostrato esercizio ${seenIndices.length}/${availableVariants.length} - "${randomVariant.title}"`);

  return randomVariant;
};
```

### 3. Funzione per upgrade a premium

```javascript
// Funzione per sbloccare contenuto premium
const unlockFullContent = () => {
  setUserTier('full_content');
  localStorage.setItem('userTier', 'full_content');
  setShowUpgradeModal(false);

  // Reset dei contatori esercizi per mostrare tutti i contenuti
  Object.keys(exerciseVariants).forEach(category => {
    localStorage.removeItem(`seen_exercises_${category}_free`);
  });

  alert('Contenuti premium sbloccati! Ora hai accesso a tutti gli esercizi.');
};
```

### 4. UI Banner "Upgrade" (da inserire nella homepage)

#### Versione Italiana:

```jsx
{/* Banner Upgrade - Homepage */}
{userTier === 'free' && (
  <div className="card-hover rounded-2xl p-6 mb-6 bg-gradient-to-r from-amber-50 to-orange-50">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold text-orange-800 mb-2">
          🎵 Sblocca tutti gli esercizi
        </h3>
        <p className="text-orange-700">
          Accedi a oltre {Object.values(exerciseVariants).reduce((sum, arr) => sum + arr.length, 0)} esercizi creativi per il tuo benessere
        </p>
      </div>
      <button
        onClick={() => setShowUpgradeModal(true)}
        className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all"
      >
        Scopri Premium
      </button>
    </div>
  </div>
)}
```

#### Versione Inglese:

```jsx
{/* Upgrade Banner - Homepage */}
{userTier === 'free' && (
  <div className="card-hover rounded-2xl p-6 mb-6 bg-gradient-to-r from-amber-50 to-orange-50">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold text-orange-800 mb-2">
          🎵 Unlock All Exercises
        </h3>
        <p className="text-orange-700">
          Get access to over {Object.values(exerciseVariants).reduce((sum, arr) => sum + arr.length, 0)} creative exercises for your wellbeing
        </p>
      </div>
      <button
        onClick={() => setShowUpgradeModal(true)}
        className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all"
      >
        Go Premium
      </button>
    </div>
  </div>
)}
```

### 5. Banner informativo tier gratuito (nelle categorie)

#### Versione Italiana:

```jsx
{/* Banner info tier gratuito */}
{userTier === 'free' && (
  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 mb-4">
    <p className="text-orange-800 text-center">
      <span className="font-semibold">Versione gratuita:</span> hai accesso a 10 esercizi per categoria.{' '}
      <button
        onClick={() => setShowUpgradeModal(true)}
        className="text-orange-600 underline font-semibold hover:text-orange-700"
      >
        Sblocca tutti gli esercizi
      </button>
    </p>
  </div>
)}
```

#### Versione Inglese:

```jsx
{/* Free tier info banner */}
{userTier === 'free' && (
  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 mb-4">
    <p className="text-orange-800 text-center">
      <span className="font-semibold">Free version:</span> you have access to 10 exercises per category.{' '}
      <button
        onClick={() => setShowUpgradeModal(true)}
        className="text-orange-600 underline font-semibold hover:text-orange-700"
      >
        Unlock all exercises
      </button>
    </p>
  </div>
)}
```

### 6. Modal Upgrade completo

#### Versione Italiana:

```jsx
{/* Modal Upgrade */}
{showUpgradeModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl max-w-2xl w-full p-8 animate-slideIn">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🎵 Sblocca il Potenziale Completo
        </h2>
        <p className="text-gray-600">
          Accedi a tutti gli esercizi creativi per il tuo benessere
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold text-gray-800 mb-2">Versione Gratuita</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ 10 esercizi per categoria</li>
            <li>✓ Tracciamento mood</li>
            <li>✓ Diario giornaliero</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border-2 border-orange-300">
          <h3 className="font-semibold text-orange-800 mb-2">Versione Premium ⭐</h3>
          <ul className="space-y-2 text-sm text-orange-700">
            <li>✓ Tutti i {Object.values(exerciseVariants).reduce((sum, arr) => sum + arr.length, 0)} esercizi</li>
            <li>✓ Nuovi esercizi ogni mese</li>
            <li>✓ Supporto prioritario</li>
            <li>✓ Senza pubblicità</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-4xl font-bold text-orange-600 mb-2">€4.99</p>
        <p className="text-gray-600">Pagamento unico - accesso a vita</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setShowUpgradeModal(false)}
          className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
        >
          Continua Gratis
        </button>
        <button
          onClick={unlockFullContent}
          className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all"
        >
          Sblocca Premium
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        Dopo l'acquisto, tutti i contenuti saranno immediatamente disponibili
      </p>
    </div>
  </div>
)}
```

#### Versione Inglese:

```jsx
{/* Upgrade Modal */}
{showUpgradeModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl max-w-2xl w-full p-8 animate-slideIn">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          🎵 Unlock Your Full Potential
        </h2>
        <p className="text-gray-600">
          Access all creative exercises for your wellbeing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold text-gray-800 mb-2">Free Version</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ 10 exercises per category</li>
            <li>✓ Mood tracking</li>
            <li>✓ Daily journal</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border-2 border-orange-300">
          <h3 className="font-semibold text-orange-800 mb-2">Premium Version ⭐</h3>
          <ul className="space-y-2 text-sm text-orange-700">
            <li>✓ All {Object.values(exerciseVariants).reduce((sum, arr) => sum + arr.length, 0)} exercises</li>
            <li>✓ New exercises every month</li>
            <li>✓ Priority support</li>
            <li>✓ Ad-free experience</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-4xl font-bold text-orange-600 mb-2">$4.99</p>
        <p className="text-gray-600">One-time payment - lifetime access</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setShowUpgradeModal(false)}
          className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
        >
          Continue Free
        </button>
        <button
          onClick={unlockFullContent}
          className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all"
        >
          Unlock Premium
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        After purchase, all content will be immediately available
      </p>
    </div>
  </div>
)}
```

### 7. Controlli premium per funzionalità AI

Se in futuro si aggiungono funzionalità AI premium:

```jsx
{/* Esempio: Analisi AI bloccata per utenti free */}
{userTier === 'free' && (
  <div className="text-center p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
    <p className="text-orange-800 mb-2">
      🔒 Funzionalità Premium
    </p>
    <button
      onClick={() => setShowUpgradeModal(true)}
      className="text-orange-600 underline font-semibold"
    >
      Sblocca per accedere all'analisi AI
    </button>
  </div>
)}
```

### 8. Indicatori esercizi bloccati

Per mostrare esercizi "locked" nella lista:

```jsx
{/* Esempio di lista esercizi con indicatore lock */}
{exerciseVariants[selectedCategory]?.map((exercise, idx) => {
  const isLocked = userTier === 'free' && idx >= 10;

  return (
    <div
      key={idx}
      className={`p-4 rounded-xl ${
        isLocked
          ? 'bg-gray-100 opacity-60 cursor-not-allowed'
          : 'bg-white cursor-pointer hover:bg-orange-50'
      }`}
      onClick={() => !isLocked && selectExercise(exercise)}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold">{exercise.title}</span>
        {isLocked && <span className="text-orange-600">🔒</span>}
      </div>
    </div>
  );
})}
```

---

## Sistema di pagamento da integrare

### Opzione 1: Stripe
- Più professionale
- Supporta pagamenti ricorrenti e una tantum
- API ben documentata

### Opzione 2: PayPal
- Più riconosciuto dagli utenti
- Implementazione rapida
- Supporta pagamenti globali

### Opzione 3: Firebase + Cloud Functions
- Integrato con l'autenticazione esistente
- Gestisce subscriptions
- Richiede backend

---

## Note di implementazione

1. **Testare sempre** il sistema tier in locale prima di pubblicare
2. **Grandfather clause**: ricordarsi di implementare il controllo data installazione PRIMA di lanciare la versione premium
3. **Backup localStorage**: considerare sync con Firebase per non perdere dati utente
4. **Analytics**: tracciare quanti utenti free vs premium per ottimizzare prezzo
5. **A/B Testing**: testare diversi prezzi (€3.99, €4.99, €5.99) per trovare l'ottimale

---

## Numeri attuali (per riferimento)

- **Versione italiana**: 360 esercizi totali
- **Versione inglese**: 474 esercizi totali
- **Categorie**: 6 (Respirazione, Visualizzazione, Scrittura, Movimento, Paesaggio Sonoro, Presenza Corporea)
- **File size build**:
  - ITA: 469KB
  - ENG: 577KB

---

## Contatti

Per domande sull'implementazione: francescomariano@gmail.com
