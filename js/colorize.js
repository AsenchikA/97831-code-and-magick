'use strict';

(function () {
  var classToVariable = {
    'wizard-coat': 'wizardCoatColor',
    'wizard-eyes': 'wizardEyesColor'
  };
  window.colorize = function (element, colors, callback) {
    element.addEventListener('click', function () {
      var color = colors[Math.floor(Math.random() * colors.length)];
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      for (var key in classToVariable) {
        if (element.classList.contains(key)) {
          window[classToVariable[key]] = color;
        }
      }
      if (callback) {
        window.debounce(callback);
      }
    });
  };
})();
