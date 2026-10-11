const CONFIG = {

    // ==========================================
    // IDENTIDADE DA BARBEARIA
    // ==========================================

   nome: "Barbearia Teste",

    logo: "logo.png",
    slogan: "Seu estilo, sua identidade",
    heroTitulo1: "SEU ESTILO.",
heroTitulo2: "SEU HORÁRIO.",
heroDescricao: "Escolha o serviço, o barbeiro e o melhor horário. Seu agendamento fica confirmado em poucos passos.",

whatsapp: "(87) 99189-6806",

endereco: "Av. Central Do Brazil, 250 - Centro",




cores: {
    fundo: "#000000",
    card: "#111111",
    card2: "#1A1A1A",
    texto: "#FFFFFF",
    textoSecundario: "#AAAAAA",
    dourado: "#00C853",
    douradoClaro: "#B9F6CA",
    linha: "#333333",
    servicoNome: "#FFFFFF",
    hero: "#000000",
    heroCard: "#111111"
},


    // ==========================================
    // BARBEIROS
    // ==========================================

    barbeiros: [
            "Pedro",
        "Ruan",
    ],


    // ==========================================
    // SERVIÇOS
    // ==========================================

   servicos: [
    {
        id: "corte",
        nome: "Corte",
        descricao: "Corte tradicional ou moderno",
        preco: 25
    },

    {
        id: "barba",
        nome: "Barba",
        descricao: "Barba completa e acabamento",
        preco: 20
    },

    {
        id: "corte-barba",
        nome: "Corte + Barba",
        descricao: "Combo corte e barba",
        preco: 40
    },
       {
        id: "corte-barba-sobrancelha",
        nome: "Corte + Barba + Sobrancelha",
        descricao: "O combo completo",
        preco: 55
    }
],
        // ==========================================
    // HORÁRIO DE FUNCIONAMENTO
    // ==========================================

   horario: {
    abertura: 8,
    fechamento: 18,
    intervalo: 30,

    diasFuncionamento: [
       1, // Segunda
        2, // Terça
        3, // Quarta
        4, // Quinta
        5, // Sexta
        6  // Sábado
    ]
}

};
