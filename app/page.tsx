"use client";

import { useEffect } from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Frame from "./components/Frame";
import Divider from "./components/Divider";
import TerminalPreview from "./components/TerminalPreview";
import ProjectCard from "./components/ProjectCard";


const RHIZOME_DEMO_URL =
  process.env.NEXT_PUBLIC_RHIZOME_DEMO_URL || "";
const RHIZOME_REPO_URL =
  process.env.NEXT_PUBLIC_RHIZOME_REPO_URL || "#";

export default function Home() {
  // Site visit tracking
  useEffect(() => {
    fetch("/api/track", { method: "POST" }).catch(() => {
      // swallow — site visit tracking is non-critical
    });
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".reveal-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Nav />

      {/* ─── HERO ─── */}
      <section
        className="
          min-h-screen
          flex flex-col justify-center
          pt-24 pb-20
        "
      >
        <div
          className="
            max-w-[1100px] mx-auto px-10
            w-full
          "
        >
          <div className="max-w-[640px] reveal-on-scroll">
            <h1
              className="
                text-5xl md:text-6xl lg:text-7xl
                font-semibold tracking-tight
                text-[var(--text)]
                leading-[1.05]
                mb-8
              "
              style={{
                fontFamily: "var(--font-inter)",
                letterSpacing: "-0.03em",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>Isaac Lyons-Barney</span>
            </h1>

            <img
              src="/image0.jpeg"
              alt="Isaac Lyons-Barney"
              className="w-20 h-20 rounded-full object-cover mb-8"
            />

            <p
              className="
                text-lg text-[var(--text-muted)]
                leading-relaxed mb-10
                max-w-[520px]
              "
            >
              CS grad from Canada. I work with Kubernetes and Terraform for
              infrastructure, and with AI agents, embeddings, and LLM APIs.
              Looking for work where I can contribute meaningfully and
              continue to learn.
            </p>

            <a
              href="#rhizome"
              className="
                inline-flex items-center gap-2
                bg-[var(--accent)] text-white
                px-6 py-3 rounded-none
                text-sm font-medium
                no-underline
                transition-colors
                hover:bg-[var(--accent-hover)]
              "
            >
              See what I built
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Divider />

      {/* ─── RHIZOME ─── */}
      <Section
        id="rhizome"
        eyebrow="Featured Project"
        title="Rhizome"
      >
        <div className="max-w-[600px] reveal-on-scroll">
          <p className="text-[17px] text-[var(--text-muted)] leading-[1.75] mb-8">
            A semantic Wikipedia traversal tool built on vector embeddings. You
            give it a starting concept, and it walks through semantically
            related Wikipedia passages using epsilon-greedy exploration:
            configurable exploration parameters (like temperature) let you
            tune how focused or tangential the walk is. Uses Qdrant for vector storage.
            Users can create their own embeddings for custom Wikipedia
            domains. The output is a chain of cited Wikipedia passages, each
            one leading into the next.
          </p>

          <p className="text-sm text-[var(--text-muted)] mb-8">
            Indexed ~39,000 Wikipedia articles across 6 domains — Modernism,
            Postmodernism, Continental Philosophy, Frankfurt School, Aesthetics,
            Literary Theory — producing 832,167 vectors.
          </p>

          <div className="mb-8 reveal-on-scroll">
            <Frame variant="terminal">
              <TerminalPreview />
            </Frame>
          </div>

          <div className="flex flex-wrap gap-4 reveal-on-scroll">
            {RHIZOME_DEMO_URL && (
              <a
                href={RHIZOME_DEMO_URL}
                className="
                  inline-flex items-center gap-2
                  bg-[var(--accent)] text-white
                  px-5 py-2.5 rounded-none
                  text-sm font-medium
                  no-underline
                  transition-colors
                  hover:bg-[var(--accent-hover)]
                "
              >
                Try the demo
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            )}
            <a
              href={RHIZOME_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                bg-transparent text-[var(--text)]
                px-5 py-2.5 rounded-none
                text-sm font-medium
                border border-[var(--border)]
                no-underline
                transition-colors
                hover:border-[var(--text-muted)]
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View source
            </a>
          </div>
        </div>
      </Section>

      <Divider />

      {/* ─── EXPERIENCE ─── */}
      <Section id="experience" eyebrow="Experience" title="Systems Officer II at Ontario Public Service, Jan–Aug 2024">
        <div className="max-w-[600px] reveal-on-scroll">
          <p className="text-[17px] text-[var(--text-muted)] leading-[1.75]">
            Built enterprise back-end services for government web applications —
            Java/Spring for AgriSuite and FRI, C#/ASP.NET features alongside.
            Implemented end-to-end test automation with Playwright and Azure,
            running environment-specific executions with centralized reporting
            and saving 40+ hours per year. Agile team with shared CI/CD workflows.
          </p>
        </div>
      </Section>

      <Divider />

      {/* ─── PROJECTS ─── */}
      <Section id="projects" eyebrow="More Work" title="Other Projects">
        <div className="max-w-[600px] reveal-on-scroll">
          <p className="text-[17px] text-[var(--text-muted)] leading-[1.75] mb-10">
            Rhizome is the anchor. More projects will slot in here as they
            mature.
          </p>
        </div>

        <div
          className="
            grid grid-cols-1 md:grid-cols-2 gap-4
            max-w-[800px]
            reveal-on-scroll
          "
        >
          <ProjectCard
            eyebrow="AI / Embeddings"
            title="Rhizome"
            description="Wikipedia traversal using epsilon-greedy search over vector embeddings. Temperature and epsilon are configurable to control how explorative or focused the walk is. Users can build their own corpora for different Wikipedia domains. The output is a chain of cited Wikipedia passages, each one leading into the next."
            links={[
              { label: "Live demo", href: RHIZOME_DEMO_URL },
              { label: "GitHub", href: RHIZOME_REPO_URL },
            ]}
          />
          <ProjectCard
            eyebrow="Game Development"
            title="Dungeon Crawler"
            description="3D dungeon crawler video game built by a team of 6 for a university project. Led the team as project manager, overseeing architecture and deliverables."
            links={[
              {
                label: "GitHub",
                href: "https://github.com/isaaclb98/dungeon-crawler",
              },
            ]}
          />
          <ProjectCard
            eyebrow="Infrastructure"
            title="Home Cluster"
            description="Four-node Kubernetes cluster on bare metal, managed declaratively with Terraform and ArgoCD. Infrastructure declared in code. If the hardware were destroyed tomorrow, the cluster would still exist, ready to rebuild. Self-hosts a music server, photo gallery, movie library, git forge, and more. Prometheus + Grafana monitoring."
            links={[
              {
                label: "View dashboards",
                href: "#cluster",
              },
            ]}
          />
        </div>
      </Section>

      <Divider />

      {/* ─── CLUSTER ─── */}
      <Section
        id="cluster"
        eyebrow="Infrastructure"
        title="Where I Deploy Things"
      >
        <div className="max-w-[580px] reveal-on-scroll">
          <p className="text-[17px] text-[var(--text-muted)] leading-[1.75] mb-10">
            Self-hosted on bare metal. Four-node Kubernetes cluster managed
            with Terraform and ArgoCD, the full architecture declared in
            code. If the hardware were destroyed, the cluster would still
            exist, ready to rebuild. Runs git hosting, media streaming,
            compute workloads, and more. This dashboard is live.
          </p>
        </div>

        <div className="max-w-[800px] reveal-on-scroll rounded overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
          <iframe
            src={process.env.NEXT_PUBLIC_SECTION_1_DASHBOARD || "about:blank"}
            loading="lazy"
            className="w-full h-[500px] border-0"
            title="Cluster System Health"
          />
        </div>
      </Section>

      <Divider />

      {/* ─── CONTACT ─── */}
      <Section id="contact">
        <div className="max-w-[600px] reveal-on-scroll">
          <p
            className="
              text-xs font-medium tracking-[0.1em] uppercase
              text-[var(--accent)] mb-4
            "
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Contact
          </p>

          <h2
            className="
              text-3xl md:text-4xl
              font-medium tracking-tight text-[var(--text)]
              mb-6
            "
            style={{
              fontFamily: "var(--font-inter)",
              letterSpacing: "-0.02em",
            }}
          >
            Contact me
          </h2>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:isaaclyons98&#64;gmail.com"
              className="
                text-lg text-[var(--text)]
                no-underline
                border-b border-[var(--border)]
                pb-1
                transition-colors
                hover:text-[var(--accent)]
                hover:border-[var(--accent)]
                inline-block w-fit
              "
            >
              isaaclyons98&#64;gmail.com
            </a>
            <a
              href="https://github.com/isaaclb98"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-lg text-[var(--text-muted)]
                no-underline
                border-b border-[var(--border)]
                pb-1
                transition-colors
                hover:text-[var(--text)]
                hover:border-[var(--border)]
                inline-block w-fit
              "
            >
              github.com/isaaclb98
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-lyons-barney/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-lg text-[var(--text-muted)]
                no-underline
                border-b border-[var(--border)]
                pb-1
                transition-colors
                hover:text-[var(--text)]
                hover:border-[var(--border)]
                inline-block w-fit
              "
            >
              linkedin.com/in/isaac-lyons-barney
            </a>
          </div>
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 mt-4">
        <div className="max-w-[1100px] mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <p className="text-sm text-[var(--text-muted)]">Isaac Lyons-Barney</p>
            <p className="text-sm text-[var(--text-muted)]">
              Built with Next.js, deployed on my cluster
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
