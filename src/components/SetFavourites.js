function startFavourite() {
  if (localStorage.getItem("favouritesList") === null) {
    const startArray = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ];
    localStorage.setItem("favouritesList", JSON.stringify(startArray));
  }
  console.log(JSON.parse(localStorage.getItem("favouritesList")));
}

export default startFavourite;
