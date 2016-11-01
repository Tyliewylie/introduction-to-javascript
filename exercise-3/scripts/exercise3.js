(function(){
    var name = 'Elisabeth';
    var age = 27;
    var favoriteFood = ['Pizza', 'Indian', 'Chocolate'];

    var favoriteMovies = [
      { name: 'The Fifth Element', credits: {director: 'Luc Besson', star: 'Bruce Willis'}},
      { name: 'Pride and Prejudice', credits: {director: 'no clue', star: 'Keira Knightley'}},
      { name: 'Wall-E', credits: {director: 'moo', star: 'EVE'}} ]

  //document.querySelector('p').innerHTML = stringy;

  function presentMyself() {
    var stringy = 'Hello, my name is ' + name + '. I\'m ' + age +
    ' years old and my favorite movies are ';
   for (var i = favoriteMovies.length-1; i >= 0; i--) {
      stringy += favoriteMovies[i].name + ' which is directed by ' + favoriteMovies[i].credits.director + ' and stars ' + favoriteMovies[i].credits.star;
      if (i > favoriteMovies.length-1) {
        stringy += ', ';
      }
      else {
        stringy += '.';
      }
     }
    document.querySelector('p').innerHTML = stringy;
}

presentMyself();

//document.querySelector('p').innerHTML = stringy;


})();
