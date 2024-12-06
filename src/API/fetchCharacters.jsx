import axios from "axios";

const fetchAllCharacters = async () => {
  let allCharacters = [];
  let page = 1;

  try {
    const initialResponse = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const maxPages = initialResponse.data.info.pages;

    allCharacters = initialResponse.data.results;

    const promises = [];
    for (let i = 2; i <= maxPages; i++) {
      promises.push(
        axios.get(`https://rickandmortyapi.com/api/character?page=${i}`)
      );
    }

    const responses = await Promise.all(promises);

    responses.forEach((response) => {
      allCharacters = allCharacters.concat(response.data.results);
    });

    return allCharacters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

export { fetchAllCharacters };