$(document).ready(function(){
    $('h1').each(function(){
        $(this).click(function(){
            $(this).next().slideToggle();
            $(".reponse").not($(this).next()).hide()
        })
    })

})