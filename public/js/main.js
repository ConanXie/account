require.config({
  // baseUrl: '',
  paths: {
    tool: 'lib/tool'
  }
});
require(['add'], function (add) {
    add.init();
});