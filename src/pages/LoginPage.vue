<template>
    <section class="loginFormContainer">
        <h1>Connexion</h1>
        <FormComponent :data="formData"/>
        <p>Pas encore de compte ? 
            <a href="">Inscrivez-vous</a>
        </p>
    </section>
</template>

<script setup lang="ts">
    import { ref, reactive } from "vue"
    import FormComponent from '../components/FormComponent.vue';

    const formData = reactive({
        fields: [
            { 
                id: 'email', 
                label: 'Email',
                placeholder: 'Entrez votre email', 
                type: 'email', 
                class: '' 
            },
            { 
                id: 'password', 
                label: 'Mot de passe',
                placeholder: 'Entrez votre mot de passe', 
                type: 'password', 
                class: '' 
            }
        ],
        buttons: [
            { 
                id: 'loginButton',
                textContent: 'Se connecter', 
                type: 'submit', 
                class: '' 
            },
            { 
                id: 'resetButton',
                textContent: 'Réinitialiser', 
                type: 'reset', 
                class: '' 
            }
        ]
    })
</script>

<style>
    .loginFormContainer {
        display: flex;
        flex-direction: column;
        width: 30vw;
        padding: 50px;
        gap: 25px;
        background-color: rgb(250, 250, 250);
        border-radius: 20px;
    }

    .loginFormContainer h1 {
        text-align: center;
        margin: 0;
    }

    .loginFormContainer form {
        display: flex;
        flex-direction: column;
        margin: 0;
        gap: 10px;
    }

    .loginFormContainer form article {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .loginFormContainer form article label {
        font-weight: 500;
    }

    .loginFormContainer form article input {
        border: 1px solid #f5f5f5;
        border-radius: 10px;
        padding: 10px;
        resize: vertical;
    }

    .loginFormContainer button {
        margin-top: 20px;
    }

    .loginFormContainer #resetButton {
        margin-top: 0px;
        background-color: transparent;
        color: black;
    }

    .loginFormContainer > p {
        margin: 0;
        font-weight: 300;
    }
    .loginFormContainer p > a {
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-thickness: 1px;
    }
</style>