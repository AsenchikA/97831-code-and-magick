'use strict';

(function () {

  var WIZARD_FIRSTNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var QUANTITY_WIZARD = 4;

  var getWizardProperties = function (quantity) {
    var properties = [];
    for (var i = 0; i < quantity; i++) {
      properties.push({
        name: WIZARD_FIRSTNAMES[Math.floor(Math.random() * WIZARD_FIRSTNAMES.length)] + ' ' + WIZARD_LASTNAMES[Math.floor(Math.random() * WIZARD_LASTNAMES.length)],
        coatColor: window.wizardProperties.WIZARD_COAT_COLORS[Math.floor(Math.random() * window.wizardProperties.WIZARD_COAT_COLORS.length)],
        eyesColor: window.wizardProperties.WIZARD_EYES_COLORS[Math.floor(Math.random() * window.wizardProperties.WIZARD_EYES_COLORS.length)]
      });
    }
    return properties;
  };

  var wizards = getWizardProperties(QUANTITY_WIZARD);

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardItem = similarWizardTemplate.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardItem;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < QUANTITY_WIZARD; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
})();
