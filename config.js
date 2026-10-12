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
  fundo: "#0B0B0B",
  card: "#151515",
  card2: "#202020",
  texto: "#F5F5F5",
  textoSecundario: "#B8B8B8",
  dourado: "#D4AF37",
  douradoClaro: "#F2D675",
  linha: "#383838",
  servicoNome: "#D4AF37",
  hero: "#101010",
  heroCard: "#191919",
  sucesso: "#22C55E",
  sucessoFundo: "#102817",
  erro: "#EF4444",
  erroFundo: "#2A1111"
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
