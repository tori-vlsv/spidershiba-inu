ScrollReveal().reveal('.reveal', { 
    delay: 200,
    opacity: 0,
    duration: 1000,
    mobile: false,
    distance: '20%'
});

$(window).on('scroll', function() {
    let header = $('header');
    if (window.pageYOffset !== 0) {
        header.addClass('active');
    } else {
        header.removeClass('active');
    }
});


  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    grabCursor: true,
    breakpoints: {
      // when window width is >= 320px
      500: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      720: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1325: {
        slidesPerView: 4,
        spaceBetween: 54
      },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



Chart.register(ChartDataLabels);

let ctx = document.getElementById("myChart");
let myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
    ],
    datasets: [{
      data: [19, 5, 30, 10, 15, 6, 15],
      borderColor: '#101D3F',
      borderWidth: 2,
      backgroundColor: [
          "#4E00FF",
          "#FF850B",
          "#1DBEE1",
          "#133D81",
          "#FF0000",
          "#663090",
          "#0096F2",
      ],
      hoverBackgroundColor: [
        "#4E00FF",
        "#FF850B",
        "#1DBEE1",
        "#133D81",
        "#FF0000",
        "#663090",
        "#0096F2",
      ] 
    }]
  },
  options: { 
    responsive: true,
    maintainAspectRatio: true, 
    cutout: '80%',
    plugins: {
      datalabels: {
        formatter: (value) => {
          return value + '%';
        },
        color: 'rgba(0, 0, 0, .3)',
        font: {
          weight: 'bold',
          size: 25,
          lineHeight: 30,
        }
      }
    }
  }
});

function toggleFaqItem() {
  const btn = $('.item__faq__title');
  btn.on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
    btn.not(this).next().slideUp();
    btn.not(this).removeClass('active');
  });
}
toggleFaqItem();

function copyText() {
  const copyBtn = $('.copy__btn');
  copyBtn.on('click', function() {
    $(this).prev().children('.copy__txt').select();
    document.execCommand("copy");
  });
}
copyText();

function checkCenterScreen() {
  $(document).scroll(function(){
    // проверяем
      checkPosition();
  });

  // после загрузки страницы сразу проверяем
  checkPosition();

  // проверка при ресайзе страницы
  $(window).resize(function(){
      checkPosition();
  });

  function checkPosition(){
    // координаты дива
    let div_position = $('.roadmap__line').offset();
    // отступ сверху
    let div_top = div_position.top;
    // отступ слева
    let div_left = div_position.left;
    // ширина
    let div_width = $('.roadmap__line').width();
    // высота
    let div_height = $('.roadmap__line').height();

    // проскроллено сверху 
    let top_scroll = $(document).scrollTop();
    // проскроллено слева
    let left_scroll = $(document).scrollLeft();
    // ширина видимой страницы
    let screen_width = $(window).width();
    // высота видимой страницы
    let screen_height = $(window).height() / 2;

    // координаты углов видимой области
    let see_x1 = left_scroll;
    let see_x2 = screen_width + left_scroll;
    let see_y1 = top_scroll;
    let see_y2 = screen_height + top_scroll;

    // координаты углов искомого элемента
    let div_x1 = div_left;
    let div_x2 = div_left + div_height;
    let div_y1 = div_top;
    let div_y2 = div_top + div_width;

    // проверка - виден див полностью или нет
    if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
      $('.roadmap__line').addClass('active');
    }
  }
}
checkCenterScreen();

let block = $('.roadmap__block:not(.roadmap__block__hide)');
let gap = 60;

for (let i = 0; i < block.length; i++) {
  let height = ($(block[i]).height() + $(block[i]).next().height() + gap) / 2
  console.log(height);
}


