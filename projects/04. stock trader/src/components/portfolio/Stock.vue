<template>
    <div class="col-sm-6 col-md-4 mt-3">
        <div class="card">
            <div class="card-header text-white bg-info">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} || Quantity: {{ stock.quantity }} )</small>
            </div>
            <div class="card-body">
                <div class="input-group">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model="quantity"
                        :class="{ 'border-danger': insufficientQuantity }"
                        >
                    <div class="input-group-append">
                        <button 
                            class="btn btn-outline-secondary" 
                            type="button" 
                            @click="sellMyStock"
                            :disabled="insufficientQuantity || this.quantity <= 0 || !Number.isInteger(Number(quantity))"
                            >
                            {{ insufficientQuantity ? "Not enough Stocks" : "Sell" }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.stock.quantity < this.quantity;
        }
    },
    methods: {
        ...mapActions([
            'sellStock'
        ]),
        sellMyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.sellStock(order);
            this.quantity = 0;
        }
    }
}
</script>