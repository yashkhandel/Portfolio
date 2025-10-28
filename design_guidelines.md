# Portfolio Website Design Guidelines for Yash Khandelwal

## Design Approach
**Reference-Based Approach**: Drawing inspiration from developer-focused portfolios like Linear (minimalism), Stripe (clarity), and GitHub (technical elegance). The design should project technical sophistication while maintaining accessibility and professionalism.

## Core Design Elements

### Typography
- **Primary Font**: Inter or SF Pro Display (Google Fonts) for headings
- **Body Font**: Inter or system-ui for readability
- **Hierarchy**:
  - Hero headline: text-5xl to text-7xl, font-bold
  - Section headings: text-3xl to text-4xl, font-semibold
  - Subsection headings: text-xl to text-2xl, font-medium
  - Body text: text-base to text-lg, font-normal
  - Technical labels/tags: text-sm, font-medium

### Layout System
**Spacing Primitives**: Consistent use of Tailwind units 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 lg:py-32
- Component spacing: gap-8 to gap-12
- Card padding: p-6 to p-8
- Container: max-w-7xl mx-auto px-6

### Component Library

**Navigation**
- Fixed header with backdrop blur
- Logo/name on left, navigation links center or right
- Mobile hamburger menu
- Smooth scroll to sections
- Height: h-16 to h-20

**Hero Section (80-100vh)**
- Full-bleed hero with professional headshot or abstract tech-themed image
- Large headline introducing Yash as "Full Stack Developer"
- Subheading highlighting key technologies (React, Golang, PostgreSQL)
- Primary CTA: "View Projects" + Secondary: "Download Resume"
- Tech stack icons row beneath CTAs
- Buttons with backdrop-blur-sm bg-white/10 when on images

**About Section**
- Two-column layout (lg:grid-cols-2)
- Left: Professional headshot or workspace image
- Right: Biography highlighting journey from BCA to MCA, current role
- Key metrics cards: Years Experience, Technologies Mastered, Projects Completed

**Skills Section**
- Multi-column grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
- Skill cards with category grouping: Frontend, Backend, Database, Tools, ML/AI
- Each card: Icon (from Heroicons), skill name, proficiency indicator (subtle)
- Organized by technology categories with visual separation

**Experience Timeline**
- Vertical timeline layout for desktop
- Cards with company logo, role, duration, key achievements
- Bullet points for responsibilities
- Current role highlighted with subtle accent treatment

**Projects Showcase**
- Three-column grid (lg:grid-cols-3)
- Project cards with:
  - Screenshot/mockup placeholder or abstract representation
  - Project title and type
  - Tech stack tags
  - Brief description (2-3 lines)
  - "View Details" link
- Featured project (ERP system) gets larger card with more detail

**Education Section**
- Two-column cards (md:grid-cols-2)
- Institution, degree, duration, location
- Highlight MCA in AI & ML specialization

**Contact Section**
- Two-column layout (lg:grid-cols-5)
- Left column (lg:col-span-2): Contact information, email, phone, LinkedIn, GitHub links, location
- Right column (lg:col-span-3): Contact form with Name, Email, Message fields
- Include "Available for opportunities" status indicator
- Social proof: "Response within 24 hours"

**Footer**
- Multi-column layout with Quick Links, Social Media, Contact info
- Copyright and "Built with React.js" credit
- Back to top button

### Images
**Include Strategic Imagery**:
- Hero: Large professional portrait or abstract developer workspace (full-width, 80vh)
- About section: Professional headshot or candid workspace photo
- Projects: Screenshot mockups or abstract tech visuals for each project card
- Optional: Subtle pattern overlays or geometric shapes as section backgrounds

### Animations
**Minimal, Performance-Focused**:
- Smooth scroll behavior for navigation
- Fade-in on scroll for sections (subtle, once)
- Hover scale on project cards (scale-105)
- NO complex scroll-triggered animations
- NO parallax effects

### Accessibility & Polish
- High contrast text ratios
- Focus states on all interactive elements
- Semantic HTML structure
- Responsive breakpoints: mobile-first, then md:, lg:, xl:
- Form validation with clear error states
- Loading states for form submission

### Content Enrichment
- Navigation: Include subtle "Open to Work" badge
- Skills: Add "Years of Experience" for primary technologies
- Projects: Tag with "Live" or "In Production" badges
- Contact: "Average response time: 24h" trust indicator
- Footer: Newsletter signup for tech blog (optional but enhances completeness)

### Vertical Rhythm
- Establish consistent py-20 to py-32 for major sections
- Responsive scaling: py-12 on mobile, py-20 on tablet, py-32 on desktop
- Use max-w-prose for long-form text to maintain readability

**Design Philosophy**: Clean, modern, and technically sophisticated. Every element should reinforce Yash's expertise as a Full Stack Developer while maintaining visual hierarchy and professional polish.