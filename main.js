// Automatic SlideShow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("bitcoin");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
}

// SlideShow next and prev button
let slideIndextwo = 1;
showSlidestwo(slideIndextwo);

function plusSlides(n) {
    showSlidestwo(slideIndextwo += n);
}

function currentSlide(n) {
    showSlidestwo(slideIndextwo = n);
}

function showSlidestwo(n) {
    let i;
    let slides = document.getElementsByClassName("bitcoin");
    let dotstwo = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndextwo = 1}    
    if (n < 1) {slideIndextwo = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dotstwo.length; i++) {
        dotstwo[i].className = dotstwo[i].className.replace(" active", "");
    }
    slides[slideIndextwo-1].style.display = "block";
    dotstwo[slideIndextwo-1].className += " active";
}


// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// The Live Price of Crypto
var usdbtc = document.getElementById("usdbitcoin");
var phpbtc = document.getElementById("phpbitcoin");
var eurbtc = document.getElementById("eurbitcoin");

var usdeth = document.getElementById("usdethereum");
var phpeth = document.getElementById("phpethereum");
var eureth = document.getElementById("eurethereum");

var usddoge = document.getElementById("usddogecoin");
var phpdoge = document.getElementById("phpdogecoin");
var eurdoge = document.getElementById("eurdogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd%2Cphp%2Ceur",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    usdbtc.innerHTML = response.bitcoin.usd;
    phpbtc.innerHTML = response.bitcoin.php;
    eurbtc.innerHTML = response.bitcoin.eur;

    usdeth.innerHTML = response.ethereum.usd;
    phpeth.innerHTML = response.ethereum.php;
    eureth.innerHTML = response.ethereum.eur;

    usddoge.innerHTML = response.dogecoin.usd;
    phpdoge.innerHTML = response.dogecoin.php;
    eurdoge.innerHTML = response.dogecoin.eur;
});

// Convert from currency to crypto
function usdConvert() {
    let btcconvertion = Number(document.getElementById("firstNumber").value);
    let btphpconvertion = "";
    let bteurconvertiontwo = "";
    let usdbtcproduct = btcconvertion / usdbtc.innerHTML;
    let usdethproduct = btcconvertion / usdeth.innerHTML;
    let usddogeproduct = btcconvertion / usddoge.innerHTML;
    document.getElementById("btccoinConvert").innerHTML = usdbtcproduct;
    document.getElementById("ethcoinConvert").innerHTML = usdethproduct;
    document.getElementById("dogecoinConvert").innerHTML = usddogeproduct;
    document.getElementById("secondNumber").value = btphpconvertion;
    document.getElementById("thirdNumber").value = bteurconvertiontwo;
}

function phpConvert() {
    let btphpconvertion = Number(document.getElementById("secondNumber").value);
    let btcconvertiontwo = "";
    let bteurconvertiontwo = "";
    let phpbtcproduct = btphpconvertion / phpbtc.innerHTML;
    let phpethproduct = btphpconvertion / phpeth.innerHTML;
    let phpdogeproduct = btphpconvertion / phpdoge.innerHTML;
    document.getElementById("btccoinConvert").innerHTML = phpbtcproduct;
    document.getElementById("ethcoinConvert").innerHTML = phpethproduct;
    document.getElementById("dogecoinConvert").innerHTML = phpdogeproduct;
    document.getElementById("firstNumber").value = btcconvertiontwo;
    document.getElementById("thirdNumber").value = bteurconvertiontwo;
}

function eurConvert() {
    let bteurconvertion = Number(document.getElementById("thirdNumber").value);
    let btcconvertiontwo = "";
    let btphpconvertion = "";
    let eurbtcproduct = bteurconvertion / eurbtc.innerHTML;
    let eurethproduct = bteurconvertion / eureth.innerHTML;
    let eurdogeproduct = bteurconvertion / eurdoge.innerHTML;
    document.getElementById("btccoinConvert").innerHTML = eurbtcproduct;
    document.getElementById("ethcoinConvert").innerHTML = eurethproduct;
    document.getElementById("dogecoinConvert").innerHTML = eurdogeproduct;
    document.getElementById("firstNumber").value = btcconvertiontwo;
    document.getElementById("secondNumber").value = btphpconvertion;
}


// Convert from crypto to currency
function usdConverttwo() {
    let btcconvertion = Number(document.getElementById("firstNumbertwo").value);
    let btphpconvertion = "";
    let bteurconvertiontwo = "";
    let usdbtcproduct = btcconvertion * usdbtc.innerHTML;
    let usdethproduct = btcconvertion * phpbtc.innerHTML;
    let usddogeproduct = btcconvertion * eurbtc.innerHTML;
    document.getElementById("btccoinConverttwo").innerHTML = usdbtcproduct;
    document.getElementById("ethcoinConverttwo").innerHTML = usdethproduct;
    document.getElementById("dogecoinConverttwo").innerHTML = usddogeproduct;
    document.getElementById("secondNumbertwo").value = btphpconvertion;
    document.getElementById("thirdNumbertwo").value = bteurconvertiontwo;
}

function phpConverttwo() {
    let btphpconvertion = Number(document.getElementById("secondNumbertwo").value);
    let btcconvertiontwo = "";
    let bteurconvertiontwo = "";
    let phpbtcproduct = btphpconvertion * usdeth.innerHTML;
    let phpethproduct = btphpconvertion * phpeth.innerHTML;
    let phpdogeproduct = btphpconvertion * eureth.innerHTML;
    document.getElementById("btccoinConverttwo").innerHTML = phpbtcproduct;
    document.getElementById("ethcoinConverttwo").innerHTML = phpethproduct;
    document.getElementById("dogecoinConverttwo").innerHTML = phpdogeproduct;
    document.getElementById("firstNumbertwo").value = btcconvertiontwo;
    document.getElementById("thirdNumbertwo").value = bteurconvertiontwo;
}

function eurConverttwo() {
    let bteurconvertion = Number(document.getElementById("thirdNumbertwo").value);
    let btcconvertiontwo = "";
    let btphpconvertion = "";
    let eurbtcproduct = bteurconvertion * usddoge.innerHTML;
    let eurethproduct = bteurconvertion * phpdoge.innerHTML;
    let eurdogeproduct = bteurconvertion * eurdoge.innerHTML;
    document.getElementById("btccoinConverttwo").innerHTML = eurbtcproduct;
    document.getElementById("ethcoinConverttwo").innerHTML = eurethproduct;
    document.getElementById("dogecoinConverttwo").innerHTML = eurdogeproduct;
    document.getElementById("firstNumbertwo").value = btcconvertiontwo;
    document.getElementById("secondNumbertwo").value = btphpconvertion;
}