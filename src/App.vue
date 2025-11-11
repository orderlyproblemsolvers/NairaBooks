<script setup>
import { ref } from 'vue'

// --- State & Configuration ---
const appVersion = 'Beta 1.0'
// Pointing directly to the APK file in the public folder
const apkDownloadLink = '/apk/NairaBooks-V1.0.apk'

// --- Asset Paths ---
// Assumes these exist in your /public/img/ folder
const logoPath = '/img/logo.png'
const mockupPath = '/img/mockup.png'

// --- NEW: Features Data ---
// This data drives the "Core Features" section
const features = ref([
  {
    icon: 'shield',
    title: '100% Offline-First',
    description: 'Your financial data never leaves your phone, giving you complete privacy and control.'
  },
  {
    icon: 'users',
    title: 'Multi-Account Wallets',
    description: 'Create separate "wallets" or accounts (e.g., Personal, Business, Travel) with unique themes.'
  },
  {
    icon: 'globe',
    title: 'Multi-Currency Support',
    description: 'Record transactions in any currency (USD, GHS) and see all totals auto-converted to your base currency (NGN).'
  },
  {
    icon: 'pie',
    title: 'Portions (Budget Envelopes)',
    description: 'Allocate your money into digital "envelopes" (e.g., "Rent," "Food," "Savings") to see where your money is going.'
  },
  {
    icon: 'trophy',
    title: 'Savings Goals',
    description: 'Turn any Portion into a savings goal with a target amount. The app will track your progress visually.'
  },
  {
    icon: 'chart',
    title: 'Analytics Dashboard',
    description: 'See your finances visually with charts for income vs. expense, spending over time, and more.'
  }
])

// --- NEW: FAQ Data & State ---
// This data drives the "How It Works" accordion
const openAccordion = ref(null) // Stores the ID of the currently open FAQ item

const faqs = ref([
  {
    id: 1,
    question: 'How do I create or switch accounts (wallets)?',
    answer: `
      <p class="mb-2"><strong>Create:</strong> Go to <strong>Settings > Manage Accounts (Users icon) > Create New Account</strong>. Fill in the name, base currency (e.g., NGN), and theme color.</p>
      <p><strong>Switch (Fastest):</strong> On the <strong>Dashboard</strong> tab, tap the account name at the top to see a dropdown of all your accounts.</p>
    `
  },
  {
    id: 2,
    question: 'What happens if I change my account\'s base currency?',
    answer: '<p>The app will perform a one-time conversion. It fetches the latest exchange rates and re-calculates the value of ALL your existing transactions and goals into the new base currency (e.g., from NGN to USD). A loader will show while this happens.</p>'
  },
  {
    id: 3,
    question: 'How do I add an income or expense transaction?',
    answer: `
      <ol class="list-decimal list-inside space-y-2 mt-2">
        <li>On the <strong>Dashboard</strong>, tap <strong>"Income"</strong> or <strong>"Expense"</strong>.</li>
        <li>Enter the <strong>Amount</strong> and select the <strong>Currency</strong> you paid with (e.g., USD, NGN). The app shows the conversion rate live.</li>
        <li>Select a <strong>Portion</strong> (e.g., "Groceries") to categorize the transaction.</li>
        <li><strong>(Optional) Split Transaction:</strong> Toggle the "Split" switch to divide a single transaction (like a salary) into multiple portions (e.g., "Rent", "Savings").</li>
        <li>Tap "Confirm Transaction".</li>
      </ol>
    `
  },
  {
    id: 4,
    question: 'What\'s the difference between a "Portion" and a "Savings Goal"?',
    answer: `
      <p class="mb-2">A <strong>Portion</strong> is a digital envelope for budgeting (e.g., "Rent", "Groceries"). You create them in <strong>Settings > Manage Portions</strong>.</p>
      <p class="mb-2">A <strong>Savings Goal</strong> is just a Portion with a target amount (e.g., "New Car: ₦5,000,000"). You create them from the <strong>Goals</strong> tab.</p>
      <p>You add money to both by categorizing your <strong>Income</strong> transactions into them.</p>
    `
  },
  {
    id: 5,
    question: 'How do I delete a transaction?',
    answer: '<p>Go to the <strong>History</strong> tab. Swipe your finger from right to left on the transaction you want to delete. A "Delete" button will appear.</p>'
  }
])

