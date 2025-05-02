# ASIN-store-scraper Chrome Extension

A simple Chrome extension that scrapes ASIN numbers from any Amazon storefront page listing multiple products. It adds ASIN labels below each product and includes a button to copy all ASINs to your clipboard with one click.

## 🔧 Features

- Automatically identifies and extracts ASINs from Amazon storefront or brand pages.
- Displays ASINs inline under each product.
- "Copy to Clipboard" button to quickly copy all ASINs.
- No page reload required.
- Lightweight and fast.

## 📦 Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right).
4. Click **Load Unpacked** and select the folder containing the extension files.

## 🚀 Usage

1. Navigate to an Amazon storefront page like: https://www.amazon.com/stores/InnoSupps/page/
2. Click the extension icon in your Chrome toolbar.
3. Click the **"Copy ASINs to Clipboard"** button.
4. All ASINs from the page will be copied to your clipboard, one per line.

## 📁 Example Output
- B08DP57QF5
- B09JRHBB6P 
- B08DP5NN4R...

## 📝 Notes

- Only works on Amazon pages where product links contain `/dp/ASIN`.
- Designed for storefront and brand pages, not general search results.
- Requires no permissions beyond the active tab.
