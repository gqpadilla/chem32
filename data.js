// Chem 32 reviewer content. In every question, c[0] is the correct choice (choices are shuffled on screen).
// Markup: ~CH3CH2OH~ subscripts digits; ^ starts a superscript (e.g. ~CO3^2-~).
window.COURSE = [
{
  id: "L1", title: "Introduction", sub: "Biomolecules, carbon, hydrocarbons, isomers, functional groups",
  sections: [
  {
    id: "1.1", title: "Biomolecules", slides: ["L1", 1, 6],
    notes: [
      "<b>Biomolecules</b> are compounds found in living organisms that are essential to biological processes. They are organic: mostly <b>C and H</b>, plus a few others: <b>O, N, P, S and X</b> (halogens F, Cl, Br, I).",
      "<b>Nucleic acids (DNA, RNA)</b> store the genetic code. The sequence of nucleotides determines the amino-acid sequence of proteins.",
      "<b>Proteins</b> are sequences of amino acids (<b>20 kinds</b>). The <i>order</i> of amino acids determines structure and function. Roles: major structural elements of cells, <b>transporters</b>, <b>enzymes/catalysts</b>, <b>antibodies and hormones</b>, and influencing gene activity.",
      "<b>Carbohydrates</b> are made mainly of C, H and O. They are energy sources and structural components, among the most abundant biomolecules on Earth. Built from four types of sugar units: <b>mono-, di-, oligo- and polysaccharides</b>.",
      "<b>Lipids</b> store energy, act as chemical messengers, form <b>membranes</b> and compartmentalize the cell interior into organelles (nucleus, mitochondrion)."
    ],
    quiz: [
      { q: "Which class of biomolecules stores an organism's genetic code?", c: ["Nucleic acids", "Proteins", "Lipids", "Carbohydrates"], x: "DNA and RNA store the genetic code; the nucleotide sequence determines the amino-acid sequence of proteins." },
      { q: "Proteins are built from how many different kinds of amino acids?", c: ["20", "4", "12", "64"], x: "Proteins are sequences of amino acids of 20 different kinds." },
      { q: "Which of the following is NOT a role of proteins given in the lecture?", c: ["Storing the genetic code", "Acting as enzymes/catalysts", "Transporting nutrients in and out of cells", "Forming antibodies and hormones"], x: "Storing the genetic code is the job of nucleic acids. Proteins are transporters, enzymes, antibodies/hormones, structural elements, and influence gene activity." },
      { q: "Which biomolecule forms membranes and compartmentalizes the cell interior into organelles?", c: ["Lipids", "Carbohydrates", "Nucleic acids", "Proteins"], x: "Lipids form membranes that separate cells from their environment and give rise to organelles such as the nucleus and mitochondrion." },
      { q: "Carbohydrates are made up primarily of molecules containing which atoms?", c: ["C, H and O", "C, H and N", "C, H and S", "C, H and P"], x: "Carbohydrates are made primarily of C, H and O." },
      { q: "Which list gives the four types of sugar units that carbohydrates are built from?", c: ["Monosaccharides, disaccharides, oligosaccharides, polysaccharides", "Glucose, fructose, galactose, sucrose", "Amylose, amylopectin, maltose, lactose", "Nucleotides, amino acids, fatty acids, sugars"], x: "Carbohydrates are built from mono-, di-, oligo- and polysaccharides." },
      { q: "In 'C, H, O, N, P, S and X', what does X stand for?", c: ["A halogen (F, Cl, Br or I)", "Any metal", "Xenon", "An unknown element"], x: "X is the usual symbol for a halogen: F, Cl, Br, I." },
      { q: "True or false: The ORDER in which amino acids occur plays a fundamental role in determining protein structure and function.", c: ["True", "False"], x: "The sequence of amino acids determines how the protein folds and therefore its function." }
    ]
  },
  {
    id: "1.2", title: "Organic Chemistry", slides: ["L1", 7, 8],
    notes: [
      "<b>Organic chemistry</b> is the study of the structure, properties, composition, reactions and preparation of <b>carbon-containing compounds</b>.",
      "It covers not only hydrocarbons but also compounds containing H, O, N, X, P, Si and S.",
      "It was <b>originally limited to compounds produced by living organisms</b>, but now includes human-made substances such as plastics.",
      "Applications include pharmaceuticals, petrochemicals, food, explosives, paints and cosmetics."
    ],
    quiz: [
      { q: "Organic chemistry is best defined as the study of…", c: ["the structure, properties, composition, reactions and preparation of carbon-containing compounds", "compounds that contain only carbon and hydrogen", "compounds produced only by living organisms", "all compounds containing oxygen"], x: "Organic chemistry deals with C-containing compounds in general, not only hydrocarbons." },
      { q: "Organic chemistry was ORIGINALLY limited to which compounds?", c: ["Compounds produced by living organisms", "Compounds containing metals", "Plastics and synthetic polymers", "Gases found in the atmosphere"], x: "The field was originally limited to compounds from living organisms, then broadened to include human-made substances like plastics." },
      { q: "True or false: Organic chemistry deals only with hydrocarbons.", c: ["False", "True"], x: "It includes compounds containing H, O, N, X, P, Si and S as well." },
      { q: "Which of the following is listed as an application of organic compounds?", c: ["All of these", "Pharmaceuticals", "Explosives", "Cosmetics"], x: "Pharmaceuticals, petrochemicals, food, explosives, paints and cosmetics are all listed." }
    ]
  },
  {
    id: "1.3", title: "Chemistry of Carbon", slides: ["L1", 9, 11],
    notes: [
      "Carbon is so important that a whole branch of chemistry (organic chemistry) is devoted to it.",
      "With <b>four valence electrons</b>, carbon forms <b>four bonds</b> to carbon and other atoms, giving <b>chains, branched and ring</b> structures.",
      "About <b>18% of the body (by weight)</b> is carbon. O (65%), C (18.5%), H (9.5%) and N (3.2%) together make up about 96.5% of body weight.",
      "Carbon: atomic number <b>6</b> (6 protons, 6 electrons). It needs 4 more electrons to reach an octet, so it can bond to up to four other atoms.",
      "In methane (~CH4~), C forms four covalent bonds to H; <b>each bond is a pair of shared electrons</b>."
    ],
    quiz: [
      { q: "How many valence electrons does carbon have?", c: ["4", "2", "6", "8"], x: "C is 1s² 2s² 2p², so it has 4 valence electrons and forms 4 bonds." },
      { q: "About what percentage of the human body (by weight) is carbon?", c: ["~18%", "~65%", "~3%", "~50%"], x: "Carbon is about 18% (18.5%) of body weight; oxygen is the largest at 65%." },
      { q: "Which four elements together make up about 96.5% of body weight?", c: ["O, C, H, N", "C, H, P, S", "O, C, Ca, P", "C, H, Na, Cl"], x: "Oxygen, carbon, hydrogen and nitrogen together are about 96.5% of body weight." },
      { q: "In methane, each C–H covalent bond corresponds to…", c: ["a pair of shared electrons", "one electron transferred from H to C", "an electrostatic attraction between ions", "a lone pair on carbon"], x: "A covalent bond is a shared electron pair." },
      { q: "Carbon atoms can form which kinds of structures?", c: ["Chains, branched and ring structures", "Only straight chains", "Only rings", "Only ionic lattices"], x: "Its four bonds let carbon form chains, branches and rings." },
      { q: "A neutral carbon atom contains…", c: ["6 protons and 6 electrons", "6 protons and 4 electrons", "4 protons and 6 electrons", "12 protons and 12 electrons"], x: "Atomic number 6 means 6 protons; a neutral atom also has 6 electrons (4 of them valence)." }
    ]
  },
  {
    id: "1.4", title: "Hydrocarbons", slides: ["L1", 12, 13],
    notes: [
      "<b>Hydrocarbons</b> consist entirely of C and H. Examples: propane in a gas grill, butane in a lighter.",
      "They make good fuels because their covalent bonds store a large amount of energy, released when they burn.",
      "<b>Methane (~CH4~)</b> is the simplest hydrocarbon: <b>tetrahedral</b>, with <b>109.5°</b> H–C–H angles. A tetrahedron has four triangular faces.",
      "In general, a carbon bonded to four other atoms takes a <b>tetrahedral</b> shape like methane."
    ],
    quiz: [
      { q: "What is the H–C–H bond angle in methane?", c: ["109.5°", "120°", "180°", "90°"], x: "Methane is tetrahedral with 109.5° angles.", fig: "L1-13" },
      { q: "A carbon atom bonded to four other atoms adopts which shape?", c: ["Tetrahedral", "Trigonal planar", "Linear", "Square planar"], x: "Like methane, any C with four bonded atoms is tetrahedral." },
      { q: "Why do hydrocarbons make good fuels?", c: ["Their covalent bonds store a large amount of energy released on burning", "They contain oxygen that feeds combustion", "They are ionic and conduct heat", "They are all gases at room temperature"], x: "Energy stored in C–C and C–H bonds is released when they are burned." },
      { q: "The fuel in a typical gas grill is…", c: ["propane", "butane", "methane", "octane"], x: "Propane fuels gas grills; butane is used in lighters." },
      { q: "How many faces does a tetrahedron have?", c: ["4 triangular faces", "6 square faces", "8 triangular faces", "3 triangular faces"], x: "The C and four H atoms of methane form the vertices of a tetrahedron, which has four triangular faces." }
    ]
  },
  {
    id: "1.5", title: "Hydrocarbon Structures", slides: ["L1", 14, 20],
    notes: [
      "Gasoline is a mixture of hydrocarbons: straight-chain, branched, single- or double-bonded, and ring-containing. They have very different properties.",
      "Two hydrocarbons with the same molecular formula but atoms connected or oriented differently are <b>isomers</b> (e.g. the many isomers of octane, ~C8H18~).",
      "<b>Ethane (~C2H6~)</b>: single bond, two-tetrahedron shape, <b>free rotation</b> about C–C.",
      "<b>Ethene (~C2H4~)</b>: double bond, <b>planar</b>, rotation about C=C is <b>restricted</b>.",
      "<b>Ethyne (~C2H2~)</b>: triple bond, <b>planar and linear</b>, rotation <b>completely restricted</b>.",
      "Rings may carry branches or double bonds. Planar <b>aromatic</b> rings with conjugated atoms (benzene) are exceptionally stable. Rings containing atoms other than C and H, like <b>pyridine</b> (N), are not hydrocarbons."
    ],
    quiz: [
      { q: "Rotation occurs freely about the carbon–carbon bond in…", c: ["ethane", "ethene", "ethyne", "benzene"], x: "Only the C–C single bond of ethane allows free rotation; double and triple bonds restrict it." },
      { q: "Which molecule is both planar and linear?", c: ["Ethyne (C₂H₂)", "Ethene (C₂H₄)", "Ethane (C₂H₆)", "Methane (CH₄)"], x: "Ethyne's triple bond makes it linear.", fig: "L1-19" },
      { q: "Ethene (C₂H₄) is best described as…", c: ["planar, with restricted rotation about C=C", "tetrahedral, with free rotation", "linear, with free rotation", "two tetrahedra joined at a single bond"], x: "All atoms of ethene lie in one plane, and the double bond restricts rotation." },
      { q: "Why is pyridine NOT classified as a hydrocarbon?", c: ["Its ring contains nitrogen", "It is not aromatic", "It has only single bonds", "It is not a ring"], x: "Hydrocarbons contain only C and H; pyridine has an N in the ring.", fig: "L1-20" },
      { q: "Benzene is exceptionally stable because it is…", c: ["a planar aromatic ring with conjugated atoms", "a saturated ring with only single bonds", "a branched chain", "an ionic compound"], x: "Planar aromatic rings with conjugated atoms (like benzene) are exceptionally stable." },
      { q: "Gasoline is…", c: ["a mixture of many different hydrocarbon molecules", "a single pure compound, octane", "pure methane in liquid form", "a mixture of alcohols"], x: "Gasoline is made of many different hydrocarbons: straight, branched, saturated, unsaturated and cyclic." },
      { q: "Which is the molecular formula of octane?", c: ["C₈H₁₈", "C₈H₁₆", "C₈H₁₄", "C₆H₁₄"], x: "Alkane CₙH₂ₙ₊₂ with n = 8 gives C₈H₁₈. Its many isomers share this formula.", fig: "L1-15" }
    ]
  },
  {
    id: "1.6", title: "Hydrocarbon Isomers", slides: ["L1", 21, 28],
    notes: [
      "<b>Isomers</b>: same molecular formula, different molecular geometries.",
      "<b>Structural isomers</b>: atoms bonded in different ways; may contain different functional groups or bonding patterns; different properties. Butane vs isobutane: isobutane has the lower melting and boiling points (butane mp −135 °C, bp −0.5 °C; isobutane mp −145 °C, bp −10.2 °C). Butane: lighter/torch fuel; isobutane: refrigerant, spray-can propellant.",
      "<b>Enantiomers</b>: stereoisomers that are <b>non-superimposable mirror images</b>. They arise from an <b>asymmetric carbon</b> (attached to four different atoms or groups).",
      "Most amino acids contain an asymmetric carbon. Biology historically uses <b>L</b> and <b>D</b>. Enantiomers can act very differently: <b>D-ethambutol treats tuberculosis; L-ethambutol causes blindness</b>.",
      "Nature often makes only one enantiomer: proteins use <b>L-amino acids</b> (D forms occasionally appear in bacterial cell walls); <b>D-glucose</b> is the main product of photosynthesis.",
      "<b>Diastereomers</b>: stereoisomers that are <i>not</i> enantiomers, e.g. <b>cis–trans isomers</b> around a rigid C=C. Cis: groups on the same side; trans: opposite sides.",
      "Trans backbones are fairly linear; cis has a <b>kink</b>. Cis fatty acids → <b>oils</b> (kinks prevent tight packing). Trans fats pack tightly → <b>solid</b> at room temperature, and are linked to cardiovascular disease."
    ],
    quiz: [
      { q: "Butane and isobutane (both C₄H₁₀) are…", c: ["structural isomers", "enantiomers", "diastereomers", "the same compound"], x: "Same formula, different connectivity: structural isomers.", fig: "L1-22" },
      { q: "Which butane isomer has the lower boiling point?", c: ["Isobutane (−10.2 °C)", "Butane (−0.5 °C)", "They are equal", "Cannot be compared"], x: "Branched isobutane has the lower melting and boiling points.", fig: "L1-23" },
      { q: "Isobutane is commonly used as…", c: ["a refrigerant or spray-can propellant", "fuel for cigarette lighters", "a cooking oil", "an anesthetic"], x: "Butane fuels lighters and torches; isobutane is a refrigerant or propellant." },
      { q: "Enantiomers are…", c: ["non-superimposable mirror images", "isomers with different connectivity", "cis–trans isomers", "identical molecules drawn differently"], x: "Enantiomers are mirror images that cannot be perfectly aligned on top of each other." },
      { q: "An asymmetric carbon is one that is…", c: ["attached to four different atoms or groups", "part of a double bond", "attached to two identical groups", "in a ring"], x: "Four different substituents make a carbon asymmetric (a stereocenter), giving rise to enantiomers." },
      { q: "Which form of ethambutol is used to treat tuberculosis?", c: ["The D form", "The L form", "Both forms equally", "Neither: it is achiral"], x: "D-ethambutol treats TB; the L form causes blindness.", fig: "L1-25" },
      { q: "Proteins are typically made from…", c: ["L-amino acids", "D-amino acids", "a 50:50 mix of D and L", "achiral amino acids only"], x: "Only L amino acids are normally used for proteins; D forms occasionally appear in bacterial cell walls." },
      { q: "The main sugar product of photosynthesis is…", c: ["D-glucose", "L-glucose", "D-fructose", "sucrose"], x: "D-glucose is the main product; L-glucose is rarely seen in nature." },
      { q: "cis-2-Butene and trans-2-butene are…", c: ["diastereomers", "enantiomers", "structural isomers", "conformers"], x: "Cis–trans isomers are stereoisomers that are not mirror images, so they are diastereomers.", fig: "L1-27" },
      { q: "Why are fatty acids with cis double bonds typically oils at room temperature?", c: ["The cis kink prevents the chains from packing tightly", "Cis bonds are weaker and break at room temperature", "Cis fatty acids have more carbons", "Cis fatty acids are ionic"], x: "Kinked cis chains can't pack closely, so they stay liquid.", fig: "L1-28" },
      { q: "Trans fats are solid at room temperature because…", c: ["their relatively linear chains pack tightly together", "they contain no double bonds", "they have a kink in the backbone", "they are shorter than cis fats"], x: "Trans double bonds keep the chain fairly linear, allowing tight packing. Trans fats are linked to cardiovascular disease." },
      { q: "Diastereomers are defined as…", c: ["stereoisomers that are not enantiomers", "isomers with different connectivity", "mirror-image stereoisomers", "rotamers about a single bond"], x: "Any stereoisomers that are not enantiomers are diastereomers." }
    ]
  },
  {
    id: "1.7", title: "Functional Groups", slides: ["L1", 29, 33], extra: ["CW-vancomycin", "CW-bleomycin"],
    notes: [
      "<b>Functional groups</b> are patterns of atoms that show consistent properties and reactivity regardless of the molecule they appear in.",
      "Name endings (suffix/prefix): alkane <b>-ane</b>, alkene <b>-ene</b>, alkyne <b>-yne</b>, alkyl halide <b>halo-</b>, alcohol & phenol <b>-ol</b>, ether <b>ether</b>, aldehyde <b>-al</b> (RCHO), ketone <b>-one</b> (RR'C=O), carboxylic acid <b>-oic acid</b> (~RCO2H~), ester <b>-oate</b> (~RCO2R'~), amide <b>-amide</b> (RCONR'₂), amine <b>-amine</b>, nitrile <b>-nitrile</b> (RC≡N), nitro <b>nitro-</b> (~ArNO2~).",
      "R = alkyl group; Ar = aryl group. An –OH on an aromatic ring is a <b>phenol</b>, not an alcohol.",
      "Classwork: <b>vancomycin</b> (antibiotic) contains amides, a carboxylic acid, alcohols, phenols, ethers, amines (1° and 2°) and aryl chlorides. <b>Bleomycin</b> (anti-cancer) contains amides, amines, alcohols, ethers, a pyrimidine, an imidazole, a bithiazole, a carbamate and a sulfonium ion."
    ],
    quiz: [
      { q: "A functional group is…", c: ["a pattern of atoms with consistent properties and reactivity regardless of the molecule it is in", "the longest carbon chain in a molecule", "any carbon atom attached to four groups", "a group that is always ionic"], x: "Functional groups show consistent 'function' wherever they occur." },
      { q: "The IUPAC suffix for an alcohol is…", c: ["-ol", "-al", "-one", "-oate"], x: "Ethanol, phenol: -ol. Aldehydes use -al, ketones -one, esters -oate." },
      { q: "Which suffix identifies a ketone (e.g. 2-propanone)?", c: ["-one", "-al", "-ol", "-oic acid"], x: "Acetone is 2-propanone: ketone suffix -one." },
      { q: "The general formula RCHO represents a(n)…", c: ["aldehyde", "ketone", "alcohol", "ether"], x: "RCHO is an aldehyde (suffix -al, e.g. ethanal)." },
      { q: "A compound with general formula RCO₂R' is a(n)…", c: ["ester", "carboxylic acid", "ether", "amide"], x: "RCO₂R' is an ester (methyl acetate = methyl ethanoate); RCO₂H is a carboxylic acid." },
      { q: "Acetonitrile, CH₃C≡N, belongs to which class?", c: ["Nitrile", "Amine", "Amide", "Nitro compound"], x: "RC≡N is a nitrile, suffix -nitrile." },
      { q: "An –OH group bonded directly to a benzene ring is a(n)…", c: ["phenol", "alcohol", "ether", "carboxylic acid"], x: "ArOH is a phenol. (Several OH groups on vancomycin's aromatic rings are phenols, not alcohols.)" },
      { q: "In the general formulas, 'Ar' stands for…", c: ["an aryl group", "argon", "an alkyl group", "an amide"], x: "R indicates an alkyl group; Ar indicates an aryl group." },
      { q: "Which functional group is NOT present in vancomycin?", c: ["Ketone", "Carboxylic acid", "Amide", "Aryl halide (Cl on a ring)"], x: "Vancomycin's C=O groups are all amides plus one carboxylic acid; it has no ketone.", fig: "CW-vancomycin" },
      { q: "In bleomycin, the S⁺ bonded to three carbons is a…", c: ["sulfonium ion", "thiol", "sulfide (thioether)", "sulfonic acid"], x: "A positively charged S with three C substituents is a sulfonium group.", fig: "CW-bleomycin" },
      { q: "The H₂N–C(=O)–O– unit on bleomycin's sugar is a…", c: ["carbamate (urethane)", "amide", "ester", "amine"], x: "N, C=O and O together (H₂N–CO–O–R) form a carbamate.", fig: "CW-bleomycin" },
      { q: "Which class has the general formula ROR?", c: ["Ether", "Alcohol", "Ester", "Ketone"], x: "Ethers have an O bonded to two carbon groups, e.g. diethyl ether." }
    ]
  }
  ]
},
{
  id: "L2", title: "Chemical Bonding", sub: "Lewis structures, polarity, resonance, hybridization, shapes, acids & bases",
  sections: [
  {
    id: "2.0–2.1", title: "Bonding Theories, Atoms & Orbitals", slides: ["L2", 1, 5],
    notes: [
      "<b>Valence Bond theory</b>: a bond forms when an electron in a valence orbital is transferred to or shared with a valence orbital of a neighboring atom.",
      "<b>Molecular Orbital theory</b>: bonding occurs when atomic orbitals of interacting atoms overlap to form <b>bonding molecular orbitals</b> (and antibonding ones).",
      "Origin of carbon: 2 protons + 2 neutrons → a helium nucleus; <b>three helium nuclei fuse → ¹²C</b>.",
      "Orbitals: <b>1s</b> is spherical; <b>2s</b> is spherical with a node; the three <b>2p</b> orbitals (2pₓ, 2pᵧ, 2p<sub>z</sub>) are dumbbells whose wave function <b>changes sign at the nucleus</b>.",
      "Configurations: H 1s¹, He 1s², Li 1s² 2s¹, C 1s² 2s² 2p² (2pₓ¹ 2pᵧ¹). Carbon has <b>4 valence electrons</b>."
    ],
    quiz: [
      { q: "Which theory says bonding occurs when atomic orbitals overlap to form bonding molecular orbitals?", c: ["Molecular Orbital theory", "Valence Bond theory", "VSEPR theory", "Arrhenius theory"], x: "MO theory combines atomic orbitals into molecular orbitals; VB theory describes transfer or sharing between valence orbitals." },
      { q: "A ¹²C nucleus forms from the fusion of…", c: ["three helium nuclei", "two helium nuclei", "six hydrogen nuclei", "four helium nuclei"], x: "3 × ⁴He (2p + 2n each) gives ¹²C (6p + 6n).", fig: "L2-02" },
      { q: "The ground-state electron configuration of carbon is…", c: ["1s² 2s² 2p²", "1s² 2s² 2p⁴", "1s² 2s¹ 2p³", "1s² 2p⁴"], x: "Carbon (Z = 6): 1s² 2s² 2pₓ¹ 2pᵧ¹.", fig: "L2-05" },
      { q: "For a 2p orbital, the wave function…", c: ["changes sign at the nucleus", "is spherical", "has the same sign everywhere", "has no node"], x: "The two lobes of a 2p orbital have opposite signs; there is a nodal plane at the nucleus.", fig: "L2-04" },
      { q: "The electron configuration of lithium is…", c: ["1s² 2s¹", "1s³", "1s² 2p¹", "1s¹ 2s²"], x: "Li has 3 electrons: 1s² 2s¹." },
      { q: "How many unpaired electrons does a ground-state carbon atom have?", c: ["2", "4", "0", "1"], x: "In the ground state the 2s is paired and the two 2p electrons are unpaired (Hund's rule). Hybridization explains four bonds." },
      { q: "Nitrogen (Z = 7) has the configuration…", c: ["1s² 2s² 2p³", "1s² 2s² 2p⁵", "1s² 2s¹ 2p⁴", "1s² 2s² 2p²"], x: "7 electrons: 1s² 2s² 2p³, so 5 valence electrons." }
    ]
  },
  {
    id: "2.2", title: "Ionic Bonds", slides: ["L2", 6, 6],
    notes: [
      "An <b>ionic bond</b> is the electrostatic attraction between oppositely charged ions.",
      "Na → Na⁺ + e⁻: 1s² 2s² 2p⁶ 3s¹ → 1s² 2s² 2p⁶ (neon configuration).",
      "Cl + e⁻ → Cl⁻: chlorine gains an electron and reaches the argon configuration.",
      "Na + Cl → Na⁺Cl⁻."
    ],
    quiz: [
      { q: "An ionic bond is…", c: ["the electrostatic attraction between oppositely charged ions", "a shared pair of electrons", "the overlap of two p orbitals", "a bond between two identical atoms"], x: "Ionic bonds result from the attraction of cations and anions." },
      { q: "The electron configuration of Na⁺ is…", c: ["1s² 2s² 2p⁶", "1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁵", "1s² 2s² 2p⁶ 3s²"], x: "Sodium loses its 3s electron, giving the neon configuration." },
      { q: "In forming NaCl, chlorine…", c: ["gains an electron to become Cl⁻", "loses an electron to become Cl⁺", "shares a pair with sodium", "loses seven electrons"], x: "Cl + e⁻ → Cl⁻, completing its octet." },
      { q: "Na⁺ is isoelectronic with which noble gas?", c: ["Neon", "Argon", "Helium", "Krypton"], x: "Na⁺ has 10 electrons, the same as Ne." }
    ]
  },
  {
    id: "2.3–2.4", title: "Covalent Bonds & Lewis Structures", slides: ["L2", 7, 10],
    notes: [
      "A <b>covalent bond</b> is a <b>shared electron pair</b> (Lewis). Examples: ~H2~, ~F2~ (each F keeps 3 lone pairs), HF (H–F with 3 lone pairs on F).",
      "<b>Octet rule</b>: in forming compounds, atoms gain, lose or share electrons to reach eight valence electrons.",
      "Examples: methane ~CH4~, carbon tetrafluoride ~CF4~, ethane ~H3C–CH3~ (7 bonds, 14 valence electrons).",
      "<b>Multiple bonds</b>: CO₂ is O=C=O (two lone pairs on each O); hydrogen cyanide H–C≡N: (one lone pair on N); ethylene ~H2C=CH2~; acetylene HC≡CH.",
      "Practice answers: formaldehyde ~H2C=O~ (two lone pairs on O); tetrafluoroethylene ~F2C=CF2~ (Teflon monomer); acrylonitrile ~H2C=CH–C≡N~."
    ],
    quiz: [
      { q: "The octet rule states that atoms…", c: ["gain, lose or share electrons to reach eight valence electrons", "always form four bonds", "always share electrons equally", "lose all their valence electrons"], x: "A stable configuration has eight valence electrons (hydrogen: two)." },
      { q: "In the Lewis structure of HF, how many unshared pairs are on fluorine?", c: ["3", "1", "2", "4"], x: "F has 7 valence electrons: one goes into the bond with H, the other 6 form 3 lone pairs." },
      { q: "How many valence electrons are in ethane, C₂H₆?", c: ["14", "12", "16", "8"], x: "2 C × 4 + 6 H × 1 = 14 electrons, i.e. 7 bonding pairs (one C–C, six C–H)." },
      { q: "The Lewis structure of hydrogen cyanide is…", c: ["H–C≡N: (triple bond, one lone pair on N)", "H–C=N: with two lone pairs on N", "H–N≡C:", "H–C–N with three lone pairs on N"], x: "H–C≡N: gives C and N full octets.", fig: "L2-09" },
      { q: "The most stable Lewis structure of formaldehyde (CH₂O) has…", c: ["a C=O double bond and two lone pairs on O", "a C–O single bond and three lone pairs on O", "an O–H bond", "a C≡O triple bond"], x: "H₂C=O: carbon has an octet from 4 bonds; oxygen has 2 bonds and 2 lone pairs." },
      { q: "Acrylonitrile, C₃H₃N (atoms in the order CCCN), is best written as…", c: ["H₂C=CH–C≡N", "H₃C–C≡C–NH₂", "H₂C=C=CH–NH", "HC≡C–CH₂–NH₂"], x: "All H on carbon: CH₂=CH–C≡N." },
      { q: "In CO₂ (O=C=O), how many lone pairs are on the molecule in total?", c: ["4", "2", "6", "0"], x: "Each O has two double-bond pairs and two lone pairs: 2 × 2 = 4." },
      { q: "Tetrafluoroethylene, C₂F₄, is the starting material for…", c: ["Teflon", "PVC", "Nylon", "Polystyrene"], x: "F₂C=CF₂ polymerizes to Teflon." }
    ]
  },
  {
    id: "2.5", title: "Polar Bonds & Electronegativity", slides: ["L2", 11, 13],
    notes: [
      "In a <b>polar covalent bond</b> the electrons are pulled toward the atom that attracts them more. δ⁺ and δ⁻ mark partial charges; the arrow ↦ points toward the negative end (e.g. H–F, toward F).",
      "<b>Electronegativity</b>: tendency of an atom to draw the electrons in a covalent bond toward itself. An electronegative element attracts electrons; an <b>electropositive</b> element donates them.",
      "Pauling values: H 2.1, C 2.5, N 3.0, O 3.5, <b>F 4.0</b>, Cl 3.0, Br 2.8, I 2.5.",
      "Separated centers of positive and negative charge form a <b>dipole</b>. Dipole moment <b>μ = e × d</b> (charge × distance).",
      "Bond dipoles (D): H–F 1.7, H–Cl 1.1, H–Br 0.8, H–I 0.4, H–C 0.3, H–N 1.3, H–O 1.5, C–F 1.4, C–O 0.7, C–N 0.4, C=O 2.4, C=N 1.4, <b>C≡N 3.6</b>."
    ],
    quiz: [
      { q: "Electronegativity is…", c: ["the tendency of an atom to draw the electrons in a covalent bond toward itself", "the energy needed to remove an electron", "the charge on an ion", "the size of an atom"], x: "Electronegative atoms pull shared electrons toward themselves." },
      { q: "On the Pauling scale, which element is the most electronegative?", c: ["F (4.0)", "O (3.5)", "Cl (3.0)", "N (3.0)"], x: "Fluorine is the most electronegative element at 4.0.", fig: "L2-12" },
      { q: "The dipole moment μ of a molecule equals…", c: ["e × d (charge × distance between charge centers)", "e / d", "d / e", "e × d²"], x: "μ = e × d." },
      { q: "Among the bond dipoles listed, which is the largest?", c: ["C≡N (3.6 D)", "C=O (2.4 D)", "H–F (1.7 D)", "H–O (1.5 D)"], x: "C≡N has the largest bond dipole, 3.6 D.", fig: "L2-13" },
      { q: "Rank the hydrogen halide bond dipoles from largest to smallest.", c: ["H–F > H–Cl > H–Br > H–I", "H–I > H–Br > H–Cl > H–F", "H–Cl > H–F > H–Br > H–I", "All are equal"], x: "1.7 > 1.1 > 0.8 > 0.4 D, following halogen electronegativity." },
      { q: "In the H–F bond, the partial negative charge (δ⁻) is on…", c: ["F", "H", "both equally", "neither"], x: "F (4.0) is far more electronegative than H (2.1)." },
      { q: "An electropositive element tends to…", c: ["donate electrons", "attract electrons", "form only nonpolar bonds", "have high electronegativity"], x: "Electronegative elements attract electrons; electropositive ones donate them." },
      { q: "Why is the C–H bond only weakly polar (0.3 D)?", c: ["C (2.5) and H (2.1) have similar electronegativities", "C and H have identical electronegativities", "H is more electronegative than C", "C–H bonds are ionic"], x: "The small electronegativity difference (0.4) gives a small bond dipole." }
    ]
  },
  {
    id: "2.6", title: "Formal Charge", slides: ["L2", 13, 14],
    notes: [
      "<b>Formal charge = group number − number of bonds − number of unshared electrons.</b>",
      "Nitric acid (H–O–NO₂): N has 4 bonds → 5 − 4 − 0 = <b>+1</b>; singly bonded O with 3 lone pairs → 6 − 1 − 6 = <b>−1</b>; the other O atoms and H are 0.",
      "Practice: thionyl chloride drawn with S–O single bond: S +1, O −1, Cl 0. Sulfuric acid drawn with four S–O single bonds: S <b>+2</b>, each non-H oxygen −1. Nitrous acid H–O–N=O: all atoms <b>0</b>."
    ],
    quiz: [
      { q: "Formal charge is calculated as…", c: ["group number − number of bonds − number of unshared electrons", "number of bonds − group number", "group number − number of lone pairs", "number of protons − number of electrons"], x: "FC = group number − bonds − unshared electrons." },
      { q: "In nitric acid (H–O–NO₂), what is the formal charge on nitrogen?", c: ["+1", "0", "−1", "+2"], x: "N: 5 − 4 bonds − 0 = +1.", fig: "L2-14" },
      { q: "An oxygen with ONE bond and THREE lone pairs has a formal charge of…", c: ["−1", "0", "+1", "−2"], x: "6 − 1 − 6 = −1." },
      { q: "In the Lewis structure of sulfuric acid with four S–O single bonds and no lone pairs on S, the formal charge on S is…", c: ["+2", "0", "+1", "−2"], x: "S: 6 − 4 − 0 = +2.", fig: "L2-14" },
      { q: "In nitrous acid, H–Ö–N=Ö (N with one lone pair), the formal charges are…", c: ["all zero", "N +1, terminal O −1", "N −1, OH oxygen +1", "H +1, N −1"], x: "N: 5 − 3 − 2 = 0; both O: 6 − 2 − 4 = 0." },
      { q: "The formal charge on oxygen in H₃O⁺ (three bonds, one lone pair) is…", c: ["+1", "0", "−1", "+2"], x: "6 − 3 − 2 = +1." },
      { q: "The formal charge on N in the ammonium ion, NH₄⁺, is…", c: ["+1", "0", "−1", "+4"], x: "5 − 4 − 0 = +1." }
    ]
  },
  {
    id: "2.7", title: "Resonance", slides: ["L2", 15, 23],
    notes: [
      "When more than one Lewis structure can be written, the true structure is a <b>hybrid</b> of them (e.g. ozone). Drawn with curved arrows or dashed lines.",
      "<b>Rule 1</b>: Connectivity must be the same; only electron positions vary (nitromethane and methyl nitrite are different compounds, not resonance forms).",
      "<b>Rule 2</b>: Second-row elements can't exceed 8 valence electrons (N with 10 electrons is not allowed). Elements beyond the second row can exceed the octet.",
      "<b>Rule 3</b>: Among octet structures, the most stable has the <b>smallest separation of opposite charges</b>.",
      "<b>Rule 4</b>: Negative charge is best on the <b>most electronegative</b> atom (positive charge on the most electropositive).",
      "<b>Rule 5</b>: All contributors have the same number of electrons and the same net charge.",
      "<b>Rule 6</b>: All contributors have the same number of <b>unpaired electrons</b>.",
      "<b>Rule 7</b>: Delocalization stabilizes a molecule, most when contributors are of <b>equal stability</b>. Nitromethane (two equivalent forms) is stabilized more than methyl nitrite (non-equivalent forms)."
    ],
    quiz: [
      { q: "What may change between resonance structures of the same molecule?", c: ["Only the positions of electrons", "The positions of atoms", "The number of electrons", "The net charge"], x: "Rule 1: connectivity stays the same; only electrons move." },
      { q: "Nitromethane (CH₃NO₂) and methyl nitrite (CH₃ONO) are…", c: ["different compounds (constitutional isomers), not resonance forms", "resonance forms of each other", "enantiomers", "the same compound"], x: "Their atoms are connected differently, so they are different compounds.", fig: "L2-16" },
      { q: "Why is a nitromethane structure with 10 electrons around N not a valid resonance form?", c: ["Second-row elements cannot exceed an octet", "It has the wrong net charge", "It has unpaired electrons", "N is more electronegative than O"], x: "Rule 2: N is a second-row element and can't hold more than 8 valence electrons.", fig: "L2-17" },
      { q: "When two or more structures satisfy the octet rule, the most stable one…", c: ["has the smallest separation of opposite charges", "has the most formal charges", "has the most double bonds", "puts negative charge on carbon"], x: "Rule 3: less charge separation means more stable.", fig: "L2-18" },
      { q: "For the cyanate ion, the better resonance form puts the negative charge on…", c: ["oxygen, the more electronegative atom", "nitrogen", "carbon", "it doesn't matter"], x: "Rule 4: O is more electronegative than N and better supports negative charge.", fig: "L2-19" },
      { q: "Structures H (24 valence electrons, net charge 0) and I (26 valence electrons, net charge −2) are not resonance forms because…", c: ["they have different numbers of electrons and net charge", "they have different connectivity", "one has unpaired electrons", "N exceeds the octet"], x: "Rule 5: same number of electrons and same net charge.", fig: "L2-20" },
      { q: "A structure of nitromethane with two unpaired electrons is not a resonance form of the normal Lewis structure because…", c: ["contributors must have the same number of unpaired electrons", "it exceeds the octet", "it has a different net charge", "it has different atom positions"], x: "Rule 6.", fig: "L2-21" },
      { q: "Which is stabilized more by electron delocalization?", c: ["Nitromethane: its two most stable forms are equivalent", "Methyl nitrite: its forms are not equivalent", "Both equally", "Neither is stabilized by resonance"], x: "Rule 7: stabilization is greatest when contributors are of equal stability.", fig: "L2-22" },
      { q: "The true structure of a molecule with resonance forms is…", c: ["a hybrid of all the contributing structures", "the structure that flips back and forth between forms", "always the first structure drawn", "the structure with the most charges"], x: "The real electron distribution is a weighted hybrid; it does not alternate." },
      { q: "For the carbonate ion (problem (c)), how many equivalent resonance structures can be drawn?", c: ["3", "2", "1", "4"], x: "The C=O double bond can be on any of the three oxygens; all three structures are equivalent.", fig: "L2-23" }
    ]
  },
  {
    id: "2.8", title: "Orbital Hybridization", slides: ["L2", 24, 37],
    notes: [
      "<b>sp³</b>: one 2s + three 2p → <b>four sp³</b> orbitals. Tetrahedral, 109.5°. Carbon is sp³ when bonded to <b>four atoms</b> (methane, ethane: C–C σ from sp³–sp³ overlap; C–H σ from sp³–1s).",
      "Ammonia: N is sp³; the <b>lone pair occupies an sp³ orbital</b>; N–H bonds are N(sp³)–H(1s) σ bonds.",
      "<b>sp²</b>: one 2s + two 2p → <b>three sp²</b> (trigonal planar, ~120°) + <b>one unhybridized 2p</b>. Ethylene: C=C is one σ (sp²–sp²) + one π (2p–2p). C=C 134 pm, C–H 110 pm, H–C–C 121.4°, H–C–H 117.2°. Carbon is sp² when bonded to <b>three atoms</b>.",
      "<b>sp</b>: one 2s + one 2p → <b>two sp</b> (linear, 180°) + <b>two unhybridized p</b>. Acetylene: C≡C is one σ + two π. C≡C 120 pm, C–H 106 pm. Carbon is sp when bonded to <b>two atoms</b>.",
      "Practice answers: CO₂ C sp; formaldehyde C sp²; ketene ~H2C=C=O~: CH₂ sp², central C sp; propene: CH₃ sp³, CH and CH₂ sp²; acetone: CH₃ sp³, C=O sp²; acrylonitrile: CH₂ and CH sp², C≡N carbon sp."
    ],
    quiz: [
      { q: "A carbon directly bonded to FOUR atoms is…", c: ["sp³", "sp²", "sp", "unhybridized"], x: "Four σ bonds → sp³, tetrahedral." },
      { q: "A carbon directly bonded to THREE atoms is…", c: ["sp²", "sp³", "sp", "dsp³"], x: "Three σ bonds + one π → sp²." },
      { q: "A carbon directly bonded to TWO atoms is…", c: ["sp", "sp²", "sp³", "s"], x: "Two σ bonds + two π → sp." },
      { q: "sp³ hybridization combines…", c: ["one 2s and three 2p orbitals", "one 2s and two 2p orbitals", "one 2s and one 2p orbital", "two 2s and two 2p orbitals"], x: "s + p + p + p → four sp³ orbitals.", fig: "L2-25" },
      { q: "In ammonia (N sp³), the unshared electron pair occupies…", c: ["an sp³ hybrid orbital", "a pure 2p orbital", "the 2s orbital", "a 1s orbital"], x: "With sp³ hybridization, three sp³ orbitals form N–H bonds and the fourth holds the lone pair.", fig: "L2-26" },
      { q: "The N–H bonds in ammonia come from overlap of…", c: ["N sp³ with H 1s", "N 2p with H 1s", "N 2s with H 1s", "N sp² with H 1s"], x: "N(2sp³)–H(1s) σ bonds." },
      { q: "In ethylene, the C=C double bond consists of…", c: ["one σ bond (sp²–sp²) and one π bond (2p–2p)", "two σ bonds", "two π bonds", "one σ (sp³–sp³) and one π"], x: "Unhybridized p orbitals on each carbon overlap side-by-side to form the π bond.", fig: "L2-32" },
      { q: "The triple bond of acetylene consists of…", c: ["one σ and two π bonds", "three σ bonds", "two σ and one π bond", "three π bonds"], x: "One sp–sp σ bond plus two p–p π bonds.", fig: "L2-36" },
      { q: "Which C–C bond is the shortest?", c: ["C≡C in acetylene (120 pm)", "C=C in ethylene (134 pm)", "C–C in ethane", "All are equal"], x: "Bond length decreases as bond order increases.", fig: "L2-33" },
      { q: "What is the hybridization of the carbon in CO₂ (O=C=O)?", c: ["sp", "sp²", "sp³", "unhybridized"], x: "The carbon is bonded to two atoms → sp, linear." },
      { q: "In ketene, H₂C=C=O, the hybridizations of the CH₂ carbon and the central carbon are…", c: ["sp² and sp", "sp and sp", "sp³ and sp²", "sp² and sp²"], x: "CH₂ carbon: three atoms → sp². Central C: two atoms → sp." },
      { q: "In propene, CH₃CH=CH₂, the carbons are (left to right)…", c: ["sp³, sp², sp²", "sp², sp², sp²", "sp³, sp³, sp²", "sp³, sp, sp"], x: "CH₃ has four bonded atoms; both alkene carbons have three." },
      { q: "In acrylonitrile, CH₂=CH–C≡N, the nitrile carbon is…", c: ["sp", "sp²", "sp³", "sp³d"], x: "It is bonded to two atoms (C and N), so it is sp." },
      { q: "In ethylene, the H–C–H bond angle is about…", c: ["117°", "109.5°", "180°", "90°"], x: "The slide gives H–C–H 117.2° and H–C–C 121.4°, close to the ideal 120° of sp²." }
    ]
  },
  {
    id: "2.9", title: "Structural Formulas", slides: ["L2", 38, 40],
    notes: [
      "<b>Constitution (connectivity)</b>: the order in which atoms are attached.",
      "Lewis formulas can be <b>condensed</b>: e.g. ~CH3CHCH3~ with OH on C2 → ~(CH3)2CHOH~.",
      "<b>Bond-line (skeletal) formulas</b>: each line end and vertex is a carbon; H on carbon is omitted. Only atoms that are <b>neither C nor H bonded to C</b> are written. <b>H atoms on heteroatoms are shown</b> (e.g. OH).",
      "Examples: ~CH3CH2CH2CH3~ → zigzag of 4 carbons; ~CH3CH2CH2CH2OH~ → zigzag ending in OH; chlorocyclohexane → hexagon with Cl."
    ],
    quiz: [
      { q: "In a bond-line formula, each end of a line and each vertex represents…", c: ["a carbon atom", "a hydrogen atom", "an oxygen atom", "a lone pair"], x: "Carbons are implied at line ends and vertices; their hydrogens are not drawn." },
      { q: "In bond-line formulas, which hydrogens ARE written explicitly?", c: ["Hydrogens bonded to heteroatoms (e.g. O–H, N–H)", "All hydrogens", "Hydrogens on terminal carbons", "No hydrogens"], x: "Only H on atoms other than carbon are shown.", fig: "L2-39" },
      { q: "'Constitution' or 'connectivity' refers to…", c: ["the order of attachment of atoms", "the 3D arrangement in space", "the molecular formula", "the number of lone pairs"], x: "Connectivity is the order in which atoms are bonded." },
      { q: "(CH₃)₃CH contains how many carbon atoms?", c: ["4", "3", "6", "5"], x: "Three CH₃ groups attached to one CH: 2-methylpropane (isobutane), C₄H₁₀." },
      { q: "HOCH₂CH₂NH₂ contains which two functional groups?", c: ["Alcohol and amine", "Aldehyde and amide", "Ether and amine", "Alcohol and nitrile"], x: "–OH (alcohol) on one end, –NH₂ (amine) on the other." },
      { q: "(CH₃)₂CHCHO contains which functional group?", c: ["Aldehyde", "Ketone", "Alcohol", "Ether"], x: "–CHO is an aldehyde group." }
    ]
  },
  {
    id: "2.10", title: "Constitutional Isomers", slides: ["L2", 41, 42],
    notes: [
      "<b>Isomers</b>: different compounds with the same molecular formula.",
      "<b>Constitutional (structural) isomers</b> differ in the order in which their atoms are connected. Example: nitromethane and methyl nitrite (both ~CH3NO2~).",
      "Practice answers: ~C2H6O~ → 2 (ethanol, dimethyl ether). ~C3H8O~ → 3 (1-propanol, 2-propanol, ethyl methyl ether). ~C4H10O~ → 7 (4 alcohols + 3 ethers)."
    ],
    quiz: [
      { q: "Constitutional isomers differ in…", c: ["the order in which their atoms are connected", "their molecular formula", "only the 3D arrangement of atoms", "the number of electrons"], x: "Same formula, different connectivity." },
      { q: "How many constitutional isomers have the formula C₂H₆O?", c: ["2", "1", "3", "4"], x: "CH₃CH₂OH (ethanol) and CH₃OCH₃ (dimethyl ether)." },
      { q: "How many constitutional isomers have the formula C₃H₈O?", c: ["3", "2", "4", "5"], x: "1-Propanol, 2-propanol and ethyl methyl ether." },
      { q: "How many constitutional isomers have the formula C₄H₁₀O?", c: ["7", "4", "5", "8"], x: "4 alcohols (1-butanol, 2-butanol, 2-methyl-1-propanol, 2-methyl-2-propanol) + 3 ethers (diethyl, methyl propyl, methyl isopropyl)." },
      { q: "Which pair are constitutional isomers?", c: ["Ethanol and dimethyl ether", "Ethane and ethene", "Methane and ethane", "Water and hydrogen peroxide"], x: "Both are C₂H₆O with different connectivity." }
    ]
  },
  {
    id: "2.11", title: "Shapes of Simple Molecules", slides: ["L2", 42, 46],
    notes: [
      "<b>Methane</b>: tetrahedral (109.5°). <b>Wedge-and-dash</b> drawings: solid wedge toward you, dashed wedge away, plain line in the plane of the paper.",
      "H₂O, NH₃ and CH₄ all have approximately tetrahedral electron geometry. <b>Water: bent, 105°.</b> <b>Ammonia: trigonal pyramidal, 107°.</b>",
      "<b>BF₃</b> and <b>formaldehyde (~H2C=O~)</b>: trigonal planar. <b>CO₂</b>: linear.",
      "Practice answers: HCN linear; ~NH4^+~ tetrahedral; azide ~N3^-~ linear; carbonate ~CO3^2-~ trigonal planar."
    ],
    quiz: [
      { q: "In a wedge-and-dash drawing, a solid wedge represents a bond that…", c: ["projects from the paper toward you", "projects away from you", "lies in the plane of the paper", "is a double bond"], x: "Solid wedge = toward the viewer; dashed wedge = away.", fig: "L2-43" },
      { q: "The shape of the water molecule is…", c: ["bent (about 105°)", "linear (180°)", "trigonal planar", "tetrahedral with 109.5° H–O–H"], x: "Two lone pairs on O squeeze the H–O–H angle to ~105°, giving a bent shape.", fig: "L2-44" },
      { q: "The shape of ammonia is…", c: ["trigonal pyramidal (~107°)", "trigonal planar (120°)", "tetrahedral (109.5°)", "bent"], x: "One lone pair on N gives a trigonal pyramid.", fig: "L2-44" },
      { q: "BF₃ has which geometry?", c: ["Trigonal planar", "Trigonal pyramidal", "Tetrahedral", "Linear"], x: "Boron has three bonds and no lone pair.", fig: "L2-45" },
      { q: "What is the shape of the ammonium ion, NH₄⁺?", c: ["Tetrahedral", "Trigonal pyramidal", "Square planar", "Trigonal planar"], x: "Four bonded atoms, no lone pairs on N." },
      { q: "The carbonate ion, CO₃²⁻, is…", c: ["trigonal planar", "trigonal pyramidal", "tetrahedral", "linear"], x: "Carbon has three bonded atoms and no lone pairs." },
      { q: "The azide ion (N₃⁻) and HCN are both…", c: ["linear", "bent", "trigonal planar", "tetrahedral"], x: "The central atom in each has two bonded atoms and no lone pairs.", fig: "L2-46" }
    ]
  },
  {
    id: "2.12", title: "Molecular Dipole Moments", slides: ["L2", 47, 49],
    notes: [
      "The <b>molecular dipole moment</b> is the vector sum (resultant) of all individual bond dipoles.",
      "<b>CO₂</b> has polar bonds but μ = 0 D: the linear shape makes the C=O dipoles cancel.",
      "<b>CCl₄</b> (tetrahedral, four polar C–Cl): μ = 0. <b>~CH2Cl2~</b>: μ = <b>1.62 D</b>, because the C–H and C–Cl dipoles reinforce each other.",
      "Practice answers: BF₃ no; H₂O yes; CH₄ no; ~CH3Cl~ yes (toward Cl); ~CH2O~ yes (toward O); HCN yes (toward N)."
    ],
    quiz: [
      { q: "Why does CO₂ have zero dipole moment even though its C=O bonds are polar?", c: ["Its linear shape makes the two bond dipoles cancel", "C and O have the same electronegativity", "It has no lone pairs", "It is an ionic compound"], x: "Equal, opposite dipoles 180° apart cancel.", fig: "L2-47" },
      { q: "Which molecule has NO net dipole moment?", c: ["CCl₄", "CH₂Cl₂", "CH₃Cl", "H₂O"], x: "Four identical C–Cl dipoles in a tetrahedron cancel.", fig: "L2-48" },
      { q: "The dipole moment of CH₂Cl₂ is…", c: ["1.62 D", "0 D", "3.6 D", "0.3 D"], x: "C–H and C–Cl dipoles reinforce each other.", fig: "L2-49" },
      { q: "Which of these molecules has a dipole moment?", c: ["H₂O", "BF₃", "CH₄", "CO₂"], x: "Water is bent, so its O–H dipoles do not cancel." },
      { q: "In HCN, the dipole moment points toward…", c: ["N", "H", "C", "There is none"], x: "N is the most electronegative atom, so the dipole points toward N." },
      { q: "The molecular dipole moment is…", c: ["the resultant (vector sum) of all bond dipoles", "the largest single bond dipole", "always zero for symmetric bonds", "the sum of all formal charges"], x: "Bond dipoles add as vectors, so shape matters." }
    ]
  },
  {
    id: "2.13", title: "Acids & Bases", slides: ["L2", 50, 59],
    notes: [
      "<b>Arrhenius</b> (1903 Nobel): acids release H⁺ in water; bases release OH⁻.",
      "<b>Brønsted–Lowry</b>: acid = <b>proton donor</b>, base = <b>proton acceptor</b>. Base + acid ⇌ conjugate acid + conjugate base, e.g. ~H2CO3~ + ~H2O~ ⇌ ~HCO3^-~ + ~H3O^+~.",
      "<b>Ka = [H₃O⁺][A⁻]/[HA]</b>; <b>pKa = −log Ka</b>. Stronger acid → <b>larger Ka, smaller pKa</b>.",
      "pKa values: HI ≈ −10, HBr ≈ −9, HCl ≈ −7, H₂SO₄ −4.8, H₃O⁺ −1.7, HF 3.5, acetic acid 4.7, NH₄⁺ 9.2, H₂O 15.7, CH₃OH ≈ 16, ethanol ≈ 16, isopropyl alcohol ≈ 17, tert-butyl alcohol ≈ 18, NH₃ ≈ 36.",
      "The stronger the acid, the <b>weaker its conjugate base</b>. Equilibrium favors the <b>weaker acid + weaker base</b> (K > 1 when the stronger acid reacts). HCN (pKa 9.1) is stronger than H₂O (15.7), so CN⁻ is a <b>weaker</b> base than OH⁻.",
      "Proton transfer to an alcohol gives an <b>alkyloxonium ion</b> (~ROH2^+~). Proton transfer is a <b>concerted, single elementary step</b> (one transition state).",
      "<b>Lewis</b>: acid = <b>electron-pair acceptor</b> (e.g. carbocation), base = <b>electron-pair donor</b> (e.g. halide). tert-Butyl cation + Cl⁻ → tert-butyl chloride.",
      "Exercises: Ka = 10<sup>−pKa</sup>. Acidity: oxalic (1.19) > aspirin (3.48) > formic (3.75) > vitamin C (4.17). Methanol (pKa 16) is weaker than methanethiol (11), so <b>KOCH₃ is the stronger base</b>."
    ],
    quiz: [
      { q: "According to Brønsted–Lowry, an acid is a…", c: ["proton (H⁺) donor", "proton acceptor", "electron-pair acceptor", "hydroxide donor"], x: "Brønsted acids donate protons; bases accept them.", fig: "L2-51" },
      { q: "According to the Lewis concept, a base is a(n)…", c: ["electron-pair donor", "electron-pair acceptor", "proton donor", "hydroxide releaser"], x: "Lewis base = electron-pair donor (e.g. a halide anion); Lewis acid = acceptor (e.g. a carbocation).", fig: "L2-58" },
      { q: "In the reaction of tert-butyl cation with chloride ion to form tert-butyl chloride, the Lewis acid is…", c: ["the tert-butyl cation", "the chloride ion", "tert-butyl chloride", "there is no Lewis acid"], x: "The carbocation accepts the electron pair from Cl⁻.", fig: "L2-59" },
      { q: "A stronger acid has…", c: ["a larger Ka and a smaller pKa", "a smaller Ka and a larger pKa", "a larger Ka and a larger pKa", "a pKa near 15.7"], x: "pKa = −log Ka, so large Ka means small pKa.", fig: "L2-52" },
      { q: "Which acid is strongest?", c: ["HI (pKa ≈ −10)", "HCl (pKa ≈ −7)", "HF (pKa 3.5)", "Acetic acid (pKa 4.7)"], x: "Lowest pKa = strongest acid.", fig: "L2-53" },
      { q: "HCN has pKa 9.1 and water has pKa 15.7. Compared with OH⁻, cyanide ion is…", c: ["a weaker base", "a stronger base", "equally basic", "not a base"], x: "HCN is the stronger acid, so its conjugate base CN⁻ is the weaker base.", fig: "L2-54" },
      { q: "In any proton-transfer equilibrium, the position of equilibrium favors…", c: ["formation of the weaker acid and weaker base", "formation of the stronger acid and stronger base", "the side with more molecules", "the reactants always"], x: "Stronger acid + stronger base ⇌ weaker acid + weaker base, K > 1." },
      { q: "Protonating an alcohol with a strong acid gives a(n)…", c: ["alkyloxonium ion (ROH₂⁺)", "alkoxide ion (RO⁻)", "carbocation directly", "carboxylic acid"], x: "ROH + H–A ⇌ ROH₂⁺ + A⁻.", fig: "L2-55" },
      { q: "Proton transfer from HBr to water is described as…", c: ["a concerted reaction in a single elementary step", "a multi-step reaction with intermediates", "a free-radical chain reaction", "a reaction with no transition state"], x: "Bond breaking and forming happen together through one transition state.", fig: "L2-56" },
      { q: "Rank in order of DECREASING acidity: aspirin (3.48), vitamin C (4.17), formic acid (3.75), oxalic acid (1.19).", c: ["Oxalic > aspirin > formic > vitamin C", "Vitamin C > formic > aspirin > oxalic", "Aspirin > oxalic > formic > vitamin C", "Formic > aspirin > oxalic > vitamin C"], x: "Lower pKa = more acidic: 1.19 < 3.48 < 3.75 < 4.17.", fig: "L2-57" },
      { q: "The pKa of aspirin is 3.48. Its Ka is about…", c: ["3.3 × 10⁻⁴", "3.48", "3.0 × 10³", "1.0 × 10⁻⁷"], x: "Ka = 10⁻³·⁴⁸ ≈ 3.3 × 10⁻⁴." },
      { q: "Methanol (pKa 16) and methanethiol (pKa 11): which is the stronger base?", c: ["KOCH₃", "KSCH₃", "They are equal", "Neither is basic"], x: "Methanol is the weaker acid, so its conjugate base CH₃O⁻ is the stronger base." },
      { q: "In H₂CO₃ + H₂O ⇌ HCO₃⁻ + H₃O⁺, the conjugate acid is…", c: ["H₃O⁺", "HCO₃⁻", "H₂CO₃", "H₂O"], x: "Water (base) accepts a proton to become its conjugate acid H₃O⁺; HCO₃⁻ is the conjugate base of H₂CO₃." },
      { q: "The Arrhenius definition of a base is a substance that…", c: ["liberates OH⁻ in aqueous solution", "accepts a proton", "donates an electron pair", "liberates H⁺ in water"], x: "Arrhenius: acids release H⁺, bases release OH⁻ in water.", fig: "L2-50" }
    ]
  }
  ]
},
{
  id: "L3", title: "Alkanes & Cycloalkanes", sub: "Nomenclature, properties, combustion, conformations, ring strain",
  sections: [
  {
    id: "3.1", title: "Classes of Hydrocarbons & Key Functional Groups", slides: ["L3", 1, 5],
    notes: [
      "Two main classes: <b>aliphatic</b> (Greek <i>aleiphar</i>, “fat”) and <b>aromatic</b> (from pleasant-smelling plant extracts). Aromatic hydrocarbons are also called <b>arenes</b> (e.g. benzene).",
      "Aliphatic: <b>alkanes</b> (all single bonds), <b>alkenes</b> (C=C), <b>alkynes</b> (C≡C).",
      "Key classes: alcohol ROH (ethanol), alkyl halide RCl (chloroethane), amine ~RNH2~ (ethanamine), epoxide (oxirane, 3-membered ring with O), ether ROR (diethyl ether), nitrile RC≡N (propanenitrile), nitroalkane ~RNO2~ (nitroethane), thiol RSH (ethanethiol).",
      "Carbonyl classes: aldehyde (ethanal), ketone (2-propanone), carboxylic acid (ethanoic acid), and its derivatives: acyl halide (ethanoyl chloride), acid anhydride (ethanoic anhydride), ester (ethyl ethanoate), amide (ethanamide).",
      "<b>Prostaglandin E₁</b> contains a <b>ketone</b> (ring C=O) and a <b>carboxylic acid</b>."
    ],
    quiz: [
      { q: "The word 'aliphatic' comes from the Greek word aleiphar, meaning…", c: ["fat", "fragrant", "chain", "carbon"], x: "Aliphatic = 'fat'; aromatic compounds were first obtained from pleasant-smelling plant extracts." },
      { q: "Arenes is another name for…", c: ["aromatic hydrocarbons", "alkenes", "alkyl halides", "cycloalkanes"], x: "Arenes = aromatic hydrocarbons such as benzene.", fig: "L3-02" },
      { q: "The two carbonyl groups in prostaglandin E₁ are…", c: ["a ketone and a carboxylic acid", "an aldehyde and an ester", "an amide and a ketone", "two carboxylic acids"], x: "The ring C=O has carbons on both sides (ketone); the chain ends in –COOH.", fig: "L3-05" },
      { q: "A thiol has the general formula…", c: ["RSH", "ROH", "RSR", "RNO₂"], x: "Thiols are sulfur analogs of alcohols; ethanethiol is the odorant in natural gas.", fig: "L3-03" },
      { q: "An epoxide is…", c: ["a three-membered ring containing oxygen (e.g. oxirane)", "an ether with two ethyl groups", "a carbonyl compound", "a ring containing nitrogen"], x: "Epoxide R₂C–CR₂ bridged by O; the parent is oxirane." },
      { q: "Ethanamide (CH₃CONH₂) is a(n)…", c: ["amide", "amine", "ester", "nitrile"], x: "A carbonyl bonded to N is an amide.", fig: "L3-04" },
      { q: "Ethyl ethanoate (CH₃COOCH₂CH₃) is a(n)…", c: ["ester", "ether", "ketone", "acid anhydride"], x: "RCOOR' is an ester." }
    ]
  },
  {
    id: "3.2", title: "Alkanes: Methane to n-Alkanes", slides: ["L3", 6, 12],
    notes: [
      "Alkanes: general formula <b>C<sub>n</sub>H<sub>2n+2</sub></b>.",
      "Natural gas: <b>75% methane, 10% ethane, 5% propane</b>. Colorless and odorless; <b>ethanethiol</b> is added for smell.",
      "Boiling point rises with C number: methane −160 °C, ethane −89 °C, propane −42 °C.",
      "Butanes: n-butane (bp −0.4 °C, mp −139 °C) and isobutane (bp −10.2 °C, mp −160.9 °C).",
      "~CH3~ = <b>methyl</b>, ~CH2~ = <b>methylene</b>, CH = <b>methine</b>.",
      "<b>n-Alkanes</b> are unbranched: ~CH3(CH2)xCH3~. A <b>homologous series</b> differs by one ~–CH2–~ per member.",
      "~C5H12~ isomers: n-pentane, isopentane (2-methylbutane), neopentane (2,2-dimethylpropane). Drawings of the same connectivity are <b>not</b> isomers.",
      "Number of constitutional isomers: C₄ 2, C₅ 3, C₆ 5, C₇ 9, C₈ 18, C₉ 35, C₁₀ 75, C₁₅ 4,347, C₂₀ 366,319, C₄₀ ≈ 6.2 × 10¹³."
    ],
    quiz: [
      { q: "The general formula of an alkane is…", c: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], x: "Alkanes CₙH₂ₙ₊₂; cycloalkanes and alkenes CₙH₂ₙ; alkynes CₙH₂ₙ₋₂." },
      { q: "Natural gas is approximately…", c: ["75% methane, 10% ethane, 5% propane", "50% methane, 50% ethane", "90% propane", "75% butane"], x: "As given in the lecture.", fig: "L3-06" },
      { q: "Which compound gives natural gas its odor?", c: ["Ethanethiol", "Methane", "Hydrogen sulfide", "Ethanol"], x: "Natural gas is odorless; ethanethiol is added as a warning odorant." },
      { q: "A CH₂ unit in a chain is called a…", c: ["methylene group", "methyl group", "methine unit", "methane unit"], x: "CH₃ methyl, CH₂ methylene, CH methine." },
      { q: "A homologous series is one in which successive members differ by…", c: ["a –CH₂– group", "a –CH₃ group", "one carbon–carbon double bond", "one hydrogen atom"], x: "E.g. pentane → hexane adds one CH₂." },
      { q: "How many constitutional isomers does C₆H₁₄ have?", c: ["5", "3", "9", "18"], x: "C₆H₁₄ has 5 isomers.", fig: "L3-11" },
      { q: "How many constitutional isomers does C₇H₁₆ have?", c: ["9", "5", "18", "35"], x: "C₅ 3, C₆ 5, C₇ 9, C₈ 18." },
      { q: "Neopentane is…", c: ["2,2-dimethylpropane, (CH₃)₄C", "2-methylbutane", "n-pentane", "2,2-dimethylbutane"], x: "Neopentane has a central quaternary carbon with four methyls.", fig: "L3-09" },
      { q: "Why are the structures on slide 'These are not isomers' NOT isomers?", c: ["They have the same connectivity; they are the same compound drawn differently", "They have different molecular formulas", "They are enantiomers", "They are conformers of different compounds"], x: "The key point is connectivity.", fig: "L3-10" },
      { q: "Which has the highest boiling point?", c: ["Propane (−42 °C)", "Ethane (−89 °C)", "Methane (−160 °C)", "They are equal"], x: "Boiling point increases with the number of carbons.", fig: "L3-07" }
    ]
  },
  {
    id: "3.3", title: "IUPAC Nomenclature of Alkanes", slides: ["L3", 12, 18], more: [["L3", 23, 26]],
    notes: [
      "Unbranched names: 1 methane, 2 ethane, 3 propane, 4 butane, 5 pentane, 6 hexane, 7 heptane, 8 octane, 9 nonane, 10 decane, 11 undecane, 12 dodecane, 13 tridecane, 14 tetradecane, 15 pentadecane, 16 hexadecane, 17 heptadecane, 18 octadecane, 19 nonadecane, 20 icosane, 21 henicosane, 22 docosane, 30 triacontane, 40 tetracontane, 50 pentacontane, 100 hectane.",
      "<b>Step 1</b>: Find the <b>longest continuous chain</b> → parent name. <b>Step 2</b>: Identify substituents. <b>Step 3</b>: Number the chain to give the <b>lowest number at the first point of branching</b>. <b>Step 4</b>: Write locants + substituents + parent, with hyphens (e.g. 2-methylpentane).",
      "Repeated substituents: <b>di-, tri-, tetra-</b>, one locant each, separated by commas (2,2-dimethylbutane; 2,3-dimethylbutane).",
      "Different substituents are listed <b>alphabetically</b>; multiplying prefixes (di-, tri-) are <b>ignored</b> when alphabetizing (4-ethyl-3,5-dimethyloctane).",
      "<b>First point of difference</b>: compare locant sets term by term; the first lower number wins (2,2,6,6,7- beats 2,3,3,7,7-pentamethyloctane).",
      "If both directions give identical locants, give the lower number to the substituent <b>cited first alphabetically</b>.",
      "Practice answers: (CH₃)₃CCH₂CH(CH₃)₂ = 2,2,4-trimethylpentane; (CH₃)₃CC(CH₃)₃ = 2,2,3,3-tetramethylbutane; phytane = 2,6,10,14-tetramethylhexadecane (C₂₀H₄₂)."
    ],
    quiz: [
      { q: "The IUPAC name for an unbranched alkane with 11 carbons is…", c: ["undecane", "decane", "dodecane", "hendecane"], x: "10 decane, 11 undecane, 12 dodecane.", fig: "L3-12" },
      { q: "The unbranched alkane with 20 carbons is…", c: ["icosane", "docosane", "tricosane", "hectane"], x: "20 = icosane; 22 = docosane; 100 = hectane." },
      { q: "Name CH₃CH(CH₃)CH₂CH₂CH₃.", c: ["2-methylpentane", "4-methylpentane", "isohexane only", "2-methylbutane"], x: "Longest chain is 5 C; number from the end nearest the branch.", fig: "L3-16" },
      { q: "Name CH₃CH₂CH(CH₃)CH₂CH₃.", c: ["3-methylpentane", "2-ethylbutane", "3-ethylbutane", "2-methylpentane"], x: "Longest chain is 5 C with a methyl on C3." },
      { q: "Name (CH₃)₃CCH₂CH(CH₃)₂.", c: ["2,2,4-trimethylpentane", "2,4,4-trimethylpentane", "2,2-dimethyl-4-methylpentane", "isooctane-2,4"], x: "Pentane chain; number from the left end: 2,2,4 beats 2,4,4 at the second term." },
      { q: "Name (CH₃)₃CC(CH₃)₃.", c: ["2,2,3,3-tetramethylbutane", "2,2,3,3-tetramethylhexane", "hexamethylethane", "2,3-dimethyl-2,3-dimethylbutane"], x: "Longest chain = 4 C; four methyls on C2 and C3." },
      { q: "Which name is correct for this alkane: 2,2,6,6,7-pentamethyloctane or 2,3,3,7,7-pentamethyloctane?", c: ["2,2,6,6,7-pentamethyloctane", "2,3,3,7,7-pentamethyloctane", "Both are acceptable", "Neither"], x: "First point of difference: 2 vs 3 at the second locant, so the 2,2,… numbering wins.", fig: "L3-26" },
      { q: "Which name is written correctly?", c: ["4-ethyl-3-methyloctane", "3-methyl-4-ethyloctane", "4-ethyl,3-methyloctane", "3-methyl-4-ethyl-octane"], x: "Substituents are listed alphabetically (ethyl before methyl); locants and words are separated by hyphens.", fig: "L3-24" },
      { q: "When alphabetizing substituents, prefixes such as di-, tri- and tetra- are…", c: ["ignored", "used as the first letter", "always placed last", "written in italics and alphabetized"], x: "4-Ethyl-3,5-dimethyloctane: alphabetized as e (ethyl) then m (methyl)." },
      { q: "Give the IUPAC name of slide problem (a): CH₃CH₂CH(CH₃)CH(CH₂CH₃)CH(CH₃)CH₂CH(CH₃)₂.", c: ["5-ethyl-2,4,6-trimethyloctane", "4-ethyl-3,5,7-trimethyloctane", "5-ethyl-2,4,6-trimethylnonane", "4-ethyl-2,4,6-trimethyloctane"], x: "8-carbon chain; numbering from the right gives {2,4,5,6}, which beats {3,4,5,7}.", fig: "L3-25" },
      { q: "Give the IUPAC name of slide problem (b): (CH₃CH₂)₂CHCH₂CH(CH₃)₂.", c: ["4-ethyl-2-methylhexane", "3-ethyl-5-methylhexane", "2-methyl-4-ethylhexane", "3-ethyl-2-methylhexane"], x: "6-carbon chain; locants {2,4} beat {3,5}; ethyl listed before methyl.", fig: "L3-25" },
      { q: "Phytane is 2,6,10,14-tetramethylhexadecane. Its molecular formula is…", c: ["C₂₀H₄₂", "C₁₆H₃₄", "C₁₈H₃₈", "C₂₀H₄₀"], x: "16 C in the chain + 4 methyls = 20 C; alkane CₙH₂ₙ₊₂ → C₂₀H₄₂.", fig: "L3-18" },
      { q: "If both numbering directions give the same locants, the lower number goes to…", c: ["the substituent cited first in alphabetical order", "the larger substituent", "the substituent nearest the middle", "the methyl group always"], x: "Tie-breaker: alphabetical order." }
    ]
  },
  {
    id: "3.4", title: "Alkyl Groups & Degree of Substitution", slides: ["L3", 19, 22],
    notes: [
      "An <b>alkyl group</b> is an alkane minus one H. Replace <b>-ane</b> with <b>-yl</b>: methyl ~–CH3~, ethyl ~CH3CH2–~, heptyl, octadecyl.",
      "<b>Primary (1°)</b> carbon: attached to one other carbon. <b>Secondary (2°)</b>: two. <b>Tertiary (3°)</b>: three. <b>Quaternary (4°)</b>: four.",
      "Branched alkyl groups are named from the longest chain <b>starting at the point of attachment</b>: 1-methylethyl (isopropyl), 1-methylpropyl (sec-butyl), 2-methylpropyl (isobutyl), 1,1-dimethylethyl (tert-butyl).",
      "C₅H₁₁ groups (8): pentyl (1°), 1-methylbutyl (2°), 1-ethylpropyl (2°), 2-methylbutyl (1°), 3-methylbutyl (1°), 1,1-dimethylpropyl (3°), 1,2-dimethylpropyl (2°), 2,2-dimethylpropyl (1°)."
    ],
    quiz: [
      { q: "A secondary carbon is directly attached to…", c: ["two other carbons", "one other carbon", "three other carbons", "two hydrogens only"], x: "1° one C, 2° two C, 3° three C, 4° four C.", fig: "L3-20" },
      { q: "A carbon attached directly to four other carbons is…", c: ["quaternary", "tertiary", "secondary", "primary"], x: "E.g. the central carbon in neopentane." },
      { q: "The IUPAC name of the isopropyl group, (CH₃)₂CH–, is…", c: ["1-methylethyl", "2-methylethyl", "1-methylpropyl", "propyl"], x: "Longest chain from the point of attachment is 2 C (ethyl), with a methyl on C1.", fig: "L3-21" },
      { q: "The tert-butyl group, (CH₃)₃C–, has the IUPAC name…", c: ["1,1-dimethylethyl", "2-methylpropyl", "1-methylpropyl", "2,2-dimethylethyl"], x: "Two methyls on C1 of an ethyl group.", fig: "L3-22" },
      { q: "The isobutyl group, (CH₃)₂CHCH₂–, is named…", c: ["2-methylpropyl", "1-methylpropyl", "1,1-dimethylethyl", "butyl"], x: "Chain from attachment point: CH₂–CH–CH₃ (propyl) with methyl on C2." },
      { q: "sec-Butyl, CH₃CH₂CH(CH₃)–, is a ___ alkyl group.", c: ["secondary", "primary", "tertiary", "quaternary"], x: "The attachment carbon is bonded to two other carbons." },
      { q: "How many C₅H₁₁ alkyl groups are there?", c: ["8", "3", "5", "6"], x: "Three from pentane, four from 2-methylbutane, one from 2,2-dimethylpropane." },
      { q: "In IUPAC nomenclature, an alkyl group's name is formed by…", c: ["replacing -ane with -yl", "replacing -ane with -ene", "adding -ol", "adding the prefix alkyl-"], x: "Methane → methyl, ethane → ethyl." }
    ]
  },
  {
    id: "3.5", title: "Cycloalkane Nomenclature", slides: ["L3", 27, 29],
    notes: [
      "<b>Cycloalkanes</b>: rings of 3+ carbons, formula <b>C<sub>n</sub>H<sub>2n</sub></b>. Drawn as polygons (cyclopropane = triangle, cyclohexane = hexagon).",
      "Name with the prefix <b>cyclo-</b> + the alkane with the same number of carbons: ethylcyclopentane.",
      "Number substituents for lowest locants at the first point of difference: <b>3-ethyl-1,1-dimethylcyclohexane</b> (not 1-ethyl-3,3-dimethyl: 1,1,3 beats 1,3,3).",
      "If the ring has <b>fewer carbons than an attached alkyl chain</b>, name it as an alkane with a <b>cycloalkyl substituent</b>: 3-cyclobutylpentane.",
      "Practice (a): (1,1-dimethylethyl)cyclooctane, i.e. tert-butylcyclooctane."
    ],
    quiz: [
      { q: "The general formula of a cycloalkane is…", c: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"], x: "Forming the ring removes two H compared with the alkane.", fig: "L3-27" },
      { q: "The molecular formula of cyclohexane is…", c: ["C₆H₁₂", "C₆H₁₄", "C₆H₆", "C₆H₁₀"], x: "CₙH₂ₙ with n = 6." },
      { q: "Which name is correct?", c: ["3-ethyl-1,1-dimethylcyclohexane", "1-ethyl-3,3-dimethylcyclohexane", "1,1-dimethyl-3-ethylcyclohexane", "5-ethyl-1,1-dimethylcyclohexane"], x: "Locants 1,1,3 beat 1,3,3 at the first point of difference; then alphabetize.", fig: "L3-28" },
      { q: "CH₃CH₂CH(C₄H₇)CH₂CH₃ with a cyclobutane ring on C3 is named…", c: ["3-cyclobutylpentane", "1-(1-ethylpropyl)cyclobutane", "pentylcyclobutane", "3-pentylcyclobutane"], x: "The ring (4 C) is smaller than the chain (5 C), so the ring becomes a cycloalkyl substituent.", fig: "L3-29" },
      { q: "A cyclooctane ring bearing a –C(CH₃)₃ group is named…", c: ["(1,1-dimethylethyl)cyclooctane", "octylbutane", "1,1-dimethylethyloctane", "cyclooctyl-tert-butane"], x: "The ring (8 C) is larger than the substituent (4 C), so cyclooctane is the parent." },
      { q: "Cyclopentane with an ethyl group is named…", c: ["ethylcyclopentane", "1-ethylcyclopentane-1", "cyclopentylethane", "heptane"], x: "A single substituent needs no locant." }
    ]
  },
  {
    id: "3.6", title: "Sources & Physical Properties", slides: ["L3", 30, 33],
    notes: [
      "Crude oil distillation gives volatile fractions plus a nonvolatile <b>residue</b>: <b>refinery gas</b> C₁–C₄ (<25 °C), <b>light gasoline</b> C₅–C₁₂ (25–95 °C), <b>naphtha</b> C₅–C₁₂ (95–150 °C), <b>kerosene</b> C₁₂–C₁₅ (150–230 °C), <b>gas oil</b> C₁₅–C₂₅ (230–340 °C).",
      "Natural ring compounds: limonene (lemons, oranges), muscone (musk, used in perfumery), chrysanthemic acid (chrysanthemum flowers).",
      "Boiling points of unbranched alkanes <b>increase with carbon number</b>; branched isomers boil lower.",
      "Pentane bp 36 °C > 2-methylbutane 28 °C > 2,2-dimethylpropane 9 °C. The extended shape of an unbranched alkane gives <b>more points of contact</b> for intermolecular (van der Waals) attractions."
    ],
    quiz: [
      { q: "Which crude-oil fraction distills at 150–230 °C and contains C₁₂–C₁₅?", c: ["Kerosene", "Naphtha", "Gas oil", "Light gasoline"], x: "Refinery gas < light gasoline < naphtha < kerosene < gas oil.", fig: "L3-30" },
      { q: "The lowest-boiling fraction from crude oil distillation is…", c: ["refinery gas (C₁–C₄)", "gas oil", "kerosene", "residue"], x: "Refinery gas boils below 25 °C." },
      { q: "Rank by boiling point (highest first): pentane, 2-methylbutane, 2,2-dimethylpropane.", c: ["Pentane > 2-methylbutane > 2,2-dimethylpropane", "2,2-Dimethylpropane > 2-methylbutane > pentane", "All equal (same formula)", "2-Methylbutane > pentane > 2,2-dimethylpropane"], x: "36 °C > 28 °C > 9 °C; more branching gives a more compact shape.", fig: "L3-33" },
      { q: "Why does an unbranched alkane boil higher than its branched isomers?", c: ["Its extended shape allows more points of contact for intermolecular attractions", "It has more hydrogen bonds", "It has a higher molecular weight", "It is more polar"], x: "More surface contact means stronger van der Waals forces." },
      { q: "Limonene is found in…", c: ["lemons and oranges", "musk", "chrysanthemum flowers", "natural gas"], x: "Muscone: musk; chrysanthemic acid: chrysanthemums.", fig: "L3-31" },
      { q: "As the number of carbons in unbranched alkanes increases, the boiling point…", c: ["increases", "decreases", "stays constant", "first rises then falls"], x: "Larger molecules have stronger dispersion forces.", fig: "L3-32" }
    ]
  },
  {
    id: "3.7", title: "Combustion & Stability", slides: ["L3", 34, 36],
    notes: [
      "Combustion: alkane + O₂ → CO₂ + H₂O. ~CH4~ + 2 ~O2~ → ~CO2~ + 2 ~H2O~, ΔH° = −890 kJ (−212.8 kcal). 2-Methylbutane: ΔH° = −3529 kJ.",
      "Heat of combustion rises by about <b>653 kJ/mol (156 kcal/mol) per extra CH₂</b>.",
      "For <b>isomers</b>, the one with the <b>lowest heat of combustion</b> (lowest potential energy) is the <b>most stable</b>.",
      "Octane isomers: octane 5471 > 2-methylheptane 5466 > 2,2-dimethylhexane 5458 > 2,2,3,3-tetramethylbutane 5452 kJ/mol, so <b>branching increases stability</b>."
    ],
    quiz: [
      { q: "The products of complete combustion of an alkane are…", c: ["CO₂ and H₂O", "CO and H₂", "C and H₂O", "CH₄ and O₂"], x: "Alkanes burn to carbon dioxide and water.", fig: "L3-34" },
      { q: "The heat of combustion of unbranched alkanes increases by about how much per added CH₂?", c: ["653 kJ/mol (156 kcal/mol)", "890 kJ/mol", "12 kJ/mol", "45 kJ/mol"], x: "A regular increase of ~653 kJ/mol per CH₂.", fig: "L3-35" },
      { q: "Among isomers, the most stable one has the…", c: ["lowest heat of combustion", "highest heat of combustion", "highest boiling point", "longest chain"], x: "Lowest potential energy → least heat released → most stable.", fig: "L3-36" },
      { q: "Which C₈H₁₈ isomer is the most stable?", c: ["2,2,3,3-Tetramethylbutane (5452 kJ/mol)", "Octane (5471 kJ/mol)", "2-Methylheptane (5466 kJ/mol)", "2,2-Dimethylhexane (5458 kJ/mol)"], x: "The most highly branched isomer has the lowest heat of combustion.", fig: "L3-36" },
      { q: "ΔH° for the combustion of methane is…", c: ["−890 kJ/mol", "+890 kJ/mol", "−3529 kJ/mol", "−653 kJ/mol"], x: "Combustion is exothermic: −890 kJ (−212.8 kcal)." }
    ]
  },
  {
    id: "3.8", title: "Conformations of Ethane & Butane", slides: ["L3", 37, 47],
    notes: [
      "<b>Conformations</b>: spatial arrangements generated by rotation about single bonds. Different conformations of the same molecule = <b>conformers (rotamers)</b>. Example: H₂O₂.",
      "<b>Staggered</b>: each C–H bisects the angle of the C–H bonds on the adjacent carbon. <b>Eclipsed</b>: each C–H is aligned with one on the adjacent carbon. They interconvert by rotation.",
      "Drawings: wedge-and-dash, sawhorse, <b>Newman projection</b> (look down the C–C bond: front carbon = point, back carbon = circle).",
      "<b>Torsion (dihedral) angle</b>: angle between the H–C–C and C–C–H planes. Eclipsed 0°, gauche 60°, anti 180°.",
      "Staggered ethane is <b>12 kJ/mol</b> more stable than eclipsed. <b>Torsional strain</b>: destabilization from eclipsed bonds on adjacent atoms.",
      "<b>Steric strain</b>: total strain from all spatially dependent features. In 360° of rotation, ethane has 3 eclipsed (energy <b>maxima</b>) and 3 staggered (energy <b>minima</b>) conformations.",
      "Butane: <b>anti</b> (CH₃ groups 180°) and <b>gauche</b> (60°). <b>Van der Waals strain</b> (steric hindrance) makes gauche <b>3.2 kJ/mol</b> less stable than anti. Most molecules are staggered, with more anti than gauche."
    ],
    quiz: [
      { q: "Conformations are different spatial arrangements of a molecule generated by…", c: ["rotation about single bonds", "breaking and re-forming bonds", "rotation about double bonds", "changing the molecular formula"], x: "Conformers (rotamers) interconvert by single-bond rotation.", fig: "L3-37" },
      { q: "In a Newman projection, the back carbon is represented by…", c: ["a circle", "a point", "a wedge", "a dashed line"], x: "Front carbon = point where bonds meet; back carbon = circle.", fig: "L3-39" },
      { q: "By how much is staggered ethane more stable than eclipsed ethane?", c: ["12 kJ/mol", "3.2 kJ/mol", "27 kJ/mol", "45 kJ/mol"], x: "The 12 kJ/mol difference is torsional strain.", fig: "L3-42" },
      { q: "Torsional strain is…", c: ["destabilization from eclipsed bonds on adjacent atoms", "strain from bond angles that deviate from 109.5°", "repulsion between lone pairs", "strain from atoms being too far apart"], x: "Eclipsing interactions cause torsional strain." },
      { q: "The torsion angle in the GAUCHE conformation is…", c: ["60°", "0°", "120°", "180°"], x: "Eclipsed 0°, gauche 60°, anti 180°.", fig: "L3-42" },
      { q: "On the potential energy diagram for ethane rotation, the eclipsed conformations are at…", c: ["energy maxima", "energy minima", "zero energy", "inflection points"], x: "Eclipsed = highest points; staggered = lowest.", fig: "L3-44" },
      { q: "In butane, the gauche conformation is less stable than anti by 3.2 kJ/mol because of…", c: ["van der Waals strain (steric hindrance) between the CH₃ groups", "torsional strain only", "angle strain", "hydrogen bonding"], x: "In gauche the methyls are close enough to repel.", fig: "L3-46" },
      { q: "Identify the alkane in Newman projection (a): front carbon CH₃, H, H; back carbon H, H, H.", c: ["Propane", "Ethane", "Butane", "2-Methylpropane"], x: "CH₃–CH₂–CH₃ = propane.", fig: "L3-41" },
      { q: "Identify the alkane in Newman projection (c): front carbon CH₃, CH₃, H; back carbon CH₃, H, H.", c: ["2-Methylbutane", "Butane", "2,2-Dimethylpropane", "Pentane"], x: "(CH₃)₂CH–CH₂CH₃ = 2-methylbutane.", fig: "L3-41" },
      { q: "Identify the alkane in sawhorse (d): top carbon CH₃, H, CH₂CH₃; bottom carbon H, H, CH₂CH₃.", c: ["3-Methylhexane", "Heptane", "2-Ethylpentane", "3-Ethylpentane"], x: "CH₃CH(CH₂CH₃)CH₂CH₂CH₃: the longest chain is 6 C with a methyl on C3.", fig: "L3-41" },
      { q: "At room temperature, most butane molecules exist in…", c: ["staggered conformations, with more anti than gauche", "eclipsed conformations", "the gauche conformation mainly", "equal amounts of all conformations"], x: "Staggered minima dominate; anti is lowest in energy." }
    ]
  },
  {
    id: "3.9", title: "Cyclohexane Conformations", slides: ["L3", 48, 56],
    notes: [
      "<b>Chair</b>: the most stable conformation. C–C–C angles of <b>111°</b> → nearly free of angle strain; all bonds staggered → free of torsional strain.",
      "<b>Boat</b>: less stable by <b>27 kJ/mol</b>, due to van der Waals strain between the two <b>“flagpole” hydrogens</b> and torsional strain (eclipsing) on four carbons. Twisting gives the slightly more stable <b>twist (skew) boat</b>.",
      "<b>Axial</b> H (6): parallel to the vertical axis through the ring's center, alternating up/down on adjacent carbons. <b>Equatorial</b> H (6): roughly along the ring's “equator”. Each carbon is tetrahedral (sp³).",
      "Substituents on the ring keep alkane-like relationships: anti and gauche.",
      "<b>Ring flipping</b> (ring inversion, chair–chair interconversion): Ea = <b>45 kJ/mol</b>, very fast (half-life ~10⁻⁵ s at 25 °C). <b>Axial ↔ equatorial</b> swap on flipping.",
      "Energy diagram: chair → half-chair (+45 kJ/mol) → skew boat (+23 kJ/mol) → boat → … → chair."
    ],
    quiz: [
      { q: "The most stable conformation of cyclohexane is the…", c: ["chair", "boat", "twist boat", "half-chair"], x: "The chair is nearly free of both angle and torsional strain.", fig: "L3-48" },
      { q: "The C–C–C bond angles in chair cyclohexane are about…", c: ["111°", "120°", "90°", "60°"], x: "111° is close to the tetrahedral 109.5°, so there is little angle strain." },
      { q: "The boat conformation is destabilized mainly by…", c: ["van der Waals strain between the flagpole hydrogens, plus torsional strain", "angle strain only", "hydrogen bonding", "ring strain from 60° angles"], x: "Flagpole H–H repulsion plus eclipsed bonds on four carbons: 27 kJ/mol above the chair.", fig: "L3-50" },
      { q: "How much less stable is the boat than the chair?", c: ["27 kJ/mol", "12 kJ/mol", "45 kJ/mol", "3.2 kJ/mol"], x: "27 kJ/mol." },
      { q: "Axial hydrogens in cyclohexane…", c: ["are parallel to a vertical axis through the ring center and alternate up and down", "lie along the ring's equator", "all point up", "are only on carbons 1 and 4"], x: "Six axial H alternate up/down on adjacent carbons; six equatorial H point outward.", fig: "L3-51" },
      { q: "When cyclohexane undergoes ring flipping, an axial substituent becomes…", c: ["equatorial", "axial again", "eclipsed", "a flagpole substituent"], x: "Ring inversion swaps every axial position with an equatorial one.", fig: "L3-55" },
      { q: "The activation energy for ring inversion of cyclohexane is…", c: ["45 kJ/mol", "27 kJ/mol", "12 kJ/mol", "23 kJ/mol"], x: "Ea = 45 kJ/mol; half-life ~10⁻⁵ s at 25 °C.", fig: "L3-56" },
      { q: "Chair cyclohexane is free of torsional strain because…", c: ["all its bonds are staggered", "all its bonds are eclipsed", "it is planar", "its angles are 120°"], x: "Viewed down any C–C bond, the chair has staggered bonds.", fig: "L3-49" },
      { q: "On a cyclohexane chair, substituents A and B (both axial, on adjacent carbons, one up and one down) are…", c: ["anti", "gauche", "eclipsed", "cis"], x: "Trans-diaxial groups on adjacent carbons are anti (180°); the other pairings are gauche.", fig: "L3-53" }
    ]
  },
  {
    id: "3.10", title: "Small Rings & Cyclopentane", slides: ["L3", 57, 61],
    notes: [
      "<b>Cyclopropane</b>: carbons must be coplanar; no rotation about C–C. The <b>60°</b> angles prevent good sp³–sp³ overlap → <b>“bent” bonds</b> and large <b>angle strain</b>. Also torsional strain: each C–H is eclipsed with two others.",
      "<b>Cyclobutane</b>: less angle strain than cyclopropane; adopts a nonplanar <b>“puckered”</b> conformation to reduce eclipsing (torsional strain).",
      "<b>Cyclopentane</b>: planar form has little angle strain (108° vs 109.5°) but substantial torsional strain (five eclipsed bonds on each face). Nonplanar <b>envelope</b> and <b>half-chair</b> conformations have similar energy."
    ],
    quiz: [
      { q: "Why does cyclopropane have 'bent' bonds?", c: ["Its 60° angles prevent effective overlap of sp³ orbitals", "It has double bonds", "It is aromatic", "Its bonds are ionic"], x: "Orbitals can't point directly at each other, so overlap is poor and the bonds are bent.", fig: "L3-57" },
      { q: "Besides angle strain, cyclopropane is destabilized by…", c: ["torsional strain: each C–H bond is eclipsed with two others", "van der Waals flagpole strain", "hydrogen bonding", "nothing else"], x: "The planar ring forces all adjacent C–H bonds to eclipse.", fig: "L3-58" },
      { q: "Cyclobutane reduces torsional strain by adopting a…", c: ["puckered (nonplanar) conformation", "chair conformation", "planar conformation", "linear conformation"], x: "Puckering avoids the eclipsing of a planar ring.", fig: "L3-59" },
      { q: "Planar cyclopentane has small angle strain because…", c: ["the 108° angles of a pentagon are close to 109.5°", "it has no bond angles", "its angles are 90°", "it is aromatic"], x: "But it has substantial torsional strain: 5 eclipsed bonds on each face.", fig: "L3-60" },
      { q: "The two nonplanar conformations of cyclopentane are…", c: ["envelope and half-chair", "chair and boat", "boat and twist boat", "anti and gauche"], x: "They are of similar energy.", fig: "L3-61" },
      { q: "Rotation about the C–C bonds of cyclopropane is…", c: ["impossible", "free", "restricted only at low temperature", "possible only in the boat form"], x: "Three points define a plane; the ring cannot rotate about its bonds." }
    ]
  },
  {
    id: "3.11", title: "Disubstituted Cycloalkanes: Stereoisomers", slides: ["L3", 62, 64],
    notes: [
      "With two substituents on different ring carbons: <b>cis</b> = same side of the ring, <b>trans</b> = opposite sides.",
      "<b>Stereoisomers</b>: same constitution (atoms bonded in the same order), different arrangement in space. <b>Geometric isomers</b> are stereoisomers of the cis–trans type.",
      "Heats of combustion directly measure stereoisomer energies: <b>trans-1,2-dimethylcyclopropane is 5 kJ/mol (1.2 kcal/mol) more stable than cis</b> (3371 vs 3366 kJ/mol), because the cis methyls crowd each other."
    ],
    quiz: [
      { q: "In cis-1,2-dimethylcyclopropane, the methyl groups are…", c: ["on the same side of the ring", "on opposite sides of the ring", "on the same carbon", "in the plane of the ring"], x: "Cis = same side; trans = opposite sides.", fig: "L3-62" },
      { q: "Stereoisomers have…", c: ["the same constitution but a different arrangement of atoms in space", "different constitutions", "different molecular formulas", "the same 3D arrangement"], x: "Same connectivity, different spatial arrangement.", fig: "L3-63" },
      { q: "Cis–trans stereoisomers are also called…", c: ["geometric isomers", "constitutional isomers", "conformers", "homologs"], x: "Geometric isomers = stereoisomers of the cis–trans type." },
      { q: "Which is more stable, and by how much?", c: ["trans-1,2-Dimethylcyclopropane, by 5 kJ/mol", "cis-1,2-Dimethylcyclopropane, by 5 kJ/mol", "trans, by 27 kJ/mol", "They are equally stable"], x: "trans has the lower heat of combustion (3366 vs 3371 kJ/mol).", fig: "L3-64" },
      { q: "What is used as a direct measure of the energies of stereoisomers?", c: ["Heats of combustion", "Boiling points", "Melting points", "Dipole moments"], x: "Same products on combustion, so the difference in heat released reflects the difference in energy." }
    ]
  }
  ]
},
{
  id: "L4", title: "Alkenes & Alkynes", sub: "Naming, E/Z, elimination, addition reactions, alkyne chemistry",
  sections: [
  {
    id: "4.1", title: "Alkene Nomenclature", slides: ["L4", 1, 5],
    notes: [
      "<b>Alkenes</b> contain a C=C. Examples: isobutylene (synthetic rubber), α-pinene (turpentine), farnesene (waxy coating on apple skins).",
      "Replace <b>-ane</b> with <b>-ene</b>: ~CH2=CH2~ ethene (ethylene), ~CH3CH=CH2~ propene (propylene). Ethylene is involved in <b>fruit ripening</b>; ethylene and propene make polyethylene and polypropylene.",
      "The parent is the <b>longest chain that contains the double bond</b>, numbered to give the doubly bonded carbons the <b>lowest numbers</b>: 1-butene (not 3-butene), 2-hexene (not 4-hexene).",
      "C=C takes precedence over alkyl groups and halogens: 3-methyl-1-butene (not 2-methyl-3-butene); 6-bromo-3-propyl-1-hexene (longest chain that contains the double bond).",
      "<b>Hydroxyl outranks the double bond</b>. Compounds with both use <b>-en- + -ol</b>: 5-methyl-4-hexen-1-ol (not 2-methyl-2-hexen-6-ol).",
      "Cycloalkenes: cyclopentene, 1-methylcyclohexene, 3-chlorocycloheptene (not 1-chloro-2-cycloheptene). The double-bond carbons are C1 and C2."
    ],
    quiz: [
      { q: "The IUPAC name of CH₂=CHCH₂CH₃ is…", c: ["1-butene", "3-butene", "butane", "2-butene"], x: "Number to give the double-bond carbons the lowest numbers.", fig: "L4-03" },
      { q: "Name (CH₃)₂CHCH=CH₂.", c: ["3-methyl-1-butene", "2-methyl-3-butene", "3-methylbutene-1", "isopentene-2"], x: "The double bond takes precedence over the alkyl group when numbering." },
      { q: "When an alkene also has an –OH group, the chain is numbered to give lowest numbers to…", c: ["the carbon bearing the OH", "the double bond", "the alkyl branches", "the halogens"], x: "Hydroxyl outranks the double bond: 5-methyl-4-hexen-1-ol.", fig: "L4-04" },
      { q: "Which name is correct for HOCH₂CH₂CH₂CH=C(CH₃)₂?", c: ["5-methyl-4-hexen-1-ol", "2-methyl-2-hexen-6-ol", "5-methyl-1-hexen-4-ol", "2-methylhex-2-ene-6-ol"], x: "OH gets C1; the C=C is at C4; methyl on C5." },
      { q: "Ethylene is naturally involved in…", c: ["the ripening of fruits", "photosynthesis", "muscle contraction", "nerve signaling"], x: "Ethylene is a plant hormone that triggers ripening.", fig: "L4-02" },
      { q: "Name (CH₃)₂C=C(CH₃)₂.", c: ["2,3-dimethyl-2-butene", "2,3-dimethylbutene-2", "tetramethylethylene-2", "2,3-dimethyl-3-butene"], x: "4-carbon chain with C=C at C2 and methyls on C2 and C3." },
      { q: "Name the compound in which Cl is on the carbon next to the C=C of a cycloheptene ring.", c: ["3-chlorocycloheptene", "1-chloro-2-cycloheptene", "2-chlorocycloheptene", "7-chlorocycloheptene"], x: "The double-bond carbons are C1 and C2, so Cl is on C3.", fig: "L4-05" }
    ]
  },
  {
    id: "4.2", title: "Isomerism in Alkenes: cis/trans & E/Z", slides: ["L4", 5, 12],
    notes: [
      "cis-2-Butene and trans-2-butene are stereoisomers. Cis–trans isomerism is <b>not possible</b> when one double-bond carbon carries <b>two identical substituents</b> (1-butene, 2-methylpropene).",
      "C₅H₁₀ alkenes (6): 1-pentene, cis-2-pentene, trans-2-pentene, 2-methyl-1-butene, 3-methyl-1-butene, 2-methyl-2-butene.",
      "cis/trans is fine for similar groups (oleic acid in olive oil is cis; cinnamaldehyde is trans) but is ambiguous otherwise, so use <b>E–Z</b>.",
      "<b>Z</b> (<i>zusammen</i>, “together”): higher-priority groups on the <b>same side</b>. <b>E</b> (<i>entgegen</i>, “opposite”): higher-priority groups on <b>opposite sides</b>.",
      "<b>CIP rule 1</b>: higher atomic number wins (Br 35 > Cl 17). <b>Rule 2</b>: if the attached atoms tie, compare the atoms attached to them at the <b>first point of difference</b>: ethyl C(C,H,H) > methyl C(H,H,H); –C(CH₃)₃ > –CH(CH₃)₂ > –CH₂CH₃. <b>Rule 3</b>: a multiply bonded atom is <b>replicated</b> as substituents (–CH=O counts as C(O,O,H), outranking –CH₂OH C(O,H,H))."
    ],
    quiz: [
      { q: "Z stands for the German word zusammen, meaning…", c: ["together: higher-priority groups on the same side", "opposite: higher-priority groups on opposite sides", "zero: no stereoisomers", "zigzag"], x: "Z = zusammen (together); E = entgegen (opposite).", fig: "L4-08" },
      { q: "Which alkene CANNOT show cis–trans isomerism?", c: ["2-Methylpropene", "2-Butene", "2-Pentene", "3-Hexene"], x: "One double-bond carbon carries two identical CH₃ groups.", fig: "L4-06" },
      { q: "How many alkenes (including stereoisomers) have the formula C₅H₁₀?", c: ["6", "5", "4", "7"], x: "1-Pentene, cis- and trans-2-pentene, 2-methyl-1-butene, 3-methyl-1-butene, 2-methyl-2-butene." },
      { q: "By CIP rule 1, which has higher priority?", c: ["Br (Z = 35)", "Cl (Z = 17)", "CH₃", "H"], x: "Higher atomic number takes precedence.", fig: "L4-11" },
      { q: "Rank by CIP priority: –CH₂CH₃, –CH(CH₃)₂, –C(CH₃)₃.", c: ["–C(CH₃)₃ > –CH(CH₃)₂ > –CH₂CH₃", "–CH₂CH₃ > –CH(CH₃)₂ > –C(CH₃)₃", "All equal (all carbon)", "–CH(CH₃)₂ > –C(CH₃)₃ > –CH₂CH₃"], x: "Compare the sets: (C,C,C) > (C,C,H) > (C,H,H).", fig: "L4-12" },
      { q: "Under CIP rule 3, how is –CH=O treated?", c: ["As C(O,O,H): the doubly bonded O is counted twice", "As C(O,H,H)", "As C(O,H)", "As a lower priority than –CH₂OH"], x: "Multiple bonds are replicated, so –CH=O outranks –CH₂OH." },
      { q: "Slide problem (a): H₃C(H)C=C(CH₂OH)(CH₃), with CH₃ and CH₂OH on the same side. Configuration?", c: ["Z", "E", "Cannot be assigned", "Neither"], x: "Left: CH₃ > H (top). Right: CH₂OH > CH₃ (top). Same side → Z.", fig: "L4-10" },
      { q: "Slide problem (b): CH₃ (top left) and CH₂CH₂F (top right) vs CH₂CH₂CH₂CH₃ (bottom right). Configuration?", c: ["Z", "E", "Cannot be assigned", "Neither"], x: "CH₂CH₂F vs CH₂CH₂CH₂CH₃ tie at the first C; at the next carbon, (F,H,H) beats (C,H,H). Both higher groups on top → Z.", fig: "L4-10" },
      { q: "Slide problem (c): CH₃ (top left), CH₂CH₂OH (top right), C(CH₃)₃ (bottom right). Configuration?", c: ["E", "Z", "Cannot be assigned", "Neither"], x: "Right carbon: C(C,C,C) of tert-butyl beats C(C,H,H) of CH₂CH₂OH (the O is too far away to matter). Opposite sides → E.", fig: "L4-10" },
      { q: "Slide problem (d): cyclopropyl (top left) and ethyl (bottom left); H (top right) and CH₃ (bottom right). Configuration?", c: ["E", "Z", "Cannot be assigned", "Neither"], x: "Cyclopropyl C(C,C,H) > ethyl C(C,H,H) → top; CH₃ > H → bottom. Opposite sides → E.", fig: "L4-10" },
      { q: "When are cis/trans terms ambiguous, so that E/Z is needed?", c: ["When it isn't obvious which substituent on one carbon is analogous to a reference substituent on the other", "Whenever the alkene is in a ring", "Whenever the alkene is terminal", "Never: cis/trans always works"], x: "E/Z uses CIP priorities instead of 'similar' groups.", fig: "L4-07" }
    ]
  },
  {
    id: "4.3", title: "Preparation of Alkenes: Elimination", slides: ["L4", 13, 16],
    notes: [
      "Elimination: X–C–C–Y → C=C + X–Y. X and Y must be on <b>adjacent carbons</b>. The carbon bearing X is <b>α</b>; Y is on the <b>β</b> carbon. This is <b>β-elimination</b> (1,2-elimination).",
      "Dehydrogenation of ethane and propane (≈750 °C) is β-elimination but not a practical lab preparation.",
      "<b>Dehydration of alcohols</b>: H–C–C–OH → C=C + H₂O, with an acid catalyst (H₂SO₄ or H₃PO₄) and heat. Ethanol → ethylene (H₂SO₄, 160 °C); cyclohexanol → cyclohexene (H₃PO₄, 140 °C); 2-methyl-2-propanol → 2-methylpropene.",
      "Temperature requirement: <b>1° > 2° > 3°</b>. Tertiary alcohols dehydrate most easily.",
      "Practice: 3-ethyl-3-pentanol → 3-ethyl-2-pentene; 1-propanol and 2-propanol → propene; 2,3,3-trimethyl-2-butanol → 2,3,3-trimethyl-1-butene."
    ],
    quiz: [
      { q: "In a β-elimination, X and Y must be on…", c: ["adjacent carbons", "the same carbon", "carbons separated by one CH₂", "a ring only"], x: "1,2-elimination: X on the α carbon, Y on the β carbon.", fig: "L4-13" },
      { q: "Dehydration of an alcohol produces an alkene and…", c: ["water", "hydrogen gas", "a hydrogen halide", "carbon dioxide"], x: "H and OH are removed as H₂O.", fig: "L4-14" },
      { q: "Rank alcohols by the temperature required for dehydration (highest first).", c: ["1° > 2° > 3°", "3° > 2° > 1°", "2° > 1° > 3°", "All the same"], x: "Primary alcohols need the harshest conditions; tertiary dehydrate most easily.", fig: "L4-15" },
      { q: "Dehydration of cyclohexanol with H₃PO₄ and heat gives…", c: ["cyclohexene", "cyclohexane", "benzene", "cyclohexanone"], x: "Loss of H₂O forms the ring C=C." },
      { q: "Both 1-propanol and 2-propanol dehydrate to…", c: ["propene", "propane", "cyclopropane", "propyne"], x: "Either way, the only alkene possible is CH₃CH=CH₂.", fig: "L4-16" },
      { q: "Dehydration of 2,3,3-trimethyl-2-butanol gives…", c: ["2,3,3-trimethyl-1-butene", "2,3,3-trimethyl-2-butene", "2,3-dimethyl-2-butene", "No alkene can form"], x: "C3 has no H (it is quaternary), so the H must come from a CH₃ on C2." },
      { q: "Why is dehydrogenation of ethane not a practical lab preparation of ethylene?", c: ["It requires very high temperatures (~750 °C)", "It produces no alkene", "It is not an elimination", "It produces water"], x: "It is an industrial, high-temperature process." }
    ]
  },
  {
    id: "4.4", title: "Hydrogenation & Alkene Stability", slides: ["L4", 16, 21],
    notes: [
      "Alkenes are <b>unsaturated</b>: they undergo <b>addition</b> (A–B adds across C=C). Alkanes are <b>saturated</b> and cannot.",
      "<b>Hydrogenation</b>: addition of H₂ across a multiple bond, with a metal catalyst (Pt, Pd, Ni or Rh). Ethylene + H₂ → ethane, ΔH° = −136 kJ (−32.6 kcal).",
      "Practice: alkenes giving 2-methylbutane on hydrogenation: 2-methyl-1-butene, 2-methyl-2-butene, 3-methyl-1-butene.",
      "<b>Heats of hydrogenation</b> compare stabilities: 1-butene 126, cis-2-butene 119, trans-2-butene 115 kJ/mol. Lower heat = more stable: <b>trans > cis > terminal</b>.",
      "Stability rises with substitution: ethylene < monosubstituted < disubstituted < trisubstituted < tetrasubstituted (same trend as heats of combustion).",
      "<b>Syn addition</b>: both atoms add to the <b>same face</b>. <b>Anti addition</b>: opposite faces. Catalytic hydrogenation is <b>syn</b> and <b>stereoselective</b> (α-pinene → only cis-pinane)."
    ],
    quiz: [
      { q: "Alkenes are called unsaturated because…", c: ["they can add substances across the double bond", "they contain oxygen", "they dissolve in water", "they are gases"], x: "Alkanes are saturated and cannot undergo addition.", fig: "L4-17" },
      { q: "Which catalysts are used for alkene hydrogenation?", c: ["Pt, Pd, Ni or Rh", "H₂SO₄", "Peroxides (ROOR)", "NaNH₂"], x: "Finely divided metals catalyze hydrogenation.", fig: "L4-18" },
      { q: "Which three alkenes give 2-methylbutane on catalytic hydrogenation?", c: ["2-methyl-1-butene, 2-methyl-2-butene, 3-methyl-1-butene", "1-pentene, 2-pentene, cyclopentene", "2-methylpropene, 1-butene, 2-butene", "2-methyl-1-butene, 1-pentene, 3-methyl-2-butene"], x: "Any C=C position on the 2-methylbutane skeleton works; '3-methyl-2-butene' is just 2-methyl-2-butene misnumbered." },
      { q: "Heats of hydrogenation: 1-butene 126, cis-2-butene 119, trans-2-butene 115 kJ/mol. Which is most stable?", c: ["trans-2-Butene", "cis-2-Butene", "1-Butene", "All equal"], x: "Lowest heat of hydrogenation = lowest energy = most stable.", fig: "L4-19" },
      { q: "Rank by stability (most stable first).", c: ["Tetrasubstituted > trisubstituted > disubstituted > monosubstituted > ethylene", "Ethylene > monosubstituted > disubstituted > tetrasubstituted", "Monosubstituted > disubstituted > tetrasubstituted", "All alkenes are equally stable"], x: "More alkyl substituents on the C=C mean a more stable alkene.", fig: "L4-20" },
      { q: "Syn addition means the two groups add to…", c: ["the same face of the double bond", "opposite faces of the double bond", "the same carbon", "the less substituted carbon"], x: "Anti addition = opposite faces.", fig: "L4-20" },
      { q: "Hydrogenation of α-pinene gives only cis-pinane. This is an example of…", c: ["a stereoselective reaction (syn addition from the less hindered face)", "anti addition", "Markovnikov addition", "free-radical addition"], x: "H₂ adds from the less crowded face, so only one stereoisomer forms.", fig: "L4-21" },
      { q: "ΔH° for the hydrogenation of ethylene is…", c: ["−136 kJ/mol", "+136 kJ/mol", "−890 kJ/mol", "−12 kJ/mol"], x: "Hydrogenation is exothermic: −136 kJ (−32.6 kcal)." }
    ]
  },
  {
    id: "4.5", title: "HX Addition & Markovnikov's Rule", slides: ["L4", 22, 27],
    notes: [
      "<b>Electrophilic addition of HX</b>: alkene + H–X → alkyl halide. cis-3-Hexene + HBr → 3-bromohexane.",
      "Reactivity tracks the ability to donate a proton: <b>HF ≪ HCl < HBr < HI</b>.",
      "Mechanism: the alkene (base) takes H⁺ from HX (acid) → <b>carbocation</b> (electrophile) + X⁻ (nucleophile) → alkyl halide. The reaction starts with an <b>electrophile</b> attacking the π electrons.",
      "<b>Markovnikov's rule</b>: in an unsymmetrical alkene, <b>H adds to the carbon with more H's</b>, and X to the carbon with fewer H's. 1-Butene + HBr → 2-bromobutane; 2-methylpropene + HBr → 2-bromo-2-methylpropane; 1-methylcyclopentene + HCl → 1-chloro-1-methylcyclopentane.",
      "Practice (HCl): 2-methyl-2-butene and 2-methyl-1-butene → 2-chloro-2-methylbutane; cis-2-butene → 2-chlorobutane; ethylidenecyclohexane → 1-chloro-1-ethylcyclohexane.",
      "<b>With peroxides (ROOR), HBr adds by free radicals → anti-Markovnikov</b>: 1-butene + HBr + peroxides → 1-bromobutane (95%). Without peroxides → 2-bromobutane (90%)."
    ],
    quiz: [
      { q: "Rank the hydrogen halides by reactivity toward alkenes.", c: ["HF ≪ HCl < HBr < HI", "HI < HBr < HCl < HF", "HCl < HF < HBr < HI", "All equal"], x: "Reactivity follows acidity (ability to donate a proton).", fig: "L4-23" },
      { q: "Markovnikov's rule: when HX adds to an unsymmetrical alkene, H adds to…", c: ["the carbon that already has more H substituents", "the carbon with fewer H substituents", "either carbon equally", "the more substituted carbon"], x: "X ends up on the more substituted carbon, where the more stable carbocation forms.", fig: "L4-24" },
      { q: "The major product of 1-butene + HBr (no peroxides) is…", c: ["2-bromobutane", "1-bromobutane", "2-bromo-2-butene", "1,2-dibromobutane"], x: "Markovnikov addition (80–90%).", fig: "L4-25" },
      { q: "1-Butene + HBr in the presence of peroxides (ROOR) gives mainly…", c: ["1-bromobutane (anti-Markovnikov)", "2-bromobutane", "butane", "1,2-dibromobutane"], x: "Peroxides start a free-radical pathway: anti-Markovnikov, 95%.", fig: "L4-27" },
      { q: "The first step of electrophilic addition of HX is…", c: ["protonation of the alkene's π electrons to give a carbocation", "attack of X⁻ on the alkene", "homolysis of HX into radicals", "formation of a cyclic halonium ion"], x: "The alkene acts as a base, takes H⁺, and forms a carbocation; X⁻ then attacks it.", fig: "L4-23" },
      { q: "2-Methylpropene + HBr gives…", c: ["2-bromo-2-methylpropane", "1-bromo-2-methylpropane", "2-bromobutane", "1-bromobutane"], x: "Br goes to the tertiary carbon (90%).", fig: "L4-26" },
      { q: "2-Methyl-1-butene + HCl gives…", c: ["2-chloro-2-methylbutane", "1-chloro-2-methylbutane", "2-chloro-3-methylbutane", "1-chloropentane"], x: "Cl attaches to the more substituted carbon (C2).", fig: "L4-26" },
      { q: "cis-2-Butene + HCl gives…", c: ["2-chlorobutane", "1-chlorobutane", "2,3-dichlorobutane", "2-chloro-2-butene"], x: "A symmetrical alkene: either way gives 2-chlorobutane." },
      { q: "Ethylidenecyclohexane (CH₃CH=C₆H₁₀) + HCl gives…", c: ["1-chloro-1-ethylcyclohexane", "(1-chloroethyl)cyclohexane", "1-chloro-2-ethylcyclohexane", "chlorocyclohexane"], x: "The ring carbon has no H; H adds to CH, and Cl goes to the ring carbon (tertiary)." },
      { q: "In the HX addition mechanism, the carbocation acts as the…", c: ["electrophile", "nucleophile", "base", "radical"], x: "The halide ion (nucleophile) attacks the electrophilic carbocation.", fig: "L4-24" }
    ]
  },
  {
    id: "4.6", title: "Hydration, Halogenation & Polymerization", slides: ["L4", 28, 32],
    notes: [
      "<b>Acid-catalyzed hydration</b> (50% H₂SO₄/H₂O) follows <b>Markovnikov</b>: 2-methyl-2-butene → 2-methyl-2-butanol (90%); methylenecyclobutane → 1-methylcyclobutanol (80%).",
      "<b>Halogenation</b>: alkene + X₂ → <b>vicinal dihalide</b> (halogens on neighboring carbons), by electrophilic addition. 4-Methyl-2-pentene + Br₂ (CHCl₃, 0 °C) → 2,3-dibromo-4-methylpentane (100%).",
      "<b>Polymerization</b>: 2-methylpropene (65% H₂SO₄) → <b>dimers</b> 2,4,4-trimethyl-1-pentene and 2,4,4-trimethyl-2-pentene. One unit = <b>monomer</b>; 3 = trimer; 4 = tetramer; many = <b>polymer</b>.",
      "Polymers: ethylene → polyethylene (films, bottles); propene → polypropylene; styrene → polystyrene; vinyl chloride → <b>PVC</b>; acrylonitrile → wool substitute; 1,1-dichloroethene → <b>Saran</b>; 2-methylpropene → polyisobutene (butyl rubber); tetrafluoroethene → <b>Teflon</b>; methyl methacrylate → <b>Lucite/Plexiglas</b>; 2-methyl-1,3-butadiene → polyisoprene (synthetic rubber)."
    ],
    quiz: [
      { q: "Acid-catalyzed hydration of 2-methyl-2-butene gives mainly…", c: ["2-methyl-2-butanol", "3-methyl-2-butanol", "2-methyl-1-butanol", "2-methylbutane"], x: "Markovnikov: OH goes to the more substituted carbon.", fig: "L4-28" },
      { q: "Adding Br₂ to an alkene gives a…", c: ["vicinal dihalide", "geminal dihalide", "alkyl monohalide", "tetrahaloalkane"], x: "The two Br end up on adjacent ('neighboring') carbons.", fig: "L4-29" },
      { q: "4-Methyl-2-pentene + Br₂ gives…", c: ["2,3-dibromo-4-methylpentane", "2,2-dibromo-4-methylpentane", "1,2-dibromo-4-methylpentane", "3-bromo-4-methylpentane"], x: "Br adds across the C2=C3 double bond.", fig: "L4-29" },
      { q: "Joining two monomer units gives a…", c: ["dimer", "trimer", "polymer", "tetramer"], x: "2 = dimer, 3 = trimer, 4 = tetramer, many = polymer.", fig: "L4-30" },
      { q: "Which monomer is used to make Teflon?", c: ["Tetrafluoroethene, CF₂=CF₂", "Vinyl chloride", "Styrene", "Methyl methacrylate"], x: "Teflon = poly(tetrafluoroethene), used for nonstick coatings and bearings.", fig: "L4-32" },
      { q: "PVC (polyvinyl chloride) is made from…", c: ["vinyl chloride, CH₂=CHCl", "1,1-dichloroethene", "chloroethane", "acrylonitrile"], x: "PVC: tubes and pipes, among other uses.", fig: "L4-31" },
      { q: "Lucite / Plexiglas is made from…", c: ["methyl methacrylate", "styrene", "propene", "2-methyl-1,3-butadiene"], x: "Poly(methyl methacrylate) is a transparent glass substitute.", fig: "L4-32" },
      { q: "Saran wrap is made from…", c: ["1,1-dichloroethene (vinylidene chloride)", "vinyl chloride", "tetrafluoroethene", "ethylene"], x: "Saran forms air- and water-tight packaging film." },
      { q: "Acid-catalyzed hydration of alkenes follows…", c: ["Markovnikov's rule", "anti-Markovnikov orientation", "syn addition of H₂", "no regioselectivity"], x: "H goes to the carbon with more H; OH goes to the more substituted carbon." }
    ]
  },
  {
    id: "4.7", title: "Alkynes: Structure, Naming & Acidity", slides: ["L4", 33, 35],
    notes: [
      "<b>Alkynes</b> contain a C≡C; noncyclic alkynes are <b>C<sub>n</sub>H<sub>2n−2</sub></b>. Simplest: <b>acetylene</b> HC≡CH.",
      "<b>Terminal</b> (monosubstituted) RC≡CH: triple bond at the chain end; these are the <b>most acidic simple hydrocarbons</b>. <b>Disubstituted</b> RC≡CR': internal triple bond.",
      "Naming: <b>-ane → -yne</b>: propyne, 1-butyne, 2-butyne, 4,4-dimethyl-2-pentyne. The –C≡CH substituent is <b>ethynyl</b>.",
      "C₅H₈ alkynes: 1-pentyne, 2-pentyne, 3-methyl-1-butyne.",
      "Alkynes are slightly more polar and have slightly higher boiling points than corresponding alkanes and alkenes.",
      "Acidity increases with carbon's effective electronegativity, which rises with <b>s character: sp³ < sp² < sp</b>. Ethane pKa ≈ 62, ethylene ≈ 45, <b>acetylene ≈ 26</b> (strongest).",
      "<b>Alkylation</b> of acetylene/terminal alkynes: deprotonate, then alkylate: HC≡CH → RC≡CH → RC≡CR'."
    ],
    quiz: [
      { q: "The general formula for a noncyclic alkyne is…", c: ["CₙH₂ₙ₋₂", "CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙHₙ"], x: "Two degrees of unsaturation compared with the alkane.", fig: "L4-33" },
      { q: "Rank the acidity of ethane, ethylene and acetylene (most acidic first).", c: ["Acetylene > ethylene > ethane", "Ethane > ethylene > acetylene", "Ethylene > acetylene > ethane", "All equal"], x: "pKa 26 < 45 < 62. More s character makes carbon more electronegative.", fig: "L4-35" },
      { q: "Why are terminal alkynes more acidic than alkenes and alkanes?", c: ["The sp-hybridized C–H carbon has more s character, so it is more electronegative", "They contain oxygen", "The triple bond is weaker", "They are ionic"], x: "s character: sp (50%) > sp² (33%) > sp³ (25%)." },
      { q: "What is the pKa of acetylene?", c: ["≈ 26", "≈ 45", "≈ 62", "≈ 15.7"], x: "Ka ≈ 10⁻²⁶." },
      { q: "The –C≡CH group, as a substituent, is called…", c: ["ethynyl", "ethenyl", "vinyl", "acetyl"], x: "Ethynyl = –C≡CH; vinyl/ethenyl = –CH=CH₂.", fig: "L4-34" },
      { q: "How many alkynes have the formula C₅H₈?", c: ["3", "2", "4", "5"], x: "1-Pentyne, 2-pentyne, 3-methyl-1-butyne." },
      { q: "Name CH₃C≡CCH₃.", c: ["2-butyne", "1-butyne", "butene", "2-butene"], x: "4-carbon chain, triple bond at C2." },
      { q: "Compared with the corresponding alkanes and alkenes, alkynes have…", c: ["slightly higher polarity and boiling points", "much lower boiling points", "no polarity at all", "ionic character"], x: "They are slightly more polar with slightly higher bp." }
    ]
  },
  {
    id: "4.8", title: "Preparation of Alkynes by Elimination", slides: ["L4", 36, 37],
    notes: [
      "<b>Geminal dihalide</b>: both halogens on the <b>same</b> carbon. <b>Vicinal dihalide</b>: halogens on <b>adjacent</b> carbons.",
      "<b>Double dehydrohalogenation</b> with <b>2 NaNH₂</b> (sodium amide) removes 2 HX → alkyne. Terminal alkynes form as the sodium salt and are then protonated with H₂O.",
      "Examples: 1,1-dichloro-3,3-dimethylbutane → 3,3-dimethyl-1-butyne (56–60%); 1,2-dibromodecane → 1-decyne (54%).",
      "Practice: three dibromides that give 3,3-dimethyl-1-butyne: (CH₃)₃CCH₂CHBr₂ (geminal), (CH₃)₃CCBr₂CH₃ (geminal), (CH₃)₃CCHBrCH₂Br (vicinal)."
    ],
    quiz: [
      { q: "A geminal dihalide has…", c: ["both halogens on the same carbon", "halogens on adjacent carbons", "halogens on the two ends of the chain", "one halogen on a ring"], x: "Geminal = same carbon; vicinal = neighboring carbons.", fig: "L4-36" },
      { q: "Which reagent converts a vicinal or geminal dihalide into an alkyne?", c: ["NaNH₂ (sodium amide), 2 equivalents", "H₂ / Pt", "H₂SO₄ / H₂O", "Br₂"], x: "The strong base removes two HX in a double elimination.", fig: "L4-37" },
      { q: "1,2-Dibromodecane + NaNH₂ (then H₂O) gives…", c: ["1-decyne", "1-decene", "decane", "2-decyne"], x: "Double dehydrobromination of a vicinal dihalide.", fig: "L4-37" },
      { q: "Which is NOT a suitable dibromide for preparing 3,3-dimethyl-1-butyne?", c: ["(CH₃)₂CBrCBr(CH₃)₂", "(CH₃)₃CCH₂CHBr₂", "(CH₃)₃CCBr₂CH₃", "(CH₃)₃CCHBrCH₂Br"], x: "(CH₃)₂CBrCBr(CH₃)₂ has the wrong carbon skeleton (2,3-dimethylbutane) and would not give a terminal tert-butyl alkyne." },
      { q: "When a terminal alkyne is formed with NaNH₂, why is water added at the end?", c: ["To protonate the sodium alkynide salt", "To hydrate the triple bond", "To remove excess halogen", "To catalyze the elimination"], x: "NaNH₂ deprotonates the acidic terminal C–H; H₂O gives back RC≡CH." }
    ]
  },
  {
    id: "4.9", title: "Reactions of Alkynes", slides: ["L4", 38, 45],
    notes: [
      "<b>Hydrogenation</b>: RC≡CR' + 2 H₂ (Pt, Pd, Ni or Rh) → <b>alkane</b>.",
      "<b>Lindlar Pd</b> (poisoned) stops at the alkene by <b>syn addition</b> → <b>cis (Z) alkene</b>: 5-decyne → (Z)-5-decene.",
      "<b>Metal–ammonia reduction</b> (Na, NH₃) → <b>trans (E) alkene</b>: 3-hexyne → (E)-3-hexene.",
      "<b>HX addition</b> follows Markovnikov: 1-hexyne + HBr → 2-bromo-1-hexene. Excess HX → <b>geminal dihalide</b> (both H on one carbon, both X on the adjacent carbon): 3-hexyne + 2 HF → 3,3-difluorohexane. With peroxides → anti-Markovnikov (1-bromo-1-hexene).",
      "<b>Hydration</b> (H₂O, H⁺, Hg²⁺) gives an <b>enol</b>, which rapidly isomerizes to an <b>aldehyde or ketone</b> (<b>keto–enol tautomerism</b>). 4-Octyne → 4-octanone.",
      "<b>Halogens</b>: 2 X₂ → <b>tetrahaloalkane</b> (propyne + 2 Cl₂ → 1,1,2,2-tetrachloropropane). With equimolar X₂ the <b>dihaloalkene</b> intermediate forms by <b>anti</b> addition: 3-hexyne + Br₂ → (E)-3,4-dibromo-3-hexene.",
      "<b>Ozonolysis</b> (1. O₃, 2. H₂O) splits the triple bond into <b>carboxylic acids</b>: RC≡CR' → RCOOH + R'COOH. A terminal alkyne gives CO₂ (carbonic acid) from the ≡CH end: 1-hexyne → pentanoic acid.",
      "Practice: C₁₆H₂₆ with two triple bonds giving CH₃(CH₂)₄CO₂H and HO₂CCH₂CH₂CO₂H → <b>CH₃(CH₂)₄C≡CCH₂CH₂C≡C(CH₂)₄CH₃</b>."
    ],
    quiz: [
      { q: "Hydrogenation of an alkyne over Lindlar Pd gives…", c: ["a cis (Z) alkene", "a trans (E) alkene", "an alkane", "an enol"], x: "Lindlar's poisoned catalyst stops at the alkene, with syn addition → cis.", fig: "L4-39" },
      { q: "Reduction of 3-hexyne with Na in NH₃ gives…", c: ["(E)-3-hexene (trans)", "(Z)-3-hexene (cis)", "hexane", "3-hexanone"], x: "Metal–ammonia reduction gives trans alkenes.", fig: "L4-39" },
      { q: "Alkyne + 2 H₂ over Pt (or Pd, Ni, Rh) gives…", c: ["an alkane", "a cis alkene", "a trans alkene", "no reaction"], x: "With an active catalyst, both π bonds are hydrogenated.", fig: "L4-38" },
      { q: "1-Hexyne + HBr (no peroxides) gives…", c: ["2-bromo-1-hexene", "1-bromo-1-hexene", "1-bromohexane", "2,2-dibromohexane"], x: "Markovnikov: Br goes to the internal carbon (60%).", fig: "L4-40" },
      { q: "An alkyne with EXCESS hydrogen halide gives a…", c: ["geminal dihalide", "vicinal dihalide", "tetrahaloalkane", "dihaloalkene only"], x: "Both X add to the same carbon; both H go to the adjacent carbon.", fig: "L4-41" },
      { q: "1-Hexyne + HBr in the presence of peroxides gives…", c: ["1-bromo-1-hexene (anti-Markovnikov)", "2-bromo-1-hexene", "2,2-dibromohexane", "hexanal"], x: "Peroxides reverse the regioselectivity (79%).", fig: "L4-42" },
      { q: "Hydration of an alkyne first produces a(n) ___, which rapidly isomerizes to a ketone or aldehyde.", c: ["enol", "alcohol", "ether", "epoxide"], x: "Keto–enol tautomerism converts the enol to the carbonyl compound.", fig: "L4-42" },
      { q: "Hydration of 4-octyne (H₂O, H⁺, Hg²⁺) gives…", c: ["4-octanone", "4-octanol", "octanal", "4-octene"], x: "A symmetrical internal alkyne gives one ketone (89%).", fig: "L4-43" },
      { q: "Propyne + 2 Cl₂ gives…", c: ["1,1,2,2-tetrachloropropane", "1,2-dichloropropene", "2,2-dichloropropane", "1,1-dichloropropane"], x: "Two equivalents of halogen give a tetrahaloalkane.", fig: "L4-44" },
      { q: "3-Hexyne + one equivalent of Br₂ gives…", c: ["(E)-3,4-dibromo-3-hexene (anti addition)", "(Z)-3,4-dibromo-3-hexene (syn addition)", "3,3,4,4-tetrabromohexane", "3-bromohexane"], x: "With equimolar halogen, the dihaloalkene forms by anti addition.", fig: "L4-44" },
      { q: "Ozonolysis of an alkyne yields…", c: ["carboxylic acids", "aldehydes", "alcohols", "alkenes"], x: "RC≡CR' → RCOOH + R'COOH. A terminal ≡CH gives carbonic acid (CO₂).", fig: "L4-45" },
      { q: "A C₁₆H₂₆ hydrocarbon with two triple bonds gives CH₃(CH₂)₄CO₂H and HO₂CCH₂CH₂CO₂H on ozonolysis. Its structure is…", c: ["CH₃(CH₂)₄C≡CCH₂CH₂C≡C(CH₂)₄CH₃", "CH₃(CH₂)₄C≡C(CH₂)₄C≡CCH₂CH₃", "HC≡C(CH₂)₁₂C≡CH", "CH₃(CH₂)₆C≡CC≡C(CH₂)₄CH₃"], x: "Two hexanoic-acid ends plus a succinic-acid middle: 6 + 4 + 6 = 16 carbons." },
      { q: "Keto–enol tautomerism converts…", c: ["an enol into an aldehyde or ketone", "an alkene into an alkyne", "a ketone into an alcohol by reduction", "cis into trans alkenes"], x: "Enols are unstable and rearrange to the carbonyl form." }
    ]
  }
  ]
},
{
  id: "EX", title: "Exams", sub: "Past classwork quizzes: chemical bonding, conformational analysis",
  sections: [
  {
    id: "CW2", title: "Chemical Bonding",
    notes: [
      "Graded Google Forms classwork, 25 items × 4 points. Covers Lecture 2 (Chemical Bonding).",
      "Topics: carbon's bonding, ionic character, Lewis structures and formal charge, octet exceptions, resonance, polarity and dipole moments, hybridization and VSEPR shapes, isomers vs resonance, boiling points, conjugate acid–base pairs."
    ],
    quiz: [
      { q: "Which statement best explains why carbon is capable of forming such a large number of different compounds?", c: ["Carbon can form four covalent bonds and strong C–C bonds.", "Carbon has six valence electrons and readily forms ionic bonds.", "Carbon has a completely filled valence shell.", "Carbon can form only single bonds with other carbon atoms."], x: "Carbon has 4 valence electrons, forms four covalent bonds and strong C–C bonds (chains, rings, multiple bonds)." },
      { q: "Which statement correctly compares the 2s and 2p atomic orbitals of carbon?", c: ["The 2s orbital is lower in energy than the 2p orbitals in an isolated carbon atom.", "The 2s orbital has higher energy than the 2p orbitals.", "The 2s and 2p orbitals always have identical shapes.", "The 2s and 2p orbitals in carbon are fully filled."], x: "2s is spherical and lower in energy; 2p orbitals are dumbbell-shaped. Carbon's 2p holds only 2 electrons." },
      { q: "Which compound would be expected to have the greatest ionic character?", c: ["K–Cl", "C–Cl", "H–Cl", "C–H"], x: "The largest electronegativity difference (K 0.8, Cl 3.0) gives the most ionic bond." },
      { q: "Which Lewis structure for ~CO2~ satisfies the octet rule for all atoms and minimizes formal charges?", c: ["O=C=O", "O–C–O", "O≡C–O", "O–C≡O"], x: "Two C=O double bonds give every atom an octet and all formal charges of zero." },
      { q: "Which species has an incomplete octet around its central atom?", c: ["~BF3~", "~CH4~", "~NH3~", "~H2O~"], x: "Boron in ~BF3~ has only 6 valence electrons (three bonds, no lone pair)." },
      { q: "Which species has an expanded octet around its central atom?", c: ["~PCl5~", "~NH3~", "~BF3~", "~CO2~"], x: "P in ~PCl5~ has five bonds = 10 electrons; third-row elements can use d orbitals." },
      { q: "Which species has resonance structures in which the equivalent bonds have the same average bond character?", c: ["~CO3^2-~", "~CH3CN~", "SCN⁻", "O=SFBr"], x: "The three C–O bonds in carbonate are equivalent (bond order 1⅓) in the resonance hybrid." },
      { q: "In the nitrate ion, ~NO3^-~, the three N–O bonds are experimentally equivalent. Which explanation best accounts for this?", c: ["The actual structure is a resonance hybrid with equivalent N–O bonds.", "Nitrogen forms three identical double bonds.", "The ion rapidly switches between different Lewis structures.", "Nitrogen does not participate in bonding."], x: "Resonance structures do not interconvert; the real ion is a single hybrid." },
      { q: "Which molecule has polar bonds but no net molecular dipole moment?", c: ["~SF6~", "H–C≡C–F", "~NH3~", "~SO2~"], x: "Octahedral ~SF6~ is symmetric, so the six S–F bond dipoles cancel." },
      { q: "A carbon atom forms one double bond and two single bonds. Which hybridization and approximate geometry are expected?", c: ["sp²; trigonal planar", "sp; linear", "sp³; tetrahedral", "sp³d; trigonal bipyramidal"], x: "Three σ-bonding groups → sp², 120°, trigonal planar; the unhybridized p forms the π bond." },
      { q: "Which statement correctly describes the bonding in ethyne, ~C2H2~?", c: ["Each carbon is sp hybridized and the C≡C bond contains one σ and two π bonds.", "Each carbon is sp³ hybridized and forms four σ bonds.", "Each carbon is sp² hybridized and forms one π bond.", "Each carbon is sp³ hybridized and the C≡C bond contains two σ bonds."], x: "A triple bond = 1 σ + 2 π; each C has two groups → sp, linear." },
      { q: "Which molecule has a bent molecular geometry but a trigonal planar electron-group arrangement around its central atom?", c: ["~SO2~", "~BF3~", "~CO2~", "~BeCl2~"], x: "S has two bonding groups + one lone pair: trigonal planar electron groups, bent shape." },
      { q: "Which species has a trigonal pyramidal molecular geometry (at one of its atoms)?", c: ["~CH3CH2NH2~", "~CH3CHO~", "~CH3CN~", "~CH3COOH~"], x: "The amine N has three bonds and one lone pair → trigonal pyramidal." },
      { q: "Which of the following molecules has the largest net molecular dipole moment?", c: ["H–C≡C–F", "H–C≡C–H", "F–C≡C–F", "Cl–C≡C–Cl"], x: "The linear symmetric molecules have dipoles that cancel; only H–C≡C–F has a net dipole." },
      { q: "Which pair represents constitutional isomers?", c: ["1-pentane and 3-pentane", "O=O–O and O–O=O", "~H2C=O~ and HCOOH", "propane and propene"], x: "The answer key treats the two pentane positions as different connectivity (same formula). The ozone pair is resonance; the others have different formulas." },
      { q: "Which statement correctly distinguishes constitutional isomers from resonance structures?", c: ["Constitutional isomers have different atom connectivity, whereas resonance structures have the same connectivity but different electron arrangements.", "Constitutional isomers have different molecular formulas.", "Resonance structures represent different compounds that exist independently.", "Resonance structures always have different atom connectivity."], x: "Resonance moves only electrons; isomers are real, distinct compounds with different connectivity." },
      { q: "Arrange in order of increasing boiling point: I. ~CH3CH2CH2OH~  II. ~CH3CH2CH3~  III. ~CH3CH2CH2CH3~  IV. ~CH3CH2CH2CH2OH~", c: ["II < III < I < IV", "III < II < I < IV", "II < I < III < IV", "III < II < IV < I"], x: "Alkanes (London forces only) boil lowest, larger ones higher; the alcohols H-bond, butanol above propanol." },
      { q: "Which of the following pairs represents a conjugate acid–base pair?", c: ["~H2O~ and OH⁻", "HCl and NaOH", "~H2SO4~ and ~SO4^2-~", "~NH4^+~ and ~NH2^-~"], x: "A conjugate pair differs by exactly one H⁺. The others differ by two H⁺ or are unrelated." },
      { q: "In H₂CO₃ + H₂O ⇌ HCO₃⁻ + H₃O⁺, which pairs are the conjugate acid–base pairs?", c: ["H₂CO₃/HCO₃⁻ and H₃O⁺/H₂O", "H₂CO₃/H₃O⁺ and H₂O/HCO₃⁻", "H₂CO₃/H₂O and HCO₃⁻/H₃O⁺", "HCO₃⁻/H₂O and H₂CO₃/H₃O⁺"], x: "H₂CO₃ loses H⁺ → HCO₃⁻; H₂O gains H⁺ → H₃O⁺." },
      { q: "In ~CH2=CH–CH3~, what are the hybridizations of the three carbon atoms, respectively?", c: ["sp², sp², sp³", "sp³, sp³, sp³", "sp, sp², sp³", "sp², sp³, sp²"], x: "The two C=C carbons are sp²; the methyl carbon is sp³." },
      { q: "For ~CH3^-~, what are the number of lone pairs, molecular geometry and approximate bond angle around carbon?", c: ["1 lone pair; trigonal pyramidal; ~107°", "0 lone pairs; trigonal planar; 120°", "1 lone pair; bent; ~104.5°", "2 lone pairs; linear; 180°"], x: "Three bonds + one lone pair (like ~NH3~) → trigonal pyramidal." },
      { q: "How many σ and π bonds are present in ~CH3–C≡CH~?", c: ["6 σ and 2 π", "7 σ and 2 π", "7 σ and 1 π", "8 σ and 2 π"], x: "4 C–H σ + 2 C–C σ = 6 σ; the triple bond adds 2 π." },
      { q: "When drawing resonance structures for ~CO3^2-~, what remains unchanged?", c: ["The positions of the three oxygen atoms", "The location of the C=O double bond", "The formal charge on each oxygen atom", "The number of electrons around carbon"], x: "Atoms never move between resonance structures; only electrons (and charges) do." },
      { q: "Which correctly ranks the resonance structures of the acetate ion, ~CH3COO^-~?", c: ["The two resonance structures are equally important because they are equivalent and have the same formal charges.", "The structure with the negative charge on carbon is most important because carbon is less electronegative than oxygen.", "The structure with two single C–O bonds is most important because it minimizes the number of double bonds.", "The structure with two C–O bonds and each O with 1 unpaired electron is also a resonance structure."], x: "The two structures just swap which O carries the C=O and the −1 charge." },
      { q: "In acetate, ~CH3–C(=O)–O^-~, what are the formal charges of the carbonyl O (=O) and the other O (–O)?", c: ["0 and −1", "−1 and 0", "0 and 0", "1 and −1"], x: "=O: 6 − 4 − 2 = 0. –O: 6 − 6 − 1 = −1." }
    ]
  },
  {
    id: "CW3", title: "Conformational Analysis",
    notes: [
      "Graded Google Forms classwork, 20 items × 5 points. Covers Lecture 3 conformations (3.8–3.10).",
      "Topics: Newman, sawhorse and wedge–dash drawings; ethane and butane conformers and their energies; cyclohexane chair/boat, axial vs equatorial, ring flips and 1,3-diaxial interactions."
    ],
    quiz: [
      { q: "When cyclohexane undergoes a ring flip, what happens?", c: ["Axial becomes equatorial and vice versa", "Chair becomes planar", "Bond lengths change", "Ring opens"], x: "A chair–chair interconversion swaps every axial position with an equatorial one." },
      { q: "In the Newman projection of 2-methylbutane looking down the C2–C3 bond, the lowest-energy conformation occurs when:", c: ["The methyl group on C2 is anti to the methyl on C3", "The methyl group on C2 is gauche to the methyl on C3", "The methyl group on C2 eclipses a hydrogen", "The methyl group on C2 eclipses the methyl on C3"], x: "Staggered with the bulky groups 180° apart minimizes steric strain." },
      { q: "During rotation about the C2–C3 bond of butane, how many energy maxima are observed in a full 360° rotation?", c: ["3", "1", "2", "6"], x: "Three eclipsed conformations: one totally eclipsed (CH₃/CH₃) and two CH₃/H eclipsed." },
      { q: "The energy difference between chair and boat conformations of cyclohexane is approximately:", c: ["3–5 kcal/mol", "1 kcal/mol", "7–9 kcal/mol", "10–12 kcal/mol"], x: "Per the answer key, the boat lies about 3–5 kcal/mol (≈ 6.9 kcal/mol in many texts) above the chair." },
      { q: "In the staggered conformation of ethane, the dihedral angle between two C–H bonds on adjacent carbons is __.", c: ["60°", "0°", "120°", "180°"], x: "Nearest front/back C–H bonds are 60° apart in a staggered conformation (0° when eclipsed)." },
      { q: "Which statement about the boat conformation of cyclohexane is true?", c: ["It suffers from both torsional strain and flagpole interactions", "It has no torsional strain", "It is more stable than the chair due to hydrogen bonding", "It is the preferred conformation at room temperature"], x: "The boat has eclipsed C–H bonds and the two flagpole H's bump into each other." },
      { q: "Which statement is TRUE for dash bonds?", c: ["They indicate bonds going behind the plane of the page", "They indicate bonds in the plane of the paper", "They indicate bonds coming out of the page", "They indicate resonance"], x: "Dashes point away from the viewer; wedges point toward the viewer." },
      { q: "In a Newman projection, which represents a totally eclipsed conformation of butane?", c: ["~CH3~ groups 0° apart", "~CH3~ groups 180° apart", "~CH3~ groups 60° apart", "H atoms 120° apart"], x: "Totally eclipsed = the two methyls directly overlap (dihedral 0°), the highest-energy conformer." },
      { q: "In a cyclohexane chair, axial hydrogens are:", c: ["Perpendicular to the plane of the ring", "In plane with the ring", "Always down", "Always up"], x: "Axial bonds are parallel to the ring axis, alternating up and down." },
      { q: "Wedge and dash notation is particularly useful to:", c: ["Represent 3D molecular geometry", "Determine hybridization", "Count electrons", "Determine bond energies"], x: "Wedges and dashes show which bonds point toward or away from the viewer." },
      { q: "Which conformation of ethane has the highest energy?", c: ["Eclipsed", "Anti", "Gauche", "Staggered"], x: "Eclipsed ethane has ~3 kcal/mol (12 kJ/mol) torsional strain. Anti/gauche apply to butane." },
      { q: "Sawhorse projections are less common than Newman projections because:", c: ["They are harder to draw", "They do not show conformational details", "They cannot represent chirality", "They confuse functional groups"], x: "Both show the same conformational information; Newman projections are simply easier to draw." },
      { q: "For monosubstituted cyclohexane, the equatorial position is preferred because:", c: ["It minimizes steric hindrance", "It maximizes bond strain", "It allows H-bonding", "It is closer to the center of the ring"], x: "An equatorial group avoids 1,3-diaxial interactions." },
      { q: "Sawhorse projection is most useful for visualizing:", c: ["Conformational relationships along a C–C bond", "Bond lengths", "Resonance", "Hybridization"], x: "It views the C–C bond at an angle, showing the relative positions of the substituents." },
      { q: "Which cyclohexane conformation is most stable?", c: ["Chair", "Boat", "Twist-boat", "Planar"], x: "The chair has ~109.5° angles and all bonds staggered: no angle or torsional strain." },
      { q: "In wedge-and-dash representation, a solid wedge indicates:", c: ["A bond coming out of the plane toward the observer", "A bond in the plane of the paper", "A bond going behind the plane", "A double bond"], x: "Solid wedge = toward you; dashed wedge = away; plain line = in the plane." },
      { q: "The energy difference between anti and gauche conformations in butane is approximately:", c: ["0.9 kcal/mol", "3.0 kcal/mol", "5.0 kcal/mol", "7.5 kcal/mol"], x: "Gauche butane is ~0.9 kcal/mol (3.8 kJ/mol) higher in energy due to CH₃/CH₃ steric strain." },
      { q: "Which correctly converts a staggered Newman projection of ethane into a sawhorse projection?", c: ["Draw C–C bond diagonally with hydrogens staggered", "Draw C–C bond vertically with hydrogens eclipsed", "Draw all bonds in the plane", "Draw double bonds"], x: "A sawhorse shows the C–C bond diagonally, keeping the same (staggered) arrangement." },
      { q: "In the Newman projection of butane looking down the C2–C3 bond, the anti conformation corresponds to:", c: ["Two methyl groups 180° apart", "Two methyl groups 60° apart", "Two methyl groups eclipsing", "One methyl group eclipsing a hydrogen"], x: "Anti = 180° (lowest energy); gauche = 60°." },
      { q: "In cyclohexane, a 1,3-diaxial interaction refers to:", c: ["Steric strain between axial substituents and hydrogens on carbons 3 positions away", "Hydrogen bonding", "Bond angle strain", "Ring flipping"], x: "An axial group crowds the axial H's on C3 and C5 on the same face of the ring." }
    ]
  }
  ]
}
];

