
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('varieties').del()
    .then(function () {
      // Inserts seed entries
      return knex('varieties').insert([
        { plantId: 3, scientificName: 'Beta vulgaris', commonName: 'Detroit Dark Red', description: 'This heirloom beet is one of the most popular beets out there! The round, smooth roots are about 3" in diameter and keep well for canning. On the inside, these organic Detroit dark red beets are blood red in color, with virtually no zoning. Medium green tops with tinges of red can be harvested early and used for salad greens', maturity: 58, outdoor: -4, image: 'https://images-na.ssl-images-amazon.com/images/I/61u0nxTVbML._AC_SL1021_.jpg' },
        { plantId: 3, scientificName: 'Beta vulgaris', commonName: 'Avalanche', description: 'The unique taste of ‘Avalanche’—2015 AAS Vegetable Award Winner—can’t be beat. Hefty, rounded, white-fleshed 2-3" beet champion, offers rich, sweet flavor, free of earthy notes. For a deep, aromatic, profoundly delicious gourmet surprise, roast these beauties: cut them into wedges, add oil, bake till fork-tender, and sprinkle with salt.', maturity: 50, outdoor: 0, image: 'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwda00c329/Images/Product%20Images/prod100117/prod100117_alt3.jpg?sw=322&sh=380&sm=fit' },
        { plantId: 3, scientificName: 'Beta vulgaris', commonName: 'Chioggia', description: 'This is an Italian heirloom from the town of Chioggia, near Venice, and has been popular since the early 1800s. Its beautiful and sweet flavored roots look like bull\'s-eyes having concentric rings of white alternating with wine-red.', maturity: 54, outdoor: 0, image: 'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw78cafbe6/Images/Product%20Images/prod000609/prod000609_alt2.jpg?sw=322&sh=380&sm=fit' },
        { plantId: 3, scientificName: 'Beta vulgaris', commonName: 'Cylindra', description: 'A unique long and cylindrical beet gives 3 to 4 times more uniform slices than round beets. Sweet, dark red roots are 8" long, 1 3/4" across.', maturity: 60, outdoor: -1, image: 'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw0d9b5ccd/Images/Product%20Images/prod000610/prod000610.jpg?sw=322&sh=380&sm=fit' },
        { plantId: 3, scientificName: 'Beta vulgaris', commonName: 'Touchstone Gold', description: 'Touchstone Gold is outstanding and uniformly round, with smooth, bright orange skin and a dazzling vivid golden interior. The deep green, blond-veined tops are equally appealing and perfectly matched to the beet’s smooth, exquisitely sweet flesh.', maturity: 53, outdoor: -2, image: 'https://cdn.shopify.com/s/files/1/1862/4989/products/BT142_450x.jpg?v=1544832952' },
        { plantId: 13, scientificName: 'Capsicum annuum', commonName: 'Poblano (ancho)', description: 'Called poblano when fresh and green, and ancho when dried, these peppers are most commonly used to make chile rellenos (poblanos) and mole sauces (anchos).', maturity: 65, indoor: -10, image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/hand_reaching_for_poblano_peppers-1296x728-header-1296x728.jpg?w=1155&h=1528' },
        { plantId: 13, scientificName: 'Capsicum annuum', commonName: 'Sweet Banana', description: 'Named for its banana-like shape, this variety bears sweet, mild banana peppers that mature from yellow, to orange, and then to crimson red. Plants fruit prolifically, easily producing up to 25 to 30 pods per plant. Banana peppers are great for frying and pickling, and are an excellent choice for making pepper rings for sandwiches. Great for containers.', maturity: 75, indoor: -10, image: 'https://www.gardeningknowhow.com/wp-content/uploads/2012/05/banana-peppers.jpg' },
        { plantId: 13, scientificName: 'Capsicum annuum', commonName: 'Thai Bird\'s Eye', description: 'A very diminutive hot pepper with lots of fire that is used mostly in Asian, African, Spanish, Thai, and Portuguese cooking. The green immature fruits are used as much as the red/purple mature ones. Great for drying whole or ground into chili powder. Used to make peri-peri sauce.', maturity: 100, indoor: -10, image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Thai_peppers.jpg' },
      ]);
    });
};
