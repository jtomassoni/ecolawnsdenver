<template>
  <div class="home-page">
    <transition name="slide-fade">
      <div v-if="showHeroHeadings" class="hero-headings">
        <h1>Get Your Weekends Back</h1>
        <h2>Professional Lawn Care in Denver from $40/visit</h2>
      </div>
    </transition>
    <div class="hero-content" :class="{ 'no-hero-headings': !showHeroHeadings }">
      <div class="hero-cta">
        <div ref="quoteFormSection" :class="['estimate-calculator', { 'form-emphasized': emphasizeForm, 'wide': true, 'two-col': step === 2 }]">
          <div class="form-title">Get Your Instant Lawn Care Estimate</div>
          <div v-if="step === 1" class="step-content">
            <div class="form-field">
              <label>Lawn Size (square feet)</label>
              <input v-model="lawnSize" type="number" placeholder="e.g., 5000" class="p-inputtext calculator-input" />
              <div class="measure-help">
                <p>Not sure about your lawn size? <button class="link-button" @click="showMeasureGuide = true">Use our measurement guide</button></p>
                <p class="measure-tip">Tip: Most residential lawns in Denver are between 3,000 - 8,000 sq ft</p>
              </div>
              <button 
                class="p-button p-button-success p-button-raised calculator-button"
                @click="goToStep2"
                :disabled="!lawnSize"
              >
                Next
              </button>
            </div>
          </div>
          <div v-else-if="step === 2" class="step-content step2-content">
            <div class="form-col">
              <h3>Your Lawn Size: {{ lawnSize }} sq ft</h3>
              <div class="service-options">
                <button 
                  :class="['option-btn', 'secondary-btn', { selected: selectedOption === 'biweekly' }]
                  "
                  @click="selectedOption = 'biweekly'"
                >
                  Bi-Weekly
                </button>
                <button 
                  :class="['option-btn', 'primary-btn', { selected: selectedOption === 'seasonal' }]
                  "
                  @click="selectedOption = 'seasonal'"
                >
                  Seasonal Package
                </button>
              </div>
              <div v-if="selectedOption === 'biweekly'" class="option-details">
                <p class="price">${{ price }}/visit</p>
                <p class="price-note">Bi-weekly mowing service<br>(about {{ avgCutsPerSeason }} visits per season, April–October)</p>
              </div>
              <div v-else class="option-details">
                <p class="price">2 payments of ${{ seasonalPayment }} <span class="save">(Save 25%)</span></p>
                <p class="price-note">
                  One payment at the start of the season, one at mid-season.<br>
                  Covers all {{ avgCutsPerSeason }} visits (April–October).
                </p>
              </div>
              <button class="cta-btn" @click="goToStep3">Next</button>
            </div>
          </div>
          <div v-else-if="step === 3" class="step-content step3-content">
            <div class="calculator-content two-col booking-layout">
              <div class="form-col summary-card">
                <h4>Summary</h4>
                <div class="summary-row"><span>Lawn Size:</span> <span>{{ lawnSize }} sq ft</span></div>
                <div class="summary-row"><span>Package:</span> <span>{{ selectedOption === 'seasonal' ? 'Seasonal (2 payments)' : 'Bi-Weekly' }}</span></div>
                <div class="summary-row"><span>Price:</span>
                  <span v-if="selectedOption === 'seasonal'">2 × ${{ seasonalPayment }}</span>
                  <span v-else>${{ price }}/visit</span>
                </div>
              </div>
              <div class="form-col booking-form">
                <h4>Book Your Service</h4>
                <form @submit.prevent="submitBooking">
                  <div class="form-row">
                    <label>Name</label>
                    <input v-model="bookingForm.name" type="text" placeholder="Optional" />
                  </div>
                  <div class="form-row">
                    <label>Email <span class="required">*</span></label>
                    <input v-model="bookingForm.email" type="email" required placeholder="Required" />
                  </div>
                  <div class="form-row">
                    <label>Zipcode <span class="required">*</span></label>
                    <input v-model="bookingForm.zipcode" type="text" required placeholder="Required" maxlength="10" />
                  </div>
                  <div class="form-row">
                    <label>Phone Number</label>
                    <input v-model="bookingForm.phone" type="tel" placeholder="Optional" maxlength="20" />
                  </div>
                  <button class="p-button p-button-success submit-btn" type="submit" :disabled="!bookingForm.email || isSubmitting">
                    {{ isSubmitting ? 'Submitting...' : 'Book My Service' }}
                  </button>
                </form>
                <div v-if="submitSuccess" class="success-text">Request sent! We'll contact you soon.</div>
                <div v-if="submitError" class="error-text">{{ submitError }}</div>
              </div>
            </div>
            <div class="what-next unified-what-next">
              <strong>What will happen next:</strong> After you book, our team will review your info and reach out to confirm your service details and schedule your first visit. You'll get a welcome email and a reminder before each mowing. We handle everything—just sit back and enjoy your weekends!
            </div>
          </div>
          <div v-if="step > 1" class="how-it-works how-it-works-below">
            <strong>How it works:</strong> We'll mow your lawn every other week, keep your edges clean, and handle all clippings in whichever way you prefer (bagged, mulched, etc.). The seasonal package covers the full season with two easy payments. No hidden fees—just reliable, eco-friendly service!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, provide, onMounted, onBeforeUnmount, computed } from 'vue'

