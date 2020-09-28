var Navigation = require('./navigation');

(function () {

    var NavMobile = {

        navigation : new Navigation({}),

        init : function () {
            document.getElementById('headerMenuButton').addEventListener('click', function(e) {
                NavMobile.navigation.toggle();
            });    
                  
            window.addEventListener("resize", NavMobile.onResize)
            if (window.innerWidth < 992) {
                NavMobile.addToggle(); 
            } 
        },

        onResize : function () {
            if(ResponsiveBootstrapToolkit.is("<md")) {
                NavMobile.addToggle();            
            } else {
                NavMobile.removeToggle()
            }

            NavMobile.navigation.onResize();
        },

        addToggle : function () {
            jQuery('#main-nav-collapse').find(".accordion-toggle").each(function() {
                if (!$(this)[0].hasAttribute("data-toggle")) {
                   $(this).removeAttr("desktop-href");
                   $(this).attr("data-toggle", "collapse")
                } 
            })     
        },

        removeToggle : function () {
            jQuery('#main-nav-collapse').find(".accordion-toggle").each(function() {
                $(this).removeAttr("data-toggle");
            })
        }

    }

    module.exports = NavMobile || window.NavMobile;

})();

