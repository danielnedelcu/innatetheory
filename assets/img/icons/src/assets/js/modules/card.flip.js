var Toggle = require('../utils/toggle');
(function () {

    var CardFlip = {
        init : function () {
            if(!DOMUtils.is_internetExplorer(11)) {
                TweenLite.set(".product__list-li", {perspective:800});
                TweenLite.set(".card", {transformStyle:"preserve-3d"});
                TweenLite.set(".card-back", {rotationY:-180});
                TweenLite.set([".card-back", ".card-front"], {backfaceVisibility:"hidden"});
                $.each($(".product__list-li"), function(i,element) {
                    var infoBtn = $(this).find(".info-btn");
                    var closeBtn = $(this).find('.close-btn');
                    var self = $(this);

                    infoBtn.on('click', function () {
                        TweenLite.to(self.find(".card"), 1.2, {rotationY:180, ease:Back.easeInOut});
                    })

                    closeBtn.on('click', function () {
                        TweenLite.to(self.find(".card"), 1.2, {rotationY:0, ease:Back.easeInOut});
                    })
                })
            } else {
                var newArr = [];

                $.each($(".product__list-li"), function(i,element) {
                    var cardFront = jQuery('.card-front');
                    var cardBack = jQuery('.card-back');
                    var infoBtn = $(this).find(".open-btn");
                    var closeBtn = $(this).find('.close-btn');
                    var self = $(this);
                    cardFront.show();
                    cardBack.hide();

                    newArr.push(new Toggle(self));

                    infoBtn.on('click', function (e) {
                        newArr[i].toggle();
                    })

                    closeBtn.on('click', function () {
                        newArr[i].toggle();
                    })    
                })            
            }
        }
    }

    module.exports = CardFlip || window.CardFlip;

})();            