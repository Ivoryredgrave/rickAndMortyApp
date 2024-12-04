import axios from "axios";

const todosPersonajes = async (setState) => {
  let allCharacters = [];
  let page = 1;
  let maxPages = 0;

  try {
    let response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    maxPages = response.data.info.pages;

    while (page <= maxPages) {
      allCharacters = allCharacters.concat(response.data.results);
      page++;

      if (page <= maxPages) {
        response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
      }
    }

    setState(allCharacters);
  } catch (error) {
    console.log(error);
  }
};

export { todosPersonajes };
