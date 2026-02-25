import ProductDetail from '@/components/ProductDetail';

export default function RisingFilmEvaporatorPage() {
    return (
        <ProductDetail
            title="Rising Film Evaporators"
            icon="📈"
            tagline="High Turbulence | Climbing Film Technology"
            description="In Rising Film Evaporator, due to the ascending force of the vapour bubbles, which are produced during boiling, the liquid and vapours flow upwards in a parallel flow. Simultaneously the vapour quantity also increases thereby forming a 'climbing' film on the walls of a tube. Due to this there is a high turbulence in the liquid and these evaporators are advantages for heat sensitive, highly viscous and moderately scaling liquids.

The temperature difference in the rising film evaporators should be high between the heating chest and boiling chamber to ensure the circulation and formation of a climbing film."
            specs={[
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Best For', value: 'Highly viscous liquids, fouling-prone and heat-sensitive products' },
                { label: 'Flow Pattern', value: 'Ascending parallel flow of liquid and vapour' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Salient Features',
                    items: [
                        'Ideal for liquids which attain high viscosity and have fouling tendency',
                        'Suitable for high temperature application',
                        'Better steam economy compared to falling film evaporator',
                        'Low capital cost',
                        'High turbulence for excellent heat transfer',
                        'Suitable for moderately scaling liquids',
                    ],
                },
            ]}
        />
    );
}
