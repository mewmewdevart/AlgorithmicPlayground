#!/bin/bash

# Caminho base (usa o diretório atual)
BASE_DIR=$(pwd)
BACKUP_DIR="$BASE_DIR/_backup_ttf"

# Criar pasta de backup
mkdir -p "$BACKUP_DIR"

echo "🔍 Procurando arquivos .ttf em $BASE_DIR..."

# Verifica se woff2 está instalado
if ! command -v woff2_compress &> /dev/null
then
    echo "❌ 'woff2_compress' não está instalado. Instale com: sudo apt install woff2"
    exit 1
fi

# (Opcional) Verifica se sfnt2woff-zopfli está instalado
if command -v sfnt2woff-zopfli &> /dev/null
then
    CONVERT_WOFF=true
    echo "🌀 Conversão para .woff ativada (sfnt2woff-zopfli detectado)."
else
    CONVERT_WOFF=false
    echo "⚠️  sfnt2woff-zopfli não instalado. Pulando .woff."
fi

# Loop pelos .ttf encontrados
find . -name "*.ttf" | while read file; do
    echo "🔧 Convertendo: $file"

    # Converter para .woff2
    woff2_compress "$file"

    # Converter para .woff se tiver o binário
    if [ "$CONVERT_WOFF" = true ]; then
        sfnt2woff-zopfli "$file"
    fi

    # Mover o .ttf para a pasta de backup
    mv "$file" "$BACKUP_DIR/"
done

echo ""
echo "✅ Conversão concluída!"
echo "🗂️  Arquivos .ttf movidos para: $BACKUP_DIR"
echo "📁 Você agora tem versões .woff2 $( [ "$CONVERT_WOFF" = true ] && echo 'e .woff' ) prontos pra uso."
