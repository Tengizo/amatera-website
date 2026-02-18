# Alias Account Deletion Page Clarity Improvements

## Problem

The Alias account deletion page (`/alias/account-deletion/`) has two issues:
1. No link to it from the Alias main page navigation
2. The page itself doesn't clearly indicate it's for the Alias app — heading just says "Delete Account"

## Design

### Navigation changes (`/alias/index.html`)

Add "Account Deletion" link in two places:

- **Header nav:** Features | How to Play | Support | Account Deletion | Amatera
- **Footer:** Add alongside existing Privacy Policy and Support links

### Account deletion page changes (`/alias/account-deletion/index.html`)

**Heading area:**
- Add Alias app icon (`/alias/assets/app_icon.png`) at ~48px, displayed inline with heading
- Change heading from "Delete Account" to "Delete Your Alias Account"
- Keep existing subtitle

**Warning box:**
- Change "This action is permanent" to "Deleting your Alias account is permanent"
- Change "Your player profile and statistics" to "Your Alias player profile and statistics"

**Form:**
- Update hidden `_subject` field to "Alias Account Deletion Request"

### What stays the same

- All form fields, styling, colors, layout
- Success state and checkbox logic
- No changes to other Alias pages (support, privacy policy)

## Approach

Minimal, focused changes (Approach A). The current page design is clean and functional — it just needs clearer Alias branding and a navigation link.
