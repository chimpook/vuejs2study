export const computedMixin = {
    computed: {
        fence() {
            return (string) => {return '| ' + string.split('').join(' | ') + ' |'};
        }
    }
};