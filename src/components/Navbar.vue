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
          lg:flex lg:flex-row lg:bg-warmGray-800 lg:items-center
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
              <h1>LOGO</h1>
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
                  lg:py-5 lg:text-warmGray-100
                  text-warmGray-900
                  hover:text-cyan-800
                "
                >Home</router-link
              >
            </div>
            <div @click="isOpen = false">
              <router-link
                link
                to="/article"
                class="
                  block
                  px-4
                  py-2
                  lg:py-5 lg:text-warmGray-100
                  text-warmGray-900
                  hover:text-cyan-800
                "
                >Article</router-link
              >
            </div>
            <div @click="isOpen = false">
              <router-link
                link
                to="/contact"
                class="
                  block
                  px-4
                  py-2
                  lg:py-5 lg:text-warmGray-100
                  text-warmGray-900
                  hover:text-cyan-800
                "
                >Contact</router-link
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
            <router-link
              to="/login"
              class="
                block
                justify-end
                py-2
                lg:py-5 lg:text-warmGray-100
                text-warmGray-900
                hover:text-cyan-800
              "
              >Login</router-link
            >
          </div>
        </div>
      </div>
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
