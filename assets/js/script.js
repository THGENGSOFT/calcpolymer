// --- DADOS DA POLLYMER ---
const rawData = [
    // UTILIDADES DOMÉSTICAS
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1002/12", desc: "Cabide de Roupa Prático Infantil 1 unid - Cor", emb: 60, ipi: 0.065, price: 1.18 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1002/52", desc: "Cabide de Roupa Prático Infantil cart c/5unid - Cor", emb: 12, ipi: 0.065, price: 4.39 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1006/11", desc: "Cabide de Roupa Adulto 1 unidade - Preto", emb: 60, ipi: 0.065, price: 0.71 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1006/41", desc: "Cabide de Roupa Adulto cart. c/4 unidades - Preto", emb: 12, ipi: 0.065, price: 3.34 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1006/151", desc: "Cabide de Roupa Adulto Amarr c/ 15 unidades - Preto", emb: 5, ipi: 0.065, price: 11.13 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1010", desc: "Pá para lixo - Cor", emb: 12, ipi: 0.065, price: 3.66 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1011", desc: "Tabua Grande para Carne - Branca", emb: 12, ipi: 0.065, price: 11.50 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1012", desc: "Tabua Pequena para Carne - Branca", emb: 12, ipi: 0.065, price: 9.14 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1013", desc: "Kit Tábua (1011+1013) - Branca", emb: 12, ipi: 0.065, price: 19.55 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1023", desc: "Porta Miudezas c/3 estojos", emb: 12, ipi: 0.065, price: 7.53 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1024", desc: "Porta Miudezas c/4 estojos", emb: 12, ipi: 0.065, price: 9.65 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1025", desc: "Porta Miudezas c/5 estojos", emb: 12, ipi: 0.065, price: 11.78 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1033/48", desc: "Prendedor de Roupa Pct c/48 unidades - Cor", emb: 12, ipi: 0.065, price: 7.35 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1033/72", desc: "Prendedor de Roupa Pct c/72 unidades - Cor", emb: 12, ipi: 0.065, price: 10.89 },
    { cat: "UTILIDADES DOMÉSTICAS", ref: "1038", desc: "Tampa para micro", emb: 24, ipi: 0.065, price: 4.70 },

    // PET SHOP
    { cat: "PET SHOP", ref: "2100", desc: "Kit Gato (bandeja+pá higiênica+comedouro)", emb: 6, ipi: 0.065, price: 10.80 },
    { cat: "PET SHOP", ref: "2102", desc: "Kit 1 Comedouro Osso (2139) + 1 Comedouro Pequeno (2142)", emb: 6, ipi: 0.0975, price: 9.05 },
    { cat: "PET SHOP", ref: "2103", desc: "Kit 1 Comedouro Mini (2141) + 1 Comedouro Pequeno (2143)", emb: 6, ipi: 0.0975, price: 6.79 },
    { cat: "PET SHOP", ref: "2104", desc: "Kit 1 Pa Dosadora (2148) +2 Comed (2751) +1 Pa Higienica (2752)", emb: 12, ipi: 0.065, price: 11.25 },
    { cat: "PET SHOP", ref: "2105", desc: "Kit 1 Comedouro Slim Filhote (2701) + 1 Com Slim Medio (2703)", emb: 6, ipi: 0.0975, price: 11.96 },
    { cat: "PET SHOP", ref: "2106", desc: "Kit 2 Com Carinha Gato (2751) + 1 Pa Hig Carinha Gato (2752)", emb: 12, ipi: 0.0975, price: 10.31 },
    { cat: "PET SHOP", ref: "2107", desc: "Kit 2 Comedouro Slim Mini (2701) + 2 Bolinha Guizo (2754)", emb: 6, ipi: 0.0975, price: 10.81 },
    { cat: "PET SHOP", ref: "2139", desc: "Comedouro osso 0,75 lts", emb: 12, ipi: 0.0975, price: 4.16 },
    { cat: "PET SHOP", ref: "2140", desc: "Comedouro Hamster 0,06 lts", emb: 24, ipi: 0.0975, price: 0.83 },
    { cat: "PET SHOP", ref: "2141", desc: "Comedouro Mini 0,40 lts", emb: 12, ipi: 0.0975, price: 2.25 },
    { cat: "PET SHOP", ref: "2142", desc: "Comedouro Pequeno 0,60 lts", emb: 12, ipi: 0.0975, price: 3.43 },
    { cat: "PET SHOP", ref: "2143", desc: "Comedouro Médio 1,10 lts", emb: 12, ipi: 0.0975, price: 4.51 },
    { cat: "PET SHOP", ref: "2144", desc: "Comedouro Grande 2,00 lts", emb: 12, ipi: 0.0975, price: 5.81 },
    { cat: "PET SHOP", ref: "2145", desc: "Comedouro para Caes Orelhas Longas 0,60 lts", emb: 12, ipi: 0.0975, price: 4.61 },
    { cat: "PET SHOP", ref: "2146", desc: "Comedouro de Gato 0,15 lts", emb: 12, ipi: 0.0975, price: 1.74 },
    { cat: "PET SHOP", ref: "2147", desc: "Bandeja para Granulado", emb: 12, ipi: 0.065, price: 7.21 },
    { cat: "PET SHOP", ref: "2148", desc: "Pá Dosadora", emb: 24, ipi: 0.065, price: 1.88 },
    { cat: "PET SHOP", ref: "2149", desc: "Pá Higiênica", emb: 24, ipi: 0.065, price: 1.53 },
    { cat: "PET SHOP", ref: "2150", desc: "Fresbee", emb: 12, ipi: 0.0975, price: 4.21 },
    { cat: "PET SHOP", ref: "2151", desc: "Bandeja para Granulado - Grande - 18lts", emb: 12, ipi: 0.065, price: 14.71 },
    { cat: "PET SHOP", ref: "2152", desc: "Toalete Pet", emb: 12, ipi: 0.065, price: 21.34 },
    { cat: "PET SHOP", ref: "2513", desc: "Porta Ração c/3 Estojos", emb: 12, ipi: 0.065, price: 7.53 },
    { cat: "PET SHOP", ref: "2601", desc: "Comedouro Translucido Filhote - 0,17lts", emb: 12, ipi: 0.0975, price: 3.64 },
    { cat: "PET SHOP", ref: "2602", desc: "Comedouro Translucido Pequeno - 0,45lts", emb: 12, ipi: 0.0975, price: 5.93 },
    { cat: "PET SHOP", ref: "2701", desc: "Comedouro Slim Filhote - 0,15lts", emb: 12, ipi: 0.0975, price: 2.75 },
    { cat: "PET SHOP", ref: "2702", desc: "Comedouro Slim Pequeno - 0,50lts", emb: 12, ipi: 0.0975, price: 4.46 },
    { cat: "PET SHOP", ref: "2703", desc: "Comedouro Slim Médio - 1lts", emb: 12, ipi: 0.0975, price: 7.66 },
    { cat: "PET SHOP", ref: "2750", desc: "Kit Carinha de Gato", emb: 8, ipi: 0.065, price: 25.23 },
    { cat: "PET SHOP", ref: "2751", desc: "Comedouro Carinha de Gato - 0,14lts", emb: 12, ipi: 0.0975, price: 3.06 },
    { cat: "PET SHOP", ref: "2752", desc: "Pá Higienica Carinha de Gato", emb: 24, ipi: 0.065, price: 3.23 },
    { cat: "PET SHOP", ref: "2753", desc: "Bandeja Carinha de Gato - 10lts", emb: 12, ipi: 0.065, price: 15.99 },
    { cat: "PET SHOP", ref: "2754", desc: "Bolinha com Guizo", emb: 36, ipi: 0.0975, price: 2.04 },
    { cat: "PET SHOP", ref: "2755", desc: "Comedouro Postura Ideal - 0,200lts", emb: 12, ipi: 0.0975, price: 6.69 },
    { cat: "PET SHOP", ref: "2802", desc: "Caixa Transportadora - Grade Plástica", emb: 6, ipi: 0.0975, price: 64.04 },

    // FEMININA
    { cat: "FEMININA", ref: "3901", desc: "Mini Bag Fashion c/bandeja - Cor", emb: 12, ipi: 0.065, price: 23.94 },
    { cat: "FEMININA", ref: "3905", desc: "Lady Case - Cor", emb: 24, ipi: 0.065, price: 4.83 },
    { cat: "FEMININA", ref: "3907", desc: "Mini Bag Fashion - s/bandeja - Cor", emb: 12, ipi: 0.065, price: 20.06 },
    { cat: "FEMININA", ref: "3952", desc: "Fashion Bag 2 Bandejas - Cor", emb: 6, ipi: 0.065, price: 59.11 },
    { cat: "FEMININA", ref: "3953", desc: "Fashion Bag 3 Bandejas - Cor", emb: 6, ipi: 0.065, price: 65.10 },
    { cat: "FEMININA", ref: "3954", desc: "Mini Maleta - Cor", emb: 12, ipi: 0.065, price: 5.58 },
    { cat: "FEMININA", ref: "3955", desc: "Kit 2 Mini Maletas (3954)", emb: 12, ipi: 0.065, price: 11.01 },
    { cat: "FEMININA", ref: "3956", desc: "Kit 1 Mini Maleta (3954) + 1 Mini Maleta S.O.S (8012)", emb: 12, ipi: 0.065, price: 11.34 },
    { cat: "FEMININA", ref: "3957", desc: "Kit 3 Estojos Mini Color (3905)", emb: 9, ipi: 0.065, price: 13.90 },
    { cat: "FEMININA", ref: "3958", desc: "Fashion Bag s/ Bandeja - Estojo na Tampa", emb: 12, ipi: 0.065, price: 36.89 },
    { cat: "FEMININA", ref: "3959", desc: "Fashion Bag c/ Bandeja Removivel - Estojo na Tampa", emb: 12, ipi: 0.065, price: 47.53 },
    { cat: "FEMININA", ref: "3960", desc: "Fashion Bag 1 Estojo Articulado - Estojo na Tampa", emb: 12, ipi: 0.065, price: 47.83 },

    // FERRAMENTA E PESCA
    { cat: "FERRAMENTA E PESCA", ref: "4000", desc: "KIT 1 Maleta Mini Standart (4001) + 2 Mini Estojos (4020)", emb: 12, ipi: 0.065, price: 11.94 },
    { cat: "FERRAMENTA E PESCA", ref: "4001", desc: "Maleta Mini Standart s/bandeja - Preta", emb: 24, ipi: 0.065, price: 6.55 },
    { cat: "FERRAMENTA E PESCA", ref: "4002", desc: "Maleta Mini Toolcase (Parafusadeira) - Preta", emb: 12, ipi: 0.065, price: 8.05 },
    { cat: "FERRAMENTA E PESCA", ref: "4003", desc: "Maleta Média Toolcase (Furadeira) - Preta", emb: 12, ipi: 0.065, price: 12.99 },
    { cat: "FERRAMENTA E PESCA", ref: "4013", desc: "Estojo Mini-Box c/bandeja - Preto", emb: 24, ipi: 0.065, price: 6.21 },
    { cat: "FERRAMENTA E PESCA", ref: "4016", desc: "Maleta Prática Grande - Fundo Preto e Tampa Transp", emb: 12, ipi: 0.065, price: 14.13 },
    { cat: "FERRAMENTA E PESCA", ref: "4017", desc: "Organizador Multibox Médio - Fundo Preto e Tampa Transp", emb: 12, ipi: 0.065, price: 9.49 },
    { cat: "FERRAMENTA E PESCA", ref: "4019", desc: "Organizador Doublebox - Estrutura Preta e Tampa Transp", emb: 6, ipi: 0.065, price: 30.84 },
    { cat: "FERRAMENTA E PESCA", ref: "4020", desc: "Mini Estojo p/ Ferramentas - Preto", emb: 24, ipi: 0.065, price: 3.05 },
    { cat: "FERRAMENTA E PESCA", ref: "4029", desc: "Porta Treco c/5 estojos - Estrutura Transp Tampa Preta", emb: 12, ipi: 0.065, price: 11.78 },
    { cat: "FERRAMENTA E PESCA", ref: "4030", desc: "Maleta Master 20\" c/bandeja removível - Preta", emb: 9, ipi: 0.065, price: 41.04 },
    { cat: "FERRAMENTA E PESCA", ref: "4033", desc: "Utility Box - Preta", emb: 12, ipi: 0.065, price: 24.10 },
    { cat: "FERRAMENTA E PESCA", ref: "4035", desc: "Maleta Master Better 20\" - Preta", emb: 9, ipi: 0.065, price: 50.43 },
    { cat: "FERRAMENTA E PESCA", ref: "4037", desc: "Maleta Master 16\" s/bandeja - Preta", emb: 12, ipi: 0.065, price: 19.19 },
    { cat: "FERRAMENTA E PESCA", ref: "4038", desc: "Maleta Master 16\" c/band removível - Preta", emb: 12, ipi: 0.065, price: 23.54 },
    { cat: "FERRAMENTA E PESCA", ref: "4039", desc: "Maleta Max Utility Box - Preta", emb: 12, ipi: 0.065, price: 25.86 },
    { cat: "FERRAMENTA E PESCA", ref: "4042", desc: "Maleta Premium 2 Bandejas - Preta", emb: 6, ipi: 0.065, price: 32.76 },
    { cat: "FERRAMENTA E PESCA", ref: "4043", desc: "Maleta Premium 3 Bandejas - Preta", emb: 6, ipi: 0.065, price: 36.09 },
    { cat: "FERRAMENTA E PESCA", ref: "4044", desc: "Maleta Premium 2 Bandejas - Tampa Cor", emb: 6, ipi: 0.065, price: 36.28 },
    { cat: "FERRAMENTA E PESCA", ref: "4045", desc: "Maleta Premium 3 Bandejas - Tampa Cor", emb: 6, ipi: 0.065, price: 39.73 },
    { cat: "FERRAMENTA E PESCA", ref: "4046", desc: "Mini Maleta - Preta", emb: 12, ipi: 0.065, price: 3.84 },
    { cat: "FERRAMENTA E PESCA", ref: "4047", desc: "Maleta Premiun s/ Bandeja - Preta", emb: 12, ipi: 0.065, price: 18.63 },
    { cat: "FERRAMENTA E PESCA", ref: "4048", desc: "Maleta Premiun c/ 1 Bandeja Articulada - Preta", emb: 12, ipi: 0.065, price: 25.96 },
    { cat: "FERRAMENTA E PESCA", ref: "4049", desc: "Maleta Premiun s/ Bandeja - Tampa Cor", emb: 12, ipi: 0.065, price: 20.85 },
    { cat: "FERRAMENTA E PESCA", ref: "4050", desc: "Maleta Premiun c/ 1 Bandeja Art - Tampa Cor", emb: 12, ipi: 0.065, price: 28.11 },
    { cat: "FERRAMENTA E PESCA", ref: "4051", desc: "Maleta Premiun c/ Bandeja Removível - Preta", emb: 12, ipi: 0.065, price: 22.78 },
    { cat: "FERRAMENTA E PESCA", ref: "4052", desc: "Maleta Premiun c/ Band Removivel - Tampa Cor", emb: 12, ipi: 0.065, price: 25.55 },
    { cat: "FERRAMENTA E PESCA", ref: "4054", desc: "Maleta Premium Toolcase sem estojo - Preta", emb: 12, ipi: 0.065, price: 19.39 },
    { cat: "FERRAMENTA E PESCA", ref: "4055", desc: "Maleta Premium Toolcase com estojo - Preta", emb: 12, ipi: 0.065, price: 28.44 },
    { cat: "FERRAMENTA E PESCA", ref: "4056", desc: "Balde Pedreiro Reforcado - 12lts - Preto", emb: 24, ipi: 0.0325, price: 7.40 },
    { cat: "FERRAMENTA E PESCA", ref: "4057", desc: "Maleta Special Box - Serra Marmore - Preta", emb: 12, ipi: 0.065, price: 20.99 },
    { cat: "FERRAMENTA E PESCA", ref: "4058", desc: "Maleta Serra Marmore - Preta - Alca 16\"", emb: 12, ipi: 0.065, price: 18.36 },
    { cat: "FERRAMENTA E PESCA", ref: "4059", desc: "Balde Para Concreto - 12lts - Preta", emb: 24, ipi: 0.0325, price: 6.84 },
    { cat: "FERRAMENTA E PESCA", ref: "4060", desc: "Balde para Concreto/Multiuso - 12lts - Alça Cor", emb: 24, ipi: 0.0325, price: 7.54 },
    { cat: "FERRAMENTA E PESCA", ref: "4061", desc: "Caixa para Massa - 18lts", emb: 12, ipi: 0.0325, price: 11.23 },
    { cat: "FERRAMENTA E PESCA", ref: "4063", desc: "Maleta Master 12\" c/ bandeja removivel - Preta", emb: 12, ipi: 0.065, price: 12.13 },
    { cat: "FERRAMENTA E PESCA", ref: "4065", desc: "Maleta Premium s/ Bandeja - Estojo na Tampa - Preta", emb: 12, ipi: 0.065, price: 24.13 },
    { cat: "FERRAMENTA E PESCA", ref: "4066", desc: "Maleta Premium c/ Bandeja Removivel - Estojo na Tampa - Preta", emb: 12, ipi: 0.065, price: 28.76 },
    { cat: "FERRAMENTA E PESCA", ref: "4067", desc: "Maleta Premium c/ 1 Estojo Articulado - Estojo na Tampa - Preta", emb: 12, ipi: 0.065, price: 31.80 },
    { cat: "FERRAMENTA E PESCA", ref: "4068", desc: "Maleta Master 16\" s/ Bandeja - Estojo na Tampa - Preta", emb: 12, ipi: 0.065, price: 25.15 },
    { cat: "FERRAMENTA E PESCA", ref: "4069", desc: "Maleta Master 16\" c/ Band Removível - Estojo na Tampa - Preta", emb: 12, ipi: 0.065, price: 28.14 },
    { cat: "FERRAMENTA E PESCA", ref: "4070", desc: "Organizador Multibox Pequeno - Fundo Preto e Tampa Transp", emb: 12, ipi: 0.065, price: 6.18 },
    { cat: "FERRAMENTA E PESCA", ref: "4071", desc: "Organizador Multibox Pequeno - Transparente", emb: 12, ipi: 0.065, price: 9.00 },
    { cat: "FERRAMENTA E PESCA", ref: "6007", desc: "Estojo Mini-Box c/bandeja - Preto e Tampa Cor", emb: 24, ipi: 0.065, price: 6.70 },
    { cat: "FERRAMENTA E PESCA", ref: "6009", desc: "Organizador Multibox Pescaria - Transparente", emb: 12, ipi: 0.065, price: 18.34 },
    { cat: "FERRAMENTA E PESCA", ref: "6011", desc: "Estojo Isca Box - Cor", emb: 24, ipi: 0.065, price: 5.05 },

    // SOS
    { cat: "SOS", ref: "8001", desc: "Maleta Compacta S.O.S c/1 bandeja articulada - Branca", emb: 9, ipi: 0.065, price: 45.15 },
    { cat: "SOS", ref: "8002", desc: "Maleta Pronto-Socorro c/2 bandejas articuladas - Branca", emb: 6, ipi: 0.065, price: 58.48 },
    { cat: "SOS", ref: "8003", desc: "Maleta Pronto-Socorro c/3 bandejas articuladas - Branca", emb: 6, ipi: 0.065, price: 64.89 },
    { cat: "SOS", ref: "8004", desc: "Estojo Multiuso S.O.S Médio - Transparente", emb: 12, ipi: 0.065, price: 18.35 },
    { cat: "SOS", ref: "8011", desc: "Maleta Mini SOS - Branca", emb: 12, ipi: 0.065, price: 20.06 },
    { cat: "SOS", ref: "8012", desc: "Mini Maleta SOS - Branca", emb: 12, ipi: 0.065, price: 5.95 },
    { cat: "SOS", ref: "8013", desc: "Kit 2 Mini Maletas S.O.S (8012)", emb: 12, ipi: 0.065, price: 11.83 },
    { cat: "SOS", ref: "8014", desc: "Estojo Multiuso S.O.S Pequeno - Transparente", emb: 12, ipi: 0.065, price: 9.18 }
];

