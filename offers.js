
const offers = [
  {
    title: "KFC Chicken Bucket",
    description: "Get a free 6-piece KFC bucket after a short survey.",
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/47/chicken-1847090_1280.jpg",
    link: "https://singingfiles.com/show.php?l=0&u=2376751&id=68776"
  },
  {
    title: "McDonald's Big Mac Combo",
    description: "Enjoy a Big Mac combo meal for free today!",
    image: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    link: "https://singingfiles.com/show.php?l=0&u=2376751&id=68777"
  },
  {
    title: "Wendy's Free Frosty",
    description: "Claim a cold Frosty treat at no cost!",
    image: "https://cdn.pixabay.com/photo/2017/02/27/23/50/ice-cream-2102654_1280.jpg",
    link: "https://singingfiles.com/show.php?l=0&u=2376751&id=67722"
  },
  {
    title: "Taco Bell Cravings Box",
    description: "Score a free box packed with Taco Bell goodness!",
    image: "https://cdn.pixabay.com/photo/2021/11/02/01/26/tacos-6761400_1280.jpg",
    link: "https://singingfiles.com/show.php?l=0&u=2376751&id=68544"
  },
  {
    title: "Popeyes Chicken Sandwich",
    description: "Claim the famous sandwich – no purchase required.",
    image: "https://cdn.pixabay.com/photo/2020/05/17/00/45/chicken-burger-5179423_1280.jpg",
    link: "https://singingfiles.com/show.php?l=0&u=2376751&id=67673"
  },
  {
    title: "Burger King Whopper Deal",
    description: "Get a free Whopper – limited time only!",
    image: "https://cdn.pixabay.com/photo/2018/06/18/16/05/fast-food-3482749_1280.jpg",
    link: "https://singingfiles.com/show.php?l=0&u=2376751&id=69233"
  }
];

const grid = document.getElementById('offersGrid');

offers.forEach(offer => {
  const card = document.createElement('div');
  card.className = 'bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105';

  card.innerHTML = `
    <div class="w-full aspect-[4/3] bg-black flex items-center justify-center">
      <img src="${offer.image}" alt="${offer.title}" class="max-h-full max-w-full object-contain" />
    </div>
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-1">${offer.title}</h2>
      <p class="text-gray-300 text-sm mb-4">${offer.description}</p>
      <a href="${offer.link}" target="_blank" rel="noopener noreferrer"
         class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded text-sm">
        Claim Offer
      </a>
    </div>
  `;

  grid.appendChild(card);
});
