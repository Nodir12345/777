const data = [
  {
    id: Math.random(),
    img: './img/product1.png',
    city: 'г. Ташкент',
    name: 'Кепки Corneliani Diamond for him edition.',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 2599000,
  },
  {
    id: Math.random(),
    img: './img/product2.png',
    city: 'г. Самарканд',
    name: 'Chevrolet Onix 1.2 Turbo в наличии',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 204000000
  },
  {
    id: Math.random(),
    img: './img/product3.png',
    city: 'г. Ташкент',
    name: '7Saber Trucker Cap',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 280000
  },
  {
    id: Math.random(),
    img: './img/product4.png',
    city: 'г. Ташкент',
    name: 'Оригинальные кроссовки Nike Air Max Plus',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 4820000
  },
  {
    id: Math.random(),
    img: './img/product5.png',
    city: 'г. Ташкент',
    name: 'Оригинальные кроссовки Nike Air Max 97',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 4820000
  },
  {
    id: Math.random(),
    img: './img/product6.png',
    city: 'г. Ташкент',
    name: 'Apple Watch Series 8 - USA Non active',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 4500000
  },
  {
    id: Math.random(),
    img: './img/product7.png',
    city: 'г. Самарканд',
    name: 'Лучший кроссовер Geely Monjaro Limited Edition',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 320000000
  },
  {
    id: Math.random(),
    img: './img/product8.png',
    city: 'г. Ташкент',
    name: 'Стайлер для волос Dyson airwrap complete long',
    date: 'Вчера, 19:20',
    phone: '+998712007007',
    price: 500
  },

]

const productBox = document.querySelector(".productBox")

const products = data.map(el => `
  <article class="bg-white flex flex-col max-w-[278px] rounded-xl mt-8 max-sm:mx-auto max-[600px]:w-48 h-[470px] hover:scale-110 hover:transformShadow duration-700 cursor-pointer">
    <div class="relative">
      <img class="rounded-t-xl" src="${el.img}" alt="car" />
      <button class="Btnheart absolute top-1 left-1">
        <button class="Btnheart absolute top-1 left-1">
          <img src="./img/s.svg" alt="heart" />
        </button>
        <button class="Btnheartblack absolute top-2 left-1.5 w-9 h-9 hidden">
          <img src="./img/heartred.svg" alt="heart" />
        </button>
      </button>
      <button class="Btnheartblack absolute top-1.5 left-1.5 w-8 h-8 hidden">
        <img src="./img/heart_black.png" alt="heart" />
      </button>
    </div>
    <div class="flex flex-col p-5 max-sm:px-2">
      <span class="bg-logo-grey w-20 text-xs px-1 text-textcolor rounded-sm">${el.city}</span>
      <h3 class="text-lg font-semibold my-5 hover:text-blue cursor-pointer duration-200">${el.name}</h3>
      <p class="text-xs px-1 text-textcolor">${el.date}</p>
      <p class="text-sm font-normal text-textcolor mb-4 mt-2">${el.phone}</p>
      <div class="text-2xl font-semibold">
        ${el.price} <span class="text-lg text-blue">uzs</span>
      </div>
    </div>
  </article>
`);

productBox.insertAdjacentHTML("beforeend", products.join(''));
