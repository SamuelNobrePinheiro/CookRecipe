<script setup>
    import Card_food from "./Card_food.vue";
</script>

<template>
    <div id="header">
    <!-- TÍTULOS DE INÍCIO - HOMEPAGE -->
        <div id="title-home">
            <div id="deg"></div>
            <img src="../images/homepage.jpg" alt="" id="home-photo">
            <div id="text-home">
                <h1 id="main-title-text">Cozinhe como um <br/> verdadeiro chef</h1>
                <p id="sub-title-text">Comparilhe as suas receitas juntamente com <br/> outros amantes da culinária</p>
            </div>
        </div>
    </div>

    <!-- INÍCIO DA SEGUNDA SEÇÃO -->
    <div id="receitas-populares">
        <h1 id="top-receitas-title">Receitas Populares</h1>

    <!-- CARDS DE COMIDA -->
    <Card_food />
    <button id="ver-mais">Ver Mais</button>
    <footer>
        <p id="copyright">Todos os direitos pertencem a Samuel Nobre</p>
        <p id="copyright1">Copyrights ©️</p>
    </footer>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');

/** IMAGEM HEADER/HOMEPAGE **/
#title-home{
    position: relative;
}
#deg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 650px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)); /* Degradê de preto a transparente */
    z-index: 1;
}

#home-photo{
    max-width: 100%; /* Define a largura máxima */
    width: 100%; /* Faz com que a imagem cubra toda a largura do contêiner pai */
    max-height: 650px; /* Define uma altura máxima para a imagem */
    object-fit: cover; /* Faz com que a imagem cubra o contêiner pai */
}

/** TEXT HEADER/HOMEPAGE **/
#text-home{
    font-family: "League Spartan", sans-serif;
}
#main-title-text{
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
    position: absolute;
    font-size: 50px;
    color: #F6F6F6;
    transform: translate(80px, -300px);
    z-index: 3;
}
#sub-title-text{
    position: absolute;
    font-size: 25px;
    color: #F6F6F6;
    line-height: 1;
    transform: translate(80px, -200px);
    z-index: 3;
}

/** RECEITAS POPULARES **/
#top-receitas-title{
    font-family: "League Spartan", sans-serif;
    color: #141414;
    font-weight: bold;
    font-size: 40px;
    position: absolute;
    transform: translate(80px);
    margin-top: 20px;
}

/** CARD DE COMIDA **/

/** IMAGEM DA RECEITA **/

/** BOTÃO PARA VER MAIS RECEITAS **/
#ver-mais{
    left: 50%;
    font-family: "League Spartan", sans-serif;
    font-size: 16px; 
    padding: 10px 30px;
    border-radius: 5px;
    background-color: #FF8A00;
    color: #F6F6F6;
    border: none;
    position: absolute;
    transform: translate(-50%, 400px);
    cursor: pointer;
    justify-content: center;
}

/** RODAPÉ **/
footer{
    width: 100%;
    max-height: 100%;
    height: 80px;
    background-color:#ffbd71;
    transform: translate(0px, 480px);
    display: flex;
    justify-content: center;
    align-items: center;
    
}
#copyright{
    font-family: "League Spartan", sans-serif;
    color: #141414;
    font-weight: bold;
    font-size: 15px;
}
#copyright1{
    font-family: "League Spartan", sans-serif;
    color: #141414;
    font-weight: bold;
    font-size: 10px;
}
</style>