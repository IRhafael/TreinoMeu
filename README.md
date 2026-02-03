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

## 📦 Arquivos do Projeto

```
treino-tracker/
├── index.html          # App principal (React standalone)
├── manifest.json       # Configuração PWA
├── sw.js              # Service Worker (offline)
├── icon-192.png       # Ícone 192x192
├── icon-512.png       # Ícone 512x512
└── README.md          # Este arquivo
```

## 🌐 Como Publicar no GitHub Pages

### 1. Criar Repositório
```bash
# No seu computador
git init
git add .
git commit -m "Initial commit - Treino Tracker Pro"
```

### 2. Subir para o GitHub
```bash
# Crie um repositório no GitHub e depois:
git remote add origin https://github.com/SEU-USUARIO/treino-tracker.git
git branch -M main
git push -u origin main
```

### 3. Ativar GitHub Pages
1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione `main` branch
3. Clique em **Save**
4. Aguarde alguns minutos

Seu app estará em: `https://SEU-USUARIO.github.io/treino-tracker/`

## 📱 Como Instalar no Celular

### Android (Chrome)
1. Abra o site no Chrome
2. Toque nos **3 pontos** (menu)
3. Selecione **"Instalar app"** ou **"Adicionar à tela inicial"**
4. Confirme a instalação

### iPhone (Safari)
1. Abra o site no Safari
2. Toque no botão **Compartilhar** (quadrado com seta)
3. Role e selecione **"Adicionar à Tela de Início"**
4. Toque em **"Adicionar"**

## 💡 Dicas de Uso

### Registro de Cargas
1. No campo pequeno ao lado de "Séries" e "Reps", digite o peso usado
2. Exemplo: `20` para 20kg
3. As cargas ficam salvas e você pode ver todas na aba **Estatísticas**
4. Use para progressão: tente aumentar um pouco a cada semana!

### Cronômetro de Treino
1. Clique em **"INICIAR TREINO"** quando começar
2. O timer fica rodando no topo
3. Ao finalizar, clique em **"Finalizar Treino de Hoje"**
4. Seus dados vão para o histórico

### Timer de Descanso
1. Depois de cada série, clique em **"Iniciar"** no timer flutuante
2. O celular vai vibrar quando acabar
3. Receba notificação (se permitido)

### Calculadoras
1. Vá na aba **Perfil** (ícone de pessoa)
2. Digite seu peso e altura
3. Veja automaticamente seu IMC e necessidade de água

## 🎨 Personalização

### Mudar Cores
No `index.html`, procure por:
- `#10b981` (verde principal)
- `#06b6d4` (ciano)
- `#0f172a` (azul escuro)

### Adicionar Exercícios
No objeto `workoutData`, adicione novos exercícios:
```javascript
{
  name: "Novo Exercício",
  sets: 4,
  reps: "10-12",
  obs: "Observação aqui"
}
```

### Mudar Timer de Descanso
Procure por `setTimeLeft(60)` e mude o `60` para o tempo desejado em segundos.

## 🐛 Solução de Problemas

**Notificações não funcionam?**
- Permita notificações no navegador
- No Chrome: Configurações → Permissões do site

**App não instala?**
- Use Chrome (Android) ou Safari (iOS)
- Certifique-se que está em HTTPS (GitHub Pages já é)

**Dados perdidos?**
- Os dados ficam no localStorage do navegador
- Não limpe os dados do site
- Faça backup exportando o histórico (futura feature)

## 📊 Tecnologias

- **React 18**: Interface reativa
- **Tailwind CSS**: Estilização moderna
- **Chart.js**: Gráficos de progresso
- **Service Worker**: Funcionamento offline
- **Web APIs**: Vibração, Notificações, localStorage

## 📝 Licença

Livre para uso pessoal. Fique grande! 💪

## 🤝 Contribuições

Sinta-se livre para modificar e melhorar o app para suas necessidades!

---

**Bons treinos! 🏋️‍♂️**
