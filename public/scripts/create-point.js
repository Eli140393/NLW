// Função que popula os estados
function populateUFs(){
    const ufSelect = document .querySelector("select[name =uf]")

    // é uma promessa, retorna algo
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

    // then deu certo, volto com dados, arrow function, trnaformando em jason
    .then( (res) =>{ return res.json()})
    // Nova promessa --  .then( res => res.json()) -- forma simplificada uma linha
  
    .then(states =>{ // states - array de estados

        for (state of states){ // jogo os estados na variavel state

            // Propriedade de elementos do html colocando html
            //  innerHtml substitui o que tem no select pelo o que tiver no value
            ufSelect.innerHTML += `<option value = "${state.id}" >${state.nome}</option>`
        }
    })
    
}

populateUFs()

// Função que pega as city de acordo com o estado


function getCities(event){

    const citySelect = document .querySelector("select[name =city]")

    const stateInput = document .querySelector("input[name =state]")

    const ufValue = event.target.value

     const indexOfSelectdState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectdState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML="<option value> Selecione a Cidade</option>";
    citySelect.disabled = true;

    fetch(url)
    .then( (res) =>{ return res.json()})
    .then(cities =>{

        for (city of cities){ // jogo os estados na variavel state

            citySelect.innerHTML += `<option value = "${city.nome}" >${city.nome}</option>`
        }
        citySelect.disabled = false;
    })

}

document
// Dentro do documento eu procuro pelo selector , por name == uf
    .querySelector("select[name =uf]")
    // Ouvidor de eventos - no caso mudança
    //     .addEventListener("change",  () => {}) arrow function 

    .addEventListener("change",  getCities) 
    
    // itens de coleta

// Ouvidor de eventos para todos os elementos do itens
// Pegar todos os li`s
// querySelectorAll(".items-grid li") buscando todos dentro do items-grid li

const itemsToColletc = document.querySelectorAll(".items-grid li")

// Éstrutura de repetiçao para itemsTocollect

for(const item of itemsToColletc){
    // ouvidor de eventos para o click -- funcão 

    item.addEventListener("click", handleSelectedItem)
}

 const collectedItems = document.querySelector("input[name=items]")


// Variavel para receber os itens selecionados
let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
// adcionar ou remover uma classe, para a seleção
    itemLi.classList.toggle("selected")

    const ItemId = itemLi.dataset.id

    // console.log('ITEM ID:', ItemId )

//   Verificar se existem itens slecionados, se sim 
// pega os itens selecionados
const  alreadySelected = selectedItems.findIndex(function(item){

    const ItemFound = item == ItemId // isso sera true ou false
    return ItemFound 
})


// se estiver selecionado, tirar da seleção
if (alreadySelected >= 0){
    const filteredItems = selectedItems.filter(item =>{
        const itemIsDifferent = item != ItemId // false
        return itemIsDifferent
    })

    selectedItems = filteredItems
}else{

    // se não estiver selecionado adcionar a seleção
    selectedItems.push(ItemId)
}

// console.log('SelectedItems: ', selectedItems)

// atualizar o campo hidden com os itens selecionados
collectedItems.value = selectedItems
}