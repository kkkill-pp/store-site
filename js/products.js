// ===== 产品数据 =====
// 替换这里的图片和文字即为你的商品
// 图片放 images/ 文件夹，文件名填到 images 数组里

const products = [
  {
    id: 'product-1',
    name: '示例商品 1',
    price: 128,
    originalPrice: 188,
    badge: 'SAVE 30%',
    description: '这是商品 1 的描述。可以写材质、尺寸、颜色、卖点等信息。例如：柔软亲肤面料，适合四季使用。',
    images: ['placeholder.svg']
  },
  {
    id: 'product-2',
    name: '示例商品 2',
    price: 99,
    originalPrice: 139,
    badge: 'SAVE 30%',
    description: '这是商品 2 的描述。可以写材质、尺寸、颜色、卖点等信息。',
    images: ['placeholder.svg']
  },
  {
    id: 'product-3',
    name: '示例商品 3',
    price: 168,
    originalPrice: 228,
    badge: 'SAVE 30%',
    description: '这是商品 3 的描述。可以写材质、尺寸、颜色、卖点等信息。',
    images: ['placeholder.svg']
  },
  {
    id: 'product-4',
    name: '示例商品 4',
    price: 79,
    originalPrice: null,
    badge: null,
    description: '这是商品 4 的描述。可以写材质、尺寸、颜色、卖点等信息。',
    images: ['placeholder.svg']
  },
  {
    id: 'product-5',
    name: '示例商品 5',
    price: 256,
    originalPrice: 328,
    badge: '新品',
    description: '这是商品 5 的描述。可以写材质、尺寸、颜色、卖点等信息。',
    images: ['placeholder.svg']
  },
  {
    id: 'product-6',
    name: '示例商品 6',
    price: 45,
    originalPrice: null,
    badge: null,
    description: '这是商品 6 的描述。可以写材质、尺寸、颜色、卖点等信息。',
    images: ['placeholder.svg']
  }
];

// ===== 渲染单个商品卡片 =====
function renderProductCard(product) {
  const imgFile = product.images && product.images[0] ? product.images[0] : 'placeholder.svg';
  return `
    <a href="product.html?id=${product.id}" class="product-card">
      <img src="images/${imgFile}" alt="${product.name}">
      <div class="info">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
        <h3>${product.name}</h3>
        <span class="price">¥${product.price}</span>
        ${product.originalPrice ? `<span class="original-price">¥${product.originalPrice}</span>` : ''}
      </div>
    </a>
  `;
}

// ===== 渲染商品列表 =====
function renderProducts(productList, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.innerHTML = productList.map(p => renderProductCard(p)).join('');
}
