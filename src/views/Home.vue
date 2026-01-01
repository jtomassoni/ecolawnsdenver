<template>
  <div class="home-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-headings">
        <h1>Spring is Coming - Book Your Lawn Care Now!</h1>
        <h2>Professional Lawn Care in Denver from $40/visit</h2>
        <p class="hero-subtext">Get your weekends back with reliable, eco-friendly lawn care. <strong>Snow removal available now</strong> while you wait for lawn season!</p>
        <div class="hero-cta-buttons">
          <button class="hero-cta-btn primary" @click="scrollToQuote">Get Your Free Quote</button>
        </div>
      </div>
    </div>

    <!-- Quick Trust Signals -->
    <div class="content-section trust-signals">
      <div class="content-container">
        <div class="trust-badges">
          <div class="trust-badge">
            <FontAwesomeIcon icon="shield-alt" class="badge-icon" />
            <span>Licensed & Insured</span>
          </div>
          <div class="trust-badge">
            <FontAwesomeIcon icon="leaf" class="badge-icon" />
            <span>Eco-Friendly</span>
          </div>
          <div class="trust-badge">
            <FontAwesomeIcon icon="dollar-sign" class="badge-icon" />
            <span>Transparent Pricing</span>
          </div>
          <div class="trust-badge">
            <FontAwesomeIcon icon="map-marker-alt" class="badge-icon" />
            <span>Local Denver Experts</span>
          </div>
        </div>
        <p class="trust-note">Professional lawn care starting at $40/visit. <router-link to="/about" class="learn-more-link">Learn more about us</router-link> or <router-link to="/services" class="learn-more-link">view our services</router-link>.</p>
        <p class="snow-note">Need snow removal? <button class="link-button" @click="showSnowRemovalModal = true">Request ad-hoc snow removal</button></p>
      </div>
    </div>

    <!-- Lawn Care Quote Form Section - Primary CTA -->
    <div ref="quoteFormSection" class="quote-form-section" id="quote-form">
      <div class="form-section-header">
        <h2>Get Your Instant Lawn Care Quote</h2>
        <p>Enter your lawn size below to see your pricing. Book now for spring 2024 season!</p>
      </div>
      <div class="hero-cta">
      <div class="form-title">Get Your Instant Lawn Care Estimate</div>
      <div class="breadcrumbs">
        <div 
          :class="['breadcrumb-item', { active: step === 1, completed: step > 1 }]"
          @click="step > 1 ? goToStep1() : null"
        >
          <span class="breadcrumb-number">1</span>
          <span class="breadcrumb-label">Lawn Size</span>
        </div>
        <div class="breadcrumb-separator">→</div>
        <div 
          :class="['breadcrumb-item', { active: step === 2, completed: step > 2 }]"
          @click="step > 2 ? goToStep2() : null"
        >
          <span class="breadcrumb-number">2</span>
          <span class="breadcrumb-label">Select Package</span>
        </div>
        <div class="breadcrumb-separator">→</div>
        <div 
          :class="['breadcrumb-item', { active: step === 3 }]"
        >
          <span class="breadcrumb-number">3</span>
          <span class="breadcrumb-label">Complete Booking</span>
        </div>
      </div>
      <div v-if="step === 1" class="step-content">
            <form @submit.prevent="goToStep2">
          <div class="form-field">
            <label for="lawn-size-input">Lawn Size (square feet)</label>
            <div class="input-wrapper">
              <input 
                id="lawn-size-input"
                v-model="lawnSize" 
                type="number" 
                placeholder="e.g., 5000" 
                class="calculator-input"
                aria-label="Enter your lawn size in square feet"
                aria-required="true"
                min="0"
              />
              <p class="measure-tip">Most Denver lawns are 3,000 - 8,000 sq ft</p>
            </div>
            <div class="measure-help">
              <p>Not sure about your lawn size? <button type="button" class="link-button" @click="showMeasureGuide = true">Use our measurement guide</button></p>
            </div>
              <button 
                class="calculator-button"
                type="submit"
                :disabled="!lawnSize"
                aria-label="Continue to pricing options"
              >
                Next
              </button>
          </div>
        </form>
      </div>
      <div v-else-if="step === 2" class="step-content">
        <form @submit.prevent="goToStep3">
          <div class="form-field">
            <h3>Your Lawn Size: {{ lawnSize }} sq ft</h3>
            <div class="option-details">
              <transition name="fade" mode="out-in">
                <div :key="selectedOption" class="price-content">
                  <template v-if="selectedOption === 'seasonal'">
                    <div class="savings-badge">Save 25%</div>
                    <p class="price">2 payments of ${{ seasonalPayment }}</p>
                    <p class="price-note">
                      One payment at the start of the season, one at mid-season.<br>
                      Covers all {{ avgCutsPerSeason }} visits (April–October).
                    </p>
                  </template>
                  <template v-else>
                    <p class="price">${{ price }}/visit</p>
                    <p class="price-note">
                      Pay only for each visit.<br>
                      About {{ avgCutsPerSeason }} visits per season (April–October).
                    </p>
                    <div class="terms-blurb">
                      <div class="terms-main">
                        Minimum bi-weekly mowing required during growing season.<br>
                        Skipped services may incur additional charges.
                      </div>
                      <div class="terms-savings">
                        <span class="seasonal-savings-badge">
                          If you sign up for seasonal payments, it's like paying ${{ (seasonalPrice/avgCutsPerSeason).toFixed(2) }} per cut instead.
                        </span>
                      </div>
                    </div>
                  </template>
                </div>
              </transition>
            </div>
            <div class="service-options">
              <button 
                type="button"
                :class="['option-btn', { selected: selectedOption === 'seasonal' }]"
                @click="handleSeasonalSelect"
              >
                Select Seasonal Package
              </button>
              <div class="divider">or</div>
              <button 
                type="button"
                :class="['option-btn secondary', { selected: selectedOption === 'biweekly' }]"
                @click="handleBiweeklySelect"
              >
                Pay per visit (${{ price }}/visit)
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-else-if="step === 3" class="step-content">
        <div class="booking-layout">
          <div class="summary-card">
            <h4>Order Summary</h4>
            <div class="summary-row">
              <span>Lawn Size:</span>
              <span>{{ lawnSize }} sq ft</span>
            </div>
            <div class="summary-row">
              <span>Package:</span>
              <span>{{ selectedOption === 'seasonal' ? 'Seasonal (2 payments)' : 'Bi-Weekly' }}</span>
            </div>
            <div class="summary-row">
              <span>Price:</span>
              <span v-if="selectedOption === 'seasonal'">2 × ${{ seasonalPayment }}</span>
              <span v-else>${{ price }}/visit</span>
            </div>
          </div>
          <div class="booking-form">
            <h4>Complete Your Booking</h4>
            <form @submit.prevent="submitBooking">
              <div class="form-row">
                <label for="booking-name">Name <span class="required-asterisk" aria-label="required">*</span></label>
                <input 
                  id="booking-name"
                  v-model="bookingForm.name" 
                  type="text" 
                  required 
                  aria-label="Your full name"
                  aria-required="true"
                />
              </div>
              <div class="form-row">
                <label for="booking-email">Email <span class="required-asterisk" aria-label="required">*</span></label>
                <input 
                  id="booking-email"
                  v-model="bookingForm.email" 
                  type="email" 
                  required 
                  aria-label="Your email address"
                  aria-required="true"
                />
              </div>
              <div class="form-row">
                <label for="booking-phone">Phone Number <span class="required-asterisk" aria-label="required">*</span></label>
                <input 
                  id="booking-phone"
                  v-model="bookingForm.phone" 
                  type="tel" 
                  required 
                  placeholder="(303) 555-1234"
                  title="Please enter a valid 10-digit phone number"
                  aria-label="Your phone number"
                  aria-required="true"
                />
                <small v-if="bookingForm.phone && !isValidPhone" class="field-hint">
                  Phone number must be at least 10 digits
                </small>
              </div>
              <div class="form-row">
                <label for="booking-address">Property Address <span class="required-asterisk" aria-label="required">*</span></label>
                <input 
                  id="booking-address"
                  v-model="bookingForm.address" 
                  type="text" 
                  required 
                  placeholder="e.g., 123 Main St, Denver, CO 80202"
                  title="Please enter your property address"
                  aria-label="Your property address"
                  aria-required="true"
                />
              </div>
              <button 
                class="submit-btn" 
                type="submit" 
                :disabled="!isFormValid"
                aria-label="Submit your booking request"
                :aria-busy="isSubmitting"
              >
                {{ isSubmitting ? 'Submitting...' : 'Book My Service' }}
              </button>
            </form>
            <div v-if="submitSuccess" class="success-text" role="alert" aria-live="polite">
              Request sent! We'll contact you soon.
            </div>
            <Dialog v-model:visible="showNextStepsModal" modal :closable="false" :style="{ width: '95%', maxWidth: '480px', borderRadius: '18px', padding: '0' }" class="next-steps-modal">
              <template #header>
                <div class="next-steps-header">
                  What will happen next
                </div>
              </template>
              <div class="what-next-confirm next-steps-content">
                <div class="gratitude-message">
                  <strong>Thank you for trusting EcoLawns Denver with your lawn care!</strong>
                </div>
                <div style="margin-top: 0.7rem;">
                  After you book, our team will review your info and reach out to confirm your service details and schedule your first visit. You'll get a welcome email and a reminder before each mowing. We handle everything—just sit back and enjoy your weekends!
                </div>
                <div class="auto-close-message">
                  <em>This window will close automatically in {{ autoCloseCountdown }} seconds.</em>
                </div>
              </div>
              <template #footer>
                <div class="next-steps-footer">
                  <Button label="Close" severity="success" @click="showNextStepsModal = false" class="next-steps-close-btn" />
                </div>
              </template>
            </Dialog>
            <div v-if="submitError" class="error-text" role="alert" aria-live="assertive">{{ submitError }}</div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- Snow Removal Modal -->
    <Dialog v-model:visible="showSnowRemovalModal" modal :style="modalStyle" class="service-modal">
      <template #header>
        <h3>Request Ad-Hoc Snow Removal</h3>
      </template>
      <div class="modal-form">
        <p class="modal-intro">Need snow removal right now? Request a one-time service. We'll contact you to confirm details and pricing.</p>
        <form @submit.prevent="submitSnowRemoval">
          <div class="form-row">
            <label>Name <span class="required-asterisk">*</span></label>
            <input v-model="snowForm.name" type="text" required />
          </div>
          <div class="form-row">
            <label>Email <span class="required-asterisk">*</span></label>
            <input v-model="snowForm.email" type="email" required />
          </div>
          <div class="form-row">
            <label>Phone <span class="required-asterisk">*</span></label>
            <input v-model="snowForm.phone" type="tel" required placeholder="(303) 555-1234" />
          </div>
          <div class="form-row">
            <label>Address <span class="required-asterisk">*</span></label>
            <input v-model="snowForm.address" type="text" required placeholder="123 Main St, Denver, CO 80202" />
          </div>
          <div class="form-row">
            <label>Driveway Length (feet) <span class="required-asterisk">*</span></label>
            <input v-model="snowForm.drivewayLength" type="number" required placeholder="e.g., 30" />
            <small class="field-hint">We'll assume standard width and walkway</small>
          </div>
          <div class="form-row">
            <label>Additional Notes (optional)</label>
            <textarea v-model="snowForm.notes" rows="3" placeholder="Any special instructions..."></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmittingSnow">
            {{ isSubmittingSnow ? 'Submitting...' : 'Request Snow Removal' }}
          </button>
        </form>
        <div v-if="submitSuccessSnow" class="success-text">Request sent! We'll contact you soon.</div>
        <div v-if="submitErrorSnow" class="error-text">{{ submitErrorSnow }}</div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, inject, provide, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { API_ENDPOINTS } from '../config'
