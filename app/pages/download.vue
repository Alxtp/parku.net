<script setup lang="ts">
const localePath = useLocalePath();

const platforms = [
  {
    id: "ios",
    icon: "i-simple-icons-appstore",
  },
  {
    id: "android",
    icon: "i-simple-icons-googleplay",
  },
];
</script>

<template>
  <div>
    <UPageHero
      :title="$t('download.title')"
      :description="$t('download.description')"
    >
      <div class="text-center">
        <img
          src="/img/download.png"
          :alt="$t('download.hero.alt')"
          class="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
        />
      </div>
    </UPageHero>
    <UPageSection
      :title="$t('download.section.title')"
      :description="$t('download.section.description')"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UCard
          v-for="platform in platforms"
          :key="platform.id"
          class="text-center"
        >
          <h3 class="text-xl font-semibold mb-4">
            {{ $t(`download.platforms.${platform.id}.name`) }}
          </h3>
          <p class="text-muted mb-6">
            {{ $t(`download.platforms.${platform.id}.description`) }}
          </p>
          <UButton :icon="platform.icon" size="lg" color="neutral">
            {{ $t(`download.platforms.${platform.id}.button`) }}
          </UButton>
        </UCard>
      </div>
    </UPageSection>
    <UPageSection>
      <UPageCTA
        :title="$t('download.cta.title')"
        :description="$t('download.cta.description')"
        variant="subtle"
        :links="[
          {
            label: $t('download.cta.aboutButton'),
            to: localePath('about'),
            icon: 'i-lucide-info',
          },
          {
            label: $t('download.cta.teamButton'),
            to: localePath('team'),
            icon: 'i-lucide-users',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
