
// Inicialización de productos en localStorage
const arrProductos = {
  "001": {
    id: "001",
    nombre: "Smartphones",
    precio: 103000,
    descripcion: "Teléfonos inteligentes con tecnología de última generación, pantallas de alta resolución y gran rendimiento para el uso diario.",
    imagen: "img/product_single_01.jpg",
    reviews: 24,
    estrellas: 3,
    marca: "TechNova",
    modelo: "TN-2023",
    categoria: '001',
    especificaciones: {
      "pantalla": "6.5 pulgadas AMOLED",
      "procesador": "Octa-core 2.8 GHz",
      "ram": "8 GB",
      "almacenamiento": "128 GB",
      "cámara": "48 MP + 12 MP + 5 MP",
      "batería": "4500 mAh",
      "sistema_operativo": "Android 12",
      "conectividad": "5G, Wi-Fi 6, Bluetooth 5.0",
      "dimensiones": "160.5 x 74.5 x 8.2 mm",
      "peso": "190 g",
      "colores": "Negro, Blanco, Azul"
    }
  },
  "002": {
    id: "002",
    nombre: "Tablets",
    precio: 121000,
    descripcion: "Tabletas compactas y potentes ideales para estudiar, trabajar o disfrutar de contenido multimedia desde cualquier lugar.",
    imagen: "img/product_single_02.jpg",
    reviews: 21,
    estrellas: 5,
    marca: "TechNova",
    modelo: "TN-Tab-2023",
    categoria: '001',
    especificaciones: {
      "pantalla": "10.2 pulgadas",
      "procesador": "Octa-core 2.8 GHz",
      "ram": "8 GB",
      "almacenamiento": "128 GB",
      "cámara": "48 MP + 12 MP + 5 MP",
      "batería": "4500 mAh",
      "sistema_operativo": "Android 12",
      "conectividad": "5G, Wi-Fi 6, Bluetooth 5.0",
      "dimensiones": "160.5 x 74.5 x 8.2 mm",
      "peso": "190 g",
      "colores": "Negro, Blanco, Azul"
    }
  },
  "003": {
    id: "003",
    nombre: "Fundas",
    precio: 81800,
    descripcion: "Fundas resistentes y elegantes para proteger tu dispositivo contra golpes, caídas y arañazos, disponibles en varios estilos.",
    imagen: "img/product_single_03.jpg",
    reviews: 36,
    estrellas: 2,
    marca: "TechNova",
    modelo: "TN-Funda-2023",
    categoria: '003',
    especificaciones: {
      "pantalla": "6.5 pulgadas AMOLED",
      "procesador": "Octa-core 2.8 GHz",
      "ram": "8 GB",
      "almacenamiento": "236 GB",
      "cámara": "48 MP + 12 MP + 5 MP",
      "batería": "4500 mAh",
      "sistema_operativo": "Android 12",
      "conectividad": "5G, Wi-Fi 6, Bluetooth 5.0",
      "dimensiones": "160.5 x 74.5 x 8.2 mm",
      "peso": "190 g",
      "colores": "Negro, Blanco, Azul, Rojo, Verde"
    }
  },
  "004": {
    id: "004",
    nombre: "Bombillas inteligentes",
    precio: 61000,
    descripcion: "Iluminación LED inteligente que puedes controlar desde tu teléfono o asistente de voz. Ahorro energético con estilo.",
    imagen: "img/product_single_04.jpg",
    reviews: 48,
    estrellas: 3,
    marca: "TechNova",
    modelo: "TN-Bombilla-2023",
    categoria: '003',
    especificaciones: {
      "luminex": "500",
      "sensor": "Si"
    }
  },
  "005": {
    id: "005",
    nombre: "Relojes inteligentes",
    precio: 50000,
    descripcion: "Smartwatches con funciones de salud, notificaciones y control de música. Diseñados para mantenerte conectado todo el día.",
    imagen: "img/product_single_05.jpg",
    reviews: 16,
    estrellas: 5,
    marca: "TechNova",
    modelo: "TN-Reloj-2025",
    categoria: '004',
    especificaciones: {
      "pantalla": "6.5 pulgadas AMOLED",
      "procesador": "Octa-core 2.8 GHz",
      "ram": "8 GB",
      "colores": "Negro, Blanco, Azul, Rojo, Verde",
      "material": "acero",
      "resistente al agua": "Si"
    }
  },
  "006": {
    id: "006",
    nombre: "Aspiradoras robot",
    precio: 90000,
    descripcion: "Robots aspiradores inteligentes que limpian tu hogar automáticamente. Eficientes, silenciosos y programables desde tu móvil.",
    imagen: "img/product_single_06.jpg",
    reviews: 32,
    estrellas: 4,
    marca: "TechNova",
    modelo: "TN-Aspiradora-2024",
    categoria: '008',
    especificaciones: {
      "silenciosos": "Si",
      "medidas": "160.5 x 74.5 x 8.2 mm",
      "peso": "190 g",
      "colores": "Negro, Blanco, Azul, Rojo, Verde"
    }
  }
};


localStorage.setItem("arrProductos", JSON.stringify(arrProductos));


