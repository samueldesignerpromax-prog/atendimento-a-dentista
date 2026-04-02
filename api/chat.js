// Base de conhecimento com intenções e variações em linguagem natural
const baseConhecimento = {
  preco_consulta: {
    keywords: ['consulta', 'avaliação', 'exame', 'diagnóstico', 'consultar', 'avaliar', 'ver dente', 'primeira vez'],
    respostas: [
      "Nossa consulta inicial custa entre R$100 e R$250 🦷 Inclui avaliação completa, diagnóstico e planejamento do tratamento. Quer agendar?",
      "A consulta odontológica tem valor a partir de R$100. O valor exato depende da complexidade do seu caso. Posso ajudar com agendamento?",
      "Fazemos consulta por valores que variam de R$100 a R$250. Inclui avaliação completa com nossos especialistas!"
    ]
  },
  
  preco_limpeza: {
    keywords: ['limpeza', 'higiene', 'tártaro', 'placa', 'profilaxia', 'limpar dente', 'tirar tártaro', 'limpeza dental', 'bacteriana'],
    respostas: [
      "A limpeza dentária (profilaxia) custa entre R$150 e R$300 😊 O valor depende da quantidade de tártaro e da necessidade de aplicação de flúor. Quer agendar?",
      "Fazemos limpeza profissional a partir de R$150. Uma limpeza completa remove placa bacteriana e tártaro, deixando seus dentes saudáveis!",
      "Limpeza dental: de R$150 a R$300. Recomendamos fazer a cada 6 meses. Posso agendar sua avaliação?"
    ]
  },
  
  preco_clareamento: {
    keywords: ['clareamento', 'clarear', 'branqueamento', 'dente branco', 'clarear dente', 'clarear os dentes', 'dentes amarelos'],
    respostas: [
      "O clareamento dental custa entre R$800 e R$2.000 ✨ Temos duas técnicas: clareamento caseiro (mais acessível) e em consultório (resultado imediato).",
      "Trabalhamos com clareamento a laser e clareamento caseiro. Valores de R$800 a R$2.000. Parcelamos em até 10x!",
      "Clareamento dental: a partir de R$800. Fazemos avaliação gratuita para indicar a melhor técnica para seu caso!"
    ]
  },
  
  preco_canal: {
    keywords: ['canal', 'endodontia', 'tratamento canal', 'nervo', 'dente podre', 'desvitalizar', 'tratamento de canal', 'tirar nervo'],
    respostas: [
      "O tratamento de canal (endodontia) custa entre R$600 e R$1.500 por dente 🦷 Varia conforme a complexidade e número de canais. O valor inclui todo o tratamento.",
      "Fazemos canal com especialistas! Valores de R$600 a R$1.500. Trabalhamos com materiais de alta qualidade e garantia.",
      "Tratamento de canal: a partir de R$600. Resolvemos sua dor de forma definitiva! Quer agendar uma avaliação?"
    ]
  },
  
  preco_aparelho: {
    keywords: ['aparelho', 'ortodontia', 'aparelho fixo', 'aparelho móvel', 'ortho', 'ortodôntico', 'colocar aparelho', 'dente torto', 'corrigir dente'],
    respostas: [
      "O aparelho ortodôntico tem investimento inicial de R$1.500 + mensalidades de R$150 a R$400 😁 Inclui todas as manutenções e acompanhamento.",
      "Para ortodontia, temos plano a partir de R$1.500 de instalação + mensalidades de R$150 a R$400. Fazemos avaliação gratuita com orçamento detalhado!",
      "Trabalhamos com vários tipos de aparelho (fixo, estético, autoligado). Valores sob consulta, mas começa em R$1.500 de instalação."
    ]
  },
  
  preco_extracao: {
    keywords: ['extração', 'arrancar', 'tirar dente', 'siso', 'dente incluso', 'extrair dente', 'arrancar dente', 'extração de sisos'],
    respostas: [
      "A extração dentária custa entre R$200 e R$800 🦷 Dentes simples são mais baratos, sisos inclusos podem chegar a R$800. Fazemos com total segurança!",
      "Extrações a partir de R$200. Para sisos inclusos, o valor pode chegar a R$800. Tudo feito com anestesia e conforto.",
      "Remoção de dente: de R$200 a R$800. Atendemos urgências para extrações. Precisa de atendimento hoje?"
    ]
  },
  
  parcelamento: {
    keywords: ['parcelamento', 'parcela', 'cartão', 'credito', 'debito', 'financiar', 'pagamento', 'pix', 'aceita cartão', 'forma de pagamento'],
    respostas: [
      "Sim! Parcelamos em até 10x no cartão de crédito 💳 Aceitamos: Visa, Mastercard, Elo, Amex, débito, PIX e dinheiro com desconto!",
      "Trabalhamos com parcelamento sem juros em até 6x, ou em até 10x com acréscimo. Também temos planos de tratamento personalizados!",
      "Aceitamos todas as formas de pagamento! Cartão (débito/crédito), PIX, transferência e dinheiro. Parcelamos em até 10x."
    ]
  },
  
  convenio: {
    keywords: ['convênio', 'plano', 'seguro', 'odontologico', 'odontológico', 'particular', 'convenio dental', 'plano de saúde', 'amíl', 'bradesco'],
    respostas: [
      "Sim, atendemos diversos convênios! 🏥 Trabalhamos com: Amil Dental, Bradesco Dental, Unimed Odonto, Porto Seguro, Metlife, SulAmérica, entre outros.",
      "Aceitamos os principais planos odontológicos. Podemos verificar a cobertura para você! Qual convênio você possui?",
      "Atendemos particular e convênios. Temos parceria com mais de 20 planos. Me informe qual o seu que verificamos a cobertura!"
    ]
  },
  
  dor: {
    keywords: ['dor', 'dente doendo', 'inchaço', 'incomodo', 'sensibilidade', 'doendo', 'doeu', 'dói', 'desconforto', 'dor de dente', 'dente inchado'],
    respostas: [
      "Entendo sua dor! 😔 Recomendo agendar uma consulta de urgência ainda hoje. Temos horários especiais para emergências. Posso te ajudar a marcar?",
      "Dor de dente é muito desconfortável! 💙 Podemos te atender hoje mesmo como urgência. Qual horário seria melhor pra você vir?",
      "Sinto muito que esteja sentindo dor! Temos plantão de emergência. Vou agendar você para o mais rápido possível. Vamos resolver isso!"
    ]
  },
  
  urgencia: {
    keywords: ['urgência', 'emergência', 'hoje', 'agora', 'imediatamente', 'corre', 'rápido', 'urgente', 'preciso agora', 'emergencia'],
    respostas: [
      "Atendemos urgências odontológicas! 🚨 Temos plantão de emergência todos os dias. Consigo agendar você para ainda hoje. Vamos te ajudar!",
      "Sim! Dispomos de horários para emergências. Posso agendar sua consulta de urgência agora mesmo. Qual o melhor horário?",
      "Temos atendimento de urgência 24h para emergências. Vou te encaixar na agenda hoje. Me informe seu nome e telefone, por favor."
    ]
  },
  
  agendamento: {
    keywords: ['agendar', 'marcar', 'horário', 'consulta', 'agendamento', 'marcar consulta', 'reservar', 'quero marcar', 'quero agendar'],
    respostas: [
      "Que ótimo! Vamos agendar sua consulta 😊 Primeiro, me informe seu nome completo, por favor?",
      "Adoraria te ajudar a marcar um horário! ✨ Para começar, qual seu nome completo?",
      "Vamos agendar! 🗓️ Me diga seu nome completo para começarmos."
    ]
  },
  
  horario: {
    keywords: ['horário', 'funcionamento', 'abre', 'fecha', 'atendimento', 'hora que abre', 'hora que fecha', 'horarios', 'até que horas'],
    respostas: [
      "Atendemos de segunda a sexta, das 8h às 20h, e sábados das 8h às 14h ⏰ Temos horários flexíveis e plantão de emergência!",
      "Nosso horário de funcionamento é: Segunda a Sexta: 08:00 às 20:00 | Sábado: 08:00 às 14:00. Domingo apenas emergências.",
      "Funcionamos em horário comercial estendido. Segunda a sexta das 8h às 20h, sábado até 14h. Posso agendar você?"
    ]
  },
  
  endereco: {
    keywords: ['endereço', 'onde fica', 'localização', 'mapa', 'como chegar', 'rua', 'avenida', 'bairro', 'local', 'endereco'],
    respostas: [
      "Estamos localizados na Rua das Flores, 123 - Jardim Paulista, São Paulo - SP 🌸 Fácil acesso, próximo ao metrô e com estacionamento conveniado!",
      "Nossa clínica fica na Av. Brasil, 456 - Centro. Estacionamento próprio gratuito. Quer o link do Google Maps? 📍",
      "Atendemos na Rua das Flores, 123. Bem no coração do Jardim Paulista. Estacionamento fácil e ponto de ônibus próximo!"
    ]
  },
  
  sobre: {
    keywords: ['quem são', 'sobre', 'clínica', 'dentes', 'odontologia', 'conhecer', 'quem trabalha', 'especialidades'],
    respostas: [
      "Somos a Clínica OdontoCare, especializada em saúde bucal com mais de 10 anos de experiência! 🦷 Temos especialistas em todas as áreas da odontologia.",
      "A OdontoCare é uma clínica completa com dentistas especializados em ortodontia, implantodontia, estética, endodontia e mais! Qual tratamento te interessa?",
      "Nossa missão é cuidar do seu sorriso com excelência e carinho! 💙 Temos estrutura moderna e equipe qualificada."
    ]
  }
};

