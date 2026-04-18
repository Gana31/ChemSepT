export interface ProjectSection {
    heading: string;
    items: string[];
}

export interface Project {
    slug: string;
    title: string;
    category: string;
    categorySlug: string;
    icon: string;
    description: string;
    images?: string[];
    sections: ProjectSection[];
}

export interface ProjectCategory {
    name: string;
    slug: string;
    icon: string;
    projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
    {
        name: 'Petroleum',
        slug: 'petroleum',
        icon: '🛢️',
        projects: [
            {
                slug: 'used-oil-refining',
                title: 'Used Oil Refining',
                category: 'Petroleum',
                categorySlug: 'petroleum',
                icon: '🛢️',
                images: ["/images/projects/used-oil-refining/1-Used-Oil-refining_New.jpeg", "/images/projects/used-oil-refining/2-step-1.jpg", "/images/projects/used-oil-refining/3-step-2.jpg", "/images/projects/used-oil-refining/4-load-out-1.jpg", "/images/projects/used-oil-refining/5-NMP-Solvent-Extraction-Plant-ChemSepT.jpg"],
                description:
                    'ChemSepT is a process technology and engineering company offering a wide range of oil & gas equipment\'s and services for re-refining/recycling of waste/used lubricating oils.\nRe-refining is the chemical process technology to recover the lubricating base oil from waste lubricants. Water, fuel oil, additives and sludge are separated from the base oil.\nChemSepT\'s technology for re-refining is based on vacuum distillation (using Wiped Film Evaporation). This is the most successful commercial method of re-refining.\nWhat\'s more, ChemSepT\'s complete process treats used oil to produce base oil, which meets API Group II specifications.',
                sections: [
                    {
                        heading: 'ChemSepT Re-Refining Used Oil Process',
                        items: [
                            'Used Lube Oil From Storage',
                            'Heavy Solids Removal (Sedimentation)',
                            'Dehydration',
                            'Defueling',
                            'Separation of Base Oil by Wiped Film Evaporator',
                            'Solvent Treatment (Color & Odour Improvement)',
                        ],
                    },
                    {
                        heading: 'Re-refined Used Lube Oil & Solvent Extraction',
                        items: [
                            'A liquid extraction process is done in the presence of solvent N-Methylpyrolidone (NMP)',
                            'NMP is an aromatic selective solvent which removes some color and odor',
                            'Able to extract all unwanted aromatic contaminants present in lubricating oil fraction',
                        ],
                    },
                    {
                        heading: 'List of Major Equipment',
                        items: [
                            'Used Lube Oil Intermediate Feed Storage Tank',
                            'Preheater',
                            'Column (Dehydration & Defueling)',
                            'Condensers',
                            'Reflux & Separator Drum',
                            'Reboiler',
                            'Holding Tanks',
                            'Wiped Film Evaporator (WFE-1 & WFE-2)',
                            'Receivers',
                        ],
                    },
                    {
                        heading: 'Codes & Standards',
                        items: [
                            'ASME: American Society of Mechanical Engineers',
                            'API: American Petroleum Institute',
                            'TEMA: Tubular Exchanger Manufacturer\'s Association',
                            'BIS: Bureau of Indian Standards',
                            'EN: European Standards',
                            'Other Local Government/Agency Standards',
                        ],
                    },
                    {
                        heading: 'Plant Silent Features',
                        items: [
                            'Most Profitable',
                            'Low Capital Investment',
                            'Easy to operate',
                            'Environment Friendly Used Oil Technology',
                        ],
                    },
                ],
            },
            {
                slug: 'lube-oil-blending',
                title: 'Lube Oil Blending',
                category: 'Petroleum',
                categorySlug: 'petroleum',
                icon: '🛢️',
                images: ["/images/projects/lube-oil-blending/1-Batch-Blender.jpg", "/images/projects/lube-oil-blending/2-Line-Blender.jpg", "/images/projects/lube-oil-blending/3-Metering-Blender.jpg"],
                description:
                    'ChemSepT offers Design, engineering and supply of lubricants and greases manufacturing plants.\nLube Oil Blending Plants (LOBP) offered by CHEMSEPT are well designed to suit local markets & customer requirements. ChemSepT offer simply manual operated blending plant to highly automated plant to meet client\'s requirement.\nLubricating Oil Blending plant involves mixing and blending of base oil with additives to produce final finished blended lube oil.',
                sections: [
                    {
                        heading: 'Turn Key Supply for Manufacturing Plants',
                        items: [
                            'Industrial Oils',
                            'Automotive Oils',
                            'Gear Oils',
                            'Transformer Oils',
                            'Brake Fluids',
                            'Synthetic Lubes',
                            'Coolants',
                            'V.I. Improvers',
                        ],
                    },
                    {
                        heading: 'Blending Plant Main Sections',
                        items: [
                            'Raw Material Storage Section',
                            'Blending Process Units',
                            'Finished Product Storage Area',
                            'Filling & Loading',
                            'Packing',
                        ],
                    },
                    {
                        heading: 'Key Equipment',
                        items: [
                            'Automatic Batch Blender (CSE-ABB)',
                            'In-Line Blender (CSE-ILB)',
                            'Simultaneous Metering Blender (CSE-SMB)',
                            'Drum Decanting Units (CSE-DDU)',
                            'Pigged pipe lines',
                            'Pigged manifold',
                        ],
                    },
                    {
                        heading: 'Automatic Batch Blender (CSE-ABB) Features',
                        items: [
                            'Batch System with easy adjustments in batch capacity',
                            'Dosing Inlets dedicated to Additives & Lube Raw oils',
                            'High accuracy in measurement',
                            'Blending kettle can be heated by steam, hot oil or electrically',
                            'Range of 3 to 30 m³ per batch',
                        ],
                    },
                    {
                        heading: 'In-Line Blender (CSE-ILB) Features',
                        items: [
                            'Suitable for high throughput to produce large quantities',
                            'Fast and continuous mixing',
                            'Real-time measurement',
                            'Composed of several dosing modules',
                            'Minimum contamination occurs',
                            'Blends can be sent directly to packing or shipping area',
                        ],
                    },
                    {
                        heading: 'Simultaneous Metering Blender (CSE-SMB) Features',
                        items: [
                            'Combines high volume capacity of ILB with flexibility of ABB',
                            'Components dosed via mass flow meters according to recipe',
                            'Possible to correct the product with later additional dosing',
                            'Finished product tanks with blending equipment',
                            'Minimum contamination',
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Pharma',
        slug: 'pharma',
        icon: '💊',
        projects: [
            {
                slug: 'mobile-skids',
                title: 'Mobile Skids',
                category: 'Pharma',
                categorySlug: 'pharma',
                icon: '💊',
                images: ["/images/projects/mobile-skids/1-Modularskid.jpg"],
                description:
                    'Our mobile skids are designed for efficient mixing and blending operations. We are custom optimized to suit your specific requirement of mixing and blending. They are compact, Skid Mounted and cost effective.',
                sections: [
                    {
                        heading: 'Advantages',
                        items: [
                            'Portable and compact',
                            'Fast and easy installation',
                            'Heating & Cooling options',
                            'Full & Semi automated operation',
                        ],
                    },
                    {
                        heading: 'Key Features',
                        items: [
                            'Bottom mounted magnetic mixers with options for low / medium / high shear applications',
                            'Flush bottom outlet valve with sampling / sterilization configurations',
                            'Sterile flange connections of top dish / side ports to enhance CIP / SIP operations',
                            'pH, temperature, conductivity, DO sensing through sanitary port on the vessel shell',
                            'Load cell for weight measurement / Level sensors for level measurements',
                            '21 CFR part 11 compliant automated system',
                        ],
                    },
                ],
            },
            {
                slug: 'super-skids',
                title: 'Super Skids',
                category: 'Pharma',
                categorySlug: 'pharma',
                icon: '💊',
                images: ["/images/projects/super-skids/1-superskids.jpg"],
                description:
                    'We have installed super skid to support pharmaceutical operations. ChemSepT Engineering ongoing experience with complex project supports our ability to meet the aggressive deadlines without sacrificing facility.',
                sections: [
                    {
                        heading: 'Testing',
                        items: [
                            'All systems are tested at our dedicated FAT testing area',
                            'Fully equipped with all required utilities',
                            'High quality testing instruments ensure the systems work fine under designed conditions',
                        ],
                    },
                    {
                        heading: 'Advantages',
                        items: [
                            'Fully skid mounted, compact',
                            'Faster delivery',
                            'Faster installation and validation',
                            'Fully tested at our factory site',
                        ],
                    },
                ],
            },
            {
                slug: 'integrated-skids',
                title: 'Integrated Skids',
                category: 'Pharma',
                categorySlug: 'pharma',
                icon: '💊',
                images: ["/images/projects/integrated-skids/1-Integratedskids.jpg"],
                description:
                    'The systems are designed at our design factory with experienced and highly qualified design team. The systems are built in the latest simulation and CAD software.',
                sections: [
                    {
                        heading: 'Testing',
                        items: [
                            'All systems are tested at our dedicated FAT testing area',
                            'Fully equipped with all required utilities',
                            'High quality testing instruments ensure the systems work fine under designed conditions',
                        ],
                    },
                    {
                        heading: 'Advantages',
                        items: [
                            'Fully skid mounted, compact',
                            'Faster delivery',
                            'Faster installation and validation',
                            'Fully tested at our factory site',
                        ],
                    },
                ],
            },
            {
                slug: 'liquid-oral-processing',
                title: 'Liquid Oral Processing System',
                category: 'Pharma',
                categorySlug: 'pharma',
                icon: '💊',
                images: ["/images/projects/liquid-oral-processing/1-liquid-oral-manufacturing-plant.jpg"],
                description:
                    'Our plants are designed with the highest quality of fabrication standards using the best components and instruments. They are also fully optimized for delivering the best performance with reduced life-cycle cost.',
                sections: [
                    {
                        heading: 'Applications',
                        items: [
                            'Pharmaceuticals: Creams, Gels, Sterile & Non Sterile Ointments and Biotech products',
                            'Cosmetics: Cold Creams, Hair Dye, Conditioners, Lotions, Gels, Mascara make-up, Shampoo, Toothpaste',
                        ],
                    },
                    {
                        heading: 'Advantages',
                        items: [
                            'Flexible process parameters setting',
                            'Variable shear force adjustment',
                            'Fully contained processing system',
                            'Full & Semi automated operation',
                        ],
                    },
                    {
                        heading: 'Key Features',
                        items: [
                            'Design of process equipment\'s and transfer piping',
                            'Transfer systems for sugar through vacuum system',
                            'In-line high shear mixer for suspensions',
                            'Sugar preparation system with jacketed, insulated and cladded vessel',
                            'Process vessels rated for vacuum',
                            'EHEDG / 3A approved twin lobe pumps',
                        ],
                    },
                ],
            },
            {
                slug: 'ointment-processing',
                title: 'Ointment & Key Processing System',
                category: 'Pharma',
                categorySlug: 'pharma',
                icon: '💊',
                images: ["/images/projects/ointment-processing/1-ointment-cream-gel1.jpg"],
                description:
                    'We design, manufacture and supply the complete customized automated (Sterile/Non-Sterile) Ointment/Cream Plant as per the latest cGMP norms with the required Qualification Documents as per the requirements.\nOil Phase Jacketed & Agitated Vessels, Water Phase Jacketed & Agitated Vessels, Manufacturing Vessels with special high viscosity, intimate mixing agitator and in-built or external Micro-Homogenizer having Auto Lifting top lid device & Heating cooling facility, Mixing under vacuum condition and Storage Vessels with or without Agitators.',
                sections: [
                    {
                        heading: 'Applications',
                        items: [
                            'Pharmaceuticals: Creams, Gels, Sterile & Non Sterile Ointments and Biotech products',
                            'Cosmetics: Cold Creams, Hair Dye, Conditioners, Lotions, Gels, Mascara make-up, Shampoo, Toothpaste',
                        ],
                    },
                    {
                        heading: 'Advantages',
                        items: [
                            'Flexible process parameters setting',
                            'Variable shear force adjustment',
                            'Fully contained processing system',
                        ],
                    },
                    {
                        heading: 'Key Features',
                        items: [
                            'Heating / cooling and insulated jackets with temperature control and safety equipment',
                            'Easy-to-use mixer control package with process parameters storage',
                            'Short loop product re-circulation for smaller batch sizes',
                            'Hydraulic lifting on manufacturing vessel top dish to facilitate product recovery',
                            'Choice of various type of anchor design',
                            'Homogeniser (option) – Top Entry, Side Entry, Bottom Entry with circulation facility',
                        ],
                    },
                ],
            },
            {
                slug: 'automatic-liquid-oral',
                title: 'Automatic Liquid Oral Plant',
                category: 'Pharma',
                categorySlug: 'pharma',
                icon: '💊',
                images: ["/images/projects/automatic-liquid-oral/1-automatic-liquid-and-oral-plant.jpg"],
                description:
                    'THE CHEMSEPT ENGINEERING WORKS has been designed & manufacturing preparation vessels and has consolidated a process knowledge concerning the sterile injectable solution, dispersions, syrup.',
                sections: [
                    {
                        heading: 'Preparation Vessels & Tank',
                        items: [
                            'Extremely hygienic processing',
                            'Least manual handling',
                            'Design compliance with cGMP',
                            'Atmospheric, Vacuum, or Pressure Operation',
                            'Jacket for heating & cooling',
                            'Heating by steam or hot water circulation',
                            'Thermal Insulated',
                            'Integrated Cleaning in Place-CIP',
                            'Sterilizing In Place-SIP as an Option',
                        ],
                    },
                    {
                        heading: 'Features',
                        items: [
                            'Operated by one operator and one helper – saves workforce costs',
                            'Sugar syrup vessels with limpet coils for heating and cooling',
                            'Bottom propeller agitator – no shaft vibrations, lower maintenance cost',
                            'Automation plant with PLC control system',
                            'Digital display of current values and product temperature',
                        ],
                    },
                    {
                        heading: 'Filter Press with Zero Hold Up',
                        items: [
                            'Complete filtration of the batch without any hold up',
                            'Back wash facility for continuous operations',
                            'No scavenger arrangement required',
                            'Cake, filteraid & solids remain totally enclosed',
                            'Top dome structure for fast & easy removal of cartridge assembly',
                        ],
                    },
                ],
            },
            {
                slug: 'soft-gel-processing',
                title: 'Soft Gel Processing Skid',
                category: 'Pharma',
                categorySlug: 'pharma',
                icon: '💊',
                images: ["/images/projects/soft-gel-processing/1-SG50__softgel-manufacturing-line.jpg"],
                description:
                    'ChemSepT offers complete Soft Gel Processing Skid solutions including integrated vacuum systems, CIP recirculation, storage vessels, gelatin melting cookers, and deaeration systems. All controlled via PLC-SCADA automation as per GAMP 5 guidelines.',
                sections: [
                    {
                        heading: 'Integrated Vacuum Systems',
                        items: [
                            'Fully controllable to permit variation of vacuum levels',
                            'Options of Heat Exchanger',
                            'Vacuum line can be useful for sanitation purposes',
                        ],
                    },
                    {
                        heading: 'CIP Recirculation Skid',
                        items: [
                            'Inline centrifugal pump for CIP solution recirculation',
                            'Conductivity measurement and sampling system for end point of cleaning',
                        ],
                    },
                    {
                        heading: 'Gelatin Melting Cooker',
                        items: [
                            'Flexible process parameters setting',
                            'Fully contained processing system',
                            'Mounting on SS Platform Structure for direct discharge into storage vessels',
                            'Heating & cooling and insulated jackets with temperature control',
                            'Multiple agitation options',
                        ],
                    },
                    {
                        heading: 'Intelligent Automation',
                        items: [
                            'PLC-SCADA open solution as per GAMP 5 guidelines',
                            'HMI / IPC controls for localized control',
                            'Comprehensive automation system – reliable and easy to operate',
                            'Highly reliable and accurate instruments deliver consistency and repeatability',
                        ],
                    },
                ],
            },
            {
                slug: 'herbal-extract',
                title: 'Herbal Extract Plant',
                category: 'Pharma',
                categorySlug: 'pharma',
                icon: '💊',
                images: ["/images/projects/herbal-extract/1-HERBALEXTRACT.jpg"],
                description:
                    'ChemSept Engineering PVT. LTD. is the leading manufacturer of herbal extract plant in Pune and supplies world-class equipment in India. Our herbal/natural extraction plants are specially designed for a wide array of herbal extracts from the different parts of a plant or a tree including seeds, barks, roots, shrubs, flowers, etc.\nThe core focus is to ensure that the extract is recovered in the most efficient manner and at the same time reducing the operation cost and time. Chemsept offers some of the most energy-efficient and cost-effective turn-key solutions.',
                sections: [
                    {
                        heading: 'Applications',
                        items: [
                            'Agriculture sprays',
                            'Animal feed',
                            'Production of paint and varnishes',
                            'Glues',
                            'Rubber as accelerator',
                        ],
                    },
                    {
                        heading: 'Services',
                        items: [
                            'Commissioning and Training',
                            'Manufacturing and Supply of Equipment',
                            'Turnkey Plants',
                            'Process and Detailed Engineering',
                        ],
                    },
                    {
                        heading: 'Features',
                        items: [
                            'Minimum space requirement',
                            'Designing and Implementation',
                            'High steam and power economy',
                            'High-capacity plant',
                            'Free from contamination',
                            'Easy to handle',
                            'Fully automatic system to ensure smooth and easy operation',
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Chemical',
        slug: 'chemical',
        icon: '⚗️',
        projects: [
            {
                slug: 'ethyl-acetate-plants',
                title: 'Ethyl Acetate Manufacturing Plants',
                category: 'Chemical',
                categorySlug: 'chemical',
                icon: '⚗️',
                images: ["/images/projects/ethyl-acetate-plants/1-ethyl-acetate-plant.png"],
                description:
                    'Ethyl Acetate Plants are designed mixing acetic acid and ethyl alcohol in a balanced proportion through a preheater to a kettle reboiler for distillation purpose. These plants are used in various cosmetic, chemical and pharmaceuticals industries for processing and storage of various products.\nEthyl Acetate is an organic chemical which has a pleasant fragrance and is colorless and low toxic in nature. It is widely used in nail polish remover & glues.\nEthyl acetate is produced through esterification of ethyl alcohol and acetic acid. A reactive distillation column, combining the reaction and separation into a single stage, offers advantages including overcoming chemical equilibrium limitations, higher selectivity, and in-situ use of heat of reaction for distillation.',
                sections: [
                    {
                        heading: 'Applications',
                        items: [
                            'Liquor industry',
                            'Chemical industry',
                            'Pharmaceutical industry',
                            'Paint industry',
                        ],
                    },
                    {
                        heading: 'Features',
                        items: [
                            'Resistivity to adverse conditions',
                            'Easy operation',
                            'Dimensional accuracy',
                            'High tensile strength',
                        ],
                    },
                    {
                        heading: 'Uses of Ethyl Acetate',
                        items: [
                            'Excellent industrial solvent',
                            'Manufacture of adhesives, cleaning fluids, nail-polish removers',
                            'Coated papers, explosives, artificial leather, photographic films',
                            'Manufacture of synthetic fruit essences, flavors and perfumes',
                            'Standard material and solvent for analytical reagents and chromatography',
                            'Important component of extractants for antibiotics concentration and purification',
                        ],
                    },
                    {
                        heading: 'Reactive Distillation Advantages',
                        items: [
                            'Integration of chemical reaction and distillation in single unit',
                            'Chemical equilibrium limitations can be overcome',
                            'Higher selectivity can be achieved',
                            'Heat of reaction can be used in-situ for distillation',
                        ],
                    },
                ],
            },
            {
                slug: 'methanol-recovery',
                title: 'Methanol Recovery System',
                category: 'Chemical',
                categorySlug: 'chemical',
                icon: '⚗️',
                images: ["/images/projects/methanol-recovery/1-Methanol.jpg"],
                description:
                    'Using conventional distillation technology, methanol can be readily recovered from water and wastewater streams. Depending on clients\' requirements, purities as high as 99% can be achieved. After recovery, the methanol can be reinjected into the process, reducing both waste and operating cost.\nThe rich methanol stream is led to a liquid/liquid separation tank, then to a distillation column for further processing. Pure methanol vapours are condensed and collected in the reflux drum for re-injection into the main process.',
                sections: [
                    {
                        heading: 'Recovery Process',
                        items: [
                            'Rich methanol stream led to liquid/liquid separation tank',
                            'Recovered hydrocarbons pumped away for treatment',
                            'Methanol/water mixture sent to distillation column',
                            'Purified water collected from bottom of column',
                            'Pure methanol vapours condensed via heat exchanger',
                            'Clean methanol collected in buffer tank for re-injection',
                        ],
                    },
                    {
                        heading: 'Benefits',
                        items: [
                            'Reuse of stripped condensate reduces plant makeup water requirements',
                            'Reduces overall water load to downstream treating facilities',
                            'Recovered methanol of sufficient purity for use as fuel',
                            'Methanol may be recovered as a salable product',
                            'Can be stored as liquid and burned as auxiliary fuel',
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: 'Dryer',
        slug: 'dryer',
        icon: '',
        projects: [
            {
                slug: 'spray-dryer',
                title: 'Spray Dryer',
                category: 'Dryer',
                categorySlug: 'dryer',
                icon: '',
                images: ["/images/projects/spray-dryer/1-SprayDryer.jpg"],
                description:
                    'Spray drying is a one-step continuous unit operation that employs liquid atomization to produce droplets that are dried to individual particles when moved in a hot gaseous drying medium. A spray dryer consists of a feed pump, atomizer, air heater, air dispenser, drying chamber, and systems for exhaust air cleaning and powder recovery/separator.',
                sections: [
                    {
                        heading: 'Applications',
                        items: [
                            'Drying pharmaceuticals like penicillin, blood products, enzymes, vaccines',
                            'Production of excipients with increased flowability and compatibility',
                            'Improve drug compressibility and reduce capping tendencies',
                            'Preparation of matrix microcapsule containing biodegradable polymer',
                            'Enhancing solubility and dissolution rates of poorly soluble drugs',
                        ],
                    },
                    {
                        heading: 'Features',
                        items: [
                            'Fully automatic system for smooth and easy operation',
                            'Energy Efficient',
                            'Optimal space requirement',
                            'Carefully selected materials of construction for product properties',
                            'Complete sanitary design with CIP system',
                        ],
                    },
                ],
            },
            {
                slug: 'flash-dryer',
                title: 'Flash Dryer',
                category: 'Dryer',
                categorySlug: 'dryer',
                icon: '',
                images: ["/images/projects/flash-dryer/1-flash-dryer_tcm11-69719.jpg"],
                description:
                    'The flash dryer is mainly designed to remove the free moisture from certain products for instant drying of materials. The material is dispersed in a blast of hot air that pushes it to a drying duct at great speed. This system combines the rotary effect and drying, for instant drying of wet powders.\nFlash dryers are used for drying of wet cakes which are sensitive to heat.',
                sections: [
                    {
                        heading: 'Applications',
                        items: [
                            'Minerals, fertiliser, mineralogical chemistry (potassium, magnesium by-products)',
                            'Food, pharmacy, fine chemicals (starch, casein)',
                            'Metals',
                        ],
                    },
                    {
                        heading: 'Benefits',
                        items: [
                            'Very short retention time',
                            'Ideal for heat sensitive products',
                            'Instant drying of the material',
                            'Elimination of humidity in a few seconds',
                            'No alteration to the material',
                            'Simple drying system with few mobile parts',
                        ],
                    },
                ],
            },
            {
                slug: 'rotary-dryer',
                title: 'Rotary Dryer',
                category: 'Dryer',
                categorySlug: 'dryer',
                icon: '',
                images: ["/images/projects/rotary-dryer/1-RotaryDryer.jpg"],
                description:
                    'Rotary dryer is a kind of drying equipment for processing large quantities of materials. It has characteristics of reliable operation, large operation flexibility, strong adaptability, large processing capacity. It is widely used in building materials, metallurgy, chemical, cement industry to dry slag limestone, coal powder, slag, clay and other materials.',
                sections: [
                    {
                        heading: 'Working Principle',
                        items: [
                            'Cylinder slightly inclined from horizontal direction',
                            'Material added from higher end with hot air flowing parallel or counter-flow',
                            'Lifting board on inner wall lifts and drops material',
                            'Increases contact surface of material and air flow',
                            'Dried product exits from the lower end',
                        ],
                    },
                    {
                        heading: 'Characteristics',
                        items: [
                            'Large drying capacity',
                            'Continuous, steady operation',
                            'Adjustable rotating speed for different materials',
                            'Different inner structures for different material requirements',
                            'Effective prevention of material sticking on wall',
                            'Ideal for high moisture content and viscosity materials',
                        ],
                    },
                    {
                        heading: 'Applicable Materials',
                        items: [
                            'Ore, slag, coal, metal powder, diatomaceous earth, kaolin',
                            'Starch residue, distiller\'s grains, fertilizer',
                            'Potassium chloride, potassium sulfate, sodium carbonate',
                            'Sludge, aquatic product waste, food factory waste',
                            'Phosphorus fertilizer, light calcium carbonate, clay, lime slurry',
                        ],
                    },
                ],
            },
            {
                slug: 'fluidised-bed-dryer',
                title: 'Fluidised Bed Dryer',
                category: 'Dryer',
                categorySlug: 'dryer',
                icon: '',
                images: ["/images/projects/fluidised-bed-dryer/1-FluidisedBedDryer.jpg"],
                description:
                    'Fluidized bed dryer is also called fluidized bed. The drying chamber is rectangular box type, the bottom is uniform air chamber, and a porous air distribution plate is arranged between the air chamber and the drying chamber. The wet material is in contact with the hot air above the air distribution plate, and the material particles are suspended in the air flow to form a fluidized state.',
                sections: [
                    {
                        heading: 'Working Principle',
                        items: [
                            'Upper and lower bed body with air distributor',
                            'Wet material contacts hot air above air distribution plate',
                            'Material particles suspended in air flow – fluidized state',
                            'Heat exchange between material and hot air for drying',
                            'Dust-containing gas purified by dust collecting device',
                        ],
                    },
                    {
                        heading: 'Silent Features',
                        items: [
                            'Design is cGMP compliance',
                            'Contact parts AISI 316 & non-contact parts AISI 304',
                            'Single piece construction with Integrated retarding expansion chamber',
                            'Pneumatic Sealing of Filter Bag and Product container',
                            'Inlet Air handler with Air Filter – Micro, HEPA and Heat Exchanger',
                            'Built-in Explosion vents and isolation valve',
                            'Washable filter media, FDA approved',
                        ],
                    },
                    {
                        heading: 'Characteristics',
                        items: [
                            'Simple steady operation',
                            'Air and solid contact evenly with high thermal efficiency',
                            'Low expenses of equipment maintenance',
                            'Capable of lower temperature drying for heat sensitive material',
                            'Integration of drying and cooling bed, small floor space',
                        ],
                    },
                ],
            },
            {
                slug: 'paddle-dryer',
                title: 'Paddle Dryer',
                category: 'Dryer',
                categorySlug: 'dryer',
                icon: '',
                images: ["/images/projects/paddle-dryer/1-PaddleDryer.jpg"],
                description:
                    'Paddle dryer is an indirect conduction heating type drying device, suitable for processing materials with good thermal stability such as paste, powder and granular. After special configuration, it can be used for processing heat sensitive materials, materials that need to recover solvents during drying, and materials that need to be dried under rough vacuum.',
                sections: [
                    {
                        heading: 'Applicable Materials',
                        items: [
                            'Chemical, mining, metallurgical industries',
                            'Ore, gypsum, coal, metal powder',
                            'Diatomaceous earth, kaolin, various sludge',
                            'Municipal sludge, paper sludge drying',
                        ],
                    },
                    {
                        heading: 'Characteristics',
                        items: [
                            'Conduction type heat transfer – high efficiency',
                            'Self-cleaning function of heat transfer surface',
                            'Stable product quality',
                            'Small material loss, high product recovery rate',
                            'Broad material adaptability, even drying',
                            'Combine drying and cooling together',
                            'Compact structure, small area',
                            'Unique design, easy maintenance',
                        ],
                    },
                    {
                        heading: 'Working Principle',
                        items: [
                            'Two parallel shafts with interleaved hollow fan-shaped paddles',
                            'Feed shear plane and return shear plane paddles',
                            'Shaft rotates at low speed',
                            'Heating medium enters through universal revolving joint',
                            'Material agitated and mixed near paddles',
                            'Dried by heat conduction of paddle and jacket',
                            'Overflow weir adjustable for residence time control',
                        ],
                    },
                ],
            },
            {
                slug: 'tube-bundle-dryer',
                title: 'Tube Bundle Dryer',
                category: 'Dryer',
                categorySlug: 'dryer',
                icon: '',
                images: ["/images/projects/tube-bundle-dryer/1-TubeBundledryer.jpg"],
                description:
                    'The ChemSepT Tube Bundle Dryer is a compact steam dryer for the drying of biomass (sawdust, peat) and various protein-based feedstuffs such as fish meal and distiller\'s spent grains (DDG and DDGS) providing high evaporating capacity and consistent product quality.',
                sections: [
                    {
                        heading: 'Design',
                        items: [
                            'Contact dryer built as a rotating drum with internal lifting shovels',
                            'Heating surface designed as tube bundles heated by steam',
                            'Wet product lifted by shovels and distributed over steam heated tubes',
                            'Product conveyed by gravity within the dryer',
                            'Product blended and slid towards outlet by rotary movement',
                        ],
                    },
                    {
                        heading: 'Features',
                        items: [
                            'Drum and lifting shovels for uniform product distribution',
                            'Steam tubes collected in tube bundles with end domes',
                            'Supported on boogies with rollers in bearings',
                            'Inclination from inlet to outlet',
                            'Sealed inlet and outlet housing to prevent air leaking',
                            'Horizontal extraction screw for dried product below outlet',
                            'Drive station with gear motor on supporting rollers',
                        ],
                    },
                ],
            },
        ],
    },
];

// Helper: get all projects as a flat array
export function getAllProjects(): Project[] {
    return projectCategories.flatMap(c => c.projects);
}

// Helper: find a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return getAllProjects().find(p => p.slug === slug);
}

// Helper: get projects navigation structure for Navbar
export function getProjectsNav() {
    return projectCategories.map(c => ({
        label: c.name,
        icon: c.icon,
        items: c.projects.map(p => ({
            href: `/projects/${p.slug}`,
            label: p.title,
        })),
    }));
}
