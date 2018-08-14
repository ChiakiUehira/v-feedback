const feedback = {}

feedback.id = null

feedback.ENTER_CLASS = 'is-enter'
feedback.LEAVE_CLASS = 'is-leave'

feedback.isTouch = typeof document.ontouchstart !== 'undefined'

feedback.EVENT = {}
feedback.EVENT.enter = feedback.isTouch ? 'touchstart' : 'mouseenter'
feedback.EVENT.leave = feedback.isTouch ? 'touchend' : 'mouseleave'

feedback.EVENT_HANDLER = {}
feedback.EVENT_HANDLER.enter = (el) => {
  return () => {
    clearTimeout(feedback.id)
    el.classList.remove(feedback.LEAVE_CLASS)
    el.classList.add(feedback.ENTER_CLASS)
  }
}
feedback.EVENT_HANDLER.leave = (el) => {
  return () => {
    el.classList.remove(feedback.ENTER_CLASS)
    el.classList.add(feedback.LEAVE_CLASS)
    feedback.id = setTimeout(() => {
      el.classList.remove(feedback.LEAVE_CLASS)
    }, 1000)
  }
}

feedback.install = (Vue) => {
  Vue.directive('feedback', {
    bind(el) {
      el.addEventListener(feedback.EVENT.enter, feedback.EVENT_HANDLER.enter(el), false)
      el.addEventListener(feedback.EVENT.leave, feedback.EVENT_HANDLER.leave(el), false)
    },
    unbind(el) {
      el.removeEventListener(feedback.EVENT.enter, feedback.EVENT_HANDLER.enter(el), false)
      el.removeEventListener(feedback.EVENT.leave, feedback.EVENT_HANDLER.leave(el), false)
    }
  })
}

export default feedback