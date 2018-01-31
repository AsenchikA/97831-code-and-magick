'use strict';

var WIZARD_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var quantityWizard = 4;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

// генерация массива волшебников и их свойств

var getWizardProperties = function (quantity) {
  var properties = [];
  for (var i = 0; i < quantity; i++) {
    properties.push({
      name: WIZARD_FIRSTNAMES[Math.floor(Math.random() * WIZARD_FIRSTNAMES.length)] + ' ' + WIZARD_LASTNAMES[Math.floor(Math.random() * WIZARD_LASTNAMES.length)],
      coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
      eyesColor: WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)]
    });
  }
  return properties;
};

var wizards = getWizardProperties(quantityWizard);

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
for (var i = 0; i < quantityWizard; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
document.querySelector('.setup-similar-list').appendChild(fragment);
