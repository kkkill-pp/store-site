const products = [
    {
      id: 'p1780821424526',
      name: '1231',
      price: 312321,
      originalPrice: 12313,
      description: '12313',
      images: ['1780821424526_jimeng-2026-05-29-2154-image.png']
    }
];

function renderProductCard(p){
  var f = p.images&&p.images[0]?p.images[0]:"placeholder.svg";
  return '<a href="product.html?id='+p.id+'" class="product-card"><img src="images/'+f+'" alt="'+p.name+'"><div class="info">'+(p.badge?'<span class="badge">'+p.badge+'</span>':'')+'<h3>'+p.name+'</h3><span class="price">¥'+p.price+'</span>'+(p.originalPrice?'<span class="original-price">¥'+p.originalPrice+'</span>':'')+'</div></a>';
}

function renderProducts(l,id){
  var c = document.getElementById(id);
  if(!c) return;
  c.innerHTML = l.map(function(p){return renderProductCard(p);}).join("");
}
