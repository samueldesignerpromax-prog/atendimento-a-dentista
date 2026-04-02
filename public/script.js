class Chatbot {
    constructor() {
        this.messagesContainer = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.contexto = {
            fluxoAtivo: null,
            dadosAgendamento: {}
        };
        
        this.init();
    }
    
    init() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }
    
    async sendMessage() {
        const mensagem = this.messageInput.value.trim();
        if (!mensagem) return;
        
        // Adicionar mensagem do usuário
        this.addMessage(mensagem, 'user');
        this.messageInput.value = '';
        
        // Mostrar indicador de digitação
        this.showTypingIndicator();
        
        try {
            // Enviar para API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mensagem: mensagem,
                    contexto: this.contexto
                })
            });
            
            if (!response.ok) throw new Error('Erro na requisição');
            
            const data = await response.json();
            
            // Atualizar contexto
            this.contexto.fluxoAtivo = data.fluxoAtivo;
            
            // Se for fluxo de agendamento, salvar dados
            if (this.contexto.fluxoAtivo === 'aguardando_nome') {
                this.contexto.dadosAgendamento.nome = mensagem;
            } else if (this.contexto.fluxoAtivo === 'aguardando_telefone') {
                this.contexto.dadosAgendamento.telefone = mensagem;
            } else if (this.contexto.fluxoAtivo === 'aguardando_horario') {
                this.contexto.dadosAgendamento.horario = mensagem;
                // Salvar agendamento
                await this.salvarAgendamento();
                this.contexto.dadosAgendamento = {};
            }
            
            // Esconder indicador e adicionar resposta
            this.hideTypingIndicator();
            this.addMessage(data.resposta, 'bot');
            
        } catch (error) {
            console.error('Erro:', error);
            this.hideTypingIndicator();
            this.addMessage('Desculpe, tivemos um problema técnico. Por favor, tente novamente.', 'bot');
        }
    }
    
    async salvarAgendamento() {
        try {
            const response = await fetch('/api/agendamento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.contexto.dadosAgendamento)
            });
            
            if (response.ok) {
                console.log('Agendamento salvo com sucesso');
            }
        } catch (error) {
            console.error('Erro ao salvar agendamento:', error);
        }
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = this.formatMessage(text);
        
        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = this.getCurrentTime();
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    formatMessage(text) {
        // Converter quebras de linha em <br>
        return text.replace(/\n/g, '<br>');
    }
    
    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }
    
    showTypingIndicator() {
        this.typingIndicator.style.display = 'flex';
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        this.typingIndicator.style.display = 'none';
    }
    
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// Inicializar chatbot quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});
