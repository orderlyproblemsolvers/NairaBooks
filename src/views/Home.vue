<script setup>
import { ref } from 'vue'

const appVersion = 'v1.0'
const apkDownloadLink = 'https://github.com/orderlyproblemsolvers/nairabooksapp/releases/download/v1.0/portions-app-v1.apk'

const logoPath = '/img/logo.png'
const dashboardMockup = '/img/dashboard-mockup.png'
const analyticsMockup = '/img/analytics-mockup.png'
const portionsMockup = '/img/portions-mockup.png'

const openAccordion = ref(null)

const features = ref([
  {
    icon: 'envelope',
    title: 'Envelope Budgeting',
    description: 'Give every naira a job before you spend it. Assign money into named portions and watch your limits in real time.'
  },
  {
    icon: 'goal',
    title: 'Savings Goals',
    description: 'Set a target, an optional deadline, and fund your goal incrementally. Portions tracks the percentage and celebrates completion.'
  },
  {
    icon: 'split',
    title: 'Smart Split Transactions',
    description: 'A single transaction — say, a grocery run that also covered household supplies — can be split across multiple portions with precision.'
  },
  {
    icon: 'sync',
    title: 'Cloud Sync',
    description: 'Your data follows you. Log in on any device and Portions quietly reconciles local and remote, always deferring to the most recent version.'
  },
  {
    icon: 'analytics',
    title: 'Advanced Analytics',
    description: 'Filter by week, month, or year. See income vs expense trends, spending breakdowns, and your top expense categories at a glance.'
  },
  {
    icon: 'accounts',
    title: 'Multi-Account & Currency',
    description: 'Keep Personal and Business money cleanly separated. Each account carries its own currency, theme, and transaction history.'
  }
])

const faqs = ref([
  {
    id: 1,
    question: 'How does envelope budgeting work in Portions?',
    answer: `<p class="mb-3">You give every naira a "job" by putting it into a portion (an envelope).</p>
      <ol class="faq-list">
        <li><strong>Create Portions:</strong> Go to the Portions tab, tap +, and set a monthly budget — e.g. ₦50,000 for Groceries.</li>
        <li><strong>Fund Them:</strong> When income arrives, use the Split toggle to divide and assign it across your portions.</li>
        <li><strong>Spend from Them:</strong> Log expenses against the correct portion. Portions deducts in real time so you always know what's left.</li>
      </ol>`
  },
  {
    id: 2,
    question: 'What happens to unspent money at month end?',
    answer: `<p>It stays. If you budget ₦50,000 for Groceries in October and only spend ₦45,000, the ₦5,000 carries forward. November starts with ₦55,000 in that envelope — no waste, no reset.</p>`
  },
  {
    id: 3,
    question: 'How do savings goals differ from budget portions?',
    answer: `<p>Budget portions are recurring — they reset each month with a spending limit. Savings goals are cumulative — you fund them over time toward a fixed target. A goal has a target amount and an optional deadline, and it shows you the percentage reached. When you hit 100%, it marks itself complete.</p>`
  },
  {
    id: 4,
    question: 'How does cloud sync work?',
    answer: `<p>When you log in, Portions compares the timestamp of your local data against your cloud data and pulls whichever is more recent. Changes you make sync to the cloud automatically with a short debounce delay. If you go offline, changes are queued and pushed the moment you reconnect.</p>`
  },
  {
    id: 5,
    question: 'Can I use Portions for multiple currencies?',
    answer: `<p>Yes. Each account has a base currency (NGN by default) and transactions support conversion rates, so you can record a USD expense in a naira account and Portions will store the converted base amount for correct reporting.</p>`
  },
  {
    id: 6,
    question: 'What is the Analytics tab for?',
    answer: `<p>Analytics reviews your financial past. Filter by period — week, month, year — to see income vs expense trends, a spending breakdown by portion, and your top expense categories. The History sub-tab gives you a fully searchable list of every transaction for editing or deletion.</p>`
  }
])

const svgIcons = {
  envelope: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>`,
  goal: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>`,
  split: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>`,
  sync: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>`,
  analytics: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`,
  accounts: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>`
}
</script>

