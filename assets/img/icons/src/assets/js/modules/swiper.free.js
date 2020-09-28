(function () {

    var SwiperFree = {

        init : function () {
            var swiperFree = new Swiper(".swiper-free-container", {
                slidesPerView: 6,
                freeMode : true,       
        
                breakpoints: {
                    640: {
                      slidesPerView: 3,
                      freeMode : true,       
                    }
                }   
            }) 			
        }

    }

    module.exports = SwiperFree || window.SwiperFree;

})();

