export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    // better solution that filter - recalculates only when changed
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    created() {
            /* eslint-disable no-console */
            console.log('Mixin created.');
            /* eslint-enable no-console */
    }
}