<template>
  <div>
    <UPageHero
      title="Download ParkU"
      description="Get the app and start parking smarter today. Available on iOS and Android."
    >
        <div class="text-center">
            <img src="/img/download.png" alt="Download ParkU" class="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg">
        </div>
    </UPageHero>

    <UPageSection
      title="Choose Your Platform"
      description="ParkU is available for download on all major mobile platforms."
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UCard class="text-center">
          <h3 class="text-xl font-semibold mb-4">iOS</h3>
          <p class="text-muted mb-6">Download from the App Store for iPhone and iPad.</p>
          <UButton
            to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            icon="i-simple-icons-appstore"
            size="lg"
            color="neutral"
          >
            Download on App Store
          </UButton>
        </UCard>

        <UCard class="text-center">
          <h3 class="text-xl font-semibold mb-4">Android</h3>
          <p class="text-muted mb-6">Get it on Google Play for Android devices.</p>
          <UButton
            to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            icon="i-simple-icons-googleplay"
            size="lg"
            color="neutral"
          >
            Get on Google Play
          </UButton>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Not Ready to Download Yet?"
        description="Learn more about ParkU and how it can change your parking experience."
        variant="subtle"
        :links="[{
          label: 'About ParkU',
          to: '/about',
          icon: 'i-lucide-info'
        }, {
          label: 'Meet the Team',
          to: '/team',
          icon: 'i-lucide-users'
        }]"
      />
    </UPageSection>
  </div>
</template>
