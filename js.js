const botaoMais = document.getElementById('botaoMais');
const botaoMenos = document.getElementById('botaoMenos');
const displayAdicionarCarrinho = document.getElementById('displayAgora').innerHTML;
const addCard = document.getElementById('add-to-card');
const unidadesCarrinho = document.getElementById('unidadesCarrinho');
const valorTotal = document.getElementById('valorTotal');
const balaoAmarelo = document.getElementById('bola-amarela');
const svgCarrinho = document.getElementById('svgCarrinho');
const bolaContent = document.getElementById('qtue');
const thumb01 = document.getElementById('thumb01');
const thumb02 = document.getElementById('thumb02');
const thumb03 = document.getElementById('thumb03');
const thumb04 = document.getElementById('thumb04');
const bigImg = document.getElementById('bigImg');
const hideBigImg = document.getElementById('hideBigImg');
let totalAdicionarCarrinho = 0;
let totalNoCarrinho = 0;
let valorImagemAtual = 1;

function diminuirDisplay(){
    if (totalAdicionarCarrinho == 0){
        return
    }
    totalAdicionarCarrinho = totalAdicionarCarrinho - 1;
    document.getElementById('displayAgora').innerHTML = totalAdicionarCarrinho;
}

function adicionarDisplay(){
    if (totalAdicionarCarrinho == 50){
        document.getElementById('displayAgora').innerHTML = totalAdicionarCarrinho;
        return;
    }
    totalAdicionarCarrinho = totalAdicionarCarrinho + 1;
    document.getElementById('displayAgora').innerHTML = totalAdicionarCarrinho;
}

function adicionarNoCarrinho(){
    totalNoCarrinho = totalNoCarrinho + totalAdicionarCarrinho;
    totalAdicionarCarrinho = 0;
    document.getElementById('displayAgora').innerHTML = totalAdicionarCarrinho;
    if (totalNoCarrinho >= 50){
        totalNoCarrinho = 50;
    }
    unidadesCarrinho.innerHTML = totalNoCarrinho;
    balaoAmarelo.innerHTML = totalNoCarrinho;
    valorTotal.innerHTML = '$' + 125 * totalNoCarrinho + '.00';
    if (totalNoCarrinho > 0){
        bolaContent.classList.add('quantidade-carinho-show');
    } else if (totalNoCarrinho == 0){
        bolaContent.classList.remove('quantidade-carinho-show');
    }
    verificaDisplay();
}

function apagarCarrinho(){
    svgCarrinho.classList.add('empty');
    totalNoCarrinho = 0
    unidadesCarrinho.innerHTML = totalNoCarrinho;
    balaoAmarelo.innerHTML = totalNoCarrinho;
    valorTotal.innerHTML = '$' + 125 * totalNoCarrinho + '.00';
    bolaContent.classList.remove('quantidade-carinho-show');
}

function verificaDisplay(){
    if (totalNoCarrinho == 0){
        svgCarrinho.classList.add('empty');
    } else {
        svgCarrinho.classList.remove('empty')
    }
}

function menuToggle(){
    if (totalNoCarrinho == 0 ){
        svgCarrinho.classList.add('empty');
    } else if (totalNoCarrinho > 0){
        svgCarrinho.classList.remove('empty')
    }
    svgCarrinho.classList.toggle('open')
}

function hoverImg(img){
    switch (img){
        case 1:
            thumb01.classList.add('newimg01');
            document.getElementById('thumb11').classList.add('newimg01');
            thumb02.classList.remove('newimg02');
            thumb03.classList.remove('newimg03');
            thumb04.classList.remove('newimg04');
            document.getElementById('thumb12').classList.remove('newimg02');
            document.getElementById('thumb13').classList.remove('newimg03');
            document.getElementById('thumb14').classList.remove('newimg04');
            bigImg.src="./images/image-product-1.jpg"
            hideBigImg.src="./images/image-product-1.jpg"
            valorImagemAtual = 1;
            break;
        case 2:
            thumb02.classList.add('newimg02');
            document.getElementById('thumb12').classList.add('newimg02');
            thumb01.classList.remove('newimg01');
            thumb03.classList.remove('newimg03');
            thumb04.classList.remove('newimg04');
            document.getElementById('thumb11').classList.remove('newimg01');
            document.getElementById('thumb13').classList.remove('newimg03');
            document.getElementById('thumb14').classList.remove('newimg04');
            bigImg.src="./images/image-product-2.jpg"
            hideBigImg.src="./images/image-product-2.jpg"
            valorImagemAtual = 2;
            break;
        case 3:
            thumb03.classList.add('newimg03');
            document.getElementById('thumb13').classList.add('newimg03');
            thumb01.classList.remove('newimg01');
            thumb02.classList.remove('newimg02');
            thumb04.classList.remove('newimg04');
            document.getElementById('thumb11').classList.remove('newimg01');
            document.getElementById('thumb12').classList.remove('newimg02');
            document.getElementById('thumb14').classList.remove('newimg04');
            bigImg.src="./images/image-product-3.jpg"
            hideBigImg.src="./images/image-product-3.jpg"
            valorImagemAtual = 3;
            break;
        case 4:
            thumb04.classList.add('newimg04');
            document.getElementById('thumb14').classList.add('newimg04');
            thumb01.classList.remove('newimg01');
            thumb02.classList.remove('newimg02');
            thumb03.classList.remove('newimg03');
            document.getElementById('thumb11').classList.remove('newimg01');
            document.getElementById('thumb12').classList.remove('newimg02');
            document.getElementById('thumb13').classList.remove('newimg03');
            bigImg.src="./images/image-product-4.jpg"
            hideBigImg.src="./images/image-product-4.jpg"
            valorImagemAtual = 4;
            break;
    }
}

function changeBigImg(valor){
    if (valor == 'menos'){
        if (valorImagemAtual > 1){
            valorImagemAtual = valorImagemAtual - 1;
        }
    } else if (valor == 'mais'){
        if (valorImagemAtual < 4){
            valorImagemAtual = valorImagemAtual + 1;
        }
    }
    hoverImg(valorImagemAtual);
}

document.getElementById('xclose').addEventListener('click', function(e){
    e.preventDefault;
    document.getElementById('bodi').classList.remove('imagem-grande');
})

function showMenuScren(){
    document.getElementById('subheader').classList.add('testando');
    document.getElementById('black-hide').classList.add('last-hide');
}

function closeMenuScren(){
    document.getElementById('subheader').classList.remove('testando');
    document.getElementById('black-hide').classList.remove('last-hide');
}

bigImg.addEventListener('click', function(e){
    e.preventDefault;
    document.getElementById('bodi').classList.add('imagem-grande');
})

document.getElementById('black-hide').addEventListener('click', function(e){
    e.preventDefault;
    document.getElementById('subheader').classList.remove('testando');
    document.getElementById('black-hide').classList.remove('last-hide');
})
