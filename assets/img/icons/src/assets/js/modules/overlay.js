(function () {

    var Overlay = {

        init : function () {

            $.fn.navigationInteraction = function () {
                var el = $(this);
        
                $(el).on("mouseover", function() {
                    if($(this).has('ul').length) {
                        $('.navigation__overlay').addClass('active');
                    }
                })
        
                $(el).on("mouseout", function() {
                    $('.navigation__overlay').removeClass('active');
                })           
            }
        
            $(".navigation-li").navigationInteraction();
   			
        }

    }

    module.exports = Overlay || window.Overlay;

})();