// Função para normalizar texto (remover acentos, converter para minúsculo)
function normalizarTexto(texto) {
  return texto.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '');
}

// Função para calcular similaridade entre duas strings (algoritmo simples de Jaccard)
function calcularSimilaridade(texto1, texto2) {
  const palavras1 = new Set(texto1.split(' '));
  const palavras2 = new Set(texto2.split(' '));
  
  const intersecao = new Set([...palavras1].filter(x => palavras2.has(x)));
  const uniao = new Set([...palavras1, ...palavras2]);
  
  return intersecao.size / uniao.size;
}

// Função para identificar intenção usando NLP simples
function identificarIntencao(mensagem) {
  const msgNormalizada = normalizarTexto(mensagem);
  const palavrasMsg = msgNormalizada.split(' ');
  
  // Para cada intenção, calcular score baseado em palavras-chave
  let melhoresIntencoes = [];
  
  for (const [intencao, dados] of Object.entries(baseConhecimento)) {
    let score = 0;
    let matches = 0;
    
    // Verificar cada palavra-chave
    for (const keyword of dados.keywords) {
      const keywordNormalizada = normalizarTexto(keyword);
      const palavrasKeyword = keywordNormalizada.split(' ');
      
      // Verificar se a mensagem contém a keyword
      if (msgNormalizada.includes(keywordNormalizada)) {
        score += 3; // Peso maior para correspondência exata
        matches++;
      } else {
        // Verificar similaridade parcial
        for (const palavra of palavrasMsg) {
          if (palavrasKeyword.some(kwPalavra => {
            const similaridade = calcularSimilaridade(palavra, kwPalavra);
            return similaridade > 0.6;
          })) {
            score += 1;
            break;
          }
        }
      }
    }
    
    // Bonus para intenções específicas com base no contexto semântico
    if (intencao === 'dor' && 
        (msgNormalizada.includes('dói') || msgNormalizada.includes('incomoda') || 
         msgNormalizada.includes('sensível') || msgNormalizada.includes('latejando'))) {
      score += 2;
    }
    
    if (intencao === 'preco_consulta' && 
        (msgNormalizada.includes('valor') || msgNormalizada.includes('custo') || 
         msgNormalizada.includes('preço') || msgNormalizada.includes('quanto'))) {
      score += 1;
    }
    
    if (score > 0) {
      melhoresIntencoes.push({ intencao, score });
    }
  }
  
  // Ordenar por score e pegar a melhor
  melhoresIntencoes.sort((a, b) => b.score - a.score);
  
  if (melhoresIntencoes.length > 0 && melhoresIntencoes[0].score > 0.5) {
    return melhoresIntencoes[0].intencao;
  }
  
  return 'padrao';
}

