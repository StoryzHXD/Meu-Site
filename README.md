# Meu Site - Portfolio Pessoal

Um portfólio pessoal moderno e responsivo criado com HTML, CSS e JavaScript para apresentar habilidades, projetos e informações profissionais de Hadrian (StoryzHXD).

## 📋 Estrutura do Projeto

```
Meu-Site/
├── index.html                 # Página inicial (redirecionador para loading.html)
├── loading.html               # Tela de carregamento (splash screen - aparece uma única vez)
├── AboutMe.html               # Página sobre mim (formerly index.html)
├── Skills.html                # Página de habilidades (formerly conhecimentos.html)
├── Projects.html              # Página de projetos (formerly projetos.html)
├── README.md                  # Este arquivo
├── Code/
│   ├── loading.js             # Script para gerenciar tela de carregamento
│   └── options.js             # Script de navegação e interatividade
├── Styles/
│   └── style.css              # Estilos CSS do site
├── Imagens/                   # Diretório de imagens (Icon.jpeg, etc)
└── Aúdios/                    # Diretório para arquivos de áudio (My-mind.mp3)
```

## 📄 Descrição Detalhada dos Arquivos

### **index.html** - Página Inicial (Redirecionador)
Esta é a primeira página acessada ao entrar no site.

**Funcionalidades principais:**
- Redireciona automaticamente para `loading.html`
- Serve como landing page do site
- Garante que a splash screen apareça apenas uma vez

**Estrutura:**
- Redirecção JavaScript simples para `loading.html`

---

### **loading.html** - Tela de Carregamento (Splash Screen)
Esta é a tela de boas-vindas que aparece apenas uma única vez.

**Funcionalidades principais:**
- **Tela interativa com animações:**
  - Fundo com gradiente de preto para cinza escuro (sem transparência)
  - Título "StoryzHXD" com animação de brilho (glow) em verde e ciano
  - Apresenta 3 pontos animados em bounce como indicador de carregamento
  - **Cooldown de 3 segundos** antes de redirecionar automaticamente
  - Simula um carregamento real do site

- **Comportamento:**
  - Aparece apenas uma única vez ao acessar o site
  - Aguarda 3 segundos (sem necessidade de interação do usuário)
  - Após 3 segundos, redireciona automaticamente para `AboutMe.html`
  - Tela desaparece com fade-out suave (0.6s) após iniciar o redirecionamento
  - A música começa a tocar após a splash screen desaparecer

**Estrutura:**
- `<head>`: Contém metadados, links para CSS e Font Awesome
- `<div id="loadingScreen">`: Tela de carregamento interativa com animações

---

### **AboutMe.html** - Página Sobre Mim
Esta é a página de entrada do portfólio após a splash screen. Funciona como a apresentação principal do desenvolvedor.

**Funcionalidades principais:**
- Exibe uma foto de perfil circular na barra lateral
- Apresenta informações pessoais e profissionais
- Contém um email de contato (hadriansouza@outlook.com)
- Mostra ícones de redes sociais interativas (Instagram, GitHub, YouTube, Discord, Twitch, Twitter)
- Cada ícone é um botão que redireciona para o perfil correspondente
- Possui um menu de navegação lateral fixo com links para as outras páginas
- Implementa animações de fade-in para criar uma transição suave
- Botão de controle de volume para ativar/desativar a música de fundo

**Estrutura:**
- `<audio>`: Elemento de áudio para tocar música em background
- `<aside>`: Seção lateral fixa com perfil e navegação
- `<main>`: Seção de conteúdo principal com informações pessoais

---

### **Skills.html** - Página de Habilidades
Esta página apresenta todas as habilidades técnicas do desenvolvedor.

**Funcionalidades principais:**
- Exibe uma lista organizada de linguagens de programação e ferramentas
- Título "SKILLS" com subtítulo "Programming Languages and Tools"
- Ícones visuais das tecnologias (Python, HTML, CSS, JavaScript, Database, etc)
- Lista de habilidades específicas (API Luau, SQL, ORMs, MVC, Agile, Scrum)
- Permite que o usuário conheça as competências técnicas do desenvolvedor
- Mantém a consistência visual com o resto do site

