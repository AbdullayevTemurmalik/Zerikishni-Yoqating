#!/usr/bin/env bash
# ==========================================
# BMW M-Series 3D Simulator - Deploy Helper
# ==========================================
set -e

echo "=== QA Build Verification ==="
python3 scripts/verify_build.py

echo "=== Git Status ==="
git status --short

echo "=== Ready! Deploy to Vercel via 'npx vercel' or git push ==="

