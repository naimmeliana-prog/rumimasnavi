export interface StoryItem {
  id: string;
  bookNumber: number;
  storyNumber: number;
  titleEs: string;
  titleEn: string;
  pdfPage: number;
  themeKey: 'amor' | 'ego' | 'forma' | 'albedrio' | 'corazon';
  themeLabel: string;
  synopsis: string;
  mysticalMoral: string;
  keyQuoteEn: string;
  keyQuoteEs: string;
  keyFigures: string[];
}

export interface BookSummary {
  number: number;
  titleEs: string;
  subtitleEs: string;
  pdfStartPage: number;
  pdfEndPage: number;
  storyCount: number;
  historicalContext: string;
  coreThesis: string;
  philosophicalArc: string[];
  emblematicQuoteEn: string;
  emblematicQuoteEs: string;
}

export interface PhilosophicalPillar {
  id: string;
  termPersian: string;
  titleEs: string;
  subtitleEn: string;
  definition: string;
  masnaviApplication: string;
  canonicalReference: string;
  relatedStories: string[];
}

export const WORK_METADATA = {
  title: "Masnavi-i Ma'navi",
  subtitle: "Pareados Espirituales de Jalalu-'d-Din Rumi",
  translator: "E. H. Whinfield (Edición de 1898 · Global Grey 2025)",
  totalBooks: 6,
  totalStories: 82,
  totalPagesPdf: 215,
  compositionYear: "662 H. (c. 1263–1273 d.C.)",
  dedicatee: "Husamu-'d-Din Chalabi",
  inspiration: "Shamsu-'d-Din de Tabriz",
  pdfPath: "/assets/aistudio/rumi_masnavi-i-manavi_bd5065a0.pdf"
};

export const EXECUTIVE_OVERVIEW = {
  leadParagraph:
    "El Masnavi-i Ma'navi («Pareados de Significado Espiritual») es la obra cumbre del poeta y místico persa Jalalu-'d-Din Rumi (1207–1273) y uno de los monumentos literarios y metafísicos más influyentes de la humanidad. La edición contenida en este documento corresponde a la célebre traducción abreviada y comentada al inglés de E. H. Whinfield (publicada originalmente en 1898), que condensa los seis libros (daftars) combinando resúmenes en prosa de las fábulas narrativas con la traducción en verso de los discursos teológicos y líricos de Rumi.",
  architectureParagraph:
    "A diferencia de un tratado sistemático, el Masnavi opera como un tejido vivo de relatos entrelazados —tomados del folclore persa, el Corán, las tradiciones proféticas (Hadices), el Kalila wa-Dimna y la vida cotidiana de derviches y reyes— donde cada historia se interrumpe constantemente con digresiones místicas. Rumi advierte explícitamente al lector que no se detenga en la «forma externa» (Surat) de los cuentos, sino que busque la «esencia espiritual» (Ma'na): el viaje del alma humana desde su exilio en el mundo material de regreso a la unión extática con su Creador.",
  apocryphalNote:
    "El documento concluye en la página 215 con una nota erudita sobre los suplementos apócrifos al Masnavi: explica por qué el Libro VI queda inconcluso en la historia del tercer príncipe (completada brevemente por su hijo Bahau-'d-Din Sultan Valad) y refuta la autenticidad de un supuesto «Séptimo Libro» incluido en la edición de Bulaq por Ismail Dadah."
};

export const BOOKS_DATA: BookSummary[] = [
  {
    number: 1,
    titleEs: "Libro I — El Lamento de la Caña y la Alquimia del Amor",
    subtitleEs: "Prólogo de la Flauta de Caña (Ney), Shams de Tabriz y 16 Historias Fundacionales",
    pdfStartPage: 5,
    pdfEndPage: 44,
    storyCount: 16,
    historicalContext:
      "Iniciado a instancias de su discípulo predilecto Husamu-'d-Din y bajo la huella ardiente de Shams de Tabriz («El Sol de Tabriz»). Abre con la célebre 'Canción de la Caña' (pág. 5), manifiesto poético de toda la literatura sufí.",
    coreThesis:
      "El alma humana es como la caña arrancada de su cañaveral primordial: toda su música y su dolor nacen de la nostalgia por regresar a Dios. Para lograr la unión con el Amado es indispensable aniquilar el ego ('yo' fenoménico), pulir el espejo del corazón y someterse a la guía de un Maestro espiritual (Pir).",
    philosophicalArc: [
      "El Amor ('Ishq) como médico de nuestro orgullo y astrolabio de los misterios divinos.",
      "La distinción entre causas secundarias (instrumentos materiales) y la Primera Causa (Dios como Único Agente Real / Fa'il-i Haqiqi).",
      "El equilibrio entre la confianza en la Providencia (Tawakkul) y el esfuerzo humano responsable.",
      "La superioridad del conocimiento del corazón (purificación interior de los artistas griegos) frente a la erudición libresca (artistas chinos)."
    ],
    emblematicQuoteEn: "The BELOVED is all in all, the lover only veils Him; The BELOVED is all that lives, the lover a dead thing.",
    emblematicQuoteEs: "El AMADO es todo en todo, el amante sólo Lo vela; el AMADO es todo lo que vive, el amante una cosa muerta."
  },
  {
    number: 2,
    titleEs: "Libro II — El Espejo de la Verdad y la Superación de las Formas",
    subtitleEs: "Retomado en el año 662 de la Hégira · 18 Historias sobre Discernimiento e Interioridad",
    pdfStartPage: 45,
    pdfEndPage: 77,
    storyCount: 18,
    historicalContext:
      "La composición de este segundo libro se retrasó un tiempo debido al luto de Husamu-'d-Din por la muerte de su esposa (pág. 45). Rumi explica que 'se necesita tiempo para que la sangre se convierta en leche'.",
    coreThesis:
      "La imitación ciega (Taqlid) y la codicia nublan el juicio espiritual. Dios no mira la elocuencia verbal ni las formas rituales externas, sino la humildad y el ardor del corazón. Las diferencias sectarias y doctrinales nacen de aferrarse a los nombres en lugar de la Esencia.",
    philosophicalArc: [
      "Crítica del Taqlid (repetición mecánica e imitativa de frases o estados ajenos sin experiencia interior).",
      "Indiferencia de las formas externas frente a la sinceridad del corazón (Moisés y el Pastor).",
      "El valor espiritual de la adversidad, el dolor y los suspiros de contrición (Mu'awiya e Iblis).",
      "La unidad esencial bajo la diversidad de lenguajes (los cuatro viajeros que disputan por las uvas)."
    ],
    emblematicQuoteEn: "I regard not the outside and the words, I regard the inside and the state of heart.",
    emblematicQuoteEs: "No miro el exterior ni las palabras; miro el interior y el estado del corazón."
  },
  {
    number: 3,
    titleEs: "Libro III — La Percepción Parcial frente al Océano de la Certeza",
    subtitleEs: "18 Historias sobre Epistemología Mística, Destino y Entrega Absoluta",
    pdfStartPage: 78,
    pdfEndPage: 117,
    storyCount: 18,
    historicalContext:
      "Expande la psicología del deseo humano y la teoría del conocimiento místico, contraponiendo la opinión vacilante (Zann) a la visión directa de la Certeza (Yaqin).",
    coreThesis:
      "El ojo sensual sólo percibe fragmentos aislados de la realidad (como quienes palpan un elefante en la oscuridad). El verdadero místico no se enamora siquiera de sus propios éxtasis subjetivos, sino que se entrega por completo al Amado, atravesando la muerte del ego como peldaño evolutivo.",
    philosophicalArc: [
      "Limitación de los sentidos y de la razón discursiva (El elefante en el cuarto oscuro).",
      "Peligro de amar las propias emociones religiosas en lugar de amar a Dios mismo (El amante que leía sonetos a su amada).",
      "La escala evolutiva del alma: de mineral a planta, de planta a animal, de animal a hombre, y de hombre a ángel e infinito.",
      "Los siete niveles de sentido ocultos bajo la letra aparente del Corán y del Masnavi."
    ],
    emblematicQuoteEn: "I died as inanimate matter and arose a plant, I died as a plant and rose again an animal. I died as an animal and arose a man. Why then should I fear to become less by dying?",
    emblematicQuoteEs: "Morí como materia inanimada y surgí como planta; morí como planta y me alcé animal. Morí como animal y surgí hombre. ¿Por qué habría de temer volverme menos al morir?"
  },
  {
    number: 4,
    titleEs: "Libro IV — La Razón Universal y el Tesoro Oculto",
    subtitleEs: "9 Extensas Historias sobre Salomón, Bilqis, Moisés, Faraón y Bayazid",
    pdfStartPage: 118,
    pdfEndPage: 148,
    storyCount: 9,
    historicalContext:
      "Dedicado a grandes ciclos narrativos bíblicos y coránicos: el Rey Salomón y la Reina de Saba (Bilqis), la edificación del Templo de Jerusalén y el enfrentamiento dialéctico entre Moisés y el Faraón.",
    coreThesis:
      "Aunque en su forma externa el ser humano parece el microcosmos, en su realidad espiritual es el macrocosmos (la fruta por la cual fue plantado el árbol del universo). La creación entera existe para manifestar el 'Tesoro Oculto' divino, que sólo se descubre demoliendo la casa ruinosa del ego.",
    philosophicalArc: [
      "Relatividad del mal en el mundo: hasta el veneno o la adversidad sirven al propósito del Bien Supremo.",
      "Desprendimiento de la riqueza mundana frente al reino espiritual (Salomón rechaza el oro de Bilqis).",
      "El éxtasis teopático (Shathiyat) de Bayazid Bastami como espejo puro donde el 'yo' humano ha desaparecido.",
      "Los tres grados de inteligencia ante el peligro espiritual (la fábula de los tres peces)."
    ],
    emblematicQuoteEn: "In outward form thou art the microcosm, But in reality the macrocosm. Seemingly the bough is the cause of the fruit, But really the bough exists because of the fruit.",
    emblematicQuoteEs: "En forma externa eres el microcosmos, pero en realidad eres el macrocosmos. Aparentemente la rama es causa del fruto, pero en verdad la rama existe por causa del fruto."
  },
  {
    number: 5,
    titleEs: "Libro V — La Guerra Mayor, la Prueba Moral y el Arrepentimiento Sincero",
    subtitleEs: "13 Historias sobre las Cuatro Aves de Abraham, Mahmud y Ayaz, y la Libertad Moral",
    pdfStartPage: 149,
    pdfEndPage: 181,
    storyCount: 13,
    historicalContext:
      "Estructura sus enseñanzas en torno al mandato coránico a Abraham de sacrificar cuatro aves que simbolizan las cuatro pasiones capitales del alma carnal (Nafs).",
    coreThesis:
      "En el Islam espiritual no hay monacato ni mutilación cobarde, sino 'Guerra Mayor' (Jihad al-Akbar): la virtud y la castidad requieren la existencia de la tentación para ser vencidas mediante el amor divino, la humildad (los zapatos viejos de Ayaz) y el arrepentimiento verdadero (Nasuh).",
    philosophicalArc: [
      "Las cuatro aves interiores a sacrificar: el pato de la glotonería, el gallo de la lujuria, el pavo real de la ambición/ostentación y el cuervo de los bajos deseos.",
      "Necesidad de la prueba y la tentación para que exista el mérito moral (El sabio y el pavo real).",
      "Debate filosófico entre el fatalismo (Jabriyan) y el libre albedrío (Qadariyan): sólo el Amor silencia la disputa racional.",
      "La humildad radical de Ayaz, quien contempla sus viejos zapatos y harapos para no olvidar su origen de barro ante el Rey."
    ],
    emblematicQuoteEn: "Where no antagonist, what need is there of armies? Without lust denial of lust is impossible; No man can display bravery against the dead.",
    emblematicQuoteEs: "Donde no hay antagonista, ¿qué necesidad hay de ejércitos? Sin deseo, la renuncia al deseo es imposible; nadie puede mostrar valentía frente a un muerto."
  },
  {
    number: 6,
    titleEs: "Libro VI — El Mar de la Unidad y el Silencio Inefable",
    subtitleEs: "9 Historias Finales sobre la Cercanía de Dios y la Parábola de los Tres Príncipes",
    pdfStartPage: 182,
    pdfEndPage: 215,
    storyCount: 9,
    historicalContext:
      "Último libro compuesto por Rumi antes de su muerte. Se presenta como una antorcha para iluminar 'los seis lados del mundo' y culmina en el silencio místico donde las palabras se quiebran.",
    coreThesis:
      "El valor de cada ser humano reside exclusivamente en el objeto de su aspiración. El tesoro espiritual está 'más cerca de nosotros que nuestra vena yugular', por lo que la especulación filosófica que dispara su flecha demasiado lejos jamás lo alcanza; sólo la humildad y el silencio logran la unión.",
    philosophicalArc: [
      "El crecimiento espiritual ocurre por grados lentos y pacientes, no por saltos bruscos (Hilal y Badr).",
      "El tesoro divino está cerca de casa: el arquero que dispara con orgullo demasiado lejos pierde el blanco (El faquir y el tesoro oculto; el soñador de Bagdad).",
      "La intuición inmediata de la obediencia humilde supera a la especulación teológica (Los tres viajeros: el musulmán, el judío y el cristiano).",
      "El viaje de los tres príncipes hacia la princesa de China: la muerte mística a las formas visibles para abrazar al Rey Espiritual en el silencio."
    ],
    emblematicQuoteEn: "So, when the Masnavi is purged of letters and words, It drops all these, and appears as the sea of Unity.",
    emblematicQuoteEs: "Así, cuando el Masnavi se purga de letras y palabras, deja caer todo ello y aparece como el mar de la Unidad."
  }
];

