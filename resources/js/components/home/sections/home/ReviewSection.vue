<template>
    <section class="reviews">
        <div class="reviews__container">
            <div class="reviews__header">
                <h2 class="reviews__title">Khách hàng nói gì</h2>
                <p class="reviews__subtitle">
                    Hàng ngàn người dùng đã tạo trang cá nhân và thiệp theo cách riêng của họ
                </p>
            </div>

            <div class="reviews__grid">
                <div v-for="review in reviews" :key="review.id" class="review-card">
                    <div class="review-card__rating">
                        <svg
                            v-for="star in 5"
                            :key="star"
                            class="review-card__star"
                            :class="{ 'review-card__star--filled': star <= review.rating }"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            />
                        </svg>
                    </div>

                    <p class="review-card__comment">
                        {{ review.comment }}
                    </p>

                    <div class="review-card__author">
                        <div
                            class="review-card__avatar"
                            :style="{ background: review.avatarColor }"
                        >
                            {{ review.initials }}
                        </div>
                        <div class="review-card__info">
                            <div class="review-card__name">{{ review.name }}</div>
                            <div class="review-card__role">{{ review.role }}</div>
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
            reviews: [
                {
                    id: 1,
                    name: 'Nguyễn Thu Hà',
                    role: 'Designer tự do',
                    initials: 'TH',
                    avatarColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    rating: 5,
                    comment: 'Mình tạo thiệp sinh nhật cho bạn chỉ trong vài phút mà nhìn rất xịn. Giao diện dễ dùng, mẫu đẹp, ai nhận cũng thích.'
                },
                {
                    id: 2,
                    name: 'Trần Minh Quân',
                    role: 'Tổ chức sự kiện',
                    initials: 'MQ',
                    avatarColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    rating: 5,
                    comment: 'Dùng để tạo trang mời sự kiện và mã QR check-in cực kỳ tiện. Khách quét là vào ngay, tiết kiệm rất nhiều thời gian.'
                },
                {
                    id: 3,
                    name: 'Lê Mỹ Anh',
                    role: 'Người sáng tạo nội dung',
                    initials: 'MA',
                    avatarColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    rating: 5,
                    comment: 'Mình dùng làm trang chia sẻ link cá nhân, nhìn gọn gàng và chuyên nghiệp hơn hẳn. Tùy chỉnh rất linh hoạt.'
                }
            ]
        };
    }
}
</script>
