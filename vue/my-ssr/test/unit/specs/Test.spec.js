import Vue from 'vue'
import Test from '@/components/test/Test.vue'
import router from '@/router'
describe('Test.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Test)
    const vm = new Constructor({router}).$mount()
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.test h1').textContent)
        .to.equal('Test component')
    })
    // setTimeout(done => {
    //   expect(vm.$el.querySelector('.test h1').textContent)
    //     .to.equal('Test component')
    //   vm.$el.initTest()
    //   done()
    // }, 100)
  })
})
