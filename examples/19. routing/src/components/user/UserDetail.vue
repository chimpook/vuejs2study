<template>
    <div>
        <span>{{ errorMsg }}</span>
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
            :to="link"
            >
            Edit user
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errorMsg: '',
            link: { 
                name: 'userEdit', 
                params: { id: this.$route.params.id }, 
                query: { locale: 'en', q: 100 },
                hash: '#data'
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        // we cannot use this.link here, for example, because instance not created yet
        console.log(to.params.id);
        if (to.params.id == 1) {
            next(false);
        } else if (to.params.id == 2) {
            // but if we need - we can use this:
            next( vm => {
                vm.errorMsg = "Sorry, you don't have the right access to reach the route requested"
            });
        } else {
            next();
        }
    }
}
</script>