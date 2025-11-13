
# Claude Code Prompts for Furniture Assembly Fort Smith

---

## 🚀 PHASE 1: THE FOUNDATION - Initial Website Setup

**Goal:** Create the initial Astro website structure, set up the necessary pages, and deploy it to Vercel via GitHub.

### 👉 Prompt 1: Initial Website & Deployment

```
I need a new website for my local service business, "Furniture Assembly Fort Smith". Your task is to build the site using the Astro framework and deploy it to Vercel. All the project details are in the `PROJECT_BRIEF.md` file in this repository.

Here are the specific steps:

1.  **Initialize an Astro Project:** Create a new Astro project in the current directory. Use the "Empty" template.

2.  **Create Page Structure:** Create the following pages as `.astro` files inside the `src/pages/` directory:
    *   `index.astro` (Homepage)
    *   `services.astro`
    *   `pricing.astro`
    *   `service-area.astro`
    *   `about.astro`
    *   `contact.astro`
    *   `blog.astro` (for the blog index)

3.  **Create a Layout:** Create a base layout in `src/layouts/Layout.astro`. This layout should include the basic HTML structure (`<html>`, `<head>`, `<body>`), import Google Fonts for Montserrat and Roboto, and have a `<slot />` for page content. The `<head>` should include a placeholder `<title>` and `<meta name="description">`.

4.  **Apply Layout:** Apply this base layout to all the pages you created in step 2.

5.  **Push to GitHub:** Commit all the new files to the main branch of the existing GitHub repository.

6.  **Guide Vercel Deployment:** Provide me with clear, step-by-step instructions on how to connect my GitHub repository to Vercel and deploy the site. Assume I have already created a Vercel account and connected it to my GitHub.

Execute these steps in order. Let me know when you have pushed the code to GitHub and are ready to provide the Vercel deployment instructions.
```

---
## 🧠 PHASE 2 & 3: BUILD YOUR ADVANTAGE - Technical SEO & Content

**Goal:** Implement the core technical SEO features, create the main page layouts with components, and populate them with high-quality, SEO-optimized content based on our research.

### 👉 Prompt 2: Header, Footer, and Global Styles

```
Now that the basic page structure is in place, let's build the common components and apply global styling. Use the `PROJECT_BRIEF.md` for all branding information.

1.  **Create Components:** Create the following new components in a `src/components/` directory:
    *   `Header.astro`
    *   `Footer.astro`

2.  **Build the Header:**
    *   The header should be sticky.
    *   Include the business name "Furniture Assembly Fort Smith" as the logo (using the Montserrat font).
    *   Create a navigation menu with links to: Home, Services, Pricing, Service Area, About, Contact, and Blog.
    *   On the right side, add a prominent "Get Free Quote" button (using the teal green accent color) and a click-to-call phone number.

3.  **Build the Footer:**
    *   Include the business name and a short tagline.
    *   Repeat the navigation links.
    *   Add contact information: Phone number and email address.
    *   Include the service area summary.
    *   Add a copyright notice: "© 2025 Furniture Assembly Fort Smith. All Rights Reserved."

4.  **Global Styles:**
    *   Create a global stylesheet in `src/styles/global.css`.
    *   Import this stylesheet into the `src/layouts/Layout.astro`.
    *   Define the brand colors (Primary, Secondary, Accent, Text) from `PROJECT_BRIEF.md` as CSS variables in the `:root`.
    *   Set the default font for the `body` to Roboto and for all headings (`h1`, `h2`, `h3`) to Montserrat.

5.  **Update Layout:** Add the `<Header />` and `<Footer />` components to the main `Layout.astro` file so they appear on every page.

Commit the changes to GitHub once complete.
```

### 👉 Prompt 3: Technical SEO Foundation

