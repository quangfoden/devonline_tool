<template>
    <section class="reviews">
        <div class="reviews__container">
            <div class="reviews__header">
                <h2 class="reviews__title">Đánh giá</h2>
                <p class="reviews__subtitle">
                    Hàng ngàn người dùng đã tạo trang cá nhân và thiệp theo cách riêng của họ
                </p>
            </div>

            <Swiper :modules="modules" :space-between="24" :loop="true" :autoplay="{
                delay: 1500,
                disableOnInteraction: false
            }" :navigation="false" :breakpoints="breakpoints" class="reviews__slider">
                <SwiperSlide v-for="review in reviews" :key="review.id">
                    <div class="review-card">
                        <div class="review-card__rating">
                            <svg v-for="star in 5" :key="star" class="review-card__star"
                                :class="{ 'review-card__star--filled': star <= review.rating }" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>

                        <p class="review-card__comment">
                            {{ review.comment }}
                        </p>

                        <div class="review-card__author">
                            <div class="review-card__avatar" :style="{ background: review.avatarColor }">
                                {{ review.initials }}
                            </div>
                            <div class="review-card__info">
                                <div class="review-card__name">{{ review.name }}</div>
                                <div class="review-card__role">{{ review.role }}</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay, Navigation],
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }
        };
    },
    data() {
        return {
            reviews: [
                {
                    id: 1,
                    name: 'Nguyễn Thu Hà',
                    role: 'Designer tự do',
                    initials: 'TH',
                    avatarColor: 'linear-gradient(135deg, #c35b6e 0%, #8b2f3c 100%)',
                    rating: 5,
                    comment: 'Mình làm thiệp sinh nhật cho bạn thân, chỉ mất vài phút chỉnh chữ và ảnh. Giao diện dễ dùng, xem trên điện thoại cũng rất đẹp.'
                },
                {
                    id: 2,
                    name: 'Trần Minh Quân',
                    role: 'Tổ chức sự kiện',
                    initials: 'MQ',
                    avatarColor: 'linear-gradient(135deg, #f2b6c6 0%, #b24a5c 100%)',
                    rating: 5,
                    comment: 'Mình dùng để tạo trang mời sinh nhật và gắn mã QR cho khách. Mọi người quét vào là xem được đầy đủ thông tin, rất tiện.'
                },
                {
                    id: 3,
                    name: 'Lê Mỹ Anh',
                    role: 'Người sáng tạo nội dung',
                    initials: 'MA',
                    avatarColor: 'linear-gradient(135deg, #fde4ea 0%, #c35b6e 100%)',
                    rating: 5,
                    comment: 'Mình dùng như một trang link cá nhân, gắn thêm ảnh kỷ niệm và nhạc nhẹ. Nhìn gọn gàng, không bị rối như nhiều nền tảng khác.'
                },
                {
                    id: 4,
                    name: 'Phạm Quốc Huy',
                    role: 'Nhân viên văn phòng',
                    initials: 'QH',
                    avatarColor: 'linear-gradient(135deg, #b24a5c 0%, #402025 100%)',
                    rating: 5,
                    comment: 'Không rành công nghệ nhưng vẫn tạo được thiệp cho người yêu khá nhanh. Chỉ cần chọn mẫu rồi sửa nội dung là xong.'
                },
                {
                    id: 5,
                    name: 'Võ Thanh Tâm',
                    role: 'Sinh viên',
                    initials: 'TT',
                    avatarColor: 'linear-gradient(135deg, #f2b6c6 0%, #fde4ea 100%)',
                    rating: 5,
                    comment: 'Mình hay dùng để làm thiệp chúc mừng bạn bè. Gửi link là xem được ngay, không cần tải app gì cả.'
                }
            ]
        };
    }
};
</script>
