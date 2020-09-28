    (function () {

        var LanguageSelection = {
    
            init : function () {
                $('.header__menu-ul > li > .dropdown-toggle').click(function () {
                    window.location = $(this).attr('href');
                });                
            }
    
        }
    
        module.exports = LanguageSelection || window.LanguageSelection;
    
    })();
    
    