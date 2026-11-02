# CampusConnect-Website_2026
# CampusConnect Foundation

# Module: WEDE5020 - Web Development (Introduction)| Student: Sinoxolo Tyeke|
# Institution: Rosebank College NMB

# Table of Contents

1. Project Overview
2. Purpose
3. Website Pages
4. Technologies Used
5. Website Hierarchy
6. Features
7. Part 1: Wireframe
8. Part 2: CSS
9. Part 3: Enhancing Functionality and SEO
10. Changelog
11. Future Improvements
12. Author
13. License
14. References


##  1. Project Overview



CampusConnect Foundation is a student support website developed to improve communication between students, lecturers, the Representative Council of Learners (RCL), and campus management. The website provides an easy-to-use platform where students can submit complaints, suggestions, and concerns, track their reported issues, access student resources, and find important contact information.

---


## 2. Purpose

The purpose of this website is to:


- Improve communication between students and campus management.
- Provide a platform for reporting complaints, suggestions, and concerns.
- Keep students informed through announcements and updates.
- Give students access to support resources and frequently asked questions.
- Provide contact information for the RCL and campus management.

---
## 3. Website Pages


### 3.1. Home (index.html)

The homepage introduces CampusConnect Foundation and includes:

- Welcome message and hero section
- "How We Help" service cards
- Latest announcements
- About preview and "Need Help Now?" panel
- Navigation menu, footer and newsletter box


## 3.2. About (Pages/about.html)
This page tells us the story of CampusConnect and includes

- Our story, mission and vision
- Who we serve (students,RCLs lecturers,campus manangment)
- Campus life image gallery with lightbox
- Meet our team

### 3.3. Services (Pages/services.html)

This page explains the services offered by CampusConnect Foundation:

- Student Support
- Academic Support
- Campus Announcements
- Contact Directory
- Resources
- Frequently Asked Questions (FAQs)
- Issue Tracking

---

### 3.4. Enquiry (Pages/enquiry.html)


Students can:

- Submit complaints, suggestions and concerns
- Track submitted issues with a reference number
- View FAQs in an accordion

---
### 3.5. Contact (Pages/contact.html)


This page includes:

- RCL and campus manangement contact details
- Contact form that bulids an email to the organisation
- Office hours
- Interactive campus map


---

## 4. Technologies Used


- HTML5
- CSS3
- JavaScript (ES6)
- Google Fonts (Poppins)
- Font Awesome Icons
- Git and Github
- GitHub Pages (hosting)
- Leaflet.js and OpenStreetMap

## 5. Website Hierarchy

Home (index.html)
|
|_ About
|_ Services
|_ Enquiry
|_ Contact


## 5.1. Project folder structure

CampusConnect-Website_2026
├── Assets
│   ├── images
│   └── screenshots
├── css
│   └── style.css
├── js
│   └── script.js
├── Pages
│   ├── about.html
│   ├── contact.html
│   ├── enquiry.html
│   ├── privacy.html
│   ├── services.html
│   └── terms.html
├── index.html
├── README.md
├── robots.txt
└── sitemap.xml

## 6. Features

- Responsive navigation with a mobile hamburger menu
- Student enquiry form with validation and a category-specific response
- Issue tracking by refernce number
- Contact form that complies a validated 
- Interactive Leaflet map
- Gallery with lightbox
- FAQ accordion
- Dynamic services with live search and sort
- Latest announcements and student support information
- Responsive layout for phones, tablets and desktops
- SEO: titles, meta tags, structured data, robots.txt and sitemap.xml
- Font Awesome icons and Google Fonts

## 7. Part 1: Wireframe

Low-fidelity wireframe for all 5 pages of the site, showing the layout structure before visual design was applied.

