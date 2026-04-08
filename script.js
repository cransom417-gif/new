const products = [
  {
    name: "AOD-9604 + Acetic Acid",
    category: "Core Research Compounds",
    variants: [
      { size: "5mg", price: "$47.99" },
      { size: "10mg", price: "$59.99" },
    ],
  },
  {
    name: "Bacteriostatic Water",
    category: "Core Research Compounds",
    variants: [{ size: "10mL", price: "$19.99" }],
  },
  {
    name: "BPC-157",
    category: "Core Research Compounds",
    variants: [
      { size: "5mg", price: "$23.99" },
      { size: "10mg", price: "$39.99" },
    ],
  },
  {
    name: "BPC-157 & TB-500 (Wolverine Blend)",
    category: "Core Research Compounds",
    variants: [
      { size: "10mg", price: "$55.99" },
      { size: "20mg", price: "$99.99" },
    ],
  },
  {
    name: "CJC-1295 (No DAC) + Ipamorelin",
    category: "Core Research Compounds",
    variants: [
      { size: "10mg", price: "$51.99" },
      { size: "20mg", price: "$64.99" },
    ],
  },
  {
    name: "GHK-Cu",
    category: "Recovery / Repair / Glow",
    variants: [
      { size: "25mg", price: "$31.99" },
      { size: "50mg", price: "$54.99" },
    ],
  },
  {
    name: "Glow Blend",
    category: "Recovery / Repair / Glow",
    variants: [
      { size: "70mg", price: "$79.99" },
      { size: "100mg", price: "$99.99" },
    ],
  },
  {
    name: "Glutathione",
    category: "Recovery / Repair / Glow",
    variants: [
      { size: "1500mg", price: "$39.99" },
      { size: "3000mg", price: "$49.99" },
    ],
  },
  {
    name: "KPV",
    category: "Recovery / Repair / Glow",
    variants: [
      { size: "10mg", price: "$35.99" },
      { size: "20mg", price: "$44.99" },
    ],
  },
  {
    name: "KLOW Blend",
    category: "Recovery / Repair / Glow",
    variants: [
      { size: "80mg", price: "$87.99" },
      { size: "120mg", price: "$109.99" },
    ],
  },
  {
    name: "HCG",
    category: "Hormonal / Research Peptides",
    variants: [
      { size: "10000 IU", price: "$59.99" },
      { size: "15000 IU", price: "$74.99" },
    ],
  },
  {
    name: "IGF-1 LR3",
    category: "Hormonal / Research Peptides",
    variants: [
      { size: "1mg", price: "$47.99" },
      { size: "2mg", price: "$59.99" },
    ],
  },
  {
    name: "Ipamorelin",
    category: "Hormonal / Research Peptides",
    variants: [
      { size: "10mg", price: "$47.99" },
      { size: "20mg", price: "$59.99" },
    ],
  },
  {
    name: "Kisspeptin",
    category: "Hormonal / Research Peptides",
    variants: [
      { size: "10mg", price: "$55.99" },
      { size: "20mg", price: "$69.99" },
    ],
  },
  {
    name: "Sermorelin",
    category: "Hormonal / Research Peptides",
    variants: [
      { size: "10mg", price: "$51.99" },
      { size: "20mg", price: "$64.99" },
    ],
  },
  {
    name: "Tesamorelin",
    category: "Hormonal / Research Peptides",
    variants: [
      { size: "2mg", price: "$31.99" },
      { size: "10mg", price: "$74.99" },
    ],
  },
  {
    name: "MOTS-C",
    category: "Advanced Metabolic",
    variants: [
      { size: "40mg", price: "$67.99" },
      { size: "60mg", price: "$84.99" },
    ],
  },
  {
    name: "Semaglutide",
    category: "Advanced Metabolic",
    variants: [
      { size: "2mg", price: "$27.99" },
      { size: "15mg", price: "$99.99" },
    ],
  },
  {
    name: "Tirzepatide",
    category: "Advanced Metabolic",
    variants: [
      { size: "2mg", price: "$51.99" },
      { size: "30mg", price: "$149.99" },
    ],
  },
  {
    name: "Retatrutide",
    category: "Advanced Metabolic",
    variants: [
      { size: "2mg", price: "$43.99" },
      { size: "30mg", price: "$249.99" },
    ],
  },
  {
    name: "Selank",
    category: "Neurological / Cognitive Research",
    variants: [
      { size: "10mg", price: "$28.79" },
      { size: "20mg", price: "$35.99" },
    ],
  },
  {
    name: "Semax",
    category: "Neurological / Cognitive Research",
    variants: [
      { size: "10mg", price: "$28.79" },
      { size: "20mg", price: "$35.99" },
    ],
  },
  {
    name: "PT-141",
    category: "Specialty Compounds",
    variants: [
      { size: "10mg", price: "$31.19" },
      { size: "20mg", price: "$38.99" },
    ],
  },
  {
    name: "MT-2",
    category: "Specialty Compounds",
    variants: [
      { size: "10mg", price: "$30.39" },
      { size: "20mg", price: "$37.99" },
    ],
  },
  {
    name: "NAD+",
    category: "Specialty Compounds",
    variants: [
      { size: "500 IU", price: "$47.19" },
      { size: "1000 IU", price: "$58.99" },
    ],
  },
  {
    name: "Epitalon",
    category: "Specialty Compounds",
    variants: [
      { size: "50mg", price: "$71.99" },
      { size: "100mg", price: "$89.99" },
    ],
  },
  {
    name: "Copper Glow Firming Cream",
    category: "Topical / Add-ons",
    variants: [
      { size: "30mL", price: "$24.00" },
      { size: "60mL", price: "$30.00" },
    ],
  },
];

