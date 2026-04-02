# LUMINA AI — Design Studio

**Where imagination becomes interface.**

LUMINA AI is a next-generation, AI-powered UI component generator that creates high-fidelity design variations in real-time using multiple AI models. Benchmark creative design outputs from Google Gemini and any OpenRouter-supported model, then export production-ready HTML/CSS instantly.

![LUMINA AI](https://img.shields.io/badge/LUMINA-AI%20Design%20Studio-7c3aed) ![React](https://img.shields.io/badge/React-19.0-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6)

## 🎨 Features

- **Multi-Model Benchmarking**: Switch between Google Gemini and any OpenRouter model to compare creative quality
- **Real-time Streaming**: Watch designs generate live as the AI creates them, token by token
- **3 Unique Design Directions**: Every prompt yields three distinct conceptual variations
- **Full Homepage Generation**: Expand any component into a complete 8-section scrolling homepage
- **Variation Explorer**: Generate radical conceptual alternatives for any design
- **Source Export**: Copy production-ready HTML/CSS instantly
- **IP-Safe Prompts**: All generation uses physical/material metaphors, never artist or brand names

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ installed
- API keys for:
  - Google Gemini API (from [Google AI Studio](https://aistudio.google.com/app/apikey))
  - OpenRouter API (from [OpenRouter](https://openrouter.ai/keys))

### Installation

```bash
git clone https://github.com/MuftahFree/AI-DESIGN-BENCHMARK.git
cd AI-DESIGN-BENCHMARK
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```
GEMINI_API_KEY=your_gemini_api_key_here
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 How to Use

### 1. Select Your AI Model

- **Gemini**: Google's Gemini 3 Flash model — fast and creative
- **OpenRouter**: Any model from [OpenRouter's catalog](https://openrouter.ai/models)
  - Paste model ID (e.g., `anthropic/claude-3.5-sonnet`, `openai/gpt-4o`, `z-ai/glm-4.7`)

### 2. Describe Your Component

Enter a design prompt such as:
- *"A bioluminescent data dashboard"*
- *"Holographic music visualizer"*
- *"Neon-noir authentication screen"*

Press **Enter** or click **Inspire Me** for curated example prompts.

### 3. Explore & Refine

- **Variations** — Generate 3 radical conceptual alternatives for the focused design
- **Full Homepage** — Expand any component into an 8-section landing page
- **Source Code** — View and copy the raw HTML/CSS
- **Grid View** — Compare all three variations side-by-side

## 🏗️ Architecture

```
AI-DESIGN-BENCHMARK/
├── index.tsx              # Main React application
├── index.html             # HTML entry point
├── index.css              # Brand identity & global styles
├── vite.config.ts         # Vite build configuration
├── types.ts               # TypeScript interfaces
├── constants.ts           # Placeholder prompts
├── utils.ts               # Utility functions
└── components/
    ├── ArtifactCard.tsx           # Design preview cards
    ├── SideDrawer.tsx             # Code viewer & variations drawer
    ├── DottedGlowBackground.tsx   # Animated dot-matrix background
    └── Icons.tsx                  # SVG icon components
```

## 🤖 Supported Models

### Google Gemini
- **gemini-3-flash-preview** — Fast, highly creative UI generation

### OpenRouter (Examples)
- `anthropic/claude-3.5-sonnet` — Claude 3.5 Sonnet
- `openai/gpt-4o` — GPT-4o
- `z-ai/glm-4.7` — GLM-4.7 with reasoning
- `meta-llama/llama-3-70b-instruct` — Llama 3 70B
- See all at [openrouter.ai/models](https://openrouter.ai/models)

## 🎨 Brand Identity

**Name**: LUMINA AI  
**Tagline**: *Where imagination becomes interface*  
**Colors**: Deep dark `#050508` background, purple `#7c3aed` → cyan `#06b6d4` accent gradient  
**Typography**: Space Grotesk (display) · Inter (body) · JetBrains Mono (code)  
**Logo**: Hexagonal prism mark with gradient fill

## 🔧 Tech Stack

- **React 19** — UI framework
- **TypeScript 5.8** — Type safety
- **Vite 6** — Fast build and dev server
- **Google GenAI SDK** — Gemini API integration
- **OpenRouter API** — Multi-model access

## 📝 Scripts

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## 📄 License

Apache 2.0