// --- MAPA DE IMAGENS ---
const imageMap = {
    "1002-12": "1002-12.jpeg", "1002-52": "1002-52.jpeg", "1006-11": "1006-11.jpeg", "1006-41": "1006-41.jpeg",
    "1006-151": "1006-151.jpeg", "1010": "1010.jpeg", "1011": "1011.jpeg", "1012": "1012.jpeg", "1013": "1013.jpeg",
    "1023": "1023.jpeg", "1024": "1024.jpeg", "1025": "1025.jpeg", "1033-48": "1033-48.jpeg", "1033-72": "1033-72.jpeg",
    "1038": "1038.jpeg", "2100": "2100.jpeg", "2102": "2102.jpeg", "2103": "2103.jpeg", "2104": "2104.jpeg",
    "2105": "2105.jpeg", "2106": "2106.jpeg", "2107": "2107.png", "2139": "2139.jpeg", "2140": "2140.jpeg",
    "2141": "2141.jpeg", "2142": "2142.jpeg", "2143": "2143.jpeg", "2144": "2144.jpeg", "2145": "2145.jpeg",
    "2146": "2146.jpeg", "2147": "2147.jpeg", "2148": "2148.jpeg", "2149": "2149.jpeg", "2150": "2150.jpg",
    "2151": "2151.jpeg", "2152": "2152.jpg", "2513": "2513.jpeg", "2601": "2601.jpeg", "2602": "2602.jpeg",
    "2701": "2701.jpeg", "2702": "2702.jpeg", "2703": "2703.jpeg", "2750": "2750.jpeg", "2751": "2751.jpeg",
    "2752": "2752.jpeg", "2753": "2753.jpeg", "2754": "2754.jpeg", "2755": "2755.jpeg", "2802": "2802.jpg",
    "3901": "3901.jpeg", "3905": "3905.jpeg", "3907": "3907.jpeg", "3952": "3952.jpg", "3953": "3953.jpg",
    "3954": "3954.jpeg", "3955": "3955.jpeg", "3956": "3956.jpeg", "3957": "3957.jpeg", "3958": "3958.jpg",
    "3959": "3959.jpg", "3960": "3960.jpg", "4000": "4000.jpeg", "4001": "4001.jpg", "4002": "4002.jpeg",
    "4003": "4003.jpg", "4013": "4013.jpeg", "4016": "4016.jpeg", "4017": "4017.jpeg", "4019": "4019.jpeg",
    "4020": "4020.jpeg", "4029": "4029.jpeg", "4030": "4030.jpeg", "4033": "4033.jpeg", "4035": "4035.jpeg",
    "4037": "4037.jpeg", "4038": "4038.jpg", "4039": "4039.jpeg", "4042": "4042.jpg", "4043": "4043.jpg",
    "4044": "4044.jpeg", "4045": "4045.jpg", "4046": "4046.jpeg", "4047": "4047.jpeg", "4048": "4048.jpg",
    "4049": "4049.jpg", "4050": "4050.jpeg", "4051": "4051.jpg", "4052": "4052.jpg", "4054": "4054.jpeg",
    "4055": "4055.jpg", "4056": "4056.jpeg", "4057": "4057.jpg", "4058": "4058.jpg", "4059": "4059.jpeg",
    "4060": "4060.jpeg", "4061": "4061.jpeg", "4063": "4063.jpeg", "4065": "4065.jpg", "4066": "4066.jpg",
    "4067": "4067.jpg", "4068": "4068.jpg", "4069": "4069.jpg", "4070": "4070.jpg", "4071": "4071.jpg",
    "6007": "6007.jpeg", "6009": "6009.jpeg", "6011": "6011.jpeg", "8001": "8001.jpeg", "8002": "8002.jpg",
    "8003": "8003.jpg", "8004": "8004.jpeg", "8011": "8011.jpg", "8012": "8012.jpeg", "8013": "8013.jpeg",
    "8014": "8014.jpg"
};

