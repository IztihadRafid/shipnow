# ShipNow - Shipping Management Platform

ShipNow is a comprehensive shipping management platform built with modern web technologies. It provides businesses with a centralized dashboard to manage shipments, track deliveries, oversee warehouse operations, and handle invoicing - all in one smart interface.

## Overview

ShipNow streamlines logistics operations by offering real-time shipment tracking, warehouse inventory management, automated invoicing, and detailed analytics. The platform is designed to help businesses improve operational efficiency, reduce delivery delays, and enhance customer satisfaction.

## Tech Stack

- **Framework**: Next.js 16.2.11 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4
- **Charts**: ApexCharts 6.5.0, react-apexcharts 2.1.1
- **Icons**: Lucide React 1.26.0, React Icons 5.7.0
- **Language**: TypeScript 5 (Strict Mode)
- **Font**: Nunito Sans (Google Fonts)

## Project Structure

```
shipnow/
├── public/                      # Static assets
│   ├── logo.png, logo1.png     # Brand logos
│   ├── adminImg.jpg            # Admin profile image
│   ├── image1.jpg, image2.jpg  # Landing page images
│   ├── bd.webp, us.webp        # Country flags
│   └── Patterns.png            # Decorative patterns
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with font configuration
│   │   ├── page.tsx            # Login page
│   │   ├── not-found.tsx       # 404 page
│   │   ├── globals.css         # Global styles and CSS variables
│   │   └── (app)/              # Authenticated route group
│   │       ├── layout.tsx      # App layout (Sidebar + Footer)
│   │       ├── dashboard/      # Dashboard page
│   │       ├── invoices/       # Invoice management
│   │       ├── shipments/      # Shipment management
│   │       │   └── create/     # Create shipment form
│   │       └── warehouse/      # Warehouse management
│   │
│   ├── components/             # Reusable components (28 files)
│   │   ├── Dashboard/          # Dashboard-specific components
│   │   │   ├── ActivityCard.tsx
│   │   │   ├── ApexChart.tsx
│   │   │   ├── ColumnChar1.tsx
│   │   │   ├── ColumnChar2.tsx
│   │   │   ├── ProductCategoriesCard.tsx
│   │   │   ├── ShipAlertCard.tsx
│   │   │   ├── Shipmenttable.tsx
│   │   │   └── TrackCard.tsx
│   │   ├── Invoice/            # Invoice components
│   │   │   ├── InvoiceDetails.tsx
│   │   │   ├── InvoicesTable.tsx
│   │   │   └── Invoicecalculations.tsx
│   │   ├── Warehouse/          # Warehouse components
│   │   │   ├── CapacityUsageCard.tsx
│   │   │   ├── PackageStatusCard.tsx
│   │   │   ├── WarehouseActivityLogCard.tsx
│   │   │   ├── WarehouseInventoryChart.tsx
│   │   │   ├── WarehouseMapView.tsx
│   │   │   └── WarehouseStorageTable.tsx
│   │   ├── UI/                 # General UI components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── Searchsortbar.tsx
│   │   │   ├── Statustabs.tsx
│   │   │   ├── ViewToggle.tsx
│   │   │   └── PromoCard.tsx
│   │   └── *.css               # Component-specific styles
│   │
│   └── data/                   # Data and TypeScript interfaces
│       ├── ShipmentsData.ts    # Shipment data
│       ├── dashboardCardData.ts
│       ├── invoiceTypes.ts     # Invoice type definitions
│       ├── invoices.ts         # Invoice data
│       ├── navlinks.ts         # Navigation configuration
│       ├── warehouse.ts        # Warehouse data
│       └── warehouseTypes.ts   # Warehouse type definitions
│
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## Key Features

### Authentication
- Secure login page with email/password validation
- Password visibility toggle
- Session persistence via LocalStorage
- Automatic redirect to dashboard after successful login

### Dashboard
- **Statistics Cards**: Real-time metrics for active shipments, delivery performance, and revenue
- **Shipment Statistics**: Interactive area chart showing monthly shipment trends
- **Profit Summary**: Bar chart displaying revenue vs. cost over time
- **Shipment Type Distribution**: Donut chart visualizing freight type breakdown
- **Product Categories**: Visual breakdown of product categories
- **Shipment Tracking**: Interactive map with real-time shipment location
- **Recent Shipments**: Table showing latest shipment activity
- **Activity Feed**: Timeline of recent system activities
- **Shipment Alerts**: Notifications for delays and issues

### Shipments Management
- **View Modes**: Toggle between grid and table views
- **Advanced Filtering**: Filter by status (All, Delivered, In Transit, Processing, Out for Delivery)
- **Search**: Real-time search by shipment details
- **Sorting**: Sort by newest or oldest shipments
- **Pagination**: Configurable page sizes for efficient navigation
- **Create Shipment**: Comprehensive form with:
  - Sender and recipient information
  - Phone validation with country code selection
  - Package details (description, quantity, weight, dimensions)
  - Freight type selection (Road, Rail, Ocean, Air)
  - Carrier selection
  - Shipping method options
  - Additional services (insurance, signature, temperature control, fragile handling)

### Invoices & Billing
- **Invoice Statistics**: Overview cards for paid, unpaid, pending, and overdue invoices
- **Invoice Table**: Sortable and searchable invoice list
- **Invoice Details**: Comprehensive invoice view with:
  - Billing party information
  - Package summary with line items
  - Automatic tax and fee calculations
  - Status indicators (Paid, Unpaid, Overdue)
  - Edit, hold, and send actions

### Warehouse Management
- **Warehouse Statistics**: Real-time metrics for SKU count, quantity on hand, and capacity usage
- **Inventory Chart**: Bar chart showing inventory distribution by category
- **Capacity Usage**: Donut chart displaying shelf utilization
- **Package Status**: Track package status (Expected, Received, Sent)
- **Storage Table**: Detailed view of storage usage by floor and section
- **Warehouse Map**: Interactive floor plan with shelf availability
- **Activity Log**: Timeline of warehouse operations

## Responsive Design

ShipNow is fully responsive with optimized layouts for:

- **Mobile** (< 768px): Drawer navigation, stacked layouts, touch-optimized controls
- **Tablet** (768px - 1440px): Icon rail navigation, adaptive grid layouts
- **Desktop** (> 1440px): Full sidebar navigation, multi-column layouts

## Color Scheme

- **Primary**: Purple (#856DF3)
- **Secondary**: Blue (#2A1298)
- **Neutral**: Gray scale (#333333, #757575, #fefefe, #f0ebeb, #f0f0f0, #E0E0E0)
- **Custom CSS variables** defined in `src/app/globals.css`

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shipnow
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
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

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### TypeScript
- Strict mode enabled
- Path alias `@/*` configured to point to `./src/*`
- Target: ES2017
- Module resolution: bundler

### Tailwind CSS
- Version 4 with PostCSS integration
- Custom color palette defined in CSS variables
- Breakpoints: sm (375px), md (768px), xl (1440px)

### ESLint
- Next.js recommended configuration
- TypeScript support
- Core Web Vitals rules

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Peterdraw. All rights reserved.

## Support

For support, please contact the development team or refer to the project documentation.
