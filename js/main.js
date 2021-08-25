$(document).ready(function(){
    $(document).on("click", "#question-1-btn", function(){
        $('#question1').hide();
        $('#question2').removeAttr("hidden");
    })

    $(document).on("click", "#question-2-btn", function(){
        $('#question2').hide();
        $('#question3').removeAttr("hidden");
    })

    $(document).on("click", "#question-3-btn", function(){
        setTimeout(function(){
            $('#question3').hide();
        $('#restart-quiz').removeAttr("hidden");
        }, 2000);
        
    })

    $(document).on("click", "#restart-buttton", function(){
        setTimeout(function(){
            location.reload();
        }, 1000);

    })
   
})