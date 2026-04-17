import { ChevronDown, MapPinned, Shield, SlidersHorizontal } from "lucide-react";

const alerts = [
  {
    title: "Elevated marine conditions in Bermuda",
    meta: "Wave 1.5 m • Wind 21.7 km/h",
    time: "LIVE",
    level: "MEDIUM",
  },
  {
    title: "Vessel 244376506 loitering in monitored waters",
    meta: "Research • UK • Loitering",
    time: "14 MIN AGO",
    level: "MEDIUM",
  },
  {
    title: "Vessel 244620992 loitering in monitored waters",
    meta: "Patrol • UK • Loitering",
    time: "40 MIN AGO",
    level: "MEDIUM",
  },
];

function MetalPanel({
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
      className={`rounded-[28px] border border-[#7a5a36]/35 bg-[linear-gradient(180deg,rgba(205,165,110,0.18),rgba(38,25,18,0.92)_38%,rgba(10,8,7,0.98))] shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,240,214,0.15)] ${className}`}
    >
      {title ? (
        <div className="border-b border-white/8 px-5 py-4">
          <h2 className="font-mono text-[16px] font-extrabold tracking-[0.14em] text-[#f5e6d2]">
            {title}
          </h2>
        </div>
      ) : null}
      <div className="p-5">{children}</div>
    </section>
  );
}

function CopperBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#c89a5b]/30 bg-[#d3a15a]/12 px-3 py-1 text-[10px] font-bold tracking-[0.25em] text-[#f6d9af]">
      {children}
    </span>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/8 py-4 last:border-b-0">
      <span className="text-[17px] text-[#e7d7c0]">{label}</span>
      <span className="text-[17px] font-semibold text-[#fff3e3]">{value}</span>
    </div>
  );
}

