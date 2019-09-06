// header
var search =document.getElementById("search");
search.onfocus =function (){
    search.placeholder ='';
}
search.onblur =function (){
    search.placeholder ='search';
}
var search3 =document.getElementById("search3");
search3.onfocus =function (){
    search3.placeholder ='';
}
search3.onblur =function (){
    search3.placeholder ='search';
}
$(document).ready(function(){
    $(".header li a").each(function(){
        $(this).hover(function(){
            $(this).animate({
                marginTop :'20px'
            },200,function(){
                $(this).animate({
                    marginTop :'0'
                },200)
            })
        })
    })
    //end header
    //part2
    $(".part2 .card i").each(function(){
        $(".part2 .card i").hover(function(){
        $(this).animate({
            fontSize :'60px'
        },200,function(){
            $(this).animate({
                fontSize :'50px'
            },200)
        })
        })
    })
//end part2
});