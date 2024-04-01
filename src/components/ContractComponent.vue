<script setup>
import { ref } from 'vue'

import Contract from '../models/contract.model';
defineProps({
    contract: Contract,
});
</script>
<template>
    <div class="border-solid border flex justify-between border-sky-500 min-w-0 p-5 rounded-md text-white">
        <div>
            <p class="text-lg">
                <!-- Arbiter: {{ contract.arbiter }} -->
            </p>
            <p class="text-sm">
                <!-- <timeago:datetime="block.date" /> -->
            </p>
        </div>
        <div class="text-right">

        </div>
    </div>
</template>
