import { StoryItem } from './masnaviData';

export interface FullStoryNode extends StoryItem {
  secondaryThemes: ('amor' | 'ego' | 'forma' | 'albedrio' | 'corazon')[];
  relatedStoryIds: string[];
}

export const PHILOSOPHICAL_AXES_NODES = [
  {
    id: 'axis-amor',
    themeKey: 'amor' as const,
    label: "Amor Divino ('Ishq) y Nostalgia",
    shortLabel: "Amor Divino ('Ishq)",
    color: '#9A3412', // Terracotta
    description:
      'El fuego primordial que despierta al alma de su exilio material y la atrae de regreso al Creador.'
  },
  {
    id: 'axis-ego',
    themeKey: 'ego' as const,
    label: "Aniquilación del Ego (Fanā') y Humildad",
    shortLabel: "Aniquilación del Ego (Fanā')",
    color: '#78350F', // Deep Bronze
    description:
      '«Morir antes de morir»: disolver el yo ilusorio y la soberbia en el taller del No-ser.'
  },
  {
    id: 'axis-forma',
    themeKey: 'forma' as const,
    label: "Forma (Sūrat) vs. Esencia (Ma'nā)",
    shortLabel: 'Forma vs. Esencia',
    color: '#1E3A8A', // Deep Lapis
    description:
      'Trascender la cáscara de las apariencias, los nombres sectarios y la imitación ciega (Taqlīd).'
  },
  {
    id: 'axis-corazon',
    themeKey: 'corazon' as const,
    label: 'Sabiduría del Corazón vs. Razón Parcial',
    shortLabel: 'Sabiduría del Corazón',
    color: '#14532D', // Forest Ink
    description:
      'Purificar el espejo interior frente a la miopía de los sentidos y de la especulación filosófica.'
  },
  {
    id: 'axis-albedrio',
    themeKey: 'albedrio' as const,
    label: 'Libre Albedrío, Providencia y Prueba Moral',
    shortLabel: 'Albedrío y Providencia',
    color: '#4C1D95', // Deep Royal Plum
    description:
      'La armonía entre la Causa Primera y la responsabilidad moral humana en la «Guerra Mayor».'
  }
];