import Dialog from 'primevue/dialog'
import { useRouter } from 'vue-router'

const router = useRouter()

const lawnSize = ref('')
const price = ref(null)
const showMeasureGuide = inject('showMeasureGuide')
const emphasizeForm = ref(false)
const quoteFormSection = ref(null)
const selectedOption = ref('seasonal')
const avgCutsPerSeason = 14
const showBookingForm = ref(false)
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')
const bookingForm = ref({ name: '', email: '', phone: '', address: '' })
const step = ref(1)
const showNextStepsModal = ref(false)
const autoCloseCountdown = ref(10)
let autoCloseTimer = null

// Snow removal modal (secondary/ad-hoc only)
const showSnowRemovalModal = ref(false)
const snowForm = ref({ name: '', email: '', phone: '', address: '', drivewayLength: '', notes: '' })
const isSubmittingSnow = ref(false)
const submitSuccessSnow = ref(false)
const submitErrorSnow = ref('')

const modalStyle = computed(() => ({ width: '95%', maxWidth: '600px' }))

const scrollToQuote = () => {
  if (quoteFormSection.value) {
    quoteFormSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => {
      window.dispatchEvent(new Event('emphasize-quote-form'))
    }, 500)
  }
}

// Add validation computed properties
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(bookingForm.value.email);
});

