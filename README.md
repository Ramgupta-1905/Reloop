# ReLoop — Buy Smart. Sell Better.

A responsive landing page for ReLoop, a pre-loved marketplace. It includes a local-demo sign-in / account creation flow, selectable demonstration plans, FAQ interactions and a validated footer enquiry form.

## Run locally

Install dependencies with `npm install`, then start the app with `npm run dev`.

## Project layout

```text
src/
  assets/       Local images
  components/   Shared header and footer
  data/         Landing-page copy and plan data
  pages/        Landing and authentication pages
  sections/     Individual homepage sections
  styles/       Global and application styles
```

Authentication stores demo account data in this browser only. The footer enquiry form validates locally and does not send or persist messages. Plans are illustrative; there is no payment processing.
