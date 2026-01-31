<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div>
    <UPageHero
      :title="$t('about.title')"
      :description="$t('about.description')"
    >
      <div class="text-center">
        <img
          src="/img/feature_highlight.png"
          :alt="$t('about.hero.alt')"
          class="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
        />
      </div>
    </UPageHero>
    <UPageSection
      :title="$t('about.mission.title')"
      :description="$t('about.mission.description')"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">
            {{ $t("about.mission.problem.title") }}
          </h3>
          <p class="text-muted mb-4">
            {{ $t("about.mission.problem.description") }}
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">
            {{ $t("about.mission.solution.title") }}
          </h3>
          <p class="text-muted mb-4">
            {{ $t("about.mission.solution.description") }}
          </p>
        </div>
      </div>
    </UPageSection>
    <UPageSection
      :title="$t('about.howItWorks.title')"
      :description="$t('about.howItWorks.description')"
      :features="[
        {
          icon: 'i-lucide-search',
          title: $t('about.howItWorks.steps.find.title'),
          description: $t('about.howItWorks.steps.find.description'),
        },
        {
          icon: 'i-lucide-calendar',
          title: $t('about.howItWorks.steps.book.title'),
          description: $t('about.howItWorks.steps.book.description'),
        },
        {
          icon: 'i-lucide-car',
          title: $t('about.howItWorks.steps.park.title'),
          description: $t('about.howItWorks.steps.park.description'),
        },
      ]"
    />
    <UPageSection>
      <UPageCTA
        :title="$t('about.cta.title')"
        :description="$t('about.cta.description')"
        :links="[
          {
            label: $t('about.cta.downloadButton'),
            to: localePath('download'),
            trailingIcon: 'i-lucide-download',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
