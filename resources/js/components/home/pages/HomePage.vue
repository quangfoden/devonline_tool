<template>
  <!-- <TopBar /> -->

  <header class="header" id="header">
    <div class="header__container">
      <div class="header__logo">
        <a href="#" class="header__logo-link">
          <span class="header__logo-icon">✦</span>
          <span class="header__logo-text">Lưu Giữ Yêu Thương</span>
        </a>
      </div>

      <nav class="header__nav">
        <button class="header__toggle" aria-label="Toggle menu" id="menuToggle">
          <span class="header__toggle-line"></span>
          <span class="header__toggle-line"></span>
          <span class="header__toggle-line"></span>
        </button>

        <ul class="header__menu" id="menu">
          <li class="header__menu-item">
            <a href="#home" class="header__menu-link header__menu-link--active">Trang chủ</a>
          </li>
          <li class="header__menu-item">
            <a href="#templates" class="header__menu-link">Mẫu thiệp</a>
          </li>
          <li class="header__menu-item">
            <a href="#demo" class="header__menu-link">Demo</a>
          </li>
          <li class="header__menu-item">
            <a href="#create" class="header__menu-link header__menu-link--cta">Tạo thiệp</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="hero__background">
      <div class="hero__gradient hero__gradient--1"></div>
      <div class="hero__gradient hero__gradient--2"></div>
      <div class="hero__gradient hero__gradient--3"></div>
      <div class="hero__particle hero__particle--1"></div>
      <div class="hero__particle hero__particle--2"></div>
      <div class="hero__particle hero__particle--3"></div>
    </div>

    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          <span class="hero__title-line hero__title-line--1">Lưu giữ những</span>
          <span class="hero__title-line hero__title-line--2">khoảnh khắc yêu thương</span>
          <span class="hero__title-line hero__title-line--3">bằng một tấm thiệp riêng</span>
        </h1>

        <p class="hero__subtitle">
          Mỗi lời chúc đều là một món quà từ trái tim. Hãy biến những cảm xúc của bạn thành những tấm thiệp độc đáo,
          mang đậm dấu ấn cá nhân và tình cảm chân thành.
        </p>

        <div class="hero__actions">
          <a href="#templates" class="button button--primary button--large">
            <span class="button__text">Khám phá các mẫu</span>
            <span class="button__icon">→</span>
          </a>
        </div>
      </div>

      <div class="hero__decorations">
        <div class="hero__decoration hero__decoration--heart-1">♥</div>
        <div class="hero__decoration hero__decoration--heart-2">♥</div>
        <div class="hero__decoration hero__decoration--star-1">✦</div>
        <div class="hero__decoration hero__decoration--star-2">✦</div>
      </div>
    </div>
  </section>

  <!-- Templates Section -->
  <section class="templates" id="templates">
    <div class="templates__container">
      <div class="templates__header">
        <h2 class="templates__title">
          <span class="templates__title-accent">Bộ sưu tập</span> mẫu thiệp đặc biệt
        </h2>
        <p class="templates__description">
          Từng mẫu thiệp được thiết kế tỉ mỉ, mang đến trải nghiệm cảm xúc độc đáo cho mỗi dịp đặc biệt
        </p>
      </div>

      <div class="templates__grid">
        <!-- Birthday Template -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__gradient template-card__gradient--birthday"></div>
            <div class="template-card__icon">🎂</div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp Sinh Nhật</h3>
            <p class="template-card__description">
              Gửi gắm những lời chúc ý nghĩa nhất trong ngày đặc biệt. Từ phong cách tối giản đến rực rỡ sắc màu.
            </p>
            <div class="template-card__actions">
              <a href="#demo" class="button button--secondary button--small">
                <span class="button__text">Xem demo</span>
              </a>
              <a href="#create" class="button button--primary button--small">
                <span class="button__text">Tạo thiệp</span>
              </a>
            </div>
          </div>
        </article>

        <!-- New Year Template -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__gradient template-card__gradient--newyear"></div>
            <div class="template-card__icon">🎊</div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp Năm Mới</h3>
            <p class="template-card__description">
              Chào đón năm mới với những lời chúc tươi đẹp và hy vọng. Thiết kế rực rỡ, tràn đầy năng lượng.
            </p>
            <div class="template-card__actions">
              <a href="#demo" class="button button--secondary button--small">
                <span class="button__text">Xem demo</span>
              </a>
              <a href="#create" class="button button--primary button--small">
                <span class="button__text">Tạo thiệp</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Women's Day Template -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__gradient template-card__gradient--womensday"></div>
            <div class="template-card__icon">🌸</div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp 20/10</h3>
            <p class="template-card__description">
              Tri ân những người phụ nữ đặc biệt trong cuộc đời. Thiết kế nhẹ nhàng, thanh lịch và đầy cảm xúc.
            </p>
            <div class="template-card__actions">
              <a href="#demo" class="button button--secondary button--small">
                <span class="button__text">Xem demo</span>
              </a>
              <a href="#create" class="button button--primary button--small">
                <span class="button__text">Tạo thiệp</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Valentine Template -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__gradient template-card__gradient--valentine"></div>
            <div class="template-card__icon">💝</div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Trang Tình Yêu</h3>
            <p class="template-card__description">
              Tỏ bày tình cảm với người thương yêu. Thiết kế lãng mạn, ngọt ngào, đầy những chi tiết tinh tế.
            </p>
            <div class="template-card__actions">
              <a href="#demo" class="button button--secondary button--small">
                <span class="button__text">Xem demo</span>
              </a>
              <a href="#create" class="button button--primary button--small">
                <span class="button__text">Tạo thiệp</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Anniversary Template -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__gradient template-card__gradient--anniversary"></div>
            <div class="template-card__icon">💍</div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Kỷ Niệm Đặc Biệt</h3>
            <p class="template-card__description">
              Đánh dấu những cột mốc quan trọng. Từ kỷ niệm tình yêu đến những dịp đáng nhớ trong cuộc đời.
            </p>
            <div class="template-card__actions">
              <a href="#demo" class="button button--secondary button--small">
                <span class="button__text">Xem demo</span>
              </a>
              <a href="#create" class="button button--primary button--small">
                <span class="button__text">Tạo thiệp</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Thank You Template -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__gradient template-card__gradient--thankyou"></div>
            <div class="template-card__icon">🙏</div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Lời Cảm Ơn</h3>
            <p class="template-card__description">
              Bày tỏ lòng biết ơn chân thành. Thiết kế ấm áp, chân tình, khiến người nhận cảm thấy được trân trọng.
            </p>
            <div class="template-card__actions">
              <a href="#demo" class="button button--secondary button--small">
                <span class="button__text">Xem demo</span>
              </a>
              <a href="#create" class="button button--primary button--small">
                <span class="button__text">Tạo thiệp</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="how-it-works" id="demo">
    <div class="how-it-works__container">
      <div class="how-it-works__header">
        <h2 class="how-it-works__title">
          Chỉ ba bước đơn giản
        </h2>
        <p class="how-it-works__subtitle">
          Tạo thiệp chúc của riêng bạn chỉ trong vài phút
        </p>
      </div>

      <div class="how-it-works__steps">
        <div class="step">
          <div class="step__number">
            <span class="step__number-text">01</span>
          </div>
          <div class="step__icon">
            <div class="step__icon-inner">🎨</div>
          </div>
          <h3 class="step__title">Chọn mẫu yêu thích</h3>
          <p class="step__description">
            Duyệt qua bộ sưu tập đa dạng và chọn mẫu thiệp phù hợp với dịp đặc biệt của bạn
          </p>
        </div>

        <div class="step">
          <div class="step__number">
            <span class="step__number-text">02</span>
          </div>
          <div class="step__icon">
            <div class="step__icon-inner">✍️</div>
          </div>
          <h3 class="step__title">Nhập lời chúc & hình ảnh</h3>
          <p class="step__description">
            Viết những lời chúc từ trái tim, thêm ảnh kỷ niệm để thiệp thêm ý nghĩa và cá nhân
          </p>
        </div>

        <div class="step">
          <div class="step__number">
            <span class="step__number-text">03</span>
          </div>
          <div class="step__icon">
            <div class="step__icon-inner">💌</div>
          </div>
          <h3 class="step__title">Tạo link & chia sẻ</h3>
          <p class="step__description">
            Nhận link thiệp độc quyền và gửi đến người thương yêu qua bất kỳ nền tảng nào
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Emotional Value Section -->
  <section class="value">
    <div class="value__background">
      <div class="value__sparkle value__sparkle--1">✦</div>
      <div class="value__sparkle value__sparkle--2">✦</div>
      <div class="value__sparkle value__sparkle--3">✦</div>
      <div class="value__heart value__heart--1">♥</div>
      <div class="value__heart value__heart--2">♥</div>
    </div>

    <div class="value__container">
      <div class="value__content">
        <p class="value__quote">
          "Trong thời đại kỹ thuật số, một lời chúc chân thành vẫn có sức mạnh kỳ diệu để chạm đến trái tim, tạo nên
          khoảnh khắc khó quên và giữ mãi những kỷ niệm đẹp."
        </p>

        <div class="value__features">
          <div class="value__feature">
            <div class="value__feature-icon">🎁</div>
            <p class="value__feature-text">Hoàn toàn miễn phí</p>
          </div>
          <div class="value__feature">
            <div class="value__feature-icon">🔒</div>
            <p class="value__feature-text">Riêng tư & bảo mật</p>
          </div>
          <div class="value__feature">
            <div class="value__feature-icon">✨</div>
            <p class="value__feature-text">Thiết kế độc đáo</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="cta" id="create">
    <div class="cta__container">
      <div class="cta__content">
        <h2 class="cta__title">
          Mỗi lời chúc đều xứng đáng<br>được trân trọng
        </h2>
        <p class="cta__subtitle">
          Hãy bắt đầu tạo thiệp của riêng bạn ngay hôm nay
        </p>
        <div class="cta__actions">
          <a href="#templates" class="button button--primary button--large button--glow">
            <span class="button__text">Bắt đầu tạo thiệp</span>
            <span class="button__icon">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>


  <FooterSection />
