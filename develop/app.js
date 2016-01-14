require('./app.css')

var vm = new Vue({
  el: '#example',
  data: {
	b : 2,
	a : 5
  },
  computed: {
    // 一个计算属性的 getter
    a: function () {
      // `this` 指向 vm 实例
      return this.b + 1
    }
  }
})

// var gui = requireNodePack('nw.gui');
// var win = gui.Window.get();


// var $capture = $("#capture");


// $capture.click(function(){
// 	// win.width = 1500;
// })
 