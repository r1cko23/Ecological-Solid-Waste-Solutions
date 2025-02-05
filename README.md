# Eco Solutions Waste Services Website

A modern, responsive website for Eco Solutions Waste Services (ESWS), showcasing their zero-waste solutions and environmental innovations.

## Features

- Responsive design optimized for all devices
- Modern and clean user interface
- Interactive elements and smooth animations
- Contact form integration
- Google Maps integration
- Mobile-friendly navigation
- SEO-friendly structure

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- Google Maps API
- Font Awesome Icons
- Google Fonts (Montserrat, Poppins)

## Getting Started

### Prerequisites

- A modern web browser
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript
- A Google Maps API key (for the map functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/esws-website.git
```

2. Navigate to the project directory:
```bash
cd esws-website
```

3. Open `index.html` in your web browser to view the website.

### Configuration

1. Replace the Google Maps API key in `index.html`:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
```

2. Update the map coordinates in `js/main.js`:
```javascript
const location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
```

3. Customize the content in `index.html` according to your needs.

## Project Structure

```
esws-website/
├── index.html
├── styles/
│   └── main.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── team.jpg
└── README.md
```

## Customization

### Colors
The website uses CSS variables for easy color customization. You can modify the colors in `styles/main.css`:

```css
:root {
    --primary-color: #2E7D32;
    --secondary-color: #81C784;
    --accent-color: #4CAF50;
    /* ... other color variables ... */
}
```

### Images
Replace the following images with your own:
- `images/logo.png` - Company logo
- `images/hero-bg.jpg` - Hero section background
- `images/team.jpg` - Team or operations image

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Development

### CSS
- Uses CSS Grid and Flexbox for layouts
- Mobile-first responsive design
- CSS variables for easy theming
- Smooth transitions and animations

### JavaScript
- ES6+ features
- Smooth scroll behavior
- Form validation and submission
- Interactive elements
- Google Maps integration

## Deployment

The website can be deployed to any web hosting service. Some recommended options:

- GitHub Pages
- Netlify
- Vercel
- Any traditional web hosting service

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/your-username/esws-website 