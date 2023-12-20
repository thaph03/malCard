import { createMalCard } from './createMalCard';

const userInput = document.querySelector('.username-input');
const malCard = document.querySelector('.malCard');

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/users/${userInput.value}/full`
    );
    malCard.innerHTML = '';
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();

    // Work with the data
    const userData = JSON.stringify(data);
    const parsedUserData = JSON.parse(userData);
    const userName = parsedUserData.data.username;
    const imagePNG = parsedUserData.data.images.jpg.image_url;
    const daysWatched = parsedUserData.data.statistics.anime.days_watched;
    const meanScore = parsedUserData.data.statistics.anime.mean_score;
    const completed = parsedUserData.data.statistics.anime.completed;
    const episodesWatched =
      parsedUserData.data.statistics.anime.episodes_watched;

   
    const generateCard = createMalCard(
      userName,
      imagePNG,
      daysWatched,
      meanScore,
      completed,
      episodesWatched
    );

    malCard.appendChild(generateCard);
  } catch (error) {
    // Handle errors
    malCard.innerHTML = 'Please make sure have put the correct username!';
  }
};

export { fetchData };
