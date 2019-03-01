Vue.component('cupon', {
	template: '<input placeholder="Enter yout cupon code" v-on:blur="onCuponApplied">',

	methods: {
		onCuponApplied() {
			this.$emit('applied')
		}
	}
});

new Vue({
	el: '#root',

	data: {
		cuponApplied: false
	},

	methods: {
		onCuponApplied() {
			this.cuponApplied = true
		}
	}
});
