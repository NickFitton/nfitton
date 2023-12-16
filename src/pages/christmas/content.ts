/**
 * TODO:
 * colored tasks: Assign uses to to steps and color the tasks to help identify where foods need to be at a given time, e.g. serving-tray should be a dark pastel brown, hob should be a dark red.
 * global dependsOn: Allow tasks in dishes to depend on other dishes tasks, e.g. roast veg depends on cooking goose.
 * multi dependsOn: Allow tasks to depend on multiple other tasks, e.g. resting veg depends on potato and roots cooking.
 * Split turning and cooking into different tasks to help identify action vs inaction, e.g. potato turning shouldn't take 15 minutes, but the cooking should.
 * Make christmas.astro use complex recipes over og recipes to make it easier to manage the work to do.
 * Display times in christmas/index.astro.
 * Move /christmas/index.astro to cooking/christmas/index.astro.
 * Move Gantt to /cooking/christmas/timeline/index.astro and create a list timeline of tasks to do.
 */

export type Step = {
  name: string;
  step: string;
  durationMins: number;
  dependsOn?: string;
  startTime?: Date;
  uses?:
    | 'hob-pot'
    | 'hob-pan'
    | 'oven'
    | 'worktop'
    | 'chopping board'
    | 'blender'
    | 'fridge'
    | 'microwave'
    | 'serving-tray';
};

export type Recipe = {
  name: string;
  credit?: string;
  ingredients: string[];
  method: Step[];
};

export type Recipes = Record<
  'starter' | 'main' | 'dessert',
  Record<string, Recipe>
>;

const christmasEve = new Date(2023, 12, 24, 12, 0, 0);
const christmasDay = new Date(2023, 12, 25, 10, 0, 0);
const christmasDayHam = new Date(2023, 12, 25, 11, 25, 0);

