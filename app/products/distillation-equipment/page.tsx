import Link from 'next/link';
import ProductDetail from '@/components/ProductDetail';

const components = [
    { name: 'Feed Tank', desc: 'Used for Feed or Raw material Storage Purpose. From this we can pump out the liquid to preheater or directly to column depending on need of process.' },
    { name: 'Pre Heater', desc: 'Used to heat the Feed or Raw material before liquid feeding to column. Requirement depends on Process Condition, Design Parameter & Raw material condition.' },
    { name: 'Kettle Reboiler', desc: 'Creates the vapor of liquid to be distilled using U tube bundle inserted into the kettle. Heating media circulated through tube bundle transfers heat to the liquid inside.' },
    { name: 'Distillation Column', desc: 'The heart of distillation system. Fractional distillation column separates components by repeated vaporization-condensation cycles. We offer packed as well as non-structured columns.' },
    { name: 'Main Condenser', desc: 'Shell and tube condenser with vapor in the shell and water in the tubes. Condenses remaining uncondensed vapor from the distillation column.' },
    { name: 'Vent Condenser', desc: 'From the main condenser, partially condensed vapor will be further condensed in the vent condenser.' },
    { name: 'Reflux Drum', desc: 'Collects condensate from condenser. Part of condensate is returned to column to provide cooling and condensation of up-flowing vapors, increasing tower efficiency.' },
    { name: 'Product Cooler', desc: 'If your product needs to be further cooled after receiving from the condenser, we offer Product Coolers.' },
    { name: 'Product Receiver', desc: 'Condensed final products are collected in the product receivers. Manufactured as per your requirements.' },
];

export default function DistillationEquipmentPage() {
    return (
        <ProductDetail
            title="Distillation Auxiliary Equipment"
            icon="🏭"
            tagline="Complete Distillation Systems | Individual or Turnkey"
            description="ChemSepT offers Best Quality Distillation Equipment with desired Certifications and is a leading Manufacturer with 100+ Quality Checks. Distillation is a process of separating component substances (fractions) from the whole (liquid mixtures) through vaporization and condensation. As substances of liquid to be distilled have different temperatures for vaporization, a system is designed to facilitate vaporization, condensation and removal of the various condensates.

All equipment's are offered individually or as a system (on Turnkey Basis). It can be part of alcohol distillation system or solvent recovery system or complete chemical process system."
            specs={[
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Scope', value: 'Individual equipment or complete turnkey distillation systems' },
                { label: 'Applications', value: 'Alcohol distillation, solvent recovery, chemical process systems' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO']}
            sections={[
                {
                    heading: 'Complete Distillation System Components',
                    items: components.map(c => c.name),
                },
            ]}
            extraContent={
                <div className="mt-8">
                    <h3 className="font-bold text-base mb-5" style={{ color: 'var(--c-navy)' }}>Component Details</h3>
                    <div className="space-y-4">
                        {components.map(({ name, desc }) => (
                            <div key={name} className="p-4 rounded-xl" style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)' }}>
                                <h4 className="font-bold text-sm mb-1" style={{ color: 'var(--c-navy)' }}>{name}</h4>
                                <p className="text-sm" style={{ color: 'var(--c-text-muted)' }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        />
    );
}
