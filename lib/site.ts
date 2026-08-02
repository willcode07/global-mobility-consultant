export const siteConfig = {
  name: 'Nexo Mobility',
  tagline: 'Consulting · Technology · Global Connections',
  locations: 'Miami · Barcelona',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexomobility.com',
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || '',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
  hubspotPortalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '',
  hubspotFormId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || '',
  expansionGuideUrl: process.env.NEXT_PUBLIC_EXPANSION_GUIDE_URL || '',
};

export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path.startsWith('/')) return `${base}/${path}`;
  return `${base}${path}`;
}
