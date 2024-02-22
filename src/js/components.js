const body = document.querySelector("body")
const header =`
<header class="bg-white px-7 py-5 fixed w-[100%] z-10 max-sm:px-0">
<div
  class="container max-w-[1184px] mx-auto flex items-center justify-between relative"
>
  <div class="flex w-[295px] items-center gap-x-[75px]">




    <div class="dropdown max-lg:hidden">
      <button class="langugeRu dropdown-toggle menu-items gap-2">
        <span class="item-icon">
          <img src="./img/language.png" alt="rus" />
        </span>
        <span class="item-txt"> Русский </span>
        <img class="w-5" src="./img/down.svg" alt="down" />
      </button>
      <div class="dropdown-menu">
        <button class="menu-item hover:bg-rose-100">
          <img class="w-5" src="./img/language.png" alt="rus" />
          <p class="text">Русский</p>
        </button>
        <button class="menu-item hover:bg-rose-100">
          <img class="w-5" src="./img/eng.jpg" alt="eng" />
          Eng
        </button>
        <button class="menu-item hover:bg-rose-100">
        <img class="w-5" src="./img/uzb.webp" alt="uzb" />
          Uzb
        </button>
      </div>
    </div>
    

    <div class="flex items-center gap-1 ml-3">
      <img src="./img/phone.png" alt="phone" />
      <a class="tel max-[800px]:hidden" href="tel:+998973883127"
        >+998 94 333 05 60</a
      >
    </div>
  </div>

  <a href="./product.html">
    <img
      class="absolute top-0 left-[50%] -translate-x-[50%] p-3 bg-white rounded-xl max-lg:w-32"
      src="./img/logo.png"
      alt="logo777"
    />
  </a>

  <div class="flex items-center gap-8">
    <div class="flex items-center gap-2">
      <img src="./img/heart.png" alt="heart" />
      <p class="max-md:hidden">Избранные</p>
    </div>
    <button
      class="exitBtn flex items-center gap-2 bg-logo-grey px-6 py-2.5 rounded-lg"
    >
      <p class="max-md:hidden">Войти</p>
      <img src="./img/login-04.png" alt="login" />
    </button>
  </div>
</div>

<div class="modal hidden">
  <div
    class="max-w-[379px] mx-auto bg-white p-5 rounded-lg relative"
  >
    <button class="close absolute right-5 top-5 hover:bg-logo-grey duration-500 rounded-md "><img class="w-6 h-6" src="./img/x.svg" alt="cloce" /></button>
    <div class="mb-7">
      <h3 class="text-2xl font-bold mb-2">Добро пожаловать!</h3>
      <p class="text-sm font-medium text-bordercolor">
        Войти в систему чтобы торговать в системе
      </p>
    </div>

    <div>
      <p class="text-sm font-medium text-productcolor mb-2">
        Логин
      </p>
      <input
        class="login_input placeholder:text-bordercolor bg-[#F0F3F7] w-full p-3"
        type="text"
        placeholder="Введите логин"
      />
    </div>

    <div class="mt-4">
      <p class="text-sm font-medium text-productcolor mb-2">
        Пароль
      </p>
      <input
        class="pasword_input placeholder:text-bordercolor bg-[#F0F3F7] w-full p-3 rounded-lg"
        type="text"
        placeholder="Введите Пароль"
        type="number"
      />
      <a href="#" class="text-blue text-xs mt-2 hover:text-black"
        >Забыли пароль?</a
      >
    </div>

    <div class="mt-11">

    <div class="about_me"></div>

      <button class="start private_btn">Войти</button>
      <p class="text-bordercolor text-xs w-[152px] mx-auto my-3">
        Хотите стать продавцом ?
      </p>
      <button class="secondary_btn">Подать заявку</button>
    </div>
  </div>
</div>
</header>
` 


const footer = `
<footer
class="bg-white mt-5 py-10 flex flex-col items-center relative bg-[url('./img/limp.png')] bg-center"
>

<img
  class="w-[115px] -mt-18 absolute -top-8"
  src="./img/logo.png"
  alt="logo777"
/>
<p
  class="text-base font-bold max-w-[670px] flex items-center text-center mb-6 max-[740px]:text-xs"
>
  Тот 77.uz marketplace - это виртуальная платформа в Узбекистане, которая
  облегчает покупки и продажи, связывая продавцов с потенциальными
  клиентами.
</p>
<div
  class="flex-y-center gap-16 flex-wrap max-sm:gap-3 max-[423px]:gap-16"
>
  <a
    href="#"
    class="flex-y-center gap-1 mx-auto text-xl font-semibold max-[740px]:text-xs"
  >
    <img src="./img/symbol.png" alt="symbol" /> Доска объявлений</a
  >
  <a
    href="#"
    class="flex-y-center gap-1 mx-auto text-xl font-semibold max-[740px]:text-xs"
  >
    <img src="./img/symbol.png" alt="symbol" />Условия пользования</a
  >
  <a
    href="tel:973883127"
    class="flex-y-center gap-1 text-xl mx-auto font-semibold max-[740px]:text-xs"
  >
    <img src="./img/symbol.png" alt="symbol" />+998 88 500 50 00</a
  >
</div>
</footer>
`

body.insertAdjacentHTML('beforebegin', header)
body.insertAdjacentHTML('beforeend', footer)