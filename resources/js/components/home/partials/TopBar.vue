<template>
    <nav class="navb" :class="{ 'navbar--scrolled': isScrolled }">
        <div class="navbar__container">
            <a href="#home" class="navbar__logo">
                <span class="navbar__logo-text">Devonline</span><span class="navbar__logo-accent">Shop</span>
            </a>

            <button class="navbar__toggle" :class="{ 'navbar__toggle--active': mobileMenuOpen }"
                @click="toggleMobileMenu" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="navbar__menu" :class="{ 'navbar__menu--open': mobileMenuOpen }">
                <li class="navbar__item">
                    <a href="#home" class="navbar__link" @click="closeMobileMenu">Home</a>
                </li>
                <li class="navbar__item">
                    <a href="#templates" class="navbar__link" @click="closeMobileMenu">Tất cả mẫu</a>
                </li>
                <li class="navbar__item">
                    <a href="#about" class="navbar__link" @click="closeMobileMenu">Về chúng tôi</a>
                </li>
                <li class="navbar__item">
                    <a href="#reviews" class="navbar__link" @click="closeMobileMenu">Reviews</a>
                </li>
                <li class="navbar__item navbar__item--cta">
                    <a href="#templates" class="navbar__cta" @click="closeMobileMenu">Bắt đầu ngay</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isScrolled: false,
            mobileMenuOpen: false
        };
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>
