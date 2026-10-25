export interface ThemeMotifItem {
  id: string;
  category: 'Tema Central' | 'Motivo Recurrente';
  titleEs: string;
  subtitleEn: string;
  meaningAndSignificance: string;
  developmentAcrossBooks: {
    book: string;
    evolution: string;
  }[];
  textualEvidence: string;
  pdfPages: number[];
}

export interface CharacterAnalysisItem {
  id: string;
  name: string;
  roleTitle: string;
  archetype: string;
  booksPresent: string;
  pdfPages: number[];
  motivation: string;
  developmentArc: string;
  keyRelationships: string;
  narrativeImportance: string;
  signatureQuoteEs: string;
}

export interface PlotStageItem {
  stageNumber: string;
  stageTitleEs: string;
  stageTitleEn: string;
  booksSpan: string;
  pdfPages: number[];
  macroSpiritualMovement: string;
  narrativeManifestations: string[];
  philosophicalCulmination: string;
}

export interface AudiobookChapter {
  id: string;
  bookNumber: number;
  titleEs: string;
  subtitleEs: string;
  pdfPage: number;
  durationEstimate: string;
  voiceStylePrompt: string;
  introNarrativeEs: string;
  poeticVersesEs: string[];
  poeticVersesEn: string[];
}

export const THEMES_AND_MOTIFS_ANALYSIS: ThemeMotifItem[] = [
  {
    id: 'theme-separation-love',
    category: 'Tema Central',
    titleEs: '1. El Exilio del Alma (Firāq) y el Amor Divino (\'Ishq) como Fuerza Cósmica',
    subtitleEn: 'Spiritual Banishment & Love as the Universal Astrolabe',
    meaningAndSignificance:
      'Es el cimiento ontológico del Masnavi. Toda criatura sufre porque ha sido separada de su fuente divina primordial. El Amor (\'Ishq) no es una simple emoción humana, sino la fuerza gravitatoria que atrae a todos los seres de regreso a Dios, el «médico de nuestro orgullo» y el «astrolabio de los misterios divinos» que trasciende la razón discursiva.',
    developmentAcrossBooks: [
      {
        book: 'Libro I (Págs. 5–8)',
        evolution:
          'Se inaugura con el lamento de la flauta de caña (Ney) cortada de su cañaveral y con la historia del Príncipe y la Doncella, donde se demuestra que el amor terrenal es sólo un velo transitorio frente al Rey del Amor.'
      },
      {
        book: 'Libros II y III (Págs. 56–59, 88, 107)',
        evolution:
          'Madura hacia la purificación del amor: en Luqman el amor vuelve dulce lo amargo; en Moisés y el Pastor supera el formalismo ritual; en el Amante que leía sonetos exige amar al Amado y no a los propios arrebatos; y en el Vakil de Bujará se revela que el amor del siervo es siempre correspondido por el amor previo de Dios.'
      },
      {
        book: 'Libros V y VI (Págs. 164, 206–214)',
        evolution:
          'Culmina en la devoción incondicional de Ayaz hacia el Sultán Mahmud y en la muerte mística del Príncipe mayor ante el Rey de China, donde el amante se despoja del cuerpo para abrazar al Amado sin velos.'
      }
    ],
    textualEvidence:
      '«Cuando el cálamo se apresuró a escribir, al llegar al tema del amor se partió en dos. Al explicarlo, la Razón se atasca como un asno en el lodo; ¡nada sino el Amor mismo puede explicar el amor y a los amantes!» (Libro I, pág. 7).',
    pdfPages: [5, 7, 57, 88, 107, 212]
  },
  {
    id: 'theme-fana-baqa',
    category: 'Tema Central',
    titleEs: '2. La Aniquilación del Ego (Fanā\') y el Taller del No-Ser',
    subtitleEn: 'Self-Annihilation ("Die Before You Die") & Subsistence in God',
    meaningAndSignificance:
      'El obstáculo único entre el alma y Dios es el «yo» ilusorio (Nafs), que reclama existencia autónoma. Rumi desarrolla la paradoja sufí de que el «No-ser» (la humildad y abnegación total) es el taller donde Dios crea la verdadera existencia (Baqā\'). En una misma casa no caben dos «Yoes».',
    developmentAcrossBooks: [
      {
        book: 'Libro I (Págs. 22, 35–37)',
        evolution:
          'Se formula mediante la parábola del Loro del Mercader (que finge morir para ser sacado de la jaula) y el cuento del amigo que llama a la puerta y sólo entra cuando dice «¡Soy Tú!».'
      },
      {
        book: 'Libros III y IV (Págs. 109, 132–134)',
        evolution:
          'Adquiere dimensión cósmica y teopática: la muerte no es pérdida sino ascenso evolutivo (de mineral a planta, animal, hombre y ángel), y en Bayazid de Bastam muestra cómo el santo vaciado de sí mismo se vuelve un espejo invulnerable.'
      },
      {
        book: 'Libros V y VI (Págs. 161, 184–188)',
        evolution:
          'Se contrasta el «Yo soy la Verdad» de Mansur Hallaj (el rubí lleno de sol, libre de ego) con el «Yo soy vuestro Señor Supremo» del Faraón (la piedra oscura del egoísmo), cerrando con la canción del «No sé» del juglar místico.'
      }
    ],
    textualEvidence:
      '«Puesto que el No-ser es el espejo del Ser, si eres sabio, elige el No-ser... En una misma casa no hay lugar para dos "Yoes"» (Libro I, pág. 36).',
    pdfPages: [22, 36, 109, 132, 161, 184]
  },
  {
    id: 'theme-surat-mana',
    category: 'Tema Central',
    titleEs: '3. Forma Aparente (Sūrat) vs. Esencia Espiritual (Ma\'nā) y Crítica del Taqlīd',
    subtitleEn: 'Outward Form vs. Inner Reality & Blind Imitation',
    meaningAndSignificance:
      'El mundo sensible, los ritos externos, los nombres y las doctrinas teológicas son cáscaras o recipientes (Sūrat); la realidad divina es el vino invisible contenido en ellos (Ma\'nā). De esta distinción nace la crítica feroz de Rumi al Taqlīd (la fe por imitación mecánica o vanidad erudita) y su afirmación de la unidad trascendente de las religiones.',
    developmentAcrossBooks: [
      {
        book: 'Libros I y II (Págs. 9, 45–48, 75–76)',
        evolution:
          'El loro del aceitero confunde a un santo calvo con un culpable por juzgar la forma externa; el sufí pierde su asno por imitar ciegamente el canto de los demás; y los cuatro viajeros pelean por cuatro nombres distintos de la misma fruta (uvas).'
      },
      {
        book: 'Libro III (Págs. 85, 96, 115–116)',
        evolution:
          'Alcanza su cumbre epistemológica en la parábola del Elefante en la Habitación Oscura y en la defensa de los siete niveles de significado interior del Corán y del propio Masnavi frente a los críticos literales.'
      },
      {
        book: 'Libro VI (Págs. 206–213)',
        evolution:
          'Los tres príncipes descubren que el retrato de la Princesa de China era sólo una copa de la Belleza sin forma del Rey Espiritual.'
      }
    ],
    textualEvidence:
      '«Pasa más allá de los nombres y mira las cualidades, ¡para que las cualidades te conduzcan a la Esencia! Las diferencias de las sectas nacen de Sus nombres; cuando penetran en Su Esencia, hallan Su paz» (Libro II, pág. 75).',
    pdfPages: [9, 48, 75, 85, 116, 206]
  },
  {
    id: 'theme-jabr-qadar',
    category: 'Tema Central',
    titleEs: '4. Providencia Divina, Libre Albedrío y la Relatividad del Mal',
    subtitleEn: 'First Cause, Moral Agency & The Soul of Good in Things Evil',
    meaningAndSignificance:
      'Rumi aborda la tensión teológica entre la omnipotencia de Dios como Único Agente Real (Fa\'il-i Haqiqi) y la responsabilidad moral humana. Demuestra que el mal y la tentación son relativos pero necesarios: como un Pintor que necesita tanto luces como sombras para mostrar Su maestría, la virtud humana requiere la existencia de las pasiones para librar la «Guerra Mayor».',
    developmentAcrossBooks: [
      {
        book: 'Libro I (Págs. 14–22)',
        evolution:
          'Debate entre el león (esfuerzo activo) y las bestias (abandono pasivo), resolviendo que el esfuerzo agradecido no contradice la confianza en Dios, y que en los santos libre albedrío y decreto divino se unifican.'
      },
      {
        book: 'Libros II, III y IV (Págs. 60, 64, 99, 119)',
        evolution:
          'Explica que Dios pinta imágenes hermosas (José) y terribles (Iblis, Faraón) como prueba de Su arte infinito, y que ningún mal es absoluto: la patrulla hostil empuja al amante al jardín de su amada.'
      },
      {
        book: 'Libros V y VI (Págs. 153–154, 172, 193–194)',
        evolution:
          'En el Sabio y el Pavo Real y en el diálogo del Sufí y el Cadí se establece que sin tentación no existirían la castidad, el coraje ni el mérito moral.'
      }
    ],
    textualEvidence:
      '«Iblis dijo: "Tú me hiciste errar". Adán dijo: "Nosotros mismos nos hemos agraviado"... Quien es sabio sabe que la astucia argumentativa viene de Iblis, pero el amor humilde viene de Adán» (Libro IV, pág. 129).',
    pdfPages: [15, 21, 64, 119, 129, 154, 172, 194]
  },
  {
    id: 'motif-mirror-water-birds',
    category: 'Motivo Recurrente',
    titleEs: '5. Motivos Simbólicos: El Espejo Bruñido, la Flauta, el Agua y las Aves Enjauladas',
    subtitleEn: 'Recurring Symbolic Motifs: Mirror, Reed-Flute, Ocean & Birds',
    meaningAndSignificance:
      'Rumi teje la unidad poética de los seis libros mediante cuatro motivos recurrentes que reaparecen transformados en cada volumen para hacer sensible lo inefable.',
    developmentAcrossBooks: [
      {
        book: 'El Espejo Pulido (Ayina)',
        evolution:
          'Representa el corazón humano: cubierto de herrumbre por la codicia y el ego no refleja nada (Libro I, pág. 6), pero bruñido por la contrición refleja a Dios (Artistas Griegos, pág. 38; José y el Espejo, pág. 36; Bayazid como espejo sin forma, pág. 133).'
      },
      {
        book: 'El Océano y la Espuma',
        evolution:
          'Dios y la Razón Universal son el Océano infinito sin forma; los cuerpos, las palabras y los fenómenos del mundo son apenas copos de espuma agitados por las olas (Libro I, pág. 32; Libro III, pág. 85; Libro VI, pág. 193).'
      },
      {
        book: 'Las Aves del Alma (Halcón, Loro, Pato, Pavo Real)',
        evolution:
          'El alma es el Halcón del Rey extraviado entre búhos en ruinas (Libro II, pág. 54), el Loro cautivo que ansía la selva de Indostán (Libro I, pág. 22), y los Patos criados bajo una gallina doméstica que sienten el llamado innato de nadar en el océano del Ser (Libro II, pág. 76).'
      }
    ],
    textualEvidence:
      '«Aunque una gallina doméstica te haya criado bajo su ala, tu madre era un pato de aquel Océano. El anhelo por el océano que llena tu corazón procede de tu madre espiritual» (Libro II, pág. 76).',
    pdfPages: [5, 22, 36, 38, 54, 76, 85, 133]
  }
];