const productGrid = document.getElementById("productGrid");
const quickView = document.getElementById("quickView");
const qvName = document.getElementById("qvName");
const qvCategory = document.getElementById("qvCategory");
const qvPrice = document.getElementById("qvPrice");
const variantSelect = document.getElementById("variantSelect");
const qvDetails = document.getElementById("qvDetails");
const qvAddToCart = document.getElementById("qvAddToCart");
const closeQuickView = document.getElementById("closeQuickView");
const cartCount = document.getElementById("cartCount");
const cartToggle = document.getElementById("cartToggle");
const cartDrawer = document.getElementById("cartDrawer");
const closeCartDrawer = document.getElementById("closeCartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const drawerItems = document.getElementById("drawerItems");
const drawerSubtotal = document.getElementById("drawerSubtotal");

const gate = document.getElementById("ageGate");
const agreeBtn = document.getElementById("agreeBtn");
const exitBtn = document.getElementById("exitBtn");
const bottleImageMap = window.BOTTLE_IMAGE_MAP || {};
const sceneParticles = document.getElementById("sceneParticles");

let selectedProduct = null;
const CART_KEY = "trutide_cart";

function readCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function updateCartCount() {
  const cartItems = readCart();
  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) cartCount.textContent = String(count);
  renderDrawer(cartItems);
}

function openDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  if (drawerBackdrop) drawerBackdrop.hidden = false;
}

function closeDrawer() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  if (drawerBackdrop) drawerBackdrop.hidden = true;
}

