<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VUE-WEBLOG</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/posts">Posts</router-link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
  .router-link-active{
    color: black !important;
    border-bottom: 2px solid black !important;
  }
</style>