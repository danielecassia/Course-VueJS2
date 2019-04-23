new Vue({
    el: '#desafio',
    data: {
        nome: 'Daniele Cássia',
        idade: 16,
        imagem: 'http://pm1.narvii.com/6498/991e90a78a01a7190314442d19a69cdb4a8a17d4_00.jpg'
    },
    methods: {
        multIdade() {
            return this.idade * 3
        },
        randNum() {
            return Math.random()
        }
    }
})