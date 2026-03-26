<script setup>
const logoPath = '/img/logo.png'
const lastUpdated = 'March 2025'
</script>

<template>
  <div class="legal-wrapper" v-cloak>

    <!-- ── NAV ── -->
    <nav class="nav">
      <div class="nav-inner">
        <a href="/" class="nav-brand">
          <img :src="logoPath" alt="Portions" class="nav-logo" />
          <span class="nav-name">Portions</span>
        </a>
        <a href="/" class="nav-back">← Back to Home</a>
      </div>
    </nav>

    <!-- ── CONTENT ── -->
    <main class="legal-main">
      <div class="legal-container">

        <header class="legal-header">
          <p class="legal-tag">Legal</p>
          <h1 class="legal-title">Privacy Policy</h1>
          <p class="legal-date">Last updated: {{ lastUpdated }}</p>
        </header>

        <div class="privacy-summary">
          <div class="summary-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.751A11.959 11.959 0 0112 2.714v.022z" />
            </svg>
          </div>
          <div>
            <p class="summary-title">The short version</p>
            <p class="summary-text">Your financial data belongs to you. We don't sell it, we don't share it with advertisers, and we don't read it. When you use cloud sync, your data is stored securely under your own account. That's it.</p>
          </div>
        </div>

        <div class="legal-body">

          <section class="legal-section">
            <h2>1. Who We Are</h2>
            <p>Portions is developed and distributed by OPS ("we", "us", "our"). This Privacy Policy explains how we collect, use, store, and protect information when you use the Portions mobile application and any associated services.</p>
          </section>

          <section class="legal-section">
            <h2>2. Information We Collect</h2>
            <p>We collect only what is necessary to make Portions work.</p>

            <h3>2a. Information you provide directly</h3>
            <p>When you create an account for cloud sync, we collect your email address and a hashed version of your password (via Supabase Auth). We never store your password in plain text.</p>
            <p>All financial data you enter — transactions, portions, goals, accounts, balances — is stored locally on your device and, if you enable sync, uploaded to your personal cloud account.</p>

            <h3>2b. Information collected automatically</h3>
            <p>We do not use analytics SDKs, advertising trackers, or behavioural profiling tools. We do not collect device fingerprints, advertising IDs, or usage telemetry.</p>
            <p>If a crash occurs, the App may generate a local crash log. These logs are not automatically transmitted to us and are only used to help you diagnose issues if you choose to report them.</p>

            <h3>2c. Information we do NOT collect</h3>
            <ul>
              <li>Your name, phone number, or physical address (unless you voluntarily enter them into a transaction note)</li>
              <li>Your location</li>
              <li>Contacts or calendar data</li>
              <li>Bank account numbers or card details (Portions does not connect to your bank)</li>
              <li>Any behavioural or usage analytics</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect only to:</p>
            <ul>
              <li>Provide cloud sync — storing and retrieving your financial data across devices under your account</li>
              <li>Authenticate you when you sign in</li>
              <li>Allow you to recover your account via your email address</li>
            </ul>
            <p>We do not use your data for advertising, profiling, marketing, or any purpose beyond delivering the core functionality of Portions.</p>
          </section>

          <section class="legal-section">
            <h2>4. Data Storage and Security</h2>
            <p>Your data is stored in two places:</p>

            <h3>On your device</h3>
            <p>Financial data is persisted locally using AsyncStorage on Android. It remains on your device and is governed by your device's own security (lock screen, encryption). When you log out, local data is cleared from the App's memory.</p>

            <h3>In the cloud (optional)</h3>
            <p>If you enable cloud sync, your data is stored in a Supabase database secured with row-level security policies — meaning only your authenticated account can read or write your data. Data in transit is encrypted via HTTPS/TLS. Supabase is SOC 2 Type II compliant and stores data in secure infrastructure.</p>

            <p>We do not have employees who routinely access your financial data. Access to the underlying database is restricted and auditable.</p>
          </section>

          <section class="legal-section">
            <h2>5. Data Sharing</h2>
            <p>We do not sell your data. We do not share your personal financial information with third parties except in the following narrow circumstances:</p>
            <ul>
              <li><strong>Service providers:</strong> Supabase processes cloud-synced data on our behalf as a sub-processor. They act under data processing terms and do not use your data for their own purposes.</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required to do so by law or valid legal process (e.g. a court order). We will notify you of such requests where legally permitted to do so.</li>
              <li><strong>Business transfers:</strong> If OPS is acquired or its assets transferred, user data may be part of that transfer. We will provide notice before your data becomes subject to a different privacy policy.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>6. Data Retention</h2>
            <p>Your cloud data is retained for as long as you maintain an active account. If you delete your account, your cloud data is deleted within 30 days. Local data on your device persists until you uninstall the App or manually clear its storage.</p>
            <p>We do not retain backup copies of deleted accounts beyond the 30-day window.</p>
          </section>

          <section class="legal-section">
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access</strong> your data — all financial data is visible to you directly within the App</li>
              <li><strong>Export</strong> your data — you can view and copy your data at any time from within the App</li>
              <li><strong>Delete</strong> your data — you can clear local data from within Settings, and request deletion of your cloud account and all associated data by contacting us</li>
              <li><strong>Correct</strong> your data — all transactions, portions, and goals can be edited or deleted directly in the App</li>
              <li><strong>Opt out of cloud sync</strong> — cloud sync is optional. You can use Portions entirely offline with no account required</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>8. Children's Privacy</h2>
            <p>Portions is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal data, please contact us so we can delete it promptly.</p>
          </section>

          <section class="legal-section">
            <h2>9. Offline Use</h2>
            <p>Portions is fully functional without an internet connection. If you choose not to create an account or enable cloud sync, no data ever leaves your device. We have no access to locally-stored data on your phone.</p>
          </section>

          <section class="legal-section">
            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When material changes occur, we will update the "Last updated" date on this page and, where appropriate, notify you through the App. Your continued use of Portions after changes are posted constitutes your acceptance of the updated policy.</p>
          </section>

          <section class="legal-section">
            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, want to exercise your data rights, or would like to request deletion of your account and data, please contact us through the contact details provided in the App or on our main website.</p>
            <p>We take privacy seriously and will respond to all legitimate requests promptly.</p>
          </section>

        </div>

        <div class="legal-nav-links">
          <a href="/terms" class="legal-nav-link">Read our Terms of Use →</a>
          <a href="/" class="legal-nav-link">← Back to Portions</a>
        </div>

      </div>
    </main>

    <!-- ── FOOTER ── -->
    <footer class="legal-footer">
      <div class="legal-footer-inner">
        <p>© {{ new Date().getFullYear() }} Portions by OPS. All rights reserved.</p>
        <div class="legal-footer-links">
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy Policy</a>
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
  --blue-soft: #e8f1fb;
  --dark: #1d1d1f;
  --mid: #86868b;
  --light: #f5f5f7;
  --white: #ffffff;
  --border: rgba(0,0,0,0.09);
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'DM Serif Display', Georgia, serif;
  --transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  color: var(--dark);
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}
[v-cloak] { display: none; }

