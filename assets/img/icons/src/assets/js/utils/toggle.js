function Toggle(el) {
    this.showModal = 0;
    this.el = el;
    this.cardFront = this.el.find('.card-front');
    this.cardBack = this.el.find('.card-back');
}

Toggle.prototype.toggle = function() {
    this.showModal ^= 1;
    if(this.showModal) {
         this.cardBack.show()
         this.cardFront.hide()
     } else { 
        this.cardFront.show()
         this.cardBack.hide() 
    }
}

module.exports = Toggle || window.Toggle;