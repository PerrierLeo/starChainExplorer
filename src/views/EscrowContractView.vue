<script setup lang="ts">
// import { Alchemy, Network } from "alchemy-sdk";
// import { ref, onMounted, computed } from 'vue'
// import Block from "../models/block.model"
// import Transaction from "../models/transactions.model"


// const settings = {
//     apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
//     network: Network.ETH_MAINNET,
// }
// const alchemy = new Alchemy(settings);
// let blocks = ref();
// let transactions = ref();

</script>

<template>
    <NavBarComponent></NavBarComponent>
    <div class="flex space-x-2">
        <div class="flex-row  space-y-4 w-1/2">
            <p class="text-white">New Contract</p>
            <Form @submit="onSubmit">
                <div class="space-y-6">
                    <div>
                        <label for="arbiter" class="block text-sm font-medium leading-6 text-white">ARBITER ADDRESS</label>
                        <div class="mt-2">
                            <Field :rules="validateAddress" type="text" name="arbiter" id="arbiter"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="(Ox...)" />
                            <ErrorMessage class="text-red-600 mt-4 text-sm" name="arbiter" />
                        </div>
                    </div>
                    <div>
                        <label for="beneficiary" class="block text-sm font-medium leading-6 text-white">BENEFICIARY ADDRESS</label>
                        <div class="mt-2">
                            <Field :rules="validateAddress" type=" text" name="beneficiary" id="beneficiary"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="(Ox...)" />
                            <ErrorMessage class="text-red-600 mt-4 text-sm" name="beneficiary" />
                        </div>
                    </div>
                    <div>
                        <label for="amount" class="block text-sm font-medium leading-6 text-white">DEPOSIT AMOUNT (IN ETH)</label>
                        <div class="mt-2">
                            <Field :rules="validateAmount" type="number" name="amount" id="amount"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="1" />
                            <ErrorMessage class="text-red-600 mt-4 text-sm" name="amount" />
                        </div>
                    </div>

                </div>
                <button type="submit" class="mt-6 rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">Deploy</button>
            </form>
        </div>
        <!-- <div class="flex-row  space-y-4 w-1/2">
            <p class="text-white">Latest Transactions</p>
            <div v-if="blocks" v-for="transaction in transactions">
                <TransactionComponent :transaction="transaction"></TransactionComponent>
            </div>

        </div> -->
    </div>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { RouterLink } from 'vue-router';
import NavBarComponent from '../components/NavBarComponent.vue';

export default {
    name: "EscrowContractView",
    components: {
        RouterLink,
        NavBarComponent,
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            arbiter: null,
            beneficiary: null,
            amount: null,
        }
    },
    methods: {
        onSubmit(values) {
            console.log(values);
        },
        validateAddress(value) {
            if (!value) {
                return 'This field is required';
            }
            return true;
        },
        validateAmount(value) {
            if (value == null) {
                return 'This field is required';
            } else if (value == 0) {
                return 'The transaction is not free';
            }
            return true;
        },
    }
}
</script>