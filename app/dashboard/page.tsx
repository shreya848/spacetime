import { Bell, CheckCircle2, ChevronDown, Circle, Search, Settings, Shield, User } from "lucide-react";

const alerts = [
  {
    title: "Elevated marine conditions in Bermuda",
    meta: "Wave 1.5 m • Wind 21.7 km/h",
    time: "18:04:22Z • DETECTED 6 MIN AGO",
    type: "LIVE",
    level: "MEDIUM",
  },
  {
    title: "Vessel 244376506 loitering in monitored waters",
    meta: "Research • UK • Loitering",
    time: "17:56:22Z • DETECTED 14 MIN AGO",
    type: "LIVE",
    level: "MEDIUM",
  },
  {
    title: "Vessel 244620992 loitering in monitored waters",
    meta: "Patrol • UK • Loitering",
    time: "17:30:22Z • DETECTED 40 MIN AGO",
    type: "LIVE",
    level: "MEDIUM",
  },
  {
    title: "Vessel 205309000 loitering in monitored waters",
    meta: "Research • UK • Loitering",
    time: "17:20:22Z • DETECTED 50 MIN AGO",
    type: "LIVE",
    level: "MEDIUM",
  },
];

function Panel({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[28px] border border-white/8 bg-[#07090d] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.5)] ${className}`}
    >
      {title ? (
        <div className="border-b border-white/5 px-5 py-4">
          <h2 className="font-mono text-[18px] font-extrabold tracking-[0.12em] text-slate-100">
            {title}
          </h2>
        </div>
      ) : null}
      <div className="p-5">{children}</div>
    </section>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-5 last:border-b-0">
      <span className="text-[18px] text-slate-300">{label}</span>
      <span className="text-[18px] font-semibold text-slate-100">{value}</span>
    </div>
  );
}

function VesselCard({
  title,
  subtitle,
  code,
  time,
}: {
  title: string;
  subtitle: string;
  code: string;
  time: string;
}) {
  return (
    <div className="rounded-[18px] border border-[#1a2235] bg-[#05070d] p-4">
      <div className="mb-2 flex items-start justify-between gap-3">
        <p className="text-[16px] font-semibold leading-5 text-white">{title}</p>
        <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.22em] text-amber-300">
          MEDIUM
        </span>
      </div>
      <p className="text-[13px] text-slate-500">{subtitle}</p>
      <p className="mt-3 font-mono text-[11px] tracking-[0.2em] text-slate-500">
        {code}
      </p>
      <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-slate-500">
        LAST UPDATE: {time}
      </p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-4 p-4">
        {/* LEFT COLUMN */}
        <aside className="col-span-12 space-y-4 xl:col-span-2">
          <Panel title="LIVE ALERTS">
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className="rounded-[18px] border border-[#1a2235] bg-[#05070d] p-4"
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <p className="text-[15px] font-semibold leading-5 text-white">
                      {alert.title}
                    </p>
                    <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.22em] text-amber-300">
                      {alert.level}
                    </span>
                  </div>
                  <p className="text-[13px] text-slate-500">{alert.meta}</p>
                  <p className="mt-3 font-mono text-[11px] tracking-[0.2em] text-slate-500">
                    {alert.time}
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-slate-500">
                    LAST UPDATE: {alert.type}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="LIVE VESSEL FEED">
            <div className="space-y-3">
              <VesselCard
                title="Vessel 219018526"
                subtitle="Guard Vessel • UK"
                code="IMO 219018526   0 KTS   218°"
                time="LIVE"
              />
              <VesselCard
                title="Vessel 311000411"
                subtitle="Research • UK"
                code="IMO 311000411   0 KTS   281°"
                time="LIVE"
              />
              <VesselCard
                title="Vessel 245042000"
                subtitle="Tug • UK"
                code="IMO 245042000   0 KTS   112°"
                time="LIVE"
              />
            </div>
          </Panel>
        </aside>

        {/* CENTER COLUMN */}
        <section className="col-span-12 space-y-4 xl:col-span-8">
          <Panel className="overflow-hidden">
            <div className="flex flex-col gap-6 border-b border-white/5 p-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-mono text-[11px] tracking-[0.35em] text-blue-300/55">
                  AUTONOMOUS MARITIME COMMAND LAYER
                </p>

                <div className="mt-2 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-2xl font-black text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.22)]">
                    S
                  </div>
                  <h1 className="text-5xl font-black tracking-tight text-slate-100">
                    SENTINEL OS
                  </h1>
                </div>

                <p className="mt-2 max-w-3xl text-[15px] leading-7 text-slate-500">
                  Mission control for subsea infrastructure protection, vessel anomaly
                  tracking, and landing-zone defense visibility.
                </p>
              </div>

              <button className="inline-flex h-11 items-center gap-2 rounded-full border border-[#2a3552] bg-[#0f1626] px-5 text-sm font-semibold text-slate-200 shadow-[0_0_0_1px_rgba(59,130,246,0.08)]">
                <Shield className="h-4 w-4" />
                MISSION CONTROL
              </button>
            </div>

            <div className="grid gap-3 border-b border-white/5 p-5 lg:grid-cols-[1.7fr_140px]">
              <div className="flex items-center gap-3 rounded-[18px] border border-[#1a2235] bg-[#05070d] px-4 py-3">
                <span className="whitespace-nowrap font-mono text-[11px] tracking-[0.32em] text-slate-500">
                  OPERATIONAL LOCATION:
                </span>
                <input
                  className="w-full bg-transparent text-[13px] text-slate-300 outline-none placeholder:text-slate-700"
                  placeholder="Enter city, region, or country"
                />
              </div>
              <button className="rounded-[18px] border border-[#2a3552] bg-[#0f1626] px-4 py-3 text-sm font-semibold text-slate-200">
                LOAD
              </button>
            </div>

            <div className="flex flex-wrap gap-3 px-5 pb-3 pt-0">
              <Chip label="AIR 20°C" />
              <Chip label="WIND 21.7 KM/H" />
              <Chip label="WAVE 1.5 M" />
              <Chip label="OPS RISK MEDIUM" accent="amber" />
              <Chip label="WATCHFLOOR ACTIVE" />
              <Chip label="BERMUDA SECTOR" />
              <Chip label="OPS RISK MEDIUM" accent="amber" />
            </div>

            <div className="px-5 pb-5">
              <p className="mb-3 font-mono text-[11px] tracking-[0.35em] text-slate-400">
                VISIBLE VESSELS: 10000
              </p>

              <div className="rounded-[28px] border border-[#1a2235] bg-[#05070d]">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 rounded-full bg-slate-500" />
                    <span className="font-mono text-[11px] tracking-[0.32em] text-slate-400">
                      LIVE MARITIME OPERATING PICTURE
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Tab label="FLAT MAP" active />
                    <Tab label="GLOBE VIEW" />
                    <Pill label="CABLES" />
                    <Pill label="LANDINGS" />
                    <Pill label="HIGH" tone="red" />
                    <Pill label="MEDIUM" tone="amber" />
                    <Pill label="LOW" tone="green" />
                  </div>
                </div>

                <div className="relative h-[560px] overflow-hidden rounded-b-[28px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_42%),linear-gradient(180deg,#101826_0%,#05070d_100%)]">
                  {/* fake map field */}
                  <div className="absolute inset-0 opacity-90">
                    <div className="absolute left-[8%] top-[18%] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.8)]" />
                    <div className="absolute left-[13%] top-[24%] h-2 w-2 rounded-full bg-blue-500" />
                    <div className="absolute left-[18%] top-[32%] h-2 w-2 rounded-full bg-blue-500" />
                    <div className="absolute left-[55%] top-[28%] h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.8)]" />
                    <div className="absolute left-[58%] top-[31%] h-2 w-2 rounded-full bg-orange-400" />
                    <div className="absolute left-[63%] top-[34%] h-2 w-2 rounded-full bg-orange-400" />
                    <div className="absolute left-[69%] top-[39%] h-2 w-2 rounded-full bg-blue-500" />
                    <div className="absolute left-[79%] top-[50%] h-3 w-3 rounded-full bg-blue-500" />
                    <div className="absolute left-[42%] top-[59%] h-2 w-2 rounded-full bg-orange-400" />
                    <div className="absolute left-[60%] top-[73%] h-2 w-2 rounded-full bg-violet-400" />
                    <div className="absolute left-[23%] top-[72%] h-2 w-2 rounded-full bg-slate-400" />
                    <div className="absolute left-[82%] top-[82%] h-2 w-2 rounded-full bg-blue-500" />
                    <div className="absolute left-[6%] top-[57%] h-2 w-2 rounded-full bg-blue-500" />
                    <div className="absolute left-[12%] top-[64%] h-2 w-2 rounded-full bg-orange-400" />

                    <div className="absolute left-[9%] top-[50%] h-24 w-24 rounded-full border border-blue-400/20" />
                    <div className="absolute left-[39%] top-[14%] h-36 w-36 rounded-full border border-white/5" />
                    <div className="absolute left-[55%] top-[17%] h-52 w-52 rounded-full border border-white/5" />
                    <div className="absolute left-[72%] top-[56%] h-32 w-32 rounded-full border border-white/5" />

                    <svg className="absolute inset-0 h-full w-full">
                      <path
                        d="M 110 360 C 255 290, 380 260, 620 230"
                        stroke="#c026d3"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.9"
                      />
                      <path
                        d="M 100 410 C 270 360, 455 330, 690 280"
                        stroke="#c026d3"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.65"
                      />
                      <path
                        d="M 130 470 C 320 430, 530 400, 760 345"
                        stroke="#c026d3"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.45"
                      />
                    </svg>
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-[20px] border border-black/40 bg-black/65 p-4 backdrop-blur-md">
                    <p className="mb-3 font-mono text-[11px] tracking-[0.28em] text-slate-300">
                      MAP LEGEND
                    </p>
                    <div className="space-y-2 text-[13px] leading-5 text-slate-300">
                      <Legend text="Magenta line: submarine cable route" color="bg-fuchsia-500" />
                      <Legend text="Blue dot: sea cable landing point" color="bg-blue-500" />
                      <Legend text="Blue ring: 10-mile landing perimeter" ring />
                      <Legend text="Red vessel dot: high risk" color="bg-red-500" />
                      <Legend text="Amber vessel dot: medium risk" color="bg-amber-400" />
                      <Legend text="Grey vessel dot: low risk" color="bg-slate-400" />
                    </div>
                  </div>

                  <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-white/95 text-black shadow-lg">
                    <button className="block border-b border-black/10 px-3 py-2 text-lg font-bold">+</button>
                    <button className="block px-3 py-2 text-lg font-bold">−</button>
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="SYSTEM SUMMARY">
              <StatRow label="Tracked Vessels" value="10000" />
              <StatRow label="High Risk Contacts" value="75" />
              <StatRow label="Medium Risk Contacts" value="7907" />
              <StatRow label="Low Risk Contacts" value="2018" />
              <StatRow label="Cable Routes" value="21" />
            </Panel>

            <Panel title="MARINE CONDITIONS">
              <StatRow label="Location" value="Bermuda" />
              <StatRow label="Air Temp" value="20°C" />
              <StatRow label="Wind Speed" value="21.7 km/h" />
              <StatRow label="Wave Height" value="1.5 m" />
              <StatRow label="Wave Period" value="6.45 s" />
              <StatRow label="Ops Risk" value="MEDIUM" />
            </Panel>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <aside className="col-span-12 space-y-4 xl:col-span-2">
          <Panel title="LAYERS & FILTERS">
            <div className="space-y-6">
              <div>
                <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-slate-500">
                  TRACKING
                </p>
                <label className="flex items-center gap-3 rounded-[18px] border border-[#1a2235] bg-[#05070d] px-4 py-3 text-sm text-slate-200">
                  <input type="checkbox" defaultChecked />
                  Display all vessels
                </label>
              </div>

              <div>
                <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-slate-500">
                  SENSOR LAYERS
                </p>
                <div className="space-y-3 text-sm text-slate-300">
                  <LayerItem text="DAS (Distributed Acoustic Sensing - fiber vibration)" />
                  <LayerItem text="DTS (Distributed Temperature Sensing)" />
                  <LayerItem text="Smart cable sensors (embedded strain/pressure)" />
                  <LayerItem text="Fiber optic sensing (FiberSense-type systems)" />
                </div>
              </div>

              <div>
                <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-slate-500">
                  VESSEL FILTERS
                </p>
                <div className="space-y-3">
                  <SelectField label="RISK LEVEL" value="All" />
                  <SelectField label="VESSEL TYPE" value="All" />
                  <SelectField label="FLAG STATE / COUNTRY" value="All" />
                </div>
              </div>
            </div>
          </Panel>

          <Panel title="THREAT TOTALS">
            <div className="space-y-3">
              <TotalBox label="VISIBLE VESSELS" value="10000" />
              <TotalBox label="HIGH RISK" value="75" tone="red" />
              <TotalBox label="MEDIUM RISK" value="7907" tone="amber" />
              <TotalBox label="LOW RISK" value="2018" tone="green" />
            </div>
          </Panel>
        </aside>
      </div>
    </main>
  );
}

function Chip({ label, accent }: { label: string; accent?: "amber" }) {
  return (
    <span
      className={`rounded-full border px-3 py-2 font-mono text-[11px] tracking-[0.22em] ${
        accent === "amber"
          ? "border-amber-500/20 bg-amber-500/10 text-amber-300"
          : "border-white/10 bg-white/5 text-slate-300"
      }`}
    >
      {label}
    </span>
  );
}

function Tab({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`rounded-full px-5 py-2 font-mono text-[11px] tracking-[0.25em] ${
        active
          ? "border border-blue-500/30 bg-gradient-to-b from-blue-600 to-blue-700 text-white"
          : "border border-white/10 bg-[#0c1018] text-slate-300"
      }`}
    >
      {label}
    </button>
  );
}

function Pill({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "red" | "amber" | "green";
}) {
  const styles =
    tone === "red"
      ? "border-red-500/15 bg-red-500/10 text-red-300"
      : tone === "amber"
      ? "border-amber-500/15 bg-amber-500/10 text-amber-300"
      : tone === "green"
      ? "border-emerald-500/15 bg-emerald-500/10 text-emerald-300"
      : "border-white/10 bg-white/5 text-slate-300";

  return (
    <span className={`rounded-full border px-3 py-2 font-mono text-[11px] tracking-[0.25em] ${styles}`}>
      {label}
    </span>
  );
}

