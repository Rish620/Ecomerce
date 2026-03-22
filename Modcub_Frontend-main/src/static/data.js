import champion from "../Assests/Company_logos/champion.png";
import jbl from "../Assests/Company_logos/jbl.png";
import nb from "../Assests/Company_logos/nb.png";
import nike from "../Assests/Company_logos/nike.png";
import puma from "../Assests/Company_logos/puma.png";
import sony from "../Assests/Company_logos/sony.png";

export const brandImages = [
  { src: sony, alt: "Sony Logo" },
  { src: jbl, alt: "JBL Logo" },
  { src: puma, alt: "Puma Logo" },
  { src: champion, alt: "Champion Logo" },
  { src: nb, alt: "New Balance Logo" },
  { src: nike, alt: "Nike Logo" },
];

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Shipping",
    Description: "From all orders over 100$",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H5.63636V24.1818H35"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M34.9982 1H11.8164V18H34.9982V1Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M11.8164 7.18164H34.9982"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Daily Surprise Offers",
    Description: "Save up to 25% off",
    icon: (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M30.7 2L29.5 10.85L20.5 9.65"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Affortable Prices",
    Description: "Get Factory direct price",
    icon: (
      <svg
        width="32"
        height="35"
        viewBox="0 0 32 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M16 28V22"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
        ></path>
        <path
          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure Payments",
    Description: "100% protected payments",
    icon: (
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
        <path
          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
          stroke="#FFBB38"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        ></path>
      </svg>
    ),
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Electronics",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/w/w/y/-original-imagysfv56k2rvzh.jpeg?q=70",
  },
  {
    id: 2,
    title: "Cosmetics and Body Care",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/3/m/0/4-2-creamy-matte-long-stay-lipstick-with-murumuru-butter-and-original-imahf4scwv4zqx7r.jpeg?q=70",
  },
  {
    id: 3,
    title: "Mobile Accessories",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/f/g/r/65-watt-charger-compatible-for-oneplus-6a-5v-warp-charger-original-imahf4h2rgzbssyk.jpeg?q=70",
  },
  {
    id: 4,
    title: "Cloths",
    subTitle: "",
    image_Url:
      "https://thumbs.dreamstime.com/b/smiling-couple-fashion-models-28442078.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    title: "Shoes",
    subTitle: "",
    image_Url:
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
  },
  {
    id: 6,
    title: "Gifts",
    subTitle: "",
    image_Url:
      "https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    title: "Pet Care",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/pet-food/j/s/p/-original-imagzwy3nnh8fyqh.jpeg?q=70",
  },
  {
    id: 8,
    title: "Mobile and Tablet",
    subTitle: "",
    image_Url:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/296178163/GX/GL/SD/186724856/vivo-mobile-phone.jpg",
  },
  {
    id: 9,
    title: "Gaming",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/kxm5qq80/kit/f/a/v/popular-kit-6-no-2-scoop-2-scoop-11-barood-84-original-imagafyngpgz5ddg.jpeg?q=70",
  },
  {
    id: 11,
    title: "Books",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/d/j/t/phychology-of-money-book-rich-dad-original-imahyn2bjjzmvnrj.jpeg?q=70",
  },
  {
    id: 12,
    title: "House Keeping",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/mop-cleaning-wipe/5/b/b/-original-imagrt32mnzahrbs.jpeg?q=70",
  },
  {
    id: 13,
    title: "Sanitary",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wash-basin/1/4/a/42-42-11-scratch-proof-anti-bacterial-with-coupling-wastepipe-original-imahfhzxvtdzmknh.jpeg?q=70",
  },

  {
    id: 17,
    title: "Furniture",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/r/k/8/symmetrical-91-blue-109-silk-no-18-sofa1276-artistic-interior-original-imahfcgqgephzetx.jpeg?q=70",
  },
  {
    id: 18,
    title: "Showpiece",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/kkprmvk0/showpiece-figurine/l/s/0/r43ramopanch-scooty-krishnagallery1-original-imafzzvukzfpa2gh.jpeg?q=70",
  },
  {
    id: 19,
    title: "Lamps",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/kzn17680/table-lamp/x/o/6/unique-digital-desk-lamp-for-students-sw2-ix-led-lamp-no-1043-original-imagbhpnbzvzyhrx.jpeg?q=70",
  },
  {
    id: 20,
    title: "Watches",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/i/5/c/1-antique-2-0-day-date-softest-silicone-strap-analog-rustet-men-original-imagyzf8ykw8vtkm.jpeg?q=70",
  },
  {
    id: 21,
    title: "Jewelry",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/kqb8pzk0/ring/s/l/r/adjustable-r056-ring-giva-original-imag4czhtfdxehrj.jpeg?q=70",
  },
  {
    id: 22,
    title: "Crockery",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/l3929ow0/dinner-set/w/z/v/yes-44-htecom44dn1pasfl-larah-by-borosil-original-imagef62bzgjzgxy.jpeg?q=70",
  },
  {
    id: 23,
    title: "Perfumes",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/1/l/x/50-black-perfume-eau-de-toilette-the-man-company-men-original-imahf2dfzawrr7bc.jpeg?q=70",
  },
  {
    id: 24,
    title: "Home Decor",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/pillow/5/q/k/10-umang-2-sleepweell-simple-sleeping-pillow-pack-of-2-sleepwell-original-imahf2ncqzaf3k5w.jpeg?q=70",
  },
  {
    id: 25,
    title: "Supplement",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/c/f/a/weight-gainers-mass-gainers-mass-gainer-for-muscle-mass-gain-original-imagnefnggx4xzpr.jpeg?q=70",
  },
  {
    id: 26,
    title: "Music",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-guitar/j/1/2/r-701-blue-beginner-professional-full-size-rosewood-fretboard-original-imaghk7dxenynsrk.jpeg?q=70",
  },
  {
    id: 27,
    title: "Belt and Wallet",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/ktuewsw0/accessories-combo/s/5/s/sty-xcbn-44-loopa-original-imag73kxzkvrqsuh.jpeg?q=70",
  },
  {
    id: 28,
    title: "Sunglasses",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/b/w/n/p429gr3v-one-size-fits-all-fastrack-original-imagp3eugdafnpdq.jpeg?q=70",
  },
  {
    id: 29,
    title: "Bag and Luggage",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/kk76wsw0/suitcase/x/j/p/78-triprism-spinner-3pc-set-black-hk3-2-09-004-cabin-check-in-original-imafzhhenqcxh4yb.jpeg?q=70",
  },
  {
    id: 30,
    title: "Hand Bag",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/x/w/v/women-handbags-shoulder-bags-32-sm-10-shoulder-bag-perfect-original-imahyfgvynuvmymp.jpeg?q=70",
  },
  {
    id: 31,
    title: "Office and Stationary",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/l1tmf0w0/art-set/l/u/4/blue-kids-smart-kit-combo-bag-by-the-mark-stationery-doms-original-imagdarfqgg8uqcu.jpeg?q=70",
  },
  {
    id: 32,
    title: "Car Accessories",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/car-mat/p/u/2/bu-4dblmat28-bu4dblnmat28-3d-mat-arneja-original-imahygfkgngqyzrf.jpeg?q=70",
  },
  {
    id: 33,
    title: "Cycle and Gym Equipments",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/z/i/x/llf45-llf45-fit-pro-exercise-spin-bike-120-lifelong-32-28-7-original-imahfmh4yryjzswx.jpeg?q=70",
  },
  {
    id: 34,
    title: "Daily Use",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=70",
  },
  {
    id: 35,
    title: "Filter and Accessories",
    subTitle: "",
    image_Url:
      "https://t4.ftcdn.net/jpg/04/60/10/51/360_F_460105107_1dkr8vFnWai35wkUPX5DFxW5a39VgrEJ.jpg",
  },
  {
    id: 36,
    title: "Packaging",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/packaging-security-bag/o/j/k/6-x-8-1-heavy-40ft-air-bubble-wrap-roll-for-packing-purposes-original-imagz5v8jqb8vrkf.jpeg?q=70",
  },
  {
    id: 37,
    title: "Industrial Chemical",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/l1nwnm80/wall-paint/q/s/s/20-03-san-severo-paints-original-imagd6a4ftxebggm.jpeg?q=70",
  },
  {
    id: 38,
    title: "Tools and Equipments",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/wrench-set/j/k/m/wrs005-home-professional-tata-agrico-original-imagk7pzpq9vrxvy.jpeg?q=70",
  },
  {
    id: 39,
    title: "Software",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/digital-security-softwr/v/i/n/-original-imagt75z3g6zvgey.jpeg?q=70",
  },
  {
    id: 40,
    title: "Ayurvedic Products",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/v/l/y/shatavari-granules-asparagus-racemosus-herbal-product-100g-x-2-original-imagge5f5yyquqtz.jpeg?q=70",
  },
  {
    id: 41,
    title: "IT Equipments",
    subTitle: "",
    image_Url:
      "https://rukminim2.flixcart.com/image/612/612/kbnz8nk0/router/x/y/k/d-link-dir-650in-original-imafsysqj3f3tec5.jpeg?q=70",
  },
];

