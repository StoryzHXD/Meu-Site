# Meu Site - Portfolio Pessoal

Um portfólio pessoal moderno e responsivo criado com HTML, CSS e JavaScript para apresentar habilidades, projetos e informações profissionais de Hadrian (StoryzHXD).

## 📋 Estrutura do Projeto

```
Meu-Site/
├── index.html                 # Página principal (About Me)
├── conhecimentos.html         # Página de habilidades (Skills)
├── projetos.html              # Página de projetos (Projects)
├── README.md                  # Este arquivo
├── Code/
│   └── options.js             # Script de navegação e interatividade
├── Styles/
│   └── style.css              # Estilos CSS do site
├── Imagens/                   # Diretório de imagens (Icon.jpeg, etc)
└── Aúdios/                    # Diretório para arquivos de áudio
```

## 📄 Descrição Detalhada dos Arquivos

### **index.html** - Página Principal (About Me)
Esta é a página de entrada do portfólio. Funciona como a apresentação principal do desenvolvedor.

**Funcionalidades principais:**
- Exibe uma foto de perfil circular na barra lateral
- Apresenta informações pessoais e profissionais
- Contém um email de contato (hadriansouza@outlook.com)
- Mostra ícones de redes sociais interativas (Instagram, GitHub, YouTube, Discord, Twitch, Twitter)
- Cada ícone é um botão que redireciona para o perfil correspondente quando clicado
- Possui um menu de navegação lateral fixo com links para as outras páginas (ABOUT ME, SKILLS, PROJECTS)
- Implementa animações de fade-in para criar uma transição suave

**Estrutura:**
- `<head>`: Contém metadados, links para CSS e Font Awesome (ícones)
- `<aside>`: Seção lateral fixa com perfil e navegação
- `<main>`: Seção de conteúdo principal com informações pessoais

---

### **conhecimentos.html** - Página de Habilidades (Skills)
Esta página apresenta todas as habilidades técnicas do desenvolvedor.

**Funcionalidades principais:**
- Estrutura idêntica à página index.html (mesma barra lateral e navegação)
- Exibe uma lista organizada de linguagens de programação e ferramentas
- Título "SKILLS" com subtítulo "Programming Languages and Tools"
- Permite que o usuário conheça as competências técnicas do desenvolvedor
- Mantém a consistência visual com o resto do site

**Estrutura:**
- Layout com barra lateral fixa
- Seção de conteúdo principal para listar habilidades
- Mesmo sistema de navegação que outras páginas

---

### **projetos.html** - Página de Projetos
Esta página showcasa os projetos desenvolvidos pelo desenvolvedor.

**Funcionalidades principais:**
- Apresenta uma lista de projetos com descrição "Games where I provided services"
- Mantém a mesma estrutura de navegação das outras páginas
- Permite que visitantes vejam o portfólio de trabalhos realizados
- Usa a classe `projects-content` para conteúdo específico de projetos

**Estrutura:**
- Barra lateral com perfil e navegação
- Seção `projects-content` para exibição dos projetos

---

### **Styles/style.css** - Folha de Estilos
Define toda a aparência visual e responsividade do site.

**Componentes estilizados:**
- **Reset global**: Remove margens e paddings padrão, define `box-sizing: border-box`
- **Body**: Layout flexível com fundo gradiente (branco para cinza escuro)
- **Navegação lateral (.nav)**: 
  - Largura fixa de 250px
  - Posição fixa (fica visível ao rolar)
  - Gradiente de fundo preto para cinza escuro
  - Altura 100% da viewport
  
- **Seção de perfil (.profile-section)**:
  - Imagem de perfil circular (150px)
  - Centralizada com animação de transformação
  - Links de navegação com espaçamento
  - Transformações CSS para criar efeito visual
  
- **Animações**:
  - `fade-in`: Cria transição suave ao carregar conteúdo
  - `transform`: Anima a imagem e links ao carregarem
  
- **Responsividade**: Design adaptável para diferentes tamanhos de tela com media queries

**Cores e Temas:**
- Preto e cinza como cores principais
- Branco para texto na barra lateral
- Cinza (#333) para texto principal

---

### **Code/options.js** - Script de Navegação e Interatividade
Este arquivo JavaScript fornece toda a interatividade do site, especialmente a navegação entre páginas.

**Função principal: `navigate(url)`**
- Recebe a URL para a qual navegar
- Seleciona o elemento `<main>` ou `<div class="main-content">` / `<div class="projects-content">`
- Remove a classe `fade-in` do conteúdo atual
- Aguarda 300 milissegundos para a animação de saída completar
- Redireciona o usuário para a nova página
- Se não houver elemento com a classe correta, redireciona diretamente

**Função de inicialização: `window.onload`**
- Executada quando a página finalmente carrega
- Seleciona o elemento de conteúdo principal
- Adiciona a classe `fade-in` para criar a animação de entrada
- Cria uma transição visual suave ao entrar em uma página

**Fluxo de interação:**
1. Usuário clica em um botão de navegação (ABOUT ME, SKILLS, PROJECTS)
2. Chama a função `navigate()` com a URL da página desejada
3. Conteúdo atual desaparece com fade-out (300ms)
4. Nova página é carregada
5. Novo conteúdo aparece com fade-in ao carregar

---

### **Diretório Imagens/**
Armazena todos os arquivos de imagem do site.

**Arquivos principais:**
- `Icon.jpeg`: Imagem de perfil circular do desenvolvedor
  - Usada na barra lateral (150px)
  - Usada como favicon (ícone da aba do navegador)
  - Referenciada em todos os arquivos HTML

**Função**: Centraliza e organiza todos os assets gráficos do site

---

### **Diretório Aúdios/**
Diretório reservado para armazenar arquivos de áudio.

**Uso potencial:**
- Podcasts ou explicações em áudio
- Efeitos sonoros
- Trilhas sonoras para portfólio
- Apresentações em vídeo com áudio

**Status atual**: Diretório vazio, pronto para receber conteúdo

---

## 🎨 Fluxo de Funcionamento Geral

1. **Carregamento inicial (index.html)**
   - HTML estrutura a página com navegação e conteúdo
   - CSS estiliza e posiciona elementos
   - JavaScript adiciona animação de fade-in

2. **Interação do usuário**
   - Usuário clica em botão de navegação
   - JavaScript remove fade-in e aguarda 300ms
   - Página nova é carregada
   - JavaScript adiciona fade-in ao novo conteúdo

3. **Navegação em redes sociais**
   - Usuário clica em ícone de rede social
   - JavaScript abre o perfil em nova aba

## 🚀 Como Usar

1. Abra `index.html` no navegador
2. Use os botões de navegação na lateral para acessar outras páginas
3. Clique nos ícones de redes sociais para acessar perfis
4. Personalize conteúdo em cada arquivo HTML conforme necessário

## 💻 Recursos Utilizados

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos avançados com gradientes e transformações
- **JavaScript (Vanilla)**: Interatividade e navegação
- **Font Awesome 6.4.0**: Ícones de redes sociais
- **Design Responsivo**: Adaptável para diferentes dispositivos
