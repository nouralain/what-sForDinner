var meals = [
  //Creamy Spaghetti
  {
    mealTitle: "Creamy Spaghetti Carbonara",
    mealDesc: "A classic Italian pasta dish with eggs, cheese, and pancetta",

    ingredient: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],
    nutritions: ["520 kcal", "28g", "62g", "18g", "3g", "680mg"],

    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],

    extend: false,
    level: "Easy",
    country: "Italian",
    mealImage: "images/photo-1612874742237-6526221588e3.jpeg",
    rate: 4.8,
    reviews: `${234} reviews`,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
  },

  //Caprese Sandwich
  {
    mealTitle: "Caprese Sandwich",
    mealDesc: "Fresh Italian sandwich with mozzarella, tomato, and basil",

    ingredient: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],
    nutritions: ["480 kcal", "22g", "48g", "22g", "3g", "680mg"],

    tips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],

    extend: false,
    level: "Easy",
    country: "Italian",
    mealImage: "images/photo-1509722747041-616f39b57569.jpeg",
    rate: 4.5,
    reviews: `${189} reviews`,
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
  },

  //Classic Beef Burger

  {
    mealTitle: "Classic Beef Burger",
    mealDesc: "Juicy homemade burger with all the fixings",
    ingredient: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium..",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    nutritions: ["650 kcal", "38g", "42g", "35g", "2g", "920mg"],

    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],

    extend: false,
    level: "Easy",
    country: "American",
    mealImage: "images/photo-1568901346375-23c9450c58cd.jpeg",
    rate: 4.6,
    reviews: `${421} reviews`,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
  },

  //Mediterranean Quinoa Bowl

  {
    mealTitle: "Mediterranean Quinoa Bowl",
    mealDesc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    ingredient: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],
    nutritions: ["480 kcal", "18g", "58g", "20g", "10g", "540mg"],

    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],

    extend: true,
    level: "Easy",
    country: "Mediterranean",
    mealImage: "images/photo-1546069901-ba9599a7e63c.jpeg",
    rate: 4.5,
    reviews: `${156} reviews`,
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",
  },

  //Thai Green Curry

  {
    mealTitle: "Thai Green Curry",
    mealDesc: "Vibrant and aromatic curry with vegetables and coconut milk",
    ingredient: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutritions: ["480 kcal", "18g", "58g", "20g", "10g", "540mg"],

    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],

    extend: false,
    level: "Easy",
    country: "Mediterranean",
    mealImage: "images/photo-1547592166-23ac45744acd.jpeg",
    rate: 4.5,
    reviews: `${156} reviews`,
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",
  },

  //Beef Tacos

  {
    mealTitle: "Beef Tacos",
    mealDesc: "Flavorful Mexican tacos with seasoned ground beef",
    ingredient: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],
    nutritions: ["450 kcal", "26g", "32g", "20g", "4g", "780mg"],

    tips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],

    extend: false,
    level: "Easy",
    country: "American",
    mealImage: "images/photo-1565299585323-38d6b0865b47.jpeg",
    rate: 4.6,
    reviews: `${278} reviews`,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
  },

  //Lasagna Bolognese

  {
    mealTitle: "Lasagna Bolognese",
    mealDesc: "Layered Italian pasta with rich meat sauce and béchamel",
    ingredient: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],
    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],
    nutritions: ["680 kcal", "42g", "58g", "28g", "6g", "920mg"],

    tips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions",
    ],

    extend: true,
    level: "Intermediate",
    country: "Italian",
    mealImage: "images/photo-1574894709920-11b28e7367e3.jpeg",
    rate: 4.8,
    reviews: `${478} reviews`,
    prepTime: "30 min",
    cookTime: "90 min",
    servings: "4 people",
  },

  //Greek Moussaka

  {
    mealTitle: "Greek Moussaka",
    mealDesc: "Traditional layered eggplant casserole with lamb",
    ingredient: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil",
    ],
    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    ],
    nutritions: ["580 kcal", "36g", "32g", "32g", "8g", "820mg"],

    tips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving",
    ],

    extend: true,
    level: "Intermediate",
    country: "Mediterranean",
    mealImage: "images/photo-1601050690597-df0568f70950.jpeg",
    rate: 4.8,
    reviews: `${234} reviews`,
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",
  },

  //Caesar Salad

  {
    mealTitle: "Caesar Salad",
    mealDesc: "Classic salad with crispy romaine and creamy dressing",
    ingredient: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],
    nutritions: ["320 kcal", "12g", "18g", "22g", "3g", "680mg"],

    tips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],

    extend: false,
    level: "Easy",
    country: "Mediterranean",
    mealImage: "images/photo-1546793665-c74683f339c1.jpeg",
    rate: 4.4,
    reviews: `${198} reviews`,
    prepTime: "15 min",
    cookTime: "0 min",
    servings: "2 people",
  },

  //Pad Thai

  {
    mealTitle: "Pad Thai",
    mealDesc: "Popular Thai stir-fried noodles with shrimp and peanuts",
    ingredient: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],
    nutritions: ["540 kcal", "32g", "62g", "16g", "4g", "1120mg"],

    tips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],

    extend: false,
    level: "Intermediate",
    country: "Asian",
    mealImage: "images/photo-1559314809-0d155014e29e.jpeg",
    rate: 4.8,
    reviews: `${445} reviews`,
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
  },

  //Honey Garlic Salmon

  {
    mealTitle: "Honey Garlic Salmon",
    mealDesc: "Pan-seared salmon with a sweet and savory glaze",
    ingredient: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutritions: ["380 kcal", "35g", "28g", "14g", "0g", "720mg"],

    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],

    extend: false,
    level: "Easy",
    country: "Seafood",
    mealImage: "images/photo-1467003909585-2f8a72700288.jpeg",
    rate: 4.9,
    reviews: `${187} reviews`,
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
  },

  //Teriyaki Chicken Bowl

  {
    mealTitle: "Teriyaki Chicken Bowl",
    mealDesc: "Sweet and savory chicken over rice with vegetables",
    ingredient: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],
    nutritions: ["540 kcal", "42g", "58g", "14g", "4g", "1240mg"],

    tips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],

    extend: false,
    level: "Easy",
    country: "Asian",
    mealImage: "images/photo-1546069901-eacef0df6022.jpeg",
    rate: 4.7,
    reviews: `${367} reviews`,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
  },

  //Chicken Tikka Masala

  {
    mealTitle: "Chicken Tikka Masala",
    mealDesc: "Rich and creamy Indian curry with tender chicken pieces",
    ingredient: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    nutritions: ["450 kcal", "38g", "24g", "22g", "4g", "760mg"],

    tips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],

    extend: true,
    level: "Intermediate",
    country: "Asian",
    mealImage: "images/photo-1565557623262-b51c2513a641.jpeg",
    rate: 4.7,
    reviews: `${389} reviews`,
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
  },

  //Margherita Pizza

  {
    mealTitle: "Margherita Pizza",
    mealDesc: "Classic Italian pizza with fresh mozzarella and basil",
    ingredient: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    nutritions: ["580 kcal", "24", "68g", "22g", "4g", "920mg"],

    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],

    extend: true,
    level: "Intermediate",
    country: "Italian",
    mealImage: "images/photo-1574071318508-1cdbab80d002.jpeg",
    rate: 4.9,
    reviews: `${512} reviews`,
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
  },

  //Shrimp Scampi

  {
    mealTitle: "Shrimp Scampi",
    mealDesc: "Garlicky shrimp in white wine butter sauce",
    ingredient: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutritions: ["520 kcal", "36g", "54g", "18g", "3g", "620mg"],

    tips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],

    extend: false,
    level: "Easy",
    country: "Seafood",
    mealImage: "images/photo-1633504581786-316c8002b1b9.jpeg",
    rate: 4.8,
    reviews: `${356} reviews`,
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
  },

  //Vegetable Curry

  {
    mealTitle: "Vegetable Curry",
    mealDesc: "Hearty vegetarian curry with coconut milk",
    ingredient: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],
    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],
    nutritions: ["380 kcal", "14g", "48g", "16g", "12g", "480mg"],

    tips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],

    extend: true,
    level: "Easy",
    country: "Asian",
    mealImage: "images/photo-1585032226651-759b368d7246.jpeg",
    rate: 4.6,
    reviews: `${289} reviews`,
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
  },

  //Chicken Stir-Fry

  {
    mealTitle: "Chicken Stir-Fry",
    mealDesc: "Quick and healthy stir-fry with colorful vegetables",
    ingredient: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],
    nutritions: ["320 kcal", "34g", "18g", "12g", "5g", "840mg"],

    tips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],

    extend: false,
    level: "Easy",
    country: "Asian",
    mealImage: "images/photo-1603133872878-684f208fb84b.jpeg",
    rate: 4.5,
    reviews: `${324} reviews`,
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
  },

  //French Onion Soup

  {
    mealTitle: "French Onion Soup",
    mealDesc: "Rich beef broth with caramelized onions and melted cheese",
    ingredient: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    nutritions: ["380 kcal", "18g", "36g", "18g", "4g", "980mg"],

    tips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],

    extend: true,
    level: "Intermediate",
    country: "Mediterranean",
    mealImage: "images/photo-1547592166-23ac45744acd.jpeg",
    rate: 4.7,
    reviews: `${267} reviews`,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
  },

  //BBQ Pulled Pork

  {
    mealTitle: "BBQ Pulled Pork",
    mealDesc: "Slow-cooked tender pork in smoky barbecue sauce",
    ingredient: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "2Coleslaw for serving",
    ],
    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],
    nutritions: ["620 kcal", "48g", "52g", "22g", "3g", "1180mg"],

    tips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],

    extend: true,
    level: "Easy",
    country: "American",
    mealImage: "images/photo-1529692236671-f1f6cf9683ba.jpeg",
    rate: 4.7,
    reviews: `${412} reviews`,
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
  },
];

