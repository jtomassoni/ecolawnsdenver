<template>
  <div class="services-page">
    <div class="services-content">
      <h1>Our Services</h1>
      <p class="services-intro">Professional lawn care and property maintenance services for Denver homeowners. From spring preparation to winter snow removal, we're here year-round.</p>
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
    description: `Enjoy a lush, healthy lawn all season long with our professional mowing service. Our experienced crew uses quiet, battery-powered mowers to deliver a precise, even cut every visit. We trim edges, blow away clippings, and ensure your sidewalks and driveways are spotless. Our mowing schedule is tailored to Denver's unique climate, and we adjust our techniques to promote strong root growth and drought resistance. You'll love the crisp stripes and the time you get back every weekend! Perfect for the upcoming spring season starting in April.`,
    image: '/images/lawn-being-cut.png'
  },
  {
    title: 'Spring Cleanup & Aeration',
    description: `Kickstart your lawn's health each spring with our thorough cleanup and aeration package. We remove leaves, branches, and winter debris, then dethatch to clear out old grass and allow new growth. Our core aeration process relieves soil compaction, improves water absorption, and encourages deep root development. We finish with overseeding to fill in bare spots, giving you a thicker, greener lawn that's ready to thrive as temperatures rise. Book now for early spring service!`,
    image: '/images/lawn-cut-shot.png'
  },
  {
    title: 'Snow Removal Service',
    description: `Available now! Don't let winter weather slow you down. Our professional snow removal service keeps your property safe and accessible all season long. We clear driveways, walkways, and sidewalks with reliable, prompt service. Our team uses professional equipment and responds quickly to snowfall. Perfect for maintaining your property while you wait for lawn care season to begin in April. Contact us today to schedule your winter service!`,
    image: '/images/snowblow-being-pushed.png',
    isSnowRemoval: true
  },
  {
    title: 'Fall Cleanup & Winter Prep',
    description: `Prepare your yard for the cold months ahead with our fall cleanup and winterization service. We clear away fallen leaves and debris to prevent mold and pests, then apply a slow-release fertilizer to nourish your grass through winter. Our team trims perennials, cuts back ornamental grasses, and ensures your lawn is tidy and protected. With our expert winter prep, your lawn will bounce back healthier and greener when spring arrives.`,
    image: '/images/hero.jpg'
  }
]
</script>

<style scoped>
.services-page {
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
  padding: 2rem 1rem;
  overflow-y: auto;
}

.services-content {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

h1 {
  font-size: 2.5rem;
  color: #1B5E20;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.services-intro {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 1rem;
  line-height: 1.6;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;
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
  height: 220px;
  object-fit: cover;
  display: block;
}

.service-card h2 {
  font-size: 1.3rem;
  color: #1B5E20;
  margin: 0;
  padding: 1.5rem 1.5rem 0.75rem;
  font-weight: 600;
  line-height: 1.3;
}

.service-card p {
  font-size: 0.95rem;
  color: #555;
  padding: 0 1.5rem;
  margin: 0 0 1.5rem;
  flex: 1;
  line-height: 1.6;
}

.service-card button {
  margin: 0 1.5rem 1.5rem;
  width: calc(100% - 3rem);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
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
    padding: 1rem 0.5rem;
  }

  .services-content {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .service-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .service-image {
    height: 200px;
  }

  .service-card h2 {
    font-size: 1.2rem;
    padding: 1.25rem 1.25rem 0.75rem;
  }

  .service-card p {
    font-size: 0.9rem;
    padding: 0 1.25rem;
    margin-bottom: 1.25rem;
  }

  .service-card button {
    margin: 0 1.25rem 1.25rem;
    width: calc(100% - 2.5rem);
  }
}

@media (max-width: 480px) {
  .services-content {
    padding: 1.5rem 1rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  .service-image {
    height: 180px;
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