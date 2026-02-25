import ProductDetail from '@/components/ProductDetail';

export default function AgitatedThinFilmDryerPage() {
    return (
        <ProductDetail
            title="Agitated Thin Film Dryer"
            icon="🌡️"
            tagline="Continuous Drying | Vacuum Operation | ATFD"
            description="Agitated Thin Film Dryer (ATFD) for evaporation of water/solvents to make concentrated liquid to dry powder. Based on application either recovered solvent or dry product is important. Agitated Thin Film Dryer design is the ideal apparatus for continuous processing of concentrated material for drying.

ATFD consists of a cylindrical, vertical body with heating jacket and a rotor inside of the shell which is equipped with rows of pendulum blades all over the length of the dryer. The hinged blades (Scrappers) spread the wet feed product in a thin film over the heated surface. A highly agitated bow wave is formed in front of the rotor blades.

The vapors produced rise upwards, counter-current to the liquid and pass through a Cyclone Separator mounted at the vapor outlet of ATFD. Further these vapors will be condensed in a condenser and recovered as condensate. The system will be operated under vacuum for temperature sensitive products and atmospheric conditions for normal drying."
            specs={[
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Operation', value: 'Continuous processing — liquid to dry powder' },
                { label: 'Pressure', value: 'Vacuum (for temperature-sensitive) or atmospheric' },
                { label: 'Vapor Separation', value: 'Cyclone Separator + Condenser for solvent recovery' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Applications',
                    items: [
                        'Waste Water Industry',
                        'Pharmaceutical Industry',
                        'Sugar Industries',
                        'Distillery',
                        'Chemical & Petro-chemical Industries',
                        'Textile Industries',
                        'Agro Chemicals & Pigments',
                    ],
                },
            ]}
        />
    );
}
