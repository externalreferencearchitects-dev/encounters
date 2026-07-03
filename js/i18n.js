/* ENCOUNTERS — i18n.js
   Language toggle (EN/ES). Translations are stored as innerHTML strings
   so inline <em>/<br>/<cite> formatting inside headings and quotes is preserved. */
(function () {
  var titles = {
    en: 'ENCOUNTERS — A space where ecology matters. Primavera Sound 2027',
    es: 'ENCOUNTERS — Un espacio donde la ecología importa. Primavera Sound 2027'
  };

  var translations = {
    en: {
      'nav-designs': 'Designs',
      'nav-nest-desc': 'Woven scale skin, hexagonal floor',
      'nav-breath-desc': 'Solar-adaptive lattice facade',
      'nav-stillness-desc': 'Hanging sphere canopy, low-sensory refuge',
      'nav-materials': 'Materials',
      'nav-cycles': 'Cycles',
      'nav-lab': 'Lab',
      'nav-protocol': 'Protocol',

      'hero-kicker': 'A space where <em class="accent">ecology</em> matters.',
      'hero-meta': 'Primavera Sound · Barcelona · 3–7 June 2027',

      'intro-label': 'The installation',
      'intro-title': 'Built from what<br>the city <em class="accent">discards.</em>',
      'intro-body1': 'An ephemeral architectural installation built from urban organic waste transformed into biomaterials. A shelter to rest, play, and reflect — a moment of stillness within the festival.',
      'intro-body2': 'The shelter transforms a fragment of the festival into a living room for the commons: a soft landscape where architecture is not an object to admire, but an experience lived through the body and the senses. Inside the pavilion, artworks and collaborations with artists create moments of encounter and reflection.',

      'proposals-label': 'Design proposals',
      'proposals-title': 'Three visions,<br>one <em class="accent">circular</em> language.',
      'proposals-body': 'We propose three architectural directions for the shelter — each a distinct spatial and material interpretation of the same circular principles.',
      'proposal-nest-desc': 'Central gathering beneath a woven bioplastic scale skin, grounded in hexagonal shell flooring.',
      'proposal-breath-desc': 'A solar-responsive lattice of panels that open and close with the sun — a structure that breathes with the day.',
      'proposal-stillness-desc': 'A low-sensory refuge beneath a canopy of hanging biomaterial spheres — a quiet pod within the noise.',

      'concept-nest-name': 'Nest — Option 1',
      'concept-nest-title': 'Central gathering<br>with <em class="accent">hexagonal floors.</em>',
      'concept-nest-body': 'A scaffold pavilion wrapped in a warm, tessellated bioplastic scale skin. Modular hexagonal flooring creates flexible seating and gathering zones beneath layered scales that filter light and sound.',

      'colour-proposals-label': 'Colour proposals',
      'nest-surfaceA-badge': 'Nest · Surface A',
      'nest-colourA-title': 'Two proposed<br><em class="accent">colour sets.</em>',
      'nest-colourA-body': 'Drag to compare the two colour directions proposed for the bioplastic scale panels. The same tessellated surface — two distinct pigmentation paths. Slide to decide.',
      'compare-day': 'Day',
      'compare-night': 'Night',
      'compare-colourA': 'Colour Set A',
      'compare-colourB': 'Colour Set B',

      'nest-surfaceB-badge': 'Nest · Surface B',
      'nest-colourB-title': 'Warm amber or<br>cool <em class="accent">blue?</em>',
      'nest-colourB-body': 'The outer membrane can be cast in two directions: a warm yellow-orange palette drawn from harvest and fire, or a cooler yellow-blue hue referencing sky and sea. Drag to compare.',
      'compare-yellow-orange': 'Yellow &amp; Orange',
      'compare-yellow-blue': 'Yellow &amp; Blue',

      'nest-flooring-label': 'The ground',
      'nest-flooring-badge': 'Nest foundation',
      'nest-flooring-title': 'Hexagonal tiles from<br><em class="accent">shells.</em>',
      'nest-flooring-h3': 'Eggshell + Mussel Composite',
      'nest-flooring-body1': 'Ground mussel shells and calcium-rich eggshells cast into hexagonal tiles. This modular flooring system creates flexible seating zones without requiring adhesives or mechanical fasteners.',
      'nest-flooring-body2': 'After the festival, all tiles return to composting. The hexagonal geometry echoes natural tessellations found in honeycombs and flower petals — biomimetic design as foundational principle.',
      'nest-flooring-tag': 'Eggshell + Mussel · Green Cycle Material',

      'concept-breath-name': 'Breath — Option 02',
      'concept-breath-title': 'A lattice that<br>opens with the <em class="accent">sun.</em>',
      'concept-breath-body': 'A scaffold grid wrapped in translucent panels of varying density and opacity. Darker, denser panels face the strongest sun for shading; lighter, transparent panels let daylight through — a facade that breathes in response to solar exposure.',

      'breath-diagram-label': 'Adaptive facade',
      'breath-diagram-badge': 'Breath · Solar logic',
      'breath-diagram-title': 'Panels tuned<br>to <em class="accent">sunlight.</em>',
      'breath-diagram-body': 'Darker, opaque panels are placed where solar exposure is highest, providing maximum shading. Lighter, transparent panels are placed where less shading is needed, letting more light through.',

      'concept-stillness-name': 'Stillness — Option 03',
      'concept-stillness-title': 'Low-sensory intimate<br><em class="accent">refuge.</em>',
      'concept-stillness-body': 'A pavilion canopy of hanging translucent bioplastic spheres, filtering the festival into a soft haze of colour. Below, organic pebble-shaped seating and gauzy curtains create a sensory escape from festival intensity — a quiet pod within noise.',

      'stillness-colour-badge': 'Stillness · Canopy',
      'stillness-colour-title': 'Soft pastel or<br><em class="accent">blue &amp; yellow?</em>',
      'stillness-colour-body': 'The hanging bioplastic sphere canopy can be cast in two palettes: a soft multicolour pastel haze, or a bold blue-to-yellow gradient echoing sky and sun. Drag to compare.',
      'compare-pastel': 'Pastel',
      'compare-blueyellow': 'Blue &amp; Yellow',

      'materials-label': 'Biomaterials',
      'materials-title': 'Six materials,<br>one <em class="accent">circular</em> system.',
      'materials-body': 'Six substances normally associated with waste or biology, transformed into surfaces of encounter and environmental storytelling.',

      'mat-kombucha-body': 'Grown from fermented tea cultures into flexible, leather-like biofilm sheets.',
      'mat-kombucha-tag': 'Bacterial Cellulose',
      'mat-coffee-title': 'Coffee Grounds',
      'mat-coffee-body': 'Dense, dark, tactile tiles that carry the memory of every Barcelona morning.',
      'mat-coffee-tag': 'Lignin &amp; Cellulose',
      'mat-mycelium-title': 'Mycelium',
      'mat-mycelium-body': 'Mushroom root networks grown into lightweight, insulating structural forms.',
      'mat-mycelium-tag': 'Chitin (Polysaccharide)',
      'mat-chitosan-title': 'Chitosan',
      'mat-chitosan-body': 'Derived from crustacean shells, cast into rigid, biodegradable composite panels.',
      'mat-chitosan-tag': 'Deacetylated Chitin',
      'mat-gelatin-title': 'Gelatin',
      'mat-gelatin-body': 'Cast into translucent, jewel-like forms that catch and hold coloured light.',
      'mat-gelatin-tag': 'Collagen (Protein)',
      'mat-mussel-title': 'Mussel Shells',
      'mat-mussel-body': 'Ground and cast into hexagonal tiles that filter light and create acoustic texture.',
      'mat-mussel-tag': 'Calcium Carbonate',

      'art-label': 'Inside the pavilion',
      'art-badge': 'Art &amp; Collaboration',
      'art-title': 'Space for artistic<br><em class="accent">encounters.</em>',
      'art-lead': 'To foster engagement and purpose in the project through artistic interventions. To communicate the values of the pavilion and the festival through art, generating an experience of elevation, reflection, and respect for the space and its surroundings.',
      'art-quote': '"The important thing is not what you see, but what happens between people."<br><cite>— Rirkrit Tiravanija</cite>',
      'art-body1': 'We understand art as a tool for understanding and reformulating our visual and conceptual language, as well as our relationship with time. Just as Primavera Sound has established itself as one of the most relevant music festivals of our era, we propose inviting artists whose practices reflect this cultural relevance — creating a space where the audience can perceive themselves and relate to one another in a different way, through experience, knowledge, and perception.',
      'art-body2': 'Through the use of natural materials, the project proposes a radical gesture of extraordinary impact: a place where people can pause, feel, and experience possible futures from the present.',
      'art-body3': 'A space conceived to breathe deeply and inhabit time from another dimension — a positive act of renewal that invites us to slow down in order to keep going. An experience that opens the possibility of reconnecting with oneself, with others, and with one’s surroundings.',

      'cycles-label': 'Two metabolisms',
      'cycles-title': 'Nothing is designed<br>to be discarded.',
      'svg-grow': 'Grow', 'svg-organic': 'organic',
      'svg-decay': 'Decay', 'svg-compost': 'compost',
      'svg-regrow': 'Regrow', 'svg-nature': 'nature',
      'svg-green': 'Green', 'svg-cycle-a': 'Cycle',
      'svg-build': 'Build', 'svg-structure': 'structure',
      'svg-unbuild': 'Unbuild', 'svg-dismantle': 'dismantle',
      'svg-reuse': 'Reuse', 'svg-newlife': 'new life',
      'svg-blue': 'Blue', 'svg-cycle-b': 'Cycle',
      'cycle-green-tag': 'Green Cycle',
      'cycle-green-title': 'Organic matter returns to earth.',
      'cycle-green-body': 'Biomaterials designed to degrade with dignity and re-enter the biological cycle. What protects today can nourish tomorrow.',
      'cycle-blue-tag': 'Blue Cycle',
      'cycle-blue-title': 'Every element retains value.',
      'cycle-blue-body': 'The structure is modular, demountable, and traceable. Each element can live multiple lives in the technosphere.',

      'experience-label': 'Inside the festival',
      'experience-title': 'Rest inside change.',
      'experience-body1': 'A climate refuge and sensory shelter within the intensity of Primavera Sound. Through filtered light, tactile biomaterials, and spaces for play and contemplation.',
      'experience-body2': 'Comfort understood as something collective, emotional, and ecological. A slow rhythm inside the accelerated environment of the festival.',

      'lab-label': 'Material research',
      'lab-title': 'From the kitchen<br>to architecture.',
      'lab-body': 'Real samples, real experiments. Every material was tested and documented in the workshop before becoming part of the shelter.',
      'lab-filter-all': 'All',
      'lab-filter-process': 'Process',
      'lab-filter-orange': 'Orange Peel',
      'lab-filter-coffee': 'Coffee &amp; Eggshell',
      'lab-filter-bioplastic': 'Bioplastics',
      'lab-cap-1': 'Orange peel scale skin — overlapping tessellation',
      'lab-cap-2': 'Orange peel — modular woven mat',
      'lab-cap-3': 'Graphic Lab — bioplastics workshop',
      'lab-cap-4': 'Documentation Card — material test card',
      'lab-cap-5': 'Workshop — bioplastics recipes',
      'lab-cap-6': 'Hexagonal mold prototypes',
      'lab-cap-7': 'Wet Coffee + Gelatine — Experiment G26',
      'lab-cap-8': 'Eggshell + mussel composite — hexagonal tiles',
      'lab-cap-9': 'Composite tile — granular texture detail',
      'lab-cap-10': 'Composite tile — colour variation',
      'lab-cap-11': 'Coffee + eggshell sample',
      'lab-cap-12': 'Coffee + eggshell surface test',
      'lab-cap-13': '"Made entirely out of bio materials"',
      'lab-cap-14': 'Bioplastic structural test forms',
      'lab-cap-15': 'Bioplastic form — structural test variant',
      'lab-cap-16': 'Bioplastic — surface texture close-up',
      'lab-cap-17': 'Orange Bioplastic — perforated lattice panel',
      'lab-cap-18': 'Orange Bioplastic — translucency test',
      'lab-cap-19': 'Orange Bioplastic — flexibility test',
      'lab-cap-20': 'Blue Bioplastic — cellular network membrane',
      'lab-cap-21': 'Blue Bioplastic — cell structure detail',
      'lab-cap-22': 'Blue Bioplastic — light transmission test',
      'lab-cap-23': 'Yellow Bioplastic — hanging leaf pendants',
      'lab-cap-24': 'Yellow Bioplastic — pendant detail',
      'lab-cap-25': 'Green Bioplastic — turmeric + indigo blue',
      'lab-cap-26': 'Green Bioplastic — pigment variation',
      'lab-cap-27': 'Green Bioplastic — surface test',
      'lab-cap-28': 'Red Bioplastic — flexible translucent slab',
      'lab-cap-29': 'Red Bioplastic — colour &amp; flex detail',

      'protocol-label': 'Sustainability protocol',
      'protocol-title': 'The framework<br>behind the shelter.',
      'tab-genesis-btn': 'Genesis &amp; Demise',
      'tab-green-btn': 'Green Cycle',
      'tab-blue-btn': 'Blue Cycle',
      'tab-disassembly-btn': 'Design to Disassemble',
      'tab-nutrients-btn': 'No Waste',

      'tab-genesis-h3': 'The Ethics of Impermanence',
      'tab-genesis-p1': 'Architecture is a process, not a product. Nature teaches us that everything in an ecosystem has a certain duration — and that the exchange of energy and matter with the environment is crucial for its development.',
      'tab-genesis-p2': 'Inspired by the Japanese Metabolism movement of the 1950–60s, this project questions time, not only space.',
      'tab-genesis-quote': '"Yes, perfect as a constant process of change. The impermanent beauty, the immaterial beauty."<cite>— Kisho Kurokawa</cite>',
      'tab-genesis-facts-label': 'Material Lifespan',
      'fact-appliances': 'Appliances', 'fact-appliances-yrs': '5–10 years',
      'fact-interior': 'Interior design', 'fact-interior-yrs': '5–20 years',
      'fact-services': 'Services / MEP', 'fact-services-yrs': '5–30 years',
      'fact-skin': 'Skin / envelope', 'fact-skin-yrs': '30–60 years',
      'fact-structure': 'Structure', 'fact-structure-yrs': '60–600 years',

      'tab-green-h3': 'Biosphere Nutrients',
      'tab-green-p1': 'The Green Cycle allows organic matter to return safely to the earth through composting and natural degradation. Materials in this cycle are designed to re-enter nature without contaminating it.',
      'tab-green-p2': 'The shelter’s biomaterial skins — mussel shells, eggshells, coffee grounds, orange peels — are all Green Cycle materials.',
      'tab-green-facts-label': 'Material Types',
      'green-type-1-t': 'Biodegradable', 'green-type-1-d': 'Returns 100% naturally to the organic cycle through biological activity.',
      'green-type-2-t': 'Bioregenerative', 'green-type-2-d': 'Self-sustaining and balanced. Each element sustains and is sustained by the others.',
      'green-type-3-t': 'Bio-enhancer', 'green-type-3-d': 'Material that re-enters nature and simultaneously improves its environment.',
      'green-type-4-t': 'Biocompostable', 'green-type-4-d': 'Must disintegrate 100% within two months of entering the composting process.',

      'tab-blue-h3': 'Technosphere Nutrients',
      'tab-blue-p1': 'The Blue Cycle ensures that structural elements remain modular, traceable, and reusable over time. Technical materials don’t die — they circulate indefinitely in the technosphere.',
      'tab-blue-p2': 'Each time a material is reused, its embodied energy is reduced by up to 50%.',
      'tab-blue-facts-label': 'Strategies',
      'blue-type-1-t': 'Primary Reuse', 'blue-type-1-d': 'Product reused in its original form and purpose.',
      'blue-type-2-t': 'Secondary Reuse', 'blue-type-2-d': 'Reuse with a different purpose. Requires minimal modification.',
      'blue-type-3-t': 'Upcycling', 'blue-type-3-d': 'Transforms waste into something of equal or greater value.',
      'blue-type-4-t': 'No Downcycling', 'blue-type-4-d': 'Avoid processes that reduce material quality — design for reuse from the start.',

      'disassembly-1-title': 'Method',
      'disassembly-1-item1': 'Document the deconstruction process',
      'disassembly-1-item2': 'List all materials and connections',
      'disassembly-1-item3': 'Design an accessible disassembly strategy',
      'disassembly-1-item4': 'Define the future reuse of each component',
      'disassembly-2-title': 'Materials',
      'disassembly-2-item1': 'Select by environmental impact',
      'disassembly-2-item2': 'Abolish composite / hybrid materials',
      'disassembly-2-item3': 'Differentiate Green and Blue cycle parts',
      'disassembly-2-item4': 'Eliminate toxic or high-carbon materials',
      'disassembly-3-title': 'Connections',
      'disassembly-3-item1': 'Mechanical joints only',
      'disassembly-3-item2': 'No glue, no sealants',
      'disassembly-3-item3': 'Accessible connections, minimal tools',
      'disassembly-3-item4': 'Standard connectors for future reuse',
      'disassembly-4-title': 'Standardisation',
      'disassembly-4-item1': 'Build on a grid, use modules',
      'disassembly-4-item2': 'Modularity aids workers and reuse',
      'disassembly-4-item3': 'Use standard systems and connections',
      'disassembly-4-item4': 'Non-standard → natural cycle',

      'tab-nutrients-h3': 'No Waste, Only Nutrients',
      'tab-nutrients-p': 'Eliminating the concept of waste means designing from the beginning with the understanding that there is no waste — only nutrients. The nutrients themselves determine the design.',
      'tab-nutrients-quote': '"Building is a natural function. All constructive activity has as a framework nature."<cite>— Ken Yeang</cite>',
      'tab-nutrients-facts-label': 'Two Metabolisms',
      'nutrients-1-t': 'Green Nutrients', 'nutrients-1-d': 'Air, water, renewables, biosynthetics → return to biosphere',
      'nutrients-2-t': 'Blue Nutrients', 'nutrients-2-d': 'Metals, minerals, lab synthetics → circulate in technosphere',
      'nutrients-3-t': 'No Hybrids', 'nutrients-3-d': 'Composite materials cannot be used in either cycle',
      'nutrients-4-t': 'Processes, Not Objects', 'nutrients-4-d': 'Design is a metabolic process of continuous transformation',

      'principles-label': 'What we stand for',
      'principle-1': 'Design cycles, not waste.',
      'principle-2': 'Waste becomes resource.',
      'principle-3': 'Build · Unbuild · Reuse.',
      'principle-4': 'Shells that become shelter.',
      'principle-5': 'Designed to return.',
      'principle-6': 'Not permanent. Regenerative.',

      'pitch-label': 'A proposal',
      'pitch-title': 'A temporary shelter<br>that becomes a <em class="accent">model.</em>',
      'pitch-body1': 'Redefining how urban festivals activate public space with circular materials and collective care. Reducing dependence on fossil-based materials while engaging communities in sustainable practices.',
      'pitch-body2': 'A scalable, replicable framework for the future of cultural infrastructure.',
      'pitch-tag-1': 'Climate Adaptation',
      'pitch-tag-2': 'Circular Economy',
      'pitch-tag-3': 'Biomaterials',
      'pitch-tag-4': 'Collective Art',
      'pitch-tag-5': 'Urban Ecology',

      'footer-tagline': 'A space where ecology matters.<br>Primavera Sound · Barcelona · 3–7 June 2027',
      'footer-heading-project': 'Project',
      'footer-link-biomaterials': 'Biomaterials',
      'footer-link-cycles': 'Cycles',
      'footer-link-lab': 'Material Lab',
      'footer-heading-protocol': 'Protocol',
      'footer-link-sustainability': 'Sustainability',
      'footer-link-principles': 'Principles',
      'footer-link-pitch': 'Pitch 2027',
      'footer-heading-contact': 'Contact',
      'footer-bottom-2': 'Primavera Sound 2027 Proposal'
    },

    es: {
      'nav-designs': 'Diseños',
      'nav-nest-desc': 'Piel escamada tejida, suelo hexagonal',
      'nav-breath-desc': 'Fachada de celosía solar-adaptativa',
      'nav-stillness-desc': 'Dosel de esferas colgantes, refugio de baja estimulación',
      'nav-materials': 'Materiales',
      'nav-cycles': 'Ciclos',
      'nav-lab': 'Laboratorio',
      'nav-protocol': 'Protocolo',

      'hero-kicker': 'Un espacio donde la <em class="accent">ecología</em> importa.',
      'hero-meta': 'Primavera Sound · Barcelona · 3–7 de junio de 2027',

      'intro-label': 'La instalación',
      'intro-title': 'Construido con lo<br>que la ciudad <em class="accent">descarta.</em>',
      'intro-body1': 'Una instalación arquitectónica efímera construida a partir de residuos orgánicos urbanos transformados en biomateriales. Un refugio para descansar, jugar y reflexionar — un momento de quietud dentro del festival.',
      'intro-body2': 'El refugio transforma un fragmento del festival en una sala de estar para lo común: un paisaje suave donde la arquitectura no es un objeto para admirar, sino una experiencia vivida a través del cuerpo y los sentidos. En el interior del pabellón, obras de arte y colaboraciones con artistas crean momentos de encuentro y reflexión.',

      'proposals-label': 'Propuestas de diseño',
      'proposals-title': 'Tres visiones,<br>un lenguaje <em class="accent">circular.</em>',
      'proposals-body': 'Proponemos tres direcciones arquitectónicas para el refugio — cada una una interpretación espacial y material distinta de los mismos principios circulares.',
      'proposal-nest-desc': 'Encuentro central bajo una piel de escamas de bioplástico tejida, asentada sobre un suelo hexagonal de conchas.',
      'proposal-breath-desc': 'Una celosía de paneles solar-adaptativos que se abren y cierran con el sol — una estructura que respira con el día.',
      'proposal-stillness-desc': 'Un refugio de baja estimulación bajo un dosel de esferas de biomaterial colgantes — una cápsula de calma dentro del ruido.',

      'concept-nest-name': 'Nest — Opción 1',
      'concept-nest-title': 'Encuentro central<br>con <em class="accent">suelos hexagonales.</em>',
      'concept-nest-body': 'Un pabellón de andamiaje envuelto en una cálida piel de escamas de bioplástico teseladas. Un suelo hexagonal modular crea zonas flexibles de asiento y encuentro bajo capas de escamas que filtran la luz y el sonido.',

      'colour-proposals-label': 'Propuestas de color',
      'nest-surfaceA-badge': 'Nest · Superficie A',
      'nest-colourA-title': 'Dos paletas<br>de <em class="accent">color propuestas.</em>',
      'nest-colourA-body': 'Desliza para comparar las dos direcciones de color propuestas para los paneles de escamas de bioplástico. La misma superficie teselada — dos caminos de pigmentación distintos. Desliza para decidir.',
      'compare-day': 'Día',
      'compare-night': 'Noche',
      'compare-colourA': 'Paleta A',
      'compare-colourB': 'Paleta B',

      'nest-surfaceB-badge': 'Nest · Superficie B',
      'nest-colourB-title': '¿Ámbar cálido<br>o <em class="accent">azul frío?</em>',
      'nest-colourB-body': 'La membrana exterior puede fundirse en dos direcciones: una paleta cálida amarillo-naranja inspirada en la cosecha y el fuego, o un tono amarillo-azul más frío que evoca el cielo y el mar. Desliza para comparar.',
      'compare-yellow-orange': 'Amarillo y Naranja',
      'compare-yellow-blue': 'Amarillo y Azul',

      'nest-flooring-label': 'El suelo',
      'nest-flooring-badge': 'Cimiento de Nest',
      'nest-flooring-title': 'Baldosas hexagonales<br>de <em class="accent">conchas.</em>',
      'nest-flooring-h3': 'Compuesto de Cáscara de Huevo + Mejillón',
      'nest-flooring-body1': 'Conchas de mejillón molidas y cáscaras de huevo ricas en calcio fundidas en baldosas hexagonales. Este sistema de suelo modular crea zonas de asiento flexibles sin necesidad de adhesivos ni fijaciones mecánicas.',
      'nest-flooring-body2': 'Tras el festival, todas las baldosas vuelven al compostaje. La geometría hexagonal evoca las teselaciones naturales de los panales y los pétalos de flor — el diseño biomimético como principio fundacional.',
      'nest-flooring-tag': 'Cáscara de huevo + Mejillón · Material de Ciclo Verde',

      'concept-breath-name': 'Breath — Opción 02',
      'concept-breath-title': 'Una celosía que<br>se abre con el <em class="accent">sol.</em>',
      'concept-breath-body': 'Una retícula de andamiaje envuelta en paneles translúcidos de densidad y opacidad variables. Los paneles más oscuros y densos se orientan hacia el sol más fuerte para dar sombra; los paneles más claros y transparentes dejan pasar la luz — una fachada que respira en respuesta a la exposición solar.',

      'breath-diagram-label': 'Fachada adaptativa',
      'breath-diagram-badge': 'Breath · Lógica solar',
      'breath-diagram-title': 'Paneles ajustados<br>a la <em class="accent">luz solar.</em>',
      'breath-diagram-body': 'Los paneles oscuros y opacos se colocan donde la exposición solar es mayor, ofreciendo la máxima sombra. Los paneles claros y transparentes se colocan donde se necesita menos sombra, dejando pasar más luz.',

      'concept-stillness-name': 'Stillness — Opción 03',
      'concept-stillness-title': 'Refugio íntimo<br>de <em class="accent">baja estimulación.</em>',
      'concept-stillness-body': 'Un dosel de esferas translúcidas de bioplástico colgantes que filtra el festival en una suave bruma de color. Debajo, asientos orgánicos con forma de guijarro y cortinas vaporosas crean una escapada sensorial de la intensidad del festival — una cápsula de calma dentro del ruido.',

      'stillness-colour-badge': 'Stillness · Dosel',
      'stillness-colour-title': '¿Pastel suave<br>o <em class="accent">azul y amarillo?</em>',
      'stillness-colour-body': 'El dosel de esferas de bioplástico colgantes puede fundirse en dos paletas: una suave bruma pastel multicolor, o un audaz degradado de azul a amarillo que evoca el cielo y el sol. Desliza para comparar.',
      'compare-pastel': 'Pastel',
      'compare-blueyellow': 'Azul y Amarillo',

      'materials-label': 'Biomateriales',
      'materials-title': 'Seis materiales,<br>un sistema <em class="accent">circular.</em>',
      'materials-body': 'Seis sustancias normalmente asociadas con residuos o biología, transformadas en superficies de encuentro y narrativa medioambiental.',

      'mat-kombucha-body': 'Cultivada a partir de té fermentado en láminas de biopelícula flexibles, similares al cuero.',
      'mat-kombucha-tag': 'Celulosa Bacteriana',
      'mat-coffee-title': 'Posos de Café',
      'mat-coffee-body': 'Baldosas densas, oscuras y táctiles que llevan la memoria de cada mañana barcelonesa.',
      'mat-coffee-tag': 'Lignina y Celulosa',
      'mat-mycelium-title': 'Micelio',
      'mat-mycelium-body': 'Redes de raíces de hongos cultivadas en formas estructurales ligeras y aislantes.',
      'mat-mycelium-tag': 'Quitina (Polisacárido)',
      'mat-chitosan-title': 'Quitosano',
      'mat-chitosan-body': 'Derivado de caparazones de crustáceos, fundido en paneles compuestos rígidos y biodegradables.',
      'mat-chitosan-tag': 'Quitina Desacetilada',
      'mat-gelatin-title': 'Gelatina',
      'mat-gelatin-body': 'Fundida en formas translúcidas, como joyas, que capturan y retienen la luz de color.',
      'mat-gelatin-tag': 'Colágeno (Proteína)',
      'mat-mussel-title': 'Conchas de Mejillón',
      'mat-mussel-body': 'Molidas y fundidas en baldosas hexagonales que filtran la luz y crean textura acústica.',
      'mat-mussel-tag': 'Carbonato de Calcio',

      'art-label': 'Dentro del pabellón',
      'art-badge': 'Arte y Colaboración',
      'art-title': 'Espacio para<br><em class="accent">encuentros</em> artísticos.',
      'art-lead': 'Fomentar el compromiso y el propósito del proyecto a través de intervenciones artísticas. Comunicar los valores del pabellón y del festival mediante el arte, generando una experiencia de elevación, reflexión y respeto por el espacio y su entorno.',
      'art-quote': '"Lo importante no es lo que se ve, sino lo que sucede entre las personas."<br><cite>— Rirkrit Tiravanija</cite>',
      'art-body1': 'Entendemos el arte como una herramienta para comprender y reformular nuestro lenguaje visual y conceptual, así como nuestra relación con el tiempo. Del mismo modo que Primavera Sound se ha consolidado como uno de los festivales de música más relevantes de nuestra época, proponemos invitar a artistas cuyas prácticas reflejen esta relevancia cultural — creando un espacio donde el público pueda percibirse y relacionarse de una manera diferente, a través de la experiencia, el conocimiento y la percepción.',
      'art-body2': 'Mediante el uso de materiales naturales, el proyecto propone un gesto radical de impacto extraordinario: un lugar donde las personas puedan detenerse, sentir y experimentar futuros posibles desde el presente.',
      'art-body3': 'Un espacio concebido para respirar profundamente y habitar el tiempo desde otra dimensión: un acto positivo de renovación que invita a desacelerar para poder continuar. Una experiencia que abre la posibilidad de reconectar con uno mismo, con los demás y con el entorno.',

      'cycles-label': 'Dos metabolismos',
      'cycles-title': 'Nada está diseñado<br>para ser desechado.',
      'svg-grow': 'Crecer', 'svg-organic': 'orgánico',
      'svg-decay': 'Decaer', 'svg-compost': 'abono',
      'svg-regrow': 'Regenerar', 'svg-nature': 'naturaleza',
      'svg-green': 'Ciclo', 'svg-cycle-a': 'Verde',
      'svg-build': 'Construir', 'svg-structure': 'estructura',
      'svg-unbuild': 'Desmontar', 'svg-dismantle': 'desmantelar',
      'svg-reuse': 'Reutilizar', 'svg-newlife': 'nueva vida',
      'svg-blue': 'Ciclo', 'svg-cycle-b': 'Azul',
      'cycle-green-tag': 'Ciclo Verde',
      'cycle-green-title': 'La materia orgánica vuelve a la tierra.',
      'cycle-green-body': 'Biomateriales diseñados para degradarse con dignidad y reincorporarse al ciclo biológico. Lo que protege hoy puede nutrir mañana.',
      'cycle-blue-tag': 'Ciclo Azul',
      'cycle-blue-title': 'Cada elemento conserva su valor.',
      'cycle-blue-body': 'La estructura es modular, desmontable y trazable. Cada elemento puede vivir múltiples vidas en la tecnosfera.',

      'experience-label': 'Dentro del festival',
      'experience-title': 'Descansar dentro del cambio.',
      'experience-body1': 'Un refugio climático y sensorial dentro de la intensidad de Primavera Sound. A través de luz filtrada, biomateriales táctiles y espacios para el juego y la contemplación.',
      'experience-body2': 'El confort entendido como algo colectivo, emocional y ecológico. Un ritmo lento dentro del entorno acelerado del festival.',

      'lab-label': 'Investigación de materiales',
      'lab-title': 'De la cocina<br>a la arquitectura.',
      'lab-body': 'Muestras reales, experimentos reales. Cada material fue probado y documentado en el taller antes de formar parte del refugio.',
      'lab-filter-all': 'Todos',
      'lab-filter-process': 'Proceso',
      'lab-filter-orange': 'Cáscara de Naranja',
      'lab-filter-coffee': 'Café y Cáscara de Huevo',
      'lab-filter-bioplastic': 'Bioplásticos',
      'lab-cap-1': 'Piel de escamas de cáscara de naranja — teselación superpuesta',
      'lab-cap-2': 'Cáscara de naranja — estera tejida modular',
      'lab-cap-3': 'Graphic Lab — taller de bioplásticos',
      'lab-cap-4': 'Ficha de Documentación — tarjeta de prueba de material',
      'lab-cap-5': 'Taller — recetas de bioplásticos',
      'lab-cap-6': 'Prototipos de moldes hexagonales',
      'lab-cap-7': 'Café húmedo + Gelatina — Experimento G26',
      'lab-cap-8': 'Compuesto de cáscara de huevo + mejillón — baldosas hexagonales',
      'lab-cap-9': 'Baldosa compuesta — detalle de textura granular',
      'lab-cap-10': 'Baldosa compuesta — variación de color',
      'lab-cap-11': 'Muestra de café + cáscara de huevo',
      'lab-cap-12': 'Prueba de superficie de café + cáscara de huevo',
      'lab-cap-13': '"Hecho enteramente con biomateriales"',
      'lab-cap-14': 'Formas de prueba estructural de bioplástico',
      'lab-cap-15': 'Forma de bioplástico — variante de prueba estructural',
      'lab-cap-16': 'Bioplástico — primer plano de textura superficial',
      'lab-cap-17': 'Bioplástico naranja — panel de celosía perforado',
      'lab-cap-18': 'Bioplástico naranja — prueba de translucidez',
      'lab-cap-19': 'Bioplástico naranja — prueba de flexibilidad',
      'lab-cap-20': 'Bioplástico azul — membrana de red celular',
      'lab-cap-21': 'Bioplástico azul — detalle de estructura celular',
      'lab-cap-22': 'Bioplástico azul — prueba de transmisión de luz',
      'lab-cap-23': 'Bioplástico amarillo — colgantes de hoja',
      'lab-cap-24': 'Bioplástico amarillo — detalle del colgante',
      'lab-cap-25': 'Bioplástico verde — cúrcuma + azul índigo',
      'lab-cap-26': 'Bioplástico verde — variación de pigmento',
      'lab-cap-27': 'Bioplástico verde — prueba de superficie',
      'lab-cap-28': 'Bioplástico rojo — losa translúcida flexible',
      'lab-cap-29': 'Bioplástico rojo — detalle de color y flexibilidad',

      'protocol-label': 'Protocolo de sostenibilidad',
      'protocol-title': 'El marco<br>detrás del refugio.',
      'tab-genesis-btn': 'Génesis y Extinción',
      'tab-green-btn': 'Ciclo Verde',
      'tab-blue-btn': 'Ciclo Azul',
      'tab-disassembly-btn': 'Diseño para Desmontar',
      'tab-nutrients-btn': 'Cero Residuos',

      'tab-genesis-h3': 'La Ética de lo Efímero',
      'tab-genesis-p1': 'La arquitectura es un proceso, no un producto. La naturaleza nos enseña que todo en un ecosistema tiene una duración determinada — y que el intercambio de energía y materia con el entorno es crucial para su desarrollo.',
      'tab-genesis-p2': 'Inspirado en el movimiento japonés del Metabolismo de los años 1950-60, este proyecto cuestiona el tiempo, no solo el espacio.',
      'tab-genesis-quote': '"Sí, perfecto como un proceso constante de cambio. La belleza impermanente, la belleza inmaterial."<cite>— Kisho Kurokawa</cite>',
      'tab-genesis-facts-label': 'Vida Útil del Material',
      'fact-appliances': 'Electrodomésticos', 'fact-appliances-yrs': '5–10 años',
      'fact-interior': 'Interiorismo', 'fact-interior-yrs': '5–20 años',
      'fact-services': 'Instalaciones', 'fact-services-yrs': '5–30 años',
      'fact-skin': 'Piel / envolvente', 'fact-skin-yrs': '30–60 años',
      'fact-structure': 'Estructura', 'fact-structure-yrs': '60–600 años',

      'tab-green-h3': 'Nutrientes de la Biosfera',
      'tab-green-p1': 'El Ciclo Verde permite que la materia orgánica vuelva de forma segura a la tierra mediante el compostaje y la degradación natural. Los materiales de este ciclo están diseñados para reincorporarse a la naturaleza sin contaminarla.',
      'tab-green-p2': 'Las pieles de biomaterial del refugio — conchas de mejillón, cáscaras de huevo, posos de café, cáscaras de naranja — son todas materiales del Ciclo Verde.',
      'tab-green-facts-label': 'Tipos de Material',
      'green-type-1-t': 'Biodegradable', 'green-type-1-d': 'Regresa 100% de forma natural al ciclo orgánico mediante actividad biológica.',
      'green-type-2-t': 'Bioregenerativo', 'green-type-2-d': 'Autosuficiente y equilibrado. Cada elemento sostiene y es sostenido por los demás.',
      'green-type-3-t': 'Biopotenciador', 'green-type-3-d': 'Material que se reincorpora a la naturaleza y mejora simultáneamente su entorno.',
      'green-type-4-t': 'Biocompostable', 'green-type-4-d': 'Debe desintegrarse al 100% dentro de los dos meses posteriores al inicio del compostaje.',

      'tab-blue-h3': 'Nutrientes de la Tecnosfera',
      'tab-blue-p1': 'El Ciclo Azul garantiza que los elementos estructurales permanezcan modulares, trazables y reutilizables a lo largo del tiempo. Los materiales técnicos no mueren — circulan indefinidamente en la tecnosfera.',
      'tab-blue-p2': 'Cada vez que un material se reutiliza, su energía incorporada se reduce hasta en un 50%.',
      'tab-blue-facts-label': 'Estrategias',
      'blue-type-1-t': 'Reutilización Primaria', 'blue-type-1-d': 'El producto se reutiliza en su forma y propósito original.',
      'blue-type-2-t': 'Reutilización Secundaria', 'blue-type-2-d': 'Reutilización con un propósito diferente. Requiere una modificación mínima.',
      'blue-type-3-t': 'Upcycling', 'blue-type-3-d': 'Transforma el residuo en algo de igual o mayor valor.',
      'blue-type-4-t': 'Sin Downcycling', 'blue-type-4-d': 'Evitar procesos que reduzcan la calidad del material — diseñar para la reutilización desde el principio.',

      'disassembly-1-title': 'Método',
      'disassembly-1-item1': 'Documentar el proceso de deconstrucción',
      'disassembly-1-item2': 'Listar todos los materiales y conexiones',
      'disassembly-1-item3': 'Diseñar una estrategia de desmontaje accesible',
      'disassembly-1-item4': 'Definir la reutilización futura de cada componente',
      'disassembly-2-title': 'Materiales',
      'disassembly-2-item1': 'Seleccionar según el impacto ambiental',
      'disassembly-2-item2': 'Eliminar materiales compuestos / híbridos',
      'disassembly-2-item3': 'Diferenciar las piezas del ciclo Verde y Azul',
      'disassembly-2-item4': 'Eliminar materiales tóxicos o de alto carbono',
      'disassembly-3-title': 'Conexiones',
      'disassembly-3-item1': 'Solo uniones mecánicas',
      'disassembly-3-item2': 'Sin pegamento, sin selladores',
      'disassembly-3-item3': 'Conexiones accesibles, herramientas mínimas',
      'disassembly-3-item4': 'Conectores estándar para reutilización futura',
      'disassembly-4-title': 'Estandarización',
      'disassembly-4-item1': 'Construir sobre una retícula, usar módulos',
      'disassembly-4-item2': 'La modularidad ayuda a los trabajadores y a la reutilización',
      'disassembly-4-item3': 'Usar sistemas y conexiones estándar',
      'disassembly-4-item4': 'No estándar → ciclo natural',

      'tab-nutrients-h3': 'Cero Residuos, Solo Nutrientes',
      'tab-nutrients-p': 'Eliminar el concepto de residuo significa diseñar desde el principio entendiendo que no existe el residuo — solo nutrientes. Los propios nutrientes determinan el diseño.',
      'tab-nutrients-quote': '"Construir es una función natural. Toda actividad constructiva tiene como marco a la naturaleza."<cite>— Ken Yeang</cite>',
      'tab-nutrients-facts-label': 'Dos Metabolismos',
      'nutrients-1-t': 'Nutrientes Verdes', 'nutrients-1-d': 'Aire, agua, renovables, biosintéticos → vuelven a la biosfera',
      'nutrients-2-t': 'Nutrientes Azules', 'nutrients-2-d': 'Metales, minerales, sintéticos de laboratorio → circulan en la tecnosfera',
      'nutrients-3-t': 'Sin Híbridos', 'nutrients-3-d': 'Los materiales compuestos no pueden usarse en ningún ciclo',
      'nutrients-4-t': 'Procesos, No Objetos', 'nutrients-4-d': 'El diseño es un proceso metabólico de transformación continua',

      'principles-label': 'En qué creemos',
      'principle-1': 'Diseñar ciclos, no residuos.',
      'principle-2': 'El residuo se convierte en recurso.',
      'principle-3': 'Construir · Desmontar · Reutilizar.',
      'principle-4': 'Conchas que se convierten en refugio.',
      'principle-5': 'Diseñado para volver.',
      'principle-6': 'No permanente. Regenerativo.',

      'pitch-label': 'Una propuesta',
      'pitch-title': 'Un refugio temporal<br>que se convierte en <em class="accent">modelo.</em>',
      'pitch-body1': 'Redefiniendo cómo los festivales urbanos activan el espacio público con materiales circulares y cuidado colectivo. Reduciendo la dependencia de materiales de origen fósil mientras se involucra a las comunidades en prácticas sostenibles.',
      'pitch-body2': 'Un marco escalable y replicable para el futuro de la infraestructura cultural.',
      'pitch-tag-1': 'Adaptación Climática',
      'pitch-tag-2': 'Economía Circular',
      'pitch-tag-3': 'Biomateriales',
      'pitch-tag-4': 'Arte Colectivo',
      'pitch-tag-5': 'Ecología Urbana',

      'footer-tagline': 'Un espacio donde la ecología importa.<br>Primavera Sound · Barcelona · 3–7 de junio de 2027',
      'footer-heading-project': 'Proyecto',
      'footer-link-biomaterials': 'Biomateriales',
      'footer-link-cycles': 'Ciclos',
      'footer-link-lab': 'Laboratorio de Materiales',
      'footer-heading-protocol': 'Protocolo',
      'footer-link-sustainability': 'Sostenibilidad',
      'footer-link-principles': 'Principios',
      'footer-link-pitch': 'Propuesta 2027',
      'footer-heading-contact': 'Contacto',
      'footer-bottom-2': 'Propuesta Primavera Sound 2027'
    }
  };

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    document.documentElement.lang = lang;

    var titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) titleEl.textContent = titles[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = translations[lang][key];
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
    });

    try { localStorage.setItem('encounters-lang', lang); } catch (e) {}
  }

  function initLangSwitch() {
    var trigger = document.getElementById('langTrigger');
    var panel = document.getElementById('langPanel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = panel.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', function () {
      panel.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });

    panel.addEventListener('click', function (e) { e.stopPropagation(); });

    panel.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
        panel.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLangSwitch();
    var saved = 'en';
    try { saved = localStorage.getItem('encounters-lang') || 'en'; } catch (e) {}
    applyLanguage(saved);
  });
})();
