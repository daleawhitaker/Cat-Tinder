async function getNewCatPicture() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search", {
    method: "GET",
    mode: "cors",
    headers: {
      "x-api-key": "d9593f92-844b-4da6-927c-be2c91756c9d"
    }
  });
  let responseObject = await response.json();
  // Get the URL of the first cat picture
  return responseObject[0].url;
}

export { getNewCatPicture };
