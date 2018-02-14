'use strict';

(function () {

  var QUANTITY_WIZARD = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardItem = similarWizardTemplate.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardItem;
  };

  var onGetSuccessResponse = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < QUANTITY_WIZARD; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    document.querySelector('.setup-similar-list').appendChild(fragment);
  };

  var onGetFailedResponse = function (errorMessage) {
    var pastedNode = document.createElement('div');

    var pastedNodeText = document.createElement('p');
    pastedNodeText.textContent = 'Увы, но похожие персонажи скрываются от лишних глаз...';
    pastedNode.insertAdjacentElement('beforeEnd', pastedNodeText);

    var pastedNodeCause = document.createElement('p');
    pastedNodeCause.textContent = 'Причина: ' + errorMessage;
    pastedNode.insertAdjacentElement('beforeEnd', pastedNodeCause);

    pastedNode.style.color = '#fff';
    pastedNode.style.fontStyle = 'italic';
    document.querySelector('.setup-similar-list').appendChild(pastedNode);
  };

  window.backend.load(onGetSuccessResponse, onGetFailedResponse);
})();
