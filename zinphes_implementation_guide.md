# Zinphes - Guia de Estilo para Widgets

Siga este guia de estilos para ajustar os estilos visuais dos widgets presentes nas seguintes pastas a partir dessa:
- youtube-music-widget 
- multistream-alerts
- multichat-overlay

## 🎯 Resumo da Identidade Visual
Estilo nostálgico-alternativo com estética CRT aprimorada dos anos 2000. Foco em contraste elevado, efeitos visuais sutis mas impactantes, gradientes atmosféricos e tipografia monospace expressiva.

## 🎨 Paletas de Cores

### Paleta Principal (Azul)
- **Fundo Principal:** `#0f0f23`
- **Fundo Secundário:** `#1a1a2e`  
- **Bordas/Divisões:** `#333366`
- **Destaque Principal:** `#7aa3ff`
- **Texto Principal:** `#cccccc`
- **Texto Secundário:** `#888888`

### Paleta Verde-Ciano
- **Fundo Principal:** `#0a0f14`
- **Fundo Secundário:** `#151e26`
- **Bordas/Divisões:** `#2d4a52`  
- **Destaque Principal:** `#66d9a3`
- **Texto Principal:** `#c5d6d6`
- **Texto Secundário:** `#7a8a8a`

### Paleta Rosa-Roxo  
- **Fundo Principal:** `#1a0f1a`
- **Fundo Secundário:** `#2a1a2a`
- **Bordas/Divisões:** `#4a334a`
- **Destaque Principal:** `#ff6b9d`
- **Texto Principal:** `#d6c5d6`
- **Texto Secundário:** `#8a7a8a`

## 🔤 Tipografias

### Fontes Google Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
```

### Hierarquia de Uso
- **Texto Principal/Corpo:** `'JetBrains Mono', monospace`
- **Cabeçalhos/Menu:** `'Orbitron', monospace`  
- **Destaques/Nomes:** `'Space Mono', monospace`
- **Fallback:** `monospace`

## 📐 Sistema de Espaçamento
- **Padding interno widgets:** `20px`
- **Gaps entre elementos:** `15px` (grandes), `8px` (pequenos) 
- **Margens entre widgets:** `20px`
- **Border radius padrão:** `4px` (--corner-radius) para consistência
- **Elementos específicos:** `50%` (avatares), `4px` (barras de progresso)

## 🎨 Efeitos Visuais

### Sistema CRT Aprimorado
**Scanlines Coloridas (versão melhorada):**
```css
.crt-scanlines::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 0, 76, 0.03) 2px,
    rgba(0, 255, 255, 0.03) 4px
  );
  pointer-events: none;
  z-index: 10;
  border-radius: var(--corner-radius);
}
```

**Vinheta CRT:**
```css
.crt-scanlines::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 30%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
  z-index: 11;
  border-radius: var(--corner-radius);
}
```

**Animação de Cintilação CRT:**
```css
.crt-flicker {
  animation: crt-random-flicker 4s infinite, crt-flicker 0.5s infinite linear alternate;
}

