<template>
  <div class="about-page">
    <div class="about-content">
      <!-- Hero Section -->
      <div class="hero-section">
        <h1>About EcoLawns Denver</h1>
        <p class="hero-description">We're a local lawn care service serving Denver homeowners. We mow lawns, handle seasonal cleanups, and clear snow in the winter. Simple, reliable, and straightforward.</p>
      </div>

      <!-- What We Do & Why Us Combined -->
      <div class="main-content-grid">
        <div class="content-column">
          <h2>What We Do</h2>
          <div class="services-list">
            <div class="service-item">
              <FontAwesomeIcon icon="seedling" class="service-icon" />
              <div>
                <h3>Lawn Mowing</h3>
                <p>Weekly or bi-weekly mowing April–October.</p>
              </div>
            </div>
            <div class="service-item">
              <FontAwesomeIcon icon="snowflake" class="service-icon" />
              <div>
                <h3>Snow Removal</h3>
                <p>Driveway and walkway clearing in winter.</p>
              </div>
            </div>
            <div class="service-item">
              <FontAwesomeIcon icon="leaf" class="service-icon" />
              <div>
                <h3>Seasonal Cleanup</h3>
                <p>Spring and fall cleanup services.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-column">
          <h2>Why Choose Us</h2>
          <div class="why-grid">
            <div class="why-item">
              <FontAwesomeIcon icon="map-marker-alt" class="why-icon" />
              <h3>Local to Denver</h3>
              <p>We know Denver's climate and water restrictions.</p>
            </div>
            <div class="why-item">
              <FontAwesomeIcon icon="dollar-sign" class="why-icon" />
              <h3>Transparent Pricing</h3>
              <p>See your price upfront, no surprises.</p>
            </div>
            <div class="why-item">
              <FontAwesomeIcon icon="shield-alt" class="why-icon" />
              <h3>Licensed & Insured</h3>
              <p>Fully licensed and insured.</p>
            </div>
            <div class="why-item">
              <FontAwesomeIcon icon="users" class="why-icon" />
              <h3>Reliable Service</h3>
              <p>We show up on schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-page {
  width: 100%;
  background: #f5f5f5;
  min-height: 100%;
  padding: 1rem;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 1.5rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #E8F5E9;
}

h1 {
  font-size: 2rem;
  color: #1B5E20;
  margin-bottom: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
}

/* Main Content Grid */
.main-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.content-column {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 1.5rem;
  color: #1B5E20;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: left;
}

/* Services List */
.services-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.service-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.75rem;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 3px solid #2E7D32;
}

.service-icon {
  font-size: 1.25rem;
  color: #2E7D32;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.service-item h3 {
  font-size: 1rem;
  color: #1B5E20;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.service-item p {
  font-size: 0.875rem;
  color: #555;
  line-height: 1.4;
  margin: 0;
}

/* Why Grid */
.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.why-item {
  background: #f9f9f9;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e8e8e8;
  transition: all 0.2s ease;
}

.why-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-color: #C8E6C9;
}

.why-icon {
  font-size: 1.25rem;
  color: #2E7D32;
  margin-bottom: 0.5rem;
  display: block;
}

.why-item h3 {
  font-size: 0.95rem;
  color: #1B5E20;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.why-item p {
  font-size: 0.8rem;
  color: #555;
  line-height: 1.4;
  margin: 0;
}


@media (max-width: 768px) {
  .about-content {
    padding: 1.25rem 1rem;
  }

  .hero-section {
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .main-content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 0.75rem;
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .services-list {
    gap: 0.625rem;
  }

  .service-item {
    padding: 0.625rem;
  }

  .why-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.625rem;
  }

  .why-item {
    padding: 0.625rem;
  }
}

@media (max-width: 480px) {
  .about-content {
    padding: 1rem 0.75rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }
}
</style>

