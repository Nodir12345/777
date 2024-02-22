const CategoryList = document.querySelector(".categoryList");

const data = [
  {
    "id": 25,
    "name": "Yangi moshinalar",
    "ads_count": 22,
    "icon": "./img/newcar.png",
    "childs": [
      {
        "id": 40,
        "name": "Samsung"
      },
      {
        "id": 41,
        "name": "IPhone"
      }
    ]
  },
  {
    "id": 19,
    "name": "Ayollar uchun",
    "ads_count": 14,
    "icon": "./img/Image.png",
    "childs": [
      {
        "id": 29,
        "name": "Sumka va chemodanlar"
      },
      {
        "id": 26,
        "name": "Personal hygiene"
      },
      {
        "id": 23,
        "name": "Aksessuarlar",
        "childs": [
          {
            "id": 39,
            "name": "Casio watch i360"
          }
        ]
      },
      {
        "id": 24,
        "name": "Сhancellery"
      },
      {
        "id": 27,
        "name": "Avtotovarlar"
      },
      {
        "id": 32,
        "name": "Go'zallik"
      }
    ]
  },
  {
    "id": 38,
    "name": "Sport va dam olish",
    "ads_count": 6,
    "icon": "./img/sport.png",
    "childs": []
  },
  {
    "id": 37,
    "name": "Elektronika",
    "ads_count": 2,
    "icon": "./img/elekronika.png",
    "childs": [
      {
        "id": 28,
        "name": "Home stuff"
      },
      {
        "id": 42,
        "name": "Noutbuklar"
      }
    ]
  },
  {
    "id": 30,
    "name": "Erkaklar uchun",
    "ads_count": 2,
    "icon": "./img/man.png",
    "childs": [
      {
        "id": 31,
        "name": "Sog'lik"
      },
      {
        "id": 34,
        "name": "Motor transport"
      },
      {
        "id": 33,
        "name": "New cars"
      }
    ]
  },
  {
    "id": 35,
    "name": "Maishiy texnika",
    "ads_count": 1,
    "icon": "./img/mobilephone.png",
    "childs": []
  },
  {
    "id": 36,
    "name": "Salomatlik",
    "ads_count": 5,
    "icon": "./img/health.png",
    "childs": []
  },
  {
    "id": 43,
    "name": "Sport",
    "ads_count": 0,
    "icon": "./img/sport.png",
    "childs": []
  },

  {
    "id": 51,
    "name": "Motosiklar",
    "ads_count": 11,
    "icon": "./img/motosikl.png",
    "childs": []
  }
];

CategoryList.innerHTML = data.map(e => {
  return `
    <article
      class="flex justify-stretch items-center border-solid border-2 border-logo-grey rounded-lg max-w-[340px] h-[95px] pr-3 shadow-inner max-[796]: mx-auto relative pl-11 py-[22px] hover:scale-105 hover:transformShadow duration-700 cursor-pointer"
    >
      <img
        class="absolute -left-[50px] mt-1"
        src="${e.icon || ''}"
        alt="car "
      />
      <div class="flex-center-between gap-10">
        <div class="flex flex-col w-56">
          <h3 class="text-lg font-semibold">${e.name}</h3>
          <p class="text-sm">${e.ads_count} объявлений</p>
        </div>
        <button class="text-2xl font-bold opacity-8">
          <img src="./img/chevron-right.png" alt="right " />
        </button>
      </div>
    </article>
  `;
}).join('');




