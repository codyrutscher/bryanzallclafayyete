# Elite Business Solutions - Professional Website

A modern, dynamic Next.js website with animations, 3D elements, and comprehensive business features.

## Features

✅ **5+ Pages**: Home, About, Services (with 4 sub-pages), Gallery, Contact, Booking
✅ **Floating Widget**: Call, Text, Chat, and WhatsApp integration
✅ **Social Media Feed**: Instagram, Facebook, TikTok integration ready
✅ **Booking/Scheduling Page**: Complete appointment booking system
✅ **Customizable Contact Form**: Full-featured contact page
✅ **Reviews Section**: Connected to Google Business Profile
✅ **GBP Posts Section**: Display Google Business Profile updates
✅ **CTAs on Every Section**: Strategic call-to-action buttons throughout
✅ **3D Icons & Animations**: Framer Motion animations and interactive elements
✅ **Dynamic Interactions**: Smooth transitions, hover effects, and scroll animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Drei
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

### Installation

```bash
cd professional-business-site
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Customization

### Update Content

- **Company Info**: Edit `components/Footer.tsx` and contact pages
- **Services**: Modify files in `app/services/`
- **Colors**: Update `app/globals.css` for theme colors
- **Social Links**: Update `components/Footer.tsx`

### Connect Real Integrations

- **WhatsApp**: Update phone number in `components/FloatingWidget.tsx`
- **Social Feeds**: Integrate APIs in `components/SocialFeed.tsx`
- **Google Business**: Connect GBP API in `components/GBPPosts.tsx`
- **Reviews**: Integrate review platforms in `components/home/ReviewsSection.tsx`
- **Booking**: Connect calendar service in `app/booking/page.tsx`

## Project Structure

```
professional-business-site/
├── app/
│   ├── about/
│   ├── booking/
│   ├── contact/
│   ├── gallery/
│   ├── services/
│   │   ├── consulting/
│   │   ├── strategy/
│   │   ├── implementation/
│   │   └── support/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── home/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FloatingWidget.tsx
│   ├── CTASection.tsx
│   ├── SocialFeed.tsx
│   └── GBPPosts.tsx
└── public/
```

## Performance

- Optimized images and assets
- Code splitting with Next.js
- Server-side rendering
- Fast page loads

## License

MIT
