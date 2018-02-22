'use strict';

(function () {
  window.colorize = function (element, colors, callback) {
    element.addEventListener('click', function () {
      var color = colors[Math.floor(Math.random() * colors.length)];
      callback(color);
    });
  };
})();
