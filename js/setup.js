'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupUserName = document.querySelector('.setup-user-name');
  var setupSubmit = document.querySelector('.setup-submit');
  var setupForm = document.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var onSubmitForm = function (evt) {
    if (evt.keyCode === window.ENTER_KEYCODE) {
      setupForm.submit();
    }
  };

  var onInputEscPress = function (evt) {
    if (evt.keyCode === window.ESC_KEYCODE) {
      evt.stopPropagation();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupUserName.addEventListener('keydown', onInputEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupUserName.removeEventListener('keydown', onInputEscPress);
  };

  setupOpen.addEventListener('click', openPopup);
  setupClose.addEventListener('click', closePopup);

  setupOpenIcon.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  setupSubmit.addEventListener('click', setupForm.submit);
  setupSubmit.addEventListener('keydown', onSubmitForm);

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat, window.wizardProperties.WIZARD_COAT_COLORS);
  window.colorize(wizardEyes, window.wizardProperties.WIZARD_EYES_COLORS);
  window.colorize(fireballWrap, window.wizardProperties.FIREBALL_COLORS);

  document.querySelector('.setup-similar').classList.remove('hidden');

})();
