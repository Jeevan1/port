import React from 'react';

const SECTION_HTML = `<div class="hero-section-html w-embed w-script"><style>
  .section-hero .hero-text h1,
  .section-hero .hero-text .heading,
  .section-hero [data-hero-heading],
  .section-hero h1 {
    opacity: 0;
  }

  .section-hero .hero-pill {
    opacity: 0;
    will-change: transform, opacity;
  }

  .section-hero .hero-pill .hero-pill-text,
  .section-hero .hero-pill [class*="pill-text"],
  .section-hero .hero-pill [class*="pill-label"] {
    display: block;
    will-change: transform, opacity;
  }

  .section-hero .hero-pill-text-mask {
    overflow: hidden;
    display: block;
  }

  .section-hero .hero-path-svg-left svg,
  .section-hero .hero-path-svg-right svg {
    overflow: visible;
  }

  .hero-line-mask {
    display: block !important;
    overflow: hidden !important;
  }

  .hero-line {
    display: block !important;
    will-change: transform, opacity;
  }
</style>

<script type="text/two26-script">
  (function () {
    function initTwo26HeroAnimation() {
      const heroSection = document.querySelector(
        ".section-hero, section.hero, [data-section='hero']",
      );
      if (!heroSection) return;

      const headings = Array.from(
        heroSection.querySelectorAll(
          ".hero-text h1, .hero-text .heading, h1, [data-hero-heading]",
        ),
      );
      const pills = Array.from(heroSection.querySelectorAll(".hero-pill"));
      const allSvgPaths = Array.from(
        heroSection.querySelectorAll(
          ".hero-path-svg-left svg path, .hero-path-svg-right svg path, .hero-path-svg-left path, .hero-path-svg-right path",
        ),
      );

      if (typeof gsap === "undefined") {
        headings.forEach((h) => (h.style.opacity = "1"));
        pills.forEach((p) => {
          p.style.opacity = "1";
          p.style.transform = "none";
        });
        return;
      }

      if (typeof SplitText !== "undefined") {
        gsap.registerPlugin(SplitText);
      }
      if (typeof DrawSVGPlugin !== "undefined") {
        gsap.registerPlugin(DrawSVGPlugin);
      }
      const hasDrawSVG = typeof DrawSVGPlugin !== "undefined";

      let linesList = [];

      headings.forEach((heading) => {
        let lines = [];
        if (typeof SplitText !== "undefined") {
          const split = new SplitText(heading, {
            type: "lines",
            linesClass: "hero-line",
          });
          split.lines.forEach((line) => {
            const mask = document.createElement("span");
            mask.className = "hero-line-mask";
            mask.style.display = "block";
            mask.style.overflow = "hidden";
            line.parentNode.insertBefore(mask, line);
            mask.appendChild(line);
          });
          lines = split.lines;
        } else {
          const rawText = heading.textContent.trim();
          heading.innerHTML = \`<span class="hero-line-mask"><span class="hero-line">\${rawText}</span></span>\`;
          lines = Array.from(heading.querySelectorAll(".hero-line"));
        }

        gsap.set(heading, { opacity: 1 });
        gsap.set(lines, {
          y: "115%",
          opacity: 0,
          display: "block",
        });

        linesList = linesList.concat(lines);
      });

      if (pills.length) {
        gsap.set(pills, {
          opacity: 0,
          scale: 0.4,
          y: 20,
          transformOrigin: "center center",
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        });
      }

      const pathData = [];
      if (allSvgPaths.length) {
        allSvgPaths.forEach((path) => {
          path.style.strokeLinecap = "round";
          path.style.strokeLinejoin = "round";

          const originalStrokeWidth =
            parseFloat(
              path.getAttribute("stroke-width") ||
                window.getComputedStyle(path).strokeWidth,
            ) || 12;

          pathData.push({ path, originalStrokeWidth });

          if (hasDrawSVG) {
            gsap.set(path, {
              drawSVG: "0%",
              strokeWidth: 0,
            });
          } else {
            const len = path.getTotalLength ? path.getTotalLength() : 1500;
            path.style.strokeDasharray = len;
            path.style.strokeDashoffset = len;
            gsap.set(path, { strokeWidth: 0 });
          }
        });
      }

      const heroTl = gsap
        .timeline({
          paused: true,
          defaults: { ease: "power2.out" },
        })
        .timeScale(0.75);

      if (linesList.length) {
        heroTl.to(
          linesList,
          {
            y: "0%",
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "back.out(1.4)",
          },
          0,
        );
      }

      const totalLinesTime = linesList.length
        ? linesList.length * 0.12 + 0.5
        : 1.2;

      pills.forEach((pill, i) => {
        const pillStart =
          0.2 + (i / Math.max(1, pills.length)) * totalLinesTime * 0.7;

        const pillTextEl = pill.querySelector(
          ".hero-pill-text, [class*='pill-text'], [class*='pill-label'], span, div",
        );

        if (pillTextEl && !pillTextEl.closest(".hero-pill-text-mask")) {
          const mask = document.createElement("span");
          mask.className = "hero-pill-text-mask";
          mask.style.overflow = "hidden";
          mask.style.display = "block";
          pillTextEl.parentNode.insertBefore(mask, pillTextEl);
          mask.appendChild(pillTextEl);

          gsap.set(pillTextEl, { y: "105%", opacity: 0 });
        }

        heroTl.to(
          pill,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.55,
            ease: "back.out(2.5)",
          },
          pillStart,
        );

        if (pillTextEl) {
          heroTl.to(
            pillTextEl,
            {
              y: "0%",
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.6)",
            },
            pillStart + 0.15,
          );
        }
      });

      if (pathData.length) {
        pathData.forEach((item, pIdx) => {
          const startTime = totalLinesTime * 0.4 + pIdx * 0.15;

          if (hasDrawSVG) {
            heroTl
              .to(
                item.path,
                {
                  drawSVG: "100%",
                  duration: 0.9,
                  ease: "power2.out",
                },
                startTime,
              )
              .to(
                item.path,
                {
                  strokeWidth: item.originalStrokeWidth,
                  duration: 0.9,
                  ease: "power2.out",
                },
                startTime,
              );
          } else {
            heroTl
              .to(
                item.path,
                {
                  strokeDashoffset: 0,
                  duration: 0.9,
                  ease: "power2.out",
                },
                startTime,
              )
              .to(
                item.path,
                {
                  strokeWidth: item.originalStrokeWidth,
                  duration: 0.9,
                  ease: "power2.out",
                },
                startTime,
              );
          }
        });
      }

      let heroPlayed = false;
      function playHero() {
        if (heroPlayed) return;
        heroPlayed = true;
        heroTl.play();
      }

      if (window.__two26LoaderDone) {
        playHero();
      } else {
        document.addEventListener("two26:loaderComplete", playHero, {
          once: true,
        });
        if (window.__two26LoaderDone) playHero();
        setTimeout(playHero, 8000);
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTwo26HeroAnimation);
    } else {
      initTwo26HeroAnimation();
    }
  })();
</script>
</div><div class="section-hero-wrapper"><div class="hero-text"><div class="hero-pill two"><div class="hero-pill-text">Hello &amp; Welcome!</div></div><h1 class="heading">JEEVAN SHRESTHA FRONTEND DEVELOPER</h1><div class="hero-pill one"><div class="hero-pill-text">React &amp; Next.js</div></div><div class="hero-pill three"><div class="hero-pill-text">Kathmandu, Nepal</div></div></div><div class="hero-video-loop"><div class="jeevan-hero-showcase"><div class="jeevan-hero-bento"><div class="jeevan-hero-bento-left"><div class="jeevan-hero-status"><span class="jeevan-status-dot"></span><span>Frontend Developer @ Ajna Lab</span></div><h2 class="jeevan-hero-bento-title">Crafting Fast, Visually Stunning Web Interfaces</h2><p class="jeevan-hero-bento-desc">Hi, I'm Jeevan Shrestha — specializing in React.js, Next.js, Tailwind CSS &amp; scalable front-end architecture.</p><div class="jeevan-hero-bento-projects"><img src="/jeevan/project-jye.webp" alt="Join Your Event" class="jeevan-mini-shot"/><img src="/jeevan/project-brdc.png" alt="BRDC Nepal" class="jeevan-mini-shot"/><img src="/jeevan/project-oneup.png" alt="BusinessBoard" class="jeevan-mini-shot"/></div></div><div class="jeevan-hero-portrait-card"><img src="/jeevan/banner-right-image.jpg" alt="Jeevan Shrestha - Frontend Developer" class="jeevan-hero-portrait-img"/></div></div><div class="jeevan-hero-badge b1"><img src="/jeevan/skill-react.png" alt="React"/><span>React.js</span></div><div class="jeevan-hero-badge b2"><img src="/jeevan/skill-nextjs.png" alt="Next.js"/><span>Next.js</span></div><div class="jeevan-hero-badge b3"><img src="/jeevan/skill-tailwind.png" alt="Tailwind"/><span>Tailwind CSS</span></div></div></div><div class="hero-path-svg-left"><div class="code-embed-3 w-embed"><svg width="100%" height="100%" viewBox="0 0 229 599" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.502 584.112C104.502 557.112 147.911 474.964 143.002 393.612C139.502 335.612 106.002 281.612 59.0025 252.612C7.82072 221.032 -4.20053 385.572 52.5031 405.612C140.218 436.612 225.002 369.112 212.002 252.612C208.376 220.111 192.539 178.612 152.002 121.612C117.866 73.6124 42.0029 11.6124 42.0029 11.6124" stroke="#03a4ed" stroke-width="30"/>
</svg>
</div></div><div class="hero-path-svg-right"><div class="code-embed-2 w-embed"><svg width="100%" height="100%" viewBox="0 0 354 487" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M250.687 12.2982C192.69 52.7982 114.69 199.814 245.687 315.798C376.684 431.783 364.19 140.889 235.187 83.2982C153.19 46.6926 54.8365 106.798 30.1893 172.298C-59.5565 410.798 277.687 471.798 277.687 471.798" stroke="#fe3f40" stroke-width="30"/>
</svg>
</div></div><div class="hero-marquee"><div class="code-embed-8 w-embed w-script"><style>
  .hero-marquee svg {
    overflow: visible !important;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }

  .hero-marquee-text,
  .hero-marquee-tp,
  .marquee-unit,
  .hero-marquee-text tspan {
    dominant-baseline: central !important;
    alignment-baseline: central !important;
    -webkit-font-smoothing: antialiased;
  }
</style>

<svg
  viewBox="0 0 1440 370"
  preserveAspectRatio="xMidYMid meet"
  style="width: 100%; height: auto; display: block; overflow: visible"
>
  <defs>
    <path
      id="hero-marquee-curve"
      d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117 L 5000 507"
      fill="none"
    />

    <mask id="hero-marquee-text-mask" maskUnits="userSpaceOnUse">
      <path
        class="hero-marquee-mask-path"
        d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117"
        stroke="#FFFFFF"
        stroke-width="220"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </mask>
  </defs>

  <path
    class="hero-marquee-bg"
    d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117"
    stroke="#03a4ed"
    stroke-width="154"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />

  <g class="hero-marquee-text-group" mask="url(#hero-marquee-text-mask)">
    <text
      class="hero-marquee-text"
      fill="#FFFFFF"
      dominant-baseline="central"
      alignment-baseline="central"
      font-size="80"
      font-weight="800"
      font-family="inherit"
      style="
        letter-spacing: 0.04em;
        user-select: none;
        dominant-baseline: central;
        alignment-baseline: central;
      "
    >
      <textPath
        href="#hero-marquee-curve"
        xlink:href="#hero-marquee-curve"
        class="hero-marquee-tp"
        startOffset="0"
        dominant-baseline="central"
        alignment-baseline="central"
      >
        <tspan
          class="marquee-unit"
          dominant-baseline="central"
          alignment-baseline="central"
        >
          FRONTEND DEVELOPER &nbsp;•&nbsp; REACT &amp; NEXT.JS SPECIALIST &nbsp;•&nbsp;
        </tspan>
        <tspan dominant-baseline="central" alignment-baseline="central">
          FRONTEND DEVELOPER &nbsp;•&nbsp; REACT &amp; NEXT.JS SPECIALIST &nbsp;•&nbsp;
        </tspan>
        <tspan dominant-baseline="central" alignment-baseline="central">
          FRONTEND DEVELOPER &nbsp;•&nbsp; REACT &amp; NEXT.JS SPECIALIST &nbsp;•&nbsp;
        </tspan>
        <tspan dominant-baseline="central" alignment-baseline="central">
          FRONTEND DEVELOPER &nbsp;•&nbsp; REACT &amp; NEXT.JS SPECIALIST &nbsp;•&nbsp;
        </tspan>
        <tspan dominant-baseline="central" alignment-baseline="central">
          FRONTEND DEVELOPER &nbsp;•&nbsp; REACT &amp; NEXT.JS SPECIALIST &nbsp;•&nbsp;
        </tspan>
        <tspan dominant-baseline="central" alignment-baseline="central">
          FRONTEND DEVELOPER &nbsp;•&nbsp; REACT &amp; NEXT.JS SPECIALIST &nbsp;•&nbsp;
        </tspan>
      </textPath>
    </text>
  </g>
</svg>

<script type="text/two26-script">
  (function () {
    function initHeroMarquee() {
      if (typeof gsap === "undefined") return;

      if (typeof DrawSVGPlugin !== "undefined") {
        gsap.registerPlugin(DrawSVGPlugin);
      }
      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      const bgPath = document.querySelector(".hero-marquee-bg");
      const maskPath = document.querySelector(".hero-marquee-mask-path");
      const textPath = document.querySelector(".hero-marquee-tp");
      const textGroup = document.querySelector(".hero-marquee-text-group");
      const unit = document.querySelector(".marquee-unit");
      const container =
        document.querySelector(".hero-marquee") ||
        (bgPath ? bgPath.closest("svg") : null);

      if (!bgPath || !maskPath || !textPath) return;

      gsap.set([bgPath, maskPath], { drawSVG: "100% 100%" });

      const startInfiniteMarquee = () => {
        const unitLength = unit ? unit.getComputedTextLength() : 1600;
        const speedDuration = unitLength / 75;

        gsap.to(textPath, {
          attr: { startOffset: -unitLength },
          duration: speedDuration,
          ease: "none",
          repeat: -1,
        });
      };

      startInfiniteMarquee();

      const scrollerEl = document.querySelector(".page") || window;

      gsap.to([bgPath, maskPath], {
        drawSVG: "0% 100%",
        delay: window.innerWidth < 991 ? 0.3 : 0,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          scroller: scrollerEl,
          start: "top 85%",
          once: true,
        },
        onComplete: () => {
          if (textGroup) {
            textGroup.removeAttribute("mask");
          }
        },
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initHeroMarquee);
    } else {
      initHeroMarquee();
    }
  })();
</script>
</div></div></div>`;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="section-hero"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
