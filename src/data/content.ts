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
      title: 'Investor Sentiment and Stock Market Returns during COVID-19',
      description:
        'Independently designed and ran a regression analysis in R and Stata, testing four investor-sentiment proxies against S&P 500 returns from 2017–2023; graded distinction.',
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
    title: 'Obto',
    type: 'Personal Project',
    year: 'September 2026',
    description: 'A social workout-tracking web app, built and shipped end to end.',
    bullets: [
      'Built and launched a full-stack web app (JavaScript, PostgreSQL/Supabase, Vercel) used by 5–6 active users to log workouts and plan gym sessions together',
      'Designed the database with row-level security so each user’s data stays private and is shared only with accepted friends; added a shared calendar, session planning and training-volume analytics',
      'Shipped weekly releases driven by user feedback, covering bug fixes, UX redesigns and end-to-end browser tests',
    ],
    stack: ['JavaScript', 'PostgreSQL', 'Supabase', 'Vercel'],
    stat: { value: 6, label: 'active users' },
    liveUrl: 'https://fitness-app-tau-plum.vercel.app/',
    detailSummary:
      'A full-stack social workout tracker built solo end-to-end — from database design to weekly releases — used actively by a small group of friends to plan and log training together.',
    detailSections: [
      {
        heading: 'What it does',
        body: [
          'Obto lets a small group of friends log workouts, plan gym sessions together, and see each other’s training activity through a shared calendar and training-volume analytics.',
        ],
      },
      {
        heading: 'Technical approach',
        body: [
          'Built with JavaScript on a PostgreSQL/Supabase backend, deployed on Vercel. Row-level security is enforced at the database level so each user’s data stays private by default and is only shared with accepted friends — access control lives in the data layer, not just the UI.',
          'Shipped weekly releases driven directly by user feedback: bug fixes, UX redesigns, and end-to-end browser tests to catch regressions before each release.',
        ],
      },
      {
        heading: 'Try it',
        body: ['The app is live and in active use — open it below to see the current version.'],
      },
    ],
  },
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
    detailSummary:
      "A panel study testing whether a composite index of CEO education, professional network size, and international experience predicts S&P 500 firm performance — and whether that answer depends on how performance is measured.",
    detailSections: [
      {
        heading: 'Research Question',
        body: [
          "Prior research links individual CEO traits — education, network size, international exposure — to firm performance, but usually one at a time. This thesis combines all three into a single CEO Capital Index and asks whether the combination still predicts performance, whether that answer differs between accounting profitability (ROA) and market valuation (Tobin's Q), and which of the three underlying factors actually drives the result.",
        ],
      },
      {
        heading: 'Data & Method',
        body: [
          'Built a panel of 7,487 firm-year observations for S&P 500 firms (2000–2022) via WRDS, merging Compustat (financials), ExecuComp (CEO identity) and BoardEx (CEO background data).',
          'Estimated panel regressions with year fixed effects and firm-clustered standard errors, winsorizing at the 1st/99th percentiles. Firm fixed effects were deliberately excluded from the main specification — most CEOs sit at the same firm for years, so within-firm variation in the index is very limited (25.4% of firms show zero variation at all) — but included as a robustness check, alongside Fama-MacBeth regressions run year by year.',
        ],
      },
      {
        heading: 'Key Findings',
        body: [
          "The CEO Capital Index has no statistically significant relationship with ROA, but a strong, positive, highly significant relationship with Tobin's Q (coefficient 0.354, p < 0.001) — a two-sample z-test confirms this difference between the two performance measures is itself statistically significant (p < 0.001).",
          'Decomposing the index shows the entire effect is carried by network size — education and international experience are not significant for either measure. The Fama-MacBeth robustness check reproduces almost the identical coefficient (0.318), and the result survives, though weakens, under firm fixed effects.',
        ],
      },
      {
        heading: 'Limitations',
        body: [
          "BoardEx measures a CEO's lifetime accumulated connections rather than current, active ones, so the network effect may partly reflect age and tenure rather than networking skill on its own. A cleaner measure of active or high-quality connections would help separate the two explanations.",
        ],
      },
    ],
  },
  {
    title: 'Investor Sentiment and Stock Market Returns during COVID-19',
    type: 'Thesis',
    year: '2024 – 2025',
    description: 'Bachelor Thesis — which sentiment proxy actually explains the S&P 500 during a crisis?',
    bullets: [
      'Tested four investor-sentiment proxies (VIX, University of Michigan Consumer Sentiment, Baker-Wurgler Index, AAII Bull-Bear spread) against monthly S&P 500 returns from 2017–2023, spanning pre-, during-, and post-COVID-19 periods',
      'Found that UMICH and the Bull-Bear spread — not VIX — were the most robust predictors once lagged effects were considered, contradicting a well-cited prior study that named VIX the best proxy over 1990–2017',
    ],
    stack: ['Stata', 'R', 'Regression Analysis'],
    detailSummary:
      'A replication-with-a-twist of Smales (2017): does investor sentiment still explain S&P 500 returns once you run it through the most severe financial crisis of the sample period, COVID-19 — and does the same sentiment proxy still win?',
    detailSections: [
      {
        heading: 'Research Question',
        body: [
          'How does investor sentiment impact the performance and volatility of the S&P 500 during the COVID-19 pandemic, and does the proxy that worked best pre-2017 (VIX, per Smales 2017) still hold up across a period that includes an actual financial crisis?',
        ],
      },
      {
        heading: 'Data & Method',
        body: [
          'Collected 84 months of S&P 500 returns (Yahoo Finance) and four sentiment proxies — VIX and UMICH (FRED), the Baker-Wurgler Index (NYU Stern), and the AAII Bull-Bear spread — from January 2017 to December 2023.',
          'Estimated regression models with macroeconomic and Fama-French three-factor controls, run separately for each sentiment proxy, its month-on-month change, and its lagged value; repeated the analysis across size/value/growth portfolios and ten industry groupings.',
        ],
      },
      {
        heading: 'Key Findings',
        body: [
          "Contrary to Smales (2017), VIX loses significance once lagged specifications are considered; UMICH and the Bull-Bear spread emerge as the most consistent predictors of S&P 500 returns across the 2017–2023 window, which includes the COVID-19 crash.",
          'The cross-sectional hypothesis — that sentiment effects would hold consistently across different portfolios and industries — was not well supported; most of those regressions showed no significant relationship, leaving that question largely unresolved.',
        ],
      },
      {
        heading: 'Limitations',
        body: [
          'With only 84 monthly observations against a relatively large set of control variables, several models show R² values close to 1, a sign of likely overfitting rather than a genuinely perfect fit — a longer sample or a more parsimonious model would make the results more reliable.',
        ],
      },
    ],
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
