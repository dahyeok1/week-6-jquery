//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    $("#toggle").click(function(){
        $("#main").toggle()
    })

    $("#main").hide();
    $("#main").click(function(){
        $(".box").addClass("animate-img");
        setTimeout(function(){
            $(".box").removeClass
            ("animate-img");
        }, 2000);
    })

    $("#name").click(function(){
        $(".box").css("background-color","black");
    })

    $("#happy").click(function(){
        $(".box").css("background-color","lightgray");
    })

    $("#home-screen").ready(function(){
        $("#happy").click(function(){
            location.reload();
        })
    })
});