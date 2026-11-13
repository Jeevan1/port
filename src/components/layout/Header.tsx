import React from 'react';

const DEFAULT_HEADER_HTML = `<nav class="navbar-wrap"><div class="navbar-links"><a href="#about" class="navbar-link-btn w-inline-block"><div class="navlink-text">About</div><div class="stroke-fill"><div class="stroke-fill-code w-embed"><svg width="100%" height="100%" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
</svg>
</div></div><div class="nav-link-btn-svg-draw-code w-embed w-script"><script type="text/two26-script">
  (function () {
    function initNavbarBtns() {
      if (typeof gsap === 'undefined') return;
      if (typeof DrawSVGPlugin !== 'undefined') {
        gsap.registerPlugin(DrawSVGPlugin);
      }
      const buttons = document.querySelectorAll('.navbar-link-btn');
      buttons.forEach((btn) => {
        if (btn.dataset.navBtnBound === 'true') return;
        btn.dataset.navBtnBound = 'true';
        const svgs = btn.querySelectorAll('svg');
        svgs.forEach((svg) => {
          svg.style.overflow = 'visible';
          svg.style.width = '100%';
          svg.style.height = '100%';
        });
        const paths = btn.querySelectorAll('.stroke-fill path, .stroke-fill-code path, svg path');
        if (!paths.length) return;
        const strokeFill = btn.querySelector('.stroke-fill');
        if (strokeFill) strokeFill.style.pointerEvents = 'none';
        paths.forEach((path) => {
          path.style.strokeLinecap = 'round';
          path.style.strokeLinejoin = 'round';
          const targetStrokeWidth = parseFloat(path.getAttribute('stroke-width')) || 36;
          gsap.set(path, { drawSVG: '0%', strokeWidth: 0 });
          const tl = gsap.timeline({ paused: true, defaults: { ease: 'power1.inOut' } });
          tl.to(path, { drawSVG: '100%', strokeWidth: targetStrokeWidth, duration: 0.5 });
          btn.addEventListener('mouseenter', () => tl.timeScale(1).play());
          btn.addEventListener('mouseleave', () => tl.timeScale(1.4).reverse());
        });
      });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initNavbarBtns);
    } else {
      initNavbarBtns();
    }
  })();
</script></div></a><a href="#projects" class="navbar-link-btn w-inline-block"><div class="navlink-text">Projects</div><div class="stroke-fill"><div class="stroke-fill-code w-embed"><svg width="100%" height="100%" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
</svg>
</div></div></a><a href="#skills" class="navbar-link-btn w-inline-block"><div class="navlink-text">Skills</div><div class="stroke-fill"><div class="stroke-fill-code w-embed"><svg width="100%" height="100%" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
</svg>
</div></div></a><a href="/jeevan/CV_JEEVAN_SHRESTHA.pdf" target="_blank" download="CV_JEEVAN_SHRESTHA.pdf" class="navbar-link-btn w-inline-block"><div class="navlink-text">Download CV</div><div class="stroke-fill"><div class="stroke-fill-code w-embed"><svg width="100%" height="100%" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
</svg>
</div></div></a></div><a href="/" aria-current="page" class="navbar-logo w-inline-block w--current" style="display:flex;align-items:center;gap:0.45em;text-decoration:none;"><img src="/jeevan/logo.png" alt="JDev" style="height:28px;width:auto;object-fit:contain;display:block;"/></a><div class="navbar-right"><div class="navbar-timing">Kathmandu, Nepal</div><div class="cta-wrap"><a data-wf--cta-btn--variant="base" href="#" class="cta-btn w-inline-block"><div class="cta-text">Let&#x27;s Talk</div><div class="cta-btn-arrow"><div class="svg-arrow-cta w-embed"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_190_472)">
<path d="M1.46439 8.53621L8.53546 1.46515M3.05538 1.28837L8.53546 1.46515L8.71223 6.94522" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_190_472">
<rect width="10" height="10" fill="currentColor" transform="translate(10) rotate(90)"/>
</clipPath>
</defs>
</svg>
</div></div><div class="cta-btn-fill-hover"></div><div class="cta-btn-code w-embed w-script"><script type="text/two26-script">
  (function () {
    function initCTAButtons() {
      if (typeof gsap === "undefined") return;
      const buttons = document.querySelectorAll(".cta-btn");
      buttons.forEach((btn) => {
        if (btn.dataset.ctaBound === "true") return;
        btn.dataset.ctaBound = "true";
        const text = btn.querySelector(".cta-text");
        const arrow = btn.querySelector(".cta-btn-arrow, .svg-arrow-cta");
        const fillHover = btn.querySelector(".cta-btn-fill-hover");
        let arrowLoop = null;
        btn.addEventListener("mouseenter", () => {
          if (fillHover) {
            gsap.to(fillHover, { scale: 10, duration: 0.55, ease: "power2.out", overwrite: "auto" });
          }
          if (arrow) {
            gsap.set(arrow, { transformOrigin: "center center" });
            if (arrowLoop) arrowLoop.kill();
            arrowLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
            arrowLoop
              .to(arrow, { rotation: -25, duration: 0.22, ease: "power2.out" })
              .to(arrow, { rotation: 0, duration: 0.4, ease: "back.out(2.5)" });
          }
        });
        btn.addEventListener("mousemove", (e) => {
          const rect = btn.getBoundingClientRect();
          const currentX = gsap.getProperty(btn, "x") || 0;
          const currentY = gsap.getProperty(btn, "y") || 0;
          const originCenterX = rect.left - currentX + rect.width / 2;
          const originCenterY = rect.top - currentY + rect.height / 2;
          const deltaX = e.clientX - originCenterX;
          const deltaY = e.clientY - originCenterY;
          gsap.to(btn, { x: deltaX * 0.35, y: deltaY * 0.35, duration: 0.3, ease: "power2.out", overwrite: "auto" });
          const innerElements = [text, arrow].filter(Boolean);
          if (innerElements.length) {
            gsap.to(innerElements, { x: deltaX * 0.15, y: deltaY * 0.15, duration: 0.3, ease: "power2.out", overwrite: "auto" });
          }
        });
        btn.addEventListener("mouseleave", () => {
          if (arrowLoop) {
            arrowLoop.kill();
            arrowLoop = null;
          }
          if (arrow) {
            gsap.to(arrow, { rotation: 0, duration: 0.35, ease: "power2.out", overwrite: "auto" });
          }
          gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1.1, 0.4)", overwrite: "auto" });
          const innerElements = [text, arrow].filter(Boolean);
          if (innerElements.length) {
            gsap.to(innerElements, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1.1, 0.4)", overwrite: "auto" });
          }
          if (fillHover) {
            gsap.to(fillHover, { scale: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          }
        });
      });
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initCTAButtons);
    } else {
      initCTAButtons();
    }
  })();
</script>
</div></a></div><div class="ham-btn"><div class="ham-svg w-embed"><style>
  .two26-nav-toggle-btn {
    width: 2.5em !important;
    height: 2.5em !important;
    min-width: 2.5em !important;
    min-height: 2.5em !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border: 2px solid #03a4ed !important;
    border-radius: 0.25em !important;
    background-color: #e3f4fe !important;
    box-sizing: border-box !important;
    cursor: pointer !important;
    padding: 0.35em !important;
    position: relative !important;
    user-select: none !important;
    -webkit-tap-highlight-color: transparent !important;
  }

  .two26-toggle-svg {
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    max-height: 100% !important;
    overflow: visible !important;
    display: block !important;
    transform-origin: center center !important;
    will-change: transform;
    pointer-events: none !important;
  }

  .two26-toggle-svg path {
    will-change: stroke-dashoffset, stroke-dasharray, stroke-width;
  }
</style>
<div
  class="two26-nav-toggle-btn"
  role="button"
  aria-label="Toggle Menu"
  tabindex="0"
>
  <svg
    class="two26-toggle-svg"
    viewBox="-2 6.52 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="orange-path"
      d="M7.01247 34.0204C7.01247 34.0204 10.1314 34.0204 20.8246 34.0204C31.5179 34.0204 31.2364 16.0204 20.8246 16.0205C10.4128 16.0205 9.00975 16.0196 9.00975 16.0196C5.0415 16.0196 2 12.8812 2 9.00979C2 5.13839 5.13839 2 9.00979 2C12.8679 2.01076 15.9893 5.1363 16 8.98937V34.5196"
      stroke="#03a4ed"
      stroke-width="4"
      stroke-linecap="round"
    />
    <path
      class="cross-path"
      d="M6 24.52H26"
      stroke="#fe3f40"
      stroke-width="0"
      stroke-linecap="round"
    />
  </svg>
</div>
</div></div></div><div class="ham-navbar"><div class="ham-navbar-html w-embed w-script"><style>
  .ham-navbar {
    display: none;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    width: 100svw !important;
    height: 100vh !important;
    height: 100svh !important;
    background-color: rgba(227, 244, 254, 0.96) !important;
    opacity: 0;
    pointer-events: none;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
    margin: 0 !important;
  }

  @media (max-width: 768px) {
    .ham-navbar.is-open {
      display: block !important;
      opacity: 1;
      pointer-events: auto !important;
    }

    .hamburger-links > * {
      will-change: transform, opacity;
      transform-origin: center center;
    }
  }

  @media (min-width: 769px) {
    .ham-navbar,
    .ham-navbar.is-open {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
  }
</style>

<script type="text/two26-script">
  (function () {
    function initTwo26MobileSystem() {
      if (typeof gsap === "undefined") return;

      const hamNavbar = document.querySelector(".ham-navbar");
      const toggleButtons = Array.from(
        document.querySelectorAll(
          ".two26-nav-toggle-btn, .two26-toggle-btn, .menu-btn, .nav-toggle, [data-menu-toggle]",
        ),
      );

      let isMenuOpen = false;
      let navTimeline = null;
      let iconTimeline = null;

      const svgEls = Array.from(
        document.querySelectorAll(".two26-toggle-svg, .target-svg"),
      );

      let orangePath = null;
      let crossPath = null;
      let orangeTotalLen = 0;
      let crossTotalLen = 20;
      let horseshoeLen = 0;
      let stemLen = 20.0;
      let finalOffset = 0;
      let dashObj = null;

      if (svgEls.length) {
        const primarySvg = svgEls[0];
        orangePath =
          primarySvg.querySelector(".orange-path") ||
          primarySvg.querySelectorAll("path")[0];
        crossPath =
          primarySvg.querySelector(".cross-path") ||
          primarySvg.querySelectorAll("path")[1];

        if (orangePath && crossPath) {
          orangeTotalLen = orangePath.getTotalLength();
          crossTotalLen = crossPath.getTotalLength() || 20;

          horseshoeLen = orangeTotalLen * 0.44;
          for (let len = 0; len < orangeTotalLen; len += 0.2) {
            const pt = orangePath.getPointAtLength(len);
            if (len > 30 && pt.x <= 9.05 && Math.abs(pt.y - 16.02) < 0.3) {
              horseshoeLen = len;
              break;
            }
          }

          finalOffset = -(orangeTotalLen - stemLen);

          svgEls.forEach((svg) => {
            const op =
              svg.querySelector(".orange-path") ||
              svg.querySelectorAll("path")[0];
            const cp =
              svg.querySelector(".cross-path") ||
              svg.querySelectorAll("path")[1];
            if (op) {
              op.style.strokeDasharray = \`\${horseshoeLen} \${orangeTotalLen}\`;
              op.style.strokeDashoffset = "0";
            }
            if (cp) {
              cp.style.strokeDasharray = \`\${crossTotalLen} \${crossTotalLen}\`;
              cp.style.strokeDashoffset = \`\${crossTotalLen}\`;
              gsap.set(cp, { strokeWidth: 0 });
            }
            gsap.set(svg, { rotation: 0, transformOrigin: "center center" });
          });

          iconTimeline = gsap.timeline({ paused: true });
          dashObj = { len: horseshoeLen, offset: 0 };

          iconTimeline
            .to(
              dashObj,
              {
                len: stemLen,
                offset: finalOffset,
                duration: 0.85,
                ease: "power2.inOut",
                onUpdate: () => {
                  svgEls.forEach((svg) => {
                    const op =
                      svg.querySelector(".orange-path") ||
                      svg.querySelectorAll("path")[0];
                    if (op) {
                      op.style.strokeDasharray = \`\${dashObj.len} \${orangeTotalLen}\`;
                      op.style.strokeDashoffset = \`\${dashObj.offset}\`;
                    }
                  });
                },
              },
              0,
            )
            .to(
              svgEls
                .map(
                  (svg) =>
                    svg.querySelector(".cross-path") ||
                    svg.querySelectorAll("path")[1],
                )
                .filter(Boolean),
              {
                strokeWidth: 4,
                duration: 0.12,
                ease: "back.out(2)",
              },
              0.1,
            )
            .to(
              svgEls
                .map(
                  (svg) =>
                    svg.querySelector(".cross-path") ||
                    svg.querySelectorAll("path")[1],
                )
                .filter(Boolean),
              {
                strokeDashoffset: 0,
                duration: 0.6,
                ease: "power2.out",
              },
              0.2,
            )
            .to(
              svgEls,
              {
                rotation: 45,
                duration: 0.85,
                ease: "power3.inOut",
              },
              0,
            );
        }
      }

      const linksContainer = hamNavbar
        ? hamNavbar.querySelector(".hamburger-links")
        : null;
      const linkItems = linksContainer
        ? Array.from(linksContainer.children)
        : [];

      function openMenu() {
        if (isMenuOpen) return;
        isMenuOpen = true;

        if (iconTimeline) iconTimeline.play();

        if (hamNavbar) {
          document.body.style.overflow = "hidden";
          hamNavbar.classList.add("is-open");
          hamNavbar.style.display = "flex";
          hamNavbar.style.pointerEvents = "auto";

          if (navTimeline) navTimeline.kill();
          navTimeline = gsap.timeline();

          navTimeline.fromTo(
            hamNavbar,
            { opacity: 0 },
            { opacity: 1, duration: 0.4, ease: "power2.out" },
            0,
          );

          if (linkItems.length) {
            linkItems.forEach((item, index) => {
              const randomTilt = gsap.utils.random(-10, 10);
              navTimeline.fromTo(
                item,
                {
                  opacity: 0,
                  x: -35,
                  y: 50,
                  scale: 0.4,
                  rotation: randomTilt,
                },
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotation: 0,
                  duration: 0.75,
                  ease: "back.out(2.2)",
                },
                0.15 + index * 0.09,
              );
            });
          }
        }
      }

      function closeMenu() {
        if (!isMenuOpen) return;

        if (iconTimeline) iconTimeline.reverse();

        if (hamNavbar) {
          if (navTimeline) navTimeline.kill();
          navTimeline = gsap.timeline({
            onComplete: () => {
              hamNavbar.classList.remove("is-open");
              hamNavbar.style.display = "none";
              hamNavbar.style.pointerEvents = "none";
              document.body.style.overflow = "";
              isMenuOpen = false;
            },
          });

          if (linkItems.length) {
            navTimeline.to(
              linkItems,
              {
                opacity: 0,
                y: 20,
                scale: 0.8,
                duration: 0.25,
                stagger: 0.04,
                ease: "power2.in",
              },
              0,
            );
          }

          navTimeline.to(
            hamNavbar,
            { opacity: 0, duration: 0.3, ease: "power2.inOut" },
            0.1,
          );
        } else {
          isMenuOpen = false;
        }
      }

      function toggleMenu(e) {
        if (e) e.stopPropagation();
        if (isMenuOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      }

      toggleButtons.forEach((btn) => {
        if (!btn.__two26Bound) {
          btn.__two26Bound = true;
          btn.addEventListener("click", toggleMenu);
        }
      });

      linkItems.forEach((item) => {
        const clickable =
          item.tagName.toLowerCase() === "a" ? item : item.querySelector("a");
        if (clickable) {
          clickable.addEventListener("click", () => {
            closeMenu();
          });
        }
      });

      window.__two26MobileMenu = {
        open: openMenu,
        close: closeMenu,
        toggle: toggleMenu,
        isOpen: () => isMenuOpen,
      };
    }

    function safeInit() {
      if (typeof gsap !== "undefined") {
        initTwo26MobileSystem();
      } else {
        let count = 0;
        const checkGsap = setInterval(() => {
          count++;
          if (typeof gsap !== "undefined") {
            clearInterval(checkGsap);
            initTwo26MobileSystem();
          } else if (count > 40) {
            clearInterval(checkGsap);
          }
        }, 80);
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", safeInit);
    } else {
      safeInit();
    }
  })();
</script>
</div><div class="hamburger-links"><a href="#about" class="navbar-link-btn w-inline-block"><div class="navlink-text">About</div><div class="stroke-fill"><div class="stroke-fill-code w-embed"><svg width="100%" height="100%" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
</svg>
</div></div></a><a href="#projects" class="navbar-link-btn w-inline-block"><div class="navlink-text">Projects</div><div class="stroke-fill"><div class="stroke-fill-code w-embed"><svg width="100%" height="100%" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
</svg>
</div></div></a><a href="#skills" class="navbar-link-btn w-inline-block"><div class="navlink-text">Skills</div><div class="stroke-fill"><div class="stroke-fill-code w-embed"><svg width="100%" height="100%" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
</svg>
</div></div></a><a href="/jeevan/CV_JEEVAN_SHRESTHA.pdf" target="_blank" download="CV_JEEVAN_SHRESTHA.pdf" class="navbar-link-btn w-inline-block"><div class="navlink-text">Download CV</div><div class="stroke-fill"><div class="stroke-fill-code w-embed"><svg width="100%" height="100%" viewBox="0 0 75 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753" stroke="currentColor" stroke-width="24" stroke-linecap="round"/>
</svg>
</div></div></a><div class="ham-cta"><a data-wf--cta-btn--variant="base" href="#" class="cta-btn w-inline-block"><div class="cta-text">Let&#x27;s Talk</div><div class="cta-btn-arrow"><div class="svg-arrow-cta w-embed"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_190_472)">
<path d="M1.46439 8.53621L8.53546 1.46515M3.05538 1.28837L8.53546 1.46515L8.71223 6.94522" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_190_472">
<rect width="10" height="10" fill="currentColor" transform="translate(10) rotate(90)"/>
</clipPath>
</defs>
</svg>
</div></div><div class="cta-btn-fill-hover"></div></a></div></div></div></nav><div class="contact-page"><div class="contact-navbar"><div class="navbar-logo-contact"><div class="logo-svg w-embed"><img src="/jeevan/logo.png" alt="JDev" style="height:28px;width:auto;filter:brightness(0) invert(1);"/></div></div><div class="close-btn-wrapper"><a href="#" data-contact-close="true" class="close-btn w-inline-block"><div class="back-arrow w-embed"><svg width="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
<path d="M6.86328 0.5L0.499281 6.864M6.86328 6.864L0.499281 0.5" stroke="black" stroke-linecap="round"/>
</svg>
</div><div class="back-btn-txt">Close</div></a></div></div><div class="contact-content"><div class="contact-left"><h2 class="contact-heading">want to</h2><h2 class="contact-heading">build</h2><h2 class="contact-heading right">something</h2><h2 class="contact-heading left">great?</h2><p class="contact-para left">or just say hello!</p></div><div class="contact-right"><div class="contact-email-wrap"><div class="email-heading">Direct Email &amp; Projects</div><a href="mailto:shresthaj1981@gmail.com?subject=Hello%20Jeevan!" class="email-link">shresthaj1981@gmail.com</a></div><div class="contact-email-wrap"><div class="email-heading">Curriculum Vitae</div><a href="/jeevan/CV_JEEVAN_SHRESTHA.pdf" target="_blank" download="CV_JEEVAN_SHRESTHA.pdf" class="email-link">Download CV (PDF)</a></div></div></div><a href="https://www.linkedin.com/in/jeevan-shrestha-34a3b01a5" target="_blank" class="contact-social right w-inline-block"><div class="icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_347_3609)">
<path d="M21.2725 0.150391C22.6809 0.150391 23.8496 1.31911 23.8496 2.72754V21.2725C23.8496 22.6809 22.6809 23.8496 21.2725 23.8496H2.72754C1.31911 23.8496 0.150391 22.6809 0.150391 21.2725V2.72852C0.155784 2.04633 0.428741 1.39352 0.911133 0.911133C1.33331 0.488956 1.88594 0.226532 2.47461 0.164062L2.72852 0.150391H21.2725ZM2.72754 2.03223C2.33379 2.03223 2.03223 2.33379 2.03223 2.72754V21.2695C2.03032 21.3617 2.04666 21.4535 2.08105 21.5391C2.11548 21.6247 2.16718 21.7023 2.23242 21.7676C2.29767 21.8328 2.37533 21.8845 2.46094 21.9189C2.54564 21.953 2.63628 21.9683 2.72754 21.9668V21.9678H21.2725V21.9668C21.3637 21.9683 21.4544 21.953 21.5391 21.9189C21.6247 21.8845 21.7023 21.8328 21.7676 21.7676C21.8328 21.7023 21.8845 21.6247 21.9189 21.5391C21.9533 21.4535 21.9697 21.3617 21.9678 21.2695V2.72754C21.9678 2.33379 21.6662 2.03223 21.2725 2.03223H2.72754ZM15.7832 9.18359C17.3766 9.18359 18.2845 9.69934 18.8057 10.5234C19.3369 11.3635 19.4863 12.5533 19.4863 13.9434V19.4863H16.582V14.5908C16.582 13.9965 16.5787 13.2839 16.3545 12.7207C16.2406 12.4348 16.0676 12.1795 15.8037 11.9971C15.5395 11.8144 15.1967 11.7139 14.7607 11.7139C14.3227 11.7139 13.966 11.7996 13.6787 11.958C13.3905 12.117 13.1804 12.344 13.0303 12.6133C12.7339 13.145 12.668 13.8439 12.668 14.5225V19.4863H9.7627V9.42285H12.5322V10.8535H12.8408L12.8828 10.7744C13.2881 10.0071 14.2786 9.18362 15.7832 9.18359ZM7.45215 9.42285V19.4863H4.51367V9.42285H7.45215ZM5.92871 4.20703C6.37895 4.21789 6.80748 4.40429 7.12207 4.72656C7.43654 5.04878 7.61226 5.4814 7.6123 5.93164C7.6123 6.38186 7.43648 6.81448 7.12207 7.13672C6.80748 7.45899 6.37895 7.64539 5.92871 7.65625C5.69872 7.66179 5.46996 7.62129 5.25586 7.53711C5.04179 7.45293 4.84625 7.3267 4.68164 7.16602C4.51718 7.00538 4.38613 6.81343 4.29688 6.60156C4.2076 6.3896 4.16211 6.16164 4.16211 5.93164C4.16213 5.70163 4.20757 5.47368 4.29688 5.26172C4.38616 5.04982 4.51712 4.85791 4.68164 4.69727C4.84627 4.53656 5.04175 4.41036 5.25586 4.32617C5.46996 4.242 5.69873 4.20149 5.92871 4.20703Z" fill="#f2f9fe" stroke="#f2f9fe" stroke-width="0.3"/>
</g>
<defs>
<clipPath id="clip0_347_3609">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
</div><div class="contact-social-link">LinkedIn</div></a><a href="https://github.com/Jeevan1" target="_blank" class="contact-social left w-inline-block"><div class="icon w-embed"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2772 21.0498 21.7437 19.0074C23.2101 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="#f2f9fe"/>
</svg>
</div><div class="contact-social-link">GitHub</div></a><div class="contact-img-wrap"><img src="/jeevan/about.png" loading="lazy" alt="Jeevan Shrestha" class="contact-img"/></div><div class="contact-transition"><div class="svg-tcontact w-embed"><svg width="100%" viewBox="0 0 998 901" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
<path d="M372.5 886C372.5 886 879.181 886 855 766.5C801.982 504.5 19.5 1042.52 19.5 646.5C19.5 316.5 952.535 583.56 978 318.5C1000 89.5 193.6 431.263 111 221C34.6544 26.6589 565 19 565 19" stroke="#03a4ed" stroke-width="1600" stroke-linecap="round"/>
</svg>
</div></div><div class="contact-page-html w-embed w-script"><style>
  .contact-page {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    width: 100svw !important;
    height: 100vh !important;
    height: 100svh !important;
    max-height: 100svh !important;
    z-index: 9999999 !important;
    display: none;
    visibility: hidden;
    pointer-events: none;
    overflow: hidden !important;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }

  .contact-page::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }

  .contact-page.is-active {
    display: flex !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  .contact-transition,
  .svg-tcontact {
    pointer-events: none;
  }

  .contact-transition svg,
  .svg-tcontact svg {
    overflow: visible;
  }

  .contact-heading-char {
    display: inline-block;
    will-change: transform, opacity, text-shadow;
    transform-origin: center center;
  }

  .contact-para-line-mask {
    overflow: hidden !important;
    display: block !important;
  }

  .contact-para-line {
    display: block !important;
    will-change: transform, opacity;
  }

  .email-heading,
  .contact-right .email-heading {
    white-space: nowrap !important;
    word-break: keep-all !important;
  }

  .contact-word-mask {
    overflow: hidden !important;
    display: inline-block !important;
    white-space: nowrap !important;
    vertical-align: top !important;
  }

  .contact-word {
    display: inline-block !important;
    white-space: nowrap !important;
    will-change: transform, opacity;
  }

  .email-link,
  .contact-right .email-link,
  .contact-right [class*="email-link"] {
    white-space: nowrap !important;
    word-break: keep-all !important;
    overflow: visible !important;
    display: inline-block !important;
  }

  .contact-email-char {
    display: inline-block;
    transform-origin: center center;
    will-change: transform, text-shadow;
  }

  .contact-social {
    will-change: transform, opacity;
  }

  .contact-img-wrap {
    overflow: visible !important;
    contain: none !important;
    display: flex !important;
    align-items: flex-end !important;
    justify-content: center !important;
    pointer-events: none !important;
  }

  .contact-img-wrap svg,
  .contact-img-wrap img,
  .contact-img {
    overflow: visible !important;
    max-height: 52vh !important;
    max-height: 52svh !important;
    width: auto !important;
    max-width: 85vw !important;
    object-fit: contain !important;
    display: block !important;
    transform-origin: bottom center !important;
    -webkit-transform-origin: bottom center !important;
    will-change: transform, opacity;
  }

  @media (max-width: 767px) {
    .contact-img-wrap svg,
    .contact-img-wrap img,
    .contact-img {
      max-height: 35svh !important;
      width: auto !important;
      object-fit: contain !important;
    }
  }
</style>

<script type="text/two26-script">
  (function () {
    function initTwo26ContactModal() {
      if (typeof gsap === "undefined") return;

      if (typeof DrawSVGPlugin !== "undefined") {
        gsap.registerPlugin(DrawSVGPlugin);
      }
      if (typeof SplitText !== "undefined") {
        gsap.registerPlugin(SplitText);
      }

      const contactPage = document.querySelector(
        ".contact-page, [data-contact-page]",
      );
      if (!contactPage) return;

      const closeBtn = document.querySelector(
        ".close-btn, .close-btn-wrapper a, [data-contact-close]",
      );
      const openTriggers = Array.from(
        document.querySelectorAll(
          "[data-contact-trigger], .cta-btn, .nav-btn, a[href='#contact'], a[href*='contact']",
        ),
      ).filter(
        (btn) =>
          !btn.closest(".contact-page") &&
          !btn.classList.contains("close-btn") &&
          !btn.hasAttribute("data-contact-close"),
      );

      const contactNavbar = contactPage.querySelector(".contact-navbar");
      const contactContent = contactPage.querySelector(".contact-content");
      const contactHeadings = Array.from(
        contactPage.querySelectorAll(".contact-heading, .contact-left h2"),
      );
      const contactParas = Array.from(
        contactPage.querySelectorAll(".contact-para, .contact-left p"),
      );
      const emailHeadings = Array.from(
        contactPage.querySelectorAll(
          ".email-heading, .contact-right .email-heading",
        ),
      );
      const emailLinks = Array.from(
        contactPage.querySelectorAll(".email-link, a[href^='mailto:']"),
      );
      const contactSocials = Array.from(
        contactPage.querySelectorAll(".contact-social"),
      );
      const contactImg = contactPage.querySelector(
        ".contact-img, .contact-img-wrap img, .contact-img-wrap",
      );
      const transitionPaths = Array.from(
        contactPage.querySelectorAll(
          ".contact-transition svg path, .svg-tcontact svg path, .contact-transition path, .svg-tcontact path",
        ),
      );

      let isOpen = false;
      let openTl = null;

      let headingChars = [];
      contactHeadings.forEach((heading) => {
        if (typeof SplitText !== "undefined") {
          const split = new SplitText(heading, {
            type: "chars,words",
            charsClass: "contact-heading-char",
          });
          headingChars = headingChars.concat(split.chars);
        } else {
          const words = heading.textContent.trim().split(" ");
          heading.innerHTML = words
            .map(
              (w) =>
                \`<span style="display:inline-block;">\` +
                w
                  .split("")
                  .map((c) => \`<span class="contact-heading-char">\${c}</span>\`)
                  .join("") +
                \`</span>\`,
            )
            .join(" ");
          headingChars = headingChars.concat(
            Array.from(heading.querySelectorAll(".contact-heading-char")),
          );
        }
      });

      let paraLines = [];
      contactParas.forEach((para) => {
        if (typeof SplitText !== "undefined") {
          const split = new SplitText(para, {
            type: "lines",
            linesClass: "contact-para-line",
          });
          split.lines.forEach((line) => {
            const mask = document.createElement("span");
            mask.className = "contact-para-line-mask";
            line.parentNode.insertBefore(mask, line);
            mask.appendChild(line);
          });
          paraLines = paraLines.concat(split.lines);
        } else {
          const raw = para.innerHTML.trim();
          para.innerHTML = \`<span class="contact-para-line-mask"><span class="contact-para-line">\${raw}</span></span>\`;
          paraLines = paraLines.concat(
            Array.from(para.querySelectorAll(".contact-para-line")),
          );
        }
      });

      let emailHeadingWords = [];
      emailHeadings.forEach((eh) => {
        if (typeof SplitText !== "undefined") {
          const split = new SplitText(eh, {
            type: "words",
            wordsClass: "contact-word",
          });
          split.words.forEach((word) => {
            const mask = document.createElement("span");
            mask.className = "contact-word-mask";
            mask.style.display = "inline-block";
            word.parentNode.insertBefore(mask, word);
            mask.appendChild(word);
          });
          emailHeadingWords = emailHeadingWords.concat(split.words);
        } else {
          const raw = eh.textContent.trim().split(" ");
          eh.innerHTML = raw
            .map(
              (w) =>
                \`<span class="contact-word-mask" style="display:inline-block; margin-right:0.25em;"><span class="contact-word">\${w}</span></span>\`,
            )
            .join("");
          emailHeadingWords = emailHeadingWords.concat(
            Array.from(eh.querySelectorAll(".contact-word")),
          );
        }
      });

      emailLinks.forEach((el) => {
        Array.from(el.childNodes).forEach((node) => {
          if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent.trim().length > 0
          ) {
            const span = document.createElement("span");
            span.className = "contact-email-text-wrap";
            span.style.display = "inline-block";

            const raw = node.textContent;
            span.innerHTML = raw
              .split("")
              .map((c) => {
                if (c === " ") return "&nbsp;";
                return \`<span class="contact-email-char">\${c}</span>\`;
              })
              .join("");

            node.parentNode.replaceChild(span, node);
          }
        });

        const chars = Array.from(el.querySelectorAll(".contact-email-char"));
        if (!chars.length) return;

        el.addEventListener("mouseenter", () => {
          chars.forEach((char, idx) => {
            const randomTilt = gsap.utils.random(-7, 7);
            const charDelay = idx * 0.035;

            gsap.to(char, {
              scale: 1.14,
              rotation: randomTilt,
              textShadow:
                "0.4px 0.4px 0 currentColor, -0.4px -0.4px 0 currentColor, 0.4px -0.4px 0 currentColor, -0.4px 0.4px 0 currentColor",
              duration: 0.38,
              delay: charDelay,
              ease: "back.out(1.8)",
              overwrite: "auto",
              onComplete: () => {
                gsap.to(char, {
                  scale: 1,
                  rotation: 0,
                  textShadow: "0px 0px 0px rgba(0,0,0,0)",
                  duration: 0.5,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              },
            });
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(chars, {
            scale: 1,
            rotation: 0,
            textShadow: "0px 0px 0px rgba(0,0,0,0)",
            duration: 0.35,
            stagger: 0.018,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      });

      const contactLogo = contactNavbar
        ? contactNavbar.querySelector(
            ".navbar-logo-contact, .logo-svg, a[class*='logo'], .navbar-logo-cont",
          )
        : null;

      const closeBtnText = closeBtn
        ? closeBtn.querySelector(
            ".back-btn-txt, [class*='txt'], [class*='text'], span",
          )
        : null;

      function resetModalElements() {
        if (openTl) openTl.kill();

        if (contactContent) {
          gsap.set(contactContent, { opacity: 1, y: 0 });
        }
        if (contactNavbar) {
          gsap.set(contactNavbar, { opacity: 1, y: 0 });
        }
        if (contactLogo) {
          gsap.set(contactLogo, {
            scale: 0,
            opacity: 0,
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            transformOrigin: "center center",
          });
        }
        if (closeBtn) {
          gsap.set(closeBtn, {
            opacity: 0,
            scale: 0.4,
            y: 20,
            transformOrigin: "center center",
          });
          if (closeBtnText) {
            gsap.set(closeBtnText, {
              opacity: 0,
              y: 15,
              display: "inline-block",
            });
          }
        }

        if (transitionPaths.length) {
          transitionPaths.forEach((path) => {
            const totalLen = path.getTotalLength ? path.getTotalLength() : 3000;
            gsap.set(path, {
              strokeDasharray: totalLen,
              strokeDashoffset: totalLen,
              strokeWidth: "0px",
            });
          });
        }

        if (headingChars.length) {
          gsap.set(headingChars, {
            opacity: 0,
            scale: 0.5,
            rotation: 0,
            textShadow: "0px 0px 0px rgba(0,0,0,0)",
          });
        }

        if (paraLines.length) {
          gsap.set(paraLines, { y: "115%", opacity: 0 });
        }

        if (emailHeadingWords.length) {
          gsap.set(emailHeadingWords, { y: "105%", opacity: 0 });
        }

        if (emailLinks.length) {
          gsap.set(emailLinks, { opacity: 0, y: 15 });
        }

        const emailChars = contactPage.querySelectorAll(".contact-email-char");
        if (emailChars.length) {
          gsap.set(emailChars, {
            scale: 1,
            rotation: 0,
            textShadow: "0px 0px 0px rgba(0,0,0,0)",
          });
        }

        if (contactSocials.length) {
          gsap.set(contactSocials, {
            opacity: 0,
            scale: 0.4,
            y: 20,
            transformOrigin: "center center",
          });
          contactSocials.forEach((pill) => {
            const pillText = pill.querySelector(
              ".contact-social-link, [class*='link'], [class*='text'], span",
            );
            if (pillText) {
              gsap.set(pillText, {
                opacity: 0,
                y: 15,
                display: "inline-block",
              });
            }
          });
        }

        if (contactImg) {
          gsap.set(contactImg, {
            opacity: 0,
            scale: 0.8,
            x: 0,
            y: 0,
            yPercent: 0,
            xPercent: 0,
            rotation: gsap.utils.random(-3, 3),
            transformOrigin: "bottom center",
          });
        }
      }

      resetModalElements();

      function openContactModal() {
        if (isOpen) return;
        isOpen = true;

        contactPage.classList.add("is-active");
        contactPage.style.display = "flex";
        contactPage.style.visibility = "visible";
        contactPage.style.pointerEvents = "auto";

        resetModalElements();

        openTl = gsap.timeline();

        if (transitionPaths.length) {
          transitionPaths.forEach((path, i) => {
            const totalLen = path.getTotalLength ? path.getTotalLength() : 3000;
            openTl.fromTo(
              path,
              { strokeDashoffset: totalLen, strokeWidth: "0px" },
              {
                strokeDashoffset: 0,
                strokeWidth: "1600px",
                duration: 0.9,
                ease: "power2.inOut",
              },
              i * 0.1,
            );
          });
        }

        const contentStart = transitionPaths.length ? 0.45 : 0;

        if (contactLogo) {
          openTl.to(
            contactLogo,
            {
              scale: 1,
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.65,
              ease: "back.out(2.2)",
            },
            contentStart,
          );
        }

        if (closeBtn) {
          openTl.to(
            closeBtn,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.7,
              ease: "back.out(2.5)",
            },
            contentStart + 0.1,
          );

          if (closeBtnText) {
            openTl.to(
              closeBtnText,
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.6)",
              },
              contentStart + 0.22,
            );
          }
        }

        if (headingChars.length) {
          headingChars.forEach((char, idx) => {
            const randomTilt = gsap.utils.random(-6, 6);
            const charStart = contentStart + 0.15 + idx * 0.022;

            openTl.to(
              char,
              {
                opacity: 1,
                scale: 1.1,
                rotation: randomTilt,
                textShadow:
                  "0.4px 0.4px 0 currentColor, -0.4px -0.4px 0 currentColor, 0.4px -0.4px 0 currentColor, -0.4px 0.4px 0 currentColor",
                duration: 0.45,
                ease: "back.out(2)",
              },
              charStart,
            );

            openTl.to(
              char,
              {
                scale: 1,
                rotation: 0,
                textShadow: "0px 0px 0px rgba(0,0,0,0)",
                duration: 0.6,
                ease: "power2.out",
              },
              charStart + 0.45,
            );
          });
        }

        if (paraLines.length) {
          openTl.to(
            paraLines,
            {
              y: "0%",
              opacity: 1,
              duration: 0.85,
              stagger: 0.1,
              ease: "back.out(1.4)",
            },
            contentStart + 0.3,
          );
        }

        if (emailHeadingWords.length) {
          openTl.to(
            emailHeadingWords,
            {
              y: "0%",
              opacity: 1,
              duration: 0.7,
              stagger: 0.06,
              ease: "back.out(1.5)",
            },
            contentStart + 0.25,
          );
        }

        if (emailLinks.length) {
          openTl.to(
            emailLinks,
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: "back.out(1.5)",
            },
            contentStart + 0.35,
          );
        }

        if (contactSocials.length) {
          contactSocials.forEach((pill, i) => {
            const pillStart = contentStart + 0.45 + i * 0.12;
            const pillText = pill.querySelector(
              ".contact-social-link, [class*='link'], [class*='text'], span",
            );

            openTl.to(
              pill,
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.7,
                ease: "back.out(2.5)",
              },
              pillStart,
            );

            if (pillText) {
              openTl.to(
                pillText,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "back.out(1.6)",
                },
                pillStart + 0.15,
              );
            }
          });
        }

        if (contactImg) {
          openTl.to(
            contactImg,
            {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotation: 0,
              duration: 0.75,
              ease: "back.out(1.8)",
            },
            contentStart + 0.4,
          );
        }
      }

      function closeContactModal() {
        if (!isOpen) return;

        if (openTl) openTl.kill();

        const closeTl = gsap.timeline({
          onComplete: () => {
            contactPage.classList.remove("is-active");
            contactPage.style.display = "none";
            contactPage.style.visibility = "hidden";
            contactPage.style.pointerEvents = "none";
            isOpen = false;
            resetModalElements();
          },
        });

        closeTl.to(
          [closeBtn, contactContent, contactSocials].filter(Boolean),
          {
            opacity: 0,
            y: -15,
            duration: 0.3,
            ease: "power2.in",
          },
          0,
        );

        if (contactLogo) {
          closeTl.to(
            contactLogo,
            {
              opacity: 0,
              scale: 0.85,
              duration: 0.3,
              ease: "power2.in",
            },
            0,
          );
        }

        if (contactImg) {
          closeTl.to(
            contactImg,
            {
              opacity: 0,
              scale: 0.85,
              duration: 0.3,
              ease: "power2.in",
            },
            0,
          );
        }

        if (transitionPaths.length) {
          transitionPaths.forEach((path) => {
            const totalLen = path.getTotalLength ? path.getTotalLength() : 3000;
            closeTl.to(
              path,
              {
                strokeDashoffset: totalLen,
                strokeWidth: "0px",
                duration: 0.45,
                ease: "power2.in",
              },
              0.1,
            );
          });
        }
      }

      openTriggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
          e.preventDefault();
          openContactModal();
        });
      });

      if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          closeContactModal();
        });
      }

      document.addEventListener("click", (e) => {
        const ctaTarget = e.target.closest(".cta-btn, [data-contact-trigger]");
        if (ctaTarget && !ctaTarget.closest(".contact-page")) {
          e.preventDefault();
          openContactModal();
          return;
        }

        const closeTarget = e.target.closest(
          ".close-btn, [data-contact-close]",
        );
        if (closeTarget) {
          e.preventDefault();
          closeContactModal();
          return;
        }
      });

      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isOpen) {
          closeContactModal();
        }
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTwo26ContactModal);
    } else {
      initTwo26ContactModal();
    }
  })();
</script>
</div></div>`;

interface HeaderProps {
  variant?: 'default' | 'case-study';
}

export default function Header(_props: HeaderProps) {
  return (
    <header
      className="navbar"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: DEFAULT_HEADER_HTML }}
    />
  );
}
