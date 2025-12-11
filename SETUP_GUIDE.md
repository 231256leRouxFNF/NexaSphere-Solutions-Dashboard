# NexaSphere Solutions Dashboard - Setup Guide

## Overview

This is a modern, professional dashboard built with Vite, React, TypeScript, TailwindCSS, and shadcn/ui. It features a fully customizable drag-and-drop layout powered by react-grid-layout, with support for light/dark themes.

## Tech Stack

- **Framework**: Vite + React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **UI Components**: shadcn/ui (custom implementation)
- **Icons**: Lucide React
- **Drag & Drop**: react-grid-layout
- **State Management**: React Hooks

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NexaSphere-Solutions-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── ui/                      # Base UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/                  # Layout components
│   │   ├── dashboard-layout.tsx # Main dashboard layout
│   │   ├── header.tsx          # Header with theme toggle
│   │   ├── sidebar.tsx         # Navigation sidebar
│   │   └── grid-layout.tsx     # Drag-and-drop grid wrapper
│   ├── widgets/                 # Dashboard widget components
│   │   ├── widget-wrapper.tsx  # Base widget wrapper
│   │   ├── stats-widget.tsx    # Statistics widget
│   │   ├── chart-widget.tsx    # Chart widget placeholder
│   │   └── activity-widget.tsx # Activity feed widget
│   └── theme-provider.tsx       # Theme context provider
├── hooks/
│   └── use-dashboard-layout.ts  # Dashboard layout state management
├── lib/
│   └── utils.ts                 # Utility functions (cn helper)
├── pages/
│   └── dashboard.tsx            # Main dashboard page
├── App.tsx                      # Root application component
├── main.tsx                     # Application entry point
└── index.css                    # Global styles & CSS variables
```

## Key Features

### 1. Drag-and-Drop Dashboard Layout

The dashboard uses `react-grid-layout` for a fully interactive, draggable grid system:

- **Draggable widgets**: Click and drag widgets to reposition them
- **Resizable widgets**: Drag widget edges to resize
- **Persistent layout**: Layout changes are saved to localStorage
- **Reset functionality**: Reset to default layout with one click

### 2. Theme System

Built-in light/dark mode with smooth transitions:

- Toggle between light and dark themes
- Persists user preference in localStorage
- CSS variables for easy customization
- System theme detection support

### 3. Modular Widget System

Extensible widget architecture:

- **StatsWidget**: Display key metrics with trend indicators
- **ChartWidget**: Placeholder for data visualizations
- **ActivityWidget**: Show recent activities/events
- **WidgetWrapper**: Base component for consistent styling

### 4. Responsive Design

- Mobile-first approach with TailwindCSS
- Sidebar collapses on smaller screens
- Grid layout adapts to different screen sizes

## Customization Guide

### Adding New Widgets

1. Create a new widget component in `src/components/widgets/`:

```typescript
import { WidgetWrapper } from "./widget-wrapper";

export function CustomWidget() {
  return (
    <WidgetWrapper title="My Custom Widget">
      <div>Your custom content here</div>
    </WidgetWrapper>
  );
}
```

2. Add the widget to your dashboard in `src/pages/dashboard.tsx`:

```typescript
// Add to layout configuration
const defaultLayout = [
  // ... existing widgets
  { i: "custom-1", x: 0, y: 8, w: 6, h: 3 },
];

// Add to JSX
<div key="custom-1">
  <CustomWidget />
</div>
```

### Customizing Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: 222.2 47.4% 11.2%;
  --color-secondary: 210 40% 96.1%;
  /* Add your custom colors */
}
```

### Adding shadcn/ui Components

The project includes the base setup for shadcn/ui. To add more components:

1. Create the component file in `src/components/ui/`
2. Use the utility classes and cn helper from `src/lib/utils.ts`
3. Follow the shadcn/ui component patterns

### Modifying Grid Layout

Edit grid configuration in `src/components/layout/grid-layout.tsx`:

```typescript
gridConfig={{
  cols: 12,           // Number of columns
  rowHeight: 80,      // Height of each row
  margin: [16, 16],   // Spacing between widgets
}}
```

## Component Documentation

### DashboardLayout

Main layout wrapper with header and sidebar.

**Props**: `children: ReactNode`

### GridLayoutWrapper

Drag-and-drop grid layout container.

**Props**:
- `layout: LayoutItem[]` - Grid layout configuration
- `onLayoutChange: (layout: LayoutItem[]) => void` - Layout change callback
- `children: ReactNode` - Grid items
- `isDraggable?: boolean` - Enable/disable dragging
- `isResizable?: boolean` - Enable/disable resizing

### StatsWidget

Display statistics with trend indicators.

**Props**:
- `title: string` - Widget title
- `value: string | number` - Main value to display
- `change?: number` - Percentage change (positive/negative)
- `changeLabel?: string` - Label for the change indicator

### ActivityWidget

Display a list of recent activities.

**Props**:
- `title: string` - Widget title
- `activities: Activity[]` - Array of activity objects
  - `id: string`
  - `title: string`
  - `time: string`

## Hooks

### useDashboardLayout

Manages dashboard layout state with localStorage persistence.

**Returns**:
- `layout: LayoutItem[]` - Current layout configuration
- `handleLayoutChange: (newLayout: LayoutItem[]) => void` - Update layout
- `resetLayout: () => void` - Reset to default layout

## Development Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance Considerations

- React Grid Layout uses CSS transforms for optimal performance
- Layout state is saved to localStorage to persist user preferences
- Components use React.memo where appropriate to minimize re-renders
- TailwindCSS purges unused styles in production

## Troubleshooting

### Build errors with TailwindCSS

If you encounter CSS-related build errors, ensure you're using TailwindCSS 4 with the correct PostCSS plugin (`@tailwindcss/postcss`).

### Grid layout not working

Make sure to import the react-grid-layout CSS:
```typescript
import "react-grid-layout/css/styles.css";
```

### Theme not persisting

Check that localStorage is accessible in your browser and not blocked by privacy settings.

## Future Enhancements

- [ ] Add Firebase Authentication
- [ ] Implement guest/registered access modes
- [ ] Add more widget types (charts, tables, etc.)
- [ ] Add widget configuration panel
- [ ] Implement responsive breakpoints for grid layout
- [ ] Add data fetching and state management (React Query/TanStack Query)
- [ ] Add analytics dashboard page
- [ ] Implement user management
- [ ] Add settings page

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
