<template>
    <section class="reviews">
        <div class="reviews__container">
            <div class="reviews__header">
                <h2 class="reviews__title">What People Say</h2>
                <p class="reviews__subtitle">
                    Join thousands of satisfied users who've created their perfect pages
                </p>
            </div>

            <div class="reviews__grid">
                <div v-for="review in reviews" :key="review.id" class="review-card">
                    <div class="review-card__rating">
                        <svg v-for="star in 5" :key="star" class="review-card__star"
                            :class="{ 'review-card__star--filled': star <= review.rating }" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>

                    <p class="review-card__comment">{{ review.comment }}</p>

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
                    name: 'Sarah Chen',
                    role: 'Freelance Designer',
                    initials: 'SC',
                    avatarColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    rating: 5,
                    comment: 'PageCraft made it incredibly easy to create a stunning portfolio page. The templates are beautiful and the customization options are perfect. I had my page ready in under 10 minutes!'
                },
                {
                    id: 2,
                    name: 'Marcus Johnson',
                    role: 'Event Organizer',
                    initials: 'MJ',
                    avatarColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    rating: 5,
                    comment: 'Used this for our conference landing page and it was a hit! The QR code feature made check-ins seamless. Highly recommend for anyone running events.'
                },
                {
                    id: 3,
                    name: 'Emily Rodriguez',
                    role: 'Content Creator',
                    initials: 'ER',
                    avatarColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    rating: 5,
                    comment: 'Finally, a link-in-bio alternative that actually looks professional! My engagement has increased significantly since switching to PageCraft. The customization is endless.'
                }
            ]
        };
    }
}
</script>