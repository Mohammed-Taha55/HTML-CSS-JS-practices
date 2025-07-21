let movies = [
    {title : "movie a", rating: [4,5,3]},
    {title : "movie b", rating: [5,5,4]},
    {title : "movie c", rating: [3,4,2]},
];

let ratings = movies.map((movie) => {
    let total = movie.rating.reduce((sum,rate) => sum + rate,0)
    let average = total / movie.rating.length
    return {title: movie.title,rating: average.toFixed(2)}
})
console.log(ratings);
[{title: "movie a", rating: 3.3},{}]