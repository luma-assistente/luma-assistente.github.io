document.addEventListener('DOMContentLoaded', function() {
    // Efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
    
    // Demo chat functionality
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    
    const lumaResponses = [
        "Claro! Posso te ajudar com isso. O que mais você gostaria de saber?",
        "Interessante! Eu posso processar essa informação e te dar uma resposta mais detalhada na versão completa.",
        "Essa é uma ótima pergunta! No momento, eu posso responder perguntas básicas, mas na versão instalada minha capacidade é muito maior.",
        "Entendi sua dúvida. Posso te direcionar para a documentação ou tentar responder aqui mesmo.",
        "Ótimo ponto! Vamos explorar isso juntos. Você pode me dar mais detalhes?",
        "Na versão completa, eu posso executar tarefas relacionadas a isso automaticamente para você.",
        "Estou aprendendo com cada interação! No momento estou demonstrando apenas funcionalidades básicas.",
        "Que ótima observação! Isso mostra como posso ser útil no seu dia a dia."
    ];
    
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'luma-message');
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getRandomResponse() {
        return lumaResponses[Math.floor(Math.random() * lumaResponses.length)];
    }
    
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            
            // Simulate typing indicator
            setTimeout(() => {
                addMessage(getRandomResponse());
            }, 1000);
        }
    }
    
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            console.log('Form submitted:', formValues);
            
            // Show success message
            alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // Ajustar menu mobile ao redimensionar a tela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
    
    // Inicializar menu mobile
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    }
});