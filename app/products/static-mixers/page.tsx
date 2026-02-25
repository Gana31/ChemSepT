import ProductDetail from '@/components/ProductDetail';

export default function StaticMixersPage() {
    return (
        <ProductDetail
            title="Static Mixers"
            icon="➰"
            tagline="No Moving Parts | Continuous In-Line Mixing"
            description="ChemSepT offers Best Quality Static Mixers with desired Certifications and is a leading Manufacturer of Mixers. Static Mixers are devices that allow for the continuous blending of fluids within a pipeline. With no moving parts, static mixers utilize the energy of the flow stream to generate consistent, cost-effective and reliable mixing.

Chemsept® offers wide variety of custom designs for both mixing elements & Static Mixers. The static mixer range provides accurate process results, economy and space efficiency in a wide range of applications and industries."
            specs={[
                { label: 'MOC', value: 'CS, SS 304/304L, SS 316/316L, FRP, Teflon (PTFE), Monel, Nickel, Hastelloy, Polypropylene (PP), PVC' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Operation', value: 'No moving parts — uses flow energy' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Equipment Applications',
                    items: ['In-line pipe mixer', 'Chemical reactors', 'Jacketed pipe (heat transfer)', 'Heat Exchangers enhancement', 'Gas Liquid Disperser', 'Plug flow reactors', 'Water treatment plants'],
                },
                {
                    heading: 'CSE-Xmix (Laminar Flow) — Intersecting Bars',
                    items: ['Mixing high viscosity liquids', 'High efficiency with plug flow', 'Heat & mass transfer applications', 'High homogeneity & blending'],
                },
                {
                    heading: 'CSE-Vmix (Turbulent Flow) — Corrugated Plates',
                    items: ['Mixing low viscosity liquids', 'Mixing gases, liquid dispersion', 'Gas-liquid contacting', 'Low pressure drop design'],
                },
                {
                    heading: 'CSE-Hmix (Helical Mixer)',
                    items: ['Excellent for difficult blending systems', 'Custom design for element available', 'Low pressure drop', 'Widely used in water treatment plants', 'Suitable for small diameter pipes'],
                },
            ]}
        />
    );
}
