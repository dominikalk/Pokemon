function startFavourite() {
  if (localStorage.getItem("favouritesList") === null) {
    const startArray = [];
    localStorage.setItem("favouritesList", JSON.stringify(startArray));
  }
}

export default startFavourite;
