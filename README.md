# Fellowship International Romanian Church Website

A modern, responsive website for Fellowship International Romanian Church in Rotonda West, Florida.

## Features

✨ **Modern Design**
- Clean, professional layout with modern typography
- Responsive design that works on all devices (desktop, tablet, mobile)
- Elegant color scheme with red, blue, and white colors reflecting cultural heritage

🎨 **Design Elements**
- Smooth animations and transitions
- Professional gradient backgrounds
- Modern Poppins font for clean readability
- Elegant Cardo serif font for headings
- Accessible navigation with keyboard support

📱 **Fully Responsive**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Touch-friendly interface
- Optimized for all screen sizes

🌐 **Multi-Language Support**
- English and Romanian text throughout
- Two service languages highlighted (English at 10:30 AM, Romanian at 1:00 PM)

📍 **Integrated Locations & Contact**
- Google Maps embedded on contact page
- Complete contact information with icons
- Phone and email links
- Address and pastor information

💬 **Social Media Integration**
- Facebook page link prominently featured
- Facebook icon with link to church events page
- Call-to-action to follow on Facebook

## File Structure

```
fellowshipinternational/
├── index.html          # Main HTML file with all content
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript for interactivity and animations
├── README.md           # This documentation file
└── assets/             # Folder for images (to be added)
    ├── logo.png        # Church logo (optional)
    ├── banner.jpg      # Hero section banner (optional)
    └── gallery/
        ├── worship.jpg
        ├── fellowship.jpg
        ├── community.jpg
        ├── events.jpg
        ├── youth.jpg
        └── special.jpg
```

## How to Get Started

### 1. Basic Setup
The website is ready to use as-is. Simply open `index.html` in a web browser.

### 2. Add Your Images
To replace placeholder gallery images:
1. Create an `assets/gallery/` folder
2. Add your church photos (worship, fellowship, community, events, youth, special events)
3. Update the gallery items in `index.html` with actual image paths:

```html
<div class="gallery-item">
    <img src="assets/gallery/worship.jpg" alt="Church Worship">
</div>
```

3. Update CSS for images:
```css
.gallery-placeholder {
    /* Replace with: */
    background-image: url('path/to/image.jpg');
    background-size: cover;
    background-position: center;
}
```

### 3. Customize Content
Edit `index.html` to update:
- Church name and tagline
- Service times and descriptions
- Pastor information
- Contact details
- Address and location
- Social media links

## Color Scheme

The website uses a carefully chosen color palette reflecting both modern design and cultural heritage:

- **Primary Red**: `#DC143C` - Energy and importance
- **Primary Blue**: `#003366` - Trust and stability
- **Light Blue**: `#1E5A96` - Approachability
- **White**: `#FFFFFF` - Clean and pure
- **Dark Text**: `#2C3E50` - Readability

## Sections

### 1. Navigation Bar
- Sticky navigation with smooth hover effects
- Mobile hamburger menu
- FIRC branding with cross icon
- Links to all major sections

### 2. Hero Section
- Large, welcoming header with Romanian greeting
- Church name and tagline
- Eye-catching gradient background
- Animated entrance

### 3. Services Section
- Three service time cards
- English Worship (10:30 AM)
- Fellowship Lunch (12:00 PM)
- Romanian Worship (1:00 PM)

### 4. Gallery Section
- Image showcase area with placeholders
- 6 gallery items for church activities
- Hover effects for interactivity
- Responsive grid layout

### 5. Events Section
- Facebook integration with direct link
- Upcoming events showcase
- Call-to-action for Facebook page
- Regular event highlights

### 6. Contact Section
- Complete contact information
- Pastor details
- Phone and email links
- Address with Google Maps embed
- Facebook page link with icon
- Social media icons

### 7. Footer
- Quick links
- Service hours
- Contact information
- Copyright information

## Responsive Breakpoints

The website is optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## JavaScript Features

