<template>
  <div>
    <UPageHero
      title="About ParkU"
      description="ParkU is revolutionizing urban parking by connecting drivers with available parking spots through a seamless, technology-driven platform."
    >
        <div class="text-center">
            <img src="/img/feature_highlight.png" alt="ParkU Feature Highlight" class="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg">
        </div>
    </UPageHero>

    <UPageSection
      title="Our Mission"
      description="To eliminate the stress of finding parking and maximize the utilization of urban parking spaces."
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">The Problem</h3>
          <p class="text-muted mb-4">
            In busy cities, finding parking can be frustrating and time-consuming. Drivers waste valuable time circling blocks, while parking owners leave spots unused.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Our Solution</h3>
          <p class="text-muted mb-4">
            ParkU bridges the gap by allowing spot owners to list their spaces and drivers to book them instantly via our intuitive app.
          </p>
        </div>
      </div>
    </UPageSection>

    <UPageSection
      title="How ParkU Works"
      description="Simple steps to smarter parking."
      :features="[{
        icon: 'i-lucide-search',
        title: 'Find Spots',
        description: 'Use our interactive map to locate available parking spots near your destination.'
      }, {
        icon: 'i-lucide-calendar',
        title: 'Book Instantly',
        description: 'Reserve your spot with just a few taps. Choose your preferred time and duration.'
      }, {
        icon: 'i-lucide-car',
        title: 'Park & Go',
        description: 'Arrive at your reserved spot and park confidently. No more guessing or circling.'
      }]"
    />

    <UPageSection>
      <UPageCTA
        title="Join the ParkU Community"
        description="Download the app today and experience hassle-free parking."
        :links="[{
          label: 'Download Now',
          to: '/download',
          trailingIcon: 'i-lucide-download'
        }]"
      />
    </UPageSection>
  </div>
</template>