</template>
<script>
import TopBar from "@components/home/partials/TopBar.vue";
// import slideSection from "@components/home/sections/home/slideSection.vue";
// import AboutSection from "@components/home/AboutSection.vue";
// import NewsSectione from "@components/home/NewsSectione.vue";
import FooterSection from "@components/home/sections/FooterSection.vue";
// import ProductsSection from "@components/home/ProductsSection.vue";

export default {
  components: {
    TopBar,
    // slideSection,
    // AboutSection,
    // NewsSectione,
    // ProductsSection,
    FooterSection
  },

  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      isLoaded: false,
      activeSection: '',
      menuItems: [
        { id: 'hero', text: 'Trang chủ' },
        { id: 'templates', text: 'Mẫu thiệp' },
        { id: 'how-it-works', text: 'Cách hoạt động' },
        { id: 'pricing', text: 'Bảng giá' }
      ],
      observers: [] // Lưu trữ các observer để dọn dẹp sau này

    };
  },

  mounted() {
    this.isLoaded = true;

    // Khởi tạo các chức năng
    window.addEventListener('scroll', this.handleScrollHeader);
    window.addEventListener('orientationchange', this.handleOrientationChange);
    document.addEventListener('click', this.handleClickOutside);

    this.setupScrollAnimations();
    this.setupActiveMenuLink();

    console.log('%c✦ Lưu Giữ Yêu Thương ✦', 'font-size: 20px; color: #E8577F; font-weight: bold;');
  },

  beforeDestroy() {
    // Quan trọng: Gỡ bỏ các event listener để tránh rò rỉ bộ nhớ
    window.removeEventListener('scroll', this.handleScrollHeader);
    window.removeEventListener('orientationchange', this.handleOrientationChange);
    document.removeEventListener('click', this.handleClickOutside);

    this.observers.forEach(obs => obs.disconnect());
  },
  methods: {
    // 1. Xử lý Header khi Scroll
    handleScrollHeader() {
      this.isScrolled = window.scrollY > 50;
    },

    // 2. Xử lý Mobile Menu
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },

    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    },

    handleClickOutside(e) {
      const menu = document.getElementById('menu');
      const toggle = document.getElementById('menuToggle');
      if (this.isMenuOpen && menu && !menu.contains(e.target) && !toggle.contains(e.target)) {
        this.closeMenu();
      }
    },

    handleOrientationChange() {
      if (this.isMenuOpen) this.closeMenu();
    },

    // 3. Smooth Scroll
    handleAnchorClick(e, id) {
      e.preventDefault();
      this.closeMenu();

      const target = document.getElementById(id);
      if (target) {
        const headerHeight = this.$refs.header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    },

    // 4. Scroll Animations (Intersection Observer)
    setupScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      const selectors = ['.templates__header', '.template-card', '.step', '.value__content', '.cta__content'];
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => observer.observe(el));
      });

      this.observers.push(observer);
    },

    // 5. Active Link Tracking
    setupActiveMenuLink() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });

      document.querySelectorAll('section[id]').forEach(section => observer.observe(section));

      this.observers.push(observer);
    }
  }
};
</script>
