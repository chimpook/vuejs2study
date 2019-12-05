<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!--
        <router-link 
            class="btn btn-success"
            tag="button" :to="'/user/' + $route.params.id + '/edit'"
            >
            Edit user
        </router-link>
        -->
        <router-link 
            class="btn btn-success"
            tag="button" 
            :to="{ name: 'userEdit', params: { id: $route.params.id }}"
            >
            Edit user
        </router-link>
    </div>
</template>