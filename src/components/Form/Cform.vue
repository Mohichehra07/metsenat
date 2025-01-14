<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'primary'
    },
    title: {
        type: String,
        required: true
    }
});

const buttonColor = computed(() => {
    switch (props.variant) {
        case 'search':
            return 'bg-[#E8E8E8] w-[248px] h-[40px] pl-[12px] rounded-[5px] text-[#B1B1B8] text-[15px] flex items-center';
    }
});
</script>

<template>
  <div :class="buttonColor">
    <slot name="prefix"></slot>
    <input type="text" :placeholder="title" class="flex-1 bg-transparent outline-none" />
    <slot name="suffix"></slot>
  </div>
</template>

<style scoped>

</style>