// product Data
export const productData = [
  {
    id: 1,
    category: "Computers and Laptops",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 35,
    stock: 10,
  },
  {
    id: 2,
    category: "Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-Modcub.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-Modcub.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Modcub Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 80,
    stock: 10,
    // category:"Mobile & Tablets"
  },
  {
    id: 1,
    category: "Computers and Laptop",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 75,
    stock: 10,
    // category:"Computers & Laptop"
  },
  {
    id: 4,
    category: "Others",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
      category: "Others",
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 12,
    stock: 10,
  },
  {
    id: 5,
    category: "Shoes",
    name: "New Trend shoes for gents with all sizes",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.Modcubaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.Modcubaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
    ],
    shop: {
      name: "Alisha Shoes Mart",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 120,
    discount_price: 89,
    rating: 5,
    total_sell: 49,
    stock: 10,
    // category:"Shoes"
  },
  {
    id: 1,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    category: "Music and Gaming",
  },
  {
    id: 4,
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 1,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
  {
    id: 2,
    category: "Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-Modcub.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-Modcub.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Modcub Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 20,
    stock: 10,
  },
  {
    id: 1,
    category: "Music and Gaming",
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/Modcub-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
];

export const footerProductLinks = [
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Refund Policy",
    link: "/cancelationandrefund",
  },
  {
    name: "Terms",
    link: "/terms",
  },
  {
    name: "Privacy Policy",
    link: "/privacy",
  },
  {
    name: "Store Location",
    link: "/store-location",
  },
];

export const footercompanyLinks = [
  {
    name: "Corporate",
    link: "/corporate",
  },
  {
    name: "Our Blogs",
    link: "/our-blogs",
  },
  {
    name: "Brand Collaborate",
    link: "/brand-collaborate",
  },
  {
    name: "Return Center",
    link: "/return-center",
  },
  {
    name: "Help",
    link: "/help",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Reviews",
    link: "/review",
  },
  {
    name: "Contact Us",
    link: "/contactus",
  },
  {
    name: "Shipping and Delivery",
    link: "/shippinganddelivery",
  },
  // {
  //   name: "Site Map",
  //   link: "/site-map",
  // },
  // {
  // name: "Shipping",
  // },
  // {
  // name: "Live chat",
  // },
];

export const returnPolicy = [
  {
    title: "Modcub Digital Devices",
    content: [
      {
        subTitle:
          " Echo & Alexa, Fire TV Stick, Kindle E-Readers and Modcub Accessories for these devices  ",
        subcontent: [
          {
            policy: "7 Days Replacement only",
          },
          {
            policy:
              "For warranty related information, please check Modcub Device Replacement Policies",
          },
        ],
      },
      {
        subTitle: "Kindle Books ",
        subcontent: [
          {
            policy: "7 Days Refund for accidental orders only",
          },
          {
            policy:
              " Kindle books are eligible for a refund for accidental book orders within seven days                of purchase by following the steps here.",
          },
        ],
      },
    ],
  },
  {
    title: "Alexa Paid Skills and In-Skill Purchases",
    content: [
      {
        subTitle: "Paid Skills",
        subcontent: [
          {
            policy: "3 Days Refund only",
          },
          {
            policy:
              "Paid skills are eligible for a full refund within 3 days of purchase by contacting Modcub customer support here.",
          },
        ],
      },
      {
        subTitle: "In-Skill Purchases",
        subcontent: [
          {
            policy: "One-Time Purchases and Consumables",
          },
          {
            policy:
              "This item is non-returnable due to its consumable (digital) nature.",
          },
          {
            policy: "Subscriptions",
          },
          {
            policy:
              "In-skill subscription purchases are eligible for a full refund within 3 days of purchase by contacting Modcub customer support here.",
          },
        ],
      },
    ],
  },
  {
    title: "Movies, Music & Video Games",
    content: [
      {
        subTitle: "Movies & TV Shows, Music",
        subcontent: [
          {
            policy: "Non-returnable",
          },
          {
            policy:
              "This item is non-returnable due to consumable (digital) nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different/wrong item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Musical Instruments",
        subcontent: [
          {
            policy: "7 Days Replacement only",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different/wrong item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing replacement.",
          },
          {
            policy: " For all Wind Instruments (Harmonicas & Flutes)",
            textbold: "Non-Returnable-",
          },
          {
            policy:
              "This item is non-returnable due to hygiene/health and personal care/wellness nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different/wrong item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },

      {
        subTitle: "Video Games (Games)",
        subcontent: [
          {
            policy: "Non-returnable",
          },
          {
            policy:
              "This item is non-returnable due to consumable (digital) nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Video Games (Accessories)",
        subcontent: [
          {
            policy: "7 Days Replacement only",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with outer box or case, accessories, CDs, user manual, warranty cards, scratch cards, and other accompaniments in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing replacement.",
          },
          {
            policy:
              "Non-returnable: Select items labelled as non-returnable on the product detail page are not eligible for returns.",
          },
        ],
      },
      {
        subTitle: "Gaming Consoles",
        subcontent: [
          {
            policy: "7 Days Replacement only",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with outer box or case, accessories, CDs, user manual, warranty cards, scratch cards, and other accompaniments in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Books",
    content: [
      {
        subTitle: "Books",
        subcontent: [
          {
            policy: "10 Days Replacement only",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with outer box or case, accessories, CDs, user manual, warranty cards, scratch cards, and other accompaniments in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing replacement.",
          },
          {
            policy:
              "Books are non-returnable for International Customers for Export Orders.",
            textbold: "Note:",
          },
        ],
      },
      {
        subTitle: "Used Books",
        subcontent: [
          {
            policy: "10 Days Replacement only",
          },
        ],
      },
    ],
  },

  {
    title: "Mobiles, Computers",
    content: [
      {
        subTitle: "Mobiles (new and Renewed)",
        subcontent: [
          { policy: "7 Days Replacement " },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely                event of defective or different/wrong item delivered to you. ",
          },
          {
            policy:
              "In the rare event that you receive a damaged device, please create a replacement request                within 48 hours of order delivery. Raising a replacement request any time after 48  hours of order delivery will result in your replacement request being rejected.",
          },
          {
            policy: "For device-related issues in:",
            bullet: [
              "Apple iPhones: please contact Apple Customer Service",
              "For Android smartphones, our Returns Centre will prompt you to download the Blancco                      app to diagnose issues with a defective smartphone.",
            ],
          },
          {
            policy:
              "We will provide a resolution on the basis of the Blancco app diagnostic results. In                certain cases, we may also facilitate scheduling a technician visit to your location. On the basis of the technician s evaluation report, we will provide resolution. Please                keep the item in its original condition, with original accessories like chargers,                headsets etc., brand outer box, MRP tags attached, user manual in manufacturer packaging                for for a successful return pick-up.",
          },
        ],
      },
      {
        subTitle: "Mobile Accessories (new and Renewed)",
        subcontent: [
          { policy: "10 Days Replacement/Returnable " },
          {
            policy:
              "This item is eligible for free replacement/refund, within 7 days of delivery, in an                unlikely event of damaged, defective or different/wrong item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with MRP tags attached, user manual,                warranty cards, and original accessories in manufacturer packaging. We may contact                you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
          {
            policy:
              " Power Banks (new and certified refurbished), Headsets (new & certified refurbished),                Data Cables(new & certified refurbished) and Travel Chargers & Adapters new & certified                refurbished). ",
            textbold: "7 Days Replacement only:",
          },
          {
            policy: "For all device-related issues in:",
            bullet: ["Apple Airpods: please contact Apple Customer Service"],
          },
          {
            policy: " Screen guards, screen protectors and tempered glasses",
            textbold: "Non-Returnable:",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to                you, we will provide a full refund or free replacement as applicable. We may contact                you to ascertain the damage or defect in the product prior to issuing refund/replacement.                We reserve the right to pick up the product to ascertain the damage or defect in the                product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Tablets (new and Renewed), Work Space and Gadget Accessories",
        subcontent: [
          {
            policy: "7 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, CDs and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy: "For all device-related issues in:",
            bullet: [
              "Apple iPads, Pencils and watches: please contact Apple Customer Service",
            ],
          },
          {
            policy:
              "For few products, we may facilitate scheduling a technician visit to your location. On the basis of the technician's evaluation report, we will provide resolution.",
          },
        ],
      },
      {
        subTitle: "Laptops (new and Renewed), Printers",
        subcontent: [
          {
            policy: "7 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, CDs and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy: "For all device-related issues in:",
            bullet: ["Apple Macbooks: please contact Apple Customer Service"],
          },
          {
            policy:
              "For few products, we may facilitate scheduling a technician visit to your location. On the basis of the technician's evaluation report, we will provide resolution.",
          },
        ],
      },
      {
        subTitle:
          "Desktops, Monitors, Pen Drives, Hard Drives, Memory Cards, Internet Devices, Computer Accessories, Graphic Cards, CPU, Power Supplies, Motherboards, Cooling Devices, TV cards, Computing Components (new and certified refurbished) and Ink",
        subcontent: [
          {
            policy: "7 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, CDs and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy: "For all device-related issues in:",
            bullet: [
              "Apple iMac and Mac mini: please contact Apple Customer Service",
            ],
          },
          {
            policy:
              "For few products, we may facilitate scheduling a technician visit to your location. On the basis of the technician's evaluation report, we will provide resolution.",
          },
          {
            policy:
              "Select items labelled as non-returnable on the product detail page are not eligible                for returns.",
            textbold: "Non-Returnable:",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to                you, we will provide a full refund or free replacement as applicable. We may contact                you to ascertain the damage or defect in the product prior to issuing refund/replacement.                We reserve the right to pick up the product to ascertain the damage or defect in the                product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Office & Stationery Supplies (new and Renewed)",
        subcontent: [
          {
            policy: "7 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              " Select items labelled as non-returnable on the product detail page are not eligible for returns.",
            textbold: "Non-Returnable:",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable. We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Networking Devices (new and Renewed)",
        subcontent: [
          {
            policy: "7 Days Replacement only",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing a replacement.",
          },
        ],
      },
      {
        subTitle: "Software",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to consumable (software keys/code) nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable. We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
          {
            policy:
              "For software-related technical or installation issues, please contact the brand directly.",
          },
        ],
      },
    ],
  },
  {
    title: "TV, Appliances, Electronics",
    content: [
      {
        subTitle:
          "Televisions, Large Appliances (new and Renewed) like Air Coolers, Air Conditioner, Refrigerator, Washing Machine, Dishwasher, Microwave",
        subcontent: [
          {
            policy: "10 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different/wrong item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "If you report an issue with your Air Conditioner, Refrigerator, Washing Machine or Microwave, we may facilitate scheduling a technician visit to your location. On the basis of the technician's evaluation report, we will provide resolution.",
          },
        ],
      },
      {
        subTitle:
          "Digital Cameras, Camera Lenses, Camera Accessories, Security cameras, Speakers & Home Theaters, Headphones",
        subcontent: [
          {
            policy: "7 Days Replacement only",
          },
          {
            policy:
              "This item is eligible for free replacement, within 7 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Home",
    content: [
      {
        subTitle: "Home (new and Renewed)",
        subcontent: [
          {
            policy: "10 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product within 10 days of delivery for full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Wax candles, Wall stickers",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to consumable nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable. We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Furniture",
        subcontent: [
          {
            policy: "10 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different/wrong item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "If you report an issue, we may facilitate scheduling a technician visit to your location. On the basis of the technician's evaluation report, we will provide resolution.",
          },
        ],
      },
      {
        subTitle:
          "Pet - Habitats & Supplies, Apparel & Leashes, Training & Behavior Aids, Toys, Aquarium Supplies such as Pumps, Filters and Lights",
        subcontent: [
          {
            policy: "30 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 30 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product within 30 days of delivery for full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with outer box or case, user manual, warranty cards, and other accompaniments in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Pet Food, Pet Shampoos and Conditioners, Pest Control, harnesses, aquarium supplies and Pet Grooming Aids",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to hygiene and consumable nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Home Improvement",
    content: [
      {
        subTitle:
          "All home improvement supplies (drilling machines & accessories), Mopping supplies, Ladders (step & telescopic), fasteners & hooks etc",
        subcontent: [
          {
            policy: "10 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "You can also return the product within 10 days of delivery for full refund. Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "All Cleaning, Painting & Decor supplies (like mops/brooms, dustpans, paints, brushes, wallpapers, wall paintings etc.)",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to consumable nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable. We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
          {
            policy:
              "We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "All Plumbing, Kitchen & Bath fixtures (like Taps, Faucets, Bath hardware, sinks etc.), Safety & Security systems (Safes, Home security systems, Door locks), Sweeping cloths & wipes, Hot water dispensers, Building materials, Dimmer & Lighting controls, cord & power management etc.",
        subcontent: [
          {
            policy: "10 Days Replacement only",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Kitchen",
    content: [
      {
        subTitle: "Kitchen (new & Renewed)",
        subcontent: [
          {
            policy: "10 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product within 10 days of delivery for full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "All kitchen appliances (like Mixer grinders, Juicers, Blenders, Food Processors, Toasters, Induction, Rice Cookers, Oven toaster grills, etc.) and home appliances (like Fans, Coolers, Water Heaters, Irons, Air purifiers, Humidifiers, Vacuums, etc.)",
        subcontent: [
          {
            policy: "10 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing replacement.",
          },
        ],
      },
      {
        subTitle: "Extended Warranty cards/vouchers/AMCs etc.",
        subcontent: [
          {
            policy: "Non-returnable",
          },
          {
            policy:
              "This item is non-returnable due to consumable (e-vouchers/coupons) nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Toys and Baby Products",
    content: [
      {
        subTitle: "Toys (new and Renewed)",
        subcontent: [
          {
            policy: "10 Day Replacement only",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with outer box or case, user manual, warranty cards, and other accompaniments in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Baby: Bathing and Accessories including FMCG; Diapering (Pads, Covers, Nappy Liners, Wet Wipes); Feeding Bottles, Breastfeeding products, Teethers; Baby Personal Care; Baby Hair & Skin Care Products",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to hygiene/health and personal care/wellness/consumable nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Baby: Toys, Prams, Strollers, Carriers; Baby Utensils & Feeding Sets, Baby Apparel, Diaper Bags; Baby Furniture, Nursery Decor",
        subcontent: [
          {
            policy: "10 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "You can also return the product within 10 days of delivery for full refund. Please keep the item in its original condition, with outer box or case, user manual, warranty cards, and other accompaniments in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Sports, Fitness, and Outdoors",
    content: [
      {
        subTitle: "Sports, Fitness and Outdoors (new and Renewed)",
        subcontent: [
          {
            policy: "10 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product within 10 days of delivery for full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Aerobic Training Machines like Treadmills, Exercise Bikes, Home Gyms/ Multi Gyms, Activity Trackers, Ellipticals, Camping furniture, Bicycles",
        subcontent: [
          {
            policy: "10 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing replacement.",
          },
        ],
      },
      {
        subTitle: "All inner apparel, socks, gym supporters, guards, swimsuits",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to hygiene/health and personal care/wellness nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Subscription packs, gym vouchers etc.",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to consumable (e-vouchers/coupons) nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Garden & Outdoors",
        subcontent: [
          {
            policy: "10 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product within 10 days of delivery for full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Fertilizers, Seeds, Live Plants",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to hygiene/health and personal care/wellness/consumable nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Clothing and Accessories",
    content: [
      {
        subTitle: "Clothing, shoes and Accessories",
        subcontent: [
          {
            policy: "10 Day Free Returns & Exchange",
          },
          {
            policy:
              "This item is eligible for return within 10 days of delivery. You can exchange this item for a different size/color or return for a full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, warranty cards, and original accessories in manufacturer packaging for a successful refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Men & Women innerwear, Men's Vests, Women's Lingerie, Swimwear, Socks & hosiery",
        subcontent: [
          {
            policy: "Non-Returnable",
          },
          {
            policy: "(Bras are returnable)",
          },
          {
            policy:
              "Items like lingerie/socks/inner-wear are non-returnable due to hygiene conditions. However, in the unlikely event of a damaged, defective or different item delivered to you, we will provide full refund or replacement if available.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Jewellery, Watches, and Eyewear",
    content: [
      {
        subTitle:
          "Fashion / Imitation Jewelry, Silver Jewelry, Precious Jewelry, Eyewear and Analog / Digital Watches (new and certified refurbished)",
        subcontent: [
          {
            policy: "10 Days Replacement/Refund",
          },
          {
            policy:
              "This item is eligible for return within 10 days of delivery. You can avail replacement, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product for a full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Smartwatches / Activity Trackers (new and certified refurbished)",
        subcontent: [
          {
            policy: "7 Days Replacement",
          },
          {
            policy:
              "In the unlikely event that you received a damaged or defective or a different from ordered product, you can avail free replacement of the product.",
          },
          {
            policy:
              "If you want to replace this item, please keep the item in its original condition with price tags intact, user manuals, warranty cards, original accessories and in the original manufacturer's box/packaging. Failure may make the item ineligible for replacement.",
          },
        ],
      },
      {
        subTitle:
          "Gold Coins / Gold Vedhanis / Gold Chips / Gold Bars / Silver Coins / Silver Bars / Silver Chips / Silver Bullion / Rakhi",
        subcontent: [
          {
            policy: "Non-Returnable",
          },
        ],
      },
    ],
  },
  {
    title: "Handbags and Luggage",
    content: [
      {
        subTitle: "Backpacks",
        subcontent: [
          {
            policy: "30 Days Replacement/Refund",
          },
          {
            policy:
              "This item is eligible for return within 30 days of delivery. You can avail replacement, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product for a full refund.",
          },
          {
            policy:
              "Any luggage products with locks must be returned unlocked. Please keep the item in its original condition, with brand outer box, MRP tags attached, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up. We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Handbags, Travel Luggage, Wallets & Travel Accessories",
        subcontent: [
          {
            policy: "10 Days Replacement/Refund",
          },
          {
            policy:
              "This item is eligible for return within 10 days of delivery. You can avail replacement, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product for a full refund.",
          },
          {
            policy:
              "Any luggage products with locks must be returned unlocked. Please keep the item in its original condition, with brand outer box, MRP tags attached, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up. We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
    ],
  },
  {
    title: "Car, Motorbike, and Industrial",
    content: [
      {
        subTitle:
          "Rims, Car Parts & Accessories, Bike Parts & Accessories, Helmets & other Protective Gear, Vehicle Electronics (new and Renewed)",
        subcontent: [
          {
            policy: "10 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product within 10 days of delivery for full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle: "Car Tires, Car Care, Chemicals & Fluids, Engine Oils",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to consumable nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Fasteners, Industrial Electrical, Lab & Scientific Products, Material Handling Products, Professional Medical Supplies, Tapes, Measure & Inspect Products, Industrial Hardware, Industrial Power & Hand Tools (new and certified refurbished)",
        subcontent: [
          {
            policy: "10 Days Returnable",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product within 10 days of delivery for full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Occupational Health & Safety Products (masks, gloves, safety glasses etc.)",
        subcontent: [
          {
            policy: "Non Returnable",
          },
          {
            policy:
              "This item is non-returnable due to hygiene/health and personal care/wellness nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
      {
        subTitle:
          "Packaging & Shipping Supplies, Industrial adhesive tapes & sealants, Food Service Equipment & Supplies, airflow & air quality meters etc.",
        subcontent: [
          {
            policy: "10 Days Replacement",
          },
          {
            policy:
              "This item is eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you. You can also return the product within 10 days of delivery for full refund.",
          },
          {
            policy:
              "Please keep the item in its original condition, with brand outer box, MRP tags attached, user manual, warranty cards, and original accessories in manufacturer packaging for a successful return pick-up.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement.",
          },
        ],
      },
    ],
  },
  {
    title:"Lead-acid Batteries",
    content: [
        {
      subTitle: "Lead-acid Batteries",
      subcontent: [
        {
          policy: "Non-Returnable",
        },
        {
          policy:
            "This item is non-returnable due to consumable nature of the product.",
        },
        {
          policy:
            "However, in the unlikely event of damaged, defective or different item delivered to you, we will provide a full refund or free replacement as applicable.",
        },
        {
          policy:
            "We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.",
        },
      ]
    },
]
  },
  {
    title: "Inspect and Buy",
    content: [
      {
        subTitle: "Products with ‘Inspect & Buy’ label",
        subcontent: [
          {
            policy: "2 Days Refund only",
          },
        ],
      },
    ],
  },
  {
    title: "Seller Fulfilled Items",
    sub: "Return policies that are exclusively Seller Fulfilled are listed below. For all other        categories, the return policies mentioned above apply.",
    content: [
      {
        subTitle:
          "Fine Art, Sports collectibles, Entertainment collectibles, Coin collectibles",
        subcontent: [
          {
            policy:
              "Sellers to be informed of the damage / defect within 10 days of delivery.",
          },
        ],
      },
    ],
  },
  {
    title: "Customizable Products",
    content: [
      {
        subTitle: "Customizable Products",
        subcontent: [
          {
            policy: "Non-returnable",
          },
          {
            policy:
              "This item is non-returnable due to the customized nature of the product.",
          },
          {
            policy:
              "However, in the unlikely event of a damaged, defective item, or a product with wrong customization being delivered to you, we will provide a full refund as applicable.",
          },
          {
            policy:
              "We may contact you to ascertain the damage or defect in the product prior to issuing a refund.",
          },
          {
            policy:
              "You may request a refund under A-to-z Guarantee claims for these items. For information on how to request an A-to-z Guarantee refund, see Request an A-to-z Guarantee Refund.",
          },
        ],
      },
    ],
  },
];
