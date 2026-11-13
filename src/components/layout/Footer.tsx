import React from 'react';

const SECTION_HTML = `<div class="footer-html w-embed w-script"><style>
  .footer-btm {
    display: block !important;
    transform-origin: bottom center !important;
    will-change: transform;
  }

  .footer-heading-line-mask {
    overflow: hidden !important;
    display: block !important;
  }

  .footer-heading-line {
    display: block !important;
    will-change: transform, opacity;
  }

  .footer-link-char {
    display: inline-block;
    transform-origin: center center;
    will-change: transform, text-shadow;
  }
</style>

<script type="text/two26-script">
  (function () {
    function initTwo26FooterAnimation() {
      if (typeof gsap === "undefined") return;

      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }
      if (typeof SplitText !== "undefined") {
        gsap.registerPlugin(SplitText);
      }

      const scrollerEl = document.querySelector(".page") || window;

      const footer = document.querySelector(
        "footer, .footer, .footer-wrapper, [data-section='footer']",
      );
      if (!footer) return;

      const footerBtm = footer.querySelector(".footer-btm");
      const footerHeadings = Array.from(
        footer.querySelectorAll(
          ".footer-heading, h2.footer-heading, .footer-top-left h2, .footer-top-left .heading",
        ),
      );

      let allHeadingLines = [];

      footerHeadings.forEach((heading) => {
        let lines = [];

        if (typeof SplitText !== "undefined") {
          const split = new SplitText(heading, {
            type: "lines",
            linesClass: "footer-heading-line",
          });
          split.lines.forEach((line) => {
            const mask = document.createElement("span");
            mask.className = "footer-heading-line-mask";
            line.parentNode.insertBefore(mask, line);
            mask.appendChild(line);
          });
          lines = split.lines;
        } else {
          const raw = heading.innerHTML.trim();
          heading.innerHTML = \`<span class="footer-heading-line-mask"><span class="footer-heading-line">\${raw}</span></span>\`;
          lines = Array.from(heading.querySelectorAll(".footer-heading-line"));
        }

        gsap.set(lines, {
          y: "115%",
          opacity: 0,
        });

        allHeadingLines = allHeadingLines.concat(lines);
      });

      if (allHeadingLines.length) {
        gsap.to(allHeadingLines, {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: footer,
            scroller: scrollerEl,
            start: "top 80%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });
      }

      const footerLogo = footer.querySelector(".footer-btm") || footerBtm;

      if (footerLogo) {
        gsap.set(footerLogo, {
          scaleY: 0.15,
          transformOrigin: "bottom center",
          display: "block",
          willChange: "transform",
        });

        let hasBounced = false;

        ScrollTrigger.create({
          trigger: footer,
          scroller: scrollerEl,
          start: "top bottom",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const vel = Math.abs(self.getVelocity() || 0);
            const velStretch = Math.min(vel / 1500, 0.25);

            if (self.progress >= 0.9) {
              if (!hasBounced) {
                hasBounced = true;
                gsap.killTweensOf(footerLogo);
                gsap.to(footerLogo, {
                  scaleY: 1,
                  duration: 1.4,
                  ease: "elastic.out(1.2, 0.35)",
                  overwrite: "auto",
                });
              }
            } else {
              hasBounced = false;

              const baseTarget =
                self.direction === 1
                  ? 0.15 + self.progress * 1.15 + velStretch
                  : 0.15 + self.progress * 0.95;

              const targetScaleY = Math.max(0.15, Math.min(baseTarget, 1.4));

              gsap.to(footerLogo, {
                scaleY: targetScaleY,
                duration: 0.1,
                ease: "power1.out",
                overwrite: "auto",
              });
            }
          },
          onLeave: () => {
            if (!hasBounced) {
              hasBounced = true;
              gsap.killTweensOf(footerLogo);
              gsap.to(footerLogo, {
                scaleY: 1,
                duration: 1.4,
                ease: "elastic.out(1.2, 0.35)",
                overwrite: "auto",
              });
            }
          },
          onLeaveBack: () => {
            hasBounced = false;
            gsap.killTweensOf(footerLogo);
            gsap.to(footerLogo, {
              scaleY: 0.15,
              duration: 0.25,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
        });
      }

      const footerLinks = Array.from(
        footer.querySelectorAll(
          ".footer-link, a.footer-link, [class*='footer-link'], a[href^='mailto:'], .social-link a, .social-link",
        ),
      ).filter(
        (link) =>
          !link.classList.contains("footer-link-header") &&
          !link.closest(".footer-link-header"),
      );

      footerLinks.forEach((link) => {
        if (link.querySelector(".footer-link-char")) return;

        Array.from(link.childNodes).forEach((node) => {
          if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent.trim().length > 0
          ) {
            const span = document.createElement("span");
            span.className = "footer-link-text-wrap";
            span.style.display = "inline-block";

            const raw = node.textContent;
            span.innerHTML = raw
              .split("")
              .map((c) => {
                if (c === " ") return "&nbsp;";
                return \`<span class="footer-link-char">\${c}</span>\`;
              })
              .join("");

            node.parentNode.replaceChild(span, node);
          }
        });

        const chars = Array.from(link.querySelectorAll(".footer-link-char"));
        if (!chars.length) return;

        gsap.set(chars, {
          display: "inline-block",
          transformOrigin: "center center",
          scale: 1,
          rotation: 0,
          textShadow: "0px 0px 0px rgba(0,0,0,0)",
        });

        link.addEventListener("mouseenter", () => {
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

        link.addEventListener("mouseleave", () => {
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
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTwo26FooterAnimation);
    } else {
      initTwo26FooterAnimation();
    }
  })();
</script>
</div><div class="footer-wrapper"><div class="footer-top"><div class="footer-top-left"><h2 class="footer-heading">Ready to build something great together?</h2><a data-wf--cta-btn--variant="base" href="#" class="cta-btn w-inline-block"><div class="cta-text">Let&#x27;s Talk</div><div class="cta-btn-arrow"><div class="svg-arrow-cta w-embed"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_190_472)">
<path d="M1.46439 8.53621L8.53546 1.46515M3.05538 1.28837L8.53546 1.46515L8.71223 6.94522" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_190_472">
<rect width="10" height="10" fill="currentColor" transform="translate(10) rotate(90)"/>
</clipPath>
</defs>
</svg>
</div></div><div class="cta-btn-fill-hover"></div></a><div class="footer-links-block email"><div class="footer-link-header">Email me</div><a href="mailto:shresthaj1981@gmail.com?subject=Hello%20Jeevan!" class="footer-link">shresthaj1981@gmail.com</a></div></div><div class="footer-top-right"><div class="footer-top-right-top"><div class="footer-links-block"><div class="footer-link-header">Navigation</div><a href="#about" class="footer-link">About</a><a href="#projects" class="footer-link">Projects</a><a href="#skills" class="footer-link">Skills</a><a href="/jeevan/CV_JEEVAN_SHRESTHA.pdf" target="_blank" download="CV_JEEVAN_SHRESTHA.pdf" class="footer-link">Download CV</a></div><div class="footer-links-block socials"><a href="https://github.com/Jeevan1" target="_blank" class="social-link w-inline-block"><div class="footer-link">GitHub</div><div class="footer-arrow-svg w-embed"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.48418 7.50615L7.33428 0.656055M2.02545 0.484802L7.33428 0.656055L7.50553 5.96488" stroke="white" stroke-width="0.96875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div></a><a href="https://www.linkedin.com/in/jeevan-shrestha-34a3b01a5" target="_blank" class="social-link w-inline-block"><div class="footer-link">LinkedIn</div><div class="footer-arrow-svg w-embed"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.48418 7.50615L7.33428 0.656055M2.02545 0.484802L7.33428 0.656055L7.50553 5.96488" stroke="white" stroke-width="0.96875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div></a><a href="https://sthajeevan.com.np" target="_blank" class="social-link w-inline-block"><div class="footer-link">sthajeevan.com.np</div><div class="footer-arrow-svg w-embed"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.48418 7.50615L7.33428 0.656055M2.02545 0.484802L7.33428 0.656055L7.50553 5.96488" stroke="white" stroke-width="0.96875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div></a></div></div><div class="footer-top-right-btm"><div class="footer-links-block"><a href="#about" class="footer-link">Crafted with React &amp; Next.js.<br/>Pixel-perfect UI Engineering</a></div><div class="footer-address">Kathmandu,<br/>Nepal</div></div></div></div><div class="footer-btm"><div class="footer-rights-text">© Copyright 2026 - JDev (Jeevan Shrestha). All Rights Reserved.</div><div class="footer-logo-wrap"><div class="footer-svg-logo w-embed"><svg width="100%" height="100%" viewBox="0 0 1400 309" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- J (Sky Blue #03a4ed) -->
  <path d="M195 8H258V204C258 272 214 307 142 307C72 307 30 268 30 198H92C92 234 110 251 142 251C176 251 195 232 195 196V8Z" fill="#03a4ed"/>
  <!-- D (White #f2f9fe) -->
  <path d="M330 8H475C585 8 652 70 652 156C652 242 585 304 475 304H330V8ZM393 248H470C544 248 588 212 588 156C588 100 544 64 470 64H393V248Z" fill="#f2f9fe"/>
  <!-- E (White #f2f9fe) -->
  <path d="M720 8H985V64H783V128H960V182H783V248H992V304H720V8Z" fill="#f2f9fe"/>
  <!-- V (Coral Red #fe3f40) -->
  <path d="M1035 8H1104L1202 232L1300 8H1369L1234 304H1170L1035 8Z" fill="#fe3f40"/>
</svg>
</div></div></div></div><div class="footer-overlay-bg"><div class="footer-overlay"></div><img loading="lazy" src="/cdn/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52067_footer-texture.svg" alt="" class="footer-texture"/></div>`;

export default function Footer() {
  return (
    <footer
      className="footer"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
