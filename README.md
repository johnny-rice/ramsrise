# Rams Rise Landing Page 

A modern, responsive landing page built for **Rams Rise** - a community-driven event promoting mental health awareness and support. While designed specifically for Rams Rise, this project serves as a reusable template for organizing similar mental health awareness events and building community engagement.

## Mission

This project aims to:
- **Raise Awareness** for mental health support and resources
- **Build Community** around wellness and mutual support
- **Organize Events** that bring people together for a meaningful cause
- **Provide a Template** for other organizations to launch similar initiatives

Whether you're organizing a 5K run, community gathering, or awareness campaign, this landing page can be adapted to support your mental health advocacy efforts.

## ✨ Features

### Core Functionality
- 🎨 **Modern, Accessible Design** - Clean, professional UI built with accessibility in mind
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop experiences
- ⚡ **High Performance** - Built with Next.js 16 for optimal loading speeds
- 🎭 **Smooth Animations** - GSAP-powered animations for engaging user experience
- 🌓 **Dark Mode Support** - Theme switching for user preference
- 📊 **Analytics Ready** - Vercel Analytics integration for tracking engagement

### Customizable Sections
- Hero section with event branding
- Event details and information
- Registration/participation CTAs
- Community testimonials
- Resource links for mental health support
- FAQ section
- Contact information

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 16.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - Latest React with improved performance
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 4.1.9](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set

### Animations & Interactions
- **[GSAP 3.13](https://greensock.com/gsap/)** - Professional-grade animations
- **[Embla Carousel](https://www.embla-carousel.com/)** - Lightweight carousel
- **[Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - CSS animations

### Form Handling
- **[React Hook Form 7.60](https://react-hook-form.com/)** - Performant forms
- **[Zod 3.25](https://zod.dev/)** - TypeScript-first schema validation

### Additional Tools
- **[date-fns](https://date-fns.org/)** - Date utility library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring

## Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **pnpm** (recommended) or npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rams-rise-landing-page.git
   cd rams-rise-landing-page
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```
   
   Add any necessary environment variables:
   ```env
   # Add your configuration here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Project Structure

```
rams-rise-landing-page/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI component library
│   ├── hero-background.tsx
│   ├── scroll-section.tsx
│   └── ...
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── *.svg            # Vector graphics
│   └── *.png, *.webp    # Images
├── styles/              # Additional styles
└── tsconfig.json        # TypeScript configuration
```

### Customization Guide

To adapt this template for your event:

1. **Update Branding**
   - Replace logos in `/public/`
   - Modify colors in `app/globals.css`
   - Update site metadata in `app/layout.tsx`

2. **Edit Content**
   - Main content in `app/page.tsx`
   - Component text throughout `/components/`

3. **Configure Analytics**
   - Add your Vercel project ID
   - Set up custom events as needed

4. **Add Resources**
   - Include mental health resources relevant to your area
   - Link to local support organizations
   - Add crisis hotline numbers

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/rams-rise-landing-page)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Other Platforms

This Next.js app can be deployed to:
- **Netlify** - Full Next.js support
- **Railway** - Container-based deployment
- **AWS Amplify** - Scalable hosting
- **Cloudflare Pages** - Edge deployment
- **Self-hosted** - Using `pnpm build` and `pnpm start`

## 🤝 Contributing

We welcome contributions! Whether you're fixing bugs, improving documentation, or adding features:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test updates
- `chore:` - Maintenance tasks

## 💚 Mental Health Resources

If you or someone you know needs support:

- **National Suicide Prevention Lifeline**: 988 (US)
- **Crisis Text Line**: Text HOME to 741741
- **SAMHSA National Helpline**: 1-800-662-4357
- **International Association for Suicide Prevention**: [https://www.iasp.info/resources/Crisis_Centres/](https://www.iasp.info/resources/Crisis_Centres/)

Remember: It's okay to ask for help. You're not alone.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ for the mental health community
- Inspired by the need for accessible mental health awareness
- Thanks to all contributors and supporters of Rams Rise
- **Built with [Veredit](https://www.veredit.com)** - AI-powered development platform

## 📧 Contact

For questions, suggestions, or partnerships:
- **Website**: [RamsRise.com]

---

**Remember**: Small steps lead to big changes. Every event, every conversation, and every act of awareness helps break down the stigma around mental health. Thank you for being part of the solution. 💚


