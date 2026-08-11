const user = {
  firstName: "Аладдин",
  lastName: "Рзаев",
  email: "aladdin.rzaev1998@gmail.com",
  age: 27,
  country: "Saudi Arabia",
  city: "Medina",
  relationshipStatus: "Married"
};

const car = {
  brand: "BMW",
  model: "X5",
  year: 2019,
  color: "Black",
  transmission: "Automatic"
};
car.owner = user;

function addMaxSpeed(car) {
  if (!car.maxSpeed) {
    car.maxSpeed = 250;
  }
}

addMaxSpeed(car);

function getProperty(object, property) {
  console.log(object[property]);
}

getProperty(car, "model");
getProperty(user, "city");
getProperty(car, "color");

const products = [
  "Milk",
  "Bread",
  "Eggs",
  "Cheese",
  "Rice"
];

const books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    coverColor: "Blue",
    genre: "Fantasy"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    coverColor: "Green",
    genre: "Fantasy"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    coverColor: "Black",
    genre: "Mystery"
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    coverColor: "Red",
    genre: "Dystopian"
  }
];

books.push({
  title: "Dune",
  author: "Frank Herbert",
  year: 1965,
  coverColor: "Orange",
  genre: "Science Fiction"
});

const harryPotterBooks = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 1998,
    coverColor: "Red",
    genre: "Fantasy"
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 1999,
    coverColor: "Blue",
    genre: "Fantasy"
  }, {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    year: 2000,
    coverColor: "Yellow",
    genre: "Fantasy"
  },
];

const allBooks = [...books, ...harryPotterBooks];

function markRareBooks(books) {
  return books.map((book) => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}

const booksWithRareStatus = markRareBooks(allBooks);

console.log(booksWithRareStatus);
console.log(products);
console.log(car);
console.log(books);
