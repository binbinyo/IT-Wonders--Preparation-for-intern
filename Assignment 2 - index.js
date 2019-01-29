new Vue({
  el: "#ep1",
  data: () => ({
    message: 'This is Episode 1'
  })

});

new Vue({
  
  el: "#ep3",
  
  data: () => ({ 
    newName:'',  
    names: ['Ken', 'Cassandra', 'Steve'],
    title:'You can only add once',
    isToggled: false,
    active: false
  }),
  
  methods:{
    addName(){  
      this.names.push(this.newName);
      this.newName='';
      this.isToggled = true;
      this.active = true;
    },
    
  }
});

new Vue({
    el: '#ep6',

    data: {
        tasks: [{
            description: 'Assignment 1',
            isComplete: false
        }, {
            description: 'Assignment 2',
            isComplete: false
        }, {
            description: 'Report on first day',
            isComplete: false
        }, {
            description: 'Do House Chores',
            isComplete: false
        }]
    },

    computed: {
        incompleteTasks() {
                return this.tasks.filter(task => !task.isComplete)
        },
        completeTasks() {
            return this.tasks.filter(task => task.isComplete)
        }
    }
})


