<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(user,index) in users" v-bind:key="index">{{ user.username }} : {{ user.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: []
            };
        },
        methods: {
            submit() {
                this.$http.post('', this.user)
                        .then(response => {
                            /* eslint-disable no-console */
                            console.log(response);
                            /* eslint-enable no-console */
                        }, error => {
                            /* eslint-disable no-console */
                            console.log(error);
                            /* eslint-enable no-console */
                        });
            },
            fetchData() {
                this.$http.get('')
                        .then(response => {
                            // data - is a promise, we can not use it like this
                            // const data = response.json();
                            /* eslint-disable no-console */
                            // console.log(data);
                            /* eslint-enable no-console */

                            return response.json();
                        }, error => {
                            /* eslint-disable no-console */
                            console.log(error);
                            /* eslint-enable no-console */
                        })
                        // Because data is promise, we have to use "then" again
                        .then(data => {
                            /* eslint-disable no-console */
                            console.log(data);
                            /* eslint-enable no-console */
                            const resultArray = [];
                            for (let key in data) {
                                resultArray.push(data[key]);
                            }
                            this.users = resultArray;
                        });
            }
        }
    }
</script>

<style>
</style>
