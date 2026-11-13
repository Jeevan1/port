import React from 'react';

const SECTION_HTML = `<div class="section-slider-wrapper">
  <div class="showcase-slider">
    <div class="showcase-slide">
      <img src="/jeevan/project-brdc.png" loading="lazy" alt="BRDC — Baijnath Research and Development Center" class="showcase-slide-img" />
    </div>
    <div class="showcase-slide">
      <img src="/jeevan/project-jye.webp" loading="lazy" alt="Join Your Event — Event Discovery Platform" class="showcase-slide-img" />
    </div>
    <div class="showcase-slide">
      <img src="/jeevan/project-oneup.png" loading="lazy" alt="BusinessBoard — Business Analytics Dashboard" class="showcase-slide-img" />
    </div>
    <div class="showcase-slide">
      <img src="/jeevan/project-spdss.png" loading="lazy" alt="SPDSS School Website" class="showcase-slide-img" />
    </div>
    <div class="showcase-slide">
      <img src="/jeevan/project-reconditionhub.png" loading="lazy" alt="Recondition Hub — Vehicle Marketplace" class="showcase-slide-img" />
    </div>
    <div class="showcase-slide">
      <img src="/jeevan/project-src.png" loading="lazy" alt="Santosh Raj Construction" class="showcase-slide-img" />
    </div>
    <div class="showcase-slide">
      <img src="/jeevan/project-lifeline.png" loading="lazy" alt="LifeLine Achham — Blood Donor Directory" class="showcase-slide-img" />
    </div>
    <div class="showcase-slide">
      <img src="/jeevan/project-tsc.png" loading="lazy" alt="Tripura Sundari Campus" class="showcase-slide-img" />
    </div>
  </div>
</div>
<div class="showcase-html w-embed w-script">
<style>
  .section-slider-wrapper {
    overflow: hidden !important;
    position: relative;
    width: 100%;
  }
  .showcase-slider {
    display: flex !important;
    flex-direction: row !important;
    width: max-content !important;
    will-change: transform;
  }
  .showcase-slide {
    flex-shrink: 0 !important;
    will-change: transform;
  }
</style>
<script type="text/two26-script">
  (function () {
    function initShowcaseMarquee() {
      if (typeof gsap === "undefined") return;
      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      const scrollerEl = document.querySelector(".page") || window;
      const wrapper = document.querySelector(".section-slider-wrapper");
      if (!wrapper) return;

      const track = wrapper.querySelector(".showcase-slider");
      if (!track) return;

      const initialSlides = Array.from(
        track.querySelectorAll(".showcase-slide:not(.is-marquee-clone)")
      );
      if (!initialSlides.length) return;

      track.querySelectorAll(".is-marquee-clone").forEach((c) => c.remove());

      initialSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.classList.add("is-marquee-clone");
        track.appendChild(clone);
      });

      function measureSetWidth() {
        const firstClone = track.querySelector(".is-marquee-clone");
        if (firstClone && initialSlides[0]) {
          const origLeft = initialSlides[0].getBoundingClientRect().left;
          const cloneLeft = firstClone.getBoundingClientRect().left;
          const exactDist = Math.abs(cloneLeft - origLeft);
          if (exactDist > 0) return exactDist;
        }
        let sum = 0;
        initialSlides.forEach((s) => {
          sum += (s.offsetWidth || 400) + 4;
        });
        return sum;
      }

      let setWidth = measureSetWidth();
      let x = 0;
      let targetDir = -1;
      let currentDir = -1;
      let velocityBoost = 0;
      let hoverFactor = 1;

      if (window.lenis) {
        window.lenis.on("scroll", (e) => {
          if (e.direction) {
            targetDir = e.direction === -1 ? 1 : -1;
          }
          if (typeof e.velocity === "number") {
            velocityBoost = Math.min(Math.abs(e.velocity) / 200, 8);
          }
        });
      }

      wrapper.addEventListener("mouseenter", () => {
        gsap.to({ v: hoverFactor }, {
          v: 0.2,
          duration: 0.5,
          onUpdate: function () {
            hoverFactor = this.targets()[0].v;
          }
        });
      });

      wrapper.addEventListener("mouseleave", () => {
        gsap.to({ v: hoverFactor }, {
          v: 1,
          duration: 0.5,
          onUpdate: function () {
            hoverFactor = this.targets()[0].v;
          }
        });
      });

      function tick() {
        currentDir += (targetDir - currentDir) * 0.08;
        velocityBoost *= 0.92;
        if (setWidth <= 0) {
          setWidth = measureSetWidth();
        }
        if (setWidth <= 0) return;

        x += (1.4 + velocityBoost) * currentDir * hoverFactor;
        while (x <= -setWidth) x += setWidth;
        while (x >= 0) x -= setWidth;

        gsap.set(track, { x: x, force3D: true });
      }

      gsap.ticker.add(tick);
      window.addEventListener("resize", () => {
        const w = measureSetWidth();
        if (w > 0) setWidth = w;
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initShowcaseMarquee);
    } else {
      initShowcaseMarquee();
    }
  })();
</script>
</div>`;

export default function ShowcaseMarqueeSection() {
  return (
    <section
      className="section-slider-showcase"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
