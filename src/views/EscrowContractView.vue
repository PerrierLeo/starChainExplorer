<script async setup>
import { Ref, ref } from "vue";
import { ethers } from 'ethers';
import getProvider from "../functions/getProvider";
import deploy from "../functions/deploy";


getProvider().then((value) => {
    provider = value;
    provider.getSigner().then((value) => {
        signer = value;
    });
})

let provider: ethers.BrowserProvider | null = null;
let signer: ethers.JsonRpcSigner | null = null;
let contracts: Ref<object[]> = ref([] as Array<object>);
let mapContracts: Ref<Map<string, any>> = ref(new Map < string, any > ());


async function onSubmit(values: object) {
    console.log(values);
    await newContract(values);
};

function validateAddress(value: any) {
    if (!value) {
        return 'This field is required';
    }
    return true;
};

function validateAmount(value: any) {
    if (value == null) {
        return 'This field is required';
    } else if (value == 0) {
        return 'The transaction is not free';
    }
    return true;
};


async function newContract(values: any) {
    const beneficiary = values.beneficiary;
    const arbiter = values.arbiter;
    const value: bigint = ethers.parseEther(values.amount.toString());
    const escrowContract = await deploy(signer!, arbiter, beneficiary, value);
    const accounts: any = await provider!.send("eth_requestAccounts", []);
    const address: string | undefined = await escrowContract?.getAddress();

    const escrow: any = {
        address: address,
        arbiter,
        beneficiary,
        value: value.toString(),
    };


    mapContracts.value.set("1", escrow);

    escrowContract?.on("Approved", () => {
        escrow.state = "complete";
        escrow.description = "✓ It's been approved!"
    });

    console.log(mapContracts.value.get(arbiter));
}

</script>
<template>
    <NavBarComponent></NavBarComponent>
    <div class="flex justify-between">
        <div class="flex-row  space-y-4 w-1/3">
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
        <div class="flex-row  space-y-4 w-1/2">
            <p class="text-white">Contracts</p>
            <p class="text-white">{{ contracts.length }}</p>

            <div v-for="contract of mapContracts">
                <p class="text-white">{{ contract }}</p>
            </div>

        </div>
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

}
</script>