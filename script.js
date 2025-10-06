// ===============================
// 🔥 Firebase Configuração
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyAWwF9kl4OPS2Sa_t1s0BJXHUcxa5Mipkk",
  authDomain: "flash-cards-app-18311.firebaseapp.com",
  projectId: "flash-cards-app-18311",
  storageBucket: "flash-cards-app-18311.firebasestorage.app",
  messagingSenderId: "16352149747",
  appId: "1:16352149747:web:5cd93d2b779e67da03f786",
  measurementId: "G-0H9HG6BN0F"
};

// Inicializa o Firebase e o Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// ===============================
// 📩 Formulário de E-mail
// ===============================
const emailForm = document.getElementById('email-form');
const formMessage = document.getElementById('form-message');

emailForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const ctaButton = document.getElementById('cta-button');

  // Validação simples de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Por favor, insira um e-mail válido.';
    formMessage.className = 'form-message error';
    return;
  }

  // Estado de carregamento
  ctaButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando...';
  ctaButton.disabled = true;

  try {
    // Salvar no Firestore
    await db.collection('usuarios').add({
      email: email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      status: 'pending'
    });

    formMessage.textContent = '🎉 Obrigado! Você foi adicionado à lista de teste. Em breve receberá instruções!';
    formMessage.className = 'form-message success';
    emailForm.reset();

  } catch (error) {
    console.error('Erro ao salvar email:', error);
    formMessage.textContent = '❌ Ops! Houve um erro. Tente novamente.';
    formMessage.className = 'form-message error';
  } finally {
    ctaButton.innerHTML = '<i class="fas fa-rocket"></i> Quero Acesso Antecipado!';
    ctaButton.disabled = false;

    // Limpa a mensagem após 5s
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.className = 'form-message';
    }, 5000);
  }
});


// ===============================
// 📱 Menu Mobile
// ===============================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenuBtn.classList.toggle('open');

  if (mobileMenuBtn.classList.contains('open')) {
    mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});


// ===============================
// 🖼️ Galeria com Modal
// ===============================
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.modal-close');

document.querySelectorAll('.screenshot-item').forEach((img) => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImage.src = img.getAttribute('data-large');
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


// ===============================
// ✨ Animações ao Rolar
// ===============================
const animatedElements = document.querySelectorAll('.animate-slide-up');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.1 }
);

animatedElements.forEach((el) => observer.observe(el));
