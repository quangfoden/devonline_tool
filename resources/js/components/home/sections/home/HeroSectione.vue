<template>
    <section class="hero">
        <div class="hero__background">
            <div class="hero__gradient"></div>
            <div class="hero__pattern"></div>
        </div>

        <div class="hero__container">
            <div class="hero__content">
                <h1 class="hero__title">
                    <span class="hero__title-line" :class="{ 'hero__title-line--visible': animate }">
                       Tạo Thiệp Chúc Mừng
                    </span>
                    <span class="hero__title-line hero__title-line--accent"
                        :class="{ 'hero__title-line--visible': animate }">
                        Đậm Chất Riêng Của Bạn
                    </span>
                </h1>

                <p class="hero__description" :class="{ 'hero__description--visible': animate }">
                    Chọn mẫu có sẵn, tùy chỉnh lời chúc – hình ảnh – nhạc nền
                    và chia sẻ thiệp qua link hoặc mã QR chỉ trong vài phút.
                </p>

                <div class="hero__actions" :class="{ 'hero__actions--visible': animate }">
                    <a href="#templates" class="hero__btn hero__btn--primary">
                        Tạo Thiệp Ngay
                        <svg class="hero__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#templates" class="hero__btn hero__btn--secondary">
                       Khám Phá Mẫu Đẹp
                    </a>
                </div>
            </div>

            <div class="hero__visual" :class="{ 'hero__visual--visible': animate }">
                <div class="hero__card hero__card--1"></div>
                <div class="hero__card hero__card--2"></div>
                <div class="hero__card hero__card--3"></div>
            </div>
        </div>

        <div class="hero__scroll">
            <span class="hero__scroll-text">Cuộn xuống để khám phá</span>
            <div class="hero__scroll-indicator"></div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            animate: false
        };
    },
    mounted() {
        setTimeout(() => {
            this.animate = true;
        }, 100);
    }
};
</script>
