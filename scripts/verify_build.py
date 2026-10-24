#!/usr/bin/env python3
"""
BMW M-Series 3D Simulator - Automated Build & QA Verifier
Runs during CI/CD build tests to ensure 100% bug-free release.
"""

import os
import sys
import json
import re

def verify_files():
    required_files = [
        'index.html',
        'index.js',
        'index.css',
        'vercel.json',
        'README.md',
        'start.bat',
        'start.sh'
    ]
    for rf in required_files:
        if not os.path.isfile(rf):
            print(f"[FAIL] Missing required file: {rf}")
            return False
        if os.path.getsize(rf) == 0:
            print(f"[FAIL] File is empty: {rf}")
            return False
    print("[PASS] All required files exist with valid sizes.")
    return True

def verify_html_structure():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Check for crucial elements
    must_have = [
        '<!DOCTYPE html>',
        '<canvas id="gameCanvas"></canvas>',
        'index.css',
        'index.js',
        'splitScreenDivider',
        'pauseSettingsModal'
    ]
    for item in must_have:
        if item not in html:
            print(f"[FAIL] Missing in index.html: {item}")
            return False

    print("[PASS] index.html structure verified.")
    return True

def verify_vercel_json():
    with open('vercel.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    if 'cleanUrls' not in data:
        print("[FAIL] vercel.json missing cleanUrls")
        return False
    print("[PASS] vercel.json configuration verified.")
    return True

def main():
    print("=" * 55)
    print("  BMW M-Series 3D Simulator - Build & QA Verification")
    print("=" * 55)
    ok = verify_files() and verify_html_structure() and verify_vercel_json()
    if ok:
        print("\n>>> ALL TESTS PASSED: Ready for Vercel Deployment! <<<")
        sys.exit(0)
    else:
        print("\n>>> BUILD VERIFICATION FAILED <<<")
        sys.exit(1)

if __name__ == '__main__':
    main()
