function generateProduct(event) {
  event.preventDefault();

  new Typewriter("#product", {
    strings: "Products about health and wellness",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let productFormElement = document.querySelector("#product-generator-form");
productFormElement.addEventListener("submit", generateProduct);