// Função para gerar resposta com contexto
function gerarResposta(intencao, mensagem, contexto) {
  const dados = baseConhecimento[intencao];
  
  if (!dados) {
    return "Entendi! 😊 Como posso ajudar você melhor? Posso informar sobre preços, tratamentos, agendamentos ou urgências odontológicas.";
  }
  
  // Escolher resposta aleatória
  const respostas = dados.respostas;
  let resposta = respostas[Math.floor(Math.random() * respostas.length)];
  
  // Personalizar resposta baseada no contexto da mensagem
  const msgNormalizada = normalizarTexto(mensagem);
  
  if (msgNormalizada.includes('quanto') || msgNormalizada.includes('valor') || msgNormalizada.includes('custo')) {
    resposta = resposta.replace('custa', 'custa aproximadamente');
  }
  
  if (msgNormalizada.includes('urgente') || msgNormalizada.includes('emergencia')) {
    resposta = "⚠️ " + resposta;
  }
  
  return resposta;
}

// Simular atraso humano
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
    const { mensagem, contexto = {} } = req.body;
    
    if (!mensagem) {
      return res.status(400).json({ error: 'Mensagem não fornecida' });
    }
    
    console.log('Mensagem recebida:', mensagem);
    
    // Simular tempo de resposta humano
    await delay(600 + Math.random() * 800);
    
    // Identificar intenção usando NLP
    const intencao = identificarIntencao(mensagem);
    console.log('Intenção identificada:', intencao);
    
    // Gerar resposta baseada na intenção
    let resposta = gerarResposta(intencao, mensagem, contexto);
    
    // Gerenciar fluxo de agendamento
    let novoFluxo = contexto.fluxoAtivo;
    let dadosAgendamento = contexto.dadosAgendamento || {};
    
    if (intencao === 'agendamento' && !contexto.fluxoAtivo) {
      novoFluxo = 'aguardando_nome';
      resposta = "Vamos agendar sua consulta! 😊 Primeiro, me informe seu nome completo, por favor?";
    } else if (contexto.fluxoAtivo === 'aguardando_nome') {
      dadosAgendamento.nome = mensagem;
      novoFluxo = 'aguardando_telefone';
      resposta = `Prazer em conhecê-lo(a), ${mensagem}! ✨ Agora, me informe seu telefone com DDD para entrarmos em contato? 📱`;
    } else if (contexto.fluxoAtivo === 'aguardando_telefone') {
      dadosAgendamento.telefone = mensagem;
      novoFluxo = 'aguardando_horario';
      resposta = `Perfeito! 📞 Agora, qual o melhor dia e horário para sua consulta? Atendemos de segunda a sábado. ⏰`;
    } else if (contexto.fluxoAtivo === 'aguardando_horario') {
      dadosAgendamento.horario = mensagem;
      dadosAgendamento.problema = contexto.ultimaPergunta || 'Não especificado';
      novoFluxo = 'finalizado';
      
      // Salvar agendamento (simulado)
      console.log('Agendamento realizado:', dadosAgendamento);
      
      resposta = `Maravilha! ✅ Seu agendamento foi registrado com sucesso!\n\n📋 Resumo:\n• Nome: ${dadosAgendamento.nome}\n• Telefone: ${dadosAgendamento.telefone}\n• Horário: ${dadosAgendamento.horario}\n\nEntraremos em contato em breve para confirmar. Algo mais que possamos ajudar? 😊`;
      novoFluxo = null;
    }
    
    // Retornar resposta
    return res.status(200).json({
      resposta,
      intencao,
      fluxoAtivo: novoFluxo,
      dadosAgendamento: novoFluxo ? dadosAgendamento : undefined
    });
    
  } catch (error) {
    console.error('Erro no chat:', error);
    return res.status(500).json({ 
      error: 'Erro interno no servidor',
      resposta: "Desculpe, tivemos um problema técnico. Por favor, tente novamente em alguns momentos. 😊"
    });
  }
}
