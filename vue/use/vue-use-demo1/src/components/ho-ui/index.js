//一个个引入控件，注意结尾要有后缀，否则会被认为是引入.js文件
import HoButton from './ho-button.vue';
import HoInput from './ho-input.vue';
const components = [HoButton, HoInput]
const HoUI = {
  install(VUE) {
    if(this.install.installed) return;
    this.install.installed = true;
    console.log('HoUI installed');
    components.forEach(component =>{
      console.log('component', component, component.name);
      VUE.component(component.name, component);
    })
    
  }
}
export default HoUI;