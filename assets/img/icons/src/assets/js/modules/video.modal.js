var Video = require('./video');

(function () {

    var VideoModal = {

        init : function () {
            if (DOMUtils.isUndefined(document.getElementsByClassName('video__play-btn')[0]) || DOMUtils.isNull(document.getElementsByClassName('video__play-btn')[0]) ) return;
        
            var modal = document.getElementsByClassName('modal-wrapper')[0];
        
            var video = new Video(modal);   
                
            var videos = document.querySelectorAll('.video__play-btn');


            for(var i = 0; i < videos.length; ++i ) {
         
                 var items = jQuery(videos[i]).on('click', function(e) {
          
                     e.preventDefault();
         
                    video.open(jQuery(e.currentTarget).attr('data-embed'));
         
                 })
         
             }            
        }
    }

    module.exports = VideoModal || window.VideoModal;

})();

