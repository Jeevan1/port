import React from 'react';

const SECTION_HTML = `<div class="section-services-wrapper">
  <div class="section-projects-header">
    <div class="section-about-text">SKILLS &amp; EXPERIENCE</div>
    <div class="section-heading-wrapper">
      <h2 class="section-heading">What I Do Best</h2>
      <h2 class="section-heading orange">What I Do Best</h2>
    </div>
  </div>

  <div class="section-services-body">
    <div class="services-path">
      <div class="blockhole-start w-embed">
        <svg width="100%" height="100%" viewBox="0 0 112 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="55.6673" cy="36.2624" rx="55.6673" ry="36.2624" transform="matrix(-0.971896 -0.23541 -0.23541 0.971896 118.234 14.127)" fill="#0f172a" />
          <path d="M5.79248 27.6194C5.42577 16.5356 26.867 5.79914 48.0372 8.70733C69.2075 11.6155 103.575 26.185 95.8878 46.298C88.2008 66.4109 37.9372 56.6788 26.7423 48.7243C15.5473 40.7697 16.0598 29.5205 26.7277 25.4375C37.3955 21.3544 65.8756 24.4426 69.2869 36.1228C72.6981 47.8031 53.7824 44.3652 46.7988 38.7586" stroke="#03a4ed" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <div class="services-path-svg w-embed">
        <svg viewBox="0 0 854 785" fill="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M783.729 35.0029C731.341 -17.3924 195.622 -14.7002 183.702 89.2663C171.783 193.233 886.993 130.985 851.622 281.47C816.251 431.954 91.5008 189.946 47.0012 310.172C2.50152 430.399 789.847 479.825 760.751 595.448C731.656 711.072 179.961 428.821 71.1583 561.782C-37.6442 694.742 35.1584 725.499 95.301 783.553"
            stroke="#03a4ed"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="services-path-svg-dark w-embed">
        <svg viewBox="0 0 854 785" fill="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            id="service-dark-path"
            d="M783.729 35.0029C731.341 -17.3924 195.622 -14.7002 183.702 89.2663C171.783 193.233 886.993 130.985 851.622 281.47C816.251 431.954 91.5008 189.946 47.0012 310.172C2.50152 430.399 789.847 479.825 760.751 595.448C731.656 711.072 179.961 428.821 71.1583 561.782C-37.6442 694.742 35.1584 725.499 95.301 783.553"
            stroke="#fe3f40"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="blackhole-end w-embed">
        <svg width="100%" height="100%" viewBox="0 0 112 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="55.6673" cy="36.2624" rx="55.6673" ry="36.2624" transform="matrix(-0.971896 -0.23541 -0.23541 0.971896 118.234 14.127)" fill="#0f172a" />
          <path d="M5.79248 27.6194C5.42577 16.5356 26.867 5.79914 48.0372 8.70733C69.2075 11.6155 103.575 26.185 95.8878 46.298C88.2008 66.4109 37.9372 56.6788 26.7423 48.7243C15.5473 40.7697 16.0598 29.5205 26.7277 25.4375C37.3955 21.3544 65.8756 24.4426 69.2869 36.1228C72.6981 47.8031 53.7824 44.3652 46.7988 38.7586" stroke="#fe3f40" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
    </div>

    <div class="services-layers">
      <!-- Layer 1: React.js & Next.js -->
      <div class="service-layer">
        <div class="service-block one">
          <div class="service-text">React.js</div>
          <div class="service-svg">
            <img src="/jeevan/skill-react.png" loading="lazy" alt="React.js" style="width:100%;height:auto;object-fit:contain;" />
          </div>
          <div class="service-text">&amp; Next.js</div>
          <div class="service-block-para-wrapper">
            <p class="service-block-para">
              Building fast, SEO-friendly SSR &amp; SPA web apps with React 19, Next.js, and Redux.
            </p>
          </div>
        </div>
      </div>

      <!-- Layer 2: Tailwind & SCSS -->
      <div class="service-layer">
        <div class="service-block two">
          <div class="service-text">Tailwind</div>
          <div class="service-svg">
            <img src="/jeevan/skill-tailwind.png" loading="lazy" alt="Tailwind CSS" style="width:100%;height:auto;object-fit:contain;" />
          </div>
          <div class="service-text">&amp; SCSS UI</div>
          <div class="service-block-para-wrapper">
            <p class="service-block-para">
              Crafting responsive, pixel-perfect interfaces with Tailwind CSS, SCSS, CSS3 &amp; Bootstrap.
            </p>
          </div>
        </div>
      </div>

      <!-- Layer 3: JavaScript & REST APIs -->
      <div class="service-layer">
        <div class="service-block three">
          <div class="service-text">JavaScript</div>
          <div class="service-svg">
            <img src="/jeevan/skill-js.png" loading="lazy" alt="JavaScript" style="width:100%;height:auto;object-fit:contain;" />
          </div>
          <div class="service-text">&amp; APIs</div>
          <div class="service-block-para-wrapper">
            <p class="service-block-para">
              Writing clean, modular ES6+ and TypeScript code with seamless REST API integrations.
            </p>
          </div>
        </div>
      </div>

      <!-- Layer 4: React Native & Mobile -->
      <div class="service-layer">
        <div class="service-block four">
          <div class="service-text">React</div>
          <div class="service-svg">
            <img src="/jeevan/skill-native.png" loading="lazy" alt="React Native" style="width:100%;height:auto;object-fit:contain;" />
          </div>
          <div class="service-text">Native</div>
          <div class="service-block-para-wrapper">
            <p class="service-block-para">
              Developing cross-platform mobile apps and real-time Firebase experiences.
            </p>
          </div>
        </div>
      </div>

      <!-- Layer 5: Ajna Lab -->
      <div class="service-layer">
        <div class="service-block five">
          <div class="service-text">Ajna Lab</div>
          <div class="service-svg">
            <img src="/jeevan/skill-redux.png" loading="lazy" alt="Ajna Lab" style="width:100%;height:auto;object-fit:contain;" />
          </div>
          <div class="service-text">(2025–Now)</div>
          <div class="service-block-para-wrapper">
            <p class="service-block-para">
              Frontend Developer building HealthTech systems like Ajna hOS &amp; Clinic Pro.
            </p>
          </div>
        </div>
      </div>

      <!-- Layer 6: Suga Inc -->
      <div class="service-layer">
        <div class="service-block six">
          <div class="service-text">Suga Inc.</div>
          <div class="service-svg">
            <img src="/jeevan/skill-github.png" loading="lazy" alt="Suga Inc." style="width:100%;height:auto;object-fit:contain;" />
          </div>
          <div class="service-text">(2023)</div>
          <div class="service-block-para-wrapper">
            <p class="service-block-para">
              Frontend Developer Intern delivering UI enhancements and production web features.
            </p>
          </div>
        </div>
      </div>

      <!-- Layer 7: BSc. CSIT -->
      <div class="service-layer">
        <div class="service-block seven">
          <div class="service-text">BSc. CSIT</div>
          <div class="service-svg">
            <img src="/jeevan/skill-django.png" loading="lazy" alt="BSc. CSIT" style="width:100%;height:auto;object-fit:contain;" />
          </div>
          <div class="service-text">Graduate</div>
          <div class="service-block-para-wrapper">
            <p class="service-block-para">
              BSc. CSIT from Madan Bhandari Memorial College (Tribhuvan University, 2018–2023).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="service-html w-embed w-script">
<script type="text/two26-script">
  (function () {
    function initServicesSection() {
      if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);
      if (typeof DrawSVGPlugin !== "undefined") {
        gsap.registerPlugin(DrawSVGPlugin);
      }

      const scrollerEl = document.querySelector(".page") || window;
      const section = document.querySelector(".section-services");
      if (!section) return;

      const darkPath = section.querySelector("#service-dark-path");
      const body = section.querySelector(".section-services-body");
      if (darkPath && body) {
        if (typeof DrawSVGPlugin !== "undefined") {
          gsap.set(darkPath, { drawSVG: "0% 0%" });
          gsap.to(darkPath, {
            drawSVG: "0% 100%",
            ease: "none",
            scrollTrigger: {
              trigger: body,
              scroller: scrollerEl,
              start: "top 65%",
              end: "bottom 55%",
              scrub: 0.8,
            },
          });
        } else {
          const len = darkPath.getTotalLength ? darkPath.getTotalLength() : 2800;
          gsap.set(darkPath, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(darkPath, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: body,
              scroller: scrollerEl,
              start: "top 65%",
              end: "bottom 55%",
              scrub: 0.8,
            },
          });
        }
      }

      const blocks = Array.from(section.querySelectorAll(".service-block"));
      blocks.forEach((block, i) => {
        const svg = block.querySelector(".service-svg");
        const paraWrap = block.querySelector(".service-block-para-wrapper");

        if (svg) {
          gsap.set(svg, { scale: 0.85, rotation: i % 2 === 0 ? -8 : 8 });
        }
        if (paraWrap) {
          gsap.set(paraWrap, { opacity: 0, y: 12, scale: 0.9 });
        }

        block.addEventListener("mouseenter", () => {
          if (svg) {
            gsap.to(svg, { scale: 1.12, rotation: i % 2 === 0 ? 6 : -6, duration: 0.35, ease: "back.out(2)" });
          }
          if (paraWrap) {
            gsap.to(paraWrap, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "back.out(1.7)" });
          }
        });

        block.addEventListener("mouseleave", () => {
          if (svg) {
            gsap.to(svg, { scale: 0.85, rotation: i % 2 === 0 ? -8 : 8, duration: 0.3, ease: "power2.out" });
          }
          if (paraWrap) {
            gsap.to(paraWrap, { opacity: 0, y: 12, scale: 0.9, duration: 0.25, ease: "power2.in" });
          }
        });
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initServicesSection);
    } else {
      initServicesSection();
    }
  })();
</script>
</div>`;

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="section-services"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
