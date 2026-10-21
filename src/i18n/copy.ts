import { MEGAPACK_THEMES } from "../data/megapackThemes";

export type Locale = "pt-BR";

export type Copy = {
  meta: { title: string; description: string };
  navbar: {
    mobileOffer: string;
    mobileRest: string;
    desktopOfferBefore: string;
    desktopMid: string;
    desktopOfferAfter: string;
    content: string;
    themes: string;
    benefits: string;
    faq: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleBeforeAccent: string;
    titleAccent: string;
    lead: string;
    leadDesktop: string;
    videoCaption: string;
    productsLine: string;
    deliveryLine: string;
    ctaPrimary: string;
    ctaSecondary: string;
    mobileUrgency: string;
    checklist: [string, string, string, string];
  };
  mockups: {
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    body: string;
    prev: string;
    next: string;
    slideAlt: (n: number) => string;
    closing: string;
    cta: string;
  };
  gallery: {
    titleBefore: string;
    titleAccent: string;
    intro: string;
    themesCountLine1: string;
    themesCountLine2: string;
    catalogLabel: string;
    showLess: string;
    showAll: string;
    closing: string;
    cta: string;
    tileAlt: (n: number) => string;
  };
  testimonials: {
    kicker: string;
    title: string;
    subtitle: string;
    cta: string;
    items: { src: string; width: number; height: number; alt: string }[];
  };
  benefits: {
    titleBefore: string;
    titleAccent: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    cta: string;
  };
  bonuses: {
    kicker: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    bullet: string;
    previewSuffix: string;
    previewAria: string;
    mockupAria: string;
    closing: string;
    cta: string;
    items: {
      tag: string;
      title: string;
      subtitle: string;
      imageAlt: string;
      description: string;
    }[];
  };
  guarantee: {
    kicker: string;
    title: string;
    bodyBefore: string;
    bodyHighlight: string;
    bodyAfter: string;
  };
  pricing: {
    urgencyBadge: string;
    title: string;
    promoBefore: string;
    promoHighlight: string;
    promoMid: string;
    promoUpdates: string;
    promoEnd: string;
    promoPrice: string;
    checklist: string[];
    updatesNote: string;
    limitedOffer: string;
    buyNow: string;
    securePay: string;
    instantDelivery: string;
    productAlt: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    about: string;
    navTitle: string;
    home: string;
    themes: string;
    benefits: string;
    questions: string;
    buy: string;
    copyright: string;
    secure: string;
  };
  whatsapp: {
    message: string;
    bubble: string;
    openLabel: string;
    previewsLabel: string;
  };
  themes: readonly string[];
};

