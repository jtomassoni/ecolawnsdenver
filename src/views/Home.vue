<template>
  <div class="home-page">
    <div class="hero-headings">
      <h1>Get Your Weekends Back</h1>
      <h2>Professional Lawn Care in Denver from $40/visit</h2>
    </div>
    <div ref="quoteFormSection" class="hero-cta">
      <div class="form-title">Get Your Instant Lawn Care Estimate</div>
      <div v-if="step === 1" class="step-content">
        <form @submit.prevent="goToStep2">
          <div class="form-field">
            <label>Lawn Size (square feet)</label>
            <div class="input-wrapper">
              <input 
                v-model="lawnSize" 
                type="number" 
                placeholder="e.g., 5000" 
                class="calculator-input" 
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
                @click="selectedOption = 'seasonal'"
              >
                Select Seasonal Package
              </button>
              <div class="divider">or</div>
              <button 
                type="button"
                :class="['option-btn secondary', { selected: selectedOption === 'biweekly' }]"
                @click="selectedOption = 'biweekly'"
              >
                Pay per visit (${{ price }}/visit)
              </button>
            </div>
            <button class="calculator-button" type="submit">Next</button>
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
              <!-- <div class="summary-row"></div> -->
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
                <label>Name <span class="required-asterisk">*</span></label>
                <input v-model="bookingForm.name" type="text" required />
              </div>
              <div class="form-row">
                <label>Email <span class="required-asterisk">*</span></label>
                <input v-model="bookingForm.email" type="email" required />
              </div>
              <div class="form-row">
                <label>Zipcode <span class="required-asterisk">*</span></label>
                <input 
                  v-model="bookingForm.zipcode" 
                  type="text" 
                  required 
                  minlength="5"
                  maxlength="10"
                  pattern="[0-9]{5,}"
                  title="Please enter a valid 5-digit zipcode"
                />
              </div>
              <div class="form-row">
                <label>Phone Number <span class="required-asterisk">*</span></label>
                <input 
                  v-model="bookingForm.phone" 
                  type="tel" 
                  required 
                  minlength="10"
                  maxlength="20"
                  pattern="[0-9]{10,}"
                  title="Please enter a valid 10-digit phone number"
                />
              </div>
              <button 
                class="submit-btn" 
                type="submit" 
                :disabled="!isFormValid"
              >
                {{ isSubmitting ? 'Submitting...' : 'Book My Service' }}
              </button>
            </form>
            <div v-if="submitSuccess" class="success-text">
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
            <div v-if="submitError" class="error-text">{{ submitError }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, provide, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { API_ENDPOINTS } from '../config'
import Dialog from 'primevue/dialog'

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
const bookingForm = ref({ name: '', email: '', zipcode: '', phone: '' })
const step = ref(1)
const showNextStepsModal = ref(false)
const autoCloseCountdown = ref(10)
let autoCloseTimer = null

// Add validation computed properties
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(bookingForm.value.email);
});

const isValidZipcode = computed(() => {
  return bookingForm.value.zipcode.length >= 5 && /^\d+$/.test(bookingForm.value.zipcode);
});

const isValidPhone = computed(() => {
  return bookingForm.value.phone.length >= 10 && /^\d+$/.test(bookingForm.value.phone);
});

const isFormValid = computed(() => {
  return bookingForm.value.name.trim() !== '' &&
         isValidEmail.value &&
         isValidZipcode.value &&
         isValidPhone.value &&
         !isSubmitting.value;
});

const goToStep2 = () => {
  price.value = getPriceForSize(parseInt(lawnSize.value))
  selectedOption.value = 'seasonal'
  step.value = 2
}
const goToStep3 = () => {
  step.value = 3
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
    { maxSize: 18000, price: 180 }
  ]
  const tier = pricingTiers.find(tier => size <= tier.maxSize)
  return tier ? tier.price : null
}

const seasonalPrice = computed(() => {
  if (!price.value) return 0
  const total = price.value * avgCutsPerSeason
  return Math.round(total * 0.75)
})

const seasonalPayment = computed(() => {
  return Math.ceil(seasonalPrice.value / 2)
})

const submitBooking = async (event) => {
  event.preventDefault();
  
  if (!bookingForm.value.name || !bookingForm.value.email || !bookingForm.value.zipcode || !bookingForm.value.phone) {
    submitError.value = 'All fields are required.';
    return;
  }

  // Validate zipcode length
  if (bookingForm.value.zipcode.length < 5) {
    submitError.value = 'Please enter a valid 5-digit zipcode.';
    return;
  }

  // Validate phone number length
  if (bookingForm.value.phone.length < 10) {
    submitError.value = 'Please enter a valid 10-digit phone number.';
    return;
  }

  try {
    submitError.value = ''
    isSubmitting.value = true
    
    console.log('Attempting to send request to:', API_ENDPOINTS.SEND_EMAIL)
    
    const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: bookingForm.value.name,
        email: bookingForm.value.email,
        zipcode: bookingForm.value.zipcode,
        phone: bookingForm.value.phone,
        lawnSize: lawnSize.value,
        subscriptionOption: selectedOption.value,
        type: 'Lawn Service Booking'
      })
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json()
    console.log('Response data:', data)

    if (data.success) {
      submitSuccess.value = true
      bookingForm.value = { name: '', email: '', zipcode: '', phone: '' }
      showNextStepsModal.value = true
    } else {
      submitError.value = data.message || 'Failed to send request.'
    }
  } catch (e) {
    console.error('Error details:', e)
    submitError.value = e.message || 'Failed to send request. Please try again.'
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
  height: 100%;
  width: 100%;
  background: black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}

.home-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.hero-headings {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 1.5vh;
  margin-bottom: 1vh;
}
.hero-headings h1 {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  text-shadow: 0 2px 12px rgba(0,0,0,0.25);
  margin-bottom: 0.25rem;
}
.hero-headings h2 {
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
  margin-bottom: 0.5rem;
}

.hero-cta {
  position: relative;
  z-index: 1;
  width: 95%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  height: calc(100% - 100px);
}

.form-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1B5E20;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0.01em;
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
  margin: 0;
}

.calculator-input[type=number] {
  -moz-appearance: textfield;
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