*Change language:* [![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/fabramattos/Arpeggio_Frontend)<br>
# 🎧 Arpeggio Frontend 🎧
**Arpeggio** é um aplicativo web de comparação de streamings de áudio.<br>
Com ele, o usuário pode:<br>
- ☑️ consultar o número de lançamentos (Álbuns, Singles e EPs) de um artista ou banda, presentes nos streamings.<br>
- ☑️ consultar o número de episódios de um Podcast, presentes nos streamings.<br>
- ❎ terminar uma partida de Uno sem brigar com demais jogadores.<br>

No momento, conectamos com:
- **Música:** Spotify, Deezer, Tidal, YouTube Music e Apple Music.
- **Podcasts:** Spotify, Deezer e Apple Podcasts.

🚨 **_Este repositório é relativo ao Frontend Web. O repositório da API Backend está disponível em: [fabramattos/Arpeggio_Backend-API](https://github.com/fabramattos/Arpeggio_Backend-API)_** 🚨

## 🚧 Status do projeto 🚧
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## 🚀 Stack 🚀
 - HTML5 & CSS3 (Interface moderna em Glassmorphism, Neon Glow e Dark Theme)
 - JavaScript Vanilla (ES Modules e Fetch API)
 - Vite 5 (Servidor de desenvolvimento rápido e bundler de produção)
 - Vercel (Configurado com proxy reverso e reescrita de rotas para evitar CORS)

## 📖 Como Executar 📖

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- npm (Node Package Manager)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/fabramattos/Arpeggio_Frontend.git
cd Arpeggio_Frontend

# Instale as dependências
npm install
```

### Executando Localmente
Você pode executar o frontend conectado a uma instância local do backend ou diretamente à API em produção no Railway:

- **Conectado ao Backend Local (`localhost:8080`):**
  ```bash
  npm run dev:local
  # ou simplesmente:
  npm run dev
  ```
- **Conectado ao Backend em Produção (Railway):**
  ```bash
  npm run dev:prod
  ```
A aplicação estará disponível em `http://localhost:5173`.

### Gerando o Build para Produção
```bash
npm run build
```
Os arquivos estáticos otimizados serão gerados no diretório `dist/`.

## 🔗 Integração com a API Backend 🔗
Este frontend consome os serviços da **Arpeggio Backend API** (desenvolvida em Spring Boot 3 + Kotlin):
- **Repositório do Backend:** [https://github.com/fabramattos/Arpeggio_Backend-API](https://github.com/fabramattos/Arpeggio_Backend-API)
- **Host em Produção (Railway):** `https://arpeggio.up.railway.app`
- **Swagger-UI Interativo:** [https://arpeggio.up.railway.app/swagger-ui/index.html](https://arpeggio.up.railway.app/swagger-ui/index.html)
- **Contrato OpenAPI 3.0 (JSON):** [https://arpeggio.up.railway.app/swagger.json](https://arpeggio.up.railway.app/swagger.json)

## 💡 Destaques da Aplicação 💡
- **Comparação Instantânea:** Consulta simultânea de artistas ou podcasts nas 5 principais plataformas de streaming.
- **Contagem Justa e Sem Duplicatas:** Unifica títulos duplicados (como diferentes mixagens de estúdio, remasterizações e formatos Dolby Atmos/Hi-Res comuns em serviços para audiófilos como o Tidal) para exibir o número real de obras únicas.
- **Feedback do Termo Localizado:** Exibe claramente a correspondência exata encontrada por streaming (`result.consulta`).
- **Design Responsivo e Escuro:** Layout glassmórfico otimizado para desktop e dispositivos móveis.

## 💡 Futuras implementações 💡
### Novas funcionalidades
- [ ] Visualização detalhada das faixas de cada álbum
- [ ] Alternância entre tema claro e escuro

## 💻 Desenvolvedores 💻

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/fabramattos">
        <img src="https://avatars.githubusercontent.com/u/45768087?v=4" width="100" height="100">
      </a>
      <br>Felipe Mattos (Backend)</br>
    </td>
  </tr>
</table>

