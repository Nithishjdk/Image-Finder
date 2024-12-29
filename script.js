let image_container = document.getElementById("image_container");
let input = document.getElementById("image_input");
let form = document.querySelector("form");
let apiKey = "f14ZwFhA2PTmOtTVvcQBaJJTkT7cZaqlRx6rjyAH6Fw";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let image_input = input.value;
  console.log(image_input);

  let handle = async () => {
    let data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${image_input}&client_id=${apiKey}`
    );
    image_container.innerHTML = ``;
    let finalData = await data.json();
    finalData.results.forEach((ele) => {
      image_container.innerHTML += `
            <img src=${ele.urls.raw} class="images">
            `;
    });
  };

  handle();
});
