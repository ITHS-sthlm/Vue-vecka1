/* Vue.createApp */
/* Exempel syntax mned bara en "applikation på webbsidan" */
/*
Vue.createApp({
    data: function () {
      return { message: 'Hello World!' }
    }
  }).mount('#app')
*/

/* Steg 1 */

const app = Vue.createApp({
    data() {
        return {
            /* message är en variabel i vue, kan kallas vadsomhelst */
            message: 'Vue lektion!!'
        };
    }
});

app.mount('#app');

/* Steg 2 */
const template = Vue.createApp({
    template: '<h1>Detta är ett template i VUE</h1>'
});

template.mount('#template');

const random = Vue.createApp({
    data() {
        return {
            messageA: 'Hej vi har otroligt kul!',
            messageB: 'Vi älskar vue!!',
            vueLink: 'https://iths.se'
        };
    },
    methods: {
        outputMessage() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.messageA;
            } else {
                return this.messageB;
            }
        },
        refresh() {
            window.location.reload();
        }
    }
});

random.mount('#random');

const numberBind = Vue.createApp({
    data() {
        return {
            number: 42
        };
    }
});

numberBind.mount('#numberBind');

const styleBind = Vue.createApp({
    data() {
        return {
            name: 'Richard'
        };
    }
});

styleBind.mount('#styleBind');
