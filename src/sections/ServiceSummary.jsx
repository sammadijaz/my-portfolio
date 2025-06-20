function ServiceSummary() {
  return (
    <section
    className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive"
    >
      <div
      id="title-service-1"
      >
        <p>Architecture</p>
      </div>
      <div
      id="title-service-2"
      className="flex items-center justify-center gap-3 translate-X-16"
      >
        <p>Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p>Deployment</p>
      </div>
    </section>
  );
}

export default ServiceSummary;
