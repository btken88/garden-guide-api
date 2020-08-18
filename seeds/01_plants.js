
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { id: 1, name: 'Artichokes', description: 'Artichokes can be produced from seeds or from vegetative means such as division, root cuttings, or micropropagation. Although technically perennials that normally produce the edible flower during only the second and subsequent years, certain varieties of artichokes can be grown from seed as annuals, producing a limited harvest at the end of the first growing season, even in regions where the plants are not normally winter-hardy.\nArtichokes require good soil, regular watering and feeding, and frost protection in winter. Rooted suckers can be planted each year, so mature specimens can be disposed of after a few years, as each individual plant lives only a few years. The peak season for artichoke harvesting is the spring, but they can continue to be harvested throughout the summer, with another peak period in midautumn.', image: 'https://edge.bonnieplants.com/www/uploads/20180920011956/artichoke-plant-lo.jpg' },
        { id: 2, name: 'Beans', description: 'Dependable and easy to care for, snap beans are also among the most productive veggies you can grow. Snap beans mature quickly, too, and almost everyone – including kids – loves fresh snap beans. Plant snap beans in spring after the last frost and once the soil is warm.\nAre all snap beans alike? Not at all! Snap beans come in a huge range of sizes and colors because any immature bean with pods that taste good when “snapped” into pieces is a snap bean. Snap beans vary in growth habit, too. Pole-type beans such as asparagus bean need a sturdy tall trellis to hold the plants. Bush-type beans such as Blue Lake need less up-front set-up and are fast and easy to pick. They are good for spaces where you don’t have the height for a bean trellis.', image: 'https://edge.bonnieplants.com/www/uploads/20180920011611/ripe-bean-pods.jpg' },
        { id: 3, name: 'Beets', description: 'If you love sweet, earthy beets, it’s time to grow your own. A dual-purpose vegetable, beets taste delicious whether you’re eating the greens in a salad or roasting the roots for a main dish. Plus, beets make a terrific garden addition, thriving in the cool temperatures of spring and fall when you’re longing for fresh, homegrown flavors but it’s grown too chilly for summer crops, like tomatoes.\nBeets are a terrific choice for succession planting (staggering your plantings so they mature at different times), too, because beets mature quickly. High in fiber and rich in vitamins A and C, beet greens contain more iron than many other veggies and turn a boring salad into a delicious, nutrient-packed treat. The roots, of course, can be enjoyed raw or cooked, in many different, tasty ways. With this kind of versatility, beets are definitely worth growing in your garden!', image: 'https://www.culinaryhill.com/wp-content/uploads/2019/06/How-to-Roast-Beets-Culinary-Hill-2.jpg' },
        { id: 4, name: 'Broccoli', description: 'Broccoli is a hardy vegetable that develops best during cool seasons of the year. Two crops per year (spring and fall) are possible in most parts of the country, especially with continuous improvement in fast maturity and heat tolerance that extends the life of broccoli through all but the hottest parts of the season. It belongs to the cole crop family (Brassica oleracea), which includes cabbage, Brussels sprouts, cauliflower, collards, kale, and kohlrabi.', image: 'https://edge.bonnieplants.com/www/uploads/20180920011926/broccoli-head-lo.jpg' },
        { id: 5, name: 'Carrots', description: 'If you enjoy crisp, crunchy carrots, you’ll adore the fresh flavor of homegrown. Not only do they taste especially delicious when you grow carrots in your own garden, but they’re also extra sweet when kissed by frost. What’s more, they’ll last for several weeks after harvest when stored in a refrigerator or cool root cellar. Rich in vitamins, they’re low in calories and an excellent source of fiber. Carrots make the perfect home-grown snack, plus they’re a wonderful addition to juices and even baked goods—they make cakes and muffins super moist. Bonus: Each time you harvest a carrot is like a pulling a treasure from the soil.', image: 'https://cdn.apartmenttherapy.info/image/upload/v1560538280/k/Photo/Recipes/2019-07-recipe-31-days-of-vegetables/Veg-a-Day_carrots-012.jpg' },
        { id: 6, name: 'Corn', description: 'Corn needs plenty of space for two reasons — it takes up a lot of nutrition from the soil, and it is primarily pollinated by wind. As grains of pollen are shed by the tassels that grow from the plants’ tops, they must find their way to the delicate strands of silk that emerge from newly formed ears. To make sure silks are nicely showered with pollen, grow corn in blocks of short rows rather than in a long, single row. In a small garden, 15 plants set 1 foot apart can be grown in a 3 x 5-foot bed. Growing corn on this tiny scale is a good way to introduce yourself to the crop if you’ve never grown it. After the first year you will probably want to increase the size of the planting to at least 4 rows 10 feet long.\nCorn plants are not like tomatoes or most other vegetables, which bear over a long period of time. Instead, they form a few ears per stalk and they are finished. Because of this, gardeners who have the space often make 2 or 3 plantings 2 weeks apart to keep the harvest coming.', image: 'https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg' },
        { id: 7, name: 'Cucumbers', description: 'A tropical vegetable, cucumbers thrive when the weather is hot and water is plentiful. Growing cucumbers is for warmer weather: Plants are so frost-tender that they shouldn’t be set into the garden until soil temperatures are reliably in the 70-degree range (no less than 2 weeks after the last frost date).\nCucumber plants grow in two forms: vining and bush. Vines scramble along the ground or clamber up trellises, while bush types, such as Burpless Bush Hybrid, form a more compact plant. Generally, vining cucumbers yield more fruit throughout the growing season. Bush selections are especially suited to containers and small gardens. You can increase the season’s yield of bush varieties by planting several crops in succession 2 weeks apart.', image: 'https://edge.bonnieplants.com/www/uploads/20180920003207/Spacemaster-Cucumber.jpg' },
        { id: 8, name: 'Eggplants', description: 'Growing eggplant is a must if you’re a fan of outdoor grilling! These stately plants grow well and look beautiful in containers, ornamental borders, raised beds, and traditional in-ground gardens. Small-fruited varieties tend to be especially heavy bearers, and you can expect to pick a dozen or more from each Ichiban plant over the summer in warm climates. Larger varieties bear more traditional-sized fruits, and are equally impressive whether in the garden or kitchen, where they can be stuffed, grilled, or combined with summer herbs and tomatoes in homemade eggplant parmesan.', image: 'https://assets.epicurious.com/photos/55ccd3996a622aab4ea63c51/master/pass/EP_08122015_eggplant_hero.jpg' },
        { id: 9, name: 'Lettuce', description: 'If you grow only one vegetable other than tomatoes, it should be lettuce. Growing lettuce is so easy, takes up little space, and you can even grow it among flowers.\nLettuce grows for many weeks in the mild weather of spring and fall. Leaf lettuce is easy to tuck in between and under taller vegetables, and is perfect for containers. See our online catalog for more about the different types.', image: 'https://www.almanac.com/sites/default/files/image_nodes/lettuce-varieties.jpg' },
        { id: 10, name: 'Melons', description: 'Growing melons at home is so rewarding, as these fruits offer an explosive taste that doesn’t compare to their store-bought cousins. The key is plenty of moisture, sunlight, and heat. Melons demand two to three months of heat, which makes growing them in northern regions challenging, but not impossible. By using a black ground cover to warm soil and floating row covers to trap warm air near plants, gardeners in any part of the country can count on cutting into the homegrown goodness of melons. These sun-ripened fruits pack plenty of vitamin C and antioxidants into every bite, combining great taste with great nutrition.', image: 'https://edge.bonnieplants.com/www/uploads/20180920004602/watermelon-on-vine-on-straw-web.jpg' },
        { id: 11, name: 'Onions', description: 'Growing onions is simple: If you can poke a hole into the ground, you can grow an onion from a little plant. Most onion varieties are sold as little seedlings in bare-root bundles known as starts; each plant will start growing within days after you plant. If you can’t plant your onions right away, remove their bindings and place them in a bucket with 2 inches of moist soil in the bottom. Keep them in a cool, bright place but out of direct sun until you are ready to plant. A sunny basement is ideal.', image: 'https://cbsnews3.cbsistatic.com/hub/i/r/2017/09/27/8bc22f2a-4fc6-4bc4-afee-2d784ec9e281/thumbnail/1200x630/e22953db4440276286f45a9a5f18793a/istock-517153774.jpg' },
        { id: 12, name: 'Peas', description: 'Green peas come in three primary types. Traditional English peas have sweet, round, green peas inside a pod; you shell the peas and throw away the pod. Snow peas, the crunchy, flat, sweet pods of Chinese cuisine which are eaten whole; the peas inside are not allowed to get big. Snap-style peas combine the best of both English and Snow peas and you can eat the whole thing, pod and all, cooked or raw. Snap-style green peas, also called edible podded peas, are the only pea one needs to grow because they are all in one. They also pack a nutritious punch with plenty of iron and vitamin C in every bite. Snap-style Green Pea plants bear small plump pods of round peas on very compact vines.', image: 'https://edge.bonnieplants.com/www/uploads/20180920011522/Snap-pea.jpg' },
        { id: 13, name: 'Peppers', description: 'From sweet, crisp peppers in rainbow shades to habañeros hot enough to bring tears to your eyes, all peppers share a preference for a long, warm growing season. Set out plants a week or two after your last frost, when the weather is settled and warm. While cool weather reigns, keep seedlings indoors at night, and move them to a protected sunny spot outdoors during the day.\nBy growing an assortment of varieties of peppers, you can have mild, meaty peppers for salads or stir-fries, slightly spicy peppers for fresh salsas, and hot peppers for bold jolts of flavor. Under hot summer conditions, varieties that bear huge fruits may shed their blossoms, but small, thin-walled peppers often keep going strong. Small-fruited peppers also ripen faster, which is important in cool climates where summers are short.', image: 'https://assets3.thrillist.com/v1/image/2823036/1200x630' },
        { id: 14, name: 'Potatoes', description: 'An ancient vegetable, potatoes were first cultivated by the ancient Incas in Peru. This crop came to America in 1621, and today is the most popular vegetable in the United States. If you love potatoes and have never tasted a homegrown one, you definitely need to try growing potatoes. Potatoes are cool-season vegetables and yield the best quality and number of tubers in the northern portion of the country. And just so you know: A potato isn’t a root but an underground storage stem called a tuber.', image: 'https://edge.bonnieplants.com/www/uploads/20180920011446/red-potatoes-growing-lo.jpg' },
        { id: 15, name: 'Radishes', description: 'Radishes are a hardy, very easy-to-grow root vegetable that can be planted multiple times in a growing season. Plus, radishes can be harvested as soon as three weeks after planting!', image: 'https://www.rareseeds.com/media/catalog/product/cache/c47cc5acc2b9ab2a357f100ee4780008/R/a/Radish-Assorted-LSS-000_9534.jpg' },
        { id: 16, name: 'Tomatillos', description: 'Tomatillos are the odd-looking distant cousins of the beloved tomato. Native to central America, they can be found growing wild in fields of corn and beans, and they are gathered to be eaten or sold in local markets. As with any abundant produce, the local cuisine has come to rely on its distinctive qualities. To prepare many Mexican food favorites, you need to be growing tomatillos in your garden.\nThe name and the requirements for growing tomatoes and tomatillos are similar, but the comparison really stops there. The appearance of a tomatillo (pronounced to-ma-TEE-yo) with its papery husk is quite different. In fact, it is also known as a husk tomato, due to the dry cover that surrounds the fruit.', image: 'https://images.ctfassets.net/3s5io6mnxfqz/4q1tZUzurfu5vjt70bcsL7/39ca49e649b8d19e8c79c8c43d8ec117/AdobeStock_188459409.jpeg' },
        { id: 17, name: 'Tomatoes', description: 'Tomatoes may be the most popular plant species in home gardens worldwide, often taking first place in lists of favorite garden vegetables. Although commonly grown as annuals in home gardens, tomatoes are technically perennials and some varieties may bear for more than one season or more than one year in mild winter climates.\nOver centuries, tomatoes have been bred and hybridized into an incredible diversity of shapes, colors, and varieties. The thousands of available tomato varieties may be categorized or described by shape, size, use, color, length of season to harvest; by disease resistance; as hybrid or heirloom; and as determinate or indeterminate.', image: 'https://edge.bonnieplants.com/www/uploads/20180920011513/tomato-cluster-ripening.jpg' },
        { id: 18, name: 'Winter Squash', description: 'Winter squashes are hard skinned and hard fleshed vegetables like pumpkins, acorn, and butternut squashes. These vegetables boasts more than good looks - they\'re also full of nutrition, dishing up vitamin C, beta-carotene, fiber, and potassium. Squash crave lots of moisture, compost-enriched soil, and plenty of sun. Meet those requirements, and these sprawling vines will bear a bumper crop', image: 'https://www.welcometothetable.coop/sites/default/files/Winter_Squash_Guide.jpg' },
        { id: 19, name: 'Zucchini', description: 'Growing summer squash is easier than you might think. Plant a buttery Yellow Crookneck, delicately flavoured Pattypan, and a Black Beauty zucchini, and by time peak season rolls around, you could be picking several squash a day — more than enough to eat, freeze, and gift to friends and neighbors. These vining plants need lots of space, sun, and water to thrive.', image: 'https://chicofarmersmarket.com/wp-content/uploads/2019/06/squash1.jpg' },
        { id: 20, name: 'Herbs', description: 'Herbs are plants with savory or aromatic properties that are used for flavoring and garnishing food, for medicinal purposes, or for fragrances. Culinary herbs can be either pernnial or annual, and though the greenery is used for herbs, the seeds and roots of some plants may also be used as spices.', image: 'https://www.sandiegohomegarden.com/content/uploads/2019/06/herbs.jpg' }
      ]);
    });
};
