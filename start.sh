#!/usr/bin/env bash
echo "BMW M-Series 3D Simulator brauzerda ochilmoqda..."
if command -v xdg-open > /dev/null; then
  xdg-open index.html
elif command -v open > /dev/null; then
  open index.html
else
  echo "Iltimos, index.html faylini brauzeringizda oching."
fi

