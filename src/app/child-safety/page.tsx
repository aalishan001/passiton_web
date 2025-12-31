"use client";
import React from "react";
import styles from "./child-safety.module.css";

const ChildSafetyStandards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Child Safety Standards</h1>
        <section className={styles.section}>
          <p>
            Passiton is committed to providing a safe, respectful, and
            abuse-free platform. We have zero tolerance for any form of child
            sexual abuse or exploitation.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>Zero Tolerance Policy</h2>
          <p>Passiton strictly prohibits:</p>
          <ul className={styles.ul}>
            <li>Child sexual abuse material (CSAM)</li>
            <li>Any content that exploits or endangers minors</li>
            <li>
              Grooming, solicitation, or inappropriate communication involving
              minors
            </li>
          </ul>
          <p>
            Any such content or behavior is immediately removed, and offending
            accounts are permanently banned.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>Reporting & Moderation</h2>
          <p>Users can report:</p>
          <ul className={styles.ul}>
            <li>Inappropriate content</li>
            <li>Suspicious user behavior</li>
            <li>Any concerns related to child safety</li>
          </ul>
          <p>
            Reports are reviewed promptly by our moderation team. We take swift
            action based on the severity of the report, including content
            removal, account suspension, or permanent bans.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>Cooperation With Authorities</h2>
          <p>
            Passiton complies with all applicable child safety laws and
            regulations.
          </p>
          <p>
            We report confirmed cases of child sexual abuse material or
            exploitation to relevant regional and national authorities, as
            required by law.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>Age Requirement</h2>
          <p>
            Passiton is intended for users aged 18 years and above. We do not
            knowingly allow minors to create accounts or use the platform.
          </p>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>Safety by Design</h2>
          <p>To promote a safer environment, Passiton includes:</p>
          <ul className={styles.ul}>
            <li>User reporting and blocking features</li>
            <li>Account suspension for violations</li>
            <li>Community guidelines enforcement</li>
          </ul>
        </section>
        <hr className={styles.hr} />
        <section className={styles.section}>
          <h2 className={styles.h2}>Contact for Child Safety Concerns</h2>
          <p>
            If you have any concerns related to child safety on Passiton, please
            contact us immediately:
          </p>
          <p className={styles.email}>
            <strong>Email:</strong> ram@thirdeyegfx.com
          </p>
          <p>
            We are committed to maintaining a safe platform and responding
            responsibly to all child safety issues.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ChildSafetyStandards;
