import { fetchData } from './fetchData';

const generateCard = () => {
  const generateBtn = document.querySelector('.generate-output');

  generateBtn.addEventListener('click', () => {
    fetchData();
  });
};

export default generateCard;
