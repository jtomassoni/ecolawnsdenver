<script setup>
import { ref, computed } from 'vue'

const showQuoteDialog = ref(false)
const quoteForm = ref({
  name: '',
  address: '',
  email: '',
  phone: ''
})
const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)

const isFormValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^\+?[\d\s-]{10,}$/
  
  return (
    quoteForm.value.name.length >= 4 &&
    quoteForm.value.address.length >= 5 &&
    emailRegex.test(quoteForm.value.email) &&
    phoneRegex.test(quoteForm.value.phone)
  )
})

const services = [
  {
    title: 'Lawn Mowing',
    description: 'Professional mowing service with clean edges and perfect stripes.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=500&h=300'
  },
  {
    title: 'Spring Cleanup',
    description: 'Comprehensive spring cleanup to prepare your lawn for the growing season.',
    image: 'https://images.unsplash.com/photo-1556713304-e5ac0f02e516?auto=format&fit=crop&w=500&h=300'
  },
  {
    title: 'Fall Cleanup',
    description: 'Complete fall cleanup including leaf removal and winter preparation.',
    image: 'https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?auto=format&fit=crop&w=500&h=300'
  }
]

const steps = [
  {
    title: 'Enter Your Address',
    description: 'Get an instant quote based on your actual lawn size.'
  },
  {
    title: 'Pick Your Schedule',
    description: 'Choose weekly or bi-weekly service that fits your needs.'
  },
  {
    title: 'We Handle The Rest',
    description: 'Sit back and relax while we take care of your lawn.'
  }
]

const testimonials = [
  {
    quote: "My lawn went from embarrassing to amazing in 3 weeks!",
    author: "Mark R. in Cherry Creek"
  },
  {
    quote: "Best lawn service I've ever used. Professional and reliable.",
    author: "Sarah M. in Washington Park"
  },
  {
    quote: "Finally found a lawn service that actually shows up when they say they will.",
    author: "John D. in Highland"
  }
]

const submitQuote = async () => {
  try {
    isSubmitting.value = true
    submitError.value = ''
    submitSuccess.value = false

    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...quoteForm.value,
        type: 'Quote',
        message: 'New quote request from website'
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send quote request')
    }

    submitSuccess.value = true
    // Reset form
    quoteForm.value = {
      name: '',
      address: '',
      email: '',
      phone: ''
    }
    // Close dialog after 2 seconds
    setTimeout(() => {
      showQuoteDialog.value = false
      submitSuccess.value = false
    }, 2000)
  } catch (error) {
    console.error('Error submitting quote:', error)
    submitError.value = error.message || 'Failed to send quote request. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="app-container">
    <!-- Sticky Header -->
    <header class="sticky-header">
      <div class="logo">EcoLawns Denver</div>
      <Button label="Get Free Quote" severity="success" rounded raised @click="showQuoteDialog = true" />
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Get Your Weekends Back</h1>
        <h2>Professional Lawn Care in Denver from $40/visit</h2>
        <div class="hero-cta">
          <Button label="Get Your First Mow FREE" severity="success" size="large" raised @click="showQuoteDialog = true" />
          <div class="trust-badges">
            <span><i class="pi pi-star-fill"></i> 4.9/5 on Google (380+ reviews)</span>
            <span><i class="pi pi-users"></i> 2,000+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <h2>Our Services</h2>
      <div class="service-cards">
        <Card v-for="service in services" :key="service.title">
          <template #header>
            <img :src="service.image" :alt="service.title">
          </template>
          <template #title>{{ service.title }}</template>
          <template #content>
            <p>{{ service.description }}</p>
            <Button label="Learn More" text />
          </template>
        </Card>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <h2>Book in 60 Seconds</h2>
      <div class="steps">
        <div v-for="(step, index) in steps" :key="index" class="step">
          <div class="step-number">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Our Customers Say</h2>
      <Carousel :value="testimonials" :numVisible="1" :numScroll="1" :autoplayInterval="5000">
        <template #item="slotProps">
          <div class="testimonial-item">
            <p>"{{ slotProps.data.quote }}"</p>
            <span>- {{ slotProps.data.author }}</span>
          </div>
        </template>
      </Carousel>
    </section>

    <!-- Quote Dialog -->
    <Dialog v-model:visible="showQuoteDialog" modal header="Get Your Free Quote" :style="{ width: '90%', maxWidth: '500px' }">
      <div class="quote-form">
        <div class="form-field">
          <label>Name</label>
          <InputText v-model="quoteForm.name" placeholder="Your name" />
          <small v-if="quoteForm.name.length > 0 && quoteForm.name.length < 4" class="error-text">Name must be at least 4 characters</small>
        </div>
        <div class="form-field">
          <label>Address</label>
          <InputText v-model="quoteForm.address" placeholder="Service address" />
          <small v-if="quoteForm.address.length > 0 && quoteForm.address.length < 5" class="error-text">Address must be at least 5 characters</small>
        </div>
        <div class="form-field">
          <label>Email</label>
          <InputText v-model="quoteForm.email" placeholder="Your email" />
          <small v-if="quoteForm.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quoteForm.email)" class="error-text">Please enter a valid email address</small>
        </div>
        <div class="form-field">
          <label>Phone</label>
          <InputText v-model="quoteForm.phone" placeholder="Your phone" />
          <small v-if="quoteForm.phone.length > 0 && !/^\+?[\d\s-]{10,}$/.test(quoteForm.phone)" class="error-text">Please enter a valid phone number (at least 10 digits)</small>
        </div>
        <Button 
          label="Get My Free Quote" 
          severity="success" 
          raised 
          @click="submitQuote" 
          :disabled="!isFormValid || isSubmitting"
          :loading="isSubmitting"
        />
        <p v-if="submitError" class="error-text">{{ submitError }}</p>
        <p v-if="submitSuccess" class="success-text">Quote request sent successfully!</p>
        <p class="form-note">No credit card required.</p>
      </div>
    </Dialog>
  </div>
</template>

<style>
.app-container {
  max-width: 100%;
  overflow-x: hidden;
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.hero {
  min-height: 80vh;
  background: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)),
              url('https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--primary-800);
}

.hero h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--primary-600);
}

.hero-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.trust-badges {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.trust-badges span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-600);
}

.services, .how-it-works, .testimonials {
  padding: 4rem 2rem;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.step {
  text-align: center;
  padding: 2rem;
  background: var(--surface-card);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
}

.testimonial-item {
  text-align: center;
  padding: 2rem;
  background: var(--surface-card);
  border-radius: 8px;
  margin: 1rem;
}

.testimonial-item p {
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 1rem;
}

.quote-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-note {
  text-align: center;
  margin-top: 1rem;
  color: var(--text-color-secondary);
}

.error-text {
  color: var(--red-500);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.success-text {
  color: var(--green-500);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero h2 {
    font-size: 1.25rem;
  }

  .trust-badges {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
