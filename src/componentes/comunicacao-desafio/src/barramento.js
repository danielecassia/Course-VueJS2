import Vue from 'vue'

export default new Vue({
    methods: {
        setUsuarioSeleciondo(usuario) {
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback) {
            this.$on('usuarioSelecionado', callback)
        }
    }
})