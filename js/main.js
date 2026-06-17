(function () {
  'use strict';

  const { shopName, whatsappNumber, wechatId, defaultMessage, deliveryNote, products } = SITE_CONFIG;

  const $ = (sel) => document.querySelector(sel);
  const productGrid = $('#productGrid');
  const productCount = $('#productCount');
  const wechatModal = $('#wechatModal');
  const contactModal = $('#contactModal');
  const toast = $('#toast');

  const WA_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;

  const WX_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.5 4C4.36 4 1 6.69 1 10.03c0 1.83 1.01 3.47 2.58 4.57L3 18l3.47-1.12c.93.26 1.92.4 2.93.4.22 0 .44-.01.65-.03C9.2 19.89 10.78 21 12.5 21c.37 0 .73-.04 1.08-.11l2.92 1.48-.78-2.85c1.28-.98 2.1-2.43 2.1-4.05 0-3.03-2.87-5.47-6.32-5.47z"/></svg>`;

  let toastTimer = null;

  function buildOrderMessage(product, tier) {
    if (!product) return defaultMessage;
    const detail = tier ? `${tier.label} ${tier.price}` : '';
    return `你好，我想下单：${product.name} ${detail}`.trim();
  }

  function buildWhatsAppUrl(message) {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  function openModal(modal) {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function closeAllModals() {
    [wechatModal, contactModal].forEach((m) => closeModal(m));
  }

  function openWechatModal(product, tier) {
    const detail = tier ? `${tier.label} ${tier.price}` : '';
    $('#wechatProductName').textContent = product
      ? `产品：${product.name}${detail ? ` · ${detail}` : ''}`
      : '欢迎咨询任意产品';
    $('#wechatIdDisplay').textContent = wechatId;
    openModal(wechatModal);
  }

  function renderPriceRows(product) {
    return product.prices
      .map(
        (tier, i) => `
        <div class="price-row">
          <div class="price-row__info">
            <span class="price-row__label">${tier.label}</span>
            <span class="price-row__price">${tier.price}</span>
          </div>
          <div class="price-row__actions">
            <a class="btn btn--whatsapp btn--icon btn--sm"
               href="${buildWhatsAppUrl(buildOrderMessage(product, tier))}"
               target="_blank" rel="noopener"
               aria-label="WhatsApp 下单 ${product.name} ${tier.label}">
              ${WA_SVG}
            </a>
            <button class="btn btn--wechat btn--icon btn--sm" type="button"
                    data-wechat="${product.id}" data-tier="${i}"
                    aria-label="微信下单 ${product.name} ${tier.label}">
              ${WX_SVG}
            </button>
          </div>
        </div>
      `
      )
      .join('');
  }

  function renderProducts() {
    productCount.textContent = `共 ${products.length} 款`;
    productGrid.innerHTML = products
      .map(
        (p) => `
      <article class="product-card${p.id === 6 ? ' product-card--special' : ''}" data-id="${p.id}">
        <div class="product-card__image-wrap">
          <img class="product-card__image" src="${p.image}" alt="${p.name}" loading="lazy" width="600" height="375">
          ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
        </div>
        <div class="product-card__body">
          <h3 class="product-card__name">${p.name}</h3>
          ${p.subtitle ? `<p class="product-card__subtitle">${p.subtitle}</p>` : ''}
          ${p.weight ? `<p class="product-card__weight">${p.weight}</p>` : ''}
          <div class="price-list">${renderPriceRows(p)}</div>
        </div>
      </article>
    `
      )
      .join('');

    productGrid.querySelectorAll('[data-wechat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.wechat);
        const tierIdx = Number(btn.dataset.tier);
        const product = products.find((p) => p.id === id);
        const tier = product?.prices[tierIdx];
        openWechatModal(product, tier);
      });
    });
  }

  async function copyWechatId() {
    try {
      await navigator.clipboard.writeText(wechatId);
      showToast('微信号已复制');
    } catch {
      const ta = document.createElement('textarea');
      ta.value = wechatId;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('微信号已复制');
    }
  }

  function init() {
    $('#year').textContent = new Date().getFullYear();
    if (deliveryNote) $('#deliveryBanner').textContent = deliveryNote;

    renderProducts();

    $('#contactWhatsApp').href = buildWhatsAppUrl(defaultMessage);
    $('#openContact').addEventListener('click', () => openModal(contactModal));
    $('#contactWechat').addEventListener('click', () => {
      closeModal(contactModal);
      openWechatModal(null);
    });
    $('#copyWechatId').addEventListener('click', copyWechatId);

    document.querySelectorAll('[data-close]').forEach((el) => {
      el.addEventListener('click', () => {
        const modal = el.closest('.modal');
        if (modal) closeModal(modal);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });
  }

  init();
})();
