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
                <li v-for="item in menu" :key="item.id" class="navbar__item">
                    <a :href="'#' + item.id" class="navbar__link" :class="{ 'navbar__link--active': activeSection === item.id }" @click="scrollTo(item.id)">
                        {{ item.label }}
                    </a>
                </li>

                <li class="navbar__item navbar__item--cta">
                    <a href="#templates" class="navbar__cta">Bắt đầu ngay</a>
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
            mobileMenuOpen: false,
            activeSection: "home",
            menu: [
                { id: "home", label: "Home" },
                { id: "about", label: "Cách hoạt động" },
                { id: "templates", label: "Tất cả mẫu" },
                { id: "reviews", label: "Reviews" },
            ]
        };
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
            this.activeSection = this.menu.find(item => {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    return rect.top <= 120 && rect.bottom > 120;
                }
                return false;
            })?.id || "home";
        },
        scrollTo(id) {
            const section = document.getElementById(id);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: 'smooth'
                });
                this.closeMobileMenu();
            }
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
