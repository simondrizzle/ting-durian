/**
 * ============================================
 * 婷 Ting — 网站配置
 * ============================================
 */

const SITE_CONFIG = {
  shopName: '婷 Ting',
  tagline: '精选榴莲 · 全岛包邮',

  whatsappNumber: '6580679518',
  wechatId: 'W785125739',

  defaultMessage: '你好，我想咨询榴莲产品',

  deliveryNote: '全岛送 🇸🇬 包邮',

  products: [
    {
      id: 1,
      name: '云顶高山猫山王 AAA',
      subtitle: 'GENGTING HIGHLAND Musang King',
      weight: '500–550g / 盒 · 云顶猫',
      badge: 'AAA',
      image: 'images/products/product-1-musang.svg',
      prices: [
        { label: '3 盒', price: '$99' },
        { label: '5 盒', price: '$158' },
      ],
    },
    {
      id: 2,
      name: '彭亨老树40年黑金猫山王',
      subtitle: 'Pahang Old Tree Black Gold',
      weight: '400–430g / 盒',
      badge: '黑金',
      image: 'images/products/product-2-blackgold.svg',
      prices: [
        { label: '5 盒', price: '$99' },
        { label: '10 盒', price: '$178' },
      ],
    },
    {
      id: 3,
      name: '柔佛红虾',
      subtitle: 'Johor Red Prawn',
      weight: '400–430g / 盒',
      badge: null,
      image: 'images/products/product-3-redprawn.svg',
      prices: [
        { label: '5 盒', price: '$88' },
        { label: '10 盒', price: '$138' },
      ],
    },
    {
      id: 4,
      name: '黑刺',
      subtitle: 'Black Thorn',
      weight: '400–430g / 盒',
      badge: '热卖',
      image: 'images/products/product-4-blackthorn.svg',
      prices: [
        { label: '5 盒', price: '$89' },
        { label: '10 盒', price: '$148' },
      ],
    },
    {
      id: 5,
      name: '金凤',
      subtitle: 'Golden Phoenix',
      weight: '400–430g / 盒',
      badge: null,
      image: 'images/products/product-5-golden.svg',
      prices: [
        { label: '5 盒', price: '$99' },
        { label: '10 盒', price: '$178' },
      ],
    },
    {
      id: 6,
      name: '今日特别套餐',
      subtitle: '芋泥 / 巧克力蛋糕 + 榴莲一起送货',
      weight: null,
      badge: '❤️ 限定',
      image: 'images/products/product-6-combo.svg',
      prices: [
        { label: '套餐', price: '$49' },
      ],
    },
  ],
};
