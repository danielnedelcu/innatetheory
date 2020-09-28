(function () {

    var UtilitySearch = {

        init : function () {
            $('.utility__search-expand').focus(function(){
                $(this).attr('placeholder', '');
            });
        
            $('.utility__search-expand').focusout(function(){
                $(this).val('');
                $(this).attr('placeholder', 'SEARCH');
            });     
            
            $('.utility__search-expand').on("keydown", function(e) {
                if(e.keyCode == 13) {
                    window.location = '/search?q=' + $(this).val();
                }
            })
        }

    }

    module.exports = UtilitySearch || window.UtilitySearch;

})();

