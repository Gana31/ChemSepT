import ProductDetail from '@/components/ProductDetail';

export default function HydrofoilHighViscosityPage() {
    return (
        <ProductDetail
            images={["/images/products/hydrofoil-high-viscosity/1-High-05.jpg"]}
            title="CSE-HH Series: Hydrofoil for High Viscosity"
            icon="🔄"
            tagline="High Flow for Demanding Viscosities"
            description="The CSE-HH Series Hydrofoil impellers are specialized for higher viscosity applications where standard hydrofoils lose pumping efficiency. By modifying the wide-blade geometry, these impellers maintain robust axial flow and overcome viscous resistance, delivering superior blending times compared to older technologies."
            specs={[
                { label: 'Configuration', value: 'Advanced wide-blade profile (3 & 4 blade configurations)' },
                { label: 'MOC', value: 'CS, SS 304, SS 304L, SS 316, SS 316L, Fiber Glass (FRP), Teflon (PTFE), Hastelloy' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Applications',
                    items: [
                        'High viscosity polymer blending',
                        'Syrup and resin mixing',
                        'Deep tank axial flow generation',
                        'Viscous heat transfer',
                    ],
                },
            ]}
        />
    );
}
