<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { locale, locales, setLocale } = useI18n();
const lang = computed(() => locale.value);
const localePath = useLocalePath();
const route = useRoute();

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang,
  },
});

useSeoMeta({
  title: $t("home.title"),
  description: $t("home.description"),
  ogTitle: $t("home.title"),
  ogDescription: $t("home.description"),
});

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: $t("nav.about"),
    to: localePath("about"),
    active: route.path.endsWith("/about"),
  },
  {
    label: $t("nav.team"),
    to: localePath("team"),
    active: route.path.endsWith("/team"),
  },
  {
    label: $t("nav.contact"),
    to: localePath("contact"),
    active: route.path.endsWith("/contact"),
  },
]);
</script>

<template>
  <UApp :locale="locales[locale]">
    <UHeader>
      <template #left>
        <NuxtLink :to="localePath('/')">
          <img class="w-auto h-12 shrink-0" src="/img/logo.png" alt="Logo" />
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <ULocaleSelect
          :model-value="locale"
          :locales="Object.values(locales)"
          variant="ghost"
          :icon="false"
          @update:model-value="setLocale($event)"
        />

        <UColorModeButton />

        <UButton
          :to="localePath('download')"
          icon="i-lucide-download"
          :label="$t('nav.download')"
          color="neutral"
          variant="ghost"
        />
      </template>

      <template #body>
        <UNavigationMenu orientation="vertical" :items="items" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          {{ $t("footer") }} {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/Alxtp/parku.net"
          target="_blank"
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
