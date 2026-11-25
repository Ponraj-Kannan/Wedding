/**
 * Central configuration file for K. Vignesh & M. Kumutha's Wedding Invitation.
 * Edit all Tamil & English text, dates, panchangam day numbers, venues,
 * and optional sections from this single file.
 */

export interface WeddingEvent {
  id: string;
  titleTa: string;
  titleEn: string;
  dayDateTa: string;
  dayDateEn: string;
  tamilMonth: string;
  /** Leave empty if not yet confirmed from panchangam (e.g. "26" or "26-ஆம் தேதி") */
  tamilDay: string;
  timeTa: string;
  timeEn: string;
  venueTa: string;
  venueEn: string;
  /** ISO 8601 timestamp in IST (+05:30) */
  startIso: string;
  /** ISO 8601 end timestamp in IST (+05:30) used for calendar (.ics) export */
  icsEndIso: string;
  icsLocation: string;
  icsDescription: string;
}

export interface VenueInfo {
  id: string;
  headingTa: string;
  headingEn: string;
  nameAddressTa: string;
  nameAddressEn: string;
  mapUrl: string;
  buttonTa: string;
  buttonEn: string;
}

export interface ParentProfile {
  roleTa: string;
  roleEn: string;
  namesTa: string;
  namesEn: string;
  photoUrl?: string;
}

export interface GalleryPhoto {
  src: string;
  altTa: string;
  altEn: string;
}

export interface StoryVideo {
  src: string;
  poster?: string;
  titleTa: string;
  titleEn: string;
}

