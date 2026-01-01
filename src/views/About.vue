<template>
  <div class="about-page">
    <div class="about-content">
      <!-- Hero Section -->
      <div class="hero-section">
        <h1>About EcoLawns Denver</h1>
        <p class="hero-subtitle">Denver's Premier Eco-Friendly Lawn Care Service</p>
        <p class="hero-description">As Denver's premier eco-friendly lawn care service, we're gearing up for another amazing growing season starting in April. But we're not just a seasonal business—we're here year-round to keep your property looking its best.</p>
      </div>

      <!-- Why Choose Us Section -->
      <div class="about-section">
        <div class="section-header">
          <h2>Why Denver Homeowners Trust EcoLawns</h2>
          <p class="section-intro">We combine local expertise, professional service, and eco-friendly practices to deliver exceptional results for your lawn.</p>
        </div>
        
        <div class="trust-grid">
          <div class="trust-item">
            <FontAwesomeIcon icon="map-marker-alt" class="trust-icon" />
            <h3>Local Denver Expertise</h3>
            <p>We understand Denver's unique climate challenges—from altitude effects to water restrictions. Our team knows which grass types thrive here and how to maintain beautiful lawns while conserving water.</p>
          </div>
          <div class="trust-item">
            <FontAwesomeIcon icon="users" class="trust-icon" />
            <h3>Professional & Reliable</h3>
            <p>Our trained team uses professional-grade equipment and follows consistent schedules. You'll receive reminders before each visit, and we always clean up after ourselves.</p>
          </div>
          <div class="trust-item">
            <FontAwesomeIcon icon="shield-alt" class="trust-icon" />
            <h3>Licensed & Insured</h3>
            <p>Fully licensed and insured for your peace of mind. We're committed to operating with the highest standards of professionalism and safety.</p>
          </div>
          <div class="trust-item">
            <FontAwesomeIcon icon="leaf" class="trust-icon" />
            <h3>Eco-Friendly Methods</h3>
            <p>We use sustainable practices that comply with Denver's water conservation guidelines. Our methods promote healthy root systems and drought resistance, reducing your water usage while maintaining a beautiful lawn.</p>
          </div>
          <div class="trust-item">
            <FontAwesomeIcon icon="dollar-sign" class="trust-icon" />
            <h3>Transparent Pricing</h3>
            <p>No hidden fees or surprise charges. Our instant quote calculator shows you exactly what you'll pay. Choose between seasonal packages (save 25%) or pay-per-visit options.</p>
          </div>
          <div class="trust-item">
            <FontAwesomeIcon icon="award" class="trust-icon" />
            <h3>Customer Satisfaction</h3>
            <p>We stand behind our work. If you're not happy with a service, we'll make it right. Our goal is to build long-term relationships with Denver homeowners.</p>
          </div>
        </div>
      </div>

      <!-- Year-Round Services Section -->
      <div class="about-section">
        <div class="section-header">
          <h2>Year-Round Service for Denver Homeowners</h2>
          <p class="section-intro">We're not just a seasonal business. From winter snow removal to spring lawn preparation, we're here all year to keep your property looking its best.</p>
        </div>
        <div class="timing-content">
          <div class="timing-card current">
            <FontAwesomeIcon icon="snowflake" class="timing-icon" />
            <h3>Available Now: Snow Removal</h3>
            <p>Don't let winter weather slow you down. Our professional snow removal service keeps your property safe and accessible all season long. We clear driveways, walkways, and sidewalks with reliable, prompt service.</p>
            <ul>
              <li><FontAwesomeIcon icon="check-circle" class="list-icon" /> Residential driveway and walkway clearing</li>
              <li><FontAwesomeIcon icon="check-circle" class="list-icon" /> Prompt response to snowfall</li>
              <li><FontAwesomeIcon icon="check-circle" class="list-icon" /> Professional equipment and experienced team</li>
              <li><FontAwesomeIcon icon="check-circle" class="list-icon" /> Available throughout winter months</li>
            </ul>
          </div>
          <div class="timing-card upcoming">
            <FontAwesomeIcon icon="seedling" class="timing-icon" />
            <h3>Coming Soon: Lawn Care Season</h3>
            <p>Lawn care season in Denver typically begins in April when grass starts actively growing. Booking early ensures you get prime scheduling and includes our comprehensive spring cleanup service at no extra charge.</p>
            <ul>
              <li><FontAwesomeIcon icon="check-circle" class="list-icon" /> Season starts: Early April 2024</li>
              <li><FontAwesomeIcon icon="check-circle" class="list-icon" /> Weekly or bi-weekly mowing options</li>
              <li><FontAwesomeIcon icon="check-circle" class="list-icon" /> Spring cleanup and aeration included</li>
              <li><FontAwesomeIcon icon="check-circle" class="list-icon" /> 14 visits per season (April–October)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Denver Expertise Section -->
      <div class="about-section">
        <div class="section-header">
          <h2>Denver-Specific Lawn Care Expertise</h2>
          <p class="section-intro">Denver's unique climate presents specific challenges for lawn care. At EcoLawns Denver, we understand the local conditions and how to work with them.</p>
        </div>
        <div class="expertise-grid">
          <div class="expertise-item">
            <FontAwesomeIcon icon="map-marker-alt" class="expertise-icon" />
            <h3>Altitude Effects</h3>
            <p>Denver's mile-high elevation affects grass growth patterns and requires specialized care techniques.</p>
          </div>
          <div class="expertise-item">
            <FontAwesomeIcon icon="droplet" class="expertise-icon" />
            <h3>Water Conservation</h3>
            <p>We comply with Denver's water restrictions and use methods that reduce water usage while maintaining beautiful lawns.</p>
          </div>
          <div class="expertise-item">
            <FontAwesomeIcon icon="cloud-sun" class="expertise-icon" />
            <h3>Climate Variability</h3>
            <p>Colorado's temperature swings and dry climate require adaptive lawn care strategies.</p>
          </div>
          <div class="expertise-item">
            <FontAwesomeIcon icon="seedling" class="expertise-icon" />
            <h3>Grass Types</h3>
            <p>We know which grass varieties thrive in Denver and how to care for them properly.</p>
          </div>
          <div class="expertise-item">
            <FontAwesomeIcon icon="clock" class="expertise-icon" />
            <h3>Seasonal Timing</h3>
            <p>Our team understands when to start and stop services based on Denver's growing season.</p>
          </div>
        </div>
      </div>


      <div class="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Get your instant quote today and book your spring lawn care service. Limited availability for early bookings!</p>
        <button class="cta-button" @click="goToQuote">Get Your Free Quote</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToQuote = () => {
  router.push('/').then(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('emphasize-quote-form'))
    }, 350)
  })
}
</script>

