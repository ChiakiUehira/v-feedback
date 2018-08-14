'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var feedback = {};

feedback.id = null;

feedback.ENTER_CLASS = 'is-enter';
feedback.LEAVE_CLASS = 'is-leave';

feedback.isTouch = typeof document.ontouchstart !== 'undefined';

feedback.EVENT = {};
feedback.EVENT.enter = feedback.isTouch ? 'touchstart' : 'mouseenter';
feedback.EVENT.leave = feedback.isTouch ? 'touchend' : 'mouseleave';

feedback.EVENT_HANDLER = {};
feedback.EVENT_HANDLER.enter = function (el) {
  return function () {
    clearTimeout(feedback.id);
    el.classList.remove(feedback.LEAVE_CLASS);
    el.classList.add(feedback.ENTER_CLASS);
  };
};
feedback.EVENT_HANDLER.leave = function (el) {
  return function () {
    el.classList.remove(feedback.ENTER_CLASS);
    el.classList.add(feedback.LEAVE_CLASS);
    feedback.id = setTimeout(function () {
      el.classList.remove(feedback.LEAVE_CLASS);
    }, 1000);
  };
};

feedback.install = function (Vue) {
  Vue.directive('feedback', {
    bind: function bind(el) {
      el.addEventListener(feedback.EVENT.enter, feedback.EVENT_HANDLER.enter(el), false);
      el.addEventListener(feedback.EVENT.leave, feedback.EVENT_HANDLER.leave(el), false);
    },
    unbind: function unbind(el) {
      el.removeEventListener(feedback.EVENT.enter, feedback.EVENT_HANDLER.enter(el), false);
      el.removeEventListener(feedback.EVENT.leave, feedback.EVENT_HANDLER.leave(el), false);
    }
  });
};

exports.default = feedback;
