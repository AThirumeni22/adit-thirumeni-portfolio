import type {
  ContactInfo,
  EducationEntry,
  ExperienceEntry,
  PersonalInfo,
  Project,
  SkillCategory,
} from '../types/content'

export const personal: PersonalInfo = {
  name: 'Adityan Thirumeni',
  title: 'Finance & Data Science',
  location: 'Amsterdam, The Netherlands',
  email: 'adit.natarajan2478@gmail.com',
  phone: '+31 6 83376771',
  summary:
    "I'm a Finance & Data Science student at Tilburg University, building on a BSc in Economics from Erasmus. What genuinely interests me is the intersection of quantitative methods and real financial decisions — whether that's understanding how investor sentiment moves markets, constructing portfolios, or using causal inference to cut through noisy data. I work primarily in R and Excel, and I'm comfortable taking a problem from raw data all the way through to a clear recommendation. I'm looking for an internship or junior analyst role where the analytical work is close to actual business decisions.",
}

export const education: EducationEntry[] = [
  {
    institution: 'Tilburg University',
    degree: 'MSc Finance (Data Science)',
    dateRange: 'Sep 2025 – Oct 2026',
    coursework: [
      'Financial Econometrics and Causal Inference — applied OLS, instrumental variables, difference-in-differences, and event studies in R on real financial datasets',
      'Machine Learning for Finance — built supervised and unsupervised models including tree-based methods; applied these to forecasting problems with real market data',
      'Portfolio Construction and Risk Management — implemented Mean-Variance and Black-Litterman frameworks; evaluated strategies on Sharpe ratio, drawdown, and tail-risk',
      'Sustainable Investing — analysed ESG screening approaches, climate-risk pricing, and green bond structures; compared sustainable and conventional portfolio performance',
    ],
  },
  {
    institution: 'Erasmus University Rotterdam',
    degree: 'BSc International Economics & Business Economics (Finance)',
    dateRange: '2022 – 2025',
    coursework: [],
    thesis: {
      title: 'How does investor sentiment influence stock market prices?',
      description:
        'Independently designed and ran a regression and event study analysis in R, combining market return data with sentiment indices; graded distinction.',
    },
  },
]

export const skills: SkillCategory[] = [
  {
    category: 'Quantitative',
    items: [
      'Financial modelling',
      'Valuation (DCF, CAPM)',
      'Portfolio optimisation',
      'Risk and scenario analysis',
      'Causal inference',
    ],
  },
  {
    category: 'Programming',
    items: ['R (tidyverse, ggplot2)', 'Stata', 'SPSS'],
  },
  {
    category: 'Tools',
    items: ['MS Excel (advanced, Power Query, pivot tables)'],
  },
  {
    category: 'Languages',
    items: ['English — C2 (native fluency)', 'Tamil — C2 (native)', 'Dutch — B1 (working knowledge)'],
  },
]

export const projects: Project[] = [
  {
    title: 'Importance of CEO Capital in Firm Performance',
    type: 'Thesis',
    year: '2026',
    description: 'MSc Thesis — a panel study of what CEO human capital actually predicts.',
    bullets: [
      'Built a panel of 7,487 firm-year observations for S&P 500 firms (2000–2022) by merging Compustat, ExecuComp and BoardEx data from WRDS',
      'Constructed a composite CEO Capital Index from education, network size and international experience',
      'Ran panel regressions in R with year fixed effects and firm-clustered errors; found the index predicts firm value (Tobin’s Q) but not profitability (ROA), with network size driving almost the entire effect',
    ],
    stack: ['R', 'WRDS', 'Compustat', 'ExecuComp', 'BoardEx'],
    stat: { value: 7487, label: 'firm-year observations' },
  },
  {
    title: 'Obto',
    type: 'Personal Project',
    year: '2026',
    description: 'A social workout-tracking web app, built and shipped end to end.',
    bullets: [
      'Built and launched a full-stack web app (JavaScript, PostgreSQL/Supabase, Vercel) used by 5–6 active users to log workouts and plan gym sessions together',
      'Designed the database with row-level security so each user’s data stays private and is shared only with accepted friends; added a shared calendar, session planning and training-volume analytics',
      'Shipped weekly releases driven by user feedback, covering bug fixes, UX redesigns and end-to-end browser tests',
    ],
    stack: ['JavaScript', 'PostgreSQL', 'Supabase', 'Vercel'],
    stat: { value: 6, label: 'active users' },
  },
  {
    title: 'Investor Sentiment and Stock Prices',
    type: 'Thesis',
    year: '2024 – 2025',
    description: 'Bachelor Thesis — does sentiment move prices, and where?',
    bullets: [
      'Merged multiple data sources — CRSP market returns, Baker-Wurgler sentiment index, and news-based proxies — into a clean panel dataset; handled missing data and outliers systematically',
      'Found evidence of sentiment-driven return predictability in small-cap stocks during high-volatility periods; presented findings clearly to a non-specialist panel',
    ],
    stack: ['R', 'CRSP', 'Event Study'],
  },
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Albert Heijn',
    role: 'Store Operations Associate',
    dateRange: '2018 – 2019',
    bullets: [
      'Managed stock accuracy and daily operational reporting for a busy department',
      'Learned to stay focused and reliable under real time pressure',
    ],
  },
]

export const contact: ContactInfo = {
  email: personal.email,
  phone: personal.phone,
  location: personal.location,
}
