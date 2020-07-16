import defaultSettings from "@/settings";

const title = defaultSettings.title || "BlueDcp";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