function shuffleMeals() {
  var randomIndex = Math.floor(Math.random() * meals.length); //for randomizing the indexes (local to keep generating numbers in each click)
  var container = document.getElementById("container"); //this variable carries the element scope

  //the replaced content after pressing the button
  container.innerHTML = `<div class="row mt-5">
            <div class="left-side-section col-12 col-lg-5 p-lg-0">
              <div
                class="food-image overflow-hidden rounded-top-4 rounded-top-0-xl rounded-start-4-xl position-relative"
              >
                <img
                  src=${meals[randomIndex].mealImage}
                  alt="Creamy Spaghetti Carbonara "
                  class="w-100 h-100 d-block object-fit-cover object-center"
                />
                <div
                  class="reviews py-2 px-3 bg-white rounded-pill position-absolute"
                >
                  <i class="fa-solid fa-star text-yellow"></i>
                  <span class="text-sm text-base-md fw-semibold">${meals[randomIndex].rate}</span>
                  <span class="text-xs text-sm-md text-gray-100"
                    >${meals[randomIndex].reviews}</span
                  >
                </div>
                <div
                  class="info bg-white p-4 rounded-4 position-absolute d-flex align-items-center justify-content-around"
                >
                  <div class="d-flex flex-column align-items-center">
                    <i class="fa-solid fa-clock text-orange"></i>
                    <span class="text-xs text-sm-md text-gray-100"
                      >Prep Time</span
                    >
                    <span class="text-sm text-base-md fw-bold">${meals[randomIndex].prepTime}</span>
                  </div>
                  <div class="d-flex flex-column align-items-center">
                    <i class="fa-solid fa-fire-burner text-red"></i>
                    <span class="text-xs text-sm-md text-gray-100"
                      >Cook Time
                    </span>
                    <span class="text-sm text-base-md fw-bold">${meals[randomIndex].cookTime}</span>
                  </div>
                  <div class="d-flex flex-column align-items-center">
                    <i class="fa-solid fa-users text-cyan"></i>
                    <span class="text-xs text-sm-md text-gray-100"
                      >Servings
                    </span>
                    <span class="text-sm text-base-md fw-bold">${meals[randomIndex].servings} </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="right-side-section col-12 col-lg-7 p-lg-0">
              <div
                class="inner rounded-bottom-4 rounded-bottom-0-xl rounded-end-4-xl bg-white p-4 p-lg-5"
              >
                <div
                  class="d-md-flex flex-column justify-content-md-between align-items-md-center flex-md-row-reverse"
                >
                  <!-- save and share icons -->
                  <div
                    class="d-flex justify-content-end align-items-center gap-2"
                  >
                    <span
                      class="bg-beige-200 h-50px w-50px rounded-3 d-flex justify-content-center align-items-center"
                      ><i class="fa-solid fa-bookmark text-red-200"></i
                    ></span>
                    <span
                      class="bg-beige-200 h-50px w-50px rounded-3 d-flex justify-content-center align-items-center"
                      ><i class="fa-solid fa-share-nodes text-red-200"></i
                    ></span>
                  </div>

                  <!-- level and country spans and title and desc -->
                  <div>
                    <div>
                      <span
                        class="text-green bg-light-green rounded-pill py-2 px-2 text-xs fw-semibold me-2"
                        >${meals[randomIndex].level}</span
                      >
                      <span
                        class="text-blue bg-light-blue rounded-pill py-2 px-2 text-xs fw-semibold"
                        >${meals[randomIndex].country}</span
                      >
                    </div>
                    <h2 class="text-2xl fw-bold mb-2 mt-3 text-4xl-md">
                      ${meals[randomIndex].mealTitle}
                    </h2>

                    <p class="text-sm text-lg-md text-gray-100">
                      ${meals[randomIndex].mealDesc}
                    </p>
                  </div>
                </div>

                <!-- extend -->
                <div
                id="extend"  class=" border-red  align-items-center gap-3 p-3 bg-light-red-50 rounded-3 mb-3 d-none "
                >
                  <i
                    class="fa-solid fa-triangle-exclamation text-red fa-lg"
                  ></i>
                  <div>
                    <h3 class="text-sm text-base-md fw-semibold text-red-300 mb-0">
                      Extended Preparation Time
                    </h3>
                    <p class="text-xs text-sm-md text-red-200 mb-0">
                      This recipe requires more than 45 minutes to prepare. Plan
                      accordingly!
                    </p>
                  </div>
                </div>

                <div class="navs-tabs-body">
                  <!-- tabs list -->
                  <ul
                    class="d-flex align-items-center justify-content-around nav my-nav nav-pills mb-4 p-3 border-bottom"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item my-nav-item" role="presentation">
                      <button
                        class="nav-link my-nav-link active"
                        id="pills-ingredients-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-ingredients"
                        type="button"
                        role="tab"
                        aria-controls="pills-ingredients"
                        aria-selected="true"
                      >
                        <i class="fa-solid fa-list-check text-gray-100"></i>
                        <span
                          class="text-xs text-base-md fw-semibold text-gray-100"
                          >Ingredients</span
                        >
                      </button>
                    </li>

                    <li class="nav-item my-nav-item" role="presentation">
                      <button
                        class="nav-link my-nav-link"
                        id="pills-instructions-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-instructions"
                        type="button"
                        role="tab"
                        aria-controls="pills-instructions"
                        aria-selected="false"
                      >
                        <i class="fa-solid fa-book-open text-gray-100"></i>
                        <span
                          class="text-xs text-base-md fw-semibold text-gray-100"
                          >Instructions</span
                        >
                      </button>
                    </li>

                    <li class="nav-item my-nav-item" role="presentation">
                      <button
                        class="nav-link my-nav-link"
                        id="pills-nutrition-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-nutrition"
                        type="button"
                        role="tab"
                        aria-controls="pills-nutrition"
                        aria-selected="false"
                      >
                        <i class="fa-solid fa-chart-pie text-gray-100"></i>
                        <span
                          class="text-xs text-base-md fw-semibold text-gray-100"
                          >Nutrition</span
                        >
                      </button>
                    </li>

                    <li class="nav-item my-nav-item" role="presentation">
                      <button
                        class="nav-link my-nav-link"
                        id="pills-chef-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-chef"
                        type="button"
                        role="tab"
                        aria-controls="pills-chef"
                        aria-selected="false"
                      >
                        <i class="fa-solid fa-lightbulb text-gray-100"></i>
                        <span
                          class="text-xs text-base-md fw-semibold text-gray-100"
                          >Chef's Tips</span
                        >
                      </button>
                    </li>
                  </ul>

<!-- content inside tabs -->
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active rounded-4 max-height-340 p-4 overflow-y-auto bg-light-brown2"
                      id="pills-ingredients"
                      role="tabpanel"
                      aria-labelledby="pills-ingredients-tab"
                      tabindex="0"
                    ></div>
                      

                    <div
                      class="tab-pane fade max-height-340 overflow-y-auto"
                      id="pills-instructions"
                      role="tabpanel"
                      aria-labelledby="pills-instructions-tab"
                      tabindex="0"
                    ></div>
                      
                    <div
                      class="tab-pane fade max-height-340 p-4 overflow-y-auto"
                      id="pills-nutrition"
                      role="tabpanel"
                      aria-labelledby="pills-nutrition-tab"
                      tabindex="0"
                    >
                      <div class="row">
                        <div
                          class="col-md-6 d-flex justify-content-between align-items-center mb-3 rounded-4 bg-gray-50 p-3"
                        >
                          <div class="d-flex align-items-center gap-3">
                            <span
                              class="bg-light-orange w-40px h-40px rounded-3 d-flex justify-content-center align-items-center"
                              ><i class="fa-solid fa-fire text-orange"></i
                            ></span>
                            <span
                              class="text-xs text-base-md fw-medium text-gray-300"
                              >Calories</span
                            >
                          </div>
                          <span class="text-base text-xl-md fw-bold"
                            >${meals[randomIndex].nutritions[0]}</span
                          >
                        </div>

                        <div
                          class="col-md-6 d-flex justify-content-between align-items-center mb-3 rounded-4 bg-gray-50 p-3"
                        >
                          <div class="d-flex align-items-center gap-3">
                            <span
                              class="bg-light-blue w-40px h-40px rounded-3 d-flex justify-content-center align-items-center"
                              ><i class="fa-solid fa-dumbbell text-blue"></i
                            ></span>
                            <span
                              class="text-xs text-base-md fw-medium text-gray-300"
                              >Protein
                            </span>
                          </div>
                          <span class="text-base text-xl-md fw-bold">${meals[randomIndex].nutritions[1]} </span>
                        </div>

                        <div
                          class="col-md-6 d-flex justify-content-between align-items-center mb-3 rounded-4 bg-gray-50 p-3"
                        >
                          <div class="d-flex align-items-center gap-3">
                            <span
                              class="bg-light-brown w-40px h-40px rounded-3 d-flex justify-content-center align-items-center"
                              ><i class="fa-solid fa-wheat-awn text-brown"></i
                            ></span>
                            <span
                              class="text-xs text-base-md fw-medium text-gray-300"
                              >Carbohydrates</span
                            >
                          </div>
                          <span class="text-base text-xl-md fw-bold">${meals[randomIndex].nutritions[2]}</span>
                        </div>

                        <div
                          class="col-md-6 d-flex justify-content-between align-items-center mb-3 rounded-4 bg-gray-50 p-3"
                        >
                          <div class="d-flex align-items-center gap-3">
                            <span
                              class="bg-light-red w-40px h-40px rounded-3 d-flex justify-content-center align-items-center"
                              ><i class="fa-solid fa-droplet text-red"></i
                            ></span>
                            <span
                              class="text-xs text-base-md fw-medium text-gray-300"
                              >Fat</span
                            >
                          </div>
                          <span class="text-base fw-bold">${meals[randomIndex].nutritions[3]}</span>
                        </div>

                        <div
                          class="col-md-6 d-flex justify-content-between align-items-center mb-3 rounded-4 bg-gray-50 p-3"
                        >
                          <div class="d-flex align-items-center gap-3">
                            <span
                              class="bg-light-green w-40px h-40px rounded-3 d-flex justify-content-center align-items-center"
                              ><i class="fa-solid fa-seedling text-green"></i
                            ></span>
                            <span
                              class="text-xs text-base-md fw-medium text-gray-300"
                              >Fiber</span
                            >
                          </div>
                          <span class="text-base text-xl-md fw-bold">${meals[randomIndex].nutritions[4]}</span>
                        </div>

                        <div
                          class="col-md-6 d-flex justify-content-between align-items-center"
                        >
                          <div class="d-flex align-items-center gap-3">
                            <span
                              class="bg-light-pink w-40px h-40px rounded-3 d-flex justify-content-center align-items-center"
                              ><i class="fa-solid fa-cube text-pink"></i
                            ></span>
                            <span
                              class="text-xs text-base-md fw-medium text-gray-300"
                              >Sodium</span
                            >
                          </div>
                          <span class="text-base text-xl-md fw-bold"
                            >${meals[randomIndex].nutritions[5]}</span
                          >
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade max-height-340 overflow-y-auto"
                      id="pills-chef"
                      role="tabpanel"
                      aria-labelledby="pills-chef-tab"
                      tabindex="0"
                    ></div>
                  </div>
                </div>

                <div class="button pt-4 mt-4 border-top">
                  <button
                    onclick="shuffleMeals()"
                    class="btn gradient-orange-1 rounded-3 py-2 px-3 d-flex align-items-center gap-2"
                  >
                    <i class="fa-solid fa-arrows-rotate text-white"></i>
                    <p class="mb-0 text-sm text-base-md fw-semibold text-white">
                      Try Another Recipe
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>`;
  hideAndShowAlert(randomIndex);
  displayIngredients(randomIndex);
  displayInstructions(randomIndex);
  displayTips(randomIndex);
}

