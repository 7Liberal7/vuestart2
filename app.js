Vue.createApp({
  // data() {
  //   return {

  //   }
  // }

  data: () => ({
    mtHTML: '<h1>Vue 3 App</h1>',
    title: 'Я есть Заголовок',
    person: {
      firstName: 'Andrey',
      lastName: 'Kaminnik',
      age: 15
    },
    items: [1, 2, 3, 4, 5, 6]
  }),

  methods: {
    addItem(event) {
      this.items.unshift(this.$refs.myInput.value)
      console.log(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      console.log(event.key)
    },
    remove(i) {
      this.items.splice(i, 1)
    },

    log(item) {
      console.log('Log item', item)
    }
  },

  // computed: {
  //   eventItems() {
  //     return this.items.filter(i => i % 2 === 0)
  //   }
  // },
}).mount('#app')