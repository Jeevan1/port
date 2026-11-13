import React from 'react';

const SECTION_HTML = `<div class="projects-vertical-html w-embed w-script">
<style>
  .project-card-clip-mask {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    perspective: 1200px;
    -webkit-perspective: 1200px;
    transform-style: preserve-3d;
    will-change: clip-path;
  }

  .project-card {
    will-change: transform;
    transform-style: preserve-3d;
  }

  .section-projects .projects-end-para {
    opacity: 0;
  }

  .project-line-mask {
    display: block !important;
    overflow: hidden !important;
  }

  .project-line {
    display: block !important;
    will-change: transform, opacity;
  }

  .section-projects .projects-pill-first,
  .section-projects .projects-pill-second,
  .section-projects .projects-pill-third,
  .section-projects .projects-pill-fourth,
  .section-projects [class*="projects-pill"],
  .section-projects .project-btn {
    opacity: 0;
    will-change: transform, opacity;
  }
</style>

<script type="text/two26-script">
  (function () {
    function initTwo26ProjectsSection() {
      if (typeof gsap === "undefined") {
        document
          .querySelectorAll(
            ".project-card, .projects-end-para, .projects-pill-first, .projects-pill-second, .projects-pill-third, .projects-pill-fourth, .project-btn"
          )
          .forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.clipPath = "none";
          });
        return;
      }

      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }
      if (typeof SplitText !== "undefined") {
        gsap.registerPlugin(SplitText);
      }

      const section = document.querySelector(".section-projects");
      if (!section) return;

      const scrollerEl = document.querySelector(".page") || window;

      const projectCards = Array.from(
        section.querySelectorAll(".projects-list .project-card, .project-card")
      );

      projectCards.forEach((card, index) => {
        let maskWrapper = card.parentElement;
        if (!maskWrapper.classList.contains("project-card-clip-mask")) {
          maskWrapper = document.createElement("div");
          maskWrapper.className = "project-card-clip-mask";
          card.parentNode.insertBefore(maskWrapper, card);
          maskWrapper.appendChild(card);
        }

        gsap.set(maskWrapper, {
          clipPath: "inset(42.5% 42.5% 42.5% 42.5%)",
          webkitClipPath: "inset(42.5% 42.5% 42.5% 42.5%)",
          borderRadius: "36px",
          overflow: "hidden",
          willChange: "clip-path, border-radius",
        });

        const horizontalTilt = index % 2 === 0 ? -16 : 16;
        const zTilt = index % 2 === 0 ? -4 : 4;
        gsap.set(card, {
          scale: 1.45,
          rotationX: 25,
          rotationY: horizontalTilt,
          rotation: zTilt,
          transformPerspective: 800,
          transformOrigin: "center center",
          willChange: "transform",
        });

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: maskWrapper,
            scroller: scrollerEl,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });

        cardTl.to(
          maskWrapper,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            webkitClipPath: "inset(0% 0% 0% 0%)",
            borderRadius: "0px",
            duration: 1.25,
            ease: "power3.out",
          },
          0
        );

        cardTl.to(
          card,
          {
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            rotation: 0,
            duration: 1.25,
            ease: "power3.out",
          },
          0
        );
      });

      const projectsEnd = section.querySelector(".projects-end, .projects-end-inner-wrapper");
      if (projectsEnd) {
        const endPara = projectsEnd.querySelector(".projects-end-para");
        const pills = Array.from(
          projectsEnd.querySelectorAll(
            ".projects-pill-first, .projects-pill-second, .projects-pill-third, .projects-pill-fourth, [class*='projects-pill']"
          )
        );
        const projectBtn = projectsEnd.querySelector(".project-btn");

        if (endPara) {
          let linesList = [];
          if (typeof SplitText !== "undefined") {
            const split = new SplitText(endPara, {
              type: "lines",
              linesClass: "project-line",
            });
            split.lines.forEach((line) => {
              const mask = document.createElement("span");
              mask.className = "project-line-mask";
              line.parentNode.insertBefore(mask, line);
              mask.appendChild(line);
            });
            linesList = split.lines;
          } else {
            const rawText = endPara.textContent.trim();
            endPara.innerHTML = '<span class="project-line-mask"><span class="project-line">' + rawText + '</span></span>';
            linesList = Array.from(endPara.querySelectorAll(".project-line"));
          }

          gsap.set(endPara, { opacity: 1 });
          gsap.set(linesList, { y: "115%", opacity: 0 });

          pills.forEach((pill) => {
            gsap.set(pill, {
              opacity: 0,
              scale: 0.4,
              y: 20,
              transformOrigin: "center center",
            });
          });

          if (projectBtn) {
            gsap.set(projectBtn, {
              opacity: 0,
              scale: 0.4,
              y: 20,
              transformOrigin: "center center",
            });
          }

          const masterTl = gsap.timeline({
            paused: true,
            scrollTrigger: {
              trigger: projectsEnd,
              scroller: scrollerEl,
              start: "top 80%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
              onEnter: () => masterTl.play(),
            },
          });

          masterTl.timeScale(0.75);

          masterTl.to(
            linesList,
            {
              y: "0%",
              opacity: 1,
              duration: 0.85,
              stagger: 0.12,
              ease: "back.out(1.4)",
            },
            0
          );

          const totalLinesTime = linesList.length * 0.12 + 0.5;

          pills.forEach((pill, i) => {
            const pillStart = 0.2 + (i / Math.max(1, pills.length)) * totalLinesTime * 0.7;
            masterTl.to(
              pill,
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.55,
                ease: "back.out(2.5)",
              },
              pillStart
            );
          });

          if (projectBtn) {
            const btnStart = totalLinesTime + 0.15;
            masterTl.to(
              projectBtn,
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.55,
                ease: "back.out(2.5)",
              },
              btnStart
            );
          }
        }
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTwo26ProjectsSection);
    } else {
      initTwo26ProjectsSection();
    }
  })();
</script>
</div>
<div class="projects-hover-html w-embed w-script">
<style>
  .project-card-img-wrapper {
    position: relative !important;
    overflow: hidden !important;
  }
  .project-card-img-wrapper img.project-img,
  .project-card-img-wrapper img.project-img-hover {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: top center !important;
  }
  .project-card-mask-overlay {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    pointer-events: none !important;
  }
</style>

<script type="text/two26-script">
  (function () {
    function initProjectCardHover() {
      if (typeof gsap === "undefined") return;
      if (typeof DrawSVGPlugin !== "undefined") {
        gsap.registerPlugin(DrawSVGPlugin);
      }

      const cards = document.querySelectorAll(".project-card");
      if (!cards.length) return;

      const MASK_PATH_D =
        "M25.007 729.507C25.007 729.507 136.507 1065.7 290.007 969.007C506.711 832.495 -164.765 175.16 89.5069 44.5066C315.057 -71.3883 462.507 559.507 615.507 515.007C768.507 470.507 615.507 25.0068 615.507 25.0068";
      const TARGET_STROKE_WIDTH = 1200;

      cards.forEach((card, index) => {
        const imgWrapper = card.querySelector(".project-card-img-wrapper");
        if (!imgWrapper) return;

        const baseImg = imgWrapper.querySelector(".project-img");
        const hoverImg = imgWrapper.querySelector(".project-img-hover");
        const svgContainer = imgWrapper.querySelector(".project-img-svg");

        let foregroundStrokePath = null;
        if (svgContainer) {
          svgContainer.style.position = "absolute";
          svgContainer.style.top = "0";
          svgContainer.style.left = "0";
          svgContainer.style.width = "100%";
          svgContainer.style.height = "100%";
          svgContainer.style.pointerEvents = "none";
          svgContainer.style.zIndex = "2";

          foregroundStrokePath = svgContainer.querySelector("path");
        }

        let maskStrokePath = null;
        if (hoverImg) {
          const imgSrc =
            hoverImg.currentSrc ||
            hoverImg.getAttribute("src") ||
            "";
          hoverImg.style.display = "none";
          const maskId = "project-mask-" + index;
          const maskSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          maskSvg.setAttribute("class", "project-card-mask-overlay");
          maskSvg.setAttribute("viewBox", "0 0 709 1012");
          maskSvg.setAttribute("preserveAspectRatio", "xMidYMid slice");
          maskSvg.style.position = "absolute";
          maskSvg.style.top = "0";
          maskSvg.style.left = "0";
          maskSvg.style.width = "100%";
          maskSvg.style.height = "100%";
          maskSvg.style.pointerEvents = "none";
          maskSvg.style.zIndex = "3";

          maskSvg.innerHTML =
            '<defs><mask id="' +
            maskId +
            '" maskUnits="userSpaceOnUse" x="-200" y="-200" width="1109" height="1412">' +
            '<path class="mask-brush-path" d="' +
            MASK_PATH_D +
            '" stroke="#FFFFFF" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" fill="none" />' +
            '</mask></defs>' +
            '<image href="' +
            imgSrc +
            '" x="0" y="0" width="709" height="1012" preserveAspectRatio="xMidYMid slice" mask="url(#' +
            maskId +
            ')" />';

          imgWrapper.appendChild(maskSvg);
          maskStrokePath = maskSvg.querySelector(".mask-brush-path");
        }

        const arrow = card.querySelector(".projects-arrow");
        const arrowTarget = arrow ? arrow.querySelector("svg") || arrow : null;

        const hasDrawSVG = typeof DrawSVGPlugin !== "undefined";
        if (hasDrawSVG) {
          if (foregroundStrokePath) {
            gsap.set(foregroundStrokePath, { drawSVG: "100% 100%", strokeWidth: 0 });
          }
          if (maskStrokePath) {
            gsap.set(maskStrokePath, { drawSVG: "100% 100%", strokeWidth: 0 });
          }
        }

        const hoverTl = gsap.timeline({ paused: true, defaults: { ease: "power1.inOut" } });

        if (foregroundStrokePath && hasDrawSVG) {
          hoverTl.to(
            foregroundStrokePath,
            { drawSVG: "0% 100%", strokeWidth: TARGET_STROKE_WIDTH, duration: 0.95 },
            0
          );
        }
        if (maskStrokePath && hasDrawSVG) {
          hoverTl.to(
            maskStrokePath,
            { drawSVG: "0% 100%", strokeWidth: TARGET_STROKE_WIDTH, duration: 1.05 },
            0.35
          );
        }
        if (arrowTarget) {
          hoverTl
            .to(arrowTarget, { rotation: -45, duration: 0.28, ease: "power2.out" }, 0)
            .to(arrowTarget, { rotation: 0, duration: 0.65, ease: "elastic.out(1.15, 0.35)" }, 0.28);
        }

        card.addEventListener("mouseenter", () => hoverTl.timeScale(1).play());
        card.addEventListener("mouseleave", () => hoverTl.timeScale(1.3).reverse());
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initProjectCardHover);
    } else {
      initProjectCardHover();
    }
  })();
</script>
</div>

<div class="section-projects-wrapper">
  <div class="section-projects-header">
    <div class="section-about-text">FEATURED PORTFOLIO</div>
    <div class="section-heading-wrapper">
      <h2 class="section-heading less-max-w">My Projects</h2>
      <h2 class="section-heading orange less-max-w">My Projects</h2>
    </div>
  </div>

  <div class="projects-vertical-wrapper">
    <div class="projects-list-wrapper w-dyn-list">
      <div role="list" class="projects-list w-dyn-items">
        <!-- Project 1: BRDC -->
        <div role="listitem" class="project-item w-dyn-item">
          <a href="https://brdc.com.np/" target="_blank" rel="noopener noreferrer" class="project-card w-inline-block">
            <div class="project-card-img-wrapper">
              <img src="/jeevan/project-brdc.png" loading="lazy" alt="BRDC" class="project-img-hover" />
              <div style="color:#03a4ed" class="project-img-svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 728 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.002 153.857C25.002 153.857 151.002 -28.0122 236.002 40.3572C351.002 132.857 -86.2292 534.598 62.5019 617.857C173.257 679.857 466.502 -70.1428 646.002 40.3572C889.446 190.221 -74.3269 862.107 151.002 983.857C337.002 1084.36 526.502 453.148 665.002 551.357C803.502 649.566 415.502 926.187 501.002 983.857C586.502 1041.53 703.002 794.357 703.002 794.357" stroke="currentColor" stroke-width="50" stroke-linecap="round" />
                </svg>
              </div>
              <img src="/jeevan/project-brdc.png" loading="lazy" alt="BRDC" class="project-img" />
            </div>
            <div class="project-detail">
              <div class="project-logo">
                <img src="/jeevan/skill-react.png" loading="lazy" alt="React.js" class="project-logo-img" />
              </div>
              <div class="project-detail-header">
                <div class="project-detail-btm">
                  <div class="project-name-text">BRDC NEPAL</div>
                </div>
                <div class="project-detail-text">React.js &amp; Django • Research Center</div>
              </div>
              <div class="projects-arrow">
                <div class="code-embed-7 w-embed">
                  <svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
                    <path d="M1.17273 17.9405L18.6533 2.29983M5.84177 1.17288L18.6533 2.29983L18.3543 15.1573" stroke="currentColor" stroke-width="2.34564" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Project 2: Join Your Event -->
        <div role="listitem" class="project-item w-dyn-item">
          <a href="https://joinyourevent.com/" target="_blank" rel="noopener noreferrer" class="project-card w-inline-block">
            <div class="project-card-img-wrapper">
              <img src="/jeevan/project-jye.webp" loading="lazy" alt="Join Your Event" class="project-img-hover" />
              <div style="color:#fe3f40" class="project-img-svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 728 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.002 153.857C25.002 153.857 151.002 -28.0122 236.002 40.3572C351.002 132.857 -86.2292 534.598 62.5019 617.857C173.257 679.857 466.502 -70.1428 646.002 40.3572C889.446 190.221 -74.3269 862.107 151.002 983.857C337.002 1084.36 526.502 453.148 665.002 551.357C803.502 649.566 415.502 926.187 501.002 983.857C586.502 1041.53 703.002 794.357 703.002 794.357" stroke="currentColor" stroke-width="50" stroke-linecap="round" />
                </svg>
              </div>
              <img src="/jeevan/project-jye.webp" loading="lazy" alt="Join Your Event" class="project-img" />
            </div>
            <div class="project-detail">
              <div class="project-logo">
                <img src="/jeevan/skill-nextjs.png" loading="lazy" alt="Next.js" class="project-logo-img" />
              </div>
              <div class="project-detail-header">
                <div class="project-detail-btm">
                  <div class="project-name-text">JOIN YOUR EVENT</div>
                </div>
                <div class="project-detail-text">Next.js • Event Discovery Platform</div>
              </div>
              <div class="projects-arrow">
                <div class="code-embed-7 w-embed">
                  <svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
                    <path d="M1.17273 17.9405L18.6533 2.29983M5.84177 1.17288L18.6533 2.29983L18.3543 15.1573" stroke="currentColor" stroke-width="2.34564" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Project 3: BusinessBoard -->
        <div role="listitem" class="project-item w-dyn-item">
          <a href="https://dashboard.sthajeevan.com.np/" target="_blank" rel="noopener noreferrer" class="project-card w-inline-block">
            <div class="project-card-img-wrapper">
              <img src="/jeevan/project-oneup.png" loading="lazy" alt="BusinessBoard" class="project-img-hover" />
              <div style="color:#03a4ed" class="project-img-svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 728 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.002 153.857C25.002 153.857 151.002 -28.0122 236.002 40.3572C351.002 132.857 -86.2292 534.598 62.5019 617.857C173.257 679.857 466.502 -70.1428 646.002 40.3572C889.446 190.221 -74.3269 862.107 151.002 983.857C337.002 1084.36 526.502 453.148 665.002 551.357C803.502 649.566 415.502 926.187 501.002 983.857C586.502 1041.53 703.002 794.357 703.002 794.357" stroke="currentColor" stroke-width="50" stroke-linecap="round" />
                </svg>
              </div>
              <img src="/jeevan/project-oneup.png" loading="lazy" alt="BusinessBoard" class="project-img" />
            </div>
            <div class="project-detail">
              <div class="project-logo">
                <img src="/jeevan/skill-tailwind.png" loading="lazy" alt="Tailwind CSS" class="project-logo-img" />
              </div>
              <div class="project-detail-header">
                <div class="project-detail-btm">
                  <div class="project-name-text">BUSINESSBOARD</div>
                </div>
                <div class="project-detail-text">React.js • Business Analytics</div>
              </div>
              <div class="projects-arrow">
                <div class="code-embed-7 w-embed">
                  <svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
                    <path d="M1.17273 17.9405L18.6533 2.29983M5.84177 1.17288L18.6533 2.29983L18.3543 15.1573" stroke="currentColor" stroke-width="2.34564" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Project 4: Recondition Hub -->
        <div role="listitem" class="project-item w-dyn-item">
          <a href="https://reconditionhub.com/" target="_blank" rel="noopener noreferrer" class="project-card w-inline-block">
            <div class="project-card-img-wrapper">
              <img src="/jeevan/project-reconditionhub.png" loading="lazy" alt="Recondition Hub" class="project-img-hover" />
              <div style="color:#fe3f40" class="project-img-svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 728 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.002 153.857C25.002 153.857 151.002 -28.0122 236.002 40.3572C351.002 132.857 -86.2292 534.598 62.5019 617.857C173.257 679.857 466.502 -70.1428 646.002 40.3572C889.446 190.221 -74.3269 862.107 151.002 983.857C337.002 1084.36 526.502 453.148 665.002 551.357C803.502 649.566 415.502 926.187 501.002 983.857C586.502 1041.53 703.002 794.357 703.002 794.357" stroke="currentColor" stroke-width="50" stroke-linecap="round" />
                </svg>
              </div>
              <img src="/jeevan/project-reconditionhub.png" loading="lazy" alt="Recondition Hub" class="project-img" />
            </div>
            <div class="project-detail">
              <div class="project-logo">
                <img src="/jeevan/skill-nextjs.png" loading="lazy" alt="Next.js" class="project-logo-img" />
              </div>
              <div class="project-detail-header">
                <div class="project-detail-btm">
                  <div class="project-name-text">RECONDITION HUB</div>
                </div>
                <div class="project-detail-text">Next.js • Vehicle Marketplace</div>
              </div>
              <div class="projects-arrow">
                <div class="code-embed-7 w-embed">
                  <svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
                    <path d="M1.17273 17.9405L18.6533 2.29983M5.84177 1.17288L18.6533 2.29983L18.3543 15.1573" stroke="currentColor" stroke-width="2.34564" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Project 5: SPDSS School Website -->
        <div role="listitem" class="project-item w-dyn-item">
          <a href="https://spdss.edu.np/" target="_blank" rel="noopener noreferrer" class="project-card w-inline-block">
            <div class="project-card-img-wrapper">
              <img src="/jeevan/project-spdss.png" loading="lazy" alt="SPDSS School Website" class="project-img-hover" />
              <div style="color:#03a4ed" class="project-img-svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 728 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.002 153.857C25.002 153.857 151.002 -28.0122 236.002 40.3572C351.002 132.857 -86.2292 534.598 62.5019 617.857C173.257 679.857 466.502 -70.1428 646.002 40.3572C889.446 190.221 -74.3269 862.107 151.002 983.857C337.002 1084.36 526.502 453.148 665.002 551.357C803.502 649.566 415.502 926.187 501.002 983.857C586.502 1041.53 703.002 794.357 703.002 794.357" stroke="currentColor" stroke-width="50" stroke-linecap="round" />
                </svg>
              </div>
              <img src="/jeevan/project-spdss.png" loading="lazy" alt="SPDSS School Website" class="project-img" />
            </div>
            <div class="project-detail">
              <div class="project-logo">
                <img src="/jeevan/skill-react.png" loading="lazy" alt="React.js" class="project-logo-img" />
              </div>
              <div class="project-detail-header">
                <div class="project-detail-btm">
                  <div class="project-name-text">SPDSS SCHOOL</div>
                </div>
                <div class="project-detail-text">React.js • Educational Portal</div>
              </div>
              <div class="projects-arrow">
                <div class="code-embed-7 w-embed">
                  <svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
                    <path d="M1.17273 17.9405L18.6533 2.29983M5.84177 1.17288L18.6533 2.29983L18.3543 15.1573" stroke="currentColor" stroke-width="2.34564" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- Project 6: LifeLine Achham -->
        <div role="listitem" class="project-item w-dyn-item">
          <a href="https://lifelineachham.org/" target="_blank" rel="noopener noreferrer" class="project-card w-inline-block">
            <div class="project-card-img-wrapper">
              <img src="/jeevan/project-lifeline.png" loading="lazy" alt="LifeLine Achham" class="project-img-hover" />
              <div style="color:#fe3f40" class="project-img-svg w-embed">
                <svg width="100%" height="100%" viewBox="0 0 728 1020" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.002 153.857C25.002 153.857 151.002 -28.0122 236.002 40.3572C351.002 132.857 -86.2292 534.598 62.5019 617.857C173.257 679.857 466.502 -70.1428 646.002 40.3572C889.446 190.221 -74.3269 862.107 151.002 983.857C337.002 1084.36 526.502 453.148 665.002 551.357C803.502 649.566 415.502 926.187 501.002 983.857C586.502 1041.53 703.002 794.357 703.002 794.357" stroke="currentColor" stroke-width="50" stroke-linecap="round" />
                </svg>
              </div>
              <img src="/jeevan/project-lifeline.png" loading="lazy" alt="LifeLine Achham" class="project-img" />
            </div>
            <div class="project-detail">
              <div class="project-logo">
                <img src="/jeevan/skill-react.png" loading="lazy" alt="React.js" class="project-logo-img" />
              </div>
              <div class="project-detail-header">
                <div class="project-detail-btm">
                  <div class="project-name-text">LIFELINE ACHHAM</div>
                </div>
                <div class="project-detail-text">React.js • Blood Donor Directory</div>
              </div>
              <div class="projects-arrow">
                <div class="code-embed-7 w-embed">
                  <svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: auto">
                    <path d="M1.17273 17.9405L18.6533 2.29983M5.84177 1.17288L18.6533 2.29983L18.3543 15.1573" stroke="currentColor" stroke-width="2.34564" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="projects-end">
      <div class="projects-end-inner-wrapper">
        <p class="projects-end-para">
          WANT TO EXPLORE MORE PROJECTS OR CHECK MY CODE ON GITHUB?
        </p>
        <div class="projects-pill-first">
          <div class="hero-pill-text">12+ Live Projects</div>
        </div>
        <div class="projects-pill-second">
          <div class="hero-pill-text">React &amp; Next.js</div>
        </div>
        <div class="projects-pill-fourth">
          <div class="hero-pill-text">Open Source</div>
        </div>
        <a
          href="https://github.com/Jeevan1"
          target="_blank"
          rel="noopener noreferrer"
          class="project-btn cta-btn w-inline-block"
        >
          <div class="cta-text">Visit My GitHub</div>
          <div class="cta-btn-arrow">
            <div class="cta-arrow w-embed">
              <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.34329 8.09545L14.3749 7.868M10.4832 3.31135L14.3749 7.868L9.66996 12.1645" stroke="currentColor" stroke-width="1.6138" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="cta-btn-fill-hover"></div>
        </a>
      </div>
    </div>
  </div>
</div>`;

export default function SelectedWorksSection() {
  return (
    <section
      id="projects"
      className="section-projects"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
