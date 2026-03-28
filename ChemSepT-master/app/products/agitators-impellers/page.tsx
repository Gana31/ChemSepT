import ProductDetail from '@/components/ProductDetail';

export default function AgitatorImpellersPage() {
    return (
        <ProductDetail
            title="Agitators & Impellers"
            icon="🔄"
            tagline="Widest Range of Mixing Solutions"
            description="ChemSepT offers Best Quality Agitators & Impellers with desired Certifications and is a leading Manufacturer of Agitators & Impellers with widest range of Mixing Solutions Available. ChemSepT™ offers many types of mixers. Some mixers are designed specifically for one special application, while others are more versatile with many options such as variable speed, changeable impellers and shafts, plus a wide range of motor horsepower.

ChemSepT™ offers variety of impellers for different process & mixing applications. Our Impeller technology covers high viscosity liquids, gas-liquid, liquid-liquid, solid-liquid applications."
            specs={[
                { label: 'MOC', value: 'CS, SS 304, SS 304L, SS 316, SS 316L, Fiber Glass (FRP), Teflon (PTFE), Monel, Nickel, Hastelloy, HALAR, PFA Coating' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Impeller Types Available',
                    items: [
                        'Hydrofoil for Low Viscosity',
                        'Hydrofoil for High Viscosity',
                        'Axial Flow for Gas-Liquid',
                        'Pitched Blade Turbine Type',
                        'Anchor Type',
                        'Rushton Type',
                    ],
                },
                {
                    heading: 'Applications',
                    items: [
                        'High viscosity liquid mixing',
                        'Gas-liquid dispersion',
                        'Liquid-liquid extraction',
                        'Solid-liquid suspension',
                        'Emulsification processes',
                        'Pharmaceutical mixing',
                    ],
                },
            ]}
        />
    );
}
