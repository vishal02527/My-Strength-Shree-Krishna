
const recipes = {
kheer: {
  title: "Kheer",
  prepTime: "10 mins",
  cookTime: "45 mins",
  ingredients: [
      "1 liter full-fat milk",
      "¼ cup basmati rice",
      "½ cup sugar",
      "4-5 cardamom pods, crushed",
      "¼ cup mixed nuts (almonds, pistachios)",
      "Few strands of saffron",
      "2 tablespoons raisins (optional)"
  ],
  instructions: [
      "Wash and soak the rice for 30 minutes",
      "Bring the milk to a boil in a heavy-bottomed pan",
      "Add the drained rice and simmer on low heat",
      "Stir occasionally to prevent sticking",
      "When rice is fully cooked (about 30 minutes), add sugar",
      "Add cardamom powder and crushed saffron",
      "Cook for another 5-10 minutes until thickened",
      "Garnish with chopped nuts and serve hot or cold"
  ]
},
puri: {
  title: "Puri",
  prepTime: "20 mins",
  cookTime: "15 mins",
  ingredients: [
      "2 cups whole wheat flour",
      "½ teaspoon salt",
      "Water for kneading",
      "Oil for deep frying"
  ],
  instructions: [
      "Mix wheat flour and salt in a bowl",
      "Add water gradually and knead into firm dough",
      "Cover and let rest for 15-20 minutes",
      "Divide into small balls",
      "Roll each ball into circular shape",
      "Heat oil in a deep pan",
      "Fry puris until golden brown on both sides",
      "Serve hot with curry or halwa"
  ]
},
halwa: {
  title: "Halwa",
  prepTime: "15 mins",
  cookTime: "30 mins",
  ingredients: [
      "1 cup semolina (sooji/rava)",
      "1 cup sugar",
      "½ cup ghee",
      "3 cups water",
      "½ teaspoon cardamom powder",
      "Chopped nuts for garnishing"
  ],
  instructions: [
      "Roast semolina in ghee until golden brown",
      "Boil water with sugar separately",
      "Add the hot water mixture to roasted semolina",
      "Stir continuously to avoid lumps",
      "Add cardamom powder",
      "Cook until the mixture thickens",
      "Garnish with nuts and serve hot"
  ]
},
ladoo: {
  title: "Ladoo",
  prepTime: "30 mins",
  cookTime: "20 mins",
  ingredients: [
      "2 cups besan (gram flour)",
      "1 cup ghee",
      "1 cup powdered sugar",
      "½ teaspoon cardamom powder",
      "Chopped nuts (optional)"
  ],
  instructions: [
      "Roast besan in ghee on low flame until aromatic",
      "Let the mixture cool completely",
      "Add powdered sugar and cardamom powder",
      "Mix well until combined",
      "Shape into round balls while still warm",
      "Let cool completely before storing",
      "Can be stored in an airtight container for weeks"
  ]
},
"chappan-bhog": {
  title: "Chappan Bhog",
  prepTime: "3 hours",
  cookTime: "4 hours",
  ingredients: [
      "Various sweet dishes",
      "Savory snacks",
      "Fruits and dry fruits",
      "Drinks and sherbets",
      "Different varieties of sweets",
      "Various milk-based preparations"
  ],
  instructions: [
      "Prepare all 56 items with pure ingredients",
      "Arrange items in specific order",
      "Include various categories of food",
      "Offer fruits and dry fruits",
      "Include drinks and sherbets",
      "Arrange milk-based preparations",
      "Present with devotion and proper rituals"
  ]
},
panchamrit: {
  title: "Panchamrit",
  prepTime: "10 mins",
  cookTime: "0 mins",
  ingredients: [
      "1 cup milk",
      "2 tablespoons yogurt",
      "1 tablespoon honey",
      "2 tablespoons sugar",
      "1 teaspoon ghee",
      "Few holy basil leaves (optional)",
      "A pinch of cardamom powder"
  ],
  instructions: [
      "Mix milk and yogurt in a bowl",
      "Add honey and sugar",
      "Add ghee and mix well",
      "Add cardamom powder",
      "Optional: add crushed holy basil leaves",
      "Mix all ingredients thoroughly",
      "Offer as prasadam"
  ]
},
"makhan-mishri": {
  title: "Makhan Mishri",
  prepTime: "15 mins",
  cookTime: "0 mins",
  ingredients: [
      "Fresh white butter",
      "Rock sugar (mishri)",
      "Cardamom powder (optional)",
      "Saffron strands (optional)"
  ],
  instructions: [
      "Freshly churn or whip white butter",
      "Crush rock sugar to desired size",
      "Mix butter and rock sugar",
      "Add a pinch of cardamom powder if desired",
      "Add few strands of saffron if using",
      "Shape into small portions",
      "Offer immediately or refrigerate"
  ]
},
"rajgira-ladoo": {
  title: "Rajgira Ladoo",
  prepTime: "20 mins",
  cookTime: "15 mins",
  ingredients: [
      "2 cups rajgira flour",
      "1 cup jaggery",
      "½ cup ghee",
      "½ cup mixed nuts",
      "Cardamom powder"
  ],
  instructions: [
      "Roast rajgira flour in ghee",
      "Melt jaggery separately",
      "Mix roasted flour with jaggery",
      "Add cardamom powder and nuts",
      "Shape into ladoos while warm",
      "Let cool completely",
      "Store in airtight container"
  ]
},
"dahi-bhalla": {
  title: "Dahi Bhalla",
  prepTime: "30 mins",
  cookTime: "20 mins",
  ingredients: [
      "1 cup urad dal",
      "2 cups thick yogurt",
      "Green chutney",
      "Tamarind chutney",
      "Chaat masala",
      "Roasted cumin powder"
  ],
  instructions: [
      "Soak and grind urad dal",
      "Shape into small dumplings",
      "Deep fry until golden",
      "Soak in water and squeeze",
      "Whisk yogurt until smooth",
      "Arrange bhallas with yogurt",
      "Add chutneys and spices"
  ]
},
charnamrit: {
  title: "Charnamrit",
  prepTime: "10 mins",
  cookTime: "0 mins",
  ingredients: [
      "1 cup milk",
      "2 tablespoons yogurt",
      "1 tablespoon honey",
      "1 tablespoon sugar",
      "Tulsi leaves",
      "Few drops of Ganga jal"
  ],
  instructions: [
      "Mix milk and yogurt",
      "Add honey and sugar",
      "Add crushed tulsi leaves",
      "Add Ganga jal",
      "Mix well",
      "Offer with devotion",
      "Distribute as prasad"
  ]
},
"sabudana-khichdi": {
  title: "Sabudana Khichdi",
  prepTime: "4 hours",
  cookTime: "20 mins",
  ingredients: [
      "1 cup sabudana",
      "2 medium potatoes",
      "½ cup peanuts",
      "Cumin seeds",
      "Green chilies",
      "Salt to taste"
  ],
  instructions: [
      "Soak sabudana for 4 hours",
      "Roast and crush peanuts",
      "Cube potatoes",
      "Heat ghee and add cumin",
      "Add potatoes and cook",
      "Add sabudana and mix",
      "Season and serve hot"
  ]
},
shrikhand: {
  title: "Shrikhand",
  prepTime: "8 hours",
  cookTime: "20 mins",
  ingredients: [
      "2 cups thick yogurt",
      "½ cup powdered sugar",
      "Saffron strands",
      "Cardamom powder",
      "Nuts for garnishing"
  ],
  instructions: [
      "Hang yogurt in muslin cloth",
      "Add sugar to hung curd",
      "Add saffron milk",
      "Mix in cardamom powder",
      "Whisk until smooth",
      "Chill for few hours",
      "Garnish with nuts"
  ]
},
"mohan-bhog": {
  title: "Mohan Bhog",
  prepTime: "25 mins",
  cookTime: "35 mins",
  ingredients: [
      "1 cup wheat flour",
      "½ cup ghee",
      "1 cup sugar",
      "Cardamom powder",
      "Nuts for garnishing"
  ],
  instructions: [
      "Roast wheat flour in ghee",
      "Add sugar and mix well",
      "Add cardamom powder",
      "Cook until well combined",
      "Shape as desired",
      "Garnish with nuts",
      "Offer when cooled"
  ]
},
thekua: {
  title: "Thekua",
  prepTime: "30 mins",
  cookTime: "25 mins",
  ingredients: [
      "2 cups wheat flour",
      "1 cup jaggery",
      "½ cup ghee",
      "Cardamom powder",
      "Water as needed"
  ],
  instructions: [
      "Mix flour and ghee",
      "Add jaggery solution",
      "Make firm dough",
      "Shape using mould",
      "Deep fry until golden",
      "Cool completely",
      "Store in airtight container"
  ]
},
"besan-barfi": {
  title: "Besan Barfi",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: [
      "2 cups besan",
      "1 cup ghee",
      "1½ cups sugar",
      "Cardamom powder",
      "Nuts for garnishing"
  ],
  instructions: [
      "Roast besan in ghee",
      "Make sugar syrup separately",
      "Mix both mixtures",
      "Add cardamom powder",
      "Pour in greased tray",
      "Garnish with nuts",
      "Cut when semi-set"
  ]
},
tilgul: {
  title: "Tilgul",
  prepTime: "20 mins",
  cookTime: "30 mins",
  ingredients: [
      "2 cups sesame seeds",
      "1½ cups jaggery",
      "½ cup peanuts",
      "Cardamom powder",
      "Ghee for binding"
  ],
  instructions: [
      "Roast sesame seeds",
      "Crush peanuts coarsely",
      "Heat jaggery until right consistency",
      "Mix all ingredients",
      "Shape into balls",
      "Let cool completely",
      "Store in airtight container"
  ]
},
peda: {
  title: "Peda",
  prepTime: "20 mins",
  cookTime: "30 mins",
  ingredients: [
      "2 cups milk powder",
      "¾ cup sugar",
      "½ cup milk",
      "2 tablespoons ghee",
      "Cardamom powder",
      "Pistachios for garnish"
  ],
  instructions: [
      "Heat ghee in a pan",
      "Add milk powder and roast",
      "Add milk and sugar",
      "Cook until thick",
      "Add cardamom powder",
      "Shape into pedas",
      "Garnish with pistachios"
  ]
},
"banana-chips": {
  title: "Banana Chips",
  prepTime: "15 mins",
  cookTime: "25 mins",
  ingredients: [
      "4 raw bananas",
      "Oil for deep frying",
      "Salt to taste",
      "Turmeric powder",
      "Water with salt"
  ],
  instructions: [
      "Slice bananas thinly",
      "Soak in salt water",
      "Drain and pat dry",
      "Heat oil for frying",
      "Fry until crisp",
      "Season with salt",
      "Cool before storing"
  ]
},
malpua: {
  title: "Malpua",
  prepTime: "20 mins",
  cookTime: "30 mins",
  ingredients: [
      "1 cup all-purpose flour",
      "½ cup milk",
      "Sugar for syrup",
      "Cardamom powder",
      "Ghee for frying",
      "Nuts for garnish"
  ],
  instructions: [
      "Make smooth batter",
      "Prepare sugar syrup",
      "Heat ghee in pan",
      "Pour batter to make pancakes",
      "Fry until golden",
      "Soak in sugar syrup",
      "Garnish and serve"
  ]
},
"badam-halwa": {
  title: "Badam Halwa",
  prepTime: "30 mins",
  cookTime: "25 mins",
  ingredients: [
      "1 cup almonds",
      "¾ cup sugar",
      "½ cup ghee",
      "Cardamom powder",
      "Saffron strands",
      "Milk as needed"
  ],
  instructions: [
      "Soak and peel almonds",
      "Make almond paste",
      "Heat ghee in pan",
      "Add almond paste",
      "Add sugar and milk",
      "Cook until thick",
      "Garnish and serve"
  ]
}
};
// Modal functionality
const modal = document.getElementById("recipeModal");
const closeButton = document.querySelector(".close-button");
const recipeCards = document.querySelectorAll(".recipe-card");

recipeCards.forEach(card => {
card.addEventListener("click", () => {
   const recipe = recipes[card.dataset.recipe];
   if (recipe) {
       document.getElementById("modalImage").src = card.querySelector("img").src;
       document.getElementById("modalTitle").textContent = recipe.title;
       document.getElementById("prepTime").textContent = recipe.prepTime;
       document.getElementById("cookTime").textContent = recipe.cookTime;

       // Populate ingredients
       const ingredientsList = document.getElementById("ingredientsList");
       ingredientsList.innerHTML = recipe.ingredients
           .map(ingredient => `<li>${ingredient}</li>`)
           .join("");

       // Populate instructions
       const instructionsList = document.getElementById("instructionsList");
       instructionsList.innerHTML = recipe.instructions
           .map(instruction => `<li>${instruction}</li>`)
           .join("");

       modal.style.display = "block";
       document.body.style.overflow = "hidden";
   }
});
});

closeButton.addEventListener("click", () => {
modal.style.display = "none";
document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
if (event.target === modal) {
   modal.style.display = "none";
   document.body.style.overflow = "auto";
}
});