<style scoped>
.about-page {
  width: 100%;
  background: #f5f5f5;
  min-height: 100%;
  padding: 2rem 1rem;
  overflow-y: auto;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  padding-bottom: 3rem;
  border-bottom: 2px solid #E8F5E9;
}

h1 {
  font-size: 2.5rem;
  color: #1B5E20;
  margin-bottom: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #2E7D32;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
}

/* Section Styling */
.about-section {
  margin-bottom: 4rem;
}

.about-section:last-of-type {
  margin-bottom: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

h2 {
  font-size: 2rem;
  color: #1B5E20;
  margin-bottom: 1rem;
  font-weight: 600;
}

.section-intro {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.trust-item {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #2E7D32;
}

.trust-icon {
  font-size: 2rem;
  color: #2E7D32;
  margin-bottom: 1rem;
  display: block;
}

.trust-item h3 {
  font-size: 1.3rem;
  color: #1B5E20;
  margin-bottom: 1rem;
  font-weight: 600;
}

.trust-item p {
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
}

.timing-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.timing-card {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #C8E6C9;
}

.timing-card.current {
  border-color: #2E7D32;
  background: #E8F5E9;
}

.timing-card.upcoming {
  border-color: #43A047;
  background: #F1F8E9;
}

.timing-icon {
  font-size: 2.5rem;
  color: #2E7D32;
  margin-bottom: 1rem;
  display: block;
}

.timing-card h3 {
  font-size: 1.5rem;
  color: #1B5E20;
  margin-bottom: 1rem;
  font-weight: 600;
}

.timing-card p {
  font-size: 1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.timing-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.timing-card li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.list-icon {
  color: #2E7D32;
  font-size: 0.9rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

/* Expertise Grid */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.expertise-item {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e8e8e8;
  transition: all 0.2s ease;
}

.expertise-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: #C8E6C9;
}

.expertise-icon {
  font-size: 2.5rem;
  color: #2E7D32;
  margin-bottom: 1rem;
  display: block;
}

.expertise-item h3 {
  font-size: 1.2rem;
  color: #1B5E20;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.expertise-item p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.cta-section {
  background: #E8F5E9;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 3rem;
  border: 2px solid #2E7D32;
}

.cta-section h2 {
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.cta-button {
  background: #2E7D32;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(46,125,50,0.3);
}

.cta-button:hover {
  background: #1B5E20;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(46,125,50,0.4);
}

@media (max-width: 768px) {
  .about-content {
    padding: 2rem 1rem;
  }

  .hero-section {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .section-intro {
    font-size: 1rem;
  }

  .trust-grid,
  .timing-content,
  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .trust-item,
  .timing-card,
  .expertise-item {
    padding: 1.5rem;
  }

  .cta-section {
    padding: 2rem 1rem;
  }
}

@media (max-width: 480px) {
  .about-content {
    padding: 1.5rem 1rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>

