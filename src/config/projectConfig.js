export const projectConfig = {
  seo: {
    title: "Golf Los Incas | Proyecto Inmobiliario Premium en Surco",
    description:
      "Descubre Golf Los Incas, un proyecto inmobiliario premium ubicado en Av. Circunvalación del Golf los Incas 189, Surco. Solicita información, agenda una visita y conoce esta gran oportunidad para vivir o invertir."
  },
  branding: {
    shortName: "Golf Los Incas",
    fullName: "Conjunto Residencial Multifamiliar Golf Los Incas",
    label: "Residencial Premium"
  },
  location: {
    shortAddress: "Av. Circunvalación del Golf los Incas 189, Surco",
    fullAddress: "Av. Circunvalación del Golf los Incas 189, Santiago de Surco, Lima, Perú",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Av.%20Circunvalaci%C3%B3n%20del%20Golf%20los%20Incas%20189,%20Santiago%20de%20Surco,%20Lima,%20Per%C3%BA&output=embed",
    nearbyPoints: [
      "Conexion rapida con avenidas principales y ejes empresariales",
      "Cercania a comercios, servicios y zonas gastronomicas",
      "Acceso a colegios, universidades y clinicas de primer nivel",
      "Entorno residencial consolidado y de alta demanda"
    ]
  },
  metrics: {
    landArea: "6,000 m2",
    builtArea: "30,500 m2",
    towers: "7 torres",
    basements: "2 sotanos",
    technicalSpaces: "Cuarto de bombas",
    focus: "Vivienda multifamiliar premium"
  },
  hero: {
    eyebrow: "Golf Los Incas",
    headline: "Vive la exclusividad en una de las mejores zonas de Surco",
    subtitle:
      "Proyecto residencial premium de gran escala con ubicación estratégica, conectividad y alto potencial de valorización para vivir o invertir con confianza.",
    backgroundImage: "/images/hero-facade-day-1.jpg",
    benefits: [
      "Ubicación privilegiada",
      "Alta valorización",
      "Diseño moderno",
      "Espacios pensados para tu estilo de vida"
    ],
    ctas: [
      { label: "Solicitar información", href: "#contacto", variant: "primary" },
      { label: "Agendar visita", href: "#contacto", variant: "secondary" },
      { label: "Ver recorrido", href: "#recorrido", variant: "ghost" }
    ]
  },
  overview: {
    title: "Una propuesta residencial pensada para vivir con valor",
    paragraph:
      "Golf Los Incas es una propuesta residencial premium pensada para quienes buscan más que un departamento: un entorno de valor, ubicación estratégica y una inversión inteligente en una de las zonas con mayor proyección de Surco.",
    support:
      "Con una vision contemporanea, el proyecto integra diseno arquitectonico moderno, funcionalidad y una experiencia residencial orientada al confort, la conectividad y la calidad de vida."
  },
  statsGrid: [
    { value: "6,000 m2", label: "Terreno aproximado" },
    { value: "30,500 m2", label: "Area construida proyectada" },
    { value: "7", label: "Torres residenciales" },
    { value: "2", label: "Niveles subterraneos" },
    { value: "Premium", label: "Proyecto multifamiliar" },
    { value: "Moderno", label: "Espacios para un nuevo estilo de vida" }
  ],
  masterPlan: {
    kicker: "Planta general del proyecto",
    title: "Conoce la distribucion integral de Golf Los Incas",
    subtitle:
      "La planta general del proyecto permite apreciar la disposicion de sus 7 torres y la planificacion de un conjunto residencial concebido para ofrecer amplitud, conectividad interna y una experiencia urbana moderna en un entorno premium.",
    description:
      "La composicion urbana del proyecto responde a una logica residencial equilibrada: recorridos internos claros, relacion armonica entre torres y espacios comunes, y una vision de gran escala enfocada en calidad de vida y valorizacion.",
    image: "/images/plant-view-day.jpg",
    highlights: [
      "Lectura clara de las 7 torres residenciales",
      "Distribucion integrada para circulacion interna eficiente",
      "Escala urbana premium con vision residencial de largo plazo"
    ],
    ctaLabel: "Solicitar informacion del master plan"
  },
  amenities: {
    kicker: "Áreas sociales",
    title: "Áreas sociales pensadas para una experiencia residencial superior",
    description:
      "Golf Los Incas incorpora espacios comunes diseñados para complementar un estilo de vida moderno, funcional y exclusivo. Cada ambiente ha sido concebido con acabados seleccionados y una propuesta arquitectónica orientada al bienestar, la convivencia y la valorización del proyecto.",
    // EDITAR: Reemplaza "image" cuando tengas renders o fotografias finales.
    cards: [
      {
        id: "piscina-techada",
        name: "Zona de piscina techada",
        description:
          "Ambiente social de descanso y bienestar, ideal para disfrutar durante todo el año.",
        finish: "Porcelanato antideslizante 0.60 x 1.20 m",
        image: "/images/piscina-techada.png",
        visual: "pool"
      },
      {
        id: "gimnasio",
        name: "Gimnasio",
        description:
          "Espacio preparado para entrenamiento funcional y rutinas de alto rendimiento.",
        finish: "Caucho sintético de 6 mm",
        image: "/images/gimnasio.png",
        visual: "gym"
      },
      {
        id: "coworking",
        name: "Coworking",
        description:
          "Área productiva para trabajar, reunirse o estudiar con comodidad y estilo.",
        finish: "Madera estructurada",
        image: "/images/coworking.png",
        visual: "coworking"
      },
      {
        id: "ingreso-principal",
        name: "Ingreso principal",
        description:
          "Recepción y acceso de alto impacto visual, alineado al perfil premium del proyecto.",
        finish: "Porcelanato antideslizante 0.20 x 1.20 m texturado tipo piedra",
        image: "/images/hero-facade-day-2.jpg",
        visual: "entry"
      },
      {
        id: "alameda-central",
        name: "Alameda central",
        description:
          "Corazón peatonal del conjunto, pensado para encuentro, paseo y experiencia urbana.",
        finish: "Porcelanato antideslizante 0.20 x 1.20 m texturado tipo piedra",
        image: "/images/alameda-central-day.jpg",
        visual: "alameda"
      },
      {
        id: "circulaciones-exteriores",
        name: "Circulaciones exteriores",
        description:
          "Conexiones fluidas entre torres y espacios comunes con trazado funcional y seguro.",
        finish: "Porcelanato antideslizante 0.20 x 1.20 m texturado tipo piedra",
        image: "/images/alameda-day.jpg",
        visual: "circulation"
      },
      {
        id: "terrazas-comunes",
        name: "Terrazas de uso común",
        description:
          "Espacios abiertos para compartir, relajarse y disfrutar de momentos sociales.",
        finish: "Porcelanato antideslizante 0.20 x 1.20 m texturado tipo piedra",
        image: "/images/alameda-central-day-2.jpg",
        visual: "terrace"
      },
      {
        id: "plaza-aerea",
        name: "Plaza aérea",
        description:
          "Plataforma social elevada con imagen contemporanea y valor residencial diferencial.",
        finish: "Porcelanato antideslizante 0.20 x 1.20 m texturado tipo piedra",
        image: "/images/buildings-night.jpg",
        visual: "aerial"
      }
    ]
  },
  benefits: {
    title: "Diferenciales que elevan tu decisión de compra",
    description:
      "Cada componente del proyecto ha sido concebido para ofrecer una propuesta sólida para vivienda e inversión patrimonial.",
    cards: [
      {
        icon: "pin",
        title: "Ubicacion estrategica en Surco",
        text: "Direccion privilegiada en un eje residencial de alto valor."
      },
      {
        icon: "growth",
        title: "Alta proyeccion de valorizacion",
        text: "Zona con demanda sostenida y potencial de plusvalia."
      },
      {
        icon: "routes",
        title: "Conectividad con zonas clave",
        text: "Acceso eficiente a centros empresariales y servicios."
      },
      {
        icon: "architecture",
        title: "Diseno arquitectonico moderno",
        text: "Concepto contemporaneo, funcional y visualmente sobrio."
      },
      {
        icon: "house",
        title: "Ideal para vivir o invertir",
        text: "Propuesta adaptable a familias y perfiles inversionistas."
      },
      {
        icon: "community",
        title: "Entorno residencial atractivo",
        text: "Ubicacion consolidada con calidad urbana y seguridad."
      },
      {
        icon: "scale",
        title: "Proyecto de gran escala",
        text: "Magnitud que respalda su vision y proyeccion en el tiempo."
      },
      {
        icon: "premium",
        title: "Enfoque premium y funcional",
        text: "Diseno de alto estandar para una vida moderna y comoda."
      }
    ]
  },
  locationSection: {
    title: "Ubicación estratégica para tu vida y tu patrimonio",
    text: "Ubicado en Av. Circunvalación del Golf los Incas 189, Golf Los Incas se encuentra en una de las zonas más estratégicas de Santiago de Surco, con excelente conectividad y cercanía a puntos clave de la ciudad.",
    image: "/images/location-map.jpg",
    ctas: [
      {
        label: "Quiero conocer la ubicación",
        href: "https://www.google.com/maps/search/?api=1&query=Av.+Circunvalaci%C3%B3n+del+Golf+los+Incas+189,+Santiago+de+Surco,+Lima,+Per%C3%BA",
        variant: "primary",
        external: true
      },
      { label: "Solicitar asesoría", href: "#contacto", variant: "secondary" }
    ]
  },
  tour: {
    title: "Recorrido y visualización del proyecto",
    description:
      "Explora una vista previa del proyecto a través de material visual, recorrido virtual y escenas destacadas pensadas para que evalúes cada detalle.",
    // EDITAR: Reemplaza por URL embebible final (YouTube o Vimeo) cuando este disponible.
    videoEmbedUrl: "",
    placeholderImage: "/images/hero-facade-day-2.jpg",
    gallerySlides: [
      {
        title: "Fachada principal",
        caption: "Lineas contemporaneas y propuesta estetica de alto nivel.",
        image: "/images/hero-facade-day-1.jpg"
      },
      {
        title: "Alameda central",
        caption: "Espacios peatonales amplios para una experiencia residencial premium.",
        image: "/images/alameda-central-day.jpg"
      },
      {
        title: "Vista nocturna",
        caption: "Iluminacion y diseno que realzan la identidad del proyecto.",
        image: "/images/hero-facade-night.jpg"
      }
    ],
    ctas: [
      { label: "Ver recorrido", href: "#recorrido", variant: "primary" },
      { label: "Solicita una visita virtual", href: "#contacto", variant: "secondary" },
      {
        label: "Agenda una presentacion del proyecto",
        href: "#contacto",
        variant: "ghost"
      }
    ]
  },
  videoShowcase: {
    kicker: "Recorrido del proyecto",
    title: "Recorre Golf Los Incas y visualiza tu próxima inversión",
    description:
      "Explora vistas del proyecto y presenta la propuesta a tu ritmo con un recorrido visual enfocado en arquitectura, espacios y entorno.",
    // EDITAR: Puedes usar el mismo enlace embebido del tour o uno distinto.
    videoEmbedUrl: "",
    videoPlaceholder: "/images/alameda-central-day-3.jpg",
    imageSlides: [
      "/images/alameda-central-day.jpg",
      "/images/alameda-day.jpg",
      "/images/buildings-day.jpg",
      "/images/alameda-central-day-2.jpg",
      "/images/hero-facade-day-2.jpg"
    ],
    ctas: [
      { label: "Ver recorrido", href: "#recorrido", variant: "primary" },
      { label: "Solicita una visita virtual", href: "#contacto", variant: "secondary" },
      {
        label: "Agenda una presentación del proyecto",
        href: "#contacto",
        variant: "ghost"
      }
    ]
  },
  finishes: {
    kicker: "Finos acabados",
    title: "Materiales seleccionados para una experiencia residencial premium",
    description:
      "La propuesta de acabados de Golf Los Incas combina durabilidad, sofisticación y estética contemporánea. Cada superficie ha sido elegida para elevar la experiencia diaria y reforzar el valor del proyecto.",
    // EDITAR: Puedes reemplazar las imágenes conceptuales por renders o fotos reales.
    items: [
      {
        id: "porcelanato-piscina",
        name: "Porcelanato antideslizante 0.60 x 1.20 m",
        area: "Zona de piscina techada",
        detail:
          "Acabado de alto desempeño con textura de seguridad y lectura visual elegante para ambientes húmedos.",
        image: "/images/piscina-techada.png"
      },
      {
        id: "caucho-gimnasio",
        name: "Caucho sintético de 6 mm",
        area: "Gimnasio",
        detail:
          "Superficie técnica para absorción de impacto, confort de uso y mejor rendimiento en entrenamientos.",
        image: "/images/gimnasio.png"
      },
      {
        id: "madera-coworking",
        name: "Madera estructurada",
        area: "Coworking",
        detail:
          "Acabado cálido y sofisticado que eleva la percepción espacial y aporta una atmósfera profesional.",
        image: "/images/coworking.png"
      },
      {
        id: "piedra-exteriores",
        name: "Porcelanato antideslizante 0.20 x 1.20 m texturado tipo piedra",
        area: "Ingreso principal, alameda central, circulaciones, terrazas y plaza aérea",
        detail:
          "Lenguaje material continuo para exteriores, con presencia arquitectónica y alta resistencia al uso.",
        image: "/images/alameda-central-day-3.jpg"
      }
    ]
  },
  virtualTour3D: {
    title: "Recorrido virtual 3D del proyecto",
    description:
      "Incorpora una experiencia inmersiva para mostrar volumetría, circulaciones y perspectiva real del conjunto residencial desde cualquier dispositivo.",
    bullets: [
        "Visualización interactiva de torres y espacios comunes",
        "Navegación en 360 para clientes y potenciales inversionistas",
        "Herramienta comercial ideal para campañas digitales y presentaciones"
      ],
    // EDITAR: Pega aqui el enlace embebible de Matterport o plataforma 3D.
    embedUrl: "",
    placeholderImage: "/images/internal-buildings-night.jpg",
    ctas: [
      { label: "Solicitar acceso al tour 3D", href: "#contacto", variant: "primary" },
      { label: "Hablar con un asesor", href: "#contacto", variant: "ghost" }
    ]
  },
  gallery: {
    title: "Galería del proyecto",
    description:
      "Espacios visuales listos para mostrar fachada, interiores, áreas comunes, entorno y vistas destacadas.",
    items: [
      { src: "/images/hero-facade-day-1.jpg", alt: "Fachada principal de dia" },
      { src: "/images/hero-facade-day-2.jpg", alt: "Ingreso y fachada principal" },
      { src: "/images/alameda-central-day.jpg", alt: "Alameda central del proyecto" },
      { src: "/images/alameda-central-day-2.jpg", alt: "Alameda central con areas verdes" },
      { src: "/images/buildings-day.jpg", alt: "Edificios internos de dia" },
      { src: "/images/plant-view-day.jpg", alt: "Vista general del conjunto residencial" },
      { src: "/images/buildings-night.jpg", alt: "Vista nocturna de edificios" },
      { src: "/images/internal-buildings-night.jpg", alt: "Áreas internas en horario nocturno" }
    ]
  },
  unitTypes: {
    kicker: "Tipologías de departamentos",
    title: "15 tipologías diseñadas para diferentes estilos de vida",
    description:
      "Golf Los Incas ofrece una propuesta residencial diversa, con distintas tipologías de departamentos pensadas para adaptarse a diferentes necesidades, estilos de vida y objetivos de inversión.",
    // EDITAR: Actualiza codigo, area, descripcion, dormitorios y banos segun la arquitectura final.
    items: [
      {
        code: "Tipología A1",
        area: "62 m2",
        bedrooms: "1 dormitorio",
        bathrooms: "1 baño",
        description: "Layout eficiente para primeras compras e inversion de renta.",
        
        blueprint: "alpha",
        image: "/images/tipologia1.png"
      },
      {
        code: "Tipología A2",
        area: "68 m2",
        bedrooms: "1 dormitorio + estudio",
        bathrooms: "1 baño",
        description: "Configuración flexible para home office y estilo de vida urbano.",
        blueprint: "beta",
        image: "/images/tipologia2.png"
      },
      {
        code: "Tipología B1",
        area: "74 m2",
        bedrooms: "2 dormitorios",
        bathrooms: "2 baños",
        description: "Distribución balanceada para parejas y familias pequeñas.",
        blueprint: "gamma",
        image: "/images/tipologia1.png"
      },
      {
        code: "Tipología B2",
        area: "78 m2",
        bedrooms: "2 dormitorios",
        bathrooms: "2 baños",
        description: "Planta moderna con excelente aprovechamiento de area social.",
        blueprint: "delta",
        image: "/images/tipologia2.png"
      },
      {
        code: "Tipología B3",
        area: "83 m2",
        bedrooms: "2 dormitorios + estar",
        bathrooms: "2 baños",
        description: "Ambientes versátiles para dinámicas familiares contemporáneas.",
        blueprint: "epsilon",
        image: "/images/tipologia1.png"
      },
      {
        code: "Tipología C1",
        area: "88 m2",
        bedrooms: "3 dormitorios",
        bathrooms: "2 baños",
        description: "Unidad familiar con dormitorios integrados y flujo funcional.",
        blueprint: "alpha",
        image: "/images/tipologia2.png"
      },
      {
        code: "Tipología C2",
        area: "92 m2",
        bedrooms: "3 dormitorios",
        bathrooms: "2 baños",
        description: "Espacios sociales amplios con perfil ideal para vivienda principal.",
        blueprint: "beta",
        image: "/images/tipologia1.png"
      },
      {
        code: "Tipología C3",
        area: "98 m2",
        bedrooms: "3 dormitorios",
        bathrooms: "2 baños",
        description: "Composición equilibrada con buena separación de zonas privadas.",
        blueprint: "gamma",
        image: "/images/tipologia2.png"
      },
      {
        code: "Tipología D1",
        area: "104 m2",
        bedrooms: "3 dormitorios + estudio",
        bathrooms: "3 baños",
        description: "Formato premium para familias que valoran amplitud y flexibilidad.",
        blueprint: "delta",
        image: "/images/tipologia1.png"
      },
      {
        code: "Tipología D2",
        area: "110 m2",
        bedrooms: "3 dormitorios + estar",
        bathrooms: "3 baños",
        description: "Planta de alto confort para residencia permanente.",
        blueprint: "epsilon",
        image: "/images/tipologia2.png"
      },
      {
        code: "Tipología E1",
        area: "118 m2",
        bedrooms: "3 dormitorios + servicio",
        bathrooms: "3 baños",
        description: "Propuesta orientada a familias que priorizan funcionalidad superior.",
        blueprint: "alpha",
        image: "/images/tipologia1.png"
      },
      {
        code: "Tipología E2",
        area: "126 m2",
        bedrooms: "4 dormitorios",
        bathrooms: "3 baños",
        description: "Unidad amplia para grupos familiares de mayor tamaño.",
        blueprint: "beta",
        image: "/images/tipologia2.png"
      },
      {
        code: "Tipología F1",
        area: "134 m2",
        bedrooms: "4 dormitorios + estar",
        bathrooms: "3 baños",
        description: "Tipologia de alta demanda para vivir con comodidad premium.",
        blueprint: "gamma",
        image: "/images/tipologia1.png"
      },
      {
        code: "Tipología F2",
        area: "142 m2",
        bedrooms: "4 dormitorios + estudio",
        bathrooms: "4 baños",
        description: "Espacios de gran formato para familias consolidadas.",
        blueprint: "delta",
        image: "/images/tipologia2.png"
      },
      {
        code: "Tipología G1",
        area: "156 m2",
        bedrooms: "4 dormitorios + sala familiar",
        bathrooms: "4 baños",
        description: "Unidad insignia para quienes buscan amplitud y valor patrimonial.",
        blueprint: "epsilon",
        image: "/images/tipologia1.png"
      }
    ]
  },
  investment: {
    title: "Una oportunidad sólida para vivir o invertir",
    paragraph:
      "Golf Los Incas representa una oportunidad atractiva para quienes buscan una propiedad en una zona con alta demanda, proyección y valor residencial.",
    points: [
      "Ubicacion de alto interes en Santiago de Surco",
      "Potencial de valorizacion en una zona premium",
      "Proyecto residencial de gran escala y vision moderna",
      "Oportunidad para vivienda familiar o inversion patrimonial",
      "Demanda sostenida por conectividad y entorno consolidado"
    ]
  },
  trust: {
    title: "Confianza comercial para una decisión inteligente",
    cards: [
      {
        title: "Atencion personalizada",
        text: "Acompanamiento cercano para resolver cada duda durante tu proceso."
      },
      {
        title: "Asesoria directa",
        text: "Contacto agil con un asesor especializado en el proyecto."
      },
      {
        title: "Vision premium",
        text: "Propuesta residencial de alto estandar y enfoque de largo plazo."
      },
      {
        title: "Oportunidad de inversion",
        text: "Alternativa atractiva para resguardar y potenciar tu patrimonio."
      },
      {
        title: "Acompanamiento comercial",
        text: "Seguimiento dedicado desde tu consulta inicial hasta la decision."
      }
    ]
  },
  leadForm: {
    title: "Solicita información personalizada",
    description:
      "Déjanos tus datos y un asesor te contactará para brindarte información personalizada del proyecto.",
    interests: ["Vivir", "Invertir", "Agendar visita"]
  },
  footer: {
    privacyText:
      "Aviso de privacidad: la información enviada será utilizada únicamente para fines de asesoría comercial del proyecto.",
    socialLinks: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" }
    ]
  },
  navigation: [
    { id: "inicio", label: "Inicio" },
    { id: "proyecto", label: "Proyecto" },
    { id: "planta-general", label: "Planta" },
    { id: "amenidades", label: "Sociales" },
    { id: "diferenciales", label: "Beneficios" },
    { id: "ubicacion", label: "Ubicación" },
    { id: "recorrido", label: "Recorrido" },
    { id: "tour-3d", label: "Tour 3D" },
    { id: "tipologias", label: "Tipologías" },
    { id: "inversion", label: "Inversión" },
    { id: "contacto", label: "Contacto" }
  ],
  contact: {
    // EDITAR: Datos principales de contacto comercial.
    contactName: "Andres Wu",
    contactPhone: "+51926984429",
    contactEmail: "andres.wu@outlook.com",
    whatsappNumber: "+51926984429",
    whatsappMessage: "Hola, deseo información sobre el proyecto Golf Los Incas.",
    projectAddress: "Av. Circunvalación del Golf los Incas 189, Santiago de Surco, Lima, Perú"
  }
};

const normalizePhone = (phone = "") => phone.replace(/[^\d+]/g, "");

const ensurePhoneWithCode = (phone = "") =>
  phone.startsWith("+") ? phone : `+${phone}`;

const buildWhatsappUrl = (phone, message) => {
  const cleanPhone = normalizePhone(phone).replace("+", "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

export const contactActions = {
  get phoneHref() {
    const phone = normalizePhone(projectConfig.contact.contactPhone);
    return `tel:${phone}`;
  },
  get whatsappHref() {
    return buildWhatsappUrl(
      projectConfig.contact.whatsappNumber,
      projectConfig.contact.whatsappMessage
    );
  },
  get formattedPhone() {
    return ensurePhoneWithCode(projectConfig.contact.contactPhone);
  },
  buildCustomWhatsApp(message) {
    return buildWhatsappUrl(projectConfig.contact.whatsappNumber, message);
  }
};


