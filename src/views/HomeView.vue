<script setup>
import { Alchemy, Network } from "alchemy-sdk";
import { ref, onMounted, computed } from 'vue'
import Block from "../models/block.model"
import Transaction from "../models/transactions.model"


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
    <NavBarComponent></NavBarComponent>
    <div class="flex space-x-2">
        <div class="flex-row  space-y-4 w-1/2">
            <p class="text-white">Latest Blocks</p>
            <div v-if="blocks" v-for="block in blocks">
                <BlockComponent :block="block"></BlockComponent>
            </div>
        </div>
        <div class="flex-row  space-y-4 w-1/2">
            <p class="text-white">Latest Transactions</p>
            <div v-if="blocks" v-for="transaction in transactions">
                <TransactionComponent :transaction="transaction"></TransactionComponent>
            </div>

        </div>
    </div>
</template>

<script>

import { RouterLink } from 'vue-router';
import BlockComponent from "../components/BlockComponent.vue";
import TransactionComponent from "../components/TransactionComponent.vue";
import NavBarComponent from "../components/NavBarComponent.vue";

export default {
    name: "HomeView",
    components: {
        RouterLink
    },
}
</script>