- **Mobile Menu Toggle**: Easy navigation on mobile devices
- **Scroll Animations**: Cards and elements animate into view
- **Smooth Scrolling**: Navigate smoothly between sections
- **Active Link Highlighting**: Shows which section you're viewing
- **Keyboard Navigation**: Press Escape to close mobile menu
- **Intersection Observer**: Efficient animation triggering

## Facebook Integration

### Current Features
- Link to Facebook page: https://www.facebook.com/profile.php?id=61577056664026
- Facebook icon link in contact section
- Call-to-action for events

### Future Enhancements
To embed real Facebook events, you can:
1. Use Facebook Graph API to fetch events
2. Display them dynamically in the events section
3. Update `script.js` `embedFacebookEvents()` function

## Adding Real Photos

### Gallery Images
Add actual church photos to the gallery by:
1. Creating `assets/gallery/` folder
2. Adding images: worship.jpg, fellowship.jpg, community.jpg, events.jpg, youth.jpg, special.jpg
3. Updating HTML image sources
4. Updating CSS background properties

### Replace Placeholders
Current placeholder structure in gallery:
```html
<div class="gallery-placeholder">
    <i class="fas fa-image"></i>
    <p>Church Worship</p>
</div>
```

Replace with actual images:
```html
<img src="assets/gallery/worship.jpg" alt="Church Worship">
```

## Font Choices

- **Poppins**: Modern sans-serif for body text and headings (Google Fonts)
- **Cardo**: Elegant serif for main titles and accents (Google Fonts)

Both fonts are loaded from Google Fonts CDN and fallback safely.

## Icons

Uses Font Awesome 6.5.1 icons loaded from CDN:
- Cross icon (navigation)
- Calendar icons
- Phone/Envelope icons
- Location icons
- Social media icons
- Church/worship icons
- User clergy icon for pastor

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome mobile)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors for readability
- Touch-friendly button sizes

## SEO Optimization

- Proper meta tags
- Semantic HTML
- Descriptive titles and headings
- Mobile-friendly design
- Fast loading (no large scripts)

## Performance

- Lightweight CSS without preprocessors
- Minimal JavaScript
- Efficient animations using CSS transforms
- Responsive image loading
- Optimized for fast page loads

## Customization Tips

### Change Main Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-red: #DC143C;
    --primary-blue: #003366;
    /* ... */
}
```

### Adjust Fonts
Update font imports in `index.html` head or `styles.css`

### Add New Sections
Follow the existing structure and class naming patterns

### Modify Animations
Update animation timing and effects in `styles.css`

## Deployment

### Static Hosting
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

### Domain Setup
Point your domain to the hosting service where you deploy this site.

## Contact Information

**Fellowship International Romanian Church**
- Address: 140 Rotonda Blvd W, Rotonda West, FL 33947
- Phone: 312-972-4262
- Email: pastorcornel@fellowshipenglewood.com
- Facebook: https://www.facebook.com/profile.php?id=61577056664026

## Support & Maintenance

### Updating Service Times
Edit the service cards in the Services section of `index.html`

### Adding New Events
Update the Events section with new event cards following the existing structure

### Change Contact Info
Update the Contact section and Footer with new information

## Future Enhancements

- [ ] Add actual church photos to gallery
- [ ] Integrate real Facebook events API
- [ ] Add prayer request form
- [ ] Add sermon archive/podcast
- [ ] Add member directory (private)
- [ ] Add online giving/donations
- [ ] Add event registration
- [ ] Add newsletter signup
- [ ] Add testimonials section
- [ ] Add ministry teams section

## License

This website template is created for Fellowship International Romanian Church.

## Questions or Issues?

For help with the website, contact:
- Pastor Cornel Stef: 312-972-4262
- Email: pastorcornel@fellowshipenglewood.com

---

**Last Updated**: February 20, 2026
**Website Version**: 1.0
