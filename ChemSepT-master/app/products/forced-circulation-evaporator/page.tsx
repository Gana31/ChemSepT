import ProductDetail from '@/components/ProductDetail';

export default function ForcedCirculationEvaporatorPage() {
    return (
        <ProductDetail
            images={["/images/products/forced-circulation-evaporator/1-Forced-Circulation-Evaporator1.jpg"]}
            title="Forced Circulation Evaporator"
            icon="🌀"
            tagline="High Viscosity | Evaporative Crystallizer"
            description="Forced Circulation Evaporator for concentration of high viscosity material and products with higher solids. This is also used as evaporative crystallizer. To achieve desired concentration, Falling Film Evaporator followed by Forced Circulation Evaporator is used to minimize the operating cost.

In this type of evaporator, the liquid is pumped through tube side of Calandria at high velocity avoiding precipitation and fouling. The liquid is then passed through vapor separator for separation of vapor. Concentrated liquid is continuously discharged from bottom of the vapor separator with pump."
            specs={[
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Best For', value: 'High viscosity liquids, crystallization, high solids concentration' },
                { label: 'Operation', value: 'Continuous discharge from vapor separator' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Main Features',
                    items: [
                        'Ideal for Crystallization processes',
                        'Achieves high concentrated values',
                        'Excellent steam economy',
                        'High evaporation capacity',
                        'Minimum energy consumption',
                        'Avoids fouling and precipitation at tube walls',
                    ],
                },
            ]}
        />
    );
}
