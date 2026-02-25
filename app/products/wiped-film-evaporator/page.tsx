import ProductDetail from '@/components/ProductDetail';

export default function WipedFilmEvaporatorPage() {
    return (
        <ProductDetail
            title="Wiped Film Evaporator"
            icon="🔬"
            tagline="Single-Pass Evaporation | Low Pressure Operation"
            description="WFE consists of a jacketed shell precision machined from inside and a rotor having blades that maintain a close clearance from the shell. A feed distributor at the entry point distributes the liquid in a thin film on the heated wall. The high speed rotor further spreads and intensely agitates the film as it flows down. The generated vapours flow counter currently and get cleaned by an integrally mounted entrainment separator."
            specs={[
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Operating Pressure', value: 'As low as 1 mbar' },
                { label: 'Operating Temperature', value: 'Up to 400°C' },
                { label: 'Best For', value: 'Heat-sensitive, high-boiling, hazardous or viscous products' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Key Features',
                    items: [
                        'Required evaporation is achieved in a single pass',
                        'Avoids product recirculation and possible degradation',
                        'Excellent turn-down capability',
                        'Low product hold-up — ideal for hazardous applications',
                        'Operating pressure as low as 1 mbar',
                        'Operating temperature up to 400°C',
                        'Integrally mounted entrainment separator',
                        'Counter-current vapour flow for clean condensate',
                    ],
                },
            ]}
        />
    );
}