const isValidPhone = computed(() => {
  if (!bookingForm.value.phone) return false;
  // Strip all non-digit characters for validation
  const digitsOnly = bookingForm.value.phone.replace(/\D/g, '');
  return digitsOnly.length >= 10;
});

const isFormValid = computed(() => {
  return bookingForm.value.name.trim() !== '' &&
         isValidEmail.value &&
         isValidPhone.value &&
         bookingForm.value.address.trim() !== '' &&
         !isSubmitting.value;
});

const goToStep1 = () => {
  step.value = 1
}

const goToStep2 = () => {
  if (lawnSize.value) {
    price.value = getPriceForSize(parseInt(lawnSize.value))
    if (!selectedOption.value) {
      selectedOption.value = 'seasonal'
    }
    step.value = 2
  }
}

const goToStep3 = () => {
  step.value = 3
}

const handleSeasonalSelect = () => {
  selectedOption.value = 'seasonal'
  goToStep3()
}

const handleBiweeklySelect = () => {
  selectedOption.value = 'biweekly'
  goToStep3()
}

const getPriceForSize = (size) => {
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
    { maxSize: 18000, price: 180 },
    { maxSize: 20000, price: 200 },
    { maxSize: 25000, price: 250 },
    { maxSize: 30000, price: 300 },
    { maxSize: 40000, price: 400 },
    { maxSize: 50000, price: 500 }
  ]
  const tier = pricingTiers.find(tier => size <= tier.maxSize)
  if (tier) {
    return tier.price
  }
  if (size > 50000) {
    return Math.max(500, Math.ceil(size * 0.01))
  }
  return null
}

