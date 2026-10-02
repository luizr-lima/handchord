# HandChord

Aplicativo web que reconhece gestos das mãos pela câmera do computador e os transforma em acordes musicais, com cadastro de usuário e área pessoal para gerenciar performances.

Projeto acadêmico da disciplina **Web Front-End** — Turma AS62F 2026_02.

## Status atual

Este repositório cobre as etapas **1 a 4** do cronograma do projeto:

| Etapa | Descrição | Status |
|---|---|---|
| 1 | Planejamento, identidade visual e estrutura HTML | ✅ |
| 2 | Desenvolvimento da Home e navegação | ✅ |
| 3 | Desenvolvimento das páginas de cadastro e login | ✅ |
| 4 | Desenvolvimento do CSS e responsividade | ✅ |
| 5 | JavaScript e Local Storage | ⏳ próxima etapa |
| 6 | Performances e recursos de áudio/câmera | ⏳ |
| 7 | Testes, GitHub Pages e documentação | ⏳ |

Por isso `js/` está vazia e as páginas `performance.html`, `performances.html` e `admin.html` ainda não existem — pertencem às etapas 5 e 6.

## Como visualizar

Não há dependências. Basta abrir `index.html` no navegador, ou usar a extensão **Live Server** do VS Code para navegar entre as páginas com os links funcionando normalmente.

## Estrutura das páginas

- **Home (`index.html`)** — tela de entrada única, sem menu: título, chamada e três ações diretas (Começar agora, Como funciona?, Já tenho uma conta). Tem um anel sonoro animado em SVG atrás do texto.
- **Como Funciona (`como-funciona.html`)** — os 6 passos do processo, do acesso à câmera até a gravação da performance.
- **Login (`login.html`)** e **Cadastro (`cadastro.html`)** — formulários de autenticação.

O cabeçalho com menu (Início, Como funciona e um botão de ação) aparece em todas as páginas **exceto a Home**, que funciona como uma tela de abertura mais limpa — decisão intencional para reforçar o primeiro contato com a marca.

## Identidade visual

**Conceito:** paleta escura com três cores de destaque (violeta, ciano e coral), como se cada uma fosse a "luz" de um gesto diferente. Na Home, essa ideia aparece no anel sonoro em SVG que pulsa atrás do título, representando o som saindo do gesto.

**Cores:**
| Uso | Cor | Hex |
|---|---|---|
| Fundo principal | Ink | `#0B0D17` |
| Fundo de seção alternada | Ink 2 | `#14172A` |
| Cartões e elementos elevados | Ink 3 | `#1D2138` |
| Texto principal | Off-white | `#EEF0FA` |
| Texto secundário | Cinza-azulado | `#9CA1BE` |
| Destaque 1 (ações principais) | Violeta | `#8B5CF6` |
| Destaque 2 (tecnologia/links) | Ciano | `#22D3EE` |
| Destaque 3 (variação/energia) | Coral | `#FB7185` |

**Fontes:** carregadas via Google Fonts em todas as páginas.
- **Poppins** (peso 500–700) para títulos.
- **Roboto** (peso 400–500) para textos e formulários.

## Estrutura de pastas

```
handchord/
├── index.html
├── login.html
├── cadastro.html
├── como-funciona.html
├── css/
│   ├── style.css        → tokens, reset, header, footer, cartões e formulário (compartilhado)
│   ├── home.css          → hero, anel em SVG e animações da Home
│   ├── login.css         → ajustes específicos do login
│   ├── cadastro.css      → ajustes específicos do cadastro
│   └── como-funciona.css → ajustes específicos da página Como Funciona
├── js/                   → reservado para a etapa 5
├── assets/
│   ├── images/
│   ├── icons/
│   └── audio/
├── LICENSE               → MIT
└── README.md
```

Os estilos compartilhados (variáveis de cor, tipografia, cabeçalho, rodapé, cartões e componentes de formulário) ficam centralizados em `style.css`. Cada página só sobrescreve o que é específico dela.

## Ajustes feitos nesta revisão

- A Home tinha um botão de menu (☰) sem nenhum menu para abrir, sobrando de uma versão anterior — removido, já que a Home não usa cabeçalho com navegação.
- O título "HandChord" da Home tinha sido removido durante edições manuais, deixando a página sem nenhum `<h1>` — restaurado como o único título da página (boa prática de acessibilidade/SEO: uma página, um `<h1>`).
- O menu das páginas internas estava inconsistente: `login.html` usava "Home" enquanto `cadastro.html` e `como-funciona.html` usavam "Início", e só uma das três tinha um botão de ação no menu. Agora as três seguem o mesmo padrão: **Início**, **Como funciona** e um botão contextual (`Cadastre-se` no login, `Entrar` no cadastro e em Como Funciona).
- Adicionado um leve brilho no hover do botão principal, usado em todas as páginas.