export const complexRecipes: Recipes = {
  starter: {
    soup: {
      name: 'Chestnut & Panchetta Soup',
      ingredients: [
        '2 packs of panchetta',
        '3 Tbsp unsalted butter',
        '1.5 shallot large roughly chopped',
        '1.5 carrot medium, roughly chopped',
        '1 large leek, cleaned thoroughly, roughly chopped',
        '2 stalk celery roughly chopped',
        '3 cloves garlic',
        '9 cups chicken stock (5 stock cubes)',
        '4 cup (22.5 oz) roasted chestnuts',
        '2 bay leaf',
        '2 sprig thyme',
        '½ cup heavy cream',
        '¾ tsp nutmeg - freshly grated',
        'kosher salt',
        'freshly ground black pepper',
      ],
      method: [
        {
          name: 'Fry Panchetta',
          startTime: christmasEve,
          durationMins: 10,
          uses: 'hob-pot',
          step: 'In a large saucepan over medium heat, cook panchetta until rendered and crisp, 10 minutes. Transfer bacon to a paper towel-lined plate and set aside to cool.',
        },
        {
          name: 'Cook off Veg',
          dependsOn: 'Fry Panchetta',
          durationMins: 7,
          uses: 'hob-pot',
          step: 'Pour off all but 1 teaspoon of the fat. In the same saucepan, add butter, shallot, carrot, leek, celery and garlic; cook, stirring occasionally, until vegetables are soft, 7 minutes.',
        },
        {
          dependsOn: 'Cook off Veg',
          name: 'Combine in Pot',
          durationMins: 5,
          uses: 'hob-pot',
          step: 'Add stock, chestnuts, panchetta, bay leaf, and thyme; bring to a boil.',
        },
        {
          dependsOn: 'Combine in Pot',
          name: 'Reduce Soup',
          durationMins: 30,
          uses: 'hob-pot',
          step: 'Reduce heat to medium; cook, slightly covered, until chestnuts are very tender, about 30 minutes. Remove from heat and let cool slightly.',
        },
        {
          dependsOn: 'Reduce Soup',
          name: 'Purée',
          durationMins: 10,
          uses: 'blender',
          step: 'Discard bay leaves and thyme. Working in batches, carefully purée soup in a blender until smooth.',
        },
        {
          name: 'Reduce',
          dependsOn: 'Purée',
          durationMins: 5,
          uses: 'hob-pot',
          step: 'Stir in cream, nutmeg, salt, and pepper to taste; cook until soup is slightly thick, about 5 minutes more, addding more broth to desired thickness.',
        },
        {
          name: 'Store',
          dependsOn: 'Reduce',
          durationMins: 5,
          uses: 'fridge',
          step: 'Once cooked, move to as small a container as possible and store in the fridge.',
        },
        {
          startTime: christmasDay,
          name: 'Warm',
          durationMins: 20,
          uses: 'hob-pot',
          step: 'Take the soup out of the fridge and heat up on the hob.',
        },
        {
          startTime: christmasDay,
          name: 'Heat bowls',
          durationMins: 5,
          uses: 'microwave',
          step: 'In batches, microwave the bowls for 2 mins 30 seconds to heat them up.',
        },
        {
          dependsOn: 'Heat bowls',
          name: 'Prep bread',
          durationMins: 10,
          uses: 'worktop',
          step: 'Butter 14 pieces of bread, organizing on the wooden chopping board.',
        },
        {
          dependsOn: 'Warm',
          name: 'Serve',
          durationMins: 5,
          uses: 'serving-tray',
          step: 'Serve soup into the hot bowls, and place the bowls onto the serving tray. Bring out the soup as Heather brings out the bread.',
        },
      ],
    },
  },
  main: {
    ham: {
      name: 'Cola Ham',
      ingredients: [
        '2.5kg unsmoked boneless gammon joint',
        '3.33l full fat coke',
        '2 carrot peeled and chopped',
        '2 onion peeled and quartered',
        '2 stick celery chopped',
        '2 cinnamon stick',
        '1 Tbsp peppercorns',
        '2 bay leaf',
        '250ml maple syrup',
        '3 ⅓ Tbsp wholegrain mustard',
        '3 ⅓ Tbsp red wine vinegar',
        'pinch ground cloves',
      ],
      method: [
        {
          startTime: christmasEve,
          name: 'Prep Slow Cooker',
          step: 'Set your slow cooker to medium. Place the gammon joint in and cover with the cola. Add the carrot, onion, celery, cinnamon stick, peppercorns and bay leaves.',
          durationMins: 10,
        },
        {
          dependsOn: 'Prep Slow Cooker',
          name: 'Slow Cook',
          step: 'Cook for 5½ hrs on low until the gammon is tender but still holding its shape, topping up with boiling water if necessary to keep the gammon fully covered.',
          durationMins: 330,
        },
        {
          dependsOn: 'Slow Cook',
          name: 'Ready to Roast',
          step: 'Carefully pour the liquid away, then let the ham cool a little while you heat the oven to fan 170C. Lift the ham into a roasting tin, then cut away the skin leaving behind an even layer of fat. Score the fat all over in a criss-cross pattern.',
          durationMins: 5,
        },
        {
          startTime: christmasDayHam,
          name: 'Roast',
          step: 'Mix the maple syrup, mustard, vinegar and ground cloves or five-spice in a jug. Pour half over the fat, roast for 15 mins.',
          durationMins: 15,
        },
        {
          dependsOn: 'Roast',
          name: 'Baste',
          step: 'Pour over the rest of the fat and return to the oven for another 30 mins.',
          durationMins: 30,
        },
        {
          dependsOn: 'Baste',
          name: 'Rest',
          step: 'Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.',
          durationMins: 10,
        },
      ],
    },
    goose: {
      name: 'Roast Goose',
      credit:
        'https://www.bbcgoodfood.com/recipes/gordons-christmas-roast-goose',
      ingredients: [
        '4.2kg fresh goose',
        '4 lemons',
        '3 limes',
        '1 tsp Chinese five-spice powder',
        'small handful each of parsley sprigs, thyme and sage, plus extra for garnishing',
        'a little olive oil, for browning, optional',
        '3 tbsp clear honey',
        '1 tbsp thyme leaves',
      ],
      method: [
        {
          name: 'Prep bird',
          startTime: christmasEve,
          step: 'Check the inside of the bird and remove any giblets or pads of fat. Using the tip of a sharp knife, lightly score the breast and leg skin in a criss-cross. This helps the fat to render down more quickly during roasting.',
          durationMins: 5,
        },
        {
          name: 'Combine seasoning',
          dependsOn: 'Prep bird',
          step: 'Grate the zest from 4 lemons and 3 limes. Mix with 2 tsp fine sea salt, 1 tsp Chinese five-spice powder and pepper, to taste.',
          durationMins: 5,
        },
        {
          name: 'Season bird',
          dependsOn: 'Combine seasoning',
          step: 'Season the cavity of the goose generously with salt, then rub the citrus mix well into the skin and sprinkle some inside the cavity.',
          durationMins: 5,
        },
        {
          name: 'Stuff bird',
          dependsOn: 'Season bird',
          step: 'Stuff the zested fruit and a small handful of parsley, thyme and sage sprigs inside the bird and set aside for at least 15 mins.',
          durationMins: 5,
        },
        {
          name: 'Store',
          dependsOn: 'Stuff bird',
          step: 'Cover the goose and put in the fridge.',
          durationMins: 5,
        },
        {
          name: 'Preheat oven',
          startTime: christmasDay,
          step: 'Heat oven to fan 220C.',
          durationMins: 10,
        },
        {
          name: 'Brown bird',
          startTime: christmasDay,
          step: 'Brown the goose in a large frying pan, using a couple of tbsp olive oil. Holding the bird by the legs (use thick gloves), press it down on the breasts to brown.',
          durationMins: 10,
        },
        {
          name: 'Prep bird again',
          dependsOn: 'Brown bird',
          step: 'Once browned, place the bird in the roasting tin. Drizzle with 3 tbsp clear honey and sprinkle with 1 tbsp thyme leaves.',
          durationMins: 5,
        },
        {
          name: 'First roast',
          dependsOn: 'Prep bird again',
          step: 'Put the goose in the oven and roast for 10 minutes.',
          durationMins: 10,
        },
        {
          name: 'Second roast',
          dependsOn: 'First roast',
          step: 'Turn down the heat to fan 170C & cook. Cover the goose with foil if it is starting to brown too much.',
          durationMins: 30,
        },
        {
          name: 'Baste',
          dependsOn: 'Second roast',
          step: 'Baste the bird with the pan juices, then pour off the fat through a sieve into a large heatproof bowl. Put the goose back in the oven.',
          durationMins: 30,
        },
        {
          name: 'Final roast',
          dependsOn: 'Baste',
          step: 'Baste the bird again with the pan juices, then pour off the fat through a sieve into a large heatproof bowl. Put the goose back in the oven.',
          durationMins: 14,
        },
        {
          name: 'Rest',
          dependsOn: 'Final roast',
          step: 'At the end of the cooking time, leave to rest for at least 30 mins, covered loosely with foil. The bird will not go cold, but will be moist and much easier to carve.',
          durationMins: 45,
        },
      ],
    },
    veg: {
      name: 'Roast Potato, carrots and Parsnips',
      ingredients: [
        '14 Maris Piper Potatoes peeled and cut to serving size',
        '4 Large Carrots, peeled but not topped and tailed',
        '4 Large Parsnips, peeled but not topped and tailed',
        '2 cloves garlic heads cut off',
        '1 bag of fresh thyme, roughly chopped',
        '1 bag of fresh rosemary, roughly chopped',
        'handful of peppercorns',
        'Leftover Goose Fat',
        'Ground pepper',
        'Ground salt',
        'Runny honey',
      ],
      method: [
        {
          name: 'Season goose fat',
          startTime: christmasEve,
          step: 'Infuse goose fat with the garlic, thyme and rosemarie. Frying until fragrant.',
          durationMins: 10,
        },
        {
          name: 'Boil potatoes',
          startTime: christmasEve,
          step: 'Cover the potatoes in cold water, bring to boil and cook for 10 minutes, until a knife cleanly goes through it.',
          durationMins: 20,
        },
        {
          name: 'Boil roots',
          startTime: christmasEve,
          step: 'Cover the the carrots and parsnips in cold water then bring to boil and cook for 10 minutes.',
          durationMins: 20,
        },
        {
          name: 'Cool potatoes',
          dependsOn: 'Boil potatoes',
          step: 'Strain and toss the potatoes, then leave to cool in a large pan.',
          durationMins: 10,
        },
        {
          name: 'Cool roots',
          dependsOn: 'Cool potatoes',
          step: 'Strain the roots, leaving them in the strainer',
          durationMins: 10,
        },
        {
          name: 'Prep',
          dependsOn: 'Cool roots',
          durationMins: 5,
          step: 'Top and tail and quarter the veg.',
        },
        {
          name: 'Season the potatoes',
          dependsOn: 'Cool potatoes',
          step: 'Toss the potatoes with salt, pepper and goose fat then lay out on baking tray.',
          durationMins: 5,
        },
        {
          name: 'Season roots',
          dependsOn: 'Cool roots',
          durationMins: 5,
          step: 'Toss the roots with salt, pepper and goose fat then lay out on a baking tray.',
        },
        {
          name: 'Room temp',
          startTime: christmasDay,
          step: 'Bring the veg out of the fridge to cool to room temperature.',
          durationMins: 95,
        },
        {
          name: 'Preheat oven',
          dependsOn: 'Room temp',
          step: 'Preheat the oven to 200°',
          durationMins: 5,
        },
        {
          name: 'Cook potatoes',
          dependsOn: 'Preheat oven',
          step: 'Start cooking the potatoes.',
          durationMins: 15,
        },
        {
          name: 'First turn',
          dependsOn: 'Cook potatoes',
          step: 'Turn and baste the potatoes, returning to the oven.',
          durationMins: 15,
        },
        {
          name: 'Second turn',
          dependsOn: 'First turn',
          step: 'Turn and baste the potatoes, returning to the oven.',
          durationMins: 15,
        },
        {
          name: 'Cook roots',
          dependsOn: 'Preheat oven',
          durationMins: 30,
          step: 'Roast the roots for 30 minutes.',
        },
        {
          name: 'Baste roots',
          dependsOn: 'Cook roots',
          durationMins: 15,
          step: 'Turn the roots. Coat with honey then roast for 15 more minutes.',
        },
        {
          name: 'Rest',
          dependsOn: 'Cook roots',
          step: 'Leave to cool for 5 minutes before serving.',
          durationMins: 5,
        },
      ],
    },
    stuffing: {
      name: 'Stuffing',
      ingredients: ['1 box of stuffing mix', 'Knob of butter'],
      method: [
        {
          name: 'Boil',
          step: 'Boil a litre of water',
          durationMins: 5,
          startTime: christmasDay,
        },
        {
          name: 'Steep',
          dependsOn: 'Boil',
          durationMins: 5,
          step: 'Combine stuffing mix, butter and boiling water in a measuring jug, mix and leave for 5 minutes.',
        },
        {
          name: 'Distribute',
          dependsOn: 'Steep',
          durationMins: 10,
          step: 'Using a greased muffin tin, split the mixure between all the cases, then remove',
        },
        {
          name: 'Pre-heat',
          dependsOn: 'Steep',
          durationMins: 10,
          step: 'Pre-heat the air fryer to 180C',
        },
        {
          name: 'Cook',
          dependsOn: 'Distribute',
          durationMins: 45,
          step: 'In 3 batches of 4, air fry the stuffing balls for 15 minutes, turning every 7 minutes.',
        },
        {
          name: 'Cover',
          dependsOn: 'Cook',
          durationMins: 14,
          step: 'When a batch is complete, place on a hot plate, cover with foil and leave in the microwave.',
        },
      ],
    },
    pigs: {
      name: 'Pigs in Blankets',
      ingredients: [
        '14 Chipolata sausages',
        '14 rashers of streaky bacon',
        '14 cocktail sticks',
      ],
      method: [
        {
          name: 'Prep',
          step: 'Cut the cocktail sticks in half. Wrap each sausage in a rasher of bacon, pinning in place with the 2 halves of the cocktail sticks.',
          startTime: christmasEve,
          durationMins: 15,
        },
        {
          name: 'Store',
          step: 'Place the prepped pigs in a small roasting tray, wrap in clingfilm and store in the fridge.',
          dependsOn: 'Prep',
          durationMins: 5,
        },
        {
          name: 'Room temp',
          step: 'Take the pigs out of the fridge, uncover and let to reach room temperature.',
          startTime: christmasDay,
          durationMins: 95,
        },
        {
          name: 'Cook',
          step: 'In batches of 7, fry the pigs for 15 minutes, turning every so often.',
          dependsOn: 'Room temp',
          durationMins: 30,
        },
        {
          name: 'Cover',
          step: 'When a batch is done, move to a hot plate and cover with foil.',
          dependsOn: 'Cook',
          durationMins: 15,
        },
      ],
    },
    sprouts: {
      name: 'Brussel Sprouts & Chestnuts',
      ingredients: [
        '1 pack of brussel sprouts',
        '2 packs of panchetta',
        '1 bag of cooked chestnuts',
        'Soy sauce',
        'Worcestershire sauce',
        'Black pepper',
      ],
      method: [
        {
          name: 'Prep',
          step: 'Quarter all the brussel sprouts, discarding any loose leaves, halve the chestnuts',
          durationMins: 5,
          startTime: christmasEve,
        },
        {
          name: 'Store',
          step: 'Put the prepared veg in as small a container as possible and store in the fridge.',
          durationMins: 5,
          dependsOn: 'Prep',
        },
        {
          name: 'Room temp',
          step: 'Take the veg and panchetta out of the fridge, uncover and let reach room temperature.',
          durationMins: 95,
          startTime: christmasDay,
        },
        {
          name: 'Cook panchetta',
          step: 'Heat up a pan with the panchetta, rendering the fat as a cooking oil.',
          durationMins: 10,
          dependsOn: 'Room temp',
        },
        {
          name: 'Add veg',
          step: 'Add the vegetables to the frying pan and toss to combine.',
          durationMins: 5,
          dependsOn: 'Cook panchetta',
        },
        {
          name: 'Season',
          step: 'Once the sprouts have some char, add some soy sauce, worcestershire sauce & crushed black pepper, toss to combine.',
          durationMins: 5,
          dependsOn: 'Add veg',
        },
      ],
    },
  },
  dessert: {},
};

