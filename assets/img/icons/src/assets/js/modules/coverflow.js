(function () {

    var Coverflow = {

        init : function () {
            $('.flip-carousel').flipster({
                itemContainer: 'ul',  
                itemSelector: 'li',
                style: 'carousel',
                spacing: -0.4,
                buttons: true,
                nav: 'after'       
            });
        
            setTimeout(function() {
                jQuery('.flipster__nav').detach().appendTo('.flip-carousel-pagination');
                jQuery('.flipster__button--prev').detach().prependTo('.flip-carousel-pagination');
                jQuery('.flipster__button--next').detach().appendTo('.flip-carousel-pagination');
            }, 500);   			
        }

    }

    module.exports = Coverflow || window.Coverflow;

})();

