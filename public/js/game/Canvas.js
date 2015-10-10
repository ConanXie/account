define(function () {
  var canvas = document.querySelector('#canvas');
  var Canvas = function (canvas) {
    this.canvas = canvas;
    this.cxt = canvas.getContext('2d');
  };
  Canvas.prototype.init = function () {
    this.setCanvas();
    this.drawStart();
  };
  Canvas.prototype.setCanvas = function () {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    this.canvas.setAttribute('width', width*2);
    this.canvas.setAttribute('height', height*2);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.width = width*2;
    this.height = height*2;
  };
  Canvas.prototype.drawStart = function () {
    var cxt = this.cxt;
    cxt.fillStyle = 'rgb(0, 0, 0)';
    cxt.fillRect(0, 0, this.width, this.height);
    cxt.fillStyle = 'rgb(255, 0, 0)';
    cxt.arc(this.width/2, this.height/2, 150, 0, Math.PI*2, true);
    cxt.fill();
  };
  return new Canvas(canvas);
});