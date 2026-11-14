# Content Review - Missing Information

This document lists information that was not provided in the source data and could not be integrated into the portfolio website.

## Missing URLs and Links

### Personal Information
- **CV Download URL**: The CV download link in `personal.json` is empty. Please provide the URL to your CV file (PDF) to enable the "Download CV" button.

### Social Media Links
The following social media URLs are empty in both `personal.json` and `contact.json`:
- **LinkedIn Profile URL**: Please provide your LinkedIn profile URL
- **Email Address**: Please provide your email address (for mailto: link)
- **WhatsApp Number**: Please provide your WhatsApp number (for wa.me link)
- **Instagram Profile URL**: Please provide your Instagram profile URL (if desired)

### Certificates
All certificate URLs in `certificates.json` are empty. If you have online verification links for your certificates, please provide them:
- CCNA – Cisco Certified Network Associate
- CEH – Certified Ethical Hacker
- Fortinet NSE
- Palo Alto Networks – Cybersecurity Certificate
- CCNP Security
- Fortinet NSE 4
- ISO/IEC 27001
- Cloud Security Fundamentals
- Linux System Administration
- Applied Cryptography

### Projects
All project links in `projects.json` are empty. If you have GitHub repositories, live demos, or documentation links for your projects, please provide them:
- Domain Security Scanner (Graduation Project)
- Encryption Tool
- Automated USB Security Scanner

### Training
All training links in `training.json` are empty. If you have profile links or verification URLs, please provide them:
- TryHackMe Profile URL
- CTF Competition Results/Links

### Enterprise Projects
All enterprise project links in `enterprise-projects.json` are empty. As these are confidential enterprise projects, this is expected and no action is needed.

## Images

### Profile Image
The profile image in `personal.json` is still set to the placeholder (`assets/images/profile/profile-placeholder.svg`). Please provide a professional profile photo to replace the placeholder.

### Section Images
All section images are currently using placeholder SVG files. While these placeholders work for the website structure, you may want to replace them with actual images for a more polished appearance:
- Academic section image
- Activities images
- Conference images
- Certificate images (for carousel)
- Project images
- Training images
- Experience company logos
- Enterprise project images

## Conference Details

The conferences section in `conferences.json` contains general descriptions rather than specific conference names and dates, as these details were not provided in the source data. If you have specific conference names, dates, and organizers you'd like to include, please provide them to replace the general descriptions.

## Notes

- All JSON files have been validated for syntax correctness and are valid.
- All content is provided in both English and Arabic as required.
- The website structure, design, and functionality remain unchanged.
- Placeholder images will display correctly but should be replaced with actual images for production use.
- Empty URLs will not break the website functionality, but the corresponding buttons/links will not work until URLs are provided.

## Next Steps

1. Provide the missing URLs listed above to enable all links and buttons.
2. Replace placeholder images with actual images for a professional appearance.
3. Review the integrated content and provide any corrections or additional information as needed.
4. Test the website in both languages and themes to ensure everything displays correctly.
