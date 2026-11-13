import React from 'react';

const SECTION_HTML = `<div class="svg-bg-stroke w-embed"><svg width="100%" viewBox="0 0 1500 1093" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
<path d="M1500 0C687.437 32.0206 767.477 1069.1 4.43459e-05 1093" stroke="#03a4ed" stroke-width="1000" stroke-linecap="round"/>
<path d="M0 0C812.563 32.0206 732.523 1069.1 1500 1093" stroke="#e3f4fe" stroke-width="3000" stroke-linecap="round"/>
</svg>
</div><div class="loader-inner"><div class="code-embed-9 w-embed w-script"><!-- ======================================================= -->
<!-- JDEV (JEEVAN SHRESTHA) SINGLE-LINE FULL PAGE LOADER     -->
<!-- ======================================================= -->

<svg
  class="two26-logo-svg"
  width="100%"
  viewBox="0 0 1451 1004"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="visibility: hidden; width: 100%; max-width: 1451px; height: auto"
>
  <!-- Path 0: Serpentine ribbon stroke sweeping through J and across D E V -->
  <path
    d="M9.5022 602.203C130.513 541.926 163.851 545.542 260 600C345 648 477 540 477 404C477 450 477 500 477 536C477 574 452 597 418 597C384 597 362 574 362 540C362 504 420 495 520 495C720 495 1224 388.703 1246.5 576.703C1256.82 662.894 1163 668.866 1163 619.703C1163 541.203 1350.5 512.703 1441 527.703"
    stroke="#fe3f40"
    stroke-width="22"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <!-- Path 1: Filled D (Coral Red #fe3f40, taller cap-height matching logo.png, same baseline y=620) -->
  <path
    d="M548 380H626C678 380 712 424 712 500C712 576 678 620 626 620H548V380ZM594 576H622C650 576 666 548 666 500C666 452 650 424 622 424H594V576Z"
    fill="#fe3f40"
  />

  <!-- Path 2: Filled E (Coral Red #fe3f40, same horizontal line y=404..620) -->
  <path
    d="M754 404H892V448H800V490H876V532H800V576H892V620H754V404Z"
    fill="#fe3f40"
  />

  <!-- Path 3: Drawn J Stroke (Sky Blue #03a4ed, left of DEV on same horizontal line y=404..620) -->
  <path
    d="M477 404L477 536C477 574 452 597 418 597C384 597 362 574 362 540L362 522"
    stroke="#03a4ed"
    stroke-width="46"
    stroke-linecap="butt"
    stroke-linejoin="round"
  />

  <!-- Path 4: Filled V (Coral Red #fe3f40, same horizontal line y=404..620) -->
  <path
    d="M932 404H980L1016 562L1052 404H1100L1040 620H992L932 404Z"
    fill="#fe3f40"
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
    max-width: 1050px;
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
        logoSvg.style.visibility = "visible";
        const logoWrappers = loader.querySelectorAll(
          ".logo-animation, .two26-logo-svg",
        );
        logoWrappers.forEach((el) => {
          el.style.visibility = "visible";
        });

        const paths = Array.from(logoSvg.querySelectorAll("path"));
        if (paths.length >= 5) {
          const pathRibbon = paths[0];
          const letterD = paths[1];
          const letterE = paths[2];
          const pathJ = paths[3];
          const letterV = paths[4];

          const letters = [letterD, letterE, letterV];

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

          if (pathJ) {
            pathJ.style.strokeLinecap = "butt";
            pathJ.style.strokeLinejoin = "round";
            pathJ.setAttribute("stroke-linecap", "butt");
            pathJ.setAttribute("stroke-linejoin", "round");
            if (hasDrawSVG) {
              gsap.set(pathJ, { drawSVG: "0%", strokeWidth: 46 });
            } else {
              const lenJ = pathJ.getTotalLength ? pathJ.getTotalLength() : 450;
              pathJ.style.strokeDasharray = lenJ;
              pathJ.style.strokeDashoffset = lenJ;
              gsap.set(pathJ, { strokeWidth: 46 });
            }
          }

          letters.forEach((letter) => {
            if (!letter) return;
            const randomAngle = gsap.utils.random(-20, 20);
            letter.setAttribute("stroke", "#03a4ed");
            letter.setAttribute("stroke-linejoin", "round");
            const bbox = letter.getBBox();
            const cx = bbox.x + bbox.width / 2;
            const cy = bbox.y + bbox.height / 2;
            gsap.set(letter, {
              scale: 0,
              rotation: randomAngle,
              strokeWidth: 8,
              svgOrigin: \`\${cx} \${cy}\`,
            });
          });

          logoTimeline = gsap.timeline({ delay: 0.15 }).timeScale(1.3);

          if (pathRibbon) {
            if (hasDrawSVG) {
              logoTimeline
                .to(
                  pathRibbon,
                  {
                    strokeWidth: 22,
                    duration: 0.8,
                    ease: "power2.in",
                  },
                  0,
                )
                .to(
                  pathRibbon,
                  {
                    drawSVG: "0% 8%",
                    duration: 0.6,
                    ease: "power2.in",
                  },
                  0,
                )
                .to(
                  pathRibbon,
                  {
                    drawSVG: "28% 38%",
                    duration: 0.9,
                    ease: "none",
                  },
                  0.6,
                );
            } else {
              const len = pathRibbon.getTotalLength
                ? pathRibbon.getTotalLength()
                : 2500;
              logoTimeline
                .to(
                  pathRibbon,
                  {
                    strokeWidth: 22,
                    duration: 0.8,
                    ease: "power2.in",
                  },
                  0,
                )
                .to(
                  pathRibbon,
                  {
                    strokeDashoffset: len * 0.65,
                    duration: 1.5,
                    ease: "power1.inOut",
                  },
                  0,
                );
            }
          }

          if (pathJ) {
            if (hasDrawSVG) {
              logoTimeline.to(
                pathJ,
                {
                  drawSVG: "100%",
                  duration: 0.85,
                  ease: "power2.out",
                },
                "-=0.55",
              );
            } else {
              logoTimeline.to(
                pathJ,
                {
                  strokeDashoffset: 0,
                  duration: 0.85,
                  ease: "power2.out",
                },
                "-=0.55",
              );
            }
          }

          if (pathRibbon) {
            if (hasDrawSVG) {
              logoTimeline.to(
                pathRibbon,
                {
                  drawSVG: "100% 100%",
                  duration: 0.95,
                  ease: "power2.inOut",
                },
                "-=0.45",
              );
              logoTimeline.to(
                pathRibbon,
                {
                  strokeWidth: 0,
                  duration: 0.45,
                  ease: "power2.in",
                },
                "-=0.45",
              );
            } else {
              const len = pathRibbon.getTotalLength
                ? pathRibbon.getTotalLength()
                : 2500;
              logoTimeline.to(
                pathRibbon,
                {
                  strokeDashoffset: -len * 0.05,
                  duration: 0.95,
                  ease: "power2.inOut",
                },
                "-=0.45",
              );
              logoTimeline.to(
                pathRibbon,
                {
                  strokeWidth: 0,
                  duration: 0.45,
                  ease: "power2.in",
                },
                "-=0.45",
              );
            }
          }

          // Pop in D, E, V right alongside J on the same horizontal line as the ribbon sweeps across
          logoTimeline.to(
            letters,
            {
              scale: 1,
              rotation: 0,
              duration: 0.65,
              stagger: 0.1,
              ease: "back.out(2.8)",
            },
            "-=0.75",
          );
          logoTimeline.to(
            letters,
            {
              strokeWidth: 0,
              duration: 0.55,
              stagger: 0.1,
              ease: "power1.in",
              onComplete: () => {
                letters.forEach((l) => {
                  if (l) l.removeAttribute("stroke");
                });
              },
            },
            "<",
          );

          // Hold complete single-line JDEV logo briefly before exit sweep
          logoTimeline.to({}, { duration: 0.35 });
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
