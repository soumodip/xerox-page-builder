<template>
    <div class="page-container position-relative">
        <section :class="[{ 'opacity-none': appStore.hiddenPageIndexes.includes(pageIndex) }]">
            <canvas :id="`page-${pageIndex}`" />
        </section>
        <p class="page-no">
            <b>{{ pageIndex + 1 }}</b> / {{ numberOfPages }}
        </p>
        <section class="
          position-absolute
          top-right
          margin-top-12 margin-right-12
          flex-row
          align-items-center
        ">
            <a class="btn-dark cursor-pointer-opacity" @click="toggleInvertOfCurrentPage"><img
                    src="/images/icons/convert-dark.svg" />
                {{ state.isInverted ? "Undo" : "Black to White" }}
            </a>
            <img class="height-24 cursor-pointer-opacity" :src="`/images/icons/${appStore.hiddenPageIndexes.includes(pageIndex) ? 'view-dark' : 'hide-danger'
                }.svg`" @click="toggleHidePage" />
        </section>
    </div>
</template>

<script lang="ts" setup>
// Composables
import { useCommon } from '@/composables/use-common';
// Stores
import { useAppStore } from '@/stores/app.store';

const props = defineProps<{
    notePdf: any;
    pageIndex: number;
    numberOfPages: number;
}>();

const appStore = useAppStore();

const state = reactive({
    isInverted: false,
});

const { displayConsoleLog } = useCommon();

// Methods
const setUpPage = async () => {
    try {
        const { notePdf, pageIndex } = props;
        notePdf.getPage(pageIndex + 1).then(function (page: any) {
            const scale = 1;
            const viewport = page.getViewport({ scale });
            const canvas = document.getElementById(`page-${pageIndex}`) as HTMLCanvasElement;
            const context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };
            const renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
                // ON PAGE RENDERED
            });
        });
    } catch (error: any) {
        const { message } = error;
        displayConsoleLog(`Error in setUpPage: ${message}`);
    }
};

const toggleHidePage = () => {
    try {
        const { pageIndex } = props;
        const hiddenPageIndexes = [...appStore.hiddenPageIndexes];
        if (hiddenPageIndexes.includes(pageIndex)) {
            hiddenPageIndexes.splice(hiddenPageIndexes.indexOf(pageIndex), 1);
        } else {
            hiddenPageIndexes.push(pageIndex);
        }
        appStore.hiddenPageIndexes = hiddenPageIndexes;
    } catch (error: any) {
        const { message } = error;
        displayConsoleLog(`Error in toggleHidePage: ${message}`);
    }
};

const toggleInvertOfCurrentPage = () => {
    try {
        const { pageIndex } = props;
        const canvas = document.getElementById(`page-${pageIndex}`) as HTMLCanvasElement;
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        const { height, width } = canvas;
        context.globalCompositeOperation = "difference";
        context.fillStyle = "white";
        context.globalAlpha = 1;
        context.fillRect(0, 0, width, height);
        state.isInverted = !state.isInverted;
    } catch (error: any) {
        const { message } = error;
        displayConsoleLog(`Error in toggleInvertOfCurrentPage: ${message}`);
    }
};

// Lifecycle Hooks
onMounted(() => {
    setUpPage();
});
</script>

<style lang="scss" scoped>
.page-container {
    align-self: flex-start;
    margin: 0px 24px 24px 0px;
    background: #f8f8fd;

    .page-no {
        position: absolute;
        top: 0px;
        left: 0px;
        padding: 5px 7px;
        font-size: 12px;
        color: #ffffff;
        background: #2c2f3b;
    }

    .btn-dark {
        min-width: 18px;
        margin: 0px 12px 0px 0px;
        padding: 4px 9px;
        font-size: 12px;
        font-weight: 400;
        color: #2c2f3b;
        background: #ffffff;
        border: 1px solid rgba(44, 47, 59, 0.15);
        border-radius: 4px;

        img {
            height: 11px;
            margin: 0px 5px 0px 0px;
        }
    }
}
</style>