<template>
  <div class="app-wrapper" v-cloak>

    <!-- ── NAVIGATION ─────────────────────────────────── -->
    <nav class="nav">
      <div class="nav-inner">
        <a href="/" class="nav-brand">
          <img :src="logoPath" alt="Portions" class="nav-logo" />
          <span class="nav-name">Portions</span>
        </a>
        <div class="nav-links">
          <a href="#features" class="nav-link">Features</a>
          <a href="#showcase" class="nav-link">Preview</a>
          <a href="#how-it-works" class="nav-link">How It Works</a>
          <a :href="apkDownloadLink" download class="nav-cta">Download APK</a>
        </div>
      </div>
    </nav>

    <!-- ── HERO ───────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-bg-blob hero-bg-blob--1"></div>
      <div class="hero-bg-blob hero-bg-blob--2"></div>
      <div class="hero-inner">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            {{ appVersion }} — Now Available
          </div>
          <h1 class="hero-headline">
            Your money should know<br />
            <em>where it's going.</em>
          </h1>
          <p class="hero-subhead">
            Portions is a personal finance app built around one simple idea: 
            give every naira a home before you spend it. 
            Budget envelopes, savings goals, and cloud sync — in one elegant app.
          </p>
          <a :href="apkDownloadLink" download class="hero-download-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="btn-android-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zM7.067 7.229l-1.48-2.562a.4997.4997 0 0 0-.8652.4997l1.5075 2.607C3.5535 9.095 1.5 11.7577 1.5 14.8775v.9317h21v-.9317c0-3.1198-2.0535-5.7825-4.7293-7.1039l1.5075-2.607a.5003.5003 0 0 0-.8652-.4997l-1.48 2.562A10.6616 10.6616 0 0 0 12 6.8035a10.6616 10.6616 0 0 0-4.933.4255z"/>
            </svg>
            <div class="btn-text">
              <span class="btn-text-sub">Download for Android</span>
              <span class="btn-text-main">Get Portions {{ appVersion }}</span>
            </div>
          </a>
          <p class="hero-footnote">Free · Your data stays yours</p>
        </div>
        <div class="hero-mockup">
          <div class="hero-mockup-glow"></div>
          <img :src="dashboardMockup" alt="Portions Dashboard" class="hero-mockup-img" />
        </div>
      </div>
    </section>

    <!-- ── NARRATIVE ──────────────────────────────────── -->
    <section class="narrative">
      <div class="container">
        <div class="narrative-grid">
          <div class="narrative-text">
            <p class="narrative-eyebrow">The Idea</p>
            <h2 class="narrative-headline">
              Stop tracking what happened.<br />
              Start deciding what will.
            </h2>
          </div>
          <div class="narrative-body">
            <p>Most finance apps ask you to categorise your spending after the fact and hope the numbers make sense. Portions works the other way around — it asks you to divide your money <em>before</em> you spend it.</p>
            <p>Each portion is a named bucket. Your rent lives in one. Your groceries in another. Your weekend fun in a third. Every naira has a home, and that clarity changes how you relate to your balance.</p>
            <p>When you need to move money between buckets — no problem. When a single transaction touches multiple areas — split it precisely. When you come back online after being offline — your data catches up quietly, without conflict.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURES GRID ──────────────────────────────── -->
    <section id="features" class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Everything you need.<br />Nothing you don't.</h2>
          <p class="section-subtitle">Six core capabilities that put you in complete control of your finances.</p>
        </div>
        <div class="features-grid">
          <div
            v-for="f in features"
            :key="f.title"
            class="feature-card"
          >
            <div class="feature-icon">
              <span v-html="svgIcons[f.icon]"></span>
            </div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SHOWCASE SCREENS ───────────────────────────── -->
    <section id="showcase" class="showcase">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">See it in action.</h2>
          <p class="section-subtitle">A closer look at what you'll use every day.</p>
        </div>

        <!-- Dashboard Showcase -->
        <div class="showcase-block">
          <div class="showcase-text">
            <p class="showcase-eyebrow">Dashboard</p>
            <h3 class="showcase-heading">Your whole financial picture, at a glance.</h3>
            <p class="showcase-body">The dashboard shows your total balance, recent transactions, and the health of every portion — all on one screen. Quick actions let you log income or expenses in seconds.</p>
          </div>
          <div class="showcase-screen showcase-screen--right">
            <div class="screen-shadow-wrap">
              <img :src="dashboardMockup" alt="Portions Dashboard screen" class="screen-img" />
            </div>
          </div>
        </div>

        <!-- Portions Showcase -->
        <div class="showcase-block showcase-block--flip">
          <div class="showcase-text">
            <p class="showcase-eyebrow">Portions Tab</p>
            <h3 class="showcase-heading">Budget buckets and savings goals, side by side.</h3>
            <p class="showcase-body">Budget portions show a live progress bar and call out overspending in red. Savings goals show how far you've come toward a target, with a completion indicator when you arrive.</p>
          </div>
          <div class="showcase-screen showcase-screen--left">
            <div class="screen-shadow-wrap">
              <img :src="portionsMockup" alt="Portions tab screen" class="screen-img" />
            </div>
          </div>
        </div>

        <!-- Analytics Showcase -->
        <div class="showcase-block">
          <div class="showcase-text">
            <p class="showcase-eyebrow">Analytics</p>
            <h3 class="showcase-heading">Understand where your money actually goes.</h3>
            <p class="showcase-body">Filter by week, month, or year to see income vs expense trends, a breakdown by portion, and your top spending categories. The History tab gives you a searchable record of every transaction.</p>
          </div>
          <div class="showcase-screen showcase-screen--right">
            <div class="screen-shadow-wrap">
              <img :src="analyticsMockup" alt="Analytics screen" class="screen-img" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── HOW IT WORKS / FAQ ─────────────────────────── -->
    <section id="how-it-works" class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common questions.</h2>
          <p class="section-subtitle">Everything you need to know to get started.</p>
        </div>
        <div class="faq-list-wrapper">
          <div
            v-for="faq in faqs"
            :key="faq.id"
            class="faq-item"
            :class="{ 'faq-item--open': openAccordion === faq.id }"
          >
            <button
              class="faq-trigger"
              @click="openAccordion = openAccordion === faq.id ? null : faq.id"
            >
              <span>{{ faq.question }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="faq-chevron">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <transition
              enter-active-class="faq-enter-active"
              enter-from-class="faq-enter-from"
              enter-to-class="faq-enter-to"
              leave-active-class="faq-leave-active"
              leave-from-class="faq-leave-from"
              leave-to-class="faq-leave-to"
            >
              <div v-show="openAccordion === faq.id" class="faq-body" v-html="faq.answer"></div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FINAL CTA ──────────────────────────────────── -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-glow"></div>
          <p class="cta-eyebrow">Ready?</p>
          <h2 class="cta-headline">Start deciding where your money goes.</h2>
          <p class="cta-body">Free. No subscription. Your data stays on your device and in your cloud account — never ours.</p>
          <a :href="apkDownloadLink" download class="cta-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="btn-android-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zM7.067 7.229l-1.48-2.562a.4997.4997 0 0 0-.8652.4997l1.5075 2.607C3.5535 9.095 1.5 11.7577 1.5 14.8775v.9317h21v-.9317c0-3.1198-2.0535-5.7825-4.7293-7.1039l1.5075-2.607a.5003.5003 0 0 0-.8652-.4997l-1.48 2.562A10.6616 10.6616 0 0 0 12 6.8035a10.6616 10.6616 0 0 0-4.933.4255z"/>
            </svg>
            <div class="btn-text">
              <span class="btn-text-sub">Download for Android</span>
              <span class="btn-text-main">Get Portions {{ appVersion }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ── FOOTER ─────────────────────────────────────── -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <img :src="logoPath" alt="Portions" class="footer-logo" />
            <span class="footer-brand-name">Portions</span>
          </div>
          <div class="footer-links-group">
            <div class="footer-col">
              <p class="footer-col-title">Product</p>
              <a href="#features" class="footer-link">Features</a>
              <a href="#showcase" class="footer-link">Preview</a>
              <a href="#how-it-works" class="footer-link">How It Works</a>
              <a :href="apkDownloadLink" download class="footer-link">Download APK</a>
            </div>
            <div class="footer-col">
              <p class="footer-col-title">Legal</p>
              <a href="/privacy" class="footer-link">Privacy Policy</a>
              <a href="/terms" class="footer-link">Terms of Use</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© {{ new Date().getFullYear() }} Portions. Developed by <a href="https:orderlyproblemsolvers.com">Orderly Problem Solvers</a>.</p>
          <p>Your data stays yours.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --blue: #0071e3;
  --blue-hover: #0077ed;
  --blue-soft: #e8f1fb;
  --dark: #1d1d1f;
  --mid: #86868b;
  --light: #f5f5f7;
  --white: #ffffff;
  --border: rgba(0,0,0,0.09);
  --radius-card: 18px;
  --radius-btn: 980px;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'DM Serif Display', Georgia, serif;
  --shadow-card: 0 4px 24px rgba(0,0,0,0.07);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.12);
  --transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  color: var(--dark);
  background: var(--white);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

em { font-style: italic; font-family: var(--font-display); }

[v-cloak] { display: none; }

/* ── Container ── */
.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Navigation ── */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.82);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.nav-logo { height: 32px; width: auto; }
.nav-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark);
  letter-spacing: -0.01em;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-link {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--dark);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: var(--radius-btn);
  transition: color var(--transition), background var(--transition);
}
.nav-link:hover { color: var(--blue); background: var(--blue-soft); }
.nav-cta {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--white);
  background: var(--blue);
  text-decoration: none;
  padding: 7px 16px;
  border-radius: var(--radius-btn);
  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  box-shadow: 0 2px 8px rgba(0,113,227,0.3);
}
.nav-cta:hover { background: var(--blue-hover); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,113,227,0.35); }