const seasonalPrice = computed(() => {
  if (!price.value) return 0
  const total = price.value * avgCutsPerSeason
  return Math.round(total * 0.75)
})

const seasonalPayment = computed(() => {
  return Math.ceil(seasonalPrice.value / 2)
})

const submitSnowRemoval = async (event) => {
  event.preventDefault()
  
  submitErrorSnow.value = ''
  submitSuccessSnow.value = false
  
  if (!snowForm.value.name?.trim() || !isValidEmail(snowForm.value.email) || 
      !isValidPhone(snowForm.value.phone) || !snowForm.value.address?.trim() || 
      !snowForm.value.drivewayLength?.trim()) {
    submitErrorSnow.value = 'Please fill in all required fields correctly.'
    return
  }
  
  try {
    isSubmittingSnow.value = true
    
    const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: snowForm.value.name.trim(),
        email: snowForm.value.email.trim(),
        phone: snowForm.value.phone.trim(),
        address: snowForm.value.address.trim(),
        drivewayLength: snowForm.value.drivewayLength.trim(),
        notes: snowForm.value.notes.trim(),
        type: 'Snow Removal Request (Ad-hoc)'
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to send request. Please try again.')
    }
    
    const data = await response.json()
    
    if (data.success) {
      submitSuccessSnow.value = true
      submitErrorSnow.value = ''
      snowForm.value = { name: '', email: '', phone: '', address: '', drivewayLength: '', notes: '' }
      setTimeout(() => {
        showSnowRemovalModal.value = false
        submitSuccessSnow.value = false
      }, 2000)
    } else {
      submitErrorSnow.value = data.message || 'Failed to send request. Please try again.'
    }
  } catch (e) {
    console.error('Error submitting snow removal request:', e)
    submitErrorSnow.value = 'An error occurred. Please try again or contact us directly.'
  } finally {
    isSubmittingSnow.value = false
  }
}

