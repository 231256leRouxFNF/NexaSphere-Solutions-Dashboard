# Component File Structure

This document provides a detailed breakdown of all components in the NexaSphere Solutions Dashboard.

## Directory Tree

```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/
│   │   ├── dashboard-layout.tsx
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── grid-layout.tsx
│   ├── widgets/
│   │   ├── widget-wrapper.tsx
│   │   ├── stats-widget.tsx
│   │   ├── chart-widget.tsx
│   │   └── activity-widget.tsx
│   └── theme-provider.tsx
├── hooks/
│   └── use-dashboard-layout.ts
├── lib/
│   └── utils.ts
├── pages/
│   └── dashboard.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Component Details

### UI Components (`src/components/ui/`)

#### button.tsx
Base button component with multiple variants.

**Features:**
- Multiple variants: default, destructive, outline, secondary, ghost, link
- Size options: default, sm, lg, icon
- Built with class-variance-authority for variant management
- Fully typed with TypeScript

**Usage:**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="outline" size="lg">Click Me</Button>
```

#### card.tsx
Card component family for containing content.

**Components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title element
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

---

### Layout Components (`src/components/layout/`)

#### dashboard-layout.tsx
Main layout wrapper that combines header and sidebar.

**Structure:**
```
┌─────────────────────────────────┐
│          Header                 │
├──────────┬──────────────────────┤
│          │                      │
│ Sidebar  │     Main Content     │
│          │                      │
└──────────┴──────────────────────┘
```

**Props:**
- `children: ReactNode` - Main content to display

**Usage:**
```tsx
<DashboardLayout>
  <YourContent />
</DashboardLayout>
```

#### header.tsx
Top navigation bar with branding and theme toggle.

**Features:**
- Sticky positioning
- Brand logo and name
- Theme toggle button
- Backdrop blur effect

**Key Elements:**
- Logo area (customizable)
- Theme toggle (light/dark mode)

#### sidebar.tsx
Left navigation sidebar with menu items.

**Features:**
- Responsive (hidden on mobile, visible on desktop)
- Icon + text menu items
- Hover effects
- Active state styling

**Menu Items:**
- Dashboard
- Analytics
- Users
- Settings

**Customization:**
Edit the `menuItems` array to add/remove navigation items:
```tsx
const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  // Add your items here
];
```

#### grid-layout.tsx
Wrapper for react-grid-layout with configuration.

**Features:**
- Drag-and-drop functionality
- Resizable widgets
- 12-column grid system
- Configurable row height and margins
- Vertical compaction

**Props:**
- `layout: LayoutItem[]` - Current layout configuration
- `onLayoutChange: (layout: LayoutItem[]) => void` - Callback for layout changes
- `children: ReactNode` - Grid items
- `isDraggable?: boolean` - Enable dragging (default: true)
- `isResizable?: boolean` - Enable resizing (default: true)

**Grid Configuration:**
```typescript
gridConfig={{
  cols: 12,              // 12-column grid
  rowHeight: 80,         // 80px per row
  margin: [16, 16],      // 16px margin between items
  containerPadding: [0, 0], // No container padding
}}
```

---

### Widget Components (`src/components/widgets/`)

#### widget-wrapper.tsx
Base wrapper component for all widgets.

**Features:**
- Consistent card styling
- Title header with drag handle icon
- Flex layout for content

**Props:**
- `title: string` - Widget title
- `children: ReactNode` - Widget content
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
<WidgetWrapper title="My Widget">
  <div>Content</div>
</WidgetWrapper>
```

#### stats-widget.tsx
Display key metrics with trend indicators.

**Features:**
- Large value display
- Positive/negative trend indicators
- Color-coded arrows (green for up, red for down)
- Optional change label

**Props:**
- `title: string` - Metric name
- `value: string | number` - Main value
- `change?: number` - Percentage change
- `changeLabel?: string` - Label for change (e.g., "from last month")

**Example:**
```tsx
<StatsWidget
  title="Total Revenue"
  value="$45,231.89"
  change={20.1}
  changeLabel="from last month"
/>
```

**Visual Indicators:**
- `change > 0`: Green upward arrow
- `change < 0`: Red downward arrow
- `change === 0` or `undefined`: No indicator

#### chart-widget.tsx
Placeholder for chart visualizations.

**Features:**
- Dashed border placeholder
- Ready for chart library integration
- 200px fixed height

**Props:**
- `title: string` - Chart title

**Integration Notes:**
This is a placeholder component. To add actual charts, consider:
- Recharts
- Chart.js with react-chartjs-2
- Victory
- Nivo

#### activity-widget.tsx
Display a list of recent activities or events.

**Features:**
- List of activity items
- Title and timestamp for each activity
- Scrollable content area

**Props:**
- `title: string` - Widget title
- `activities: Activity[]` - Array of activities
  - `id: string` - Unique identifier
  - `title: string` - Activity description
  - `time: string` - Timestamp or relative time

**Example:**
```tsx
<ActivityWidget
  title="Recent Activity"
  activities={[
    { id: "1", title: "New user registered", time: "2 minutes ago" },
    { id: "2", title: "Report generated", time: "15 minutes ago" },
  ]}
/>
```

---

### Providers (`src/components/`)

#### theme-provider.tsx
React Context provider for theme management.

**Features:**
- Light/dark/system theme modes
- localStorage persistence
- Automatic system theme detection
- Theme toggle functionality

**Context API:**
- `theme: Theme` - Current theme ("light" | "dark" | "system")
- `setTheme: (theme: Theme) => void` - Change theme

**Usage:**
```tsx
// Wrap app
<ThemeProvider defaultTheme="light" storageKey="app-theme">
  <App />
