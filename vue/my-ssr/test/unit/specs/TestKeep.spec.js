import Vue from 'vue'
import TestKeep from '@/components/TestKeep.vue'
import router from '@/router'
describe('TestKeep.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TestKeep)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('测试Keepalive')
  })
})