const submitBooking = async (event) => {
  event.preventDefault();
  
  // Clear previous errors
  submitError.value = '';
  submitSuccess.value = false;
  
  // Validate all required fields
  if (!bookingForm.value.name?.trim()) {
    submitError.value = 'Please enter your name.';
    return;
  }

  if (!bookingForm.value.email?.trim()) {
    submitError.value = 'Please enter your email address.';
    return;
  }

  if (!isValidEmail.value) {
    submitError.value = 'Please enter a valid email address.';
    return;
  }

  if (!bookingForm.value.phone?.trim()) {
    submitError.value = 'Please enter your phone number.';
    return;
  }

  if (!isValidPhone.value) {
    const digitsOnly = bookingForm.value.phone.replace(/\D/g, '');
    submitError.value = `Please enter a valid phone number (at least 10 digits). You entered ${digitsOnly.length} digit${digitsOnly.length !== 1 ? 's' : ''}.`;
    return;
  }

  if (!bookingForm.value.address?.trim()) {
    submitError.value = 'Please enter your property address.';
    return;
  }

  try {
    isSubmitting.value = true
    
    const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: bookingForm.value.name.trim(),
        email: bookingForm.value.email.trim(),
        phone: bookingForm.value.phone.trim(),
        address: bookingForm.value.address.trim(),
        lawnSize: lawnSize.value,
        subscriptionOption: selectedOption.value,
        type: 'Lawn Service Booking'
      })
    })

    if (!response.ok) {
      let errorMessage = 'Failed to send request. Please try again.';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (parseError) {
        // If response is not JSON, use status text
        errorMessage = `Server error (${response.status}). Please try again later.`;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json()

    if (data.success) {
      submitSuccess.value = true
      submitError.value = ''
      bookingForm.value = { name: '', email: '', phone: '', address: '' }
      showNextStepsModal.value = true
    } else {
      submitError.value = data.message || 'Failed to send request. Please try again.'
    }
  } catch (e) {
    console.error('Error submitting booking:', e)
    
    // Provide user-friendly error messages
    if (e.name === 'TypeError' && e.message.includes('fetch')) {
      submitError.value = 'Network error. Please check your internet connection and try again.';
    } else if (e.message) {
      submitError.value = e.message;
    } else {
      submitError.value = 'An unexpected error occurred. Please try again or contact us directly.';
    }
  } finally {
    isSubmitting.value = false
  }
}

function emphasizeQuoteForm() {
  emphasizeForm.value = true
  setTimeout(() => {
    emphasizeForm.value = false
  }, 1200)
}

function onEmphasizeEvent() {
  emphasizeQuoteForm()
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    if (step.value === 1 && lawnSize.value) {
      goToStep2()
    } else if (step.value === 2) {
      goToStep3()
    }
  }
}

onMounted(() => {
  window.addEventListener('emphasize-quote-form', onEmphasizeEvent)
  window.addEventListener('keypress', handleKeyPress)
})

onBeforeUnmount(() => {
  window.removeEventListener('emphasize-quote-form', onEmphasizeEvent)
  window.removeEventListener('keypress', handleKeyPress)
})

watch(showNextStepsModal, (visible) => {
  if (visible) {
    autoCloseCountdown.value = 10
    autoCloseTimer = setInterval(() => {
      autoCloseCountdown.value--
      if (autoCloseCountdown.value <= 0) {
        showNextStepsModal.value = false
        clearInterval(autoCloseTimer)
      }
    }, 1000)
  } else {
    clearInterval(autoCloseTimer)
  }
})
</script>

<style scoped>
.home-page {
  width: 100%;
  background: #f5f5f5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  width: 100%;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
  padding: 2rem 1rem;
}

.hero-headings {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
.hero-headings h1 {
  color: #fff;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 0 2px 12px rgba(0,0,0,0.5);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.hero-headings h2 {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  margin-bottom: 1rem;
}
.hero-subtext {
  color: #fff;
  font-size: 1.1rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  margin-top: 1rem;
  line-height: 1.5;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.hero-cta-btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.hero-cta-btn.primary {
  background: #2E7D32;
  color: white;
}

.hero-cta-btn.primary:hover {
  background: #1B5E20;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.4);
}

.hero-cta-btn.secondary {
  background: rgba(255,255,255,0.95);
  color: #2E7D32;
  border: 2px solid white;
}

.hero-cta-btn.secondary:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.4);
}

/* Trust Signals Section */
.trust-signals {
  background: white;
  padding: 2rem 1rem;
}

.trust-badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2E7D32;
  font-weight: 600;
  font-size: 1rem;
}

.badge-icon {
  font-size: 1.5rem;
  color: #2E7D32;
}

