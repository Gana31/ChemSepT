import ProductDetail from '@/components/ProductDetail';

export default function AnchorTypePage() {
    return (
        <ProductDetail
            images={["/images/products/anchor-type/1-PitchedBlad-01.jpg","/images/products/anchor-type/2-AnchortType-01.jpg","/images/products/anchor-type/3-AxialFlow-01.jpg"]}
            title="CSE-AC Series: Anchor Type"
            icon="⚓"
            tagline="High Viscosity Mixing & Heat Transfer"
            description="For ultra high viscosity fluids, anchor impellers present an ideal mixing and heat transfer solution. Our CSE-AC Series is best suited to the complete blending and mixing of difficult fluids such as dense pastes, heavy slurries, and thick polymers where standard axial flow fails."
            specs={[
                { label: 'Configuration', value: 'AI-602 (2 bladed Configuration)' },
                { label: 'MOC', value: 'CS, SS 304, SS 304L, SS 316, SS 316L, Fiber Glass (FRP), Teflon (PTFE), Monel, Nickel, Hastelloy, HALAR, PFA Coating' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Applications',
                    items: [
                        'Ultra high viscosity fluids',
                        'Paste and slurry mixing',
                        'Wall-scraping heat transfer',
                        'Polymerization reactions',
                    ],
                },
            ]}
        />
    );
}
