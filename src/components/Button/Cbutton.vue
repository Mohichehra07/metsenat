<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        defolt: 'primary'
    },
    title: {
        type: String,
        required: true
    }
})
const buttonColor = computed(() => {
    switch (props.variant) {
        case 'user':
                return 'text-[13px] py-1 px-1 pl-5 bg-[#F1F1F3] rounded-md  font-bold flex items-center gap-6'
        case 'filter':
            return 'py-[10px] px-[33px] bg-[#EDF1FD] rounded-[5px] text-[14px] font-medium text-[#3365FC] w-fit flex items-center gap-[10px]'
    }
})
</script>

<template>
 <div>
  <div :class="buttonColor">
    <slot name="prefix"></slot>
    <button @click="$emit('onSubmit')">
        {{ title }}
    </button>
    <slot name="suffix"></slot>
  </div>
 </div>
</template>

<style scoped>

</style>