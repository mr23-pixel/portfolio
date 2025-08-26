// Тема
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    document.querySelector('.theme-toggle').textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Фильтры
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
            card.style.display = filter === 'all' || card.classList.contains(filter) ? 'block' : 'none';
        });
    });
});

// Модальное окно
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImages = document.getElementById('modal-images');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.more-info-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.project-card');
    modalTitle.textContent = card.dataset.title;

    // Добавляем длинный текст с переносами
    modalDesc.innerHTML = card.dataset.desc.replace(/\n/g, "<br>");

    // Очистка старых изображений
    modalImages.innerHTML = '';
    const imgs = card.dataset.images.split(',');
    imgs.forEach(src => {
      const imgEl = document.createElement('img');
      imgEl.src = src;
      modalImages.appendChild(imgEl);
    });

    modal.style.display = 'flex';
  });
});

// Закрытие модального окна
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});