const arrCategorias = {
  '001': {
    "id": "001",
    "nombre": "Electrónica de Consumo",
    "imagen": "img/category_img_01.jpg",
    "descripcion": "Dispositivos electrónicos de uso diario que mejoran la conectividad y el entretenimiento.",
    "ejemplos": ["smartphones", "tablets", "laptops", "cámaras", "televisores"]
  },
  '002': {
    "id": "002",
    "nombre": "Electrodomésticos",
    "imagen": "img/category_img_02.jpg",  
    "descripcion": "Aparatos diseñados para facilitar las tareas del hogar, desde la cocina hasta la limpieza.",
    "nombre": "Accesorios y Periféricos",
    "ejemplos": ["fundas", "cargadores", "cables", "teclados", "mouse", "discos duros", "power banks"]
  },
  '003': {
    "id": "003",
    "nombre": "Smart Home & IoT",
    "imagen": "img/category_img_03.jpg",
    "descripcion": "Dispositivos conectados que permiten automatizar y controlar tu hogar de manera inteligente.",
    "ejemplos": ["bombillas inteligentes", "enchufes conectados", "termómetros IoT", "cámaras de seguridad", "asistentes de voz"]
  },
  '004': {
    "id": "004",
    "nombre": "Wearables y Salud Conectada",
    "imagen": "img/category_img_04.jpg",
    "descripcion": "Dispositivos portátiles que monitorizan tu salud y actividad física, conectándose a tu smartphone.",
    "ejemplos": ["relojes inteligentes", "bandas fitness", "auriculares inalámbricos"]
  },
  '005': {
    "id": "005",
    "nombre": "Gaming & Entretenimiento",
    "imagen": "img/category_img_05.jpg",
    "descripcion": "Productos diseñados para mejorar la experiencia de juego y entretenimiento digital.",
    "ejemplos": ["consolas", "juegos", "VR", "drones", "gadgets de juego"]
  },
  '006': {
    "id": "006",
    "nombre": "Hardware y Computación",
    "imagen": "img/category_img_06.jpg",
    "descripcion": "Componentes y accesorios para computadoras y redes, esenciales para el rendimiento y la conectividad.",
    "ejemplos": ["placas madre", "tarjetas gráficas", "SSD", "HDD", "routers", "impresoras"]
  },
  '007': {
    "id": "007",
    "nombre": "Robótica y Drones",
    "imagen": "img/category_img_07.jpg",
    "descripcion": "Dispositivos robóticos y drones para uso recreativo, educativo y profesional, que ofrecen nuevas formas de interactuar con el mundo.",
    "ejemplos": ["drones de consumo", "robots domésticos", "robots educativos"]
  },
  '008': {
    "id": "008",
    "nombre": "Electrodomésticos Inteligentes",
    "imagen": "img/category_img_08.jpg",
    "descripcion": "Electrodomésticos que se conectan a Internet y pueden ser controlados de forma remota, mejorando la eficiencia y comodidad del hogar.",
    "ejemplos": ["aspiradoras robot", "cafeteras conectadas", "pequeños electrodomésticos smart"]
  },
  '009': {
    "id": "009",
    "nombre": "Reacondicionados / Refurbished",
    "imagen": "img/category_img_09.jpg",
    "descripcion": "Productos reacondicionados que han sido inspeccionados, reparados y certificados para ofrecer una segunda vida con garantía.",
    "ejemplos": ["teléfonos reacondicionados", "laptops reacondicionados", "gadgets con garantía"]
  },
  '010': {
    "id": "010",
    "nombre": "Software y Licencias",
    "imagen": "img/category_img_10.jpg",
    "descripcion": "Programas y aplicaciones que mejoran la productividad, seguridad y entretenimiento digital, disponibles en formato digital o físico.",
    "ejemplos": ["licencias de software", "aplicaciones para productividad", "software de seguridad"]
  }
};

localStorage.setItem("arrCategorias", JSON.stringify(arrCategorias));


const arrBanners = {
  "001": {
    "id": "001",
    "imagen": "img/banner_01.jpg",
    "titulo": "Bienvenido a TechNova",
    "subtitulo": "La tienda de tecnología más innovadora",
    "descripcion": "Descubre la última tecnología en smartphones, tablets y más."
  },
  "002": {
    "id": "002",
    "imagen": "img/banner_02.jpg",
    "titulo": "Innovación en tu hogar",
    "subtitulo": "Dispositivos inteligentes y electrodomésticos",
    "descripcion": "Transforma tu hogar con nuestros dispositivos inteligentes y electrodomésticos conectados."
  },
  "003": {
    "id": "003",
    "imagen": "img/banner_03.jpg",
    "titulo": "Gaming y Entretenimiento",
    "descripcion": "Sumérgete en el mundo del gaming con nuestras consolas, accesorios y gadgets."
  },
  "004": {
    "id": "004",
    "imagen": "img/banner_04.jpg",
    "titulo": "Robótica y Drones",
    "subtitulo": "Explora el futuro de la tecnología",
    "descripcion": "Explora nuestra selección de drones y robots para uso recreativo y profesional."
  }
};

localStorage.setItem("arrBanners", JSON.stringify(arrBanners));