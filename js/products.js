const PRODUCTS = [
  {
    "id": 1,
    "name": "ABI Smash Classic",
    "category": "Smash Burgers",
    "description": "ABI Smash Classic preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 19.7,
    "image": "assets/burgers/burger1.svg"
  },
  {
    "id": 2,
    "name": "ABI Smash Duplo",
    "category": "Smash Burgers",
    "description": "ABI Smash Duplo preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 21.4,
    "image": "assets/burgers/burger2.svg"
  },
  {
    "id": 3,
    "name": "Smash Bacon Gold",
    "category": "Smash Burgers",
    "description": "Smash Bacon Gold preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 23.1,
    "image": "assets/burgers/burger3.svg"
  },
  {
    "id": 4,
    "name": "Smash Cheddar Prime",
    "category": "Smash Burgers",
    "description": "Smash Cheddar Prime preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 24.8,
    "image": "assets/burgers/burger4.svg"
  },
  {
    "id": 5,
    "name": "Smash Onion",
    "category": "Smash Burgers",
    "description": "Smash Onion preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 26.5,
    "image": "assets/burgers/burger5.svg"
  },
  {
    "id": 6,
    "name": "Smash Barbecue",
    "category": "Smash Burgers",
    "description": "Smash Barbecue preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 28.2,
    "image": "assets/burgers/burger6.svg"
  },
  {
    "id": 7,
    "name": "Smash Pimenta Roxa",
    "category": "Smash Burgers",
    "description": "Smash Pimenta Roxa preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 29.9,
    "image": "assets/burgers/burger7.svg"
  },
  {
    "id": 8,
    "name": "Smash Kids",
    "category": "Smash Burgers",
    "description": "Smash Kids preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 31.6,
    "image": "assets/burgers/burger8.svg"
  },
  {
    "id": 9,
    "name": "ABI Supreme",
    "category": "Hambúrgueres Artesanais",
    "description": "ABI Supreme preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 25.7,
    "image": "assets/burgers/burger1.svg"
  },
  {
    "id": 10,
    "name": "ABI Brioche Gold",
    "category": "Hambúrgueres Artesanais",
    "description": "ABI Brioche Gold preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 27.4,
    "image": "assets/burgers/burger2.svg"
  },
  {
    "id": 11,
    "name": "Artesanal Bacon Crispy",
    "category": "Hambúrgueres Artesanais",
    "description": "Artesanal Bacon Crispy preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 29.1,
    "image": "assets/burgers/burger3.svg"
  },
  {
    "id": 12,
    "name": "Artesanal Costela",
    "category": "Hambúrgueres Artesanais",
    "description": "Artesanal Costela preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 30.8,
    "image": "assets/burgers/burger4.svg"
  },
  {
    "id": 13,
    "name": "Artesanal Queijo Prata",
    "category": "Hambúrgueres Artesanais",
    "description": "Artesanal Queijo Prata preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 32.5,
    "image": "assets/burgers/burger5.svg"
  },
  {
    "id": 14,
    "name": "Artesanal Cebola Caramelizada",
    "category": "Hambúrgueres Artesanais",
    "description": "Artesanal Cebola Caramelizada preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 34.2,
    "image": "assets/burgers/burger6.svg"
  },
  {
    "id": 15,
    "name": "Artesanal Frango Cream",
    "category": "Hambúrgueres Artesanais",
    "description": "Artesanal Frango Cream preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 35.9,
    "image": "assets/burgers/burger7.svg"
  },
  {
    "id": 16,
    "name": "Artesanal Calabresa",
    "category": "Hambúrgueres Artesanais",
    "description": "Artesanal Calabresa preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 37.6,
    "image": "assets/burgers/burger8.svg"
  },
  {
    "id": 17,
    "name": "Artesanal Egg Prime",
    "category": "Hambúrgueres Artesanais",
    "description": "Artesanal Egg Prime preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 39.3,
    "image": "assets/burgers/burger9.svg"
  },
  {
    "id": 18,
    "name": "Artesanal Tropical",
    "category": "Hambúrgueres Artesanais",
    "description": "Artesanal Tropical preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 41.0,
    "image": "assets/burgers/burger10.svg"
  },
  {
    "id": 19,
    "name": "Angus Purple Prime",
    "category": "Angus e Especiais",
    "description": "Angus Purple Prime preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 30.7,
    "image": "assets/burgers/burger1.svg"
  },
  {
    "id": 20,
    "name": "Angus Dourado",
    "category": "Angus e Especiais",
    "description": "Angus Dourado preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 32.4,
    "image": "assets/burgers/burger2.svg"
  },
  {
    "id": 21,
    "name": "Angus Catupiry",
    "category": "Angus e Especiais",
    "description": "Angus Catupiry preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 34.1,
    "image": "assets/burgers/burger3.svg"
  },
  {
    "id": 22,
    "name": "Angus Barbecue Smoke",
    "category": "Angus e Especiais",
    "description": "Angus Barbecue Smoke preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 35.8,
    "image": "assets/burgers/burger4.svg"
  },
  {
    "id": 23,
    "name": "Costela Royal",
    "category": "Angus e Especiais",
    "description": "Costela Royal preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 37.5,
    "image": "assets/burgers/burger5.svg"
  },
  {
    "id": 24,
    "name": "Chicken Crispy ABI",
    "category": "Angus e Especiais",
    "description": "Chicken Crispy ABI preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 39.2,
    "image": "assets/burgers/burger6.svg"
  },
  {
    "id": 25,
    "name": "Veggie Premium",
    "category": "Angus e Especiais",
    "description": "Veggie Premium preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 40.9,
    "image": "assets/burgers/burger7.svg"
  },
  {
    "id": 26,
    "name": "ABI Monster",
    "category": "Angus e Especiais",
    "description": "ABI Monster preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 42.6,
    "image": "assets/burgers/burger8.svg"
  },
  {
    "id": 27,
    "name": "Combo Casal ABI",
    "category": "Combos",
    "description": "Combo Casal ABI preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 39.7,
    "image": "assets/burgers/burger1.svg"
  },
  {
    "id": 28,
    "name": "Combo Família ABI",
    "category": "Combos",
    "description": "Combo Família ABI preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 41.4,
    "image": "assets/burgers/burger2.svg"
  },
  {
    "id": 29,
    "name": "Combo Gamer",
    "category": "Combos",
    "description": "Combo Gamer preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 43.1,
    "image": "assets/burgers/burger3.svg"
  },
  {
    "id": 30,
    "name": "Combo Prime Night",
    "category": "Combos",
    "description": "Combo Prime Night preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 44.8,
    "image": "assets/burgers/burger4.svg"
  },
  {
    "id": 31,
    "name": "Combo Smash Duplo",
    "category": "Combos",
    "description": "Combo Smash Duplo preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 46.5,
    "image": "assets/burgers/burger5.svg"
  },
  {
    "id": 32,
    "name": "Combo Kids Feliz",
    "category": "Combos",
    "description": "Combo Kids Feliz preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 48.2,
    "image": "assets/burgers/burger6.svg"
  },
  {
    "id": 33,
    "name": "Combo Amigos",
    "category": "Combos",
    "description": "Combo Amigos preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 49.9,
    "image": "assets/burgers/burger7.svg"
  },
  {
    "id": 34,
    "name": "Combo Executivo",
    "category": "Combos",
    "description": "Combo Executivo preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 51.6,
    "image": "assets/burgers/burger8.svg"
  },
  {
    "id": 35,
    "name": "Batata Tradicional",
    "category": "Batatas e Porções",
    "description": "Batata Tradicional preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 11.7,
    "image": "assets/gallery/g2.svg"
  },
  {
    "id": 36,
    "name": "Batata Cheddar Bacon",
    "category": "Batatas e Porções",
    "description": "Batata Cheddar Bacon preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 13.4,
    "image": "assets/gallery/g2.svg"
  },
  {
    "id": 37,
    "name": "Batata ABI Supreme",
    "category": "Batatas e Porções",
    "description": "Batata ABI Supreme preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 15.1,
    "image": "assets/gallery/g2.svg"
  },
  {
    "id": 38,
    "name": "Onion Rings",
    "category": "Batatas e Porções",
    "description": "Onion Rings preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 16.8,
    "image": "assets/gallery/g2.svg"
  },
  {
    "id": 39,
    "name": "Nuggets Crocantes",
    "category": "Batatas e Porções",
    "description": "Nuggets Crocantes preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 18.5,
    "image": "assets/gallery/g2.svg"
  },
  {
    "id": 40,
    "name": "Porção Mista",
    "category": "Batatas e Porções",
    "description": "Porção Mista preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 20.2,
    "image": "assets/gallery/g2.svg"
  },
  {
    "id": 41,
    "name": "Batata com Catupiry",
    "category": "Batatas e Porções",
    "description": "Batata com Catupiry preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 21.9,
    "image": "assets/gallery/g2.svg"
  },
  {
    "id": 42,
    "name": "Molhos Especiais",
    "category": "Batatas e Porções",
    "description": "Molhos Especiais preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 23.6,
    "image": "assets/gallery/g2.svg"
  },
  {
    "id": 43,
    "name": "Coca-Cola 350ml",
    "category": "Refrigerantes",
    "description": "Coca-Cola 350ml preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 6.7,
    "image": "assets/drinks/drink1.svg"
  },
  {
    "id": 44,
    "name": "Guaraná 350ml",
    "category": "Refrigerantes",
    "description": "Guaraná 350ml preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 8.4,
    "image": "assets/drinks/drink2.svg"
  },
  {
    "id": 45,
    "name": "Fanta Laranja 350ml",
    "category": "Refrigerantes",
    "description": "Fanta Laranja 350ml preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 10.1,
    "image": "assets/drinks/drink3.svg"
  },
  {
    "id": 46,
    "name": "Sprite 350ml",
    "category": "Refrigerantes",
    "description": "Sprite 350ml preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 11.8,
    "image": "assets/drinks/drink4.svg"
  },
  {
    "id": 47,
    "name": "Coca-Cola 1L",
    "category": "Refrigerantes",
    "description": "Coca-Cola 1L preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 13.5,
    "image": "assets/drinks/drink5.svg"
  },
  {
    "id": 48,
    "name": "Guaraná 1L",
    "category": "Refrigerantes",
    "description": "Guaraná 1L preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 15.2,
    "image": "assets/drinks/drink6.svg"
  },
  {
    "id": 49,
    "name": "Coca-Cola 2L",
    "category": "Refrigerantes",
    "description": "Coca-Cola 2L preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 16.9,
    "image": "assets/drinks/drink7.svg"
  },
  {
    "id": 50,
    "name": "Refrigerante Lata Zero",
    "category": "Refrigerantes",
    "description": "Refrigerante Lata Zero preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 18.6,
    "image": "assets/drinks/drink8.svg"
  },
  {
    "id": 51,
    "name": "Suco de Acerola",
    "category": "Sucos Naturais",
    "description": "Suco de Acerola preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 8.7,
    "image": "assets/drinks/drink1.svg"
  },
  {
    "id": 52,
    "name": "Suco de Laranja",
    "category": "Sucos Naturais",
    "description": "Suco de Laranja preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 10.4,
    "image": "assets/drinks/drink2.svg"
  },
  {
    "id": 53,
    "name": "Suco de Maracujá",
    "category": "Sucos Naturais",
    "description": "Suco de Maracujá preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 12.1,
    "image": "assets/drinks/drink3.svg"
  },
  {
    "id": 54,
    "name": "Suco de Cajá",
    "category": "Sucos Naturais",
    "description": "Suco de Cajá preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 13.8,
    "image": "assets/drinks/drink4.svg"
  },
  {
    "id": 55,
    "name": "Suco de Goiaba",
    "category": "Sucos Naturais",
    "description": "Suco de Goiaba preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 15.5,
    "image": "assets/drinks/drink5.svg"
  },
  {
    "id": 56,
    "name": "Suco de Abacaxi com Hortelã",
    "category": "Sucos Naturais",
    "description": "Suco de Abacaxi com Hortelã preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 17.2,
    "image": "assets/drinks/drink6.svg"
  },
  {
    "id": 57,
    "name": "Suco Detox ABI",
    "category": "Sucos Naturais",
    "description": "Suco Detox ABI preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 18.9,
    "image": "assets/drinks/drink7.svg"
  },
  {
    "id": 58,
    "name": "Limonada Suíça",
    "category": "Sucos Naturais",
    "description": "Limonada Suíça preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 20.6,
    "image": "assets/drinks/drink8.svg"
  },
  {
    "id": 59,
    "name": "Milk-shake Chocolate",
    "category": "Milk-shakes",
    "description": "Milk-shake Chocolate preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 14.7,
    "image": "assets/drinks/drink1.svg"
  },
  {
    "id": 60,
    "name": "Milk-shake Morango",
    "category": "Milk-shakes",
    "description": "Milk-shake Morango preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 16.4,
    "image": "assets/drinks/drink2.svg"
  },
  {
    "id": 61,
    "name": "Milk-shake Oreo",
    "category": "Milk-shakes",
    "description": "Milk-shake Oreo preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 18.1,
    "image": "assets/drinks/drink3.svg"
  },
  {
    "id": 62,
    "name": "Milk-shake Doce de Leite",
    "category": "Milk-shakes",
    "description": "Milk-shake Doce de Leite preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 19.8,
    "image": "assets/drinks/drink4.svg"
  },
  {
    "id": 63,
    "name": "Milk-shake Ninho",
    "category": "Milk-shakes",
    "description": "Milk-shake Ninho preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 21.5,
    "image": "assets/drinks/drink5.svg"
  },
  {
    "id": 64,
    "name": "Milk-shake ABI Purple",
    "category": "Milk-shakes",
    "description": "Milk-shake ABI Purple preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 23.2,
    "image": "assets/drinks/drink6.svg"
  },
  {
    "id": 65,
    "name": "Brownie ABI",
    "category": "Doces e Sobremesas",
    "description": "Brownie ABI preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 9.7,
    "image": "assets/desserts/dessert1.svg"
  },
  {
    "id": 66,
    "name": "Pudim Cremoso",
    "category": "Doces e Sobremesas",
    "description": "Pudim Cremoso preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 11.4,
    "image": "assets/desserts/dessert2.svg"
  },
  {
    "id": 67,
    "name": "Mini Churros",
    "category": "Doces e Sobremesas",
    "description": "Mini Churros preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 13.1,
    "image": "assets/desserts/dessert3.svg"
  },
  {
    "id": 68,
    "name": "Açaí ABI",
    "category": "Doces e Sobremesas",
    "description": "Açaí ABI preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 14.8,
    "image": "assets/desserts/dessert4.svg"
  },
  {
    "id": 69,
    "name": "Mousse de Maracujá",
    "category": "Doces e Sobremesas",
    "description": "Mousse de Maracujá preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 16.5,
    "image": "assets/desserts/dessert5.svg"
  },
  {
    "id": 70,
    "name": "Bolo no Pote Chocolate",
    "category": "Doces e Sobremesas",
    "description": "Bolo no Pote Chocolate preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 18.2,
    "image": "assets/desserts/dessert6.svg"
  },
  {
    "id": 71,
    "name": "Bolo no Pote Ninho",
    "category": "Doces e Sobremesas",
    "description": "Bolo no Pote Ninho preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 19.9,
    "image": "assets/desserts/dessert7.svg"
  },
  {
    "id": 72,
    "name": "Torta Brownie Gold",
    "category": "Doces e Sobremesas",
    "description": "Torta Brownie Gold preparado no padrão premium ABI, com ingredientes selecionados e muito sabor.",
    "price": 21.6,
    "image": "assets/desserts/dessert1.svg"
  }
];