**Estrutura:**
- `<audio>`: Elemento de áudio para tocar música em background
- `<aside>`: Seção lateral fixa com perfil e navegação
- `<div class="main-content">`: Seção de conteúdo principal com skills

---

### **Projects.html** - Página de Projetos
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

- **Tela de Carregamento (.loading-screen)**:
  - Cobre toda a viewport (100% width/height)
  - Fundo com gradiente preto (135deg)
  - Z-index 9999 para ficar acima de tudo
  - Cursor pointer para indicar clicabilidade
  - Animações: fadeIn (entrada), fadeOut (saída)

- **Conteúdo da Tela (.loading-content)**:
  - Título "StoryzHXD" com gradiente verde-ciano
  - Animação de brilho (glow) contínua
  - Texto "Click Here!" com animação de pulse
  - 3 pontos com animação bounce (um de cada vez)
  - Todos os elementos com efeitos de sombra e brilho

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

- **Botão de áudio (.audio-btn)**:
  - Botão circular (50px x 50px) posicionado na barra lateral
  - Ícone de volume (Font Awesome)
  - Borda com transparência que fica verde quando áudio está tocando
  - Efeito hover: escalona e muda a cor da borda
  - Estados: padrão (cinza/mudo) e playing (verde/tocando)
  - Transição suave entre estados
  
- **Animações**:
  - `fadeIn`: Cria transição suave ao carregar conteúdo
  - `fadeOut`: Remove tela de carregamento com fade suave
  - `glow`: Brilho contínuo no título da splash screen
  - `pulse`: Piscante no texto "Click Here!"
  - `bounce`: Salto dos 3 pontos de carregamento
  - `transform`: Anima a imagem e links ao carregarem
  - `playing`: Muda cor para indicar áudio tocando
  
- **Responsividade**: Design adaptável para diferentes tamanhos de tela com media queries

