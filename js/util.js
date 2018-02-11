'use strict';

(function () {
  window.ENTER_KEYCODE = 13;
  window.ESC_KEYCODE = 27;

  window.util = (function () {

    return {
      isEscEvent: function (evt, action) {
        if (evt.keyCode === window.ESC_KEYCODE) {
          action();
        }
      },
      isEnterEvent: function (evt, action) {
        if (evt.keyCode === window.ENTER_KEYCODE) {
          action();
        }
      }
    };
  })();

})();
