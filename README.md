# 🚀 Dashboard Inicial — Favoritos Portáteis

![Versão](https://img.shields.io/badge/Versão-1.0.0-orange?style=flat-square)
![Licença](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/Tiyuyyh/dashboard-inicial?style=flat-square&color=yellow)
![Sem servidor](https://img.shields.io/badge/Sem%20servidor-100%25%20local-blue?style=flat-square)

> Seus favoritos em qualquer navegador. Sem instalação, sem conta, sem rastreamento.

Feito especialmente para funcionar no **DuckDuckGo Browser** (que não aceita extensões) — mas roda em qualquer navegador com um arquivo HTML.

---

## ✨ O que faz

- ⚡ **Abertura em lote** — abre todos os seus links salvos com um clique
- 🔄 **Abertura automática** — assim que a página carrega, já vai abrindo
- 💾 **Backup criptografado (.tiyu)** — arquivo gerado com AES-GCM 256-bit, legível só pelo dashboard
- 🌍 **Três idiomas** — PT-BR, EN-US e ES, com detecção automática
- 🏷️ **Categorias e descrições** — organize seus links com etiquetas
- 🔒 **Privacidade total** — zero servidor, zero rastreamento, tudo no seu navegador

---

## 🚀 Como usar

### Opção 1 — GitHub Pages (recomendado)
1. Acesse: **[tiyuyyh.github.io/dashboard-inicial](https://tiyuyyh.github.io/dashboard-inicial)**
2. Adicione como página inicial do seu navegador
3. Pronto

### Opção 2 — Baixar e abrir local
1. Clique em **Code → Download ZIP** neste repositório
2. Extraia e abra o `index.html` no seu navegador
3. Seus links ficam salvos no `localStorage` daquele navegador

### Configurar como página inicial

**DuckDuckGo Mobile:**
1. Menu (3 pontinhos) → Configurações → Página Inicial → cole a URL do painel

**Chrome / Edge / Firefox:**
- Use o botão **🏠 Página Inicial** dentro do próprio painel

---

## 📁 Estrutura

```
dashboard-inicial/
├── css/
│   └── style.css        # Dark mode, responsivo
├── js/
│   └── script.js        # Lógica, crypto AES-GCM, i18n
├── img/
│   └── icone.png        # Ícone do autor
├── sounds/
│   └── som-mk.mp3       # Efeito sonoro do botão de apoio
├── index.html           # App principal
└── LICENSE              # MIT
```

---

## 🔐 Segurança do Backup

A partir da v1.0.0, o arquivo `.tiyu` é criptografado com **AES-GCM 256-bit** (Web Crypto API nativa do browser). Arquivos antigos em base64 continuam sendo lidos normalmente — retrocompatibilidade garantida.

---

## 🤝 Créditos

Desenvolvido por **[Tiyuyyh](https://www.youtube.com/tiyuyyh)** — criador de conteúdo, streamer e entusiasta tech.

[![Discord](https://img.shields.io/badge/Suporte-Discord-5865F2?style=flat-square&logo=discord)](https://discord.gg/k9YCJSsz92)
[![YouTube](https://img.shields.io/badge/Canal-YouTube-red?style=flat-square&logo=youtube)](https://www.youtube.com/tiyuyyh)

---

## 📄 Licença

MIT — use, modifique e distribua livremente.
