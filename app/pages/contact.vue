<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const { $csrfFetch } = useNuxtApp();
const localePath = useLocalePath();

const schema = computed(() =>
  z.object({
    name: z.string($t("contact.form.validation.nameRequired")),
    email: z.email($t("contact.form.validation.emailInvalid")),
    message: z
      .string($t("contact.form.validation.messageRequired"))
      .min(10, $t("contact.form.validation.messageMin")),
  }),
);

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  name: undefined,
  email: undefined,
  message: undefined,
});

const toast = useToast();
const isSubmitting = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    isSubmitting.value = true;

    await $csrfFetch("/api/contact", {
      method: "POST",
      body: event.data,
    });

    toast.add({
      title: $t("contact.toast.success.title"),
      description: $t("contact.toast.success.description"),
      color: "green",
      icon: "i-lucide-check-circle",
    });

    state.name = undefined;
    state.email = undefined;
    state.message = undefined;
  } catch (err: any) {
    toast.add({
      title: $t("contact.toast.error.title"),
      description:
        err?.data?.message ||
        err?.message ||
        $t("contact.toast.error.description"),
      color: "error",
      icon: "i-lucide-circle-x",
    });
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div>
    <UPageSection
      :title="$t('contact.title')"
      :description="$t('contact.description')"
    >
      <div class="max-w-2xl mx-auto">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <div class="flex items-center justify-center mb-4">
            <div
              class="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-mail"
                class="w-8 h-8 text-primary-600 dark:text-primary-400"
              />
            </div>
          </div>
          <h3 class="text-2xl font-semibold mb-3 text-center">
            {{ $t("contact.emailSection.title") }}
          </h3>
          <a
            href="mailto:info.parku@gmx.ch"
            class="text-xl text-primary-600 dark:text-primary-400 hover:underline font-medium block text-center"
          >
            info.parku@gmx.ch
          </a>
          <p class="text-muted mt-4 text-center">
            {{ $t("contact.emailSection.description") }}
          </p>
        </div>

        <div class="p-10">
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-5"
            @submit="onSubmit"
          >
            <UFormField
              :label="$t('contact.form.name.label')"
              name="name"
              required
            >
              <UInput
                v-model="state.name"
                placeholder="John Doe"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField
              :label="$t('contact.form.email.label')"
              name="email"
              required
            >
              <UInput
                v-model="state.email"
                type="email"
                placeholder="john.doe@example.com"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField
              :label="$t('contact.form.message.label')"
              name="message"
              required
            >
              <UTextarea
                v-model="state.message"
                :placeholder="$t('contact.form.message.placeholder')"
                :rows="6"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UButton
              type="submit"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              size="lg"
              block
            >
              {{
                isSubmitting
                  ? $t("contact.form.submitting")
                  : $t("contact.form.submit")
              }}
            </UButton>
          </UForm>
        </div>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        :title="$t('contact.cta.title')"
        :description="$t('contact.cta.description')"
        :links="[
          {
            label: $t('contact.cta.button'),
            to: localePath('download'),
            trailingIcon: 'i-lucide-download',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
