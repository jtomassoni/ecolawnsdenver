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
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleQuoteClick = () => {
  router.push('/')
}

const services = [
  {
    title: 'Weekly Lawn Mowing',
    description: `Enjoy a lush, healthy lawn all season long with our weekly mowing service. Our experienced crew uses quiet, battery-powered mowers to deliver a precise, even cut every visit. We trim edges, blow away clippings, and ensure your sidewalks and driveways are spotless. Our mowing schedule is tailored to Denver's unique climate, and we adjust our techniques to promote strong root growth and drought resistance. You'll love the crisp stripes and the time you get back every weekend!`,
    image: 'https://picsum.photos/400/200?lawn'
  },
  {
    title: 'Spring Cleanup & Aeration',
    description: `Kickstart your lawn's health each spring with our thorough cleanup and aeration package. We remove leaves, branches, and winter debris, then dethatch to clear out old grass and allow new growth. Our core aeration process relieves soil compaction, improves water absorption, and encourages deep root development. We finish with overseeding to fill in bare spots, giving you a thicker, greener lawn that's ready to thrive as temperatures rise.`,
    image: 'https://picsum.photos/400/200?spring'
  },
  {
    title: 'Fall Cleanup & Winter Prep',
    description: `Prepare your yard for the cold months ahead with our fall cleanup and winterization service. We clear away fallen leaves and debris to prevent mold and pests, then apply a slow-release fertilizer to nourish your grass through winter. Our team trims perennials, cuts back ornamental grasses, and ensures your lawn is tidy and protected. With our expert winter prep, your lawn will bounce back healthier and greener when spring arrives.`,
    image: 'https://picsum.photos/400/200?fall'
  }
]
</script>

<style scoped>
.services-page {
  height: 100%;
  width: 100%;
  background: black;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1vh;
  overflow: hidden;
}

.services-page::before {
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

.services-content {
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  height: calc(100% - 40px);
  overflow: hidden;
}

h1 {
  font-size: 2rem;
  color: #1B5E20;
  margin-bottom: 0.75rem;
  text-align: center;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  overflow: hidden;
}

.service-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}

.service-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.service-card h2 {
  font-size: 1.1rem;
  color: #2E7D32;
  margin-bottom: 0.5rem;
  padding: 0.75rem 0.75rem 0;
}

.service-card p {
  font-size: 0.9rem;
  color: #666;
  padding: 0 0.75rem;
  margin-bottom: 0.75rem;
  flex: 1;
  overflow: hidden;
}

.service-card button {
  margin: 0 0.75rem 0.75rem;
}
</style> 