const createMalCard = (
  userName,
  imagePNG,
  daysWatched,
  meanScore,
  completed,
  episodesWatched
) => {
  const malCardContainer = document.createElement('div');
  malCardContainer.classList.add('malCard-container');

  const profileIMGcontainer = document.createElement('div');
  profileIMGcontainer.classList.add('profile-img');
  malCardContainer.appendChild(profileIMGcontainer);

  const profileIMG = document.createElement('img');
  if (imagePNG == null) {
    profileIMG.src = 'https://cdn.myanimelist.net/images/kaomoji_mal_white.png';
  } else {
    profileIMG.src = imagePNG;
  }

  profileIMG.alt = 'user-profile';
  profileIMGcontainer.appendChild(profileIMG);

  const contents = document.createElement('div');
  contents.classList.add('contents');
  malCardContainer.appendChild(contents);

  const userNames = document.createElement('h2');
  userNames.classList.add('userName');
  userNames.innerHTML = `${userName}<br /><span class="daysWatched">${daysWatched} days anime watcher!</span>`;
  contents.appendChild(userNames);

  const data = document.createElement('div');
  data.classList.add('data');
  contents.appendChild(data);

  const animeCompleted = document.createElement('p');
  animeCompleted.textContent = `Animes completed: ${completed}`;
  data.appendChild(animeCompleted);

  const episodesWatcheds = document.createElement('p');
  episodesWatcheds.textContent = `Episodes watched: ${episodesWatched}`;
  data.appendChild(episodesWatcheds);

  const meanScores = document.createElement('p');
  meanScores.textContent = `Mean Score: ${meanScore}`;
  data.appendChild(meanScores);

  return malCardContainer; // Return the created card container
};

export { createMalCard };
