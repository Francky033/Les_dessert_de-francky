
    const desserts= [
        {
            "id": 1,
            "categorie": "chocolat",
            "nom": "Fondant au Chocolat",
            "img": "fondant_chocolat.jpg",
            "ingredients": [
              "200g de chocolat noir",
              "150g de beurre",
              "150g de sucre",
              "4 œufs",
              "100g de farine",
              "1 pincée de sel"
            ],
            "preparation": "Préchauffez le four à 180°C. Faites fondre le chocolat et le beurre au bain-marie. Dans un saladier, mélangez le sucre, les œufs, la farine et le sel. Ajoutez le mélange chocolat-beurre fondu. Versez la pâte dans un moule beurré et enfournez pendant 20 minutes.",
            "duree": "30 minutes",
            "difficulte": "Facile",
            "calories": 300,
            "description": "Un délicieux fondant au chocolat avec une texture moelleuse à l'intérieur et une croûte croustillante à l'extérieur. Idéal pour les amateurs de chocolat."
          },
          {
            "id": 2,
            "categorie": "chocolat",
            "nom": "Mousse au Chocolat",
            "img": "mousse_chocolat.jpg",
            "ingredients": [
              "150g de chocolat noir",
              "3 œufs",
              "50g de sucre",
              "1 pincée de sel"
            ],
            "preparation": "Faites fondre le chocolat au bain-marie. Séparez les blancs des jaunes d'œufs. Ajoutez le sucre aux jaunes et battez jusqu'à ce que le mélange blanchisse. Incorporez le chocolat fondu. Montez les blancs en neige avec une pincée de sel et incorporez-les délicatement au mélange. Réfrigérez pendant au moins 2 heures.",
            "duree": "2 heures",
            "difficulte": "Moyenne",
            "calories": 200,
            "description": "Une mousse au chocolat légère et aérée, parfaite pour satisfaire votre envie de chocolat. Un dessert élégant et facile à préparer."
          },
          {
            "id": 3,
            "categorie": "chocolat",
            "nom": "Tarte au Chocolat",
            "img": "tarte_chocolat.jpg",
            "ingredients": [
              "250g de pâte sablée",
              "200g de chocolat noir",
              "200ml de crème fraîche",
              "50g de sucre",
              "2 œufs"
            ],
            "preparation": "Préchauffez le four à 180°C. Étalez la pâte sablée dans un moule à tarte. Faites fondre le chocolat avec la crème fraîche. Ajoutez le sucre et les œufs, puis versez le mélange sur la pâte. Enfournez pendant 25-30 minutes.",
            "duree": "40 minutes",
            "difficulte": "Moyenne",
            "calories": 350,
            "description": "Une délicieuse tarte au chocolat avec une base sablée croustillante et une garniture chocolatée fondante. Un régal pour les amateurs de chocolat."
          },
          {
            "id": 4,
            "categorie": "chocolat",
            "nom": "Crêpes au Chocolat",
            "img": "crepes_chocolat.jpg",
            "ingredients": [
              "250g de farine",
              "500ml de lait",
              "2 œufs",
              "50g de cacao en poudre",
              "100g de chocolat noir fondu"
            ],
            "preparation": "Dans un saladier, mélangez la farine, le lait, les œufs et le cacao en poudre jusqu'à obtenir une pâte lisse. Faites cuire les crêpes dans une poêle chaude. Garnissez-les de chocolat noir fondu.",
            "duree": "30 minutes",
            "difficulte": "Facile",
            "calories": 250,
            "description": "Des crêpes légères et moelleuses avec une garniture généreuse de chocolat noir fondu. Parfaites pour un petit déjeuner gourmand ou un dessert rapide."
          },
          {
            "id": 5,
            "categorie": "chocolat",
            "nom": "Fraises au Chocolat",
            "img": "fraises_chocolat.jpg",
            "ingredients": [
              "250g de fraises",
              "150g de chocolat noir fondu",
              "50g de chocolat blanc fondu"
            ],
            "preparation": "Lavez et séchez les fraises. Trempez-les dans le chocolat noir fondu, puis décorez-les avec le chocolat blanc fondu. Laissez-les durcir avant de servir.",
            "duree": "20 minutes",
            "difficulte": "Facile",
            "calories": 120,
            "description": "Des fraises fraîches enrobées d'une couche de chocolat noir et blanc. Un dessert léger et rafraîchissant pour les journées chaudes."
          },
          {
            "id": 6,
            "categorie": "chocolat",
            "nom": "Pots de Crème au Chocolat",
            "img": "pots_creme_chocolat.jpg",
            "ingredients": [
              "200g de chocolat noir",
              "400ml de lait",
              "100g de sucre",
              "4 jaunes d'œufs"
            ],
            "preparation": "Faites fondre le chocolat dans le lait. Dans un autre récipient, battez les jaunes d'œufs avec le sucre. Versez le mélange chocolat-lait sur les œufs battus en remuant constamment. Versez la préparation dans des pots et réfrigérez pendant au moins 4 heures.",
            "duree": "4 heures",
            "difficulte": "Moyenne",
            "calories": 280,
            "description": "Des petits pots de crème au chocolat crémeux, parfaits pour satisfaire vos envies de douceur. Un dessert qui plaira à tous."
          },
          {
            "id": 7,
            "categorie": "chocolat",
            "nom": "Brownies au Chocolat",
            "img": "brownies_chocolat.jpg",
            "ingredients": [
              "200g de chocolat noir",
              "150g de beurre",
              "200g de sucre",
              "3 œufs",
              "100g de farine",
              "1 pincée de sel"
            ],
            "preparation": "Préchauffez le four à 180°C. Faites fondre le chocolat et le beurre au bain-marie. Ajoutez le sucre, les œufs, la farine et le sel. Versez la pâte dans un moule beurré et enfournez pendant 25-30 minutes.",
            "duree": "35 minutes",
            "difficulte": "Moyenne",
            "calories": 320,
            "description": "Des brownies riches en chocolat avec une texture moelleuse à l'intérieur et une croûte légèrement croustillante. Un délice pour les amateurs de chocolat."
          },
          {
            "id": 8,
            "categorie": "chocolat",
            "nom": "Biscuits au Chocolat",
            "img": "biscuits_chocolat.jpg",
            "ingredients": [
              "200g de chocolat noir",
              "100g de beurre",
              "150g de sucre",
              "2 œufs",
              "250g de farine",
              "1/2 cuillère à café de levure chimique"
            ],
            "preparation": "Faites fondre le chocolat et le beurre au bain-marie. Ajoutez le sucre, les œufs, la farine et la levure chimique. Formez des boules de pâte et placez-les sur une plaque de cuisson. Enfournez pendant 12-15 minutes.",
            "duree": "25 minutes",
            "difficulte": "Facile",
            "calories": 180,
            "description": "Des biscuits au chocolat moelleux à l'intérieur et légèrement croquants à l'extérieur. Parfaits pour accompagner une pause café ou thé."
          },
      {
        "id": 8,
        "categorie": "chocolat",
        "nom": "Biscuits au Chocolat",
        "img": "biscuits_chocolat.jpg",
        "ingredients": [
          "200g de chocolat noir",
          "100g de beurre",
          "150g de sucre",
          "2 œufs",
          "250g de farine",
          "1/2 cuillère à café de levure chimique"
        ],
        "preparation": "Faites fondre le chocolat et le beurre au bain-marie. Ajoutez le sucre, les œufs, la farine et la levure chimique. Formez des boules de pâte et placez-les sur une plaque de cuisson. Enfournez pendant 12-15 minutes.",
        "duree": "25 minutes",
        "difficulte": "Facile",
        "calories": 180
      },
      {
        "id": 9,
        "categorie": "chocolat",
        "nom": "Gâteau au Chocolat et Noisettes",
        "img": "gateau_noisettes_chocolat.jpg",
        "ingredients": [
          "200g de chocolat noir",
          "150g de beurre",
          "150g de sucre",
          "4 œufs",
          "100g de noisettes moulues",
          "1 pincée de sel"
        ],
        "preparation": "Préchauffez le four à 180°C. Faites fondre le chocolat et le beurre au bain-marie. Dans un saladier, mélangez le sucre, les œufs, les noisettes moulues et le sel. Ajoutez le mélange chocolat-beurre fondu. Versez la pâte dans un moule beurré et enfournez pendant 30 minutes.",
        "duree": "40 minutes",
        "difficulte": "Moyenne",
        "calories": 280
      },
      {
        "id": 10,
        "categorie": "chocolat",
        "nom": "Cupcakes au Chocolat",
        "img": "cupcakes_chocolat.jpg",
        "ingredients": [
          "150g de chocolat noir",
          "150g de beurre",
          "150g de sucre",
          "3 œufs",
          "150g de farine",
          "1/2 cuillère à café de levure chimique"
        ],
        "preparation": "Préchauffez le four à 180°C. Faites fondre le chocolat et le beurre au bain-marie. Ajoutez le sucre, les œufs, la farine et la levure chimique. Répartissez la pâte dans des moules à cupcakes et enfournez pendant 18-20 minutes.",
        "duree": "30 minutes",
        "difficulte": "Facile",
        "calories": 220
      },
  
      {
        "id": 11,
        "categorie": "fruit",
        "nom": "Salade de Fruits Frais",
        "img": "salade_fruits.jpg",
        "ingredients": [
          "1 ananas",
          "2 oranges",
          "1 banane",
          "1 pomme",
          "1 kiwi",
          "Menthe fraîche pour la garniture"
        ],
        "preparation": "Épluchez et coupez tous les fruits en morceaux. Mélangez-les dans un saladier. Garnissez de feuilles de menthe fraîche. Réfrigérez avant de servir.",
        "description": "Une salade de fruits fraîche et colorée, parfaite pour une pause légère et gourmande.",
        "duree": "15 minutes",
        "difficulte": "Facile",
        "calories": 120
      },
      {
        "id": 12,
        "categorie": "fruit",
        "nom": "Smoothie aux Baies",
        "img": "smoothie_baies.jpg",
        "ingredients": [
          "1 tasse de fraises",
          "1/2 tasse de framboises",
          "1/2 tasse de myrtilles",
          "1 banane",
          "1 tasse de yaourt nature",
          "Miel pour sucrer (facultatif)"
        ],
        "preparation": "Mélangez tous les ingrédients dans un mixeur jusqu'à obtenir une consistance lisse. Ajoutez du miel si nécessaire. Servez immédiatement.",
        "description": "Un smoothie délicieusement riche en antioxydants, idéal pour une dose de vitalité.",
        "duree": "10 minutes",
        "difficulte": "Facile",
        "calories": 150
      },
      {
        "id": 13,
        "categorie": "fruit",
        "nom": "Brochettes de Fruits",
        "img": "brochettes_fruits.jpg",
        "ingredients": [
          "1 ananas",
          "2 kiwis",
          "1 mangue",
          "1 banane",
          "Fraises",
          "Yaourt à la grecque pour la trempette"
        ],
        "preparation": "Coupez les fruits en morceaux. Enfilez-les sur des brochettes. Servez avec du yaourt à la grecque en trempette.",
        "description": "Des brochettes de fruits colorées et rafraîchissantes, parfaites pour les goûters estivaux.",
        "duree": "20 minutes",
        "difficulte": "Facile",
        "calories": 100
      },
      {
        "id": 14,
        "categorie": "fruit",
        "nom": "Compote de Pommes Cannelle",
        "img": "compote_pommes.jpg",
        "ingredients": [
          "4 pommes",
          "1 cuillère à café de cannelle",
          "1 cuillère à soupe de sucre",
          "Jus de citron"
        ],
        "preparation": "Épluchez et coupez les pommes en morceaux. Dans une casserole, faites cuire les pommes avec la cannelle, le sucre et un peu de jus de citron jusqu'à obtenir une compote.",
        "description": "Une compote de pommes délicatement parfumée à la cannelle, parfaite en dessert ou en accompagnement.",
        "duree": "25 minutes",
        "difficulte": "Facile",
        "calories": 80
      },
      {
        "id": 15,
        "categorie": "fruit",
        "nom": "Pêches Rôties au Miel",
        "img": "peches_roties.jpg",
        "ingredients": [
          "4 pêches",
          "2 cuillères à soupe de miel",
          "1 cuillère à café de vanille",
          "Yaourt grec pour servir"
        ],
        "preparation": "Coupez les pêches en deux et retirez les noyaux. Badigeonnez-les de miel et de vanille. Faites-les rôtir au four pendant 15 minutes. Servez avec du yaourt grec.",
        "description": "Des pêches juteuses rôties au miel, un dessert simple et gourmand.",
        "duree": "20 minutes",
        "difficulte": "Facile",
        "calories": 130
      },
      {
        "id": 16,
        "categorie": "fruit",
        "nom": "Tarte aux Fruits de la Passion",
        "img": "tarte_passion.jpg",
        "ingredients": [
          "1 pâte sablée",
          "6 fruits de la passion",
          "250ml de jus de fruits de la passion",
          "1/2 tasse de sucre",
          "2 cuillères à soupe de fécule de maïs"
        ],
        "preparation": "Préchauffez le four à 180°C. Étalez la pâte sablée dans un moule à tarte. Mélangez le jus de fruits de la passion, le sucre et la fécule de maïs. Versez sur la pâte et faites cuire au four pendant 25-30 minutes.",
        "description": "Une tarte exotique aux fruits de la passion, un délice sucré à savourer.",
        "duree": "40 minutes",
        "difficulte": "Moyenne",
        "calories": 180
      },
      {
        "id": 17,
        "categorie": "fruit",
        "nom": "Smoothie Ananas-Coco",
        "img": "smoothie_ananas_coco.jpg",
        "ingredients": [
          "1 tasse d'ananas",
          "1 tasse de lait de coco",
          "1 banane",
          "Jus d'un citron",
          "Glaçons"
        ],
        "preparation": "Mélangez tous les ingrédients dans un mixeur jusqu'à obtenir une consistance lisse. Ajoutez des glaçons et servez immédiatement.",
        "description": "Un smoothie tropical à l'ananas et au lait de coco, rafraîchissant et délicieusement crémeux.",
        "duree": "10 minutes",
        "difficulte": "Facile",
        "calories": 160
      },
      {
        "id": 18,
        "categorie": "fruit",
        "nom": "Gâteau aux Fraises",
        "img": "gateau_fraises.jpg",
        "ingredients": [
          "2 tasses de fraises",
          "1 tasse de sucre",
          "1/2 tasse de beurre",
          "2 œufs",
          "1 cuillère à café de vanille",
          "2 tasses de farine",
          "1 cuillère à café de levure chimique"
        ],
        "preparation": "Préchauffez le four à 180°C. Mélangez les fraises avec le sucre et laissez reposer. Dans un autre récipient, battez le beurre, les œufs et la vanille. Ajoutez la farine et la levure. Incorporez les fraises. Versez la pâte dans un moule et faites cuire au four pendant 35-40 minutes.",
        "description": "Un gâteau moelleux aux fraises, parfait pour célébrer la saison des fruits.",
        "duree": "50 minutes",
        "difficulte": "Moyenne",
        "calories": 220
      },
      {
        "id": 19,
        "categorie": "fruit",
        "nom": "Sorbet aux Citrons",
        "img": "sorbet_citrons.jpg",
        "ingredients": [
          "4 citrons",
          "1 tasse d'eau",
          "1 tasse de sucre",
          "Blanc d'œuf (facultatif)"
        ],
        "preparation": "Pressez les citrons pour obtenir le jus. Dans une casserole, faites chauffer l'eau et le sucre pour préparer un sirop. Mélangez le sirop au jus de citron. Utilisez une sorbetière pour obtenir une texture onctueuse. Ajoutez éventuellement du blanc d'œuf pour une texture plus légère.",
        "description": "Un sorbet rafraîchissant aux citrons, une option légère pour conclure un repas estival.",
        "duree": "4 heures",
        "difficulte": "Facile",
        "calories": 90
      },
      {
        "id": 20,
        "categorie": "fruit",
        "nom": "Ananas Grillé au Miel",
        "img": "ananas_grille.jpg",
        "ingredients": [
          "1 ananas",
          "2 cuillères à soupe de miel",
          "1 cuillère à café de cannelle",
          "Yaourt grec pour servir"
        ],
        "preparation": "Épluchez et coupez l'ananas en tranches. Mélangez le miel et la cannelle. Badigeonnez les tranches d'ananas de ce mélange. Faites-les griller pendant quelques minutes de chaque côté. Servez avec du yaourt grec.",
        "description": "Des tranches d'ananas grillées au miel, une manière sucrée et légère de profiter de ce fruit tropical.",
        "duree": "15 minutes",
        "difficulte": "Facile",
        "calories": 110
      }
    ]
  
    module.exports = desserts
  