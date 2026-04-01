---
name: openclaw-seedance-prompt-library
description: Find, adapt, remix, and rewrite Seedance 2.0 video prompts from a large curated library. Use when the task is to create Seedance prompts, browse Seedance prompt ideas by style, turn a concept into a stronger video-generation prompt, localize prompts between Chinese and English, or build a reusable Seedance prompt workflow. Seedance提示词库/改写/风格检索/中英双语适配
---

# OpenClaw Seedance Prompt Library

Use this skill to turn a large community prompt collection into a practical working system for prompt selection and prompt rewriting.

This skill is adapted from the public repository:
- `YouMind-OpenLab/awesome-seedance-2-prompts`
- License: `CC BY 4.0`

Always preserve attribution when reusing or redistributing prompt material from the source collection.

## Core use cases

- Find Seedance prompt examples by style, subject, motion, or camera language
- Rewrite a weak prompt into a stronger cinematic prompt
- Convert Chinese prompts to English and English prompts to Chinese
- Turn a user idea into a Seedance-ready prompt pack
- Extract reusable prompt patterns from the library instead of copying blindly

## Working model

Do not dump a giant wall of prompts.

Instead:
1. classify the user's goal
2. search for 3-8 relevant examples
3. identify what actually makes them work
4. synthesize a better prompt for the user's use case
5. return a small, usable set of outputs

## Output modes

Choose the output format that best fits the request:

### 1) Prompt shortlist
Use when the user wants inspiration.

Return:
- 3-8 relevant prompt examples
- one-line note on why each is relevant
- optional source title / ID when available

### 2) Prompt rewrite
Use when the user already has a rough prompt.

Return:
- original prompt
- improved prompt
- what changed: subject / motion / camera / lighting / duration / aspect ratio / pacing

### 3) Prompt pack
Use when the user wants multiple options.

Return 3 variants:
- **safe** — closest to user's request
- **stylized** — stronger cinematic/style choices
- **experimental** — more ambitious motion or scene design

### 4) Bilingual prompt delivery
Use when the user needs Chinese + English.

Return:
- Chinese version
- English version
- short note on any non-literal adaptation

## Prompt construction rules

When rewriting or creating prompts, prefer this structure:

1. **Subject** — who / what is on screen
2. **Scene** — environment and setting
3. **Action** — what changes over time
4. **Camera** — shot type, movement, framing
5. **Style** — cinematic, anime, realistic, surreal, etc.
6. **Lighting / mood** — color, atmosphere, time of day
7. **Output constraints** — duration, resolution, aspect ratio if useful

If the source example is strong, extract the structure, not just the wording.

## Quality rules

- Prefer specificity over adjectives spam
- Prefer concrete motion over vague “dynamic” wording
- Prefer camera instructions that imply visual change
- Avoid contradictory style directions
- Keep prompt length proportional to complexity
- If a user asks for a simple result, do not over-engineer it

## Attribution and safety

- The upstream collection is community-curated and licensed under `CC BY 4.0`
- Keep attribution when quoting or redistributing prompt material
- Do not claim community prompts are original if they are adapted from upstream
- If copyright or character/IP risk is high, flag it and offer an original alternative

## References

Read these files as needed:

- `references/usage-patterns.md` — how to search, adapt, and package prompts
- `references/source-attribution.md` — source repo, license, and reuse rules
- `README.md` / `README_zh.md` — upstream prompt collection and examples

## Optional helper scripts

- `scripts/search-seedance-readme.mjs` — keyword search across upstream README prompt entries
