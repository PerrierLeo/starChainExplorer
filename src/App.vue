<script setup>
import { Alchemy, Network } from "alchemy-sdk";
import { ref, onMounted, computed } from 'vue'
import Block from "./models/block.model"
import Transaction from "./models/transactions.model"



const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
}
const alchemy = new Alchemy(settings);
let blockNumber = ref();
let blocks = ref();
let transactions = ref();

onMounted(async () => {
  let blocksArray = [];
  let transactionsArray = [];
  blockNumber.value = await alchemy.core.getBlockNumber();
  for (let i = blockNumber.value; i > (blockNumber.value - 10); i--) {
    blocksArray.push(new Block(await alchemy.core.getBlock(i)));
  }
  blocks.value = blocksArray;

  transactions.value = await alchemy.core.getAssetTransfers({
    fromBlock: "latest",
    excludeZeroValue: true,
    category: ["erc721", "erc1155"],
    order: "desc",
    maxCount: 10,
    withMetadata: true
  }).then((value) => value.transfers.map((e) => new Transaction(e)));

  console.log(transactions);

  // for (let j = transactionsCount.value; j > (transactionsCount.value - 10); j--) {
  //   transactionsArray.push(await alchemy.core.getTransaction(i));
  // }

  // transactions.value = transactionsArray;
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
    <div class="flex">
      <div class="flex-row  space-y-4 w-1/2">
        <p class="text-white">Latest Blocks</p>
        <div v-if="blocks" v-for="block in blocks">
          <div class="border-solid border flex justify-between border-sky-500 min-w-0 p-5 rounded-md">
            <div>
              <p class="text-white text-lg">
                {{ block.number }}
              </p>
              <p class="text-white text-sm">
                <timeago :datetime="block.date" />
              </p>
            </div>
            <div>
              <p class="text-white text-lg text-right">
                {{ block.transactions.length }} txns
              </p>
              <p class="text-white text-sm">
                <timeago :datetime="block.date" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row  space-y-4 w-1/2">
        <p class="text-white">Latest Transactions</p>
        <div v-if="blocks" v-for="transaction in transactions">
          <div class="border-solid border flex justify-between border-sky-500 min-w-0 p-5 rounded-md">
            <div>
              <p class="text-white text-lg truncate w-12">
                {{ transaction.hash }}
              </p>
              <p class="text-white text-sm">
                <timeago :datetime="transaction.metadata" />
              </p>
            </div>
            <div>
              <p class="text-white text-lg text-right">
                {{ transaction.from }}
              </p>

              <p class="text-white text-sm">
                {{ transaction.to }}
              </p>
            </div>
          </div>
        </div>

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

	