Vue.component("messages", {
  props: ["title", "body"],

  data() {
    return {
      isVisible: true
    };
  },

  template: `
<article class="message" v-show="isVisible">

<div class="message-header">

{{title}}

<button type="button" @click="hideModal" class="delete" aria-label="delete"></button>
</div>
<div class="message-body">
{{body}}
</div>
</article>`,

  methods: {
    hideModal() {
      this.isVisible = false;
    }
  }
});

Vue.component("modal", {
  template: `
<div class="modal is-active">
<div class="modal-background"></div>
<div class="modal-content">
<div class="box">
<p>This is episode 10</p>
</div>
</div>
<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
</div>`
});

new Vue({
  el: "#ep9",
  data: {}
});

Vue.component("tabs", {
  template: `
<div>
<div class="tabs">
<ul>
<li v-for="tab in tabs" :class="{ 'is-active': tab.isActive}">
<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
</li>
</ul>
</div>

<div class="tabs-details">
<slot></slot>
</div>
</div>
`,

  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
});

Vue.component("tab", {
  template: `
<div v-show="isActive">
<slot></slot>
</div>
`,
  props: {
    name: { required: true },
    selected: { default: false }
  },

  data() {
    return {
      isActive: false
    };
  },

  mounted() {
    this.isActive = this.selected;
  }
});

new Vue({
  el: "#app",
  data: () => ({
    message: "This is Episode 1",
    newName: "",
    names: ["Ken", "Cassandra", "Steve"],
    title: "You can only add once",
    isToggled: false,
    active: false,
    tasks: [
      {
        description: "Assignment 1",
        isComplete: false
      },
      {
        description: "Assignment 2",
        isComplete: false
      },
      {
        description: "Report on first day",
        isComplete: false
      },
      {
        description: "Do House Chores",
        isComplete: false
      }
    ],
    showModal: false
  }),

  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = "";
      this.isToggled = true;
      this.active = true;
    }
  },

  computed: {
    incompleteTasks() {
      return this.tasks.filter(task => !task.isComplete);
    },
    completeTasks() {
      return this.tasks.filter(task => task.isComplete);
    }
  }
});
