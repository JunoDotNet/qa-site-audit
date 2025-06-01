# 🧪 Manual Test Cases – Broken Site Audit

## ✅ Test Case 1 – Check Header Contrast
**Steps:**  
1. Open the website  
2. Observe the color of the main header (`<h1>`)

**Expected:**  
Header text should have sufficient contrast for readability (meets WCAG AA)

**Actual:**  
Header is light gray (`#999999`) on white background – fails contrast requirements

**Status:** ❌ Fail

---

## ✅ Test Case 2 – Validate Navigation Links
**Steps:**  
1. Click all links in the `<nav>` section

**Expected:**  
Each link should lead to a valid page with no errors

**Actual:**  
"Broken Link" leads to `404page.html`, which does not exist – returns 404 error

**Status:** ❌ Fail

---

## ✅ Test Case 3 – Check for Missing Image
**Steps:**  
1. Inspect the image on the page

**Expected:**  
Image should load correctly and include descriptive `alt` text

**Actual:**  
Image source `missing-image.jpg` is broken and lacks `alt` attribute

**Status:** ❌ Fail

---

## ✅ Test Case 4 – Verify Form Labels
**Steps:**  
1. Review the `<form>` inputs  
2. Check for `<label>` elements associated with each field

**Expected:**  
Each input should have a visible and accessible `<label>`

**Actual:**  
Inputs rely only on placeholders, no `<label>` elements present

**Status:** ❌ Fail

---

## ✅ Test Case 5 – Test Form Validation
**Steps:**  
1. Leave fields empty and press "Submit"

**Expected:**  
Form should prevent submission and show validation messages

**Actual:**  
Form submits with no validation, allowing empty or invalid input

**Status:** ❌ Fail

---

## ✅ Test Case 6 – Test "Click Me" Button Functionality
**Steps:**  
1. Click the "Click Me" button

**Expected:**  
Button should trigger some action or visual feedback

**Actual:**  
No event handler is assigned – button does nothing

**Status:** ❌ Fail
