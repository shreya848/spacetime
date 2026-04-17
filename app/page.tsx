import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] flex items-center justify-center">
      
      <div className="w-[380px] bg-[#0b0f1a] border border-[#1a2235] rounded-2xl p-8">
        
        <h1 className="text-2xl font-semibold text-white mb-2">
          Customer Access
        </h1>

        <p className="text-sm text-gray-400 mb-6">
          Secure command-layer entry for subsea monitoring.
        </p>

        <input
          placeholder="Username"
          className="w-full mb-4 p-3 rounded-lg bg-[#05070d] border border-[#1a2235] text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-[#05070d] border border-[#1a2235] text-white"
        />

        <Link href="/dashboard">
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500">
            Enter Platform
          </button>
        </Link>

      </div>

    </main>
  );
}