export const weddingConfig = {
  meta: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title:
      "கே. விக்னேஷ் & எம். குமுதா - திருமண அழைப்பிதழ் | K. Vignesh & M. Kumutha Wedding Invitation",
    description:
      "திருமண அழைப்பிதழ் — கே. விக்னேஷ் & எம். குமுதா | 13 December 2026 · T. Kallupatti, Madurai. You are warmly invited to celebrate with us.",
  },

  couple: {
    groomTa: "கே. விக்னேஷ்",
    brideTa: "எம். குமுதா",
    groomEn: "K. Vignesh",
    brideEn: "M. Kumutha",
    combinedTa: "கே. விக்னேஷ் & எம். குமுதா",
    combinedEn: "K. Vignesh & M. Kumutha",
  },

  hero: {
    pillaiyarMark: "உ",
    invocationTa: "பிள்ளையார் துணை | முருகன் துணை",
    titleTa: "திருமண அழைப்பிதழ்",
    titleEn: "Wedding Invitation",
    dateLine: "13 December 2026 · ஞாயிறு",
    tamilMonth: "கார்த்திகை மாதம்",
    /** Optional panchangam day number for wedding day (e.g., "27"). Leave "" if unknown. */
    tamilDay: "",
    venueLine: "T. Kallupatti, Madurai",
    personalInvitePrefixTa: "அன்புடன் அழைக்கிறோம் -",
    personalInvitePrefixEn: "Warmly inviting you -",
  },

  invitation: {
    leadTa: "அன்புடன் அழைக்கும்…",
    blessingTa: "வாழ்க வளமுடன்",
    bodyEn:
      "Together with the blessings of our families, we joyfully invite you to celebrate the wedding of K. Vignesh & M. Kumutha.",
  },

  eventsSection: {
    headingTa: "திருமண நிகழ்வுகள்",
    headingEn: "Wedding Events",
    timezoneNote: "All times in IST (UTC+5:30)",
  },

  events: [
    {
      id: "nichayathartham",
      titleTa: "நிச்சயதார்த்தம்",
      titleEn: "Nichayathartham (Betrothal)",
      dayDateTa: "சனிக்கிழமை, 12 டிசம்பர் 2026",
      dayDateEn: "Saturday, 12 December 2026",
      tamilMonth: "கார்த்திகை மாதம்",
      /** Fill in from panchangam when ready, e.g. "26" */
      tamilDay: "",
      timeTa: "மாலை 5:35 மணி முதல்",
      timeEn: "From 5:35 PM IST",
      venueTa: "கம்மவார் திருமண மண்டபம் (அக்ரகாரம்), டி. கல்லுப்பட்டி",
      venueEn: "Kammavar Wedding Hall (Agraharam), T. Kallupatti",
      startIso: "2026-12-12T17:35:00+05:30",
      icsEndIso: "2026-12-12T19:35:00+05:30",
      icsLocation: "Kammavar Wedding Hall (Agraharam), T. Kallupatti, Madurai",
      icsDescription:
        "Nichayathartham (Betrothal) of K. Vignesh & M. Kumutha. Time: From 5:35 PM IST.",
    },
    {
      id: "muhurtham",
      titleTa: "முகூர்த்தம்",
      titleEn: "Muhurtham",
      dayDateTa: "ஞாயிற்றுக்கிழமை, 13 டிசம்பர் 2026",
      dayDateEn: "Sunday, 13 December 2026",
      tamilMonth: "கார்த்திகை மாதம்",
      /** Fill in from panchangam when ready, e.g. "27" */
      tamilDay: "",
      timeTa: "காலை 6:05 மணி முதல் 7:25 மணி வரை",
      timeEn: "From 6:05 AM to 7:25 AM IST",
      venueTa:
        "அருள்மிகு ஸ்ரீ சித்திவிநாயகர் சிங்காரவேலன் திருக்கோயில், டி. கல்லுப்பட்டி",
      venueEn: "Arulmigu Sri Sithivinayagar Singaravelan Temple, T. Kallupatti",
      startIso: "2026-12-13T06:05:00+05:30",
      icsEndIso: "2026-12-13T07:25:00+05:30",
      icsLocation:
        "Arulmigu Sri Sithivinayagar Singaravelan Temple, T. Kallupatti, Madurai",
      icsDescription:
        "Muhurtham ceremony of K. Vignesh & M. Kumutha. Time: 6:05 AM to 7:25 AM IST.",
    },
  ] satisfies WeddingEvent[],

  countdown: {
    headingTa: "சுப முகூர்த்தத்திற்கு இன்னும்",
    headingEn: "Counting down to Muhurtham",
    targetIso: "2026-12-13T06:05:00+05:30",
    labels: {
      days: "நாட்கள்",
      hours: "மணி",
      minutes: "நிமிடம்",
      seconds: "விநாடி",
    },
    completedTa: "வாழ்த்துகள்!",
    completedEn: "Congratulations!",
  },

  venuesSection: {
    headingTa: "நிகழ்விடங்கள்",
    headingEn: "Venues",
  },

  venues: [
    {
      id: "ceremony",
      headingTa: "திருமணம் நடைபெறும் இடம்",
      headingEn: "Ceremony",
      nameAddressTa:
        "அருள்மிகு ஸ்ரீ சித்திவிநாயகர் சிங்காரவேலன் திருக்கோயில், டி. கல்லுப்பட்டி",
      nameAddressEn:
        "Arulmigu Sri Sithivinayagar Singaravelan Temple, T. Kallupatti",
      mapUrl: "https://maps.app.goo.gl/jxSFd4WnNgZaygHQ8",
      buttonTa: "வழி காட்டி",
      buttonEn: "Get Directions",
    },
    {
      id: "reception-hall",
      headingTa: "வரவேற்பு மற்றும் பிற நிகழ்வுகள்",
      headingEn: "Reception & other functions",
      nameAddressTa:
        "கம்மவார் திருமண மண்டபம் (அக்ரகாரம்), டி. கல்லுப்பட்டி, பேரையூர் வட்டம், மதுரை மாவட்டம்",
      nameAddressEn:
        "Kammavar Wedding Hall (Agraharam), T. Kallupatti, Peraiyur Taluk, Madurai District",
      mapUrl: "https://maps.app.goo.gl/3T9LcArWjh1TY1AC7",
      buttonTa: "வழி காட்டி",
      buttonEn: "Get Directions",
    },
  ] satisfies VenueInfo[],

  share: {
    headingTa: "அழைப்பிதழைப் பகிருங்கள்",
    headingEn: "Share & Save the Date",
    whatsappButtonTa: "வாட்ஸ்அப்பில் பகிர்",
    whatsappButtonEn: "Share on WhatsApp",
    calendarButtonTa: "நாள்காட்டியில் சேர்",
    calendarButtonEn: "Add to Calendar",
    copyButtonTa: "இணைப்பை நகலெடு",
    copyButtonEn: "Copy Link",
    copiedTa: "இணைப்பு நகலெடுக்கப்பட்டது!",
    copiedEn: "Link copied!",
    whatsappShareIntro:
      "உ\nபிள்ளையார் துணை | முருகன் துணை\n\nதிருமண அழைப்பிதழ்\nகே. விக்னேஷ் & எம். குமுதா\n\nநிச்சயதார்த்தம்: சனிக்கிழமை, 12 டிசம்பர் 2026 (மாலை 5:35 மணி முதல்)\nமுகூர்த்தம்: ஞாயிற்றுக்கிழமை, 13 டிசம்பர் 2026 (காலை 6:05 - 7:25 மணி)\nஇடம்: டி. கல்லுப்பட்டி, மதுரை\n\nYou are warmly invited to the wedding of K. Vignesh & M. Kumutha!\nInvitation link:",
  },

  /**
   * Optional sections — hidden by default until real data is added here.
   * Do not add placeholder entries if photos/videos are not ready.
   */
  optional: {
    aboutCouple: {
      headingTa: "மணமக்கள் குடும்பத்தினர்",
      headingEn: "Our Families",
      /** Add entries when ready, e.g.:
       * {
       *   roleTa: "மணமகன் பெற்றோர்",
       *   roleEn: "Groom's Parents",
       *   namesTa: "...",
       *   namesEn: "...",
       *   photoUrl: "/images/groom-parents.jpg"
       * }
       */
      profiles: [] as ParentProfile[],
    },
    gallery: {
      headingTa: "இனிய தருணங்கள்",
      headingEn: "Captured Moments",
      /** Add photos when ready: { src: "/images/photo1.jpg", altTa: "...", altEn: "..." } */
      photos: [] as GalleryPhoto[],
    },
    storyVideo: {
      headingTa: "எங்கள் கதை",
      headingEn: "Our Story",
      /** Set to a StoryVideo object when ready, e.g. { src: "/videos/story.mp4", poster: "/images/poster.jpg", titleTa: "...", titleEn: "..." } */
      video: null as StoryVideo | null,
    },
  },

  desktopGate: {
    messageTa: "இந்த அழைப்பிதழை உங்கள் மொபைலில் திறக்கவும்",
    messageEn: "Please open this invitation on your mobile phone",
    scanHintTa: "உங்கள் கைபேசி கேமராவால் QR குறியீட்டை ஸ்கேன் செய்யவும்",
    scanHintEn: "Scan this QR code with your phone camera",
  },

  footer: {
    welcomeTa: "வருக வருக",
    welcomeEn: "Welcome, welcome",
    credit: "Made with love",
  },
} as const;
