/**
 * Photographs of the actual places.
 *
 * Every file here is a real photograph of the specific landmark it is attached
 * to, sourced from Wikimedia Commons under a Creative Commons licence and served
 * from `public/places/` rather than hotlinked — the app's whole premise is
 * working on a weak hill connection, and a cover that needs a round trip to a
 * CDN is the first thing to fail there.
 *
 * Each entry was checked by eye against the place it labels, not matched on
 * filename alone. Two candidates were rejected that way: a close-up of biscuit
 * packets left as offerings (correctly filed under Tsuglagkhang, useless as a
 * cover) and a thangka workshop interior full of identifiable faces.
 *
 * ATTRIBUTION IS A LICENCE CONDITION, not a courtesy. CC BY and CC BY-SA both
 * require credit, the licence, and a link to the source. `PhotoCredit` renders
 * that on the place screen; do not add a photo here without filling in all four
 * fields, and do not drop the credit line from the UI.
 *
 * Places absent from this map fall back to the generated illustration in
 * `PlaceArt` — either no freely-licensed photograph of that specific spot was
 * found, or the venue is composite rather than a real named landmark.
 */

export interface PlacePhoto {
  /** Filename under `public/places/`. */
  file: string;
  /** Photographer, exactly as credited on Commons. */
  author: string;
  license: string;
  /** Commons file page — the licence's required link back. */
  source: string;
}

const COMMONS = 'https://commons.wikimedia.org/wiki/File:';

export const PLACE_PHOTOS: Record<string, PlacePhoto> = {
  'PL-HADIMBA': {
    file: 'PL-HADIMBA.jpg',
    author: 'Itsarti',
    license: 'CC BY-SA 4.0',
    source: `${COMMONS}Hadimba_Devi_Temple_Manali.jpg`,
  },
  'PL-RIDGE': {
    file: 'PL-RIDGE.jpg',
    author: 'ShashankSharma2511',
    license: 'CC BY 3.0',
    source: `${COMMONS}Ridge,_Shimla.JPG`,
  },
  'PL-CHRIST-CH': {
    file: 'PL-CHRIST-CH.jpg',
    author: 'ShashankSharma2511',
    license: 'CC BY 3.0',
    source: `${COMMONS}Christ_Church,_Shimla.jpg`,
  },
  'PL-JAKHOO': {
    file: 'PL-JAKHOO.jpg',
    author: '502hsuya',
    license: 'CC BY-SA 4.0',
    source: `${COMMONS}Jakhoo_Mandir_drone_view.jpg`,
  },
  'PL-VICEREGAL': {
    file: 'PL-VICEREGAL.jpg',
    author: 'ptwo',
    license: 'CC BY 2.0',
    source: `${COMMONS}Rashtrapati_Niwas,_Shimla.jpg`,
  },
  'PL-MALL-SML': {
    file: 'PL-MALL-SML.jpg',
    author: 'ArmouredCyborg',
    license: 'CC BY-SA 4.0',
    source: `${COMMONS}Mall_Road_Shimla_Nov_21.jpg`,
  },
  'PL-KUFRI': {
    file: 'PL-KUFRI.jpg',
    author: 'Shahnoor Habib Munmun',
    license: 'CC BY 3.0',
    source: `${COMMONS}Kufri_Simla_Himachal_India_(6).jpg`,
  },
  'PL-CHAIL-PALACE': {
    file: 'PL-CHAIL-PALACE.jpg',
    author: 'Shrey.ashi',
    license: 'CC BY 4.0',
    source: `${COMMONS}Chail_Palace.jpg`,
  },
  'PL-HATU': {
    file: 'PL-HATU.jpg',
    author: 'Kondephy',
    license: 'CC BY-SA 3.0',
    source: `${COMMONS}Narkanda_hatu_peak_himachal_pradesh.jpg`,
  },
  'PL-SOLANG': {
    file: 'PL-SOLANG.jpg',
    author: 'Vikas Choudhary',
    license: 'CC BY-SA 4.0',
    source: `${COMMONS}Solang_Valley,_Manali.jpg`,
  },
  'PL-NAGGAR': {
    file: 'PL-NAGGAR.jpg',
    author: 'Schwiki',
    license: 'CC BY-SA 4.0',
    source: `${COMMONS}Naggar_Castle_Kullu_WLM22-4062.jpg`,
  },
  'PL-TSUGLAG': {
    file: 'PL-TSUGLAG.jpg',
    author: 'Geoff Stearns',
    license: 'CC BY 2.0',
    source: `${COMMONS}McLeod_Ganj_from_the_Dalai_Lama_Temple_(6466149411).jpg`,
  },
  'PL-BHAGSU': {
    file: 'PL-BHAGSU.jpg',
    author: 'Jpatokal',
    license: 'CC BY-SA 4.0',
    source: `${COMMONS}Bhagsunag_Waterfall_Pan.JPG`,
  },
  'PL-TRIUND': {
    file: 'PL-TRIUND.jpg',
    author: 'Kiran Jonnalagadda',
    license: 'CC BY-SA 2.0',
    source: `${COMMONS}Triund_trek_route_(8679789585).jpg`,
  },
  'PL-HPCA': {
    file: 'PL-HPCA.jpg',
    author: 'Pranav Bhasin',
    license: 'CC BY 2.0',
    source: `${COMMONS}HPCA,_Dharamshala_Cricket_Stadium.jpg`,
  },
  'PL-NORBULINGKA': {
    file: 'PL-NORBULINGKA.jpg',
    author: 'Dainis Matisons',
    license: 'CC BY 4.0',
    source: `${COMMONS}Dainis_Matisons,_Water_Garden_of_Norbulingka_Institute,_Dharamsala.jpg`,
  },
};

export function photoFor(placeId: string): PlacePhoto | undefined {
  return PLACE_PHOTOS[placeId];
}

export function photoUrl(photo: PlacePhoto): string {
  return `${import.meta.env.BASE_URL}places/${photo.file}`;
}
