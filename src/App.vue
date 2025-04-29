<script setup>
import { ref, computed, provide, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const showMeasureGuide = ref(false)
const showHeroHeadings = inject('showHeroHeadings', ref(true))

// Provide both refs to child components
provide('showMeasureGuide', showMeasureGuide)

const services = [
  {
    title: 'Weekly Lawn Mowing',
    description: 'Professional mowing service with clean edges and perfect stripes. Our team uses eco-friendly equipment and follows Denver\'s water conservation guidelines.',
    image: 'https://picsum.photos/500/300?random=1'
  },
  {
    title: 'Spring Cleanup & Aeration',
    description: 'Comprehensive spring cleanup including thatch removal, aeration, and overseeding to prepare your lawn for Denver\'s growing season.',
    image: 'https://picsum.photos/500/300?random=2'
  },
  {
    title: 'Fall Cleanup & Winter Prep',
    description: 'Complete fall cleanup including leaf removal, fertilization, and winter preparation to ensure your lawn survives Denver\'s harsh winters.',
    image: 'https://picsum.photos/500/300?random=3'
  }
]

const steps = [
  {
    title: 'Enter Your Lawn Size',
    description: 'Get an instant quote based on your lawn size using our transparent pricing model.'
  },
  {
    title: 'Get Your Quote',
    description: 'See your exact bi-weekly mowing price immediately, no hidden fees.'
  },
  {
    title: 'Book Your Service',
    description: 'Enter your email to receive your quote and schedule your service.'
  }
]

const pricingTiers = [
  { maxSize: 3000, price: 40 },
  { maxSize: 4000, price: 50 },
  { maxSize: 5000, price: 60 },
  { maxSize: 6000, price: 70 },
  { maxSize: 7000, price: 80 },
  { maxSize: 8000, price: 90 },
  { maxSize: 10000, price: 100 },
  { maxSize: 12000, price: 120 },
  { maxSize: 14000, price: 140 },
  { maxSize: 16000, price: 160 },
  { maxSize: 18000, price: 180 }
]

const getPriceForSize = (size) => {
  const tier = pricingTiers.find(tier => size <= tier.maxSize)
  return tier ? tier.price : null
}

const testimonials = [
  {
    quote: "EcoLawns transformed my yard into the envy of the neighborhood! Their knowledge of Denver's climate and water restrictions is impressive.",
    author: "Mark R. in Cherry Creek"
  },
  {
    quote: "Finally, a lawn service that understands Colorado's unique challenges. My grass has never looked better, even during water restrictions.",
    author: "Sarah M. in Washington Park"
  },
  {
    quote: "Their eco-friendly approach and attention to detail is outstanding. My lawn is thriving, and I'm using less water than ever before.",
    author: "John D. in Highland"
  },
  {
    quote: "The team is professional, reliable, and truly cares about sustainable lawn care. Worth every penny!",
    author: "Emily T. in LoHi"
  },
  {
    quote: "Best investment for my home. They've helped me maintain a beautiful lawn while following Denver's water conservation guidelines.",
    author: "Michael P. in Congress Park"
  }
]

function goToQuoteForm() {
  if (route.path === '/') {
    window.dispatchEvent(new Event('emphasize-quote-form'))
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        window.dispatchEvent(new Event('emphasize-quote-form'))
      }, 350)
    })
  }
}
</script>

<template>
  <div class="app-container">
    <!-- Top Navigation -->
    <nav class="top-nav">
      <div class="nav-content">
        <transition name="slide-fade">
          <router-link v-if="showHeroHeadings" to="/" class="logo">EcoLawns Denver</router-link>
        </transition>
        <div class="nav-links">
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
          <router-link to="/services" class="nav-link" active-class="active">Services</router-link>
          <Button label="Get Free Quote" severity="success" rounded raised @click="goToQuoteForm" />
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Measurement Guide Modal -->
    <Dialog 
      v-model:visible="showMeasureGuide" 
      modal 
      :closable="false"
      :style="{ width: '95%', maxWidth: '800px' }"
      class="measure-guide-dialog"
    >
      <template #header>
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <span style="font-size: 1.25rem; font-weight: 600; color: #1B5E20;">How to Measure Your Lawn</span>
          <Button label="Close" severity="success" @click="showMeasureGuide = false" style="margin-left: 1.5rem; min-width: 90px;" />
        </div>
      </template>
      <div class="measure-guide">
        <div class="guide-content">
          <ol class="measure-steps">
            <li>Go to Google Maps and find your property</li>
            <li>Right-click and select "Measure distance"</li>
            <li>Click around your lawn's perimeter</li>
            <li>Google Maps will show the total square footage</li>
          </ol>
          <div class="guide-image">
            <img src="/images/google-maps-measure-info-graphic.png" alt="Google Maps Measurement Guide" />
          </div>
          <div class="guide-tips">
            <h4>Tips for Accurate Measurement:</h4>
            <ul>
              <li>Exclude your house, driveway, and other non-grass areas</li>
              <li>Measure each section separately for complex layouts</li>
              <li>Round to the nearest 100 square feet</li>
              <li>Include areas with trees - they're part of the mowing and trimming service</li>
            </ul>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.top-nav {
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  color: #2E7D32;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(46, 125, 50, 0.1);
}

