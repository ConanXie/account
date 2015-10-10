require.config({
  baseUrl: '/js/game/',
  paths: {}
});
require(['Canvas'], function (Canvas) {
  Canvas.init();
})