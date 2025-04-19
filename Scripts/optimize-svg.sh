#!/bin/bash

echo "🔍 Buscando todos os arquivos .svg..."
echo

# Conta arquivos antes de otimizar
count=$(find . -name "*.svg" | wc -l)
echo "📦 Encontrados $count arquivos SVG para otimização."
echo

# Executa a otimização com svgo
find . -name "*.svg" -exec svgo {} \;

echo
echo "✅ Todos os SVGs foram otimizados com sucesso!"