function Legend({
  text,
  color,
  ring = false,
}: {
  text: string;
  color?: string;
  ring?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      {ring ? (
        <span className="mt-1 h-3 w-3 rounded-full border border-blue-400" />
      ) : (
        <span className={`mt-1 h-3 w-3 rounded-full ${color ?? "bg-slate-400"}`} />
      )}
      <span>{text}</span>
    </div>
  );
}

function LayerItem({ text }: { text: string }) {
  return (
    <label className="flex items-start gap-3 rounded-[16px] border border-[#1a2235] bg-[#05070d] px-4 py-3">
      <input type="checkbox" defaultChecked className="mt-1" />
      <span className="leading-5">{text}</span>
    </label>
  );
}

function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] tracking-[0.22em] text-slate-500">
        {label}
      </p>
      <div className="flex items-center justify-between rounded-[16px] border border-[#1a2235] bg-[#05070d] px-4 py-3 text-sm text-slate-300">
        <span>{value}</span>
        <ChevronDown className="h-4 w-4 text-slate-500" />
      </div>
    </div>
  );
}

function TotalBox({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "red" | "amber" | "green";
}) {
  const border =
    tone === "red"
      ? "border-red-500/15 bg-red-500/5"
      : tone === "amber"
      ? "border-amber-500/15 bg-amber-500/5"
      : tone === "green"
      ? "border-emerald-500/15 bg-emerald-500/5"
      : "border-white/10 bg-[#05070d]";

  const labelColor =
    tone === "red"
      ? "text-red-950/50"
      : tone === "amber"
      ? "text-amber-950/50"
      : tone === "green"
      ? "text-emerald-950/50"
      : "text-slate-500";

  return (
    <div className={`rounded-[18px] border p-4 ${border}`}>
      <p className={`font-mono text-[11px] tracking-[0.28em] ${labelColor}`}>{label}</p>
      <p className="mt-2 text-[26px] font-black text-slate-100">{value}</p>
    </div>
  );
}