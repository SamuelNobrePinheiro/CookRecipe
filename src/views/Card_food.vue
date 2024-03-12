<template>
<div id="card-comida">
    <div id="div-img-food">
        <img src="/src/images/sanduiche.jpg" alt="" id="receita-img">
    </div>
    <div id="info-card">
        <p id="receita-nome">Nome da Receita</p>
        <p id="tempo-preparo">Tempo de preparo</p>
        <p id="creator">Enviado por: ?</p>
        <img src="" alt="" id="flag-country">
    </div>
</div>
</template>

<style scoped>
#card-comida{
    width: 450px;
    height: 200px;
    position: absolute;
    background-color: #F6F6F6;
    transform: translate(80px, 100px);
    border: 1.5px solid #141414;
    border-radius: 20px;
    display: flex;
}

#info-card{
    flex: 1;
    font-family: "League Spartan", sans-serif;
    margin-left: 15px;
    margin-top: 15px;
}

#receita-nome{
    color: #FF3E00;
    font-weight: bold;
    font-size: 30px;
}

#tempo-preparo, #creator{
    font-family: "League Spartan", sans-serif;
    color: #141414;
    font-size: 16px;
}
#tempo-preparo{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 60px;
}

/* IMAGEM DA RECEITA CARD */
#receita-img{
    width: 150px;
    height: 170px;
    object-fit: cover;
    border-radius: 10px;
    margin-left: 10px;
}

#div-img-food{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    flex: 0 0;
}
</style>