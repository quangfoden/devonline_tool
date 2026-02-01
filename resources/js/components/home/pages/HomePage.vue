<template>
  <!-- <TopBar /> -->
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav__container">
      <a href="#" class="nav__logo"
        >Thiệp<span class="nav__logo-accent">Tương Tác</span></a
      >
      <ul class="nav__menu">
        <li class="nav__item"><a href="#about" class="nav__link">Giới Thiệu</a></li>
        <li class="nav__item"><a href="#templates" class="nav__link">Mẫu Thiệp</a></li>
        <li class="nav__item">
          <a href="#how-it-works" class="nav__link">Cách Hoạt Động</a>
        </li>
        <li class="nav__item"><a href="#pricing" class="nav__link">Bảng Giá</a></li>
      </ul>
      <button class="nav__button">Bắt Đầu Ngay</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero__background">
      <div class="hero__gradient"></div>
      <canvas class="hero__canvas" id="particles"></canvas>
    </div>
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          Tạo Thiệp Chúc Mừng<br />
          <span class="hero__title-accent">Tương Tác Độc Đáo</span>
        </h1>
        <p class="hero__tagline">
          Biến khoảnh khắc đặc biệt thành trải nghiệm đáng nhớ với thiệp tương tác hiện
          đại
        </p>
        <div class="hero__buttons">
          <a href="#templates" class="hero__button hero__button--primary">
            Xem Demo
            <svg
              class="hero__button-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7 4L13 10L7 16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </a>
          <a href="#templates" class="hero__button hero__button--secondary">
            Tạo Thiệp Ngay
          </a>
        </div>
      </div>
      <div class="hero__stats">
        <div class="hero__stat">
          <div class="hero__stat-number">500+</div>
          <div class="hero__stat-label">Mẫu Thiệp</div>
        </div>
        <div class="hero__stat">
          <div class="hero__stat-number">10K+</div>
          <div class="hero__stat-label">Người Dùng</div>
        </div>
        <div class="hero__stat">
          <div class="hero__stat-number">99%</div>
          <div class="hero__stat-label">Hài Lòng</div>
        </div>
      </div>
    </div>
    <div class="hero__scroll">
      <span class="hero__scroll-text">Cuộn xuống</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about" id="about">
    <div class="about__container">
      <div class="about__content">
        <span class="about__label">Về Chúng Tôi</span>
        <h2 class="about__title">Kết Hợp Công Nghệ<br />Và Sáng Tạo</h2>
        <p class="about__text">
          Xin chào! Tôi là một Frontend Developer đam mê tạo ra những trải nghiệm web độc
          đáo. Với kinh nghiệm trong việc phát triển các ứng dụng tương tác, tôi tin rằng
          mỗi khoảnh khắc đặc biệt đều xứng đáng được tôn vinh bằng một thiệp chúc mừng
          độc nhất.
        </p>
        <p class="about__text">
          Nền tảng này được xây dựng với công nghệ hiện đại, tối ưu hóa trải nghiệm người
          dùng và khả năng tùy chỉnh cao. Mỗi mẫu thiệp đều được thiết kế tỉ mỉ để mang
          lại cảm xúc chân thật nhất.
        </p>
      </div>
      <div class="about__tech">
        <h3 class="about__tech-title">Công Nghệ Sử Dụng</h3>
        <div class="about__tech-grid">
          <div class="about__tech-item">
            <div class="about__tech-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M8 8L12 38L24 42L36 38L40 8H8Z" fill="#E44D26" />
                <path d="M24 10V40L34 37L37 10H24Z" fill="#F16529" />
                <path d="M24 20H30L30.5 15H24V10H36L35 24H24V20Z" fill="white" />
                <path d="M24 32V36L18 34.5L17.5 30H13L14 36L24 39V32Z" fill="#EBEBEB" />
              </svg>
            </div>
            <span class="about__tech-name">HTML5</span>
          </div>
          <div class="about__tech-item">
            <div class="about__tech-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M8 8L12 38L24 42L36 38L40 8H8Z" fill="#264DE4" />
                <path d="M24 10V40L34 37L37 10H24Z" fill="#2965F1" />
                <path d="M24 20H18L17.5 15H24V10H12L14 24H24V20Z" fill="white" />
                <path d="M24 32V36L18 34.5L17.5 30H13L14 36L24 39V32Z" fill="#EBEBEB" />
              </svg>
            </div>
            <span class="about__tech-name">CSS3</span>
          </div>
          <div class="about__tech-item">
            <div class="about__tech-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="2" fill="#F7DF1E" />
                <path
                  d="M20 32C20 34 21 35 23 35C25 35 26 34 26 32V20H24V32C24 33 23.5 33 23 33C22.5 33 22 33 22 32V20H20V32Z"
                  fill="#000"
                />
                <path
                  d="M28 29C28 31 29 33 32 33C35 33 36 31 36 29V28H34V29C34 30 33.5 31 32 31C30.5 31 30 30 30 29C30 28 30.5 27 32 27C35 27 36 25 36 23C36 21 35 19 32 19C29 19 28 21 28 23V24H30V23C30 22 30.5 21 32 21C33.5 21 34 22 34 23C34 24 33.5 25 32 25C29 25 28 27 28 29Z"
                  fill="#000"
                />
              </svg>
            </div>
            <span class="about__tech-name">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Templates Section -->
  <section class="templates" id="templates">
    <div class="templates__container">
      <div class="templates__header">
        <span class="templates__label">Bộ Sưu Tập</span>
        <h2 class="templates__title">Mẫu Thiệp Tương Tác</h2>
        <p class="templates__subtitle">
          Khám phá các mẫu thiệp được thiết kế sẵn cho mọi dịp đặc biệt
        </p>
      </div>
      <div class="templates__grid">
        <!-- Template Card 1 -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__image template-card__image--birthday">
              <div class="template-card__overlay">
                <span class="template-card__tag">Phổ Biến</span>
              </div>
            </div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp Sinh Nhật Tương Tác</h3>
            <p class="template-card__description">
              Tạo bất ngờ với hiệu ứng nến thổi, pháo hoa và nhạc sinh nhật. Tùy chỉnh màu
              sắc, thông điệp và thêm ảnh cá nhân.
            </p>
            <div class="template-card__buttons">
              <a href="#" class="template-card__button template-card__button--demo">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8L8 2L14 8M8 3V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Xem Demo
              </a>
              <a href="#" class="template-card__button template-card__button--create">
                Tạo Ngay
              </a>
            </div>
          </div>
        </article>

        <!-- Template Card 2 -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__image template-card__image--newyear">
              <div class="template-card__overlay">
                <span class="template-card__tag">Mới</span>
              </div>
            </div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp Năm Mới Sang Trọng</h3>
            <p class="template-card__description">
              Chào đón năm mới với hiệu ứng đếm ngược, pháo hoa rực rỡ và lời chúc may
              mắn. Thiết kế hiện đại, tinh tế.
            </p>
            <div class="template-card__buttons">
              <a href="#" class="template-card__button template-card__button--demo">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8L8 2L14 8M8 3V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Xem Demo
              </a>
              <a href="#" class="template-card__button template-card__button--create">
                Tạo Ngay
              </a>
            </div>
          </div>
        </article>

        <!-- Template Card 3 -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__image template-card__image--valentine">
              <div class="template-card__overlay">
                <span class="template-card__tag">Lãng Mạn</span>
              </div>
            </div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp Valentine Ngọt Ngào</h3>
            <p class="template-card__description">
              Gửi tình yêu với hiệu ứng trái tim bay, cánh hoa rơi và âm nhạc lãng mạn.
              Hoàn hảo cho ngày đặc biệt.
            </p>
            <div class="template-card__buttons">
              <a href="#" class="template-card__button template-card__button--demo">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8L8 2L14 8M8 3V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Xem Demo
              </a>
              <a href="#" class="template-card__button template-card__button--create">
                Tạo Ngay
              </a>
            </div>
          </div>
        </article>

        <!-- Template Card 4 -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__image template-card__image--wedding">
              <div class="template-card__overlay">
                <span class="template-card__tag">Cao Cấp</span>
              </div>
            </div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp Cưới Thanh Lịch</h3>
            <p class="template-card__description">
              Thiết kế sang trọng với hiệu ứng hoa rơi, nhạc nền nhẹ nhàng. Tích hợp xác
              nhận tham dự và bản đồ địa điểm.
            </p>
            <div class="template-card__buttons">
              <a href="#" class="template-card__button template-card__button--demo">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8L8 2L14 8M8 3V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Xem Demo
              </a>
              <a href="#" class="template-card__button template-card__button--create">
                Tạo Ngay
              </a>
            </div>
          </div>
        </article>

        <!-- Template Card 5 -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__image template-card__image--christmas">
              <div class="template-card__overlay">
                <span class="template-card__tag">Mùa Lễ</span>
              </div>
            </div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp Giáng Sinh Ấm Áp</h3>
            <p class="template-card__description">
              Không khí Giáng Sinh với tuyết rơi, cây thông và âm thanh chuông. Gửi lời
              chúc ấm áp đến người thân yêu.
            </p>
            <div class="template-card__buttons">
              <a href="#" class="template-card__button template-card__button--demo">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8L8 2L14 8M8 3V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Xem Demo
              </a>
              <a href="#" class="template-card__button template-card__button--create">
                Tạo Ngay
              </a>
            </div>
          </div>
        </article>

        <!-- Template Card 6 -->
        <article class="template-card">
          <div class="template-card__preview">
            <div class="template-card__image template-card__image--graduation">
              <div class="template-card__overlay">
                <span class="template-card__tag">Đặc Biệt</span>
              </div>
            </div>
          </div>
          <div class="template-card__content">
            <h3 class="template-card__title">Thiệp Tốt Nghiệp Tự Hào</h3>
            <p class="template-card__description">
              Chúc mừng thành tích với hiệu ứng mũ tốt nghiệp bay, confetti rực rỡ. Hoàn
              hảo cho khoảnh khắc tự hào.
            </p>
            <div class="template-card__buttons">
              <a href="#" class="template-card__button template-card__button--demo">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8L8 2L14 8M8 3V14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Xem Demo
              </a>
              <a href="#" class="template-card__button template-card__button--create">
                Tạo Ngay
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="how-it-works" id="how-it-works">
    <div class="how-it-works__container">
      <div class="how-it-works__header">
        <span class="how-it-works__label">Quy Trình</span>
        <h2 class="how-it-works__title">3 Bước Đơn Giản</h2>
        <p class="how-it-works__subtitle">
          Tạo thiệp chúc mừng chuyên nghiệp chỉ trong vài phút
        </p>
      </div>
      <div class="how-it-works__timeline">
        <div class="how-it-works__step">
          <div class="how-it-works__step-number">
            <span>01</span>
          </div>
          <div class="how-it-works__step-content">
            <h3 class="how-it-works__step-title">Chọn Mẫu Thiệp</h3>
            <p class="how-it-works__step-text">
              Duyệt qua bộ sưu tập 500+ mẫu thiệp được thiết kế chuyên nghiệp cho mọi dịp.
              Từ sinh nhật, năm mới đến cưới hỏi, tốt nghiệp - tất cả đều có sẵn.
            </p>
          </div>
        </div>
        <div class="how-it-works__step">
          <div class="how-it-works__step-number">
            <span>02</span>
          </div>
          <div class="how-it-works__step-content">
            <h3 class="how-it-works__step-title">Tùy Chỉnh Nội Dung</h3>
            <p class="how-it-works__step-text">
              Cá nhân hóa thiệp với lời nhắn riêng, thêm ảnh, thay đổi màu sắc và hiệu
              ứng. Giao diện kéo-thả trực quan giúp bạn dễ dàng chỉnh sửa mọi chi tiết.
            </p>
          </div>
        </div>
        <div class="how-it-works__step">
          <div class="how-it-works__step-number">
            <span>03</span>
          </div>
          <div class="how-it-works__step-content">
            <h3 class="how-it-works__step-title">Chia Sẻ & Gửi Đi</h3>
            <p class="how-it-works__step-text">
              Tạo link độc nhất để chia sẻ qua email, tin nhắn hoặc mạng xã hội. Theo dõi
              ai đã xem thiệp và nhận phản hồi ngay lập tức.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing" id="pricing">
    <div class="pricing__container">
      <div class="pricing__header">
        <span class="pricing__label">Bảng Giá</span>
        <h2 class="pricing__title">Chọn Gói Phù Hợp</h2>
        <p class="pricing__subtitle">Linh hoạt từ miễn phí đến chuyên nghiệp</p>
      </div>
      <div class="pricing__grid">
        <!-- Free Plan -->
        <div class="pricing-card">
          <div class="pricing-card__header">
            <h3 class="pricing-card__name">Miễn Phí</h3>
            <div class="pricing-card__price">
              <span class="pricing-card__amount">0đ</span>
              <span class="pricing-card__period">/tháng</span>
            </div>
            <p class="pricing-card__description">Hoàn hảo để bắt đầu</p>
          </div>
          <ul class="pricing-card__features">
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>5 mẫu thiệp cơ bản</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>Tùy chỉnh text & màu sắc</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>Chia sẻ qua link</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>5 thiệp/tháng</span>
            </li>
            <li class="pricing-card__feature pricing-card__feature--disabled">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path d="M6 6L14 14M6 14L14 6" stroke="currentColor" stroke-width="2" />
              </svg>
              <span>Watermark</span>
            </li>
          </ul>
          <button class="pricing-card__button">Dùng Thử Miễn Phí</button>
        </div>

        <!-- Pro Plan -->
        <div class="pricing-card pricing-card--featured">
          <div class="pricing-card__badge">Phổ Biến Nhất</div>
          <div class="pricing-card__header">
            <h3 class="pricing-card__name">Pro</h3>
            <div class="pricing-card__price">
              <span class="pricing-card__amount">199k</span>
              <span class="pricing-card__period">/tháng</span>
            </div>
            <p class="pricing-card__description">Cho người dùng chuyên nghiệp</p>
          </div>
          <ul class="pricing-card__features">
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>500+ mẫu thiệp cao cấp</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>Tùy chỉnh hoàn toàn</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>Upload ảnh & video</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>Không giới hạn thiệp</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>Không watermark</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>Phân tích chi tiết</span>
            </li>
            <li class="pricing-card__feature">
              <svg class="pricing-card__icon" width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M16 6L8 14L4 10"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <span>Hỗ trợ ưu tiên</span>
            </li>
          </ul>
          <button class="pricing-card__button pricing-card__button--featured">
            Bắt Đầu Pro
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <div class="cta__container">
      <div class="cta__content">
        <h2 class="cta__title">Sẵn Sàng Tạo Thiệp<br />Độc Đáo Của Riêng Bạn?</h2>
        <p class="cta__text">
          Hàng nghìn người đã tạo khoảnh khắc đặc biệt với thiệp tương tác. Đến lượt bạn
          tạo điều kỳ diệu!
        </p>
        <button class="cta__button">
          Bắt Đầu Ngay - Miễn Phí
          <svg
            class="cta__button-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="#" class="footer__logo"
            >Thiệp<span class="footer__logo-accent">Tương Tác</span></a
          >
          <p class="footer__description">
            Tạo thiệp chúc mừng tương tác độc đáo cho mọi dịp đặc biệt. Công nghệ hiện
            đại, thiết kế tinh tế.
          </p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                />
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10 0C7.284 0 6.944.012 5.877.06 4.813.109 4.086.278 3.45.525a4.917 4.917 0 00-1.772 1.153A4.917 4.917 0 00.525 3.45C.278 4.086.109 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.917 4.917 0 001.153 1.772 4.917 4.917 0 001.772 1.153c.636.247 1.363.416 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.917 4.917 0 001.772-1.153 4.917 4.917 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.917 4.917 0 00-1.153-1.772A4.917 4.917 0 0016.55.525C15.914.278 15.187.109 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.986.01 4.04.058.975.045 1.504.207 1.857.344.467.181.8.398 1.15.748.35.35.567.683.748 1.15.137.353.3.882.344 1.857.048 1.054.058 1.37.058 4.04 0 2.67-.01 2.986-.058 4.04-.045.975-.207 1.504-.344 1.857-.181.467-.398.8-.748 1.15-.35.35-.683.567-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058-2.67 0-2.986-.01-4.04-.058-.975-.045-1.504-.207-1.857-.344a3.097 3.097 0 01-1.15-.748 3.097 3.097 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.04 0-2.67.01-2.986.058-4.04.045-.975.207-1.504.344-1.857.181-.467.398-.8.748-1.15.35-.35.683-.567 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.04-.058zM10 13.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.538-.203a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"
                />
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M19.582 4.616a2.5 2.5 0 00-1.76-1.771C16.254 2.5 10 2.5 10 2.5s-6.254 0-7.822.345a2.5 2.5 0 00-1.76 1.771C0 6.193 0 10 0 10s0 3.807.418 5.384a2.5 2.5 0 001.76 1.771c1.568.345 7.822.345 7.822.345s6.254 0 7.822-.345a2.5 2.5 0 001.76-1.771C20 13.807 20 10 20 10s0-3.807-.418-5.384zM8 13V7l5.196 3L8 13z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer__links">
          <h4 class="footer__title">Sản Phẩm</h4>
          <ul class="footer__list">
            <li><a href="#templates" class="footer__link">Mẫu Thiệp</a></li>
            <li><a href="#pricing" class="footer__link">Bảng Giá</a></li>
            <li><a href="#" class="footer__link">Tính Năng</a></li>
            <li><a href="#" class="footer__link">API</a></li>
          </ul>
        </div>
        <div class="footer__links">
          <h4 class="footer__title">Hỗ Trợ</h4>
          <ul class="footer__list">
            <li><a href="#" class="footer__link">Trung Tâm Trợ Giúp</a></li>
            <li><a href="#" class="footer__link">Hướng Dẫn</a></li>
            <li><a href="#" class="footer__link">Video Tutorial</a></li>
            <li><a href="#" class="footer__link">Liên Hệ</a></li>
          </ul>
        </div>
        <div class="footer__links">
          <h4 class="footer__title">Công Ty</h4>
          <ul class="footer__list">
            <li><a href="#about" class="footer__link">Về Chúng Tôi</a></li>
            <li><a href="#" class="footer__link">Blog</a></li>
            <li><a href="#" class="footer__link">Tuyển Dụng</a></li>
            <li><a href="#" class="footer__link">Đối Tác</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">© 2026 ThiệpTươngTác. Bảo lưu mọi quyền.</p>
        <div class="footer__legal">
          <a href="#" class="footer__legal-link">Điều Khoản Sử Dụng</a>
          <a href="#" class="footer__legal-link">Chính Sách Bảo Mật</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import TopBar from "@components/home/partials/TopBar.vue";
// import slideSection from "@components/home/sections/home/slideSection.vue";
// import AboutSection from "@components/home/AboutSection.vue";
// import NewsSectione from "@components/home/NewsSectione.vue";
// import FooterSection from "@components/FooterSection.vue";
// import ProductsSection from "@components/home/ProductsSection.vue";

export default {
  components: {
    TopBar,
    // slideSection,
    // AboutSection,
    // NewsSectione,
    // ProductsSection,
    // FooterSection
  },
  data() {
    return {};
  },
  created() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  methods: {},
};
</script>
