function createNode(element) {
    return document.createElement(element);
}

var data = 'https://api.myjson.com/bins/12vg0m';

fetch(data)
    .then(onDataFetched)
    .catch(onDataFetchFailed);

function onDataFetched(response) {
    response.json()
        .then(onConversionToJsonSuccessful)
        .catch(onConversionToJsonFailed);
}

function onDataFetchFailed(error) {
    // console.log("I have failed in life.", error);
}

function onConversionToJsonSuccessful(json) {
    // console.log("success!!!!", json);
    data = json;
    books = data.books;
    changeText();

}

function onConversionToJsonFailed(error) {
    // console.log("Not a json mate!", error);
}

//function createarray(books) {
//    console.log(books);
//    for (var i = 0; i < books.length; i++) {
//        var img1 = new Image;
//        img1.src = books[i].cover;
//        var frontPage = document.getElementById("front");
//        frontPage.appendChild(img1).classList.add("mypictures");
//
//    }
//}

function changeText() {

    for (var i = 0; i < books.length; i++) {

        var fliperContainer = document.createElement('div');

        fliperContainer.classList.add('flip-container');
        fliperContainer.setAttribute('ontouchstart', 'this.classList.toggle("hover");');
        fliperContainer.setAttribute('data-title', books[i].title)
        
        var flipper = document.createElement('div');
        flipper.classList.add('flipper');
        var front = document.createElement('div');
        front.classList.add('front');
        var back = document.createElement('ul');
        back.classList.add('back');

        var img = new Image;
        img.classList.add('images');
        //        var details = document.createElement('div').classList.add('details');
        //        details =books[i].detail;
        //        back.appendChild(details);
        //img.setAttribute('class', 'col-xl-4 col-lg-4 col-md-4');
        img.src = books[i].cover;
        var title = document.createElement('p');
        title.innerHTML = books[i].title;
     
        
        var description = document.createElement('p');
        description.innerHTML = books[i].description;
        var button = document.createElement('button');
        var info = document.createTextNode("More Info");
        
//        button.classList.add('images');
        button.setAttribute('href', books[i].detail);
        button.setAttribute('data-fancybox', 'gallery');

        button.appendChild(info);

        front.appendChild(img);
        back.append(title);
        back.append(description);
        back.append(button);

        flipper.appendChild(front);
        flipper.appendChild(back);
        fliperContainer.appendChild(flipper);
        document.getElementById('allbooks').appendChild(fliperContainer);
    
        }
    }

var searchBar = document.forms['filterbox'].querySelector('#myInput');
searchBar.addEventListener("keyup", function(e){
    //e-event object ; target.value - value of input field (text) - transform to lower case to match the search when comparing
    
    var term = e.target.value.toLowerCase();
    books.forEach(function(book){
        
        var bookInHTML = document.querySelector('[data-title="'+ book.title+'"]');
        // console.log(bookInHTML);
        if(book.title.toLowerCase().indexOf(term) != -1){
            bookInHTML.style.display="block";
        } else{
            bookInHTML.style.display="none";
        }
    })
})
//function displayTitle() {
//    for (var i = 0; i < books.length; i++) {
//        var image = new Image;
//        img.src = books[i].detail;
//        var title = books[i].title;
//        var description = books[i].description;
//        var info = document.createElement('button').innerHTML = "More Info";
//        info.classList.add("button");
//    }
//    img.appendChild("title");
//    img.appendChild("description");
//    img.appendChild("info");
//}
//
//
////function getBackImage() {
//    for (var i = 0; i < books.length; i++) {
//        let li = createNode('li'),
//            img = createNode('img'),
//            span = createNode('span');
//        button = document.createElement("button").innerHTML = "More Info";
//        var description = books[i].description;
//        img.src = books[i].detail;
//        span.innerHTML = books[i].title;
//        li.appendChild(img);
//        li.appendChild(span);


//
//    }
//}
