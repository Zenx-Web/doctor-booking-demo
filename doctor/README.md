# Doctor Booking Demo

## 🚀 Quick Start

### For Clients/Reviewers:
1. **Online Demo**: [Deploy to get URL - see options below]
2. **Local Demo**: Double-click `START_DEMO.bat` or open `index.html` in browser

### Test Accounts:
- **Patient**: 
  - Email: `patient@test.com`
  - Password: `test123`
- **Doctor**: 
  - Email: `doctor@test.com` 
  - Password: `test123`

## 📋 Demo Features

### ✅ Completed Features:
- [x] **Full-height hero banner** with doctor profile and photo carousel
- [x] **Slot-based booking system** with date/time selection
- [x] **Indian currency pricing** (₹ Rupees)
- [x] **Mock authentication** (login/register/dashboard)
- [x] **Multiple clinic locations** with Google Maps integration
- [x] **Patient dashboard** with appointment history
- [x] **Doctor admin panel** with appointment management
- [x] **Responsive design** for mobile and desktop
- [x] **Protected routes** requiring authentication
- [x] **Role-based access** (patient vs doctor views)

### 🛠 Technology Stack:
- **Frontend**: React 18 (CDN), Tailwind CSS
- **Architecture**: Hash-based routing, localStorage auth
- **Deployment**: Static files (works anywhere)

## 🎯 Demo Flow:

1. **Home Page**: Hero banner with doctor profile
2. **Register/Login**: Create account or use test credentials
3. **Book Appointment**: 
   - Select service (consultation, follow-up, telemedicine)
   - Pick date and time slot
   - Auto-fill patient details from profile
   - Mock payment process
4. **Dashboard**: View appointments and manage profile
5. **Admin Panel** (doctors): Manage appointments and view statistics
6. **Contact**: Multiple clinic locations with Google Maps

## 🌐 Deployment Options:

### Option 1: Netlify Drop (Easiest)
1. Zip this folder
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag & drop zip file
4. Get instant shareable URL

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Upload project folder
3. Get custom domain

### Option 3: GitHub Pages
1. Upload to GitHub repository
2. Enable Pages in settings
3. Professional URL

## 📱 Mobile Responsive:
- Works perfectly on phones, tablets, and desktops
- Touch-friendly interface
- Optimized for all screen sizes

---
*Demo ready for client presentation!* (Frontend-only)

This is a no-build React + Tailwind static prototype you can open directly in a browser to demo slot-wise appointment booking. It uses CDN React and in-browser Babel for speed. Later we can migrate to a proper Next.js project.

How to run
- Double-click `index.html` or open it with your browser.
- No Node.js required.

What’s included
- Slot-wise booking UI: pick a service, date, and an available time slot.
- Patient details form.
- Summary panel and a mock submit action.
- Tailwind styling via CDN.

Next steps (when ready)
- Migrate to Next.js (React) with Tailwind and TypeScript.
- Add backend APIs for availability, booking, payments, and notifications.
- Integrate Stripe for payments; Resend/SendGrid for email; Twilio for SMS.
- Implement admin dashboard for the doctor to manage availability and appointments.
