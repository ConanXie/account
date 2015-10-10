define(function () {
  return {
    addClass: function (node, value) {
      value = value.trim().replace(/\s{2,}/, ' ');
      if (value && typeof value === 'string') {
        var className = node.className;
        if (!className) {
          node.className = value;
        } else {
          className = ` ${className} `;
            value.split(' ').forEach(function (item) {
              if (!~className.indexOf(` ${item} `)) {
                className = `${className}${item} `;
              }
            });
          node.className = className.trim();
        }
      }
    },
    removeClass: function (node, value) {
      value = value.trim().replace(/\s{2,}/, ' ');
      if (value && typeof value === 'string') {
        var className = node.className;
        if (className) {
          className = ` ${className} `;
          value.split(' ').forEach(function (item) {
            if (~className.indexOf(` ${item} `)) {
              className = className.replace(` ${item} `, ' ');
            }
          });
        }
        node.className = className.trim();
      }
    },
    css: function (node, config) {
      for (var i in config) {
        node.style[i] = config[i];
      }
    }
  };
});