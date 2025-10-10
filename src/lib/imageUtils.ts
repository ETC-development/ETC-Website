/**
 * Converts Google Drive sharing links to direct image URLs
 * This is the same utility function used in the admin dashboard
 */
export const convertGoogleDriveUrl = (url: string): string => {
  if (!url) return url;
  
  const driveRegex = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(driveRegex);
  
  if (match) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  return url;
};