# Allan Victor • Cartão Digital & Currículo Interativo (NFC)

Aplicação web **Mobile-First** de alta performance construída em **Angular (Standalone Components + Signals)** e **Tailwind CSS**, projetada para carregamento instantâneo via **tag NFC** em eventos de tecnologia e networking.

## Stack & Arquitetura

- **Angular 19** (`Standalone Components`, `Signals`, `OnPush ChangeDetection`)
- **Tailwind CSS 3** (Dark Mode padrão `#121212` + Light Mode de alto contraste AA+)
- **Tipografia:** `Space Grotesk`, `IBM Plex Mono` e `Inter`
- **Ícones:** SVGs Lucide inline ultra-leves (zero overhead no bundle inicial)
- **vCard 3.0 Client-Side:** Geração dinâmica de `.vcf` via `Blob` em `src/app/services/vcard.service.ts`
- **Dados Centralizados:** Toda a configuração de textos, links, projetos e trajetória fica isolada em `src/app/data/profile.data.ts`

## Como Executar

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento (http://localhost:4200)
npm start

# Gerar build otimizado de produção
npm run build
```
