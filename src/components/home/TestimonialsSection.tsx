import React from 'react';

const SECTION_HTML = `<div class="section-testimonials-wrapper">
  <div class="section-projects-header">
    <div class="section-about-text">TESTIMONIALS</div>
    <div class="section-heading-wrapper">
      <h2 class="section-heading">What People Say</h2>
      <h2 class="section-heading orange">What People Say</h2>
    </div>
  </div>

  <div class="section-testimonials-body">
    <div class="testimonials-body-bg">
      <div class="testimonial-list-wrapper">
        <div class="testimonial-list">
          <!-- Card 1: Arjun Jhukal -->
          <div class="testimonial-item">
            <div class="testimonial-card">
              <h3 class="testimonial-heading">&ldquo;INNOVATIVE APPROACH &amp; ATTENTION TO DETAIL&rdquo;</h3>
              <div class="testimonial-card-btm">
                <p class="testimonial-card-para">
                  &ldquo;Jeevan Shrestha consistently impressed us with their innovative approach to front-end development. Their attention to detail and commitment to excellence set them apart.&rdquo;
                </p>
                <div class="testimonial-card-pfp">
                  <div class="testimonial-img-wrap">
                    <img src="/jeevan/user1.png" loading="lazy" alt="Arjun Jhukal" class="image" />
                  </div>
                  <div class="pfp-info-wrapper">
                    <div class="testimonial-pfp-name">ARJUN JHUKAL</div>
                    <div class="testimonial-pfp-designation">Frontend Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Harish Bhatt -->
          <div class="testimonial-item">
            <div class="testimonial-card">
              <h3 class="testimonial-heading">&ldquo;VISUALLY APPEALING &amp; USER-FRIENDLY INTERFACES&rdquo;</h3>
              <div class="testimonial-card-btm">
                <p class="testimonial-card-para">
                  &ldquo;Working with Jeevan Shrestha was a delightful experience. Their ability to create visually appealing and user-friendly interfaces exceeded our expectations.&rdquo;
                </p>
                <div class="testimonial-card-pfp">
                  <div class="testimonial-img-wrap">
                    <img src="/jeevan/user2.png" loading="lazy" alt="Harish Bhatt" class="image" />
                  </div>
                  <div class="pfp-info-wrapper">
                    <div class="testimonial-pfp-name">HARISH BHATT</div>
                    <div class="testimonial-pfp-designation">Fullstack Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Rajendra Thapa -->
          <div class="testimonial-item">
            <div class="testimonial-card">
              <h3 class="testimonial-heading">&ldquo;GOES ABOVE AND BEYOND FOR OUTSTANDING RESULTS&rdquo;</h3>
              <div class="testimonial-card-btm">
                <p class="testimonial-card-para">
                  &ldquo;Jeevan Shrestha is a highly skilled developer who always goes above and beyond to deliver outstanding results. It was a pleasure collaborating with them.&rdquo;
                </p>
                <div class="testimonial-card-pfp">
                  <div class="testimonial-img-wrap">
                    <img src="/jeevan/user1.png" loading="lazy" alt="Rajendra Thapa" class="image" />
                  </div>
                  <div class="pfp-info-wrapper">
                    <div class="testimonial-pfp-name">RAJENDRA THAPA</div>
                    <div class="testimonial-pfp-designation">UI/UX Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Bijay Shrestha -->
          <div class="testimonial-item">
            <div class="testimonial-card">
              <h3 class="testimonial-heading">&ldquo;TRANSFORMING DESIGNS INTO FUNCTIONAL INTERFACES&rdquo;</h3>
              <div class="testimonial-card-btm">
                <p class="testimonial-card-para">
                  &ldquo;I was thoroughly impressed by Jeevan Shrestha's professionalism and expertise. They have a natural talent for transforming design concepts into functional interfaces.&rdquo;
                </p>
                <div class="testimonial-card-pfp">
                  <div class="testimonial-img-wrap">
                    <img src="/jeevan/user2.png" loading="lazy" alt="Bijay Shrestha" class="image" />
                  </div>
                  <div class="pfp-info-wrapper">
                    <div class="testimonial-pfp-name">BIJAY SHRESTHA</div>
                    <div class="testimonial-pfp-designation">UI/UX Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="side-bar">
        <div class="nav-arrow" id="testimonial-next-btn" title="Next Testimonial">
          <div class="nav-arrow-svg w-embed">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="testimonial-html w-embed w-script">
<script type="text/two26-script">
  (function () {
    function initTestimonials() {
      if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);

      const section = document.querySelector(".section-testimonials");
      if (!section) return;

      const body = section.querySelector(".section-testimonials-body");
      const items = Array.from(section.querySelectorAll(".testimonial-item"));
      const nextBtn = section.querySelector("#testimonial-next-btn");
      const bg = section.querySelector(".testimonials-body-bg");
      const scrollerEl = document.querySelector(".page") || window;

      if (!items.length || !body) return;

      const rotations = [-3, 3.5, -2, 2.5];
      const offsets = [
        { x: -12, y: -8 },
        { x: 10, y: -4 },
        { x: -6, y: 6 },
        { x: 0, y: 0 },
      ];

      items.forEach((item, i) => {
        gsap.set(item, {
          xPercent: -50,
          yPercent: -50,
          x: offsets[i % offsets.length].x,
          y: offsets[i % offsets.length].y + (i > 0 ? 180 : 0),
          opacity: i === 0 ? 1 : 0,
          scale: i === 0 ? 1 : 0.92,
          rotation: rotations[i % rotations.length],
          zIndex: i + 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: body,
          scroller: scrollerEl,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((item, i) => {
        if (i === 0) return;
        tl.to(
          item,
          {
            y: offsets[i % offsets.length].y,
            x: offsets[i % offsets.length].x,
            opacity: 1,
            scale: 1,
            rotation: rotations[i % rotations.length],
            duration: 0.7,
            ease: "back.out(1.6)",
          },
          (i - 1) * 0.25
        );
      });

      let activeOrder = items.slice();
      function cycleTopCard() {
        const topItem = activeOrder[activeOrder.length - 1];
        if (!topItem) return;
        gsap.to(topItem, {
          x: 160,
          y: -35,
          rotation: 10,
          scale: 0.95,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            activeOrder.unshift(activeOrder.pop());
            activeOrder.forEach((el, idx) => {
              el.style.zIndex = String(idx + 1);
            });
            gsap.to(topItem, {
              x: offsets[0].x,
              y: offsets[0].y,
              opacity: 1,
              scale: 1,
              rotation: rotations[0],
              duration: 0.38,
              ease: "back.out(1.7)",
            });
          },
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          cycleTopCard();
        });
      }
      if (bg) {
        bg.addEventListener("click", () => {
          cycleTopCard();
        });
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTestimonials);
    } else {
      initTestimonials();
    }
  })();
</script>
</div>`;

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-testimonials"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