export const recipes = {
  starter: {
    soup: {
      name: 'Chestnut & Panchetta Soup',
      ingredients: [
        '2 packs of panchetta',
        '3 Tbsp unsalted butter',
        '1.5 shallot large roughly chopped',
        '1.5 carrot medium, roughly chopped',
        '1 large leek, cleaned thoroughly, roughly chopped',
        '2 stalk celery roughly chopped',
        '3 cloves garlic',
        '9 cups chicken stock (5 stock cubes)',
        '4 cup (22.5 oz) roasted chestnuts',
        '2 bay leaf',
        '2 sprig thyme',
        '½ cup heavy cream',
        '¾ tsp nutmeg - freshly grated',
        'kosher salt',
        'freshly ground black pepper',
      ],
      method: [
        'In a large saucepan over medium heat, cook panchetta until rendered and crisp, 8 to 10 minutes. Transfer bacon to a paper towel-lined plate and set aside to cool.',
        'Pour off all but 1 teaspoon of the fat. In the same saucepan, add butter, shallot, carrot, leek, celery and garlic; cook, stirring occasionally, until vegetables are soft, 5-7 minutes.',
        'Add stock, chestnuts, panchetta, bay leaf, and thyme; bring to a boil.',
        'Reduce heat to medium; cook, slightly covered, until chestnuts are very tender, about 30 minutes. Remove from heat and let cool slightly.',
        'Discard bay leaves and thyme. Working in batches, carefully purée soup in a blender until smooth.',
        'Stir in cream, nutmeg, salt, and pepper to taste; cook until soup is slightly thick, about 5 minutes more, addding more broth to desired thickness.',
      ],
    },
    bread: {
      name: 'Sage & Parmesan Bread',
      ingredients: [
        '2 ½ cups all-purpose flour',
        '1 cup grated Parmesan cheese',
        '2 tablespoons sugar',
        '3 teaspoons baking powder',
        '1 tablespoon chopped fresh sage',
        '1 teaspoon salt',
        '1 ½ cups beer',
        '¼ cup melted butter, divided',
      ],
      method: [
        'Preheat oven to 190°. In a small bowl, whisk the first 6 ingredients. Add beer and 3 tablespoons melted butter; stir just until moistened.',
        'Transfer to a greased 8x4-in. loaf pan. Drizzle with remaining butter. Bake 45-50 minutes or until a toothpick inserted in center comes out clean. Cool in pan 5 minutes before removing to a wire rack to cool.',
      ],
    },
  },
  main: {
    ham: {
      name: 'Cola Ham',
      ingredients: [
        '2.5kg unsmoked boneless gammon joint',
        '3.33l full fat coke',
        '2 carrot peeled and chopped',
        '2 onion peeled and quartered',
        '2 stick celery chopped',
        '2 cinnamon stick',
        '1 Tbsp peppercorns',
        '2 bay leaf',
        '250ml maple syrup',
        '3 ⅓ Tbsp wholegrain mustard',
        '3 ⅓ Tbsp red wine vinegar',
        'pinch ground cloves',
      ],
      method: [
        'Set your slow cooker to medium. Place the gammon joint in and cover with the cola. Add the carrot, onion, celery, cinnamon stick, peppercorns and bay leaves.',
        'Cook for 5½ hrs on low until the gammon is tender but still holding its shape, topping up with boiling water if necessary to keep the gammon fully covered.',
        'Carefully pour the liquid away, then let the ham cool a little while you heat the oven to fan 170C. Lift the ham into a roasting tin, then cut away the skin leaving behind an even layer of fat. Score the fat all over in a criss-cross pattern.',
        'Mix the maple syrup, mustard, vinegar and ground cloves or five-spice in a jug. Pour half over the fat, roast for 15 mins, then pour over the rest and return to the oven for another 30 mins.',
        'Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.',
      ],
    },
    goose: {
      name: 'Roast Goose',
      credit:
        'https://www.bbcgoodfood.com/recipes/gordons-christmas-roast-goose',
      ingredients: [
        '4.2kg fresh goose',
        '4 lemons',
        '3 limes',
        '1 tsp Chinese five-spice powder',
        'small handful each of parsley sprigs, thyme and sage, plus extra for garnishing',
        'a little olive oil, for browning, optional',
        '3 tbsp clear honey',
        '1 tbsp thyme leaves',
      ],
      method: [
        'Calculate the cooking time: cook for 10 mins at fan 220C, then reduce to fan 170C and cook for 20 mins per kg for medium-rare, 32 mins per kg for more well done, plus 30 mins resting.',
        'Check the inside of the bird and remove any giblets or pads of fat. Using the tip of a sharp knife, lightly score the breast and leg skin in a criss-cross. This helps the fat to render down more quickly during roasting.',
        'Grate the zest from 4 lemons and 3 limes. Mix with 2 tsp fine sea salt, 1 tsp Chinese five-spice powder and pepper, to taste.',
        'Season the cavity of the goose generously with salt, then rub the citrus mix well into the skin and sprinkle some inside the cavity.',
        'Stuff the zested fruit and a small handful of parsley, thyme and sage sprigs inside the bird and set aside for at least 15 mins. Can be done up to a day ahead and kept refrigerated.',
        'Heat oven to fan 220C.',
        'Brown the goose in a large frying pan, using a couple of tbsp olive oil. Holding the bird by the legs (use thick gloves), press it down on the breasts to brown.',
        'Once browned, place the bird in the roasting tin. Drizzle with 3 tbsp clear honey and sprinkle with 1 tbsp thyme leaves.',
        'Put the goose in the oven and roast for 10 minutes, then turn down the heat to fan 170C & cook for 1 hour 14 minutes more. Cover the goose with foil if it is starting to brown too much.',
        'Every 30 mins or so, baste the bird with the pan juices, then pour off the fat through a sieve into a large heatproof bowl. You will end up with at least a litre of luscious fat - save this for the potatoes and other veg.',
        'At the end of the cooking time, leave to rest for at least 30 mins, covered loosely with foil. The bird will not go cold, but will be moist and much easier to carve.',
      ],
    },
    // beef: {
    //   name: 'Roast Beef with Caramelised Onion Gravy',
    //   credit:
    //     'https://www.gordonramsay.com/gr/recipes/roast-beef-with-caramelised-onion-gravy/',
    //   ingredients: [
    //     '1 head of garlic (about 12 cloves), cut in half',
    //     '5 thyme sprigs, leaves picked, plus 1 extra',
    //     '1.8kg beef sirloin',
    //     '3–4 tbsp olive oil',
    //     '4 large onions, sliced',
    //     '150g plain flour',
    //     '500ml red wine',
    //     '1.5 litres hot beef stock',
    //   ],
    //   method: [
    //     'Rub the garlic halves and thyme leaves all over the beef. Place the joint in a large dish, drizzle over the olive oil, then rub it into the meat all over. Cover and leave to marinate in the fridge for 1–2 days before you cook it (you don’t have to marinate the beef in advance, but it does make it super tasty!). Take the beef out of the fridge about an hour before cooking, to let it come up to room temperature.',
    //     'Preheat the oven to 170°C fan.',
    //     'Preheat a dry frying pan until very hot, then sear the beef over a high heat until it’s coloured on all sides. Place the beef in a large, hob-proof roasting tray with the garlic halves and the thyme sprig and roast for about 45 minutes for medium rare (or until it reaches 45–47°C in the centre, if you have a meat thermometer). Add 10–12 minutes for medium (or until it reaches 55–60°C in the centre), or add about 20 minutes if you like it well done (or until it reaches 65–70°C in the centre).',
    //     'Transfer the beef to a warm platter, cover loosely with foil and leave to rest for at least 20 minutes, and anything up to 40 minutes, before serving.',
    //     'Meanwhile, to make the gravy, place the roasting tray over a low heat on the hob, add the onions to the juices in the tray and cook gently for about 20 minutes, stirring occasionally, until really soft and caramelised. Stir in the flour until combined, then whisk in the red wine, making sure there are no lumps. Bring to the boil, whisking, then bubble rapidly until the red wine has reduced by half. Stir in the hot stock, then cook over a medium heat for about 8 minutes, stirring occasionally, until reduced to a thick gravy.',
    //     'Carve the beef thinly and pour the gravy into a warm jug.',
    //   ],
    // },
    potato: {
      name: 'Roast Potato',
      ingredients: [
        '14 Maris Piper Potatoes peeled and cut to serving size',
        '2 cloves garlic heads cut off',
        'bag of thyme',
        'bag of rosemarie',
        'handful of peppercorns',
        '2 jars of Goose Fat',
        'table salt',
        'ground pepper',
      ],
      method: [
        'Infuse goose fat with the garlic, thyme and rosemarie. Frying until fragrant.',
        'Boil the cut potatoes for 10 minutes, until a knife cleanly goes through it.',
        'Preheat the oven to 200°',
        'Let the potatoes cool, toss with salt, pepper and oil then lay out on baking tray.',
        'Cook the potatoes for 45 minutes, turning and basting every 15 minutes.',
        'Leave to cool for 5 minutes before serving.',
      ],
    },
    roots: {
      name: 'Roast Carrots & Parsnips',
      ingredients: [
        '4 Large Carrots, peeled but not topped and tailed',
        '4 Large Parsnips, peeled but not topped and tailed',
        '1 bag of fresh thyme, roughly chopped',
        '1 bag of fresh rosemary, roughly chopped',
        'ground salt',
        'ground pepper',
        '3 Tub goose fat',
        'Runny honey',
      ],
      method: [
        'Boil the carrots and parsnips whole, for 10 minutes.',
        'Strain and let cool.',
        'Preheat the oven to 200°.',
        'Top and tail and quarter the veg.',
        'Toss the veg in the thyme, rosemary, salt, pepper and goose fat.',
        'Roast for 30 minutes.',
        'Coat with honey then roast for 20 more minutes.',
        'Let dry on a rack then serve.',
      ],
    },
    stuffing: {
      name: 'Stuffing',
      ingredients: [],
      method: [],
    },
    pigs: {
      name: 'Pigs in Blankets',
      ingredients: [],
      method: [],
    },
    sprouts: {
      name: 'Brussel Sprouts & Chestnuts',
      ingredients: [],
      method: [],
    },
  },
  dessert: {
    christmas: {
      name: 'Christmas Pudding',
      ingredients: [],
      method: [],
    },
    toffee: {
      name: 'Sticky Toffee Pudding',
      ingredients: [],
      method: [],
    },
  },
};
