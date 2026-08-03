import "./../App.css";

const certifications = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "25 Jan 2026",
    image: "/aws-cloud-foundations/aws-academy-graduate-cloud-foundations-training-bad.png",
    link: "https://www.credly.com/badges/dcdf92fa-3148-4cc8-8e64-754629164f9f/public_url"
  },
  {
    title: "AWS Academy Graduate - Cloud Operations",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "3 Aug 2026",
    image: "/aws-cloud-foundations/aws-academy-graduate-cloud-operations-training-badg.png",
    link: "https://www.credly.com/badges/917e3c9a-6cfe-4bf6-b79e-538a35107c42/public_url"
  }
];
function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="certification-container">
        {certifications.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />

            <h3>{cert.title}</h3>

            <p>
              <strong>Issuer:</strong> {cert.issuer}
            </p>

            <p>
              <strong>Issued:</strong> {cert.date}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;