// --- NEW: SVG Icon Component ---
// This object holds the SVG paths for the features.
const icons = {
  shield: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.751A11.959 11.959 0 0112 2.714v.022z" /></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a4.5 4.5 0 00-.124-1.002c.16.04.321.076.485.111a4.5 4.5 0 013.956 4.402M4.622 18.72C4.784 18.76.945 18.796 5.11 18.807a4.5 4.5 0 013.956 4.402M12 20.25a4.5 4.5 0 00.124-1.002c-.16.04-.321.076-.485.111a4.5 4.5 0 01-3.956-4.402M12 12.75a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM12 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" /></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" /></svg>`,
  pie: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`,
  trophy: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0V9A2.25 2.25 0 0015 6.75h-6A2.25 2.25 0 006.75 9v9.75M16.5 18.75h-9" /></svg>`,
  chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v16.5h16.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 19.5v-1.5a3 3 0 013-3h.75m-3.75 4.5h3.75m-3.75 0V15m3.75 4.5v-4.5m0 0a3 3 0 013-3h1.5m-4.5 0H12m0 0v-1.5a3 3 0 013-3h1.5m-4.5 0H15m0 0v-4.5m0 4.5v-4.5m0 0a3 3 0 013-3h.75m-3.75 0H18m0 0v-1.5a3 3 0 013-3h.75m-3.75 0H21m0 0v-1.5a3 3 0 013-3h.75m-3.75 0H21m0 0v-4.5m0 4.5v-4.5" /></svg>`,
}

</script>

