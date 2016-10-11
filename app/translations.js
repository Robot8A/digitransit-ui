/* eslint quote-props: ["error", "consistent"]*/
const translations = {
  'fi': {
    'stop-page.title': 'Pysäkki {stop_name} - {stop_code}',
    'stop-page.description': 'Pysäkki {stop_name} - {stop_code}',
    'terminal-page.title-short': 'Terminaali',
    'terminal-page.title': 'Terminaali {stop_name}',
    'terminal-page.description': 'Terminaali {stop_name}',
    'route-page.title': 'Linja {route_short_name}',
    'route-page.description': 'Linja {route_short_name} - {route_long_name}',
    'itinerary-page.title': 'Reitti',
    'itinerary-page.description': 'Reitti',
    'trip-page.title': 'Linja {route_short_name}',
    'trip-page.description': 'Linja {route_short_name} - {route_long_name}',
    'itinerary-summary-page.title': 'Reittiehdotukset',
    'itinerary-summary-page.description': 'Reittiehdotukset',
    'description': 'Löydä joukkoliikennetarjonta lähelle ja kauas.',
    'searching-position': 'Paikannetaan...',
    'search-position': 'Paikanna',
    'own-position': 'Nykyinen sijaintisi',
    'use-own-position': 'Käytä nykyistä sijaintia',
    'no-position': 'Ei sijaintia',
    'origin-placeholder': 'Mistä? - osoite tai pysäkki',
    'origin': 'Lähtöpaikkasi',
    'to-stop': 'Pysäkille',
    'line': 'Linja',
    'leaves': 'Lähtee',
    'next': 'Seuraava',
    'destination': 'Määränpää',
    'destination-placeholder': 'Kirjoita määränpää, linja tai pysäkki',
    'nearest': 'Lähimmät',
    'previous': 'Edelliset',
    'earlier': 'Aiemmin',
    'your-favourites': 'Suosikkisi',
    'near-you': 'Lähelläsi',
    'show-more': 'Näytä lisää',
    'now': 'Nyt',
    'arriving-soon': 'Nyt',
    'later': 'Myöhemmin',
    'instructions': 'Ohjeet',
    'map': 'Kartta',
    'buy-ticket': 'Näin ostat lipun (HSL.fi)',
    'required-ticket': 'Reitillä tarvittava lippu',
    'share': 'Jaa ohje',
    'print': 'Tulosta',
    'navigate': 'Navigoi',
    'routes': 'Linjat',
    'time': 'Aika',
    'stop': 'Pysäkki',
    'stops': 'Pysäkit',
    'stop-number': 'Pysäkkinumero',
    'right-now': 'Juuri nyt',
    'minutes': 'min',
    'timetable': 'Aikataulu',
    'no-favourites': 'Tähti-painikkeilla saat lisättyä linjan tai pysäkin suosikiksesi. Suosikkisi näkyvät tällä sivulla.',
    'distance-under': 'Etäisyys alle {distance} m',
    'distance-between': 'Etäisyys {distance1} m — {distance2} m',
    'tickets': 'Matkaliput',
    'settings': 'Asetukset',
    'terms-of-use': 'Käyttöehdot',
    'contact-information': '{contactName}:n yhteystiedot',
    'create-account': 'Luo {contactName} tunnus',
    'login': 'Kirjaudu sisään',
    'off-canvas-info': `Kirjautumalla palveluun saat suosikit talteen ja voit hyödyntää
      niitä muillakin laitteillasi`,
    'cause': 'syy',
    'disruptions': 'Häiriöt',
    'disruption-info': 'Poikkeusinfo',
    'disruption-info-no-alerts': 'Ei häiriöitä.',
    'leaving-at': 'Lähtöaika',
    'arriving-at': 'Perillä',
    'route-here': 'Reititä tänne',
    'route-from-here': 'Reititä täältä',
    'walking': 'Kävely',
    'prefer-walking': 'Suosi kävelyä',
    'avoid-walking': 'Vähän kävelyä',
    'transfers': 'Vaihdot',
    'transfers-allowed': 'Saa olla vaihtoja',
    'avoid-transfers': 'Vähän vaihtoja',
    'transfers-margin': 'Vaihtomarginaali',
    'walking-speed': 'Kävelynopeus',
    'slow': 'Hidas',
    'run': 'Juoksu',
    'no-transfers-margin': 'Tiukka',
    'long-transfers-margin': 'Väljä',
    'zones': 'Lippuvyöhykkeet',
    'accessibility': 'Esteettömyys',
    'no-position-no-stops': `Sijaintisi ei ole tiedossa, joten emme voi näyttää
      lähimpiä pysäkkejä.`,
    'geolocate-yourself': 'Paikanna itsesi',
    'or': 'tai',
    'give-position': 'Kirjoita sijaintisi tai lähtöpaikkasi hakukenttään.',
    'give-origin': 'Kirjoita lähtöpaikka',
    'give-destination': 'Kirjoita määränpää',
    'select-position': 'Valitse sijaintisi edellisistä hauistasi',
    'page-not-found': 'Voe rähmä! Sivuu ei löytyny',
    'yesterday': 'Eilen',
    'today': 'Tänään',
    'tomorrow': 'Huomenna',
    'not-implemented': '{name} -toiminnallisuus on vielä kesken',
    'not-implemented-msg': `Jos haluat osallistua kehitystyöhön, löydät lisätietoa
      suunnitelluista toiminnallisuuksista oheisista linkeistä.`,
    'route-not-possible': 'Valitettavasti reittisi ei ole mahdollinen. Tekninen virhe: "{error}"',
    'realtime-matching': 'Realiajan integraatio',
    'locate': 'Paikanna',
    'extra-info': 'Lisätietoa',
    'bike-availability': 'Pyöriä asemalla juuri nyt',
    'bike-availability-short': 'Pyöriä',
    'citybike-register-required': 'Kaupunkipyörien käyttö vaatii rekisteröitymisen',
    'use-citybike': 'Ota käyttöön',
    'citybike': 'Kaupunkipyörä',
    'inquiry': 'Mitä pidät uudesta Reittioppaasta? Kerro se meille! ',
    'platform-num': 'Laituri {platformCode}',
    'departures': 'Lähdöt',
    'show-departures': 'Näytä lähdöt',
    'no-route-msg': `Emme valitettavasti löytäneet yhtään reittiehdotusta kyseiselle
      välille. Muuta lähdön tai määränpään osoitetta.`,
    'close': 'Sulje',
    'likely-to-recommend': `Kuinka todennäköistä on, että suosittelisit palveluamme
      ystävälle tai kollegallesi?`,
    'likely-to-use': `Kuinka todennäköisesti käyttäisit tätä palvelua ennemmin kuin
      nykyistä reittiopas-palvelua?`,
    'how-to-rate-service': 'Kuinka arvioisit palvelua?',
    'char-left': 'merkkiä',
    'send': 'Lähetä',
    'walk-distance-duration': 'Kävele {distance} ({duration})',
    'car-distance-duration': 'Aja {distance} ({duration})',
    'approx-meters': '{approxDistance} m',
    'very-likely': 'Erittäin todennäköistä',
    'very-unlikely': 'Erittäin epätodennäköistä',
    'weather-at-destination': 'Sää määränpäässä',
    'trip-co2-emissions': 'Reitin CO2 päästöt',
    'add-location': 'Lisää paikka',
    'add-location-to-favourites': 'Lisää sinulle tärkeä paikka Suosikkisi- välilehdelle',
    'edit-favourites': 'Muokkaa paikkaa Suosikkisi -välilehdellä',
    'specify-location': 'Määritä sijainti',
    'give-name-to-location': 'Anna paikalle kuvaava nimi',
    'pick-icon': 'Valitse kuvake',
    'address-or-stop': 'Osoite tai pysäkki',
    'location-examples': 'esim. Koti, Työ, Koulu,...',
    'save': 'Tallenna',
    'delete': 'Poista',
    'cancel': 'Peruuta',
    'address': 'Osoite',
    'wait-amount-of-time': 'Odota {duration}',
    'airport-check-in': 'Tee lähtöselvitys lentoyhtiön {agency} tiskillä',
    'airport-security-check-go-to-gate': 'Kävele turvatarkastuksen läpi lähtöportille',
    'airport-collect-luggage': 'Nouda matkatavarat',
    'rent-cycle-at': 'Vuokraa pyörä asemalta {station}',
    'cycle-distance-duration': 'Pyöräile {distance} ({duration})',
    'cyclewalk-distance-duration': 'Taluta pyörää {distance} ({duration})',
    'number-of-intermediate-stops': `{number, plural, =0 {Ei pysähdyksiä} other
      {{number} pysäkkiä} } ({duration})`,
    'bus-with-route-number': 'Bussi {routeNumber} {headSign}',
    'tram-with-route-number': 'Raitiovaunu {routeNumber} {headSign}',
    'train-with-route-number': 'Juna {routeNumber} {headSign}',
    'subway-with-route-number': 'Metro {routeNumber} {headSign}',
    'ferry-with-route-number': 'Lautta {routeNumber} {headSign}',
    'airplane-with-route-number': 'Lento {routeNumber}',
    'favourite-target': 'Suosikkikohde',
    'search': 'Haku',
    'in-addition': 'Lisäksi',
    'choose-stop': 'Valitse pysäkki',
    'loading': 'Ladataan...',
    'skip-positioning': 'Ohita',
    'hour-short': 'h',
    'minute-short': 'min',
    'itinerary-feedback-message': 'Etkö löytänyt mitä etsit?',
    'itinerary-feedback-placeholder': 'Kuvaus (valinnainen)',
    'itinerary-feedback-button': 'Lähetä palautetta',
    'no-trips-found': 'Valitulle päivälle ei löydy matkoja.',
    'route-destination-arrives': 'Saapuu / Päätepysäkki',
    'location-from-map': 'Valittu sijainti',
    'alert.duration': '{day} klo {startTime} – {endTime}',
    'about-this-service': 'Tietoja palvelusta',
    'digitransit-platform': 'Digitransit palvelualusta',
    'datasources': 'Tietolähteet',
    'back-to-front-page': 'Takaisin etusivulle',
    'park-and-ride': 'Liityntäpysäköinti',
    'park-and-ride-availability': 'Pysäköintipaikkoja vapaana',
    'platform-short': 'Lait.',
  },

  'sv': {
    'terminal-page.title-short': 'Terminal',
    'terminal-page.title': 'Terminal {stop_name}',
    'terminal-page.description': 'Terminal {stop_name}',
    'searching-position': 'Söker position',
    'own-position': 'Min position',
    'use-own-position': 'Använd min position',
    'search-position': 'Sök position',
    'no-position': 'Ingen position',
    'origin': 'Från',
    'origin-placeholder': 'Från',
    'to-stop': 'Till hållplats',
    'line': 'Linje',
    'leaves': 'Avgår',
    'next': 'Nästa',
    'destination': 'Destination',
    'destination-placeholder': 'Destination',
    'nearest': 'Närmaste',
    'previous': 'Senaste',
    'earlier': 'Tidigare',
    'your-favourites': 'Dina favoriter',
    'near-you': 'Nära dig',
    'show-more': 'Visa flera',
    'now': 'Nu',
    'arriving-soon': 'Nu',
    'later': 'Senare',
    'instructions': 'Instruktioner',
    'map': 'Karta',
    'buy-ticket': 'Såhär köper du biljetten (HSL.fi)',
    'required-ticket': 'Biljett för resan',
    'share': 'Dela resan',
    'print': 'Skriv ut',
    'navigate': 'Navigera',
    'routes': 'Linjer',
    'time': 'Tid',
    'stop': 'Hållplats',
    'stops': 'Hållplatser',
    'stop-number': 'Hållplatsens nummer',
    'right-now': 'Just nu',
    'minutes': 'min',
    'timetable': 'Tidtabeller',
    'no-favourites': 'Du har ännu inte lagt till några favoriter.',
    'distance-under': 'Avstånd mindre än {distance} m',
    'distance-between': 'Avstånd {distance1} m — {distance2} m',
    'tickets': 'Biljetter',
    'settings': 'Inställningar',
    'terms-of-use': 'Användarvillkor',
    'contact-information': '{contactName} Kontaktuppgifter',
    'create-account': 'Skapa {contactName}-konto',
    'login': 'Logga in',
    'off-canvas-info': `Genom att logga in sparas dina favoriter och kan användas
      på dina andra enheter.`,
    'cause': 'Orsak',
    'disruptions': 'Störningar',
    'disruption-info': 'Undantagsinfo',
    'disruption-info-no-alerts': 'Inga undantagsmeddelanden.',
    'leaving-at': 'Avgår',
    'arriving-at': 'Anländer',
    'route-here': 'Sök rutt hit',
    'route-from-here': 'Sök rutt härifrån',
    'walking': 'Gång',
    'prefer-walking': 'Främja gång',
    'avoid-walking': 'Undvik gång',
    'transfers': 'Byten',
    'transfers-allowed': 'Främja byten',
    'avoid-transfers': 'Undvik byten',
    'transfers-margin': 'Bytestid',
    'walking-speed': 'Promenadhastighet',
    'slow': 'Långsam',
    'run': 'Springande',
    'no-transfers-margin': 'Ingen',
    'long-transfers-margin': 'Mycket lång',
    'zones': 'Biljettzoner',
    'accessibility': 'Tillgänglighet',
    'no-position-no-stops': `De närmaste hållplatserna kan inte visas, eftersom din
      position inte är känd.`,
    'geolocate-yourself': 'Sök position',
    'or': 'eller',
    'give-position': 'Skriv in din position i sökfältet ovan.',
    'give-origin': 'Skriv in din avgångsplats',
    'give-destination': 'Skriv in din destination',
    'select-position': 'Välj din position bland tidigare sökningar',
    'page-not-found': 'Sidan kunde inte hittas ੨( ･᷄ ︵･᷅ )ｼ',
    'yesterday': 'Igår',
    'today': 'Idag',
    'tomorrow': 'Imorgon',
    'not-implemented': '{name} - funktionen är inte implementerad',
    'not-implemented-msg': `Om du vill delta i utvecklingen så kan du hitta mer information
      om de planerade funktionerna i följande länkar`,
    'route-not-possible': 'Tyvärr din rutt är inte möjlig. Tekniskt fel: "{error}"',
    'realtime-matching': 'Realtidsintegration',
    'locate': 'Lokalisera',
    'extra-info': 'Mer info',
    'bike-availability': 'Cyklar finns',
    'bike-availability-short': 'Cyklar',
    'citybike-register-required': 'För att använda stadscyklarna krävs registrering',
    'use-citybike': 'Ta i bruk',
    'citybike': 'Stadscykel',
    'inquiry': 'Delta i förfrågan',
    'platform-num': 'Plattform {platformCode}',
    'departures': 'Avgångar',
    'show-departures': 'Visa avgångar',
    'no-route-msg': 'Vi kunde tyvärr inte hitta några reseförslag för denna sträcka. Ändra adress.',
    'close': 'Stäng',
    'weather-at-destination': 'Vädret på destinationen',
    'trip-co2-emissions': 'Längs CO2-utsläpp',
    'airport-check-in': 'Bagage kan checkas in på {agency}',
    'airport-security-check-go-to-gate': 'Gå igenom säkerhetskontrollen och gå till gate',
    'airport-collect-luggage': 'Plocka upp ditt bagage',
    'number-of-intermediate-stops': `{number, plural, =0 {Inga hållplatser} other
      {{number} hållplatser} } ({duration})`,
    'bus-with-route-number': 'Buss {routeNumber} {headSign}',
    'tram-with-route-number': 'Spårvagn {routeNumber} {headSign}',
    'train-with-route-number': 'Tåg {routeNumber} {headSign}',
    'subway-with-route-number': 'Tunnelbana {routeNumber} {headSign}',
    'ferry-with-route-number': 'Färja {routeNumber} {headSign}',
    'airplane-with-route-number': 'Flyg {routeNumber}',
    'walk-distance-duration': 'Gå {distance} ({duration})',
    'car-distance-duration': 'Kör {distance} ({duration})',
    'wait-amount-of-time': 'Vänta {duration}',
    'rent-cycle-at': 'Hyr cykel från stationen {station}',
    'cycle-distance-duration': 'Cykla {distance} ({duration})',
    'cyclewalk-distance-duration': 'Led cykeln {distance} ({duration})',
    'likely-to-recommend': `Hur sannolikt är det att du skulle rekommendera den här
      tjänsten åt en vän eller kollega?`,
    'favourite-target': 'Favoritdestination',
    'search': 'Sök',
    'in-addition': 'Även',
    'choose-stop': 'Välj hållplats',
    'loading': 'Laddar',
    'skip-positioning': 'Hoppa över',
    'itinerary-feedback-message': 'Hittade du inte vad du sökte?',
    'itinerary-feedback-placeholder': 'Beskrivning (valfri)',
    'itinerary-feedback-button': 'Skicka feedback',
    'route-destination-arrives': 'Anländer / Ändhållplats',
    'location-from-map': 'Vald position',
    'alert.duration': '{day} kl. {startTime} – {endTime}',
    'about-this-service': 'Om tjänsten',
    'digitransit-platform': 'Digitransit-plattformen',
    'datasources': 'Datakällor',
    'back-to-front-page': 'Tillbaka till framsidan',
    'park-and-ride': 'Infartsparkering',
    'park-and-ride-availability': 'Lediga parkeringsplatser',
    'platform-short': 'Plat.',
  },

  'nb': {
    'stop-page.title': 'Holdeplass {stop_name}',
    'stop-page.description': 'Holdeplass {stop_name} - {stop_code}',
    'route-page.title': 'Rute {route_short_name}',
    'route-page.description': 'Rute {route_short_name} - {route_long_name}',
    'itinerary-page.title': 'Reisebeskrivelser',
    'itinerary-page.description': 'Reisebeskrivelser',
    'trip-page.title': 'Linje {route_short_name}',
    'trip-page.description': 'Linje {route_short_name} - {route_long_name}',
    'itinerary-summary-page.title': 'Anbefalt ruter',
    'itinerary-summary-page.description': 'Anbefalt ruter',
    'searching-position': 'Leter etter posisjon',
    'search-position': 'Let etter posisjon',
    'own-position': 'Min posisjon',
    'use-own-position': 'Bruk min posisjon',
    'no-position': 'Ingen posisjon',
    'origin': 'Fra',
    'origin-placeholder': 'Fra',
    'to-stop': 'Avstand',
    'line': 'linje',
    'leaves': 'Går',
    'next': 'Neste',
    'destination': 'Til',
    'destination-placeholder': 'Hvor vil du reise?',
    'nearest': 'Forrige',
    'previous': 'Tidligere',
    'earlier': 'Tidligere',
    'your-favourites': 'Dine favoritter',
    'near-you': 'Nær deg',
    'show-more': 'Vis flere',
    'now': 'Nå',
    'arriving-soon': 'Nå',
    'hour-short': 't',
    'minute-short': 'm',
    'later': 'Senere',
    'instructions': 'Instruksjoner',
    'map': 'Kart',
    'buy-ticket': 'Kjøp billett',
    'required-ticket': 'Billett før påstigning',
    'share': 'Del reisen',
    'print': 'Skriv ut',
    'navigate': 'Naviger',
    'routes': 'Ruter',
    'time': 'Tid',
    'stop': 'Holdeplass',
    'stops': 'Holdeplasser',
    'stop-number': 'Holdeplassnummer',
    'right-now': 'Nå',
    'minutes': 'min',
    'timetable': 'Tidtabeller',
    'no-favourites': `Du kan legge til favoritter ved å trykke på favorittknapper forskjellige
      steder i reiseplanleggeren`,
    'distance-under': 'Avstand mindre enn {distance} m',
    'distance-between': 'Avstand {distance1} m — {distance2} m',
    'tickets': 'Billetter',
    'settings': 'Innstillinger',
    'terms-of-use': 'Brukervilkår',
    'contact-information': '{contactName} kontaktinformasjon',
    'create-account': 'Lag {contactName}-konto',
    'login': 'Logg inn',
    'off-canvas-info': 'Ved å logge inn kan du finne tilbake til dine favoritter på andre enheter',
    'cause': 'Årsak',
    'disruptions': 'TODO',
    'disruption-info': 'Avviksmelding',
    'disruption-info-no-alerts': 'Ingen avviksmeldinger.',
    'leaving-at': 'Avgang',
    'arriving-at': 'Ankomst',
    'route-here': 'Finn rute hit',
    'route-from-here': 'Finn rute herfra',
    'walking': 'Gange',
    'prefer-walking': 'Foretrekk gange',
    'avoid-walking': 'Unngå gange',
    'transfers': 'Bytter',
    'transfers-allowed': 'Bytter tillatt',
    'avoid-transfers': 'Unngå bytter',
    'transfers-margin': 'Byttetid',
    'walking-speed': 'Ganghastighet',
    'slow': 'Spasering',
    'run': 'Løping',
    'zones': 'Billettsoner',
    'accessibility': 'Tilgjengelighet',
    'no-position-no-stops': 'Kan ikke vise holdeplasser i nærheten da vi ikke vet din posisjon.',
    'geolocate-yourself': 'Finn min posisjon',
    'or': 'eller',
    'give-position': 'Skriv inn posisjon i søkefeltet over.',
    'give-origin': 'skriv avgangssted',
    'give-destination': 'skriv hvor du vil reise',
    'select-position': 'Velg din posisjon basert på tidligere søk',
    'page-not-found': 'Siden kunne ikke finnes ੨( ･᷄ ︵･᷅ )ｼ',
    'yesterday': 'I går',
    'today': 'I dag',
    'tomorrow': 'I morgen',
    'not-implemented': '{name} - funksjonen er ikke implementert',
    'not-implemented-msg': `Om du vil delta i utviklingen kan du finne mer informasjon
      i følgende lenker`,
    'route-not-possible': `Dessverre kan vi ikke finne et reiseforslag til deg. Teknisk
     feil: "{error}"`,
    'realtime-matching': 'Sanntidsmatching',
    'locate': 'Der jeg er',
    'extra-info': 'Mer info',
    'bike-availability': 'Sykler finnes',
    'bike-availability-short': 'Sykler',
    'citybike-register-required': 'Bysykkelregistrering påkreves',
    'use-citybike': 'Bruk bysykkel',
    'citybike': 'Bysykkel',
    'inquiry': 'Send tilbakemelding',
    'platform-num': 'Plattform {platformCode}',
    'departures': 'Avganger',
    'show-departures': 'Vis avganger',
    'no-route-msg': `Vi finner dessverre ingen reiseforslag til angitt rute. Forsøk å
      endre adresse`,
    'close': 'Steng',
    'likely-to-recommend': `Hvor sannsynlig er det at du anbefaler vår tjeneste til en
      venn eller kollega?`,
    'likely-to-use': `Hvor sannsynlig er det at du vil bruke denne tjenesten fremfor
      tjenesten du allerede bruker?`,
    'how-to-rate-service': 'Hvordan vil du rangere tjenesten?',
    'char-left': 'slett',
    'send': 'Send',
    'approx-meters': '{approxDistance} meter',
    'very-likely': 'Svært sannsynlig',
    'very-unlikely': 'Lite sannsynlig',
    'weather-at-destination': 'Været på destinasjonen',
    'trip-co2-emissions': 'Reisens CO2-utslipp',
    'add-location': 'Legg til sted',
    'add-location-to-favourites': 'Legg til sted i favoritter',
    'specify-location': 'Angi sted',
    'give-name-to-location': 'Skriv inn et beskrivende navn på stedet',
    'pick-icon': 'Velg et ikon',
    'address-or-stop': 'Adresse eller stoppested',
    'location-examples': 'f.eks hjemme, arbeid, skole ...',
    'save': 'Lagre',
    'delete': 'delete TODO',
    'cancel': 'cancel TODO',
    'address': 'Adresse',
    'airport-check-in': 'Bagasje kan sjekkes inn hos {agency}',
    'airport-security-check-go-to-gate': 'Passer sikkerhetskontrollen og fortsett til gate',
    'airport-collect-luggage': 'Hent eventuell bagasje',
    'walk': 'gå',
    'rent-cycle-at': 'Lei sykkel fra stativ {station}',
    'cycle-distance-duration': 'Sykle {distance} ({duration})',
    'cyclewalk-distance-duration': 'Trill sykkelen {distance} ({duration})',
    'number-of-intermediate-stops': `{number, plural, =0 {Ingen stopp} other {{number}
      stopp} }({duration})`,
    'bus-with-route-number': 'Buss {routeNumber} {headSign}',
    'tram-with-route-number': 'Trikk {routeNumber} {headSign}',
    'train-with-route-number': 'Tog {routeNumber} {headSign}',
    'subway-with-route-number': 'T-bane {routeNumber} {headSign}',
    'ferry-with-route-number': 'Ferge {routeNumber} {headSign}',
    'airplane-with-route-number': 'Fly {routeNumber}',
    'walk-distance-duration': 'Gå {distance} ({duration})',
    'car-distance-duration': 'Kjør {distance} ({duration})',
    'wait-amount-of-time': 'Vent {duration}',
    'favourite-target': 'Favorittdestinasjon',
    'search': 'Avganger',
    'in-addition': 'Og',
    'choose-stop': 'Velg stopp',
    'loading': 'loading',
    'skip-positioning': 'skip-positioning',
    'itinerary-feedback-message': 'Fant du ikke det du lette etter?',
    'itinerary-feedback-placeholder': 'Beskrivelse (valgfritt)',
    'itinerary-feedback-button': 'Send tilbakemelding',
    'alert.duration': '{day} kl. {startTime} – {endTime}',
    'about-this-service': 'Om tjänsten',
    'digitransit-platform': 'Digitransit platform',
    'datasources': 'Datasources',
    'back-to-front-page': 'Back to front page',
  },

  'fr': {
    'stop-page.title': 'Arrêt {stop_name} - {stop_code}',
    'stop-page.description': 'Arrêt {stop_name} - {stop_code}',
    'route-page.title': 'Ligne {route_short_name}',
    'route-page.description': 'Ligne {route_short_name} - {route_long_name}',
    'itinerary-page.title': 'Itinéraire',
    'itinerary-page.description': 'Itinéraire',
    'trip-page.title': 'Ligne {route_short_name}',
    'trip-page.description': 'Ligne {route_short_name} - {route_long_name}',
    'itinerary-summary-page.title': 'Itinéraire proposé',
    'itinerary-summary-page.description': 'Itinéraire proposé',
    'description': 'Rapprochez-vous de votre réseau de transport et voyagez',
    'searching-position': 'Localisation en cours...',
    'own-position': 'Position actuelle',
    'use-own-position': 'Utiliser la position actuelle',
    'search-position': 'Rechercher la position',
    'no-position': 'Aucune position',
    'origin': 'Départ',
    'origin-placeholder': 'Lieu, adresse ou arrêt',
    'to-stop': 'Arrêt',
    'line': 'Ligne',
    'leaves': 'Départ',
    'next': 'Suivant',
    'destination': 'Destination',
    'destination-placeholder': 'Lieu, adresse ou arrêt',
    'nearest': 'A proximité',
    'previous': 'Précédent',
    'earlier': 'Plus tôt',
    'your-favourites': 'Favoris',
    'near-you': 'A proximité',
    'show-more': 'Afficher plus',
    'now': 'Maintenant',
    'arriving-soon': 'Imm.',
    'later': 'Plus tard',
    'instructions': 'Instructions',
    'map': 'Carte',
    'buy-ticket': 'Acheter un titre de transport',
    'required-ticket': 'Titre de transport requis',
    'share': 'Partager',
    'print': 'Imprimer',
    'navigate': 'Voyager',
    'routes': 'Lignes',
    'time': 'Heure',
    'stop': 'Arrêt',
    'stops': 'Arrêts',
    'stop-number': "Identifiant d'arrêt",
    'right-now': 'Immédiatement',
    'minutes': 'min',
    'timetable': 'Fiche horaire',
    'no-favourites': `Vous pouvez cliquer sur les étoiles pour ajouter une ligne à vos favoris.
      Après l'ajout, ceux-ci sont disponibles dans l'onglet Favoris de l'interface`,
    'distance-under': 'Distance inférieure à {distance} m',
    'distance-between': 'Distance {distance1} m — {distance2} m',
    'tickets': 'Titres de transport',
    'settings': 'Paramètres',
    'terms-of-use': 'CGU',
    'contact-information': 'Contacter {contactName}',
    'create-account': 'Créer un identifiant {contactName}',
    'login': 'Se connecter',
    'off-canvas-info': `En vous connectant, vos favoris seront sauvegardés et accessibles depuis
      d'autres appareils`,
    'cause': 'Cause',
    'disruptions': 'Perturbations',
    'disruption-info': 'Informations sur les perturbations',
    'disruption-info-no-alerts': 'Perturbations en cours',
    'leaving-at': 'Départ',
    'arriving-at': 'Arrivée',
    'route-here': 'Arriver ici',
    'route-from-here': "Partir d'ici",
    'walking': 'Marcher',
    'prefer-walking': 'Préférer la marche',
    'avoid-walking': 'Éviter la marche',
    'transfers': 'Correspondances',
    'transfers-allowed': 'Autoriser les correspondances',
    'avoid-transfers': 'Éviter les correspondances',
    'transfers-margin': 'Marge de correspondance',
    'walking-speed': 'Vitesse de marche',
    'slow': 'Lent',
    'run': 'Rapide',
    'zones': 'Zones',
    'accessibility': 'Accessibilité',
    'no-position-no-stops': 'Localisation inconnue, impossible de proposer les arrêts à proximité.',
    'geolocate-yourself': 'Se géolocaliser',
    'or': 'ou',
    'give-position': 'Indiquer votre position ou un lieu dans le champ de recherche.',
    'give-origin': 'Entrer votre point de départ',
    'give-destination': 'Entrer votre destination',
    'select-position': 'Utiliser une localisation précédente',
    'page-not-found': 'Page non trouvée',
    'today': "Aujourd'hui",
    'tomorrow': 'Demain',
    'not-implemented': '{name} - la fonctionnalité est en cours de développement',
    'not-implemented-msg': `Si vous souhaitez participer au développement, vous pouvez
      obtenir des informations via les liens ci-dessous`,
    'route-not-possible': 'Impossible de calculer un itinéraire. Information technique : "{error}"',
    'realtime-matching': 'Intégration du temps-réel',
    'locate': 'Localiser',
    'extra-info': 'Informations complémentaires',
    'bike-availability': 'Vélos disponibles en station',
    'bike-availability-short': 'Vélos',
    'citybike-register-required': "L'utilisation de Vélib nécessite une inscription",
    'use-citybike': 'Utiliser',
    'citybike': 'Vélib',
    'inquiry': 'Répondre aux questions pour développer le service',
    'platform-num': 'Quai {platformCode}',
    'departures': 'Départs',
    'show-departures': 'Afficher les départs',
    'no-route-msg': `Impossible de trouver un itinéraire dans cette zone. Changer le point
      de départ ou d'arrivée.`,
    'close': 'Fermer',
    'likely-to-recommend': 'A quel point recommandriez vous ce service à un ami ou un collègue ?',
    'likely-to-use': 'A quel point utiliseriez-vous ce service plutôt que le service actuel ?',
    'how-to-rate-service': 'Comment noteriez-vous ce service ?',
    'char-left': 'marquer',
    'send': 'Envoyer',
    'walk-distance-duration': 'Marcher {distance} ({duration})',
    'car-distance-duration': 'Conduire {distance} ({duration})',
    'approx-meters': '{approxDistance} m',
    'very-likely': 'Très probable',
    'very-unlikely': 'Très improbable',
    'weather-at-destination': 'Météo à destination',
    'trip-co2-emissions': 'Émissions de CO2',
    'add-location': 'Ajouter un endroit',
    'add-location-to-favourites': "Ajouter vos lieux importants à l'onglet favoris",
    'specify-location': 'Indiquer un endroit',
    'give-name-to-location': 'Donner un nom à cet endroit',
    'pick-icon': 'Sélectionner une icône',
    'address-or-stop': 'Adresse ou arrêt',
    'location-examples': 'Gare de Lyon, Longjumeau, Rue du Bac, Châtelet,...',
    'save': 'Enregistrer',
    'address': 'Adresse',
    'wait-amount-of-time': 'Attendre {duration}',
    'airport-check-in': "S'enregistrer au guichet {agency}",
    'airport-security-check-go-to-gate': `Franchir les contrôles de sécurité et se rendre
      à la porte d'embarquement`,
    'airport-collect-luggage': 'Récupérer vos bagages',
    'rent-cycle-at': 'Décrocher un vélo à la station {station}',
    'cycle-distance-duration': 'Pédaler {distance} ({duration})',
    'cyclewalk-distance-duration': 'Avancer pied à terre sur {distance} ({duration})',
    'number-of-intermediate-stops': `{number, plural, =0 {Sans arrêt} =1 {{number} arrêt}
      other {{number} arrêts} } ({duration})`,
    'bus-with-route-number': 'Bus {routeNumber} {headSign}',
    'tram-with-route-number': 'Tramway {routeNumber} {headSign}',
    'train-with-route-number': 'Train {routeNumber} {headSign}',
    'subway-with-route-number': 'Métro {routeNumber} {headSign}',
    'ferry-with-route-number': 'Bâteau {routeNumber} {headSign}',
    'airplane-with-route-number': 'Avion {routeNumber}',
    'favourite-target': 'Destination favorite',
    'search': 'Recherche',
    'in-addition': 'En plus',
    'choose-stop': 'Merci de choisir la ligne',
    'loading': 'Chargement',
    'skip-positioning': 'Ignorer le positionnement',
    'hour-short': 'h',
    'minute-short': 'min',
    'itinerary-feedback-message': 'Avez-vous trouvé ce que vous cherchiez ?',
    'itinerary-feedback-placeholder': 'Description (optionnel)',
    'itinerary-feedback-button': 'Envoyez votre avis',
    'no-trips-found': "Il n'y a pas de trajet possible au jour choisi.",
    'route-destination-arrives': 'Arrivée / Terminus',
    'location-from-map': 'Emplacement sélectionné',
    'alert.duration': '{day} validité {startTime} – {endTime}',
    'about-this-service': 'À propos de ce service',
    'digitransit-platform': 'Plateforme Digitransit',
    'datasources': 'Sources des données',
    'back-to-front-page': 'Retour à la page d\'accueil',
    'park-and-ride': 'Parc Relais',
    'park-and-ride-availability': 'Disponibilité du Parc Relais',
    'platform-short': 'Plat.',
  },
};

export default translations;
