<script setup lang="ts">
const localePath = useLocalePath();

const teamMembers = [
  {
    id: "anamaria",
    image: "/img/profiles/pb_anamaria_miskovic.png",
  },
  {
    id: "flavia",
    image: "/img/profiles/pb_flavia_wenger.png",
  },
  {
    id: "lea",
    image: "/img/profiles/pb_lea_kronig.png",
  },
  {
    id: "melvin",
    image: "/img/profiles/pb_melvin_steffen.png",
  },
  {
    id: "mina",
    image: "/img/profiles/pb_mina_jungen.png",
  },
  {
    id: "irina",
    image: "/img/profiles/pb_irina_wenger.png",
  },
];
</script>

<template>
  <div>
    <UPageHero
      :title="$t('team.title')"
      :description="$t('team.description')"
    />
    <UPageSection
      :title="$t('team.section.title')"
      :description="$t('team.section.description')"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="member in teamMembers"
          :key="member.id"
          class="text-center"
        >
          <img
            :src="member.image"
            :alt="$t(`team.members.${member.id}.name`)"
            class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 class="text-lg font-semibold">
            {{ $t(`team.members.${member.id}.name`) }}
          </h3>
          <p class="text-muted">{{ $t(`team.members.${member.id}.role`) }}</p>
          <p class="text-sm mt-2">
            {{ $t(`team.members.${member.id}.responsibility`) }}
          </p>
        </UCard>
      </div>
    </UPageSection>
    <UPageSection>
      <UPageCTA
        :title="$t('team.cta.title')"
        :description="$t('team.cta.description')"
        variant="subtle"
        :links="[
          {
            label: $t('team.cta.contactButton'),
            to: localePath('contact'),
            icon: 'i-lucide-mail',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
