<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const { $csrfFetch } = useNuxtApp();

const schema = z.object({
  name: z.string("Name is required"),
  email: z.email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

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

    const { data, error } = await $csrfFetch("/api/contact", {
      method: "POST",
      body: event.data,
    });

    if (error.value) {
      throw new Error(error.value.message || "Failed to send message");
    }

    toast.add({
      title: "Success!",
      description: "Your message has been sent. We'll get back to you shortly.",
      color: "green",
      icon: "i-lucide-check-circle",
    });

    state.name = undefined;
    state.email = undefined;
    state.message = undefined;
  } catch (err) {
    console.error("Contact form error:", err);

    toast.add({
      title: "Error",
      description:
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again or email us directly.",
      color: "red",
      icon: "i-lucide-circle-x",
      timeout: 5000,
    });
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div>
    <UPageSection
      title="Get in Touch"
      description="We'd love to hear from you! Send us a message and we'll get back to you shortly."
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
          <h3 class="text-2xl font-semibold mb-3 text-center">Email Us</h3>
          <a
            href="mailto:info.parku@gmx.ch"
            class="text-xl text-primary-600 dark:text-primary-400 hover:underline font-medium block text-center"
          >
            info.parku@gmx.ch
          </a>
          <p class="text-muted mt-4 text-center">
            Whether you have a question about features, need assistance, or want
            to provide feedback, our team is ready to help.
          </p>
        </div>

        <UForm
          :schema="schema"
          :state="state"
          class="space-y-5"
          @submit="onSubmit"
        >
          <UFormField label="Name" name="name" required>
            <UInput v-model="state.name" placeholder="John Pork" size="lg" />
          </UFormField>

          <UFormField label="Email" name="email" required>
            <UInput
              v-model="state.email"
              type="email"
              placeholder="john.pork@example.com"
              size="lg"
            />
          </UFormField>

          <UFormField label="Message" name="message" required>
            <UTextarea
              v-model="state.message"
              placeholder="Tell us how we can help you..."
              :rows="6"
              size="lg"
            />
          </UFormField>

          <UButton
            type="submit"
            :loading="isSubmitting"
            :disabled="isSubmitting"
            size="lg"
            block
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </UButton>
        </UForm>
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Ready to Start Parking Smarter?"
        description="Join thousands of drivers who have already simplified their parking experience."
        :links="[
          {
            label: 'Download the App',
            to: '/download',
            trailingIcon: 'i-lucide-download',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>
