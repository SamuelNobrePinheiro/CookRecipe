<script setup>
import {RouterLink} from "vue-router"
import { RouterView } from "vue-router";
</script>

<template>
    <div id="top-bar">
        <img src="/src/images/logo.png" alt="" id="logo">
        <RouterLink to="/" active-class="active" class="btn home">Home</RouterLink>
        <RouterLink to="/Receitas" active-class="active" class="btn receitas">Receitas</RouterLink>
        <RouterLink to="/NovaReceita" active-class="active" class="btn criar-receita">Escrever minha receita</RouterLink>
        <RouterLink to="/Perfil" active-class="active" class="btn perfil">Perfil</RouterLink>
    </div>
    <RouterView/>
</template>

<style scoped>
#top-bar{
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    display: flex;
    width: 100%;
    position: absolute; /* Posiciona a div absolutamente */
    left: 50%;
    transform: translate(-50%);
    z-index: 2; /* Garante que a div esteja sobreposta à imagem */
}
#top-bar .btn {
    position: relative;
    text-align: center;
    border: none;
    padding: 5px 30px;
    background-color: #F6F6F6;
    border-radius: 50px;
    margin: 0px 10px;
    cursor: pointer;
    font-family: "League Spartan", sans-serif;
    font-size: 16px;
    color: #141414;
    text-decoration: none;
    box-sizing: border-box;
}
#top-bar .btn{
    position: relative;
    text-align: center;
    border: none;
    padding: 5px 30px;
    background-color: #F6F6F6;
    border-radius: 50px;
    margin: 0px 10px;
    cursor: pointer;
    font-family: "League Spartan", sans-serif;
    font-size: 16px;
    color: #141414;
    text-decoration: none;
    box-sizing: border-box;
}

#top-bar .active{
    width: 120px;
    text-align: center;
    padding: 5px 30px;
    border-radius: 50px;
    margin: 0px 10px;
    text-decoration: none;
    font-weight: bold;
    background-color: #FF8A00;
    color: #F6F6F6;
}

/* LOGO */
#logo {
    margin-right: 450px;
    height: 60px;
    justify-content: center;
}
</style>