export const STORIES_CATALOG: StoryItem[] = [
  // LIBRO 1
  {
    id: "b1-prologue",
    bookNumber: 1,
    storyNumber: 0,
    titleEs: "Prólogo: El Canto de la Flauta de Caña (Ney)",
    titleEn: "Prologue: Hearken to the Reed-Flute",
    pdfPage: 5,
    themeKey: "amor",
    themeLabel: "Amor Divino y Nostalgia del Origen",
    synopsis:
      "La flauta de caña (Ney) se lamenta por haber sido cortada de su cañaveral original. Sus notas hacen llorar a hombres y mujeres porque despiertan el dolor de la separación primordial.",
    mysticalMoral:
      "El canto de la caña no es viento, sino fuego de Amor. Sólo quien ha vaciado su interior de egoísmo, como una caña hueca, puede convertirse en instrumento de la melodía de Dios.",
    keyQuoteEn: "This plaint of the flute is fire, not mere air. Let him who lacks this fire be accounted dead!",
    keyQuoteEs: "Este lamento de la flauta es fuego, no mero aire. ¡Que quien carezca de este fuego sea contado por muerto!",
    keyFigures: ["Flauta de Caña (Ney)", "Shams de Tabriz"]
  },
  {
    id: "b1-s1",
    bookNumber: 1,
    storyNumber: 1,
    titleEs: "El Príncipe y la Doncella",
    titleEn: "Story 1. The Prince And The Handmaid",
    pdfPage: 6,
    themeKey: "amor",
    themeLabel: "Amor Divino y Nostalgia del Origen",
    synopsis:
      "Un príncipe compra una hermosa doncella que cae gravemente enferma. Los médicos de la corte fracasan porque olvidan decir 'Si Dios quiere' (Inshallah). Un médico enviado del cielo diagnostica que su mal es amor por un orfebre de Samarcanda. El príncipe los casa, pero seis meses después el médico divino administra un brebaje al orfebre que marchita su belleza exterior, liberando el corazón de la doncella para amar sólo al Rey.",
    mysticalMoral:
      "Los amores efímeros por las formas terrenales son velos pasajeros; cuando la belleza física decae por decreto divino, el alma queda libre para volverse hacia el Rey Eterno.",
    keyQuoteEn: "A true lover is proved such by his pain of heart; No sickness is there like sickness of heart.",
    keyQuoteEs: "El verdadero amante se prueba por el dolor de su corazón; no hay enfermedad comparable a la enfermedad del corazón.",
    keyFigures: ["El Príncipe", "La Doncella", "El Médico Divino", "El Orfebre de Samarcanda"]
  },
  {
    id: "b1-s2",
    bookNumber: 1,
    storyNumber: 2,
    titleEs: "El Aceitero y su Loro",
    titleEn: "Story 2. The Oilman And His Parrot",
    pdfPage: 9,
    themeKey: "forma",
    themeLabel: "Forma Externa vs. Esencia Interior",
    synopsis:
      "Un gato derrama una jarra de aceite en la tienda, pero el aceitero culpa a su loro y lo golpea en la cabeza hasta dejarlo calvo y mudo. Días después, al ver pasar a un derviche calvo, el loro recupera el habla y le pregunta: '¿De quién derramaste la jarra de aceite?'",
    mysticalMoral:
      "El ignorante juzga por analogías superficiales y confunde a los santos (libres de ataduras mundanas) con los hipócritas o pecadores castigados, sólo porque sus apariencias externas parecen similares.",
    keyQuoteEn: "Watch the face of each one, regard it well, It may be by serving thou wilt recognize Truth's face.",
    keyQuoteEs: "Observa bien el rostro de cada uno; quizá sirviendo reconozcas el rostro de la Verdad.",
    keyFigures: ["El Aceitero", "El Loro", "El Hombre Calvo"]
  },
  {
    id: "b1-s3",
    bookNumber: 1,
    storyNumber: 3,
    titleEs: "El Rey Judío, su Visir y los Cristianos",
    titleEn: "Story 3. The Jewish King, His Vazir, And The Christians",
    pdfPage: 10,
    themeKey: "forma",
    themeLabel: "Forma Externa vs. Esencia Interior",
    synopsis:
      "Un rey fanático y su astuto visir traman dividir a los cristianos. El visir se deja mutilar para infiltrarse como mártir entre ellos, gana su confianza absoluta y entrega en secreto doce rollos con doctrinas contradictorias a doce capitanes (uno predica sólo ayuno, otro sólo fe, otro sólo obras, etc.) antes de suicidarse, provocando guerras sectarias.",
    mysticalMoral:
      "La fe ciega del vulgo carece de discernimiento espiritual y cae fácilmente en las redes de falsos maestros que dividen la unidad de la religión en sectas irreconciliables.",
    keyQuoteEn: "Outwardly he was a preacher of religious duties, But within a decoy call and a fowler's snare.",
    keyQuoteEs: "Exteriormente era un predicador de deberes religiosos, pero por dentro un reclamo engañoso y la trampa de un cazador.",
    keyFigures: ["El Rey Judío", "El Visir Traidor", "Los Doce Capitanes", "Laila y el Califa"]
  },
  {
    id: "b1-s5",
    bookNumber: 1,
    storyNumber: 5,
    titleEs: "El León y las Bestias del Bosque",
    titleEn: "Story 5. The Lion And The Beasts",
    pdfPage: 15,
    themeKey: "albedrio",
    themeLabel: "Libre Albedrío, Esfuerzo y Providencia",
    synopsis:
      "Las bestias pactan entregar una presa diaria al león si éste deja de cazarlas, debatiendo intensamente sobre si es mejor confiar pasivamente en la Providencia (argumento de las bestias) o esforzarse activamente ('Confía en Dios, pero ata la pata de tu camello', argumento del león). Cuando llega el turno de la liebre, ésta usa la astucia inspirada por Dios y guía al arrogante león hacia un pozo, donde el león se lanza contra su propio reflejo y muere ahogado.",
    mysticalMoral:
      "Dios concede sabiduría a los débiles para abatir la arrogancia de los fuertes, y el ser humano, al atacar a sus supuestos enemigos externos, suele atacar el reflejo de su propia ira en el pozo del mundo.",
    keyQuoteEn: "The Prophet cried with a loud voice, 'Trust in God, yet tie the camel's leg.'",
    keyQuoteEs: "El Profeta clamó en voz alta: 'Confía en Dios, pero ata la pata de tu camello'.",
    keyFigures: ["El León", "La Liebre Sabia", "Las Bestias"]
  },
  {
    id: "b1-s6",
    bookNumber: 1,
    storyNumber: 6,
    titleEs: "Omar y el Embajador de Rum",
    titleEn: "Story 6. Omar And The Ambassador",
    pdfPage: 20,
    themeKey: "albedrio",
    themeLabel: "Libre Albedrío, Esfuerzo y Providencia",
    synopsis:
      "El embajador del emperador bizantino busca en Medina el fastuoso palacio del califa Omar, pero descubre que Omar duerme humildemente bajo una palmera sin escolta, habitando en un palacio espiritual. Omar le instruye sobre cómo las almas descienden del cielo al cuerpo y cómo se reconcilia la omnipotencia divina con la libertad humana.",
    mysticalMoral:
      "Quien no ama se siente encadenado por la 'compulsión' del destino, pero para el amante cuya voluntad se funde con Dios, la compulsión se transforma en comunión luminosa.",
    keyQuoteEn: "The word 'compulsion' makes me impatient for love's sake; 'Tis he who loves not who is fettered by compulsion.",
    keyQuoteEs: "La palabra 'compulsión' me impacienta por causa del amor; es quien no ama el que está encadenado por la compulsión.",
    keyFigures: ["Califa Omar", "Embajador de Rum", "Husamu-'d-Din"]
  },
  {
    id: "b1-s7",
    bookNumber: 1,
    storyNumber: 7,
    titleEs: "El Mercader y su Loro Astuto",
    titleEn: "Story 7. The Merchant And His Clever Parrot",
    pdfPage: 22,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Un mercader viaja a la India y lleva el mensaje de su loro enjaulado a los loros libres de la selva. Al escucharlo, uno de los loros salvajes cae muerto al suelo. Cuando el mercader regresa y le cuenta lo sucedido a su loro, éste también cae muerto en su jaula. Apenas el mercader arroja el cuerpo fuera de la jaula, el loro alza el vuelo: su pariente indio le había enseñado que para ser libre debía 'morir antes de morir'.",
    mysticalMoral:
      "Mientras el alma se aferre a su fama, orgullo y talento para complacer al mundo, seguirá enjaulada. Sólo muriendo al ego ('Fana') se abren las puertas de la jaula corporal.",
    keyQuoteEn: "Die before you die, that you may escape from confinement in a cage.",
    keyQuoteEs: "Muere antes de morir, para que puedas escapar del encierro en la jaula.",
    keyFigures: ["El Mercader", "El Loro Enjaulado", "El Loro de Indostán"]
  },
  {
    id: "b1-s8",
    bookNumber: 1,
    storyNumber: 8,
    titleEs: "El Arpista Anciano en tiempos de Omar",
    titleEn: "Story 8. The Harper",
    pdfPage: 26,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Un arpista famoso envejece, pierde su voz y nadie lo contrata. Desesperado, va al cementerio de Yathrib a tocar su arpa sólo para Dios y cae dormido. Dios envía a Omar a socorrerlo. Cuando el anciano llora de arrepentimiento por su pasado y rompe su arpa, Omar le enseña que incluso el llanto por el pasado es un velo de 'sobriedad' que separa de Dios.",
    mysticalMoral:
      "El pasado y el futuro son los dos velos que ocultan a Dios de nuestra vista; el místico verdadero quema ambos para sumergirse en el Eterno Presente.",
    keyQuoteEn: "Past and future are what veil God from our sight. Burn up both of them with fire!",
    keyQuoteEs: "El pasado y el futuro son lo que vela a Dios de nuestra vista. ¡Quema a ambos con fuego!",
    keyFigures: ["El Arpista", "Califa Omar"]
  },
  {
    id: "b1-s9",
    bookNumber: 1,
    storyNumber: 9,
    titleEs: "El Beduino Árabe, su Esposa y el Cántaro de Agua",
    titleEn: "Story 9. The Arab And His Wife",
    pdfPage: 27,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "Un árabe pobre del desierto debate con su esposa sobre la pobreza y la codicia (alegoría de la lucha entre el intelecto espiritual y el alma carnal). Finalmente viaja a Bagdad llevando al Califa su único tesoro: un cántaro de agua de lluvia del desierto. El Califa,sin burlarse de su humilde regalo, sabiendo que el Tigris corre junto a su palacio, acepta el cántaro con amor y lo devuelve lleno de oro.",
    mysticalMoral:
      "Nuestra precaria devoción, oraciones y conocimientos son como llevar una gota de agua turbia al Océano infinito de Dios; sin embargo, la misericordia divina acepta nuestra pobreza y la colma de gracia.",
    keyQuoteEn: "Woman is a ray of God, not a mere mistress, The Creator's self, as it were, not a mere creature!",
    keyQuoteEs: "La mujer es un rayo de Dios, no una mera amante; casi como el Creador mismo, ¡no una simple criatura!",
    keyFigures: ["El Árabe del Desierto", "Su Esposa", "El Califa de Bagdad"]
  },
  {
    id: "b1-s10",
    bookNumber: 1,
    storyNumber: 10,
    titleEs: "El Hombre de Qazwin que quería Tatuarse un León",
    titleEn: "Story 10. The Man Who Was Tattooed",
    pdfPage: 34,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Un fanfarrón pide a un tatuador que le dibuje un feroz león en la espalda, pero al sentir los pinchazos de la aguja grita de dolor y pide que omita la cola, luego la barriga y luego la cabeza, hasta que el artista arroja las agujas al suelo.",
    mysticalMoral:
      "Quien busca la transformación espiritual bajo la mano de un Maestro (Pir) debe soportar pacientemente el dolor de las agujas que mortifican el ego; no existe león espiritual sin cabeza, vientre ni cola.",
    keyQuoteEn: "But if thou takest umbrage at every rub, How wilt thou become a polished mirror?",
    keyQuoteEs: "Pero si te ofendes ante cada fricción, ¿cómo llegarás a convertirte en un espejo pulido?",
    keyFigures: ["El Hombre de Qazwin", "El Tatuador", "Alí"]
  },
  {
    id: "b1-s11",
    bookNumber: 1,
    storyNumber: 11,
    titleEs: "El León que cazó con el Lobo y el Zorro",
    titleEn: "Story 11. The Lion Who Hunted With The Wolf And The Fox",
    pdfPage: 35,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Tras cazar un buey, una cabra montés y una liebre, el león pide al lobo repartir el botín. El lobo asigna una pieza a cada uno y el león lo mata por atreverse a hablar de 'mío y tuyo' en su presencia. El zorro, escarmentado, entrega las tres piezas al león, quien complacido se las regala todas diciendo: 'Ya no eres un zorro, sino yo mismo'. Incluye la parábola del amigo que llama a la puerta y sólo entra cuando responde '¡Soy Tú!'.",
    mysticalMoral:
      "En una misma casa no caben dos 'Yoes'. Mientras el alma pronuncie 'Yo' frente a Dios, permanece excluida; cuando entrega todo su ser, Dios se le entrega por completo.",
    keyQuoteEn: "He answered, ''Tis Thou who art at the door, O Beloved!' The friend said, 'Since 'tis I, let me come in, There is not room for two 'I's' in one house.'",
    keyQuoteEs: "Respondió: '¡Eres Tú quien está a la puerta, oh Amado!' Dijo el amigo: 'Puesto que soy Yo, déjame entrar; no hay lugar para dos «Yoes» en una sola casa'.",
    keyFigures: ["El León", "El Lobo", "El Zorro"]
  },
  {
    id: "b1-s12",
    bookNumber: 1,
    storyNumber: 12,
    titleEs: "José (Yusuf) y el Espejo",
    titleEn: "Story 12. Joseph And The Mirror",
    pdfPage: 36,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Un viejo amigo visita al profeta José y le lleva como único regalo digno un espejo resplandeciente, para que José contemple en él su propia e incomparable hermosura.",
    mysticalMoral:
      "¿Qué regalo puede ofrecer el ser humano al Dios infinito que nada necesita? Sólo un corazón vacío de sí mismo y limpio como un espejo (el 'No-ser'), donde la Belleza Absoluta pueda contemplarse reflejada.",
    keyQuoteEn: "Since Not-being is the mirror of Being, If you are wise, choose Not-being (self-abnegation).",
    keyQuoteEs: "Puesto que el No-ser es el espejo del Ser, si eres sabio, elige el No-ser (la abnegación de ti mismo).",
    keyFigures: ["Profeta José (Yusuf)", "Su Amigo"]
  },
  {
    id: "b1-s14",
    bookNumber: 1,
    storyNumber: 14,
    titleEs: "Los Pintores Chinos y los Artistas Griegos",
    titleEn: "Story 14. The Chinese And The Greek Artists",
    pdfPage: 38,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "El Sultán organiza un certamen entre pintores chinos y griegos en dos salas enfrentadas. Los chinos piden cien pigmentos y pintan murales deslumbrantes. Los griegos no usan pintura alguna: sólo pulen y bruñen sus muros hasta dejarlos tan puros como el cielo. Al retirar la cortina divisoria, todos los colores chinos se reflejan multiplicados y más bellos sobre el muro pulido de los griegos.",
    mysticalMoral:
      "El conocimiento escolástico acumula conceptos externos que pesan como una carga; la sabiduría sufí (representada por los griegos) consiste en purificar el corazón de toda herrumbre de codicia y ego hasta que refleje directamente la luz infinita de Dios.",
    keyQuoteEn: "Like a steel mirror, scour off all rust with contrition; Make yourself pure from all attributes of self, That you may see your own pure bright essence!",
    keyQuoteEs: "Como un espejo de acero, limpia toda herrumbre con contrición; purifícate de todos los atributos del yo, ¡para que veas tu propia esencia pura y brillante!",
    keyFigures: ["El Sultán", "Pintores Chinos", "Artistas Griegos"]
  },
  {
    id: "b1-s16",
    bookNumber: 1,
    storyNumber: 16,
    titleEs: "La Clemencia de Alí ante su Enemigo",
    titleEn: "Story 16. Ali's Forbearance",
    pdfPage: 41,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "En pleno combate singular, Alí ('el León de Dios') vence a un guerrero infiel, quien le escupe en el rostro. En lugar de matarlo en el acto, Alí arroja su espada al suelo. Asombrado, el guerrero pregunta por qué lo perdona, y Alí le explica que si lo hubiera matado en ese instante habría actuado por ira personal y ego herido, y no como instrumento puro de Dios.",
    mysticalMoral:
      "La acción justa queda contaminada en el instante en que se mezcla con la venganza o la pasión del ego. El santo actúa únicamente cuando su mano es movida por Dios, libre de cólera personal.",
    keyQuoteEn: "I am the Lion of God, not the lion of passion; my deed bears witness to my religion.",
    keyQuoteEs: "Soy el León de Dios, no el león de la pasión; mi acto da testimonio de mi fe.",
    keyFigures: ["Alí ibn Abi Talib", "El Jefe Mago", "Ibn Muljam"]
  },

  // LIBRO 2
  {
    id: "b2-s1",
    bookNumber: 2,
    storyNumber: 1,
    titleEs: "El Asno del Sufí y la Imitación Ciega (Taqlid)",
    titleEn: "Story 1. The Sufi's Beast",
    pdfPage: 45,
    themeKey: "forma",
    themeLabel: "Forma Externa vs. Esencia Interior",
    synopsis:
      "Un sufí viajero llega a un convento. Sus compañeros derviches venden en secreto su asno para pagar un banquete y cantan en danza extática: '¡El asno se ha ido, el asno se ha ido!'. El dueño del asno, llevado por la codicia del banquete y la excitación colectiva, canta y baila el mismo estribillo sin entender qué significa. A la mañana siguiente descubre que su propio asno había sido vendido.",
    mysticalMoral:
      "Quien repite mecánicamente las palabras y los gestos extáticos de los místicos sin comprender su verdad interior (Taqlid) termina arruinado como el sufí que festejó la pérdida de su propia montura.",
    keyQuoteEn: "The Sufi said, 'They were all singing the same words, So I felt impelled to sing them as well. Blind imitation of them has undone me.'",
    keyQuoteEs: "Dijo el sufí: 'Todos cantaban las mismas palabras, así que me sentí impulsado a cantarlas también. ¡La imitación ciega me ha arruinado!'",
    keyFigures: ["El Sufí Viajero", "El Sirviente", "Los Derviches del Convento"]
  },
  {
    id: "b2-s5",
    bookNumber: 2,
    storyNumber: 5,
    titleEs: "El Hombre Sediento que Arrojaba Ladrillos al Agua",
    titleEn: "Story 5. The Thirsty Man Who Threw Bricks Into The Water",
    pdfPage: 55,
    themeKey: "amor",
    themeLabel: "Amor Divino y Nostalgia del Origen",
    synopsis:
      "Un hombre sediento sentado sobre un alto muro que le impide alcanzar un estanque arranca ladrillos del muro y los arroja al agua. El agua le pregunta qué gana con ello, y él responde: 'Primero, escuchar el dulce sonido de tu voz al chapotear; segundo, que con cada ladrillo que arranco el muro se hace más bajo y estoy más cerca de ti'.",
    mysticalMoral:
      "El muro es el cuerpo y el orgullo mundano: cada postración y cada renuncia arranca un ladrillo de la muralla que nos separa del Agua de la Vida.",
    keyQuoteEn: "The first advantage is this, that I hear your voice; and the second, that the more bricks I pull off the wall, the nearer I approach to you.",
    keyQuoteEs: "La primera ventaja es que escucho tu voz; y la segunda, que cuantos más ladrillos arranco del muro, más me acerco a ti.",
    keyFigures: ["El Hombre Sediento", "El Agua del Estanque"]
  },
  {
    id: "b2-s6",
    bookNumber: 2,
    storyNumber: 6,
    titleEs: "Luqman el Sabio y la Sandía Amarga",
    titleEn: "Story 6. Luqman's Master Examines Him",
    pdfPage: 56,
    themeKey: "amor",
    themeLabel: "Amor Divino y Nostalgia del Origen",
    synopsis:
      "El amo de Luqman le regala una sandía y Luqman la come con tal deleite que el amo prueba una tajada y descubre que es amarga como el veneno. Al preguntarle cómo pudo comerla sonriendo, Luqman responde que, habiendo recibido miles de dulces de su mano generosa, sería vergonzoso quejarse por una sola fruta amarga.",
    mysticalMoral:
      "Por el poder del Amor, lo amargo se vuelve dulce, el cobre se vuelve oro, las espinas se vuelven rosas y el dolor enviado por el Amado se recibe como un bálsamo.",
    keyQuoteEn: "Through love bitter things seem sweet, Through love bits of copper are made gold. Through love pains are as healing balms.",
    keyQuoteEs: "Por el amor las cosas amargas parecen dulces, por el amor las piezas de cobre se vuelven oro. Por el amor los dolores son bálsamos curativos.",
    keyFigures: ["Luqman el Sabio", "Su Amo"]
  },
  {
    id: "b2-s7",
    bookNumber: 2,
    storyNumber: 7,
    titleEs: "Moisés y el Pastor",
    titleEn: "Story 7. Moses And The Shepherd",
    pdfPage: 58,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "Moisés escucha a un sencillo pastor orar diciendo: '¡Oh Dios, dónde estás para que yo limpie tus zapatos, peine tu cabello y te lleve leche!'. Moisés lo reprende severamente por blasfemar atribuyendo cuerpo a Dios, dejando al pastor desconsolado. De inmediato, Dios reprende a Moisés desde el cielo: 'Has sido enviado para unir a mis siervos conmigo, no para separarlos. Yo no miro la elocuencia de las palabras, sino la humildad y el fuego del corazón'.",
    mysticalMoral:
      "La religión de los amantes trasciende las fórmulas dogmáticas y el protocolo lingüístico: un corazón ardiente y sincero vale infinitamente más que mil expresiones teológicamente correctas pero frías.",
    keyQuoteEn: "A burning heart is what I want; consort with burning! Kindle in thy heart the flame of love, And burn up utterly thoughts and fine expressions.",
    keyQuoteEs: "¡Un corazón ardiente es lo que quiero; únete al ardor! Enciende en tu corazón la llama del amor y quema por completo los pensamientos y las bellas expresiones.",
    keyFigures: ["Moisés", "El Pastor del Desierto"]
  },
  {
    id: "b2-s8",
    bookNumber: 2,
    storyNumber: 8,
    titleEs: "El Hombre que Hizo Mascota a un Oso",
    titleEn: "Story 8. The Man Who Made A Pet Of A Bear",
    pdfPage: 60,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "Un hombre bondadoso salva a un oso de una serpiente y el oso se convierte en su guardián inseparable, pese a las advertencias de un sabio. Un día, mientras el hombre duerme, el oso intenta espantar las moscas de su rostro y, lleno de afecto pero falto de juicio, arroja una enorme roca para aplastar las moscas, destrozando la cabeza de su amigo.",
    mysticalMoral:
      "El afecto de un necio es más peligroso que el odio de un hombre sabio; la ignorancia bienintencionada destruye aquello mismo que pretende proteger.",
    keyQuoteEn: "The friendship of a fool is enmity in effect.",
    keyQuoteEs: "La amistad de un necio es, en los hechos, enemistad mortal.",
    keyFigures: ["El Hombre Bondadoso", "El Oso", "Las Moscas"]
  },
  {
    id: "b2-s10",
    bookNumber: 2,
    storyNumber: 10,
    titleEs: "Bayazid y el Santo que era la Verdadera Kaaba",
    titleEn: "Story 10. Bayazid And The Saint",
    pdfPage: 62,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "Bayazid de Bastam viaja en peregrinación hacia La Meca y en el camino encuentra a un anciano derviche iluminado ('el Khizr de su época'). El sabio le dice que dé siete vueltas alrededor de él y entregue sus dirhams a los pobres: 'Aunque la Kaaba es la casa de Su gracia, mi corazón es la casa de Su secreto; desde que Dios construyó la Kaaba de piedra nunca entró en ella, pero en esta casa del corazón no habita sino el Viviente'.",
    mysticalMoral:
      "El corazón del hombre justo y de los amigos de Dios es el verdadero santuario donde habita la Divinidad, superior a cualquier templo de piedra.",
    keyQuoteEn: "Though the Ka'ba is the house of His grace and favors, Yet my body too is the house of His secret.",
    keyQuoteEs: "Aunque la Kaaba es la casa de Su gracia y Sus favores, mi cuerpo y mi corazón son la casa de Su secreto.",
    keyFigures: ["Bayazid de Bastam", "El Anciano Derviche"]
  },
  {
    id: "b2-s11",
    bookNumber: 2,
    storyNumber: 11,
    titleEs: "Mu'awiya e Iblis (El Valor de un Suspiro)",
    titleEn: "Story 11. Mo'avia And Iblis",
    pdfPage: 66,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "El califa Mu'awiya es despertado en su palacio por un desconocido para que no pierda la oración del alba. Al descubrir que quien lo despierta es el propio Iblis (Satanás), Mu'awiya desconfía de sus argumentos teológicos hasta obligarlo a confesar la verdad: Iblis lo despertó a tiempo porque sabía que, si Mu'awiya se quedaba dormido, el dolor, las lágrimas y el suspiro de arrepentimiento que brotarían de su corazón valdrían ante Dios más que doscientas oraciones rutinarias.",
    mysticalMoral:
      "Un solo suspiro de dolor sincero y humildad por sentirnos lejos de Dios supera en valor espiritual a la autocomplacencia de la piedad mecánica.",
    keyQuoteEn: "The worth of what thou hast chosen and possessed (that sigh) Equals that of all the people's accepted prayers.",
    keyQuoteEs: "El valor de ese suspiro que has elegido y poseído equivale al de todas las oraciones aceptadas de la gente.",
    keyFigures: ["Califa Mu'awiya", "Iblis (Satanás)"]
  },
  {
    id: "b2-s17",
    bookNumber: 2,
    storyNumber: 17,
    titleEs: "El Árbol de la Vida y los Cuatro Viajeros que Disputaban por Uvas",
    titleEn: "Story 17. The Tree Of Life & The Four Travelers",
    pdfPage: 75,
    themeKey: "forma",
    themeLabel: "Forma Externa vs. Esencia Interior",
    synopsis:
      "Un cortesano viaja por toda la India buscando literalmente el 'Árbol de la Vida' sin hallarlo, hasta que un sabio le revela que ese árbol es la Sabiduría divina, que tiene mil nombres pero una sola Esencia. Lo ilustra con cuatro hombres —un persa, un árabe, un turco y un griego— que reciben una moneda y pelean a golpes porque uno quiere comprar 'angur', otro 'inab', otro 'uzum' y otro 'astaphil', sin saber que las cuatro palabras significan 'uvas' en sus respectivos idiomas.",
    mysticalMoral:
      "Las disputas entre sectas y religiones nacen de aferrarse a la cáscara de los nombres y las lenguas; cuando aparece un intérprete sabio que conoce la Esencia, las querellas se disuelven en paz.",
    keyQuoteEn: "Pass over names and look to qualities, So that qualities may lead thee to essence! The differences of sects arise from His names; When they pierce to His essence they find His peace!",
    keyQuoteEs: "¡Pasa más allá de los nombres y mira las cualidades, para que te conduzcan a la Esencia! Las diferencias de las sectas nacen de Sus nombres; ¡cuando penetran hasta Su Esencia, hallan Su paz!",
    keyFigures: ["El Cortesano", "El Shaikh Sabio", "El Persa, el Árabe, el Turco y el Griego"]
  },

  // LIBRO 3
  {
    id: "b3-s1",
    bookNumber: 3,
    storyNumber: 1,
    titleEs: "Los Viajeros que Comieron la Cría del Elefante",
    titleEn: "Story 1. The Travelers Who Ate The Young Elephant",
    pdfPage: 78,
    themeKey: "albedrio",
    themeLabel: "Libre Albedrío, Esfuerzo y Providencia",
    synopsis:
      "Unos viajeros hambrientos reciben la advertencia de un sabio de no matar ni comer a las crías de elefante del bosque. Todos ceden a la gula excepto uno. Por la noche, el gran elefante llega, huele el aliento de cada durmiente, mata a quienes comieron a su cría y perdona únicamente al que mantuvo puro su aliento. Incluye el relato del hombre a quien Khizr revela que su grito '¡Oh Alá!' es ya el '¡Aquí estoy!' de Dios.",
    mysticalMoral:
      "Los santos y derviches son los 'hijos de Dios': quien los hiere atrae sobre sí la retribución divina. Además, el propio anhelo de invocar a Dios es ya la respuesta misma de Dios en el alma.",
    keyQuoteEn: "That calling 'Allah' of thine was my 'Here am I,' And that pain and longing and ardour of thine my messenger.",
    keyQuoteEs: "Ese clamor tuyo diciendo '¡Alá!' era Mi propio '¡Aquí estoy!', y ese dolor, anhelo y ardor tuyos eran Mi mensajero.",
    keyFigures: ["Los Viajeros", "El Viajero Abstinente", "Khizr"]
  },
  {
    id: "b3-s5",
    bookNumber: 3,
    storyNumber: 5,
    titleEs: "El Elefante en la Habitación Oscura",
    titleEn: "Story 5. The Elephant In A Dark Room",
    pdfPage: 85,
    themeKey: "forma",
    themeLabel: "Forma Externa vs. Esencia Interior",
    synopsis:
      "Unos hindúes exhiben un elefante en un recinto totalmente a oscuras. La gente entra y lo palpa con las manos: quien toca la trompa afirma que es una tubería de agua; quien toca la oreja dice que es un abanico; quien toca la pata asegura que es una columna; y quien toca el lomo declara que es un trono real.",
    mysticalMoral:
      "El ojo de los sentidos y el intelecto parcial son como la palma de la mano en la oscuridad: cada cual capta un fragmento verdadero pero incompleto. Si cada uno llevara una vela encendida (la luz de la revelación espiritual), sus contradicciones desaparecerían de inmediato.",
    keyQuoteEn: "The eye of outward sense is as the palm of a hand, The whole of the object is not grasped in the palm.",
    keyQuoteEs: "El ojo del sentido externo es como la palma de una mano: la totalidad del objeto no cabe en la palma.",
    keyFigures: ["Los Visitantes en la Oscuridad", "El Elefante", "Noé y su hijo Canaán"]
  },
  {
    id: "b3-s6",
    bookNumber: 3,
    storyNumber: 6,
    titleEs: "El Amante que Leía Sonetos a su Amada",
    titleEn: "Story 6. The Lover Who Read Sonnets To His Mistress",
    pdfPage: 88,
    themeKey: "amor",
    themeLabel: "Amor Divino y Nostalgia del Origen",
    synopsis:
      "Un amante logra por fin estar en presencia de su amada, pero en vez de contemplarla y abrazarla, saca un pliego de poemas para leerle largas descripciones de su belleza y de sus propios suspiros. La amada lo reprende: 'Estando yo frente a ti, leerme sonetos demuestra que no me amas a mí, sino a tus propias efusiones poéticas y estados emocionales'.",
    mysticalMoral:
      "El místico verdadero (Safi) no se detiene en saborear sus propios éxtasis y emociones religiosas pasajeras ('el hijo del momento'), sino que trasciende todo estado subjetivo para perderse en Dios mismo.",
    keyQuoteEn: "You are a lover of your own raptures, not of me; You turn to me only in hope of experiencing raptures.",
    keyQuoteEs: "Eres un amante de tus propios éxtasis, no de mí; te vuelves hacia mí sólo con la esperanza de experimentar arrebatos.",
    keyFigures: ["El Amante Poeta", "La Amada"]
  },
  {
    id: "b3-s12",
    bookNumber: 3,
    storyNumber: 12,
    titleEs: "Las Visiones del Santo Daquqi",
    titleEn: "Story 12. The Visions Seen By The Saint Daquqi",
    pdfPage: 94,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "El gran santo Daquqi viaja incansablemente buscando a los elegidos de Dios. En la costa contempla siete luces celestiales que se funden en una sola, luego se transforman en siete hombres y en siete árboles invisibles para la multitud común. Daquqi dirige su oración e intercede para salvar a los náufragos de un barco en la tormenta, antes de que los siete santos desaparezcan.",
    mysticalMoral:
      "En las adoraciones de todos los hombres justos, las alabanzas se funden en una sola corriente porque Aquel que es alabado es Uno solo; todas las religiones sinceras apuntan a la misma Luz, como quien mira la luna reflejada en un pozo.",
    keyQuoteEn: "Because He that is praised is, in fact, only One, In this respect all religions are only one religion.",
    keyQuoteEs: "Porque Aquel que es alabado es, de hecho, sólo Uno; a este respecto, todas las religiones son una sola religión.",
    keyFigures: ["El Santo Daquqi", "Las Siete Luces / Siete Hombres"]
  },
  {
    id: "b3-s17",
    bookNumber: 3,
    storyNumber: 17,
    titleEs: "El Vakil (Ministro) del Príncipe de Bujará",
    titleEn: "Story 17. The Vakil Of The Prince Of Bokhara",
    pdfPage: 107,
    themeKey: "amor",
    themeLabel: "Amor Divino y Nostalgia del Origen",
    synopsis:
      "El ministro del Príncipe de Bujará huye al desierto durante diez años por temor al castigo de su señor. Incapaz de soportar por más tiempo el exilio lejos de su amado Príncipe, decide regresar a Bujará aunque le cueste la vida. Al arrojarse desmayado a los pies del Príncipe, la entrega absoluta de su amor despierta la compasión real y es perdonado y exaltado. En este pasaje Rumi enuncia su célebre poema sobre la evolución cósmica del alma.",
    mysticalMoral:
      "Ningún amante busca jamás la unión con su Amado sin que el Amado lo esté buscando también a él ('Cuando la sed de agua surge en mi alma, el agua también clama por el sediento'). La muerte del ego es el renacimiento a una escala superior del ser.",
    keyQuoteEn: "No lover ever seeks union with his beloved, But his beloved is also seeking union with him.",
    keyQuoteEs: "Ningún amante busca jamás la unión con su amado sin que su amado esté buscando también la unión con él.",
    keyFigures: ["El Vakil de Bujará", "El Príncipe de Bujará"]
  },
  {
    id: "b3-s18",
    bookNumber: 3,
    storyNumber: 18,
    titleEs: "La Mezquita Mortal y las Hierbas en la Olla",
    titleEn: "Story 18. The Deadly Mosque",
    pdfPage: 113,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "En los suburbios de una ciudad hay una mezquita encantada donde todo el que duerme muere de terror a medianoche. Un viajero intrépido decide dormir allí despreciando el apego a la vida corporal; cuando a medianoche resuena la voz aterradora, él desafía al espectro sin miedo, rompiendo el hechizo y haciendo llover oro por todas partes. Rumi compara las tribulaciones con las hierbas que hierven en la olla del cocinero.",
    mysticalMoral:
      "Los temores mortales son espectros que huyen ante quien está dispuesto a entregar su vida; y el sufrimiento en el mundo no es desprecio de Dios, sino el fuego del cocinero que cuece las hierbas para hacerlas dignas de la mesa del Rey.",
    keyQuoteEn: "The housewife pushes them down with her spoon, saying, 'I do not boil you because I dislike you, But that you may acquire a good savor and taste.'",
    keyQuoteEs: "El ama de casa las empuja con su cuchara diciendo: 'No os hiervo porque os aborrezca, sino para que adquiráis buen aroma y sabor'.",
    keyFigures: ["El Huésped Valiente", "Salomón y el Mosquito"]
  },

  // LIBRO 4
  {
    id: "b4-s1",
    bookNumber: 4,
    storyNumber: 1,
    titleEs: "El Amante Perseguido por la Patrulla y la Relatividad del Mal",
    titleEn: "Story 1. The Lover And His Mistress",
    pdfPage: 118,
    themeKey: "albedrio",
    themeLabel: "Libre Albedrío, Esfuerzo y Providencia",
    synopsis:
      "Un amante busca a su amada durante siete años. Una noche, huyendo aterrorizado de la guardia nocturna, salta el muro de un jardín desconocido y encuentra allí mismo a su amada, por lo que bendice a sus perseguidores.",
    mysticalMoral:
      "En el mundo no existe el mal absoluto: el veneno de la serpiente es vida para la serpiente aunque sea muerte para el hombre, y la aspereza de la tribulación suele ser el guardián que nos empuja al jardín del Amado.",
    keyQuoteEn: "In the world there is nothing absolutely bad; Know, moreover, evil is only relative.",
    keyQuoteEs: "En el mundo no hay nada absolutamente malo; sabe, además, que el mal es sólo relativo.",
    keyFigures: ["El Amante", "La Patrulla Nocturna", "La Amada"]
  },
  {
    id: "b4-s2",
    bookNumber: 4,
    storyNumber: 2,
    titleEs: "Salomón, la Reina Bilqis y el Templo de Jerusalén",
    titleEn: "Story 2. The Building Of The 'Most Remote Temple' At Jerusalem",
    pdfPage: 121,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "Salomón edifica el Templo donde las piedras acuden por sí mismas. La Reina de Saba (Bilqis) le envía cuarenta camellos cargados de lingotes de oro, pero Salomón los rechaza mostrándole que en su reino hasta la tierra es oro, y la invita a abandonar su trono efímero por la humildad del corazón. Incluye la abdicación de Ibrahim bin Adham cuando los guardias buscan camellos en el tejado de su palacio.",
    mysticalMoral:
      "Buscar a Dios sentado en el trono del orgullo y la opulencia mundana es tan absurdo como buscar camellos perdidos en la azotea de un palacio. El verdadero templo que nunca se arruina es el corazón purificado.",
    keyQuoteEn: "Sell your cleverness and buy bewilderment; Cleverness is mere opinion, bewilderment intuition.",
    keyQuoteEs: "Vende tu astucia y compra asombro; la astucia es mera opinión, el asombro es intuición.",
    keyFigures: ["Rey Salomón", "Bilqis (Reina de Saba)", "Ibrahim bin Adham"]
  },
  {
    id: "b4-s4",
    bookNumber: 4,
    storyNumber: 4,
    titleEs: "Bayazid y sus Dichos Extáticos ('¡Gloria a Mí!')",
    titleEn: "Story 4. Bayazid And His Impious Sayings When Beside Himself",
    pdfPage: 132,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "En estado de rapto místico, el santo Bayazid exclama: '¡No hay más Dios que yo, adoradme!'. Al volver en sí, sus discípulos escandalizados se lo reprochan y él les ordena que, si vuelve a pronunciar tales palabras, lo acuchillen. Cuando el éxtasis vuelve a apoderarse de él y repite '¡Dentro de mi manto no hay sino Dios!', los discípulos le clavan sus dagas, pero cada golpe se revierte hiriendo a los propios atacantes mientras Bayazid permanece ileso.",
    mysticalMoral:
      "Quien ha aniquilado por completo su 'yo' se convierte en un espejo sin forma propia: quien golpea ese espejo o escupe en él, sólo se hiere y se refleja a sí mismo.",
    keyQuoteEn: "His form is vanished, he is a mere mirror; Nothing is seen in him but the reflection of another.",
    keyQuoteEs: "Su forma se ha desvanecido, es un mero espejo; nada se ve en él sino el reflejo de otro.",
    keyFigures: ["Bayazid de Bastam", "Sus Discípulos"]
  },
  {
    id: "b4-s5",
    bookNumber: 4,
    storyNumber: 5,
    titleEs: "Los Tres Peces y los Tres Consejos del Pájaro",
    titleEn: "Story 5. The Three Fishes & The Counsels of the Bird",
    pdfPage: 135,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "En un estanque viven tres peces: uno muy sabio, otro medio sabio y un tercero necio. Al ver a los pescadores, el pez sabio huye de inmediato hacia el río corriente; el medio sabio espera hasta que llegan las redes y finge estar muerto para que lo arrojen fuera; el necio da saltos en vano y termina frito en la sartén. Le sigue la fábula del pájaro que da tres consejos a su captor.",
    mysticalMoral:
      "El sabio posee su propia antorcha interior y se une al océano; el medio sabio se hace 'como muerto' bajo la guía del sabio; el necio rechaza al guía y perece en sus ilusiones.",
    keyQuoteEn: "If you lack perfect wisdom, make yourself as dead Under the shadow of the wise, whose words give life.",
    keyQuoteEs: "Si careces de sabiduría perfecta, hazte como muerto bajo la sombra del sabio, cuyas palabras dan vida.",
    keyFigures: ["Los Tres Peces", "El Pájaro y el Cazador"]
  },
  {
    id: "b4-s6",
    bookNumber: 4,
    storyNumber: 6,
    titleEs: "Moisés, el Faraón, Asiya y Hamán",
    titleEn: "Story 6. Moses And Pharaoh",
    pdfPage: 136,
    themeKey: "albedrio",
    themeLabel: "Libre Albedrío, Esfuerzo y Providencia",
    synopsis:
      "Moisés promete al Faraón cuatro dones eternos si reconoce al Único Creador. El Faraón está a punto de ceder aconsejado por su piadosa esposa Asiya, pero consulta a su arrogante visir Hamán, quien lo disuade apelando a su orgullo real. Asiya compara a Hamán con la anciana ignorante que recortó el pico y las garras de un halcón real creyendo embellecerlo.",
    mysticalMoral:
      "Cada ser se asocia con su semejante: el alma luminosa de Asiya reconoce la luz de Moisés, mientras que la soberbia del Faraón gravita fatalmente hacia la ceguera de Hamán. Hay que demoler la casa alquilada del cuerpo antes de la muerte para hallar el Tesoro Oculto bajo sus cimientos.",
    keyQuoteEn: "Destroy your house, and with the treasure hidden in it You will be able to build thousands of houses.",
    keyQuoteEs: "Destruye tu casa, y con el tesoro oculto bajo ella podrás edificar miles de mansiones.",
    keyFigures: ["Moisés", "El Faraón", "Asiya", "Hamán"]
  },

  // LIBRO 5
  {
    id: "b5-s1",
    bookNumber: 5,
    storyNumber: 1,
    titleEs: "El Profeta y su Huésped Infiel",
    titleEn: "Story 1. The Prophet And His Infidel Guest",
    pdfPage: 149,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Mahoma hospeda en su propia casa a un corpulento beduino infiel que devora la leche de siete cabras y durante la noche ensucia su aposento por indigestión. Avergonzado, el huésped huye al amanecer, pero regresa por su amuleto olvidado y sorprende al propio Profeta limpiando la inmundicia con sus manos sagradas para no avergonzarlo. Conmovido hasta las lágrimas por tal misericordia, el hombre se transforma interiormente.",
    mysticalMoral:
      "La compasión sin reproche de los santos limpia la inmundicia del alma carnal mucho más profundamente que cualquier castigo externo.",
    keyQuoteEn: "Accidents serve only to manifest the secret essence; The essential quality abides, and accidents pass away.",
    keyQuoteEs: "Los accidentes sólo sirven para manifestar la esencia secreta; la cualidad esencial permanece y los accidentes pasan.",
    keyFigures: ["El Profeta Mahoma", "El Huésped Beduino"]
  },
  {
    id: "b5-s3",
    bookNumber: 5,
    storyNumber: 3,
    titleEs: "El Sabio y el Pavo Real que Arrancaba sus Plumas",
    titleEn: "Story 3. The Sage And The Peacock",
    pdfPage: 153,
    themeKey: "albedrio",
    themeLabel: "Libre Albedrío, Esfuerzo y Providencia",
    synopsis:
      "Un sabio ve a un pavo real arrancándose su hermoso plumaje con el pico para volverse feo y evitar que los cazadores lo persigan. El sabio lo detiene y le explica que destruir los dones y facultades dados por Dios por miedo a la tentación es contrario a la ley espiritual.",
    mysticalMoral:
      "'No hay monacato en el Islam': no puede existir castidad sin el impulso del deseo que se domina, ni valentía sin un enemigo que combatir. El mérito espiritual consiste en atravesar la prueba, no en mutilar la naturaleza.",
    keyQuoteEn: "Rend not thy plumage off, but avert thy heart from it; For hostility between them is the law of this holy war.",
    keyQuoteEs: "No arranques tu plumaje, sino aparta de él tu corazón; pues la contienda entre ambos es la ley de esta guerra sagrada.",
    keyFigures: ["El Sabio", "El Pavo Real"]
  },
  {
    id: "b5-s8",
    bookNumber: 5,
    storyNumber: 8,
    titleEs: "El Sultán Mahmud y los Zapatos Viejos de Ayaz",
    titleEn: "Story 8 & 13. Mahmud And Ayaz",
    pdfPage: 164,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Los cortesanos envidiosos acusan a Ayaz, el favorito del Sultán Mahmud de Ghazni, de esconder oro robado en una cámara secreta a la que entra cada día. El rey les ordena forzar la puerta a medianoche: sólo encuentran un par de zapatos viejos de cuero rústico y una zalea rota que Ayaz vestía todos los días en secreto para recordar su origen humilde de esclavo. Más adelante (pág. 180), cuando el Rey ordena romper una joya invaluable, todos los cortesanos se niegan por apego al valor de la piedra, pero Ayaz la pulveriza al instante porque la orden del Rey vale infinitamente más que cualquier joya.",
    mysticalMoral:
      "Mientras la piedra es piedra, decir 'Yo' es soberbia como la del Faraón; cuando la piedra se transforma en rubí traspasado por la luz del sol (como Mansur Hallaj), ya no queda dualidad entre el amante y el Amado.",
    keyQuoteEn: "Because Pharaoh was a stone, Mansur a ruby; Pharaoh an enemy of light, Mansur a friend.",
    keyQuoteEs: "Porque el Faraón era una piedra y Mansur un rubí; el Faraón un enemigo de la luz, Mansur un amigo.",
    keyFigures: ["Sultán Mahmud de Ghazni", "Ayaz", "Los Cortesanos Envidiosos"]
  },
  {
    id: "b5-s9",
    bookNumber: 5,
    storyNumber: 9,
    titleEs: "El Arrepentimiento Sincero de Nasuh",
    titleEn: "Story 9. The Sincere Repentance Of Nasuh",
    pdfPage: 166,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Nasuh, un hombre de rostro lampiño que trabajaba disfrazado de mujer en los baños femeninos para satisfacer su lujuria, se arrepiente tras pedir la oración de un santo. De pronto se pierde una joya de la princesa en el baño y ordenan desnudar y registrar a todas las asistentes. Aterrorizado ante la deshonra y la muerte inminente, Nasuh clama a Dios desde el fondo de su alma y cae desmayado, 'muriendo a sí mismo'. En ese instante la joya aparece milagrosamente antes de que lo registren, y Nasuh jamás vuelve a caer en tentación.",
    mysticalMoral:
      "El arrepentimiento verdadero (Tawba-i Nasuh) ocurre cuando el terror del juicio divino aniquila al viejo yo, haciendo nacer una criatura nueva que aborrece su antiguo pecado.",
    keyQuoteEn: "In his fear he called upon God for deliverance, and swooned with fear and became beside himself, so that his natural self was annihilated.",
    keyQuoteEs: "En su temor clamó a Dios por liberación y cayó desvanecido fuera de sí, de modo que su yo natural quedó aniquilado.",
    keyFigures: ["Nasuh", "El Hombre Santo", "La Hija del Rey"]
  },
  {
    id: "b5-s11",
    bookNumber: 5,
    storyNumber: 11,
    titleEs: "El Musulmán que Intentó Convertir a un Mago Zoroastriano",
    titleEn: "Story 11. The Mosalman Who Tried To Convert A Magian",
    pdfPage: 172,
    themeKey: "albedrio",
    themeLabel: "Libre Albedrío, Esfuerzo y Providencia",
    synopsis:
      "Un musulmán y un mago debaten extensamente: el mago usa los argumentos fatalistas (Jabriyan) alegando que si Dios quisiera ya lo habría convertido, mientras el musulmán defiende la libertad moral y la responsabilidad interior (Qadariyan). Rumi concluye que la disputa racional entre predestinación y libre albedrío durará hasta el fin de los tiempos porque sólo el Amor la resuelve.",
    mysticalMoral:
      "La razón dialéctica nunca puede agotar el misterio de la libertad y el decreto divino; sólo cuando entra el Amor de Dios, la discusión se calla en el asombro místico.",
    keyQuoteEn: "Love puts reason to silence. Love is a perfect muzzle of evil suggestions.",
    keyQuoteEs: "El Amor reduce la razón al silencio. El Amor es un freno perfecto contra las malas sugestiones.",
    keyFigures: ["El Creyente Musulmán", "El Mago Zoroastriano"]
  },

  // LIBRO 6
  {
    id: "b6-s3",
    bookNumber: 6,
    storyNumber: 3,
    titleEs: "El Emir Turco Ebrio y el Juglar del 'No Sé'",
    titleEn: "Story 3. The Drunken Turkish Amir And The Minstrel",
    pdfPage: 187,
    themeKey: "ego",
    themeLabel: "Aniquilación del Ego (Fana) y Humildad",
    synopsis:
      "Un noble turco llama a un juglar para que le cante, y el músico —que es un místico— entona una canción compuesta únicamente de negaciones: 'No sé si eres luna o ídolo, no sé qué pides de mí, no sé dónde estoy ni dónde estás tú...'. Irritado, el emir amenaza con golpearlo si no dice algo que sí sepa, y el juglar le responde que la verdad suprema sólo puede abordarse mediante la vía negativa.",
    mysticalMoral:
      "Toda negación auténtica ('No hay dios...') existe para despejar el camino hacia la afirmación absoluta ('...sino Dios'). La cercanía extrema de Dios actúa como un velo que deslumbra a la razón.",
    keyQuoteEn: "Thou art my face; what wonder if I see it not? Extreme nearness acts as an obscuring veil.",
    keyQuoteEs: "Tú eres mi propio rostro; ¿qué tiene de extraño que no lo vea? La extrema cercanía actúa como un velo que oscurece.",
    keyFigures: ["El Emir Turco", "El Juglar Místico"]
  },
  {
    id: "b6-s6",
    bookNumber: 6,
    storyNumber: 6,
    titleEs: "El Faquir y el Tesoro Oculto Cerca del Arco",
    titleEn: "Story 6. The Faqir And The Hidden Treasure",
    pdfPage: 196,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "Un pobre faquir encuentra un pergamino que indica cómo hallar un tesoro: ponerse de espaldas al mausoleo del mártir, mirar hacia La Meca, colocar una flecha en el arco y cavar donde caiga. El rey y luego el faquir usan los arcos más potentes y disparan con toda su fuerza a gran distancia, cavando en vano por toda la llanura. Cuando el faquir se rinde con humildad a Dios, una voz celestial le dice: 'Se te dijo que pusieras una flecha en el arco, no que tensaras la cuerda al máximo. Dispara suavemente para que caiga a tus pies, pues el tesoro está más cerca de ti que tu vena yugular'.",
    mysticalMoral:
      "El filósofo arrogante tensa el arco de la especulación intelectual y dispara tan lejos que pasa por encima de la Verdad, la cual yace justo a sus pies en la humildad del corazón.",
    keyQuoteEn: "The further a man shoots, the further off he is, And the more removed from the treasure he seeks.",
    keyQuoteEs: "Cuanto más lejos dispara el hombre su flecha, más lejos se halla y más apartado está del tesoro que busca.",
    keyFigures: ["El Faquir Humilde", "El Rey Arquero"]
  },
  {
    id: "b6-s7",
    bookNumber: 6,
    storyNumber: 7,
    titleEs: "Los Tres Viajeros (El Musulmán, el Judío y el Cristiano)",
    titleEn: "Story 7. The Three Travelers",
    pdfPage: 200,
    themeKey: "corazon",
    themeLabel: "Conocimiento del Corazón vs. Intelecto",
    synopsis:
      "Un musulmán en ayuno viaja con un judío y un cristiano. Al caer la noche reciben una bandeja de dulces; como los otros dos ya cenaron, deciden guardar el postre para quien tenga el sueño más sublime esa noche. Al despertar, el judío relata haber ascendido con Moisés al Sinaí y el cristiano haber subido con Jesús al cuarto cielo; el musulmán les informa que el Profeta se le apareció despierto y le ordenó comerse los dulces porque ellos habían ascendido en sueños mientras él velaba en oración.",
    mysticalMoral:
      "La intuición directa nacida del ayuno, la vigilia y la obediencia humilde saborea en el presente el manjar espiritual sobre el cual los eruditos sólo sueñan y especulan.",
    keyQuoteEn: "Know real science is seeing the fire directly, Not mere talk, inferring the fire from the smoke.",
    keyQuoteEs: "Sabe que la verdadera ciencia es ver el fuego directamente, no la mera charla que infiere el fuego a partir del humo.",
    keyFigures: ["El Viajero Musulmán", "El Viajero Judío", "El Viajero Cristiano"]
  },
  {
    id: "b6-s9",
    bookNumber: 6,
    storyNumber: 9,
    titleEs: "El Rey, sus Tres Hijos y la Princesa de China (Con el Soñador de Bagdad)",
    titleEn: "Story 9. The King And His Three Sons",
    pdfPage: 206,
    themeKey: "forma",
    themeLabel: "Forma Externa vs. Esencia Interior",
    synopsis:
      "Tres príncipes desobedecen a su padre y entran en una fortaleza prohibida llena de pinturas (el mundo fenoménico), donde se enamoran del retrato de la Princesa de China y parten en su búsqueda. En el camino se inserta el famoso cuento del hombre de Bagdad que viaja a Egipto siguiendo un sueño y descubre por boca de un guardia egipcio que el tesoro estaba enterrado en su propia casa en Bagdad (pág. 211). Al llegar a China, el hermano mayor muere de amor a los pies del Rey y alcanza la unión espiritual sin velos; el segundo cae por orgullo e ingratitud; y el hermano menor, el más débil y humilde, alcanza tanto a la novia terrenal como al Amado Espiritual.",
    mysticalMoral:
      "Las formas e imágenes del mundo son copas que contienen un destello del Vino Divino: quien se detiene en la copa se vuelve idólatra, pero quien atraviesa la forma y muere a su ego alcanza la unión inefable donde sólo reina el Silencio.",
    keyQuoteEn: "Silence is this horse of wood, Silence is the guide and support of men at sea.",
    keyQuoteEs: "El Silencio es este corcel de madera (el barco); el Silencio es la guía y el sostén de los navegantes en el mar de la Verdad.",
    keyFigures: ["El Rey", "Los Tres Príncipes", "El Rey de China", "El Hombre de Bagdad en Egipto"]
  }
];

