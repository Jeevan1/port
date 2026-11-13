import React from 'react';

const SECTION_HTML = `<div class="section-about-wrapper">
  <div class="section-about-text">ABOUT JEEVAN SHRESTHA</div>
  <div class="about-pinned">
    <p class="about-para">
      Hi, I'm Jeevan Shrestha, a software developer specializing in creating seamless and optimized web applications with visually stunning and highly functional user interfaces.
    </p>
    <div class="about-pill first">
      <div class="hero-pill-text">Frontend @ Ajna Lab</div>
    </div>
    <div class="about-pill second">
      <div class="hero-pill-text">BSc. CSIT Graduate</div>
    </div>
    <div class="about-pill third">
      <div class="hero-pill-text">Clean UI &amp; Performance</div>
    </div>
  </div>
</div>
<div class="about-pinned-html w-embed w-script">
<style>
  .section-about {
    position: relative !important;
    z-index: 2;
    padding: 6em 1.25em 4em !important;
  }
  .section-about .section-about-wrapper {
    height: auto !important;
    min-height: 75svh !important;
    position: relative !important;
  }
  .section-about .about-pill {
    opacity: 0;
    will-change: transform, opacity;
  }
</style>
<script type="text/two26-script">
  (function () {
    function initAboutPinned() {
      if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);
      if (typeof SplitText !== "undefined") {
        gsap.registerPlugin(SplitText);
      }

      const section = document.querySelector(".section-about");
      if (!section) return;

      const wrapper = section.querySelector(".section-about-wrapper") || section;
      const para = section.querySelector(".about-para");
      const pills = Array.from(section.querySelectorAll(".about-pill"));
      const scrollerEl = document.querySelector(".page") || window;

      if (!para) return;

      let chars = [];
      if (typeof SplitText !== "undefined") {
        const split = new SplitText(para, { type: "words,chars", charsClass: "about-char" });
        chars = split.chars;
      } else {
        const text = para.textContent || "";
        para.innerHTML = text
          .split("")
          .map((c) => (c === " " ? " " : '<span class="about-char">' + c + "</span>"))
          .join("");
        chars = Array.from(para.querySelectorAll(".about-char"));
      }

      gsap.set(chars, { color: "rgba(15, 23, 42, 0.22)" });
      gsap.set(pills, { opacity: 0, scale: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          scroller: scrollerEl,
          start: "top 78%",
          end: "bottom 35%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      chars.forEach((char, index) => {
        tl.to(
          char,
          {
            keyframes: [
              { color: "#03a4ed", duration: 0.3 },
              { color: "#0f172a", duration: 0.3 },
            ],
            ease: "none",
          },
          index * 0.03
        );
      });

      const totalDur = tl.duration() || 1;
      pills.forEach((pill, i) => {
        const pos = ((i + 0.35) / Math.max(1, pills.length)) * totalDur * 0.85;
        tl.to(
          pill,
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "back.out(2.2)",
          },
          pos
        );
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAboutPinned);
    } else {
      initAboutPinned();
    }
  })();
</script>
</div>`;

export default function AboutPinnedSection() {
  return (
    <section
      id="about"
      className="section-about"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
