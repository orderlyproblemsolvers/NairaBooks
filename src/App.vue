<script setup>
// --- State & Configuration ---
const appVersion = '1.0 Beta'
// Pointing directly to the APK file in the public folder
const apkDownloadLink = '/apk/NairaBooks-V1.0.apk'

// --- Asset Paths ---
// Assumes these exist in your /public/img/ folder
const logoPath = '/img/logo.png'
const mockupPath = '/img/mockup.png'
</script>

<template>
  <!-- Main container forced to light mode with blue-gray background -->
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
    
    <!-- Navigation Bar -->
    <nav class="w-full py-6 px-6 md:px-0 z-10">
      <div class="container mx-auto max-w-6xl flex justify-between items-center">
        <!-- Logo & Brand Name -->
        <div class="flex items-center gap-3">
          <img :src="logoPath" alt="Nairabooks Logo" class="h-24 w-auto" />
          <span class="font-bold text-xl text-blue-600 tracking-tight">Nairabooks</span>
          <span class="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Beta
          </span>
        </div>
      </div>
    </nav>

    <!-- Main Hero Section -->
    <main class="flex-grow flex items-center">
      <div class="container mx-auto flex flex-col-reverse md:flex-row items-center max-w-6xl px-6 py-12 md:py-24 gap-12 md:gap-6">
        
        <!-- Left Column: Text Content -->
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <!-- Desktop Logo (Optional, kept for consistency with previous design) -->
          <img :src="logoPath" alt="Nairabooks Logo" class="hidden md:block mb-8 h-32 w-auto" />

          <!-- Headline with Blue Gradient -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-6 text-slate-900">
            The simple way to <br class="hidden lg:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              manage your money.
            </span>
          </h1>

          <!-- Intro Text -->
          <p class="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Take control of your finances with Nairabooks, the offline-first
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
            <span class="font-semibold">Public Beta {{ appVersion }}</span> &nbsp;&mdash;&nbsp; Try it now!
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

    <!-- Footer -->
    <footer class="py-8 text-center text-slate-500 text-sm">
      <div class="container mx-auto px-6">
        <p>Developed by <span class="font-semibold text-slate-700">OPS</span></p>
        <p class="mt-2">© {{ new Date().getFullYear() }} Nairabooks. All rights reserved.</p>
      </div>
    </footer>

  </div>
</template>

<style>
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Inter', sans-serif;
 /* Ensure body matches main container */
}
</style>