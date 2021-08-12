<template>
  <div
    class="w-full leading-relaxed items-center py-10 bg-warmGray-100 lg:px-96"
  >
    <h1 class="text-center font-lato font-extrabold text-2xl">
      Selamat Datang
    </h1>
    <div class="p-5 m-5 border rounded-lg bg-warmGray-50">
      <form action="">
        <div class="mb-5">
          <label class="block mb-2 text-sm">Email</label>
          <input
            type="email"
            class="
              w-full
              rounded-lg
              border-warmGray-200
              shadow-sm
              transition
              duration-200
              focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500
            "
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm">Password</label>
          <input
            type="password"
            class="
              w-full
              rounded-lg
              border-warmGray-200
              shadow-sm
              transition
              duration-200
              focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500
            "
          />
        </div>
        <button
          class="
            w-full
            bg-cyan-500
            p-2
            rounded-lg
            hover:bg-cyan-700
            focus:outline-none focus:ring focus:ring-cyan-300
            text-warmGray-50
            mt-2
          "
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
