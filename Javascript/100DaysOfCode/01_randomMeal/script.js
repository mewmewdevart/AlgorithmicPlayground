const arrFood = [
    {
        name: 'Feijoada',
        img: 'https://img.nsctotal.com.br/wp-content/uploads/2022/06/feijoada-944x531.jpg',
        instruction: 'In a large pot, combine black beans, water, diced pork, sliced sausage, chopped bacon, chopped onion, minced garlic, bay leaves, and salt. Bring to a boil over medium-high heat, then reduce the heat to low and let simmer, covered, for about 2 hours or until the beans are tender and the meats are cooked through. Serve hot with rice, greens, and orange slices.',
        type: 'Hot food',
        country: 'Brazil',
        tags: ['Feijoada', 'Brazilian'],
        ingredients: ['2 cups black beans, soaked overnight', '8 cups water', '1 pound pork, diced', '1 pound sausage, sliced', '8 ounces bacon, chopped', '1 onion, chopped', '4 cloves garlic, minced', '2 bay leaves', '1 teaspoon salt'],
		youtubeUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2SpzVuUlwDg?si=azaUpNpvyqvTuSDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
	},
    {
        name: 'Pão de Queijo',
        img: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/6131b4013456c413556c9e811aff75d2.jpg',
        instruction: 'Preheat oven to 375°F (190°C). In a saucepan, combine milk, vegetable oil, and salt and bring to a boil over medium heat. Remove from heat and add tapioca flour, stirring until well combined. Allow the mixture to cool slightly. Beat in eggs one at a time, then fold in grated cheese. Drop spoonfuls of dough onto a greased baking sheet and bake for 15-20 minutes or until puffed and golden brown.',
        type: 'Hot food',
        country: 'Brazil',
        tags: ['Pão de Queijo', 'Brazilian'],
        ingredients: ['1 cup milk', '1/2 cup vegetable oil', '1 teaspoon salt', '2 cups tapioca flour', '2 eggs', '1 1/2 cups grated cheese'],
		youtubeUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R_Rto_bXzlQ?si=6uYMqxYVkf840fug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
	},
    {
        name: 'Açaí Bowl',
        img: 'https://uploads.metropoles.com/wp-content/uploads/2017/06/23135530/200617-GB-Ac%CC%A7ai-Mormaii-007.jpg',
        instruction: 'In a blender, combine frozen açaí pulp, ripe banana, and coconut water. Blend until smooth and creamy. Pour into a bowl and top with granola, sliced fruits, and honey. Serve immediately.',
        type: 'Cold food',
        country: 'Brazil',
        tags: ['Açaí Bowl', 'Brazilian'],
        ingredients: ['100g frozen açaí pulp', '1 ripe banana', 'Splash of coconut water', 'Granola, to taste', 'Sliced fruits (such as strawberries, banana, and kiwi), to taste', 'Honey, for drizzling'],
		youtubeUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ntQfL-0yQqc?si=ZFj1RBB-YKNaQm4W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
	},
    {
        name: 'Coxinha',
        img: 'https://kyodai.com.br/wp-content/uploads/2018/07/cox_grande_kyodai_2-1.jpeg',
        instruction: 'In a saucepan, combine shredded cooked chicken, chopped onion, minced garlic, bay leaf, salt, and water. Bring to a boil, then reduce the heat and let simmer until the chicken is cooked through. Remove the chicken from the broth, shred it, and set aside. In another saucepan, melt butter, then stir in all-purpose flour to make a roux. Gradually add chicken broth, stirring constantly, until the mixture thickens. Remove from heat and stir in shredded chicken. Let the filling cool. Take spoonfuls of the filling and shape them into teardrop-shaped balls. Dip each ball into beaten eggs, then roll in breadcrumbs. Fry in hot oil until golden brown and crispy. Serve hot.',
        type: 'Hot food',
        country: 'Brazil',
        tags: ['Coxinha', 'Brazilian'],
        ingredients: ['2 cups shredded cooked chicken', '1 onion, chopped', '2 cloves garlic, minced', '1 bay leaf', '1 teaspoon salt', '4 cups water', '2 tablespoons butter', '2 cups all-purpose flour', '2 eggs, beaten', '2 cups breadcrumbs', 'Oil for frying'],
		youtubeUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JJS9x54pIgQ?si=kO27OOZKWtbcn3BJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
	},
    {
        name: 'Caipirinha',
        img: 'https://www.receiteria.com.br/wp-content/uploads/caipirinha-de-limao-1-730x480.jpg',
        instruction: 'In a glass, muddle lime wedges with sugar until the sugar is dissolved and the limes release their juices. Add cachaça and stir well. Fill the glass with ice and stir again. Serve immediately.',
        type: 'Cold drink',
        country: 'Brazil',
        tags: ['Caipirinha', 'Brazilian'],
        ingredients: ['1 lime, cut into wedges', '2 teaspoons sugar', '2 ounces cachaça', 'Ice cubes'],
		youtubeUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SdG2oBCRigc?si=oYsik3b8jZYn6zsK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
	}
];




let foodSection = document.getElementById('foodSection');
let imageFood = document.getElementById('imageFood');
let listIngredients = document.getElementById('IngredientsList');


function getRandomFood(){
	const randomIndex = Math.floor(Math.random() * arrFood.length);
	return arrFood[randomIndex];
}

function getNewIcon() {
    var icons = ['🍸', '🥧', '🥩'];
    return icons[Math.floor(Math.random() * icons.length)];
}

function generatefood() {
	var iconSpan = document.getElementById("foodIcon");
    iconSpan.innerHTML = getNewIcon();

    let randomFood = getRandomFood();
    foodSection.style.display = 'block';

    document.getElementById("foodName").innerHTML = randomFood.name;
    document.getElementById("instructions").innerHTML = randomFood.instruction;
    document.getElementById("type").innerHTML = randomFood.type;
    document.getElementById("country").innerHTML = randomFood.country;
    document.getElementById("tags").innerHTML = randomFood.tags.join(', ');
    this.imageFood.src = randomFood.img;


    document.querySelector(".youtube").innerHTML = '';
    var videoDiv = document.createElement('div');
    videoDiv.innerHTML = randomFood.youtubeUrl;
    document.querySelector(".youtube").appendChild(videoDiv);
    randomFood.ingredients.forEach(function(ingredient) {
        var li = document.createElement('li');
        li.textContent = ingredient;
        listIngredients.appendChild(li);
    });

	
}
