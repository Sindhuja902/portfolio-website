import React from "react";
import "./Certifications.css";
import { certificationsData } from "../data/CertificationsData";

function Certifications() {
  return (
    <div id="certifications" className="certifications">
      <h1 className="certifications-title">Certifications</h1>
      <div className="certifications-container">
        {certificationsData.map((cert) => (
          <div key={cert.id} className="certification-card">
            {/* <img
              src={cert.badge}
              alt={`${cert.name} badge`}
              className="certification-badge"
            /> */}
            <h2>{cert.name}</h2>
            <p>Certified by "{cert.issuer}"</p>
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