<template>
  <!-- Main container forced to light mode with blue-gray background -->
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
    
    <!-- Navigation Bar -->
    <nav class="w-full py-6 px-6 md:px-0 z-10 sticky top-0 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
      <div class="container mx-auto max-w-6xl flex justify-between items-center">
        <!-- Logo & Brand Name -->
        <div class="flex items-center gap-3">
          <img :src="logoPath" alt="Nairabooks Logo" class="h-20 w-auto" />
          <div class="flex flex-col">
            <span class="font-bold text-2xl text-blue-600 tracking-tight">Nairabooks</span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
               {{ appVersion }}
            </span>
          </div>
        </div>
        <!-- Nav Links -->
        <div class="hidden md:flex items-center gap-6">
          <a href="#features" class="font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-to" class="font-medium text-slate-600 hover:text-blue-600 transition-colors">How-To</a>
          <a :href="apkDownloadLink" download class="font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition-colors">
            Download APK
          </a>
        </div>
      </div>
    </nav>

    <!-- Main Hero Section -->
    <main class="flex-grow flex items-center pt-12 pb-24 md:pt-0 md:pb-0">
      <div class="container mx-auto flex flex-col-reverse md:flex-row items-center max-w-6xl px-6 md:py-24 gap-12 md:gap-6">
        
        <!-- Left Column: Text Content -->
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <!-- Desktop Logo (Hidden, as it's now prominent in the nav) -->
          <!-- <img :src="logoPath" alt="Nairabooks Logo" class="hidden md:block mb-8 h-32 w-auto" /> -->

          <!-- Headline with Blue Gradient -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-6 text-slate-900">
            The simple way to <br class="hidden lg:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              manage your money.
            </span>
          </h1>

          <!-- Intro Text -->
          <p class="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Take control of your finances with Nairabooks, the <strong>offline-first</strong>
            financial tracker built for you. Understand your spending habits,
            manage your budget, and see exactly where your money goes.
          </p>

          <!-- Call to Action (Direct APK Download) -->
          <div class="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              :href="apkDownloadLink"
              download
              class="group flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
            >
              <!-- Android Icon SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zM7.067 7.229l-1.48-2.562a.4997.4997 0 0 0-.8652.4997l1.5075 2.607C3.5535 9.095 1.5 11.7577 1.5 14.8775v.9317h21v-.9317c0-3.1198-2.0535-5.7825-4.7293-7.1039l1.5075-2.607a.5003.5003 0 0 0-.8652-.4997l-1.48 2.562A10.6616 10.6616 0 0 0 12 6.8035a10.6616 10.6616 0 0 0-4.933.4255z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs font-medium opacity-90 mb-0.5">Download Beta</div>
                <div class="text-xl font-bold leading-none">Direct APK</div>
              </div>
            </a>
          </div>
          
          <!-- Beta Version Badge -->
          <div class="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span class="font-semibold">Public {{ appVersion }}</span> &nbsp;&mdash;&nbsp; Try it now!
          </div>
        </div>

        <!-- Right Column: Mockup Image -->
        <div class="w-full md:w-1/2 relative z-0">
          <!-- Blue Blob Background Effect -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-100/60 to-cyan-100/60 blur-3xl rounded-full -z-10"></div>
          
          <!-- Device Mockup -->
          <img 
            :src="mockupPath" 
            alt="Nairabooks App Interface" 
            class="relative mx-auto w-auto max-h-[550px] object-contain drop-shadow-2xl md:-rotate-6 hover:rotate-0 transition-all duration-500 ease-out" 
          />
        </div>
      </div>
    </main>

    <!-- ==============================================
         NEW: Core Features Section
    =============================================== -->
    <section id="features" class="py-24 bg-white scroll-mt-20">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">All Your Finances in One Place</h2>
          <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Nairabooks is packed with features to give you complete control over your money, all while keeping your data 100% private.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Loop over features -->
          <div v-for="feature in features" :key="feature.title" class="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <!-- Feature Icon -->
              <span class_="w-6 h-6" v-html="icons[feature.icon]"></span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">{{ feature.title }}</h3>
              <p class="text-slate-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==============================================
         NEW: How-To Guide (FAQ Accordion)
    =============================================== -->
    <section id="how-to" class="py-24 bg-slate-50 scroll-mt-20">
      <div class="container mx-auto max-w-4xl px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">How It Works</h2>
          <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Get started in minutes. Here are the basics of managing your money with Nairabooks.
          </p>
        </div>

        <div class="space-y-4">
          <!-- Loop over FAQ items -->
          <div v-for="faq in faqs" :key="faq.id" class="bg-white rounded-xl border border-slate-200/50 shadow-sm overflow-hidden">
            <!-- Accordion Header -->
            <button
              @click="openAccordion = (openAccordion === faq.id ? null : faq.id)"
              class="w-full flex justify-between items-center text-left p-6"
            >
              <span class="text-lg font-bold text-slate-800">{{ faq.question }}</span>
              <!-- Chevron Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" 
                   class="w-5 h-5 text-blue-600 transition-transform duration-300"
                   :class="{ 'rotate-180': openAccordion === faq.id }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <!-- Accordion Content -->
            <div v-show="openAccordion === faq.id" class="px-6 pb-6 text-slate-600 prose prose-blue max-w-none">
              <div v-html="faq.answer"></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 text-center text-slate-500 text-sm bg-white border-t border-slate-200/50">
      <div class="container mx-auto px-6">
        <img :src="logoPath" alt="Nairabooks Logo" class="h-20 w-auto mx-auto mb-4" />
        <p class="text-lg font-semibold text-slate-700 mb-4">Manage your money. Own your data.</p>
        <p>Developed by <span class="font-semibold text-slate-800">OPS</span></p>
        <p class="mt-2">© {{ new Date().getFullYear() }} Nairabooks. All rights reserved.</p>
      </div>
    </footer>

  </div>
</template>

<style>
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Inter', sans-serif; /* Ensure body matches main container */
  scroll-behavior: smooth;
}

/* Styles for the v-html content */
.prose ol {
  padding-left: 1.2rem;
}
.prose p {
  margin-bottom: 0.5rem;
}
</style>