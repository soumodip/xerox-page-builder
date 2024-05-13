<template>
    <section class="
        position-absolute
        top-left
        full-height full-width
        background-color-light
        flex-row
        align-items-center
        justify-content-center
        bring-to-front
      ">
        <div class="loader-holder flex-row align-items-center">
            <div class="dot blink margin-right-5" />
            <div class="dot blink margin-right-5" />
            <div class="dot blink" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.loader-holder {
    .dot {
        height: 12px;
        width: 12px;
        background: rgba($color: #2c2f3b, $alpha: 0.15);
        border-radius: 50%;
        animation-delay: 0s;
        animation-name: blink;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    .dot:nth-child(2) {
        animation-delay: 0.33s;
    }

    .dot:nth-child(3) {
        animation-delay: 0.66s;
    }

    @keyframes blink {
        0% {
            background: rgba($color: #2c2f3b, $alpha: 0.15);
        }

        33% {
            background: rgba($color: #2c2f3b, $alpha: 1);
        }
    }
}
</style>