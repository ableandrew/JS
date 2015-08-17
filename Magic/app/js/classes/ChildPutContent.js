var App = App || {};
App.ChildPutContent = function(domItem){
    App.ParentChangeStyler.apply(this, arguments);
    this.element.addEventListener("click", App.ChildPutContent.prototype.borderColor);
}
        

    App.ChildPutContent.prototype = Object.create(App.ParentChangeStyler.prototype);
    App.ChildPutContent.prototype.putContent = function (content){
    this.element.innerHTML= content;
    }

    App.ChildPutContent.prototype.borderColor = function(){
            var r = Math.floor(Math.random(0,255) * 255);
            var g = Math.floor(Math.random(0,255) * 255);
            var b = Math.floor(Math.random(0,255) * 255);
            this.style.borderColor = ('rgb(' + r + ',' + g + ',' + b + ')');
    };