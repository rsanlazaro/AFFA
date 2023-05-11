$(function () {
  $(".carousel-brands").slick({
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "90px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "85px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 280,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "55px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