export const MAJOR_CHARACTERS_ANALYSIS: CharacterAnalysisItem[] = [
  {
    id: 'char-rumi-narrator',
    name: 'Jalalu-\'d-Din Rumi (La Voz Poética y la Caña)',
    roleTitle: 'Narrador, Maestro Espiritual y Amante Místico',
    archetype: 'El Poeta Iluminado / La Flauta de Caña',
    booksPresent: 'Libros I al VI (Págs. 5–214)',
    pdfPages: [5, 7, 45, 115, 148, 182],
    motivation:
      'Despertar a las almas «crudas» (hombres atados a las apariencias) para llevarlas al estado de «madurez» espiritual, revelando los secretos del Amado hasta donde las palabras humanas lo permiten.',
    developmentArc:
      'Comienza en el Libro I lamentando su separación como una flauta de caña y desbordado por la memoria de Shams de Tabriz; en los Libros III y IV defiende la profundidad esotérica de sus fábulas frente a los críticos literales; y en el Libro VI trasciende las letras y palabras para desembocar en el Silencio de la Unidad.',
    keyRelationships:
      'Discípulo enamorado de Shams de Tabriz («su Sol espiritual») y padre espiritual de Husamu-\'d-Din, quien actúa como partera e imán de sus versos.',
    narrativeImportance:
      'Su voz unifica las 82 historias: interrumpe constantemente las tramas para interpelar directamente al lector («¡Oh hijo!») y recordarle que él mismo es el protagonista oculto de cada fábula.',
    signatureQuoteEs:
      '«Árabe, cántaro de agua y ángeles: ¡todos ellos somos nosotros mismos!» (Libro I, pág. 32).'
  },
  {
    id: 'char-shams-husam',
    name: 'Shams de Tabriz y Husamu-\'d-Din',
    roleTitle: 'El Sol de la Teofanía y el Discípulo Inspirador',
    archetype: 'El Amado Espiritual y el Espejo Receptivo',
    booksPresent: 'Libro I (Shams, págs. 7–8) · Libros I–VI (Husam, págs. 20, 45, 118, 148, 182)',
    pdfPages: [7, 8, 20, 45, 118, 148, 182],
    motivation:
      'Shams busca incendiar la razón discursiva de Rumi para sumergirlo en la visión directa de Dios; Husamu-\'d-Din busca que ese tesoro místico quede plasmado en verso para guiar a la humanidad.',
    developmentArc:
      'Shams aparece en el Libro I como un sol deslumbrante ante el cual hay que guardar silencio porque el mundo no soportaría su luz desnuda. Husamu-\'d-Din sostiene la arquitectura de los seis libros: su dolor detiene la obra antes del Libro II y a él se consagra el Prólogo final del Libro VI.',
    keyRelationships:
      'Representan los dos polos de la transmisión sufí en torno a Rumi: la irrupción vertical del éxtasis (Shams) y la irradiación compasiva hacia la comunidad de buscadores (Husam).',
    narrativeImportance:
      'Demuestran que el Masnavi no es una obra literaria solitaria, sino el fruto vivo de la amistad espiritual (Suhbat) entre maestro y discípulo.',
    signatureQuoteEs:
      '«¡Oh vida del corazón, Husamu-\'d-Din, mi celo ardía dentro de mí por escribir esta sexta parte! Por tu influencia el Masnavi se convirtió en estandarte para el mundo» (Libro VI, pág. 182).'
  },
  {
    id: 'char-moses-pharaoh',
    name: 'Moisés (Musa) y el Faraón',
    roleTitle: 'La Razón Iluminada frente al Ego Rebelde',
    archetype: 'El Profeta de la Luz y el Tirano de la Ilusión Carnal',
    booksPresent: 'Libros I, II, III y IV (Págs. 29, 58, 84, 136–143)',
    pdfPages: [29, 58, 61, 84, 136, 138],
    motivation:
      'Moisés busca liberar a los espíritus de la esclavitud del ego y reconciliarlos con Dios; el Faraón busca preservar su soberanía ilusoria («Yo soy vuestro Señor Supremo») y sofocar el nacimiento de la verdad.',
    developmentArc:
      'Moisés mismo aprende humildad cuando Dios lo reprende por rechazar la oración rústica del Pastor (Libro II) y cuando comprende por qué Dios crea y siega las formas (Libro IV). El Faraón oscila entre el temor nocturno ante Dios (Libro I, pág. 29), la tentación de arrepentirse aconsejado por su esposa Asiya, y su recaída final por escuchar la soberbia de su visir Hamán (Libro IV, pág. 137).',
    keyRelationships:
      'Rumi revela que Moisés y el Faraón no son sólo personajes históricos, sino dos facultades dentro de cada lector: Moisés es el espíritu iluminado y el Faraón es el cuerpo dominado por la pasión (con Hamán como el intelecto mundano cómplice).',
    narrativeImportance:
      'Protagonizan el duelo dialéctico más extenso del Masnavi, ejemplificando cómo una misma luz divina (la vara de Moisés y el Nilo) es agua pura para los creyentes y sangre para el ego obstinado.',
    signatureQuoteEs:
      '«Él es como el Faraón, y su propio cuerpo es como Moisés: corre afuera gritando "¿dónde está mi enemigo?", mientras la lujuria habita en su propia casa» (Libro II, pág. 51).'
  },
  {
    id: 'char-solomon-bilqis',
    name: 'El Rey Salomón y Bilqis (Reina de Saba)',
    roleTitle: 'El Hombre Perfecto (Logos) y el Alma que Renuncia al Trono Mundano',
    archetype: 'El Rey Espiritual que conoce el Lenguaje de las Aves y la Buscadora',
    booksPresent: 'Libros II, III y IV (Págs. 58, 76, 116, 121–127)',
    pdfPages: [58, 76, 116, 121, 125],
    motivation:
      'Salomón no desea los lingotes de oro de Saba, sino salvar el espíritu de Bilqis; Bilqis debe decidir entre aferrarse a su corona efímera o acudir con humildad al llamado de la Verdad.',
    developmentArc:
      'Bilqis pasa de intentar comprar a Salomón con cuarenta camellos cargados de oro a comprender la miseria de su riqueza material, abandonando su reino y su idolatría solar para presentarse como humilde discípula en Jerusalén.',
    keyRelationships:
      'Salomón actúa como el Maestro espiritual (Pir) que habla a cada ave según su capacidad (pág. 125), asistido por su sabio visir Asaf; Bilqis representa el alma regia que despierta al escuchar a la Abubilla de la gracia.',
    narrativeImportance:
      'Simboliza la edificación del Templo interior del corazón (donde hasta los demonios de las pasiones quedan sometidos a trabajar para el espíritu) y la conversión de la soberanía mundana en libertad espiritual.',
    signatureQuoteEs:
      '«¡Levántate, oh Bilqis, y contempla al menos el reino de los reyes reales de la fe! Cuando tú misma te conviertas en tu propia fortuna espiritual, jamás podrás perderla» (Libro IV, pág. 126).'
  },
  {
    id: 'char-mahmud-ayaz',
    name: 'El Sultán Mahmud de Ghazni y su Siervo Ayaz',
    roleTitle: 'El Rey Amante y el Esclavo de Fidelidad Inquebrantable',
    archetype: 'El Señor Divino y el Corazón Humilde y Puro',
    booksPresent: 'Libros V y VI (Págs. 164–166, 175–181, 186, 203)',
    pdfPages: [164, 175, 180, 186, 203],
    motivation:
      'Ayaz busca únicamente no olvidar jamás su origen de barro y cumplir la voluntad de su Rey por encima de cualquier recompensa; Mahmud busca demostrar ante los cortesanos envidiosos la pureza única de Ayaz.',
    developmentArc:
      'Acusado de robar tesoros en su cámara secreta, Ayaz queda vindicado cuando se descubre que allí sólo guarda sus viejos zapatos rústicos y su zalea rota. En su culminación (pág. 180), mientras todos los cortesanos se niegan a romper una joya preciosa por codicia, Ayaz la rompe sin dudar porque la orden del Rey vale más que todas las joyas del mundo, e intercede luego por sus acusadores.',
    keyRelationships:
      'Los cortesanos envidiosos representan a Iblis y a los hipócritas que desprecian al hombre de Dios; la unión entre Mahmud y Ayaz prefigura el Juicio Final y la comunión entre Dios y el santo.',
    narrativeImportance:
      'Protagonizan el gran ciclo narrativo del Libro V, ofreciendo el modelo práctico de cómo vencer el orgullo espiritual y el apego a las recompensas creadas.',
    signatureQuoteEs:
      '«De mi propia existencia no queda más que el nombre; en mi ser no hay nada fuera de Ti, ¡oh Objeto de mi deseo!» (Libro V, pág. 165).'
  },
  {
    id: 'char-iblis',
    name: 'Iblis (Satanás)',
    roleTitle: 'El Intelecto Arrogante y el Espejo de la Prueba',
    archetype: 'El Racionalista Soberbio / El Perro Guardián a la Puerta del Rey',
    booksPresent: 'Libros I, II, IV y V (Págs. 37, 49, 66–67, 129, 156)',
    pdfPages: [37, 49, 66, 129, 156],
    motivation:
      'Movido por la envidia hacia Adán (por ver en Adán sólo barro y no el espíritu oculto) y por la soberbia intelectual («Yo soy mejor que él»), busca arrastrar a los hombres mediante las trampas de la codicia, el orgullo y la excusa fatalista.',
    developmentArc:
      'En el Libro I y IV representa el pecado del determinismo hipócrita que culpa a Dios de su propia rebeldía («Tú me hiciste errar»); en el Libro II (ante Mu\'awiya) despliega su brillante sofistería teológica pero termina desenmascarado; y en el Libro V aparece como el perro en la tienda del Turcomano: feroz con los extraños pero instrumento involuntario que obliga a los fieles a refugiarse en Dios.',
    keyRelationships:
      'Antagonista arquetípico de Adán y de los santos, pero subordinado siempre al decreto de Dios como piedra de toque que separa el oro puro de la moneda falsa.',
    narrativeImportance:
      'Permite a Rumi desarrollar su psicología profunda del autoengaño humano, mostrando que la agudeza intelectual sin amor ni humildad es de naturaleza satánica.',
    signatureQuoteEs:
      '«El fallo de Iblis consistió en decir "Yo soy mejor que él", y esta misma debilidad acecha en el alma de todas las criaturas» (Libro I, pág. 37).'
  },
  {
    id: 'char-three-princes',
    name: 'Los Tres Príncipes y el Rey de China',
    roleTitle: 'Los Tres Grados del Buscador en el Viaje Final',
    archetype: 'Los Peregrinos del Amor hacia la Belleza Inefable',
    booksPresent: 'Libro VI (Págs. 206–214)',
    pdfPages: [206, 208, 210, 212, 214],
    motivation:
      'Cautivados por el retrato prohibido de la Princesa de China, abandonan su patria y su rango real para cruzar el desierto en busca de la unión con la Belleza.',
    developmentArc:
      'El hermano mayor, consumido por la espera, se arroja a los pies del Rey de China y muere a su cuerpo, alcanzando la unión espiritual directa sin velos; el segundo hermano recibe gracias espirituales pero se hincha de arrogancia como Nimrod y muere herido por la flecha del Rey, aunque arrepentido; el hermano menor, el más humilde y débil, triunfa donde los otros fallaron, alcanzando tanto a la novia como al Amado Espiritual.',
    keyRelationships:
      'Su padre inicial les advierte del peligro de las formas; el Rey de China resulta ser el verdadero Amado Espiritual oculto tras el retrato de su hija.',
    narrativeImportance:
      'Cierra los seis libros del Masnavi, conduciendo toda la obra desde el lamento inicial de la flauta de caña en el Libro I hasta el silencio místico de la unión consumada en el Libro VI.',
    signatureQuoteEs:
      '«Me he desnudado del cuerpo y de sus ilusiones; soy admitido en la unión más íntima... Aquí el discurso, como un camello, se detiene en el camino; el resto se dice sin ayuda de lengua al corazón cuyo espíritu está vivo» (Libro VI, págs. 213–214).'
  }
];