// Supplementary videos (The Organic Chemistry Tutor), keyed by section: [YouTube id, title]
window.VIDEOS = {
  "L2/2.0–2.1": [["Vqx9a2aU99c", "Valence Bond Theory & Hybrid Atomic Orbitals"]],
  "L2/2.2": [["S_k0kr2eZSQ", "Introduction to Ionic Bonding and Covalent Bonding"], ["8NQzcpWvq4g", "Ionic Bonds, Polar Covalent Bonds, and Nonpolar Covalent Bonds"]],
  "L2/2.3–2.4": [["6unef5Hz6SU", "Organic Chemistry – How To Draw Lewis Structures"], ["PeY_sihSh8E", "Lewis Structures, Formal Charge, Molecular Geometry, Resonance, Polar or Nonpolar"]],
  "L2/2.5": [["ds5HXmBkO0Y", "Bond Polarity, Electronegativity and Dipole Moment – Practice Problems"], ["8NQzcpWvq4g", "Ionic Bonds, Polar Covalent Bonds, and Nonpolar Covalent Bonds"]],
  "L2/2.6": [["R_SIjijCouE", "How To Calculate The Formal Charge of an Atom"]],
  "L2/2.7": [["klAT2MACt4Q", "Major Resonance Contributor and Resonance Hybrid"]],
  "L2/2.8": [["pdJeQUd2g_4", "Hybridization of Atomic Orbitals – Sigma & Pi Bonds – sp, sp², sp³"], ["Vqx9a2aU99c", "Valence Bond Theory & Hybrid Atomic Orbitals"]],
  "L2/2.9": [["cL6eNyYls5M", "Bond Line Formulas, Lewis Structures, Kekulé & Condensed Structures"]],
  "L2/2.10": [["Tj7mXcWkrTE", "Drawing Constitutional Isomers of Alkanes"]],
  "L2/2.11": [["_Cw0_cJzkSI", "Molecular Geometry & VSEPR Theory – Basic Introduction"]],
  "L2/2.12": [["bFAU1GMJmnI", "Dipole Moment, Vectors, & Electronegativity"], ["l1GgVwqiufE", "Dipole Moment, Molecular Polarity & Percent Ionic Character"]],
  "L2/2.13": [["owVZiKnnPME", "Acids and Bases – Basic Introduction"], ["OP6RKqSp1Xw", "Conjugate Acid–Base Pairs, Arrhenius, Brønsted–Lowry and Lewis"], ["L7flgA0n_tc", "pKa Values of Acids"]]
};

