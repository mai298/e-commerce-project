import i18n from 'i18next';
import { useEffect } from 'react';
import { initReactI18next } from 'react-i18next';


const resources = {
  en: {
    translation:{
      "free":"Free Express Shipping"
    },
  },
  ar: {
    translation: {
      "free":"شحن سريع مجاني",
      "Search…":"بحث...",
      "Home": "الرئيسية",

      'All Categories':'جميع الفئات',
      'Car':'سيارة',
      'Clothes':'ملابس',
      "Mega Menu": "قائمة ميجا",
      "Full Screen Menu": "قائمة كاملة الشاشة",
      "Pages": "الصفحات",
      "User Account": "حساب المستخدم",
      "Vendor Account": "حساب البائع",

      "Categories":"الفئات",

      "Bikes":"دراجات",
"Electronics":"إلكترونيات",
"Books":"كتب",
"Games":"ألعاب",
      "LIFESTYLE COLLECTION": "مجموعة أسلوب الحياة",
      "MEN": "للرجال",
      "SALE UP TO ": "  تخفيضات تصل إلى",
      " 30% OFF": "خصم 30 بالمئه ",
      "Get Free Shipping on orders over $99.00": "احصل على شحن مجاني عند الطلبات بقيمة 99.00 دولار أو أكثر",
      "shop now": "تسوق الان",
      "WOMEN": "للنساء",

      "NEW ARRIVALS": "وصولات جديدة",
      "SUMMER": "صيف",
      "SALE 20% OFF": "تخفيضات 20 بالمئه",
      "GAMING 4K": "الألعاب 4k",
      "DESKTOPS &": "أجهزة سطح المكتب و",
      "LAPTOPS": "محمولة",
      "Fast Delivery": "توصيل سريع",
      "Start From $10": "ابتداءً من 10 دولار",
      "Money Guarantee": "ضمان استرداد الأموال",
      "7 Days Back": "في خلال 7 ايام ",
      "365 Days": "365 يوم",
      "For Free Return": "من أجل الإرجاع المجاني",
      "Payment": "الدفع",
      "Secure System": "نظام آمن",
      "Selected Products": "منتجات مختارة",

      "All our new arrivals in a exclusive brand selection":
        "جميع وصولاتنا الجديدة في تشكيلة حصرية للعلامة التجارية",
      "All Products": "جميع المنتجات",
      "Men Category": "فئة الرجال",
      "Women Category": "فئة النساء",

      "Add To Cart": "الاضافة الي العربة",

      "jacket": "جاكيت",
      "Introducing our chic and versatile Jacket, a must-have addition to your wardrobe that effortlessly combines fashion and functionality. This jacket is designed to elevate your style and keep you cozy in any season.":
        "قدمنا ​​جاكيت أنيق ومتعدد الاستخدامات ، إضافة لا غنى عنها لخزانة ملابسك تجمع بين الأناقة والوظائف بسهولة. تم تصميم هذا الجاكيت لرفع مستوى أناقتك وإبقائك دافئًا في أي موسم.",

      "Bag": "حقيبة",
      "Introducing our chic and sophisticated Women's Bag, a perfect blend of fashion and functionality. This exquisite bag is designed to complement your style while offering ample space for all your essentials.":
        "قدمنا ​​حقيبة نسائية أنيقة وأنيقة ، مزيج مثالي بين الأناقة والوظائف. تم تصميم هذه الحقيبة الرائعة لتكمل أناقتك مع توفير مساحة كافية لجميع الضروريات الخاصة بك.",

      "bomber jacket with cabisho": "جاكيت بومبر مع كابيشو",

      "Introducing our stylish and versatile Bomber Jacket, a timeless classic that combines fashion and functionality. This jacket is designed to elevate your style and provide comfort for various occasions.":
        "قدمنا ​​جاكيت بومبر أنيق ومتعدد الاستخدامات ، كلاسيكي لا يعتبر الزمن الذي يجمع بين الأناقة والوظائف. تم تصميم هذا الجاكيت لرفع مستوى أناقتك وتوفير الراحة لمختلف المناسبات.",

      "Dress":
        "فستان",
      "Introducing our stunning Long Dress, a true embodiment of grace and glamour. This exquisite dress is meticulously crafted to make you feel like a radiant goddess on any special occasion.":
        "قدمنا ​​فستانًا طويلاً رائعًا ، تجسيد حقيقي للسحر والسحر. تم صنع هذا الفستان الرائع بعناية ليجعلك تشعر وكأنك إلهة متألقة في أي مناسبة خاصة.",

      "Watch":
        "ساعة",
      "Introducing our timeless and elegant Watch, a symbol of style and precision. This exquisite timepiece is meticulously crafted to complement your sophisticated lifestyle and elevate your wrist game.":
        "قدمنا ​​ساعة خالدة وأنيقة ، رمز للأناقة والدقة. تم صنع هذه الساعة الرائعة بعناية لتكمل أسلوب حياتك المتطور وترفع مستوى مظهر معصمك.",

      "eagle T-shirt":
        "تي شيرت برسوم النسر",
      "Introducing our Eagle Short Sleeve T-Shirt, a bold and stylish garment that showcases the majestic beauty of this iconic bird. This T-shirt is designed to make a statement and infuse your wardrobe with a touch of nature-inspired flair.":
        "قدمنا ​​تي شيرت قصيرة الأكمام برسوم النسر ، قطعة بارعة وأنيقة تُظهر جمال الطائر الأيقوني بجلاء. تم تصميم هذا التي شيرت لإيجاد بيان وإضافة لمسة من التألق المستوحى من الطبيعة إلى خزانة ملابسك.",

      "Women's sunglasses":
        "نظارات شمس نسائية",
      "Introducing our chic and stylish Women's Sunglasses, the perfect accessory to elevate your look and protect your eyes with a touch of glamour. These sunglasses are designed to combine fashion-forward designs with UV protection, ensuring both style and functionality.":
        "قدمنا ​​نظارات شمس نسائية أنيقة وأنيقة ، الإكسسوار المثالي لتحسين مظهرك وحماية عيونك بلمسة من السحر. تم تصميم هذه النظارات الشمسية لدمج تصميمات الأزياء مع حماية الأشعة فوق البنفسجية ، مما يضمن الأناقة والوظائف.",

      "Zippered wallet":
        "محفظة بسحاب",
      "Introducing our vibrant and versatile Multi-Color Zippered Wallet, a stylish and practical accessory to keep your essentials organized in a fashionable way. This wallet is designed to combine functionality with a splash of color, making it a standout piece in your accessory collection.":
        "قدمنا ​​محفظة بسحاب متعددة الألوان نابضة بالحياة ومتعددة الاستخدامات ، إكسسوار أنيق وعملي للحفاظ على ضرورياتك منظمة بطريقة عصرية. تم تصميم هذه المحفظة لدمج الوظائف مع لمسة من اللون ، مما يجعلها قطعة مميزة في مجموعة إكسسواراتك.",

      "Short Dress":
        "فستان قصير",
      "Introducing our stunning Short Dress, a versatile and fashionable piece that will make you feel confident and stylish. This dress is designed to accentuate your figure and provide a chic and comfortable option for various occasions.":
        "قدمنا ​​فستانًا قصيرًا رائعًا ، قطعة متعددة الاستخدامات وأنيقة تجعلك تشعر بالثقة والأناقة. تم تصميم هذا الفستان لإبراز قوامك وتوفير خيار أنيق ومريح لمختلف المناسبات.",

      "Short Sleeve Dress":
        "فستان قصير بأكمام قصيرة",
      "Introducing our Pink Short Dress with 3/4 Sleeves, a delightful and versatile garment that exudes femininity and charm. This dress is designed to provide a flattering silhouette while offering comfortable coverage for your arms.":
        "قدمنا ​​فستانًا قصيرًا بأكمام قصيرة باللون الوردي ، قطعة رائعة ومتعددة الاستخدامات تنبثق بالأنوثة والسحر. تم تصميم هذا الفستان لتوفير قوام مشرف بينما يوفر تغطية مريحة لذراعيك.",

        "Buy now":"اشتري الان",
      "Designed and developed by": "تم التصميم والتطوير بواسطة",
      "Mai Mohamed": "مي محمد",
      "©2023": "©2023"




    },
  },

  
};



i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  
  });

export default i18n;
