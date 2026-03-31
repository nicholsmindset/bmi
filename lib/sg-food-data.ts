/**
 * Singapore Hawker & Common Food Nutrition Database
 * Sources: HPB Energy & Nutrient Composition of Food (ENCF), Singapore Food Agency,
 * PMC study on 45 common dishes, HPB Healthhub food database.
 * Portions reflect standard hawker servings unless noted.
 */

export interface SGFood {
  name: string;
  calories: number;   // kcal per serving
  protein: number;    // g
  carbs: number;      // g
  fat: number;        // g
  portionNote: string;
  category: SGFoodCategory;
}

export type SGFoodCategory =
  | "rice_noodle"
  | "soup"
  | "bread_pastry"
  | "snack"
  | "drink"
  | "vegetable"
  | "protein";

export const SG_FOODS: SGFood[] = [
  // ── Rice & Noodle Dishes ──────────────────────────────────────────────
  { name: "Chicken Rice (steamed)", calories: 515, protein: 35, carbs: 58, fat: 14, portionNote: "1 plate (~350g)", category: "rice_noodle" },
  { name: "Chicken Rice (roasted)", calories: 545, protein: 36, carbs: 58, fat: 16, portionNote: "1 plate (~350g)", category: "rice_noodle" },
  { name: "Nasi Lemak (with egg & ikan bilis)", calories: 495, protein: 18, carbs: 56, fat: 22, portionNote: "1 pack (~320g)", category: "rice_noodle" },
  { name: "Nasi Lemak (with chicken wing)", calories: 640, protein: 28, carbs: 58, fat: 30, portionNote: "1 pack (~380g)", category: "rice_noodle" },
  { name: "Char Kway Teow", calories: 744, protein: 22, carbs: 90, fat: 32, portionNote: "1 plate (~400g)", category: "rice_noodle" },
  { name: "Hokkien Mee", calories: 640, protein: 28, carbs: 80, fat: 22, portionNote: "1 plate (~400g)", category: "rice_noodle" },
  { name: "Laksa", calories: 589, protein: 26, carbs: 68, fat: 24, portionNote: "1 bowl (~450g)", category: "rice_noodle" },
  { name: "Prawn Mee Soup", calories: 435, protein: 24, carbs: 62, fat: 10, portionNote: "1 bowl (~450g)", category: "rice_noodle" },
  { name: "Bak Chor Mee (dry)", calories: 500, protein: 26, carbs: 68, fat: 14, portionNote: "1 bowl (~350g)", category: "rice_noodle" },
  { name: "Wanton Mee (dry)", calories: 463, protein: 22, carbs: 64, fat: 12, portionNote: "1 bowl (~350g)", category: "rice_noodle" },
  { name: "Fried Rice (plain)", calories: 370, protein: 8, carbs: 62, fat: 10, portionNote: "1 plate (~250g)", category: "rice_noodle" },
  { name: "Fried Rice (with egg)", calories: 420, protein: 12, carbs: 62, fat: 14, portionNote: "1 plate (~280g)", category: "rice_noodle" },
  { name: "Noodle Soup (plain)", calories: 280, protein: 10, carbs: 50, fat: 4, portionNote: "1 bowl (~400g)", category: "rice_noodle" },
  { name: "Economy Rice (2 veg + 1 meat)", calories: 530, protein: 22, carbs: 72, fat: 16, portionNote: "1 plate (~380g)", category: "rice_noodle" },
  { name: "Biryani Rice (chicken)", calories: 680, protein: 32, carbs: 78, fat: 22, portionNote: "1 plate (~400g)", category: "rice_noodle" },
  { name: "Mee Goreng", calories: 620, protein: 20, carbs: 88, fat: 20, portionNote: "1 plate (~380g)", category: "rice_noodle" },
  { name: "Bee Hoon Goreng", calories: 540, protein: 16, carbs: 80, fat: 18, portionNote: "1 plate (~350g)", category: "rice_noodle" },
  { name: "Carrot Cake (white)", calories: 380, protein: 8, carbs: 52, fat: 16, portionNote: "1 plate (~250g)", category: "rice_noodle" },
  { name: "Carrot Cake (black)", calories: 410, protein: 8, carbs: 58, fat: 16, portionNote: "1 plate (~250g)", category: "rice_noodle" },
  { name: "Ipoh Hor Fun", calories: 418, protein: 22, carbs: 58, fat: 10, portionNote: "1 bowl (~400g)", category: "rice_noodle" },

  // ── Soups ─────────────────────────────────────────────────────────────
  { name: "Bak Kut Teh (pork ribs)", calories: 380, protein: 34, carbs: 8, fat: 24, portionNote: "1 bowl + 1 rice", category: "soup" },
  { name: "Fish Soup (sliced fish)", calories: 295, protein: 28, carbs: 24, fat: 8, portionNote: "1 bowl (~400g)", category: "soup" },
  { name: "Fish Soup (with bee hoon)", calories: 395, protein: 28, carbs: 44, fat: 8, portionNote: "1 bowl (~450g)", category: "soup" },
  { name: "Yong Tau Foo (soup, 6 pieces)", calories: 300, protein: 18, carbs: 38, fat: 8, portionNote: "6 pieces + soup", category: "soup" },
  { name: "Yong Tau Foo (dry, 6 pieces)", calories: 340, protein: 18, carbs: 44, fat: 10, portionNote: "6 pieces + noodles", category: "soup" },
  { name: "Wanton Soup", calories: 180, protein: 14, carbs: 22, fat: 4, portionNote: "6 wantons + soup", category: "soup" },
  { name: "Steamboat (mixed, per person)", calories: 450, protein: 32, carbs: 44, fat: 14, portionNote: "estimated 1 person serving", category: "soup" },
  { name: "Soup Kambing (mutton soup)", calories: 310, protein: 30, carbs: 8, fat: 18, portionNote: "1 bowl (~350g)", category: "soup" },

  // ── Bread & Pastries ──────────────────────────────────────────────────
  { name: "Kaya Toast (2 slices)", calories: 240, protein: 6, carbs: 36, fat: 8, portionNote: "2 slices with kaya & butter", category: "bread_pastry" },
  { name: "Roti Prata (plain, 1 piece)", calories: 205, protein: 5, carbs: 30, fat: 8, portionNote: "1 piece plain prata", category: "bread_pastry" },
  { name: "Roti Prata (egg, 1 piece)", calories: 270, protein: 9, carbs: 30, fat: 12, portionNote: "1 piece egg prata", category: "bread_pastry" },
  { name: "Thosai (plain)", calories: 170, protein: 5, carbs: 30, fat: 4, portionNote: "1 piece (~90g)", category: "bread_pastry" },
  { name: "Idli (2 pieces)", calories: 130, protein: 4, carbs: 26, fat: 1, portionNote: "2 pieces with sambar", category: "bread_pastry" },
  { name: "Curry Puff (baked)", calories: 280, protein: 8, carbs: 36, fat: 12, portionNote: "1 large puff (~120g)", category: "bread_pastry" },
  { name: "Popiah (2 rolls)", calories: 340, protein: 14, carbs: 48, fat: 10, portionNote: "2 rolls (~200g)", category: "bread_pastry" },
  { name: "Epok-Epok / Karipap", calories: 220, protein: 6, carbs: 28, fat: 10, portionNote: "1 piece (~90g)", category: "bread_pastry" },

  // ── Snacks & Sides ────────────────────────────────────────────────────
  { name: "Satay (chicken, 6 sticks)", calories: 348, protein: 36, carbs: 24, fat: 10, portionNote: "6 sticks + peanut sauce", category: "snack" },
  { name: "Satay (beef, 6 sticks)", calories: 390, protein: 36, carbs: 24, fat: 14, portionNote: "6 sticks + peanut sauce", category: "snack" },
  { name: "Spring Roll (fried, 1 piece)", calories: 165, protein: 5, carbs: 20, fat: 8, portionNote: "1 piece (~80g)", category: "snack" },
  { name: "Fried Tofu Puffs (6 pieces)", calories: 210, protein: 14, carbs: 6, fat: 16, portionNote: "6 pieces (~120g)", category: "snack" },
  { name: "Otah (1 piece)", calories: 120, protein: 10, carbs: 6, fat: 6, portionNote: "1 piece (~70g)", category: "snack" },
  { name: "Ngoh Hiang (mixed, 1 roll)", calories: 180, protein: 12, carbs: 14, fat: 8, portionNote: "1 roll (~100g)", category: "snack" },
  { name: "Muah Chee (peanut, 1 pack)", calories: 320, protein: 8, carbs: 46, fat: 12, portionNote: "1 small pack (~150g)", category: "snack" },
  { name: "Rojak (fruit)", calories: 210, protein: 4, carbs: 38, fat: 6, portionNote: "1 plate (~250g)", category: "snack" },
  { name: "Ice Kachang", calories: 208, protein: 2, carbs: 50, fat: 1, portionNote: "1 bowl (~350g)", category: "snack" },
  { name: "Chendol", calories: 260, protein: 3, carbs: 56, fat: 5, portionNote: "1 bowl (~350g)", category: "snack" },

  // ── Protein & Sides ───────────────────────────────────────────────────
  { name: "Soft-boiled Eggs (2 eggs)", calories: 130, protein: 12, carbs: 1, fat: 9, portionNote: "2 eggs", category: "protein" },
  { name: "Fried Egg (1)", calories: 100, protein: 7, carbs: 0, fat: 8, portionNote: "1 egg fried in oil", category: "protein" },
  { name: "Grilled Chicken (breast, 100g)", calories: 165, protein: 31, carbs: 0, fat: 4, portionNote: "100g boneless breast", category: "protein" },
  { name: "Char Siu (BBQ pork, 100g)", calories: 280, protein: 22, carbs: 18, fat: 12, portionNote: "100g sliced", category: "protein" },
  { name: "Steamed Fish Fillet (100g)", calories: 105, protein: 22, carbs: 0, fat: 2, portionNote: "100g white fish", category: "protein" },
  { name: "Braised Tofu (100g)", calories: 80, protein: 8, carbs: 4, fat: 4, portionNote: "100g firm tofu braised", category: "protein" },
  { name: "Luncheon Meat (2 slices)", calories: 175, protein: 8, carbs: 4, fat: 14, portionNote: "2 slices (~70g)", category: "protein" },

  // ── Vegetables & Sides ───────────────────────────────────────────────
  { name: "Kangkong (stir-fried)", calories: 80, protein: 4, carbs: 6, fat: 4, portionNote: "1 portion (~150g)", category: "vegetable" },
  { name: "Chai Sim (stir-fried)", calories: 70, protein: 4, carbs: 6, fat: 3, portionNote: "1 portion (~150g)", category: "vegetable" },
  { name: "Tofu (steamed, 100g)", calories: 55, protein: 6, carbs: 2, fat: 3, portionNote: "100g silken/firm", category: "vegetable" },
  { name: "Achar (pickled vegetables)", calories: 55, protein: 1, carbs: 12, fat: 1, portionNote: "1 small serving (~80g)", category: "vegetable" },

  // ── Drinks ────────────────────────────────────────────────────────────
  { name: "Teh (milk tea, unsweetened)", calories: 45, protein: 2, carbs: 5, fat: 2, portionNote: "1 cup (~250ml)", category: "drink" },
  { name: "Teh (regular, with sugar)", calories: 90, protein: 2, carbs: 14, fat: 2, portionNote: "1 cup (~250ml)", category: "drink" },
  { name: "Teh Tarik", calories: 130, protein: 3, carbs: 20, fat: 4, portionNote: "1 cup (~250ml)", category: "drink" },
  { name: "Kopi (black, with sugar)", calories: 50, protein: 0, carbs: 12, fat: 0, portionNote: "1 cup (~200ml)", category: "drink" },
  { name: "Kopi O Kosong (black, no sugar)", calories: 5, protein: 0, carbs: 1, fat: 0, portionNote: "1 cup (~200ml)", category: "drink" },
  { name: "Milo (iced)", calories: 135, protein: 3, carbs: 22, fat: 4, portionNote: "1 cup (~250ml)", category: "drink" },
  { name: "Bandung (rose syrup milk)", calories: 155, protein: 2, carbs: 32, fat: 2, portionNote: "1 glass (~300ml)", category: "drink" },
  { name: "Sugar Cane Juice", calories: 130, protein: 0, carbs: 32, fat: 0, portionNote: "1 cup (~300ml)", category: "drink" },
  { name: "Coconut Water (fresh)", calories: 45, protein: 2, carbs: 9, fat: 0, portionNote: "1 young coconut (~300ml)", category: "drink" },
  { name: "Soya Bean Milk (unsweetened)", calories: 55, protein: 4, carbs: 6, fat: 2, portionNote: "1 cup (~250ml)", category: "drink" },
  { name: "Soya Bean Milk (sweetened)", calories: 110, protein: 4, carbs: 18, fat: 2, portionNote: "1 cup (~250ml)", category: "drink" },
  { name: "Bubble Tea (milk tea, regular sugar)", calories: 350, protein: 4, carbs: 68, fat: 6, portionNote: "1 large cup (~700ml)", category: "drink" },
  { name: "Bubble Tea (fruit tea, regular sugar)", calories: 260, protein: 0, carbs: 64, fat: 0, portionNote: "1 large cup (~700ml)", category: "drink" },
  { name: "100 Plus (isotonic, 1 can)", calories: 70, protein: 0, carbs: 17, fat: 0, portionNote: "1 can (325ml)", category: "drink" },
];

/** Look up foods by category */
export function getFoodsByCategory(category: SGFoodCategory): SGFood[] {
  return SG_FOODS.filter((f) => f.category === category);
}

/** Top hawker dishes by category for protein calculator display */
export const HAWKER_PROTEIN_TABLE = SG_FOODS.filter((f) =>
  [
    "Chicken Rice (steamed)",
    "Fish Soup (sliced fish)",
    "Braised Tofu (100g)",
    "Soft-boiled Eggs (2 eggs)",
    "Satay (chicken, 6 sticks)",
    "Grilled Chicken (breast, 100g)",
    "Bak Kut Teh (pork ribs)",
    "Prawn Mee Soup",
    "Yong Tau Foo (soup, 6 pieces)",
    "Nasi Lemak (with chicken wing)",
    "Laksa",
    "Char Kway Teow",
  ].includes(f.name)
).sort((a, b) => b.protein - a.protein);
