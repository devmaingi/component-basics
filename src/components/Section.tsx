//declare interface
interface SectionProps {
    title: string;
    children: React.ReactNode;
}



function Section( {title, children}: SectionProps) {
    return (
        <section className="mb-8 p-4 border">
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;