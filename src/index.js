function displayProduct(response) {
  new Typewriter("#product", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateProduct(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "96t4883dea40738f8c4oe83b37b0ab90";
  let context =
    "You are an expert in describing anti-aging, health and wellness products. Please give me 6 lines in your description. I want 6 lines only ";
  let prompt = `Generate product description about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayProduct);
}

let productFormElement = document.querySelector("#product-generator-form");
productFormElement.addEventListener("submit", generateProduct);
