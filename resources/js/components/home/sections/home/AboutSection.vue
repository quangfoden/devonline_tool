<template>
    <section class="about gsap-fade-up">
        <div class="about__container">
            <div class="about__header">
                <h2 class="about__title">Cách hoạt động</h2>
                <p class="about__subtitle">
                    Chỉ với 4 bước đơn giản để tạo mẫu thiệp hoàn hảo cho mọi dịp đặc biệt
                </p>
            </div>

            <div class="about__steps">
                <div v-for="(step, index) in steps" :key="step.id" class="step-card">
                    <div class="step-card__number">{{ index + 1 }}</div>

                    <div class="step-card__icon">
                        <svg v-if="step.id === 1" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>

                        <svg v-if="step.id === 2" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>

                        <svg v-if="step.id === 3" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>

                        <svg v-if="step.id === 4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
                        </svg>
                    </div>

                    <h3 class="step-card__title">{{ step.title }}</h3>
                    <p class="step-card__description">{{ step.description }}</p>

                    <div class="step-card__connector" v-if="index < steps.length - 1"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            steps: [
                {
                    id: 1,
                    title: 'Chọn mẫu',
                    description: 'Duyệt qua các mẫu có sẵn và chọn thiết kế phù hợp với nhu cầu của bạn'
                },
                {
                    id: 2,
                    title: 'Tùy chỉnh nội dung',
                    description: 'Thêm lời nhắn, hình ảnh, nhạc và cá nhân hóa thiệp theo ý muốn'
                },
                {
                    id: 3,
                    title: 'Tạo link & mã QR',
                    description: 'Sau khi hoàn tất, hệ thống tự động tạo link riêng và mã QR cho thiệp của bạn'
                },
                {
                    id: 4,
                    title: 'Chia sẻ',
                    description: 'Gửi thiệp cho người thân, bạn bè qua mạng xã hội, tin nhắn hoặc in mã QR'
                }
            ]
        };
    }
}
</script>
