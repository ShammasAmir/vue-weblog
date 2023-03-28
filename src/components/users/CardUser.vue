<template>
    <div class="card">
        <div class="card-header">
            full name : {{user.name}}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">username : {{user.username}}</li>
            <li class="list-group-item">phone : {{user.phone}}</li>
            <li class="list-group-item">email : {{user.email}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            user:Object
        }
    }
</script>

<style></style>