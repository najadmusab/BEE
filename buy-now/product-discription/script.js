function changeImg(src){
  document.getElementById("mainImg").src = src;
}

function changeQty(val){
  let q = document.getElementById("qty");
  let num = parseInt(q.value) + val;
  if(num >= 1) q.value = num;
}

function buyNow(){
  let qty = document.getElementById("qty").value;
  let msg = `Hello! I want to buy Julbernardia Blossom Honey. Quantity: ${qty}`;
  window.open(`https://wa.me/919526226011?text=${encodeURIComponent(msg)}`);
}
const products = {
  honey1: {
    tag: "WILD TROPICAL",
    title: "Wild Tropical Honey 500g",
    price: "₹499 / 500g",
    desc: "Harvested from wild tropical blossoms, this honey delivers a rich golden flavor, natural aroma, and powerful health benefits.",
    images: [
      "/images/Wildflower Classic Honey.jpg",
      "/images/honey jar mockup.jpg"
    ]
  },
  honey2: {
    tag: "FOREST BLOSSOM",
    title: "Forest Blossom Honey 250g",
    price: "₹299 / 250g",
    desc: "Collected from untouched forest flowers, offering a smooth taste and pure natural sweetness.",
    images: [
      "/images/Personalize this honey label with your apiary….jpg",
      "/images/Wildflower Classic Honey.jpg"
    ]
  },
  honey3: {
    tag: "RAW & ORGANIC",
    title: "Organic Raw Honey 1kg",
    price: "₹899 / 1kg",
    desc: "Unprocessed raw honey packed with enzymes, antioxidants, and nutrients.",
    images: [
      "/images/Julbernardia Blossom Honey.jpg",
      "/images/honey jar mockup.jpg"
    ]
  },
  honey4: {
    tag: "WILD FLOWER",
    title: "Wild Flower Honey 500g",
    price: "₹499 / 500g",
    desc: "Aromatic honey sourced from diverse wild flowers with a balanced sweetness.",
    images: [
      "/images/Wildflower Classic Honey.jpg",
      "/images/Tropical Blossom Honey _ Made In Small Batches.jpg"
    ]
  },
  honey5: {
    tag: "ACACIA",
    title: "Acacia Honey 250g",
    price: "₹349 / 250g",
    desc: "Light, smooth honey with delicate floral notes from acacia trees.",
    images: [
      "/images/Organic Honey Acacia 500g.jpg",
      "/images/honey jar mockup.jpg"
    ]
  },
  honey6: {
    tag: "MULTIFLORA",
    title: "Multiflora Honey 500g",
    price: "₹549 / 500g",
    desc: "A rich blend of nectar from multiple flowers creating a complex taste.",
    images: [
      "/images/honey jar mockup.jpg",
      "/images/Wildflower Classic Honey.jpg"
    ]
  },
  honey7: {
    tag: "FOREST PURE",
    title: "Forest Honey 1kg",
    price: "₹999 / 1kg",
    desc: "Dark, earthy honey collected from deep forest regions.",
    images: [
      "/images/Premium Marmaris Pine Honey – 180g _ Limited….jpg",
      "/images/honey jar mockup.jpg"
    ]
  },
  honey8: {
    tag: "PREMIUM BLOSSOM",
    title: "Premium Blossom Honey 500g",
    price: "₹599 / 500g",
    desc: "Exquisite honey made in small batches from premium tropical blossoms.",
    images: [
      "/images/Tropical Blossom Honey _ Made In Small Batches.jpg",
      "/images/Wildflower Classic Honey.jpg"
    ]
  }
};

// LOAD PRODUCT
const id = window.location.hash.replace("#", "");
const product = products[id];

if (product) {
  document.getElementById("tag").innerText = product.tag;
  document.getElementById("title").innerText = product.title;
  document.getElementById("price").innerText = product.price;
  document.getElementById("description").innerText = product.desc;

  document.getElementById("mainImg").src = product.images[0];
  document.getElementById("thumb1").src = product.images[0];
  document.getElementById("thumb2").src = product.images[1];
}

// IMAGE SWITCH
function changeImg(src) {
  document.getElementById("mainImg").src = src;
}

// WHATSAPP BUY
function buyNow() {
  const msg = `Hello, I want to buy:\n${product.title}\n${product.price}`;
  window.open(
    `https://wa.me/919526226011?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
