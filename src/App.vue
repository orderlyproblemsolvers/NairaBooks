<script setup>
import { ref } from 'vue'

// --- State & Configuration ---
const appVersion = 'Official v1.0'
const apkDownloadLink = '/apk/NairaBooks-V1.apk'

// --- Asset Paths ---
const logoPath = '/img/logo.png'
const mockupPath = '/img/mockup.png'

// --- UPDATED: Features Data (from your new doc) ---
const features = ref([
  {
    icon: 'shield',
    title: '100% Offline-First',
    description: 'Your financial data never leaves your phone, giving you complete privacy and control.'
  },
  {
    icon: 'users',
    title: 'Multi-Account & Currency',
    description: 'Create separate wallets (e.g., Personal, Business) with unique themes and base currencies (NGN, USD, etc.).'
  },
  {
    icon: 'pie',
    title: 'True Envelope Budgeting',
    description: 'Assign a monthly budget to "envelopes". Unspent money automatically rolls over to the next month!'
  },
  {
    icon: 'calendar-days',
    title: 'Financial Planner & Reminders',
    description: 'A built-in calendar shows all future bills, goal deadlines, and budget resets, with smart notifications.'
  },
  {
    icon: 'receipt',
    title: 'Debt & Pledge Tracking',
    description: 'Track money you owe (debts) and money owed to you (pledges) all in one simple place.'
  },
  {
    icon: 'chart',
    title: 'Advanced Analytics & Search',
    description: 'Filter data by period, get smart insights, and instantly search your entire transaction history.'
  }
])

// --- UPDATED: FAQ Data & State (from your new doc) ---
const openAccordion = ref(null) // Stores the ID of the currently open FAQ item

const faqs = ref([
  {
    id: 1,
    question: 'How does the Envelope Budgeting system work?',
    answer: `
      <p class="mb-3">This is the most powerful part of the app. You give every Naira a "job" by putting it into an envelope (a "Portion").</p>
      <ol class="list-decimal list-inside space-y-3">
        <li><strong>Step 1: Create Envelopes:</strong> Go to the <strong>Portions</strong> tab, tap "New Portion," and set a <strong>Monthly Budget</strong> amount (e.g., "₦50,000" for Groceries).</li>
        <li><strong>Step 2: Fund Envelopes:</strong> When you <strong>Add Income</strong> (like a salary), use the "Split" toggle to divide that money and fund your different portions. Money not assigned goes to "Unallocated".</li>
        <li><strong>Step 3: Spend from Envelopes:</strong> When you <strong>Add Expense</strong>, select the portion you're spending from (e.g., "Groceries"). The app subtracts from that portion's balance, so you always know how much you have left.</li>
      </ol>
    `
  },
  {
    id: 2,
    question: 'How do automatic budget rollovers work?',
    answer: `
      <p>It's simple! Let's say you budget ₦50,000 for "Groceries" in October but only spend ₦45,000. You end the month with ₦5,000 leftover.</p>
      <p class="mt-2">On November 1st, the app automatically runs the budget. It adds your ₦50,000 monthly budget to the ₦5,000 leftover. Your "Groceries" envelope now has <strong>₦55,000</strong> available to spend for November.</p>
    `
  },
  {
    id: 3,
    question: 'How do I add a recurring bill or track a debt?',
    answer: `
      <p>When you tap <strong>"Add Income"</strong> or <strong>"Add Expense"</strong>, the modal has advanced options:</p>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li><strong>Recurring:</strong> Toggle "Make this recurring?" and set a frequency ("Monthly" or "Weekly"). The app will post it automatically and can send a reminder.</li>
        <li><strong>Debts/Pledges:</strong> Toggle "Track as a Debt/Pledge?". An <strong>Expense</strong> becomes a <strong>Pledge</strong> (money someone owes you). An <strong>Income</strong> becomes a <strong>Debt</strong> (money you owe someone).</li>
      </ul>
    `
  },
  {
    id: 4,
    question: 'What is the "Planner" tab for?',
    answer: `
      <p>The <strong>Planner</strong> tab shows your financial future. It has a calendar and an agenda listing all upcoming events:</p>
      <ul class="list-disc list-inside space-y-1 mt-2">
        <li>Recurring Transactions (e.g., "Rent" on the 1st)</li>
        <li>Goal Deadlines (e.g., "Vacation Fund" due)</li>
        <li>Budget Resets (so you know when rollovers happen)</li>
        <li>A list of all your active Debts and Pledges.</li>
      </ul>
    `
  },
  {
    id: 5,
    question: 'What is the "Analytics" tab for?',
    answer: '<p>This tab reviews your financial past. It has two sub-tabs: <strong>"Stats"</strong> and <strong>"History"</strong>. The "Stats" page lets you filter by time (Week, Month, Year) to see insights, charts, and your Top 5 Expenses. The "History" tab is a complete, searchable list of all your transactions to edit or delete.</p>'
  },
  {
    id: 6,
    question: 'How do I create and fund a Savings Goal?',
    answer: `
      <p class="mb-2">A "Goal" is a special portion you are saving up for.</p>
      <ol class="list-decimal list-inside space-y-2 mt-2">
        <li>Go to the <strong>Portions</strong> tab and select the <strong>"Goals"</strong> sub-tab, then tap "New Goal".</li>
        <li>Give it a name (e.g., "New Car"), enter your <strong>Target Amount</strong>, and set an optional <strong>Deadline Date</strong>.</li>
        <li>To add money, simply <strong>Add Income</strong> and allocate all or part of it directly to your "New Car" goal.</li>
      </ol>
    `
  }
])

