/**
 * TODO:
 * colored tasks: Assign uses to to steps and color the tasks to help identify where foods need to be at a given time, e.g. serving-tray should be a dark pastel brown, hob should be a dark red.
 * Make christmas.astro use complex recipes over og recipes to make it easier to manage the work to do.
 * Move /christmas/index.astro to cooking/christmas/index.astro.
 * global dependsOn: Allow tasks in dishes to depend on other dishes tasks, e.g. roast veg depends on cooking goose.
 *
 *
 * multi dependsOn: Allow tasks to depend on multiple other tasks, e.g. resting veg depends on potato and roots cooking.
 * Split turning and cooking into different tasks to help identify action vs inaction, e.g. potato turning shouldn't take 15 minutes, but the cooking should.
 * Display times in christmas/index.astro.
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
    | 'slow-cooker'
    | 'air-fryer'
    | 'kettle'
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
          dependsOn: 'sprouts.Store',
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
          uses: 'slow-cooker',
          step: 'Set your slow cooker to medium. Place the gammon joint in and cover with the cola. Add the carrot, onion, celery, cinnamon stick, peppercorns and bay leaves.',
          durationMins: 10,
        },
        {
          dependsOn: 'Prep Slow Cooker',
          name: 'Slow Cook',
          uses: 'slow-cooker',
          step: 'Cook for 5½ hrs on low until the gammon is tender but still holding its shape, topping up with boiling water if necessary to keep the gammon fully covered.',
          durationMins: 330,
        },
        {
          dependsOn: 'Slow Cook',
          name: 'Ready to Roast',
          uses: 'worktop',
          step: 'Carefully pour the liquid away, then let the ham cool a little while you heat the oven to fan 170C. Lift the ham into a roasting tin, then cut away the skin leaving behind an even layer of fat. Score the fat all over in a criss-cross pattern.',
          durationMins: 5,
        },
        {
          startTime: christmasDayHam,
          name: 'Roast',
          uses: 'oven',
          step: 'Mix the maple syrup, mustard, vinegar and ground cloves or five-spice in a jug. Pour half over the fat, roast for 15 mins.',
          durationMins: 15,
        },
        {
          dependsOn: 'Roast',
          name: 'Baste',
          uses: 'oven',
          step: 'Pour over the rest of the fat and return to the oven for another 30 mins.',
          durationMins: 30,
        },
        {
          dependsOn: 'Baste',
          name: 'Rest',
          uses: 'worktop',
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
          // dependsOn: 'soup.Store',
          uses: 'chopping board',
          step: 'Check the inside of the bird and remove any giblets or pads of fat. Using the tip of a sharp knife, lightly score the breast and leg skin in a criss-cross. This helps the fat to render down more quickly during roasting.',
          durationMins: 5,
        },
        {
          name: 'Combine seasoning',
          dependsOn: 'Prep bird',
          uses: 'chopping board',
          step: 'Grate the zest from 4 lemons and 3 limes. Mix with 2 tsp fine sea salt, 1 tsp Chinese five-spice powder and pepper, to taste.',
          durationMins: 5,
        },
        {
          name: 'Season bird',
          dependsOn: 'Combine seasoning',
          uses: 'chopping board',
          step: 'Season the cavity of the goose generously with salt, then rub the citrus mix well into the skin and sprinkle some inside the cavity.',
          durationMins: 5,
        },
        {
          name: 'Stuff bird',
          dependsOn: 'Season bird',
          uses: 'chopping board',
          step: 'Stuff the zested fruit and a small handful of parsley, thyme and sage sprigs inside the bird and set aside for at least 15 mins.',
          durationMins: 5,
        },
        {
          name: 'Store',
          dependsOn: 'Stuff bird',
          uses: 'fridge',
          step: 'Cover the goose and put in the fridge.',
          durationMins: 5,
        },
        {
          name: 'Preheat oven',
          startTime: christmasDay,
          uses: 'oven',
          step: 'Heat oven to fan 220C.',
          durationMins: 10,
        },
        {
          name: 'Brown bird',
          startTime: christmasDay,
          uses: 'hob-pan',
          step: 'Brown the goose in a large frying pan, using a couple of tbsp olive oil. Holding the bird by the legs (use thick gloves), press it down on the breasts to brown.',
          durationMins: 10,
        },
        {
          name: 'Prep bird again',
          dependsOn: 'Brown bird',
          uses: 'worktop',
          step: 'Once browned, place the bird in the roasting tin. Drizzle with 3 tbsp clear honey and sprinkle with 1 tbsp thyme leaves.',
          durationMins: 5,
        },
        {
          name: 'First roast',
          dependsOn: 'Prep bird again',
          uses: 'oven',
          step: 'Put the goose in the oven and roast for 10 minutes.',
          durationMins: 10,
        },
        {
          name: 'Second roast',
          dependsOn: 'First roast',
          uses: 'oven',
          step: 'Turn down the heat to fan 170C & cook. Cover the goose with foil if it is starting to brown too much.',
          durationMins: 30,
        },
        {
          name: 'Baste',
          dependsOn: 'Second roast',
          uses: 'oven',
          step: 'Baste the bird with the pan juices, then pour off the fat through a sieve into a large heatproof bowl. Put the goose back in the oven.',
          durationMins: 30,
        },
        {
          name: 'Final roast',
          dependsOn: 'Baste',
          uses: 'oven',
          step: 'Baste the bird again with the pan juices, then pour off the fat through a sieve into a large heatproof bowl. Put the goose back in the oven.',
          durationMins: 14,
        },
        {
          name: 'Rest',
          dependsOn: 'Final roast',
          uses: 'worktop',
          step: 'At the end of the cooking time, leave to rest for at least 30 mins, covered loosely with foil. The bird will not go cold, but will be moist and much easier to carve.',
          durationMins: 45,
        },
      ],
    },
    potato: {
      name: 'Duck fat roast potatoes',
      ingredients: [
        '14 Maris Piper Potatoes peeled and cut to serving size',
        'Leftover Goose Fat',
        'Ground pepper',
        'Ground salt',
      ],
      method: [
        {
          name: 'Boil potatoes',
          dependsOn: 'pigs.Store',
          uses: 'hob-pot',
          step: 'Cover the potatoes in cold water, bring to boil and cook for 10 minutes, until a knife cleanly goes through it.',
          durationMins: 20,
        },

        {
          name: 'Cool potatoes',
          dependsOn: 'Boil potatoes',
          uses: 'worktop',
          step: 'Strain and toss the potatoes, then leave to cool in a large pan.',
          durationMins: 10,
        },
        {
          name: 'Season the potatoes',
          dependsOn: 'Cool potatoes',
          uses: 'worktop',
          step: 'Toss the potatoes with salt, pepper and goose fat then lay out on baking tray.',
          durationMins: 5,
        },
        {
          name: 'Room temp',
          startTime: christmasDay,
          uses: 'worktop',
          step: 'Bring the potatoes out of the fridge to cool to room temperature.',
          durationMins: 95,
        },
        {
          name: 'Preheat oven',
          dependsOn: 'Room temp',
          uses: 'oven',
          step: 'Preheat the oven to 200°',
          durationMins: 5,
        },
        {
          name: 'Cook potatoes',
          dependsOn: 'Preheat oven',
          uses: 'oven',
          step: 'Start cooking the potatoes.',
          durationMins: 15,
        },
        {
          name: 'First turn',
          uses: 'oven',
          dependsOn: 'Cook potatoes',
          step: 'Turn and baste the potatoes, returning to the oven.',
          durationMins: 15,
        },
        {
          name: 'Second turn',
          dependsOn: 'First turn',
          uses: 'oven',
          step: 'Turn and baste the potatoes, returning to the oven.',
          durationMins: 15,
        },
        {
          name: 'Rest',
          dependsOn: 'Second turn',
          uses: 'worktop',
          step: 'Leave to cool for 5 minutes before serving.',
          durationMins: 5,
        },
      ],
    },
    veg: {
      name: 'Honey roasted Carrots and Parsnips',
      ingredients: [
        '4 Large Carrots, peeled but not topped and tailed',
        '4 Large Parsnips, peeled but not topped and tailed',
        '2 cloves garlic heads cut off',
        '1 bag of fresh thyme, roughly chopped',
        '1 bag of fresh rosemary, roughly chopped',
        'handful of peppercorns',
        'Runny honey',
      ],
      method: [
        {
          name: 'Boil roots',
          dependsOn: 'pigs.Store',
          uses: 'hob-pot',
          step: 'Cover the the carrots and parsnips in cold water then bring to boil and cook for 10 minutes.',
          durationMins: 20,
        },
        {
          name: 'Cool roots',
          dependsOn: 'Boil roots',
          uses: 'worktop',
          step: 'Strain the roots, leaving them in the strainer',
          durationMins: 10,
        },
        {
          name: 'Prep roots',
          dependsOn: 'Cool roots',
          durationMins: 5,
          uses: 'chopping board',
          step: 'Top and tail and quarter the veg.',
        },
        {
          name: 'Season roots',
          dependsOn: 'Prep roots',
          durationMins: 5,
          uses: 'worktop',
          step: 'Toss the roots with salt, pepper and goose fat then lay out on a baking tray.',
        },
        {
          name: 'Room temp',
          startTime: christmasDay,
          uses: 'worktop',
          step: 'Bring the veg out of the fridge to cool to room temperature.',
          durationMins: 95,
        },
        {
          name: 'Preheat oven',
          dependsOn: 'Room temp',
          uses: 'oven',
          step: 'Preheat the oven to 200°',
          durationMins: 5,
        },
        {
          name: 'Cook roots',
          dependsOn: 'Preheat oven',
          durationMins: 30,
          uses: 'oven',
          step: 'Roast the roots for 30 minutes.',
        },
        {
          name: 'Baste roots',
          dependsOn: 'Cook roots',
          durationMins: 15,
          uses: 'oven',
          step: 'Turn the roots. Coat with honey then roast for 15 more minutes.',
        },
        {
          name: 'Rest',
          dependsOn: 'Baste roots',
          uses: 'worktop',
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
          uses: 'kettle',
          durationMins: 5,
          startTime: christmasDay,
        },
        {
          name: 'Steep',
          dependsOn: 'Boil',
          uses: 'worktop',
          durationMins: 5,
          step: 'Combine stuffing mix, butter and boiling water in a measuring jug, mix and leave for 5 minutes.',
        },
        {
          name: 'Distribute',
          dependsOn: 'Steep',
          uses: 'worktop',
          durationMins: 10,
          step: 'Using a greased muffin tin, split the mixure between all the cases, then remove',
        },
        {
          name: 'Pre-heat',
          dependsOn: 'Steep',
          uses: 'air-fryer',
          durationMins: 10,
          step: 'Pre-heat the air fryer to 180C',
        },
        {
          name: 'Cook',
          dependsOn: 'Distribute',
          uses: 'air-fryer',
          durationMins: 45,
          step: 'In 3 batches of 4, air fry the stuffing balls for 15 minutes, turning every 7 minutes.',
        },
        {
          name: 'Cover',
          uses: 'microwave',
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
          uses: 'worktop',
          step: 'Cut the cocktail sticks in half. Wrap each sausage in a rasher of bacon, pinning in place with the 2 halves of the cocktail sticks.',
          dependsOn: 'goose.Store',
          durationMins: 15,
        },
        {
          name: 'Store',
          uses: 'fridge',
          step: 'Place the prepped pigs in a small roasting tray, wrap in clingfilm and store in the fridge.',
          dependsOn: 'Prep',
          durationMins: 5,
        },
        {
          name: 'Room temp',
          uses: 'worktop',
          step: 'Take the pigs out of the fridge, uncover and let to reach room temperature.',
          startTime: christmasDay,
          durationMins: 95,
        },
        {
          name: 'Cook',
          uses: 'hob-pan',
          step: 'In batches of 7, fry the pigs for 15 minutes, turning every so often.',
          dependsOn: 'Room temp',
          durationMins: 30,
        },
        {
          name: 'Cover',
          uses: 'microwave',
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
          uses: 'chopping board',
          step: 'Quarter all the brussel sprouts, discarding any loose leaves, halve the chestnuts',
          durationMins: 5,
          dependsOn: 'veg.Season roots',
        },
        {
          name: 'Store',
          uses: 'fridge',
          step: 'Put the prepared veg in as small a container as possible and store in the fridge.',
          durationMins: 5,
          dependsOn: 'Prep',
        },
        {
          name: 'Room temp',
          uses: 'worktop',
          step: 'Take the veg and panchetta out of the fridge, uncover and let reach room temperature.',
          durationMins: 95,
          startTime: christmasDay,
        },
        {
          name: 'Cook panchetta',
          uses: 'hob-pan',
          step: 'Heat up a pan with the panchetta, rendering the fat as a cooking oil.',
          durationMins: 10,
          dependsOn: 'Room temp',
        },
        {
          name: 'Add veg',
          uses: 'hob-pan',
          step: 'Add the vegetables to the frying pan and toss to combine.',
          durationMins: 5,
          dependsOn: 'Cook panchetta',
        },
        {
          name: 'Season',
          uses: 'hob-pan',
          step: 'Once the sprouts have some char, add some rum, worcestershire sauce & crushed black pepper, toss to combine.',
          durationMins: 5,
          dependsOn: 'Add veg',
        },
      ],
    },
  },
  dessert: {},
};
