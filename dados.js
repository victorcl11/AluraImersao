const carros = [
    
    {
        titulo: "Chevrolet Opala",
        descricao: "Um ícone da indústria automobilística brasileira, com diversas versões e motorizações.",
        anosProducao: "1968 - 1992",
        versoes: ["SS", "Comodoro", "Diplomata","Luxo","Gran Luxo"],
        imagem:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Chevrolet_Opala_SS_19744.jpg/1200px-Chevrolet_Opala_SS_19744.jpg"
    },
    {
        titulo: "Chevrolet Chevette",
        descricao: "Um dos carros mais populares do Brasil, produzido em diversas versões e com grande variedade de motorizações.",
        anosProducao: "1973 - 1994",
        versoes: ["L", "SL", "Super", "Marajó"],
        imagem:"https://balconistasa.com/wp-content/uploads/2021/10/HEADER-1chr4te-1280x720.jpg"
    },
    {
        titulo: "Chevrolet Monza",
        descricao: "Sedã de médio porte que marcou época, com design moderno e diversas opções de motorização.",
        anosProducao: "1982 - 1996",
        versoes: ["SL/E", "GLS", "Classic", "Diplomata"],
        imagem:"https://i.ytimg.com/vi/wZBRnrzWTg4/maxresdefault.jpg"
    },
    {
        titulo: "Chevrolet Kadett",
        descricao: "Hatch compacto que conquistou o público jovem, com design esportivo e boa dirigibilidade.",
        anosProducao: "1984 - 1994",
        versoes: ["GL", "GLS", "GSI"],
        imagem:"https://image1.mobiauto.com.br/images/api/images/v1.0/358920733/transform/t_crop"
    },
    {
        titulo: "Chevrolet Belina",
        descricao: "Perua derivada do Chevette, ideal para o transporte de famílias e cargas.",
        anosProducao: "1977 - 1994",
        versoes: ["L", "SL", "Super"],
        imagem:"https://cdn.motor1.com/images/mgl/PqxGK/s3/carros-para-sempre-ford-belina-foi-de-pioneira-a-perua-mais-luxuosa-do-segmento.jpg"
    },
    {
        titulo: "Chevrolet Caravan",
        descricao: "Versão familiar do Opala, com amplo espaço interno.",
        anosProducao: "1968 - 1992",
        versoes: ["Standard", "De Luxe", "SL"],
        imagem:"https://i.ytimg.com/vi/fwuS8KqEz1s/maxresdefault.jpg"
    },
    {
        titulo: "Chevrolet Omega",
        descricao: "Sedã de luxo que rivalizava com os europeus, com motor V6 e acabamento refinado.",
        anosProducao: "1992 - 2000",
        versoes: ["CD", "SLE", "XLS"],
        imagem:"https://futcarros.com.br/wp-content/uploads/2024/04/omega-4.1-fica-tecnica--1280x720.jpg"
    },
    {
        titulo: "Chevrolet Camaro",
        descricao: "Versão brasileira do icônico muscle car americano, com motor V6 e design esportivo.",
        anosProducao: "1993 - 1995",
        versoes: ["LT", "RT"],
        imagem:"https://autoentusiastas.com.br/ae/wp-content/uploads/2022/11/Ringbrothers-Camaro-STRODE-3.jpg"
    },
    {
        titulo: "Chevrolet Veraneio",
        descricao: "Utilitário esportivo utilizado para diversas atividades, como trabalho e lazer.",
        anosProducao: "1964 - 1991",
        versoes: ["Standard", "De Luxe"],
        imagem:"https://i.ytimg.com/vi/IaOoSu2fXx8/maxresdefault.jpg"
    },
    {
        titulo: "Chevrolet C10",
        descricao: "Caminhonete leve muito popular, utilizada para trabalho e transporte de carga.",
        anosProducao: "1960 - 1994",
        versoes: ["Standard", "De Luxe", "Custom" ],
        imagem:'https://i.ytimg.com/vi/Y9Z_cCBLWJ4/maxresdefault.jpg'
    },
    {
        titulo: "Chevrolet Cobalt",
        descricao: "Sedã compacto que substituiu o Classic, com design moderno e bom espaço interno.",
        anosProducao: "2011 - 2020",
        versoes: ["LT", "LTZ", "SS"],
        imagem: "https://cdn.motor1.com/images/mgl/wlpBqG/s3/chevrolet-cobalt---uzbequistao.jpg"
    },
    {
        titulo: "Chevrolet Prisma",
        descricao: "Hatch compacto derivado do Cobalt, com design similar e bom custo-benefício.",
        anosProducao: "2012 - 2023",
        versoes: ["LS", "LT", "LTZ"],
        imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2017/05/prisma-21-e1495568102835.jpeg?quality=70&strip=info&w=720&crop=1"
},
];


function renderizarCarros(carros) {
    carrosContainer.innerHTML = '';
    carros.forEach(carro => {
        carrosContainer.appendChild(criarCardCarro(carro));
    });
        return renderizarCarros;
}