// --- FUNÇÕES ---

const formatCurrency = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function groupBy(xs, key) {
    return xs.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}

const app = document.getElementById('app');
const groups = groupBy(rawData, 'cat');
let cart = {};

// Variável para controle global do desconto
let currentDiscountPercent = 0;

function getImagePath(ref) {
    const normalizedRef = ref.replace('/', '-');
    const filename = imageMap[normalizedRef];
    if (filename) return `assets/img/${filename}`;
    return '';
}

function openImage(element) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("img01").src = element.src;
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

function renderTable() {
    let html = '';
    
    for (const [category, items] of Object.entries(groups)) {
        const catId = category.replace(/\s/g, '-');
        html += `<div class="category-block" id="block-${catId}">
                    <div class="category-header" onclick="toggleCategory('${catId}')">
                        <span>${category}</span>
                        <span class="category-subtotal" id="subtotal-${catId}">Subtotal: R$ 0,00</span>
                     </div>
                     <div class="table-responsive" id="table-container-${catId}">
                         <table>
                            <thead>
                                <tr>
                                    <th class="col-img">FOTO</th>
                                    <th class="col-ref">REF</th>
                                    <th class="col-desc">DESCRIÇÃO</th>
                                    <th class="col-emb">EMB</th>
                                    <th class="col-ipi">IPI</th>
                                    <th class="col-price">PREÇO UN</th>
                                    <th class="col-qty">FARDOS</th>
                                    <th class="col-total-units">TOTAL UNID</th>
                                    <th class="col-total">TOTAL+IPI</th>
                                </tr>
                            </thead>
                            <tbody>`;
        
        items.forEach((item, index) => {
            const uniqueId = `${catId}-${index}`;
            const ipiPercent = (item.ipi * 100).toFixed(2).replace('.', ',');
            const imgPath = getImagePath(item.ref);
            
            const imgTag = imgPath 
                ? `<img src="${imgPath}" class="product-thumb" onclick="openImage(this)" onerror="this.src='https://placehold.co/50x50?text=Indisp'; this.onerror=null;">`
                : `<span style="font-size:0.8em; color:#ccc;">S/ Foto</span>`;

            // Adicionado data-price para cálculo dinâmico
            html += `<tr id="row-${uniqueId}" data-price="${item.price}" data-emb="${item.emb}" data-ipi="${item.ipi}">
                        <td class="col-img">${imgTag}</td>
                        <td class="col-ref">${item.ref}</td>
                        <td class="col-desc">${item.desc}</td>
                        <td class="col-emb">${item.emb}</td>
                        <td class="col-ipi">${ipiPercent}%</td>
                        <td class="col-price">
                            <div class="price-container">
                                <span class="old-price" id="old-price-${uniqueId}">${formatCurrency(item.price)}</span>
                                <span class="new-price" id="new-price-${uniqueId}">${formatCurrency(item.price)}</span>
                            </div>
                        </td>
                        <td class="col-qty">
                            <input type="number" min="0" 
                                   oninput="updateItem('${uniqueId}', '${category.replace(/'/g, "\\'")}', '${item.ref}', '${item.desc.replace(/'/g, "\\'").replace(/"/g, "&quot;")}')" 
                                   placeholder="0" id="input-${uniqueId}">
                        </td>
                        <td class="col-total-units" id="units-${uniqueId}">0</td>
                        <td class="col-total" id="total-${uniqueId}">R$ 0,00</td>
                     </tr>`;
        });

        html += `</tbody></table></div></div>`;
    }
    app.innerHTML = html;
}