```
Let's implement the foundational technical SEO features to ensure the site is perfectly optimized for Google.

1.  **Install Astro Integrations:** Install and configure the following official Astro integrations:
    *   `@astrojs/sitemap`
    *   `@astrojs/image`

2.  **Create `robots.txt`:** Create a `public/robots.txt` file. It should allow all user-agents to crawl the entire site and should point to the `sitemap-index.xml` file.

3.  **Create SEO Component:** Create a new component at `src/components/SEO.astro`. This component should handle all critical meta tags.
    *   It should accept props for `title`, `description`, and `canonicalURL`.
    *   It should generate the following tags: `<title>`, `<meta name="description">`, `<link rel="canonical">`.
    *   It should also include Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`, `og:site_name`). For `og:image`, use a placeholder for now.

4.  **Integrate SEO Component:** Add the `SEO.astro` component to the `<head>` of the main `Layout.astro`. Pass the props from the individual pages to it. For now, you can use placeholder titles and descriptions for each page, which we will populate in the next steps.

5.  **Add Schema Markup:** In the `SEO.astro` component, add a `<script type="application/ld+json">` tag. The script should generate `LocalBusiness` schema markup. Use the information from `PROJECT_BRIEF.md` to populate the fields:
    *   `@type`: `HomeAndConstructionBusiness`
    *   `name`: `Furniture Assembly Fort Smith`
    *   `url`: The production URL (use a placeholder for now)
    *   `telephone`: The business phone number (use a placeholder)
    *   `address`: Since it's a service area business, use a `PostalAddress` type but only specify `addressLocality` (Fort Smith) and `addressRegion` (AR).
    *   `areaServed`: List the cities from the project brief (Fort Smith, Van Buren, Alma, Greenwood).
    *   `description`: The business description.
    *   `priceRange`: Use `$$` as a placeholder.

Commit all changes to GitHub when you are done.
```

---
## 📈 PHASE 4: CONVERSION OPTIMIZATION - Homepage & Trust Signals

**Goal:** Build the homepage with a strong focus on conversion, incorporating trust signals, clear calls-to-action, and the core value propositions.

### 👉 Prompt 4: Homepage Content & Layout

```
Let's build out the homepage (`index.astro`). The goal is to drive conversions by building trust and clearly communicating our value. Use the `PROJECT_BRIEF.md` for all content, messaging, and branding.

Create the following sections in order:

1.  **Hero Section:**
    *   A large, compelling headline: "Expert Furniture Assembly in Fort Smith. Done Right, Guaranteed."
    *   A subheadline that expands on the value: "We build your furniture so you don't have to. Fast, reliable service with transparent, flat-rate pricing."
    *   A prominent "Get Your Free Instant Quote" primary CTA button.
    *   A secondary, less prominent CTA for "Call Now: [Phone Number]".

2.  **Trust Bar:**
    *   A section immediately below the hero with logos of major furniture brands we assemble (IKEA, Wayfair, Amazon, Target, Walmart). You can use placeholder images for now.

3.  **"Why Choose Us" Section:**
    *   A three-column layout highlighting our key differentiators:
        *   **Dedicated Specialists:** "We only do furniture assembly. Our expertise means your furniture is built right, every time."
        *   **Transparent Pricing:** "Get an instant quote online. No hidden fees, no surprise charges."
        *   **Local & Reliable:** "We're your neighbors in Fort Smith. We show up on time and stand by our work."

4.  **Services Overview Section:**
    *   A brief introduction to our services with a grid of 4-6 common service categories (e.g., Bedroom Furniture, Office Furniture, Living Room, Outdoor). 
    *   Each item in the grid should have an icon and a title.
    *   Include a button that links to the main `/services` page.

5.  **How It Works Section:**
    *   A simple 3-step process:
        *   **Step 1: Get Your Quote:** "Select your items online or give us a call."
        *   **Step 2: Schedule Your Service:** "Pick a time that works for you."
        *   **Step 3: We Assemble:** "Our expert team builds your furniture perfectly."

6.  **Testimonials Section:**
    *   Create a section to display customer reviews. For now, create a component `src/components/TestimonialCard.astro` that accepts props for `quote`, `name`, and `city`. 
    *   Add 2-3 placeholder testimonials on the homepage using this component.

7.  **Final CTA Section:**
    *   A full-width section at the bottom of the page with a final, strong call to action: "Ready to get your furniture assembled?"
    *   Include the primary "Get Your Free Instant Quote" button again.

