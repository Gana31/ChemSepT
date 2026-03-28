import ProductDetail from '@/components/ProductDetail';

export default function FallingFilmEvaporatorPage() {
    return (
        <ProductDetail
            images={["/images/products/falling-film-evaporator/1-Falling-Evaporator1.jpg"]}
            title="Falling Film Evaporator"
            icon="💧"
            tagline="High Energy Efficiency | Heat Sensitive Products"
            description="In falling film evaporator, water is distributed in tubes like a fine film layer on surface of tubes. Due to less wetting in surface and scaling, fouling materials will form a layer of insoluble scale that reduce its evaporation capacity. Feed vapour is separated in vapour separator. Use of falling film evaporator with multiple effects ensures high energy efficiency & is ideal for concentration of heat sensitive products, with low scaling tendency.

Mainly falling film evaporators are suitable for handling reverse osmosis reject water and having more than 40,000 mg/l TDS. This system evaporates up to 90% of feed and gives concentrate 300 gram per litre.

We are committed to do better service by providing tailor made solutions for your effluent treatment needs."
            specs={[
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Application', value: 'RO reject water, High TDS liquids (>40,000 mg/l)' },
                { label: 'Evaporation Rate', value: 'Up to 90% of feed' },
                { label: 'Concentrate Output', value: '300 g/l concentrate' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Main Features',
                    items: [
                        'Cost Effective operation',
                        'Ideal for simple processing',
                        'Constant / Continuous Operation',
                        'Can work under vacuum',
                        'Excellent steam economy',
                        'High heat transfer coefficient',
                        'Short residence time',
                        'Crystal clear process condensate',
                    ],
                },
            ]}
        />
    );
}
