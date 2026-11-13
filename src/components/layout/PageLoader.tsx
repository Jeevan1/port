import React from 'react';

const SECTION_HTML = `<div class="svg-bg-stroke w-embed"><svg width="100%" viewBox="0 0 1500 1093" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
<path d="M1500 0C687.437 32.0206 767.477 1069.1 4.43459e-05 1093" stroke="#03a4ed" stroke-width="1000" stroke-linecap="round"/>
<path d="M0 0C812.563 32.0206 732.523 1069.1 1500 1093" stroke="#e3f4fe" stroke-width="3000" stroke-linecap="round"/>
</svg>
</div><div class="loader-inner"><div class="code-embed-9 w-embed w-script"><!-- ======================================================= -->
<!-- JDEV (JEEVAN SHRESTHA) FULL PAGE LOADER COMPONENT         -->
<!-- ======================================================= -->

<svg
  class="two26-logo-svg"
  width="100%"
  viewBox="0 0 1451 1004"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="visibility: hidden; width: 100%; max-width: 1451px; height: auto"
>
  <!-- Path 0: Serpentine ribbon stroke -->
  <path
    d="M9.5022 602.203C130.513 541.926 163.851 545.542 284.259 610.875C402.641 675.109 590.609 623.802 578.502 465.31C573.002 393.31 660.002 382.81 660.002 453.81C660.002 483.31 659.762 495.353 660.002 523.727C660.231 550.772 660.002 579.905 680.502 583.81C694.002 586.381 704.502 579.31 714.002 568.81C723.502 558.31 729.048 555.163 742.502 518.31C754.002 486.81 741.002 472.31 725.502 472.31C707.002 472.31 697.492 491.81 709.002 520.31C719.502 546.31 727.301 559.545 738.502 571.31C741.834 574.81 763.118 593.044 779.002 579.31C793.002 567.205 791.002 543.59 791.002 516.31C791.002 500.999 791.002 485.31 791.002 453.81C791.002 249.749 1224 388.703 1246.5 576.703C1256.82 662.894 1163 668.866 1163 619.703C1163 541.203 1350.5 512.703 1441 527.703"
    stroke="#fe3f40"
    stroke-width="19"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <!-- Path 1: Filled E (bottom left of DEV) -->
  <path
    d="M555 640H710V676H595V734H695V768H595V832H715V868H555V640Z"
    fill="#fe3f40"
  />

  <!-- Path 2: Filled V (bottom right of DEV) -->
  <path
    d="M745 640H788L840 812L892 640H935L862 868H818L745 640Z"
    fill="#fe3f40"
  />

  <!-- Path 3: Center Code Wave Stroke -->
  <path
    d="M660.002 453.81C660.002 483.31 659.762 495.353 660.002 523.727C660.231 550.772 660.002 579.905 680.502 583.81C694.002 586.381 704.502 579.31 714.002 568.81C723.502 558.31 729.048 555.163 742.502 518.31C754.002 486.81 741.002 472.31 725.502 472.31C707.002 472.31 697.492 491.81 709.002 520.31C719.502 546.31 727.301 559.545 738.502 571.31C741.834 574.81 763.118 593.044 779.002 579.31C793.002 567.205 791.002 543.59 791.002 516.31C791.002 500.999 791.002 485.31 791.002 453.81"
    stroke="#03a4ed"
    stroke-width="19"
    stroke-linecap="butt"
    stroke-linejoin="miter"
  />

  <!-- Path 4: Filled J -->
  <path
    d="M598 448H634V545C634 578 614 596 582 596C552 596 535 579 535 550H567C567 564 573 570 583 570C595 570 601 562 601 545V448H598Z"
    fill="#03a4ed"
  />

  <!-- Path 5: Filled D -->
  <path
    d="M812 452H866C908 452 934 479 934 522C934 565 908 592 866 592H812V452ZM844 564H864C889 564 902 548 902 522C902 496 889 480 864 480H844V564Z"
    fill="#03a4ed"
  />
</svg>

<style>
  .loader {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    pointer-events: all;
  }

  .svg-bg-stroke {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .svg-bg-stroke svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .loader-inner {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1451px;
    padding: 2rem;
    pointer-events: none;
  }

  .logo-animation,
  .loader-inner svg,
  .two26-logo-svg {
    width: 100%;
    max-width: 1000px;
    height: auto;
    display: block;
    visibility: hidden;
  }
</style>

<script type="text/two26-script">
  (function () {
    window.onTwo26Ready = function (callback) {
      if (typeof callback !== "function") return;
      if (window.__two26LoaderDone) {
        callback();
      } else {
        document.addEventListener("two26:loaderComplete", callback, {
          once: true,
        });
      }
    };

    function notifyLoaderComplete() {
      window.__two26LoaderDone = true;
      document.body.setAttribute("data-two26-loader-done", "true");
      document.dispatchEvent(new CustomEvent("two26:loaderComplete"));
    }

    function initTwo26PageLoader() {
      if (typeof gsap === "undefined") {
        const fallbackLoader = document.querySelector(
          ".loader, [data-loader='two26']",
        );
        if (fallbackLoader) {
          fallbackLoader.style.display = "none";
          fallbackLoader.style.pointerEvents = "none";
        }
        const fallbackElements = document.querySelectorAll(
          ".logo-animation, .loader-inner svg, .two26-logo-svg",
        );
        fallbackElements.forEach((el) => {
          el.style.visibility = "visible";
        });
        document.body.style.overflow = "";
        notifyLoaderComplete();
        return;
      }

      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }
      if (typeof DrawSVGPlugin !== "undefined") {
        gsap.registerPlugin(DrawSVGPlugin);
      }

      const hasDrawSVG = typeof DrawSVGPlugin !== "undefined";

      const loader = document.querySelector(".loader, [data-loader='two26']");
      if (!loader) {
        notifyLoaderComplete();
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) {
        loader.style.display = "none";
        loader.style.pointerEvents = "none";
        notifyLoaderComplete();
        return;
      }

      const navEntries = performance.getEntriesByType("navigation");
      const navigationEntry = navEntries.length > 0 ? navEntries[0] : null;
      const isReload = navigationEntry && navigationEntry.type === "reload";
      const isReloadLegacy =
        typeof performance.navigation !== "undefined" &&
        performance.navigation.type === 1;
      const wasNavigated = sessionStorage.getItem("two26_navigated") === "true";

      document.addEventListener("click", (e) => {
        const link = e.target.closest("a[href]");
        if (!link) return;
        const href = link.getAttribute("href");
        if (
          href &&
          !href.startsWith("#") &&
          !href.startsWith("mailto:") &&
          !href.startsWith("tel:") &&
          link.target !== "_blank" &&
          !link.hasAttribute("download") &&
          link.origin === window.location.origin
        ) {
          sessionStorage.setItem("two26_navigated", "true");
        }
      });

      if (wasNavigated && !(isReload || isReloadLegacy)) {
        sessionStorage.removeItem("two26_navigated");
        loader.style.display = "none";
        loader.style.pointerEvents = "none";
        notifyLoaderComplete();
        return;
      }

      const bgStrokeContainer = loader.querySelector(
        ".svg-bg-stroke, .loader-bg-svg, .loader-bg",
      );
      const bgSvg = bgStrokeContainer
        ? bgStrokeContainer.querySelector("svg")
        : null;
      const bgPaths = bgSvg ? Array.from(bgSvg.querySelectorAll("path")) : [];

      const pathOrangeBg = bgPaths[0] || null;
      const pathPinkBg = bgPaths[1] || null;

      const logoContainer = loader.querySelector(
        ".loader-inner, .logo-animation",
      );
      const logoSvg = loader.querySelector(
        ".two26-logo-svg, .logo-reveal-svg, svg[data-logo='two26'], .logo-animation svg, .loader-inner svg",
      );

      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const BG_STROKE_WIDTH_START = 3000;
      const BG_STROKE_WIDTH_END = 1000;

      if (pathOrangeBg) {
        pathOrangeBg.style.strokeLinecap = "round";
        pathOrangeBg.setAttribute("stroke-linecap", "round");
        if (hasDrawSVG) {
          gsap.set(pathOrangeBg, {
            x: 0,
            y: 0,
            drawSVG: "0% 100%",
            strokeWidth: BG_STROKE_WIDTH_START,
          });
        } else {
          const len0 = pathOrangeBg.getTotalLength
            ? pathOrangeBg.getTotalLength()
            : 3000;
          pathOrangeBg.style.strokeDasharray = len0;
          pathOrangeBg.style.strokeDashoffset = 0;
          gsap.set(pathOrangeBg, {
            x: 0,
            y: 0,
            strokeWidth: BG_STROKE_WIDTH_START,
          });
        }
      }

      if (pathPinkBg) {
        pathPinkBg.style.strokeLinecap = "round";
        pathPinkBg.setAttribute("stroke-linecap", "round");
        if (hasDrawSVG) {
          gsap.set(pathPinkBg, {
            x: 0,
            y: 0,
            drawSVG: "0% 100%",
            strokeWidth: BG_STROKE_WIDTH_START,
          });
        } else {
          const len1 = pathPinkBg.getTotalLength
            ? pathPinkBg.getTotalLength()
            : 3000;
          pathPinkBg.style.strokeDasharray = len1;
          pathPinkBg.style.strokeDashoffset = 0;
          gsap.set(pathPinkBg, {
            x: 0,
            y: 0,
            strokeWidth: BG_STROKE_WIDTH_START,
          });
        }
      }

      let logoTimeline = null;

      if (logoSvg) {
        const paths = Array.from(logoSvg.querySelectorAll("path"));
        if (paths.length >= 6) {
          const pathRibbon = paths[0];
          const letter2 = paths[1];
          const letter6 = paths[2];
          const pathW = paths[3];
          const letterT = paths[4];
          const letterO = paths[5];

          const letters = [letterT, letterO, letter2, letter6];

          if (pathRibbon) {
            pathRibbon.style.strokeLinecap = "round";
            pathRibbon.style.strokeLinejoin = "round";
            if (hasDrawSVG) {
              gsap.set(pathRibbon, { drawSVG: "0% 0%", strokeWidth: 0 });
            } else {
              const len = pathRibbon.getTotalLength
                ? pathRibbon.getTotalLength()
                : 2500;
              pathRibbon.style.strokeDasharray = \`\${len * 0.05} \${len}\`;
              pathRibbon.style.strokeDashoffset = len;
              gsap.set(pathRibbon, { strokeWidth: 0 });
            }
          }

          if (pathW) {
            pathW.style.strokeLinecap = "butt";
            pathW.style.strokeLinejoin = "miter";
            pathW.setAttribute("stroke-linecap", "butt");
            pathW.setAttribute("stroke-linejoin", "miter");
            if (hasDrawSVG) {
              gsap.set(pathW, { drawSVG: "0%", strokeWidth: 19 });
            } else {
              const lenW = pathW.getTotalLength ? pathW.getTotalLength() : 800;
              pathW.style.strokeDasharray = lenW;
              pathW.style.strokeDashoffset = lenW;
              gsap.set(pathW, { strokeWidth: 19 });
            }
          }

          letters.forEach((letter) => {
            if (!letter) return;
            const randomAngle = gsap.utils.random(-25, 25);
            letter.setAttribute("stroke", "#03a4ed");
            letter.setAttribute("stroke-linejoin", "round");
            const bbox = letter.getBBox();
            const cx = bbox.x + bbox.width / 2;
            const cy = bbox.y + bbox.height / 2;
            gsap.set(letter, {
              scale: 0,
              rotation: randomAngle,
              strokeWidth: 6,
              svgOrigin: \`\${cx} \${cy}\`,
            });
          });

          if (logoSvg) {
            logoSvg.style.visibility = "visible";
          }
          const logoWrappers = loader.querySelectorAll(
            ".logo-animation, .two26-logo-svg",
          );
          logoWrappers.forEach((el) => {
            el.style.visibility = "visible";
          });

          logoTimeline = gsap.timeline({ delay: 0.25 }).timeScale(1.25);

          if (pathRibbon) {
            if (hasDrawSVG) {
              logoTimeline
                .to(
                  pathRibbon,
                  {
                    strokeWidth: 19,
                    duration: 1,
                    ease: "power2.in",
                  },
                  0,
                )
                .to(
                  pathRibbon,
                  {
                    drawSVG: "0% 7%",
                    duration: 0.7,
                    ease: "power2.in",
                  },
                  0,
                )
                .to(
                  pathRibbon,
                  {
                    drawSVG: "40% 47%",
                    duration: 1.2,
                    ease: "none",
                  },
                  0.7,
                );
            } else {
              const len = pathRibbon.getTotalLength
                ? pathRibbon.getTotalLength()
                : 2500;
              logoTimeline
                .to(
                  pathRibbon,
                  {
                    strokeWidth: 19,
                    duration: 1,
                    ease: "power2.in",
                  },
                  0,
                )
                .to(
                  pathRibbon,
                  {
                    strokeDashoffset: len * 0.6,
                    duration: 1.9,
                    ease: "power1.inOut",
                  },
                  0,
                );
            }
          }

          if (pathW) {
            if (hasDrawSVG) {
              logoTimeline.to(
                pathW,
                {
                  drawSVG: "100%",
                  duration: 1.1,
                  ease: "power2.out",
                },
                "-=0.4",
              );
            } else {
              logoTimeline.to(
                pathW,
                {
                  strokeDashoffset: 0,
                  duration: 1.1,
                  ease: "power2.out",
                },
                "-=0.4",
              );
            }
          }

          if (pathRibbon) {
            if (hasDrawSVG) {
              logoTimeline.to(
                pathRibbon,
                {
                  drawSVG: "100% 100%",
                  duration: 1.1,
                  ease: "power2.inOut",
                },
                "-=0.5",
              );
              logoTimeline.to(
                pathRibbon,
                {
                  strokeWidth: 0,
                  duration: 0.5,
                  ease: "power2.in",
                },
                "-=0.55",
              );
            } else {
              const len = pathRibbon.getTotalLength
                ? pathRibbon.getTotalLength()
                : 2500;
              logoTimeline.to(
                pathRibbon,
                {
                  strokeDashoffset: -len * 0.05,
                  duration: 1.1,
                  ease: "power2.inOut",
                },
                "-=0.5",
              );
              logoTimeline.to(
                pathRibbon,
                {
                  strokeWidth: 0,
                  duration: 0.5,
                  ease: "power2.in",
                },
                "-=0.55",
              );
            }
          }

          const allContentPaths = [pathW, letterT, letterO, letter2, letter6];
          let minY = Infinity,
            maxY = -Infinity;
          allContentPaths.forEach((p) => {
            if (!p) return;
            const b = p.getBBox();
            if (b.y < minY) minY = b.y;
            if (b.y + b.height > maxY) maxY = b.y + b.height;
          });
          const viewBoxHeight = 1004;
          const contentCenterY = (minY + maxY) / 2;
          const viewBoxCenterY = viewBoxHeight / 2;
          const offsetSVGUnits = contentCenterY - viewBoxCenterY;
          const svgRect = logoSvg.getBoundingClientRect();
          const scaleRatio =
            svgRect.height > 0 ? svgRect.height / viewBoxHeight : 1;
          const offsetPx = offsetSVGUnits * scaleRatio;

          logoTimeline.to(
            logoSvg,
            {
              y: -offsetPx,
              duration: 0.8,
              ease: "power2.inOut",
            },
            "+=0.1",
          );

          logoTimeline.to(
            letters,
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(3)",
            },
            "-=0.2",
          );
          logoTimeline.to(
            letters,
            {
              strokeWidth: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power1.in",
            },
            "<",
          );
        }
      }

      let isWindowLoaded = document.readyState === "complete";
      let isLogoDone = false;

      if (!isWindowLoaded) {
        window.addEventListener("load", () => {
          isWindowLoaded = true;
          checkAndTriggerExit();
        });
      }

      if (logoTimeline) {
        logoTimeline.eventCallback("onComplete", () => {
          isLogoDone = true;
          checkAndTriggerExit();
        });
      } else {
        setTimeout(() => {
          isLogoDone = true;
          checkAndTriggerExit();
        }, 2000);
      }

      let exitTriggered = false;

      setTimeout(() => {
        if (!exitTriggered) {
          isWindowLoaded = true;
          isLogoDone = true;
          checkAndTriggerExit();
        }
      }, 6000);

      function checkAndTriggerExit() {
        if (isLogoDone && isWindowLoaded && !exitTriggered) {
          exitTriggered = true;
          runLoaderExitSequence();
        }
      }

      function runLoaderExitSequence() {
        const exitTl = gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = originalOverflow;
            loader.style.display = "none";
            loader.style.pointerEvents = "none";

            if (typeof ScrollTrigger !== "undefined") {
              ScrollTrigger.refresh();
            }

            notifyLoaderComplete();
          },
        });

        exitTl.to({}, { duration: 0.2 });

        const SWEEP_DURATION = 0.65;

        if (pathPinkBg) {
          if (hasDrawSVG) {
            exitTl.to(
              pathPinkBg,
              {
                drawSVG: "50% 100%",
                strokeWidth: BG_STROKE_WIDTH_END,
                y: 1800,
                x: 900,
                duration: SWEEP_DURATION,
                ease: "power2.inOut",
              },
              "pinkStart",
            );
          } else {
            const len1 = pathPinkBg.getTotalLength
              ? pathPinkBg.getTotalLength()
              : 3000;
            exitTl.to(
              pathPinkBg,
              {
                strokeDashoffset: -len1 * 0.5,
                strokeWidth: BG_STROKE_WIDTH_END,
                y: 1800,
                x: 900,
                duration: SWEEP_DURATION,
                ease: "power2.inOut",
              },
              "pinkStart",
            );
          }
        }

        if (logoContainer || logoSvg) {
          exitTl.to(
            logoContainer || logoSvg,
            {
              opacity: 0,
              duration: 0.15,
              ease: "power1.out",
            },
            "pinkStart+=" + SWEEP_DURATION * 0.2,
          );
        }

        if (pathOrangeBg) {
          if (hasDrawSVG) {
            exitTl.to(
              pathOrangeBg,
              {
                drawSVG: "50% 100%",
                strokeWidth: BG_STROKE_WIDTH_END,
                y: 1800,
                x: -900,
                duration: SWEEP_DURATION,
                ease: "power2.inOut",
              },
              "pinkStart+=" + SWEEP_DURATION * 0.25,
            );
          } else {
            const len0 = pathOrangeBg.getTotalLength
              ? pathOrangeBg.getTotalLength()
              : 3000;
            exitTl.to(
              pathOrangeBg,
              {
                strokeDashoffset: -len0 * 0.5,
                strokeWidth: BG_STROKE_WIDTH_END,
                y: 1800,
                x: -900,
                duration: SWEEP_DURATION,
                ease: "power2.inOut",
              },
              "pinkStart+=" + SWEEP_DURATION * 0.25,
            );
          }
        }
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTwo26PageLoader);
    } else {
      initTwo26PageLoader();
    }
  })();
</script>
</div></div>`;

export default function PageLoader() {
  return (
    <div
      className="loader"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
