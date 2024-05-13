<template>
    <div class="
        option-container
        flex-row
        align-items-center
        justify-content-space-between
      ">
        <section class="flex-row align-items-center">
            <section class="flex-row align-items-center margin-right-12">
                <p class="font-size-14 color-dark opacity-medium margin-right-12">
                    Combine Pages
                </p>
                <section v-for="(combineOption, index) in state.combineOptions" :key="`combine-option-${index}`" :class="[
                    'flex-row align-items-center cursor-pointer-opacity',
                    { 'opacity-medium': combineOption !== appStore.selectedCombineOption },
                ]" @click="updateSelectedCombineOption(combineOption)">
                    <div :class="[
                        'checkbox',
                        { active: combineOption === appStore.selectedCombineOption },
                    ]" />
                    <p class="font-size-14 color-dark margin-right-8">
                        {{ combineOption }}
                    </p>
                </section>
            </section>
            <section :class="[
                'flex-row align-items-center margin-left-12 cursor-pointer-opacity',
                { 'opacity-medium': !appStore.isConvertBlackToWhite },
            ]" @click="toggleConvertBlackToWhite">
                <div :class="['checkbox', { active: appStore.isConvertBlackToWhite }]" />
                <p class="font-size-14 color-dark margin-right-8">
                    Convert Black to White (all)
                </p>
            </section>
        </section>
        <a class="
          font-size-14
          color-dark
          cursor-pointer-opacity
          flex-row
          align-items-center
        " @click="generatePdf">Generate
            <img src="/images/icons/download-dark.svg" class="margin-left-8 height-16" /></a>
    </div>
</template>

<script lang="ts" setup>
// Composables
import { useCommon } from '@/composables/use-common';
// Stores
import { useAppStore } from '@/stores/app.store';

const state = reactive({
    combineOptions: [] as string[],
});
const appStore = useAppStore();

const { delay, displayConsoleLog } = useCommon();

// Methods
const setUpOptions = async () => {
    try {
        await delay(1 * 1000);
        const canvas = document.getElementById(`page-0`) as HTMLCanvasElement;
        if (canvas) {
            const { height, width } = canvas;
            if (width > height) {
                state.combineOptions = ["2 in 1", "3 in 1", "4 in 1", "5 in 1"];
            } else {
                state.combineOptions = ["2 in 1", "3 in 1", "4 in 1"];
            }
        }
    } catch (error: any) {
        const { message } = error;
        displayConsoleLog(`Error in setUpOptions: ${message}`);
    }
};

const updateSelectedCombineOption = (combineOption: string) => {
    appStore.selectedCombineOption = combineOption;
};

const toggleConvertBlackToWhite = () => {
    appStore.isConvertBlackToWhite = !appStore.isConvertBlackToWhite;
};

const generatePdf = () => {
    appStore.isProcessing = true;
    appStore.triggerAction = {
        type: "generatePdf",
    };
};

onMounted(() => {
    setUpOptions();
});
</script>

<style lang="scss" scoped>
.option-container {
    height: 56px;
    width: 100%;
    padding: 0px 18px;
    border-bottom: 1px solid rgba($color: #2c2f3b, $alpha: 0.1);

    .checkbox {
        height: 16px;
        width: 16px;
        margin: 0px 7px 0px 0px;
        border: 2px solid #2c2f3b;
        border-radius: 5px;
    }

    .checkbox.active {
        background: #2c2f3b;
    }
}
</style>