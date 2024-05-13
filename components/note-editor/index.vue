<template>
    <section class="
        position-absolute
        top-left
        full-height full-width
        background-color-light
        flex-column
        justify-content-space-between
        bring-to-front
      ">
        <options />
        <div v-if="state.arePdfContentsProcessed" class="
          collection-of-page-container
          flex-row
          justify-content-center
          flex-wrap-wrap
        ">
            <note-pdf-page v-for="(_, index) in state.pages" :key="`page-${index}`" :pageIndex="index"
                :numberOfPages="state.pages.length" :notePdf="notePdf" />
        </div>
    </section>
</template>

<script lang="ts" setup>
// Composables
import { useCommon } from '@/composables/use-common';
import { usePdf } from '@/composables/use-pdf';
// Components
import Options from '@/components/note-editor/Options.vue';
import NotePdfPage from '@/components/note-editor/Page.vue';
// Stores
import { useAppStore } from '@/stores/app.store';

const { delay, displayConsoleLog } = useCommon();

const { getNotePdf, buildAndDownloadPdf } = await usePdf();
const appStore = useAppStore();

const state = reactive({
    arePdfContentsProcessed: false,
    pages: [] as number[],
    processedPages: [] as string[][],
});

let notePdf: any;

// Watch
watch(() => appStore.triggerAction, (triggerAction) => {
    const { type } = triggerAction;
    if (type === "generatePdf") {
        generatePdf();
    }
});

watch(() => appStore.uploadedNotePath, () => {
    setUpPages();
});

// Methods
const setUpPages = async () => {
    try {
        const pdfUrl = appStore.uploadedNotePath;
        notePdf = await getNotePdf(pdfUrl);
        state.arePdfContentsProcessed = true;
        const numberOfPages = notePdf._pdfInfo.numPages;
        state.pages = Array.from(Array(numberOfPages)).map((data, index) => index);
    } catch (error: any) {
        const { message } = error;
        displayConsoleLog(message);
    }
};

const getPageImageData = (pageIndex: number) => {
    try {
        const { isConvertBlackToWhite } = appStore;
        const canvas = document.getElementById(`page-${pageIndex}`) as HTMLCanvasElement;
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        const { height, width } = canvas;
        if (isConvertBlackToWhite) {
            context.globalCompositeOperation = "difference";
            context.fillStyle = "white";
            context.globalAlpha = 1;
            context.fillRect(0, 0, width, height);
        }
        return canvas.toDataURL("image/jpeg");
    } catch (error: any) {
        const { message } = error;
        displayConsoleLog(message);
    }
};

const generatePdf = async () => {
    try {
        const { pages } = state;
        const { selectedCombineOption, hiddenPageIndexes } = appStore;
        const numberOfPagesCombinedTogether = (() => {
            if (selectedCombineOption !== "") {
                return parseInt(String(selectedCombineOption).split("in 1").join().trim());
            }
            return 1;
        })();
        if (pages.length > 0) {
            const processedPages: string[][] = [];
            let currentProcessedPage: string[] = [];
            const { height, width } = document.getElementById(`page-0`) as HTMLCanvasElement;
            const visiblePages = pages.filter((_, index) => !hiddenPageIndexes.includes(index));
            for (let index = 0; index < visiblePages.length; index++) {
                const pageIndex = visiblePages[index];
                const imageData = getPageImageData(pageIndex) as string;
                if (index > 0 && index % numberOfPagesCombinedTogether === 0) {
                    processedPages.push(currentProcessedPage);
                    currentProcessedPage = [imageData];
                } else {
                    currentProcessedPage.push(imageData);
                }
                if (index === visiblePages.length - 1) {
                    processedPages.push(currentProcessedPage);
                }
                await delay(300);
            }
            buildAndDownloadPdf({
                height,
                width,
                processedPages,
            });
        }
    } catch (error: any) {
        const { message } = error;
        displayConsoleLog(message);
    }
};

// Lifecycle Hooks
onMounted(() => {
    setUpPages();
});
</script>

<style lang="scss" scoped>
.collection-of-page-container {
    position: relative !important;
    max-height: 100%;
    height: 100%;
    padding: 24px;
    overflow-y: auto;
}

@media only screen and (max-width: 1000px) {
    .flex-wrap-wrap {
        margin: 24px 0px 0px 24px !important;
        flex-wrap: none !important;
        overflow-x: auto;
    }
}
</style>