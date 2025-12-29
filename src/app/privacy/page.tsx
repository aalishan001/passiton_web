"use client";
import React from "react";
import styles from "./policy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Passiton – Privacy Policy</h1>
        <p className={styles.updated}>
          <strong>Last Updated:</strong> 01/01/2026
        </p>
        <section className={styles.section}>
          <p>
            This Privacy Policy describes how Third Eye Creative ("we", "our",
            "us"), the owner and operator of the Passiton platform ("Platform"),
            collects, uses, stores, and protects personal data in accordance
            with the Digital Personal Data Protection Act, 2023 (India) ("DPDP
            Act").
          </p>
          <p>
            By accessing or using Passiton, you consent to the practices
            described in this Privacy Policy.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>1. Scope & Applicability</h2>
          <p>
            This Privacy Policy applies to all users of the Passiton mobile
            application and website. It governs the processing of digital
            personal data collected directly from users. Passiton acts as a Data
            Fiduciary under the DPDP Act.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>2. Personal Data We Collect</h2>
          <h3 className={styles.h3}>2.1 Information You Provide</h3>
          <ul className={styles.ul}>
            <li>Name (optional)</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>Profile photo (optional)</li>
            <li>Item images and descriptions</li>
            <li>Chat messages between users</li>
          </ul>
          <h3 className={styles.h3}>2.2 Automatically Collected Data</h3>
          <ul className={styles.ul}>
            <li>Device information (OS, app version)</li>
            <li>Log data and usage analytics</li>
            <li>
              Approximate location (city-level, not precise GPS unless
              explicitly enabled)
            </li>
          </ul>
          <h3 className={styles.h3}>2.3 Sensitive Personal Data</h3>
          <p>
            Passiton does not intentionally collect sensitive personal data such
            as:
          </p>
          <ul className={styles.ul}>
            <li>Aadhaar numbers</li>
            <li>Financial information</li>
            <li>Biometric data</li>
            <li>Health data</li>
          </ul>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>3. Purpose of Data Collection</h2>
          <ul className={styles.ul}>
            <li>Creating and managing user accounts</li>
            <li>Enabling item listings and user-to-user communication</li>
            <li>Improving platform performance and user experience</li>
            <li>Preventing fraud, abuse, and prohibited activities</li>
            <li>Providing customer support</li>
            <li>Complying with legal obligations</li>
          </ul>
          <p>
            We do not use personal data for automated decision-making that
            produces legal or significant effects on users.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>4. AI & Automated Processing</h2>
          <ul className={styles.ul}>
            <li>Item image categorization</li>
            <li>Content moderation</li>
            <li>Listing recommendations</li>
          </ul>
          <p>
            AI outputs are assistive and non-binding. Final responsibility for
            accuracy rests with users. No AI profiling is used for advertising
            or pricing.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>5. Data Sharing & Disclosure</h2>
          <p>
            We do not sell personal data. We may share limited data only with:
          </p>
          <ul className={styles.ul}>
            <li>Cloud hosting and infrastructure providers</li>
            <li>Analytics and security service providers</li>
            <li>
              Law enforcement or government authorities when legally required
            </li>
          </ul>
          <p>
            All third parties are bound by confidentiality and data protection
            obligations.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>6. Data Storage & Retention</h2>
          <p>
            Personal data is stored on secure servers located in India or
            jurisdictions with adequate data protection. Data is retained only
            for as long as necessary to fulfill stated purposes or comply with
            law. Inactive accounts may be anonymized or deleted.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>7. User Rights (DPDP Act)</h2>
          <ul className={styles.ul}>
            <li>Access your personal data</li>
            <li>Request correction or updating of inaccurate data</li>
            <li>
              Request deletion of personal data (subject to legal requirements)
            </li>
            <li>Withdraw consent at any time</li>
            <li>Grievance redressal</li>
          </ul>
          <p>Requests can be made by contacting us at the email below.</p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>8. Data Security</h2>
          <ul className={styles.ul}>
            <li>Access controls</li>
            <li>Encrypted data transmission</li>
            <li>Secure storage practices</li>
          </ul>
          <p>
            However, no system is completely secure, and users acknowledge
            inherent risks of digital platforms.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>9. Children’s Privacy</h2>
          <p>
            Passiton is not intended for individuals under 18 years of age. We
            do not knowingly collect personal data from minors.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>10. Cookies & Tracking Technologies</h2>
          <ul className={styles.ul}>
            <li>Maintain session integrity</li>
            <li>Analyze usage trends</li>
          </ul>
          <p>Users may control cookie preferences through browser settings.</p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            notified through the Platform. Continued use constitutes acceptance
            of the revised policy.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>12. Grievance Officer (DPDP Compliance)</h2>
          <p>
            In accordance with Indian law, the Grievance Officer details are:
          </p>
          <p>Email : hi@passiton.in</p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>13. Governing Law</h2>
          <p>
            This Privacy Policy is governed by the laws of India. Courts in
            Bangalore, Karnataka shall have exclusive jurisdiction.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <p>
            By using Passiton, you acknowledge that you have read and understood
            this Privacy Policy and consent to the processing of your personal
            data as described above.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
