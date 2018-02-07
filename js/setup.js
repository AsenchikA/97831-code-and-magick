'use strict';

var WIZARD_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var QUANTITY_WIZARD = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupUserName = document.querySelector('.setup-user-name');
var setupSubmit = document.querySelector('.setup-submit');
var setupForm = document.querySelector('.setup-wizard-form');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var onSubmitForm = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupForm.submit();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupUserName.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.stopPropagation();
    }
  });
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);
setupClose.addEventListener('click', closePopup);

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmit.addEventListener('click', setupForm.submit);
setupSubmit.addEventListener('keydown', onSubmitForm);

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = WIZARD_COAT_COLORS[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)];
});
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = WIZARD_EYES_COLORS[Math.floor(Math.random() * WIZARD_EYES_COLORS.length)];
});
fireballWrap.addEventListener('click', function () {
  // fireballWrap.style.fill = FIREBALL_COLORS[Math.floor(Math.random() * FIREBALL_COLORS.length)];
  fireballWrap.style.background = FIREBALL_COLORS[Math.floor(Math.random() * FIREBALL_COLORS.length)];
});

document.querySelector('.setup-similar').classList.remove('hidden');

// генерация массива волшебников и их свойств

var getWizardProperties = function (quantity) {
  var properties = [];
  for (var i = 0; i < quantity; i++) {
    properties.push({
      name: WIZARD_FIRSTNAMES[Math.floor(Math.random() * WIZARD_FIRSTNAMES.length)] + ' ' + WIZARD_LASTNAMES[Math.floor(Math.random() * WIZARD_LASTNAMES.length)],
      coatColor: WIZARD_COAT_COLORS[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)],
      eyesColor: WIZARD_EYES_COLORS[Math.floor(Math.random() * WIZARD_EYES_COLORS.length)]
    });
  }
  return properties;
};

var wizards = getWizardProperties(QUANTITY_WIZARD);

// генерация блока волшебника с помощью шаблона

var renderWizard = function (wizard) {
  var wizardItem = similarWizardTemplate.cloneNode(true);
  wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardItem;
};

// добавление волшебников в разметку по шаблону

var fragment = document.createDocumentFragment();
for (var i = 0; i < QUANTITY_WIZARD; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
document.querySelector('.setup-similar-list').appendChild(fragment);
