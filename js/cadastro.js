/* =====================================================
   HandChord — Cadastro (cadastro.html)

   - confere se as duas senhas são iguais
   - com tudo válido, leva o usuário para a página de login

   A validação de campos vazios, e-mail e tamanho mínimo da
   senha é feita pelo próprio navegador (required, type="email"
   e minlength), com mensagens acessíveis.
   O armazenamento dos dados (Local Storage) fica para a etapa 5.
   ===================================================== */
(function () {
  'use strict';

  var formulario = document.getElementById('form-cadastro');
  if (!formulario) { return; }

  var senha = document.getElementById('cad-senha');
  var confirma = document.getElementById('cad-confirma');

  function conferirSenhas() {
    var diferente = confirma.value !== '' && confirma.value !== senha.value;
    confirma.setCustomValidity(diferente ? 'As senhas não são iguais.' : '');
  }

  senha.addEventListener('input', conferirSenhas);
  confirma.addEventListener('input', conferirSenhas);

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    conferirSenhas();

    if (typeof formulario.reportValidity === 'function' && !formulario.reportValidity()) {
      return;
    }
    window.location.href = 'login.html';
  });
})();
