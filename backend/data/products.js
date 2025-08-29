// This is a temporary data file until we connect to a database
// Copy your existing data from src/Componets/Data/Datadetail.js

const products = [
  {
    id: 1,
    title: "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    image: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 773,
    description: "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11,
    stock: 50,
    rating: 4.5,
    reviews: 120
  },
  {
    id: 2,
    title: "Apple iPhone 13 Pro Max (256GB) - Sierra Blue",
    image: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 1099,
    description: "Latest iPhone with Pro camera system, A15 Bionic chip, and ProMotion display",
    brand: "apple",
    model: "iPhone 13 Pro Max",
    color: "sierra-blue",
    category: "smartphones",
    discount: 5,
    stock: 30,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    title: "Samsung 65-inch QLED 4K Smart TV",
    image: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 1299,
    description: "Quantum Dot technology, 4K resolution, Smart TV features with voice control",
    brand: "samsung",
    model: "QN65Q80T",
    color: "black",
    category: "electronics",
    discount: 15,
    stock: 25,
    rating: 4.6,
    reviews: 67
  }
  // Add more products from your existing data
];

module.exports = products;
