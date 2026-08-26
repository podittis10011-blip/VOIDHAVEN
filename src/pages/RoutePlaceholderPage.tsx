interface RoutePlaceholderPageProps {
  title: string;
  description: string;
}

export function RoutePlaceholderPage({ title, description }: RoutePlaceholderPageProps) {
  return (
    <section className="page page--centered" aria-labelledby="placeholder-title">
      <p className="eyebrow">VOIDHAVEN · DEVELOPMENT</p>
      <h1 id="placeholder-title">{title}</h1>
      <p className="page-intro">{description}</p>
    </section>
  );
}
