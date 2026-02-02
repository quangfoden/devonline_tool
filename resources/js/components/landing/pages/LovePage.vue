<template>
  <!-- <TopBar /> -->
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero__particles" aria-hidden="true"></div>
    <div class="hero__container">
      <h1 class="hero__title">
        Tạo một trang tình yêu<br>
        <span class="hero__title-accent">dành riêng cho người bạn thương</span>
      </h1>
      <p class="hero__subtitle">
        Ảnh, lời nhắn và cảm xúc – tất cả gói gọn trong một đường link duy nhất
      </p>
      <router-link to="{ name:'Home' }" class="hero__cta btn btn--primary">
        Tạo trang tình yêu ngay
      </router-link>
      <p class="hero__meta">
        Không cần đăng ký • Chia sẻ trong 1 phút
      </p>
    </div>
    <div class="hero__scroll-indicator">
      <span class="hero__scroll-text">Khám phá</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>

  <!-- Demo Preview Section -->
  <section class="demo">
    <div class="demo__container">
      <h2 class="demo__title section-title">
        Trang tình yêu của bạn sẽ như thế nào?
      </h2>
      <div class="demo__preview">
        <div class="demo__phone">
          <div class="demo__phone-screen">
            <div class="demo__content">
              <div class="demo__image demo__image--1"></div>
              <div class="demo__message">
                <p class="demo__message-text">
                  "Mỗi khoảnh khắc bên em đều là món quà quý giá nhất của anh..."
                </p>
              </div>
              <div class="demo__image demo__image--2"></div>
              <div class="demo__image demo__image--3"></div>
            </div>
          </div>
          <div class="demo__phone-notch"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="how-it-works">
    <div class="how-it-works__container">
      <h2 class="how-it-works__title section-title">
        Chỉ 3 bước đơn giản
      </h2>
      <div class="how-it-works__steps">

        <div class="step">
          <div class="step__icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3 class="step__title">Nhập lời nhắn yêu thương</h3>
          <p class="step__description">
            Viết những dòng chữ từ trái tim, chia sẻ cảm xúc chân thành nhất của bạn
          </p>
        </div>

        <div class="step">
          <div class="step__icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
              <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
          <h3 class="step__title">Tải ảnh kỷ niệm</h3>
          <p class="step__description">
            Chọn những khoảnh khắc đẹp nhất, những bức ảnh lưu giữ kỷ niệm bên nhau
          </p>
        </div>

        <div class="step">
          <div class="step__icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3 class="step__title">Nhận link riêng & chia sẻ</h3>
          <p class="step__description">
            Gửi link cho người thương, để họ cảm nhận tình yêu của bạn mọi lúc mọi nơi
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing">
    <div class="pricing__container">
      <h2 class="pricing__title section-title">
        Giá cả minh bạch
      </h2>
      <p class="pricing__subtitle">
        Chỉ trả tiền khi muốn thêm ảnh
      </p>

      <div class="pricing__cards">

        <div class="pricing-card">
          <div class="pricing-card__badge">Miễn phí</div>
          <h3 class="pricing-card__title">1 ảnh</h3>
          <div class="pricing-card__price">
            <span class="pricing-card__amount">0đ</span>
          </div>
          <ul class="pricing-card__features">
            <li>1 ảnh kỷ niệm</li>
            <li>Lời nhắn không giới hạn</li>
            <li>Link vĩnh viễn</li>
          </ul>
        </div>

        <div class="pricing-card pricing-card--featured">
          <div class="pricing-card__badge">Phổ biến</div>
          <h3 class="pricing-card__title">2–3 ảnh</h3>
          <div class="pricing-card__price">
            <span class="pricing-card__amount">29.000đ</span>
          </div>
          <ul class="pricing-card__features">
            <li>2–3 ảnh kỷ niệm</li>
            <li>Lời nhắn không giới hạn</li>
            <li>Link vĩnh viễn</li>
            <li>Chủ đề đặc biệt</li>
          </ul>
        </div>

        <div class="pricing-card">
          <div class="pricing-card__badge">Cao cấp</div>
          <h3 class="pricing-card__title">4–5 ảnh</h3>
          <div class="pricing-card__price">
            <span class="pricing-card__amount">49.000đ</span>
          </div>
          <ul class="pricing-card__features">
            <li>4–5 ảnh kỷ niệm</li>
            <li>Lời nhắn không giới hạn</li>
            <li>Link vĩnh viễn</li>
            <li>Chủ đề đặc biệt</li>
            <li>Âm nhạc nền</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Social Proof Section -->
  <section class="social-proof">
    <div class="social-proof__container">
      <div class="social-proof__quote">
        <p class="social-proof__quote-text">
          "Tình yêu không chỉ là những lời nói,<br>
          mà là những khoảnh khắc được lưu giữ mãi mãi"
        </p>
      </div>

      <div class="social-proof__stats">
        <div class="stat">
          <div class="stat__number" data-target="3200">0</div>
          <div class="stat__label">Trang tình yêu đã tạo</div>
        </div>
        <div class="stat">
          <div class="stat__number" data-target="12500">0</div>
          <div class="stat__label">Khoảnh khắc được lưu giữ</div>
        </div>
        <div class="stat">
          <div class="stat__number" data-target="98">0</div>
          <div class="stat__label">% hài lòng</div>
        </div>
      </div>

      <div class="social-proof__hearts" aria-hidden="true"></div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="final-cta">
    <div class="final-cta__container">
      <h2 class="final-cta__title">
        Mỗi tình yêu xứng đáng<br>
        <span class="final-cta__title-accent">có một nơi để lưu giữ</span>
      </h2>
      <router-link to="{ name:'Home' }" class="final-cta__button btn btn--primary btn--large">
        Tạo trang tình yêu ngay
      </router-link>
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
      observer: null,
      parallaxHandler: null,
      heartInterval: null
    };
  },
  created() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  mounted() {
    this.initObserver()
    this.initSmoothScroll()
    this.addRippleStyles()
    this.initParallax()
    this.createFloatingHearts()
    this.initCounterAnimation()

    console.log('💖 Romantic Landing Page Initialized (Vue 2)')
  },

  beforeDestroy() {
    if (this.observer) this.observer.disconnect()
    if (this.parallaxHandler) {
      window.removeEventListener('scroll', this.parallaxHandler)
    }
    if (this.heartInterval) clearInterval(this.heartInterval)
  },

  methods: {
    // ============================================
    // INTERSECTION OBSERVER
    // ============================================
    initObserver() {
      const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')

            if (entry.target.classList.contains('stat__number')) {
              this.animateCounter(entry.target)
            }
          }
        })
      }, options)

      const selectors = [
        '.demo__phone',
        '.step',
        '.pricing-card',
        '.social-proof__quote-text',
        '.stat',
        '.final-cta__container'
      ]

      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          this.observer.observe(el)
        })
      })
    },

    // ============================================
    // COUNTER
    // ============================================
    animateCounter(el) {
      if (el.dataset.animated === 'true') return
      el.dataset.animated = 'true'

      const target = Number(el.dataset.target || 0)
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const update = () => {
        current += increment
        if (current < target) {
          el.textContent = Math.floor(current)
          requestAnimationFrame(update)
        } else {
          el.textContent = target
        }
      }

      update()
    },

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    initSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
          const href = anchor.getAttribute('href')
          if (href === '#') return

          const target = document.querySelector(href)
          if (target) {
            e.preventDefault()
            target.scrollIntoView({ behavior: 'smooth' })
          }
        })
      })
    },

    // ============================================
    // RIPPLE STYLE
    // ============================================
    addRippleStyles() {
      if (document.getElementById('ripple-style')) return

      const style = document.createElement('style')
      style.id = 'ripple-style'
      style.innerHTML = `
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,.6);
          transform: scale(0);
          animation: ripple .6s ease-out;
          pointer-events: none;
        }
        @keyframes ripple {
          to { transform: scale(2); opacity: 0; }
        }
      `
      document.head.appendChild(style)
    },

    // ============================================
    // PARALLAX
    // ============================================
    initParallax() {
      const hero = document.querySelector('.hero')
      const particles = document.querySelector('.hero__particles')
      if (!hero || !particles) return

      this.parallaxHandler = () => {
        const scrolled = window.pageYOffset
        const heroHeight = hero.offsetHeight
        if (scrolled < heroHeight) {
          particles.style.opacity = 1 - (scrolled / heroHeight)
        }
      }

      window.addEventListener('scroll', this.parallaxHandler, { passive: true })
    },

    // ============================================
    // FLOATING HEARTS
    // ============================================
    createFloatingHearts() {
      const container = document.querySelector('.social-proof')
      if (!container) return

      if (!document.getElementById('heart-style')) {
        const style = document.createElement('style')
        style.id = 'heart-style'
        style.innerHTML = `
          @keyframes floatUp {
            0% { transform: translateY(0) rotate(0); opacity: 0 }
            10% { opacity: .3 }
            90% { opacity: .3 }
            100% { transform: translateY(-1000px) rotate(360deg); opacity: 0 }
          }
        `
        document.head.appendChild(style)
      }

      this.heartInterval = setInterval(() => {
        const heart = document.createElement('div')
        heart.innerHTML = '♥'
        heart.style.position = 'absolute'
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px'
        heart.style.color = `rgba(255,255,255,${Math.random() * 0.1 + 0.05})`
        heart.style.left = Math.random() * 100 + '%'
        heart.style.bottom = '-50px'
        heart.style.pointerEvents = 'none'
        heart.style.animation = `floatUp ${Math.random() * 3 + 4}s ease-in forwards`

        container.appendChild(heart)
        setTimeout(() => heart.remove(), 7000)
      }, 3000)
    },

    initCounterAnimation() {
      const observerOptions = {
        threshold: 0.5, // Khi 50% section xuất hiện trên màn hình thì mới chạy
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetEl = entry.target;
            this.animateNumber(targetEl);
            observer.unobserve(targetEl); // Chạy xong 1 lần thì dừng quan sát (để không nhảy lại khi cuộn ngược lên)
          }
        });
      }, observerOptions);

      // Tìm tất cả các số cần nhảy
      const counters = document.querySelectorAll('.stat__number');
      counters.forEach((counter) => observer.observe(counter));
    },

    animateNumber(el) {
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 2000; // Tổng thời gian chạy (2 giây)
      const stepTime = 20; // Cập nhật sau mỗi 20ms
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.innerText = target.toLocaleString(); // Định dạng số có dấu phẩy (3,200)
          clearInterval(timer);
        } else {
          el.innerText = Math.floor(current).toLocaleString();
        }
      }, stepTime);
    }


  }
};
</script>