renderTable();

function updateItem(uniqueId, category, ref, desc) {
    const row = document.getElementById(`row-${uniqueId}`);
    const input = document.getElementById(`input-${uniqueId}`);
    const qty = parseInt(input.value) || 0;
    
    const basePrice = parseFloat(row.getAttribute('data-price'));
    const emb = parseInt(row.getAttribute('data-emb'));
    const ipi = parseFloat(row.getAttribute('data-ipi'));

    if (qty > 0) {
        row.classList.add('active-row');
        cart[uniqueId] = { ref, desc, qty, basePrice, emb, ipi, category };
    } else {
        row.classList.remove('active-row');
        delete cart[uniqueId];
    }

    recalculateTotals();
}

function recalculateTotals() {
    // 1. Calcula TOTAL BRUTO (Sem Desconto) para definir a faixa
    let grandFinalWithoutDiscount = 0;
    
    // Primeiro loop apenas para saber o total bruto
    Object.values(cart).forEach(item => {
        const lineTotal = item.basePrice * item.emb * item.qty;
        grandFinalWithoutDiscount += lineTotal;
    });

    // 2. Define Porcentagem de Desconto (Baseado em R$)
    if (grandFinalWithoutDiscount > 10000) currentDiscountPercent = 0.20;
    else if (grandFinalWithoutDiscount > 6000) currentDiscountPercent = 0.15;
    else if (grandFinalWithoutDiscount > 3000) currentDiscountPercent = 0.07;
    else currentDiscountPercent = 0;

    // CORREÇÃO: .toFixed(0) para remover as casas decimais extras
    document.getElementById('current-discount-display').innerText = (currentDiscountPercent * 100).toFixed(0) + "%";
    
    // Cor do total muda se não atingir o mínimo
    const totalDisplay = document.getElementById('grand-total-products');
    if (grandFinalWithoutDiscount < 1600) {
        totalDisplay.style.color = '#e74c3c';
    } else {
        totalDisplay.style.color = 'var(--primary-color)';
    }

    let grandBase = 0;
    let grandIPI = 0;
    let grandFinal = 0;
    const catSubtotals = {};

    // 3. Recalcula valores de TODAS as linhas com o novo desconto
    Object.keys(cart).forEach(uniqueId => {
        const item = cart[uniqueId];
        
        // Aplica desconto no preço unitário
        const discountedPrice = item.basePrice * (1 - currentDiscountPercent);
        
        // Cálculos da Linha
        const totalBase = discountedPrice * item.emb * item.qty;
        const totalIPI = totalBase * item.ipi;
        const totalLine = totalBase + totalIPI;
        const totalUnits = item.emb * item.qty;

        item.finalPrice = discountedPrice;
        item.finalTotal = totalLine;

        updateRowVisuals(uniqueId, item.basePrice, discountedPrice, totalLine, totalUnits);

        grandBase += totalBase;
        grandIPI += totalIPI;
        grandFinal += totalLine;

        if (!catSubtotals[item.category]) catSubtotals[item.category] = 0;
        catSubtotals[item.category] += totalLine;
    });

    // 4. Atualiza Interface Global
    document.getElementById('grand-total-products').innerText = formatCurrency(grandFinalWithoutDiscount); // Mostra Bruto na esquerda
    document.getElementById('grand-total-final').innerText = formatCurrency(grandFinal); // Mostra Líquido na direita

    // Atualiza Totais da IMPRESSÃO
    if(document.getElementById('print-total-products')) {
        document.getElementById('print-total-products').innerText = formatCurrency(grandBase);
        // CORREÇÃO: .toFixed(0) para o print também
        document.getElementById('print-discount-applied').innerText = (currentDiscountPercent * 100).toFixed(0) + "%";
        document.getElementById('print-total-ipi').innerText = formatCurrency(grandIPI);
        document.getElementById('print-total-final').innerText = formatCurrency(grandFinal);
    }

    // Atualiza Subtotais
    document.querySelectorAll('.category-subtotal').forEach(el => {
        const catId = el.id.replace('subtotal-', '').replace(/-/g, ' '); 
        const matchingCat = Object.keys(catSubtotals).find(key => key.replace(/\s/g, '-') === el.id.replace('subtotal-', ''));
        const val = matchingCat ? catSubtotals[matchingCat] : 0;
        el.innerText = `Subtotal: ${formatCurrency(val)}`;
    });
}

