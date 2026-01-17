# Google Ads Conversion Tracking Setup

## Overview

Your confirmation page is now set up at: **`https://ecolawnsdenver.com/thank-you`**

This page will automatically track conversions when users complete a form submission and land on this page.

## Setting Up Google Ads Conversion Tracking

### Step 1: Create a Conversion Action in Google Ads

1. **Go to Google Ads**: https://ads.google.com
2. **Navigate to**: Tools & Settings → Measurement → Conversions
3. **Click**: "+ New conversion action"
4. **Select**: "Website" as the conversion source
5. **Fill out the form**:
   - **Category**: "Submit lead form" or "Sign-up"
   - **Conversion name**: "Form Submission" or "Lead Form Submission"
   - **Value**: Choose "Use different values for each conversion" (or set a fixed value)
   - **Count**: "One" (each form submission counts as one conversion)
   - **Click-through window**: 30 days (default)
   - **View-through window**: 1 day (default)
   - **Attribution model**: "Last click" (recommended for lead gen)

6. **Click "Create and continue"**

### Step 2: Get Your Conversion ID and Label

After creating the conversion action, Google Ads will show you:
- **Conversion ID**: Looks like `AW-XXXXXXXXXX` (starts with AW-)
- **Conversion Label**: Looks like `AbCdEfGhIjKlMnOpQrSt` (random string)

**Save both of these** - you'll need them for the next step.

### Step 3: Add Conversion Tracking to Your Site

1. **Add to your `.env.local` file**:
   ```bash
   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX/AbCdEfGhIjKlMnOpQrSt
   ```
   (Replace with your actual Conversion ID and Label, separated by `/`)

2. **If deploying to Vercel**, also add it to your Vercel environment variables:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` with your Conversion ID/Label
   - Make sure it's set for "Production", "Preview", and "Development"

### Step 4: Install Google Ads Conversion Tracking Script

The conversion tracking script is already set up in your `app/thank-you/page.tsx` file. It will automatically fire when users land on the thank-you page.

**The script will:**
- Track conversions automatically
- Send conversion data to Google Ads
- Work with your existing Google Analytics setup

### Step 5: Test Your Conversion Tracking

1. **Submit a test form** on your website
2. **Land on the thank-you page**: `https://ecolawnsdenver.com/thank-you`
3. **In Google Ads**, go to Tools & Settings → Measurement → Conversions
4. **Click on your conversion action**
5. **Check "Recent conversions"** - you should see your test conversion within a few minutes

**Note**: It may take 3-24 hours for conversions to appear in reports, but they'll show up in "Recent conversions" much faster.

## How It Works

1. **User submits a form** → Form data is sent to your email API
2. **On success** → User is redirected to `/thank-you?type=lawn` (or `snow`, `spring`, `fall`)
3. **Thank-you page loads** → Google Ads conversion tracking fires automatically
4. **Conversion is recorded** → Shows up in Google Ads within 24 hours

## Conversion URLs for Google Ads

When setting up your Google Ads campaigns, use these URLs as conversion pages:

- **Lawn Care**: `https://ecolawnsdenver.com/thank-you?type=lawn`
- **Snow Removal**: `https://ecolawnsdenver.com/thank-you?type=snow`
- **Spring Cleanup**: `https://ecoylawnsdenver.com/thank-you?type=spring`
- **Fall Cleanup**: `https://ecolawnsdenver.com/thank-you?type=fall`
- **All Services** (recommended): `https://ecolawnsdenver.com/thank-you`

**Recommendation**: Use the base URL (`/thank-you`) without the type parameter to track all conversions in one place, or create separate conversion actions for each service type if you want more granular tracking.

## Troubleshooting

### Conversions Not Showing Up

1. **Check environment variable**: Make sure `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` is set correctly
2. **Check the format**: Should be `AW-XXXXXXXXXX/AbCdEfGhIjKlMnOpQrSt` (ID/Label separated by `/`)
3. **Test in incognito**: Submit a form in an incognito window to avoid ad blockers
4. **Check browser console**: Look for any JavaScript errors
5. **Wait 24 hours**: Conversions can take up to 24 hours to appear in reports

### Testing Conversion Tracking

You can test if the conversion tracking is working by:

1. **Open browser DevTools** (F12)
2. **Go to Network tab**
3. **Submit a form** and land on thank-you page
4. **Look for requests to**: `googleads.g.doubleclick.net` or `www.google-analytics.com`
5. **If you see these requests**, conversion tracking is working!

### Common Issues

**Issue**: Conversion ID format is wrong
- **Solution**: Make sure it's `AW-XXXXXXXXXX/AbCdEfGhIjKlMnOpQrSt` (with `/` separator)

**Issue**: Conversions not firing
- **Solution**: Check that the thank-you page is loading correctly and the script is present

**Issue**: Multiple conversions for one form submission
- **Solution**: This shouldn't happen, but if it does, check that users aren't refreshing the thank-you page

## Advanced: Multiple Conversion Actions

If you want to track different conversion types separately:

1. **Create multiple conversion actions** in Google Ads (one for each service type)
2. **Update `app/thank-you/page.tsx`** to use different conversion IDs based on the `type` parameter
3. **Set different values** for each conversion type if desired

## Summary

✅ **Confirmation page created**: `/thank-you`  
✅ **Google Ads conversion tracking ready**: Just add your Conversion ID  
✅ **All forms redirect**: Forms now redirect to thank-you page  
✅ **Automatic tracking**: Conversions fire automatically on page load  

**Next Steps**:
1. Create conversion action in Google Ads
2. Get your Conversion ID and Label
3. Add to `.env.local` as `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`
4. Deploy and test!
