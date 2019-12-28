<template>
    <div class="col-sm-6 col-md-4 mt-3">
        <div class="card">
            <div class="card-header text-white bg-success">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
            </div>
            <div class="card-body">
                <div class="input-group">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                    <div class="input-group-append">
                        <button 
                            class="btn btn-outline-secondary" 
                            type="button" 
                            @click="buyStock"
                            :disabled="this.quantity <= 0 || !Number.isInteger(quantity)"
                            >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            /* eslint-disable no-console */
            console.log(order);
            this.quantity = 0;
        }
    }
}
</script>