export const PLOT_STRUCTURE_ANALYSIS: PlotStageItem[] = [
  {
    stageNumber: 'I',
    stageTitleEs: 'Conflicto Central (Exposición)',
    stageTitleEn: 'Central Conflict: The Soul\'s Exile & The Veil of Selfhood',
    booksSpan: 'Libro I (Prólogo e Historias 1–4)',
    pdfPages: [5, 6, 9, 10],
    macroSpiritualMovement:
      'El espíritu humano, de origen divino y luminoso, se encuentra cautivo en el mundo material de «tierra y agua» (la jaula corporal) y cegado por el velo del ego (Nafs), la codicia y las apariencias engañosas.',
    narrativeManifestations: [
      'La flauta de caña (Ney) llora por haber sido cortada de su cañaveral primordial (pág. 5).',
      'La doncella del Príncipe enferma por apegarse a la belleza pasajera del orfebre de Samarcanda (pág. 6).',
      'La cristiandad cae dividida en doce sectas antagónicas por la astucia del visir judío al carecer de discernimiento interior (pág. 10).'
    ],
    philosophicalCulmination:
      'Se plantea el dilema fundamental de la obra: ¿cómo puede el alma limpiar la herrumbre de su espejo y regresar a la unión con Dios sin perderse en las trampas de la forma externa y del egoísmo?'
  },
  {
    stageNumber: 'II',
    stageTitleEs: 'Acción Ascendente (Las Pruebas del Discernimiento)',
    stageTitleEn: 'Rising Action: Stripping Away Illusions, Taqlid & Partial Reason',
    booksSpan: 'Libros I (Historias 5–16), II y III',
    pdfPages: [15, 22, 38, 45, 58, 85, 107],
    macroSpiritualMovement:
      'El buscador emprende el viaje interior bajo la dirección de los profetas y del Guía espiritual (Pir), enfrentando los obstáculos progresivos que engañan al alma: la imitación ciega (Taqlid), el orgullo erudito, el fatalismo pasivo y la estrechez de los sentidos.',
    narrativeManifestations: [
      'La liebre vence al león arrogante y el loro del mercader aprende a «morir antes de morir» para salir de su jaula (Libro I).',
      'Los artistas griegos demuestran que bruñir el corazón supera a los mil pigmentos de la erudición china (Libro I), y Moisés aprende del Pastor que Dios busca un corazón ardiente más allá de las formas verbales (Libro II).',
      'La parábola del Elefante en la Habitación Oscura desnuda la ceguera de la opinión parcial, mientras el Vakil de Bujará arriesga su vida por amor a su Príncipe, revelando la ley de la evolución ascendente del alma (Libro III).'
    ],
    philosophicalCulmination:
      'El peregrino comprende que la razón calculadora (Aql-i Juz\'i) sólo ve sombras y fragmentos, y que el sufrimiento y la tribulación son el fuego del cocinero que purifica al alma para hacerla digna del Rey.'
  },
  {
    stageNumber: 'III',
    stageTitleEs: 'Clímax (La Confrontación con el Ego y la «Guerra Mayor»)',
    stageTitleEn: 'Climax: The Greater Warfare, Ecstatic Annihilation & The Hidden Treasure',
    booksSpan: 'Libros IV y V',
    pdfPages: [121, 132, 136, 149, 153, 164, 180],
    macroSpiritualMovement:
      'El enfrentamiento alcanza su máxima tensión dramática y metafísica: la lucha a muerte entre la Razón Universal (Moisés, Salomón, Bayazid, Ayaz) y la soberbia del «yo» separatista (Faraón, Hamán, Iblis y las cuatro aves de las pasiones carnales).',
    narrativeManifestations: [
      'Bilqis renuncia al oro y al trono de Saba para acudir humildemente al Templo espiritual de Salomón, e Ibrahim bin Adham abdica de su reino (Libro IV).',
      'Bayazid de Bastam alcanza la aniquilación total (Fanā\'): cuando sus discípulos acuchillan su cuerpo durante su éxtasis, las dagas se vuelven contra los atacantes porque Bayazid ya es un espejo puro sin ego (Libro IV, pág. 133).',
      'Moisés y el Faraón sostienen su gran debate final sobre el Tesoro Oculto (Libro IV), mientras en el Libro V se libra la «Guerra Mayor» (el sacrificio de las cuatro aves de Abraham), Nasuh muere de contrición sincera y Ayaz pulveriza la joya real en obediencia amorosa absoluta al Sultán Mahmud (pág. 180).'
    ],
    philosophicalCulmination:
      'El «yo» de piedra del egoísmo queda quebrantado y transmutado en el rubí luminoso donde el amante y el Amado son una sola luz («En mi ser no queda nada fuera de Ti»).'
  },
  {
    stageNumber: 'IV',
    stageTitleEs: 'Acción Descendente (El Retorno a la Cercanía y la Humildad)',
    stageTitleEn: 'Falling Action: The Treasure Nearer Than the Neck-Vein',
    booksSpan: 'Libro VI (Prólogo e Historias 1–8)',
    pdfPages: [182, 187, 192, 196, 200],
    macroSpiritualMovement:
      'Superada la soberbia especulativa y la rebeldía del ego, el alma descubre que aquello que buscaba en lejanías filosóficas estaba desde el principio en su propio interior, «más cerca que su vena yugular».',
    narrativeManifestations: [
      'El juglar del Emir turco entona la canción del «No sé», mostrando que la extrema cercanía de Dios actúa como un velo para el intelecto (pág. 187).',
      'El Faquir deja de tensar con fuerza el arco de la especulación y dispara suavemente para encontrar el tesoro enterrado justo a sus pies (pág. 196).',
      'El viajero musulmán que vela en ayuno y humildad recibe despierta la dulzura divina mientras los eruditos sólo sueñan con ella (pág. 200), y el soñador de Bagdad regresa de Egipto para desenterrar el tesoro en su propia casa (pág. 211).'
    ],
    philosophicalCulmination:
      'La búsqueda exterior cesa; el arquero depone su fuerza y el buscador se prepara para cruzar el umbral final donde terminan los símbolos.'
  },
  {
    stageNumber: 'V',
    stageTitleEs: 'Resolución (La Unión sin Velos y el Silencio del Mar de la Unidad)',
    stageTitleEn: 'Resolution: Union Beyond Form & The Ineffable Silence',
    booksSpan: 'Libro VI (Historia 9: Los Tres Príncipes y Epílogo de Sultan Valad)',
    pdfPages: [206, 212, 213, 214],
    macroSpiritualMovement:
      'El Masnavi se cierra regresando al motivo inicial del anhelo amoroso, pero ahora consumado en la Unión (Wahdat): las formas, las letras y las palabras se disuelven como espuma en el Océano de la Unidad, dando paso al Silencio sagrado.',
    narrativeManifestations: [
      'El príncipe mayor, tras contemplar al Rey de China, muere a la forma terrenal de la princesa y abraza sin velos al Amado Espiritual (pág. 212).',
      'El tercer príncipe, el más débil y humilde de los hermanos, alcanza la plenitud de la unión tanto en el espíritu como en la manifestación (pág. 214).',
      'Rumi detiene la pluma antes de concluir la letra exterior del relato, proclamando que el barco para navegar en el Mar de la Verdad es el Silencio.'
    ],
    philosophicalCulmination:
      '«Cuando el Masnavi se purga de letras y palabras, deja caer todo ello y aparece como el Mar de la Unidad: entonces el que habla, el que escucha y las palabras pronunciadas entregan el espíritu en esa consumación» (pág. 182, 213–214).'
  }
];