// --- UPDATED: SVG Icon Component (Added 'calendar-days', 'receipt') ---
const icons = {
  shield: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.751A11.959 11.959 0 0112 2.714v.022z" /></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a4.5 4.5 0 00-.124-1.002c.16.04.321.076.485.111a4.5 4.5 0 013.956 4.402M4.622 18.72C4.784 18.76.945 18.796 5.11 18.807a4.5 4.5 0 013.956 4.402M12 20.25a4.5 4.5 0 00.124-1.002c-.16.04-.321.076-.485.111a4.5 4.5 0 01-3.956-4.402M12 12.75a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM12 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" /></svg>`,
  pie: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`,
  'calendar-days': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>`,
  receipt: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-5.25 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v6a2.25 2.25 0 01-2.25 2.25H15m-12 0-3 3m0 0l3-3m-3 3v-6a2.25 2.25 0 012.25-2.25H15" /></svg>`,
  chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v16.5h16.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 19.5v-1.5a3 3 0 013-3h.75m-3.75 4.5h3.75m-3.75 0V15m3.75 4.5v-4.5m0 0a3 3 0 013-3h1.5m-4.5 0H12m0 0v-1.5a3 3 0 013-3h1.5m-4.5 0H15m0 0v-4.5m0 4.5v-4.5m0 0a3 3 0 013-3h.75m-3.75 0H18m0 0v-1.5a3 3 0 013-3h.75m-3.75 0H21m0 0v-1.5a3 3 0 013-3h.75m-3.75 0H21m0 0v-4.5m0 4.5v-4.5" /></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>`
}
</script>

