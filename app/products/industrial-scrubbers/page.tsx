import ProductDetail from '@/components/ProductDetail';

export default function IndustrialScrubbersPage() {
    return (
        <ProductDetail
            title="Industrial Scrubbers"
            icon="🌫️"
            tagline="Taking Better Care of Your Environment"
            description="Scrubbers have played a very important role in industrial ventilation for many decades. These are the only devices which can remove particulate matter as well as gaseous impurities. Wet scrubbing of industrial gases has improved over many years to accommodate fine cleaning requirements of today's industry.

Any activity like burning metal forming, chemical reaction or material handling will generate pollutants like particulate matter, unwarranted gases, and these pollutants need to be removed from the gas stream and cleaned gases are left in the atmosphere to ensure a pollution-free Environment.

ChemSepT™ offers a variety of wet scrubber systems specifically designed for your process application. We will work with you and use our experience and knowledge to provide the proper solution for your process."
            specs={[
                { label: 'Manufacturing Std', value: 'ASME, IS, CEN, BiS, API & Others' },
                { label: 'MOC', value: 'Hastelloy, SS 316/316L, SS 304/304L, CS, CS with PFA-PTFE-HALAR Coating, FRP' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Purpose', value: 'Removal of particulate matter AND gaseous impurities from industrial gas streams' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO', 'ASME']}
            sections={[
                {
                    heading: 'Types of Wet Scrubbers',
                    items: ['Chemical Scrubbers / Gas Scrubbers', 'Particulate / Venturi Scrubbers', 'Ammonia Scrubbers', 'Chlorine Scrubbers', 'Particulate / Dust Scrubbers', 'Sulfuric Acid Scrubbers'],
                },
                {
                    heading: 'Scrubber Grouping',
                    items: ['For particulate collection — wet cyclones, cyclonic scrubbers, venturi scrubbers', 'For gaseous absorption — packed bed scrubbers, dynamic packed bed, baffle plate scrubbers, impingement plate scrubbers'],
                },
                {
                    heading: 'Venturi Scrubber System Components',
                    items: ['Scrubbing vessel with restriction duct', 'High velocity water atomization zone', 'Cyclonic separator for gas/water separation', 'Water pumping & recycle tank system', 'Exhaust stack with modern controls', 'Spent scrubbing liquid treatment system'],
                },
            ]}
        />
    );
}
