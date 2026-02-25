import ProductDetail from '@/components/ProductDetail';

export default function LimpetReactorsPage() {
    return (
        <ProductDetail
            title="Limpet Reactors"
            icon="🧪"
            tagline="Limpet Coil Type — 100 Liters to 50,000 Liters"
            description="Limpet coil reactor vessels are used to control the temperature of the reactants with the help of heating or cooling media circulated through coils surrounding the main vessel. Ideally suitable for medium heat transfer requirement and heating application where heating media temperature is above 200°C. Coils are half piped welded on the outer side of the main vessel."
            specs={[
                { label: 'Capacity', value: '20 Liters to 50,000 Liters' },
                { label: 'MOC', value: 'Hastelloy, SS 316, SS 316L, SS 304, SS 304L, CS, CS with PFA-PTFE-HALAR Coating' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Manufacturing Std', value: 'ASME, IS, CEN, BiS, API & Other' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO', 'ASME']}
            sections={[
                {
                    heading: 'Advantages of Limpet Type Reactors',
                    items: [
                        'Available in the range of 100 Liters to 50,000 Liters',
                        'Offered in Stainless Steel 316, 304 or Carbon Steel material',
                        'Coils are half piped welded on outer surface for uniform circulation of heating/cooling media',
                        'Adheres to ASME and other standards with special Argon and Arc welding procedures',
                        'Save Energy using two-part Jacket design for smaller batch',
                        'GMP range available for Pharmaceutical industry (mirror finish 220–440 grit)',
                        'Energy efficient direct drive design with VFD option',
                        'Agitator design to suit the reactants viscosity and density',
                        'Automation, valves and fittings available',
                        'Manufacturing facilities approved by TPI agencies',
                    ],
                },
            ]}
        />
    );
}
