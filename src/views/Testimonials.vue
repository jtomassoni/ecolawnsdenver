<template>
  <div class="testimonials-page">
    <h2>What Our Customers Say</h2>
    <Carousel :value="testimonials" :numVisible="1" :numScroll="1" :autoplayInterval="5000">
      <template #item="slotProps">
        <div class="testimonial-item">
          <p>"{{ slotProps.data.quote }}"</p>
          <span>- {{ slotProps.data.author }}</span>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.testimonials-page {
  height: 100%;
  padding: 2rem;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  color: #1B5E20;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.testimonial-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  margin: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-item p {
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 1rem;
  color: #333;
}

.testimonial-item span {
  color: #2E7D32;
  font-weight: 500;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .testimonial-item {
    padding: 1rem;
  }

  .testimonial-item p {
    font-size: 1rem;
  }

  .testimonial-item span {
    font-size: 0.875rem;
  }
}
</style> 