**Cores e Temas:**
- Preto e cinza como cores principais
- Branco para texto na barra lateral
- Cinza (#333) para texto principal
- Verde (#00ff00) e ciano (#00ccff) para gradiente do título de loading
- Verde (#00ff00) para indicar áudio tocando

---

### **Code/loading.js** - Script da Tela de Carregamento
Este arquivo JavaScript gerencia toda a lógica da tela de carregamento (splash screen).

**Função de redirecionamento: `redirectToAboutMe()`**
- Remove a tela de carregamento adicionando a classe `hidden`
- Ativa a animação de fade-out suave
- Aguarda 600ms (duração da animação) antes de redirecionar
- Redireciona para `AboutMe.html` após a fade-out completar

**Função de inicialização: `window.onload`**
- Executada quando a página de loading carrega
- Define um timer de **3 segundos** antes de iniciar o redirecionamento
- Simula um carregamento real do site
- Chamaa `redirectToAboutMe()` após os 3 segundos

**Fluxo de interação:**
1. Usuário acessa index.html → redireciona para loading.html
2. loading.html carrega com a splash screen animada
3. JavaScript aguarda 3 segundos (cooldown de carregamento)
4. Após 3 segundos: classe `hidden` é adicionada → fade-out (0.6s)
5. Após o fade-out: página redireciona para AboutMe.html
6. Música começa a tocar automaticamente

---

### **Code/options.js** - Script de Navegação e Interatividade
Este arquivo JavaScript fornece toda a interatividade do site, especialmente a navegação entre páginas e controle de áudio.
- Tenta fazer play do áudio automaticamente
- Se conseguir: atualiza o ícone e cor do botão
- Se o navegador bloquear autoplay: aguarda primeira interação do usuário

**Função de inicialização: `window.onload`**
- Executada quando a página finalmente carrega
- Seleciona elementos de conteúdo e adiciona a classe `fade-in`
- Configura listener de clique na tela de carregamento
- Ao clicar, chama `removeLoadingScreen()` que dispara as animações
- Inicia o autoplay de áudio após a splash screen desaparecer

**Fluxo de interação na splash screen:**
1. Página carrega → Tela de carregamento aparece
2. JavaScript configura listener de clique
3. Usuário clica em qualquer lugar
4. Função `removeLoadingScreen()` é chamada
5. Classe `hidden` é adicionada → fade-out (0.6s)
6. Após 200ms: música começa a tocar
7. Conteúdo principal é revelado

**Fluxo de navegação:**
1. Usuário clica em um botão de navegação (ABOUT ME, SKILLS, PROJECTS)
2. Chama a função `navigate()` com a URL da página desejada
3. Conteúdo atual desaparece com fade-out (300ms)
4. Nova página é carregada
5. Novo conteúdo aparece com fade-in ao carregar
6. Áudio continua tocando (se estava ativo) ou permanece pausado

**Interação com áudio:**
1. Usuário clica no botão de áudio na barra lateral
2. Chama a função `toggleAudio()`
3. Se áudio está pausado: toca, muda ícone para volume alto, fica verde
4. Se áudio está tocando: pausa, muda ícone para mudo, fica cinza
5. Estado é salvo e persistido ao navegar

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
Armazena arquivos de áudio que tocam em background enquanto o usuário navega pelo site.

**Arquivos principais:**
- `My-mind.mp3`: Trilha sonora de fundo que toca continuamente enquanto as páginas estão abertas
  - Toca em loop infinito
  - Pode ser ativada/desativada através do botão de controle de volume
  - Estado é persistido ao navegar entre páginas

**Funcionalidade:** 
- O áudio toca de forma contínua e em loop enquanto o usuário está navegando
- Um botão de controle de volume fica disponível na barra lateral
- Ícone muda entre 🔊 (tocando) e 🔇 (pausado)
- Preferência do usuário é salva localmente para manter o estado ao navegar

---

## 🎨 Fluxo de Funcionamento Geral

### **Primeira Visita ao Site**
1. **Acesso inicial:**
   - Usuário acessa o site e é redirecionado para `index.html`
   - `index.html` redireciona automaticamente para `loading.html`
   - `loading.html` exibe a tela de carregamento com animações

2. **Tela de Carregamento (Splash Screen):**
   - Uma tela elegante aparece com fundo transparente e blur
   - Nome "StoryzHXD" aparece com animação de brilho (glow)
   - Texto "Click Here!" pisca no centro indicando interatividade
   - Três pontos animados fazem bounce como indicador
   - Tela é clicável em qualquer lugar

3. **Após clicar na splash screen:**
   - Tela desaparece com fade-out suave (0.6s)
   - Redirecionamento para `AboutMe.html`
   - Música começa a tocar automaticamente
   - Página "About Me" é exibida com fade-in

### **Navegação Entre Páginas**
1. **Usuário clica em um botão de navegação:**
   - Opções: ABOUT ME, SKILLS, PROJECTS
   - Chama a função `navigate()` com a URL desejada
   - Redireciona para AboutMe.html, Skills.html ou Projects.html

2. **Transição de página:**
   - Conteúdo atual desaparece com fade-out (300ms)
   - Nova página é carregada
   - Novo conteúdo aparece com fade-in

3. **Continuidade de áudio:**
   - Áudio continua tocando ao navegar
   - Estado é mantido (tocando ou pausado)
   - Preferência do usuário é persistida

### **Tela de Carregamento (Splash Screen) - Apenas Uma Vez**
1. **Ao abrir o site:**
   - A splash screen aparece apenas na primeira visita (`loading.html`)
   - Após clicar, o usuário vai para `AboutMe.html`
   - Se o usuário recarregar a página, volta para index.html → loading.html
   - A splash screen SEMPRE aparece como primeira página

**Vantagem desta abordagem:**
- Separação clara entre splash screen e conteúdo
- loading.html é dedicado apenas à tela de boas-vindas
- AboutMe.html, Skills.html, Projects.html são livres de gerenciar a splash screen
- Estrutura é mais limpa e organizada

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
s