/* ── Hero ── */
.hero {
  position: relative;
  background: linear-gradient(160deg, #eef5ff 0%, #f8fbff 40%, #ffffff 70%);
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
}
.hero-bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero-bg-blob--1 {
  width: 600px; height: 600px;
  background: rgba(0,113,227,0.08);
  top: -100px; right: -100px;
}
.hero-bg-blob--2 {
  width: 400px; height: 400px;
  background: rgba(100,180,255,0.1);
  bottom: -80px; left: -60px;
}
.hero-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 80px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--blue);
  background: var(--blue-soft);
  border: 1px solid rgba(0,113,227,0.2);
  padding: 5px 12px;
  border-radius: var(--radius-btn);
  margin-bottom: 24px;
}
.hero-badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--blue);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}
.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--dark);
  margin-bottom: 20px;
}
.hero-subhead {
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--mid);
  margin-bottom: 36px;
  max-width: 440px;
}
.hero-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: var(--blue);
  color: var(--white);
  text-decoration: none;
  padding: 14px 22px;
  border-radius: 16px;
  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  box-shadow: 0 4px 20px rgba(0,113,227,0.35);
}
.hero-download-btn:hover { background: var(--blue-hover); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,113,227,0.4); }
.btn-android-icon { width: 28px; height: 28px; flex-shrink: 0; }
.btn-text { display: flex; flex-direction: column; }
.btn-text-sub { font-size: 0.75rem; opacity: 0.85; font-weight: 400; }
.btn-text-main { font-size: 1rem; font-weight: 600; }
.hero-footnote { margin-top: 14px; font-size: 0.8125rem; color: var(--mid); }
.hero-mockup { position: relative; display: flex; justify-content: center; align-items: center; }
.hero-mockup-glow {
  position: absolute;
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(0,113,227,0.15) 0%, transparent 70%);
  border-radius: 50%;
}
.hero-mockup-img {
  position: relative;
  z-index: 1;
  max-height: 580px;
  width: auto;
  object-fit: contain;
  drop-shadow: 0 40px 80px rgba(0,0,0,0.2);
  filter: drop-shadow(0 30px 60px rgba(0,0,0,0.18));
  transform: rotate(-2deg);
}

