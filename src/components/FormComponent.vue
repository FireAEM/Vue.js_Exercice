<template>
    <form>
        <FieldComponent 
            v-for="(field, index) in data.fields"
            :key="index"
            :data="field"
        />

        <ButtonComponent
            v-for="(button, index) in data.buttons"
            :key="index"
            :data="button"
        />
    </form>
</template>

<script setup lang="ts">
    import FieldComponent from './FieldComponent.vue'
    import ButtonComponent from './ButtonComponent.vue'

    interface FormComponentProperties {
        data: {
            fields: Array<{ id: string, label: string, placeholder: string, type?: string, class?: string}>,
            buttons: { id: string, textContent: string, class?: string, type?: 'button' | 'reset' | 'submit'}[]
        }
    }

    defineProps<FormComponentProperties>()
</script>