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
  fundo: "#F5F8FF",
  card: "#FFFFFF",
  card2: "#EAF1FF",

  texto: "#172B4D",
  textoSecundario: "#64748B",

  dourado: "#155EEF",
  douradoClaro: "#528BFF",

  linha: "#D6E4FF",
  servicoNome: "#172B4D",

  hero: "#EAF1FF",
  heroCard: "#FFFFFF",

  sucesso: "#16A34A",
  sucessoFundo: "#DCFCE7",

  erro: "#DC2626",
  erroFundo: "#FEE2E2"
}






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
        descricao: "Corte tradicional ou moderno, com acabamento cuidadoso.",
        preco: 25,
        duracao: "30 min",
        imagem: "imagens-servicos/corte.svg"
    },
    {
        id: "barba",
        nome: "Barba",
        descricao: "Modelagem, alinhamento e acabamento da barba.",
        preco: 20,
        duracao: "30 min",
        imagem: "imagens-servicos/barba.svg"
    },
    {
        id: "corte-barba",
        nome: "Corte + Barba",
        descricao: "O combo ideal para renovar o visual completo.",
        preco: 40,
        duracao: "60 min",
        imagem: "imagens-servicos/corte-barba.svg"
    },
    {
        id: "corte-barba-sobrancelha",
        nome: "Corte + Barba + Sobrancelha",
        descricao: "Cuidado completo, do corte ao acabamento final.",
        preco: 55,
        duracao: "60 min",
        imagem: "imagens-servicos/combo-completo.svg"
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
