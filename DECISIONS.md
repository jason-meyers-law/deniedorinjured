# DECISIONS.md — DeniedOrInjured.com

## Purpose

This file contains the owner decisions that must be confirmed before DeniedOrInjured.com is fully implemented and launched.

Where a recommended default is provided, another AI may proceed with that default for planning and staging, but **must not publish legal, branding, location, testimonial, credential, or advertising-sensitive claims until the owner confirms them**.

Use this file as the single source of truth for unresolved business and implementation choices.

---

# 1. Brand Structure

## 1.1 Exact legal entity

Current known entity:

`Jason Meyers Law, PLLC`

Confirm exact legal styling:

```text
[ ] Jason Meyers Law, PLLC
[ ] Jason Meyers Law PLLC
[ ] Other exact entity name:
```

Owner decision:

```text
FINAL LEGAL ENTITY:
[CONFIRM]
```

## 1.2 What is “Denied or Injured”?

Choose one:

```text
[ ] Formal trade name / fictitious name of Jason Meyers Law, PLLC
[ ] Marketing brand of Jason Meyers Law, PLLC
[ ] Website title / slogan only
[ ] Separate law firm/entity
[ ] Other:
```

Recommended default for planning:

`Marketing brand of Jason Meyers Law, PLLC`

Owner decision:

```text
DENIED OR INJURED STATUS:
[CONFIRM]
```

## 1.3 Public-facing name

Choose preferred public presentation:

```text
[ ] Denied or Injured
[ ] Denied or Injured by Jason Meyers Law
[ ] Jason Meyers Law — Denied or Injured
[ ] Jason Meyers Law, PLLC
[ ] Other:
```

Recommended default:

`Denied or Injured by Jason Meyers Law`

Owner decision:

```text
PUBLIC-FACING BRAND:
[CONFIRM]
```

---

# 2. Existing Website Strategy

Existing domain:

`JasonMeyersLaw.com`

New domain:

`DeniedOrInjured.com`

Choose:

```text
[ ] Fully replace JasonMeyersLaw.com with DeniedOrInjured.com
[x] Keep JasonMeyersLaw.com for other practice areas
[ ] Keep JasonMeyersLaw.com temporarily, then retire it
[ ] Maintain both long term with clearly separated practice areas
```

Recommended default:

`Keep JasonMeyersLaw.com temporarily, migrate overlapping personal-injury content, then retire or narrow it.`

Important:

Do not maintain duplicate PI articles on both domains.

Owner decision:

```text
OLD DOMAIN STRATEGY:
No redirect. JasonMeyersLaw.com stays live as-is (it still carries the
general civil-practice content); DeniedOrInjured.com launches as a
separate PI-focused site. No 301s from the old domain. Do not duplicate
PI articles across the two. (Directed 2026-09-02.)
```

---

# 3. Canonical Office Information

This must be resolved before local SEO, structured data, Google Business Profile work, or city pages are published.

## 3.1 Primary public office address

Current correct office:

```text
Street: 653 Brevard Ave
City: Cocoa
State: FL
ZIP: 32922
```

Owner decision:

```text
CANONICAL PUBLIC OFFICE:
653 Brevard Ave, Cocoa, FL 32922 — matches the Florida Bar physical
address and JasonMeyersLaw.com. This is the mainland city of Cocoa, not
Cocoa Beach. The Bar's Melbourne address is a mailing address only, not
the bona fide public office. (Confirmed 2026-09-02.)
```

## 3.2 Office status

Confirm:

```text
[ ] Staffed during posted hours
[ ] Clients may meet there without appointment
[ ] Clients may meet there by appointment only
[ ] Mail only
[ ] Shared office
[ ] Executive suite
[ ] Other:
```

Owner decision:

```text
OFFICE STATUS:
[CONFIRM]
```

## 3.3 Other office locations

List only legitimate locations:

