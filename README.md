# Gracie Competitions

This is the frontend application for managing Gracie Raleigh's competitions, specifically Brazilian Jiu Jitsu competitions. In the future, the gym will be able to use this application for running it's competitions via the app or even have the option to export generate brackets in excel using the competitors list.

## Features

The application will have role based access control (RBAC) to allow for the following personas to achieve their goals:

### Admin

Can do everything, including manage the managers.

### Manager

Managers can do the following:

- Create competitions
- Invite competitors
- Invite volunteers
- Allow competitors to register
- Create or randomize brackets
- Export competition information into excel sheets

### Volunteer

Volunteers are made to help assist managers and refrees and can do the following:

- Manage brackets assigned to them in a competition
- Access to a clock to track matches and save outcomes
- Update matches in a bracket to assign points and save match results (points/decision/DQ)

### Athlete

Athletes can do the following:

- Create their fighter profile
- View their stats
- Sign up for competitions
  - Can also leave competitions given that they do so before the competition deadline.

## About the App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
