A modern, responsive currency converter built with HTML, CSS (Tailwind), and JavaScript. Convert between 168+ world currencies with real-time exchange rates.
✨ Features

    🌍 168+ Currencies - Support for all major world currencies
    🚩 Country Flags - Visual flags for each currency selection
    🔄 Swap Function - Instantly swap FROM and TO currencies
    📱 Responsive Design - Works on desktop, tablet, and mobile
    ⚡ Real-time Rates - Live exchange rates from ExchangeRate-API
    🎨 Modern UI - Clean design with Tailwind CSS
    🔄 Auto-refresh - Automatically loads rates on page open

🚀 Quick Start
Prerequisites

    Web browser (Chrome, Firefox, Safari, Edge)
    Internet connection
    Free API key from ExchangeRate-API

Installation

    Download/Clone the project

    git clone https://github.com/yourusername/currency-converter.git
    cd currency-converter

Get your FREE API key

    Visit ExchangeRate-API.com
    Sign up for a free account
    Copy your API key

Add your API key

    Open js/script.js
    Find line 65: YOUR_ACTUAL_API_KEY_HERE
    Replace with your actual API key:

let url = `https://v6.exchangerate-api.com/v6/YOUR_ACTUAL_API_KEY_HERE/latest/${fromCurrency.value}`;

    Open the app
        Double-click index.html
        Or right-click → "Open with" → Your browser

📁 Project Structure

currency-converter/
├── README.md              # Project documentation
├── index.html            # Main HTML file
├── css/
│   └── style.css        # Custom CSS styles
└── js/
    ├── script.js        # Main JavaScript functionality
    └── country-list.js  # Currency to country code mapping

🛠️ Technologies Used

    HTML5 - Structure and markup
    Tailwind CSS - Utility-first CSS framework
    JavaScript ES6 - Modern JavaScript features
    ExchangeRate-API - Real-time currency data
    Flag CDN - Country flag images

🌐 API Information

This app uses the ExchangeRate-API service:

    Free tier: 1,500 requests/month
    Updates: Multiple times daily
    Currencies: 168+ supported
    Format: JSON response
    Reliability: 99.9% uptime

Sample API Response

{
  "result": "success",
  "base_code": "USD",
  "conversion_rates": {
    "EUR": 0.85,
    "JPY": 110.0,
    "GBP": 0.73,
    "NPR": 118.5
  }
}

🔧 Configuration
Changing Default Currencies

In js/script.js, line 12-13:

let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "EGP" ? "selected" : "";

Change "USD" and "EGP" to your preferred default currencies.
Customizing Colors

In css/style.css:

.custom-purple {
    background-color: #675AFE; /* Change this color */
}

📱 Browser Support
Browser 	Version
Chrome 	60+
Firefox 	55+
Safari 	11+
Edge 	79+
🐛 Troubleshooting
Common Issues

❌ "Something went wrong" error

    Check your API key is correctly added
    Verify internet connection
    Check browser console (F12) for errors

❌ No styling/colors showing

    Ensure css/style.css exists
    Check Tailwind CDN is loading
    Verify file paths in HTML

❌ Flags not loading

    Check internet connection
    Flags load from flagcdn.com

❌ Dropdowns empty

    Ensure js/country-list.js is loading
    Check browser console for JavaScript errors

Debug Mode

Press F12 in your browser to open Developer Tools:

    Console tab - Shows JavaScript errors
    Network tab - Shows failed file loads
    Elements tab - Inspect HTML structure

📊 Currency Support

The app supports 168+ currencies including:
Major Currencies 	Regional 	Crypto-Friendly
USD, EUR, GBP 	AED, INR 	Ready for future updates
JPY, CAD, AUD 	NPR, PKR 	
CHF, CNY, KRW 	THB, MYR 	
🤝 Contributing

    Fork the project
    Create your feature branch (git checkout -b feature/AmazingFeature)
    Commit your changes (git commit -m 'Add some AmazingFeature')
    Push to the branch (git push origin feature/AmazingFeature)
    Open a Pull Request

Ideas for Contributions

    Add more currency information (full names, symbols)
    Implement currency history charts
    Add favorite currencies feature
    Dark mode support
    Offline mode with cached rates

📄 License

This project is open source and available under the MIT License.
👨‍💻 Author

Your Name

    Website: yourwebsite.com
    GitHub: @yourusername
    Email: your.email@example.com

🙏 Acknowledgments

    ExchangeRate-API for reliable currency data
    Tailwind CSS for the utility-first CSS framework
    Flag CDN for country flag images
    Font Awesome for the exchange icon
    Google Fonts for the Poppins font

📈 Version History

    v1.0.0 - Initial release
        Basic currency conversion
        168+ currency support
        Responsive design
        Real-time exchange rates

🚀 Future Updates

    Historical exchange rate charts
    Favorite currencies
    Dark mode theme
    Currency rate alerts
    Offline support
    Mobile app version

⭐ Star this repo if you found it helpful!

Made with ❤️ and ☕
