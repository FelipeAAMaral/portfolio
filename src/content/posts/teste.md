---
title: "Iniciando com TinaCMS: Meu Primeiro Post"
date: 2025-05-02T12:00:00Z
author: "Felipe Amaral"
---

Este é o meu primeiro post criado com **TinaCMS**! 🎉 Neste post, vou mostrar como podemos usar o schema do Tina para modelar conteúdo simples em Markdown.

## Por que escolher o TinaCMS?

O TinaCMS é um CMS **headless** e **inline editor** que se integra perfeitamente ao seu projeto React/Vite. Alguns benefícios:

- **Edição em tempo real** diretamente na página
- **Configuração flexível** via schema (YAML/JSON)
- Suporte nativo a **Markdown** e rich-text

---

### Principais aspectos do nosso schema

- **Título** (`title`): campo string e principal do post  
- **Data** (`date`): data e hora da publicação  
- **Autor** (`author`): quem escreveu o post  
- **Conteúdo** (`body`): rich-text (Markdown)  

---

## Exemplo de uso prático

1. Clone o repositório e instale as dependências  
2. Crie um arquivo `.md` em `content/posts/` com este frontmatter  
3. Rode `npx tinacms dev` e navegue até `/admin`  
4. Edite o post inline e veja as mudanças em tempo real!

---

**Pronto!** Agora você tem um post totalmente gerenciável pelo TinaCMS, usando Markdown e o seu schema personalizado.  

---

> **Preview renderizado**  
>  
> ### Iniciando com TinaCMS: Meu Primeiro Post  
> *Publicado em 02/05/2025 por Felipe Amaral*  
>  
> Este é o meu primeiro post criado com **TinaCMS**! 🎉 Neste post, vou mostrar como podemos usar o schema do Tina para modelar conteúdo simples em Markdown.  
>  
> **Por que escolher o TinaCMS?**  
>  
> O TinaCMS é um CMS **headless** e **inline editor** que se integra perfeitamente ao seu projeto React/Vite. Alguns benefícios:  
> - **Edição em tempo real** diretamente na página  
> - **Configuração flexível** via schema (YAML/JSON)  
> - Suporte nativo a **Markdown** e rich-text  
>  
> **Principais aspectos do nosso schema**  
> - **Título**: campo string e principal do post  
> - **Data**: data e hora da publicação  
> - **Autor**: quem escreveu o post  
> - **Conteúdo**: rich-text (Markdown)  
>  
> **Exemplo de uso prático**  
> 1. Clone o repositório e instale as dependências  
> 2. Crie um arquivo `.md` em `content/posts/` com este frontmatter  
> 3. Rode `npx tinacms dev` e navegue até `/admin`  
> 4. Edite o post inline e veja as mudanças em tempo real!  
>  
> — **Fim do post**  