.trust-note {
  text-align: center;
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

.learn-more-link {
  color: #2E7D32;
  text-decoration: underline;
  font-weight: 500;
}

.learn-more-link:hover {
  color: #1B5E20;
}

.snow-note {
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

/* Modal Styles */
.service-modal :deep(.p-dialog-header) {
  background: #f9f9f9;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.service-modal :deep(.p-dialog-title) {
  color: #1B5E20;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.service-modal :deep(.p-dialog-content) {
  padding: 0;
}

.modal-form {
  padding: 1.5rem;
}

.modal-intro {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.modal-form .form-row {
  margin-bottom: 1rem;
}

.modal-form .form-row label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1B5E20;
  margin-bottom: 0.5rem;
}

.modal-form .form-row input,
.modal-form .form-row textarea {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1.5px solid #C8E6C9;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-family: inherit;
}

.modal-form .form-row input:focus,
.modal-form .form-row textarea:focus {
  outline: none;
  border-color: #2E7D32;
  box-shadow: 0 0 0 2px rgba(46,125,50,0.15);
}

.modal-form .field-hint {
  display: block;
  color: #888;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-style: italic;
}

.modal-form .submit-btn {
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  background: #2E7D32;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

.modal-form .submit-btn:hover:not(:disabled) {
  background: #1B5E20;
  transform: translateY(-1px);
}

.modal-form .submit-btn:disabled {
  background: #A5D6A7;
  cursor: not-allowed;
}

.modal-form .success-text {
  color: #2E7D32;
  font-size: 0.95rem;
  margin-top: 1rem;
  padding: 0.75rem;
  background: #E8F5E9;
  border-radius: 8px;
  text-align: center;
}

.modal-form .error-text {
  color: #d32f2f;
  font-size: 0.95rem;
  margin-top: 1rem;
  padding: 0.75rem;
  background: #ffebee;
  border-radius: 8px;
  text-align: center;
}

.form-row textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1.5px solid #C8E6C9;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-family: inherit;
  resize: vertical;
}

.form-row textarea:focus {
  outline: none;
  border-color: #2E7D32;
  box-shadow: 0 0 0 2px rgba(46,125,50,0.15);
}

.quote-form-section {
  width: 100%;
  background: #f5f5f5;
  padding: 3rem 1rem;
}

.form-section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.form-section-header h2 {
  font-size: 2rem;
  color: #1B5E20;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.form-section-header p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.hero-cta {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 2rem 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  min-height: auto;
}

.form-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1B5E20;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0.01em;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: default;
  font-size: 0.9rem;
}

.breadcrumb-item.completed {
  cursor: pointer;
  color: #2E7D32;
}

.breadcrumb-item.completed:hover {
  background-color: rgba(46, 125, 50, 0.1);
}

.breadcrumb-item.active {
  background-color: #E8F5E9;
  color: #1B5E20;
  font-weight: 600;
}

.breadcrumb-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #C8E6C9;
  color: #2E7D32;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.breadcrumb-item.active .breadcrumb-number {
  background-color: #2E7D32;
  color: white;
}

.breadcrumb-item.completed .breadcrumb-number {
  background-color: #2E7D32;
  color: white;
}

.breadcrumb-label {
  white-space: nowrap;
}

.breadcrumb-separator {
  color: #C8E6C9;
  font-size: 1.2rem;
  font-weight: 300;
}

@media (max-width: 600px) {
  .breadcrumbs {
    gap: 0.25rem;
  }
  
  .breadcrumb-item {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
    gap: 0.3rem;
  }
  
  .breadcrumb-number {
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
  }
  
  .breadcrumb-separator {
    font-size: 1rem;
  }
  
  .breadcrumb-label {
    display: none;
  }
}

.step-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-field {
  margin-bottom: 0;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 0;
}

.form-field label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1B5E20;
  margin-bottom: 0.75rem;
  display: block;
  text-align: center;
}

.input-wrapper {
  position: relative;
  margin-bottom: 1rem;
}

.calculator-input {
  padding: 1rem;
  font-size: 1.2rem;
  width: 100%;
  border: 2px solid #C8E6C9;
  border-radius: 12px;
  transition: all 0.2s ease;
  text-align: center;
}

/* Remove number input spinners */
.calculator-input::-webkit-outer-spin-button,
.calculator-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

.calculator-input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.measure-tip {
  font-size: 0.9rem;
  color: #2E7D32;
  margin-top: 0.5rem;
  font-weight: 500;
  text-align: center;
}

