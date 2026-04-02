// Simulação de IA para o chatbot
const intencaoRespostas = {
  // Saudações
  saudacao: [
    "Olá! 😊 Tudo bem? Como posso ajudar você hoje?",
    "Oi! 👋 Bem-vindo(a) à nossa clínica odontológica! Em que posso ajudar?",
    "Olá! 😃 Prazer em atendê-lo(a)! Como podemos ajudar com sua saúde bucal?"
  ],
  
  // Preços
  preco_consulta: [
    "A consulta inicial custa entre R$100 e R$250, dependendo da complexidade. 🦷 Gostaria de agendar uma avaliação?",
    "Nossa consulta varia de R$100 a R$250. Inclui avaliação completa e planejamento do tratamento. Quer marcar um horário?"
  ],
  
  preco_limpeza: [
    "A limpeza dentária aqui na clínica custa entre R$150 e R$300 😊 Quer que eu veja um horário pra você?",
    "Fazemos limpeza profissional por valores a partir de R$150. O valor exato depende do seu caso. Posso agendar uma avaliação?"
  ],
  
  preco_clareamento: [
    "O clareamento dental custa entre R$800 e R$2.000, dependendo da técnica (caseiro ou em consultório). ✨ Temos opções de parcelamento!",
    "Nossos tratamentos de clareamento variam de R$800 a R$2.000. Fazemos uma avaliação gratuita antes de definir o melhor método pra você!"
  ],
  
  preco_canal: [
    "O tratamento de canal (endodontia) custa entre R$600 e R$1.500 por dente, dependendo da complexidade. 🦷 O valor inclui todo o tratamento até a restauração.",
    "Canal dentário: de R$600 a R$1.500 por dente. Trabalhamos com materiais de primeira qualidade. Quer agendar uma avaliação?"
  ],
  
  preco_aparelho: [
    "O aparelho ortodôntico tem investimento inicial de R$1.500 + mensalidades de R$150 a R$400 😁 Inclui todo acompanhamento ortodôntico!",
    "Para ortodontia, temos plano a partir de R$1.500 de instalação + mensalidades de R$150 a R$400. Fazemos avaliação gratuita!"
  ],
  
  preco_extracao: [
    "A extração dentária custa entre R$200 e R$800, dependendo da complexidade (dente incluso ou não). 🦷 Fazemos com total segurança e conforto.",
    "Extrações a partir de R$200. Em casos de dentes inclusos (sisos), pode chegar a R$800. Precisa de urgência?"
  ],
  
  // Pagamento
  parcelamento: [
    "Sim! Parcelamos em até 10x no cartão de crédito 💳 Também aceitamos débito, PIX e dinheiro com desconto!",
    "Trabalhamos com parcelamento sem juros em até 6x, ou em até 10x com acréscimo. Também temos planos de tratamento personalizados!"
  ],
  
  convenio: [
    "Sim, atendemos diversos convênios! 🏥 Trabalhamos com Amil, Bradesco Dental, Unimed, Porto Seguro, Metlife e outros. Qual o seu plano?",
    "Aceitamos os principais planos odontológicos. Podemos verificar a cobertura para você! Qual convênio você possui?"
  ],
  
  dor: [
    "Entendo sua dor! 😔 Recomendo agendar uma consulta de urgência ainda hoje. Temos horários especiais para emergências. Posso te ajudar a marcar?",
    "Dor de dente é muito desconfortável! 💙 Podemos te atender hoje mesmo como urgência. Qual horário seria melhor pra você vir?"
  ],
  
  urgencia: [
    "Atendemos urgências odontológicas! 🚨 Temos plantão de emergência. Consigo agendar você para ainda hoje. Vamos te ajudar!",
    "Sim! Dispomos de horários para emergências todos os dias. Posso agendar sua consulta de urgência agora mesmo. Qual o melhor horário?"
  ],
  
  agendamento: [
    "Que ótimo! Vamos agendar sua consulta 😊 Primeiro, me informe seu nome completo, por favor?",
    "Adoraria te ajudar a marcar um horário! ✨ Para começar, qual seu nome completo?"
  ],
  
  horario: [
    "Atendemos de segunda a sexta, das 8h às 20h, e sábados das 8h às 14h ⏰ Temos horários flexíveis!",
    "Nosso horário de funcionamento é: Segunda a Sexta: 08:00 às 20:00 | Sábado: 08:00 às 14:00. Domingo fechado para emergências."
  ],
  
  endereco: [
    "Estamos localizados na Rua das Flores, 123 - Jardim Paulista, São Paulo - SP 🌸 Fácil acesso e estacionamento conveniado!",
    "Nossa clínica fica na Av. Brasil, 456 - Centro. Estacionamento próprio gratuito. Quer o link do Google Maps? 📍"
  ],
  
  // Respostas padrão
  padrao: [
    "Entendi! 😊 Posso ajudar com informações sobre tratamentos, preços ou agendamentos. O que gostaria de saber?",
    "Como posso te ajudar melhor? Tenho informações sobre preços, tratamentos, convênios e posso fazer agendamentos! 💙"
  ]
};

