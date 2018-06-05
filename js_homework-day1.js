// Episode 1
var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//ANSWER Will print my name is Bob

// Episode 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
//ANSWER Will print 3 as the local variable will take over


// Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
//ANSWER Will print 1:Ducks, 2:Dogs, 3:Lions

// Episode 4
var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
//ANSWER Will print Suspect three is: Colin

// Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
//ANSWER Will print Poirot

// Episode 6
var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
//ANSWER Will print Jerry

// Episode 7 - Make up your own episode/s!
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