/* ── Narrative ── */
.narrative {
  padding: 100px 0;
  border-top: 1px solid var(--border);
}
.narrative-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
.narrative-eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--blue);
  margin-bottom: 14px;
}
.narrative-headline {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.15;
  color: var(--dark);
}
.narrative-body p {
  font-size: 1rem;
  line-height: 1.75;
  color: #444;
  margin-bottom: 16px;
}
.narrative-body p:last-child { margin-bottom: 0; }
.narrative-body em { color: var(--blue); font-style: italic; }

/* ── Features Grid ── */
.features-section {
  padding: 100px 0;
  background: var(--light);
}
.section-header {
  text-align: center;
  margin-bottom: 64px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  color: var(--dark);
  margin-bottom: 14px;
}
.section-subtitle {
  font-size: 1.0625rem;
  color: var(--mid);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.6;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.feature-card {
  background: var(--white);
  border-radius: var(--radius-card);
  padding: 32px;
  transition: transform var(--transition), box-shadow var(--transition);
  box-shadow: var(--shadow-card);
  border: 1px solid rgba(0,0,0,0.04);
}
.feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
.feature-icon {
  width: 48px; height: 48px;
  background: var(--blue-soft);
  color: var(--blue);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.feature-icon span { width: 24px; height: 24px; display: flex; }
.feature-icon svg { width: 24px; height: 24px; }
.feature-title {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}
.feature-desc {
  font-size: 0.9375rem;
  line-height: 1.65;
  color: var(--mid);
}

/* ── Showcase ── */
.showcase {
  padding: 100px 0;
  background: var(--white);
}
.showcase-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 100px;
}
.showcase-block:last-child { margin-bottom: 0; }
.showcase-block--flip { direction: rtl; }
.showcase-block--flip > * { direction: ltr; }
.showcase-eyebrow {
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--blue);
  margin-bottom: 12px;
}
.showcase-heading {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.5vw, 2.25rem);
  line-height: 1.2;
  color: var(--dark);
  margin-bottom: 16px;
}
.showcase-body {
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
}
.screen-shadow-wrap {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.screen-img {
  width: 100%;
  height: auto;
  display: block;
}

/* ── FAQ ── */
.faq-section {
  padding: 100px 0;
  background: var(--light);
}
.faq-list-wrapper { max-width: 720px; margin: 0 auto; }
.faq-item {
  background: var(--white);
  border-radius: 14px;
  margin-bottom: 12px;
  border: 1px solid var(--border);
  overflow: hidden;
  transition: box-shadow var(--transition), border-color var(--transition);
}
.faq-item--open { border-color: rgba(0,113,227,0.3); box-shadow: 0 4px 20px rgba(0,113,227,0.08); }
.faq-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 16px;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--dark);
}
.faq-chevron {
  width: 20px; height: 20px;
  flex-shrink: 0;
  color: var(--blue);
  transition: transform var(--transition);
}
.faq-item--open .faq-chevron { transform: rotate(180deg); }
.faq-body {
  padding: 0 24px 22px;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #555;
}
.faq-body :deep(p) { margin-bottom: 10px; }
.faq-body :deep(p:last-child) { margin-bottom: 0; }
.faq-body :deep(ol.faq-list) { padding-left: 20px; }
.faq-body :deep(ol.faq-list li) { margin-bottom: 8px; }
.faq-body :deep(strong) { color: var(--dark); font-weight: 600; }
.faq-enter-active { transition: max-height 0.3s ease, opacity 0.25s ease; overflow: hidden; max-height: 500px; }
.faq-enter-from { max-height: 0; opacity: 0; }
.faq-enter-to { max-height: 500px; opacity: 1; }
.faq-leave-active { transition: max-height 0.2s ease, opacity 0.2s ease; overflow: hidden; }
.faq-leave-from { max-height: 500px; opacity: 1; }
.faq-leave-to { max-height: 0; opacity: 0; }