function updateRowVisuals(uniqueId, basePrice, newPrice, totalLine, totalUnits) {
    const oldPriceEl = document.getElementById(`old-price-${uniqueId}`);
    const newPriceEl = document.getElementById(`new-price-${uniqueId}`);
    
    newPriceEl.innerText = formatCurrency(newPrice);
    
    if (currentDiscountPercent > 0) {
        oldPriceEl.classList.add('visible');
        newPriceEl.classList.add('discounted');
    } else {
        oldPriceEl.classList.remove('visible');
        newPriceEl.classList.remove('discounted');
    }

    document.getElementById(`total-${uniqueId}`).innerText = formatCurrency(totalLine);
    document.getElementById(`units-${uniqueId}`).innerText = totalUnits;
}

function filterProducts() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        // CORREÇÃO AQUI: Troquei 'innerText' por 'textContent'
        // textContent consegue ler o código (REF) mesmo se a coluna estiver oculta no celular
        const text = row.textContent.toLowerCase();
        
        // Mantém a busca também pelo valor que o usuário digitou no input (quantidade)
        const inputVal = row.querySelector('input').value;
        
        if (text.includes(term) || (inputVal && inputVal > 0)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    // Lógica para esconder categorias que ficaram vazias após o filtro
    document.querySelectorAll('.category-block').forEach(block => {
        // Seleciona apenas linhas visíveis dentro desta categoria
        const visibleRows = block.querySelectorAll('tbody tr:not([style*="display: none"])');
        
        // Se o termo de busca for vazio, mostra tudo. 
        // Se tiver termo, só mostra a categoria se tiver linhas visíveis dentro.
        if(term.length > 0) {
            block.style.display = visibleRows.length > 0 ? '' : 'none';
        } else {
            block.style.display = '';
        }
    });
}