// Lectures 1, 3 and 4 (The Organic Chemistry Tutor)
(function () {
  const V = {
    macro: ["Y3h2GNajvcY", "Macromolecules Review"],
    lipids: ["7dmoH5dAvpY", "Lipids – Fatty Acids, Triglycerides, Phospholipids, Terpenes, Waxes"],
    intro: ["B_ketdzJtY8", "Organic Chemistry – Basic Introduction"],
    hydro: ["z5hQ8iZZ8dU", "Hydrocarbons – Aliphatic vs Aromatic, Saturated & Unsaturated"],
    stereo: ["XftIUcLWTEE", "Stereoisomers, Enantiomers, Meso Compounds, Diastereomers, Cis & Trans"],
    consti: ["Tj7mXcWkrTE", "Drawing Constitutional Isomers of Alkanes"],
    fg: ["m9jM8lWxrAE", "Functional Groups"],
    fgprop: ["g8fDLzySfog", "Properties of Functional Groups"],
    iupac: ["TYU_JluleME", "IUPAC Nomenclature of Alkanes – Naming Organic Compounds"],
    cyclo: ["vSxZm_91GT0", "Naming Cycloalkanes With Substituents, Cis & Trans, Bicyclo Alkanes"],
    phys: ["F2x8wMWPpec", "Physical Properties of Alkanes – Melting Point, Boiling Point, Density"],
    strain: ["b0QJdfJku9w", "Stability of Cycloalkanes – Angle Strain"],
    newman: ["_CCHTptAhLQ", "Newman Projections"],
    chair: ["RXU_32X1oFI", "Chair Conformation and Ring Flips"],
    alkene: ["RgbQya8HXBM", "Naming Alkenes, IUPAC Practice, E Z System, Cycloalkenes"],
    ez: ["frtnEDTSzi8", "Naming Alkenes Using E Z System"],
    dehyd: ["EnviDtnyyug", "Alcohol Dehydration Reaction Mechanism With H2SO4"],
    h2: ["iUIzpEEpW_Q", "Catalytic Hydrogenation of Alkenes"],
    mark: ["6O-xSRC5Wg8", "Markovnikov's Rule"],
    hx: ["ERGB9dNi7-0", "Hydrohalogenation – Alkene Reaction Mechanism"],
    roor: ["ZMcCvD5dDMU", "Alkene + HBr + ROOR – Reaction Mechanism"],
    hydra: ["XqCPXIvMvB4", "Hydration of Alkenes Reaction Mechanism"],
    halo: ["ZfOcYntQmlk", "Halogenation of Alkenes & Halohydrin Formation"],
    alkyne: ["ouDS2tZU94g", "Naming Alkynes – IUPAC Nomenclature & Common Names"],
    alkrx: ["p6TLF92lyuI", "Alkyne Reactions"]
  };
  Object.assign(window.VIDEOS, {
    "L1/1.1": [V.macro, V.lipids], "L1/1.2": [V.intro], "L1/1.3": [V.intro], "L1/1.4": [V.hydro], "L1/1.5": [V.hydro],
    "L1/1.6": [V.stereo, V.consti], "L1/1.7": [V.fg, V.fgprop],
    "L3/3.1": [V.hydro, V.fg], "L3/3.2": [V.consti], "L3/3.3": [V.iupac], "L3/3.4": [V.iupac], "L3/3.5": [V.cyclo],
    "L3/3.6": [V.phys], "L3/3.7": [V.phys, V.strain], "L3/3.8": [V.newman], "L3/3.9": [V.chair], "L3/3.10": [V.strain],
    "L3/3.11": [V.stereo, V.cyclo],
    "L4/4.1": [V.alkene], "L4/4.2": [V.ez, V.alkene], "L4/4.3": [V.dehyd], "L4/4.4": [V.h2], "L4/4.5": [V.mark, V.hx, V.roor],
    "L4/4.6": [V.hydra, V.halo], "L4/4.7": [V.alkyne], "L4/4.8": [V.alkrx], "L4/4.9": [V.alkrx]
  });
})();
