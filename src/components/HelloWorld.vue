<script setup>

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-2xl">{{ msg }}</h1>
</template>


<script setup>
defineProps({
    title: {String},
    color: {String},
  textColor: { String, default: "text-white" },
    hover:{String}
});
const handleClick = () => {
  console.log("Bouton cliqué !");
  console.log(process.env.ANALYTICS_ID);
};

</script>
<template>
  <button @click="handleClick" :class="`h-12 py-auto px-4 rounded-2xl ${color} hover:ring-current	`">
    <p :class="`text-base font-bold ${textColor}`">{{ title }}</p>
  </button>
</template>


