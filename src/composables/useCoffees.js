import { ref, computed } from 'vue'
import { collection, query, orderBy, onSnapshot, addDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from './useFirebase'
import { async } from '@firebase/util';

export const coffees = ref([]);
export let lnum = 0;
export let mnum = 0;
export let mdnum = 0;
export let dnum = 0;

export let lavg = 0;
export let mavg = 0;
export let mdavg = 0;
export let davg = 0;

let ltotal = 0;
let mtotal = 0;
let mdtotal = 0;
let dtotal = 0;

 const useCoffees = () => {
    const coffeesCollection = collection(db, 'coffees')
    const coffeesQuery = query(coffeesCollection, orderBy('Rating', 'desc'))
    const unsubscribe = onSnapshot(coffeesQuery, querySnapshot => {
        coffees.value = []
        querySnapshot.forEach(doc => {
          coffees.value.push({ id: doc.id, ...doc.data() })
          coffeeStats()
        })
      })

      const sendCoffee = async coffee => {
        await addDoc(coffeesCollection, {
          Brand: coffee.brand,
          Name: coffee.name,
          Roast: coffee.roast,
          Rating: coffee.rating,
          BuyAgain: false,
        })
    }

    const buyAgainStatusT = async id => {
      const coffeeRef = doc(db, "coffees", id);
      await updateDoc(coffeeRef, {
        BuyAgain: true
      })
      console.table(coffees.value)
  };

  const buyAgainStatusF = async id => {
    const coffeeRef = doc(db, "coffees", id);
    await updateDoc(coffeeRef, {
      BuyAgain: false
    })
    console.table(coffees.value)
};

const buyAgain = computed(() => {
  return coffees.value.filter(coffee => coffee.BuyAgain)
})

  const coffeeStats = () => {
    const lightRoasts = computed(() => {
      return coffees.value.filter(coffee => coffee.Roast == 'L')
    })
    const mediumRoasts = computed(() => {
      return coffees.value.filter(coffee => coffee.Roast == 'M')
    })
    const medDarkRoasts = computed(() => {
      return coffees.value.filter(coffee => coffee.Roast == 'MD')
    })
    const darkRoasts = computed(() => {
      return coffees.value.filter(coffee => coffee.Roast == 'D')
    })

    lnum = 0;
    ltotal = 0;
    lightRoasts.value.forEach((coffee) => {
      lnum += 1;
      ltotal += coffee.Rating;
      lavg = ltotal /lnum;
    }) 

    mnum = 0;
    mtotal = 0;
    mediumRoasts.value.forEach((coffee) => {
      mnum += 1;
      mtotal += coffee.Rating;
      mavg = mtotal / mnum;
    }) 

    mdnum = 0;
    mdtotal = 0;
    medDarkRoasts.value.forEach((coffee) => {
      mdnum += 1;
      mdtotal += coffee.Rating;
      mdavg =mdtotal /mdnum;
    }) 

    dnum = 0;
    dtotal = 0;
    darkRoasts.value.forEach((coffee) => {
      dnum += 1;
      dtotal += coffee.Rating;
      davg = dtotal /dnum;
    }) 

  }

      return { coffees, unsubscribe, sendCoffee, buyAgainStatusT, 
        buyAgainStatusF, buyAgain,
        lnum, mnum, mdnum, dnum, lavg, mavg, mdavg, davg }
 }

 export default useCoffees;