<script setup>
import { Alchemy, Network } from "alchemy-sdk";
import { ref, onMounted, computed } from 'vue'
import Block from "./models/block.model"


const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(settings);
let latestBlock = ref();
let block = ref();

onMounted(async () => {
  let blockTagOrHash = "latest"
  latestBlock.value = new Block(await alchemy.core.getBlock(blockTagOrHash));
})

</script>

<template>
  <div class="h-full bg-gradient-to-r from-appMainColor to-black p-5">
    <div class="flex items-center">
      <a href="/">
        <img class='h-36' src="./assets/logo.svg" alt="Vue logo" />
      </a>
      <div>
        <h1 class="text-white text-2xl">BlockChain.io</h1>

      </div>
    </div>
    <div class="inline-block">
      <p class="text-white">Latest</p>

      <div v-if="latestBlock" class="border-solid border border-sky-500 min-w-0 p-5 rounded-md">
        <p class="text-white flex">
          <timeago :datetime="latestBlock.date" />
        </p>
        <p class="text-white flex">
          {{ latestBlock }}
        </p>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  // name: "HomeView",
  components: {

  },
  mounted() {

  },
  data() {

    return {
    }

  },
  methods: {

  },
  computed: {
    // a computed getter

  }
}
</script>

	