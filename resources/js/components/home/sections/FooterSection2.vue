<template>
    <footer class="footer2" id="Footer2">
        <div class="footer__container gsap-fade-up">
            <div class="footer__top gsap-fade-up">
                <div class="footer__brand">
                    <a href="#home" class="footer__logo">
                        <span class="footer__logo-text">Devonline</span><span class="footer__logo-accent">Shop</span>
                    </a>
                    <p class="footer__tagline">
                        Tạo thiệp và trang cá nhân đẹp mắt chỉ trong vài phút
                    </p>
                </div>

                <div class="footer__links">
                    <div class="footer__column">
                        <h4 class="footer__heading">Sản phẩm</h4>
                        <ul class="footer__list">
                            <li><a href="#templates" class="footer__link">Mẫu thiệp</a></li>
                            <li><a href="#" class="footer__link">Tính năng</a></li>
                            <li><a href="#" class="footer__link">Bảng giá</a></li>
                        </ul>
                    </div>

                    <div class="footer__column">
                        <h4 class="footer__heading">Công ty</h4>
                        <ul class="footer__list">
                            <li><a href="#about" class="footer__link">Giới thiệu</a></li>
                            <li><a href="#" class="footer__link">Blog</a></li>
                            <li><a href="#" class="footer__link">Tuyển dụng</a></li>
                        </ul>
                    </div>

                    <div class="footer__column">
                        <h4 class="footer__heading">Pháp lý</h4>
                        <ul class="footer__list">
                            <li><a href="#" class="footer__link">Chính sách bảo mật</a></li>
                            <li><a href="#" class="footer__link">Điều khoản sử dụng</a></li>
                            <li><a href="#" class="footer__link">Chính sách cookie</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer__bottom">
                <p class="footer__copyright">
                    © {{ currentYear }} Devonline Shop. Bảo lưu mọi quyền.
                </p>

                <div class="footer__social">
                    <a href="#" class="footer__social-link" aria-label="Twitter">
                        <svg viewBox="0 0 24 24" fill="#fff">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                    <a href="#" class="footer__social-link" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="#fff">
                            <path
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a href="#" class="footer__social-link" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="#fff">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path
                                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                                fill="none"
                                stroke="#0a0a0a"
                                stroke-width="2"
                            />
                            <circle cx="17.5" cy="6.5" r="1.5" fill="#0a0a0a" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterSection2',
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
}
</script>
