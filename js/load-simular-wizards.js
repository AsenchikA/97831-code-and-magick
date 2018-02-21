'use strict';

(function () {
  window.downloadedWizards = [];

  var onGetSuccessResponse = function (wizards) {
    window.downloadedWizards = wizards;
    window.updateWizards();
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