const lawnSize = ref('')
const price = ref(null)
const showMeasureGuide = inject('showMeasureGuide')
const emphasizeForm = ref(false)
const quoteFormSection = ref(null)
const selectedOption = ref('seasonal')
const avgCutsPerSeason = 14
const showHeroHeadings = ref(true)
const showBookingForm = ref(false)
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')
const bookingForm = ref({ name: '', email: '', zipcode: '', phone: '' })
const step = ref(1)

provide('showHeroHeadings', showHeroHeadings)

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

const submitBooking = async () => {
  if (!bookingForm.value.email || !bookingForm.value.zipcode) {
    submitError.value = 'Email and zipcode are required.';
    return;
  }
  try {
    submitError.value = ''
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    const data = await response.json()
    if (data.success) {
      submitSuccess.value = true
      bookingForm.value = { name: '', email: '', zipcode: '', phone: '' }
    } else {
      submitError.value = data.message || 'Failed to send request.'
    }
  } catch (e) {
    submitError.value = e.message || 'Failed to send request.'
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
  showHeroHeadings.value = false
}

onMounted(() => {
  window.addEventListener('emphasize-quote-form', onEmphasizeEvent)
})

onBeforeUnmount(() => {
  window.removeEventListener('emphasize-quote-form', onEmphasizeEvent)
})
</script>

<style scoped>
.home-page {
  height: 100vh;
  width: 100vw;
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
  margin-top: 3.5vh;
  margin-bottom: 2vh;
}
.hero-headings h1 {
  color: #fff;
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 0 2px 12px rgba(0,0,0,0.25);
  margin-bottom: 0.5rem;
}
.hero-headings h2 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  text-shadow: 0 2px 12px rgba(0,0,0,0.18);
  margin-bottom: 1.2rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 95%;
  max-width: 1100px;
  min-height: 0;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.7rem 0.7rem 0.7rem 0.7rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  height: 80vh;
  min-height: 400px;
  max-height: 90vh;
  justify-content: center;
}

.hero-cta {
  flex: 1;
  max-width: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.estimate-calculator {
  width: 100%;
  padding: 1.2rem 1.5rem 1.5rem 1.5rem;
  background: white;
  border-radius: 14px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.13);
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #e0e0e0;
}

.form-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1B5E20;
  margin-bottom: 1.1rem;
  text-align: center;
  letter-spacing: 0.01em;
}

