<template >
  <div id="app" tabindex="-1" @keyup="keyWords">
    <top-nav-bar></top-nav-bar>
    <h1 class="app-title">Calculator</h1>
    <calculator></calculator>

  </div>
</template>

<script>
import Calculator from './components/Calculator/Calculator.vue';
import NavBarVue from './components/NavBar/NavBar.vue';
import shortCut from './helpers/shortCut';
export default {
  name: 'App',
  data() {
      return {
          button:null
      }
  },
  components: {
      'calculator': Calculator,
      'top-nav-bar':NavBarVue
  },
  methods: {
    keyWords(e) {
        this.button = null;
        this.button = shortCut(e);
        if(this.button != undefined) {
            this.button.click();
            this.button.classList.add('buttonActive');
            setTimeout(() => {
                return this.button.classList.remove('buttonActive');
            }, 50)
        }
        
    },
  }
    

}
</script>

<style>
#app {
  align-items: center;
  flex-direction: column;
  min-height:100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--theme-foreground);
}
.app-title {
    margin-top:.5%;
    text-align: center;
    justify-self: center;
    font-size: 3rem;
}


.calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>