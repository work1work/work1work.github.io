$(document).ready(function () {
  $(".main__slider").owlCarousel({
    items: 1,
    autoplay: true,
    center: true,
    loop: true,
    nav: true,
    navElement: 'main-slider__nav'
  });

  $(".reviews__slider").owlCarousel({
    items: 1,
    utoplay: false,
    nav: true,
    navText: [$('.left'), $('.right')],
    loop: true
  });  

  $(".relize__wrap").owlCarousel({
      center: true,
      items: 12,
      loop: true,
      margin: 5,
      responsive: {
        600: {
          items: 6
        },
        320: {
          items: 1,
          center: false,
          margin: 0,
          dots: false,
          nav: false
        }
      }
  });

  $(".show-find-input").on('click', showFind);

  function showFind() {
    $(this).css("opacity", "0");
    $(".header__search--active").addClass("active");
  };

   $(".header__search--close").on('click', hideFind);

  function hideFind() {
    $(".header__search--active").removeClass("active");
    $(".show-find-input").css("opacity", "1");
  };

  $(".show-find-input").click(function () {
    $(this).css("opacity" , "0");
    $(".header__search--active").addClass("active");
  });
  
  $(".header__search--close").click(function(){
    $(".header__search--active").removeClass('active');
    $(".show-find-input").css("opacity" , "1");
  });

  $(".open-category").on("click", categoryOpen);

  function categoryOpen() {
    $(".catalog-list").slideToggle();
    $(this).toggleClass('active');
    $(this).siblings().toggleClass("active");
  }

  $(".open-menu").on("click", menuOpen);

  function menuOpen() {
    $(this).toggleClass('active');
    $(".menu-list").slideToggle();
    $(this).siblings().toggleClass("active");
  }

  $(".open-sub-menu").on("click", subMenu);

  function subMenu() {
    $(this).toggleClass('active');
    $(this).siblings().slideToggle();
    $(this).siblings().toggleClass("active");
    $(this).parent().toggleClass('active');
  }
  
});
