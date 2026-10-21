# Mega Pack 4.0 — Criativarts Brasil

Cópia independente da landing page original, adaptada para português brasileiro e para o público de designers, gráficas e personalizados. Layout, ordem das seções, imagens, animações, checkout Hotmart e contato do WhatsApp foram preservados.

## Uso local

Requer Node.js 20 ou superior. Depois de clonar o repositório, instale as dependências e inicie o servidor:

```powershell
npm ci
npm run dev
```

Abra o endereço exibido no terminal. O português brasileiro é o idioma padrão em todas as rotas, inclusive `/` e `/br`.

```powershell
npm run build
npm run preview
```

O build pronto para hospedagem fica em `dist/`. Para reinstalar as dependências em outra máquina, execute `npm ci` antes desses comandos. A configuração da Vercel foi mantida.

## Onde editar

- `src/i18n/copy.ts`: textos da página, botões, perguntas frequentes e mensagem pré-preenchida do WhatsApp.
- `src/data/megapackThemes.ts`: nomes dos 65 temas em português.
- `src/components/PricingCTA.tsx`: link do checkout Hotmart original.
- `src/components/WhatsAppFloat.tsx`: número de atendimento original.
- `index.html`: idioma e metadados iniciais. Ao alterar a descrição ou o título, atualize também `copy.ts`.
- `public/`: imagens reaproveitadas do original.

## Notas da adaptação

Os textos foram revisados para apresentar valor no uso diário: variedade de catálogo, agilidade para criar e aplicações em impressão e personalizados. A descrição técnica trata PNG/JPG como arquivos de imagem e evita prometer qualidade de impressão independente do tamanho de saída.

Os depoimentos foram substituídos pelos seis prints de conversas fornecidos pelo proprietário, em um carrossel compacto com ampliação por clique. As imagens estão em WebP, com as proporções preservadas. A mockup foi substituída pela versão correta enviada, mantendo sua transparência.

O vídeo de apresentação usa o ID `OxM3iLPJP9Y` do YouTube, com miniatura correspondente e interface do player em português.

Checkout, oferta e Meta Pixel mantêm as configurações do projeto de origem. O preço e as condições de pagamento são exibidos no checkout. O código está no repositório `felipecancio/mp4-br-codex`; a hospedagem deve ser configurada separadamente.

`MEGAPACK_CONTENT.md` é a referência histórica do projeto original. A fonte dos textos brasileiros atuais é `src/i18n/copy.ts`.
