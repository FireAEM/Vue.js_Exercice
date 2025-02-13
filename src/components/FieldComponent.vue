<template>
    <article>
        <label v-bind:for="data.id">{{ data.label }}</label>
        <input 
            v-bind:type="data.type ? data.type : 'text'"
            v-bind:id="data.id"
            v-bind:placeholder="data.placeholder"
            v-bind:class="'input ' + (data.class ? data.class : '')"
        >
    </article>
</template>

<script setup lang="ts">
    interface FieldComponentProperties {
        data: {
            id: string,
            label: string,
            placeholder: string,
            type?: string,
            class?: string
        }
    }

    defineProps<FieldComponentProperties>()
</script>