export default function Dashboard() {
  return (
    <main className="min-h-screen px-4 py-4 text-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-4">
        {/* LEFT */}
        <aside className="col-span-12 space-y-4 xl:col-span-2">
          <MetalPanel title="LIVE ALERTS">
            <div className="space-y-3">
              {alerts.map((a, i) => (
                <div
                  key={i}
                  className="rounded-[18px] border border-[#8a643b]/30 bg-[#130d0a]/80 p-4 shadow-[inset_0_1px_0_rgba(255,240,214,0.05)]"
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <p className="text-[15px] font-semibold leading-5 text-[#fff2e0]">
                      {a.title}
                    </p>
                    <CopperBadge>{a.level}</CopperBadge>
                  </div>
                  <p className="text-[13px] text-[#c2a98a]">{a.meta}</p>
                  <p className="mt-3 font-mono text-[10px] tracking-[0.28em] text-[#9d8569]">
                    {a.time}
                  </p>
                </div>
              ))}
            </div>
          </MetalPanel>

          <MetalPanel title="LIVE VESSEL FEED">
            <div className="space-y-3">
              {["Vessel 219018526", "Vessel 311000411", "Vessel 245042000"].map(
                (v, i) => (
                  <div
                    key={i}
                    className="rounded-[18px] border border-[#8a643b]/25 bg-[#130d0a]/80 p-4"
                  >
                    <p className="text-[15px] font-semibold text-[#fff2e0]">{v}</p>
                    <p className="mt-1 text-[13px] text-[#c2a98a]">
                      Research • UK
                    </p>
                    <p className="mt-3 font-mono text-[10px] tracking-[0.28em] text-[#9d8569]">
                      LAST UPDATE: LIVE
                    </p>
                  </div>
                )
              )}
            </div>
          </MetalPanel>
        </aside>

        {/* CENTER */}
        <section className="col-span-12 space-y-4 xl:col-span-8">
          <MetalPanel>
            <div className="flex flex-col gap-6 border-b border-white/8 p-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-mono text-[11px] tracking-[0.35em] text-[#d7b37b]/60">
                  AUTONOMOUS MARITIME COMMAND LAYER
                </p>

                <div className="mt-2 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c89a5b]/25 bg-[linear-gradient(180deg,#d8b27c,#8b5a31)] text-2xl font-black text-[#2a160f] shadow-[0_0_25px_rgba(196,141,74,0.2)]">
                    S
                  </div>
                  <h1 className="text-5xl font-black tracking-tight text-[#fff1df]">
                    SENTINEL OS
                  </h1>
                </div>

                <p className="mt-2 max-w-3xl text-[15px] leading-7 text-[#ceb79a]">
                  Mission control for subsea infrastructure protection, vessel anomaly
                  tracking, and landing-zone defense visibility.
                </p>
              </div>

              <button className="inline-flex h-11 items-center gap-2 rounded-full border border-[#c89a5b]/25 bg-[#2b1a12] px-5 text-sm font-semibold text-[#f7e7d0] shadow-[inset_0_1px_0_rgba(255,240,214,0.12)]">
                <Shield className="h-4 w-4" />
                MISSION CONTROL
              </button>
            </div>

            <div className="grid gap-3 border-b border-white/8 p-5 lg:grid-cols-[1.7fr_140px]">
              <div className="flex items-center gap-3 rounded-[18px] border border-[#8a643b]/30 bg-[#130d0a]/80 px-4 py-3">
                <span className="whitespace-nowrap font-mono text-[11px] tracking-[0.32em] text-[#a98a67]">
                  OPERATIONAL LOCATION:
                </span>
                <input
                  className="w-full bg-transparent text-[13px] text-[#f7e7d0] outline-none placeholder:text-[#6f5940]"
                  placeholder="Enter city, region, or country"
                />
              </div>

              <button className="rounded-[18px] border border-[#c89a5b]/25 bg-[#2b1a12] px-4 py-3 text-sm font-semibold text-[#f7e7d0]">
                LOAD
              </button>
            </div>

            <div className="flex flex-wrap gap-3 px-5 pb-3 pt-0">
              <Chip label="AIR 20°C" />
              <Chip label="WIND 21.7 KM/H" />
              <Chip label="WAVE 1.5 M" />
              <Chip label="OPS RISK MEDIUM" accent />
              <Chip label="WATCHFLOOR ACTIVE" />
              <Chip label="BERMUDA SECTOR" />
            </div>

            <div className="px-5 pb-5">
              <p className="mb-3 font-mono text-[11px] tracking-[0.35em] text-[#b69b79]">
                VISIBLE VESSELS: 10000
              </p>

              <div className="overflow-hidden rounded-[28px] border border-[#8a643b]/25 bg-[#110b08]">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 rounded-full bg-[#b9a189]" />
                    <span className="font-mono text-[11px] tracking-[0.32em] text-[#c8af91]">
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

                <div className="relative h-[560px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,205,150,0.10),transparent_44%),linear-gradient(180deg,#3d2a1c_0%,#1a120e_40%,#090605_100%)]">
                  {/* copper map placeholder */}
                  <div className="absolute inset-0 opacity-95">
                    <div className="absolute left-[9%] top-[18%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.7)]" />
                    <div className="absolute left-[18%] top-[30%] h-2 w-2 rounded-full bg-blue-400" />
                    <div className="absolute left-[55%] top-[28%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.8)]" />
                    <div className="absolute left-[67%] top-[34%] h-2 w-2 rounded-full bg-blue-400" />
                    <div className="absolute left-[79%] top-[51%] h-3 w-3 rounded-full bg-blue-400" />
                    <div className="absolute left-[42%] top-[63%] h-2 w-2 rounded-full bg-amber-400" />
                    <div className="absolute left-[60%] top-[73%] h-2 w-2 rounded-full bg-slate-300" />

                    <svg className="absolute inset-0 h-full w-full">
                      <path
                        d="M 100 350 C 245 285, 380 260, 610 230"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.75"
                      />
                      <path
                        d="M 115 405 C 275 360, 430 335, 685 282"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.55"
                      />
                      <path
                        d="M 140 460 C 320 415, 540 395, 770 342"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.35"
                      />
                    </svg>
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-[20px] border border-black/40 bg-black/65 p-4 backdrop-blur-md">
                    <p className="mb-3 font-mono text-[11px] tracking-[0.28em] text-[#f0d9b8]">
                      MAP LEGEND
                    </p>
                    <div className="space-y-2 text-[13px] leading-5 text-[#e0c7a5]">
                      <Legend text="Amber line: submarine cable route" color="bg-amber-400" />
                      <Legend text="Blue dot: sea cable landing point" color="bg-blue-400" />
                      <Legend text="Red vessel dot: high risk" color="bg-red-400" />
                      <Legend text="Amber vessel dot: medium risk" color="bg-amber-400" />
                      <Legend text="Grey vessel dot: low risk" color="bg-slate-300" />
                    </div>
                  </div>

                  <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-white/95 text-black shadow-lg">
                    <button className="block border-b border-black/10 px-3 py-2 text-lg font-bold">+</button>
                    <button className="block px-3 py-2 text-lg font-bold">−</button>
                  </div>
                </div>
              </div>
            </div>
          </MetalPanel>

          <div className="grid gap-4 lg:grid-cols-2">
            <MetalPanel title="SYSTEM SUMMARY">
              <Row label="Tracked Vessels" value="10000" />
              <Row label="High Risk Contacts" value="75" />
              <Row label="Medium Risk Contacts" value="7907" />
              <Row label="Low Risk Contacts" value="2018" />
              <Row label="Cable Routes" value="21" />
            </MetalPanel>

            <MetalPanel title="MARINE CONDITIONS">
              <Row label="Location" value="Bermuda" />
              <Row label="Air Temp" value="20°C" />
              <Row label="Wind Speed" value="21.7 km/h" />
              <Row label="Wave Height" value="1.5 m" />
              <Row label="Wave Period" value="6.45 s" />
              <Row label="Ops Risk" value="MEDIUM" />
            </MetalPanel>
          </div>
        </section>

        {/* RIGHT */}
        <aside className="col-span-12 space-y-4 xl:col-span-2">
          <MetalPanel title="LAYERS & FILTERS">
            <div className="space-y-6">
              <div>
                <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-[#a98a67]">
                  TRACKING
                </p>
                <label className="flex items-center gap-3 rounded-[18px] border border-[#8a643b]/30 bg-[#130d0a]/80 px-4 py-3 text-sm text-[#f3e3cf]">
                  <input type="checkbox" defaultChecked />
                  Display all vessels
                </label>
              </div>

              <div>
                <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-[#a98a67]">
                  SENSOR LAYERS
                </p>
                <div className="space-y-3 text-sm text-[#e9d7c1]">
                  <LayerItem text="DAS (Distributed Acoustic Sensing - fiber vibration)" />
                  <LayerItem text="DTS (Distributed Temperature Sensing)" />
                  <LayerItem text="Smart cable sensors (embedded strain/pressure)" />
                  <LayerItem text="Fiber optic sensing (FiberSense-type systems)" />
                </div>
              </div>

              <div>
                <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-[#a98a67]">
                  VESSEL FILTERS
                </p>
                <div className="space-y-3">
                  <SelectField label="RISK LEVEL" value="All" />
                  <SelectField label="VESSEL TYPE" value="All" />
                  <SelectField label="FLAG STATE / COUNTRY" value="All" />
                </div>
              </div>
            </div>
          </MetalPanel>

          <MetalPanel title="THREAT TOTALS">
            <div className="space-y-3">
              <TotalBox label="VISIBLE VESSELS" value="10000" />
              <TotalBox label="HIGH RISK" value="75" tone="red" />
              <TotalBox label="MEDIUM RISK" value="7907" tone="amber" />
              <TotalBox label="LOW RISK" value="2018" tone="green" />
            </div>
          </MetalPanel>
        </aside>
      </div>
    </main>
  );
}

function Chip({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={`rounded-full border px-3 py-2 font-mono text-[11px] tracking-[0.22em] ${
        accent
          ? "border-amber-400/25 bg-amber-400/10 text-amber-200"
          : "border-white/10 bg-white/5 text-[#ead6bd]"
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
          ? "border border-[#c89a5b]/25 bg-gradient-to-b from-[#d4a86c] to-[#8b5a31] text-[#2a160f]"
          : "border border-white/10 bg-[#1b1310] text-[#e3cfb2]"
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
      ? "border-red-400/15 bg-red-400/10 text-red-200"
      : tone === "amber"
      ? "border-amber-400/15 bg-amber-400/10 text-amber-200"
      : tone === "green"
      ? "border-emerald-400/15 bg-emerald-400/10 text-emerald-200"
      : "border-white/10 bg-white/5 text-[#e3cfb2]";

  return (
    <span className={`rounded-full border px-3 py-2 font-mono text-[11px] tracking-[0.25em] ${styles}`}>
      {label}
    </span>
  );
}

function Legend({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-1 h-3 w-3 rounded-full ${color}`} />
      <span>{text}</span>
    </div>
  );
}

function LayerItem({ text }: { text: string }) {
  return (
    <label className="flex items-start gap-3 rounded-[16px] border border-[#8a643b]/25 bg-[#130d0a]/80 px-4 py-3">
      <input type="checkbox" defaultChecked className="mt-1" />
      <span className="leading-5">{text}</span>
    </label>
  );
}

function SelectField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] tracking-[0.22em] text-[#a98a67]">
        {label}
      </p>
      <div className="flex items-center justify-between rounded-[16px] border border-[#8a643b]/25 bg-[#130d0a]/80 px-4 py-3 text-sm text-[#f3e3cf]">
        <span>{value}</span>
        <ChevronDown className="h-4 w-4 text-[#9d8569]" />
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
      ? "border-red-400/15 bg-red-400/5"
      : tone === "amber"
      ? "border-amber-400/15 bg-amber-400/5"
      : tone === "green"
      ? "border-emerald-400/15 bg-emerald-400/5"
      : "border-white/10 bg-[#130d0a]/80";

  const labelColor =
    tone === "red"
      ? "text-red-200/45"
      : tone === "amber"
      ? "text-amber-200/45"
      : tone === "green"
      ? "text-emerald-200/45"
      : "text-[#a98a67]";

  return (
    <div className={`rounded-[18px] border p-4 ${border}`}>
      <p className={`font-mono text-[11px] tracking-[0.28em] ${labelColor}`}>{label}</p>
      <p className="mt-2 text-[26px] font-black text-[#fff1df]">{value}</p>
    </div>
  );
}