/**
 * ============================================
 * 婷 Ting — 网站配置
 * ============================================
 */

const SITE_CONFIG = {
  whatsappNumber: '6580679518',
  wechatId: 'W785125739',

  products: [
    {
      id: 1,
      image: 'images/products/product-1-musang.svg',
      prices: [
        { label: { zh: '3 盒', en: '3 boxes' }, price: '$99' },
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$158' },
      ],
      zh: {
        name: '云顶高山猫山王 AAA',
        subtitle: 'GENGTING HIGHLAND Musang King',
        weight: '500–550g / 盒 · 云顶猫',
        badge: 'AAA',
      },
      en: {
        name: 'Genting Highland Musang King AAA',
        subtitle: 'Premium Musang King from Genting Highlands',
        weight: '500–550g / box · Genting',
        badge: 'AAA',
      },
    },
    {
      id: 2,
      image: 'images/products/product-2-blackgold.svg',
      prices: [
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$99' },
        { label: { zh: '10 盒', en: '10 boxes' }, price: '$178' },
      ],
      zh: {
        name: '彭亨老树40年黑金猫山王',
        subtitle: 'Pahang Old Tree Black Gold',
        weight: '400–430g / 盒',
        badge: '黑金',
      },
      en: {
        name: 'Pahang 40-Year Old Tree Black Gold',
        subtitle: 'Aged Black Gold Musang King',
        weight: '400–430g / box',
        badge: 'Black Gold',
      },
    },
    {
      id: 3,
      image: 'images/products/product-3-redprawn.svg',
      prices: [
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$88' },
        { label: { zh: '10 盒', en: '10 boxes' }, price: '$138' },
      ],
      zh: {
        name: '柔佛红虾',
        subtitle: 'Johor Red Prawn',
        weight: '400–430g / 盒',
        badge: null,
      },
      en: {
        name: 'Johor Red Prawn',
        subtitle: 'Sweet & creamy Red Prawn durian',
        weight: '400–430g / box',
        badge: null,
      },
    },
    {
      id: 4,
      image: 'images/products/product-4-blackthorn.svg',
      prices: [
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$89' },
        { label: { zh: '10 盒', en: '10 boxes' }, price: '$148' },
      ],
      zh: {
        name: '黑刺',
        subtitle: 'Black Thorn',
        weight: '400–430g / 盒',
        badge: '热卖',
      },
      en: {
        name: 'Black Thorn',
        subtitle: 'Premium Black Thorn durian',
        weight: '400–430g / box',
        badge: 'Hot',
      },
    },
    {
      id: 5,
      image: 'images/products/product-5-golden.svg',
      prices: [
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$99' },
        { label: { zh: '10 盒', en: '10 boxes' }, price: '$178' },
      ],
      zh: {
        name: '金凤',
        subtitle: 'Golden Phoenix',
        weight: '400–430g / 盒',
        badge: null,
      },
      en: {
        name: 'Golden Phoenix',
        subtitle: 'Golden Phoenix durian',
        weight: '400–430g / box',
        badge: null,
      },
    },
    {
      id: 6,
      image: 'images/products/product-6-combo.svg',
      prices: [
        { label: { zh: '套餐', en: 'Combo' }, price: '$49' },
      ],
      zh: {
        name: '今日特别套餐',
        subtitle: '芋泥 / 巧克力蛋糕 + 榴莲一起送货',
        weight: null,
        badge: '❤️ 限定',
      },
      en: {
        name: "Today's Special Combo",
        subtitle: 'Taro / Chocolate cake + durian delivery',
        weight: null,
        badge: '❤️ Special',
      },
    },
  ],
};
