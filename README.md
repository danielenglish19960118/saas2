# AI Receptionist SaaS 🤖 🧡 🐾 (Garfield Edition)

An enterprise-ready, AI-powered automated receptionist platform designed to handle multi-channel customer inquiries, automate ticket resolution, and facilitate seamless bot interactions across Vapi AI voice widgets, Discord, and internal communication workflows—all wrapped in a signature **Garfield** comic aesthetic!

---

## 🌟 Key Features

- 🐱 **Garfield Comic UI Theme**: High-contrast, interactive Web Portal featuring Garfield animations, a lasagna fuel meter, sound effects, and comic speech bubbles.
- 🔐 **Coexisting Security Gate**: Integrated password verification (`/api/verify-password`) coexisting directly on the main dashboard for administrative security.
- 🎙️ **Tenant Provisioning Portal**: Instantly deploy dedicated Vapi AI Assistant instances (`/api/create-tenant`) tailored with business names, industries, and custom system prompts.
- 🍝 **Lasagna & Light Integration**: Built-in Instagram widget linking to [@lasagna_and_light](https://www.instagram.com/lasagna_and_light/) for community posts and aesthetic updates.
- 🤖 **Garfield Discord Support Bot**: Full integration with `discord.js` featuring rate limiting (naps/lasagna timeouts), sarcastic automated responses, custom system prompts, and support ticketing.

---

## 🛠️ Tech Stack

- **Frontend & Dashboard**: HTML5, Next.js (React), CSS3 (Comic Neue, Bangers & Fredoka fonts)
- **Backend / API**: Node.js, Next.js API Routes (`/api/verify-password`, `/api/create-tenant`)
- **Discord Bot**: Node.js, `discord.js` (v14)
- **Voice AI Integrations**: Vapi AI REST API / OpenAI GPT-4o
- **Deployment & Hosting**: Vercel, GitHub Pages, GitHub Actions

---

## 📂 Project Structure

```text
ai-receptionist-saas/
├── .github/                  # GitHub Actions & CI/CD workflows
├── public/                   # Static web assets & Garfield UI
│   ├── index.html            # Garfield Management Portal UI & Instagram Feed
│   └── garfield-avatar.png   # Graphic assets
├── src/
│   ├── pages/
│   │   ├── index.js          # Next.js Landing Page Entrypoint
│   │   └── api/              # Backend API Endpoints
│   │       ├── verify-password.js  # Password Access Verification
│   │       └── create-tenant.js    # Vapi AI Tenant Provisioning Engine
│   └── bot/
│       ├── bot.js            # Garfield Persona Discord Bot Engine
│       └── commands.js       # Discord Slash Command Registrations
├── privacy.html              # Public Privacy Policy Document
├── terms.html                # Public Terms of Service Document
├── .env.local                # Local Environment Variables (Git-ignored)
├── package.json              # Node.js Dependencies and Scripts
└── README.md                 # Project Documentation
🚀 Quick StartPrerequisitesMake sure you have Node.js (v18.0.0 or higher), npm, and Git installed.1. Clone the RepositoryBashgit clone [https://github.com/danielenglish19960118/ai-receptionist-saas.git](https://github.com/danielenglish19960118/ai-receptionist-saas.git)
cd ai-receptionist-saas
2. Install DependenciesBashnpm install
3. Configure Environment VariablesCreate a .env.local file in the root directory:Code snippet# SaaS Security Password
SAAS_ADMIN_PASSWORD=garfield

# Vapi AI Key (Optional for live Vapi voice assistant deployment)
VAPI_API_KEY=your_vapi_api_key_here

# Discord Bot Credentials
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_BOT_TOKEN=your_discord_bot_token

# App URL Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
4. Run Development ServerBash# Start Next.js Web Dashboard
npm run dev

# Start Garfield Discord Bot (in a separate terminal)
node src/bot/bot.js
🤖 Discord Slash CommandsCommandDescription/pingCheck WebSocket latency with Garfield response./askSubmit inquiry to Garfield's automated AI knowledge base./config promptUpdate system prompt/persona for the Discord server./ticketCreate a private support thread with human support staff./statsView Garfield SaaS system usage & lasagna fuel metrics./infoView terms, privacy policy, and @lasagna_and_light Instagram links.⚖️ Compliance & Legal DocumentsFor platform verification (e.g., Discord Developer Portal verification, OAuth2 compliance) and user transparency:📜 Terms of Service: https://danielenglish19960118.github.io/ai-receptionist-saas/terms.html🔒 Privacy Policy: https://danielenglish19960118.github.io/ai-receptionist-saas/privacy.html📸 Instagram Community: https://www.instagram.com/lasagna_and_light/📄 LicenseThis project is licensed under the MIT License.
