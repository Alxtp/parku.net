<template>
  <div>
    <UPageHero
      title="ParkU - Your Parking Companion"
      description="Discover, book, and manage parking spots effortlessly. ParkU brings smart parking to your fingertips with real-time availability and seamless booking."
      :links="[{
        label: 'Download Now',
        to: '/download',
        trailingIcon: 'i-lucide-download',
        size: 'xl'
      }, {
        label: 'Learn More',
        to: '/about',
        icon: 'i-lucide-info',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <div class="w-full mb-8">
      <img src="/img/hero_banner.png" alt="ParkU Hero Banner" class="w-full h-auto object-cover">
    </div>

    <UPageSection
      id="features"
      title="Why Choose ParkU?"
      description="Experience the future of parking with our innovative features designed to make finding and managing parking spots simple and efficient."
      :features="[{
        icon: 'i-lucide-map-pin',
        title: 'Interactive Map View',
        description: 'Locate free parking spots nearby with our real-time interactive map. See availability at a glance and navigate directly to your spot.'
      }, {
        icon: 'i-lucide-calendar-check',
        title: 'Easy Booking',
        description: 'Reserve parking spots in seconds. Choose your preferred time and duration, and pay securely through the app.'
      }, {
        icon: 'i-lucide-plus-circle',
        title: 'List Your Spots',
        description: 'Turn your unused parking space into extra income. List your spots easily and manage bookings with our user-friendly interface.'
      }, {
        icon: 'i-lucide-shield',
        title: 'Secure & Reliable',
        description: 'Your data and transactions are protected with top-tier security. Enjoy peace of mind with verified users and secure payments.'
      }, {
        icon: 'i-lucide-smartphone',
        title: 'Mobile-First Design',
        description: 'Optimized for mobile devices, ParkU works seamlessly on iOS and Android. Access all features on the go.'
      }, {
        icon: 'i-lucide-users',
        title: 'Community Driven',
        description: 'Join a growing community of drivers and spot owners. Share feedback and help improve parking in your area.'
      }]"
    />

    <UPageSection>
      <div class="text-center">
        <img src="/img/map_view.png" alt="ParkU Map View" class="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg">
        <p class="mt-4 text-muted">Discover available parking spots on our interactive map</p>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Ready to Revolutionize Your Parking Experience?"
        description="Download ParkU today and never worry about finding parking again. Join thousands of users who have simplified their daily commute."
        variant="subtle"
        :links="[{
          label: 'Download ParkU',
          to: '/download',
          trailingIcon: 'i-lucide-download',
          color: 'neutral'
        }, {
          label: 'Meet the Team',
          to: '/team',
          icon: 'i-lucide-users',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
