'use strict';

(function () {
  window.colorize = function (element, colors) {
    element.addEventListener('click', function () {
      var color = colors[Math.floor(Math.random() * colors.length)];
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
