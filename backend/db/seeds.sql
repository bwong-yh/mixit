INSERT INTO recipe (name, image, instructions, created) VALUES ('GOLD RUSH', 'https://firebasestorage.googleapis.com/v0/b/mixit-b0d7f.appspot.com/o/gold-rush.webp?alt=media&token=f61f5e37-2717-4261-9db9-773e2f0f9c4a', 'Add the bourbon, lemon juice, and honey syrup to a cocktail shaker. Fill with a handful of ice and shake until very cold. \nStrain the drink into a lowball or Old Fashioned glass. Serve with ice and a lemon wedge.', '2022-Oct-30');
INSERT INTO recipe (name, image, instructions, created) VALUES ('WHITE NEGRONI', 'https://firebasestorage.googleapis.com/v0/b/mixit-b0d7f.appspot.com/o/white-negroni.webp?alt=media&token=9e705fea-9e5d-40d9-a547-abaf674d033b', 'Combine the gin, Suze and Lillet Blanc in a cocktail mixing glass (or any other type of glass). Fill the mixing glass with 1 handful ice and stir continuously for 30 seconds. \nAdd ice to a lowball glass, and strain the drink into the glass (or you can use a cocktail glass without ice). \nUse a knife to remove a 1″ wide strip of the lemon peel. Squeeze the lemon peel into the drink to release the oils. Gently run the peel around the edge of the glass, then place it in the glass and serve.', '2022-Oct-30');

INSERT INTO ingredient (recipe_id, name, amount) VALUES 
(1, 'bourbon', '2 oz.'),
(1, 'lemon juice', '1 oz.'),
(1, 'honey syrup', '0.75 oz.'),
(1, 'lemon wedge', null);
INSERT INTO ingredient (recipe_id, name, amount) VALUES 
(2, 'gin', '1 oz.'),
(2, 'suze', '1 oz.'),
(2, 'vermouth', '1 oz.'),
(2, 'ice', null),
(2, 'lemon peel', null);