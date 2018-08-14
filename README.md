# v-feedback
> Event driven feedback plugin for Vue.js

## What
If the element which you selected detects "mouseenter" or "touchstart", it will be added '.is-enter' class.
Also, if the element detects "mouseleave" or "touchend",  it will be added '.is-leave' class.

## Install
```
npm install @pixelgram/v-feedback -S
```

## Quick Start
```js
import Vue from 'vue'
import Feedback from 'v-feedback'

Vue.use(Feedback)
```

## Usage
```html
<button v-feedback>Button</button>
```
detects "mouseenter" or "touchstart", it will be added '.is-enter' class.

Also, detects "mouseleave" or "touchend",  it will be added '.is-leave' class.

## License
[MIT](http://opensource.org/licenses/MIT) © 2016 [c.uehira](https://github.com/in-the-box).