# Design Guidelines: 청소 루틴 크리에이터 (Cleaning Routine Creator)

## Design Approach

**Selected Approach:** Reference-Based with influences from TaskRabbit, Notion (for clean forms), and Korean service platforms like Karrot Market for trustworthy, approachable aesthetics.

**Design Principles:**
- Clean and organized to reflect the service value
- Trust-building through professional presentation
- Approachable for housekeeping beginners
- Clear visual hierarchy guiding users through value proposition to action

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 168 65% 45% (Calming teal-green suggesting cleanliness and freshness)
- Secondary: 210 15% 30% (Professional slate gray for text)
- Background: 0 0% 98% (Soft off-white)
- Surface: 0 0% 100% (Pure white for cards)
- Accent: 42 95% 55% (Warm amber for CTAs - sparingly used)

**Dark Mode:**
- Primary: 168 50% 60% (Lighter teal for dark backgrounds)
- Secondary: 210 15% 85% (Light gray text)
- Background: 220 15% 10% (Deep charcoal)
- Surface: 220 15% 15% (Elevated surface gray)

### B. Typography

**Font Families:**
- Primary: 'Pretendard' or 'Inter' for Korean/English hybrid (via CDN)
- Headings: Weight 700-800, tracking tight
- Body: Weight 400-500, leading relaxed for readability

**Scale:**
- Hero Headline: text-5xl to text-7xl (responsive)
- Section Headers: text-3xl to text-4xl
- Subsections: text-xl to text-2xl
- Body: text-base to text-lg
- Form Labels: text-sm font-medium

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, gap-6, py-12, etc.)

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Form sections: max-w-2xl for optimal input width
- Content sections: max-w-4xl for readability

**Vertical Rhythm:**
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: space-y-8 to space-y-12
- Form field spacing: space-y-6

### D. Component Library

**Landing Page Components:**

1. **Hero Section (90vh)**
   - Split layout: Left - compelling headline + subheadline + primary CTA, Right - hero illustration/image
   - Trust indicator strip below (e.g., "1,000+ 가정이 선택한 청소 솔루션")

2. **Value Proposition Section**
   - 3-column grid (lg:grid-cols-3) with icons
   - Feature cards: icon + title + description
   - Clean white cards with subtle shadows (shadow-sm hover:shadow-md)

3. **Problem-Solution Section**
   - 2-column alternating layout showing common cleaning struggles and solutions
   - Include illustrative images showing before/after or process

4. **User Data Collection Form**
   - Single-column form with clear section breaks
   - Input groups with labels above inputs
   - Radio buttons for 평형/주거형태, number input for 거주인원
   - Textarea for 주요 고민
   - Email input with validation styling
   - Prominent submit button (w-full on mobile, w-auto on desktop)

5. **Partnership/Advertiser Section**
   - Divided into two parts: benefits explanation + application form
   - 2-column layout (md:grid-cols-2): Left - partnership value prop, Right - form
   - Form fields: 기업명, 대표자명, 전화번호, 이메일
   - Secondary button styling to distinguish from main user flow

6. **Footer**
   - Multi-column (grid-cols-1 md:grid-cols-3)
   - Company info, quick links, contact information
   - Social proof elements (certifications, partnerships)

**Admin Dashboard Components:**

1. **Login Page**
   - Centered card (max-w-md)
   - Minimal design: logo + username/password + login button
   - Clean error state handling

2. **Dashboard Layout**
   - Top navigation with logout
   - Tabbed interface for "사용자 신청" and "광고 신청"
   - Data tables with responsive card view on mobile
   - Table columns: timestamp, all form fields, organized clearly
   - Alternating row colors (bg-gray-50) for readability
   - Export/filter options in table header

### E. Form Design Patterns

**Input Fields:**
- Border: border-2 border-gray-200 focus:border-primary
- Padding: px-4 py-3
- Rounded: rounded-lg
- Font size: text-base
- Placeholder: text-gray-400

**Select/Radio Groups:**
- Custom styled radio buttons with checkmark icon
- Visual active state with primary color
- Clear spacing between options (space-y-3)

**Buttons:**
- Primary CTA: bg-primary text-white px-8 py-4 rounded-full font-semibold
- Secondary: bg-white border-2 border-primary text-primary
- Hover states: subtle scale (hover:scale-105) and brightness adjustment

## Images

**Hero Image:**
- Large hero image on landing page showing a clean, organized home interior
- Position: Right side of split hero layout (hidden on mobile, shown on md+)
- Style: Bright, welcoming, professionally shot interior
- Dimensions: Aspect ratio 4:3, fills 50% of hero width on desktop

**Additional Images:**
- Problem-solution section: 2-3 illustrative images showing cleaning scenarios
- Before/after comparisons if applicable
- Testimonial section: User photos (placeholder circles with initials if no photos)

## Accessibility & Quality Standards

- All form inputs have associated labels
- Consistent focus indicators (ring-2 ring-primary ring-offset-2)
- Color contrast ratios meet WCAG AA standards
- Dark mode support for admin dashboard
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Form validation feedback with clear error messages in Korean

## Animation Strategy

**Minimal, Purposeful Animations:**
- Subtle fade-in on scroll for section reveals (intersection observer)
- Button hover transforms (scale, not color shifts)
- Form field focus transitions (border color, 200ms ease)
- NO: Auto-playing carousels, parallax effects, excessive motion

**Admin Dashboard:**
- Instant data updates
- Loading skeletons for data fetch
- Smooth transitions between tabs (opacity fade)