</ThemeProvider>

// Use in components
const { theme, setTheme } = useTheme();
```

---

## Hooks (`src/hooks/`)

### use-dashboard-layout.ts
Custom hook for managing dashboard layout state.

**Features:**
- Layout state management
- localStorage persistence
- Auto-save on layout change
- Reset to default functionality

**Default Layout:**
```typescript
[
  { i: "stats-1", x: 0, y: 0, w: 3, h: 2 },    // Top-left stat
  { i: "stats-2", x: 3, y: 0, w: 3, h: 2 },    // Top stat
  { i: "stats-3", x: 6, y: 0, w: 3, h: 2 },    // Top stat
  { i: "stats-4", x: 9, y: 0, w: 3, h: 2 },    // Top-right stat
  { i: "chart-1", x: 0, y: 2, w: 6, h: 4 },    // Left chart
  { i: "chart-2", x: 6, y: 2, w: 6, h: 4 },    // Right chart
  { i: "activity-1", x: 0, y: 6, w: 12, h: 3 }, // Bottom activity
]
```

**Layout Item Properties:**
- `i: string` - Unique identifier (must match widget key)
- `x: number` - Column position (0-11 in 12-column grid)
- `y: number` - Row position
- `w: number` - Width in columns (1-12)
- `h: number` - Height in rows

**Returns:**
- `layout: LayoutItem[]` - Current layout
- `handleLayoutChange: (newLayout: LayoutItem[]) => void` - Update handler
- `resetLayout: () => void` - Reset to default

---

## Utilities (`src/lib/`)

### utils.ts
Utility functions for component development.

#### cn()
Merge and deduplicate Tailwind CSS classes.

**Usage:**
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className // User-provided classes
)} />
```

**Benefits:**
- Resolves conflicting Tailwind classes
- Conditional class application
- Type-safe with TypeScript

---

## Pages (`src/pages/`)

### dashboard.tsx
Main dashboard page component.

**Features:**
- Grid layout with multiple widgets
- Reset layout button
- Sample data for demonstration

**Widget Layout:**
1. Four stat cards (Revenue, Users, Conversion, Orders)
2. Two chart placeholders (Revenue Overview, User Growth)
3. One activity feed (Recent Activity)

**Customization:**
Add/remove widgets by:
1. Updating the layout array in `useDashboardLayout`
2. Adding corresponding JSX elements with matching `key` props

---

## Root Components

### App.tsx
Root application component.

**Structure:**
```tsx
<ThemeProvider>
  <Dashboard />
</ThemeProvider>
```

**Role:**
- Set up theme context
- Render main dashboard

### main.tsx
Application entry point.

**Features:**
- Mounts React app to DOM
- Wraps with StrictMode
- Imports global styles

---

## Styling (`src/index.css`)

### CSS Variables
Theme colors defined as CSS custom properties:

**Light Mode:**
- `--color-background`: White background
- `--color-foreground`: Dark text
- `--color-primary`: Primary brand color
- etc.

**Dark Mode:**
- `--color-background`: Dark background
- `--color-foreground`: Light text
- Inverted color scheme

### TailwindCSS Configuration
Colors map to CSS variables for easy theming:

```js
colors: {
  background: "hsl(var(--color-background))",
  foreground: "hsl(var(--color-foreground))",
  // ...
}
```

---

## Adding New Components

### Step-by-Step Process

1. **Create Component File**
   ```bash
   # For UI component
   touch src/components/ui/my-component.tsx
   
   # For widget
   touch src/components/widgets/my-widget.tsx
   ```

2. **Define Component**
   ```tsx
   import type { ReactNode } from "react";
   import { cn } from "@/lib/utils";

   interface MyComponentProps {
     children: ReactNode;
     className?: string;
   }

   export function MyComponent({ children, className }: MyComponentProps) {
     return (
       <div className={cn("base-classes", className)}>
         {children}
       </div>
     );
   }
   ```

3. **Export from Index (Optional)**
   Create `src/components/ui/index.ts`:
   ```tsx
   export * from "./button";
   export * from "./card";
   export * from "./my-component";
   ```

4. **Use in Application**
   ```tsx
   import { MyComponent } from "@/components/ui/my-component";

   function Page() {
     return <MyComponent>Content</MyComponent>;
   }
   ```

---

## Best Practices

### Component Design
- Keep components small and focused
- Use TypeScript for prop types
- Export prop interfaces for documentation
- Use `cn()` for conditional classes

### File Organization
- Group related components
- Co-locate types with components
- Use index files for cleaner imports

### Styling
- Use Tailwind utility classes
- Avoid inline styles
- Use CSS variables for theming
- Follow responsive-first approach

### State Management
- Keep state as local as possible
- Use custom hooks for reusable logic
- Leverage React Context for global state

---

## Component Dependencies

```
App.tsx
└── ThemeProvider
    └── Dashboard (page)
        └── DashboardLayout
            ├── Header
            │   └── Button (theme toggle)
            ├── Sidebar
            └── GridLayoutWrapper
                ├── StatsWidget (x4)
                │   └── WidgetWrapper
                │       └── Card
                ├── ChartWidget (x2)
                │   └── WidgetWrapper
                │       └── Card
                └── ActivityWidget
                    └── WidgetWrapper
                        └── Card
```

This structure ensures a clean separation of concerns and makes the application easy to maintain and extend.