/* Nav */
.nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,255,255,0.82);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 780px; margin: 0 auto; padding: 0 24px;
  height: 56px; display: flex; align-items: center; justify-content: space-between;
}
.nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.nav-logo { height: 30px; width: auto; }
.nav-name { font-size: 1rem; font-weight: 600; color: var(--dark); }
.nav-back { font-size: 0.875rem; font-weight: 500; color: var(--blue); text-decoration: none; transition: opacity var(--transition); }
.nav-back:hover { opacity: 0.75; }

/* Main */
.legal-main { padding: 64px 24px 80px; }
.legal-container { max-width: 720px; margin: 0 auto; }

/* Header */
.legal-header { margin-bottom: 40px; }
.legal-tag {
  font-size: 0.8125rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.07em; color: var(--blue); margin-bottom: 12px;
}
.legal-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  line-height: 1.1;
  color: var(--dark);
  margin-bottom: 10px;
}
.legal-date { font-size: 0.9rem; color: var(--mid); }

/* Summary card */
.privacy-summary {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: var(--blue-soft);
  border: 1px solid rgba(0,113,227,0.2);
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 48px;
}
.summary-icon {
  width: 40px; height: 40px; flex-shrink: 0;
  background: var(--blue);
  color: var(--white);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
}
.summary-icon svg { width: 22px; height: 22px; }
.summary-title { font-size: 0.9375rem; font-weight: 600; color: var(--dark); margin-bottom: 6px; }
.summary-text { font-size: 0.9rem; line-height: 1.65; color: #3a5a8a; }

/* Body */
.legal-body { border-top: 1px solid var(--border); padding-top: 48px; }

.legal-section {
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--border);
}
.legal-section:last-child { border-bottom: none; }

.legal-section h2 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 14px;
  letter-spacing: -0.01em;
}
.legal-section h3 {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--dark);
  margin-top: 20px;
  margin-bottom: 8px;
}
.legal-section p {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #444;
  margin-bottom: 12px;
}
.legal-section p:last-child { margin-bottom: 0; }
.legal-section a { color: var(--blue); text-decoration: none; }
.legal-section a:hover { text-decoration: underline; }
.legal-section ul {
  padding-left: 22px;
  margin-top: 10px;
}
.legal-section ul li {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 8px;
}
.legal-section ul li strong { color: var(--dark); font-weight: 600; }

/* Nav links at bottom */
.legal-nav-links {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}
.legal-nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--blue);
  text-decoration: none;
}
.legal-nav-link:hover { text-decoration: underline; }

/* Footer */
.legal-footer {
  background: #0a0a0a;
  padding: 32px 24px;
}
.legal-footer-inner {
  max-width: 720px; margin: 0 auto;
  display: flex; justify-content: space-between; align-items: center;
  font-size: 0.8125rem; color: rgba(255,255,255,0.45);
}
.legal-footer-links { display: flex; gap: 24px; }
.legal-footer-links a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color var(--transition); }
.legal-footer-links a:hover { color: var(--white); }

@media (max-width: 600px) {
  .privacy-summary { flex-direction: column; }
  .legal-nav-links { flex-direction: column; gap: 16px; }
  .legal-footer-inner { flex-direction: column; gap: 12px; text-align: center; }
}
</style>