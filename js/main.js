function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

const firstElements = document.querySelectorAll("[data-anima]");
if (firstElements) {
  firstElements.forEach((item) => {
    let delay = item.getAttribute("data-anima-delay");
    setTimeout(
      () => {
        item.classList.add("active");
      },
      delay ? 500 + +delay : 500
    );
  });
}

const myCarousel = document.getElementById("BannerCarrousel");
if (myCarousel) {
  myCarousel.addEventListener("slide.bs.carousel", (event) => {
    document
      .querySelectorAll("[data-anima]")
      .forEach((e) => e.classList.remove("active"));
    const elements = event.relatedTarget.querySelectorAll("[data-anima]");
    elements.forEach((item) => {
      let delay = item.getAttribute("data-anima-delay");
      setTimeout(
        () => {
          item.classList.add("active");
        },
        delay ? 500 + +delay : 500
      );
    });
  });
}

$(document).ready(function () {
  if (window.matchMedia("(max-width: 991px)").matches) {
    // Slick Banner Home
    $(".box-destaques").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      fade: false,
      responsive: [
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if (window.matchMedia("(max-width: 991px)").matches) {
    // Slick Banner Home
    $(".box-portfolio").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      fade: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

    $(".nav-central-result-destaque").slick({
      slidesToScroll: 1,
      asNavFor: ".list-central-result-home",
      dots: false,
      arrows: true,
      slidesToShow: 1,
      infinite: false,
      focusOnSelect: true,
    });

    $(".list-central-result-home").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      infinite: false,
      asNavFor: ".nav-central-result-destaque",
    });
});

document.addEventListener("DOMContentLoaded", function () {
  let clicked = false;

  function handleClick(event) {
    event.preventDefault();

    if (clicked) {
      console.log("click ok");
    }

    clicked = true;
  }

  const linkInsideCurrLider = document.querySelector(".curr-lider a");

  if (linkInsideCurrLider) {
    linkInsideCurrLider.addEventListener("click", handleClick);
  }
});

$(".titulosCentral").each(function () {
  $("#resultsTitle").append($(this));
});

// add arrow icon
$(".dropdown-submenu").each(function () {
  const $link = $(this).find("a.dropdown-item");

  const hasNestedDropdown = $(this).find(".dropdown-menu").length > 0;

  if (hasNestedDropdown) {
    $link.addClass("has-arrow");
  } else {
    $link.removeClass("has-arrow");
  }
});

// altera as cores do menu no hover do dropdown
$(document).ready(function () {
  const $dropdownMenu = $(".headerFixoMenu");
  const $headerElement = $(".header");
  const $accessibilityBar = $(".acessibillity-bar");

  $dropdownMenu.on("mouseenter", function () {
    $headerElement.addClass("active");
    $accessibilityBar.addClass("active");
  });

  $dropdownMenu.on("mouseleave", function () {
    $headerElement.removeClass("active");
    $accessibilityBar.removeClass("active");
  });

  $dropdownMenu.on("show.bs.dropdown", function () {
    $headerElement.addClass("active");
    $accessibilityBar.addClass("active");
  });

  $dropdownMenu.on("hide.bs.dropdown", function () {
    $headerElement.removeClass("active");
    $accessibilityBar.removeClass("active");
  });
});

$(document).ready(function () {
  var table = $("#table-ofertas").DataTable({
    paging: false,
    ordering: true,
    info: false,
    searching: true,
  });

  $("#searchInput").on("keyup", function () {
    table.search(this.value).draw();
  });
});

var urlBG = window.location.search;
if (urlBG === "?idCanal=aZXDYmH5LQbE2IWQGNOYTw==") {
  var banner = document.querySelector(".pagination-banner");

  if (banner) {
    banner.classList.add("new-bg");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".header .dropdown");

  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    toggle.addEventListener("mouseenter", function () {
      menu.classList.add("show");
      toggle.classList.add("hover-active");
    });

    dropdown.addEventListener("mouseleave", function () {
      menu.classList.remove("show");
      toggle.classList.remove("hover-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const submenus = document.querySelectorAll(".dropdown-submenu");

  submenus.forEach((submenu) => {
    const firstItem = submenu.querySelector(".dropdown-item");

    submenu.addEventListener("mouseenter", function () {
      firstItem.classList.add("active-item");
    });

    submenu.addEventListener("mouseleave", function () {
      firstItem.classList.remove("active-item");
    });
  });
});

$(".searchbox input").focus(function () {
  $(".searchbox .input-group").addClass("focused-border");
});

$(".searchbox input").focusout(function () {
  $(".searchbox .input-group").removeClass("focused-border");
});

// opens and closes the search box.

$(".open-searchbox, .close-searchbox").click(function () {
  $(".searchbox").toggleClass("active");
  $("body").toggleClass("open-menu");
});

// manages the status of the mobile menu.

$(".toggle-mobile-menu").click(function () {
  $(".mobile-menu-div").toggleClass("active");
  $(".header").toggleClass("open-menu");
  $("body").toggleClass("open-menu");
});

$(".button-mapa-mobile").click((e) => {
  $(".button-mapa-mobile").toggleClass("active");
});

// Código responsável por fazer o collapse das tables.

//$('.table:not(.table-not-break)').basictable({
//  breakpoint: 767
//});

// Animações para aparecer o elemento
AOS.init({
  once: true,
});

window.addEventListener(
  "scroll",
  debounce(() => {
    AOS.refresh();
  }, 200)
);

// Tooltip

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Contraste

function accessApplyTheme(theme) {
  localStorage.setItem("access_theme", theme);

  if (theme == "dark") {
    $("body").attr("data-theme", "dark");
  } else {
    $("body").attr("data-theme", "light");
  }
}

var access_theme = "light";

if (localStorage.getItem("access_theme")) {
  access_theme = localStorage.getItem("access_theme");
  accessApplyTheme(access_theme);
}

$("#contrast-toggle").on("click", function (e) {
  if (access_theme == "light") {
    access_theme = "dark";
  } else {
    access_theme = "light";
  }
  accessApplyTheme(access_theme);
});

$(
  ".header .nav-menu-header .header-navigation-item > .dropdown-toggle"
).removeAttr("data-bs-toggle");

document
  .querySelectorAll(".header .nav-menu-header .header-navigation-item")
  .forEach((i) => {
    const dropdown = i.querySelector(".dropdown-menu");
    const toggle = i.querySelector(".dropdown-toggle");

    i.addEventListener("mouseover", () => {
      dropdown.classList.add("show");
      toggle.classList.add("active");
      setTimeout(() => {
        dropdown.style.opacity = "1";
      }, 10);
    });

    i.addEventListener("mouseleave", () => {
      dropdown.style.opacity = "0";
      toggle.classList.remove("active");
      dropdown.classList.remove("show");
    });
  });

if (window.counterUp) {
  const counterUp = window.counterUp.default;

  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 2000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };

  const IO = new IntersectionObserver(callback, { threshold: 1 });

  const el = document.querySelectorAll(".counter");

  if (el) {
    el.forEach((item) => {
      IO.observe(item);
    });
  }
}

var modalVideo = document.getElementById("modalVideo");
var videoPlayer = document.getElementById("videoPlayer");

modalVideo.addEventListener("hidden.bs.modal", function () {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
});

const IO = new IntersectionObserver(callback, { threshold: 1 });
const elements = document.querySelectorAll(".counter");

elements.forEach((el) => {
  IO.observe(el);
});

/* Carousels */

$(document).ready(function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // Slick Banner Home
    $(".destaques-carousel-home").slick({
      slide: ".item-destaque-home:not(.ignoreMe)",
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      // dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      fade: false,
      responsive: [
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  $(".timeline-content-historia").slick({
    asNavFor: ".nav-timeline",
    slidesToShow: 1,
    slidesToScroll: 1,

    fade: false,
    arrows: false,
    infinite: false,
    useTransform: true,
    adaptiveHeight: true,
    draggable: true,
  });

  $(".nav-timeline").slick({
    asNavFor: ".timeline-content-historia",
    slidesToShow: 6,
    slidesToScroll: 1,

    dots: false,
    arrows: true,
    useTransform: true,
    infinite: false,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".carousel-timeline-content").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,

    arrows: false,
    asNavFor: ".carousel-timeline-nav",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".carousel-timeline-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,

    dots: false,
    centerMode: false,
    focusOnSelect: true,

    asNavFor: ".carousel-timeline-content",
  });

  $(".carousel-timeline-nav .slick-next").on("click", () => {
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".slick-next.slick-disabled").attr("disabled", "disabled");
    }
  });

  $(".carousel-timeline-nav .slick-prev").on("click", () => {
    $(".slick-next").removeAttr("disabled");
  });
});

/* Focus no input */

function activeInputsFocus() {
  const inputs = document.querySelectorAll(
    ".div-input input, .div-input select, .div-input textarea"
  );

  inputs.forEach((input) => {
    if (input.value != "") {
      input.parentNode.classList.add("focus");
    }
    input.addEventListener("focus", (e) => {
      input.parentNode.classList.add("focus");
    });
    input.addEventListener("blur", (e) => {
      if (input.value == "") {
        input.parentNode.classList.remove("focus");
      }
    });
  });
}

activeInputsFocus();

/* Parar o vídeo quando fechar o modal */
function stopVideo() {
  let leg = $("#modalVideo iframe").attr("src");
  $("#modalVideo iframe").attr("src", leg);
}
if ($("modalVideo")) {
  $("#modalVideo").on("click", () => {
    setTimeout(() => {
      if (!$("#modalVideo").hasClass("show")) {
        stopVideo();
      }
    }, 200);
  });
}

$(document).ready(function () {
  let buttonAccordions = document.querySelectorAll(
    ".accordion:not(#accordionMenuMobile) button.accordion-button"
  );
  buttonAccordions.forEach((i) => {
    i.addEventListener("click", () => {
      setTimeout(() => {
        if (!i.classList.contains("collapsed")) {
          const id = i.getAttribute("data-bs-target");
          const section = $(id);
          const topo = section.offset().top;
          window.scrollTo({
            top: topo - 230,
            behavior: "smooth",
          });
        }
      }, 410);
    });
  });
});

const storys = new PrismaStories("slide", "openStorys", "closeStorys");
storys.init();
