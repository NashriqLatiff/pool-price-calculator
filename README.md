# 🏊 Pool Price Calculator

## 🌐 Live Demo

https://pool-price-calculator.vercel.app/

A modern web-based swimming pool construction price calculator built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

The application provides instant estimated construction pricing based on pool dimensions, pool system, and project location.

## ✨ Features

- Instant pool price calculation
- Automatic price updates when input changes
- Melaka and outside Melaka pricing
- Skimmer and Overflow pool systems
- Pool size validation
- Responsive user interface
- Feet to meter conversion
- Feet and inches to decimal feet conversion
- Automated unit testing with Vitest
- No database required
- Client-side calculation

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Vitest
- Git & GitHub

## 🧮 Pool Price Calculator

The calculator estimates swimming pool construction prices based on:

- Project location
- Pool system
- Pool length
- Pool width
- Pool depth

Pricing is calculated automatically whenever the user changes the input.

## 📐 Unit Conversion Tools

The application includes useful unit conversion tools.

### Feet to Meter

Convert measurements from feet to meters.

### Feet + Inches to Decimal Feet

Example:

5 ft 7 in → 5.58 ft

## 🧪 Testing

The core calculation logic is covered by automated unit tests using Vitest.

Run tests:

```bash
npm run test:run

## 🚀 Deployment

The application is deployed on Vercel and automatically redeploys whenever changes are pushed to the `main` branch.

Production:

https://pool-price-calculator.vercel.app/