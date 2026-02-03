# 💪 Treino Tracker Pro

App completo de acompanhamento de treinos com PWA, registro de cargas, gráficos e calculadoras de saúde.

## 🚀 Funcionalidades

### ✅ Funcionalidades Originais
- ✅ Timer de descanso entre séries (60s)
- ✅ Marcação de séries concluídas
- ✅ Cronômetro do treino completo
- ✅ Histórico de treinos
- ✅ Persistência com localStorage
- ✅ Links para vídeos no YouTube
- ✅ Treino estruturado (Push/Pull/Legs + Upper Body)
- ✅ Design mobile-first

### 🆕 Novas Funcionalidades

#### 📊 Análise e Progresso
- **Gráficos de Evolução**: Visualize duração e exercícios dos últimos 7 treinos
- **Estatísticas**: Total de treinos e média de duração
- **Histórico Detalhado**: Data, hora, duração e exercícios de cada treino

#### 🏋️ Registro de Cargas
- **Campo de Peso**: Anote a carga usada em cada exercício
- **Histórico de Cargas**: Veja todas as cargas registradas para aumentar progressivamente
- **Persistência**: Cargas salvas automaticamente no localStorage

#### 🏥 Calculadoras de Saúde
- **Calculadora de IMC**: Índice de Massa Corporal com categorização
- **Calculadora de Água**: Recomendação diária baseada no peso (35ml/kg)
- **Perfil Completo**: Suas informações e objetivos do treino

#### 📱 PWA (Progressive Web App)
- **Instalável**: Adicione à tela inicial do celular
- **Funciona Offline**: Use mesmo sem internet
- **Notificações**: Alerta quando o descanso acabar
- **Vibração**: Feedback háptico no celular
- **Ícone Personalizado**: Logo bonito na tela inicial
---

## Tecnologias Utilizadas

- React 18 (via CDN e Babel standalone)
- Tailwind CSS (CDN)
- Chart.js (CDN)
- Service Worker (cache offline)
- Web APIs: localStorage, Notification, Vibration

---

## Como Usar

1. Abra o `index.html` em um navegador moderno (Chrome, Edge, Safari).
2. O app funciona 100% local, sem backend.
3. Para instalar como app, acesse pelo celular e siga as instruções abaixo.

### Instalação no Celular

**Android (Chrome):**
1. Abra o site
2. Menu (3 pontos) → "Instalar app" ou "Adicionar à tela inicial"

**iPhone (Safari):**
1. Abra o site
2. Compartilhar → "Adicionar à Tela de Início"

---

## Publicação no GitHub Pages

1. Crie um repositório no GitHub
2. Suba os arquivos do projeto
3. Vá em Settings → Pages → selecione branch `main` → Save
4. O app estará disponível em `https://SEU-USUARIO.github.io/NOME-REPO/`

---

## Personalização

- **Cores:** Edite os valores no CSS do `index.html` (`#10b981`, `#06b6d4`, `#0f172a`)
- **Exercícios:** Adicione no objeto `workoutData` dentro do script do `index.html`:
  ```js
  { name: "Novo Exercício", sets: 4, reps: "10-12", obs: "Observação" }
  ```
- **Timer de descanso:** Altere o valor inicial de `restTimer` no script do `index.html`.

---

## Dicas de Uso

- Registre o peso usado em cada exercício para acompanhar sua evolução.
- Use o timer de descanso para controlar intervalos entre séries.
- Finalize o treino para salvar no histórico e gerar estatísticas/gráficos.
- Preencha seu perfil para calcular IMC e recomendação de água.
- Exporte/importe dados para backup manual.

---

## Solução de Problemas

- **Notificações não funcionam?** Permita no navegador.
- **App não instala?** Use Chrome (Android) ou Safari (iOS) e acesse via HTTPS.
- **Dados perdidos?** Os dados ficam no localStorage. Não limpe os dados do site. Use exportação/importação para backup.

---

## Licença

Uso livre para fins pessoais. Modifique à vontade!

---

**Bons treinos! 💪🏋️**
