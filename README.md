# Regex - Onboarding Hackathon

Welcome to the **Regex - Onboarding Hackathon Tool** – this tool slices through unstructured text and extracts the critical data you need (emails, URLs, phone numbers, credit card numbers, hashtags, HTML tags, time formats, and currency values), making it easy for you to extract information that is meaningful to you.

---

## Project Overview

This project is a simple CLI tool built with Javascript. It’s designed to identify and extract key patterns from text using highly optimized regex patterns. If you’re into clean code, efficient extraction, and avoiding the mess of unnecessary dependencies, you’re in the right place.

_Why settle for mediocre data parsing when you can extract with perfection?_

---

## Features

- **Comprehensive Data Extraction:**  
  Captures emails, URLs, phone numbers (without those pesky dots), credit card numbers, hashtags, HTML tags, time formats, and currency amounts.

- **Optimized Regex Patterns:**  
  Each pattern is crafted to handle common edge cases because we all know life isn’t always straightforward. 💀

- **Zero Dependencies:**  
  With a proper shebang (`#!/usr/bin/env node`) at the beginning, you can run this directly without Node.js. No need to `npm install` here.

- **Error Handling & Logging:**  
  Built-in try-catch blocks and formatted console output (with color) to keep you informed in style.

---

## Setup Instructions

### Prerequisites

- **Node -** While you don't need to have Node.js installed, you need to ensure your Linux terminal has Node installed, if not installed please run - `apt get node`

### Installation & Running the Script

1. **Clone the repository:**
   ```sh
   git clone https://github.com/michael-alu/alu_regex-data-extraction-michael-alu.git
   ```
2. **Make the script executable (Unix/Linux only):**
   ```sh
   chmod +x index.js
   ```
3. **Run the script directly:**
   ```sh
   ./index.js
   ```
   _Alternatively, if you have Node.js installed, you can run it with Node:_
   ```sh
   node index.js
   ```

---

## Usage Example

Inside the script, you can modify the `text` variable to test your own unstructured data. Run the script and watch as it outputs the extracted data in a neatly formatted log.

Example output:

```sh
Extracting data from unstructured text...

Simulating little delay...

Successfully extracted data from unstructured text! 🚀

Here are our top findings from the patterns we've developed -

Email - user@example.com, firstname.lastname@company.co.uk
URL - https://www.example.com, http://subdomain.example.org/page
Phone - (123) 456-7890, 123-456-7890
Credit Card - 1234 5678 9012 3456, 1234-5678-9012-3456
Time - 14:30, 2:30 PM
HTML Tag - <p>, <div class="example">, <img src="image.jpg" alt="description">
Hashtag - #example, #ThisIsAHashtag
Currency - $19.99, $1,234.56
```

---

## Team Details

- **Contributors:**
  - [Michael Nwuju](https://github.com/michael-alu)

Feel free to raise a pull request if you want to introduce a new pattern to match unstructured text.

---

## License

This project is licensed under the **MIT License**. Feel free to use, modify, and share—just keep it real and credit where it’s due.

---
