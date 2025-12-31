<template>
  <div>
    <UPageHero
      title="Meet Our Team"
      description="The passionate individuals behind ParkU, dedicated to transforming urban parking."
    />

    <UPageSection
      title="Our Team"
      description="Get to know the people driving ParkU forward."
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard class="text-center">
          <img src="/img/profiles/profile_Ashoka_Tano.jpg" alt="Ashoka Tano" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Ashoka Tano</h3>
          <p class="text-muted">CEO & Founder</p>
          <p class="text-sm mt-2">Visionary leader passionate about solving urban mobility challenges.</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/profile_Boss_Nass_Green.jpg" alt="Boss Nass Green" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Boss Nass Green</h3>
          <p class="text-muted">COO</p>
          <p class="text-sm mt-2">Expert in operations, ensuring smooth day-to-day management.</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/profile_Droid.jpg" alt="Droid" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Droid</h3>
          <p class="text-muted">Lead Developer</p>
          <p class="text-sm mt-2">Tech wizard building the robust platform that powers ParkU.</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/profile_Jar_Jar_Binks.jpg" alt="Jar Jar Binks" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Jar Jar Binks</h3>
          <p class="text-muted">Marketing Director</p>
          <p class="text-sm mt-2">Creative mind spreading the word about ParkU worldwide.</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/profile_pilot.jpg" alt="Pilot" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Pilot</h3>
          <p class="text-muted">Operations Manager</p>
          <p class="text-sm mt-2">Ensures everything runs like clockwork in our operations.</p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Want to Join Our Team?"
        description="We're always looking for talented individuals to help us innovate in the parking space."
        variant="subtle"
        :links="[{
          label: 'Contact Us',
          to: '/about',
          icon: 'i-lucide-mail'
        }]"
      />
    </UPageSection>
  </div>
</template>