.measure-help {
  background: #E8F5E9;
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 0;
  border: 1px solid #C8E6C9;
}


.property-summary {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
}

.property-summary p {
  margin: 0.5rem 0;
  color: #555;
  font-size: 0.95rem;
}

.property-note {
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
}

.snowfall-pricing {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
}

.pricing-tier {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.tier-label {
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
}

.tier-price {
  font-size: 1.1rem;
  color: #1B5E20;
  font-weight: 600;
}

.link-button {
  background: none;
  border: none;
  color: #2E7D32;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  font-size: 1rem;
}

.calculator-button {
  padding: 0.9rem;
  font-size: 1.05rem;
  width: 100%;
  background: #2E7D32;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
}

.calculator-button:hover {
  background: #1B5E20;
  transform: translateY(-1px);
}

.calculator-button:disabled {
  background: #A5D6A7;
  cursor: not-allowed;
  transform: none;
}

.option-details {
  background: #E8F5E9;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  border: 2px solid #2E7D32;
  text-align: center;
  transition: all 0.3s ease;
  height: auto;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price-content {
  width: 100%;
}

.price {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1B5E20;
  margin-bottom: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price-note {
  font-size: 0.95rem;
  color: #2E7D32;
  line-height: 1.4;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.terms-blurb {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.7);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-top: 0.4rem;
  padding: 0.7rem 1rem;
  font-size: 0.85rem;
  text-align: center;
  gap: 0.7rem;
}
.terms-main {
  color: #444;
  font-size: 0.85rem;
  line-height: 1.4;
  width: 100%;
}
.terms-savings {
  width: 100%;
  display: flex;
  justify-content: center;
}
.seasonal-savings-badge {
  background: linear-gradient(90deg, #43A047 60%, #66BB6A 100%);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 14px;
  padding: 0.45rem 1rem;
  box-shadow: 0 2px 8px rgba(46,125,50,0.10);
  text-align: center;
  width: 100%;
  max-width: 100%;
  margin-top: 0.2rem;
  display: block;
}

.service-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
}

.option-btn {
  padding: 0.9rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  border: 2px solid #2E7D32;
  background: #2E7D32;
  color: white;
  width: 100%;
  max-width: 400px;
}

.option-btn.selected {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(46,125,50,0.15);
  background: #1B5E20;
}

.option-btn.secondary {
  font-size: 0.85rem;
  padding: 0.6rem 1.5rem;
  border: 1px solid #e0e0e0;
  color: #666;
  background: #f7f8f6;
  max-width: 300px;
}

.option-btn.secondary.selected {
  border-color: #2E7D32;
  background: #E8F5E9;
  color: #1B5E20;
}

.divider {
  color: #666;
  font-size: 0.85rem;
  margin: 0.25rem 0;
  position: relative;
  text-align: center;
  width: 100%;
}

.booking-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;
}

.summary-card {
  background: #f7f8f6;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  height: fit-content;
}

.summary-card h4 {
  color: #1B5E20;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  padding: 0.2rem 0;
}

.summary-row:last-child {
  margin-bottom: 0;
  padding-top: 0.4rem;
  border-top: 1px solid #e0e0e0;
  font-weight: 600;
  color: #1B5E20;
}

.booking-form {
  background: white;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  height: fit-content;
}

.booking-form h4 {
  color: #1B5E20;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.form-row {
  margin-bottom: 0.6rem;
}

.form-row label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: #1B5E20;
  margin-bottom: 0.2rem;
}

.form-row input {
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1.5px solid #C8E6C9;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.field-hint {
  display: block;
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  font-style: italic;
}

.submit-btn {
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
  background: #2E7D32;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.75rem;
}

.submit-btn:disabled {
  background: #A5D6A7;
  color: #f3f3f3;
  cursor: not-allowed;
  opacity: 1;
}

.what-next-confirm {
  background: #E8F5E9;
  border-radius: 12px;
  border: 2px solid #2E7D32;
  color: #1B5E20;
  padding: 1.25rem;
  font-size: 1rem;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.5rem;
  position: relative;
  box-shadow: 0 4px 12px rgba(46,125,50,0.08);
}
.what-next-confirm strong {
  color: #1B5E20;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

@media (max-width: 900px) {
  .booking-layout {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
}

.secondary-btn {
  background: #fff !important;
  color: #2E7D32 !important;
  border: 2px solid #2E7D32 !important;
  font-weight: 500;
}

.secondary-btn.selected {
  background: #E8F5E9 !important;
  color: #1B5E20 !important;
}

.primary-btn {
  background: #2E7D32 !important;
  color: #fff !important;
  border: 2px solid #2E7D32 !important;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(46,125,50,0.08);
}

.primary-btn.selected {
  background: #1B5E20 !important;
  color: #fff !important;
}

.cta-btn {
  margin-top: 2rem;
  width: 100%;
  background: #256029;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.9rem 0;
  border: none;
  box-shadow: 0 4px 16px rgba(46,125,50,0.13), 0 0 0 3px #fff;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  letter-spacing: 0.01em;
}

.cta-btn:hover {
  background: #1B5E20;
  box-shadow: 0 6px 24px rgba(46,125,50,0.18), 0 0 0 3px #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.savings-badge {
  display: inline-block;
  background: linear-gradient(90deg, #43A047 60%, #66BB6A 100%);
  color: #fff;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 16px;
  padding: 0.35rem 1.1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.03em;
  box-shadow: 0 2px 8px rgba(46,125,50,0.10);
  text-align: center;
}

.seasonal-savings {
  color: #2E7D32;
  font-weight: 600;
  display: block;
  margin-top: 0.3rem;
}

@media (max-width: 600px) {
  .terms-blurb {
    padding: 0.7rem 0.5rem;
    font-size: 0.8rem;
    gap: 0.5rem;
  }
  .seasonal-savings-badge {
    font-size: 0.9rem;
  }

  .hero-section {
    min-height: 300px;
    padding: 1.5rem 1rem;
  }

  .hero-headings h1 {
    font-size: 1.6rem;
  }

  .hero-headings h2 {
    font-size: 1.1rem;
  }

  .hero-subtext {
    font-size: 0.95rem;
  }

  .hero-cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .hero-cta-btn {
    width: 100%;
    max-width: 280px;
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }

  .content-section {
    padding: 2rem 1rem;
  }

  .content-section h2 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  .lead-text {
    font-size: 1.05rem;
    margin-bottom: 2rem;
  }

  .trust-badges {
    gap: 1rem;
  }

  .trust-badge {
    font-size: 0.9rem;
  }

  .badge-icon {
    font-size: 1.2rem;
  }

  .trust-note {
    font-size: 0.9rem;
  }

  .quote-form-section {
    padding: 2rem 1rem;
  }

  .form-section-header h2 {
    font-size: 1.5rem;
  }

  .form-section-header p {
    font-size: 1rem;
  }

  .snowfall-pricing {
    gap: 0.5rem;
  }

  .pricing-tier {
    padding: 0.6rem 0.75rem;
  }

  .tier-label {
    font-size: 0.85rem;
  }

  .tier-price {
    font-size: 1rem;
  }
}

.required-asterisk {
  color: #d32f2f;
  font-size: 1.1em;
  margin-left: 0.15em;
}

.next-steps-modal .next-steps-header {
  font-size: 1.45rem;
  font-weight: 800;
  color: #1B5E20;
  text-align: center;
  padding: 1.2rem 1.2rem 0.5rem 1.2rem;
  letter-spacing: 0.01em;
}
.next-steps-modal .next-steps-content {
  background: #E8F5E9;
  border-radius: 12px;
  border: 2px solid #2E7D32;
  color: #1B5E20;
  padding: 1.3rem 1.5rem 1.3rem 1.5rem;
  font-size: 1.08rem;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  margin: 0.5rem 0 0.5rem 0;
  position: relative;
  box-shadow: 0 4px 12px rgba(46,125,50,0.08);
}
.next-steps-modal .next-steps-footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 1.2rem 1.2rem 1.2rem;
}
.next-steps-modal .next-steps-close-btn {
  min-width: 100px;
  font-size: 1.08rem;
  font-weight: 600;
  border-radius: 8px;
}
.next-steps-modal .gratitude-message {
  color: #256029;
  font-size: 1.13rem;
  text-align: center;
  margin-bottom: 0.3rem;
  font-weight: 700;
}
.next-steps-modal .auto-close-message {
  color: #2E7D32;
  font-size: 0.98rem;
  text-align: center;
  margin-top: 1.1rem;
}
</style> 