.nav-link.active {
  color: #1B5E20;
  font-weight: bold;
  background-color: rgba(46, 125, 50, 0.1);
}

.logo {
  text-decoration: none;
  color: #2E7D32;
  font-weight: bold;
  font-size: 1.5rem;
}

.main-content {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.measure-help {
  background: #E8F5E9;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #C8E6C9;
}

.measure-tip {
  font-size: 0.95rem;
  color: #2E7D32;
  margin-top: 0.5rem;
  font-weight: 500;
}

.link-button {
  background: none;
  border: none;
  color: #2E7D32;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
}

.link-button:hover {
  color: #1B5E20;
}

.measure-guide-dialog {
  .p-dialog-header {
    padding: 1rem 1.5rem;
    background: #f8f9fa;
  }

  .p-dialog-title {
    color: #1B5E20;
    font-size: 1.25rem;
  }

  :deep(.p-dialog-header-icon) {
    width: 2rem;
    height: 2rem;
    margin-right: 0;
    color: #2E7D32;
    
    &:hover {
      background: rgba(46, 125, 50, 0.1);
    }

    &:focus {
      box-shadow: none;
    }
  }

  :deep(.pi-times) {
    color: #2E7D32;
    font-size: 1rem;

    &:hover {
      color: #1B5E20;
    }
  }

  :deep(.p-dialog-header-close) {
    background: transparent !important;
    border: none !important;
    color: #2E7D32 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :deep(.p-dialog-header-close .pi),
  :deep(.p-dialog-header-close .pi-times) {
    color: #2E7D32 !important;
    font-size: 1.7rem !important;
    line-height: 1 !important;
    display: inline-block !important;
    width: auto !important;
    height: auto !important;
  }
  :deep(.p-dialog-header-close:hover .pi),
  :deep(.p-dialog-header-close:hover .pi-times) {
    color: #1B5E20 !important;
  }
}

.measure-guide {
  padding: 0;
}

.guide-content {
  padding: 0 1.5rem 1.5rem;
}

.guide-title {
  color: #1B5E20;
  font-size: 1.5rem;
  margin: 0 0 1.5rem;
  font-weight: 600;
}

.measure-steps {
  margin: 0 0 2rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.5;
    color: #333;
  }
}

.guide-image {
  margin: 1.5rem 0;
  text-align: center;
  
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
}

.guide-tips {
  background: #f1f8f1;
  padding: 1.25rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  border: 1px solid #e0e0e0;

  h4 {
    color: #1B5E20;
    margin: 0 0 0.75rem;
    font-size: 1.1rem;
  }

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: #444;
    line-height: 1.4;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.p-button {
  background-color: #2E7D32 !important;
  border-color: #2E7D32 !important;
  color: white !important;

  &:hover {
    background-color: #1B5E20 !important;
    border-color: #1B5E20 !important;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2) !important;
  }
}

.p-button.p-button-text {
  background-color: transparent !important;
  border-color: transparent !important;
  color: #2E7D32 !important;

  &:hover {
    background-color: rgba(46, 125, 50, 0.1) !important;
    color: #1B5E20 !important;
  }
}

.p-dialog-header-close {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Clean up quote modal content */
.quote-form {
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.booking-note {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #374151;
}

.form-field {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-weight: 500;
  color: #1B5E20;
}

.p-inputtext {
  padding: 0.75rem;
  font-size: 1.1rem;
  border-radius: 6px;
  border: 1px solid #C8E6C9;
}

.p-inputtext:focus {
  border-color: #2E7D32;
  box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.15);
}

.error-text {
  color: #d32f2f;
  font-size: 0.95rem;
  margin-top: 0.25rem;
}

.success-text {
  color: #2E7D32;
  font-size: 1.05rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

.quote-summary {
  text-align: center;
  margin-bottom: 1.25rem;
}

.quote-summary h3 {
  color: #1B5E20;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.quote-summary .price {
  font-size: 2.5rem;
  color: #2E7D32;
  margin: 0.5rem 0;
}

.quote-summary .price-note {
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>
