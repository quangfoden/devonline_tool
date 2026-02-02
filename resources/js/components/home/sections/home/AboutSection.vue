<template>
    <section class="about">
        <div class="about__container">
            <div class="about__header">
                <h2 class="about__title">How It Works</h2>
                <p class="about__subtitle">
                    Four simple steps to your personalized page
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
                    title: 'Choose a Template',
                    description: 'Browse our collection and select the perfect design that matches your style and purpose'
                },
                {
                    id: 2,
                    title: 'Customize Content',
                    description: 'Add your text, images, links, and personal touches with our intuitive editor'
                },
                {
                    id: 3,
                    title: 'Generate Link & QR',
                    description: 'Instantly receive a unique shareable link and downloadable QR code for your page'
                },
                {
                    id: 4,
                    title: 'Share with Others',
                    description: 'Distribute your personalized page across social media, email, or print materials'
                }
            ]
        };
    }
}
</script>