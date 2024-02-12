function displayQuote(response) {
  console.log("Quote generated");

  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0028ba044ca06fc2b3teda9ee7f81ob0";
  let prompt = `User's instructions: Generate two inspirational quotes about ${instructionsInput.value}`;
  let context =
    "You are a skilled quote expert and love to write inspirational quotes. Your mission is to generate two random remarquable inspirational quote in basic HTML. Make sure to follow the user's instructions. Do not include a title to the quote. Sign the quote with `SheCodesAI` only in a <br />, <small>, <em> and <strong> element";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote...");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
