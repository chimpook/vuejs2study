<template>
    <div class="col-sm-6 col-md-4 mt-3">
        <div class="card">
            <div class="card-header text-white bg-success">
                    {{ name }}
                    <small>(Price: {{ price }})</small>
            </div>
            <div class="card-body">
                <div class="input-group">
                    <input type="number" class="form-control" placeholder="Quantity">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        price: Number
    }
}
</script>