```text
SECONDARY OFFICES:
[CONFIRM OR NONE]
```

Do not create city office pages for locations that are not bona fide offices.

---

# 4. Canonical Contact Information

## 4.1 Primary phone

```text
PRIMARY PHONE:
[CONFIRM]
```

## 4.2 Text messaging

```text
[ ] Primary number accepts text messages
[ ] Separate text number
[ ] No texting offered
```

Owner decision:

```text
TEXT POLICY:
Not offered at launch. No SMS/texting is presented as a contact
option, so no SMS-consent language is needed on the site.
(Decided 2026-09-02.)
```

## 4.3 Public email

```text
PUBLIC INTAKE EMAIL:
intake@deniedorinjured.com
```

## 4.4 Office hours

```text
MONDAY:
TUESDAY:
WEDNESDAY:
THURSDAY:
FRIDAY:
SATURDAY:
SUNDAY:
```

Owner decision:

```text
PUBLIC HOURS:
Not published at launch. No specific hours appear on the site.
(Decided 2026-09-02.)
```

## 4.5 After-hours response

Choose:

```text
[ ] Voicemail only
[ ] Answering service
[ ] AI intake
[ ] Live intake vendor
[ ] Calls forward to attorney/staff
[ ] Online form only
[ ] Other:
```

Owner decision:

```text
AFTER-HOURS INTAKE:
[CONFIRM]
```

---

# 5. Geographic Strategy

## 5.1 Primary geographic identity

Choose one:

```text
[ ] Brevard County first
[ ] Space Coast first
[ ] Brevard + Indian River
[ ] Central Florida
[ ] Statewide Florida
```

Recommended default:

`Brevard County / Space Coast first, statewide Florida availability where accurate.`

Owner decision:

```text
PRIMARY GEOGRAPHY:
[CONFIRM]
```

## 5.2 Priority cities

Rank 1–10:

```text
___ Melbourne
___ Viera
___ Rockledge
___ Cocoa
___ Palm Bay
___ Titusville
___ Merritt Island
___ Satellite Beach
___ Indian Harbour Beach
___ Cocoa Beach
___ Other:
```

Owner decision:

```text
PRIORITY CITIES:
[CONFIRM]
```

## 5.3 Counties where cases are routinely accepted

```text
ROUTINE COUNTIES:
[CONFIRM]
```

## 5.4 Statewide cases

```text
[ ] Accept statewide personal-injury cases
[ ] Accept statewide only for serious cases
[ ] Primarily local/regional
```

Owner decision:

```text
STATEWIDE ACCEPTANCE:
[CONFIRM]
```

---

# 6. Personal Injury Case Priorities

Rank from highest to lowest business priority.

```text
___ Car accidents
___ Truck accidents
___ Motorcycle accidents
___ Bicycle accidents
___ Pedestrian accidents
___ Premises liability
___ Negligent security
___ Wrongful death
___ Dog bites
___ Defective products
___ Medical malpractice
___ Nursing home
___ Government entity claims
___ Other:
```

Owner decision:

```text
PI PRIORITY ORDER:
[CONFIRM]
```

Recommended content emphasis for initial launch:

1. Car accidents
2. Bicycle accidents
3. Pedestrian accidents
4. Negligent security
5. Premises liability
6. Wrongful death
7. Truck accidents
8. Motorcycle accidents

---

# 7. Case Acceptance Criteria

## 7.1 Cases the firm will not accept

Examples:

- Property damage only
- No injury
- Minor soft tissue only
- No insurance / no collectible defendant
- Medical malpractice
- Nursing home
- Workers compensation
- Social Security
- Other

Owner decision:

```text
DO-NOT-ACCEPT CASE TYPES:
[CONFIRM]
```

## 7.2 Minimum injury profile

Choose or describe:

```text
[ ] Any documented injury
[ ] ER / urgent care treatment
[ ] Objective injury
[ ] Fracture
[ ] Surgery recommendation
[ ] Surgery performed
[ ] Permanent impairment
[ ] Wrongful death
[ ] Case-by-case
```

Owner decision:

```text
MINIMUM INJURY PROFILE:
[CONFIRM]
```

## 7.3 Minimum insurance / collectibility

```text
MINIMUM AVAILABLE COVERAGE OR COLLECTIBILITY:
[CONFIRM]
```

## 7.4 Cases already in litigation

```text
[ ] Yes
[ ] No
[ ] Only selectively
```

Owner decision:

```text
LITIGATED CASES:
[CONFIRM]
```

## 7.5 Co-counsel / referral cases

```text
[ ] Accept co-counsel matters
[ ] Accept referral-only matters
[ ] Accept both
[ ] Neither
```

Owner decision:

```text
CO-COUNSEL POLICY:
[CONFIRM]
```

---

# 8. Ideal Client Profile

Provide the preferred client profile.

## 8.1 Ideal incident

```text
IDEAL INCIDENT TYPE:
[CONFIRM]
```

## 8.2 Ideal injury severity

```text
IDEAL INJURY:
[CONFIRM]
```

## 8.3 Ideal insurance profile

```text
IDEAL INSURANCE / DEFENDANT PROFILE:
[CONFIRM]
```

## 8.4 Ideal intake stage

Choose:

```text
[ ] Immediately after accident
[ ] After ER treatment
[ ] After initial adjuster contact
[ ] After denial
[ ] After failed settlement
[ ] Already in litigation
```

Owner decision:

```text
IDEAL CONTACT STAGE:
[CONFIRM]
```

## 8.5 Main reason the client should choose this firm

Rank:

```text
___ Direct access to Jason Meyers
___ Former insurance-defense experience
___ Trial experience
___ Local Brevard office
___ Selective caseload
___ Insurance coverage knowledge
___ Serious injury litigation
___ Personal service
___ Other:
```

Owner decision:

```text
PRIMARY DIFFERENTIATORS:
[CONFIRM]
```

---

# 9. Attorney Biography Facts

These must be verified before publication.

```text
Florida Bar admission year:
[CONFIRM]

Law school:
[CONFIRM]

Federal court admissions:
[CONFIRM]

Other state admissions:
[CONFIRM]

Total years practicing:
[CONFIRM]

Years primarily handling insurance defense:
[CONFIRM]

Approximate number of jury trials:
[CONFIRM]

Approximate number of bench trials:
[CONFIRM]

Plaintiff-side trials:
[CONFIRM]

Defense-side trials:
[CONFIRM]

Types of cases tried:
[CONFIRM]

Published appellate cases:
[CONFIRM]

Professional memberships:
[CONFIRM]

Board certifications:
[CONFIRM OR NONE]

Awards:
[CONFIRM OR NONE]

Speaking engagements:
[CONFIRM OR NONE]

Published articles:
[CONFIRM OR NONE]

Community involvement:
[CONFIRM OR NONE]

Languages:
[CONFIRM]
```

---

# 10. Companies / Clients / Experience That May Be Identified Publicly

Confirm whether prior clients, insurers, companies, or institutions may be named.

Examples may include prior insurance-defense clients or large companies.

For each:

```text
NAME:
May identify publicly? [YES / NO]
Permitted description:
[CONFIRM]
```

Owner decision:

```text
PUBLICLY IDENTIFIABLE PRIOR CLIENTS:
[CONFIRM]
```

Do not publish client names merely because they appear in public dockets without owner approval and ethics review.

---

# 11. Team Roster

## 11.1 Michael Onatsko

Choose:

```text
[ ] Include on site
[ ] Do not include
[ ] Include only on JasonMeyersLaw.com
```

If included:

```text
Exact title:
Practice role:
Bar status:
Bio facts:
Photo available:
```

Owner decision:

