// Smooth scrolling cho navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight menu khi scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Animation khi load trang
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.section, .hero');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeIn 0.6s ease forwards ${index * 0.1 + 0.3}s`;
    });
});
// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('mainSidebar');
    sidebar.classList.toggle('active');
    document.querySelector('.sidebar-overlay').classList.toggle('active');
  }
  
  document.querySelector('.sidebar-overlay').addEventListener('click', () => {
    toggleSidebar();
  });
  
  // Đóng sidebar khi click ra ngoài
  document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('mainSidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  });
  
  // Ngăn scroll khi sidebar mở
  document.body.classList.remove('no-scroll');