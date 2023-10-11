const baseConfig = {
  weddingDay: "Sunday",
  weddingTime: "13.00 - 16.00",
  weddingDate: "19 Nov, 2023",
  showBuiltWithInfo: false,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2023-11-19T13:00:00+07:00",
    timeEndISO: "2023-11-19T16:00:00+07:00"
  },
  coupleInfo: {
    brideName: "Sania",
    groomName: "Febri",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "Cakra Residence Hotel",
    addressLine1: "Jalan Kawi No.1 Turen Kecamatan Turen",
    addressLine2: "Malang Jawa Timur 65175 Indonesia,",
    city: "Malang",
    country: "Indonesia",
    mapUrl: "https://maps.app.goo.gl/SdfQ3s1FhxpUpH1M9"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/images/fs-ring-logo.png",
    footerLogoType: "png"
    // footerLogo: "/assets/video/fs-ring-logo-ticker.mp4",
    // footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/fs-ring-logo.png",
    siteName: "febri-sania.com",
    publishedTime: "2023-10-01"
  }
};

const lang = {
  id: {
    weddingDay: "Sabtu",
    weddingDate: "22 Februari 2020",
    venue: {
      ...baseConfig.venue,
      name: "Cakra Residence Hotel",
      addressLine2: "Surabaya, Jawa Timur, 60241,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