.calculator-content {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-field label {
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
  display: block;
}

.calculator-input {
  padding: 0.35rem;
  font-size: 0.95rem;
  width: 100%;
}

.calculator-button {
  padding: 0.35rem;
  font-size: 0.95rem;
  width: 100%;
}

.price-display {
  padding: 0.5rem 0.2rem 0.2rem 0.2rem;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(46,125,50,0.04);
  margin-bottom: 0.5rem;
}

.price-display h3 {
  font-size: 1rem;
  margin-bottom: 0.2rem;
}

.price-display .price {
  font-size: 1.3rem;
  margin: 0.2rem 0;
}

.price-display .price-note {
  color: #666;
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
}

.service-options {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}
.option-btn {
  background: #f7f8f6;
  border: 2px solid #C8E6C9;
  color: #2E7D32;
  font-weight: 600;
  border-radius: 6px;
  padding: 0.25rem 0.7rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s;
  box-shadow: none;
}
.option-btn.selected, .option-btn.primary-btn.selected {
  background: #2E7D32;
  color: #fff;
  border: 2px solid #1B5E20;
  box-shadow: 0 2px 8px rgba(46,125,50,0.10);
  z-index: 1;
}
.option-btn.primary-btn {
  background: #e8f5e9;
  color: #1B5E20;
  border: 2px solid #A5D6A7;
}
.option-btn.secondary-btn {
  background: #f7f8f6;
  color: #2E7D32;
  border: 2px solid #C8E6C9;
  opacity: 0.7;
}
.option-btn.secondary-btn.selected {
  background: #E8F5E9;
  color: #1B5E20;
  border: 2px solid #A5D6A7;
  opacity: 1;
}

.measure-help {
  background: #E8F5E9;
  padding: 0.5rem;
  border-radius: 8px;
  margin: 0.4rem 0;
  border: 1px solid #C8E6C9;
}

.measure-tip {
  font-size: 0.8rem;
  color: #2E7D32;
  margin-top: 0.2rem;
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
  font-size: 0.95rem;
}

.link-button:hover {
  color: #1B5E20;
}

.estimate-calculator.form-emphasized {
  box-shadow: 0 0 0 4px #2E7D32, 0 4px 6px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s;
  animation: form-glow 1.2s;
}
@keyframes form-glow {
  0% { box-shadow: 0 0 0 0 #2E7D32, 0 4px 6px rgba(0,0,0,0.1); }
  20% { box-shadow: 0 0 0 8px #A5D6A7, 0 4px 6px rgba(0,0,0,0.1); }
  100% { box-shadow: 0 0 0 0 #2E7D32, 0 4px 6px rgba(0,0,0,0.1); }
}

.estimate-calculator.wide {
  max-width: 370px;
  min-width: 280px;
  width: 100%;
}

@media (max-width: 900px) {
  .hero-content {
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
    height: auto;
    min-height: 0;
    max-height: 100vh;
  }
  .hero-cta {
    max-width: 100%;
  }
  .estimate-calculator.wide {
    max-width: 100%;
    min-width: 0;
  }
}

@media (max-width: 600px) {
  .hero-content {
    padding: 0.2rem;
    gap: 0.2rem;
    height: auto;
    min-height: 0;
    max-height: 100vh;
  }
  .hero-headings h1 {
    font-size: 1.1rem;
  }
  .hero-headings h2 {
    font-size: 0.9rem;
  }
  .estimate-calculator {
    padding: 0.3rem;
  }
  .price-display .price {
    font-size: 1rem;
  }
}

.hero-headings .trust-badges,
.hero-headings .trust-icon {
  display: none !important;
}

.how-it-works {
  margin-top: 1.2rem;
  font-size: 0.97rem;
  color: #2E7D32;
  background: #f1f8f1;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  border: 1px solid #C8E6C9;
  text-align: left;
}

.estimate-calculator.two-col {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 600px;
  max-width: 700px;
  padding: 1.2rem 2.2rem 1.2rem 2.2rem;
}
.calculator-content.two-col {
  display: flex;
  flex-direction: row;
  gap: 2.2rem;
  align-items: flex-start;
  justify-content: space-between;
}
.form-col {
  flex: 1 1 0;
  min-width: 220px;
}
.result-col {
  flex: 1 1 0;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

@media (max-width: 900px) {
  .estimate-calculator.two-col {
    min-width: 0;
    max-width: 100%;
    padding: 1.2rem 0.7rem;
  }
  .calculator-content.two-col {
    flex-direction: column;
    gap: 1.2rem;
  }
  .form-col, .result-col {
    min-width: 0;
  }
}

.how-it-works-below {
  margin-top: 2.5rem;
  width: 100%;
  box-sizing: border-box;
  display: block;
  background: #f7f8f6;
  border-radius: 10px;
  border: 1.5px solid #E0E0E0;
  color: #256029;
  padding: 1.1rem 1.2rem;
  font-size: 1.01rem;
}
.how-it-works-below strong {
  color: #1B5E20;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(.55,0,.1,1);
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

.hero-content.no-hero-headings {
  margin-top: 3vh;
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
.booking-layout {
  align-items: flex-start;
  gap: 0;
}
.calculator-content.two-col.booking-layout {
  gap: 2.2rem;
  align-items: flex-start;
  padding-bottom: 0;
}
.summary-card {
  background: none;
  border: none;
  box-shadow: none;
  padding: 0 0 0 0;
  margin-bottom: 0;
  border-right: 1.5px solid #e0e0e0;
  min-width: 220px;
  max-width: 260px;
}
.summary-card h4 {
  color: #1B5E20;
  margin-bottom: 0.7rem;
  font-size: 1.1rem;
}
.booking-form {
  background: none;
  border: none;
  box-shadow: none;
  padding: 0 0 0 2.2rem;
  margin-top: 0;
  min-width: 220px;
  flex: 1 1 0;
}
.unified-what-next {
  margin-top: 2.2rem;
  background: #f7f8f6;
  border-radius: 10px;
  border: 1.5px solid #E0E0E0;
  color: #256029;
  padding: 1.1rem 1.2rem;
  font-size: 1.01rem;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}
.unified-what-next strong {
  color: #1B5E20;
}
@media (max-width: 900px) {
  .calculator-content.two-col.booking-layout {
    flex-direction: column;
  }
  .summary-card {
    border-right: none;
    border-bottom: 1.5px solid #e0e0e0;
    padding: 0 0 1.2rem 0;
    max-width: 100%;
  }
  .booking-form {
    padding: 0;
    min-width: 0;
  }
}
</style> 