<template>
  <!-- Main container with a subtle gradient background -->
  <div class="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
    
    <!-- NEW: Glassmorphism Navigation Bar -->
    <nav class="w-full py-5 px-6 md:px-8 z-50 sticky top-0 bg-white/70 backdrop-blur-lg border-b border-slate-200/50">
      <div class="container mx-auto max-w-7xl flex justify-between items-center">
        <div class="flex items-center gap-3">
          <img :src="logoPath" alt="Nairabooks Logo" class="h-16 w-auto" /> <!-- Slightly smaller for a sleeker nav -->
          <div class="flex flex-col">
            <span class="font-bold text-2xl text-blue-600 tracking-tight">Nairabooks</span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
               {{ appVersion }}
            </span>
          </div>
        </div>
        <div class="hidden md:flex items-center gap-4">
          <a href="#features" class="font-semibold text-sm text-slate-600 hover:text-blue-600 transition-colors px-3 py-2">Features</a>
          <a href="#how-to" class="font-semibold text-sm text-slate-600 hover:text-blue-600 transition-colors px-3 py-2">How-To</a>
          <a :href="apkDownloadLink" download class="font-semibold bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm hover:bg-blue-700 transition-shadow shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30">
            Download APK
          </a>
        </div>
      </div>
    </nav>

    <!-- NEW: Hero Section with Gradient Background & Asymmetrical Layout -->
    <main class="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
      <div class="container mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Left Column: Text Content -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left z-10">
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight mb-8 text-slate-900">
            The simple way to 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              manage your money.
            </span>
          </h1>

          <p class="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Take control of your finances with Nairabooks, the <strong>offline-first</strong>
            financial tracker built for you. Understand your spending,
            master your budget, and own your data.
          </p>

          <!-- CTA BLOCK -->
          <div class="flex flex-col items-center md:items-start w-full md:w-auto">
            <a
              :href="apkDownloadLink"
              download
              class="group flex items-center justify-center gap-3 bg-blue-600 text-white pl-6 pr-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 w-full sm:w-auto"
            >
              <!-- Android Icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-shrink-0 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zM7.067 7.229l-1.48-2.562a.4997.4997 0 0 0-.8652.4997l1.5075 2.607C3.5535 9.095 1.5 11.7577 1.5 14.8775v.9317h21v-.9317c0-3.1198-2.0535-5.7825-4.7293-7.1039l1.5075-2.607a.5003.5003 0 0 0-.8652-.4997l-1.48 2.562A10.6616 10.6616 0 0 0 12 6.8035a10.6616 10.6616 0 0 0-4.933.4255z"/>
              </svg>
              <div class="text-left">
                <div class="text-sm font-semibold opacity-90 mb-0.5">Download Official</div>
                <div class="text-xl font-bold leading-none">Version 1.0 APK</div>
              </div>
            </a>
          </div>
          
          <div class="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span class="font-semibold">{{ appVersion }}</span> &nbsp;&mdash;&nbsp; Now Available!
          </div>
        </div>

        <!-- Right Column: Mockup Image (Overlapping) -->
        <div class="relative w-full flex items-center justify-center md:h-full">
          <!-- Background Blobs -->
          <div class="absolute w-72 h-72 bg-cyan-200/30 rounded-full -bottom-20 right-20 blur-3xl opacity-60"></div>
          <div class="absolute w-80 h-80 bg-blue-300/30 rounded-full -top-10 left-10 blur-3xl opacity-60"></div>

          <img 
            :src="mockupPath" 
            alt="Nairabooks App Interface" 
            class="relative z-10 w-auto max-h-[500px] md:max-h-[650px] object-contain drop-shadow-2xl 
                   md:absolute md:left-1/4 md:translate-x-1/4 lg:left-0 lg:translate-x-0 
                   md:rotate-[-6deg]"
          />
        </div>
      </div>
    </main>

    <!-- ==============================================
         NEW: Core Features Section (Modern Styling)
    =============================================== -->
    <section id="features" class="py-24 md:py-32 bg-slate-50/70 scroll-mt-20">
      <div class="container mx-auto max-w-7xl px-6">
        <div class="text-center mb-20 max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">A Smarter Way to Budget</h2>
          <p class="text-lg md:text-xl text-slate-600 leading-relaxed">
            Nairabooks is packed with features to give you complete control over your money, all while keeping your data 100% private.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Loop over features -->
          <div v-for="feature in features" :key="feature.title" 
               class="bg-white rounded-3xl p-8 flex flex-col items-start gap-5 transition-all duration-300 
                      shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-blue-500/10 
                      transform hover:-translate-y-1.5 hover:scale-[1.03]">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
              <!-- Feature Icon -->
              <span class="w-7 h-7" v-html="icons[feature.icon]"></span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-slate-900 mb-2">{{ feature.title }}</h3>
              <p class="text-slate-600 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================================
         NEW: How-To Guide (Animated Accordion)
    =============================================== -->
    <section id="how-to" class="py-24 md:py-32 bg-white scroll-mt-20">
      <div class="container mx-auto max-w-4xl px-6">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">How It Works</h2>
          <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Get started in minutes. Here are the basics of managing your money with Nairabooks.
          </p>
        </div>

        <div class="space-y-5">
          <!-- Loop over FAQ items -->
          <div v-for="faq in faqs" :key="faq.id" 
               class="bg-white rounded-2xl border border-slate-200/50 shadow-md overflow-hidden transition-all duration-300"
               :class="{ 'ring-2 ring-blue-500 shadow-xl shadow-blue-500/10': openAccordion === faq.id }">
            <!-- Accordion Header -->
            <button
              @click="openAccordion = (openAccordion === faq.id ? null : faq.id)"
              class="w-full flex justify-between items-center text-left p-6 md:p-8"
            >
              <span class="text-lg md:text-xl font-bold text-slate-800">{{ faq.question }}</span>
              <!-- Chevron Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" 
                   class="w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ml-4"
                   :class="{ 'rotate-180': openAccordion === faq.id }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            
            <!-- NEW: Animated Accordion Content -->
            <transition
              enter-active-class="transition-all duration-300 ease-out overflow-hidden"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-screen"
              leave-active-class="transition-all duration-200 ease-in overflow-hidden"
              leave-from-class="opacity-100 max-h-screen"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-show="openAccordion === faq.id" class="px-6 md:px-8 pb-8 text-slate-600 prose prose-blue max-w-none">
                <div v-html="faq.answer"></div>
              </div>
            </transition>
          </div>
        </div>

      </div>
    </section>

    <!-- NEW: Modern "Fat" Footer -->
    <footer class="py-20 text-center  bg-slate-900 text-slate-400">
      <div class="container mx-auto px-6">
        <img :src="logoPath" alt="Nairabooks Logo" class="h-24 w-auto mx-auto mb-6" />
        <p class="text-2xl font-semibold text-white mb-6">Manage your money. Own your data.</p>
        <p class="text-lg text-slate-300 max-w-lg mx-auto mb-8">
          Download the official v1.0 APK now. Secure, offline-first, and built for you.
        </p>
        
        <a :href="apkDownloadLink" download class="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-500/25 w-full sm:w-auto max-w-xs mx-auto text-lg font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zM7.067 7.229l-1.48-2.562a.4997.4997 0 0 0-.8652.4997l1.5075 2.607C3.5535 9.095 1.5 11.7577 1.5 14.8775v.9317h21v-.9317c0-3.1198-2.0535-5.7825-4.7293-7.1039l1.5075-2.607a.5003.5003 0 0 0-.8652-.4997l-1.48 2.562A10.6616 10.6616 0 0 0 12 6.8035a10.6616 10.6616 0 0 0-4.933.4255z"/>
          </svg>
          <span>Download v1.0</span>
        </a>
        
        <div class="mt-16 pt-10 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center text-sm">
           <p class="mb-4 md:mb-0">Developed by <span class="font-semibold text-white">OPS</span></p>
           <div class="flex gap-6">
              <a href="#features" class="font-medium hover:text-white transition-colors">Features</a>
              <a href="#how-to" class="font-medium hover:text-white transition-colors">How-To</a>
           </div>
           <p class="mt-4 md:mt-0">© {{ new Date().getFullYear() }} Nairabooks. All rights reserved.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  /* Use standard CSS instead of @apply to prevent build errors */
  background-color: #ffffff; /* Base background is white */
}

/* Styles for the v-html content */
.prose ol, .prose ul {
  padding-left: 1.25rem; /* 20px */
}
.prose p {
  margin-bottom: 0.75rem; /* 12px */
  line-height: 1.6;
}
.prose strong {
  color: #1e293b; /* slate-800 */
}
.prose ol li {
  margin-bottom: 0.5rem;
}

/* Fix for v-show flicker */
[v-cloak] {
  display: none;
}
</style>