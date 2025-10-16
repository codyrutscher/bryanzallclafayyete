# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push your code to GitHub:
   ```bash
   cd professional-business-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Done! Your site will be live in ~2 minutes

### Option 2: Vercel CLI

```bash
cd professional-business-site
npm install -g vercel
vercel login
vercel
```

Follow the prompts and your site will be deployed.

## Environment Variables (Optional)

If you add API integrations, create a `.env.local` file:

```env
# Google Business Profile
NEXT_PUBLIC_GBP_API_KEY=your_key_here

# Social Media APIs
NEXT_PUBLIC_INSTAGRAM_TOKEN=your_token
NEXT_PUBLIC_FACEBOOK_TOKEN=your_token

# WhatsApp Business
NEXT_PUBLIC_WHATSAPP_NUMBER=15551234567

# Email Service (for contact form)
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
```

Add these in Vercel Dashboard under Settings > Environment Variables.

## Custom Domain

1. In Vercel Dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate is automatically provisioned

## Post-Deployment Checklist

- [ ] Update contact information in Footer.tsx
- [ ] Replace placeholder phone numbers
- [ ] Update email addresses
- [ ] Connect real social media feeds
- [ ] Set up Google Business Profile integration
- [ ] Configure booking system backend
- [ ] Test contact form submissions
- [ ] Add Google Analytics (optional)
- [ ] Set up monitoring/error tracking

## Performance Tips

- Images: Use Next.js Image component for optimization
- Fonts: Already optimized with next/font
- Analytics: Add Vercel Analytics for free
- Speed Insights: Enable in Vercel Dashboard

## Support

For issues or questions:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Framer Motion: https://www.framer.com/motion/
