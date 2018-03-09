

//////Word Animation///////

var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Hi dear User.',
      'Welcome to the best dating website .',
      'Coders Dating',
      'Have Fuuuuun.'
    ];
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));



////////////////////////////////////////////////////////////////////////////////////
// MY DATA MODEL 
////////////////////////////////////////////////////////////////////////////////////
/////////////// Content /////////

class person{

    constructor(image, name, surename, age, gender, like, LIKEimage ) {
    this.image = image;
    this.name = name;
    this.surename = surename;
    this.age = age;
    this.gender = gender;
    this.like = like;
    this.LIKEimage = LIKEimage;
    
  }


 // we define a method in the Media class
render() {
    let msg = `
    <figure class="snip1336">
      <div class="photo"><img src = "${this.image}"></div>
        <figcaption>
          <p><strong>Name:</strong> ${this.name}</p> 
          <p><strong>Surname:</strong> ${this.surename}</p>
          <p><strong>Age:</strong> ${this.age}</p>
          <p><strong>Gender:</strong> ${this.gender}</p>
        
        <button id="clickme" onclick="document.getElementById('clickme').innerHTML=();">like</button>
          <img id = "hearth" src = "${this.LIKEimage}"></p>

          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
        <figcaption>
      </figure>
        `;      
        
    return msg;
  }

}


class Female extends person{
// new constructor
  constructor(image, name, surename, age, gender, like, LIKEimage) {

    super(image, name, surename, age, gender, like, LIKEimage);
    this.gender = gender;
}


// overwrite parent class method
render() {
    let msg = `
    <figure class="snip1336">
      <div class="photo"><img src = "${this.image}"></div>
        <figcaption>
          <p><strong>Name:</strong> ${this.name}</p> 
          <p><strong>Surname:</strong> ${this.surename}</p>
          <p><strong>Age:</strong> ${this.age}</p>
          <p><strong>Gender:</strong> ${this.gender}</p>
        
        <button id="clickme" onclick="document.getElementById('clickme').innerHTML=();">like</button>
          <img id = "hearth" src = "${this.LIKEimage}"></p>

          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
        <figcaption>
      </figure>
        `;      
        
    return msg;
  }

}


class Male extends person {
// new constructor
  constructor(image, name, surename, age, gender, like, LIKEimage) {

    super(image, name, surename, age, gender, like, LIKEimage); // calling parent constructor
    this.gender = gender;
}


// overwrite parent class method
render() {
    let msg = `
     <figure class="snip1336">
      <div class="photo"><img src = "${this.image}"></div>
        <figcaption>
          <p><strong>Name:</strong> ${this.name}</p> 
          <p><strong>Surname:</strong> ${this.surename}</p>
          <p><strong>Age:</strong> ${this.age}</p>
          <p><strong>Gender:</strong> ${this.gender}</p>
        
        <button id="clickme" onclick="document.getElementById('clickme').innerHTML=();">like</button>
          <img id = "hearth" src = "${this.LIKEimage}"></p>

          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
        <figcaption>
      </figure>
        `;      
        
    return msg;
  }

}



var data = [
  new Male("img/boy1.jpg", "John", "Doe", 36, "Male", 0, "img/like.png"),
  new Female("img/foto2.jpg", "Sara", "Bruk", 36, "Female", 0, "img/like.png"),
  new Male("img/foto6.jpg", "Norman", "Rock", 36, "Male", 0, "img/like.png"),
  new Female("img/foto5.jpg", "Maxima", "Miu", 36, "Female", 0, "img/like.png"),

  new Male("img/male1.jpg", "Horsti", "Hahn", 22, "Male", 0, "img/like.png"),
  new Male("img/male2.jpg", "Gertschi", "Baum", 40, "Male", 0, "img/like.png"),
  new Female("img/female1.jpg", "Mati", "Muh", 26, "Female", 0, "img/like.png"),
  new Female("img/female2.jpg", "Sabi", "Babi", 28, "Female", 0, "img/like.png"),
  new Male("img/male3.jpg", "Wolfgang", "Cif", 32, "Male", 0, "img/like.png"),
  new Male("img/male4.jpg", "Chris", "Koch", 26, "Male", 0, "img/like.png"),
  new Male("img/male5.jpg", "Fabio", "Brz", 24, "Male", 0, "img/like.png"),

  new Female("img/female4.jpg", "Zuzu", "Mumu", 42, "Female", 0, "img/like.png"),
  new Male("img/male6.jpg", "Andi", "Kreuz", 42, "Male", 0, "img/like.png"),
  new Female("img/female5.jpg", "Edith", "Vando", 29, "Female", 0, "img/like.png"),
  new Male("img/male7.jpg", "Alex", "Fuschs", 23, "Male", 0, "img/like.png"),
  new Female("img/female6.jpg", "Sila", "Yeto", 26, "Female", 0, "img/like.png"),
  new Male("img/male9.jpg", "Talha", "dfhg", 27, "Male", 0, "img/like.png"),
  new Male("img/male10.jpg", "Hüsn", "Temo", 19, "Female", 0, "img/like.png"),
  new Female("img/female7.jpg", "Ebru", "Don", 18, "Female", 0, "img/like.png"),
  new Male("img/male8.jpg", "Matti", "Freud", 39, "Male", 0, "img/like.png"),

  new Female("img/female10.jpg", "Sladi", "Morki", 22, "Female", 0, "img/like.png"),
  new Female("img/female9.jpg", "Romi", "Gru", 38, "Female", 0, "img/like.png"),
  new Male("img/male11.jpg", "Orco", "Vuri", 19, "Male", 0, "img/like.png"),
  new Male("img/male12.jpg", "Tarek", "Düzo", 24, "Male", 0, "img/like.png"),
  new Female("img/female13.jpg", "Alice", "SChoko", 41, "Female", 0, "img/like.png"),
  new Female("img/female12.jpg", "Monika", "Benodi", 25, "Female", 0, "img/like.png"),

];


////////////////////////////////////////////////////////////////////////////////////
// MY VIEW MODEL
////////////////////////////////////////////////////////////////////////////////////

function showAll() {
  let bigList = document.getElementById("bigList");
  for (var i = 0; i < data.length; i++) {
    bigList.innerHTML += data[i].render();
  }
}

  //Function to show only Female

function showFemale() {
  let bigList = document.getElementById("bigList");
  for (var i = 0; i < data.length; i++) {
    
    if (data[i].constructor.name == "Female") {
      bigList.innerHTML += data[i].render();
    } 
  }
}

  //Function to show only Male
    
function showMale() {
  let bigList = document.getElementById("bigList");
  for (var i = 0; i < data.length; i++) {
    
    if (data[i].constructor.name == "Male") {
      bigList.innerHTML += data[i].render();
    }
  }
}
