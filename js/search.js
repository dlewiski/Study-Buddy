function termFinder(cardsArray, termSearch) {
  for (var i = 0; i < cardsArray.length; i++){
    var searchArray = [];
    if (cardsArray[i] === termSearch) {
      searchArray.push(cardsArray[i]);
    }
  }
  return searchArray;
}
