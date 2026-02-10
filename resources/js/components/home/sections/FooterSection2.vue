<template>
  <footer class="footer2" id="Footer2">
    <div class="footer__container gsap-fade-up">
      <div class="footer__top gsap-fade-up">
        <div class="footer__brand">
          <a href="#home" class="footer__logo">
            <span class="footer__logo-text">Devonline</span
            ><span class="footer__logo-accent">Shop</span>
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
          <a
            href="https://www.facebook.com/share/1DsRV6xZqa/"
            target="_blank"
            title="Facebook"
            class="footer__social-link"
            aria-label="Facebook"
          >
            <i class="mdi mdi-facebook"></i>
            <span class="tooltip">Facebook</span>
          </a>
          <a
            href="https://www.tiktok.com/@nvquangdev?is_from_webapp=1&sender_device=pc"
            class="footer__social-link"
            aria-label="TikTok"
          >
            <i class="mdi mdi-music-note"></i>
            <span class="tooltip">TikTok</span>
          </a>
          <a
            href="https://zalo.me/0377456265"
            class="footer__social-link"
            aria-label="Zalo"
          >
            <i class="mdi mdi-message-processing"></i>
            <span class="tooltip">Zalo</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterSection2",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
