<template>
    <div class="container mt-5">
        <div class="row g-3">
            <div class="col-md-4" v-for="post in posts" :key="post.id">
                <CardPost  :post="post" />
            </div>
        </div>     
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';
import CardPost from '../components/posts/CardPost.vue'
export default {
    components:{
        CardPost
    },
    setup() {
        const posts = ref([])
        function getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    // handle success
                    posts.value = response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        getPosts()
        return {posts}
    }
}
</script>

<style>
    
</style>