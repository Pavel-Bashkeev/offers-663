const sliderCommentsInner = document.querySelector('.comments-slider');
const sliderComment = sliderCommentsInner.querySelector('.swiper-container');
if(sliderCommentsInner){
  const comments = new Swiper(sliderComment, {
    spaceBetween: 10,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true
    },
    loop: true
  });
}