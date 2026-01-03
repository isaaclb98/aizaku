import Section from "./components/Section";
import Frame from "./components/Frame";

export default function Home() {
  return (
    <main>
      {/* HERO */}
   <header className="mx-auto max-w-7xl px-8 pt-32 pb-24">
  <div className="mx-auto max-w-4xl text-center space-y-6">
    <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
      Isaac&rsquo;s Cool Website
    </h1>

    <div className="text-lg leading-relaxed text-zinc-400 space-y-5">
      {/* Paragraph 1 */}
      <p>
        Hello, my name is <span className="font-medium text-zinc-200">Isaac</span>. 
        I am a recent{" "}
        <span className="font-medium text-zinc-200">Computer Science graduate</span>{" "}
        from Canada who is currently looking for a job. 
        I am particularly interested in{" "}
        <span className="font-medium text-zinc-200">
          Cloud and DevOps-adjacent technologies
        </span>.
      </p>

      {/* Paragraph 2 */}
      <p>
        In order to familiarize myself with such technologies, I have, over the past little
        while, entered into the rabbit-hole of{" "}
        <span className="font-medium text-zinc-200">Docker</span>,{" "}
        <span className="font-medium text-zinc-200">Kubernetes</span>, and{" "}
        <span className="font-medium text-zinc-200">Amazon Web Services</span>.
        This webpage is meant to show off my home cluster that I have built. This
        site is itself hosted on my cluster. I have created the visualizations using{" "}
        <span className="font-medium text-zinc-200">Grafana</span>{" "}
        (data from{" "}
        <span className="font-medium text-zinc-200">Prometheus</span>),
        which is also running on my cluster.
      </p>

      {/* Paragraph 3 */}
      <p>
        Further on in the webpage I go into greater detail as to how I have set it up:
        I have deliberately tried to use{" "}
        <span className="font-medium text-zinc-200">best-practices</span>{" "}
        when possible, including using declarative frameworks such as{" "}
        <span className="font-medium text-zinc-200">Terraform</span>{" "}
        and{" "}
        <span className="font-medium text-zinc-200">ArgoCD</span>{" "}
        to externalize (and version) infrastructural architecture. More than anything else,
        though, I think it is very cool, and I hope you do too.
      </p>
    </div>

    {/* Email CTA */}
    <div className="pt-6">
      <a
        href="mailto:isaaclyons98@gmail.com"
        className="
          inline-flex items-center
          rounded-md
          border border-white/15
          px-5 py-3
          text-sm font-medium
          text-zinc-200
          hover:bg-white/5
          transition
        "
      >
        Email me
      </a>
    </div>
  </div>
</header>


      {/* DIVIDER */}
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto h-px w-240 bg-white/10" />
      </div>

      {/* SECTION 1 */}
      <Section title="System Health and Capacity">
        <p>
          This section summarizes the overall health of the cluster. A cluster is simply a set of nodes 
          (individual computers) that are physically connected (via a network) and logically coordinated 
          by Kubernetes. 
          This cluster is composed of four nodes. The following visualizations illustrate the health and 
          availability of those nodes, their total resource capacity, and the number of Kubernetes 
          resources currently running in the cluster.
        </p>
      </Section>

      <div className="mx-auto max-w-7xl px-8 mt-10">
        <Frame title="Live system signals">
          <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9]">
            <iframe
              src={process.env.SECTION_1_DASHBOARD}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </Frame>
      </div>

      {/* SECTION 2 */}
      <Section title="Cluster Compute Load">
        <p>
          Here we can see the actual CPU and memory usage of the whole cluster. The two panels on the top show the
          current state, whereas the charts below it show usage over time. You can change the time-frame to see it over
          the course of a month, etc.
        </p>
      </Section>

      <div className="mx-auto max-w-7xl px-8 mt-10">
        <Frame title="Cluster load (live)">
          <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9]">
            <iframe
              src={process.env.SECTION_2_DASHBOARD}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </Frame>
      </div>

      {/* SECTION 3 */}
      <Section title="Amazon EC2 Instance and Network Activity">
        <p>
          Lastly, in this section we can see the network activity of the cluster and of the EC2 instance.
          The EC2 machine is an Amazon Web Services virtual machine: I use it as the internet-facing entrypoint
          of the cluster. Amazon provides DDOS protection and basic security for its virtual machines by default, 
          which makes it ideal for such a purpose. It's also very cheap (currently free for me). The top panel is the
          network activity of my cluster itself, whereas the panels below that are the network activity (specifically 
          packets in) and CPU usage of the EC2 instance. I have identified (you can see better if you adjust the time range)
          limits that indicate suspiciously high network activity.
        </p>
      </Section>

      <div className="mx-auto max-w-7xl px-8 mt-10 pb-32">
        <Frame title="Edge activity (live)">
          <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9]">
            <iframe
              src={process.env.SECTION_3_DASHBOARD}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </Frame>
      </div>
    </main>
  );
}
