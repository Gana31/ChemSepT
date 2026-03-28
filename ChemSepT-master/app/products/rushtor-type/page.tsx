import ProductDetail from '@/components/ProductDetail';

export default function RushtonTypePage() {
    return (
        <ProductDetail
            images={["/images/products/rushtor-type/1-RutorType-04.jpg","/images/products/rushtor-type/2-RushtorType-05.png"]}
            title="CSE-RT Series: Rushton Type Turbine"
            icon="⚙️"
            tagline="Extreme Radial Flow & Gas Dispersion"
            description="The CSE-RT Series features the classic Rushton Turbine design, which is the industry standard for extreme radial flow and high-shear operations. This impeller type violently shears gas bubbles into the fluid, dramatically increasing the interfacial surface area necessary for intensive gas-liquid mass transfer."
            specs={[
                { label: 'Configuration', value: 'Classic 6-blade, flat-blade disk turbine' },
                { label: 'MOC', value: 'CS, SS 304, SS 304L, SS 316, SS 316L, Monel, Nickel, Hastelloy, PFA Coating' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Applications',
                    items: [
                        'Intense gas-liquid dispersion',
                        'Extreme radial flow blending',
                        'Fermentation tanks',
                        'High-shear emulsification',
                    ],
                },
            ]}
        />
    );
}