## 7.1. Home (index.html)
┌──────────────────────────────────────────────────────────────┐
│  info@campusconnectnmb.co.za  •  phone  •  address    Social  │
├──────────────────────────────────────────────────────────────┤
│  [Logo] CampusConnect     Home About Services Enquiry Contact │
│                                                   [Get Started]│
├──────────────────────────────────────────────────────────────┤
│  Welcome to CampusConnect Foundation                          │
│  Your Voice.                                     ┌──────────┐ │
│  Your Campus.                                    │  [IMAGE] │ │
│  Our Mission.                                    └──────────┘ │
│  paragraph...                                                 │
│  [ Learn More ]  [ Submit Enquiry ]                            │
├──────────────────────────────────────────────────────────────┤
│  ┌──────────┐   About CampusConnect Foundation                │
│  │  [IMAGE] │   paragraph...                                  │
│  └──────────┘   [ Read More ]                                 │
├──────────────────────────────────────────────────────────────┤
│  Our Services                                                 │
│  [Student   [Academic   [Campus        [Contact   [Track      │
│   Support]   Support]    Announcements] Directory]  Issues]   │
├──────────────────────────────────────────────────────────────┤
│  Latest Announcements                 │  Need to Submit an    │
│  • Important Notice ........ 12 May   │  Issue?               │
│  • Campus Maintenance ...... 10 May   │  We are here to       │
│  • RCL Meeting .............. 08 May  │  listen and help.     │
│                                        │  [ Submit Enquiry ]   │
├──────────────────────────────────────────────────────────────┤
│  [Logo]      Quick Links   Services      Contact Us            │
│  tagline     Home          Student Sup.  email                 │
│              About         Academic Sup. phone                 │
│              Services      Announcements address               │
│              Enquiry       Resources                           │
│              Contact       Track Issues                        │
├──────────────────────────────────────────────────────────────┤
│  © 2026 CampusConnect Foundation.        Privacy | Terms       │
└──────────────────────────────────────────────────────────────┘

