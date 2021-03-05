app.component('details-display',{
    props:{
      details:{
        type: Array,
        requierd: true,
      }
    },
    template:
    /*html*/
    `<ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        `
  })