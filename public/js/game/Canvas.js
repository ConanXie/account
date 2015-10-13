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

    /*
    point 下方等边三角形的中心
    h 小三角形的高
    sT 根号3
    */
    
    var cxt = this.cxt,
        width = this.width,
        height = this.height,
        point = 300,
        h = 70,
        sT = Math.sqrt(3);

    cxt.beginPath();
    cxt.fillStyle = 'rgb(0, 0, 0)';
    cxt.fillRect(0, 0, width, height);
    cxt.closePath();
    cxt.beginPath();
    cxt.fillStyle = 'rgb(255, 0, 0)';
    cxt.arc(width/2, height/2, 150, 0, Math.PI*2, true);
    cxt.closePath();
    cxt.fill();

    cxt.beginPath();
    cxt.fillStyle = '#e91e63';
    cxt.moveTo(width/2, height-point);
    cxt.lineTo(width/2+h*sT, height-point-h);
    cxt.lineTo(width/2-h*sT, height-point-h);
    cxt.closePath();
    cxt.fill();
    cxt.beginPath();
    cxt.fillStyle = '#9c27b0';
    cxt.moveTo(width/2, height-point);
    cxt.lineTo(width/2, height-point+h*sT);
    cxt.lineTo(width/2-h*sT, height-point-h);
    cxt.closePath();
    cxt.fill();
    cxt.beginPath();
    cxt.fillStyle = '#009688';
    cxt.moveTo(width/2, height-point);
    cxt.lineTo(width/2, height-point+h*sT);
    cxt.lineTo(width/2+h*sT, height-point-h);
    cxt.closePath();
    cxt.fill();
  };
  return new Canvas(canvas);
});