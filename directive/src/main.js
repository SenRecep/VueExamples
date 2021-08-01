import Vue from 'vue'
import App from './App.vue'

Vue.directive('color', {
  bind(el, binding, vnode) {

    const delay = binding.modifiers['delay'] ? 2000 : 0;

    const work = (color) => {
      if (binding.arg) {
        el.style[binding.arg] = color;
        return;
      }
      el.style.color = color;
    }
    const flashWork = (color) => {
      const firstColor = color;
      const secondColor = 'gray';
      let currentColor = firstColor;
      setInterval(() => {
        currentColor = currentColor == firstColor ? secondColor : firstColor;
        work(currentColor);
      }, 1000);
    };

    const currentWork = binding.modifiers['flash'] ? flashWork : work;

    setTimeout(() => currentWork(binding.value), delay);
  }
});


Vue.directive('custom-on', {
  bind(el, binding) {
    if (!binding.arg || !binding.value) return;
    el.addEventListener(binding.arg,binding.value);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
