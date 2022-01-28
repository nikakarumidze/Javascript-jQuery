// Page Color Change Button

var btn = document.getElementById("button");

btn.addEventListener("click", function (event) {
    if(event.target.innerHTML == "ღილაკი") {
        event.target.innerHTML = "დააჭირე";
        event.target.style.backgroundColor = "";
        document.body.setAttribute("style", "background-color: blue !important");
        return;
    }
    event.target.innerHTML = "ღილაკი";
    event.target.style.backgroundColor = "red";
    document.body.setAttribute("style", "background-color: orange !important");
});

// Form with Alert

var form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    var dat = document.querySelectorAll(".input-value");
    var total = "";
    for(y of dat) {
        total += y.value + " ";
    }
    alert("გამარჯობა, " + total);
})

// Hover Name Change

var heading = document.getElementById("xsp");
var yuti = document.getElementById("yuti");

yuti.addEventListener("mouseover", function () {
    heading.innerHTML = "ჟანგი" ;
})

yuti.addEventListener("mouseout", function () {
    heading.innerHTML = "სალამური";
})

// Scroll Arrow Button

var pagetop;
window.addEventListener("scroll", function(){
    pagetop = window.pageYOffset;
    if (pagetop >150) {
        document.getElementById("btn").style.display = "block";
    }
    else if (pagetop <200) {
        document.getElementById("btn").style.display = "none";
    }
})

var knopka = document.getElementById("esari");
knopka.onclick = function() {
    window.scrollTo(0,0);
}

// Delete Items Button

var dButton = document.getElementById("washla");
var addButton = document.getElementById("damateba");

var mainDiv = document.getElementById("main-div");

dButton.onclick = function () {
    var allP = document.querySelectorAll("#main-div p");
    var last = allP.length - 1;
    if (last == 0) {
        alert("მართლა შლი?");
    }
    allP[last].remove(); 
    
}

// Add Items Button

var base = document.body.scrollHeight;

addButton.onclick = function () {
    var allP = document.querySelectorAll("#main-div p");

    var insideText = document.createTextNode("პარაგრაფი " + (allP.length+1));
    var pCreate = document.createElement("p");

    pCreate.appendChild(insideText);
    mainDiv.appendChild(pCreate);

    var actual = document.body.scrollHeight - base;
    var scroll = window.pageYOffset + actual;
    window.scrollTo(0,scroll);
}

// Number Input Form
var numberForm = document.getElementById("numberform");

numberForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputV = document.getElementById("fontgive").value;
    var inputN = Number(inputV);
    if (inputN > 5 && inputN < 200) {
        document.getElementById("fonttake").setAttribute("style", `font-size: ${inputN}px !important`);
    }
    else {
        alert("წესიერად! 6-დან 200-მდე");
    }
})


// Hover For Circle
var hoverDiv = document.getElementById("hoverdiv");

hoverDiv.addEventListener("mouseover", function(e){
    hoverDiv.classList.add("big");
})
hoverDiv.addEventListener("mouseout", function(e){
    hoverDiv.classList.remove("big");
})


// Slideshow
var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
var currentImage = 0;
var nextButton = document.getElementById("nextB");
var previousButton = document.getElementById("previousB");

nextButton.onclick = function(e){ 
    e.preventDefault();
    currentImage++;
    currentImage = currentImage % images.length;
    document.getElementById("myimage").setAttribute("src", images[currentImage]);
    document.getElementById("imageNumber").innerHTML = currentImage+1;
}

previousButton.onclick = function(e){
    e.preventDefault();
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length-1;
    }
    document.getElementById("myimage").setAttribute("src", images[currentImage]);
    document.getElementById("imageNumber").innerHTML = currentImage+1;
}

// Slideshow 2 advanced
var currentImage1 = 0;
var nextButton1 = document.getElementById("next1");
var previousButton1 = document.getElementById("previous1");
var content = document.getElementById("content");

function swapSlide (o) {
    var newSlide = document.createElement("img");
    newSlide.src = images[currentImage1];
    newSlide.className = "fadeinimg";
    content.appendChild(newSlide);
    if (content.children.length > 2) {
        content.removeChild(content.children[0]);
    }
}

nextButton1.addEventListener("click", function (e) {
    e.preventDefault();
    currentImage1 ++;
    if (currentImage1 > images.length-1) {
        currentImage1 = 0;
    }
    swapSlide();
   
})

previousButton1.addEventListener("click", function (e) {
    e.preventDefault();
    currentImage1 --;
    if (currentImage1 < 0) {
        currentImage1 = images.length-1;
    }
    swapSlide();
})

// Distance Converter
document.getElementById("convert").addEventListener("submit", function(e) {
    e.preventDefault();
    var distance = parseFloat(document.getElementById("distance").value);
    var measureType = document.getElementById("measure").value;
    var measureTypeTo = document.getElementById("measure-to").value;
    var answerOutput = document.getElementById("answer");
    if(distance) {
        if (measureType == "kilometers" && measureType !== measureTypeTo) {
            var answer = (distance / 1.609344).toFixed(3);
            answerOutput.innerHTML =`<h2>${distance} ${measureType} converts to ${answer} ${measureTypeTo}</h2>`;
            answerOutput.childNodes[0].className = "text-danger";
        }
        else if(measureType == "miles" && measureType !== measureTypeTo) {
            var answer = (distance * 1.609344).toFixed(3);
            answerOutput.innerHTML =`<h2>${distance} ${measureType} converts to ${answer} ${measureTypeTo}</h2>`;
            answerOutput.childNodes[0].className = "text-danger";
        }
        else if (measureType === measureTypeTo) {
            answerOutput.innerHTML =`<h2>${distance} ${measureType} converts to ${distance} ${measureTypeTo}</h2>`;
            answerOutput.childNodes[0].className = "text-danger";
        }
    }
    else {
        alert("not a number");
    }
})

// Vacation destination
var destinationForm = document.getElementById("d-form");
var firstCard = document.getElementById("first-button");
firstCard.addEventListener("click", function(e) {
    e.target.parentElement.parentElement.parentElement.remove();
})

var destButton = document.getElementById("btn-add");
destinationForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var destName = document.getElementById("dest").value;
    var destLocation = document.getElementById("location").value;
    var destPhoto = document.getElementById("photo").value;
    var destDescription = document.getElementById("description").value;
    
    var cardPlace = document.getElementById("cards");
    var createDiv = document.createElement("div");
    createDiv.className = "col-6 mt-5 d-flex flex-column align-items-center";
    createDiv.innerHTML =
    `
    <h4 class="text-light mb-3">
        Enter Destination Details
    </h4>
    <div class="card bg-light">
        <img src="${destPhoto}" class="m-2">
        <div class="card-body">
            <h4>${destName}</h4>
            <h5>${destLocation}</h5>
            <p class="card-text text-dark">${destDescription}</p>
            <button class="btn btn-danger card-btn-remove">Remove</button>
        </div>
    </div>
    `
    cardPlace.appendChild(createDiv);

    var allCards = document.querySelectorAll(".card-btn-remove");
    for (x of allCards) {
        x.addEventListener("click", function(e) {
            e.target.parentElement.parentElement.parentElement.remove();
        })
    }

    for (let i = 0; i < this.length-1; i++) {
        this[i].value = "";
    }
})