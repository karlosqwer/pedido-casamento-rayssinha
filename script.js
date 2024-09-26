// Captura o botão de "Sim"
const yesBtn = document.getElementById('yesBtn');

// Adiciona o evento de clique ao botão "Sim"
yesBtn.addEventListener('click', () => {
    // Redireciona para o link do YouTube
    window.location.href = 'https://www.youtube.com/watch?v=YeqgMW1_gA4&ab_channel=CristianoAra%C3%BAjo'; 
});

// Captura o botão "Não"
const noBtn = document.getElementById('noBtn');

// Evento para fazer o botão "Não" fugir
noBtn.addEventListener('mouseover', () => {
    const randomX = Math.random() * window.innerWidth - noBtn.clientWidth;
    const randomY = Math.random() * window.innerHeight - noBtn.clientHeight;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
