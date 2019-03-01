window.Event = new Vue();

Vue.component('cupon', {
	template: '<input placeholder="Enter yout cupon code" v-on:blur="onCuponApplied">',

	methods: {
		onCuponApplied() {
			Event.$emit('applied');
		}
	}
});

new Vue({
	el: '#root',

	data: {
		cuponApplied: false
	},

	created() {
		Event.$on('applied', () => alert('Handling'))
	}
});
