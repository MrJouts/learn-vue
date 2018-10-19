Vue.component('task-list', {
	template: `
	<div>
		<task v-for="task in tasks">{{ task.task }}</task>
	</div>
	`,
	data() {
		return {
			tasks: [
				{task: 'Sacar la basura', completed: true},
				{task: 'Pasear el perro', completed: true},
				{task: 'Buscar los auriculares', completed: false},
				{task: 'Hacer la tarea', completed: false},
				{task: 'Ir al curso de manejo', completed: true}
			]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
})

new Vue({
	el: '#root'
})