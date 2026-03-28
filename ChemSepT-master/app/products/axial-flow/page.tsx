import ProductDetail from '@/components/ProductDetail';

export default function AxialFlowPage() {
    return (
        <ProductDetail
            images={["/images/products/axial-flow/1-AxialImg-04.jpg"]}
            title="CSE-AF Series: Axial Flow for Gas-Liquid"
            icon="💨"
            tagline="Optimal Gas Dispersion & Axial Flow"
            description="The CSE-AF Series is engineered specifically for complex gas-liquid mixing applications. It offers a unique combination of high axial flow and intense local shear zones to finely disperse gas bubbles throughout the liquid matrix, significantly improving mass transfer rates."
            specs={[
                { label: 'Configuration', value: 'AI-400 Series Gas-Liquid design' },
                { label: 'MOC', value: 'CS, SS 304, SS 304L, SS 316, SS 316L, Monel, Hastelloy, PFA Coating' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Applications',
                    items: [
                        'Gas-liquid dispersion',
                        'Fermentation processes',
                        'Hydrogenation reactors',
                        'Aeration systems',
                    ],
                },
            ]}
        />
    );
}
