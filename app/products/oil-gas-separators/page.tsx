import ProductDetail from '@/components/ProductDetail';

export default function OilGasSeparatorsPage() {
    return (
        <ProductDetail
            title="Oil & Gas Separators & Internals"
            icon="⛽"
            tagline="Oil · Gas · Sand · Water — Multiphase Separation | API 12J"
            description="ChemSepT offers Best Quality Phase Separators with desired Certifications and is a leading Manufacturer of Oil and Gas Separators. Our gas and oil separators have proven themselves in service. Available in a range of custom sizes and configurations, they offer cost-effective solutions for greater well production.

Manufactured to ASME & API requirements, our vertical and horizontal separators are used for gas, water, sand and oil separation.

ChemSepT™ provides the engineering and design of 3-phase separator internals that target high gas volumes and primary L/L dispersions."
            specs={[
                { label: 'Standard', value: 'Complies API 12J' },
                { label: 'Phases', value: 'Multiphase: Oil, Gas, Sand, Water' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Manufacturing Std', value: 'ASME, IS, CEN, BiS, API & Other' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO', 'ASME', 'API 12J']}
            sections={[
                {
                    heading: 'Separator Types',
                    items: ['2-Phase Separators (Gas/Liquid)', 'Multiphase Separators (Gas/Oil/Water/Sand)', 'Horizontal Type Separators', 'Vertical Type Separators', 'Spherical Separators'],
                },
                {
                    heading: 'Phase Separator Internals ~ Engineering Scope',
                    items: ['Inlet Gas Distributor (VID)', 'Foam Breaker along with L/G Separator', 'Inlet Compartment Dimensional Design', 'Plate Pack Type Coalescers', 'Wire Mesh Coalescers', 'Mist Eliminator', 'Perforated Plates', 'Weir Plates', 'Vortex Breaker'],
                },
            ]}
        />
    );
}