## 7.2. About Page (Pages/about.html)
┌──────────────────────────────────────────────────────────────┐
│  Top bar + Header (same as Home, "About" active)               │
├──────────────────────────────────────────────────────────────┤
│                          About Us                              │
│                        Home / About                            │
├──────────────────────────────────────────────────────────────┤
│  Our Story                              ┌──────────────────┐   │
│  How CampusConnect began                │      [IMAGE]     │   │
│  paragraph / paragraph / paragraph      └──────────────────┘   │
├──────────────────────────────────────────────────────────────┤
│  [ Our Mission ]            [ Our Vision ]                     │
│    icon + text                icon + text                      │
├──────────────────────────────────────────────────────────────┤
│  Who We Serve                                                  │
│  [Students] [RCL's] [Lecturers] [Campus Management]            │
├──────────────────────────────────────────────────────────────┤
│  Meet Our Team                                                 │
│  [ (o) Sinoxolo Tyeke ]  [ (o) RCL Rep ]  [ (o) Campus Coord ] │
│      Founder                Student Leader     Coordinator     │
├──────────────────────────────────────────────────────────────┤
│  Footer (same as Home)                                          │
└──────────────────────────────────────────────────────────────┘

## 7.3. Services Page (Pages/services.html)
┌──────────────────────────────────────────────────────────────┐
│  Top bar + Header ("Services" active)                          │
├──────────────────────────────────────────────────────────────┤
│                        Our Services                            │
│                      Home / Services                           │
├──────────────────────────────────────────────────────────────┤
│  [Student    [Academic    [Campus                              │
│   Support]    Support]     Announcements]                      │
│                                                                  │
│  [Contact    [Resources    [Issue                               │
│   Directory]  & FAQs]       Tracking]                           │
├──────────────────────────────────────────────────────────────┤
│  We are here to support you every step of the way.             │
│                                        [ Submit an Enquiry ]    │
├──────────────────────────────────────────────────────────────┤
│  Footer (same as Home)                                          │
└──────────────────────────────────────────────────────────────┘

## 7.4. Enquiry Page (Pages/enquiry.html)
┌──────────────────────────────────────────────────────────────┐
│  Top bar + Header ("Enquiry" active)                            │
├──────────────────────────────────────────────────────────────┤
│                     Submit an Enquiry                          │
│                      Home / Enquiry                             │
├──────────────────────────────────────────────────────────────┤
│  Submit an Issue                       │  Track Your Issue     │
│  Full Name        Student Number       │  [Reference Number]   │
│  Email Address     Phone Number        │  [ Track Issue ]      │
│  Category (dropdown)                    │                       │
│  Subject                                │  FAQs                 │
│  Description                            │  • How do I submit?  │
│  [ Submit Issue ]                       │  • How long...?      │
│                                          │  • How do I track?   │
│                                          │  • What issues...?   │
├──────────────────────────────────────────────────────────────┤
│  Footer (same as Home)                                          │
└──────────────────────────────────────────────────────────────┘

## 7.5. Contact Page (Pages/contact.html)
┌──────────────────────────────────────────────────────────────┐
│  Top bar + Header ("Contact Us" active)                        │
├──────────────────────────────────────────────────────────────┤
│                         Contact Us                              │
│                       Home / Contact                            │
├──────────────────────────────────────────────────────────────┤
│  [RCL Contacts]    [Campus Management]    [Location]            │
│  [View Contacts]   [View Contacts]        [View on Map]         │
├──────────────────────────────────────────────────────────────┤
│  Send us a Message                    │  Office Hours           │
│  Your Name                             │  Mon-Fri  08:00-16:30  │
│  Email Address                         │  Saturday  Closed      │
│  Subject                               │  Sunday    Closed      │
│  Message                               │  ┌──────────────────┐ │
│  [ Send Message ]                      │  │   Map / Location  │ │
│                                         │  └──────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│  Footer (same as Home)                                          │
└──────────────────────────────────────────────────────────────┘

## 8. Part 2: CSS (style.css)
The stylesheet used across all pages of the site (index.html and everything under Pages/). It is saved at css/style.css, and every page links to it with a relative path.

What it covers
- Design tokens — CSS custom properties in :root for the colour palette (purple, teal, amber, green, pink, blue), border radii, shadows and container width
- Top bar & header — contact strip, sticky nav with active-link underline, mobile hamburger toggle
- Home page — hero, About preview, "How We Help" card grid, announcements and help panel
- Inner-page shared styles — page hero banner, breadcrumb, section headings
- About page — story layout, Mission/Vision cards, Who We Serve grid, gallery, Meet Our Team cards
- Contact page — 3-card info row, message form, office hours list, map
- Enquiry page — submit-issue form, track-issue card, FAQ accordion 
- Footer — 4-column layout, legal bar
- Responsive breakpoints — 1400px, 991px, 720px, 600px, 480px and 380px for large-screen, tablet and mobile layout changes

## 8.1. File Location
project-root/
├── index.html
├── css/
│   └── style.css
└── Pages/
    ├── about.html
    ├── services.html
    ├── enquiry.html
    └── contact.html


## 9. Part 3: Enhancing Functionality and SEO
Live website: https://st10508969.github.io/CampusConnect-Website_2026/ 
GitHub repository: https://github.com/st10508969/CampusConnect-Website_2026

Overview

In Part 3 the CampusConnect Foundation website was upgraded from a static layout to an interactive, searchable and search-engine-friendly site. JavaScript was added for interactivity, forms were given full validation and processing, SEO best practices were applied to every page, and the site was deployed online. All changes made in response to Part 2 feedback are recorded in the Changelog section below.

## 9.1. JavaScript functionality (js/script.js)
Feature	Page	Description
Responsive menu	All pages	Hamburger menu opens and closes on tablets and phones.
Accordion	Enquiry	FAQs expand and collapse when clicked.
Dynamic services	Services	Service cards are generated by JavaScript from a data array.
Live search and sort	Services	Filters services as the user types (title, description and keywords); sort A–Z or Z–A; shows a result count and a "no results" message.
Interactive map	Contact	Leaflet.js map with OpenStreetMap tiles, a marker and a popup for Rosebank College.
Gallery lightbox	About	Clicking an image opens it in a larger overlay with next, previous and close controls (also Esc and arrow keys).
Animations	All pages	CSS transitions on hover, accordion and lightbox; prefers-reduced-motion is respected.
Newsletter box	Home	Validates the email address and shows a confirmation message.

## 9.2. Forms and validation

Enquiry form (Pages/enquiry.html)

- Controls: text, email, phone, dropdown, textarea, radio buttons and a consent checkbox, all with labels.
- Validation: required fields, name length, student number (6–10 digits), email format, South African phone format, subject and description length. Error messages appear under each field and clear as the user corrects them.
- Processing: the form is submitted with fetch() (AJAX) to a testing API. The user receives a category-specific response covering cost, expected response time and the department that will handle the issue, plus a reference number.
- Tracking: the reference number is saved in the browser (localStorage) so the Track Your Issue box can look it up


## 9.3. Contact form (Pages/contact.html)

- Controls: name, email, optional phone, message-type dropdown, subject and message.
- Validation: same rules and error messages as the enquiry form.
- Email: once validated, the details are compiled into an email (mailto: link) addressed to info@campusconnectnmb.co.za, which opens in the user's email app ready to send.

## 9.4. Search Engine Optimisation (SEO)

On-page SEO

- Unique, keyword-rich <title> and meta description for every page.
- Meta keywords on every page (e.g. student support, Rosebank College, Gqeberha, Nelson Mandela Bay, RCL).
- One <h1> per page with a logical <h2>–<h3> structure.
- Descriptive image file names (e.g. students-collaborating-campus.jpg) and meaningful alt text; images have width/height and lazy-loading.
- Clean, descriptive URLs (about.html, services.html, enquiry.html, contact.html) and internal links between all pages.
- Mobile-friendly: viewport meta tag and responsive layout tested from 320px to 1440px.


## Part 1 Correction

# References

	Xneelo (2025) Domain and web hosting pricing South Africa.
Available at: xneelo.co.za [Accessed 5 August 2026].
	Rosebank College (2025) Student handbook and SRC guidelines. Port Elizabeth: Rosebank College.
	W3Schools (2025) HTML, CSS, JavaScript and MySQL tutorial.
Available at: w3schols.com
[Accessed 5 August 2026}
	OpenAI (2025) ChatGPT. [Online]
Available at: http://chat.openai.com
[Accessed at 5 August 2026]


# CampusConnect Foundation — Project README

## Part 1: Wireframe

Low-fidelity wireframe for all 5 pages of the site, showing the layout structure before visual design was applied.

### 1. Home Page (`index.html`)

```
┌──────────────────────────────────────────────────────────────┐
│  info@campusconnectnmb.co.za  •  phone  •  address    Social  │
├──────────────────────────────────────────────────────────────┤
│  [Logo] CampusConnect     Home About Services Enquiry Contact │
│                                                   [Get Started]│
├──────────────────────────────────────────────────────────────┤
│  Welcome to CampusConnect Foundation                          │
│  Your Voice.                                     ┌──────────┐ │
│  Your Campus.                                    │  [IMAGE] │ │
│  Our Mission.                                    └──────────┘ │
│  paragraph...                                                 │
│  [ Learn More ]  [ Submit Enquiry ]                            │
├──────────────────────────────────────────────────────────────┤
│  ┌──────────┐   About CampusConnect Foundation                │
│  │  [IMAGE] │   paragraph...                                  │
│  └──────────┘   [ Read More ]                                 │
├──────────────────────────────────────────────────────────────┤
│  Our Services                                                 │
│  [Student   [Academic   [Campus        [Contact   [Track      │
│   Support]   Support]    Announcements] Directory]  Issues]   │
├──────────────────────────────────────────────────────────────┤
│  Latest Announcements                 │  Need to Submit an    │
│  • Important Notice ........ 12 May   │  Issue?               │
│  • Campus Maintenance ...... 10 May   │  We are here to       │
│  • RCL Meeting .............. 08 May  │  listen and help.     │
│                                        │  [ Submit Enquiry ]   │
├──────────────────────────────────────────────────────────────┤
│  [Logo]      Quick Links   Services      Contact Us            │
│  tagline     Home          Student Sup.  email                 │
│              About         Academic Sup. phone                 │
│              Services      Announcements address               │
│              Enquiry       Resources                           │
│              Contact       Track Issues                        │
├──────────────────────────────────────────────────────────────┤
│  © 2026 CampusConnect Foundation.        Privacy | Terms       │
└──────────────────────────────────────────────────────────────┘
```

### 2. About Page (`Pages/about.html`)

```
┌──────────────────────────────────────────────────────────────┐
│  Top bar + Header (same as Home, "About" active)               │
├──────────────────────────────────────────────────────────────┤
│                          About Us                              │
│                        Home / About                            │
├──────────────────────────────────────────────────────────────┤
│  Our Story                              ┌──────────────────┐   │
│  How CampusConnect began                │      [IMAGE]     │   │
│  paragraph / paragraph / paragraph      └──────────────────┘   │
├──────────────────────────────────────────────────────────────┤
│  [ Our Mission ]            [ Our Vision ]                     │
│    icon + text                icon + text                      │
├──────────────────────────────────────────────────────────────┤
│  Who We Serve                                                  │
│  [Students] [RCL's] [Lecturers] [Campus Management]            │
├──────────────────────────────────────────────────────────────┤
│  Meet Our Team                                                 │
│  [ (o) Sinoxolo Tyeke ]  [ (o) RCL Rep ]  [ (o) Campus Coord ] │
│      Founder                Student Leader     Coordinator     │
├──────────────────────────────────────────────────────────────┤
│  Footer (same as Home)                                          │
└──────────────────────────────────────────────────────────────┘
```

### 3. Services Page (`Pages/services.html`)

```
┌──────────────────────────────────────────────────────────────┐
│  Top bar + Header ("Services" active)                          │
├──────────────────────────────────────────────────────────────┤
│                        Our Services                            │
│                      Home / Services                           │
├──────────────────────────────────────────────────────────────┤
│  [Student    [Academic    [Campus                              │
│   Support]    Support]     Announcements]                      │
│                                                                  │
│  [Contact    [Resources    [Issue                               │
│   Directory]  & FAQs]       Tracking]                           │
├──────────────────────────────────────────────────────────────┤
│  We are here to support you every step of the way.             │
│                                        [ Submit an Enquiry ]    │
├──────────────────────────────────────────────────────────────┤
│  Footer (same as Home)                                          │
└──────────────────────────────────────────────────────────────┘
```

### 4. Enquiry Page (`Pages/enquiry.html`)

```
┌──────────────────────────────────────────────────────────────┐
│  Top bar + Header ("Enquiry" active)                            │
├──────────────────────────────────────────────────────────────┤
│                     Submit an Enquiry                          │
│                      Home / Enquiry                             │
├──────────────────────────────────────────────────────────────┤
│  Submit an Issue                       │  Track Your Issue     │
│  Full Name        Student Number       │  [Reference Number]   │
│  Email Address     Phone Number        │  [ Track Issue ]      │
│  Category (dropdown)                    │                       │
│  Subject                                │  FAQs                 │
│  Description                            │  • How do I submit?  │
│  [ Submit Issue ]                       │  • How long...?      │
│                                          │  • How do I track?   │
│                                          │  • What issues...?   │
├──────────────────────────────────────────────────────────────┤
│  Footer (same as Home)                                          │
└──────────────────────────────────────────────────────────────┘
```

### 5. Contact Page (`Pages/contact.html`)

```
┌──────────────────────────────────────────────────────────────┐
│  Top bar + Header ("Contact Us" active)                        │
├──────────────────────────────────────────────────────────────┤
│                         Contact Us                              │
│                       Home / Contact                            │
├──────────────────────────────────────────────────────────────┤
│  [RCL Contacts]    [Campus Management]    [Location]            │
│  [View Contacts]   [View Contacts]        [View on Map]         │
├──────────────────────────────────────────────────────────────┤
│  Send us a Message                    │  Office Hours           │
│  Your Name                             │  Mon-Fri  08:00-16:30  │
│  Email Address                         │  Saturday  Closed      │
│  Subject                               │  Sunday    Closed      │
│  Message                               │  ┌──────────────────┐ │
│  [ Send Message ]                      │  │   Map / Location  │ │
│                                         │  └──────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│  Footer (same as Home)                                          │
└──────────────────────────────────────────────────────────────┘
```

---

## Part 2: CSS (style.css)

The stylesheet used across all pages of the site (`index.html` and everything under `Pages/`). Save it at `css/style.css` in your project — every page links to it with a relative path.

### What it covers
- **Design tokens** — CSS custom properties in `:root` for the color palette (purple, teal, amber, green, pink, blue), border radii, shadows and container width
- **Top bar & header** — contact strip, sticky nav with active-link underline, mobile hamburger toggle
- **Home page** — hero, About preview, "Our Services" 5-card grid, Latest Announcements + issue CTA
- **Inner-page shared styles** — page hero banner, breadcrumb, section headings
- **About page** — story layout, Mission/Vision cards, Who We Serve grid, Meet Our Team cards
- **Services page** — 6-card grid with color-coded icons, dark CTA banner
- **Contact page** — 3-card info row, message form, office hours list, embedded map
- **Enquiry page** — submit-issue form, track-issue card, FAQ list
- **Footer** — 4-column layout, legal bar
- **Responsive breakpoints** — 1100px, 991px, 860px, 720px and 480px for tablet/mobile layout changes

### File location
```
project-root/
├── index.html
├── css/
│   └── style.css
└── Pages/
    ├── about.html
    ├── services.html
    ├── enquiry.html
    └── contact.html
```


  # CampusConnect Foundation — Part 2: CSS (style.css)


## What it covers
- **Design tokens** — CSS custom properties in `:root` for the color palette (purple, teal, amber, green, pink, blue), border radii, shadows and container width
- **Top bar & header** — contact strip, sticky nav with active-link underline, mobile hamburger toggle
- **Home page** — hero, About preview, "Our Services" 5-card grid, Latest Announcements + issue CTA
- **Inner-page shared styles** — page hero banner, breadcrumb, section headings
- **About page** — story layout, Mission/Vision cards, Who We Serve grid, Meet Our Team cards
- **Services page** — 6-card grid with color-coded icons, dark CTA banner
- **Contact page** — 3-card info row, message form, office hours list, embedded map
- **Enquiry page** — submit-issue form, track-issue card, FAQ list
- **Footer** — 4-column layout, legal bar
- **Responsive breakpoints** — 1100px, 991px, 860px, 720px and 480px for tablet/mobile layout changes

## File location
```
project-root/
├── index.html
├── css/
│   └── style.css
└── Pages/
    ├── about.html
    ├── services.html
    ├── enquiry.html
    └── contact.html
```

---

## Website Hierarchy

```text
Home
│
├── About
│
├── Services
│
├── Enquiry
│
└── Contact
```

---

## Features

- Responsive navigation
- Student enquiry form
- Issue tracking section
- Contact form
- Latest announcements
- Student support information
- Resources and FAQs
- Responsive website layout
- Font Awesome icons
- Google Fonts integration
---

## Future Improvements

The following features can be added in future versions:

- Student login system
- Admin dashboard
- Online database
- Email notifications
- Live chat support
- Online appointment booking
- File upload for complaints
- Search functionality

---
## Author


**Name:** Sinoxolo Tyeke

**Institution:** Rosebank College

**Module:** WEDE5020 – Web Development

**Project:** CampusConnect Foundation Website

---

## License

This project was created for educational purposes as part of the WEDE5020 Web Development module at Rosebank College.
