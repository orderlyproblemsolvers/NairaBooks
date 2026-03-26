<script setup>
const logoPath = '/img/logo.png'
const lastUpdated = 'March 2025'
</script>

<template>
  <div class="legal-wrapper">

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
          <h1 class="legal-title">Terms of Use</h1>
          <p class="legal-date">Last updated: {{ lastUpdated }}</p>
        </header>

        <div class="legal-body">

          <section class="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By downloading, installing, or using Portions (the "App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the App. These terms apply to all users of Portions, including users who interact with the App via Android devices.</p>
          </section>

          <section class="legal-section">
            <h2>2. Description of the App</h2>
            <p>Portions is a personal finance management application that enables you to track income and expenses, create budget envelopes (portions), set savings goals, view financial analytics, and optionally sync your data to a personal cloud account. The App is provided by OPS ("we", "us", or "our").</p>
          </section>

          <section class="legal-section">
            <h2>3. Eligibility</h2>
            <p>You must be at least 13 years of age to use the App. By using Portions, you represent and warrant that you are of legal age to form a binding contract. If you are under 18, you confirm that a parent or legal guardian has reviewed and agreed to these terms on your behalf.</p>
          </section>

          <section class="legal-section">
            <h2>4. Your Account and Data</h2>
            <p>Portions may allow you to create an account for cloud sync functionality. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorised access to your account.</p>
            <p>All financial data you enter into Portions belongs to you. We do not sell, trade, or otherwise transfer your personal financial data to third parties. Please review our <a href="/privacy">Privacy Policy</a> for full details on how data is handled.</p>
          </section>

          <section class="legal-section">
            <h2>5. Permitted Use</h2>
            <p>You may use Portions solely for your own personal, non-commercial financial management purposes. You agree not to:</p>
            <ul>
              <li>Reverse engineer, decompile, or disassemble any portion of the App</li>
              <li>Use the App to develop a competing product or service</li>
              <li>Attempt to gain unauthorised access to the App's backend systems or another user's account</li>
              <li>Use the App in any manner that violates applicable laws or regulations</li>
              <li>Introduce malware, viruses, or any other harmful code into the App</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>6. No Financial Advice</h2>
            <p>Portions is a financial tracking and budgeting tool only. Nothing in the App constitutes professional financial, investment, legal, or tax advice. The figures, projections, and analytics displayed are based solely on the data you provide. You should consult a qualified financial professional before making significant financial decisions.</p>
          </section>

          <section class="legal-section">
            <h2>7. Third-Party Services</h2>
            <p>Portions uses third-party services including Supabase for optional cloud storage and authentication. Your use of those features is also subject to the terms and policies of those providers. We are not responsible for the practices of any third-party services we integrate with.</p>
          </section>

          <section class="legal-section">
            <h2>8. Intellectual Property</h2>
            <p>The App, including its design, code, branding, and content (excluding your personal data), is owned by OPS and protected by applicable intellectual property laws. Nothing in these Terms grants you any right, title, or interest in our intellectual property other than the limited licence to use the App as described herein.</p>
          </section>

          <section class="legal-section">
            <h2>9. Disclaimer of Warranties</h2>
            <p>The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or completely secure. We disclaim all implied warranties of merchantability, fitness for a particular purpose, and non-infringement to the maximum extent permitted by applicable law.</p>
          </section>

          <section class="legal-section">
            <h2>10. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, OPS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App, including but not limited to loss of data, financial loss, or business interruption — even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising from these Terms or your use of the App shall not exceed the amount you paid us in the twelve months preceding the claim (which in most cases will be zero, as the App is free).</p>
          </section>

          <section class="legal-section">
            <h2>11. Data Loss</h2>
            <p>While we make reasonable efforts to ensure cloud sync reliability, we strongly recommend maintaining your own backups of important financial data. We are not liable for any loss of data resulting from technical failures, account deletion, or sync errors.</p>
          </section>

          <section class="legal-section">
            <h2>12. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the App after any such changes constitutes your acceptance of the new Terms. We encourage you to review this page periodically.</p>
          </section>

          <section class="legal-section">
            <h2>13. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to the App at any time, for any reason, without notice, including if we believe you have violated these Terms. Upon termination, your right to use the App ceases immediately. Provisions that by their nature should survive termination — including ownership, warranty disclaimers, and limitations of liability — shall survive.</p>
          </section>

          <section class="legal-section">
            <h2>14. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>
          </section>

          <section class="legal-section">
            <h2>15. Contact</h2>
            <p>If you have any questions about these Terms, please reach out to the OPS team through the contact information provided within the App or on our main website.</p>
          </section>

        </div>

        <div class="legal-nav-links">
          <a href="/privacy" class="legal-nav-link">Read our Privacy Policy →</a>
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
.legal-header { margin-bottom: 56px; }
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
  .legal-nav-links { flex-direction: column; gap: 16px; }
  .legal-footer-inner { flex-direction: column; gap: 12px; text-align: center; }
}
</style>