const products = [
  { id: 1, name: 'ABI Royal Burger', category: 'Hambúrgueres Artesanais', description: 'Blend artesanal 180g, queijo prato, cebola caramelizada, alface, tomate e molho ABI.', price: 29.9, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80' },
  { id: 2, name: 'Purple Gold Burger', category: 'Hambúrgueres Artesanais', description: 'Pão brioche, blend 200g, cheddar, bacon premium, barbecue e toque defumado.', price: 34.9, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80' },
  { id: 3, name: 'ABI Prime Costela', category: 'Hambúrgueres Artesanais', description: 'Burger de costela, queijo coalho, crispy de cebola e molho da casa.', price: 37.9, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80' },
  { id: 4, name: 'Messi Magic Burger', category: 'Hambúrgueres Artesanais', description: 'Blend artesanal, cheddar duplo, bacon crocante e molho especial levemente adocicado.', price: 39.9, image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=700&q=80' },
  { id: 5, name: 'Neymar Ousadia Burger', category: 'Hambúrgueres Artesanais', description: 'Burger suculento, queijo, bacon, cebola crispy e molho roxo signature.', price: 38.9, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=700&q=80' },
  { id: 6, name: 'CR7 Excellence Burger', category: 'Hambúrgueres Artesanais', description: 'Blend premium, queijo prato, ovo, bacon, salada e molho dourado da casa.', price: 41.9, image: 'https://images.unsplash.com/photo-1606755962773-d324e9a13086?auto=format&fit=crop&w=700&q=80' },
  { id: 7, name: 'Smash Clássico', category: 'Smash Burgers', description: 'Pão macio, smash 100g, queijo americano, picles e molho especial.', price: 19.9, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=700&q=80' },
  { id: 8, name: 'Double Smash ABI', category: 'Smash Burgers', description: 'Dois smashs, queijo duplo, cebola, picles e molho ABI.', price: 26.9, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=700&q=80' },
  { id: 9, name: 'Smash Bacon Gold', category: 'Smash Burgers', description: 'Smash prensado, cheddar, bacon crocante e maionese da casa.', price: 28.9, image: 'https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?auto=format&fit=crop&w=700&q=80' },
  { id: 10, name: 'Combo Casal Prime', category: 'Combos', description: '2 burgers artesanais, batata cheddar bacon e 2 bebidas.', price: 79.9, image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=700&q=80' },
  { id: 11, name: 'Combo Família ABI', category: 'Combos', description: '4 burgers, 2 batatas grandes, refrigerante 2L e molho extra.', price: 139.9, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80' },
  { id: 12, name: 'Combo Champions', category: 'Combos', description: '3 burgers signature, batata supreme, onion rings e refrigerante 1L.', price: 119.9, image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=700&q=80' },
  { id: 13, name: 'Batata Cheddar Bacon', category: 'Batatas Fritas', description: 'Batata sequinha com cheddar cremoso e bacon crocante.', price: 21.9, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=700&q=80' },
  { id: 14, name: 'Batata Prata Suprema', category: 'Batatas Fritas', description: 'Batata com queijo, bacon, molho especial e toque de páprica.', price: 26.9, image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=700&q=80' },
  { id: 15, name: 'Onion Rings Gold', category: 'Batatas Fritas', description: 'Anéis de cebola crocantes com molho barbecue da casa.', price: 18.9, image: 'https://images.unsplash.com/photo-1625938145744-e380515399ca?auto=format&fit=crop&w=700&q=80' },
  { id: 16, name: 'Refri Lata Coca-Cola', category: 'Refrigerantes', description: 'Refrigerante lata 350ml bem gelado.', price: 6.9, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80' },
  { id: 17, name: 'Refri Lata Guaraná', category: 'Refrigerantes', description: 'Guaraná lata 350ml para acompanhar seu combo.', price: 6.9, image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=700&q=80' },
  { id: 18, name: 'Refrigerante 1 Litro', category: 'Refrigerantes', description: 'Opção ideal para dividir com a família ou amigos.', price: 12.9, image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=700&q=80' },
  { id: 19, name: 'Refrigerante 2 Litros', category: 'Refrigerantes', description: 'Perfeito para combos grandes e pedidos em grupo.', price: 15.9, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=700&q=80' },
  { id: 20, name: 'Suco de Laranja Natural', category: 'Sucos Naturais', description: 'Suco natural de laranja, feito na hora e sem complicação.', price: 10.9, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80' },
  { id: 21, name: 'Suco de Maracujá', category: 'Sucos Naturais', description: 'Refrescante, cremoso e perfeito para equilibrar o lanche.', price: 11.9, image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=700&q=80' },
  { id: 22, name: 'Suco de Morango Premium', category: 'Sucos Naturais', description: 'Morango batido com toque especial da casa.', price: 13.9, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80' },
  { id: 23, name: 'Suco Roxo ABI', category: 'Sucos Naturais', description: 'Mix de uva, frutas vermelhas e hortelã, com visual premium.', price: 14.9, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80' },
  { id: 24, name: 'Água Mineral', category: 'Bebidas', description: 'Água mineral gelada, com ou sem gás.', price: 4.5, image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=700&q=80' },
  { id: 25, name: 'Milkshake Chocolate Premium', category: 'Bebidas', description: 'Milkshake cremoso de chocolate com chantilly.', price: 17.9, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80' },
  { id: 26, name: 'Milkshake Morango', category: 'Bebidas', description: 'Milkshake gelado, cremoso e finalizado com calda.', price: 17.9, image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=700&q=80' },
  { id: 27, name: 'Brownie ABI', category: 'Doces', description: 'Brownie macio com calda de chocolate e toque sofisticado da casa.', price: 14.9, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80' },
  { id: 28, name: 'Pudim Cremoso', category: 'Doces', description: 'Pudim tradicional com calda caramelizada.', price: 12.9, image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=700&q=80' },
  { id: 29, name: 'Mini Churros com Doce de Leite', category: 'Doces', description: 'Porção crocante de mini churros com doce de leite.', price: 16.9, image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=700&q=80' },
  { id: 30, name: 'Petit Gateau Dourado', category: 'Sobremesas', description: 'Bolinho quente com recheio cremoso e sorvete.', price: 22.9, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80' },
  { id: 31, name: 'Taça Suprema ABI', category: 'Sobremesas', description: 'Camadas de creme, brownie, calda e finalização premium.', price: 24.9, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80' }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const noProducts = document.getElementById('noProducts');
const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const abrirCarrinho = document.getElementById('abrirCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const subtotalEl = document.getElementById('subtotal');
const discountEl = document.getElementById('discount');
const totalEl = document.getElementById('total');
const couponInput = document.getElementById('couponInput');
const applyCoupon = document.getElementById('applyCoupon');
const checkoutBtn = document.getElementById('checkoutBtn');
const backToTop = document.getElementById('backToTop');

let cart = JSON.parse(localStorage.getItem('abi_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('abi_favorites')) || [];
let selectedCategory = 'Todos';
let coupon = localStorage.getItem('abi_coupon') || '';

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function saveState() {
  localStorage.setItem('abi_cart', JSON.stringify(cart));
  localStorage.setItem('abi_favorites', JSON.stringify(favorites));
  localStorage.setItem('abi_coupon', coupon);
}

function renderProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const filtered = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = filtered.map(product => `
    <div class="col-sm-6 col-lg-4 reveal active">
      <article class="product-card">
        <div class="product-img-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <button class="favorite-btn ${favorites.includes(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id})" aria-label="Favoritar ${product.name}">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="product-body">
          <span class="product-category">${product.category}</span>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-footer">
            <strong class="product-price">${formatPrice(product.price)}</strong>
            <button class="add-cart" onclick="addToCart(${product.id})"><i class="fa-solid fa-plus"></i> Adicionar</button>
          </div>
        </div>
      </article>
    </div>
  `).join('');

  noProducts.classList.toggle('d-none', filtered.length > 0);
}

function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  saveState();
  renderProducts();
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  const item = cart.find(item => item.id === id);
  if (item) item.qty += 1;
  else cart.push({ ...product, qty: 1 });
  saveState();
  renderCart();
  openCart();
}

function updateQty(id, action) {
  cart = cart.map(item => {
    if (item.id === id) {
      return { ...item, qty: action === 'plus' ? item.qty + 1 : item.qty - 1 };
    }
    return item;
  }).filter(item => item.qty > 0);
  saveState();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  saveState();
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = cart.length ? cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${formatPrice(item.price)}</p>
        <div class="qty-controls">
          <button onclick="updateQty(${item.id}, 'minus')">-</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, 'plus')">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeItem(${item.id})" aria-label="Remover ${item.name}"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('') : '<p class="text-center text-secondary mt-4">Seu carrinho está vazio.</p>';

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = coupon === 'ABI10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  subtotalEl.textContent = formatPrice(subtotal);
  discountEl.textContent = formatPrice(discount);
  totalEl.textContent = formatPrice(total);
  cartCount.textContent = count;
}

function openCart() {
  cartDrawer.classList.add('open');
  overlay.classList.add('show');
}
function closeCart() {
  cartDrawer.classList.remove('open');
  overlay.classList.remove('show');
}

categoryFilter.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    document.querySelectorAll('#categoryFilter button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    selectedCategory = event.target.dataset.category;
    renderProducts();
  }
});

searchInput.addEventListener('input', renderProducts);
abrirCarrinho.addEventListener('click', openCart);
fecharCarrinho.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

applyCoupon.addEventListener('click', () => {
  const value = couponInput.value.trim().toUpperCase();
  if (value === 'ABI10') {
    coupon = value;
    alert('Cupom ABI10 aplicado com sucesso!');
  } else {
    coupon = '';
    alert('Cupom inválido. Tente ABI10.');
  }
  saveState();
  renderCart();
});

checkoutBtn.addEventListener('click', () => {
  if (!cart.length) {
    alert('Adicione produtos ao carrinho antes de finalizar.');
    return;
  }
  const lines = cart.map(item => `${item.qty}x ${item.name} - ${formatPrice(item.price * item.qty)}`).join('\n');
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = coupon === 'ABI10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
  const message = encodeURIComponent(`Olá, ABI burguer! Quero fazer este pedido:\n\n${lines}\n\nSubtotal: ${formatPrice(subtotal)}\nDesconto: ${formatPrice(discount)}\nTotal: ${formatPrice(total)}`);
  window.open(`https://wa.me/5583998709157?text=${message}`, '_blank');
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 3 || !emailRegex.test(email) || phone.length < 10 || message.length < 10) {
    feedback.textContent = 'Preencha todos os campos corretamente antes de enviar.';
    feedback.style.color = '#ff7a00';
    return;
  }

  feedback.textContent = 'Mensagem validada com sucesso! Em um site real, ela seria enviada para a equipe.';
  feedback.style.color = '#ffd000';
  event.target.reset();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const counters = entry.target.querySelectorAll('[data-target]');
    counters.forEach(counter => {
      const target = Number(counter.dataset.target);
      const decimal = counter.dataset.decimal;
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 70));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = decimal ? (current / 10).toFixed(1).replace('.', ',') : current.toLocaleString('pt-BR');
      }, 22);
    });
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.4 });

counterObserver.observe(document.querySelector('.counter-grid'));

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 600);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.navbar-nav .nav-link, .btn-order').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.getElementById('menuPrincipal');
    if (navbar.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(navbar).hide();
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
couponInput.value = coupon;
renderProducts();
renderCart();
