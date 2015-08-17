var App = App || {};

App.ParentChangeStyler = function(domItem) {
	this.element = domItem;
}

App.ParentChangeStyler.prototype.changeBorderColor = function(color) {
	this.element.style.borderColor = color;
}

App.ParentChangeStyler.prototype.changeBorderWidth = function(size) {
	this.element.style.borderWidth = size + 'px';
}



