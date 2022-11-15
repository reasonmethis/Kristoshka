//https://www.kingarthurbaking.com/learn/ingredient-weight-chart#:~:text=A%20cup%20of%20all%2Dpurpose,grams%20equivalencies%20for%20common%20ingredients
//All purpose flour, whole wheat flour, bread flour, salt, cocoa powder, baking soda, baking powder, yeast, butter, vegetable shortening, oil, water, white sugar, brown sugar, powdered sugar, corn starch, molasses, corn syrup 
type Food = {
    name: string,
    cup2grams: number,
    cup2calories: number
  }
type Foods = Food[]
const CUP_TO_TSPS = 48
const foods: Foods = [

  {name: "All purpose flour", cup2grams: 125, cup2calories: 455}, //https://www.nutritionix.com/food/all-purpose-flour
  {name: "Whole wheat flour", cup2grams: 120, cup2calories: 408}, //>113 //152: https://www.bobsredmill.com/blog/featured-articles/bobs-red-mill-flour-weight-chart/
  {name: "Bread flour", cup2grams: 137, cup2calories: 495},
  {name: "Sugar (granulated white)", cup2grams: 4.2 * CUP_TO_TSPS, cup2calories: 15 * CUP_TO_TSPS},
  {name: "Sugar (brown, packed)", cup2grams: 220, cup2calories: 836}, //google
  {name: "Sugar (brown, unpacked)", cup2grams: 145, cup2calories: 551}, //google
  {name: "Sugar (powdered, sifted)", cup2grams: 100, cup2calories: 389}, //google
  {name: "Sugar (powdered, unsifted)", cup2grams: 120, cup2calories: 467}, //google
  {name: "Cocoa powder (unsweetened)", cup2grams: 80, cup2calories: 320}, //trader joes, others are 25% or 50% less in calories 
  {name: "Salt", cup2grams: 292, cup2calories: 0},
  {name: "Baking soda", cup2grams: 220.8, cup2calories: 0},
  {name: "Baking powder", cup2grams: 220.8, cup2calories: 115.2},
  {name: "Yeast", cup2grams: 192, cup2calories: 624},
  {name: "Butter", cup2grams: 224, cup2calories: 1632},
  {name: "Oil", cup2grams: 224, cup2calories: 1984},
  {name: "Vegetable shortening", cup2grams: 208, cup2calories: 1840},
  {name: "Corn starch", cup2grams: 128, cup2calories: 488}, //google (usda)
  {name: "Corn syrup (dark)", cup2grams: 328, cup2calories: 937}, //google (usda)
  {name: "Corn syrup (light)", cup2grams: 341, cup2calories: 963}, //google (usda)
  {name: "Molasses", cup2grams: 337, cup2calories: 977}, //google (usda)
  {name: "Water", cup2grams: 236.588, cup2calories: 0},
  ]
export default foods
