src/
├── app/                  → Application core (Router, Providers, Layout, Store setup)
│   ├── providers/
│   ├── routes/
│   └── layout/
├── features/             → Business features (အဓိက အစိတ်အပိုင်း)
│   ├── auth/
│   │   ├── api/          → API calls
│   │   ├── components/   → Feature-specific components
│   │   ├── hooks/
│   │   ├── store/        → Feature state (if using Redux Toolkit slice)
│   │   ├── types/
│   │   ├── utils/
│   │   └── pages/        → Login, Register pages
│   ├── dashboard/
│   ├── billing/
│   └── user-profile/
├── shared/               → ဘယ် feature မှာ မဆို သုံးနိုင်တဲ့ အရာတွေ
│   ├── ui/               → Button, Modal, Card (Atomic Design သုံးရင် atoms/molecules/organisms)
│   ├── api/              → Base API client
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   └── lib/
├── entities/             → Domain models (User, Product) — အလွန်ကြီးရင် သုံး
├── widgets/              → Complex UI sections (reusable but feature-related)
├── processes/            → Multi-step flows (onboarding, checkout)
├── assets/
├── styles/               → Global styles, themes
└── utils/