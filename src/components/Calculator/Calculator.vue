<template>
    <main class="calculator">
        <div class="row row-visor">
            <input type="text" class="input-history" name="history" readonly id="history" v-model="history">
            <input type="text" class="input-visor" name="visor" id="visor" readonly v-model="visor">
        </div>
        <section class="row row-0">
            <button type="button" class="button" @click="inputNumber" id="buttonPercent" value="%">%</button>
            <button type="button" class="button" @click="zero" id="buttonCE" value="">CE</button>
            <button type="button" class="button" @click="clear" id="buttonClear" value="">C</button>
            <button type="button" class="button" @click="removeLast" id="buttonEnter" value="">E</button>
        </section>

        <section class="row row-1">
            <button type="button" class="button" @click="inputNumber" id="button7" value="7">7</button>
            <button type="button" class="button" @click="inputNumber" id="button8" value="8">8</button>
            <button type="button" class="button" @click="inputNumber" id="button9" value="9">9</button>

            <button type="button" class="button" @click="inputOperation" id="buttonTimes" value=" * ">*</button>
        </section>

        <section class="row row-2">
            <button type="button" class="button" @click="inputNumber" id="button4" value="4">4</button>
            <button type="button" class="button" @click="inputNumber" id="button5" value="5">5</button>
            <button type="button" class="button" @click="inputNumber" id="button6" value="6">6</button>

            <button type="button" class="button" @click="inputOperation" id="buttonDivision" value=" / ">/</button>
        </section>
        <section class="row row-3">
            <button type="button" class="button" @click="inputNumber" id="button1" value="1">1</button>
            <button type="button" class="button" @click="inputNumber" id="button2" value="2">2</button>
            <button type="button" class="button" @click="inputNumber" id="button3" value="3">3</button>

            <button type="button" class="button" @click="inputOperation" id="buttonPlus" value=" + ">+</button>
        </section>
        <section class="row row-4">
            <button type="button" class="button" @click="inputOperation" id="buttonMinus" value=" - ">-</button>
            <button type="button" class="button" @click="inputNumber" id="button0" value="0">0</button>
            <button type="button" class="button" @click="inputNumber" id="buttonComma" value=",">,</button>

            <button type="button" class="button" @click="equal" id="buttonEqual">=</button>
        </section>
    </main>
</template>


<script>
export default {
    name:'Calculator',
    data() {
        return {
            visor:'',
            history: '',
            result:false,
        }
    },
    methods: {
        
        inputNumber(e) {
            if(this.visor == '0') {
                this.visor = this.visor.trim().substring(0, this.visor.length - 1);
            }
            if(this.result) {
                this.result = false;
                this.history = '';
                return this.visor = e.target.value;
            }
            return this.visor += e.target.value;
            
        },
        inputOperation(e) {
            if(this.visor.indexOf(e.target.value, 1) == 2) {
                return;
            }
            this.history = this.visor + e.target.value;
            this.visor = '';
        },
        equal() {
            let originalVisor = this.visor;
            this.result = true;
            this.history.toLocaleString('pt-BR');
            this.visor.toLocaleString('pt-BR');
            this.visor = eval(this.history+this.visor).toLocaleString('pt-BR');
            this.history = this.history + originalVisor + ' =';
        },
        clear() {
            this.history = '';
            return this.visor = '0';
        },
        zero() {
            this.history = '';
            return this.visor = '0';
        },
        removeLast() {
            return this.visor = this.visor.trim().substring(0, this.visor.length - 1);
        }
    }

}
</script>


<style scoped>
.row {
    display: flex;
    justify-content: center;
    width: 100%;
}

.row-visor {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 2%;
    width:63%;
}

.input-history, .input-visor {
    text-align: right;
    width: 62%;
    max-width: 335px;
    padding: 2% 1%;
    cursor: default;
}

.input-history {
    background-color: rgb(245, 245, 220);
    border: none;
    color: rgba(0, 0, 0, 0.5);
    box-shadow: none;

    margin-bottom: 1%;
}

.input-visor {
    background-color:rgba(44, 62, 80, .8);
    border-radius: 3px;
    border: 1px solid rgb(44, 62, 80);
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
    font-size: 1.7rem;
    
    color: rgba(255, 255, 255, .8);
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    width: 80px;
    height: 80px;
    padding: 2%;
    margin: 0.5% 0.5%;
    background: #2c3e50;
    color: white;
    font-size: 1.6rem;

    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    transition: all 0.1s;
}

.button:hover {
    opacity: .9;
}

.button::after {
    opacity: .9;
}
</style>