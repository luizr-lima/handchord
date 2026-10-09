# 🎵 HandChord

> Transforme gestos em música: o HandChord reconhece os gestos das suas mãos pela câmera e toca um acorde para cada um, direto do navegador.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-663399?logo=css&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)

---
## Sumário

- [🎵 HandChord](#-handchord)
  - [Sumário](#sumário)
  - [Sobre o projeto](#sobre-o-projeto)
    - [O que o projeto faz](#o-que-o-projeto-faz)
  - [Tecnologias](#tecnologias)
  - [Como executar](#como-executar)
  - [Integrantes](#integrantes)
  - [Contexto acadêmico](#contexto-acadêmico)
  - [Licença](#licença)

---

## Sobre o projeto

O **HandChord** é um aplicativo web que usa a câmera do computador para reconhecer gestos das mãos e transformá-los em acordes musicais. A pessoa forma um gesto, o sistema identifica a combinação de dedos e o acorde correspondente é tocado na hora. Também é possível gravar a performance e revê-la depois em uma área pessoal.

**Ideia central:** a mão é o instrumento. Não há nada para instalar, nem instrumento físico para comprar: basta um navegador e uma câmera.

### O que o projeto faz

1. **Acesso à câmera** — o navegador pede permissão e o reconhecimento acontece no próprio dispositivo, sem enviar vídeo para servidores externos.
2. **Reconhecimento do gesto** — os pontos de referência dos dedos são identificados e cada combinação de dedos representa um acorde diferente.
3. **Som imediato** — o acorde identificado é tocado pelo navegador e aparece destacado na tela.
4. **Gravação** — áudio e vídeo da performance são gravados em tempo real.
5. **Área pessoal** — a pessoa reproduz, baixa ou exclui as gravações salvas.

---

## Tecnologias

- **HTML5** semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** com variáveis (custom properties), Flexbox, Grid e media queries (layout responsivo)
- **SVG** para ilustrações e ícones
- **Google Fonts** (Poppins e Roboto)
- **JavaScript** e **Local Storage**

Não há dependências nem etapa de build.

---

## Como executar

**Opção 1 — direto no navegador:** baixe o repositório e abra o `index.html`.

**Opção 2 — GitHub Pages (site):** `https://luizr-lima.github.io/handchord`

**Opção 3 — Live Server (recomendada):**

```bash
git clone [https://github.com/luizr-lima/handchord.git]
cd handchord
```

Abra a pasta no VS Code e clique em **Go Live** (extensão *Live Server*). Assim os links entre as páginas funcionam como no site publicado.

---

## Integrantes

Luiz Ricardo Lima |[`@luizr-lima`](#https://github.com/luizr-lima)

Marco Antonio Teodoro da Silva | [`@usuario`](#https://github.com/)

Vinicius Fernandes | [`@usuario`](#https://github.com/)

---

## Contexto acadêmico

Projeto desenvolvido na disciplina **Web Front-End** — Turma **AS62F 2026_02**.
Professor: Gabriel Canhadas Genvigir | [`@gabrielcanhadas`](#https://github.com/gabrielcanhadas)

---

## Licença

Distribuído sob a licença **MIT**. Veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.