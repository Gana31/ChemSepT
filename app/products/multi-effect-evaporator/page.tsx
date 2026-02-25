import ProductDetail from '@/components/ProductDetail';

export default function MultiEffectEvaporatorPage() {
    return (
        <ProductDetail
            title="Multi Effect Evaporator"
            icon="♻️"
            tagline="Thermal & Mechanical Vapor Recompression"
            description="In Multi-Effect Distillation Evaporators, the upper end of the rising film evaporation tubes protrude from the upper tube plate of the calandria, so that the liquid after evaporation does not flow back into the tube and the vapor produced inside the tubes can leave the tubes without passing the liquid level on the upper tube plate. This avoids the excessive entrainment of the liquid and higher vapor and distillate salinity."
            specs={[
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Recompression Options', value: 'Thermal Vapor Recompression (TVR), Mechanical Vapor Recompression (MVR)' },
                { label: 'Best For', value: 'Large-scale evaporation with high energy efficiency and low operating cost' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Energy Recovery Technologies',
                    items: [
                        'Thermal Vapor Recompression (TVR) — uses steam ejector',
                        'Mechanical Vapor Recompression (MVR) — uses compressor',
                        'Multiple effects for maximum steam economy',
                        'Minimized fresh steam consumption',
                        'Low overall operating cost',
                        'Suitable for large-volume evaporation projects',
                    ],
                },
            ]}
        />
    );
}