// Função para identificar intenção
function identificarIntencao(mensagem) {
  const msg = mensagem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  // Verificar cada intenção
  if (msg.match(/oi|ol[aá]|bom dia|boa tarde|boa noite|tudo bem|opa|hey|hello/)) {
    return 'saudacao';
  }
  
  if (msg.match(/consulta|avalia[cç][aã]o|exame|diagn[óo]stico|consultar/)) {
    return 'preco_consulta';
  }
  
  if (msg.match(/limpeza|limpar|higiene|tartaro|placa|profilaxia/)) {
    return 'preco_limpeza';
  }
  
  if (msg.match(/clareamento|clarear|branqueamento|dente branco|clarear dente/)) {
    return 'preco_clareamento';
  }
  
  if (msg.match(/canal|endodontia|tratamento canal|nervo|dente podre/)) {
    return 'preco_canal';
  }
  
  if (msg.match(/aparelho|ortodontia|aparelho fixo|aparelho m[óo]vel|ortho|ortodôntico/)) {
    return 'preco_aparelho';
  }
  
  if (msg.match(/extra[cç][aã]o|arrancar|tirar dente|siso|dente incluso/)) {
    return 'preco_extracao';
  }
  
  if (msg.match(/parcelamento|parcela|cart[ãa]o|credito|debito|financiar|pagamento/)) {
    return 'parcelamento';
  }
  
  if (msg.match(/conv[êe]nio|plano|seguro|odontologico|odontológico|particular|convenio/)) {
    return 'convenio';
  }
  
  if (msg.match(/dor|dente doendo|incha[çc]o|incomodo|sensibilidade|doendo|doeu/)) {
    return 'dor';
  }
  
  if (msg.match(/urg[êe]ncia|emerg[êe]ncia|hoje|agora|imediatamente|corre|r[áa]pido/)) {
    return 'urgencia';
  }
  
  if (msg.match(/agendar|marcar|hor[áa]rio|consulta|agendamento|marcar consulta|reservar/)) {
    return 'agendamento';
  }
  
  if (msg.match(/hor[áa]rio|funcionamento|abre|fecha|atendimento|hora que abre|hora que fecha/)) {
    return 'horario';
  }
  
  if (msg.match(/endere[çc]o|onde fica|localiza[cç][aã]o|mapa|como chegar|rua|avenida|bairro/)) {
    return 'endereco';
  }
  
  return 'padrao';
}

// Função para obter resposta
function obterResposta(intencao) {
  const respostas = intencaoRespostas[intencao];
  if (!respostas) return intencaoRespostas.padrao[0];
  
  const index = Math.floor(Math.random() * respostas.length);
  return respostas[index];
}

// Simular tempo de digitação
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }
  
  try {
    const { mensagem, contexto } = req.body;
    
    if (!mensagem) {
      return res.status(400).json({ error: 'Mensagem não fornecida' });
    }
    
    // Simular tempo de resposta
    await delay(800);
    
    // Identificar intenção
    const intencao = identificarIntencao(mensagem);
    
    // Obter resposta baseada na intenção
    let resposta = obterResposta(intencao);
    
    // Adicionar contexto para fluxo de agendamento
    let fluxoAtivo = contexto?.fluxoAtivo || null;
    
    if (fluxoAtivo === 'aguardando_nome') {
      resposta = `Ótimo, ${mensagem}! 😊 Agora, me informe seu telefone com DDD para entrarmos em contato? 📱`;
      fluxoAtivo = 'aguardando_telefone';
    } else if (fluxoAtivo === 'aguardando_telefone') {
      resposta = `Perfeito! 📞 Agradecemos o contato. Em breve nossa equipe entrará em contato para confirmar o agendamento. Qual o melhor horário para atendimento? ⏰`;
      fluxoAtivo = 'aguardando_horario';
    } else if (fluxoAtivo === 'aguardando_horario') {
      resposta = `Maravilha! ✅ Seu agendamento foi registrado com sucesso. Entraremos em contato para confirmar. Algo mais que possamos ajudar? 😊`;
      fluxoAtivo = null;
    }
    
    // Se for intenção de agendamento, iniciar fluxo
    if (intencao === 'agendamento' && !fluxoAtivo) {
      fluxoAtivo = 'aguardando_nome';
    }
    
    return res.status(200).json({
      resposta,
      intencao,
      fluxoAtivo
    });
    
  } catch (error) {
    console.error('Erro no chat:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
