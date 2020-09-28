function Navigation(options) {
    this._opened = false;
    this.panel = document.getElementsByClassName('navigation__section')[0];
}

Navigation.prototype.open = function() {
    var self = this;
    document.querySelector('body').classList.add('navigation-open');
    this.panel.classList.add('open');
    this._opened = true;
    jQuery('.navigation__section').height( window.innerHeight - 50)

    return this;
}; 

Navigation.prototype.onResize = function() {
    if(this._opened) {
        jQuery('.navigation__section').height( window.innerHeight - 50)
    }
}

Navigation.prototype.close = function() {
    var self = this;
    if (!this.isOpen()) {
      return this;
    }
	
	document.querySelector('body').classList.remove('navigation-open');
	this.panel.classList.remove('open');
    this._opened = false;

    return this;
};    

Navigation.prototype.toggle = function() {
    return this.isOpen() ? this.close() : this.open();
  };    

  Navigation.prototype.isOpen = function() {
    return this._opened;
};  

module.exports = Navigation || window.Navigation;