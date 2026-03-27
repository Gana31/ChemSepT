import ProductDetail from '@/components/ProductDetail';

export default function PressureVesselsPage() {
    return (
        <ProductDetail
            images={["/images/products/pressure-vessels/1-pressure-vessel-01.jpg","/images/products/pressure-vessels/2-pressure-vessel-02.JPG","/images/products/pressure-vessels/3-pressure-vessels.jpg","/images/products/pressure-vessels/4-storage-tank-1.jpg","/images/products/pressure-vessels/5-FRPStoragTank-01.jpg"]}
            title="Pressure Vessels & Storage Tanks"
            icon="⚙️"
            tagline="Ensured Safety | Controlled Pressure | 20L to 100,000L"
            description="ChemSepT offers Pressure vessels, Storage Tanks, & Receivers. We have a team of qualified professionals. Our offered vessels are developed in adherence with the industry set guidelines under the supervision of our professionals. Durable in nature, the vessels offered by us are manufactured using high-grade raw material like stainless steel and basic components that are procured from authentic vendors of the industry.

The pressure vessels are used to store fluid such as liquid, liquid vapors & gases under pressure. The Stainless Steel Pressure Vessels are utilized to hold gases or liquids at a pressure substantially different from the ambient pressure."
            specs={[
                { label: 'Capacity', value: '20 Liters to 100,000 Liters' },
                { label: 'MOC', value: 'Hastelloy, SS 316/316L, SS 304/304L, CS, CS with PFA-PTFE-HALAR Coating, FRP' },
                { label: 'Certification', value: 'CE, PED, DOSH, ATEX, SASO' },
                { label: 'Manufacturing Std', value: 'ASME, IS, CEN, BiS, API & Other' },
            ]}
            certifications={['CE', 'PED', 'DOSH', 'ATEX', 'SASO', 'ASME', 'API']}
            sections={[
                {
                    heading: 'Applications & Uses for Pressure Vessels',
                    items: ['Steam Boilers', 'Air receivers', 'High Pressure Gas Storage', 'Corrosive Fluids Storage', 'Chemical Process Storage', 'Petrochemical Storage', 'Petroleum Product Storage (Petrol, Diesel, Naphtha)'],
                },
                {
                    heading: 'Storage Tanks — Materials of Construction',
                    items: ['Mild Steel (MS)', 'Carbon Steel (CS)', 'SS 304, SS 316 and all grades', 'FRP (GRP/Fiberglass)', 'Vertical Flat Bottom', 'Vertical Leg', 'Horizontal configurations'],
                },
            ]}
        />
    );
}
