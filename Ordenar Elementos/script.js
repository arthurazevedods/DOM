document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário e a lista
    var form = document.getElementById('element_form');
    var elementsList = document.getElementById('elementos');

    // Adiciona um evento de submissão ao formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

        // Obtém o valor do campo de input
        var itemInput = document.getElementById('number_input');
        var newItemText = itemInput.value.trim();

        // Verifica se o campo de input não está vazio
        if (newItemText == '' || isNaN(newItemText)) {
            alert("O valor não é válido. Digite um número");
        }
        else {
            // Cria um novo item de lista
            addElement(elementsList, newItemText);
        }
    });
    function addElement(elementsList, newItemText) {
        var newItem = document.createElement('li');
        newItem.className = 'item';
        newItem.textContent = newItemText;

        // Adiciona o novo item à lista
        elementsList.appendChild(newItem);

        // Limpa o campo de input
        itemInput.value = '';
    }

    // Seleciona o botão de ordenação
    const selectionSort = document.getElementById('selection_sort_btn');
    // Adiciona um evento de clique ao botão de ordenação
    selectionSort.addEventListener('click', (e) => {
        e.preventDefault();
        var items = elementsList.querySelectorAll('.item');
        var itemsArray = Array.from(items);

        for (let i = 0; i < itemsArray.length; i++) {
            let min = i;
            for (let current = i + 1; current < itemsArray.length; current++) {
                console.log(itemsArray[current], itemsArray[min]);
                if (parseInt(itemsArray[current].textContent) < parseInt(itemsArray[min].textContent)) {
                    min = current;
                    console.log(min);
                }
            }
            if (i != min) {
                let aux = itemsArray[i].textContent;
                console.log(itemsArray[min]);
                itemsArray[i].textContent = itemsArray[min].textContent;
                itemsArray[min].textContent = aux;
            }
        }
    });

});