```text
MICHAEL ONATSKO SITE ROLE:
[CONFIRM]
```

## 11.2 Other team members

```text
ATTORNEYS:
[CONFIRM]

PARALEGALS:
[CONFIRM]

INTAKE STAFF:
[CONFIRM]

OTHER PUBLIC-FACING STAFF:
[CONFIRM]
```

---

# 12. Authorship and Legal Review

Choose content workflow.

Recommended:

- Jason Meyers is the named author for core legal articles he substantively authors/reviews.
- Other attorneys may author only within their actual subject experience.
- Every legal page shows a legal review date.

Owner decisions:

```text
PRIMARY ARTICLE AUTHOR:
[CONFIRM]

LEGAL REVIEWER:
[CONFIRM]

CAN STAFF WRITE FIRST DRAFTS?
[YES / NO]

CAN AI WRITE FIRST DRAFTS?
[YES / NO]

FINAL ATTORNEY APPROVAL REQUIRED?
Recommended: YES
```

---

# 13. Case Results

## 13.1 Use results on website?

```text
[ ] Yes
[ ] No
[ ] Only selected results
```

Owner decision:

```text
CASE RESULTS POLICY:
No. No case results are published at launch. (Decided 2026-09-02.)
```

## 13.2 Approved results

For each result:

```text
Matter type:
Amount:
Verdict or settlement:
Court/county:
Public case?
Client permission:
Can client name be used?
Required context:
```

Owner decision:

```text
APPROVED PUBLIC RESULTS:
NONE. (Decided 2026-09-02.)
```

Do not publish until advertising compliance is confirmed.

---

# 14. Reviews and Testimonials

## 14.1 Google reviews

```text
GOOGLE BUSINESS PROFILE URL / ID:
[CONFIRM]

APPROXIMATE REVIEW COUNT:
[CONFIRM]
```

## 14.2 Testimonials on site

```text
[ ] Use Google reviews
[ ] Use written testimonials
[ ] Use video testimonials
[ ] Do not use testimonials initially
```

Owner decision:

```text
TESTIMONIAL POLICY:
Do not use testimonials initially. (Decided 2026-09-02.)
```

## 14.3 Client names

```text
[ ] Full names where permission exists
[ ] First name + last initial
[ ] Initials only
[ ] Anonymous
```

Owner decision:

```text
TESTIMONIAL NAME FORMAT:
[CONFIRM]
```

---

# 15. Consultation and Fee Messaging

## 15.1 Consultation

```text
[ ] Free consultation
[ ] Paid consultation
[ ] Depends on matter
```

Owner decision:

```text
CONSULTATION POLICY:
Not published at launch. No consultation-fee claim appears on the
site. (Decided 2026-09-02.)
```

## 15.2 Personal injury fees

Confirm intended public description:

```text
[ ] Contingency fee
[ ] No attorney fee unless recovery
[ ] Costs advanced
[ ] Costs handled differently
```

Owner decision:

```text
PUBLIC PI FEE LANGUAGE:
Not published at launch. No fee/attorney-fee claim appears anywhere on
the site. (Decided 2026-09-02.)
```

Do not publish fee claims until wording is matched to actual engagement agreement and Florida rules.

---

# 16. Intake Workflow

## 16.1 Primary CTA

Rank:

```text
___ Call
___ Text
___ Web form
___ Schedule online
___ Live chat
___ Video consultation
```

Owner decision:

```text
PRIMARY CTA ORDER:
[CONFIRM]
```

## 16.2 Who answers new inquiries?

```text
BUSINESS HOURS:
[CONFIRM]

AFTER HOURS:
[CONFIRM]
```

## 16.3 Target response speed

```text
[ ] Immediate
[ ] Under 5 minutes
[ ] Under 15 minutes
[ ] Under 1 hour
[ ] Same business day
```

Owner decision:

```text
TARGET RESPONSE TIME:
[CONFIRM]
```

