#!/bin/bash

#$ sudo add-apt-repository ppa:savoury1/ffmpeg4
#$ sudo apt update
#$ sudo apt install ffmpeg -y

# Caminho para a pasta atual (onde estão os GIFs)
DIR="./"

# Loop para cada arquivo .gif
for gif in "$DIR"*.gif; do
  # Pega o nome base sem extensão
  base=$(basename "$gif" .gif)

  # Converte para .webp animado
  ffmpeg -i "$gif" -vcodec libwebp -filter:v fps=fps=15 -lossless 0 -compression_level 6 -qscale 75 -loop 0 "${DIR}${base}.webp"

  echo "✅ Convertido: $gif → ${base}.webp"
done

echo "🚀 Todos os GIFs foram convertidos!"
