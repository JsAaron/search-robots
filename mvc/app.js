
var STORAGE_KEY = 'todos-vuejs';

var todoStorage = {
	fetch: function () {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	},
	save: function (todos) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	}
}


var app = new Vue({
	el: '.todoapp',
	data:{
		newTodo:'',
		todos: todoStorage.fetch(),
		editedTodo:null
	},

	computed:{
		filteredTodos:function(){
			return this.todos;
		}
	},

	watch:{
		todos:{
			handler: function (todos,oldVal) {
				 todoStorage.save(todos);
			},
			deep: true
		}
	},

	methods:{
		addTodo:function(value){
			var value = this.newTodo && this.newTodo.trim();
			if (!value) {
				return;
			}
			this.todos.push({ title: value, completed: false });
			this.newTodo = '';
		},
		//双击编辑
		editTodo:function(todo){
			this.beforeEditCache = todo.title;
			this.editedTodo = todo;
		},

		removeTodo:function(todo){
			this.todos.$remove(todo)
		}
	}
})



