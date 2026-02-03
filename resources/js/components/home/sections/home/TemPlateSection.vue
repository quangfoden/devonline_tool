<template>
    <section class="templates">
        <div class="templates__container">
            <div class="templates__header">
                <h2 class="templates__title">Chọn mẫu bạn yêu thích</h2>
                <p class="templates__subtitle">
                    Các mẫu được thiết kế sẵn, phù hợp cho nhiều mục đích sử dụng khác nhau
                </p>
            </div>

            <div class="templates__grid">
                <div v-for="template in templates" :key="template.id" class="template-card">
                    <div class="template-card__image">
                        <div class="template-card__thumbnail" :style="{ background: template.gradient }">
                            <div class="template-card__preview-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18M9 21V9" />
                                </svg>
                            </div>
                        </div>
                        <div class="template-card__overlay">
                            <button class="template-card__preview-btn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                Xem nhanh
                            </button>
                        </div>
                    </div>

                    <div class="template-card__content">
                        <h3 class="template-card__name">{{ template.name }}</h3>
                        <p class="template-card__description">{{ template.description }}</p>

                        <div class="template-card__actions">
                            <button class="template-card__btn template-card__btn--preview">
                                Xem trước
                            </button>
                            <button class="template-card__btn template-card__btn--choose">
                                Chọn mẫu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            templates: [
                {
                    id: 1,
                    name: 'Thiệp sinh nhật tối giản',
                    description: 'Phong cách nhẹ nhàng, phù hợp để gửi lời chúc sinh nhật ý nghĩa',
                    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                },
                {
                    id: 2,
                    name: 'Thiệp chúc mừng chuyên nghiệp',
                    description: 'Thiết kế lịch sự, phù hợp cho công việc và đối tác',
                    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                },
                {
                    id: 3,
                    name: 'Thiệp sự kiện',
                    description: 'Phù hợp cho đám cưới, hội nghị, lễ kỷ niệm',
                    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                },
                {
                    id: 4,
                    name: 'Thiệp lưu giữ kỷ niệm',
                    description: 'Tổng hợp hình ảnh, lời chúc và cảm xúc trong một trang',
                    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                },
                {
                    id: 5,
                    name: 'Thiệp ra mắt',
                    description: 'Dùng để thông báo sự kiện, sản phẩm hoặc điều đặc biệt',
                    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                },
                {
                    id: 6,
                    name: 'Thiệp cá nhân',
                    description: 'Giới thiệu bản thân, câu chuyện hoặc lời nhắn riêng',
                    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
                }
            ]
        };
    }
}
</script>
