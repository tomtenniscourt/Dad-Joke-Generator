const algoliasearch = require("algoliasearch");
const axios = require("axios");

const client = algoliasearch("YourApplicationID", "YourAdminAPIKey");
const index = client.initIndex("Jokes");

async function fetchAndUploadJokes() {
  try {
    for (let i = 0; i < 10; i++) {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });

      const joke = response.data.joke;
      const jokeID = response.data.id;

      await index.saveObject({
        objectID: jokeID,
        joke: joke,
      });

      console.log(`Uploaded joke: ${joke}`);
    }

    console.log("All jokes uploaded to Algolia!");
  } catch (error) {
    console.error("Error fetching or uploading jokes:", error);
  }
}

fetchAndUploadJokes();
