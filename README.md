# CAT DILR Prep

A React + TypeScript + Tailwind app for practicing CAT Data Interpretation &
Logical Reasoning (DILR) sets, organised by topic, with worked explanations
and video solutions.

## Features

- Browse DILR sets by topic (Arrangements, Games & Tournaments, Venn
  Diagrams, Data Sufficiency, Tables & Caselets, Routes & Networks).
- Solve a set with a per-set timer, a question palette, and MCQ-style
  answering.
- After submitting, see your score plus a worked explanation for every
  question, and a link to the video solution if one is attached.
- A dedicated Video Solutions library page listing every set that has a
  video attached.
- Progress (scores, last attempt) is saved locally in the browser
  (`localStorage`) — no backend required.

## Running locally

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Adding content

All content lives in `src/data/`:

- `src/data/topics.ts` — the list of topics.
- `src/data/sets.ts` — the list of DILR sets. Each set follows the
  `DilrSet` type in `src/types.ts`:

```ts
{
  id: 'unique-set-id',
  title: 'Set title',
  topicId: 'one of the ids in topics.ts',
  difficulty: 'Easy' | 'Medium' | 'Hard',
  timeLimitMinutes: 10,
  directions: 'Shared passage / caselet / puzzle description',
  videoSolutionUrl: 'https://...' // optional, shows up on the Video Solutions page
  questions: [
    {
      id: 'q1',
      text: 'Question text',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctOptionIndex: 0,
      explanation: 'Why that option is correct',
    },
    // ...
  ],
}
```

To add a video solution to an existing set, just set `videoSolutionUrl` on
that set (e.g. a YouTube/Drive share link) — it will automatically appear on
the set card, the result page, and the Video Solutions library.

The sample sets currently in `src/data/sets.ts` are original practice
content, one per topic, meant as a starting point. Replace/extend them with
your own licensed CAT DILR sets and matching video links.

> Note: `raw_data_do_not_use/` in the repo root contains scraped OCR data
> from a third-party paywalled prep platform (including embedded session
> identifiers) and is **not** used by the app. It's kept only for reference
> and should not be treated as a content source — see `src/data/sets.ts` for
> the actual app content schema instead.
