<template>
  <div>

    <UPageSection
      title="Get in Touch"
      description="We'd love to hear from you! Send us a mail and we'll get back to you shortly"
    >
      <div class="max-w-2xl mx-auto text-center">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold mb-3">Email Us</h3>
          <a href="mailto:info.parku@gmx.ch" class="text-xl text-primary-600 dark:text-primary-400 hover:underline font-medium">
            info.parku@gmx.ch
          </a>
          <p class="text-muted mt-4">
            Whether you have a question about features, need assistance, or want to provide feedback, our team is ready to help.
          </p>
        </div>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Ready to Start Parking Smarter?"
        description="Join thousands of drivers who have already simplified their parking experience."
        :links="[{
          label: 'Download the App',
          to: '/download',
          trailingIcon: 'i-lucide-download'
        }]"
      />
    </UPageSection>
  </div>
</template>