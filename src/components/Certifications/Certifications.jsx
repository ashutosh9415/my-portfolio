function Certifications() {
  const certifications = [
    {
      title: "NPTEL - Programming in Java",
      type: "Certificate",
      link: "/certificates/nptel-java.pdf",
    },
    {
      title: "Foundations of Cybersecurity - Coursera",
      type: "Certificate",
      link: "/certificates/foundations-cybersecurity.pdf",
    },
    {
      title: "Frontend Development Intern - Navyan",
      type: "Internship Certificate",
      link: "/certificates/Navyan-Internship-Certificate.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-cyan-400">
            LEARNING & EXPERIENCE
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Certifications
          </h2>
        </div>

        {/* Certification Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >

              {/* Certificate Information */}
              <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-2xl">
                  🏆
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {certificate.type}
                  </p>
                </div>

              </div>

              {/* PDF Button */}
              <div className="mt-6">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-cyan-400 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
                >
                  View Certificate PDF
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;