(function () {

    var StoriesTab = {

        init : function () {
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var dataValue = jQuery(e.target).attr('aria-controls');
                jQuery('.comp__stories-images').find('.comp__stories-item').addClass('active');
                jQuery('.comp__stories-images').find(`[data-value='${dataValue}']`).removeClass('active');
            })    
            
            $('#nav-tab a:first-child').tab('show')
        }
    }

    module.exports = StoriesTab || window.StoriesTab;

})();            