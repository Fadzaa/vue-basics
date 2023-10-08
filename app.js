const app = Vue.createApp({
  data() {
    return {
      loginPageUrl: "login.html",
      isShowing: true,
      showMovieText: "Hide Movie",
      mouseOverText: "Mouse Over",
      mouseOffsetX: 0,
      mouseOffsetY: 0,
      movies: [
        {
          img: "assets/avengers-infinity-war.jpeg",
          title: "Avengers Infinity Wars",
          description:
            "Prequel from Avengers Endgame created by Marvel Cinematic Universe.",
          isFavorite: true,
        },
        {
          img: "assets/avengers-endgame.jpg",
          title: "Avengers Endgame",
          description:
            "Last movie from Avengers Series created by Marvel Cinematic Universe.",
          isFavorite: false,
        },
        {
          img: "assets/avengers.jpg",
          title: "Avengers",
          description:
            "First movie from Avengers Series created by Marvel Cinematic Universe.",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    changeTitle() {
      this.title = "Avengers Endgame";
    },
    changeDescription(title, studio) {
      this.description = `Last movie from ${title} Series created by ${studio}. This movie is the last one from the first phase of Marvel Cinematic Universe.`;
    },
    showMovie() {
      this.isShowing = !this.isShowing;
      this.showMovieText = this.isShowing ? "Hide Movie" : "Show Movie";
    },

    mouseOver() {
      this.mouseOverText = "Cursor in The Box";
    },
    mouseLeave() {
      this.mouseOverText = "Mouse Over";
    },
    doubleClick() {
      this.mouseOverText = "Double Click";
      this.mouseOffsetX = 0;
      this.mouseOffsetY = 0;
    },
    mouseMove(event) {
      this.mouseOffsetX = event.offsetX;
      this.mouseOffsetY = event.offsetY;
    },
    toggleFavorite(movie) {
      movie.isFavorite = !movie.isFavorite;
    },
  },

  computed: {
    favoriteMovies() {
      return this.movies.filter((movie) => movie.isFavorite);
    },
    totalFavoriteMovies() {
      return this.favoriteMovies.length;
    },
  },
});

app.mount("#app");
