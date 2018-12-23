import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

// import router from '@/router'
describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  // const vm = new Constructor({router}).$mount()
  const vm = new Constructor().$mount()
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello-bem h1').textContent)
      .to.equal('Welcome to 海口')
  })
  it('测试按钮点击', () => {
    let buttonElms = vm.$el.querySelectorAll('.hello-bem__btn')
    // expect(vm.$el.querySelector('button')[0].textContent)
    //   .to.equal('加1 +1')

    buttonElms[0].click()

    buttonElms[1].click()
  })
})
