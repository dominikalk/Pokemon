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
}

export default startFavourite;