## 16.4 Conflict screening

What must be collected before substantive consultation?

```text
REQUIRED CONFLICT FIELDS:
[CONFIRM]
```

---

# 17. Clio Configuration

Confirm products in use:

```text
[ ] Clio Manage
[ ] Clio Grow
[ ] Both
[ ] Other:
```

Owner decision:

```text
CLIO PRODUCTS:
[CONFIRM]
```

Desired website integration:

```text
[ ] Web form creates lead
[ ] Web form creates contact
[ ] Schedule consultation
[ ] Capture referral source
[ ] Capture landing page
[ ] Capture UTMs
[ ] Automated follow-up
[ ] Text follow-up
[ ] Email follow-up
[ ] No integration initially
```

Owner decision:

```text
CLIO INTEGRATION SCOPE:
[CONFIRM]
```

---

# 18. Website Platform

Current domain/site setup may involve Squarespace.

Choose:

```text
[ ] Squarespace
[ ] WordPress
[ ] Webflow
[ ] Next.js / custom
[ ] Astro / static
[ ] Other:
[ ] Open to recommendation
```

Recommended default if simplicity is most important:

`Squarespace or WordPress`

Recommended default if long-term structured content, speed, and developer control are most important:

`Next.js/Astro or a carefully managed WordPress build`

Owner decision:

```text
PLATFORM:
[CONFIRM]
```

---

# 19. Design Direction

Choose the preferred tone.

Rank:

```text
___ Calm and reassuring
___ Direct and authoritative
___ Local and personal
___ Former-insurance-lawyer insight
___ Trial-focused
___ Aggressive litigation
___ Premium / boutique
___ High-volume PI
```

Recommended combination:

`Direct + authoritative + local + former-insurance-defense perspective + boutique`

Owner decision:

```text
BRAND TONE:
[CONFIRM]
```

---

# 20. Visual Identity

## 20.1 Logo

```text
[ ] Existing Denied or Injured logo
[ ] Existing Jason Meyers Law logo
[ ] Create new logo
[ ] Text-only wordmark initially
```

Owner decision:

```text
LOGO STRATEGY:
[CONFIRM]
```

## 20.2 Preferred colors

```text
PRIMARY:
[CONFIRM]

SECONDARY:
[CONFIRM]

ACCENT:
[CONFIRM]
```

## 20.3 Photography

Available:

```text
[ ] Professional headshots
[ ] Office photos
[ ] Local Brevard photos
[ ] Trial/courtroom photos
[ ] Speaking photos
[ ] Video footage
[ ] None / schedule shoot
```

Owner decision:

```text
AVAILABLE VISUAL ASSETS:
[CONFIRM]
```

---

# 21. Video Strategy

Choose:

```text
[ ] Launch with video
[ ] Add video after written content launch
[ ] No video initially
```

Recommended default:

`Written content first, then add video to highest-value pages.`

Owner decision:

```text
VIDEO LAUNCH POLICY:
[CONFIRM]
```

If video:

```text
YouTube channel:
[CONFIRM]

Who appears:
[CONFIRM]

Recording style:
[ ] Office
[ ] Studio
[ ] Casual/local
[ ] Courtroom-style backdrop
[ ] Other
```

---

# 22. AI Crawler Policy

## 22.1 OAI-SearchBot

Purpose: search discovery / ChatGPT search inclusion.

Recommended:

`ALLOW`

Owner decision:

```text
OAI-SEARCHBOT:
[ ] ALLOW
[ ] BLOCK
```

## 22.2 GPTBot

Purpose may differ from search inclusion and can relate to model training/access.

Owner decision:

```text
GPTBOT:
[ ] ALLOW
[ ] BLOCK
[ ] REVIEW LATER
```

Recommended default:

`REVIEW LATER`

---

# 23. Search / Analytics Stack

Confirm:

```text
[ ] Google Search Console
[ ] Google Analytics 4
[ ] Bing Webmaster Tools
[ ] Microsoft Clarity
[ ] Call tracking
[ ] Other:
```

Owner decision:

```text
ANALYTICS STACK:
[CONFIRM]
```

---

# 24. Call Tracking

Choose:

```text
[ ] Use one permanent number everywhere
[ ] Use dynamic call tracking on website
[ ] Use separate source-specific tracking numbers
[ ] No call tracking initially
```

Recommended:

Use dynamic number insertion only if it preserves canonical NAP and attribution correctly.

Owner decision:

```text
CALL TRACKING:
[CONFIRM]
```

---

# 25. Local Business Profiles

Confirm current status:

```text
Google Business Profile:
[ ] Existing
[ ] Needs creation
[ ] Needs cleanup
[ ] Unknown

Bing Places:
[ ] Existing
[ ] Needs creation
[ ] Unknown

Apple Business Connect:
[ ] Existing
[ ] Needs creation
[ ] Unknown
```

Owner decision:

```text
LOCAL PROFILE STATUS:
[CONFIRM]
```

---

# 26. Social Profiles

Which profiles should be treated as official entity links?

```text
[ ] LinkedIn
[ ] Facebook
[ ] Instagram
[ ] YouTube
[ ] X
[ ] TikTok
[ ] Avvo
[ ] Justia
[ ] Martindale
[ ] Other:
```

Owner decision:

```text
OFFICIAL SOCIAL / PROFILE URLS:
[CONFIRM]
```

---

# 27. Florida Injury Questions

Provide at least 20 real or commonly recurring client questions.

These will seed the content roadmap.

```text
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.
13.
14.
15.
16.
17.
18.
19.
20.
```

Owner decision:

```text
REAL CLIENT QUESTION SET:
[CONFIRM]
```

---

# 28. Location Pages to Launch

Choose only legitimate, useful pages.

Recommended initial set:

```text
[ ] Brevard County
[ ] Melbourne
[ ] Viera
[ ] Rockledge
[ ] Cocoa
[ ] Palm Bay
[ ] Titusville
[ ] Merritt Island
[ ] Satellite Beach
[ ] Indian Harbour Beach
```

Owner decision:

```text
INITIAL LOCATION PAGES:
[CONFIRM]
```

---

# 29. Initial Practice Pages

Recommended launch set:

```text
[ ] Personal Injury overview
[ ] Car Accidents
[ ] Bicycle Accidents
[ ] Pedestrian Accidents
[ ] Truck Accidents
[ ] Motorcycle Accidents
[ ] Premises Liability
[ ] Negligent Security
[ ] Wrongful Death
```

Owner decision:

```text
INITIAL PRACTICE PAGES:
[CONFIRM]
```

---

# 30. Initial Florida Injury Answer Pages

Recommended initial batch:

```text
[ ] What should I do after a Florida car accident?
[ ] Should I give an insurance adjuster a recorded statement?
[ ] Who pays my medical bills after a Florida accident?
[ ] What is Florida PIP?
[ ] What is the 14-day PIP rule?
[ ] Does PIP cover a bicyclist?
[ ] Does PIP cover a pedestrian?
[ ] What happens if the other driver is uninsured?
[ ] What is UM/UIM coverage?
[ ] Can I recover if I was partly at fault?
[ ] What evidence should I preserve?
[ ] Can the insurer obtain old medical records?
[ ] Should I use health insurance?
[ ] How are lost wages proven?
[ ] How is an injury case valued?
[ ] How long does a Florida PI case take?
[ ] What happens after a lawsuit is filed?
[ ] What happens at a deposition?
[ ] What happens at mediation?
[ ] Will my case go to trial?
```

Owner may add/remove/reorder.

Owner decision:

```text
INITIAL ANSWER PAGE PRIORITY:
[CONFIRM]
```

---

# 31. Insurance-Denial Phase 2 Scope

