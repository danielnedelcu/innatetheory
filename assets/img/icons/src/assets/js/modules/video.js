function Video(el) {
    var self = this;
    // this.videoId = videoId;
    this._opened = false;
    this.section = el; 
    this.body = document.body;
    this.videoContainer = this.section.getElementsByClassName('video')[0];
    this.closeBTN = jQuery(this.section).find('.close-modal');

    this.closeBTN.on('click', this.toggle.bind(this))

}

Video.prototype._isUndefined = function(element) {
    return element === void 0;
}

Video.prototype._isNull = function(element) {
    return element === null;
}

Video.prototype._trim = function(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

Video.prototype._hasClass = function(ele,cls) {
    if (ele.className) {
        return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    } else {
        return ele.className = cls;
    }
}

Video.prototype._addClass = function(ele,cls) {
    if (!this._hasClass(ele,cls)) ele.className += " "+cls;
    ele.className = this._trim(ele.className)
}

Video.prototype._removeClass = function(ele,cls) {
    if (this._hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
    }
    ele.className = this._trim(ele.className)
}

Video.prototype._toggleClass = function(el) {


    if(this.toggleState == 0 ) {
        this._removeClass(el, 'active');
        this._addClass(this.sharePageSocials, 'active');        
    }

    this.toggleState ^= 1;       
}


Video.prototype.open = function(id) {
    var self = this;
    var vidId = id;

    this._addClass(this.body, 'modal-open');  


    setTimeout(function() {

        self.createIframe(self.videoContainer, vidId);

    }, 500);        

    
    this._opened = true;

    return this;
}; 

Video.prototype.close = function(e) {
    var self = this;

    self.removeIframe(self.videoContainer);

    this._removeClass(this.body, 'modal-open');  
    

    this._opened = false;

    return this;
};    

Video.prototype.toggle = function(e) {

    e.preventDefault();
    
    return this.isOpen() ? this.close() : this.open();

  };    

  Video.prototype.isOpen = function() {
    return this._opened;
};  


Video.prototype.createIframe = function(container, id) {
    var iframe = document.createElement( "iframe" );
 
    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ id +"?rel=0&version=3&autoplay=1&controls=1&&showinfo=0&loop=1​" );

    container.innerHTML = "";
    container.appendChild( iframe );    
}

Video.prototype.removeIframe = function (el) {

    var frame = el.getElementsByTagName("iframe")[0];
    frame.parentNode.removeChild(frame);
}


module.exports = Video || window.Video;