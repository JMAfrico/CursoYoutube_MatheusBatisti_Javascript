//criar elemento
var el = document.createElement('div');

//nomear uma classe para o elemento criado
el.classList = "div-criada";
//ou
//el.setAttribute("class","div-criada2");
console.log(el);

//nomear um id para o elemento criado
el.id = "id-criado";


//adicionar o elemento criado no HTML
//LOCALIZAR O CONTAINER, ADICIONAR O FILHO 'el' no container
var container = document.querySelector('#container');
container.appendChild(el);

//INSERIR UM ELEMENTO ANTES DE OUTRO
//UTILIZAÇÃO DO insertBefore, passando como parâmetro o elemento
//que quero inserir e o elemento de qual vou inserir antes
// insert Before - insere antes
var el2 = document.createElement('div');
el2.classList = "div-before";
container.insertBefore(el2,el);

