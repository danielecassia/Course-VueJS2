<template>
    <div class="citacao">
        <!-- EXIBIR VALOR QUE ESTA NO CORPO DO COMPONENTE (Ñ COMO PROPIEDADE) -->
        <slot name="autor"></slot>
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
