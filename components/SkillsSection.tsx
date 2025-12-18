export default function SkillsSection() {
  const Link = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <section id="skills" className="section">
      <div className="section-row">
        {/* Left column */}
        <div className="section-heading">
          <h2 className="section-heading-title">Skills</h2>
          <p className="section-heading-subtitle">
            Technologies I use to build, integrate, and ship production-ready systems.
          </p>
        </div>

        {/* Right column */}
        <div className="section-body">
          <div className="skills-list-wrapper">
            {/* Group 1 */}
            <div className="skills-item">
              <h3 className="skills-role">Languages & Frameworks</h3>
              <ul className="skills-list">
                <li><Link href="https://www.python.org">Python</Link></li>
                <li>
                  <Link href="https://www.typescriptlang.org">TypeScript</Link> /{" "}
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</Link>
                </li>
                <li><Link href="https://www.java.com">Java</Link></li>
                <li>
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</Link> /{" "}
                  <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</Link>
                </li>
                <li><Link href="https://react.dev">React</Link></li>
                <li>
                  <Link href="https://nextjs.org">Next.js</Link>
                </li>
                <li>
                  <Link href="https://fastapi.tiangolo.com">FastAPI</Link> /{" "}
                  <Link href="https://riverbankcomputing.com/software/pyqt/">PyQt</Link> /{" "}
                  <Link href="https://www.prisma.io">Prisma</Link> /{" "}
                  <Link href="https://docs.litellm.ai">LiteLLM</Link>
                </li>
              </ul>
            </div>

            {/* Group 2 */}
            <div className="skills-item">
              <h3 className="skills-role">CLI, DevOps & Platforms</h3>
              <ul className="skills-list">
                <li>
                  <Link href="https://www.gnu.org/software/bash/">Bash</Link> /{" "}
                  <Link href="https://learn.microsoft.com/powershell/">PowerShell</Link> /{" "}
                  <Link href="https://www.openssh.com">SSH</Link>
                </li>
                <li>
                  <Link href="https://www.postgresql.org">PostgreSQL</Link>,{" "}
                  <Link href="https://www.mysql.com">MySQL</Link>,{" "}
                  <Link href="https://www.sqlite.org">SQLite</Link>
                </li>
                <li>
                  <Link href="https://www.docker.com">Docker</Link> /{" "}
                  <Link href="https://docs.docker.com/compose/">Docker Compose</Link> /{" "}
                  <Link href="https://kubernetes.io">Kubernetes (K8s)</Link>
                </li>
                <li>
                  <Link href="https://docs.github.com/actions">GitHub Actions (Workflow)</Link> /{" "}
                  <Link href="https://docs.docker.com/reference/dockerfile/">Dockerfile</Link>
                </li>
                <li><Link href="https://aws.amazon.com">AWS</Link></li>
                <li><Link href="https://www.kernel.org">Linux</Link></li>
              </ul>
            </div>

            {/* Group 3 */}
            <div className="skills-item">
              <h3 className="skills-role">Tools, Ecosystem & Integration</h3>
              <ul className="skills-list">
                <li>
                  <Link href="https://git-scm.com">Git</Link>,{" "}
                  <Link href="https://github.com">GitHub</Link>,{" "}
                  <Link href="https://about.gitlab.com">GitLab</Link>
                </li>
                <li><Link href="https://code.visualstudio.com">VS Code</Link></li>
                <li>
                  <Link href="https://github.com/features/copilot">GitHub Copilot</Link>,{" "}
                  <Link href="https://cursor.com">Cursor</Link>
                </li>
                <li>
                  <Link href="https://openvpn.net">OpenVPN</Link>,{" "}
                  <Link href="https://tailscale.com">Tailscale</Link>
                </li>
                <li>
                  <Link href="https://www.virtualbox.org">VirtualBox</Link>,{" "}
                  <Link href="https://learn.microsoft.com/windows-server/virtualization/hyper-v/hyper-v-overview">Hyper-V</Link>,{" "}
                  <Link href="https://www.qemu.org">QEMU</Link>
                </li>
                <li>
                  <Link href="https://mitmproxy.org">Mitmproxy</Link>,{" "}
                  <Link href="https://langfuse.com">Langfuse</Link>,{" "}
                  <Link href="https://www.uvicorn.org">Uvicorn</Link>
                </li>
                <li>
                  <Link href="https://firebase.google.com">Firebase</Link>,{" "}
                  <Link href="https://firebase.google.com/products/firestore">Firestore</Link>
                </li>
                <li>
                  <Link href="https://www.cocos.com/en">Cocos</Link>,{" "}
                  <Link href="https://godotengine.org">Godot</Link>
                </li>
                <li>
                  <Link href="https://www.openapis.org">OpenAPI</Link>,{" "}
                  <Link href="https://modelcontextprotocol.io">MCP API</Link>,{" "}
                  <Link href="https://open.douyin.com">Douyin Open Platform</Link>
                </li>
              </ul>
            </div>

            {/* Group 4 */}
            <div className="skills-item">
              <h3 className="skills-role">Protocols & Standards</h3>
              <ul className="skills-list">
                <li>
                  <Link href="https://www.rfc-editor.org/rfc/rfc9293">TCP/IP</Link>,{" "}
                  <Link href="https://standards.ieee.org/standard/802_3-2022.html">Ethernet</Link>
                </li>
                <li>
                  <Link href="https://www.rfc-editor.org/rfc/rfc9110">HTTP</Link> /{" "}
                  <Link href="https://www.rfc-editor.org/rfc/rfc9112">HTTP/1.1</Link> /{" "}
                  <Link href="https://www.rfc-editor.org/rfc/rfc8446">HTTPS (TLS)</Link>
                </li>
                <li>
                  <Link href="https://www.rfc-editor.org/rfc/rfc5280">PKI (X.509)</Link>
                </li>
                <li>
                  <Link href="https://pubs.opengroup.org/onlinepubs/9699919799/functions/socket.html">Socket API</Link>
                </li>
                <li>
                  <Link href="https://spec.modelcontextprotocol.io">LLM API / Tooling via MCP</Link>
                </li>
              </ul>
            </div>

            {/* Group 5 */}
            <div className="skills-item">
              <h3 className="skills-role">AI Trading & Optimisation</h3>
              <ul className="skills-list">
                <li>
                  <Link href="https://www.investopedia.com/terms/m/macd.asp">MACD</Link>,{" "}
                  <Link href="https://www.investopedia.com/terms/s/sma.asp">SMA</Link>,{" "}
                  <Link href="https://www.investopedia.com/terms/e/ema.asp">EMA</Link>,{" "}
                  <Link href="https://www.investopedia.com/terms/w/wma.asp">WMA</Link>
                </li>
                <li>
                  <Link href="https://en.wikipedia.org/wiki/Swarm_intelligence">Swarm Optimisation</Link>:{" "}
                  <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0952197619302593">MRFO</Link>,{" "}
                  <Link href="https://en.wikipedia.org/wiki/Flower_pollination_algorithm">FPA</Link>,{" "}
                  <Link href="https://en.wikipedia.org/wiki/Shuffled_frog_leaping_algorithm">SFLA</Link>,{" "}
                  <Link href="https://en.wikipedia.org/wiki/Metaheuristic">FSA / GbSA</Link>
                </li>
              </ul>
            </div>

            {/* Group 6 */}
            <div className="skills-item">
              <h3 className="skills-role">Core Capabilities</h3>
              <ul className="skills-list">
                <li>Full-stack Web Development</li>
                <li>Desktop Application Development</li>
                <li>Data Engineering & ETL Pipelines</li>
                <li>Cloud Deployment & DevOps Workflow</li>
                <li>System Design & Technical Documentation</li>
                <li>Open-source Integration & Debugging</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
