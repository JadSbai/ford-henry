export default function languageMap(code: string){
  switch (code) {
    case "ES":
      return "es_ES";
    case "GB":
      return "en_GB";
    case "FR":
      return "fr_FR";
    case "IT":
      return "it_IT";
    case "DE":
      return "de_DE";
    default: 
      return "en_GB";
  }
};
