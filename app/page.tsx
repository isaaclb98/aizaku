import Section from "./components/Section"
import Frame from "./components/Frame"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-14">
        <h1 className="text-4xl font-semibold tracking-tight">
          Isaac's Cool Webpage
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-300">
          Introduction...
        </p>
      </header>

      <Section eyebrow="Section 1" title="System Health and Capacity">
        <p>
          ...
        </p>
        <Frame title="(Live Data)">
          <div className="relative w-full overflow-hidden rounded-lg">
            <iframe
              src={process.env.SECTION_1_DASHBOARD}
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </Frame>
      </Section>

      <Section eyebrow="Section 2" title="Compute Load">
        <p>
          ...
        </p>
        <Frame title="(Live Data)">
          <div className="relative w-full overflow-hidden rounded-lg">
            <iframe
              src={process.env.SECTION_2_DASHBOARD}
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </Frame>
      </Section>

      <Section eyebrow="Chapter 3" title="Amazon EC2 Instance and Network Activity">
        <p>
          ...
        </p>
        <Frame title="(Live Data)">
          <div className="relative w-full overflow-hidden rounded-lg">
            <iframe
              src={process.env.SECTION_3_DASHBOARD}
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </Frame>
      </Section>
    </main>
  )
}
