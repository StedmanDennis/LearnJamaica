

Vue.component('clarendon',{
	template: 	`
					<path v-on:click='sendParish'
					d="M532.2 164.1l12.9 33 1.8 8.5-1.7 3.5-1.3 4.5-1 6.9 0.5 4.1 5.1 7.7 2.6 4.7 1.7 5.6 0.1 16.8 0.4 3.6 0.5 2.8 1.1 2.5 8.9 11.8 1.2 4.1-0.2 1.6 2.2 22.9-3.3 1.9-7.5 15-1.7 4.4 3.4 13.3-3.3 1.3-5.8 3.6-3.3 1.4 1.2 2.5 0.7 4.9 1.2 3-4.9-2.2-4.9-0.3-4.8 1.7-4.4 3.7 8 5 8.5 1.9 8.9-0.8 9.2-2.8 4.6 18.1-1.4 8.2-11.2 3.5-9.5-0.5-8.5-1.9-8.4-4.1-39.6-35.5-8.3-10.4-33.6-19.6 2.2-1.9 1.4-0.4 4 0.5 2.6-0.3 1.7-1.6 0.5-1.2 1-5.9 2.7-8.9 0.2-1.5-0.5-1.6-1-1.7-5.2-4.6-2.1-2.8-1.6-5-1-6.5-0.3-3.2 0.2-2.3 1.3-3.8 0.6-2.7-49.7-102.1-1.1-7.2 10.8 3.6 11.6 2 4.1-0.5 3.3-1.3 1.7-1 3.2-2.5 1.1-0.6 15.4-3.5 4.3 0.4 8.8 3.6 22.3 4.1 41.4 0.5z" id="JAM1370" name="Clarendon">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Clarendon'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('hanover',{
	template: 	`
					<path v-on:click='sendParish'
					d="M171.9 38.8l0 4.5-0.3 1.5-3 10.8 0.8 1.7 1.6 1.9 7.4 6.2 1.9 3.6 0.7 3.5 1.3 3 5.1 9.6 2.3 5.2 2.6 2.2 6.4 3.3 2.2 2.2 1.2 1.5 5.8 11.7-38.3-2.2-10-1.9-25.1-14.6-4-1.1-4.2-0.6-56.7 0.3-2.6 0.6-17.1 20.3-2.3 1.8-2.3 0.5-2.5 0-24.6-3.6-4.1-0.4 0.7-3.5-0.6-14.5 0.8-4.1 3.5-5.7 0.4-3.7 1.6-1.9 7.1-0.5 4.5-3 3.6-5.6 4.7-3.8 7.6 2.5 4.7-13.6 14-13 16.3-5.4 11.7 9 6.8-8 7.3-0.2 8.4 3.2 10.4 2 29.5-3.6 9.9 0 4.9 1.9z" id="JAM1371" name="Hanover">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Hanover'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('manchester',{
	template: 	`
					<path v-on:click='sendParish'
					d="M404.2 159.3l1.1 7.2 49.7 102.1-0.6 2.7-1.3 3.8-0.2 2.3 0.3 3.2 1 6.5 1.6 5 2.1 2.8 5.2 4.6 1 1.7 0.5 1.6-0.2 1.5-2.7 8.9-1 5.9-0.5 1.2-1.7 1.6-2.6 0.3-4-0.5-1.4 0.4-2.2 1.9-0.5-0.3-10-3.7-10.7-1.5-8.4 3.5-9.7 6.6-9.6 0.8-20-5.7-8.7-1.5-1.1-2.2-31.1-129.5-2.3-43.1 5.8-1.4 2.8-1.1 5.1-3.1 3.3-1.5 2.6-0.7 2.6 0 17.5 2.7 1.4-0.1 6.5 2.9 20.4 14.2z" id="JAM1372" name="Manchester">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Manchester'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('saintElizabeth',{
	template: 	`
					<path v-on:click='sendParish'
					d="M336.2 147.4l2.3 43.1 31.1 129.5 1.1 2.2-10.8-1.9-61.9 3.6-3.1-0.6-9.5-6.5-16.1-8-4-3.2-2-3.6-4.7-12.3-1-3.9-1.7-3-8.2-3-2.5-2-0.7-10.1 0.8-12.1-2.8-10.2-11.6-4.3-31.7-0.3-7.3-2.7-3.8-8.8 3.2-6.2 9-26 1.1-7.2-1.1-3.6 0-2.8 0.8-3 2.9-6.1 5-8 3.6-3.4 6.9-3.4 52.3-18.7 64.4 6.5z" id="JAM1373" name="Saint Elizabeth">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Saint Elizabeth'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('saintJames',{
	template: 	`
					<path v-on:click='sendParish'
					d="M292.7 9.9l-0.2 0.8-20.7 130.2-52.3 18.7 4.4-12.7 0.2-4.6-3.7-11.6-1.3-2.4-1.5-1.8-2.1-1.3-2.6-3.2-5-10.8-5.8-11.7-1.2-1.5-2.2-2.2-6.4-3.3-2.6-2.2-2.3-5.2-5.1-9.6-1.3-3-0.7-3.5-1.9-3.6-7.4-6.2-1.6-1.9-0.8-1.7 3-10.8 0.3-1.5 0-4.5 3.6 1.3 5 1.2 5.2-0.8 4.6-3.3 0.5-3.1-0.2-3.7 2.9-5 10.3-13.3 4.7-4.4 8.1-3.7 18.4-3 20.9 0.8 36.8 8.1z" id="JAM1374" name="Saint James">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Saint James'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('trelawny',{
	template: 	`
					<path v-on:click='sendParish'
					d="M416 24.6l-1.1 10.6 0.3 3.9 5.3 13.7 0.3 3.4-0.3 2.8-1.2 3.1 0 1.7 0.6 1.3 2.4 3.1 0 4.5-18.1 86.6-20.4-14.2-6.5-2.9-1.4 0.1-17.5-2.7-2.6 0-2.6 0.7-3.3 1.5-5.1 3.1-2.8 1.1-5.8 1.4-64.4-6.5 20.7-130.2 0.2-0.8 32.4 7.1 44.4 0.8 19.6 4.8 26.9 2z" id="JAM1375" name="Trelawny">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Trelawny'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('westmoreland',{
	template: 	`
					<path v-on:click='sendParish'
					d="M207.9 111.2l5 10.8 2.6 3.2 2.1 1.3 1.5 1.8 1.3 2.4 3.7 11.6-0.2 4.6-4.4 12.7-6.9 3.4-3.6 3.4-5 8-2.9 6.1-0.8 3 0 2.8 1.1 3.6-1.1 7.2-9 26-3.2 6.2-7-16.3-3.6-5.2-3.9-2.8-4.5-2.3-3.7-0.9-2.8-2.6-2.2-5.8-2.8-11.4-8.6-17.4-11.3-6.4-33.6 0.9-20.5-3.5-7.5-0.1-4.3 3.9-3.5 2-3.1-0.7-11.3-4.5-1.1-0.7-6.4-1-14-4.6-7.9-1-8-2-7.8-5.2-5.7-7.4-2-8.4 2.5-4 6.8-4.8 3.2-4 0.6-2.8 4.1 0.4 24.6 3.6 2.5 0 2.3-0.5 2.3-1.8 17.1-20.3 2.6-0.6 56.7-0.3 4.2 0.6 4 1.1 25.1 14.6 10 1.9 38.3 2.2z" id="JAM1376" name="Westmoreland">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Westmoreland'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('kingston',{
	template: 	`
					<path v-on:click='sendParish'
					d="M753 275.8l-3.4-3.3-5.9-1.4-13.8-0.2-9.4 0.2-6.5-3.9 1.5-4.4 0.8-1.8 3.5-2.3 4.6-1.9 3.8-1 11.8-0.6 6.8 1.6 4.5 2.4 3.8 8.9 0.4 6.2-2.5 1.5z" id="JAM1377" name="Kingston">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Kingston'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('portland',{
	template: 	`
					<path v-on:click='sendParish'
					d="M967.6 255.3l-13 4.1-4.8 0.5-16.6-2.2-6.2-1.6-3.1-2.8-3-4.4-1.6-1.6-2.4-1-13.5-4-14.9-2.4-10.1-5.8-2.2-0.6-1.9-0.1-2.3 1-3.1 1.7-3.9 0.7-6.4 0.1-1.9 0.2-2 1.3-2 2-1.8 1.1-3.7 1.4-3.8 0-3.2-1.8-21.7-6.9-3.4-1.6-3-2.1-1.8-1.7-3.5-4.7-8.5-5.9-20.6-8.6-6-0.9-1.5 1.8-2 3.8-2.2 0.9-4.5 0.9-6-1.3-2.9-0.9-1.7-1-2-2.9-4.1-12.1-0.1-1.2-2.9-9.7 21.5-60.1 1.4-1.6 2.6 0.6 6.7 3.6 8.7 8.8 6.7 4.4 7.7 2.4 15.2-1 7.9 5.7 2.5 0.6 2.3 2.2 2.8 2 3.8 0.9 34.2 0 2.4 1.4 3.6 6.9 1.7 2.1 33.6 6.4 17.4 6.3 2.3 10 12.9 12.5 10.1 14.4 14.6 32.1 3.2 7.7z" id="JAM1378" name="Portland">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Portland'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('saintAnn',{
	template: 	`
					<path v-on:click='sendParish'
					d="M596.3 54.8l0.4 2.2 3.9 17.6 0.3 2.5 0.9 3.4 0.9 1.7 2.4 2.4 1.3 1.7 0.8 1.8-1 10.8 0.2 1.5 0.9 1.7 5.7 6.8 1.9 3 1.4 4.5 0.7 4.1 1.3 3.9 3 4 8.7 8.9-27.4 15.5-9.2 3.6-61.2 7.7-41.4-0.5-22.3-4.1-8.8-3.6-4.3-0.4-15.4 3.5-1.1 0.6-3.2 2.5-1.7 1-3.3 1.3-4.1 0.5-11.6-2-10.8-3.6 18.1-86.6 0-4.5-2.4-3.1-0.6-1.3 0-1.7 1.2-3.1 0.3-2.8-0.3-3.4-5.3-13.7-0.3-3.9 1.1-10.6 4.7 0.4 12 2.9 9.4 5.7 14.4-3.7 23.4 0 24.1 2.8 16.5 4.2 2.1 2.2 1.7 5.9 2.2 2.1 2.7 0 2.4-1.2 1.5-1.5-0.4-0.9 20.4 3.6 2.5 1.5 7.7 6.8 2.4 1.5 14.9 0.6 15.7-2.7z" id="JAM1379" name="Saint Ann">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Saint Ann'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('saintCatherine',{
	template: 	`
					<path v-on:click='sendParish'
					d="M686.4 182.3l-1 12.6 0.9 4.9 3 6.3 0.5 2.4-0.1 1.8-1.6 3.5-1.3 1.9-1.8 1.5-1.4 2.5-1.6 4.1-2.7 9.7-0.6 4.1 0.1 2.8 3.3 2.9 0.8 1.3 0.9 2.2 1.4 1.7 1.1 0.5 2.4-0.3 3.6-1.3 3.1 4.3 1.5 5.6-1.4 4.9-2.2 5.1-5.7 6.4-1.7 3.7-6-0.7-1.8 3.5-1.8 11-8.1 29-6.1 8.6-7.3 4.7-6 0-4-1.8-3.7-2.5-5-2-25.2 0 0-3.5 9.6-3.3-4.9-4.3-6.1-8.4-4.8-3.7-5.6-2.2-13.2-1.4-11.9 4.2-7 4.1-2.2-22.9 0.2-1.6-1.2-4.1-8.9-11.8-1.1-2.5-0.5-2.8-0.4-3.6-0.1-16.8-1.7-5.6-2.6-4.7-5.1-7.7-0.5-4.1 1-6.9 1.3-4.5 1.7-3.5-1.8-8.5-12.9-33 61.2-7.7 9.2-3.6 27.4-15.5 7-2.1 2.8-0.4 8.7 1 1.5 1.1 1.4 1.7 2.7 6.6 1.6 2.1 3.6 2.7 1.9 2.1 1.8 3.7 1 3.9 0.5 4.1 1 2.1 5.3 7.3 4.9 4.7 10.7 4.4z" id="JAM1380" name="Saint Catherine">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Saint Catherine'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('saintMary',{
	template: 	`
					<path v-on:click='sendParish'
					d="M764.7 125.3l-1.4 1.6-21.5 60.1-25.3-12.1-7.6-1.5-2.7 0.5-5.8 0.1-2.8 0.4-1.7 0.8-1.1 2.4-2.2 2.2-6.2 2.5-10.7-4.4-4.9-4.7-5.3-7.3-1-2.1-0.5-4.1-1-3.9-1.8-3.7-1.9-2.1-3.6-2.7-1.6-2.1-2.7-6.6-1.4-1.7-1.5-1.1-8.7-1-2.8 0.4-7 2.1-8.7-8.9-3-4-1.3-3.9-0.7-4.1-1.4-4.5-1.9-3-5.7-6.8-0.9-1.7-0.2-1.5 1-10.8-0.8-1.8-1.3-1.7-2.4-2.4-0.9-1.7-0.9-3.4-0.3-2.5-3.9-17.6-0.4-2.2 8.4-1.4 5.4 1.4 9.6 4.5 5.4 0.9 27-1.1 5.2-2.8 7.5-0.9 6 0.4 5.6 1 3.2 4.2-1.4 5.1 0 6.5 5.1 4.6 16.2 10.3 14.4 8.4 2.3 4.7 4.2 12.6 2.7 4.2 4.4 2.6 8.3 2.3 23.6 1.9 5.3 1.1z" id="JAM1381" name="Saint Mary">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Saint Mary'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('saintAndrew',{
	template: 	`
					<path v-on:click='sendParish'
					d="M741.8 187l2.9 9.7 0.1 1.2 4.1 12.1 2 2.9 1.7 1 2.9 0.9 6 1.3 4.5-0.9 2.2-0.9 2-3.8 1.5-1.8 6 0.9 20.6 8.6-4.2 3.9-0.8 3-0.6 3.9-0.2 7.3 0.6 2.9 1.1 2.7 1.2 2.2 2.6 9 0.8 1.6 3.3 4.7 1.4 2.7 0 1.6-0.7 1-1.2 0.2-4.6-0.4-1.8 0.4-1.8 0.8-2 3.1-0.5 2.8 0.3 4.4-0.7 3.7-2.9 3.3-2.7 4.3-12.7-3-3.4-1.9-7-2.9-9.5 0.6-16.5 3.9-7 0.9-23.9-0.9 0-3.3 50.2-2.9-2.1-2 2.5-1.5-0.4-6.2-3.8-8.9-4.5-2.4-6.8-1.6-11.8 0.6-3.8 1-4.6 1.9-3.5 2.3-0.8 1.8-1.5 4.4-3-1.8-8.1-5.3-6-2.8-1.5-5.6-3.1-4.3-3.6 1.3-2.4 0.3-1.1-0.5-1.4-1.7-0.9-2.2-0.8-1.3-3.3-2.9-0.1-2.8 0.6-4.1 2.7-9.7 1.6-4.1 1.4-2.5 1.8-1.5 1.3-1.9 1.6-3.5 0.1-1.8-0.5-2.4-3-6.3-0.9-4.9 1-12.6 6.2-2.5 2.2-2.2 1.1-2.4 1.7-0.8 2.8-0.4 5.8-0.1 2.7-0.5 7.6 1.5 25.3 12.1z" id="JAM1382" name="Saint Andrew">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Saint Andrew'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('saintThomas',{
	template: 	`
					<path v-on:click='sendParish'
					d="M967.6 255.3l3.7 8.9 6.7 11.5 8.6 9.1 12.4 9.4-4.8 3.8-23.5 6-16.7 9.2-9.5 2.7-8.1-2.1 3.2-2.3 1.2-1.6 1.8-5.9-8.2 3-7.3 11-8 2.4-7.1-2-8.2-3.9-8.4-2.1-13.7 5.1-35.9 3.2-25.3-3.9-3.6 0.1-3.5 0.7-3.7-0.5-4.7-3.3-2.1-4.3-0.9-5.6-1.4-4.7-3.6-2.1-3.7-1.1-2.4-2.7-2.1-3.2-2.8-2.5-1.1-0.3 2.7-4.3 2.9-3.3 0.7-3.7-0.3-4.4 0.5-2.8 2-3.1 1.8-0.8 1.8-0.4 4.6 0.4 1.2-0.2 0.7-1 0-1.6-1.4-2.7-3.3-4.7-0.8-1.6-2.6-9-1.2-2.2-1.1-2.7-0.6-2.9 0.2-7.3 0.6-3.9 0.8-3 4.2-3.9 8.5 5.9 3.5 4.7 1.8 1.7 3 2.1 3.4 1.6 21.7 6.9 3.2 1.8 3.8 0 3.7-1.4 1.8-1.1 2-2 2-1.3 1.9-0.2 6.4-0.1 3.9-0.7 3.1-1.7 2.3-1 1.9 0.1 2.2 0.6 10.1 5.8 14.9 2.4 13.5 4 2.4 1 1.6 1.6 3 4.4 3.1 2.8 6.2 1.6 16.6 2.2 4.8-0.5 13-4.1z" id="JAM1383" name="Saint Thomas">
 					</path>
				`,
	data: function(){
		return{
			parish: 'Saint Thomas'
		}
	},
	methods: {
		sendParish: function(){
			eventBus.$emit('clickedParish', this.parish);
		}
	}
})

Vue.component('jamaica',{
	template: 	`
					<svg baseprofile="tiny" fill="#7c7c7c" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.2" viewBox="0 0 1000 397" xmlns="http://www.w3.org/2000/svg">
						<hanover></hanover>
						<saintJames></saintJames>
						<trelawny></trelawny>
						<saintAnn></saintAnn>
						<saintMary></saintMary>
						<portland></portland>
						<westmoreland></westmoreland>
						<saintElizabeth></saintElizabeth>
						<manchester></manchester>
						<clarendon></clarendon>
						<saintCatherine></saintCatherine>
						<saintAndrew></saintAndrew>
						<kingston></kingston>
						<saintThomas></saintThomas>
					</svg>
				`,
	methods: {

	}
})



Vue.component('game-nameParishes',{
	props: ['parishes'],
	template: 	`
					<div class='quiz'>
						<div v-if='this.unanswered.length > 0' class='question'>Where is the Parish of {{this.giveRandomQuestion()}}?</div>
						<div class='question-tracker'>
								<div v-if='this.unanswered.length > 0'>Question: {{15 - this.unanswered.length}} / 14</div>
								<div v-else>Completed Quiz</div>
							<div class='scores'>
								<div class='correct-score'>Correct: {{this.correct.length}}</div>
								<div class='incorrect-score'>Incorrect: {{this.incorrect.length}}</div>
							</div>
							<div class='results'>
								<div class='correct-list'>
									<transition-group name='slide-fade'>
									<div class='correct-parish' v-for='correct in correct' v-bind:key='correct'>{{correct}}</div>
									</transition-group>
								</div>
								<div class='incorrect-list'>
									<transition-group name='slide-fade'>
									<div class='incorrect-parish' v-for='incorrect in incorrect' v-bind:key='incorrect'>{{incorrect}}</div>
									</transition-group>
								</div>
							</div>
						</div>
						<div class='after-complete' v-if='this.unanswered.length == 0'>
							<div v-on:click='initiate'>Restart</div>
						</div>
					</div>
				`,
	data: function(){
		return{
			unanswered: [],
			correct: [],
			incorrect: [],
			currentQuestion: null
		}
	},
	methods: {
		initiate: function(){
			this.unanswered = Array.from(this.parishes);
			this.correct = [];
			this.incorrect = [];
			this.currentQuestion = null;
		},
		giveRandomQuestion: function(){
			var question = this.$parent.generateRandomBetween(0,this.unanswered.length);
			this.currentQuestion = this.unanswered[question];
			return this.unanswered[question];
		},
		checkParish: function(clickedParish){
			if (this.unanswered.length > 0){
				if (this.currentQuestion == clickedParish){
					this.correct.push(this.currentQuestion); //denotes that the corrent parish was chosen
				}else{
					this.incorrect.push(this.currentQuestion); //denotes the an incoorect parish was chosen
				}
				this.unanswered.splice(this.unanswered.indexOf(this.currentQuestion),1); //removes the asked parish from the list of unanswered questions
				this.giveRandomQuestion(); //gives another question
			}
		},
		/*
		onClickedParish: function(){
			eventBus.$on('clickedParish', this.checkParish(click));
		}
		*/
	},
	created: function(){
		this.initiate();
		//https://medium.com/@andrejsabrickis/https-medium-com-andrejsabrickis-create-simple-eventbus-to-communicate-between-vue-js-components-cdc11cd59860
		//https://medium.com/patrickleenyc/vue-js-simple-event-bus-for-cross-component-communication-85dd8f0fc750
		//https://alligator.io/vuejs/global-event-bus/
		//https://medium.com/vuejobs/create-a-global-event-bus-in-vue-js-838a5d9ab03a
		eventBus.$on('clickedParish', clicked => this.checkParish(clicked));
	},
	beforeDestroy: function(){
		eventBus.$off('clickedParish');
	}
})

const eventBus = new Vue({}) //global event bus

new Vue({
	el: 		'#vue-app',
	template: 	`
					<div class='main-container'>
						<jamaica></jamaica>
						<game-nameParishes v-bind:parishes='parishes'></game-nameParishes>
					</div>
				`,
	data: {
		parishes: ['Hanover','Saint James','Trelawny','Saint Ann','Saint Mary','Portland','Westmoreland','Saint Elizabeth','Manchester','Clarendon','Saint Catherine','Saint Andrew','Kingston','Saint Thomas']
	},
	methods: {
		generateRandomBetween: function(min, max){
			return Math.floor(Math.random() * (max - min))
		}
	}
})
