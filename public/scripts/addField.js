// procurar o botão
    document.querySelector("#add-time")
//quando clicar no botao
    .addEventListener('click', cloneField)
//executar uma ação
    function cloneField(){
 //duplicar os campos, quais?
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean é true ou false

        const fields = newFieldContainer.querySelectorAll('input')
 //limpando os campos       
       fields.forEach(function(field){
           field.value = ""
       })
       
//colocar na page, onde?
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    
    