Remember to use the brand colors and fonts throughout. Make the design clean, professional, and mobile-first. Commit the changes to GitHub when you're done.
```

---
## 🏛️ PHASE 5: BUILDING THE CORE PAGES

**Goal:** Populate the primary inner pages with detailed, SEO-optimized content that informs users and targets valuable keywords.

### 👉 Prompt 5: Services Page

```
Let's build the Services page (`services.astro`). This page needs to be a comprehensive overview of everything we assemble, targeting long-tail keywords.

1.  **Page Headline:** "Complete Furniture Assembly Services in Fort Smith, AR".
2.  **Introduction:** Write a brief intro paragraph explaining that we can assemble almost any piece of flat-pack furniture.
3.  **Service Categories:** Create a grid or list layout for different service categories. For each category, include a title, a short description, and a list of common items we assemble. The categories are:
    *   **Bedroom Furniture:** Beds (all sizes), Dressers, Nightstands, Wardrobes (including IKEA PAX).
    *   **Living Room Furniture:** TV Stands, Entertainment Centers, Coffee Tables, Sofas, Bookshelves.
    *   **Office Furniture:** Desks, Office Chairs, Filing Cabinets, Bookshelves.
    *   **Outdoor & Patio:** Grills, Patio Sets, Sheds, Swing Sets, Trampolines.
    *   **Kitchen & Dining:** Dining Tables, Chairs, Kitchen Carts, Baker's Racks.
4.  **Our Process Section:** Briefly reiterate the 3-step "How It Works" process from the homepage.
5.  **Brands We Service Section:** Add a section that lists the major brands we work with (IKEA, Wayfair, Amazon, Target, Walmart, Pottery Barn, etc.).
6.  **CTA Section:** End the page with a strong call to action to get a free quote, linking to the pricing page.

Make sure to use relevant keywords naturally throughout the page content. Commit to GitHub when done.
```

### 👉 Prompt 6: Pricing Page & Quote Calculator Structure

```
This is a critical page. We need to build the Pricing page (`pricing.astro`) and set up the structure for our Instant Quote Calculator. This page must be transparent and build trust.

1.  **Page Headline:** "Transparent, Flat-Rate Pricing".
2.  **Pricing Philosophy:** Add a paragraph explaining our commitment to upfront pricing with no hidden fees.
3.  **Pricing Tiers Section:** Create a three-column layout to display the pricing tiers from `PROJECT_BRIEF.md`:
    *   Tier 1 (Simple): $110-$130. List examples.
    *   Tier 2 (Medium): $150-$200. List examples.
    *   Tier 3 (Complex): $225-$300+. List examples.
    *   Mention the **Minimum Service Fee** ($85) and the **Hourly Rate** ($90/hr) for custom jobs.
4.  **Quote Calculator Section:** This is the most important feature. Create a new component `src/components/QuoteCalculator.astro`.
    *   **Structure:** The calculator will have a two-column layout. The left side will have dropdowns to select furniture items, and the right side will display the running total.
    *   **Item Selection:** For now, create a simple structure. Use `<select>` dropdowns for categories (Bedroom, Living Room, Office). When a category is selected, dynamically show a list of items with checkboxes (e.g., Bed, Dresser, Nightstand).
    *   **Pricing Logic (JavaScript):** Create a `<script>` tag in the component. Define a JavaScript object that holds the price for each furniture item (you can use the low-end of our tier estimates for now). When a user checks an item, add its price to a running total. When they uncheck it, subtract the price. Display the total in real-time.
    *   **Display:** The right column should clearly display "Estimated Total:" and the calculated price. Below the total, add a "Book This Service" button that will eventually link to the contact form.
5.  **Add-on Services:** Below the calculator, add a section for our value-added services: Premium Package, Disassembly Service, and Packaging Haul-Away, with their respective pricing.

This is a complex component. Focus on getting the basic structure and JavaScript logic working. We can refine it later. Commit to GitHub when the structure is in place.
```

### 👉 Prompt 7: Service Area & About Us Pages

```
Let's create the content for the `service-area.astro` and `about.astro` pages. These are crucial for local SEO and building a personal connection.

