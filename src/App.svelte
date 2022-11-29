<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import tailwindLogo from './assets/tailwind.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main class="min-h-screen bg-stone-100 pb-12">
  <div class="relative h-96 overflow-hidden">
    <img
      class="absolute inset-0 h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80"
      alt=""
    />
    <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
    <div class="absolute inset-0 bg-gradient-to-b from-black opacity-50" />
  </div>
  <div class="relative mx-auto -mt-24 flex w-[730px] flex-col space-y-6">
    <header class="relative h-[269px]  w-full rounded-lg border bg-white shadow-sm">
      <div id="avatar-wrapper" class="absolute -mt-6 flex h-14 w-full justify-center">
        <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black">
          <svg class="h-6 w-6" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.56507 12.5651C3.27885 11.8513 4.41277 11.8137 5.17077 12.4524L5.29349 12.5651L15.4349 22.7065C16.1884 23.4599 16.1884 24.6815 15.4349 25.4349C14.7211 26.1487 13.5872 26.1863 12.8292 25.5476L12.7065 25.4349L2.56507 15.2935C1.81164 14.5401 1.81164 13.3185 2.56507 12.5651Z"
              fill="#444444"
            />
            <path
              d="M23.1895 1.48026C24.1961 0.484496 25.8963 1.13971 25.9955 2.50572L26 2.63183V13.3682C26 14.2676 25.2629 14.9967 24.3536 14.9967C23.4857 14.9967 22.7746 14.3324 22.7118 13.4897L22.7073 13.3682L22.707 6.56306L14.6642 14.5197C13.6575 15.5155 11.9573 14.8603 11.8582 13.4943L11.8536 13.3682L11.8533 6.56306L3.81051 14.5197C3.20141 15.1223 2.23377 15.154 1.58693 14.6149L1.48221 14.5197C0.873103 13.9172 0.841045 12.96 1.38603 12.3202L1.48221 12.2166L12.3358 1.48026C13.3425 0.484496 15.0427 1.13971 15.1418 2.50572L15.1464 2.63183L15.1461 9.43585L23.1895 1.48026Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="mt-14 flex flex-col text-center">
        <div class="flex flex-col space-y-3">
          <h1 class="text-4xl font-bold">Phillip's Baked Goods</h1>
          <p class="font-serif text-lg text-stone-600">
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </p>
        </div>
      </div>
      <div class="mt-10 flex items-center justify-between px-12 pb-12">
        <button
          type="button"
          class="inline-flex h-12 items-center rounded-full border border-transparent bg-amzl-blue-500 px-6 py-3 text-base font-medium text-white  hover:bg-amzl-blue-600 focus:outline-none"
          >Place an order
        </button>
        <label
          class="flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-full border-2 border-stone-200 "
          type="button"
          aria-label="Like"
        >
          <input type="checkbox" class="peer sr-only" name="favorite" id="" />
          <svg
            class="h-5 w-5 text-stone-300 peer-checked:text-amzl-orange-400"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </label>
      </div>
    </header>
    <div class="flex w-full flex-col space-y-9 rounded-lg border bg-white py-12 shadow-sm">
      <div class="grid grid-flow-col gap-4 divide-x">
        <div class="flex flex-col pl-12">
          <h2 class="font-sans text-3xl font-semibold text-stone-700">$89,914</h2>
          <p class="font-serif text-lg text-stone-500">of $100,000 backed</p>
        </div>
        <div class="flex flex-col pl-12">
          <h2 class="font-sans text-3xl font-semibold text-stone-700">5,007</h2>
          <p class="font-serif text-lg text-stone-500">total backers</p>
        </div>
        <div class="flex flex-col pl-12">
          <h2 class="font-sans text-3xl font-semibold text-stone-700">56</h2>
          <p class="font-serif text-lg text-stone-500">days left</p>
        </div>
      </div>
      <div class="w-full px-12">
        <div class="relative h-4 w-full rounded-full bg-stone-200 ">
          <div class="h-full w-7/12 rounded-full bg-amzl-blue-400" />
        </div>
      </div>
    </div>
    <div class="border-stone-2 flex flex-col space-y-10 rounded-lg border bg-white p-12 shadow-sm">
      <div class="flex flex-col space-y-8">
        <h3 class="font-sans text-lg font-medium">Available Products</h3>
        <div class="flex flex-col space-y-6 font-serif text-base leading-normal text-stone-400">
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
            screen to a more comfortable viewing height. Placing your monitor at eye level has the
            potential to improve your posture and make you more comfortable while at work, helping
            you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
            your computer to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
        </div>
      </div>
      <div class="flex flex-col space-y-6">
        <div class="flex flex-col space-y-6 rounded-lg border-2 border-zinc-200 p-8">
          <div class="flex items-center justify-between">
            <h4 class="font-sans text-lg font-bold text-stone-800">Bamboo Stand</h4>
            <span class="font-serif text-base font-normal text-amzl-blue-300"
              >Pledge $25 or more</span
            >
          </div>
          <p class="font-serif text-base leading-normal text-stone-500">
            You get an ergonomic stand made of natural bamboo. You've helped us launch our
            promotional campaign, and you’ll be added to a special Backer member list.
          </p>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2.5">
              <span class="font-sans text-xl font-bold text-zinc-600">101</span>
              <span class="font-serif text-base text-stone-400">left</span>
            </div>
            <button
              type="button"
              class="inline-flex h-12 items-center rounded-full border border-transparent bg-amzl-blue-500 px-6 py-3 text-base font-medium text-white  hover:bg-amzl-blue-600 focus:outline-none"
              >select
            </button>
          </div>
        </div>
        <div class="flex flex-col space-y-6 rounded-lg border-2 border-zinc-200 p-8">
          <div class="flex items-center justify-between">
            <h4 class="font-sans text-lg font-bold text-stone-800">Black Edition Stand</h4>
            <span class="font-serif text-base font-normal text-amzl-blue-300"
              >Pledge $75 or more</span
            >
          </div>
          <p class="font-serif text-base leading-normal text-stone-500">
            You get a Black Special Edition computer stand and a personal thank you. You’ll be added
            to our Backer member list. Shipping is included.
          </p>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2.5">
              <span class="font-sans text-xl font-bold text-zinc-600">64</span>
              <span class="font-serif text-base text-stone-400">left</span>
            </div>
            <button
              type="button"
              class="inline-flex h-12 items-center rounded-full border border-transparent bg-amzl-blue-500 px-6 py-3 text-base font-medium text-white  hover:bg-amzl-blue-600 focus:outline-none"
              >select
            </button>
          </div>
        </div>
        <div class="flex flex-col space-y-6 rounded-lg border-2 border-zinc-100 p-8">
          <div class="flex items-center justify-between">
            <h4 class="font-sans text-lg font-bold text-stone-400">Mahogany Special Edition</h4>
            <span class="font-serif text-base font-normal text-amzl-blue-200"
              >Pledge $200 or more</span
            >
          </div>
          <p class="font-serif text-base leading-normal text-stone-300">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
            You’ll be added to our Backer member list. Shipping is included.
          </p>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2.5">
              <span class="font-sans text-xl font-bold text-zinc-400">0</span>
              <span class="font-serif text-base text-stone-400">left</span>
            </div>
            <button
              disabled
              type="button"
              class="inline-flex h-12 items-center rounded-full border border-transparent bg-stone-400 px-6 py-3 text-base font-medium text-white   focus:outline-none"
              >out of stock
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
