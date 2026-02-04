<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div>
    <UPageHero
      :title="$t('home.title')"
      :description="$t('home.description')"
      :links="[
        {
          label: $t('home.download'),
          to: localePath('download'),
          trailingIcon: 'i-lucide-download',
          size: 'xl',
        },
        {
          label: $t('home.info'),
          to: localePath('about'),
          icon: 'i-lucide-info',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
    />

    <div class="w-full mb-8">
      <img
        src="/img/hero_banner.png"
        :alt="$t('home.hero.alt')"
        class="w-full h-auto object-cover"
      />
    </div>

    <UPageSection
      id="features"
      :title="$t('home.features.title')"
      :description="$t('home.features.description')"
      :features="[
        {
          icon: 'i-lucide-map-pin',
          title: $t('home.features.items.map.title'),
          description: $t('home.features.items.map.description'),
        },
        {
          icon: 'i-lucide-calendar-check',
          title: $t('home.features.items.booking.title'),
          description: $t('home.features.items.booking.description'),
        },
        {
          icon: 'i-lucide-plus-circle',
          title: $t('home.features.items.list.title'),
          description: $t('home.features.items.list.description'),
        },
        {
          icon: 'i-lucide-shield',
          title: $t('home.features.items.secure.title'),
          description: $t('home.features.items.secure.description'),
        },
        {
          icon: 'i-lucide-smartphone',
          title: $t('home.features.items.mobile.title'),
          description: $t('home.features.items.mobile.description'),
        },
        {
          icon: 'i-lucide-users',
          title: $t('home.features.items.community.title'),
          description: $t('home.features.items.community.description'),
        },
      ]"
    />

    <UPageSection>
      <div class="text-center">
        <img
          src="/img/map_view.png"
          :alt="$t('home.mapView.alt')"
          class="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
        />
        <p class="mt-4 text-muted">{{ $t("home.mapView.caption") }}</p>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        :title="$t('home.cta.title')"
        :description="$t('home.cta.description')"
        variant="subtle"
        :links="[
          {
            label: $t('home.cta.download'),
            to: localePath('download'),
            trailingIcon: 'i-lucide-download',
            color: 'neutral',
          },
          {
            label: $t('home.cta.team'),
            to: localePath('team'),
            icon: 'i-lucide-users',
            color: 'neutral',
            variant: 'outline',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
