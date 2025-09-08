# Doctor Booking Website – GPT Build Plan

This plan outlines the architecture and step-by-step tasks for a doctor’s website featuring slot-wise booking, notifications to both patient and doctor, and payment integration. Tech preference: React with Tailwind (can switch to Bootstrap). Backend will be added later; current deliverable is a demo-ready frontend.

## 1) Goals and scope
- Patients can view services, pick a date, choose an exact time slot, and enter their details.
- Notifications: confirmation and reminders to both patient and doctor (email/SMS) — planned backend.
- Payments: deposit or full amount via Stripe — planned backend.
- Admin (doctor) dashboard — planned phase.

## 2) Tech stack
- Frontend: React (Next.js target). For demo, static React via CDN + Tailwind CDN (no build).
- Styling: Tailwind CSS (switchable to Bootstrap if preferred).
- Backend (next phase): Next.js API Routes, Supabase (Postgres + Auth), Stripe, Resend/SendGrid, Twilio, Vercel Cron.

## 3) Frontend modules (current repo)
- index.html: Entry, loads Tailwind, React, and scripts.
- app.jsx: Minimal hash router to switch between pages (Home, Booking).
- components/
  - Header.jsx, Footer.jsx, Hero.jsx, ServiceCard.jsx
  - Booking/
    - ServicePicker.jsx, DatePicker.jsx, SlotGrid.jsx, PatientForm.jsx, Summary.jsx
- pages/
  - Home.jsx (inlined via index for CDN; source included for structure)
  - BookingDemo.jsx (inlined via index for CDN; source included for structure)
- utils/
  - classNames.js, time.js (slot generation, formatting, addMinutes)

## 4) Data model (planned backend)
- users(id, role, name, email, phone)
- services(id, doctor_id, name, duration_min, price_cents, description, is_active)
- availability(id, doctor_id, config per weekday/exceptions)
- appointments(id, patient_id, doctor_id, service_id, start_at, end_at, status)
- payments(id, appointment_id, stripe_payment_intent_id, amount_cents, status)
- notifications(id, appointment_id, channel, send_at, status)

Constraints: unique (doctor_id, start_at); store UTC times; validate overlaps server-side.

## 5) Flows
- Booking: service → date → slot → patient details → payment → confirmation.
- Notifications: on confirmation + reminders (T-24h, T-2h) to patient and doctor.
- Admin: manage services, availability, appointments.

## 6) Milestones
1. Static frontend demo (DONE): slot-wise UI + pages + router.
2. Next.js migration: scaffold project, port components, pages, Tailwind config.
3. API + DB: Supabase schema, availability + appointment endpoints, slot locking.
4. Payments: Stripe Checkout, success/cancel pages, webhook to confirm.
5. Notifications: Resend/SendGrid (email), Twilio (SMS), scheduled reminders.
6. Admin dashboard: calendar view, CRUD services/availability, reschedule/cancel.
7. Tests + QA: unit for utilities/routes; e2e for booking flow; timezone edge cases.
8. Deploy: Vercel + Supabase; domain + SEO.

## 7) Implementation notes
- Timezones: keep UTC in DB; convert at UI.
- Slot generation: step size (e.g., 10 min) with service duration validation.
- Prevent double booking: server-side locks/unique constraints.
- Webhook security: verify signatures (Stripe/Twilio/Resend) and idempotency keys.

## 8) Migration checklist (when Node is available)
- Create Next.js app with Tailwind and TypeScript.
- Move components to `src/components` and pages to `src/app` routes.
- Implement `/api/services`, `/api/availability`, `/api/appointments`, `/api/checkout`, `/api/stripe/webhook`.
- Integrate auth (doctor dashboard) with Supabase.
- Add cron for reminders.

## 9) Demo instructions
- Open `index.html` in a browser.
- Navigate: Home (#/) → Book (#/booking). Try selecting service, date, and slot.

## 10) Future enhancements
- Calendar ICS in confirmation emails.
- Rescheduling + cancellation with policy windows.
- Multi-doctor/multi-location support.
- Accessibility and translations.
