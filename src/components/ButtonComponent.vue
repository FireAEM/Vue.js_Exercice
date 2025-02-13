<template>
    <button 
        v-bind:id="data.id"
        v-bind:type="data.type ? data.type : 'button'"
        v-bind:class="'button' + (data.class ? data.class : '')"
    >{{ data.textContent }}</button>
</template>

<script setup lang="ts">
    interface ButtonComponentProperties {
        data: {
            id: string,
            textContent: string,
            class?: string,
            type?: 'button' | 'reset' | 'submit'
        }
    }

    defineProps<ButtonComponentProperties>()
</script>