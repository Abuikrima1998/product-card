import { comments } from "./comments.js";

console.log(comments);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(function (number) {
  return number >= 5;
});

console.log(filteredNumbers);

const cars = ["BMW", "Toyota", "Audi", "Mercedes", "Honda"];

console.log(cars.includes("BMW"));

function reverseArray(array) {
  return array.reverse();
}

console.log(reverseArray(numbers));
console.log(reverseArray(cars));

const comComments = comments.filter(function (comment) {
  return comment.email.includes(".com");
});

console.log(comComments);

const changedComments = comments.map(function (comment) {
  if (comment.id <= 5) {
    return {
      ...comment,
      postId: 2
    };
  }
  return {
    ...comment,
    postId: 1
  };
});

console.log(changedComments);

const shortComments = comments.map(function (comment) {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(shortComments);

const invalidComments = comments.map(function (comment) {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});

console.log(invalidComments);

const emails = comments.map(function (comment) {
  return comment.email;
});

console.log(emails);

const emailsReduce = comments.reduce(function (result, comment) {
  result.push(comment.email);
  return result;
}, []);

console.log(emailsReduce);

const emailsString = emails.toString();

console.log(emailsString);

const emailsJoined = emails.join(", ");

console.log(emailsJoined);