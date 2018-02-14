'use strict';

(function () {

  var setup = document.querySelector('.setup');

  var onSuccessSubmitForm = function () {
    setup.classList.add('hidden');
  };

  var onFailedSubmitForm = function (errorMessage) {
    var notificationNode = document.createElement('div');

    notificationNode.style = 'z-index: 100; text-align: center; background-color: #fff7f8; color: #e60a2c; padding: 20px; border: 1px solid #e60a2c; border-radius: 3px;';
    notificationNode.style.position = 'absolute';
    notificationNode.style.top = 'calc(50% - 50px)';
    notificationNode.style.left = 'calc(50% - 250px)';
    notificationNode.style.width = '500px';
    notificationNode.style.height = '100px';
    notificationNode.style.fontSize = '20px';

    var notificationText = document.createElement('div');

    notificationText.textContent = 'Что-то пошло не так :( ' + errorMessage + ' Попробуйте позже';
    notificationText.style = 'margin-bottom: 20px;';

    var notificationCloseBtn = document.createElement('div');

    notificationCloseBtn.textContent = 'Окей';
    notificationCloseBtn.style = 'display: inline-block; text-align: center; background-color: #e60a2c; color: #fff; padding: 10px; border-radius: 3px; cursor: pointer;';
    notificationCloseBtn.style.width = '100px';

    document.body.insertAdjacentElement('afterbegin', notificationNode);
    notificationNode.appendChild(notificationText);
    notificationNode.appendChild(notificationCloseBtn);

    var onCloseNotification = function () {
      document.body.removeChild(notificationNode);
      notificationCloseBtn.removeEventListener('click', onCloseNotification);
    };

    notificationCloseBtn.addEventListener('click', onCloseNotification);
  };

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSuccessSubmitForm, onFailedSubmitForm);
    evt.preventDefault();
  });
})();