export const PHILOSOPHICAL_PILLARS: PhilosophicalPillar[] = [
  {
    id: "pillar-ney",
    termPersian: "Nay / Firāq (نی / فراق)",
    titleEs: "1. La Nostalgia del Origen y el Fuego del Amor ('Ishq)",
    subtitleEn: "Separation & The Reed-Flute's Plaint",
    definition:
      "El alma humana no pertenece originalmente al mundo de la materia (tierra y agua), sino al 'cañaveral' del Espíritu Absoluto. El sufrimiento existencial humano es la nostalgia de ese hogar divino. El Amor ('Ishq) es el fuego alquímico que consume los velos del ego y devuelve todas las cosas a su Creador.",
    masnaviApplication:
      "Desde el Prólogo del Libro I hasta la muerte mística del príncipe mayor en el Libro VI, Rumi sostiene que la razón discursiva se atasca 'como un asno en el lodo' cuando intenta explicar el Amor, pues sólo el Sol puede mostrar al Sol.",
    canonicalReference: "Libro I, Prólogo (pág. 5–7) · Libro III, Historia 17 (pág. 107)",
    relatedStories: ["Prólogo: El Canto de la Flauta de Caña", "El Príncipe y la Doncella", "El Vakil del Príncipe de Bujará"]
  },
  {
    id: "pillar-fana",
    termPersian: "Fanā' & Baqā' (فنا و بقا)",
    titleEs: "2. Aniquilación del Ego (No-Ser) y Subsistencia en Dios",
    subtitleEn: "Self-Annihilation & Eternal Subsistence in the One",
    definition:
      "El 'yo' fenoménico o ego carnal (Nafs) es una ilusión que oscurece el rostro del Único Ser Real (el Nóumeno Divino). 'Morir antes de morir' (Fanā') no es la destrucción de la esencia del alma, sino la disolución de su egoísmo separatista —como una gota de agua que se vierte en el océano o el hierro que enrojece en la fragua— para vivir eternamente en Dios (Baqā').",
    masnaviApplication:
      "En el taller del 'No-ser' es donde trabaja el Creador. Mientras el visitante responde 'Soy yo' a la puerta del Amado, no es admitido; sólo cuando responde 'Soy Tú' se abre el santuario.",
    canonicalReference: "Libro I, Historias 7, 11 y 12 (pág. 22, 35, 36) · Libro IV, Historia 4 (pág. 132)",
    relatedStories: ["El Mercader y su Loro Astuto", "El León, el Lobo y el Zorro", "José y el Espejo", "Bayazid y sus Dichos Extáticos"]
  },
  {
    id: "pillar-surat-mana",
    termPersian: "Sūrat vs. Ma'nā (صورت و معنا)",
    titleEs: "3. Forma Aparente frente a Esencia Real",
    subtitleEn: "Outward Form vs. Inner Spiritual Substance",
    definition:
      "Todo fenómeno visible es una 'forma' (Sūrat), sombra o cáscara generada por la 'Esencia' sin forma (Ma'nā). El hombre mundano ('crudo') adora las formas pintadas en el muro, las palabras y los nombres sectarios; el místico ('maduro') atraviesa la cáscara de las palabras para beber el sentido espiritual.",
    masnaviApplication:
      "Explica por qué las religiones y los hombres disputan como quienes palpan un elefante a oscuras o como los cuatro viajeros que pelean por la palabra 'uva' en cuatro idiomas distintos.",
    canonicalReference: "Libro II, Historias 7 y 17 (pág. 58, 75) · Libro III, Historia 5 (pág. 85) · Libro VI, Historia 9 (pág. 206)",
    relatedStories: ["Moisés y el Pastor", "El Árbol de la Vida y las Uvas", "El Elefante en la Habitación Oscura"]
  },
  {
    id: "pillar-aql",
    termPersian: "'Aql-i Juz'ī vs. 'Aql-i Kull (عقل جزئی و عقل کل)",
    titleEs: "4. Razón Parcial vs. Razón Universal y Corazón Pulido",
    subtitleEn: "Discursive Intellect vs. Universal Reason & Heart-Knowledge",
    definition:
      "Rumi distingue entre la 'razón parcial' (el intelecto calculador, filosófico y mundano que sólo ve causas materiales inmediatas) y la 'Razón Universal' o Logos manifestado en los profetas y santos (el Maestro o Pir). El conocimiento verdadero no se obtiene acumulando erudición libresca ni disparando lejos la flecha de la especulación, sino puliendo el espejo del corazón.",
    masnaviApplication:
      "Los artistas griegos vencen a los pintores chinos sin usar colores, sólo bruñendo su muro; el faquir halla el tesoro cuando deja de tensar con soberbia el arco filosófico.",
    canonicalReference: "Libro I, Historia 14 (pág. 38) · Libro IV, Historia 9 (pág. 145) · Libro VI, Historia 6 (pág. 196)",
    relatedStories: ["Los Pintores Chinos y los Artistas Griegos", "El Faquir y el Tesoro Oculto", "Los Tres Viajeros"]
  },
  {
    id: "pillar-jabr",
    termPersian: "Jabr, Qadar & 'Ishq (جبر و قدر و عشق)",
    titleEs: "5. Causa Primera, Libre Albedrío y la 'Guerra Mayor'",
    subtitleEn: "Divine Agency, Moral Responsibility & The Greater Warfare",
    definition:
      "Aunque Dios es el Único Agente Real (Fa'il-i Haqiqi) y todas las criaturas son como el cálamo entre los dedos del Escriba, el ser humano experimenta interiormente la libertad moral de elección y no puede excusar sus vicios culpando al destino (como hizo Iblis diciendo 'Tú me hiciste errar'), sino que debe confesar humildemente su falta como Adán y librar la 'Guerra Mayor' contra sus propias pasiones.",
    masnaviApplication:
      "La existencia del mal relativo, de las pasiones y de Satanás es indispensable como piedra de toque: sin opuestos ni tentaciones no existiría la virtud, la templanza ni la fidelidad.",
    canonicalReference: "Libro I, Historia 5 (pág. 15) · Libro V, Historias 3 y 11 (pág. 153, 172) · Libro VI, Historia 5 (pág. 192)",
    relatedStories: ["El León y las Bestias", "El Sabio y el Pavo Real", "El Musulmán y el Mago Zoroastriano"]
  }
];
