const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "e83a828ffcd72eb57673071919809e5d",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
