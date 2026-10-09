/* =====================================================
   HandChord — Menu de navegação (celular)

   O menu abre e fecha só com CSS (checkbox #nav-toggle),
   então funciona mesmo sem JavaScript. Este arquivo apenas
   melhora a acessibilidade:
   - informa o estado ao leitor de tela (aria-expanded)
   - fecha com a tecla Esc e devolve o foco ao botão
   - impede rolar/focar o conteúdo que está atrás do menu
   - garante o menu fechado ao voltar para a página ou
     ao aumentar a janela
   Escrito em ES5 para funcionar em navegadores antigos.
   ===================================================== */
(function () {
  'use strict';

  var botao = document.getElementById('nav-toggle');
  if (!botao) { return; }

  var raiz = document.documentElement;
  var atras = document.querySelectorAll('main, .site-footer');

  function atualizar() {
    var aberto = botao.checked;
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');

    if (aberto) { raiz.classList.add('nav-open'); }
    else { raiz.classList.remove('nav-open'); }

    for (var i = 0; i < atras.length; i++) {
      if (aberto) { atras[i].setAttribute('inert', ''); }
      else { atras[i].removeAttribute('inert'); }
    }
  }

  function fechar() {
    if (botao.checked) {
      botao.checked = false;
      atualizar();
    }
  }

  botao.addEventListener('change', atualizar);

  document.addEventListener('keydown', function (evento) {
    var tecla = evento.key || evento.keyCode;
    if ((tecla === 'Escape' || tecla === 'Esc' || tecla === 27) && botao.checked) {
      fechar();
      botao.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 861) { fechar(); }
  });

  // Voltar com o botão do navegador pode restaurar o checkbox marcado
  window.addEventListener('pageshow', fechar);

  atualizar();
})();
