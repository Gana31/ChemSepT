import ProductDetail from '@/components/ProductDetail';

export default function HeatExchangersPage() {
    return (
        <ProductDetail
            title="Heat Exchangers"
            icon="🔥"
            tagline="Energy Saver | Controlled Temperature | ASME/TEMA Designed"
            description="ChemSepT offers Best Quality Engineered Heat Exchangers with desired Certifications and is a leading Manufacturer with 100+ Quality Checks. ChemSepT™ designs and manufactures shell and tube type Heat Exchangers, Pipe in Pipe Heat Exchanger.

These are most commonly used and come in three types of construction: Fixed Tube sheet, U-tube, and Floating Tube sheet. We fabricate to TEMA configurations, from single pass to multiple pass exchangers. The Heat Exchangers are designed and manufactured to meet customer's process need and application in accordance with ASME and TEMA specifications."
            specs={[
                { label: 'Manufacturing Std', value: 'ASME, TEMA' },
                { label: 'MOC', value: 'Hastelloy, SS 316/316L, SS 304/304L, CS, CS with PFA-PTFE-HALAR Coating' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Construction Types', value: 'Fixed Tube Sheet, U-Tube, Floating Tube Sheet' },
                { label: 'Pass Configurations', value: 'Single pass to multiple pass exchangers' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO', 'ASME', 'TEMA']}
            sections={[
                {
                    heading: 'Product Variants (by Application)',
                    items: ['Heater', 'Cooler', 'Condenser', 'Reboiler', 'Evaporator'],
                },
                {
                    heading: 'Construction Types',
                    items: ['Fixed Tube Sheet Heat Exchangers', 'U-Tube Heat Exchangers', 'Floating Tube Sheet Heat Exchangers', 'Pipe-in-Pipe Heat Exchangers', 'Shell & Tube type design (TEMA)', 'Single to multiple pass configurations'],
                },
                {
                    heading: 'Key Advantages',
                    items: ['Low pressure losses', 'Better heat recovery', 'Compact design', 'Approved by renowned consultants & TPI', '100+ quality checks in manufacturing', 'Custom design to meet customer specifications'],
                },
            ]}
        />
    );
}