@keyframes crt-flicker {
  0% { opacity: 1; }
  98% { opacity: 1; }
  99% { opacity: 0.96; }
  100% { opacity: 0.92; }
}
```

### Text Shadow Aprimorado
**Títulos e usernames:**
```css
text-shadow: 0 0 10px rgba(122, 163, 255, 0.8);
```

**Textos gerais com profundidade:**
```css
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
```

### Gradientes Atmosféricos
**Fundo principal widgets:**
```css
background: linear-gradient(135deg, rgba(15, 15, 35, 0.9), rgba(26, 26, 46, 0.9));
```

**Background com blur para contexto:**
```css
background: linear-gradient(135deg, 
  rgba(15, 15, 35, 0.4), 
  rgba(26, 26, 46, 0.2)
);
```

### Drop Shadows Profundos
**Containers principais:**
```css
filter: drop-shadow(0px 5px 8px rgba(0, 0, 0, 1));
```

**Elementos menores:**
```css
filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.5));
```

## 🔔 Especificações por Widget

### Widget de Alertas (multistream-alerts)
**Estilo Geral:**
- Container: `linear-gradient(135deg, rgba(15, 15, 35, 0.9), rgba(26, 26, 46, 0.9))`
- Drop shadow: `drop-shadow(0px 5px 8px rgba(0, 0, 0, 1))`
- Border radius: `4px` (--corner-radius)
- Layout flexível com duas fases de exibição
- Animações suaves de slide e fade

**Cores por Plataforma (específicas):**
```css
--twitch-primary: #9146ff;
--youtube-primary: #ff4444;
--kick-primary: #66d9a3;
--kofi-primary: #ff6b9d;
```

**Username styling por plataforma:**
```css
.twitch #username { 
  color: var(--twitch-primary); 
  text-shadow: 0 0 10px rgba(145, 70, 255, 0.8); 
}
```

**Elementos visuais:**
- Avatar principal: `4em` altura com `drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.5))`
- Avatar compacto: `2em` altura
- Username: Font `'Space Mono'`, weight 700, com glow específico por plataforma  
- Descrição: Font `'JetBrains Mono'`, cor `var(--text-primary)`

### Widget de Chat
**Estilo Geral:**
- Cabeçalho: Centralizado com divisor, fonte Orbitron
- Formato: `------ CHAT ------`
- Background: Semi-transparente com baixa opacidade
- Borda: Sutil, cor de borda padrão

**Estrutura de Mensagem:**
- Avatar: Círculo 20px com emoji/ícone
- Timestamp: Cor de destaque, formato `8:45AM`
- Username: Cor de destaque, weight 700
- Conteúdo: Identado, cor de texto principal
- Espaçamento vertical: 12px entre mensagens

### Widget Now Playing (youtube-music-widget)
**Container Principal:**
- Background: `linear-gradient(135deg, var(--bg-primary), var(--bg-secondary))`
- Drop shadow: `drop-shadow(0px 0px 7px rgba(0, 0, 0, 1))`
- Border radius: `var(--corner-radius)`
- Layout horizontal flexível

**Album Art:**
- Tamanho: `var(--album-art-size)` (padrão 100px)
- Background: `rgba(26, 26, 46, 0.9)`
- Border radius: `var(--corner-radius)`
- Object-fit: cover para proporção correta

**Info Box:**
- Background: `linear-gradient(135deg, rgba(15, 15, 35, 0.9), rgba(26, 26, 46, 0.9))`
- CRT scanlines internas com opacidade 0.2
- Padding: `20px`
- Text shadow geral: `0 0 10px rgba(0, 0, 0, 0.8)`

**Background dinâmico:**
- Imagem de fundo com `blur(20px)` e múltiplas camadas
- Overlay gradiente: `rgba(15, 15, 35, 0.4)` para `rgba(26, 26, 46, 0.2)`
- Respeitando border-radius do container

**Elementos de Música:**
- **Título:** Font `'Space Mono'`, weight 700, cor `var(--accent-primary)`, glow azul
- **Artista:** Font `'JetBrains Mono'`, weight 400, cor `var(--text-secondary)`
- **Progress bar:** 
  - Background: `var(--bg-borders)`
  - Fill: `linear-gradient(90deg, var(--accent-primary), rgba(122, 163, 255, 0.8))`
  - Box shadow: `0 0 10px rgba(122, 163, 255, 0.5)`
- **Tempo:** Font `'JetBrains Mono'`, weight 500, cor `var(--text-secondary)`

## ⚡ Animações e Transições

### Animações Aprimoradas
- **Fade principal:** `fadeIn 0.5s ease-in-out`
- **Transições suaves:** `all 0.5s ease` para mudanças de estado
- **Progresso:** `all 1s ease` para barras de progresso
- **CRT flicker:** Combinação de animações para realismo

### Keyframes de Movimento
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in-from-top {
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slide-out-bottom {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}
```

### Sistema de Status
```css
@keyframes statusConnected {
  0% { opacity: 1; background-color: #2FB774; }
  100% { opacity: 0; background-color: #2FB774; }
}
```

## 🔧 Diretrizes de Implementação

### Prioridades na Edição
1. **Variáveis CSS:** Implementar sistema de custom properties (--corner-radius, --bg-primary, etc.)
2. **Gradientes atmosféricos:** Aplicar backgrounds em camadas com transparências adequadas
3. **Drop shadows:** Implementar sombras profundas para profundidade visual
4. **Sistema CRT completo:** Scanlines coloridas + vinheta + flicker opcional
5. **Text shadows específicos:** Diferentes estilos para hierarquia de texto
6. **Border radius consistente:** Usar `var(--corner-radius)` em todos os elementos

### Estrutura de Background Dinâmico
Para widgets com conteúdo visual (como album art):
1. **Imagem de background:** Blurred, opacidade reduzida, posição absoluta
2. **Overlay gradiente:** Para manter legibilidade
3. **Container principal:** Com transparência e CRT effects
4. **Conteúdo:** Z-index apropriado para sobreposição

### Sistema de Cores por Contexto
- **Plataformas específicas:** Usar variáveis CSS específicas por plataforma
- **Fallback universal:** Sempre ter cores padrão do sistema Zinphes
- **Text shadows coordenados:** Acompanhar a cor principal do elemento

### CRT Effects Togglable
**IMPORTANTE:** Sempre implementar efeitos CRT como opcionais via query parameter:
```javascript
const urlParams = new URLSearchParams(window.location.search);
const crtEffect = urlParams.has('crtEffect');

if (crtEffect) {
    document.body.classList.add('crt-scanlines', 'crt-flicker');
}
```

### Responsividade
- **Unidades relativas:** Preferir `em` para elementos que escalam juntos
- **Flexbox:** Para layouts que se adaptam naturalmente
- **Media queries:** Apenas quando necessário para ajustes críticos

### Performance
- **Limit z-index:** Manter hierarquia clara (conteúdo: 1-10, CRT: 100+)
- **Transform compositing:** Usar `transform` em vez de position para animações
- **Minimize reflows:** Evitar mudanças de layout durante animações