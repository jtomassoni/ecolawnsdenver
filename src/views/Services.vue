<template>
  <div class="services-page">
    <div class="services-content">
      <h1>Our Services</h1>
      <div class="service-cards">
        <div v-for="service in services" :key="service.title" class="service-card">
          <img :src="service.image" :alt="service.title" class="service-image">
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <button 
            class="p-button p-button-success p-button-raised"
            @click="handleQuoteClick(service)"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>

    <!-- Lawn Care Modal -->
      <Dialog v-model:visible="showLawnCareModal" modal :style="modalStyle" class="service-modal">
      <template #header>
        <h3>Get Your Lawn Care Quote</h3>
      </template>
      <div class="modal-form">
        <p class="modal-intro">Enter your information to get a quote for our lawn mowing service.</p>
        <form @submit.prevent="submitLawnCare">
          <div class="form-row">
            <label>Name <span class="required-asterisk">*</span></label>
            <input v-model="lawnCareForm.name" type="text" required />
          </div>
          <div class="form-row">
            <label>Email <span class="required-asterisk">*</span></label>
            <input v-model="lawnCareForm.email" type="email" required />
          </div>
          <div class="form-row">
            <label>Phone <span class="required-asterisk">*</span></label>
            <input v-model="lawnCareForm.phone" type="tel" required placeholder="(303) 555-1234" />
          </div>
          <div class="form-row">
            <label>Address <span class="required-asterisk">*</span></label>
            <input v-model="lawnCareForm.address" type="text" required placeholder="123 Main St, Denver, CO 80202" />
          </div>
          <div class="form-row">
            <label>Lawn Size (sq ft) <span class="required-asterisk">*</span></label>
            <input v-model="lawnCareForm.lawnSize" type="number" required placeholder="e.g., 5000" />
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Submitting...' : 'Get Quote' }}
          </button>
        </form>
        <div v-if="submitSuccess" class="success-text">Request sent! We'll contact you soon.</div>
        <div v-if="submitError" class="error-text">{{ submitError }}</div>
      </div>
    </Dialog>

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
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Submitting...' : 'Request Snow Removal' }}
          </button>
        </form>
        <div v-if="submitSuccess" class="success-text">Request sent! We'll contact you soon.</div>
        <div v-if="submitError" class="error-text">{{ submitError }}</div>
      </div>
    </Dialog>

    <!-- Spring Cleanup Modal -->
    <Dialog v-model:visible="showSpringCleanupModal" modal :style="modalStyle" class="service-modal">
      <template #header>
        <h3>Request Spring Cleanup Service</h3>
      </template>
      <div class="modal-form">
        <p class="modal-intro">Get your lawn ready for the growing season with our comprehensive spring cleanup and aeration service.</p>
        <form @submit.prevent="submitSpringCleanup">
          <div class="form-row">
            <label>Name <span class="required-asterisk">*</span></label>
            <input v-model="springForm.name" type="text" required />
          </div>
          <div class="form-row">
            <label>Email <span class="required-asterisk">*</span></label>
            <input v-model="springForm.email" type="email" required />
          </div>
          <div class="form-row">
            <label>Phone <span class="required-asterisk">*</span></label>
            <input v-model="springForm.phone" type="tel" required placeholder="(303) 555-1234" />
          </div>
          <div class="form-row">
            <label>Address <span class="required-asterisk">*</span></label>
            <input v-model="springForm.address" type="text" required placeholder="123 Main St, Denver, CO 80202" />
          </div>
          <div class="form-row">
            <label>Additional Notes (optional)</label>
            <textarea v-model="springForm.notes" rows="3" placeholder="Any special instructions or details about your lawn..."></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Submitting...' : 'Request Service' }}
          </button>
        </form>
        <div v-if="submitSuccess" class="success-text">Request sent! We'll contact you soon.</div>
        <div v-if="submitError" class="error-text">{{ submitError }}</div>
      </div>
    </Dialog>

    <!-- Fall Cleanup Modal -->
    <Dialog v-model:visible="showFallCleanupModal" modal :style="modalStyle" class="service-modal">
      <template #header>
        <h3>Request Fall Cleanup Service</h3>
      </template>
      <div class="modal-form">
        <p class="modal-intro">Prepare your yard for winter with our fall cleanup and winterization service.</p>
        <form @submit.prevent="submitFallCleanup">
          <div class="form-row">
            <label>Name <span class="required-asterisk">*</span></label>
            <input v-model="fallForm.name" type="text" required />
          </div>
          <div class="form-row">
            <label>Email <span class="required-asterisk">*</span></label>
            <input v-model="fallForm.email" type="email" required />
          </div>
          <div class="form-row">
            <label>Phone <span class="required-asterisk">*</span></label>
            <input v-model="fallForm.phone" type="tel" required placeholder="(303) 555-1234" />
          </div>
          <div class="form-row">
            <label>Address <span class="required-asterisk">*</span></label>
            <input v-model="fallForm.address" type="text" required placeholder="123 Main St, Denver, CO 80202" />
          </div>
          <div class="form-row">
            <label>Additional Notes (optional)</label>
            <textarea v-model="fallForm.notes" rows="3" placeholder="Any special instructions or details about your property..."></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Submitting...' : 'Request Service' }}
          </button>
        </form>
        <div v-if="submitSuccess" class="success-text">Request sent! We'll contact you soon.</div>
        <div v-if="submitError" class="error-text">{{ submitError }}</div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import { API_ENDPOINTS } from '../config'

