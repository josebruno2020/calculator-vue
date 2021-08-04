<template >
  <div id="app" tabindex="-1" @keyup="keyWords">
    <h1 class="app-title">Calculator</h1>
    
    <calculator></calculator>
  </div>
</template>

<script>
import Calculator from './components/Calculator/Calculator.vue';
export default {
  name: 'App',
  
  components: {
      'calculator': Calculator
  },
  methods: {
    keyWords(e) {
        console.log(e.keyCode)
        switch(e.keyCode) {
            //Botoes;
            case 48: case 96: document.querySelector('#button0').click(); break;
            case 49: case 97: document.querySelector('#button1').click(); break;
            case 50: case 98: document.querySelector('#button2').click(); break;
            case 51: case 99: document.querySelector('#button3').click(); break;
            case 52: case 100: document.querySelector('#button4').click(); break;
            case 53: case 101: document.querySelector('#button5').click(); break;
            case 54: case 102: document.querySelector('#button6').click(); break;
            case 55: case 103: document.querySelector('#button7').click(); break;
            case 56: case 104: document.querySelector('#button8').click(); break;
            case 57: case 105: document.querySelector('#button9').click(); break;

            //Operacoes;
            case 107: document.querySelector('#buttonPlus').click(); break;
            case 106: document.querySelector('#buttonTimes').click(); break;
            case 109: document.querySelector('#buttonMinus').click(); break;
            case 111: document.querySelector('#buttonDivision').click(); break;
            
            //Resultados e auxiliares;
            case 110: document.querySelector('#buttonComma').click(); break;
            case 46: case 27: document.querySelector('#buttonClear').click(); break;
            case 8: document.querySelector('#buttonEnter').click(); break;
            case 13: document.querySelector('#buttonEqual').click(); break;
        }
        },
  }
    

}
</script>

<style>
* {
    margin:0;
    padding: 0;
}
#app {
  background-color: rgb(245, 245, 220);
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  flex-direction: column;
  min-height:100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app-title {
    padding-top:5%;
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
