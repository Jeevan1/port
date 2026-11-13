import React from 'react';

const SECTION_HTML = `<div class="section-faq-wrapper">
  <div class="faq-left">
    <div class="section-faq-header">
      <div class="section-about-text">BACKGROUND &amp; INFO</div>
      <div class="section-heading-wrapper">
        <h2 class="section-heading">Experience &amp; FAQ</h2>
        <h2 class="section-heading orange">Experience &amp; FAQ</h2>
      </div>
      <a
        href="mailto:shresthaj1981@gmail.com"
        class="cta-btn-call w-inline-block"
      >
        <div class="cta-call-txt">Email Jeevan Directly ↗</div>
      </a>
    </div>

    <div class="cat-svg-group">
      <div class="cat-svg">
        <img
          src="/jeevan/skills-left.png"
          loading="lazy"
          alt="Jeevan Shrestha Frontend Developer Illustration"
          style="width:100%;max-width:26em;height:auto;object-fit:contain;"
        />
      </div>
    </div>
  </div>

  <div class="faq-right">
    <div class="faq-list-wrapper">
      <div class="faq-list">
        <!-- Item 1 -->
        <div class="faq-item is-open">
          <div class="faq-block">
            <div class="question-block" style="cursor:pointer;width:100%;">
              <div class="faq-ques">What is your current role and professional experience?</div>
            </div>
            <div class="faq-block-btm">
              <div class="answer-block">
                <p class="faq-answer">
                  I work as a Frontend Developer at Ajna Lab (Oct 2025 – Present), building responsive interfaces for HealthTech products like Ajna hOS and Clinic Pro with REST API integration. Previously, I completed a Frontend Developer Internship at Suga Inc. (May 2023 – Sep 2023).
                </p>
              </div>
              <div class="faq-logo">
                <img src="/jeevan/logo.png" loading="lazy" alt="JDev" style="width:70%;height:70%;object-fit:contain;filter:brightness(0) invert(1);" />
              </div>
            </div>
          </div>
        </div>

        <!-- Item 2 -->
        <div class="faq-item">
          <div class="faq-block">
            <div class="question-block" style="cursor:pointer;width:100%;">
              <div class="faq-ques">What is your educational background?</div>
            </div>
            <div class="faq-block-btm">
              <div class="answer-block">
                <p class="faq-answer">
                  I graduated with a BSc. CSIT (Bachelor of Science in Computer Science &amp; Information Technology, 2018 – 2023) from Madan Bhandari Memorial College (Tribhuvan University), following +2 Science at Reliance International Academy (2015 – 2017) and SLC at Shree Jana Jagriti Secondary School.
                </p>
              </div>
              <div class="faq-logo">
                <img src="/jeevan/logo.png" loading="lazy" alt="JDev" style="width:70%;height:70%;object-fit:contain;filter:brightness(0) invert(1);" />
              </div>
            </div>
          </div>
        </div>

        <!-- Item 3 -->
        <div class="faq-item">
          <div class="faq-block">
            <div class="question-block" style="cursor:pointer;width:100%;">
              <div class="faq-ques">What technologies and tools are in your core stack?</div>
            </div>
            <div class="faq-block-btm">
              <div class="answer-block">
                <p class="faq-answer">
                  My core frontend stack includes React.js, Next.js, JavaScript (ES6+), TypeScript, Redux, Tailwind CSS, SCSS, CSS3, HTML5, Bootstrap, and React Native. I also work with Django, PHP, Firebase, REST APIs, and Git/GitHub.
                </p>
              </div>
              <div class="faq-logo">
                <img src="/jeevan/logo.png" loading="lazy" alt="JDev" style="width:70%;height:70%;object-fit:contain;filter:brightness(0) invert(1);" />
              </div>
            </div>
          </div>
        </div>

        <!-- Item 4 -->
        <div class="faq-item">
          <div class="faq-block">
            <div class="question-block" style="cursor:pointer;width:100%;">
              <div class="faq-ques">What kinds of projects have you launched?</div>
            </div>
            <div class="faq-block-btm">
              <div class="answer-block">
                <p class="faq-answer">
                  I have delivered 12+ live web applications including BRDC Research Center, Join Your Event, BusinessBoard Analytics, Recondition Hub, Santosh Raj Construction, SPDSS School Portal, Tripura Sundari Campus, LifeLine Achham, and FarmMart.
                </p>
              </div>
              <div class="faq-logo">
                <img src="/jeevan/logo.png" loading="lazy" alt="JDev" style="width:70%;height:70%;object-fit:contain;filter:brightness(0) invert(1);" />
              </div>
            </div>
          </div>
        </div>

        <!-- Item 5 -->
        <div class="faq-item">
          <div class="faq-block">
            <div class="question-block" style="cursor:pointer;width:100%;">
              <div class="faq-ques">What are your interests outside of coding?</div>
            </div>
            <div class="faq-block-btm">
              <div class="answer-block">
                <p class="faq-answer">
                  Outside of building frontend applications, I enjoy Music, Gaming, Coding side projects, Traveling across Nepal, watching Movies, and Photography.
                </p>
              </div>
              <div class="faq-logo">
                <img src="/jeevan/logo.png" loading="lazy" alt="JDev" style="width:70%;height:70%;object-fit:contain;filter:brightness(0) invert(1);" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="faq-html w-embed w-script">
<script type="text/two26-script">
  (function () {
    function initFaqSection() {
      if (typeof gsap === "undefined") return;

      const items = Array.from(document.querySelectorAll(".section-faq .faq-item"));
      if (!items.length) return;

      items.forEach((item, idx) => {
        const qBlock = item.querySelector(".question-block");
        const aWrap = item.querySelector(".faq-block-btm");
        if (!qBlock || !aWrap) return;

        if (idx !== 0) {
          item.classList.remove("is-open");
          gsap.set(aWrap, { height: 0, opacity: 0, overflow: "hidden" });
        } else {
          item.classList.add("is-open");
          gsap.set(aWrap, { height: "auto", opacity: 1, overflow: "hidden" });
        }

        qBlock.addEventListener("click", () => {
          const isOpen = item.classList.contains("is-open");

          items.forEach((other) => {
            if (other !== item && other.classList.contains("is-open")) {
              other.classList.remove("is-open");
              const otherAns = other.querySelector(".faq-block-btm");
              if (otherAns) {
                gsap.to(otherAns, {
                  height: 0,
                  opacity: 0,
                  duration: 0.35,
                  ease: "power2.inOut",
                });
              }
            }
          });

          if (isOpen) {
            item.classList.remove("is-open");
            gsap.to(aWrap, {
              height: 0,
              opacity: 0,
              duration: 0.35,
              ease: "power2.inOut",
              onComplete: () => {
                if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
              },
            });
          } else {
            item.classList.add("is-open");
            gsap.to(aWrap, {
              height: "auto",
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
              },
            });
          }
        });
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initFaqSection);
    } else {
      initFaqSection();
    }
  })();
</script>
</div>`;

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="section-faq"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
