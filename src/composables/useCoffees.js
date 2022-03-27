import { ref, computed } from 'vue';

export const coffees = ref([]);

const useCoffees = () => {
    const testfun = (brand, cname, roast, rating) => {
        coffees.value.push({
            id: coffees.value.length,
            Brand: brand.toUpperCase(),
            Name: cname,
            Roast: roast.toUpperCase(),
            Rating: rating,
            buyAgain: false,
        });
        console.table(coffees.value);
    };

    const buyAgainStatus = (id) => {
        const coffee = coffees.value.find((coffee) => coffee.id === id);
        coffee.buyAgain = !coffee.buyAgain;
        console.table(coffees.value);
    };

    const buyAgainF = computed(() => {
        return coffees.value.filter(coffee => !coffee.buyAgain)
      })
    
      const buyAgainT = computed(() => {
        return coffees.value.filter(coffee => coffee.buyAgain)
      })
    return {
        coffees,
        testfun,
        buyAgainStatus,
        buyAgainT,
        buyAgainF
    }
};
export default useCoffees;