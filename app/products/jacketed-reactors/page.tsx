import ProductDetail from '@/components/ProductDetail';

export default function JacketedReactorsPage() {
    return (
        <ProductDetail
            title="Jacketed Reactors"
            icon="⚗️"
            tagline="100 Liters to 50,000 Liters Capacity"
            description="Jacketed Reaction Vessel consist of a cylindrical vertical shell with standard tori spherical dish on both ends. During reaction, temperature of reactants is controlled by circulating heating or cooling media through the jacket. Ideally suitable for the heating below 200°C. Commonly used heat transfer media include water, steam, hot oil such as Therminol, and Dowtherm A. ChemSepT™ Engineering is a proven jacketed vessel manufacturer. Jacketed vessel can also be offered in Dimple design."
            specs={[
                { label: 'Capacity', value: '20 Liters to 50,000 Liters' },
                { label: 'MOC', value: 'Hastelloy, SS 316, SS 316L, SS 304, SS 304L, CS, CS with PFA-PTFE-HALAR Coating, CS with Hastelloy bonding' },
                { label: 'Manufacturing Std', value: 'ASME, IS, CEN, BiS, API & Other' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO', 'ASME', 'IS']}
            sections={[
                {
                    heading: 'Advantages of Jacketed Type Reactors',
                    items: [
                        'Available in range of 100 Liters to 50,000 Liters',
                        'Offered in SS 316, SS 304 or Carbon Steel material with PFA-PTFE-HALAR Coating',
                        'Spirals welded on outer surface for uniform circulation of heating/cooling media',
                        'Adheres to ASME and other standards with Argon and Arc welding',
                        'Save energy using two-part Jacket design for smaller batch',
                        'GMP range available for Pharmaceutical industry (mirror finish 220–440 grit)',
                        'Energy efficient direct drive design for agitator, with VFD option',
                        'Agitator design to suit reactants viscosity and density',
                        'Automation, valves and fittings available',
                        'Manufacturing facilities approved by TPI agencies',
                    ],
                },
            ]}
        />
    );
}
