import { ref } from 'vue';

export const coffees = ref([
        {
            Brand: "Starbucks",
            Name: "Colombian",
            Roast: "M",
            Rating: "7",
            buyAgain: false,
        },
    ]);

const useCoffees = () => {
    const testfun = (brand, cname, roast, rating) => {
        coffees.value.push({
            Brand: brand.toUpperCase(),
            Name: cname,
            Roast: roast.toUpperCase(),
            Rating: rating,
            buyAgain: false,
        });
        console.table(coffees.value);
    };
    return {
        coffees,
        testfun,
    }
};
export default useCoffees;