export const POETIC_AUDIOBOOK_CHAPTERS: AudiobookChapter[] = [
  {
    id: 'audio-ch1-prologue',
    bookNumber: 1,
    titleEs: 'Capítulo I · El Canto de la Flauta de Caña (Ney-Nāma)',
    subtitleEs: 'Prólogo del Libro I (Págs. 5–6) · Recitación Poética Íntegra',
    pdfPage: 5,
    durationEstimate: '2 min 45 s',
    voiceStylePrompt:
      'Acento Español de España (Castellano peninsular, es-ES, pronunciación de Castilla/Madrid con distinción clara de z/c y s). Voz masculina profunda de barítono recitando poesía mística sufí con cadencia pausada, solemne y emotiva.',
    introNarrativeEs:
      'Libro Primero del Masnavi-i Ma\'navi de Jalalu-\'d-Din Rumi. Prólogo: El lamento de la flauta de caña.',
    poeticVersesEs: [
      'Escucha a la flauta de caña cómo se queja, lamentando su destierro del cañaveral:',
      '«Desde que me cortaron de mi lecho de juncos, mis notas quejumbrosas han movido a hombres y mujeres hasta las lágrimas.',
      'Desgarro mi pecho esforzándome por dar salida a los suspiros, y por expresar las punzadas de mi anhelo por mi hogar.',
      'Quien habita lejos de su origen, suspira siempre por el día en que habrá de regresar.',
      'Mi lamento se escucha en toda asamblea, en concierto con los que se regocijan y con los que lloran.',
      'Cada cual interpreta mis notas en armonía con sus propios sentimientos, pero ninguno sondea los secretos de mi corazón.',
      'Mis secretos no son ajenos a mis notas quejumbrosas, mas no se manifiestan al ojo ni al oído sensual.',
      'El cuerpo no está velado del alma, ni el alma del cuerpo; sin embargo, ningún hombre ha visto jamás un alma».',
      'Este clamor de la flauta es fuego, no mero viento: ¡que quien carezca de este fuego sea contado por muerto!',
      'Es el fuego del Amor lo que inspira a la flauta; es el fermento del Amor lo que posee al vino.',
      'La flauta es la confidente de todos los amantes desdichados; sí, sus acordes desnudan mis secretos más íntimos.',
      '¿Quién ha visto un veneno y un antídoto como la flauta? ¿Quién ha visto un consolador tan compasivo como la flauta?',
      '¡Levántate, oh hijo! ¡Rompe tus cadenas y sé libre! ¿Hasta cuándo serás cautivo de la plata y del oro?',
      'Aunque viertas el océano entero en tu cántaro, no podrá contener más que la provisión de un solo día.',
      '¡Salve a ti, entonces, oh Amor, dulce locura! ¡Tú que sanas todas nuestras dolencias!',
      '¡Tú que eres el médico de nuestro orgullo y presunción! ¡Tú que eres nuestro Platón y nuestro Galeno!',
      'El Amado es todo en todo, el amante sólo Lo vela; el Amado es todo lo que vive, el amante una cosa muerta.',
      '¿Sabes por qué tu espejo no refleja la luz? Porque la herrumbre no ha sido limpiada de su faz.',
      'Si fuera purificado de toda herrumbre y mancha, reflejaría el resplandor del Sol de Dios.'
    ],
    poeticVersesEn: [
      'HEARKEN to the reed-flute, how it complains, Lamenting its banishment from its home:',
      '"Ever since they tore me from my osier bed, My plaintive notes have moved men and women to tears.',
      'I burst my breast, striving to give vent to sighs, And to express the pangs of my yearning for my home.',
      'He who abides far away from his home Is ever longing for the day he shall return.',
      'My secrets are not alien from my plaintive notes, Yet they are not manifest to the sensual eye and ear."',
      'This plaint of the flute is fire, not mere air. Let him who lacks this fire be accounted dead!',
      '\'Tis the fire of love that inspires the flute, \'Tis the ferment of love that possesses the wine.',
      'Arise, O son! burst thy bonds and be free! How long wilt thou be captive to silver and gold?',
      'Hail to thee, then, O LOVE, sweet madness! Thou who healest all our infirmities!',
      'The BELOVED is all in all, the lover only veils Him; The BELOVED is all that lives, the lover a dead thing.',
      'Knowest thou why thy mirror reflects not? Because the rust has not been scoured from its face.'
    ]
  },
  {
    id: 'audio-ch2-love-astrolabe',
    bookNumber: 1,
    titleEs: 'Capítulo II · El Amor como Astrolabio de los Misterios de Dios',
    subtitleEs: 'Libro I, Historia 1 (Pág. 7) y El Amigo a la Puerta (Pág. 36)',
    pdfPage: 7,
    durationEstimate: '2 min 15 s',
    voiceStylePrompt:
      'Acento Español de España (Castellano peninsular, es-ES, con distinción fonética peninsular de z/c y s). Voz masculina cálida, íntima y expresiva recitando versos místicos con pausas reverentes.',
    introNarrativeEs:
      'Medita Rumi sobre la imposibilidad de encerrar el Amor en conceptos racionales y sobre la puerta donde no caben dos «Yoes».',
    poeticVersesEs: [
      'Un verdadero amante se prueba por el dolor de su corazón; no hay enfermedad comparable a la dolencia del corazón.',
      'La dolencia del amante es distinta de todas las dolencias: el Amor es el astrolabio de los misterios de Dios.',
      'Por mucho que describamos y expliquemos el Amor, cuando nos enamoramos nos avergonzamos de nuestras palabras.',
      'La explicación con la lengua aclara la mayoría de las cosas, pero el Amor sin explicar es mucho más claro.',
      'Cuando el cálamo se apresuró a escribir, al llegar al tema del Amor se partió en dos.',
      'Al explicarlo, la Razón se atasca como un asno en el lodo; ¡nada sino el Amor mismo puede explicar el amor y a los amantes!',
      'Nadie sino el sol puede mostrar al sol; si deseas verlo manifestado, no apartes de él tu rostro.',
      'Las sombras, en verdad, pueden indicar la presencia del sol, pero sólo el sol despliega la luz de la vida.',
      'Un hombre llegó una vez y llamó a la puerta de su Amigo. Su Amigo preguntó: «¿Quién eres tú, oh fiel?»',
      'Él respondió: «Soy yo». El Amigo contestó: «No hay entrada; no hay lugar para el "crudo" en mi banquete bien cocido.',
      '¡Nada sino el fuego de la separación y la ausencia puede cocer al crudo y librarlo de la hipocresía!»',
      'El pobre hombre se marchó y durante un año entero viajó ardiendo en dolor por la ausencia de su Amigo.',
      'Su corazón ardió hasta quedar cocido; entonces regresó y llamó de nuevo a la puerta con temor y reverencia.',
      'Su Amigo exclamó: «¿Quién está a la puerta?». Y él respondió: «¡Eres Tú quien está a la puerta, oh Amado!».',
      'Dijo el Amigo: «Puesto que eres Yo, entra ahora; no hay lugar para dos "Yoes" en una misma casa».'
    ],
    poeticVersesEn: [
      'A true lover is proved such by his pain of heart; No sickness is there like sickness of heart.',
      'The lover\'s ailment is different from all ailments; Love is the astrolabe of God\'s mysteries.',
      'When pen hasted to write, On reaching the subject of love it split in twain.',
      'In explaining it Reason sticks fast, as an ass in mire; Naught but Love itself can explain love and lovers!',
      'His friend shouted, "Who is that at the door?" He answered, "\'Tis Thou who art at the door, O Beloved!"',
      'The friend said, "Since \'tis I, let me come in, There is not room for two \'I\'s\' in one house."'
    ]
  },
  {
    id: 'audio-ch3-moses-shepherd',
    bookNumber: 2,
    titleEs: 'Capítulo III · Moisés y el Pastor: La Religión del Corazón Ardiente',
    subtitleEs: 'Libro II, Historia 6 y 7 (Págs. 57–59)',
    pdfPage: 58,
    durationEstimate: '2 min 30 s',
    voiceStylePrompt:
      'Acento Español de España (Castellano peninsular, es-ES, con distinción clara de z/c y s). Voz masculina solemne, compasiva y lírica recitando la poesía de Rumi con ritmo musical.',
    introNarrativeEs:
      'Por el poder del Amor todo veneno se transforma en miel, y Dios revela a Moisés que no busca palabras elocuentes, sino un corazón en llamas.',
    poeticVersesEs: [
      'Por el amor las cosas amargas parecen dulces; por el amor las piezas de cobre se convierten en oro.',
      'Por el amor las heces saben a vino puro; por el amor los dolores son bálsamos curativos.',
      'Por el amor las espinas se vuelven rosas, y por el amor el vinagre se convierte en vino dulce.',
      'Por el amor el patíbulo se vuelve un trono, y la prisión parece una glorieta de rosas.',
      'Por el amor la dura piedra se vuelve suave como mantequilla; sin amor la cera blanda se vuelve hierro duro.',
      'Por el amor los muertos se levantan a la vida, y por el amor el rey se convierte en humilde esclavo.',
      'Una voz descendió de Dios hacia Moisés: «¿Por qué has alejado de Mí a Mi siervo el pastor?',
      'Tú has venido para unir a los hombres Conmigo, no para apartarlos lejos de Mí.',
      'Yo no me purifico con sus alabanzas; son ellos quienes se vuelven puros y resplandecientes al alabarme.',
      'No miro el exterior ni las palabras; miro el interior y el estado del corazón.',
      'Miro al corazón por ver si es humilde, aunque las palabras parezcan lo contrario de la humildad.',
      '¿Hasta cuándo te detendrás en las frases y superficialidades? ¡Un corazón ardiente es lo que quiero; únete al ardor!',
      'Enciende en tu pecho la llama del Amor, y quema por completo los pensamientos y las bellas expresiones.',
      'La comunidad de los amantes es distinta de todas las demás: ¡los amantes tienen una religión y una fe propias!»'
    ],
    poeticVersesEn: [
      'Through love bitter things seem sweet, Through love bits of copper are made gold.',
      'Through love thorns become roses, And through love vinegar becomes sweet wine.',
      'Through love the dead rise to life, Through love the king becomes a slave.',
      'I regard not the outside and the words, I regard the inside and the state of heart.',
      'A burning heart is what I want; consort with burning! Kindle in thy heart the flame of love.',
      'The sect of lovers is distinct from all others, Lovers have a religion and a faith of their own.'
    ]
  },
  {
    id: 'audio-ch4-evolution-soul',
    bookNumber: 3,
    titleEs: 'Capítulo IV · La Escalera Cósmica del Alma y el Mar Oculto',
    subtitleEs: 'Libro III, Historias 5 y 17 (Págs. 85, 109–110)',
    pdfPage: 109,
    durationEstimate: '2 min 20 s',
    voiceStylePrompt:
      'Acento Español de España (Castellano peninsular, es-ES, con distinción fonética de z/c y s). Voz masculina majestuosa y contemplativa de barítono recitando poesía filosófica con asombro y cadencia medida.',
    introNarrativeEs:
      'Desde la parábola del elefante en la oscuridad hasta el gran himno de la ascensión del espíritu a través de la muerte.',
    poeticVersesEs: [
      'El ojo del sentido externo es como la palma de una mano: la totalidad del objeto no cabe en la palma.',
      'El mar en sí mismo es una cosa, la espuma otra; deja a un lado la espuma y contempla el mar con tus ojos.',
      '¡Oh tú que duermes en la barca del cuerpo! Ves el agua, mas contempla el Agua de las aguas.',
      'Bajo el agua que ves hay otra Agua que la mueve; dentro del espíritu hay un Espíritu que lo llama.',
      'Morí como materia inanimada y surgí como planta; morí como planta y me alcé de nuevo como animal.',
      'Morí como animal y surgí como hombre: ¿por qué entonces habría de temer volverme menos al morir?',
      '¡Moriré una vez más como hombre, para elevarme como un ángel perfecto de pies a cabeza!',
      'Y de nuevo, cuando sufra disolución como ángel, ¡me convertiré en aquello que sobrepasa la concepción del hombre!',
      'Déjame entonces volverme no-existente, pues el No-ser me canta con voces de órgano: «En verdad, a Él habremos de volver».',
      'Contempla el agua en un cántaro; viértela en el río: ¿acaso huirá esa agua de la corriente?',
      'Cuando esa agua se une al agua del río, se pierde en él y se convierte ella misma en el río:',
      'Su individualidad se pierde, pero su esencia permanece, y con ello no se vuelve menor ni inferior.',
      'Ningún amante busca jamás la unión con su Amado, sin que su Amado esté buscando también la unión con él.',
      'El hombre sediento clama: «¿Dónde está el agua deliciosa?». Y el agua también clama: «¿Dónde está el bebedor de agua?».'
    ],
    poeticVersesEn: [
      'The eye of outward sense is as the palm of a hand, The whole of the object is not grasped in the palm.',
      'I died as inanimate matter and arose a plant, I died as a plant and rose again an animal.',
      'I died as an animal and arose a man. Why then should I fear to become less by dying?',
      'I shall die once again as a man To rise an angel perfect from head to foot!',
      'Again when I suffer dissolution as an angel, I shall become what passes the conception of man!',
      'No lover ever seeks union with his beloved, But his beloved is also seeking union with him.'
    ]
  },
  {
    id: 'audio-ch5-hidden-treasure',
    bookNumber: 4,
    titleEs: 'Capítulo V · El Tesoro Oculto y el Espejo de Bayazid',
    subtitleEs: 'Libro IV, Historias 2, 4 y 6 (Págs. 122, 133, 138)',
    pdfPage: 138,
    durationEstimate: '2 min 10 s',
    voiceStylePrompt:
      'Acento Español de España (Castellano peninsular, es-ES, con distinción clara de z/c y s). Voz masculina profunda, serena y meditativa con dicción clásica peninsular.',
    introNarrativeEs:
      'En el Libro Cuarto, Rumi revela que el hombre es el macrocosmos espiritual y nos exhorta a demoler la casa del ego para desenterrar el Tesoro Oculto.',
    poeticVersesEs: [
      'Aunque los filósofos llaman al hombre el microcosmos, los sabios divinos lo llaman el macrocosmos.',
      'En forma externa eres el microcosmos, pero en realidad eres el macrocosmos.',
      'Aparentemente la rama es la causa del fruto, pero en verdad la rama existe por causa del fruto.',
      'Si no estuviera impulsado por el deseo del fruto, jamás habría plantado el jardinero el árbol.',
      'Por tanto, en realidad el árbol nace del fruto, aunque en apariencia el fruto nazca del árbol.',
      'Destruye tu casa ruinosa, y con el tesoro oculto bajo ella podrás edificar miles de mansiones.',
      'El tesoro yace debajo de ella, no hay otro remedio: ¡no dudes en derribarla, no te demores!',
      'Has tomado esta casa del cuerpo en alquiler; no es propiedad tuya para comprarla ni venderla.',
      'En cuanto al plazo del contrato, dura hasta tu muerte: en ese plazo tienes que hacerla fructificar.',
      'Quien se halla fuera de sí en Dios está aniquilado y a salvo; sí, habita en seguridad para siempre.',
      'Su forma se ha desvanecido, es un mero espejo: nada se ve en él sino el reflejo de otro.',
      'Si escupes hacia él, escupes a tu propio rostro; y si golpeas ese espejo, te golpeas a ti mismo.',
      'Vende tu astucia y compra el asombro místico; la astucia es mera opinión, el asombro es intuición.'
    ],
    poeticVersesEn: [
      'In outward form thou art the microcosm, But in reality the macrocosm.',
      'Therefore in reality the tree is born from the fruit, Though seemingly the fruit is born from the tree.',
      'Destroy your house, and with the treasure hidden in it You will be able to build thousands of houses.',
      'His form is vanished, he is a mere mirror; Nothing is seen in him but the reflection of another.',
      'Sell your cleverness and buy bewilderment; Cleverness is mere opinion, bewilderment intuition.'
    ]
  },
  {
    id: 'audio-ch6-silence-unity',
    bookNumber: 6,
    titleEs: 'Capítulo VI · El Rubí en el Sol y el Silencio del Mar de la Unidad',
    subtitleEs: 'Libro V (Pág. 165) y Libro VI (Págs. 182, 199, 213–214)',
    pdfPage: 213,
    durationEstimate: '2 min 35 s',
    voiceStylePrompt:
      'Acento Español de España (Castellano peninsular, es-ES, con distinción fonética de z/c y s). Voz masculina profunda, íntima y trascendente de barítono recitando los versos finales en calma sagrada.',
    introNarrativeEs:
      'Canto final del Masnavi: la transmutación de la piedra en rubí, el tesoro más cercano que la vena yugular y la llegada al Silencio donde calla toda palabra.',
    poeticVersesEs: [
      'Una amada preguntó a su amante una mañana para probarlo: «Dime en verdad, ¿me amas más a mí o a ti mismo?».',
      'Él respondió: «Estoy tan enteramente absorbido en ti, que estoy lleno de ti de pies a cabeza.',
      'De mi propia existencia nada sino el nombre permanece; en mi ser no hay nada fuera de ti, ¡oh Objeto de mi deseo!',
      'Así me he perdido en ti como el vinagre se disuelve en la miel, o como una piedra que, transformada en puro rubí, se llena de la brillante luz del sol.',
      'En esa piedra ya no habitan sus propias cualidades oscuras: está colmada por completo de las propiedades del sol.',
      'Por eso el Faraón dijo "Yo soy la Verdad" y fue abatido; Mansur Hallaj dijo "Yo soy la Verdad" y fue salvado: porque el Faraón era una piedra oscura, y Mansur un rubí lleno de luz».',
      'Dios está más cerca de ti que tu propia vena yugular, mas tú has disparado la flecha de la especulación demasiado lejos.',
      '¡Oh tú que has preparado tu arco y tus flechas! La presa está junto a ti, y disparas demasiado lejos.',
      'Cuanto más lejos dispara el hombre, más lejos se halla y más apartado está del tesoro que busca.',
      'Abandona la fuerza del orgullo y busca el tesoro con humildad; despoja tu alma del intelecto presuntuoso para que la gracia descienda sobre ti.',
      'Así, cuando el Masnavi se purga de letras y palabras, deja caer todo ello y aparece como el Mar de la Unidad.',
      'Puedes cabalgar en silla y caballo hasta la orilla del mar, pero luego debes usar un corcel de madera, que es la barca.',
      'El Silencio es este corcel de madera; el Silencio es la guía y el sostén de los navegantes en el mar.',
      'Aquí el discurso, como un camello, se detiene en su camino: no diré nada más, sino que guardaré mi lengua de hablar.',
      'El resto se dice sin ayuda de lengua al corazón de aquel cuyo espíritu está vivo.'
    ],
    poeticVersesEn: [
      'Of my own existence nothing but the name remains; In my being is nothing besides you, O Object of desire!',
      'Or as a stone, which is changed into a pure ruby, Is filled with the bright light of the sun.',
      'Because Pharaoh was a stone, Mansur a ruby; Pharaoh an enemy of light, Mansur a friend.',
      'God is "what is nearer to you than your neck-vein," You have cast the arrow of speculation afar off.',
      'So, when the Masnavi is purged of letters and words, It drops all these, and appears as the sea of Unity.',
      'Silence is this horse of wood, Silence is the guide and support of men at sea.',
      'The rest is told without aid of tongue To the heart of him whose spirit is alive.'
    ]
  }
];
