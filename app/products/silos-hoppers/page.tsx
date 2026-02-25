import ProductDetail from '@/components/ProductDetail';

export default function SilosHoppersPage() {
    return (
        <ProductDetail
            title="Silo's & Hoppers"
            icon="🏗️"
            tagline="Solid Material Handling | Material Feeding Solutions"
            description="ChemSepT offers high-capacity chemical storage silos and hoppers for bulk solid handling. Our silos and hoppers are designed and manufactured to international standards, providing reliable containment and feeding solutions for bulk solid materials in the chemical, pharmaceutical, food, and agricultural industries.

Built to ASME, IS, CEN, BiS, API standards with TPI involvement, our Silos and Hoppers feature robust construction to handle a wide variety of dry bulk materials safely and efficiently."
            specs={[
                { label: 'Capacity', value: '20 Liters to 100,000 Liters' },
                { label: 'MOC', value: 'Hastelloy, SS 316/316L, SS 304/304L, CS, CS with PFA-PTFE-HALAR Coating, FRP (Fiberglass)' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Manufacturing Std', value: 'ASME, IS, CEN, BiS, API & Other' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO', 'ASME']}
            sections={[
                {
                    heading: 'Applications',
                    items: ['Chemical industry bulk storage', 'Pharmaceutical raw material storage', 'Food & agriculture silo systems', 'Agro Chemical & Pigment hoppers', 'Mining & mineral handling', 'Plastic & polymer feeders', 'Cement & construction materials'],
                },
                {
                    heading: 'Design Features',
                    items: ['Cone-bottom or flat-bottom hopper designs', 'Discharge gates and actuators', 'Level indicators and load cells', 'Vibration / aeration systems', 'Explosion-proof vent options (ATEX)', 'Custom inlet/outlet nozzle arrangements'],
                },
            ]}
        />
    );
}