const showLawnCareModal = ref(false)
const showSnowRemovalModal = ref(false)
const showSpringCleanupModal = ref(false)
const showFallCleanupModal = ref(false)

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const lawnCareForm = ref({ name: '', email: '', phone: '', address: '', lawnSize: '' })
const snowForm = ref({ name: '', email: '', phone: '', address: '', drivewayLength: '', notes: '' })
const springForm = ref({ name: '', email: '', phone: '', address: '', notes: '' })
const fallForm = ref({ name: '', email: '', phone: '', address: '', notes: '' })

const modalStyle = { width: '95%', maxWidth: '600px' }

const handleQuoteClick = (service) => {
  if (service.isSnowRemoval) {
    showSnowRemovalModal.value = true
  } else if (service.title.includes('Spring')) {
    showSpringCleanupModal.value = true
  } else if (service.title.includes('Fall')) {
    showFallCleanupModal.value = true
  } else {
    showLawnCareModal.value = true
  }
}

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const isValidPhone = (phone) => {
  return phone.replace(/\D/g, '').length >= 10
}

const submitForm = async (formData, type) => {
  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = false
  
  try {
    const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        type: type
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to send request. Please try again.')
    }
    
    const data = await response.json()
    
    if (data.success) {
      submitSuccess.value = true
      submitError.value = ''
      setTimeout(() => {
        if (type.includes('Lawn Care')) showLawnCareModal.value = false
        else if (type.includes('Snow')) showSnowRemovalModal.value = false
        else if (type.includes('Spring')) showSpringCleanupModal.value = false
        else if (type.includes('Fall')) showFallCleanupModal.value = false
        submitSuccess.value = false
      }, 2000)
    } else {
      submitError.value = data.message || 'Failed to send request. Please try again.'
    }
  } catch (e) {
    console.error('Error submitting form:', e)
    submitError.value = 'An error occurred. Please try again or contact us directly.'
  } finally {
    isSubmitting.value = false
  }
}

const submitLawnCare = () => {
  if (!lawnCareForm.value.name?.trim() || !isValidEmail(lawnCareForm.value.email) || 
      !isValidPhone(lawnCareForm.value.phone) || !lawnCareForm.value.address?.trim() || 
      !lawnCareForm.value.lawnSize?.trim()) {
    submitError.value = 'Please fill in all required fields correctly.'
    return
  }
  submitForm({
    name: lawnCareForm.value.name.trim(),
    email: lawnCareForm.value.email.trim(),
    phone: lawnCareForm.value.phone.trim(),
    address: lawnCareForm.value.address.trim(),
    lawnSize: lawnCareForm.value.lawnSize.trim()
  }, 'Lawn Care Service Request')
}

const submitSnowRemoval = () => {
  if (!snowForm.value.name?.trim() || !isValidEmail(snowForm.value.email) || 
      !isValidPhone(snowForm.value.phone) || !snowForm.value.address?.trim() || 
      !snowForm.value.drivewayLength?.trim()) {
    submitError.value = 'Please fill in all required fields correctly.'
    return
  }
  submitForm({
    name: snowForm.value.name.trim(),
    email: snowForm.value.email.trim(),
    phone: snowForm.value.phone.trim(),
    address: snowForm.value.address.trim(),
    drivewayLength: snowForm.value.drivewayLength.trim(),
    notes: snowForm.value.notes.trim()
  }, 'Snow Removal Request (Ad-hoc)')
}

const submitSpringCleanup = () => {
  if (!springForm.value.name?.trim() || !isValidEmail(springForm.value.email) || 
      !isValidPhone(springForm.value.phone) || !springForm.value.address?.trim()) {
    submitError.value = 'Please fill in all required fields correctly.'
    return
  }
  submitForm({
    name: springForm.value.name.trim(),
    email: springForm.value.email.trim(),
    phone: springForm.value.phone.trim(),
    address: springForm.value.address.trim(),
    notes: springForm.value.notes.trim()
  }, 'Spring Cleanup Service Request')
}

