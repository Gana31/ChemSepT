import ProductDetail from '@/components/ProductDetail';

export default function PitchedBladePage() {
    return (
        <ProductDetail
            images={["/images/products/pitched-blade/1-RushotorType-02.jpg"]}
            title="CSE-PBT Series: Pitched Blade Turbine Type"
            icon="⚙️"
            tagline="Aggressive Agitation & High Shear Rate"
            description="The CSE-PBT Series Pitched Blade Turbine impellers produce a significantly higher shear rate than standard hydrofoils while simultaneously maintaining reasonable axial flow rates. These impellers are ideal for rigorous applications requiring aggressive agitation in both low and medium viscosity fluids."
            specs={[
                { label: 'Configuration', value: 'AI-503 & AI-504 (3 & 4 bladed configuration)' },
                { label: 'MOC', value: 'CS, SS 304, SS 304L, SS 316, SS 316L, Fiber Glass (FRP), Teflon (PTFE), Monel, Nickel, Hastelloy, HALAR, PFA Coating' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Applications',
                    items: [
                        'Aggressive agitation in low viscosity',
                        'Rapid solid suspension',
                        'High-shear internal blending',
                        'Quick dissolving processes',
                    ],
                },
            ]}
        />
    );
}
