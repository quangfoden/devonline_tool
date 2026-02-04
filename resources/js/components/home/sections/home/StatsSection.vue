<template>
    <section class="stats">
        <div class="stats__container">
            <div class="stats__header">
                <h2 class="stats__title">
                    Hành trình của yêu thương
                </h2>
                <p class="stats__subtitle">
                    Hàng ngàn khoảnh khắc yêu thương đã được gửi đi từ trái tim bạn đến những người thân yêu.
                    <svg class="stats__icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </p>
            </div>

            <div class="stats__grid">
                <div class="stats__item">
                    <span class="stats__number">{{ animatedStats.cards }}+</span>
                    <span class="stats__label">Thiệp đã được tạo</span>
                </div>

                <div class="stats__item">
                    <span class="stats__number">{{ animatedStats.users }}+</span>
                    <span class="stats__label">Người dùng tin tưởng</span>
                </div>

                <div class="stats__item">
                    <span class="stats__number">{{ animatedStats.events }}+</span>
                    <span class="stats__label">Dịp đặc biệt</span>
                </div>

                <div class="stats__item">
                    <span class="stats__number">{{ animatedStats.satisfaction }}%</span>
                    <span class="stats__label">Mức độ hài lòng</span>
                </div>

            </div>
        </div>
    </section>

</template>
<script>
export default {
    data() {
        return {
            hasAnimated: false,

            stats: {
                cards: 12500,
                users: 4200,
                events: 30,
                satisfaction: 98
            },

            animatedStats: {
                cards: 0,
                users: 0,
                events: 0,
                satisfaction: 0
            }
        };
    },

    mounted() {
        const section = this.$el;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.hasAnimated = true;
                    this.startCountUp();
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(section);
    },

    methods: {
        startCountUp() {
            this.animateValue('cards', 1500);
            this.animateValue('users', 1200);
            this.animateValue('events', 800);
            this.animateValue('satisfaction', 1000);
        },

        animateValue(key, duration) {
            const start = 0;
            const end = this.stats[key];
            const startTime = performance.now();

            const animate = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                this.animatedStats[key] = Math.floor(progress * (end - start) + start);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    this.animatedStats[key] = end;
                }
            };

            requestAnimationFrame(animate);
        }
    }
};
</script>
