## 一、Runtimecompiler和runtimeonly的区别

1. Vue加载过程:
    `template -> ast -> render -> virtual dom -> ui`
    即先将template模板解析为抽象语法树(abstract syntax tree),再将抽象语法树编译为render函数,再将render函数解析为虚拟Dom最后在渲染为UI界面展示
2. Runtimecompiler是按照标准解析流程执行,而runtimeonly则直接跳过了前面两步,在main.js中直接使用render函数开始执行;
3. 结论： 
    > 1. 由于解析步骤更精简,所以runtimeonly执行效率要高于runtimecompiler 
    > 2. 由于不需要解析template模板,所以runtimeonly代码量小


## 二、main.js分析:
```
import Vue from 'vue'
    import App from './App'
    
    Vue.config.productionTip = false
    
    new Vue({
      el: '#app',
      //render: h => h(App)  //等价于下面代码
      render: function (h) {
          return h(App)
        }
    })
```
> 这里先将箭头函数转换为普通函数方便阅读
    
1. render函数参数接收一个函数h并返回该函数调用结果
2. 实际上h函数名为 `createElement()` 
3. createElement函数用法:
    > 1. 普通用法: createElement('标签',{标签属性},['标签内容'])
        createElement('h2',{class: 'box'},['Hello World']);
    > 2. 传入组件对象:
        createElement(App)   
