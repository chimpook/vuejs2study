import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  // HOOKS:
  // bind(el, binding, vnode) -> Once Directive is Attached
  // inserted(el, binding, vnode) -> Inserted in Parent Node
  // update(el, binding, vnode, oldVnode) -> Once Component is Updated (without Children)
  // componentUpdated(el, binding, vnode, oldVnode) -> Once Component is Updated (with Children)
  // unbind(el, bindingg, vnode) -> Once Directive is Removed

  bind(el, binding) {
    // el.style.backgroundColor = 'green'; // 1.
    // el.style.backgroundColor = binding.value; // 2.

    /*
    // 3.
    if (binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
    */
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);

  }

}); // v-highlight

new Vue({
  el: '#app',
  render: h => h(App)
})
