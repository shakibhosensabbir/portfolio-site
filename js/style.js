///text type js 

const typed = new Typed('.text', {

    strings: ['Shakib Hosen', 'Web Desinger', 'Web Developer', '19 Year Old'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1500,
    loop: true,
});


/// about count

$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



///porfilio section strat

//web desing
document.querySelector("#web-desing").addEventListener("click", function () {

    document.querySelector("#webdesignimg1").style.display = "block";
    document.querySelector("#webdesignimg2").style.display = "block";
    document.querySelector("#webdesignimg3").style.display = "block";
    document.querySelector("#webdevelopmentimg1").style.display = "none";
    document.querySelector("#webdevelopmentimg2").style.display = "none";
    document.querySelector("#webdevelopmentimg3").style.display = "none";
    document.querySelector("#logodesingimg1").style.display = "none";
    document.querySelector("#logodesingimg2").style.display = "none";
    document.querySelector("#logodesingimg3").style.display = "none";



});
//web development
document.querySelector("#web-development").addEventListener("click", function () {
    document.querySelector("#webdesignimg1").style.display = "none";
    document.querySelector("#webdesignimg2").style.display = "none";
    document.querySelector("#webdesignimg3").style.display = "none";
    document.querySelector("#webdevelopmentimg1").style.display = "block";
    document.querySelector("#webdevelopmentimg2").style.display = "block";
    document.querySelector("#webdevelopmentimg3").style.display = "block";
    document.querySelector("#logodesingimg1").style.display = "none";
    document.querySelector("#logodesingimg2").style.display = "none";
    document.querySelector("#logodesingimg3").style.display = "none";
});

//logo desing
document.querySelector("#graphic-design").addEventListener("click", function () {

    document.querySelector("#logodesingimg1").style.display = "block";
    document.querySelector("#logodesingimg2").style.display = "block";
    document.querySelector("#logodesingimg3").style.display = "block";
    document.querySelector("#webdesignimg1").style.display = "none";
    document.querySelector("#webdesignimg2").style.display = "none";
    document.querySelector("#webdesignimg3").style.display = "none";
    document.querySelector("#webdevelopmentimg1").style.display = "none";
    document.querySelector("#webdevelopmentimg2").style.display = "none";
    document.querySelector("#webdevelopmentimg3").style.display = "none";

});

document.querySelector("#all").addEventListener("click", function () {


    document.querySelector("#webdesignimg1").style.display = "block";
    document.querySelector("#webdesignimg2").style.display = "block";
    document.querySelector("#webdesignimg3").style.display = "block";
    document.querySelector("#webdevelopmentimg1").style.display = "block";
    document.querySelector("#webdevelopmentimg2").style.display = "block";
    document.querySelector("#webdevelopmentimg3").style.display = "block";
    document.querySelector("#logodesingimg1").style.display = "block";
    document.querySelector("#logodesingimg2").style.display = "block";
    document.querySelector("#logodesingimg3").style.display = "block";

});
/// top up 

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(window).on('scroll',function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }

})