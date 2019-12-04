<template>
    <ul class="nav nav-pills">
        <!--
        <li role="presentation"><router-link to="/">Home</router-link></li>
        <li role="presentation"><router-link to="/user">User</router-link></li>
        -->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link><!-- Without "exact" it will be a nested behaviour -->
        <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>
    </ul>
</template>