function generateWhatsApp() {
    if (Object.keys(cart).length === 0) {
        alert("O carrinho está vazio!");
        return;
    }

    // TRAVA DE MÍNIMO (FINANCEIRO)
    let totalBruto = 0;
    Object.values(cart).forEach(item => totalBruto += (item.basePrice * item.emb * item.qty));

    if (totalBruto < 1600) {
        alert(`⚠️ PEDIDO MÍNIMO NÃO ATINGIDO!\n\nValor Atual: ${formatCurrency(totalBruto)}\nMínimo Exigido: R$ 1.600,00`);
        return;
    }

    const today = new Date().toLocaleDateString('pt-BR');
    let message = `*PEDIDO POLLYMER - ${today}*\n`;
    message += `----------------------------------\n`;
    
    const itemsByCat = {};
    Object.values(cart).forEach(item => {
        if(!itemsByCat[item.category]) itemsByCat[item.category] = [];
        itemsByCat[item.category].push(item);
    });

    for(const [cat, items] of Object.entries(itemsByCat)) {
        message += `\n*${cat.toUpperCase()}*\n`; 
        items.forEach(item => {
            const totalUnits = item.qty * item.emb;
            const totalItem = item.finalTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            const priceUnit = item.finalPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            
            message += `- [${item.ref}] ${item.desc}\n`;
            message += `   ${totalUnits} Unid. x R$ ${priceUnit} = *R$ ${totalItem}*\n`;
        });
    }

    const totalGeral = document.getElementById('grand-total-final').innerText;
    // CORREÇÃO: .toFixed(0) para o WhatsApp também
    const descPerc = (currentDiscountPercent * 100).toFixed(0) + "%";
    
    message += `\n==================================\n`;
    message += `*DESCONTO APLICADO: ${descPerc}*\n`;
    message += `*TOTAL GERAL: ${totalGeral}*`;
    message += `\n==================================`;
    
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMsg}`, '_blank');
}

function printOrder() {
    if (Object.keys(cart).length === 0) {
        if(!confirm("O carrinho está vazio. Deseja imprimir o catálogo em branco?")) {
            return;
        }
    } else {
        // TRAVA MÍNIMO (IGUAL AO WHATS)
        let totalBruto = 0;
        Object.values(cart).forEach(item => totalBruto += (item.basePrice * item.emb * item.qty));

        if (totalBruto < 1600) {
            alert(`⚠️ PEDIDO MÍNIMO NÃO ATINGIDO!\n\nValor Atual: ${formatCurrency(totalBruto)}\nMínimo Exigido: R$ 1.600,00`);
            return;
        }
    }

    document.getElementById('print-date').innerText = `Data: ${new Date().toLocaleDateString('pt-BR')}`;

    const blocks = document.querySelectorAll('.category-block');
    blocks.forEach(block => {
        const hasActiveRow = block.querySelector('.active-row');
        if (hasActiveRow) {
            block.classList.add('has-items');
        } else {
            block.classList.remove('has-items');
        }
    });

    document.body.classList.add('printing-clean');
    window.print();

    setTimeout(() => {
        document.body.classList.remove('printing-clean');
    }, 500);
}

function resetForm() {
    if(confirm("Tem certeza que deseja limpar todo o pedido?")) {
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.value = '';
            input.dispatchEvent(new Event('input')); 
        });
        cart = {};
        currentDiscountPercent = 0;
        document.querySelectorAll('.old-price').forEach(el => el.classList.remove('visible'));
        document.querySelectorAll('.new-price').forEach(el => {
            el.classList.remove('discounted');
            const row = el.closest('tr');
            if(row) el.innerText = formatCurrency(parseFloat(row.getAttribute('data-price')));
        });

        recalculateTotals();
        document.querySelectorAll('tr').forEach(r => r.classList.remove('active-row'));
        document.getElementById('searchInput').value = '';
        filterProducts(); 
    }
}

function toggleCategory(catId) {
    const container = document.getElementById(`table-container-${catId}`);
    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}