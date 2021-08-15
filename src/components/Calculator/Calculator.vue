<template>
    <main class="calculator">
        <div class="row row-visor">
            <input type="text" class="input-history" name="history" readonly id="history" v-model="history">
            <input type="text" class="input-visor" name="visor" id="visor" readonly v-model="visor">
        </div>
        <section class="row row-0">
            <button type="button" class="button" @click="inputNumber" id="buttonPercent" value="%">%</button>
            <button type="button" class="button" @click="clear" id="buttonCE" value="">CE</button>
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
            operation:false,
        }
    },
    methods: {
        inputNumber(e) {
            if(this.visor == '0') {
                this.visor = this.visor.trim().substring(0, this.visor.length - 1);
            }
            if(this.result && this.history.indexOf('=') != -1) {
                this.result = false;
                this.history = '';
                return this.visor = e.target.value;
            }
            if(this.operation) {
                this.visor = '';
                this.operation = false;
            }
            return this.visor += e.target.value;
        },
        inputOperation(e) {
            if(this.operation) {
                return this.history = this.visor + e.target.value;
            }
            if(this.visor.indexOf(e.target.value, 1) == 2) {
                return;
            }
            this.history = this.visor + e.target.value;
            this.operation = true;
        },
        equal() {
            this.result = true;
            let originalHistory = this.history;
            let originalVisor = this.visor;
            this.history = originalHistory.replace(',', '.');
            this.visor = originalVisor.replace(',', '.');
            
            this.visor = eval(this.history+this.visor).toLocaleString('pt-BR');
            this.history = originalHistory + originalVisor + ' =';
        },
        clear() {
            this.history = '';
            this.result = false;
            this.operation = false;
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
}

.input-history, .input-visor {
    text-align: right;
    max-width: 305px;
    padding: 2% 1%;
    cursor: default;
    max-height: 70px;
}

.input-history {
    background-color: var(--theme-background-secondary);
    border: none;
    color: var(--theme-foreground);
    box-shadow: none;
}

.input-visor {
    background-color:var(--theme-button-background-primary);
    border-radius: 3px;
    border: 1px solid var(--theme-button-background-primary);
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
    font-size: 1.7rem;
    margin-bottom: 5px;
    color: var(--theme-button-color);
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    width: 75px;
    height: 75px;
    padding: 1%;
    margin: .1%;
    background: var(--theme-button-background-primary);
    color: var(--theme-button-color);
    font-size: 1.6rem;

    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

    transition: all 0.1s;
}

.button:hover {
    opacity: .9;
}

.button:active {
    background:var(--theme-button-color-click);
}
.buttonActive {
    background:var(--theme-button-color-click);
}
</style>