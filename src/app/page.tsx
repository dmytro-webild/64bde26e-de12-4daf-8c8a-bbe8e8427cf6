"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Work", id: "portfolio" },
        { name: "Services", id: "services" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      button={{
        text: "Hire Me",        href: "#contact"}}
      brandName="Feature Webdesign"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "sparkles-gradient"}}
      title="I Build Modern & Animated Websites"
      description="Helping businesses grow with high-converting and visually stunning websites"
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/create-creativity-ideas-design-concept_53876-125027.jpg", imageAlt: "Abstract Tech Design" },
        { imageSrc: "http://img.b2bpic.net/free-photo/computer-screen-with-ai-program-turning-text-prompt-into-videos-results_482257-125496.jpg", imageAlt: "Dashboard Interface" },
        { imageSrc: "http://img.b2bpic.net/free-photo/black-laptop-screen-dark-room-night_169016-59640.jpg", imageAlt: "Geometric Lines" },
        { imageSrc: "http://img.b2bpic.net/free-photo/letter-eyeglasses-smartphone-earphone-coffee-cup-white-desk_23-2148061610.jpg", imageAlt: "Creative Studio" },
        { imageSrc: "http://img.b2bpic.net/free-photo/abstract-blue-background-with-many-small-details-generative-ai_169016-30136.jpg", imageAlt: "Tech Particles" },
        { imageSrc: "http://img.b2bpic.net/free-photo/startup-employee-looking-charts-using-ai-software-green-screen-laptop_482257-90858.jpg", imageAlt: "Laptop Display" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/admin-uses-mockup-notebook-server-hub_482257-124633.jpg", imageAlt: "Laptop Display" },
        { imageSrc: "http://img.b2bpic.net/free-photo/abstract-dark-background-with-purple-lines-generative-ai_169016-30663.jpg", imageAlt: "Tech Particles" },
        { imageSrc: "http://img.b2bpic.net/free-photo/boardroom-office-space-with-desks-stationary-tools-used-everyday-executive-tasks-company-department-place-empty-startup-coworking-space-small-business-decorations_482257-70394.jpg", imageAlt: "Creative Studio" },
        { imageSrc: "http://img.b2bpic.net/free-photo/studio-background-concept-dark-gradient-purple-studio-room-background-product_1258-79305.jpg", imageAlt: "Geometric Lines" },
        { imageSrc: "http://img.b2bpic.net/free-photo/global-network-illustration_53876-16141.jpg", imageAlt: "Dashboard Interface" },
        { imageSrc: "http://img.b2bpic.net/free-photo/modern-office-workspace-equipped-digital-design-photo-editing_482257-126934.jpg", imageAlt: "Abstract Tech Design" },
      ]}
      buttons={[
        { text: "View Work", href: "#portfolio" },
        { text: "Contact Me", href: "#contact" },
      ]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg", alt: "Entrepreneur" },
        { src: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-sitting-desk-table-business-company-office_482257-16773.jpg", alt: "Founder" },
        { src: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-woman_329181-13486.jpg", alt: "Creative" },
        { src: "http://img.b2bpic.net/free-photo/closeup-portrait-successful-happy-smiling-young-woman-beige-jacket-glasses-standing-lobby-office-reception-greeting-business-client-with-pleasant-grin-inviting-company_197531-30568.jpg", alt: "Manager" },
        { src: "http://img.b2bpic.net/free-photo/portrait-attractive-young-businesswoman_329181-15813.jpg", alt: "Director" },
      ]}
      avatarText="Trusted by 100+ happy clients worldwide"
      marqueeItems={[
        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6zurvo", alt: "Brand 1" },
        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=aupkdk", alt: "Brand 2" },
        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tzur45", alt: "Brand 3" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/people-collaborating-office_23-2147668773.jpg", alt: "Brand 4" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/stationery-ice-cream-concept_23-2147803263.jpg", alt: "Brand 5" },
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Microsoft", "Google", "Amazon", "Apple", "Meta", "Adobe", "Shopify"]}
      title="Trusted by growing brands"
      description="I work with businesses of all sizes to deliver high-converting digital solutions."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "s1", title: "Web Design", author: "High-End UX", description: "Beautiful layouts designed for user conversion.", tags: ["Figma", "UI/UX"], imageSrc: "http://img.b2bpic.net/free-photo/outline-responsive-design_1134-80.jpg" },
        { id: "s2", title: "Frontend Development", author: "React & Next.js", description: "High-performance web applications built with React.", tags: ["React", "JS"], imageSrc: "http://img.b2bpic.net/free-photo/top-view-workplace-night-study-work-late-evening_169016-18177.jpg" },
        { id: "s3", title: "Animated Websites", author: "GSAP/Framer", description: "Stunning animations for premium user experiences.", tags: ["Motion", "GSAP"], imageSrc: "http://img.b2bpic.net/free-photo/abstract-panoramic-neon-background_1048-15914.jpg" },
        { id: "s4", title: "UI/UX Design", author: "Research-Based", description: "User-centered design that delivers real results.", tags: ["UX", "Strategy"], imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-taking-notes-office_23-2149749916.jpg" },
      ]}
      title="My Expert Services"
      description="Building digital experiences that drive growth and engagement."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardFour
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Corporate Site", price: "Case Study", variant: "Web Dev", imageSrc: "http://img.b2bpic.net/free-photo/elegant-cozy-office-lifestyle_23-2149636247.jpg" },
        { id: "p2", name: "E-commerce Hub", price: "Case Study", variant: "Full Dev", imageSrc: "http://img.b2bpic.net/free-photo/bright-purple-square-mosaic-textural-background_1258-69255.jpg" },
        { id: "p3", name: "Startup Dashboard", price: "Case Study", variant: "Interactive", imageSrc: "http://img.b2bpic.net/free-photo/close-up-admin-office-sing-tablet-design-machine-learning-algorithms_482257-112941.jpg" },
        { id: "p4", name: "B2B SaaS Portal", price: "Case Study", variant: "Saas", imageSrc: "http://img.b2bpic.net/free-photo/elegant-cozy-office-with-laptop-desk_23-2149636248.jpg" },
        { id: "p5", name: "Creative Agency", price: "Case Study", variant: "Digital", imageSrc: "http://img.b2bpic.net/free-photo/general-headquarters-monitoring-room-with-mockup-screen-tablet_482257-90086.jpg" },
        { id: "p6", name: "Mobile App Landing", price: "Case Study", variant: "Responsive", imageSrc: "http://img.b2bpic.net/free-photo/minimal-style-device-screen_23-2151913289.jpg" },
      ]}
      title="Portfolio Highlights"
      description="Selected work showcases creative and technical expertise."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="About Feature Webdesign"
      description={[
        "I'm a web developer focused on building modern, animated, and user-friendly websites. My approach combines technical precision with creative flair.",        "Skills: HTML, CSS, JavaScript, React, Next.js, Framer Motion, Tailwind CSS."]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Why Choose Me"
      tag="Expertise"
      metrics={[
        { id: "m1", value: "100%", description: "Fast Delivery" },
        { id: "m2", value: "Modern", description: "Design Standard" },
        { id: "m3", value: "Fluid", description: "Responsive Code" },
        { id: "m4", value: "Clean", description: "Scalable Codebase" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Discussion", author: "Step 01", description: "Understanding your needs and business goals.", tags: ["Strategy"], imageSrc: "http://img.b2bpic.net/free-vector/smart-home-management_52683-43939.jpg" },
        { id: "f2", title: "Design", author: "Step 02", description: "Creating visually stunning design concepts.", tags: ["Design"], imageSrc: "http://img.b2bpic.net/free-photo/man-designing-websites-high-angle_23-2149930945.jpg" },
        { id: "f3", title: "Development", author: "Step 03", description: "Coding your project with high-performance standards.", tags: ["React"], imageSrc: "http://img.b2bpic.net/free-photo/closeup-black-freelance-developer-using-desktop-monitor_482257-131138.jpg" },
        { id: "f4", title: "Delivery", author: "Step 04", description: "Quality assurance and final project delivery.", tags: ["Launch"], imageSrc: "http://img.b2bpic.net/free-photo/video-editor-content-creator-filming-tutorial-about-professionally-editing-footage_482257-82231.jpg" },
      ]}
      title="My Development Process"
      description="A clear, collaborative 4-step workflow to ensure project success."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Sarah Johnson", role: "CEO", company: "TechCorp", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/blurred-corridor-with-plants_1203-660.jpg" },
        { id: "t2", name: "Michael Chen", role: "CTO", company: "InnovateLab", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-jolly-media-star-telling-viewers-facts-about-himself-close-up_482257-116639.jpg" },
        { id: "t3", name: "Emily Rodriguez", role: "Marketing Director", company: "GrowthCo", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/serious-beautiful-middle-aged-business-woman_1262-3072.jpg" },
        { id: "t4", name: "David Kim", role: "Product Manager", company: "StartupXYZ", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/minimalist-spacious-interior-design_23-2150378906.jpg" },
        { id: "t5", name: "Jane Doe", role: "Creative Director", company: "DesignCo", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/black-white-analog-portrait-handsome-man-posing-artistically-outdoors_23-2149630145.jpg" },
      ]}
      title="Client Reviews"
      description="What my clients have to say about working together."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to build your website?"
      description="Let's connect and start working on your next big project."
      inputs={[
        { name: "name", type: "text", placeholder: "Name", required: true },
        { name: "email", type: "email", placeholder: "Email", required: true },
      ]}
      textarea={{ name: "message", placeholder: "Your message", rows: 4, required: true }}
      imageSrc="http://img.b2bpic.net/free-photo/young-man-woman-making-funny-faces-while-taking-selfies-party-with-neon-lights-smoke_482257-29540.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Links",          items: [
            { label: "Home", href: "#hero" },
            { label: "Work", href: "#portfolio" },
            { label: "About", href: "#about" },
          ],
        },
        {
          title: "Contact",          items: [
            { label: "Email", href: "mailto:hello@feature.web" },
            { label: "WhatsApp", href: "#" },
            { label: "Telegram", href: "#" },
          ],
        },
      ]}
      logoText="Feature Webdesign"
      copyrightText="© 2025 Feature Webdesign. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
