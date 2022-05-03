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
    slidesPerView: 4,
    spaceBetween: 54,
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