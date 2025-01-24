    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbox = document.querySelector('.chatbox');
    const chatInput = document.querySelector('.chat-input textarea');
    const sendChatBtn = document.querySelector('.chat-input span');
    const closeBtn = document.querySelector('.chat-header .close-btn');

    const predefinedReplies = {
        hi: 'Hello! How can I assist you?',
    hello: 'Hi there! How can I help?',
    help: 'Sure, let me know what you need help with.',
    thanks: "You're welcome!",
    default: "I'm sorry, I didn't understand that. Can you rephrase?",
      };

      const createChatLi = (message, className) => {
        const chatLi = document.createElement('li');
    chatLi.classList.add('chat', `${className}`);
    chatLi.innerHTML =
    className === 'outgoing'
    ? `<p>${message}</p>`
    : `<span class="bi bi-robot"></span><p>${message}</p>`;
    return chatLi;
      };

      const handleChat = () => {
        const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    const response =
    predefinedReplies[userMessage.toLowerCase()] ||
    predefinedReplies.default;

    chatbox.appendChild(createChatLi(userMessage, 'outgoing'));
    chatbox.appendChild(createChatLi(response, 'incoming'));
    chatInput.value = '';
    chatbox.scrollTo(0, chatbox.scrollHeight);
      };

    sendChatBtn.addEventListener('click', handleChat);
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Prevent new line
    handleChat();
        }
      });

      chatbotToggler.addEventListener('click', () =>
    document.body.classList.toggle('show-chatbot')
    );

      closeBtn.addEventListener('click', () => {
        document.body.classList.remove('show-chatbot');
      });