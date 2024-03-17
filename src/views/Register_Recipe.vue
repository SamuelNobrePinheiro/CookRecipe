<script setup>
import { ref } from 'vue';

const showCard = ref(false);

function showModal(){
    showCard.value = true;
}

</script>

<template>
    <div v-if="showCard" id="overlay">
        <div id="registro">
            <div class="section titulo-receita">
                <h1>Nome da Receita</h1>
                <input type="text" name="" id="titulo">
                <h1>Nacionalidade</h1>
                <select id="paises">
                    <option value="">Selecione um país</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Espanha">Espanha</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                </select>
            </div>
            <div class="section ingredientes">
                <h1>Ingredientes</h1>
                <p id="qnt">Qnt.</p>
                <input type="number" name="" id="quantidade">
                <p id="nome-ingred">Nome do Ingrediente</p>
                <input type="text" name="" id="ingred">
                <button id="novo-ingred">Adicionar</button>
            </div>
            <div class="section modo-preparo">
                <textarea name="modo-prep" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    </div>
    <button @click="showCard = true"> Aparecer </button>
</template>

<style scoped>

</style>