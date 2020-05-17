<template>
    <div class="relay" id="Game">
        <h1>{{ word }}</h1>
        <form v-on:submit="onSubmitForm">
            <input type="text" v-model="value" ref="answer">
            <button type="submit">입력</button>
        </form>
        <p id="result">{{result}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            word: '',
            value: '',
            result: ''
        }
    },
    methods: {
        onSubmitForm(e) {
            e.preventDefault();
            if(this.word[this.word.length-1] === this.value[0]) {
                this.result = "정답"
                this.word = this.value;
                this.value = '';
                this.$refs.answer.focus();
            } else {
                this.result = "떙"
            }
        }
    }
}
</script>
<style>

</style>