'use strict';

(function () {

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');

  var wizardCoatColor = '';
  var wizardEyesColor = '';

  var colorizeAndUpdate = function (color, element) {
    element.style.fill = color;
    window.debounce(window.updateWizards);
  };
  var colorizeFireBall = function (color, element) {
    element.style.backgroundColor = color;
  };

  window.colorize(wizardCoat, window.wizardProperties.WIZARD_COAT_COLORS, function (color) {
    wizardCoatColor = color;
    colorizeAndUpdate(color, wizardCoat);
  });
  window.colorize(wizardEyes, window.wizardProperties.WIZARD_EYES_COLORS, function (color) {
    wizardEyesColor = color;
    colorizeAndUpdate(color, wizardEyes);
  });
  window.colorize(fireballWrap, window.wizardProperties.FIREBALL_COLORS, function (color) {
    colorizeFireBall(color, fireballWrap);
  });

  document.querySelector('.setup-similar').classList.remove('hidden');

  window.setupWizard = {
    getEyesColor: function () {
      return wizardEyesColor;
    },
    getCoatColor: function () {
      return wizardCoatColor;
    }
  };
})();
