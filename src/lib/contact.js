import { contact } from "../content/site.js";

export const telHref = `tel:+${contact.phoneE164}`;

export const whatsappHref = (message = contact.whatsappGreeting) =>
  `https://wa.me/${contact.phoneE164}?text=${encodeURIComponent(message)}`;

/** Whether the lab is open right now, evaluated in India Standard Time. */
export function isLabOpen(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  const { days, opens, closes } = contact.hours;
  return days.includes(dayIndex) && hour >= opens && hour < closes;
}
