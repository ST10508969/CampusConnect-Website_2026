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

## 9.5. Off-page and local SEO

- Social media profile links and Open Graph tags so shared links display a title and description.
- Local SEO: JSON-LD Organization structured data with the Gqeberha / Nelson Mandela Bay address.
- Backlink plan: share the live link on the Rosebank College student groups and the foundation's social media bios, and ask the RCL and campus management to link to the site.

## 9.6. Additional

- robots.txt tells crawlers which pages to index and points to the sitemap.
- sitemap.xml lists every page of the site.
- Page speed: preconnect and display=swap for Google Fonts, scripts loaded with defer, lazy-loaded images.
- Security: HTTPS from the hosting platform, a Content-Security-Policy meta tag, rel="noopener noreferrer" on external links, and input validation with escaped output.

## 9.7. Responsive design

The site uses a mobile-first-friendly flexible layout with breakpoints at 991px, 720px, 600px, 480px and 380px, fluid headings (clamp()), a collapsible menu and single-column layouts on phones. Horizontal scrolling was removed so pages scroll vertically only.

Responsive design screenshots

Screenshots were taken with Chrome DevTools device mode and are stored in Assets/screenshots/.
Page	Phone (375px)	Tablet (768px)	Desktop (1440px)
Home	Home on a phone	Home on a tablet	Home on a desktop
About	About on a phone	About on a tablet	About on a desktop
Services	Services on a phone	Services on a tablet	Services on a desktop
Enquiry	Enquiry on a phone	Enquiry on a tablet	Enquiry on a desktop
Contact	Contact on a phone	Contact on a tablet	Contact on a desktop

## 9.8. Deployment
- Platform: GitHub Pages (free hosting).
- Steps: the project was pushed to the public GitHub repository, then Settings > Pages was opened, the source was set to Deploy from a branch, the main branch and / (root) folder were selected, and the site was saved and published.
- Live link: https://st10508969.github.io/CampusConnect-Website_2026/
- All pages were opened on the live link to confirm they load without errors.

## 9.9. Updated features and technologies

- Features added: interactive map, gallery lightbox, FAQ accordion, dynamic services with live search and sort, validated enquiry and contact forms with AJAX and email, enquiry tracking, SEO tags, robots.txt and sitemap.xml.
- Technologies: HTML5, CSS3, JavaScript (ES6), Leaflet.js, OpenStreetMap, Font Awesome, Google Fonts (Poppins), Git and GitHub, GitHub Pages.

## 10. Changelog

All notable changes to the CampusConnect Foundation website are recorded here, newest first. Each entry states what changed, which file(s) it affected and why.

[Part 3] – 2026-11-02 – Enhancing Functionality and SEO
Part 2 feedback corrections

Feedback 1: the About and Enquiry pages were not responsive in mobile view. To correct this, the mobile layouts of both pages were rebuilt. On the About page, the story, mission and vision, "Who We Serve", gallery and team sections now stack into one column on phones and two columns on tablets. On the Enquiry page, the form and the Track and FAQ cards stack into a single column, the form's two-column grid collapses to one column on phones, and all inputs, dropdowns and the textarea now fill their container (width: 100%) instead of overflowing. The padding on the form card was reduced, and form text is 16px on phones so that iPhones do not zoom in. Files affected: Pages/about.html, Pages/enquiry.html and css/style.css.

Feedback 2: the README was missing screenshots demonstrating responsiveness. A "Responsive design screenshots" section was added to the README, showing every page at phone (375px), tablet (768px) and desktop (1440px) widths. The images are stored in Assets/screenshots/. Files affected: README.md and Assets/screenshots/.

Feedback 3: the README was missing the updated references from Part 1. The Part 1 reference list was updated by correcting the W3Schools link (w3schols.com to w3schools.com) and the stray } and "Accessed at" typos, applying one consistent Harvard format, and merging it with the new Part 3 references into a single References section. File affected: README.md.

## 10.1. Added – JavaScript functionality
- Interactive accordion (FAQs): converted the static FAQ list on the Enquiry page into a clickable accordion so students can expand and collapse answers. Files: Pages/enquiry.html, js/script.js, css/style.css.
- Interactive map: replaced the Google Maps iframe on the Contact page with a Leaflet.js map (OpenStreetMap tiles) showing a marker and popup for Rosebank College, Nelson Mandela Bay. Files: Pages/contact.html, js/script.js.
- Gallery with lightbox: added an image gallery where clicking a thumbnail opens a larger view in an overlay with close, next and previous controls and keyboard support (Esc and arrow keys). Files: Pages/about.html, js/script.js, css/style.css.
- Dynamic content: the Services cards are now generated by JavaScript from a data array instead of hard-coded HTML, which makes services easier to add or edit.
- Files: Pages/services.html, js/script.js.
- Live search and sort: added a search box and sort option on the Services page that filter the cards as the user types, with a "no results" message. Files: Pages/services.html, js/script.js.
- Animations and transitions: added smooth hover, accordion and lightbox fade transitions using CSS, with prefers-reduced-motion respected. File: css/style.css.

## 10.2. Added – Forms
- Enquiry form: added action and method attributes and novalidate (so custom error messages show instead of browser pop-ups). Added a preferred-contact-method radio group and a consent checkbox. File: Pages/enquiry.html.
- Enquiry validation: client-side validation for name, student number (6–10 digits), email, South African phone format, subject and description length, with error messages displayed under each field and cleared as the user corrects them. File: js/script.js.
- Enquiry response: after validation the form is submitted with fetch() (AJAX) and shows a category-specific response covering cost (free service), expected response time and the department that will handle the issue, plus a reference number. File: js/script.js.
- Track Your Issue: submitted enquiries are saved to localStorage with their reference number, and the Track form looks the reference up and shows its status. Files: Pages/enquiry.html, js/script.js.
- Contact form: added a message-type dropdown (General, Feedback, Complaint, Partnership) and an optional phone field. Validation matches the Enquiry form. Files: Pages/contact.html, js/script.js.
- Contact email: once validated, the form compiles the sender's details, message type and message into an email (mailto: link to info@campusconnectnmb.co.za) that the user sends from their email app, followed by a confirmation message. Files: Pages/contact.html, js/script.js.

## 10.3. Added – SEO
- Title tags: rewrote the <title> of every page to include relevant keywords and the location. Files: all HTML pages.
- Meta descriptions: wrote a unique meta description (about 150 characters) for every page. Files: all HTML pages.
- Meta keywords: added relevant keywords (e.g. student support, Rosebank College, Gqeberha, Nelson Mandela Bay, RCL, student complaints). Files: all HTML pages.
- Images: downloaded images into Assets/images/, renamed them with descriptive file names (e.g. students-collaborating-campus.jpg), added descriptive alt text, width/height attributes and loading="lazy". Files: all HTML pages, Assets/images/.
- Header structure: corrected heading order so each page has one <h1> and no skipped levels. File: Pages/enquiry.html.
- Off-page and local SEO: added Open Graph tags and JSON-LD LocalBusiness structured data with the Nelson Mandela Bay address. Added links to the foundation's social media profiles. Files: all HTML pages.
- robots.txt: created to tell crawlers which pages to index. File: robots.txt.
- sitemap.xml: created listing every page of the site. File: sitemap.xml.

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
