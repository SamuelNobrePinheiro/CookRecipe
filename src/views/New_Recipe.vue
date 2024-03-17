<script setup>
import showModal from "./Register_Recipe.vue"
</script>

<template>
<div id="textos"> 
    <h1 id="titulo-receitas">Suas receitas</h1>
    <p id="status-receita">Você ainda não possui nenhuma receita.</p>
</div>
    <button @click="showModal()" id="criar-nova-receita">Criar uma nova receita</button>
</template>

<style scoped>
#textos{
    position: relative;
    top: 100px;
    margin-left: 50px;
    font-family: "League Spartan", sans-serif;
    color: #141414;
}
#titulo-receitas{
    font-family: "League Spartan", sans-serif;
    color: #141414;
    font-weight: bold;
    font-size: 35px;
}
#status-receita{
    font-size: 16px;
}

#criar-nova-receita{
    top: 300px;
    left: 50%;
    transform: translate(-50%);
    position: relative;
    text-align: center;
    border: none;
    padding: 10px 30px;
    background-color: #FF8A00;
    border-radius: 5px;
    cursor: pointer;
    font-family: "League Spartan", sans-serif;
    font-size: 16px;
    color: #F6F6F6;
    text-decoration: none;
    box-sizing: border-box;
}
</style>
