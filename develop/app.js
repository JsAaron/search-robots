require('./app.css')

Vue.config.debug = true



var fetchData = [{
    title: "习近平纪委全会讲话哪些热词值得关注   从严治党"
}, {
    title: "习近平纪委全会讲话哪些热词值得关注   从严治党"
}, {
    title: "习近平纪委全会讲话哪些热词值得关注   从严治党"
}, {
    title: "习近平纪委全会讲话哪些热词值得关注   从严治党"
}, {
    title: "习近平纪委全会讲话哪些热词值得关注   从严治党"
}, {
    title: "习近平纪委全会讲话哪些热词值得关注   从严治党"
}]



var vm = new Vue({
    el: '#app-container',
    data: {
        newUser: {
            url: '',
            keyword: '',
            formNumber: '',
            toNumber: '',
            formletter: '',
            toletter: ''
        },
        options: {
            url: '',
            title: '',
            content: '',
            downloadUrl: '',
            preview: '',
            all: ''
        },
        commits: ''
    },

    //计算属性
    computed: {
        //关键字
        validation: function() {
            var value = this.newUser.keyword;
            return {
                'keywordsuccess': !!value,
                'keyworderror': !value
            }
        }
    },

    methods: {
        // 一个计算属性的 getter
        commit: function() {
            // `this` 指向 vm 实例
            this.commits = fetchData;
        },
        optionAll: function() {
            var setValue = function(value) {
                this.options.url         = value;
                this.options.title       = value;
                this.options.content     = value;
                this.options.downloadUrl = value;
                this.options.preview     = value;
            }
            if (this.options.all) {
                setValue.call(this, false)
            } else {
                setValue.call(this, true)
            }
        }

    }
})

// var gui = requireNodePack('nw.gui');
// var win = gui.Window.get();


// var $capture = $("#capture");


// $capture.click(function(){
//  // win.width = 1500;
// })
