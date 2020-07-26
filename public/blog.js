document.getElementById("products").addEventListener('click', productsClicked)
function productsClicked(){
    alert("Products coming soon!")
}

function readMore1() {
    var div = document.getElementById("readMoreDiv1");
    var button = document.getElementById("button1")
    if (div.style.display === "none") {
        div.style.display = "block"
        button.innerHTML = "Read less"

    } else {
        div.style.display = "none";
        button.innerHTML = "Read more"
    }
}

function readMore2() {
    var div = document.getElementById('readMoreDiv2');
    var button = document.getElementById('button2');
    if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = "Read Less"
    } else {
        div.style.display = "none";
        button.innerHTML = "Read more"
    }
}

function readMore3() {
    var div = document.getElementById("readMoreDiv3");
    var button = document.getElementById("button3");
    if (div.style.display === "none") {
        div.style.display = "block"
        button.innerHTML = "Read less"
    } else {
        div.style.display = "none"
        button.innerHTML = "Read More"
    }
}

function readMore4() {
    var div = document.getElementById("readMoreDiv4");
    var button = document.getElementById("button4");
    if (div.style.display === "none") {
        div.style.display = "block"
        button.innerHTML = "Read less";
    } else {
        div.style.display = "none";
        button.innerHTML = "Read more"
    }

}
function readMore5() {
    var div = document.getElementById("readMoreDiv5");
    var button = document.getElementById('button5');
    if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = "Read less"
    } else {
        div.style.display = "none";
        button.innerHTML = "Read more"
    }
}

function readMore6() {
    var div = document.getElementById("readMoreDiv6");
    var button = document.getElementById('button6');
    if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = "Read less"
    } else {
        div.style.display = "none";
        button.innerHTML = "Read more"
    }
}

function readMore7() {
    var div = document.getElementById("readMoreDiv7");
    var button = document.getElementById("button7")
    if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = "Read less"
    } else {
        div.style.display = "none";
        button.innerHTML = "Read more"
    }
}
function readMore8() {
    var div = document.getElementById("readMoreDiv8");
    var button = document.getElementById("button8")
    if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = "Read less"
    } else {
        div.style.display = "none";
        button.innerHTML = "Read more"
    }
}
function readMore9() {
    var div = document.getElementById("readMoreDiv9");
    var button = document.getElementById("button9")
    if (div.style.display === "none") {
        div.style.display = "block";
        button.innerHTML = "Read less"
    } else {
        div.style.display = "none";
        button.innerHTML = "Read more"
    }
}

function orderAlphabetically() {
    var div1 = document.getElementById("flexbox1")
    var div2 = document.getElementById("flexbox2")
    var div3 = document.getElementById("flexbox3")
    var div4 = document.getElementById("flexbox4")
    var div5 = document.getElementById("flexbox5")
    var div6 = document.getElementById("flexbox6")
    var div7 = document.getElementById("flexbox7")
    var div8 = document.getElementById("flexbox8")
    var div9 = document.getElementById("flexbox9")

    div1.style.order = 8
    div2.style.order = 6
    div3.style.order = 5
    div4.style.order = 4
    div5.style.order = 1
    div6.style.order = 3
    div7.style.order = 2
    div8.style.order = 7
    div9.style.order = 9
}

function orderPopularity() {
    var div1 = document.getElementById("flexbox1")
    var div2 = document.getElementById("flexbox2")
    var div3 = document.getElementById("flexbox3")
    var div4 = document.getElementById("flexbox4")
    var div5 = document.getElementById("flexbox5")
    var div6 = document.getElementById("flexbox6")
    var div7 = document.getElementById("flexbox7")
    var div8 = document.getElementById("flexbox8")
    var div9 = document.getElementById("flexbox9")

    div1.style.order = 1
    div2.style.order = 2
    div3.style.order = 3
    div4.style.order = 4
    div5.style.order = 5
    div6.style.order = 6
    div7.style.order = 7
    div8.style.order = 8
    div9.style.order = 9
}