Confirm which future services are intended.

```text
[ ] Insurer denied defense
[ ] Reservation of rights
[ ] Declaratory judgment actions
[ ] Duty to defend
[ ] Duty to indemnify
[ ] Additional insured disputes
[ ] Contractual indemnity
[ ] Failure to settle
[ ] Excess judgments
[ ] Third-party bad faith
[ ] First-party bad faith
[ ] Coverage opinions
[ ] Coverage litigation
[ ] Insured-side representation only
[ ] Insurer-side representation also
```

Owner decision:

```text
INSURANCE-DENIAL SCOPE:
[CONFIRM]
```

---

# 32. Relationship Between PI and Insurance Coverage Practices

Choose preferred homepage treatment.

```text
[ ] PI dominates homepage; insurance is secondary
[ ] 50/50 split
[ ] Separate entry gateway: Injured / Denied
[ ] PI homepage with insurance link in navigation
```

Recommended:

`Separate gateway concept, but PI receives most homepage space during Phase 1.`

Owner decision:

```text
HOMEPAGE PRACTICE BALANCE:
[CONFIRM]
```

---

# 33. Advertising Compliance Review

Choose who will perform final review.

```text
[ ] Jason Meyers
[ ] Another Florida attorney
[ ] Florida Bar ethics counsel
[ ] Outside advertising/ethics counsel
[ ] Combination
```

Owner decision:

```text
FINAL ADVERTISING REVIEWER:
[CONFIRM]
```

No final public launch should occur before this review.

---

# 34. Privacy / Intake Policies

Confirm whether the firm already has:

```text
Privacy policy:
[ ] Yes
[ ] No

Terms of use:
[ ] Yes
[ ] No

Website disclaimer:
[ ] Yes
[ ] No

SMS consent language:
[ ] Yes
[ ] No

Cookie policy:
[ ] Yes
[ ] No

Accessibility statement:
[ ] Yes
[ ] No
```

Owner decision:

```text
POLICY DOCUMENT STATUS:
[CONFIRM]
```

---

# 35. Budget

## 35.1 Initial site build

```text
[ ] Under $5,000
[ ] $5,000–$10,000
[ ] $10,000–$20,000
[ ] $20,000–$40,000
[ ] $40,000+
[ ] Primarily AI / self-built
```

Owner decision:

```text
INITIAL BUILD BUDGET:
[CONFIRM]
```

## 35.2 Monthly content / marketing

```text
MONTHLY CONTENT BUDGET:
[CONFIRM]

MONTHLY SEO / TECHNICAL BUDGET:
[CONFIRM]

MONTHLY PAID ADS BUDGET:
[CONFIRM OR NONE]
```

---

# 36. Attorney Time Available

How much attorney review time can be committed?

```text
[ ] 1 hour/week
[ ] 2 hours/week
[ ] 4 hours/week
[ ] 1 day/month
[ ] Other:
```

Owner decision:

```text
ATTORNEY REVIEW CAPACITY:
[CONFIRM]
```

---

# 37. Publication Cadence

Choose preferred sustainable cadence after launch:

```text
[ ] 1 substantive page/week
[ ] 2 substantive pages/week
[ ] 4 substantive pages/month
[ ] 8 substantive pages/month
[ ] Other:
```

Recommended:

`Quality-first: 1–2 substantive pages per week after launch.`

Owner decision:

```text
CONTENT CADENCE:
[CONFIRM]
```

---

# 38. Approval Authority

Who can approve:

```text
Branding:
[CONFIRM]

Legal copy:
[CONFIRM]

Technical changes:
[CONFIRM]

New pages:
[CONFIRM]

Case results:
[CONFIRM]

Testimonials:
[CONFIRM]

Paid advertising:
[CONFIRM]
```

---

# 39. Repository / Access

Confirm who has access to:

