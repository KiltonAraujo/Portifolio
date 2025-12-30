// animação de aparecer e desaparecer

document.addEventListener("DOMContentLoaded", function() {
  const listaveis = document.querySelectorAll("li");
  
  let lastScrollTop = 0;

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const isScrollingDown = currentScrollTop > lastScrollTop;

          if (isScrollingDown) {
            entry.target.classList.add("visible-down");
            entry.target.classList.remove("visible-up");
        } else {
            entry.target.classList.add("visible-up");
            entry.target.classList.remove("visible-down");
        }
      });
  }, { threshold: 0.1 });

  if (listaveis) {
      listaveis.forEach(li => {
          observer.observe(li);
      });
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const noResultsMessage = document.querySelectorAll('#mensagem-erro');
  
  let lastScrollTop = 0;

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const isScrollingDown = currentScrollTop > lastScrollTop;

          if (!entry.target.classList.contains('animado')) {
              if (entry.isIntersecting) {
                  if (isScrollingDown) {
                      entry.target.classList.add("visible-down");
                      entry.target.classList.remove("visible-up");
                  } else {
                      entry.target.classList.add("visible-up");
                      entry.target.classList.remove("visible-down");
                  }
                  entry.target.classList.add('animado');
              }
          }
      });
  }, { threshold: 0.14 });

  if (sections) {
      sections.forEach(section => {
          observer.observe(section);
      });
  }

  if (noResultsMessage) {
      noResultsMessage.forEach(div => {
          observer.observe(div);
      });
  }
});
