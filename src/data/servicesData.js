export const SERVICES_DATA = {
  hero: {
    label: "WHAT WE DO / YELLOW SPRINGS",
    headlineLine1: "Whatever the moment,",
    headlineLine2: "we know what it takes.",
    supportingText:
      "From meaningful celebrations and corporate experiences to technical production, entertainment and rentals — we bring every element together under one roof.",
    cta: "EXPLORE OUR SERVICES ↓",
    annotation: "5 SERVICES // ONE TEAM",
    stack: [
      {
        id: "weddings",
        label: "WEDDINGS",
        title: "Engagements & Weddings",
        src: "/assets/wedding2.webp",
        alt: "Luxury couture wedding scenography by Yellow Springs in Dubai",
        caption: "FIG 01 // SENSORY CELEBRATIONS",
      },
      {
        id: "corporate",
        label: "CORPORATE",
        title: "Corporate Events",
        src: "/assets/corporate.webp",
        alt: "Large scale auditorium stage and corporate gala production in UAE",
        caption: "FIG 02 // SCALE & STAGES",
      },
      {
        id: "av",
        label: "AV + SOUND",
        title: "AV & Sound Equipment",
        src: "/assets/audio.webp",
        alt: "Precision acoustic sound arrays and concert grade technical equipment",
        caption: "FIG 03 // TECHNICAL MASTERY",
      },
      {
        id: "artists",
        label: "ARTISTS",
        title: "Artist Management",
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
        alt: "Live musical performer and concert stage lighting in UAE",
        caption: "FIG 04 // LIVE ENERGY",
      },
      {
        id: "rentals",
        label: "RENTALS",
        title: "Event Rentals",
        src: "/assets/furniture.webp",
        alt: "Bespoke velvet and bouclé lounge rental furniture setup in Dubai",
        caption: "FIG 05 // WAREHOUSE ASSETS",
      },
    ],
  },

  intro: {
    sectionNum: "01",
    sectionLabel: "THE EXPERIENCE",
    statementLines: [
      "Some moments need a celebration.",
      "Some need a stage.",
      "Some need both.",
    ],
    supportingCopy:
      "Yellow Springs brings creative planning, technical expertise, entertainment and event essentials together to create experiences that feel seamless from beginning to end.",
    indexItems: [
      { num: "01", label: "ENGAGEMENTS & WEDDINGS", targetId: "weddings" },
      { num: "02", label: "CORPORATE EVENTS", targetId: "corporate" },
      { num: "03", label: "AV & SOUND EQUIPMENT", targetId: "av-sound" },
      { num: "04", label: "ARTIST MANAGEMENT", targetId: "artists" },
      { num: "05", label: "RENTALS & ASSETS", targetId: "rentals" },
    ],
  },

  weddings: {
    sectionNum: "01",
    sectionLabel: "ENGAGEMENTS & WEDDINGS",
    headlineLine1: "Your story.",
    headlineLine2: "Beautifully celebrated.",
    supportingCopy:
      "From intimate engagements to full-scale wedding celebrations, we bring together planning, atmosphere and thoughtful details to create an occasion that feels entirely yours.",
    capabilities: [
      "CONCEPT & PLANNING",
      "VENUE EXPERIENCE",
      "DÉCOR & STYLING",
      "ENTERTAINMENT",
      "TECHNICAL PRODUCTION",
      "EVENT COORDINATION",
    ],
    ctaText: "DISCOVER WEDDINGS ↗",
    images: {
      primary: {
        src: "/assets/wedding1.webp",
        alt: "Couple and guests candidly celebrating at bespoke UAE wedding",
        caption: "CEREMONY SCENOGRAPHY · DUBAI",
      },
      detail1: {
        src: "/assets/engagement.webp",
        alt: "Tactile artisanal floral tablescape and ambient candles",
        caption: "DETAIL // 01 · FLORAL ARCHITECTURE",
      },
      detail2: {
        src: "/assets/hero-detail-champagne.jpg",
        alt: "Intimate champagne table setting and bespoke glassware",
        caption: "DETAIL // 02 · GUEST TOUCHPOINTS",
      },
    },
  },

  corporate: {
    sectionNum: "02",
    sectionLabel: "CORPORATE EVENTS",
    headlineLine1: "Business,",
    headlineLine2: "but never ordinary.",
    supportingCopy:
      "From conferences and launches to gala evenings and company celebrations, we create corporate experiences that are professionally executed without losing their energy.",
    types: [
      "CONFERENCES",
      "PRODUCT LAUNCHES",
      "GALA EVENTS",
      "AWARD CEREMONIES",
      "BRAND EXPERIENCES",
      "COMPANY CELEBRATIONS",
    ],
    ctaText: "EXPLORE CORPORATE EVENTS ↗",
    image: {
      src: "/assets/corporate.webp",
      alt: "Panoramic curved LED stage and corporate summit amphitheater in Dubai",
      caption: "PANORAMIC BESPOKE STAGING & KEYNOTE PRODUCTION · UAE",
    },
  },

  avSound: {
    sectionNum: "03",
    sectionLabel: "AV & SOUND",
    conceptBadge: "THE EXPERIENCE BEHIND THE EXPERIENCE",
    headlineWords: ["Seen.", "Heard.", "Felt."],
    supportingCopy:
      "The right technical setup changes everything. Yellow Springs provides professional AV and sound solutions designed around the scale, atmosphere and requirements of your event.",
    technicalIndex: [
      { code: "AV.01", title: "SOUND SYSTEMS", desc: "Line array acoustic engineering calibrated for room speech clarity & punch" },
      { code: "AV.02", title: "LIGHTING", desc: "Kinetic moving heads, warm ambient uplighting, and stage beam profiles" },
      { code: "AV.03", title: "LED / DISPLAY SOLUTIONS", desc: "Ultra-fine pitch indoor & outdoor curved LED video walls & backdrop screens" },
      { code: "AV.04", title: "MICROPHONES", desc: "Multi-channel wireless Shure & Sennheiser systems with zero interference" },
      { code: "AV.05", title: "DJ EQUIPMENT", desc: "Pioneer Pro DJ consoles, Nexus link mixers, and monitoring rigs" },
      { code: "AV.06", title: "TECHNICAL EVENT SUPPORT", desc: "Certified sound engineers, lighting designers & UAE Civil Defence compliance" },
    ],
    ctaText: "EXPLORE AV & SOUND ↗",
    image: {
      src: "/assets/audio.webp",
      alt: "Professional digital sound mixing console and concert line array equipment",
      caption: "DIRECT IN-HOUSE TECHNICAL RIGGING FLEET · DUBAI",
    },
  },

  artists: {
    sectionNum: "04",
    sectionLabel: "ARTIST MANAGEMENT",
    headlineLine1: "The right act",
    headlineLine2: "changes the room.",
    supportingCopy:
      "From live performers and musicians to DJs and entertainment acts, we help connect the right talent with the right occasion.",
    marqueeText: "LIVE MUSIC • DJs • PERFORMERS • ENTERTAINMENT • HOSTS • ",
    genres: [
      { name: "LIVE BANDS & ENSEMBLES", note: "Jazz trios, acoustic quartets & high-energy showbands" },
      { name: "INTERNATIONAL & LOCAL DJs", note: "Curated musical selections tailored to guest demographics" },
      { name: "SOLO INSTRUMENTALISTS", note: "Electric violinists, saxophonists & harpists" },
      { name: "ROAMING ENTERTAINMENT", note: "Illusionists, kinetic dancers & immersive walkabout acts" },
      { name: "BILINGUAL MCs & EMCEES", note: "Charismatic hosts delivering seamless protocol pacing" },
    ],
    ctaText: "EXPLORE ARTISTS ↗",
    image: {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      alt: "Live concert performance artist under dramatic golden stage spotlights",
      caption: "CURATED ARTISTIC ENERGY · UAE ENTERTAINMENT ROSTER",
    },
  },

  rentals: {
    sectionNum: "05",
    sectionLabel: "RENTALS",
    headlineLine1: "The little things.",
    headlineLine2: "And the not-so-little things.",
    supportingCopy:
      "From furniture and entertainment to event essentials, our rental collection helps bring every part of the occasion together.",
    ctaText: "EXPLORE ALL RENTALS ↗",
    categories: [
      {
        id: "furniture",
        label: "EVENT FURNITURE",
        subtitle: "Luxury Lounges & Dining",
        description: "Curated velvet sofas, bouclé armchairs, organic wood cocktail tables, and bespoke dining chairs.",
        image: "/assets/furniture.webp",
        alt: "Luxury event furniture setup with velvet armchairs and designer cocktail tables",
      },
      {
        id: "kids",
        label: "KIDS EXPERIENCES",
        subtitle: "Themed Play & Creativity",
        description: "Bespoke soft-play arenas, organic teepee tents, artisanal crafts, and custom children's party staging.",
        image: "/assets/kids.webp",
        alt: "Artisanal children birthday celebration and themed play environment",
      },
      {
        id: "entertainment",
        label: "ENTERTAINMENT",
        subtitle: "Atmospheric Staging",
        description: "Illuminated bespoke LED dance floors, runway platforms, photobooth backdrops, and interactive installations.",
        image: "/assets/dancefloor.webp",
        alt: "Luminous bespoke LED dance floor and ambient celebratory staging",
      },
      {
        id: "food-stations",
        label: "FOOD STATIONS",
        subtitle: "Artisanal Carts & Bars",
        description: "Live popcorn carts, fairy candy floss stalls, vintage mocktail bars, and confectionery displays.",
        image: "/assets/birthday2.webp",
        alt: "Interactive dessert station and bespoke celebration cart",
      },
      {
        id: "essentials",
        label: "EVENT ESSENTIALS",
        subtitle: "Infrastructure & Hardware",
        description: "Chrome stanchions, plush velvet ropes, red carpet arrivals, ambient patio heaters, and pipe & drape.",
        image: "/assets/birthday1.webp",
        alt: "Event infrastructure and celebratory welcome installation",
      },
      {
        id: "party-equipment",
        label: "PARTY EQUIPMENT",
        subtitle: "Atmosphere & Special FX",
        description: "Cold spark pyro fountains, dry ice ground fog machines, haze generators, and laser arrays.",
        image: "/assets/audio.webp",
        alt: "Concert grade special effects and audio equipment",
      },
    ],
  },

  connected: {
    label: "MORE THAN INDIVIDUAL SERVICES",
    headline: "Better together.",
    statement:
      "One team coordinating the creative, technical and practical elements means fewer moving parts for you — and a more seamless experience for everyone attending.",
    nodes: [
      { id: "weddings", label: "ENGAGEMENTS & WEDDINGS", desc: "Atmosphere & Scenography", pos: "top-left" },
      { id: "corporate", label: "CORPORATE EVENTS", desc: "Scale & Precision", pos: "top-right" },
      { id: "av", label: "AV & SOUND", desc: "Acoustics & Lighting", pos: "bottom-left" },
      { id: "artists", label: "ARTIST MANAGEMENT", desc: "Live Talent & Energy", pos: "bottom-right" },
      { id: "rentals", label: "RENTALS", desc: "Furniture & Essentials", pos: "bottom-center" },
    ],
  },

  process: {
    label: "FROM BRIEF TO EVENT",
    headline: "You bring the reason. We bring the rest.",
    steps: [
      {
        num: "01",
        title: "TELL US",
        desc: "Share your ambition, date, guest profile, and aesthetic vision during an intimate discovery session.",
      },
      {
        num: "02",
        title: "WE PLAN",
        desc: "Spatial layouts, bespoke carpentry renders, run-of-show cues, and complete UAE municipality permits.",
      },
      {
        num: "03",
        title: "WE BUILD",
        desc: "Direct warehouse dispatch of pro AV, stage joinery, lighting calibration, and floral styling on site.",
      },
      {
        num: "04",
        title: "WE BRING IT TO LIFE",
        desc: "Founders on the floor directing every cue from doors open to final standing ovation.",
      },
    ],
    ctaText: "START A CONVERSATION ↗",
  },

  finalCta: {
    headlineLine1: "Not sure which",
    headlineLine2: "service you need?",
    answerLine: "That’s what we’re here for.",
    supportingText:
      "Tell us what you're planning and we'll help work out what it takes to make it happen across Dubai, Abu Dhabi, and the Emirates.",
    primaryCta: "TELL US ABOUT YOUR EVENT ↗",
    secondaryCta: "WHATSAPP US",
    coverageTag: "UAE TURNKEY PRODUCTION · 15+ YEARS OF CONTINUITY",
  },
};
