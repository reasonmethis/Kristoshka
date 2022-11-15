type Unit = {
    name: string, 
    baseUnit: string,
    nBaseUnits: number
}
type Units = Unit[]

//https://gramstocups.net/1-cup-water-in-grams
const TEASPOON_TO_ML = 4.92892
const ML_TO_TEASPOONS = 1 / TEASPOON_TO_ML
const units: Units = [
    {name: 'US cups', baseUnit: 'teaspoons', nBaseUnits: 48},
    {name: 'tablespoons', baseUnit: 'teaspoons', nBaseUnits: 3},
    {name: 'teaspoons', baseUnit: 'teaspoons', nBaseUnits: 1},
    {name: 'ml', baseUnit: 'teaspoons', nBaseUnits: ML_TO_TEASPOONS},
    {name: 'grams', baseUnit: 'grams', nBaseUnits: 1},
    {name: 'ounces', baseUnit: 'grams', nBaseUnits: 28.3495},
    {name: 'US legal cups', baseUnit: 'teaspoons', nBaseUnits: 240 * ML_TO_TEASPOONS},
    {name: 'imperial cups', baseUnit: 'teaspoons', nBaseUnits: 284.131 * ML_TO_TEASPOONS},
    {name: 'Canadian cups', baseUnit: 'teaspoons', nBaseUnits: 227.30 * ML_TO_TEASPOONS},
]
export default units