const submitFallCleanup = () => {
  if (!fallForm.value.name?.trim() || !isValidEmail(fallForm.value.email) || 
      !isValidPhone(fallForm.value.phone) || !fallForm.value.address?.trim()) {
    submitError.value = 'Please fill in all required fields correctly.'
    return
  }
  submitForm({
    name: fallForm.value.name.trim(),
    email: fallForm.value.email.trim(),
    phone: fallForm.value.phone.trim(),
    address: fallForm.value.address.trim(),
    notes: fallForm.value.notes.trim()
  }, 'Fall Cleanup Service Request')
}

const services = [
  {
    title: 'Weekly & Bi-Weekly Lawn Mowing',
    description: `Professional mowing service with battery-powered mowers. We trim edges, blow clippings, and keep your property spotless.`,
    image: '/images/lawn-being-cut.png'
  },
  {
    title: 'Spring Cleanup & Aeration',
    description: `Thorough cleanup, dethatching, core aeration, and overseeding to get your lawn ready for the growing season.`,
    image: '/images/lawn-cut-shot.png'
  },
  {
    title: 'Snow Removal Service',
    description: `Professional snow removal for driveways, walkways, and sidewalks. Available now for winter service.`,
    image: '/images/snowblow-being-pushed.png',
    isSnowRemoval: true
  },
  {
    title: 'Fall Cleanup & Winter Prep',
    description: `Clear leaves and debris, apply winter fertilizer, and prepare your lawn for the cold months ahead.`,
    image: '/images/hero.jpg'
  }
]
</script>

<style scoped>
.services-page {
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
  padding: 1rem;
}

.services-content {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 1.5rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

h1 {
  font-size: 2rem;
  color: #1B5E20;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  width: 100%;
  margin-top: 0;
}

.service-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e8e8e8;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border-color: #C8E6C9;
}

.service-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.service-card h2 {
  font-size: 1.15rem;
  color: #1B5E20;
  margin: 0;
  padding: 1rem 1rem 0.5rem;
  font-weight: 600;
  line-height: 1.3;
}

.service-card p {
  font-size: 0.875rem;
  color: #555;
  padding: 0 1rem;
  margin: 0 0 1rem;
  flex: 1;
  line-height: 1.5;
}

.service-card button {
  margin: 0 1rem 1rem;
  width: calc(100% - 2rem);
  padding: 0.75rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
  min-height: 44px;
}

.service-card button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(46,125,50,0.3);
}

@media (max-width: 1024px) {
  .service-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .services-page {
    padding: 0.75rem 0.5rem;
  }

  .services-content {
    padding: 1.25rem 1rem;
    border-radius: 12px;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .service-cards {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 0;
  }

  .service-image {
    height: 150px;
  }

  .service-card h2 {
    font-size: 1.1rem;
    padding: 0.875rem 0.875rem 0.5rem;
  }

  .service-card p {
    font-size: 0.85rem;
    padding: 0 0.875rem;
    margin-bottom: 0.875rem;
  }

  .service-card button {
    margin: 0 0.875rem 0.875rem;
    width: calc(100% - 1.75rem);
  }
}

@media (max-width: 480px) {
  .services-content {
    padding: 1rem 0.75rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .service-image {
    height: 140px;
  }
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

.form-row {
  margin-bottom: 1rem;
}

.form-row label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1B5E20;
  margin-bottom: 0.5rem;
}

.form-row input,
.form-row textarea {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1.5px solid #C8E6C9;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-row input:focus,
.form-row textarea:focus {
  outline: none;
  border-color: #2E7D32;
  box-shadow: 0 0 0 2px rgba(46,125,50,0.15);
}

.form-row textarea {
  resize: vertical;
}

.field-hint {
  display: block;
  color: #888;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-style: italic;
}

.required-asterisk {
  color: #d32f2f;
  font-size: 1.1em;
  margin-left: 0.15em;
}

.submit-btn {
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

.submit-btn:hover:not(:disabled) {
  background: #1B5E20;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  background: #A5D6A7;
  cursor: not-allowed;
}

.success-text {
  color: #2E7D32;
  font-size: 0.95rem;
  margin-top: 1rem;
  padding: 0.75rem;
  background: #E8F5E9;
  border-radius: 8px;
  text-align: center;
}

.error-text {
  color: #d32f2f;
  font-size: 0.95rem;
  margin-top: 1rem;
  padding: 0.75rem;
  background: #ffebee;
  border-radius: 8px;
  text-align: center;
}
</style> 