#!/bin/bash

# Função auxiliar para renomear com segurança
safe_rename() {
  if [ -e "$1" ]; then
    mv "$1" "$2"
    echo "Renomeado: $1 → $2"
  fi
}

# Renomear pastas principais
safe_rename "SEÇÃO 01 - HEADER" "section-01-header"
safe_rename "SEÇÃO 02 - INFOS" "section-02-info"
safe_rename "SEÇÃO 03 -  TRAILER" "section-03-trailer"
safe_rename "SEÇÃO 04 -CONTEUDO" "section-04-content"
safe_rename "SEÇÃO 05 - GALERIA" "section-05-gallery"
safe_rename "SEÇÃO 06 - NEWSLETTER" "section-06-newsletter"

# Renomear subpastas
cd section-01-header || exit

safe_rename "arte elementos" "assets"
cd old || exit
safe_rename "art elementos" "assets"
cd ../..

cd section-05-gallery || exit
safe_rename "icones socials" "social-icons"
cd old || exit
safe_rename "icones socials" "social-icons"
cd ../..

# Renomear arquivos (exemplo, pode expandir conforme necessário)
cd section-01-header/assets || exit
safe_rename "bola-01.svg" "ball-01.svg"
safe_rename "bola-02.svg" "ball-02.svg"
safe_rename "elemento-amarelo-estrela.svg" "element-yellow-star.svg"
safe_rename "elemento-garrafa.svg" "element-bottle.svg"
safe_rename "elemento-roxo-faixa.svg" "element-purple-banner.svg"
safe_rename "elemento-vermelho-logo 01.svg" "element-red-logo-01.svg"
safe_rename "elemento-vermelho-logo 02.svg" "element-red-logo-02.svg"
safe_rename "logo-hititback.svg" "logo-hit-it-back.svg"
safe_rename "personagem-01-ltamy.svg" "character-ltamy.svg"
safe_rename "personagem-02-lkaka.svg" "character-lkaka.svg"
safe_rename "personagem-03-lele.svg" "character-lele.svg"
cd ../../..

# Outros arquivos podem ser renomeados aqui seguindo o mesmo padrão

echo "✅ Renomeação concluída!"