//function to show and hide the alert depending on the value of the key "extend"
function hideAndShowAlert(index) {
  var extend = document.getElementById("extend");

  if (meals[index].extend === true) {
    extend.classList.remove("d-none");
    extend.classList.add("d-flex");
  }
}

//function to display the ingradients based on how many indexes in the nested array inside the object
function displayIngredients(index) {
  var ingredientContainer = ""; //variable to concat the ingredients inside of it
  for (var i = 0; i < meals[index].ingredient.length; i++) {
    ingredientContainer += `<div
                        class="d-flex align-items-center justify-content-start gap-3 mb-3"
                      >
                        <span
                          class="text-white w-25px h-25px rounded-circle bg-orange fw-bold text-xs d-flex align-items-center justify-content-center"
                          >${i + 1}</span
                        >
                        <p class="text-base text-gray-300 m-0">
                          ${meals[index].ingredient[i]}
                        </p>
                      </div>`;
  }
  document.getElementById("pills-ingredients").innerHTML = ingredientContainer;
}

//function to display the instructions
function displayInstructions(index) {
  var instructContainer = "";
  for (var i = 0; i < meals[index].instructions.length; i++) {
    instructContainer += `<div
                        class="d-flex align-items-center justify-content-start gap-3 mb-4"
                      >
                        <div
                          class="p-2 text-white w-50px rounded-4 bg-orange fw-bold text-xl d-flex align-items-center justify-content-center"
                        >
                          ${i + 1}
                        </div>
                        <p class="text-base text-gray-300 m-0">
                          ${meals[index].instructions[i]}
                        </p>
                      </div>`;
  }
  document.getElementById("pills-instructions").innerHTML = instructContainer;
}

//function to display the tips
function displayTips(index) {
  var tipsContainer = "";
  for (var i = 0; i < meals[index].tips.length; i++) {
    tipsContainer += `<div
                        class="border-yellow d-flex align-items-center gap-3 p-3 bg-light-brown2 rounded-3 mb-3"
                      >
                        <span
                          class="d-flex align-items-center justify-content-center bg-brown2 w-25px h-25px rounded-circle"
                          ><i class="fa-solid fa-check text-white fa-xs"></i
                        ></span>
                        <p class="text-base text-gray-300 mb-0">
                          ${meals[index].tips[i]}
                        </p>
                      </div>`;
  }
  document.getElementById("pills-chef").innerHTML = tipsContainer;
}
