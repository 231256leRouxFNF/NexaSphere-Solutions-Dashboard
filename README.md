# NexaSphere Solutions Dashboard

A customizable, multi-purpose client dashboard for NexaSphere Solutions, offering a central hub for productivity and personal insights. Features include drag-and-drop widgets, light/dark theming, and a modern professional aesthetic built with React, TypeScript, TailwindCSS, and shadcn/ui.

![Dashboard Light Mode](https://github.com/user-attachments/assets/24016bb4-2dd4-4a83-b9fe-f4eb1bae3e31)

![Dashboard Dark Mode](https://github.com/user-attachments/assets/79e93b30-b201-421a-a837-90e909854682)

## ✨ Features

- 🎯 **Drag-and-Drop Layout** - Fully customizable widget positioning with react-grid-layout
- 🎨 **Light/Dark Theme** - Beautiful theme system with smooth transitions
- 📊 **Modular Widgets** - Extensible widget system (stats, charts, activity feeds)
- 💾 **Persistent Layout** - Layout preferences saved to localStorage
- 🎭 **Modern UI** - Built with shadcn/ui components and TailwindCSS
- 📱 **Responsive Design** - Mobile-first approach with adaptive layouts
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 🔧 **TypeScript** - Fully typed for better developer experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd NexaSphere-Solutions-Dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the dashboard in action!

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📚 Documentation

- **[Setup Guide](./SETUP_GUIDE.md)** - Complete setup and configuration guide
- **[Component Structure](./COMPONENT_STRUCTURE.md)** - Detailed component documentation

## 🛠️ Tech Stack

- **Framework**: Vite + React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **UI Library**: shadcn/ui (custom implementation)
- **Icons**: Lucide React
- **Drag & Drop**: react-grid-layout
- **State Management**: React Hooks

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Base UI components (Button, Card, etc.)
│   ├── layout/          # Layout components (Header, Sidebar, Grid)
│   ├── widgets/         # Dashboard widgets
│   └── theme-provider.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
├── App.tsx
└── main.tsx
```

## 🎨 Customization

### Adding New Widgets

1. Create a widget component in `src/components/widgets/`
2. Add it to the dashboard layout in `src/pages/dashboard.tsx`
3. Configure its position in the grid layout

Example:
```tsx
// src/components/widgets/my-widget.tsx
import { WidgetWrapper } from "./widget-wrapper";

export function MyWidget() {
  return (
    <WidgetWrapper title="My Custom Widget">
      <div>Your content here</div>
    </WidgetWrapper>
  );
}
```

### Theming

Edit CSS variables in `src/index.css` to customize colors:

```css
:root {
  --color-primary: 222.2 47.4% 11.2%;
  --color-secondary: 210 40% 96.1%;
  /* Add your custom colors */
}
```

## 🧩 Available Widgets

- **Stats Widget** - Display key metrics with trend indicators
- **Chart Widget** - Placeholder for data visualizations
- **Activity Widget** - Show recent activities or events

## 🔮 Roadmap

- [ ] Firebase Authentication integration
- [ ] Guest/registered access modes
- [ ] More widget types (tables, calendars, etc.)
- [ ] Widget configuration panel
- [ ] Responsive grid breakpoints
- [ ] Data fetching with React Query
- [ ] User management system
- [ ] Settings page

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component design system
- [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) for drag-and-drop functionality
- [Lucide](https://lucide.dev/) for beautiful icons
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling
