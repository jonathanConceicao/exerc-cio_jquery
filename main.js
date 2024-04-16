$(document).ready(function() {
    
    $('form').on('submit', (e) => {
        e.preventDefault();

        const novaTarefa = $('#Tarefa').val()
        
        const novoItem = $('<li></li>')

        $(`<label> ${novaTarefa} </label>`).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        
        $(novoItem).click(function () { 
            if ($(this).css('text-decoration', 'line-through')) {
                
            } else {
                $(this).css('text-decoration', 'none')
            }
        })

        $('#Tarefa').val('')
    })
})
