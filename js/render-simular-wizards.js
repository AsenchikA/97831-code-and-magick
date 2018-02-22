'use strict';

(function () {

  var QUANTITY_WIZARD = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarList = document.querySelector('.setup-similar-list');

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.setupWizard.getCoatColor()) {
      rank += 2;
    }
    if (wizard.colorEyes === window.setupWizard.getEyesColor()) {
      rank += 1;
    }
    return rank;
  };

  var namesCorparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.updateWizards = function () {
    var renderWizards = window.downloadedWizards.slice();
    renderWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesCorparator(left.name, right.name);
      }
      return rankDiff;
    });

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < QUANTITY_WIZARD; i++) {
      var wizardItem = similarWizardTemplate.cloneNode(true);
      wizardItem.querySelector('.setup-similar-label').textContent = renderWizards[i].name;
      wizardItem.querySelector('.wizard-coat').style.fill = renderWizards[i].colorCoat;
      wizardItem.querySelector('.wizard-eyes').style.fill = renderWizards[i].colorEyes;
      fragment.appendChild(wizardItem);
    }

    if (similarList.childNodes !== []) {
      similarList.textContent = '';
    }
    similarList.appendChild(fragment);
  };

})();
