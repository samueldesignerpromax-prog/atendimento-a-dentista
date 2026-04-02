// Simulação de banco de dados em memória
const agendamentos = [];

export default async function handler(req, res) {
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
    const { nome, telefone, horario, problema, dataAgendamento } = req.body;
    
    if (!nome || !telefone) {
      return res.status(400).json({ error: 'Nome e telefone são obrigatórios' });
    }
    
    // Criar registro de agendamento
    const agendamento = {
      id: Date.now(),
      nome,
      telefone,
      horario: horario || 'A definir',
      problema: problema || 'Não especificado',
      dataAgendamento: dataAgendamento || new Date().toISOString(),
      status: 'pendente'
    };
    
    agendamentos.push(agendamento);
    
    // Simular envio de notificação
    console.log('Novo agendamento:', agendamento);
    
    return res.status(201).json({
      success: true,
      message: 'Agendamento realizado com sucesso!',
      agendamento
    });
    
  } catch (error) {
    console.error('Erro no agendamento:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