```text
Domain registrar:
[CONFIRM]

DNS:
[CONFIRM]

Current website:
[CONFIRM]

Google Business Profile:
[CONFIRM]

Search Console:
[CONFIRM]

Analytics:
[CONFIRM]

Bing Webmaster:
[CONFIRM]

Clio:
[CONFIRM]

Microsoft 365:
[CONFIRM]

YouTube:
[CONFIRM]

Social accounts:
[CONFIRM]
```

Do not place passwords or secrets in this file.

---

# 40. Recommended Defaults Summary

If the owner wants the implementing AI to begin staging before all choices are resolved, use these defaults only for non-public planning:

```text
Brand:
Denied or Injured by Jason Meyers Law

Entity:
Jason Meyers Law, PLLC

Primary launch focus:
Personal injury

Geography:
Brevard County / Space Coast first; Florida-wide eligibility where accurate

Primary differentiators:
Direct attorney access
Insurance-defense experience
Trial experience
Local Brevard presence
Insurance-coverage knowledge

Content strategy:
25–35 strong launch pages
Question-driven legal knowledge base
Primary-source citations
Attorney review required

Location strategy:
Few high-quality legitimate local pages
No doorway pages

AI search:
Allow OAI-SearchBot

GPTBot:
Review later

Old domain:
Migrate overlapping PI authority; avoid duplicate content

Homepage:
PI dominant with visible “Insurance Denied?” secondary pathway

Video:
Add after initial written authority is established

Analytics:
Search Console + GA4 + Bing Webmaster + qualified-lead attribution

Content cadence:
1–2 high-quality pages per week after launch
```

These are planning defaults, not authorization to publish unconfirmed factual claims.

---

# 41. Minimum Decisions Required Before Development

The implementing AI may begin information architecture, wireframes, technical planning, and private drafts after the following are confirmed:

```text
[ ] Legal entity
[ ] Brand relationship
[x] Old domain strategy
[ ] Canonical office
[ ] Primary phone
[ ] Primary geography
[ ] Top PI practice areas
[ ] Website platform
```

---

# 42. Minimum Decisions Required Before Public Launch

Do not launch until all of the following are confirmed:

```text
[ ] Exact public firm name
[ ] Exact legal entity
[ ] Brand/trade-name status
[ ] Bona fide office address
[ ] Phone
[ ] Email
[x] Office hours — not published at launch (§4.4).
[x] Attorney roster — Jason O. Meyers and Michael Onatsko, both
    titled "Attorney" (no Founder distinction). Confirmed 2026-09-02.
[ ] Attorney credentials — Jason's are Bar-verified (No. 106509).
    Michael's Bar number is not yet supplied; his bio (education,
    background) is in from jasonmeyerslaw.com. Not a launch blocker
    per owner (2026-09-02) but still open if/when his Bar number is
    added.
[ ] Practice areas
[ ] Service geography
[x] Fee/consultation wording — not published at launch (§15).
[x] Intake disclaimer — generic no-advice/no-relationship/no-guarantee
      disclaimer shipped (packages/site/src/pages/disclaimer.astro), pending attorney review.
[ ] Privacy policy
[x] SMS/contact consent language if applicable — N/A, texting not
      offered at launch (§4.2).
[x] Testimonials approved — none used at launch (§14.2).
[x] Results approved — none published at launch (§13).
[ ] Florida advertising review completed
[x] Old-domain redirects tested (N/A — no redirects, see §1)
[ ] Google Business Profile naming aligned — deferred, not a launch
      blocker (GBP not yet set up: §14.1 URL/ID still open).
[ ] Structured data aligned with visible facts
```

---

# 43. Owner Sign-Off

When complete, add:

```text
DECISIONS APPROVED BY:
[NAME]

DATE:
[DATE]

VERSION:
[VERSION]

NOTES:
[OPTIONAL]
```

After sign-off, this file becomes the authoritative business-decision input for the DeniedOrInjured.com implementation.
