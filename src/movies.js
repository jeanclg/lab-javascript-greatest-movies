// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(data) {
  const newList = data.map(function (dir) {
    return dir.director;
  });
  return newList.filter(function (director, index) {
    return newList.indexOf(director) === index;
  });
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(data) {
  const newMovies = data.filter(function (dir) {
    return dir.director === "Steven Spielberg" && dir.genre.includes("Drama");
  });
  return newMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(data) {
  const average = data.reduce(function (total, current, index, sourceArray) {
    if (!current.rate) {
      current.rate = 0;
    }

    if (index === sourceArray.length - 1) {
      total += current.rate;
      return total / sourceArray.length;
    }
    return total + current.rate;
  }, 0);

  return parseFloat(average.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(data) {
  const dramaMovies = data.filter(function (movies) {
    return movies.genre.includes("Drama");
  });

  return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(data) {
  return data
    .map(function (movie) {
      return movie;
    })
    .sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(data) {
  return data
    .map(function (list) {
      return list.title;
    })
    .sort(function (a, b) {
      return a.localeCompare(b);
    })
    .splice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
