(function () {

    var Accessibility = {

        init : function () {

            $.fn.accessibleNavigation = function () {
                var el = $(this);
            
                /* Make dropdown menus keyboard accessible */
            
                $("a", el).focus(function() {
                    $(this).parents("li").addClass("hover");
        
                    if($(this).parent().has('.subnavigation-ul').length) {
                        $('.navigation__overlay').addClass('active');
                    } else {
                        $('.navigation__overlay').removeClass('active');
                    }
        
                }).blur(function() {
                    $(this).parents("li").removeClass("hover");
                });
             
            }   
            
            $("nav").accessibleNavigation();
   			
        }

    }

    module.exports = Accessibility || window.Accessibility;

})();

