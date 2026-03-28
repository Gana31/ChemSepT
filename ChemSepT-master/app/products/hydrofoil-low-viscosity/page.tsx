import ProductDetail from '@/components/ProductDetail';

export default function HydrofoilLowViscosityPage() {
    return (
        <ProductDetail
            images={["/images/products/hydrofoil-low-viscosity/1-HFLow-04.jpg","/images/products/hydrofoil-low-viscosity/2-HFLow-02.jpg"]}
            title="CSE-LH Series: Hydrofoil for Low Viscosity"
            icon="🔄"
            tagline="Low Shear & High Axial Flow Rate"
            description="Our CSE-LH Series Hydrofoil impellers produce low shear rates while maintaining high axial flow rates. These impellers are specifically suited to agitation, heat transfer, and flocculation in low viscosity fluids, ensuring highly efficient mixing with reduced power consumption."
            specs={[
                { label: 'Configuration', value: 'AI– 302 (2, 3 & 4 blade configuration available)' },
                { label: 'MOC', value: 'CS, SS 304, SS 304L, SS 316, SS 316L, Fiber Glass (FRP), Teflon (PTFE), Monel, Nickel, Hastelloy, HALAR, PFA Coating' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Applications',
                    items: [
                        'Low viscosity fluid agitation',
                        'Heat transfer optimization',
                        'Flocculation processes',
                        'General blending applications',
                    ],
                },
            ]}
        />
    );
}