export const ALL_82_STORIES: FullStoryNode[] = [
  // ==================== LIBRO I (Prólogo + 16 Historias) ====================
  {
    id: 'b1-prologue',
    bookNumber: 1,
    storyNumber: 0,
    titleEs: 'Prólogo: El Canto de la Flauta de Caña (Ney)',
    titleEn: 'Prologue: Hearken to the Reed-Flute',
    pdfPage: 5,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['ego', 'corazon'],
    relatedStoryIds: ['b1-s1', 'b1-s8', 'b6-s9'],
    synopsis:
      'La flauta de caña (Ney) se lamenta por haber sido cortada de su cañaveral original. Sus notas despiertan en hombres y mujeres el dolor del exilio espiritual.',
    mysticalMoral:
      'El clamor de la flauta es fuego de Amor, no viento. Sólo quien se vacía de sí mismo como una caña hueca puede resonar con el aliento de Dios.',
    keyQuoteEn: 'This plaint of the flute is fire, not mere air. Let him who lacks this fire be accounted dead!',
    keyQuoteEs: 'Este lamento de la flauta es fuego, no mero aire. ¡Que quien carezca de este fuego sea contado por muerto!',
    keyFigures: ['Flauta de Caña (Ney)', 'Shams de Tabriz']
  },
  {
    id: 'b1-s1',
    bookNumber: 1,
    storyNumber: 1,
    titleEs: 'El Príncipe y la Doncella Enferma de Amor',
    titleEn: 'Story 1. The Prince And The Handmaid',
    pdfPage: 6,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['albedrio', 'forma'],
    relatedStoryIds: ['b1-prologue', 'b3-s17', 'b6-s9'],
    synopsis:
      'Un príncipe compra una doncella que enferma gravemente. Un médico divino descubre que sufre de amor por el orfebre de Samarcanda; tras casarlos, administra al orfebre una pócima que marchita su belleza exterior, liberando el corazón de la joven hacia el Rey.',
    mysticalMoral:
      'Los amores por las formas creadas son puentes pasajeros; cuando la belleza física se desvanece, el alma descubre que su verdadero Amado es el Rey Eterno.',
    keyQuoteEn: 'Love is the astrolabe of God\'s mysteries.',
    keyQuoteEs: 'El Amor es el astrolabio de los misterios de Dios.',
    keyFigures: ['El Príncipe', 'La Doncella', 'El Médico Divino', 'El Orfebre']
  },
  {
    id: 'b1-s2',
    bookNumber: 1,
    storyNumber: 2,
    titleEs: 'El Aceitero y su Loro',
    titleEn: 'Story 2. The Oilman And His Parrot',
    pdfPage: 9,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b1-s13', 'b2-s1', 'b5-s6'],
    synopsis:
      'Un aceitero golpea a su loro dejándolo calvo por creer que volcó una jarra de aceite que en realidad tiró un gato. Al ver pasar a un hombre calvo, el loro le pregunta: «¿De quién tiraste la jarra de aceite?».',
    mysticalMoral:
      'El hombre superficial juzga por analogías externas y confunde a los santos desprendidos con los hipócritas o pecadores castigados.',
    keyQuoteEn: 'Worldly senses are the ladder of earth, Spiritual senses are the ladder of heaven.',
    keyQuoteEs: 'Los sentidos mundanos son la escalera de la tierra; los sentidos espirituales son la escalera del cielo.',
    keyFigures: ['El Aceitero', 'El Loro', 'El Derviche Calvo']
  },
  {
    id: 'b1-s3',
    bookNumber: 1,
    storyNumber: 3,
    titleEs: 'El Rey Judío, su Visir y los Cristianos',
    titleEn: 'Story 3. The Jewish King, His Vazir, And The Christians',
    pdfPage: 10,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon', 'albedrio'],
    relatedStoryIds: ['b1-s4', 'b2-s17'],
    synopsis:
      'El visir de un rey judío finge ser mártir para infiltrarse entre los cristianos y entrega doce rollos con doctrinas contradictorias a doce capitanes antes de suicidarse, dividiéndolos en sectas rivales.',
    mysticalMoral:
      'La fe imitativa carece de discernimiento ante los falsos maestros, pero el alma despierta permanece libre incluso mientras el cuerpo duerme.',
    keyQuoteEn: 'In love to be wide awake is treason. The more a man is awake, the more he sleeps to love.',
    keyQuoteEs: 'En el amor estar demasiado despierto (con juicio crítico) es traición; cuanto más despierto está el intelecto calculador, más dormido está para el amor.',
    keyFigures: ['El Rey Judío', 'El Visir', 'Laila y el Califa']
  },
  {
    id: 'b1-s4',
    bookNumber: 1,
    storyNumber: 4,
    titleEs: 'Otro Rey Judío Tiránico y el Fuego que no Quema a los Creyentes',
    titleEn: 'Story 4. Another Tyrannical Jewish King',
    pdfPage: 13,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b1-s3', 'b4-s6'],
    synopsis:
      'Un rey tirano arroja al fuego a una madre cristiana y a su bebé por negarse a adorar a un ídolo. El niño proclama desde las llamas que el fuego es fresco como el agua, y el fuego termina devorando al tirano.',
    mysticalMoral:
      'El aire, la tierra, el agua y el fuego son siervos obedientes de la Primera Causa (Dios) y sólo queman o salvan por Su mandato.',
    keyQuoteEn: 'The flint and steel are themselves causes, yet Look higher for the First Cause, O righteous man!',
    keyQuoteEs: 'El pedernal y el eslabón son causas secundarias, mas ¡mira más alto hacia la Primera Causa, oh hombre justo!',
    keyFigures: ['La Madre Cristiana', 'El Niño en el Fuego', 'El Rey Tirano']
  },
  {
    id: 'b1-s5',
    bookNumber: 1,
    storyNumber: 5,
    titleEs: 'El León, las Bestias y la Liebre Astuta',
    titleEn: 'Story 5. The Lion And The Beasts',
    pdfPage: 15,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['corazon', 'ego'],
    relatedStoryIds: ['b1-s6', 'b5-s10', 'b5-s11'],
    synopsis:
      'Las bestias debaten con el león sobre si es mejor confiar pasivamente en el destino o esforzarse activamente. La pequeña liebre, inspirada por la sabiduría divina, conduce al arrogante león hasta un pozo, donde éste ataca su propio reflejo y se ahoga.',
    mysticalMoral:
      'El verdadero creyente une la confianza en Dios con el esfuerzo («Ata la pata del camello»), y quien es cegado por su ira ataca su propia sombra en el pozo.',
    keyQuoteEn: 'Trust in God, yet tie the camel\'s leg.',
    keyQuoteEs: 'Confía en Dios, pero ata la pata del camello.',
    keyFigures: ['El León', 'La Liebre Sabia', 'Salomón y el Hombre que huía de la Muerte']
  },
  {
    id: 'b1-s6',
    bookNumber: 1,
    storyNumber: 6,
    titleEs: 'El Califa Omar y el Embajador de Rum',
    titleEn: 'Story 6. Omar And The Ambassador',
    pdfPage: 20,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego', 'amor'],
    relatedStoryIds: ['b1-s5', 'b1-s8'],
    synopsis:
      'El embajador bizantino busca el palacio de Omar y lo halla durmiendo bajo una palmera sin guardia alguna. Omar le explica cómo descienden las almas al cuerpo y cómo el amor transforma la compulsión en libertad.',
    mysticalMoral:
      'Terminada la guerra menor contra los enemigos externos, comienza la «Guerra Mayor» contra las pasiones carnales; en los santos, libre albedrío y decreto divino son una sola perla.',
    keyQuoteEn: 'The agency of God is the cause of our action, Nevertheless our actions are freely willed by us.',
    keyQuoteEs: 'La acción de Dios es la causa de nuestra acción; sin embargo, nuestras acciones son libremente queridas por nosotros.',
    keyFigures: ['Califa Omar', 'Embajador de Rum']
  },
  {
    id: 'b1-s7',
    bookNumber: 1,
    storyNumber: 7,
    titleEs: 'El Mercader y su Loro Astuto',
    titleEn: 'Story 7. The Merchant And His Clever Parrot',
    pdfPage: 22,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['forma', 'corazon'],
    relatedStoryIds: ['b1-s11', 'b3-s17', 'b4-s5'],
    synopsis:
      'Un loro enjaulado envía un mensaje con su amo a los loros libres de la India. Al oírlo, uno de ellos cae como muerto; cuando el amo se lo cuenta a su loro, éste también cae muerto, y al ser sacado de la jaula vuela hacia la libertad.',
    mysticalMoral:
      'Para escapar de la jaula del cuerpo y de la adulación mundana es indispensable «morir antes de morir» (Fanā\').',
    keyQuoteEn: 'If the saint handles earth, it becomes gold; If a sinner handles gold, it turns to dust.',
    keyQuoteEs: 'Si el santo toca la tierra, se vuelve oro; si el pecador toca el oro, se convierte en polvo.',
    keyFigures: ['El Mercader', 'El Loro Cautivo', 'El Loro de Indostán']
  },
  {
    id: 'b1-s8',
    bookNumber: 1,
    storyNumber: 8,
    titleEs: 'El Arpista Anciano en tiempos de Omar',
    titleEn: 'Story 8. The Harper',
    pdfPage: 26,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b1-prologue', 'b1-s6'],
    synopsis:
      'Un arpista anciano cuya voz se ha quebrado toca su arpa para Dios en el cementerio. Socorrido por Omar, rompe su instrumento llorando por su pasado, pero Omar le enseña que hasta el llanto por el pasado es un velo que separa del Presente divino.',
    mysticalMoral:
      'Tanto el recuerdo del pasado como la ansiedad por el futuro son nudos en la caña; hay que quemar ambos en la inmersión del instante presente.',
    keyQuoteEn: 'Past and future are what veil God from our sight. Burn up both of them with fire!',
    keyQuoteEs: 'El pasado y el futuro son lo que vela a Dios de nuestra vista. ¡Quema a ambos con fuego!',
    keyFigures: ['El Arpista', 'Califa Omar']
  },
  {
    id: 'b1-s9',
    bookNumber: 1,
    storyNumber: 9,
    titleEs: 'El Árabe Pobre, su Esposa y el Cántaro de Agua',
    titleEn: 'Story 9. The Arab And His Wife',
    pdfPage: 27,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['amor', 'ego'],
    relatedStoryIds: ['b1-s12', 'b2-s10'],
    synopsis:
      'Tras discutir con su esposa en el desierto (alegoría de la razón frente al alma carnal), un beduino lleva como regalo al Califa de Bagdad un cántaro de agua de lluvia. El Califa, pese a tener el río Tigris junto a su palacio, lo recibe con bondad y llena el cántaro de oro.',
    mysticalMoral:
      'Nuestras obras y plegarias son apenas una gota de agua turbia llevada al Océano de Dios, pero Su misericordia acepta nuestra pobreza y la devuelve convertida en oro espiritual.',
    keyQuoteEn: 'Woman is a ray of God, not a mere mistress, The Creator\'s self, as it were, not a mere creature!',
    keyQuoteEs: 'La mujer es un rayo de Dios, no una mera amante; casi como el Creador mismo, ¡no una simple criatura!',
    keyFigures: ['El Beduino Árabe', 'Su Esposa', 'El Califa de Bagdad']
  },
  {
    id: 'b1-s10',
    bookNumber: 1,
    storyNumber: 10,
    titleEs: 'El Hombre de Qazwin que quería Tatuarse un León',
    titleEn: 'Story 10. The Man Who Was Tattooed',
    pdfPage: 34,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b1-s11', 'b3-s18'],
    synopsis:
      'Un cobarde pide que le tatúen un león en la espalda, pero grita con cada pinchazo pidiendo omitir la cola, las orejas y el vientre, hasta que el tatuador arroja las agujas indignado.',
    mysticalMoral:
      'Quien se pone bajo la guía de un Maestro espiritual (Pir) debe soportar pacientemente el dolor que mortifica el ego.',
    keyQuoteEn: 'Having chosen thy Director, be submissive to him, Even as Moses submitted to the commands of Khizr.',
    keyQuoteEs: 'Habiendo elegido a tu Guía espiritual, sé sumiso a él, así como Moisés se sometió a Khizr.',
    keyFigures: ['El Hombre de Qazwin', 'El Tatuador', 'El Maestro (Pir)']
  },
  {
    id: 'b1-s11',
    bookNumber: 1,
    storyNumber: 11,
    titleEs: 'El León que Cazó con el Lobo y el Zorro',
    titleEn: 'Story 11. The Lion Who Hunted With The Wolf And The Fox',
    pdfPage: 35,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b1-s7', 'b1-s12', 'b5-s8'],
    synopsis:
      'El lobo divide la caza en tres partes y el león lo mata por hablar de «mío y tuyo». El zorro cede todo al león y recibe todo en recompensa. Incluye la parábola del amigo que sólo entra cuando responde «¡Soy Tú!».',
    mysticalMoral:
      'Mientras el hombre no destruye su «yo» separado, no puede entrar en la cámara de la unión con el Amado.',
    keyQuoteEn: 'There is not room for two "I\'s" in one house.',
    keyQuoteEs: 'No hay lugar para dos «Yoes» en una sola casa.',
    keyFigures: ['El León', 'El Lobo', 'El Zorro']
  },
  {
    id: 'b1-s12',
    bookNumber: 1,
    storyNumber: 12,
    titleEs: 'José (Yusuf) y el Espejo',
    titleEn: 'Story 12. Joseph And The Mirror',
    pdfPage: 36,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['amor', 'corazon'],
    relatedStoryIds: ['b1-s9', 'b1-s14'],
    synopsis:
      'Un amigo visita a José y le lleva como único regalo digno un espejo puro para que contemple en él su propia hermosura.',
    mysticalMoral:
      'El defecto, la pobreza y el No-ser son el espejo limpio donde se refleja la Belleza del Ser Absoluto; no hay peor enfermedad espiritual que creerse perfecto.',
    keyQuoteEn: 'No sickness worse than fancying thyself perfect Can infect thy soul, O arrogant misguided one!',
    keyQuoteEs: '¡Ninguna enfermedad peor que imaginarte perfecto puede infectar tu alma, oh arrogante extraviado!',
    keyFigures: ['Profeta José (Yusuf)', 'Su Amigo']
  },
  {
    id: 'b1-s13',
    bookNumber: 1,
    storyNumber: 13,
    titleEs: 'El Escriba Apóstata del Profeta',
    titleEn: 'Story 13. The Prophet\'s Scribe',
    pdfPage: 37,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b1-s2', 'b1-s14', 'b4-s4'],
    synopsis:
      'El escriba que anotaba las revelaciones de Mahoma se llena de soberbia al imaginar que esa sabiduría brotaba de su propio ingenio y no del Profeta, cayendo en la apostasía y la ruina.',
    mysticalMoral:
      'El filósofo arrogante que confunde el reflejo prestado de su intelecto con la Fuente divina se engaña a sí mismo y se convierte en hazmerreír de Iblis.',
    keyQuoteEn: 'The philosopher denies the existence of the Devil; At the same time he is the Devil\'s laughing-stock.',
    keyQuoteEs: 'El filósofo niega la existencia del Diablo, mientras al mismo tiempo es el hazmerreír del Diablo.',
    keyFigures: ['El Escriba Soberbio', 'El Profeta Mahoma']
  },
  {
    id: 'b1-s14',
    bookNumber: 1,
    storyNumber: 14,
    titleEs: 'Los Pintores Chinos y los Artistas Griegos',
    titleEn: 'Story 14. The Chinese And The Greek Artists',
    pdfPage: 38,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['ego', 'forma'],
    relatedStoryIds: ['b1-s12', 'b2-s14', 'b6-s7'],
    synopsis:
      'En una competencia ante el Sultán, los pintores chinos usan cien colores, mientras los griegos sólo pulen y bruñen su muro hasta volverlo un espejo donde resplandecen multiplicados todos los matices.',
    mysticalMoral:
      'El conocimiento del corazón que limpia el ego supera infinitamente al conocimiento libresco de las escuelas, que pesa como una carga sobre un asno.',
    keyQuoteEn: 'The knowledge of men of heart bears them up, The knowledge of men of the body weighs them down.',
    keyQuoteEs: 'El conocimiento de los hombres de corazón los eleva; el conocimiento de los hombres del cuerpo los abruma como una carga.',
    keyFigures: ['El Sultán', 'Pintores Chinos', 'Artistas Griegos']
  },
  {
    id: 'b1-s15',
    bookNumber: 1,
    storyNumber: 15,
    titleEs: 'Consejos de Reserva del Profeta a su Liberto Zaid',
    titleEn: 'Story 15. Counsels Of Reserve Given By The Prophet To Zaid',
    pdfPage: 39,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['albedrio'],
    relatedStoryIds: ['b1-s3', 'b3-s15'],
    synopsis:
      'Zaid contempla en espíritu los ocho cielos, los siete infiernos y el destino final de las almas, y desea revelarlo a todos. El Profeta le ordena guardar silencio para no destruir el mérito de la fe humana entre la esperanza y el temor.',
    mysticalMoral:
      'Los misterios supremos de la visión extática deben velarse ante quienes aún necesitan el estímulo de la esperanza y el temor para ejercer su libre albedrío.',
    keyQuoteEn: 'When the heart is garnished and swept clear of lust, Therein "The God of Mercy sitteth on His throne."',
    keyQuoteEs: 'Cuando el corazón es barrido y limpiado de codicia, en él «se sienta el Dios de Misericordia sobre Su trono».',
    keyFigures: ['El Profeta Mahoma', 'Zaid']
  },
  {
    id: 'b1-s16',
    bookNumber: 1,
    storyNumber: 16,
    titleEs: 'La Clemencia de Alí ante el Guerrero que le Escupió',
    titleEn: 'Story 16. Ali\'s Forbearance',
    pdfPage: 41,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['albedrio', 'amor'],
    relatedStoryIds: ['b1-s10', 'b5-s1', 'b6-s5'],
    synopsis:
      'Alí derriba en combate a un jefe mago, quien le escupe en el rostro. Alí envaina de inmediato su espada para no actuar movido por su propia cólera sino únicamente como instrumento puro de Dios, logrando la conversión de su adversario.',
    mysticalMoral:
      'El hombre de Dios jamás actúa por venganza personal ni aborrece siquiera al instrumento de su propia muerte, pues ve la mano de Dios detrás de todo suceso.',
    keyQuoteEn: 'There is no anger in my soul against thee, Because I attribute not this deed to thee; Thou art God\'s instrument.',
    keyQuoteEs: 'No hay ira en mi alma contra ti, porque no te atribuyo este acto a ti: tú eres instrumento de Dios.',
    keyFigures: ['Alí ibn Abi Talib', 'El Jefe Mago', 'Ibn Muljam']
  },

  // ==================== LIBRO II (18 Historias) ====================
  {
    id: 'b2-s1',
    bookNumber: 2,
    storyNumber: 1,
    titleEs: 'La Bestia del Sufí y la Imitación Ciega (Taqlid)',
    titleEn: 'Story 1. The Sufi\'s Beast',
    pdfPage: 45,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b1-s2', 'b5-s6', 'b5-s10'],
    synopsis:
      'Unos derviches venden el asno de un sufí viajero para costear un banquete y cantan «¡El asno se ha ido!». El sufí, llevado por la gula y el entusiasmo imitativo, canta con ellos sin saber que festeja la venta de su propio asno.',
    mysticalMoral:
      'La codicia y la imitación ciega (Taqlid) de palabras y estados ajenos sin verificación interior llevan a la pérdida del capital espiritual.',
    keyQuoteEn: 'The first reflection cast is mere blind imitation; After it has been often repeated you may test its truth.',
    keyQuoteEs: 'El primer reflejo recibido es mera imitación ciega; sólo tras verificarlo interiormente se convierte en verdad.',
    keyFigures: ['El Sufí Viajero', 'El Sirviente', 'Los Derviches']
  },
  {
    id: 'b2-s2',
    bookNumber: 2,
    storyNumber: 2,
    titleEs: 'El Mendigo Glotón, los Prisioneros y el Camellero Kurdo',
    titleEn: 'Story 2. The Pauper And The Prisoners',
    pdfPage: 49,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b2-s1', 'b5-s1'],
    synopsis:
      'El Cadí ordena pasear por la ciudad a un mendigo insolente sobre el camello de un leñador kurdo pregonando en tres idiomas que es un indigente insolvente. Al anochecer, el kurdo exige pago al mendigo, demostrando que la codicia le cerró los oídos durante todo el día.',
    mysticalMoral:
      'La avidez de ganancia mundana vuelve sordo al hombre frente a las advertencias más claras, mientras Satanás se oculta tras mil formas y pensamientos.',
    keyQuoteEn: 'Thereal Workman is hidden in His workshop, Go you into that workshop, which is Not-being, and see Him face to face.',
    keyQuoteEs: 'El verdadero Artesano está oculto en Su taller; entra en ese taller, que es el No-ser, y contémplalo cara a cara.',
    keyFigures: ['El Mendigo', 'El Cadí', 'El Camellero Kurdo']
  },
  {
    id: 'b2-s3',
    bookNumber: 2,
    storyNumber: 3,
    titleEs: 'El Rey y sus Dos Esclavos (La Belleza del Alma y la Lengua)',
    titleEn: 'Story 3. The King And His Two Slaves',
    pdfPage: 52,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b2-s4', 'b4-s2'],
    synopsis:
      'Un rey interroga por separado a dos esclavos recién comprados: uno muy apuesto pero de lengua difamadora, y otro feo de rostro pero de corazón generoso y sabio que defiende a su compañero y explica cómo el pensamiento precede a la obra como el plano del arquitecto.',
    mysticalMoral:
      '«El hombre está oculto bajo su propia lengua»: la hermosura física es un accidente efímero, mientras que la nobleza del pensamiento y la bondad del corazón son la sustancia eterna.',
    keyQuoteEn: 'Every man is hidden under his own tongue; The safety of a man lies in holding his tongue.',
    keyQuoteEs: 'Cada hombre está oculto bajo su propia lengua; la salvación del hombre reside en guardar su lengua.',
    keyFigures: ['El Rey', 'El Esclavo Sabio', 'El Esclavo Difamador']
  },
  {
    id: 'b2-s4',
    bookNumber: 2,
    storyNumber: 4,
    titleEs: 'El Halcón del Rey entre los Búhos de las Ruinas',
    titleEn: 'Story 4. The Falcon And The Owls',
    pdfPage: 54,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b2-s3', 'b2-s18'],
    synopsis:
      'Un halcón real se extravía en unas ruinas habitadas por búhos, quienes lo atacan creyendo que quiere robarles sus nidos inmundos. El halcón les explica que su morada es la muñeca del Rey.',
    mysticalMoral:
      'Los profetas y santos son halcones del Rey en el destierro terrenal: los hombres mundanos (los búhos) los atacan porque creen que codician sus ruinas materiales.',
    keyQuoteEn: 'Many are they who have been captured by form, Who aimed at form, and found Allah.',
    keyQuoteEs: 'Muchos son los que, buscando inicialmente la forma visible en el santo, hallaron a través de ella a Alá.',
    keyFigures: ['El Halcón Real', 'Los Búhos']
  },
  {
    id: 'b2-s5',
    bookNumber: 2,
    storyNumber: 5,
    titleEs: 'El Hombre Sediento que Arrojaba Ladrillos al Agua',
    titleEn: 'Story 5. The Thirsty Man Who Threw Bricks Into The Water',
    pdfPage: 55,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b1-s10', 'b4-s2'],
    synopsis:
      'Un sediento arranca ladrillos de un alto muro y los tira al agua para escuchar el dulce sonido del chapoteo y rebajar la muralla que le impide beber.',
    mysticalMoral:
      'Cada mortificación del ego y cada postración arranca un ladrillo del muro del cuerpo que nos separa del Agua de la Vida.',
    keyQuoteEn: 'The more bricks I pull off the wall, the nearer I approach to you.',
    keyQuoteEs: 'Cuantos más ladrillos arranco del muro, más me acerco a ti.',
    keyFigures: ['El Hombre Sediento', 'El Agua', 'Zu\'l Nun en el Manicomio']
  },
  {
    id: 'b2-s6',
    bookNumber: 2,
    storyNumber: 6,
    titleEs: 'El Amo de Luqman descubre su Agudeza (La Sandía Amarga)',
    titleEn: 'Story 6. Luqman\'s Master Examines Him',
    pdfPage: 56,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['albedrio'],
    relatedStoryIds: ['b1-s16', 'b3-s11'],
    synopsis:
      'Luqman come con deleite una sandía amarga que le da su amo, explicando que sería ingrato quejarse de una sola fruta amarga tras haber recibido miles de dulzuras de su mano.',
    mysticalMoral:
      'La alquimia del Amor transforma las espinas en rosas, el dolor en bálsamo y la tribulación enviada por el Amado en dulzura.',
    keyQuoteEn: 'Through love bitter things seem sweet, Through love bits of copper are made gold.',
    keyQuoteEs: 'Por el amor las cosas amargas parecen dulces; por el amor las piezas de cobre se vuelven oro.',
    keyFigures: ['Luqman el Sabio', 'Su Amo']
  },
  {
    id: 'b2-s7',
    bookNumber: 2,
    storyNumber: 7,
    titleEs: 'Moisés y el Pastor',
    titleEn: 'Story 7. Moses And The Shepherd',
    pdfPage: 58,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['forma', 'amor'],
    relatedStoryIds: ['b2-s17', 'b3-s12', 'b5-s13'],
    synopsis:
      'Moisés reprende a un pastor por orar ofreciendo limpiar los zapatos y peinar el cabello de Dios. Dios reprende a Moisés revelándole que Él no mira la corrección teológica de las palabras, sino la sinceridad y el fuego del corazón.',
    mysticalMoral:
      'Las formas rituales y verbales son relativas; la religión de los amantes es el ardor y la humildad del corazón.',
    keyQuoteEn: 'I regard not the outside and the words, I regard the inside and the state of heart.',
    keyQuoteEs: 'No miro el exterior ni las palabras; miro el interior y el estado del corazón.',
    keyFigures: ['Moisés', 'El Pastor']
  },
  {
    id: 'b2-s8',
    bookNumber: 2,
    storyNumber: 8,
    titleEs: 'El Hombre que Hizo Mascota a un Oso',
    titleEn: 'Story 8. The Man Who Made A Pet Of A Bear',
    pdfPage: 60,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['forma'],
    relatedStoryIds: ['b2-s9', 'b4-s2'],
    synopsis:
      'Un oso agradecido intenta espantar las moscas del rostro de su amo dormido arrojándole una enorme piedra que lo mata en el acto.',
    mysticalMoral:
      'El afecto de un necio carente de discernimiento es más letal que el odio de un enemigo; por el contrario, quien reconoce su necesidad de misericordia atrae el agua de la gracia.',
    keyQuoteEn: 'Seek not water, only show you are thirsty, That water may spring up all around you.',
    keyQuoteEs: 'No busques el agua, sólo muestra que tienes sed, para que el agua brote a tu alrededor.',
    keyFigures: ['El Hombre Bondadoso', 'El Oso']
  },
  {
    id: 'b2-s9',
    bookNumber: 2,
    storyNumber: 9,
    titleEs: 'El Jardinero y los Tres Amigos',
    titleEn: 'Story 9. The Gardener And The Three Friends',
    pdfPage: 62,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b2-s8', 'b2-s10'],
    synopsis:
      'Dios pregunta a Moisés por qué no Lo visitó cuando estuvo enfermo, explicándole que visitar a un santo enfermo es visitar a Dios mismo. Se ilustra con el jardinero que divide con astucia a tres amigos (un sufí, un jerife y un jurista) para castigarlos uno por uno.',
    mysticalMoral:
      'Abandonar la compañía de los amigos de Dios y aislarse en el propio juicio deja al alma indefensa frente al adversario.',
    keyQuoteEn: 'When one of God\'s saints is sick, God regards his sickness as His own.',
    keyQuoteEs: 'Cuando uno de los santos de Dios enferma, Dios considera esa enfermedad como Suya propia.',
    keyFigures: ['Moisés', 'El Jardinero', 'Los Tres Amigos']
  },
  {
    id: 'b2-s10',
    bookNumber: 2,
    storyNumber: 10,
    titleEs: 'Bayazid y el Santo que era la Verdadera Kaaba',
    titleEn: 'Story 10. Bayazid And The Saint',
    pdfPage: 62,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['forma', 'amor'],
    relatedStoryIds: ['b2-s7', 'b2-s13', 'b4-s4'],
    synopsis:
      'En camino a La Meca, Bayazid encuentra a un sabio derviche que le indica circunvalarlo a él en vez de ir al templo de piedra, pues Dios habita en el corazón vivo del santo.',
    mysticalMoral:
      'El corazón del Hombre Perfecto es el verdadero santuario donde mora el Viviente, y el dolor físico o la enfermedad son tesoros que despiertan al alma de su letargo.',
    keyQuoteEn: 'Pain is a treasure, for it contains mercies; The kernel is soft when the rind is scraped off.',
    keyQuoteEs: 'El dolor es un tesoro, pues encierra misericordias; la almendra se ablanda cuando se raspa la corteza.',
    keyFigures: ['Bayazid de Bastam', 'El Derviche Iluminado']
  },
  {
    id: 'b2-s11',
    bookNumber: 2,
    storyNumber: 11,
    titleEs: 'El Califa Mu\'awiya e Iblis (El Valor de los Suspiros)',
    titleEn: 'Story 11. Mo\'avia And Iblis',
    pdfPage: 66,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['albedrio', 'ego'],
    relatedStoryIds: ['b1-s13', 'b5-s11'],
    synopsis:
      'Iblis despierta a Mu\'awiya para que no pierda la oración del alba. Tras un largo debate sobre el origen del mal, Iblis confiesa que lo despertó porque el suspiro de dolor y humildad que Mu\'awiya habría exhalado de haberse quedado dormido valía ante Dios por doscientas oraciones ordinarias.',
    mysticalMoral:
      'El quebranto humilde del corazón vale más que la piedad rutinaria; además, toda doctrina falsa logra engañar sólo porque mezcla una pizca de verdad con el error.',
    keyQuoteEn: 'If there were no truth, how could falsehood exist? Falsehood derives its plausibility from truth.',
    keyQuoteEs: 'Si no existiera la verdad, ¿cómo podría existir la falsedad? La falsedad extrae su verosimilitud de la verdad.',
    keyFigures: ['Califa Mu\'awiya', 'Iblis (Satanás)']
  },
  {
    id: 'b2-s12',
    bookNumber: 2,
    storyNumber: 12,
    titleEs: 'Los Cuatro Indostaníes que se Censuraron Mutuamente en la Oración',
    titleEn: 'Story 12. The Four Hindustanis Who Censured One Another',
    pdfPage: 69,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['forma'],
    relatedStoryIds: ['b2-s1', 'b2-s15'],
    synopsis:
      'Cuatro hombres rezan en la mezquita: el primero habla al almuédano invalidando su oración; el segundo lo reprende invalidando la suya; el tercero reprende al segundo; y el cuarto da gracias con orgullo por no haber caído como los otros tres, estropeando también su rezo.',
    mysticalMoral:
      'Quien se dedica a señalar las faltas ajenas y se enorgullece de su propia pureza cae en una fosa más profunda que aquellos a quienes critica.',
    keyQuoteEn: 'Do not find fault with others, but rather be admonished by their example.',
    keyQuoteEs: 'No busques faltas en los demás; antes bien, corrígete a ti mismo aprendiendo de su tropiezo.',
    keyFigures: ['Los Cuatro Orantes Indostaníes']
  },
  {
    id: 'b2-s13',
    bookNumber: 2,
    storyNumber: 13,
    titleEs: 'El Anciano Achaquiento y el Médico',
    titleEn: 'Story 13. The Old Man And The Physician',
    pdfPage: 70,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b2-s10', 'b2-s15'],
    synopsis:
      'Un anciano se queja ante el médico de dolor de cabeza, vista nublada, dispepsia y dolor de espalda. A cada síntoma el médico responde que se debe a la vejez; cuando el anciano estalla en cólera e insultos, el médico le dice que esa ira descontrolada es también síntoma de su decrepitud.',
    mysticalMoral:
      'Los malos principios interiores producen inevitablemente malos actos: los necios veneran la mezquita de piedra mientras persiguen a los santos, que son la verdadera mezquita de Dios.',
    keyQuoteEn: 'The only true mosque is that in the hearts of saints.',
    keyQuoteEs: 'La única mezquita verdadera es la que está edificada en los corazones de los santos.',
    keyFigures: ['El Anciano Colérico', 'El Médico']
  },
  {
    id: 'b2-s14',
    bookNumber: 2,
    storyNumber: 14,
    titleEs: 'El Camellero Árabe, el Erudito Pobre e Ibrahim bin Adham',
    titleEn: 'Story 14. The Arab Carrier And The Scholar',
    pdfPage: 70,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['forma'],
    relatedStoryIds: ['b1-s14', 'b4-s2'],
    synopsis:
      'Un erudito enseña a un camellero árabe que en vez de equilibrar un saco de trigo con otro de arena, reparta el trigo en ambos sacos. Maravillado, el árabe le pregunta si es visir o rico, y al saber que su erudición sólo le ha traído dolor de cabeza y miseria, lo baja de su camello. Se contrasta con el milagro de las agujas de oro en el mar de Ibrahim bin Adham.',
    mysticalMoral:
      'La ciencia meramente verbal y mundana es estéril frente al conocimiento divino por inspiración que posee el corazón del santo.',
    keyQuoteEn: 'Is not the kingdom of the heart better than the contemptible earthly kingdom I formerly possessed?',
    keyQuoteEs: '¿Acaso no es el reino del corazón mejor que el despreciable reino terrenal que antes poseía?',
    keyFigures: ['El Camellero Árabe', 'El Erudito', 'Ibrahim bin Adham']
  },
  {
    id: 'b2-s15',
    bookNumber: 2,
    storyNumber: 15,
    titleEs: 'El Pecador que se Jactaba de Impunidad y la Respuesta de Jetró (Shu\'aib)',
    titleEn: 'Story 15. The Man Who Boasted That God Did Not Punish Him',
    pdfPage: 71,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b2-s12', 'b3-s1'],
    synopsis:
      'Un hombre presume ante el profeta Shu\'aib (Jetró) de que, pese a sus muchos pecados, Dios nunca lo castiga. Dios le revela a través de Shu\'aib que el mayor de todos los castigos es que su corazón está tan cubierto de hollín como un caldero negro: cumple ritos externos pero no siente ningún deleite espiritual.',
    mysticalMoral:
      'El peor castigo espiritual es la insensibilidad del alma: realizar ayunos y plegarias como cáscaras vacías sin experimentar jamás la dulzura ni la expansión del corazón.',
    keyQuoteEn: 'One sign that I punish him is this, That he observes fasting and prayer, Yet never feels the least expansion of soul.',
    keyQuoteEs: 'Una señal de que lo castigo es ésta: que observa el ayuno y la oración, mas nunca siente la menor expansión del alma.',
    keyFigures: ['Profeta Shu\'aib (Jetró)', 'El Pecador Insensible']
  },
  {
    id: 'b2-s16',
    bookNumber: 2,
    storyNumber: 16,
    titleEs: 'El Sufí Glotón y la Relatividad del Justo Medio',
    titleEn: 'Story 16. The Gluttonous Sufi',
    pdfPage: 73,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['forma'],
    relatedStoryIds: ['b2-s7', 'b4-s4'],
    synopsis:
      'Los hermanos de un convento acusan a un sufí de hablar demasiado, comer por veinte hombres y dormir como los Siete Durmientes. Él responde que el «justo medio» es relativo a la capacidad espiritual de cada ser (el océano para un ratón no basta a un camello) y que su corazón vela con Dios mientras sus ojos duermen.',
    mysticalMoral:
      'Para el hombre espiritual la «voz interior» es su propia evidencia, así como el niño lactante no pide pruebas lógicas antes de reconocer la voz de su madre.',
    keyQuoteEn: 'Know my eyes sleep, but my heart is awake with the Lord of mankind.',
    keyQuoteEs: 'Sabed que mis ojos duermen, pero mi corazón está despierto con el Señor de la humanidad.',
    keyFigures: ['El Sufí Acusado', 'El Shaikh del Convento']
  },
  {
    id: 'b2-s17',
    bookNumber: 2,
    storyNumber: 17,
    titleEs: 'El Árbol de la Vida y los Cuatro Viajeros que Disputaban por Uvas',
    titleEn: 'Story 17. The Tree Of Life',
    pdfPage: 75,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b1-s3', 'b2-s7', 'b3-s5'],
    synopsis:
      'Un cortesano busca en vano por toda la India el «Árbol de la Vida» hasta que un sabio le explica que es el Árbol de la Sabiduría divina, oculto tras mil nombres. Lo ilustra con el persa, el árabe, el turco y el griego que pelean por comprar uvas porque cada uno las nombra en su propia lengua.',
    mysticalMoral:
      'Las guerras sectarias provienen de aferrarse a los nombres; cuando se atraviesa el nombre hacia las cualidades y la Esencia, se alcanza la paz.',
    keyQuoteEn: 'The differences of sects arise from His names; When they pierce to His essence they find His peace!',
    keyQuoteEs: 'Las diferencias de las sectas nacen de Sus nombres; ¡cuando penetran hasta Su Esencia, hallan Su paz!',
    keyFigures: ['El Cortesano', 'El Sabio', 'Los Cuatro Viajeros']
  },
  {
    id: 'b2-s18',
    bookNumber: 2,
    storyNumber: 18,
    titleEs: 'Los Patitos Criados Bajo una Gallina Doméstica',
    titleEn: 'Story 18. The Young Ducks Who Were Brought Up Under A Hen',
    pdfPage: 76,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b1-prologue', 'b2-s4'],
    synopsis:
      'Aunque una gallina de tierra firme haya incubado a unos patitos y tema al agua, los patitos sienten en su pecho el llamado irresistible de nadar en el océano, porque su verdadera madre era un pato del mar.',
    mysticalMoral:
      'Nuestra nodriza terrenal (el cuerpo y los sentidos) nos ata al polvo, pero el alma es ave acuática del Océano del Ser Real y debe lanzarse sin miedo a las aguas del Espíritu.',
    keyQuoteEn: 'Leave thy nurse on the dry land and push on, Enter the ocean of real Being, like the ducks!',
    keyQuoteEs: '¡Deja a tu nodriza en la tierra seca y avanza; entra en el océano del Ser Real, como los patos!',
    keyFigures: ['Los Patitos del Océano', 'La Gallina Doméstica']
  },

  // ==================== LIBRO III (18 Historias) ====================
  {
    id: 'b3-s1',
    bookNumber: 3,
    storyNumber: 1,
    titleEs: 'Los Viajeros que Comieron la Cría del Elefante',
    titleEn: 'Story 1. The Travelers Who Ate The Young Elephant',
    pdfPage: 78,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['amor', 'corazon'],
    relatedStoryIds: ['b2-s15', 'b3-s9'],
    synopsis:
      'Pese a la advertencia de un sabio, unos viajeros hambrientos matan y comen a un pequeño elefante, salvo uno que se abstiene. Por la noche el gran elefante huele el aliento de todos y perdona sólo al que mantuvo su boca limpia. Incluye la revelación de Khizr de que el grito «¡Oh Alá!» es ya el «¡Aquí estoy!» de Dios.',
    mysticalMoral:
      'Dios protege celosamente a Sus santos, y el anhelo ardiente de invocar a Dios en medio del dolor es ya la respuesta misma de la gracia divina.',
    keyQuoteEn: 'That calling "Allah" of thine was my "Here am I," And that pain and longing and ardour of thine my messenger.',
    keyQuoteEs: 'Ese clamor tuyo diciendo «¡Alá!» era Mi propio «¡Aquí estoy!», y ese dolor, anhelo y ardor tuyos eran Mi mensajero.',
    keyFigures: ['El Viajero Abstinente', 'El Gran Elefante', 'Khizr', 'Bilal']
  },
  {
    id: 'b3-s2',
    bookNumber: 3,
    storyNumber: 2,
    titleEs: 'El Aldeano que Invitó al Ciudadano a su Pueblo',
    titleEn: 'Story 2. The Villager Who Invited The Townsman To Visit Him',
    pdfPage: 80,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b3-s3', 'b5-s10'],
    synopsis:
      'Tras diez años de falsas promesas de hospitalidad, un ciudadano viaja con su familia a la aldea de su supuesto amigo, quien les cierra la puerta bajo la lluvia durante cinco noches y los obliga a vigilar su huerto contra los lobos. En la oscuridad, el ciudadano mata por error al asno del aldeano.',
    mysticalMoral:
      'Las falsas pretensiones de amistad y santidad se desenmascaran en la hora de la prueba; sólo los verdaderos príncipes de la fe (como Jesús curando a los enfermos) cumplen su promesa.',
    keyQuoteEn: 'A hundred thousand tests await thee, Whoever thou art who sayest "I am a prince of the gate."',
    keyQuoteEs: 'Cien mil pruebas te aguardan, quienquiera que seas que dices «Soy un príncipe del umbral».',
    keyFigures: ['El Aldeano Hipócrita', 'El Ciudadano', 'Jesús (\'Isa)']
  },
  {
    id: 'b3-s3',
    bookNumber: 3,
    storyNumber: 3,
    titleEs: 'El Chacal que Pretendió ser un Pavo Real',
    titleEn: 'Story 3. The Jackal Who Pretended To Be A Peacock',
    pdfPage: 84,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b3-s2', 'b3-s4'],
    synopsis:
      'Un chacal cae en una cuba de tintes de colores y exige a los demás chacales que lo veneren como un pavo real del paraíso, pero queda en ridículo al no poder emitir el canto ni tener la naturaleza del pavo real. Incluye el cuento del hambriento que se untaba la barba con grasa.',
    mysticalMoral:
      'Engalanarse con colores externos o frases místicas robadas sin poseer la transformación interior es tan vano como la pretensión de divinidad del Faraón.',
    keyQuoteEn: 'Dost thou scream like a peacock, or strut about gardens as peacocks are wont to do?',
    keyQuoteEs: '¿Acaso cantas como un pavo real o caminas por los jardines del paraíso como hacen los pavos reales?',
    keyFigures: ['El Chacal Teñido', 'Harut y Marut']
  },
  {
    id: 'b3-s4',
    bookNumber: 3,
    storyNumber: 4,
    titleEs: 'Moisés, el Faraón y el Cazador de la Serpiente Congelada',
    titleEn: 'Story 4. Moses And Pharaoh (The Frozen Snake)',
    pdfPage: 84,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['albedrio'],
    relatedStoryIds: ['b3-s3', 'b4-s6'],
    synopsis:
      'Un cazador encuentra en las montañas una enorme serpiente congelada por la escarcha y, creyéndola muerta, la lleva a Bagdad para exhibirla. Al calentarse bajo el sol de Irak, la serpiente despierta y devora al cazador y a los espectadores.',
    mysticalMoral:
      'Tu alma carnal (Nafs) es esa serpiente: no está muerta, sino sólo entumecida por la falta de poder y riqueza. Si la calientas con el sol de la opulencia mundana sin haberla vencido antes, te devorará como al Faraón.',
    keyQuoteEn: 'Lust is that snake; How say you it is dead? It is only frozen by the pangs of hunger.',
    keyQuoteEs: 'La pasión carnal es esa serpiente; ¿cómo dices que está muerta? Sólo está entumecida por las punzadas del hambre.',
    keyFigures: ['El Cazador de Serpientes', 'Moisés y el Faraón']
  },
  {
    id: 'b3-s5',
    bookNumber: 3,
    storyNumber: 5,
    titleEs: 'El Elefante en la Habitación Oscura',
    titleEn: 'Story 5. The Elephant In A Dark Room',
    pdfPage: 85,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon', 'albedrio'],
    relatedStoryIds: ['b2-s17', 'b3-s12', 'b4-s2'],
    synopsis:
      'En un cuarto oscuro la gente palpa un elefante: cada cual lo describe como una tubería, un abanico, una columna o un trono según la parte que tocó. Le sigue el diálogo de Noé con su hijo rebelde Canaán y el barbero que corta toda la barba.',
    mysticalMoral:
      'El ojo sensual y la opinión humana sólo palpan fragmentos en la tiniebla; sólo el asombro del amor de Dios pone fin a las disputas racionales y nos hace subir al Arca de Noé.',
    keyQuoteEn: 'The eye of outward sense is as the palm of a hand, The whole of the object is not grasped in the palm.',
    keyQuoteEs: 'El ojo del sentido externo es como la palma de una mano: la totalidad del objeto no cabe en la palma.',
    keyFigures: ['Los Palpadores del Elefante', 'Noé y Canaán']
  },
  {
    id: 'b3-s6',
    bookNumber: 3,
    storyNumber: 6,
    titleEs: 'El Amante que Leía Sonetos a su Amada',
    titleEn: 'Story 6. The Lover Who Read Sonnets To His Mistress',
    pdfPage: 88,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['forma', 'ego'],
    relatedStoryIds: ['b1-s1', 'b3-s17'],
    synopsis:
      'Admitido por fin ante su amada, un amante se pone a leerle largos sonetos en vez de abrazarla. Ella lo reprende por estar enamorado de sus propios estados poéticos y no de ella.',
    mysticalMoral:
      'El místico puro (Safi) trasciende el apego a sus propios arrebatos y consolaciones subjetivas («lo que se pone como los astros») para sumergirse en Dios mismo.',
    keyQuoteEn: 'You are a lover of your own raptures, not of me; You turn to me only in hope of experiencing raptures.',
    keyQuoteEs: 'Eres un amante de tus propios éxtasis, no de mí; te vuelves hacia mí sólo con la esperanza de experimentar arrebatos.',
    keyFigures: ['El Amante Poeta', 'La Amada']
  },
  {
    id: 'b3-s7',
    bookNumber: 3,
    storyNumber: 7,
    titleEs: 'El Hombre que Rogó ser Alimentado sin Trabajar en tiempos de David',
    titleEn: 'Story 7. The Man Who Prayed Earnestly To Be Fed Without Work',
    pdfPage: 89,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['albedrio'],
    relatedStoryIds: ['b3-s12', 'b6-s6'],
    synopsis:
      'Pese a las burlas de la gente, un hombre ruega día y noche recibir sustento sin trabajar hasta que una vaca entra sola en su casa. Más adelante (pág. 96), el supuesto dueño de la vaca lo demanda ante el rey David, quien descubre por inspiración que el demandante había asesinado al abuelo del pobre hombre.',
    mysticalMoral:
      'El conocimiento de certeza vuela con dos alas inquebrantables libre de la duda, y las manos y pies del criminal terminan delatando su propio crimen.',
    keyQuoteEn: 'Knowledge has two wings, opinion only one wing; Opinion is weak and lopsided in its flight.',
    keyQuoteEs: 'El conocimiento verdadero tiene dos alas, la opinión sólo una; la opinión es débil y desigual en su vuelo.',
    keyFigures: ['El Suplicante', 'El Profeta David']
  },
  {
    id: 'b3-s8',
    bookNumber: 3,
    storyNumber: 8,
    titleEs: 'Los Escolares que Hicieron Creer al Maestro que Estaba Enfermo',
    titleEn: 'Story 8. The Boys And Their Teacher',
    pdfPage: 90,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b2-s1', 'b3-s7'],
    synopsis:
      'Para conseguir un día libre, los niños se ponen de acuerdo para decirle uno tras otro a su maestro: «¡Qué pálido y enfermo te ves hoy!». La sugestión imaginativa es tan fuerte que el maestro cae realmente en cama temblando.',
    mysticalMoral:
      'La opinión y la fantasía colectiva tienen el poder de enfermar al espíritu que no está anclado en la visión interior de la verdad.',
    keyQuoteEn: 'He was at length deluded into imagining that he must really be ill.',
    keyQuoteEs: 'El poder de la mera imaginación y de la opinión ajena terminó haciéndole creer que estaba realmente enfermo.',
    keyFigures: ['El Maestro de Escuela', 'Los Alumnos Astutos']
  },
  {
    id: 'b3-s9',
    bookNumber: 3,
    storyNumber: 9,
    titleEs: 'El Derviche que Rompió su Voto en las Montañas',
    titleEn: 'Story 9. The Darvesh Who Broke His Vow',
    pdfPage: 90,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b1-s1', 'b3-s11'],
    synopsis:
      'Un derviche hace voto de comer sólo la fruta que el viento derribe de los árboles, pero omite decir «Si Dios quiere». Tras cinco días sin viento, vencido por el hambre arranca una fruta con la mano; poco después es confundido con unos ladrones y le amputan esa misma mano, lo que él acepta como justa corrección divina.',
    mysticalMoral:
      'El corazón humano es como una pluma en el desierto o agua hirviendo en la caldera: ningún voto humano puede sostenerse por orgullo propio sin el auxilio de la voluntad de Dios.',
    keyQuoteEn: 'Because the governance of actions is in my hands, Couple the words "If God will" with your vows.',
    keyQuoteEs: 'Puesto que el gobierno de las acciones está en Mis manos, une siempre las palabras «Si Dios quiere» a tus votos.',
    keyFigures: ['El Derviche de la Montaña', 'El Jefe de Policía']
  },
  {
    id: 'b3-s10',
    bookNumber: 3,
    storyNumber: 10,
    titleEs: 'El Anciano Santo que no Lloró por la Muerte de sus Hijos',
    titleEn: 'Story 10. The Old Man Who Made No Lamentation At The Death Of His Sons',
    pdfPage: 92,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b3-s11', 'b3-s16'],
    synopsis:
      'Cuando su esposa le reprocha no llorar la muerte de todos sus hijos, un anciano santo le responde que el llanto nace de la separación, pero que él sigue viéndolos vivos y jugando a su alrededor con los ojos del corazón.',
    mysticalMoral:
      'Cuando el temor de Dios ata las manos de la pasión carnal, el espíritu desata las manos de la razón y contempla despierta las realidades del mundo invisible.',
    keyQuoteEn: 'Though they have gone forth by revolution of fortune, They are with me still, playing round me.',
    keyQuoteEs: 'Aunque hayan partido por el giro del tiempo, siguen conmigo, jugando a mi alrededor ante los ojos del corazón.',
    keyFigures: ['El Anciano Santo', 'Su Esposa']
  },
  {
    id: 'b3-s11',
    bookNumber: 3,
    storyNumber: 11,
    titleEs: 'Bahlol y el Derviche Cuya Voluntad Era Una con el Decreto de Dios',
    titleEn: 'Story 11. Bahlol And The Darvesh',
    pdfPage: 93,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego', 'amor'],
    relatedStoryIds: ['b2-s6', 'b3-s12'],
    synopsis:
      'El sabio Bahlol pregunta a un derviche cómo le va, y éste responde que le va como a quien gobierna el curso entero del mundo según su deseo, porque ha fundido de tal modo su voluntad con el decreto de Dios que todo lo que Dios dispone (vida o muerte) es para él dulce como el azúcar.',
    mysticalMoral:
      'Quien ha quemado toda autocompasión en el fuego del amor a Dios vive en alegría perpetua, pues el universo entero marcha conforme al deseo de su Amado.',
    keyQuoteEn: 'When the decree of God becomes the pleasure of man, Then man desires the fulfillment of God\'s decrees.',
    keyQuoteEs: 'Cuando el decreto de Dios se convierte en el deleite del hombre, el hombre desea espontáneamente el cumplimiento de los decretos divinos.',
    keyFigures: ['Bahlol', 'El Derviche Santo']
  },
  {
    id: 'b3-s12',
    bookNumber: 3,
    storyNumber: 12,
    titleEs: 'Las Visiones del Santo Daquqi y las Siete Luces',
    titleEn: 'Story 12. The Visions Seen By The Saint Daquqi',
    pdfPage: 94,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['amor', 'forma'],
    relatedStoryIds: ['b2-s17', 'b3-s5'],
    synopsis:
      'El santo Daquqi contempla en la playa siete luces que se vuelven un solo resplandor, siete árboles y siete hombres santos invisibles para el vulgo, con quienes reza e intercede por un barco en peligro.',
    mysticalMoral:
      'El viaje del espíritu no depende del espacio ni del tiempo, y todas las alabanzas de las religiones se vierten en un solo cántaro porque Aquel que es alabado es Uno solo.',
    keyQuoteEn: 'Because He that is praised is, in fact, only One, In this respect all religions are only one religion.',
    keyQuoteEs: 'Porque Aquel que es alabado es, de hecho, sólo Uno; a este respecto, todas las religiones son una sola religión.',
    keyFigures: ['El Santo Daquqi', 'Los Siete Hombres de Luz']
  },
  {
    id: 'b3-s13',
    bookNumber: 3,
    storyNumber: 13,
    titleEs: 'La Ingratitud del Pueblo de Saba y los Trece Profetas',
    titleEn: 'Story 13. The People Of Saba',
    pdfPage: 98,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b3-s14', 'b5-s11'],
    synopsis:
      'Los habitantes de Saba, cegados por la ingratitud y la comodidad, rechazan las advertencias de trece profetas usando falacias fatalistas (Jabriyan) y parábolas mal aplicadas. Los profetas les responden que toda acción humana —como el comercio o la navegación— se funda en la esperanza y el esfuerzo.',
    mysticalMoral:
      'Dios creó cualidades inmutables (la piedra) y cualidades accidentales transformables (el cobre que puede volverse oro); usar el fatalismo para no arrepentirse es dormir entre salteadores de caminos.',
    keyQuoteEn: 'Bid stone become gold, that is impossible; Bid copper become gold, that is possible.',
    keyQuoteEs: 'Pedir a la piedra que se vuelva oro es imposible; pedir al cobre que se vuelva oro está dentro de su capacidad.',
    keyFigures: ['Los Trece Profetas', 'Los Habitantes de Saba']
  },
  {
    id: 'b3-s14',
    bookNumber: 3,
    storyNumber: 14,
    titleEs: 'Los Milagros del Profeta Mahoma (El Águila y la Sandalia)',
    titleEn: 'Story 14. Miracles Performed By The Prophet Muhammad',
    pdfPage: 103,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b3-s13', 'b4-s1'],
    synopsis:
      'Relata varios milagros del Profeta, entre ellos cuando un águila le arrebata su sandalia justo cuando iba a calzarse, haciendo caer de su interior una víbora mortal que estaba oculta en ella.',
    mysticalMoral:
      'El sufismo consiste en hallar gozo en el corazón cuando sobreviene una pérdida o contratiempo, sabiendo que esa desgracia es el águila que nos salva de una víbora mayor.',
    keyQuoteEn: 'Know troubles to be that eagle of the Prophet\'s Which carried off the sandal in order to save his foot from the viper.',
    keyQuoteEs: 'Sabe que las tribulaciones son aquella águila del Profeta que se llevó su sandalia para salvar su pie de la mordedura de la víbora.',
    keyFigures: ['El Profeta Mahoma', 'El Águila y la Víbora']
  },
  {
    id: 'b3-s15',
    bookNumber: 3,
    storyNumber: 15,
    titleEs: 'El Hombre que Pidió a Moisés Aprender el Lenguaje de los Animales',
    titleEn: 'Story 15. The Man Who Asked Moses To Teach Him The Language Of Animals',
    pdfPage: 104,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b1-s15', 'b4-s2'],
    synopsis:
      'Un hombre insiste a Moisés para que le enseñe el lenguaje de las aves y los perros. Al escuchar al gallo predecir que morirían su caballo, su mula y su esclavo, el hombre los vende apresuradamente para endosar la pérdida a otros; entonces el gallo anuncia que en castigo por su fraude el propio amo morirá al día siguiente.',
    mysticalMoral:
      'La curiosidad vana por conocer secretos superiores a nuestra pureza moral nos destruye; el libre albedrío es un capital precioso cuyo mérito reside en usarlo con rectitud.',
    keyQuoteEn: 'Freewill is as the salt to piety, Otherwise heaven itself were matter of compulsion.',
    keyQuoteEs: 'El libre albedrío es como la sal de la piedad; de otro modo el cielo mismo sería mera compulsión sin mérito.',
    keyFigures: ['Moisés', 'El Hombre Curioso', 'El Gallo y el Perro']
  },
  {
    id: 'b3-s16',
    bookNumber: 3,
    storyNumber: 16,
    titleEs: 'La Mujer que Perdió a Todos sus Hijos Pequeños',
    titleEn: 'Story 16. The Woman Who Lost All Her Infants',
    pdfPage: 105,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b3-s10', 'b3-s17'],
    synopsis:
      'Una mujer cuyos bebés morían siempre a los pocos meses clama a Dios en su dolor y contempla en visión los jardines del Paraíso, donde ve a todos sus hijos vivos y a salvo esperándola en su mansión eterna.',
    mysticalMoral:
      'Aquello que damos por perdido en el mundo por decreto de Dios se halla en realidad guardado y seguro en la presencia divina; una cosa es conocer por meros símiles y otra contemplar la Esencia.',
    keyQuoteEn: 'O Lord! they were lost to me, but were safe with Thee!',
    keyQuoteEs: '¡Oh Señor! Estaban perdidos para mí, ¡pero estaban a salvo Contigo!',
    keyFigures: ['La Madre Afligida', 'Hamza sin Cota de Malla']
  },
  {
    id: 'b3-s17',
    bookNumber: 3,
    storyNumber: 17,
    titleEs: 'El Vakil (Ministro) del Príncipe de Bujará y la Evolución del Alma',
    titleEn: 'Story 17. The Vakil Of The Prince Of Bokhara',
    pdfPage: 107,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b1-s1', 'b3-s18', 'b6-s9'],
    synopsis:
      'Incapaz de soportar diez años de exilio lejos de su Señor, el ministro fugitivo regresa a Bujará dispuesto a morir a los pies del Príncipe; su entrega absoluta de amor despierta el amor del Príncipe, quien lo perdona y exalta.',
    mysticalMoral:
      'La vida eterna se gana entregando la vida individual como una gota en el río; contiene el célebre himno de la evolución ascendente del alma desde el mineral hasta más allá de los ángeles.',
    keyQuoteEn: 'I died as inanimate matter and arose a plant, I died as a plant and rose again an animal. I died as an animal and arose a man.',
    keyQuoteEs: 'Morí como materia inanimada y surgí como planta; morí como planta y me alcé animal. Morí como animal y surgí como hombre.',
    keyFigures: ['El Vakil de Bujará', 'El Príncipe de Bujará']
  },
  {
    id: 'b3-s18',
    bookNumber: 3,
    storyNumber: 18,
    titleEs: 'La Mezquita Mortal y los Tres Grados de la Certeza',
    titleEn: 'Story 18. The Deadly Mosque',
    pdfPage: 113,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['corazon', 'forma'],
    relatedStoryIds: ['b1-s10', 'b3-s17', 'b4-s1'],
    synopsis:
      'Un huésped valiente duerme en una mezquita encantada donde todos morían de pavor; al desafiar sin miedo a la voz terrible de la medianoche, el conjuro se rompe y llueve oro. Concluye con la parábola de las hierbas hervidas en la olla, los siete sentidos del Corán y el mosquito que pide justicia a Salomón contra el Viento.',
    mysticalMoral:
      'Cuando aparece el Viento de la presencia de Dios, el buscador (el mosquito) se desvanece: esa aniquilación inicial es la puerta de la vida eterna.',
    keyQuoteEn: 'In like manner the seekers of God\'s presence-seat, When God appears, those seekers vanish.',
    keyQuoteEs: 'Del mismo modo, los buscadores del trono de Dios, cuando Dios mismo aparece, se desvanecen en Él.',
    keyFigures: ['El Viajero Valiente', 'Salomón, el Mosquito y el Viento']
  },

  // ==================== LIBRO IV (9 Historias) ====================
  {
    id: 'b4-s1',
    bookNumber: 4,
    storyNumber: 1,
    titleEs: 'El Amante Perseguido por la Patrulla y su Amada',
    titleEn: 'Story 1. The Lover And His Mistress',
    pdfPage: 118,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['amor', 'forma'],
    relatedStoryIds: ['b3-s14', 'b3-s18'],
    synopsis:
      'Huyendo de noche de la guardia, un amante salta el muro de un huerto y encuentra allí a la amada que buscaba desde hacía siete años. Cuando intenta abrazarla sin recato alegando que están solos, ella le recuerda que el viento que se mueve demuestra la presencia del Dios Omnividente.',
    mysticalMoral:
      'En el mundo ningún mal es absoluto: la aspereza de los guardias condujo al amante a su dicha, y la verdadera pureza teme faltar en presencia del Dios que todo lo ve.',
    keyQuoteEn: 'In the world there is nothing absolutely bad; Know, moreover, evil is only relative.',
    keyQuoteEs: 'En el mundo no hay nada absolutamente malo; sabe, además, que el mal es sólo relativo.',
    keyFigures: ['El Amante', 'La Amada Modesta', 'El Sufí y su Esposa']
  },
  {
    id: 'b4-s2',
    bookNumber: 4,
    storyNumber: 2,
    titleEs: 'La Construcción del Templo de Jerusalén por Salomón y la Reina Bilqis',
    titleEn: 'Story 2. The Building Of The "Most Remote Temple" At Jerusalem',
    pdfPage: 121,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['ego', 'forma'],
    relatedStoryIds: ['b2-s14', 'b4-s3', 'b4-s4'],
    synopsis:
      'Salomón edifica el Templo donde las piedras acuden vivas, rechaza los cuarenta camellos de oro de Bilqis y la llama a abandonar su trono terrenal por la fe pura. Incluye la abdicación de Ibrahim bin Adham y el llamado a construir el templo interior del corazón.',
    mysticalMoral:
      'El hombre es microcosmos en su forma pero macrocosmos en su espíritu; hay que vender la astucia argumentativa (que viene de Iblis) y comprar el asombro del amor (que viene de Adán).',
    keyQuoteEn: 'Sell your cleverness and buy bewilderment; Cleverness is mere opinion, bewilderment intuition.',
    keyQuoteEs: 'Vende tu astucia y compra el asombro; la astucia es mera opinión, el asombro es intuición.',
    keyFigures: ['Rey Salomón', 'Bilqis (Reina de Saba)', 'Ibrahim bin Adham']
  },
  {
    id: 'b4-s3',
    bookNumber: 4,
    storyNumber: 3,
    titleEs: 'El Joven que Escribió una Carta Quejándose de sus Raciones al Rey',
    titleEn: 'Story 3. The Youth Who Wrote A Letter Of Complaint About His Rations',
    pdfPage: 130,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b4-s2', 'b6-s7'],
    synopsis:
      'Un joven servidor envía cinco cartas airadas al rey quejándose sólo de la escasez de comida y bebida material. El rey no le responde ninguna, pues «la respuesta adecuada para el necio es el silencio».',
    mysticalMoral:
      'El hombre mundano sólo se preocupa del pan del cuerpo, mientras que el alimento de los sabios es la luz de Dios, y la piedra de toque de la muerte pronto revelará cuál moneda es oro y cuál cobre falso.',
    keyQuoteEn: 'Death of the body is a benefaction to the spiritual; What damage has pure gold to dread from the shears?',
    keyQuoteEs: 'La muerte del cuerpo es un beneficio para el hombre espiritual; ¿qué daño puede temer el oro puro de las tijeras del ensayador?',
    keyFigures: ['El Joven Quejumbroso', 'El Rey Sabio']
  },
  {
    id: 'b4-s4',
    bookNumber: 4,
    storyNumber: 4,
    titleEs: 'Bayazid y sus Dichos Extáticos («¡Dentro de mi manto no hay sino Dios!»)',
    titleEn: 'Story 4. Bayazid And His Impious Sayings When Beside Himself',
    pdfPage: 132,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['corazon', 'amor'],
    relatedStoryIds: ['b2-s10', 'b4-s2', 'b5-s8'],
    synopsis:
      'En éxtasis místico, Bayazid proclama ser uno con Dios. Aunque él mismo ordenó a sus discípulos acuchillarlo si repetía tales palabras, cuando vuelve a entrar en trance y sus discípulos lo atacan con sus dagas, cada estocada se invierte hiriendo a los atacantes mientras Bayazid queda intacto.',
    mysticalMoral:
      'Quien está aniquilado en Dios carece de forma propia y es un espejo puro: quien ataca ese espejo sólo se hiere a sí mismo. La madurez espiritual no reside en las canas, sino en la pureza del corazón.',
    keyQuoteEn: 'His form is vanished, he is a mere mirror; Nothing is seen in him but the reflection of another.',
    keyQuoteEs: 'Su forma se ha desvanecido, es un mero espejo; nada se ve en él sino el reflejo de otro.',
    keyFigures: ['Bayazid de Bastam', 'Abul-Hasan Khirqani', 'El Joven Capitán de Hudhail']
  },
  {
    id: 'b4-s5',
    bookNumber: 4,
    storyNumber: 5,
    titleEs: 'Los Tres Peces en el Estanque y los Tres Consejos del Pájaro',
    titleEn: 'Story 5. The Three Fishes',
    pdfPage: 135,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b1-s7', 'b4-s9'],
    synopsis:
      'Ante la llegada de los pescadores, el pez sabio huye de inmediato al río; el medio sabio finge estar muerto para que lo arrojen al agua; el necio se agita en vano y muere en la red. Le sigue el pájaro que engaña a su captor probando que no escuchó sus consejos.',
    mysticalMoral:
      'Si no posees la antorcha perfecta del sabio, hazte «como muerto» bajo la guía del sabio; dar consejos espirituales a un ignorante dormido es sembrar semillas en tierra salada.',
    keyQuoteEn: 'If you lack perfect wisdom, make yourself as dead Under the shadow of the wise, whose words give life.',
    keyQuoteEs: 'Si careces de sabiduría perfecta, hazte como muerto bajo la sombra del sabio, cuyas palabras dan vida.',
    keyFigures: ['El Pez Sabio, el Medio Sabio y el Necio', 'El Pájaro y el Cazador']
  },
  {
    id: 'b4-s6',
    bookNumber: 4,
    storyNumber: 6,
    titleEs: 'Moisés, el Faraón, Asiya, Hamán y el Tesoro Oculto',
    titleEn: 'Story 6. Moses And Pharaoh',
    pdfPage: 136,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego', 'corazon'],
    relatedStoryIds: ['b3-s4', 'b4-s7', 'b4-s8'],
    synopsis:
      'Moisés ofrece al Faraón cuatro tesoros eternos si reconoce a Dios. Su esposa Asiya le ruega aceptar y compara al visir Hamán con la anciana ignorante que recortó las garras y el pico de un halcón real; pero el Faraón sigue a Hamán porque cada ser se junta con su semejante.',
    mysticalMoral:
      'El cuerpo es una casa alquilada hasta la muerte: hay que demoler el egoísmo ahora para desenterrar el Tesoro Oculto antes de que termine el contrato.',
    keyQuoteEn: 'Destroy your house, and with the treasure hidden in it You will be able to build thousands of houses.',
    keyQuoteEs: 'Destruye tu casa, y con el tesoro oculto bajo ella podrás edificar miles de mansiones.',
    keyFigures: ['Moisés', 'El Faraón', 'Asiya', 'Hamán', 'El Halcón y la Anciana']
  },
  {
    id: 'b4-s7',
    bookNumber: 4,
    storyNumber: 7,
    titleEs: 'El Cortesano que se Enojó con el Amigo que le Salvó la Vida',
    titleEn: 'Story 7. The Courtier Who Quarreled With His Friend For Saving His Life',
    pdfPage: 141,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['amor', 'albedrio'],
    relatedStoryIds: ['b4-s6', 'b5-s8'],
    synopsis:
      'Un rey desenvaina la espada para decapitar a un cortesano, pero otro intercede y logra su perdón. En vez de agradecerle, el cortesano se ofende con su salvador porque en ese instante había entregado su vida al rey y habría alcanzado la unión eterna si la espada real lo hubiese herido.',
    mysticalMoral:
      'Quien ha alcanzado la intimidad con el Rey (como Abraham en el fuego de Nimrod, que no necesitó siquiera la ayuda del ángel Gabriel) no desea intermediarios que lo aparten del golpe amoroso de su Señor. Incluye la parábola de Moisés segando el trigo para separar el grano de la paja.',
    keyQuoteEn: 'Your true treasure is hidden under a false one, Just as butter is hidden within the substance of milk.',
    keyQuoteEs: 'Tu verdadero tesoro está oculto bajo uno falso, así como la mantequilla está oculta en la sustancia de la leche.',
    keyFigures: ['El Cortesano Amante', 'El Intercesor', 'Moisés Segando el Trigo']
  },
  {
    id: 'b4-s8',
    bookNumber: 4,
    storyNumber: 8,
    titleEs: 'El Príncipe Hechizado por una Vieja Cortesana que Regresa a su Verdadera Esposa',
    titleEn: 'Story 8. The Prince Who Returned To His True Love',
    pdfPage: 143,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['amor', 'corazon'],
    relatedStoryIds: ['b1-s1', 'b4-s9', 'b6-s1'],
    synopsis:
      'Un príncipe casado con la bellísima hija de un santo derviche la rechaza durante un año porque ha sido hechizado por una vieja decrépita (el mundo). Cuando los médicos reales rompen el hechizo, el príncipe despierta y cae enamorado de su verdadera esposa (la Divinidad).',
    mysticalMoral:
      'El mundo seductor es una anciana decrépita pintada con afeites; cuando los profetas rompen su hechizo, el alma reconoce la belleza eterna de su verdadero Hogar.',
    keyQuoteEn: 'The whole world is the outward form of Universal Reason, For it is the father of all creatures of reason.',
    keyQuoteEs: 'El mundo entero es la forma externa de la Razón Universal, pues ella es el padre de todas las criaturas dotadas de razón.',
    keyFigures: ['El Príncipe', 'La Hija del Derviche', 'La Vieja Hechicera', 'Esdras (\'Uzair)']
  },
  {
    id: 'b4-s9',
    bookNumber: 4,
    storyNumber: 9,
    titleEs: 'La Mula y el Camello (Con el Peral de la Ilusión y la Aparición de Gabriel)',
    titleEn: 'Story 9. The Mule And The Camel',
    pdfPage: 145,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['forma', 'ego'],
    relatedStoryIds: ['b3-s17', 'b4-s5'],
    synopsis:
      'Una mula pregunta al camello por qué ella tropieza siempre y él nunca; el camello responde que él mira a lo lejos desde las alturas mientras ella sólo mira bajo sus patas. Cierra el Libro IV con la evolución humana, las hormigas que miran el cálamo sin ver la Mente que escribe, y la majestuosa aparición del ángel Gabriel ante Mahoma.',
    mysticalMoral:
      'La razón parcial (la mula) debe dejarse guiar por la visión profética de largo alcance (el camello); este mundo es un sueño del que despertaremos en la resurrección.',
    keyQuoteEn: 'Form is only as a dress or a staff in the hand, It is only from reason and mind these figures proceed.',
    keyQuoteEs: 'La forma es sólo como un vestido o un bastón en la mano; es únicamente de la Mente y del Espíritu de donde proceden estas figuras.',
    keyFigures: ['La Mula y el Camello', 'Zu\'l Qarnain en el Monte Qaf', 'Mahoma y el Ángel Gabriel']
  },

  // ==================== LIBRO V (13 Historias) ====================
  {
    id: 'b5-s1',
    bookNumber: 5,
    storyNumber: 1,
    titleEs: 'El Profeta y su Huésped Infiel (Las Cuatro Aves de Abraham)',
    titleEn: 'Story 1. The Prophet And His Infidel Guest',
    pdfPage: 149,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['amor', 'forma'],
    relatedStoryIds: ['b1-s16', 'b5-s2', 'b5-s3'],
    synopsis:
      'Abre el Libro V explicando las cuatro aves de las pasiones que Abraham debe sacrificar (el pato de la gula, el gallo de la lujuria, el pavo real de la ambición y el cuervo de los bajos deseos). El Profeta hospeda a un beduino infiel que devora la leche de siete cabras y ensucia el lecho; cuando el Profeta limpia la inmundicia con sus propias manos, la vergüenza y el amor transforman al huésped.',
    mysticalMoral:
      'La misericordia del santo purifica al pecador de la gula y la hipocresía; las obras y palabras deben ser testigos sinceros de la luz interior.',
    keyQuoteEn: 'For me, I will be a lover of Not-being, not of existence, Because the beloved of Not-being is more blessed.',
    keyQuoteEs: 'En cuanto a mí, seré un amante del No-ser, no de la existencia aparente, porque el amado del No-ser es más bienaventurado.',
    keyFigures: ['El Profeta Mahoma', 'El Huésped Beduino']
  },
  {
    id: 'b5-s2',
    bookNumber: 5,
    storyNumber: 2,
    titleEs: 'El Árabe Hipócrita que Lloraba a su Perro Muerto de Hambre',
    titleEn: 'Story 2. The Arab And His Dog',
    pdfPage: 152,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b5-s1', 'b5-s6'],
    synopsis:
      'Un árabe llora ruidosamente la muerte de su perro mientras lleva la alforja llena de pan. Cuando un vecino le pregunta por qué no le dio de comer de su alforja, el árabe responde que el pan cuesta dinero mientras que las lágrimas no cuestan nada.',
    mysticalMoral:
      'El llanto ostentoso y las muestras externas de piedad que no sacrifican el egoísmo ni la avaricia son hipocresía vacía ante Dios.',
    keyQuoteEn: 'As his tears cost him nothing, he was pouring them forth in token of the sorrow he felt.',
    keyQuoteEs: 'Como sus lágrimas no le costaban nada, las derramaba ostentosamente mientras guardaba su pan con avaricia.',
    keyFigures: ['El Árabe Avaro', 'El Vecino']
  },
  {
    id: 'b5-s3',
    bookNumber: 5,
    storyNumber: 3,
    titleEs: 'El Sabio y el Pavo Real que Arrancaba su Plumaje',
    titleEn: 'Story 3. The Sage And The Peacock',
    pdfPage: 153,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b5-s1', 'b6-s5'],
    synopsis:
      'Un pavo real se arranca sus hermosas plumas para no atraer a los cazadores. Un sabio lo reprende explicándole que destruir las facultades dadas por Dios por temor a la prueba anula todo mérito moral.',
    mysticalMoral:
      '«No hay monacato en el Islam»: sin el impulso del deseo no puede existir la virtud de la abstinencia, ni hay valentía frente a un enemigo muerto.',
    keyQuoteEn: 'Without lust denial of lust is impossible; No man can display bravery against the dead.',
    keyQuoteEs: 'Sin deseo, la renuncia al deseo es imposible; ningún hombre puede mostrar valentía frente a un muerto.',
    keyFigures: ['El Sabio', 'El Pavo Real', 'El Ciervo en el Establo de los Asnos']
  },
  {
    id: 'b5-s4',
    bookNumber: 5,
    storyNumber: 4,
    titleEs: 'Muhammad Khwarazm Shah y el Único Hombre Llamado Abu Bakr en Sabzawar',
    titleEn: 'Story 4. Muhammad Khwarazm Shah And The Rafizis Of Sabzawar',
    pdfPage: 156,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['forma'],
    relatedStoryIds: ['b2-s10', 'b5-s5'],
    synopsis:
      'El sultán sunní Muhammad Shah toma la ciudad rebelde de Sabzawar y exige como único rescate para perdonarles la vida que le presenten a un solo habitante llamado Abu Bakr. Tras buscar por todas partes, sólo hallan a un viajero pobre y enfermo tendido al borde del camino.',
    mysticalMoral:
      'Sabzawar es el mundo material; Dios no mira la riqueza ni el número de sus habitantes, sino que busca un solo corazón verdadero y puro —frecuentemente despreciado por el mundo— por cuya causa perdona a la ciudad entera.',
    keyQuoteEn: 'God regards not your outward show and your wealth, but your hearts and your deeds.',
    keyQuoteEs: 'Dios no mira vuestra ostentación externa ni vuestra riqueza, sino vuestros corazones y vuestras obras.',
    keyFigures: ['Muhammad Khwarazm Shah', 'El Viajero Abu Bakr', 'Iblis y las Trampas del Mundo']
  },
  {
    id: 'b5-s5',
    bookNumber: 5,
    storyNumber: 5,
    titleEs: 'El Hombre que Proclamó ser Profeta y el Alimento del Espíritu',
    titleEn: 'Story 5. The Man Who Claimed To Be A Prophet',
    pdfPage: 157,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b5-s4', 'b5-s6'],
    synopsis:
      'Llevado ante el rey por decir que es profeta, un hombre explica que mientras la multitud llegó a la tierra como niños dormidos, él hizo el viaje desde el mundo espiritual con los ojos abiertos, alimentándose de la misma inspiración con que Dios enseña a las abejas a labrar la miel. Incluye al amante que entrega su vida como raíz del amor.',
    mysticalMoral:
      'Quien se nutre del vino espiritual de la revelación despierta la envidia de los mundanos, pero alcanza la raíz misma del amor, que es dar la vida por el Amado.',
    keyQuoteEn: 'All these things you have done are but the branches of love; you have not yet attained to the root, which is to give up life itself.',
    keyQuoteEs: 'Todas esas obras que has hecho son sólo las ramas del amor; aún no has alcanzado la raíz, que es entregar la vida misma por tu Amado.',
    keyFigures: ['El Hombre Inspirado', 'El Rey', 'El Amante y su Amada']
  },
  {
    id: 'b5-s6',
    bookNumber: 5,
    storyNumber: 6,
    titleEs: 'El Discípulo que Imitaba Ciegamente el Llanto de su Shaikh',
    titleEn: 'Story 6. The Disciple Who Blindly Imitated His Shaikh',
    pdfPage: 158,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon'],
    relatedStoryIds: ['b2-s1', 'b5-s10'],
    synopsis:
      'Un joven ignorante ve llorar a un santo Shaikh y se pone a llorar copiosamente por mera imitación, como un sordo que ríe al ver reír a otros sin haber oído el chiste. Un verdadero discípulo le advierte que no presuma de ser igual al maestro. Incluye cómo se enseña a hablar a los loros con un espejo.',
    mysticalMoral:
      'Los santos son espejos detrás de los cuales habla la Razón Universal; imitar mecánicamente sus gestos externos sin haber librado treinta años de guerra espiritual es autoengaño.',
    keyQuoteEn: 'The light is the Shaikh\'s, the fountain the Shaikh\'s, And the outpouring of joy is also the Shaikh\'s, not his.',
    keyQuoteEs: 'La luz es del Maestro, la fuente es del Maestro, y el desborde del gozo es también del Maestro, no del imitador.',
    keyFigures: ['El Joven Imitador', 'El Santo Shaikh', 'El Hombre Caritativo de Zarwan']
  },
  {
    id: 'b5-s7',
    bookNumber: 5,
    storyNumber: 7,
    titleEs: 'Cómo Fue Creado Adán de un Puñado de Tierra Traído por el Ángel Izrail',
    titleEn: 'Story 7. How Adam Was Created Out Of A Handful Of Earth',
    pdfPage: 161,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b1-s16', 'b5-s8'],
    synopsis:
      'Dios envía sucesivamente a Gabriel, Miguel e Israfil a tomar un puñado de barro de la Tierra para formar el cuerpo de Adán, pero la Tierra llora suplicándoles que no lo hagan y ellos se compadecen. Finalmente Dios envía a Izrail, quien cumple inflexiblemente la orden divina explicando que él es sólo una lanza en la mano del Todopoderoso, por lo que es nombrado Ángel de la Muerte.',
    mysticalMoral:
      'No pidas clemencia a la lanza ni te enojes con las causas secundarias, sino vuelve tus ojos al Rey que empuña la lanza; la muerte es en realidad el segador que cosecha el grano para la vida eterna.',
    keyQuoteEn: 'Do not, like fools, crave mercy from the spear, But from the King in whose hand the spear is held.',
    keyQuoteEs: 'No implores clemencia a la lanza como los necios, sino al Rey en cuya mano está empuñada la lanza.',
    keyFigures: ['Gabriel, Miguel, Israfil e Izrail', 'La Tierra']
  },
  {
    id: 'b5-s8',
    bookNumber: 5,
    storyNumber: 8,
    titleEs: 'El Sultán Mahmud y la Cámara Secreta de Ayaz (Primera Parte)',
    titleEn: 'Story 8. Mahmud And Ayaz',
    pdfPage: 164,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b4-s4', 'b5-s9', 'b5-s13'],
    synopsis:
      'Los cortesanos envidiosos irrumpen de noche en la cámara secreta de Ayaz creyendo encontrar oro robado, pero sólo hallan sus viejos zapatos rústicos y su zalea rota, que Ayaz miraba cada día para recordar que era polvo y que todo su honor provenía del Rey.',
    mysticalMoral:
      'Quien recuerda su origen de barro como Adán vence la soberbia de Iblis, y cuando se absorbe por entero en el Amado se transforma de piedra oscura en rubí lleno de sol.',
    keyQuoteEn: 'Because Pharaoh was a stone, Mansur a ruby; Pharaoh an enemy of light, Mansur a friend.',
    keyQuoteEs: 'Porque el Faraón era una piedra y Mansur un rubí; el Faraón un enemigo de la luz, Mansur un amigo.',
    keyFigures: ['Sultán Mahmud de Ghazni', 'Ayaz', 'Los Cortesanos Envidiosos']
  },
  {
    id: 'b5-s9',
    bookNumber: 5,
    storyNumber: 9,
    titleEs: 'El Arrepentimiento Sincero de Nasuh',
    titleEn: 'Story 9. The Sincere Repentance Of Nasuh',
    pdfPage: 166,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['albedrio'],
    relatedStoryIds: ['b5-s8', 'b5-s10'],
    synopsis:
      'Nasuh trabajaba disfrazado de mujer en los baños femeninos hasta que un santo oró por él. Al perderse una joya real en el baño y ordenarse registrar a todos, Nasuh clama a Dios con tal terror y contrición que cae desvanecido «muriendo a sí mismo»; la joya aparece justo antes de que lo registren y Nasuh jamás vuelve al pecado.',
    mysticalMoral:
      'En el Día del Juicio nuestros propios miembros darán testimonio contra la falsa piedad; sólo el arrepentimiento que aniquila el viejo yo y aborrece el pecado pasado salva al alma.',
    keyQuoteEn: 'His natural self was annihilated, and he became a new creature, even as a corpse rising from the grave.',
    keyQuoteEs: 'Su yo natural quedó aniquilado y se convirtió en una criatura nueva, como un muerto que se levanta de la tumba.',
    keyFigures: ['Nasuh', 'El Hombre Santo']
  },
  {
    id: 'b5-s10',
    bookNumber: 5,
    storyNumber: 10,
    titleEs: 'El León Herido, el Zorro y el Asno que Repetía Preceptos sin Fe',
    titleEn: 'Story 10. The Lion, The Fox, And The Ass',
    pdfPage: 167,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['corazon', 'ego'],
    relatedStoryIds: ['b1-s5', 'b2-s1', 'b5-s6'],
    synopsis:
      'Un zorro engaña a un asno flaco para llevarlo a la guarida del león. El asno recita como un loro sublimes discursos sobre la confianza en Dios (Tawakkul), pero como en el fondo codicia el prado verde que le promete el zorro, cae dos veces en la trampa, es devorado por el león y el zorro se come su corazón y su hígado diciendo que nunca los tuvo. Incluye a Diógenes buscando un hombre con una linterna.',
    mysticalMoral:
      'Quien predica verdades espirituales por mera imitación verbal pero sigue dominado por la gula carnal se engaña a sí mismo y perece al primer embate de la ilusión.',
    keyQuoteEn: 'He has the scent of the apple, but not a piece of it; Though the mere imitator quotes a hundred proofs, They are all based on opinion, not on conviction.',
    keyQuoteEs: 'Aunque el mero imitador cite cien pruebas, todas se basan en la opinión y no en la convicción interior.',
    keyFigures: ['El León', 'El Zorro', 'El Asno Imitador', 'El Monje con la Linterna (Diógenes)']
  },
  {
    id: 'b5-s11',
    bookNumber: 5,
    storyNumber: 11,
    titleEs: 'El Musulmán que Intentó Convertir a un Mago Zoroastriano',
    titleEn: 'Story 11. The Mosalman Who Tried To Convert A Magian',
    pdfPage: 172,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['amor'],
    relatedStoryIds: ['b1-s5', 'b2-s11', 'b3-s13'],
    synopsis:
      'Un mago se excusa de convertirse alegando el determinismo absoluto (Jabriyan), mientras el musulmán le demuestra con la experiencia de la conciencia interior la realidad del libre albedrío (como el dueño del huerto que apalea al ladrón fatalista).',
    mysticalMoral:
      'El debate racional entre fatalistas y defensores del libre albedrío jamás terminará por vía silogística: sólo el Amor de Dios silencia la disputa y sumerge al alma en el asombro.',
    keyQuoteEn: 'Love of God cuts short reasoning, O beloved, For it is a present refuge from perplexities.',
    keyQuoteEs: 'El Amor de Dios corta de raíz las disputas de la razón, ¡oh amado!, pues es refugio presente contra toda perplejidad.',
    keyFigures: ['El Musulmán', 'El Mago Zoroastriano', 'El Ladrón Fatalista en el Huerto']
  },
  {
    id: 'b5-s12',
    bookNumber: 5,
    storyNumber: 12,
    titleEs: 'El Devoto Austero que Rompió la Jarra de Vino del Noble',
    titleEn: 'Story 12. The Devotee Who Broke The Noble\'s Wine-Jar',
    pdfPage: 173,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['amor', 'forma'],
    relatedStoryIds: ['b2-s15', 'b5-s13'],
    synopsis:
      'Un asceta de cerebro seco y sin guía espiritual rompe con una piedra la jarra de vino de un noble cristiano y luego se esconde cobardemente bajo un montón de lana cuando el noble viene a castigarlo. El noble defiende que ningún poder mundano iguala al deleite de la embriaguez (símbolo del vino espiritual).',
    mysticalMoral:
      'El ascetismo árido sin el vino del Amor divino ni la guía de un Maestro deja al alma triste y ciega, confundiendo la cáscara con la almendra.',
    keyQuoteEn: 'The vision of "The Friend" is far from his course, For he loses the kernel in his love for the shell.',
    keyQuoteEs: 'La visión del Amigo está lejos de su rumbo, pues pierde la almendra por su apego a la cáscara.',
    keyFigures: ['El Asceta Árido', 'El Noble']
  },
  {
    id: 'b5-s13',
    bookNumber: 5,
    storyNumber: 13,
    titleEs: 'Mahmud y Ayaz (Continuación: La Guerra Mayor y la Joya Quebrada)',
    titleEn: 'Story 13. Mahmud And Ayaz (Continued)',
    pdfPage: 175,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['amor', 'albedrio'],
    relatedStoryIds: ['b5-s8', 'b6-s1'],
    synopsis:
      'Incluye la historia del guerrero Iyazi en su celda librando la «Guerra Mayor» contra su pasión, el príncipe de Egipto que renuncia a su amada cautiva en favor de su capitán, y la prueba suprema de Ayaz: cuando el Rey ordena romper una joya invaluable, todos los cortesanos se niegan por codicia salvo Ayaz, quien la pulveriza al instante por obediencia amorosa al Rey e intercede luego por sus compañeros.',
    mysticalMoral:
      'La verdadera fe no se detiene en el valor de los dones creados (la joya), sino en la voluntad del Dador; la única sabiduría suprema es la entrega absoluta del yo a la voluntad de Dios.',
    keyQuoteEn: 'The wine is from that world, the vessels from this; The vessels are seen, but the wine is hidden!',
    keyQuoteEs: 'El vino procede de aquel mundo, las vasijas de éste; ¡las vasijas se ven, pero el vino está oculto!',
    keyFigures: ['Sultán Mahmud', 'Ayaz', 'El Santo Guerrero Iyazi', 'El Príncipe de Egipto']
  },

  // ==================== LIBRO VI (9 Historias) ====================
  {
    id: 'b6-s1',
    bookNumber: 6,
    storyNumber: 1,
    titleEs: 'El Esclavo Hindú que Amaba en Secreto a la Hija de su Amo',
    titleEn: 'Story 1. The Hindu Slave Who Loved His Master\'s Daughter',
    pdfPage: 185,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['albedrio', 'ego'],
    relatedStoryIds: ['b4-s8', 'b5-s13'],
    synopsis:
      'Tras el grandioso Prólogo del Libro VI (donde se anuncia que el valor del hombre depende del objeto de su aspiración), se narra cómo un amo cura la pasión ilusoria de su esclavo hindú mediante una boda fingida que le muestra la amargura real de lo que de lejos parecía seductor.',
    mysticalMoral:
      'Los placeres mundanos parecen dulces a distancia para engañar al incauto, pero al probarlos resultan amargos; sólo el corazón despierto recuerda la lección de la experiencia.',
    keyQuoteEn: 'A bird flies with its wings towards its nest, The wings of a man are his aspiration and aim.',
    keyQuoteEs: 'El pájaro vuela con sus alas hacia su nido; las alas del hombre son su aspiración y su meta.',
    keyFigures: ['El Esclavo Hindú', 'El Amo Prudente', 'Mahmud y Ayaz']
  },
  {
    id: 'b6-s2',
    bookNumber: 6,
    storyNumber: 2,
    titleEs: 'El Cazador Disfrazado de Ermitaño y el Pájaro',
    titleEn: 'Story 2. The Fowler And The Bird',
    pdfPage: 186,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b1-s5', 'b5-s3'],
    synopsis:
      'Un cazador se cubre de hierbas fingiendo ser un asceta. Un pájaro recela de él y debate sobre la prohibición del monacato en el Islam, pero vencido por la gula pide permiso para comer los granos de trigo de la trampa y queda atrapado.',
    mysticalMoral:
      'No es el destino lo que arrastra al hombre a la perdición, sino su propia codicia; cuando se cae en la red, el único remedio es el clamor sincero y la vigilancia nocturna.',
    keyQuoteEn: 'O comrades, our Beloved has closed up all paths; We are as lame deer, and He as a raging lion.',
    keyQuoteEs: '¡Oh compañeros, nuestro Amado ha cerrado todos los caminos de huida; somos como ciervos cojos y Él como un león rugiente!',
    keyFigures: ['El Cazador Disfrazado', 'El Pájaro Cautivo', 'El Amante que se Durmió en la Cita']
  },
  {
    id: 'b6-s3',
    bookNumber: 6,
    storyNumber: 3,
    titleEs: 'El Emir Turco Ebrio y el Juglar del «No Sé»',
    titleEn: 'Story 3. The Drunken Turkish Amir And The Minstrel',
    pdfPage: 187,
    themeKey: 'ego',
    themeLabel: 'Aniquilación del Ego (Fana) y Humildad',
    secondaryThemes: ['corazon', 'amor'],
    relatedStoryIds: ['b6-s4', 'b6-s6'],
    synopsis:
      'Un juglar místico canta ante un emir turco una canción compuesta sólo de negaciones («No sé si eres luna o ídolo, no sé dónde estoy ni dónde estás tú...»). Explicando por qué procede por vía negativa, Rumi añade la anécdota de los chiíes de Alepo en la Ashura y el hombre que toca el tambor frente a una casa vacía en Ramadán.',
    mysticalMoral:
      'Toda negación del yo prepara la afirmación del Único; la extrema cercanía de Dios actúa como un velo deslumbrante, y para quien ha muerto antes de morir, la muerte es fiesta.',
    keyQuoteEn: 'Thou art my face; what wonder if I see it not? Extreme nearness acts as an obscuring veil.',
    keyQuoteEs: 'Tú eres mi propio rostro; ¿qué tiene de extraño que no lo vea? La extrema cercanía actúa como un velo que oscurece.',
    keyFigures: ['El Emir Turco', 'El Juglar Místico', 'Ayisha y el Ciego']
  },
  {
    id: 'b6-s4',
    bookNumber: 6,
    storyNumber: 4,
    titleEs: 'La Compra y Liberación de Bilal por Abu Bakr (Y la Historia de Hilal)',
    titleEn: 'Story 4. The Purchase Of Bilal',
    pdfPage: 190,
    themeKey: 'amor',
    themeLabel: 'Amor Divino y Nostalgia del Origen',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b3-s1', 'b6-s3', 'b6-s5'],
    synopsis:
      'El esclavo abisinio Bilal es torturado bajo el sol ardiente con espinas por su amo judío, pero sólo pronuncia «¡Ahad, Ahad!» («¡El Único, el Único!»). Abu Bakr lo compra y lo libera por amor al Profeta. Le sigue la historia del santo mozo de cuadra Hilal, visitado en su enfermedad por el propio Mahoma.',
    mysticalMoral:
      'La fidelidad en la tribulación y el crecimiento paciente grado a grado transforman la luna nueva (Hilal) en luna llena (Badr).',
    keyQuoteEn: 'O raw hastener, through patient waiting, You must climb to the summit step by step.',
    keyQuoteEs: '¡Oh impaciente inmaduro!, mediante la espera paciente debes subir a la cumbre peldaño a peldaño.',
    keyFigures: ['Bilal', 'Abu Bakr', 'Hilal', 'El Profeta Mahoma']
  },
  {
    id: 'b6-s5',
    bookNumber: 6,
    storyNumber: 5,
    titleEs: 'El Sufí, el Enfermo Incurable y el Cadí',
    titleEn: 'Story 5. The Sufi And The Qazi',
    pdfPage: 192,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego', 'corazon'],
    relatedStoryIds: ['b5-s3', 'b6-s4'],
    synopsis:
      'Un médico aconseja a un enfermo desahuciado hacer cualquier antojo que le plazca; el enfermo golpea en la espalda a un sufí, quien lo lleva ante el Cadí. Cuando el Cadí declara que no puede condenar a un moribundo frente a quien profesa estar muerto al mundo, el enfermo abofetea también al propio Cadí, dando pie a un profundo diálogo sobre por qué existe el mal y el sufrimiento en el mundo.',
    mysticalMoral:
      'Los muertos no lloran por haber muerto, sino por haber desperdiciado las oportunidades de la vida; sin pruebas, amarguras ni tentaciones no existirían la templanza, la valentía ni la sabiduría.',
    keyQuoteEn: 'If there were no bitter things, Pray, O destroyer of virtue, by what name and title Could the King of kings address His slaves?',
    keyQuoteEs: 'Si no existieran las cosas amargas ni la tentación, dime, oh destructor de la virtud, ¿cómo podría haber hombres templados, valientes o generosos?',
    keyFigures: ['El Sufí', 'El Cadí', 'El Enfermo Incurable', 'El Turco y el Sastre']
  },
  {
    id: 'b6-s6',
    bookNumber: 6,
    storyNumber: 6,
    titleEs: 'El Faquir y el Tesoro Oculto Cerca del Arco',
    titleEn: 'Story 6. The Faqir And The Hidden Treasure',
    pdfPage: 196,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['ego'],
    relatedStoryIds: ['b6-s3', 'b6-s7', 'b6-s9'],
    synopsis:
      'Siguiendo un pergamino antiguo, el rey y luego un faquir disparan sus arcos con toda su fuerza buscando un tesoro sin hallarlo. Cuando el faquir se rinde humildemente a Dios, una voz le revela que no debía tensar el arco con orgullo, sino dejar caer la flecha suavemente a sus pies.',
    mysticalMoral:
      'Dios está «más cerca de ti que tu vena yugular»: cuanto más lejos dispara el filósofo la flecha de su especulación arrogante, más se aleja del tesoro que yace en la humildad de su propio pecho.',
    keyQuoteEn: 'The further a man shoots, the further off he is, And the more removed from the treasure he seeks.',
    keyQuoteEs: 'Cuanto más lejos dispara el hombre su flecha, más lejos se halla y más apartado está del tesoro que busca.',
    keyFigures: ['El Faquir Humilde', 'El Rey Arquero']
  },
  {
    id: 'b6-s7',
    bookNumber: 6,
    storyNumber: 7,
    titleEs: 'Los Tres Viajeros (El Musulmán, el Judío y el Cristiano) y el Ratón y la Rana',
    titleEn: 'Story 7. The Three Travelers',
    pdfPage: 200,
    themeKey: 'corazon',
    themeLabel: 'Conocimiento del Corazón vs. Intelecto',
    secondaryThemes: ['forma', 'amor'],
    relatedStoryIds: ['b1-s14', 'b6-s6', 'b6-s8'],
    synopsis:
      'Mientras el judío y el cristiano sueñan con sublimes ascensiones celestes, el viajero musulmán que veló en ayuno y humildad recibe despierto el manjar espiritual. Incluye la fábula de la rana acuática que se ata con un hilo a un ratón terrestre y es arrastrada por un cuervo, y la historia de Mahmud de Ghazni con la banda de ladrones nocturnos.',
    mysticalMoral:
      'El alma (la rana del agua) sufre por atarse con el hilo del apego al cuerpo (el ratón de tierra); bienaventurado el ojo que reconoce al Rey en la noche oscura de este mundo, pues ese reconocimiento lo salvará en el Día del Juicio.',
    keyQuoteEn: 'Know real science is seeing the fire directly, Not mere talk, inferring the fire from the smoke.',
    keyQuoteEs: 'Sabe que la verdadera ciencia es ver el fuego directamente, no la mera charla que infiere el fuego a partir del humo.',
    keyFigures: ['El Musulmán, el Judío y el Cristiano', 'El Ratón y la Rana', 'Mahmud y el Ladrón que lo Reconoció de Noche']
  },
  {
    id: 'b6-s8',
    bookNumber: 6,
    storyNumber: 8,
    titleEs: 'El Hombre que Recibía una Pensión del Prefecto de Tabriz',
    titleEn: 'Story 8. The Man Who Received A Pension From The Prefect Of Tabriz',
    pdfPage: 204,
    themeKey: 'albedrio',
    themeLabel: 'Libre Albedrío, Esfuerzo y Providencia',
    secondaryThemes: ['ego', 'corazon'],
    relatedStoryIds: ['b6-s7', 'b6-s9'],
    synopsis:
      'Un hombre endeudado viaja a Tabriz confiando en la generosidad del Prefecto, pero al llegar descubre que ha muerto. Arrepentido de haber puesto su esperanza en una criatura y no en el Creador (como José cuando pidió ayuda al copero en prisión), recibe finalmente el auxilio prodigioso del espíritu del Prefecto desde el más allá.',
    mysticalMoral:
      'Poner la confianza en las criaturas en vez del Creador prolonga la cautividad del alma; además, los espíritus de los santos que han dejado el cuerpo auxilian con mayor poder aún desde el mundo invisible.',
    keyQuoteEn: 'With eyes and heart look beyond mere water and clay, God alone is the Qibla; regard not two Qiblas!',
    keyQuoteEs: 'Con los ojos y el corazón mira más allá del agua y del barro: ¡sólo Dios es la Qibla; no mires hacia dos Qiblas!',
    keyFigures: ['El Deudor', 'El Prefecto de Tabriz', 'José en la Prisión']
  },
  {
    id: 'b6-s9',
    bookNumber: 6,
    storyNumber: 9,
    titleEs: 'El Rey, sus Tres Hijos y la Princesa de China (Con el Soñador de Bagdad)',
    titleEn: 'Story 9. The King And His Three Sons',
    pdfPage: 206,
    themeKey: 'forma',
    themeLabel: 'Forma Externa vs. Esencia Interior',
    secondaryThemes: ['amor', 'ego', 'corazon'],
    relatedStoryIds: ['b1-prologue', 'b1-s1', 'b3-s17', 'b6-s6'],
    synopsis:
      'Tres príncipes entran en un castillo prohibido, se enamoran del retrato de la Princesa de China y parten hacia Oriente. Incluye la célebre parábola del hombre de Bagdad que viaja a Egipto siguiendo un sueño y descubre que el tesoro estaba enterrado en su propia casa en Bagdad (pág. 211). En China, el príncipe mayor muere a las formas a los pies del Rey alcanzando la unión espiritual; el segundo cae por arrogancia; y el tercero, el más humilde, consuma la unión plena.',
    mysticalMoral:
      'No te embriagues con las copas de las formas visibles, sino mira al Dador del vino. Cuando el espíritu rompe su barca y se sumerge como pez en el Mar de la Unidad, toda palabra cesa en el Silencio inefable.',
    keyQuoteEn: 'Silence is this horse of wood, Silence is the guide and support of men at sea.',
    keyQuoteEs: 'El Silencio es este corcel de madera (la barca); el Silencio es la guía y el sostén de los navegantes en el mar de la Verdad.',
    keyFigures: ['Los Tres Príncipes', 'El Rey de China', 'Zulaikha y el Nombre de Yusuf', 'El Soñador de Bagdad']
  }
];