**1. Service Area Page (`service-area.astro`):**
*   **Headline:** "Serving Fort Smith and the Entire Arkansas River Valley".
*   **Map:** Embed an iframe of a Google Map centered on Fort Smith. For now, you can just take a screenshot of the service area and embed it as an image.
*   **City List:** Create a detailed list of all the cities and towns we serve, as listed in the `PROJECT_BRIEF.md`.
*   **Local Commitment:** Write a paragraph about our commitment to providing reliable service to the entire region.
*   **City-Specific Links:** For Fort Smith, Van Buren, Alma, and Greenwood, create a small section for each with a brief, unique sentence about serving that city, and mention that a dedicated page is "coming soon".

**2. About Us Page (`about.astro`):**
*   **Headline:** "Your Local Fort Smith Furniture Assembly Experts".
*   **Our Story:** Write a compelling story. Start with the problem (frustration of assembling furniture) and how we decided to create a solution for our neighbors in Fort Smith.
*   **Meet the Founder/Team:** Add a section with a placeholder for a photo and a brief bio. Emphasize local roots and commitment to quality.
*   **Our Mission:** State our mission clearly: "To provide a reliable, professional, and stress-free furniture assembly experience for our community."
*   **Our Guarantee:** Prominently feature the "100% Satisfaction Guarantee".

Commit the new content to GitHub.
```

---
## 🚀 PHASE 6: LAUNCH & ACCELERATE

**Goal:** Finalize the remaining pages, set up the blog, and prepare for launch.

### 👉 Prompt 8: Contact Page & Blog Setup

```
Let's finish the core site structure by building the Contact page and setting up the blog.

**1. Contact Page (`contact.astro`):**
*   **Headline:** "Get in Touch".
*   **Contact Options:** Provide multiple ways to contact us:
    *   A simple contact form with fields for Name, Email, Phone, and Message.
    *   Our business phone number (make it a click-to-call link).
    *   Our business email address.
*   **Business Hours:** List our hours of operation.
*   **Service Area Reminder:** Include the service area map or a link to the service area page.

**2. Blog Setup (`blog.astro` and `src/pages/blog/[...slug].astro`):**
*   **Blog Index Page (`blog.astro`):** This page will list all blog posts. For now, create a simple layout with a headline "Furniture Assembly Tips & Insights". Add a placeholder message like "Our blog is coming soon! Check back for helpful articles."
*   **Blog Post Template (`src/pages/blog/[...slug].astro`):** This will be the template for individual blog posts. Create a dynamic route that can handle different slugs.
    *   The layout should have a clear headline for the post title, a section for the post content, and author/date information.
    *   We will use Astro's Content Collections to manage the blog posts. Create a `src/content/config.ts` file and define a `blog` collection with a schema that includes `title`, `description`, `pubDate`, and `heroImage` (optional).
*   **Create First Post:** Create a sample markdown file in `src/content/blog/` named `hello-world.md` with some placeholder content so we can see the template working.

Commit the final pages to GitHub. The core website structure is now complete!
```

### 👉 Prompt 9: Final Review and Deployment

```
We are ready for the final review before focusing on content population.

1.  **Review All Pages:** Go through every page of the website (Homepage, Services, Pricing, Service Area, About, Contact, Blog) and check for the following:
    *   Consistent branding (colors, fonts, logo).
    *   Correct navigation links in the header and footer.
    *   Mobile responsiveness. Ensure every page looks great on a small screen.
    *   No broken links or placeholder text (except where intended, like testimonials).

2.  **Final Code Push:** Commit any last-minute fixes to the GitHub repository.

3.  **Vercel Environment Variables:** Provide instructions on how to set environment variables in Vercel for production. We will need these later for things like Google Analytics tracking IDs.

4.  **Celebrate!** We have successfully built and deployed a professional, SEO-optimized foundation for a local service business.

Once you confirm everything is ready, I will begin the process of creating the detailed content for the service and location pages.
```

---
