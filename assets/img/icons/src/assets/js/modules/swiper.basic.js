(function () {

    var SwiperBasic = {

        init : function () {

            $(".swiper-basic").each(function(index, element){
                var $this = $(this);
                $this.addClass("instance-" + index);
                $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
                $this.find(".swiper-button-next").addClass("btn-next-" + index);
                
                var swiper = new Swiper(".instance-" + index, {
                    effect: $this.attr('data-effect') || "fade",
                    slidesPerView : parseInt($this.attr('data-slides-view')) || 1,
                    slidesPerGroup : parseInt($this.attr('data-slides-group')) || 1,
                    spaceBetween: parseInt($this.attr('data-slides-space')) || 0,                    
                    fadeEffect: { crossFade: true },
                    initialSlide: 0,
                    centeredSlides: false,
                    loop: false,
                    pagination: {
                        el: $(this).find('.swiper-pagination'),
                    },            
                    navigation: {
                        nextEl:  ".btn-next-" + index,
                        prevEl: ".btn-prev-" + index
                    },
                    breakpoints: {
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                          slidesPerGroup : 1,
                          freeMode : $this.attr('data-free-mode') || false,
                        }
                      }            
                });
            });                              
   			
        }

    }

    module.exports = SwiperBasic || window.SwiperBasic;

})();

