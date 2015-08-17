var App = App || {};
App.ChildBackgroundClass = function (domItem){
    App.ChildPutContent.apply(this, arguments);
    interest = 0;
    this.element.addEventListener("click", function(){setTimeout(App.ChildBackgroundClass.prototype.image,6000)});
    this.element.addEventListener("click", function(){setInterval(App.ChildBackgroundClass.prototype.go,58)});
}

    App.ChildBackgroundClass.prototype = Object.create(App.ChildPutContent.prototype);

    App.ChildBackgroundClass.prototype.image = function(){
        var r = Math.floor(Math.random(1,15) * (15 - 1)) + 1;
        this.element.style.backgroundImage = ("url(images/" + r +".jpg)");
    }

    App.ChildBackgroundClass.prototype.go = function(){
       var r = Math.floor(Math.random(0,255) * (255 - 0)) + 0;
       var g = Math.floor(Math.random(0,255) * (255 - 0)) + 0;
       var b = Math.floor(Math.random(0,255) * (255 - 0)) + 0;
       if(interest != 100) {
            interest++;
           document.getElementById('proc').innerHTML = interest + ' %';
           document.getElementById('progress').style.width = interest * 5 + 'px';
           this.element = document.getElementById("item");
           this.element.style.borderColor = ('rgb(' + r + ',' + g + ',' + b + ')');
       }
       else{
           document.getElementById('proc').innerHTML = 'Загрузка завершена';
           document.getElementById('proc').style.margin = '15px 0 0 186px';
       }
    }
