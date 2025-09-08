# 🚀 Deployment Guide

## Quick Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub Repository:**
   - Go to [github.com](https://github.com) and create account
   - Click "New repository"
   - Name: `doctor-booking-demo`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/doctor-booking-demo.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
   - Save

4. **Your demo will be live at:**
   `https://YOUR_USERNAME.github.io/doctor-booking-demo`

### Option 2: Netlify (Instant)

1. **Zip Method:**
   - Right-click project folder → "Send to" → "Compressed folder"
   - Go to [netlify.com/drop](https://netlify.com/drop)
   - Drag & drop zip file
   - Get instant URL

2. **Git Method:**
   - Push to GitHub first (see above)
   - Go to [netlify.com](https://netlify.com)
   - "New site from Git"
   - Connect GitHub repository
   - Deploy automatically

### Option 3: Vercel

1. **Push to GitHub first**
2. **Go to [vercel.com](https://vercel.com)**
3. **Import from GitHub**
4. **Deploy with one click**

## 📋 Pre-Deployment Checklist

- [x] Git repository initialized
- [x] All files committed
- [x] .gitignore created
- [x] README.md updated
- [x] Demo launcher created
- [x] Test accounts documented

## 🎯 What's Included in Demo

- ✅ Complete booking system
- ✅ Authentication (patient/doctor)
- ✅ Multiple clinic locations
- ✅ Google Maps integration
- ✅ Indian currency pricing
- ✅ Mobile responsive design
- ✅ Admin dashboard

## 📱 Test Instructions

**Patient Flow:**
1. Register/Login as patient
2. Book appointment
3. View dashboard

**Doctor Flow:**
1. Login as doctor
2. View admin dashboard
3. Manage appointments

**Test Credentials:**
- Patient: `patient@test.com` / `test123`
- Doctor: `doctor@test.com` / `test123`

---
*Ready to deploy! Choose your preferred option above.*
