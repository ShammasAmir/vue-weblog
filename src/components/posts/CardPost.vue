<template>
    <div class="card">
        <div class="card-header">
            post id : {{post.id}}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">post title : {{post.title}}</li>
            <li class="list-group-item">post body : {{post.body}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            post:Object
        }
    }
</script>

<style></style>