function renderDrawer(items) {
  if (!drawerItems || !drawerSubtotal) return;

  if (items.length === 0) {
    drawerItems.innerHTML = "<p>Your cart is empty.</p>";
    drawerSubtotal.textContent = "$0.00";
    return;
  }

  let total = 0;
  drawerItems.innerHTML = "";

  items.forEach((item) => {
    const lineTotal = Number(item.price.replace("$", "")) * item.qty;
    total += lineTotal;
    const row = document.createElement("article");
    row.className = "drawer-item";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong><br />
        <small>${item.size}</small>
      </div>
      <div>${item.qty} × ${item.price}</div>
      <button class="btn btn-secondary js-remove-drawer" data-id="${item.id}">×</button>
    `;
    drawerItems.appendChild(row);
  });

  drawerSubtotal.textContent = `$${total.toFixed(2)}`;

  drawerItems.querySelectorAll(".js-remove-drawer").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const filtered = readCart().filter((item) => item.id !== id);
      writeCart(filtered);
      updateCartCount();
    });
  });
}

function addToCart(product, variantIdx) {
  const variant = product.variants[variantIdx];
  const cart = readCart();
  const id = `${product.name}__${variant.size}`;
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id,
      name: product.name,
      category: product.category,
      size: variant.size,
      price: variant.price,
      qty: 1,
    });
  }
  writeCart(cart);
  updateCartCount();
}

function getBottleImage(productName) {
  return bottleImageMap[productName] || "assets/bottles/default-bottle.png";
}

function initHeroParticles() {
  if (!sceneParticles) return;

  const particleCount = 24;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < particleCount; i += 1) {
    const dot = document.createElement("span");
    const size = 2 + (i % 4);
    const duration = 8 + (i % 6);
    dot.className = `scene-particle float-${i % 4}`;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${(i * 17) % 100}%`;
    dot.style.top = `${(i * 23) % 100}%`;
    dot.style.animationDuration = `${duration}s`;
    dot.style.animationTimingFunction = "ease-in-out";
    dot.style.animationIterationCount = "infinite";
    frag.appendChild(dot);
  }

  sceneParticles.appendChild(frag);
}

function createProductCard(product) {
  const low = product.variants[0].price;
  const high = product.variants[product.variants.length - 1].price;
  const priceRange = low === high ? low : `${low} - ${high}`;
  const sizes = product.variants.map((v) => v.size).join(" / ");
  const bottleImage = getBottleImage(product.name);

  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-media-wrap">
      <img class="product-media" src="${bottleImage}" alt="${product.name}" />
      <div class="vial-brand-overlay" aria-hidden="true">
        <span>${product.name}</span>
      </div>
    </div>
    <div class="product-meta">
      <h3>${product.name}</h3>
      <div class="product-cat">${product.category}</div>
      <div class="product-price">${priceRange}</div>
    </div>
    <div class="product-overlay">
      <button class="btn btn-outline js-view">Select mg</button>
      <button class="btn btn-primary js-add">Add to Cart</button>
      <small>${sizes}</small>
    </div>
  `;

  card.querySelector(".js-view").addEventListener("click", () => {
    openQuickView(product);
  });
  card.querySelector(".js-add").addEventListener("click", () => {
    addToCart(product, 0);
    openDrawer();
  });

  return card;
}

function openQuickView(product) {
  selectedProduct = product;
  qvName.textContent = product.name;
  qvCategory.textContent = product.category;

  variantSelect.innerHTML = "";
  product.variants.forEach((v, idx) => {
    const option = document.createElement("option");
    option.value = String(idx);
    option.textContent = `${v.size} — ${v.price}`;
    variantSelect.appendChild(option);
  });

  qvPrice.textContent = product.variants[0].price;
  updateDetailsLink();
  quickView.showModal();
}

function updateDetailsLink() {
  if (!selectedProduct) return;
  const variant = selectedProduct.variants[Number(variantSelect.value) || 0];
  qvPrice.textContent = variant.price;

  const query = encodeURIComponent(
    `${selectedProduct.name} | ${variant.size} | ${variant.price}`
  );

  qvDetails.href = `mailto:contact@trutidelabs.com?subject=Catalog%20Details%20Request&body=Please%20send%20details%20for:%20${query}`;
}

products.forEach((product) => {
  productGrid.appendChild(createProductCard(product));
});

variantSelect.addEventListener("change", updateDetailsLink);
closeQuickView.addEventListener("click", () => quickView.close());
qvAddToCart.addEventListener("click", () => {
  if (!selectedProduct) return;
  addToCart(selectedProduct, Number(variantSelect.value) || 0);
  quickView.close();
  openDrawer();
});

agreeBtn.addEventListener("click", () => {
  gate.style.display = "none";
});

exitBtn.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

if (cartToggle) {
  cartToggle.addEventListener("click", openDrawer);
}
if (closeCartDrawer) {
  closeCartDrawer.addEventListener("click", closeDrawer);
}
if (drawerBackdrop) {
  drawerBackdrop.addEventListener("click", closeDrawer);
}

initHeroParticles();
updateCartCount();
