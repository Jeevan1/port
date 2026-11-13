export interface PageRuntimeConfig {
  route: string;
  title: string;
  wfPage: string;
  wfSite: string;
  wfCollection: string | null;
  wfItemSlug: string | null;
  isCaseStudy: boolean;
  tailScripts: string[];
}

const LENIS_HOMEPAGE_SCRIPT = `
  (function () {
    function initLenis() {
      if (typeof Lenis === "undefined") return;
      if (window.lenis) return;

      var wrapper = document.querySelector(".page");
      if (!wrapper) {
        console.warn("[Lenis] .page wrapper not found — smooth scroll not initialized.");
        return;
      }

      var content =
        wrapper.children && wrapper.children.length > 1
          ? wrapper
          : wrapper.firstElementChild || wrapper;

      var isTouch = matchMedia("(pointer: coarse)").matches;

      function updateViewportHeight() {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", vh + "px");
        if (wrapper) {
          wrapper.style.height = window.innerHeight + "px";
        }
        if (window.lenis) {
          window.lenis.resize();
        }
        if (typeof ScrollTrigger !== "undefined") {
          ScrollTrigger.refresh();
        }
      }

      updateViewportHeight();
      window.addEventListener("resize", updateViewportHeight);
      window.addEventListener("orientationchange", function () {
        setTimeout(updateViewportHeight, 200);
      });
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", updateViewportHeight);
      }

      var lenis = new Lenis({
        wrapper: wrapper,
        content: content,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        infinite: false,
        duration: isTouch ? 1.1 : 1.7,
        wheelMultiplier: 0.9,
        touchMultiplier: isTouch ? 1.6 : 2.6,
        touchInertiaMultiplier: isTouch ? 18 : 50,
        syncTouch: true,
        syncTouchLerp: isTouch ? 0.09 : 0.35,
        touchInertiaExponent: 2,
        easing: function (t) {
          return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        },
      });

      window.lenis = lenis;

      var imgs = wrapper.querySelectorAll("img");
      imgs.forEach(function (img) {
        if (!img.complete) {
          img.addEventListener("load", function () {
            if (window.lenis) window.lenis.resize();
          });
        }
      });

      if (typeof gsap !== "undefined") {
        if (typeof ScrollTrigger !== "undefined") {
          gsap.registerPlugin(ScrollTrigger);

          lenis.on("scroll", ScrollTrigger.update);

          ScrollTrigger.scrollerProxy(wrapper, {
            scrollTop: function (value) {
              if (arguments.length) {
                lenis.scrollTo(value, { immediate: true });
              }
              return lenis.scroll;
            },
            getBoundingClientRect: function () {
              return {
                top: 0,
                left: 0,
                width: wrapper.clientWidth || window.innerWidth,
                height: wrapper.clientHeight || window.innerHeight,
              };
            },
            pinType: "transform",
          });

          ScrollTrigger.defaults({ scroller: wrapper });
          ScrollTrigger.addEventListener("refresh", function () {
            lenis.resize();
          });

          ScrollTrigger.refresh();
          window.addEventListener("load", function () {
            updateViewportHeight();
            ScrollTrigger.refresh();
          });
        }

        gsap.ticker.add(function (time) {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initLenis);
    } else {
      initLenis();
    }
  })();
`;

export const STATIC_PAGE_CONFIGS: Record<string, Omit<PageRuntimeConfig, 'isCaseStudy'>> = {
  home: {
    route: '/',
    title: 'Jeevan Shrestha | Frontend Developer (JDev)',
    wfPage: '6aaad679fdb9d914f7f52024',
    wfSite: '6aaad679fdb9d914f7f52049',
    wfCollection: null,
    wfItemSlug: null,
    tailScripts: [LENIS_HOMEPAGE_SCRIPT],
  },
};

export function getPageRuntimeConfig(_pathname: string): PageRuntimeConfig {
  return { ...STATIC_PAGE_CONFIGS.home, isCaseStudy: false };
}
