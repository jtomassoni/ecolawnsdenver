# Setting Up Google Analytics for Multiple Sites

## Quick Steps to Add EcoLawns Denver to Your Existing Account

### Step 1: Create a New Property in Google Analytics

1. **Go to Google Analytics**: https://analytics.google.com
2. **Click "Admin"** (gear icon in bottom left)
3. **In the "Property" column** (middle column), click **"+ Create Property"**
4. **Fill out the form**:
   - Property name: `EcoLawns Denver`
   - Reporting time zone: `(GMT-07:00) Mountain Time`
   - Currency: `United States Dollar`
   - Click **"Next"**
5. **Select your business information**:
   - Industry category: `Home & Garden` or `Local Services`
   - Business size: Select appropriate size
   - How you intend to use Google Analytics: Select relevant options
   - Click **"Create"**
6. **Set up a data stream**:
   - Choose **"Web"** platform
   - Website URL: `https://ecolawnsdenver.com`
   - Stream name: `EcoLawns Denver Website`
   - Click **"Create stream"**

### Step 2: Get Your Measurement ID

After creating the stream, you'll see a page with:
- **Measurement ID**: This will look like `G-XXXXXXXXXX` (starts with G-)
- **Copy this ID** - you'll need it for your `.env` file

### Step 3: Add Measurement ID to Your Project

1. **Create or edit your `.env.local` file** in the root of your project:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace `G-XXXXXXXXXX` with your actual Measurement ID)

2. **If deploying to Vercel**, also add it to your Vercel environment variables:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with your Measurement ID
   - Make sure it's set for "Production", "Preview", and "Development"

### Step 4: Verify It's Working

1. **Deploy your site** (or run locally)
2. **Visit your website** and submit a test form
3. **Go back to Google Analytics**
4. **Click "Reports"** → **"Realtime"**
5. **You should see yourself as an active user** within a few seconds

## Understanding Google Analytics Structure

```
Account (Monaghans)
├── Property 1: Monaghans Bar & Grill
│   └── Data Stream: Monaghans Website
│       └── Measurement ID: G-XXXXXXXXXX
│
└── Property 2: EcoLawns Denver (NEW)
    └── Data Stream: EcoLawns Denver Website
        └── Measurement ID: G-YYYYYYYYYY (NEW)
```

**Each property has its own Measurement ID** - that's what separates the data.

## Setting Up Conversion Events (Key Events)

To track form submissions as conversions:

1. **In Google Analytics**, go to **Admin** → **Events** (under Property column)
2. **Click "Create event"**
3. **Set up the event**:
   - Custom event name: `form_submission`
   - Matching conditions: 
     - Parameter: `event_category`
     - Operator: `equals`
     - Value: `conversion`
   - Click **"Create"**
4. **Mark as Key Event**:
   - Go to **Admin** → **Events**
   - Find `form_submission` in the list
   - Toggle **"Mark as key event"** to ON

Alternatively, the code I added already sends events with `event_category: 'conversion'`, so you can mark any conversion events as key events in the Events section.

## Testing Your Setup

1. **Open your website** in an incognito/private window
2. **Submit a test form** (or click buttons)
3. **In Google Analytics**, go to **Reports** → **Realtime**
4. **You should see**:
   - Active users: 1
   - Events being tracked
   - Pages being viewed

## Troubleshooting

**If you don't see data:**
- Make sure `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly in `.env.local`
- Restart your dev server after adding the env variable
- Check browser console for errors
- Make sure ad blockers aren't blocking Google Analytics
- Wait 24-48 hours for data to appear in standard reports (Realtime works immediately)

**If you see data but no conversions:**
- Check that form submissions are triggering the `trackConversion` function
- Verify events are showing up in Realtime → Events
- Make sure you've marked the event as a "Key Event" in Admin → Events

## Multiple Sites Best Practices

- **Use separate properties** for each website (like you're doing)
- **Use consistent naming**: `Site Name - Website` for stream names
- **Create a naming convention**: `G-XXXXXXXXXX` for each site
- **Document your Measurement IDs** somewhere safe (like this file)

## Your Current Setup

- **Account**: Monaghans (or your account name)
- **Existing Property**: Monaghans Bar & Grill
- **New Property**: EcoLawns Denver (to be created)
- **Measurement ID**: Will be `G-XXXXXXXXXX` (get this after creating the property)

## Next Steps After Setup

1. ✅ Create the new property in Google Analytics
2. ✅ Get your Measurement ID
3. ✅ Add it to `.env.local` file
4. ✅ Deploy and test
5. ✅ Set up conversion events (Key Events)
6. ✅ Monitor your analytics after 24-48 hours

Once set up, you'll be able to see:
- How many people visit your site
- Where they come from
- What pages they view
- Form submission conversions
- Button click tracking
- And much more!
