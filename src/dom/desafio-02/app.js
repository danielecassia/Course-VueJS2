new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('ALERTAA')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})