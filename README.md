# GoodFood Dashboard

A modern, responsive analytics dashboard for a food ordering platform built with Next.js and TypeScript.

## Features

- **Order Analytics** - Visualize order trends and patterns over time
- **Revenue Tracking** - Monitor revenue performance with interactive charts
- **Time-based Insights** - Analyze orders by time of day (Morning, Afternoon, Evening)
- **Popular Items** - Track most ordered food items
- **Customer Ratings** - View customer satisfaction metrics
- **Responsive Design** - Optimized for desktop and mobile devices

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Font:** Geist (via next/font)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

### Build

Create a production build:

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── components/          # Dashboard components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── OrderChart.tsx
│   ├── OrderTimeChart.tsx
│   ├── RevenueChart.tsx
│   ├── RatingBubbles.tsx
│   └── MostOrderedFood.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Dashboard home page
└── globals.css         # Global styles

public/
├── charts/             # Chart assets
├── icons/              # Icon assets
└── imgs/               # Image assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.
