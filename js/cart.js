// ===== 购物车逻辑 =====
// 购物车数据存 localStorage，刷新不丢失

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// 加入购物车
function addToCart(productId) {
  let cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
  updateCartCount();
  alert('已加入购物车');
}

// 更新购物车角标
function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = total;
}

// 渲染购物车页面
function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">购物车是空的</div>';
    document.getElementById('cart-total').textContent = '¥0';
    return;
  }

  let html = '';
  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const imgFile = product.images && product.images[0] ? product.images[0] : 'placeholder.svg';
    const subtotal = product.price * item.qty;
    total += subtotal;

    html += `
      <div class="cart-item" data-id="${item.id}">
        <img src="images/${imgFile}" alt="${product.name}">
        <div class="item-info">
          <div class="item-name">${product.name}</div>
          <div class="item-price">¥${product.price} × ${item.qty} = ¥${subtotal}</div>
        </div>
        <div class="qty-controls">
          <button onclick="changeQty('${item.id}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.id}', 1)">+</button>
          <button class="remove-btn" onclick="removeItem('${item.id}')">删除</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  document.getElementById('cart-total').textContent = `¥${total}`;
}

// 修改数量
function changeQty(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart(cart);
  renderCart();
  updateCartCount();
}

// 删除商品
function removeItem(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  renderCart();
  updateCartCount();
}
