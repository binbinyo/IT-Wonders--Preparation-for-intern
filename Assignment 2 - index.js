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


