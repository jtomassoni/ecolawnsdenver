<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-emerald-50">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Beautiful lawn" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="max-w-3xl">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Get Your Weekends Back
          </h1>
          <p class="text-xl text-white/90 mb-8">
            Professional lawn care starting at $40/visit. First mow FREE.
          </p>
          
          <!-- Limited Time Offer -->
          <div class="inline-block bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            Limited Time: Save 20% on Spring Cleanup
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              @click="handleFreeMowClick"
              :disabled="isSubmitting"
              class="group relative px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Sending...' : 'Get Your First Mow Free' }}
              <span class="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            <a 
              href="#quote-form"
              class="group relative px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-50 hover:shadow-lg hover:shadow-emerald-100 hover:-translate-y-0.5"
            >
              See How It Works
              <span class="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-50/20 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          </div>

          <!-- Social Proof -->
          <div class="mt-12 flex items-center gap-8">
            <div class="flex -space-x-2">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Happy customer" class="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Happy customer" class="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Happy customer" class="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div class="text-white">
              <div class="flex items-center gap-1">
                <span class="text-yellow-400">★★★★★</span>
                <span class="font-semibold">4.9/5</span>
              </div>
              <p class="text-sm text-white/80">2,000+ happy customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works -->
    <div class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Enter Your Address</h3>
            <p class="text-gray-600">Tell us where you need lawn care</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Get Your Quote</h3>
            <p class="text-gray-600">We'll provide a custom quote in 60 seconds</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Schedule Service</h3>
            <p class="text-gray-600">Choose your preferred service time</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Instant Quote Form -->
    <div id="quote-form" class="relative max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
        Get Your First Mow Free
      </div>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Your Address</label>
          <input 
            type="text" 
            id="address" 
            v-model="formData.address"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            :class="{ 'border-red-500': formErrors.address }"
            placeholder="Enter your address"
          />
          <p v-if="formErrors.address" class="mt-1 text-sm text-red-600">{{ formErrors.address }}</p>
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            :class="{ 'border-red-500': formErrors.email }"
            placeholder="Enter your email"
          />
          <p v-if="formErrors.email" class="mt-1 text-sm text-red-600">{{ formErrors.email }}</p>
        </div>
        
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="formData.phone"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            :class="{ 'border-red-500': formErrors.phone }"
            placeholder="Enter your phone number"
          />
          <p v-if="formErrors.phone" class="mt-1 text-sm text-red-600">{{ formErrors.phone }}</p>
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
          <textarea 
            id="message" 
            v-model="formData.message"
            rows="3" 
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            :class="{ 'border-red-500': formErrors.message }"
            placeholder="Any specific requirements or questions?"
          ></textarea>
          <p v-if="formErrors.message" class="mt-1 text-sm text-red-600">{{ formErrors.message }}</p>
        </div>
        
        <button 
          type="submit"
          :disabled="isSubmitting || !isQuoteFormValid"
          class="w-full px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'Sending...' : 'Get Your Free First Mow' }}
        </button>
        
        <p class="text-sm text-gray-500 text-center">
          No credit card required.
        </p>
      </form>
      
      <!-- Success Message -->
      <div v-if="submitSuccess" class="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
        Thank you for your interest! We'll be in touch shortly to schedule your free first mow.
      </div>
      
      <!-- Error Message -->
      <div v-if="submitError" class="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
        {{ submitError }}
      </div>
    </div>

    <!-- Free Mow Modal -->
    <div v-if="showFreeMowModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button 
          @click="showFreeMowModal = false"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 class="text-2xl font-bold text-gray-900 mb-6">Get Your First Mow Free</h2>
        
        <form @submit.prevent="handleFreeMowSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="freeMowFormData.name"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              :class="{ 'border-red-500': freeMowFormErrors.name }"
              placeholder="Enter your name"
            />
            <p v-if="freeMowFormErrors.name" class="mt-1 text-sm text-red-600">{{ freeMowFormErrors.name }}</p>
          </div>

          <div>
            <label for="free-mow-address" class="block text-sm font-medium text-gray-700 mb-1">Your Address</label>
            <input 
              type="text" 
              id="free-mow-address" 
              v-model="freeMowFormData.address"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              :class="{ 'border-red-500': freeMowFormErrors.address }"
              placeholder="Enter your address"
            />
            <p v-if="freeMowFormErrors.address" class="mt-1 text-sm text-red-600">{{ freeMowFormErrors.address }}</p>
          </div>
          
          <div>
            <label for="free-mow-email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              id="free-mow-email" 
              v-model="freeMowFormData.email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              :class="{ 'border-red-500': freeMowFormErrors.email }"
              placeholder="Enter your email"
            />
            <p v-if="freeMowFormErrors.email" class="mt-1 text-sm text-red-600">{{ freeMowFormErrors.email }}</p>
          </div>
          
          <div>
            <label for="free-mow-phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="free-mow-phone" 
              v-model="freeMowFormData.phone"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              :class="{ 'border-red-500': freeMowFormErrors.phone }"
              placeholder="Enter your phone number"
            />
            <p v-if="freeMowFormErrors.phone" class="mt-1 text-sm text-red-600">{{ freeMowFormErrors.phone }}</p>
          </div>
          
          <button 
            type="submit"
            :disabled="isSubmitting || !isFreeMowFormValid"
            class="w-full px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Sending...' : 'Get Your Free First Mow' }}
          </button>
          
          <p class="text-sm text-gray-500 text-center">
            No credit card required.
          </p>
        </form>
        
        <!-- Success Message -->
        <div v-if="submitSuccess" class="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
          Thank you for your interest! We'll be in touch shortly to schedule your free first mow.
        </div>
        
        <!-- Error Message -->
        <div v-if="submitError" class="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
          {{ submitError }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const formData = ref({
  address: '',
  email: '',
  phone: '',
  message: ''
})

const formErrors = ref({
  address: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const showFreeMowModal = ref(false)
const freeMowFormData = ref({
  address: '',
  email: '',
  phone: '',
  name: ''
})

const freeMowFormErrors = ref({
  address: '',
  email: '',
  phone: '',
  name: ''
})

// Computed properties for form validation
const isQuoteFormValid = computed(() => {
  const { address, email, phone } = formData.value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  return (
    address?.trim() &&
    email?.trim() &&
    emailRegex.test(email) &&
    phone?.trim()
  )
})

const isFreeMowFormValid = computed(() => {
  const { name, address, email, phone } = freeMowFormData.value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  return (
    name?.trim() &&
    address?.trim() &&
    email?.trim() &&
    emailRegex.test(email) &&
    phone?.trim()
  )
})

const handleSubmit = async (event) => {
  event.preventDefault()
  
  // Reset errors
  formErrors.value = {
    address: '',
    email: '',
    phone: '',
    message: ''
  }

  // Check if any required fields are empty
  if (!formData.value.address || !formData.value.address.trim()) {
    formErrors.value.address = 'Address is required'
    return
  }

  if (!formData.value.email || !formData.value.email.trim()) {
    formErrors.value.email = 'Email is required'
    return
  }

  if (!formData.value.phone || !formData.value.phone.trim()) {
    formErrors.value.phone = 'Phone number is required'
    return
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    formErrors.value.email = 'Please enter a valid email address'
    return
  }

  isSubmitting.value = true
  submitError.value = ''
  
  try {
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData.value,
        name: 'Website Visitor',
        type: 'Quote Request'
      }),
    })
    
    const data = await response.json()
    
    if (data.success) {
      submitSuccess.value = true
      formData.value = {
        address: '',
        email: '',
        phone: '',
        message: ''
      }
    } else {
      throw new Error(data.message || 'Failed to send request')
    }
  } catch (error) {
    submitError.value = error.message || 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

const handleFreeMowSubmit = async (event) => {
  event.preventDefault()
  
  // Reset errors
  freeMowFormErrors.value = {
    name: '',
    address: '',
    email: '',
    phone: ''
  }

  // Check if any required fields are empty
  if (!freeMowFormData.value.name || !freeMowFormData.value.name.trim()) {
    freeMowFormErrors.value.name = 'Name is required'
    return
  }

  if (!freeMowFormData.value.address || !freeMowFormData.value.address.trim()) {
    freeMowFormErrors.value.address = 'Address is required'
    return
  }

  if (!freeMowFormData.value.email || !freeMowFormData.value.email.trim()) {
    freeMowFormErrors.value.email = 'Email is required'
    return
  }

  if (!freeMowFormData.value.phone || !freeMowFormData.value.phone.trim()) {
    freeMowFormErrors.value.phone = 'Phone number is required'
    return
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(freeMowFormData.value.email)) {
    freeMowFormErrors.value.email = 'Please enter a valid email address'
    return
  }

  isSubmitting.value = true
  submitError.value = ''
  
  try {
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...freeMowFormData.value,
        message: 'Interested in free first mow',
        type: 'Free First Mow'
      }),
    })
    
    const data = await response.json()
    
    if (data.success) {
      submitSuccess.value = true
      showFreeMowModal.value = false
      freeMowFormData.value = {
        address: '',
        email: '',
        phone: '',
        name: ''
      }
    } else {
      throw new Error(data.message || 'Failed to send request')
    }
  } catch (error) {
    submitError.value = error.message || 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

const handleFreeMowClick = () => {
  showFreeMowModal.value = true
}

// Remove all the individual validation functions since we're handling validation in the submit handlers
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 