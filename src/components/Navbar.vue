<template>
  <div
    class="
      w-full
      bg-gradient-to-br
      from-warmGray-900
      to-warmGray-700
      lg:bg-warmGray-800 lg:bg-blend-hue
    "
  >
    <div id="app">
      <div
        class="
          flex flex-col
          lg:flex lg:flex-row
          lg:bg-warmGray-800
          lg:items-center
        "
      >
        <div
          class="
            flex
            items-center
            justify-between
            px-4
            py-3
            lg:py-0
            border-b border-warmGray-700
            lg:border-b-0
          "
        >
          <div class="lg:static">
            <a href="#" class="uppercase font-semibold text-white">
              <img class="h-8" src="./images/white.png" />
            </a>
          </div>
          <div>
            <button
              class="focus:outline-none text-white block lg:hidden"
              @click.stop="showMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  :class="!isOpen ? 'block' : 'hidden'"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    :class="isOpen ? 'block' : 'hidden'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </svg>
            </button>
          </div>
        </div>
        <div
          :class="isOpen ? 'block' : 'hidden'"
          class="
            lg:flex
            flex-col
            lg:flex-row
            justify-between
            w-full
            lg:py-0
            bg-warmGray-100
            lg:bg-warmGray-800
          "
        >
          <div
            class="
              flex flex-col
              lg:flex-row
              divide-y divide-warmGray-600
              text-lg
            "
          >
            <div @click="isOpen = false">
              <router-link
                link
                to="/"
                class="
                  block
                  px-4
                  py-2
                  lg:py-5
                  lg:text-warmGray-100
                  text-warmGray-900
                  hover:text-cyan-800
                "
                >Home</router-link
              >
            </div>
            <div @click="show" @mouseover="down" @mouseleave="up">
              <a
                href="#"
                class="
                  flex flex-row
                  px-4
                  py-2
                  lg:py-5
                  lg:text-warmGray-100
                  text-warmGray-900
                  hover:text-cyan-800
                  items-center
                "
              >
                Artikel
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mx-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <div
                @click="isOpen = false"
                v-show="isVisible"
                class="
                  w-full
                  lg:flex
                  lg:text-cyan-50
                  normal-case
                  font-semibold
                  px-5
                "
              >
                <div class="flex lg:px-10 py-3 lg:w-full lg:flex-row lg:hidden">
                  <ul class="w-1/2 lg:px-5">
                    <li class="mb-3">
                      <a href="#" class="flex group items-center">
                        <img class="h-8 font" src="./images/kali.svg" />
                        <span class="ml-2">
                          <span
                            class="
                              block
                              uppercase
                              font-extrabold
                              group-hover:text-cyan-800
                            "
                            >Kali Linux</span
                          >
                          <span
                            class="
                              block
                              text-sm
                              font-extralight
                              group-hover:text-cyan-800
                            "
                            >Belajar tentang Kali Linux</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="mb-3 items-center">
                      <a href="#" class="flex group items-center">
                        <img class="h-7 ml-2" src="./images/v.svg" />
                        <span class="ml-3">
                          <span
                            class="
                              block
                              uppercase
                              font-bold
                              group-hover:text-cyan-800
                            "
                            >Ethical Hacking</span
                          >
                          <span
                            class="
                              block
                              text-sm
                              font-extralight
                              group-hover:text-cyan-800
                            "
                            >Belajar tentang Etichal Hacking</span
                          >
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul class="w-1/2">
                    <li class="mb-3">
                      <a href="#" class="flex group items-center">
                        <img class="h-7 ml-2" src="./images/vuejs.svg" />
                        <span class="ml-2">
                          <span
                            class="
                              block
                              uppercase
                              font-bold
                              group-hover:text-cyan-800
                            "
                            >Vue.Js</span
                          >
                          <span
                            class="
                              block
                              text-sm
                              font-extralight
                              group-hover:text-cyan-800
                            "
                            >Belajar tentang Vue.js</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="#" class="flex group items-center">
                        <img class="h-7 ml-2" src="./images/linux.svg" />
                        <span class="ml-2">
                          <span
                            class="
                              block
                              uppercase
                              font-bold
                              group-hover:text-cyan-800
                            "
                            >Laravel</span
                          >
                          <span
                            class="
                              block
                              text-sm
                              font-extralight
                              group-hover:text-cyan-800
                            "
                            >Belajar tentang Laravel</span
                          >
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="lg:block"
              @click="tampil"
              @mouseover="down2"
              @mouseleave="up2"
            >
              <a
                href="#"
                class="
                  flex flex-row
                  px-4
                  py-2
                  lg:py-5
                  items-center
                  lg:text-warmGray-100
                  text-warmGray-900
                  hover:text-cyan-800
                "
                >About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mx-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <div
                @click="isOpen = false"
                v-show="isShow"
                class="w-full lg:text-cyan-50 normal-case font-semibold px-5"
              >
                <div class="flex lg:px-10 py-3 lg:hidden">
                  <ul class="w-full lg:px-5">
                    <li>
                      <router-link
                        link
                        to="biodata"
                        class="flex group items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span class="px-2">
                          <span
                            class="
                              block
                              uppercase
                              font-bold
                              group-hover:text-cyan-800
                            "
                            >Profil</span
                          >
                          <span
                            class="
                              block
                              text-sm
                              font-extralight
                              group-hover:text-cyan-800
                            "
                            >Biodata</span
                          >
                        </span>
                      </router-link>
                    </li>
                  </ul>
                  <ul class="w-full">
                    <li>
                      <a href="#" class="flex group items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 group-hover:text-cyan-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span class="px-2">
                          <span
                            class="
                              block
                              uppercase
                              font-bold
                              group-hover:text-cyan-800
                            "
                            >Info
                          </span>
                          <span
                            class="
                              block
                              text-sm
                              font-extralight
                              group-hover:text-cyan-800
                            "
                            >Info lainya</span
                          >
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div @click="isOpen = false">
              <a
                href="#"
                class="
                  block
                  px-4
                  py-2
                  lg:py-5
                  lg:text-warmGray-100
                  text-warmGray-900
                  hover:text-cyan-800
                "
                >Gallery</a
              >
            </div>
          </div>
          <div
            class="
              flex flex-col
              lg:flex-row
              divide-y divide-warmGray-600
              px-5
              text-lg
              border-t border-warmGray-700
            "
            @click="isOpen = false"
          >
            <a
              href="#"
              class="
                block
                justify-end
                py-2
                lg:py-5
                lg:text-warmGray-100
                text-warmGray-900
                hover:text-cyan-800
              "
              >Login</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      @click="isOpen = false"
      v-show="dropdown"
      :class="dropdown ? 'block' : 'hidden'"
      class="w-full lg:flex lg:text-cyan-50 normal-case font-semibold px-5"
    >
      <div class="flex lg:px-10 py-3 lg:w-full lg:flex lg:flex-row">
        <ul class="w-1/2 lg:px-5">
          <li class="mb-3">
            <a href="#" class="flex group items-center">
              <img class="h-8 font" src="./images/kali.svg" />
              <span class="ml-2">
                <span
                  class="
                    block
                    uppercase
                    font-extrabold
                    group-hover:text-cyan-800
                  "
                  >Kali Linux</span
                >
                <span
                  class="
                    block
                    text-sm
                    font-extralight
                    group-hover:text-cyan-800
                  "
                  >Belajar tentang Kali Linux</span
                >
              </span>
            </a>
          </li>
          <li class="mb-3 items-center">
            <a href="#" class="flex group items-center">
              <img class="h-7 ml-2" src="./images/v.svg" />
              <span class="ml-3">
                <span
                  class="block uppercase font-bold group-hover:text-cyan-800"
                  >Ethical Hacking</span
                >
                <span
                  class="
                    block
                    text-sm
                    font-extralight
                    group-hover:text-cyan-800
                  "
                  >Belajar tentang Etichal Hacking</span
                >
              </span>
            </a>
          </li>
        </ul>
        <ul class="w-1/2">
          <li class="mb-3">
            <a href="#" class="flex group items-center">
              <img class="h-7 ml-2" src="./images/vuejs.svg" />
              <span class="ml-2">
                <span
                  class="block uppercase font-bold group-hover:text-cyan-800"
                  >Vue.Js</span
                >
                <span
                  class="
                    block
                    text-sm
                    font-extralight
                    group-hover:text-cyan-800
                  "
                  >Belajar tentang Vue.js</span
                >
              </span>
            </a>
          </li>
          <li class="mb-3">
            <a href="#" class="flex group items-center">
              <img class="h-7 ml-2" src="./images/linux.svg" />
              <span class="ml-2">
                <span
                  class="block uppercase font-bold group-hover:text-cyan-800"
                  >Laravel</span
                >
                <span
                  class="
                    block
                    text-sm
                    font-extralight
                    group-hover:text-cyan-800
                  "
                  >Belajar tentang Laravel</span
                >
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      @click="isOpen = false"
      v-show="dropdown2"
      :class="dropdown2 ? 'block' : 'hidden'"
      class="w-full lg:text-cyan-50 normal-case font-semibold px-5"
    >
      <div class="flex lg:px-10 py-3">
        <ul class="w-full lg:px-5">
          <li>
            <router-link link to="biodata" class="flex group items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="px-2">
                <span
                  class="block uppercase font-bold group-hover:text-cyan-800"
                  >Profil</span
                >
                <span
                  class="
                    block
                    text-sm
                    font-extralight
                    group-hover:text-cyan-800
                  "
                  >Biodata</span
                >
              </span>
            </router-link>
          </li>
        </ul>
        <ul class="w-full">
          <li>
            <a href="#" class="flex group items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 group-hover:text-cyan-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span class="px-2">
                <span
                  class="block uppercase font-bold group-hover:text-cyan-800"
                  >Info
                </span>
                <span
                  class="
                    block
                    text-sm
                    font-extralight
                    group-hover:text-cyan-800
                  "
                  >Info lainya</span
                >
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex lg:px-10 items-center">
      <div class="w-full h-full text-center relative pl-5">
        <p
          class="text-xs md:text-lg font-merienda text-warmGray-50 text-center"
        >
          it's Enought...!!!
        </p>
        <p
          class="
            w-full
            text-lg
            md:text-5xl
            font-extrabold font-lato
            bg-gradient-to-tl
            from-warmGray-50
            to-warmGray-50
            inline
            text-transparent
            bg-clip-text
            items-center
            justify-between
            px-3
          "
        >
          Apapun jadi mudah dengan
          <b
            class="
              lg:text-5xl
              font-extrabold font-merienda
              bg-rose-500
              inline-block
              text-transparent
              bg-clip-text
            "
            >LINUX
          </b>
        </p>
      </div>
      <img
        class="
          mix-blend-darken
          relative
          inset-0
          max-h-48 max-w-screen-sm
          pr-5
          lg:pr-10
          object-cover
          outline-none
        "
        src="./images/teguh.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setIsOpen: false,
      isOpen: false,
      isVisible: false,
      isShow: false,
      dropdown: false,
      dropdown2: false,
    };
  },
  methods: {
    showMenu() {
      this.isOpen = !this.isOpen;
    },
    show() {
      this.isVisible = !this.isVisible;
    },
    hide() {
      this.isVisible = false;
    },
    tampil() {
      this.isShow = !this.isShow;
    },
    sembunyi() {
      this.isShow = false;
    },
    down() {
      this.dropdown = true;
    },
    up() {
      this.dropdown = false;
    },
    down2() {
      this.dropdown2 = true;
    },
    up2() {
      this.dropdown2 = false;
    },
  },
};
</script>