export const ptBrCopy: Copy = {
  "meta": {
    "title": "Mega Pack 4.0 — Artes para Designers e Personalizados | Criativarts",
    "description": "Mais de 40 mil artes em alta resolução e 65 temas para designers, gráficas e personalizados. Acesso vitalício pelo Drive, pagamento único e 3 bônus."
  },
  "navbar": {
    "mobileOffer": "50% OFF",
    "mobileRest": " + ATUALIZAÇÕES GRÁTIS",
    "desktopOfferBefore": "50% OFF",
    "desktopMid": " + ATUALIZAÇÕES ",
    "desktopOfferAfter": "GRÁTIS",
    "content": "CONTEÚDO",
    "themes": "65 TEMAS",
    "benefits": "BENEFÍCIOS",
    "faq": "DÚVIDAS",
    "cta": "QUERO ACESSO"
  },
  "hero": {
    "badge": "Sua coleção sempre atualizada com novas artes",
    "titleLine1": "+40.000",
    "titleBeforeAccent": "ARTES EM",
    "titleAccent": "ALTA RESOLUÇÃO",
    "lead": "Mais variedade para o seu catálogo, mais agilidade para criar. São mais de 40 mil artes em PNG e JPG, organizadas em 65 temas e com resolução para impressões de até 2,5 metros.",
    "leadDesktop": " Acesso vitalício pelo Drive, com pagamento único e sem mensalidades.",
    "videoCaption": "prévias no vídeo",
    "productsLine": "Para designers, gráficas e quem trabalha com quadros, camisetas, canecas, painéis e personalizados.",
    "deliveryLine": "Receba o link de acesso por e-mail e WhatsApp após a confirmação da compra. Todas as futuras atualizações já estão incluídas, sem custo extra.",
    "ctaPrimary": "QUERO O MEGA PACK 4.0",
    "ctaSecondary": "VER AS ARTES",
    "mobileUrgency": "50% de desconto por tempo limitado",
    "checklist": [
      "PNG + JPG · 300 DPI",
      "Acesso vitalício",
      "Alta resolução",
      "Uso comercial"
    ]
  },
  "mockups": {
    "titleBefore": "Com o",
    "titleAccent": "Mega Pack 4.0",
    "titleAfter": "seu catálogo ganha novas possibilidades",
    "body": "Tenha mais opções para apresentar aos clientes sem passar horas procurando imagens. Uma coleção ampla, com artes selecionadas para dar variedade aos seus projetos e valor aos seus produtos.",
    "prev": "Ver artes anteriores",
    slideAlt: (n) => `Exemplo de aplicação das artes do Mega Pack 4.0 — ${n}`,
    "next": "Ver próximas artes",
    "closing": "Artes exclusivas em alta resolução para ampliar seu repertório e criar novas linhas de produtos.",
    "cta": "QUERO MAIS OPÇÕES"
  },
  "gallery": {
    tileAlt: (n) => `Prévia da coleção Mega Pack 4.0 — arte ${n}`,
    "titleBefore": "MAIS POSSIBILIDADES COM",
    "titleAccent": "ARTES EXCLUSIVAS",
    "intro": "Conheça uma amostra da coleção. São mais de 40 mil artes separadas por tema para encontrar o que precisa e baixar no seu ritmo.",
    "themesCountLine1": "temas para",
    "themesCountLine2": "suas criações",
    "catalogLabel": "Todos estes temas estão incluídos no seu acesso",
    "showLess": "Mostrar menos temas",
    "showAll": "Ver os 65 temas",
    "closing": "Encontre a arte certa para cada pedido. O material fica organizado em pastas no Drive, pronto para baixar e usar nos seus projetos.",
    "cta": "QUERO AS ARTES"
  },
  "testimonials": {
    "kicker": "Quem compra, aprova",
    "title": "O QUE CLIENTES FALAM DO MP4",
    "subtitle": "Quem compra, aprova e vende mais. Teste você mesmo o Mega Pack 4 e se surpreenda com um material especial.",
    "cta": "TAMBÉM QUERO",
    "items": [
      {
        "src": "/testimonials/conversa-1.webp", "width": 720, "height": 972,
        "alt": "Print de conversa em que o cliente confirma o recebimento e elogia o material: Material fantástico!"
      },
      {
        "src": "/testimonials/conversa-2.webp", "width": 738, "height": 891,
        "alt": "Print de conversa em que o cliente compara a qualidade das artes com outros packs e parabeniza o trabalho."
      },
      {
        "src": "/testimonials/conversa-3.webp", "width": 738, "height": 1145,
        "alt": "Print de conversa em que o cliente agradece a atenção e elogia o atendimento após receber o material."
      },
      {
        "src": "/testimonials/conversa-4.webp", "width": 1080, "height": 556,
        "alt": "Print de conversa em que um cliente elogia as artes e pergunta pelo pack completo."
      },
      {
        "src": "/testimonials/conversa-5.webp", "width": 1080, "height": 838,
        "alt": "Print de conversa sobre artes para canecas, com elogio ao cuidado e à qualidade do trabalho."
      },
      {
        "src": "/testimonials/conversa-6.webp", "width": 1080, "height": 933,
        "alt": "Print de conversa sobre as atualizações do pack, com elogio à qualidade das imagens."
      }
    ]
  },
  "benefits": {
    "titleBefore": "Mais repertório para criar.",
    "titleAccent": "Mais valor para vender.",
    "subtitle": "Dedique mais tempo à criação e ao atendimento. Tenha uma biblioteca organizada para diversificar seu portfólio e oferecer mais opções a cada cliente.",
    "items": [
      {
        "title": "Mais opções por pedido",
        "desc": "Mais de 40 mil artes em 65 temas para ampliar o catálogo e atender diferentes estilos de clientes."
      },
      {
        "title": "Qualidade para imprimir",
        "desc": "Arquivos em alta resolução, em 300DPI e com cerca de 4100 × 6100 px, para impressões de até 2,5 metros."
      },
      {
        "title": "Artes para seus produtos",
        "desc": "Conteúdo da Criativarts para aplicar em quadros, estampas, decoração e personalizados para venda."
      },
      {
        "title": "Um acesso, muitos projetos",
        "desc": "Pagamento único e acesso vitalício pelo Drive. Baixe o que precisar, quando precisar, sem mensalidades."
      }
    ],
    "cta": "QUERO O MEGA PACK 4.0"
  },
  "bonuses": {
    "kicker": "3 bônus para ampliar seu catálogo",
    "title": "RECEBA GRATUITAMENTE ESTES",
    "titleAccent": "3 BÔNUS EXCLUSIVOS",
    "subtitle": "Na compra do Mega Pack 4.0, você recebe todos estes bônus sem pagar a mais.",
    "bullet": "Incluído na compra, sem custo extra",
    "previewSuffix": "prévia das artes",
    "previewAria": "Ver as artes deste bônus",
    "mockupAria": "Voltar à capa deste bônus",
    "closing": "Aproveite a oferta e receba os 3 packs extras junto com o seu acesso ao Mega Pack 4.0.",
    "cta": "QUERO OS BÔNUS",
    "items": [
      {
        "tag": "BÔNUS 1",
        "title": "Mega Pack Money Dollar",
        "subtitle": "100 artes exclusivas",
        "imageAlt": "Mega Pack Money Dollar — artes com notas de dólar e temas de luxo",
        "description": "100 artes com notas de dólar e referências a dinheiro e luxo. Uma seleção para criar quadros, estampas e peças de decoração com presença visual."
      },
      {
        "tag": "BÔNUS 2",
        "title": "Mega Pack Funkos",
        "subtitle": "1.000 artes exclusivas",
        "imageAlt": "Mega Pack Funkos — personagens de heróis, filmes, séries e artistas",
        "description": "Mil artes no estilo Funko, com heróis, personagens de filmes e séries e artistas. Mais variedade para criar coleções temáticas e personalizados cheios de personalidade."
      },
      {
        "tag": "BÔNUS 3",
        "title": "Mega Pack Futebol",
        "subtitle": "300 artes exclusivas",
        "imageAlt": "Mega Pack Futebol — artes de times e craques do Brasil e do mundo",
        "description": "300 artes de times e craques do futebol brasileiro e mundial para ampliar sua linha de camisetas, quadros e produtos voltados a quem vive a paixão pelo esporte."
      }
    ]
  },
  "guarantee": {
    "kicker": "Garantia de satisfação",
    "title": "Conheça o material com tranquilidade",
    "bodyBefore": "Se o Mega Pack 4.0 não for o que você esperava, a Criativarts se compromete a devolver o valor integral da compra,",
    "bodyHighlight": "sem burocracia e sem precisar justificar",
    "bodyAfter": "."
  },
  "pricing": {
    "urgencyBadge": "Aproveite: oferta por tempo limitado",
    "title": "MEGA PACK 4.0",
    "promoBefore": "Amplie sua biblioteca criativa com",
    "promoHighlight": "50% de desconto",
    "promoMid": "e tenha acesso vitalício ao Mega Pack 4.0, com",
    "promoUpdates": "todas as futuras atualizações incluídas",
    "promoEnd": ". Tudo isso com",
    "promoPrice": "pagamento único!",
    "checklist": [
      "Mais de 40 mil artes em alta resolução para impressões de até 2,5 metros",
      "65 temas para diversificar seu catálogo",
      "Arquivos PNG e JPG em alta resolução / 300 DPI",
      "Artes para aplicar nos seus produtos para venda",
      "Para quadros, camisetas, painéis e personalizados",
      "Bônus 1: Mega Pack Money Dollar (100 artes)",
      "Bônus 2: Mega Pack Funkos (1.000 artes)",
      "Bônus 3: Mega Pack Futebol (300 artes)",
      "Pagamento único · acesso por e-mail e WhatsApp",
      "Acesso vitalício pelo Drive e suporte pós-venda"
    ],
    "updatesNote": "Sua biblioteca continua crescendo: todas as futuras atualizações do Mega Pack estão incluídas, sem mensalidade e sem custo adicional.",
    "limitedOffer": "50% de desconto por tempo limitado",
    "buyNow": "COMPRAR AGORA",
    "securePay": "Compra segura",
    "instantDelivery": "Acesso imediato",
    "productAlt": "Mega Pack 4.0 — coleção de artes da Criativarts"
  },
  "faq": {
    "title": "Tire suas dúvidas",
    "items": [
      {
        "q": "Como recebo as artes após a compra?",
        "a": "Após a confirmação do pagamento, você recebe o link de acesso ao nosso Drive no e-mail informado na compra e pelo WhatsApp. As artes ficam organizadas em pastas por tema. Você pode baixar apenas o que precisa ou a coleção completa."
      },
      {
        "q": "O acesso expira? Preciso pagar mensalidade?",
        "a": "Não. O pagamento é único e o acesso é vitalício. Você pode voltar ao Drive e baixar as artes sempre que precisar. Todas as futuras atualizações do Mega Pack também estão incluídas, sem custo extra."
      },
      {
        "q": "Em quais trabalhos posso usar as artes?",
        "a": "Você pode aplicar as artes em quadros, camisetas, canecas, painéis, adesivos e outros produtos personalizados. Para impressão em grandes formatos, ajuste o tamanho e confira a resolução adequada ao processo de produção e à distância de visualização."
      },
      {
        "q": "Em quais formatos recebo as artes e até que tamanho posso imprimir?",
        "a": "A coleção reúne artes em PNG e JPG, em alta resolução, com dimensões em torno de 4100 × 6100 pixels, para impressões de até 2,5 metros. São arquivos de imagem; a descrição do pack não inclui arquivos vetoriais ou arquivos com camadas editáveis. A qualidade final da impressão depende do tamanho da peça e das configurações de produção."
      },
      {
        "q": "Posso usar as artes em produtos para vender?",
        "a": "Sim. Conforme a proposta do Mega Pack 4.0, as artes desenvolvidas pela Criativarts podem ser aplicadas nas suas criações e em produtos personalizados para venda. Se tiver dúvida sobre uma aplicação específica, fale com o suporte pelo WhatsApp antes da compra."
      },
      {
        "q": "Como funciona o pagamento?",
        "a": "A compra é processada pela Hotmart. Ao clicar em “Comprar agora”, você acessa o checkout para conferir o valor, as formas de pagamento disponíveis e concluir o pedido com segurança."
      },
      {
        "q": "E se o material não atender às minhas expectativas?",
        "a": "A Criativarts oferece garantia de satisfação com reembolso integral se você não ficar satisfeito com o material. Para solicitar a devolução ou esclarecer como funciona a garantia, entre em contato com o suporte usando os dados da sua compra."
      }
    ]
  },
  "footer": {
    "about": "Mais de 40 mil artes em alta resolução para designers, gráficas e negócios de personalizados. Amplie seu repertório com 65 temas, acesso vitalício pelo Drive e bônus exclusivos.",
    "navTitle": "Explore o Mega Pack",
    "home": "Início",
    "themes": "Os 65 temas",
    "benefits": "Benefícios",
    "questions": "Tire suas dúvidas",
    "buy": "Garantir meu acesso",
    "copyright": "Criativarts — Todos os direitos reservados.",
    "secure": "Compra segura via Hotmart"
  },
  "whatsapp": {
    "message": "Olá! Quero conhecer o Mega Pack 4.0 e receber uma prévia das artes.",
    "bubble": "Quer ver as artes? Peça uma prévia grátis.",
    "openLabel": "Conversar pelo WhatsApp",
    "previewsLabel": "Pedir uma prévia grátis pelo WhatsApp"
  },
  themes: MEGAPACK_THEMES,
};


export const copies: Record<Locale, Copy> = { "pt-BR": ptBrCopy };

/** This standalone Brazilian copy always opens in Portuguese, including at /. */
export function detectLocale(): Locale { return "pt-BR"; }
