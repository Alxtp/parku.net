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
          <img src="/img/profiles/pb_anamaria_miskovic.png" alt="Anamaria Miskovic" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Anamaria Miskovic</h3>
          <p class="text-muted">Marketing Director</p>
          <p class="text-sm mt-2">Responsible for social media strategy and brand presence</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/pb_flavia_wenger.png" alt="Flavia Wenger" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Flavia Wenger</h3>
          <p class="text-muted">CEO & Founder</p>
          <p class="text-sm mt-2">Responsible for company vision, strategy, and leadership</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/pb_lea_kronig.png" alt="Lea Kronig" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Lea Kronig</h3>
          <p class="text-muted">Operations Manager</p>
          <p class="text-sm mt-2">Responsible for operations, key business contacts, and functional oversight</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/pb_melvin_steffen.png" alt="Melvin Steffen" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Melvin Steffen</h3>
          <p class="text-muted">Marketing Director</p>
          <p class="text-sm mt-2">Responsible for social media initiatives and strategic partnerships</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/pb_mina_jungen.png" alt="Mina Jungen" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Mina Jungen</h3>
          <p class="text-muted">Operations Manager</p>
          <p class="text-sm mt-2">Responsible for financial management and internal business process</p>
        </UCard>

        <UCard class="text-center">
          <img src="/img/profiles/pb_irina_wenger.png" alt="Irina Wenger" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
          <h3 class="text-lg font-semibold">Irina Wenger</h3>
          <p class="text-muted">Lead Developer</p>
          <p class="text-sm mt-2">Responsible for software development and technical architecture</p>
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
          to: '/contact',
          icon: 'i-lucide-mail'
        }]"
      />
    </UPageSection>
  </div>
</template>
