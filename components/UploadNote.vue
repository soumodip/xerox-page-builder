<template>
    <section class="
        position-absolute
        top-left
        full-height full-width
        background-color-light
        flex-column
        align-items-center
        justify-content-center
        bring-to-front
      ">
        <img src="/images/icon.svg" draggable="false" />
        <p class="font-size-36 font-weight-800 no-margin">Xerox Page Builder</p>
        <p class="
          font-size-18 font-weight-400
          margin-top-12
          color-dark
          opacity-medium
          half-width
          text-align-center
        ">
            If you have notes of Physicswallah, Unacademy etc then you can upload it
            here and we'll help you create a inverted PDF out of it.
        </p>
        <a class="upload-btn cursor-pointer-opacity" @click="triggerUploadOfNote"><span
                class="icon margin-right-5">+</span> Upload <b>Note</b></a>
        <input ref="noteFileElement" type="file" class="hidden" accept="application/pdf" @change="onNoteFileChange" />
    </section>
</template>

<script lang="ts" setup>
// Stores
import { useAppStore } from "@/stores/app.store"
// Composables
import { useCommon } from "@/composables/use-common"

const appStore = useAppStore()
const noteFileElement = ref(null as HTMLElement | null)

const { delay,  displayConsoleLog } = useCommon()

const triggerUploadOfNote = () => {
    try {
        (noteFileElement.value!).click();
    } catch (error: any) {
        const { message } = error;
        displayConsoleLog(message);
    }
}

const onNoteFileChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const { files } = target;
    if (files && files.length > 0) {
        appStore.isProcessing = true;
        appStore.uploadedNotePath = (URL.createObjectURL(files[0]));
        await delay(750);
        appStore.isProcessing = false;
    }
}
</script>

<style lang="scss" scoped>
.upload-btn {
    min-height: 40px;
    padding: 9px 12px 9px 9px;
    border: 1px solid rgba($color: #2c2f3b, $alpha: 0.15);
    border-radius: 9px;

    .icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-height: 24px;
        min-width: 24px;
        background: rgba($color: #2c2f3b, $alpha: 0.1);
        border-radius: 7px;
    }
}

img {
    height: 64px;
    width: auto;
    margin: 0px 0px 18px 0px;
}
</style>