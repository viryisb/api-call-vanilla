const aplication = document.querySelector('.container');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const p = document.createElement('p');
      p.innerHTML = user.name;
      aplication.appendChild(p);
    });
  })
  .catch((err) => console.log(err));
