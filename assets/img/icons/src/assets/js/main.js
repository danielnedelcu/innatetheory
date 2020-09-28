var MobileNavigation = require('./modules/nav.mobile');
var SwiperBasic = require('./modules/swiper.basic');
var CardFlip = require('./modules/card.flip');
var Accessibility = require('./modules/nav.accessibility');
var Overlay = require('./modules/overlay');
var UtilitySearch = require('./modules/utility.search');
var SwiperFree = require('./modules/swiper.free');
var Coverflow = require('./modules/coverflow');
var LanguageSelection = require('./modules/language.select');
var StoriesTab = require('./modules/stories.tabs');
var DOMUtils = require('./utils/DOMUtils')
var VideoModal = require('./modules/video.modal')


document.addEventListener("DOMContentLoaded",()=>{
    MobileNavigation.init();
    Accessibility.init();
    Overlay.init();
    UtilitySearch.init();
    SwiperBasic.init();
    SwiperFree.init();
    CardFlip.init();
    Coverflow.init();
    LanguageSelection.init();
    StoriesTab.init();
    VideoModal.init();
 });