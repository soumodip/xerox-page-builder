<template>
  <section class="position-absolute top-left full-height full-width">
    <upload-note v-if="(!appStore.uploadedNotePath || (appStore.isProcessing && appStore.uploadedNotePath))" />
    <note-editor v-if="appStore.uploadedNotePath" />
    <loader v-if="appStore.isProcessing" />
    <section class="
          position-absolute
          bottom-left
          full-width
          margin-bottom-12
          flex-row
          align-items-center
          justify-content-center
          bring-to-front
        ">
      <p class="no-margin margin-right-8 color-dark">Developed by</p>
      <a class="text-decoration-none color-dark font-weight-500" target="_blank"
        href="https://in.linkedin.com/in/soumodippaul">Soumodip Paul</a>
    </section>
  </section>
</template>

<script lang="ts" setup>
// Composables
import { useCommon } from '@/composables/use-common';
// Components
import UploadNote from '@/components/UploadNote.vue';
import NoteEditor from '@/components/note-editor/index.vue';
import Loader from '@/components/Loader.vue';
// Stores
import { useAppStore } from '@/stores/app.store';

const appStore = useAppStore();

const state = reactive({
  loadedExternalScripts: 0,
  numberOfExternalScripts: 1,
});

const { delay } = useCommon();

// Head
useHead({
  script: [
    {
      src: "/scripts/jspdf.min.js",
      onload: () => {
        state.loadedExternalScripts += 1;
      },
    },
  ],
});

// Watch
watch(() => state.loadedExternalScripts, async (loadedExternalScripts) => {
  const { numberOfExternalScripts } = state;
  if (loadedExternalScripts === numberOfExternalScripts) {
    await delay(750);
    appStore.isProcessing = false;
  }
});
</script>