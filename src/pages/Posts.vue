<template>
    <h1>
        This is posts page !
    </h1>
</template>

<script>
import axios from 'axios'
export default {
    setup() {
        function getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        getPosts()
    }
}
</script>

<style>
    
</style>