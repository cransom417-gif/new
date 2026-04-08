const CART_KEY = "trutide_cart";
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutItemsPreview = document.getElementById("checkoutItemsPreview");
const sceneParticles = document.getElementById("sceneParticles");
const bottleImageMap = window.BOTTLE_IMAGE_MAP || {};

function getBottleImage(productName) {
  return bottleImageMap[productName] || "assets/bottles/default-bottle.png";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function initCartHeroParticles() {
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

function moneyToNumber(value) {
  return Number(value.replace("$", ""));
}

function readCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function updateBadge(items) {
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = String(count);
}

function renderCart() {
  const items = readCart();
  updateBadge(items);

  if (items.length === 0) {
    cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalEl.textContent = "$0.00";
    if (checkoutItemsPreview) {
      checkoutItemsPreview.innerHTML = "";
      checkoutItemsPreview.hidden = true;
    }
    return;
  }

  let total = 0;
  cartItemsEl.innerHTML = "";
  if (checkoutItemsPreview) {
    checkoutItemsPreview.innerHTML = "";
    checkoutItemsPreview.hidden = false;
  }

  items.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "cart-item";
    const line = moneyToNumber(item.price) * item.qty;
    total += line;
    const imgSrc = getBottleImage(item.name);
    const safeName = escapeHtml(item.name);
    const safeSize = escapeHtml(item.size);
    const safePrice = escapeHtml(item.price);

    row.innerHTML = `
      <div class="cart-item-media">
        <div class="cart-item-thumb-wrap">
          <img class="cart-item-thumb" src="${imgSrc}" alt="" />
          <div class="vial-brand-overlay vial-brand-overlay--cart" aria-hidden="true">
            <span>${safeName}</span>
          </div>
        </div>
      </div>
      <div class="cart-item-details">
        <strong>${safeName}</strong><br />
        <small>${safeSize}</small>
      </div>
      <div class="cart-item-actions">
        <span class="cart-item-price">${safePrice}</span>
        <input type="number" min="1" value="${item.qty}" data-qty="${index}" />
        <button class="btn btn-secondary" data-remove="${index}">Remove</button>
      </div>
    `;
    cartItemsEl.appendChild(row);

    if (checkoutItemsPreview) {
      const preview = document.createElement("div");
      preview.className = "checkout-preview-row";
      preview.innerHTML = `
        <div class="checkout-preview-media">
          <div class="cart-item-thumb-wrap">
            <img class="cart-item-thumb" src="${imgSrc}" alt="" />
            <div class="vial-brand-overlay vial-brand-overlay--cart" aria-hidden="true">
              <span>${safeName}</span>
            </div>
          </div>
        </div>
        <div class="checkout-preview-text">
          <strong>${safeName}</strong>
          <span class="checkout-preview-meta">${safeSize} × ${item.qty} · ${safePrice} ea.</span>
        </div>
      `;
      checkoutItemsPreview.appendChild(preview);
    }
  });

  cartTotalEl.textContent = `$${total.toFixed(2)}`;

  cartItemsEl.querySelectorAll("[data-qty]").forEach((input) => {
    input.addEventListener("change", (e) => {
      const i = Number(e.target.getAttribute("data-qty"));
      const itemsNow = readCart();
      itemsNow[i].qty = Math.max(1, Number(e.target.value || 1));
      writeCart(itemsNow);
      renderCart();
    });
  });

  cartItemsEl.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = Number(e.target.getAttribute("data-remove"));
      const itemsNow = readCart();
      itemsNow.splice(i, 1);
      writeCart(itemsNow);
      renderCart();
    });
  });
}

checkoutForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const items = readCart();
  if (items.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const fullName = `${firstName} ${lastName}`.trim();
  const email = document.getElementById("email").value.trim();
  const address1 = document.getElementById("address1").value.trim();
  const address2 = document.getElementById("address2").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const zip = document.getElementById("zip").value.trim();
  const country = document.getElementById("country").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const shippingMethodEl = document.querySelector('input[name="shippingMethod"]:checked');
  const paymentMethodEl = document.querySelector('input[name="paymentMethod"]:checked');
  const billingAddressEl = document.querySelector('input[name="billingAddress"]:checked');
  const notes = document.getElementById("notes").value.trim();

  const lines = items
    .map((i) => `- ${i.name} (${i.size}) x${i.qty} @ ${i.price}`)
    .join("%0D%0A");
  const total = cartTotalEl.textContent;

  const body = `Checkout inquiry from ${encodeURIComponent(
    fullName
  )}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(
    phone || "N/A"
  )}%0D%0A%0D%0AShipping Address:%0D%0A${encodeURIComponent(
    address1
  )}%0D%0A${encodeURIComponent(address2 || "")}%0D%0A${encodeURIComponent(
    city
  )}, ${encodeURIComponent(state)} ${encodeURIComponent(zip)}%0D%0A${encodeURIComponent(
    country || "United States (US)"
  )}%0D%0A%0D%0AShipping Method: ${encodeURIComponent(
    shippingMethodEl ? shippingMethodEl.value : "Standard Shipping - $11.99"
  )}%0D%0APayment Method: ${encodeURIComponent(
    paymentMethodEl ? paymentMethodEl.value : "Credit/Debit Card - VISA, MC, and AMEX"
  )}%0D%0ABilling Address: ${encodeURIComponent(
    billingAddressEl ? billingAddressEl.value : "Same as shipping address"
  )}%0D%0A%0D%0ACart:%0D%0A${lines}%0D%0A%0D%0ATotal: ${encodeURIComponent(
    total
  )}%0D%0A%0D%0ANotes:%0D%0A${encodeURIComponent(notes || "None")}`;

  window.location.href = `mailto:contact@trutidelabs.com?subject=Trutide%20Labs%20Checkout%20Inquiry&body=${body}`;
});

initCartHeroParticles();
renderCart();