/* ── CTA Section ── */
.cta-section { padding: 80px 0 100px; background: var(--white); }
.cta-card {
  position: relative;
  background: linear-gradient(135deg, #0062c8 0%, #0071e3 60%, #2693ff 100%);
  border-radius: 28px;
  padding: 72px 60px;
  text-align: center;
  overflow: hidden;
}
.cta-glow {
  position: absolute;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
  top: -150px; right: -100px;
  pointer-events: none;
}
.cta-eyebrow {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255,255,255,0.75);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 12px;
}
.cta-headline {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--white);
  line-height: 1.1;
  margin-bottom: 16px;
}
.cta-body { font-size: 1rem; color: rgba(255,255,255,0.8); margin-bottom: 40px; }
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: var(--white);
  color: var(--blue);
  text-decoration: none;
  padding: 14px 26px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: transform var(--transition), box-shadow var(--transition);
}
.cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 40px rgba(0,0,0,0.25); }
.cta-btn .btn-text-sub { color: #555; }
.cta-btn .btn-text-main { color: var(--blue); }

/* ── Footer ── */
.footer {
  background: #0a0a0a;
  color: rgba(255,255,255,0.55);
  padding: 64px 0 40px;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 32px;
}
.footer-brand { display: flex; align-items: center; gap: 10px; }
.footer-logo { height: 36px; width: auto;}
.footer-brand-name { font-size: 1.125rem; font-weight: 600; color: var(--white); }
.footer-links-group { display: flex; gap: 60px; }
.footer-col { display: flex; flex-direction: column; gap: 10px; }
.footer-col-title { font-size: 0.8125rem; font-weight: 600; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 4px; }
.footer-link { font-size: 0.875rem; color: rgba(255,255,255,0.6); text-decoration: none; transition: color var(--transition); }
.footer-link:hover { color: var(--white); }
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
}
.footer-bottom strong { color: rgba(255,255,255,0.8); }

/* ── Responsive ── */
@media (max-width: 768px) {
  .nav-links .nav-link { display: none; }
  .hero-inner { grid-template-columns: 1fr; gap: 48px; padding: 60px 24px; }
  .hero-mockup { order: -1; }
  .hero-mockup-img { max-height: 380px; transform: none; }
  .narrative-grid { grid-template-columns: 1fr; gap: 32px; }
  .features-grid { grid-template-columns: 1fr; }
  .showcase-block, .showcase-block--flip { grid-template-columns: 1fr; gap: 36px; direction: ltr; }
  .cta-card { padding: 48px 28px; }
  .footer-top { flex-direction: column; gap: 40px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>