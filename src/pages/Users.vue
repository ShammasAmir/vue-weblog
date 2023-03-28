<template>
    <div class="container mt-5">
        <div class="row g-3">
            <div v-if="loading" class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div v-else class="col-md-4" v-for="user in users" :key="user.id">
                <CardUser :user="user" />
            </div>
        </div>     
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';
import CardUser from '../components/users/CardUser.vue'
export default {
    components:{
        CardUser
    },
    setup() {
        const users = ref([])
        const loading = ref(true)
        function getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    // handle success
                    users.value = response.data;
                    loading.value = false
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        getUsers()
        return {users}
    }
}
</script>

<style></style>