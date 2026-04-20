function Home() {
  return (
    <div className="space-y-16">

      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-bold leading-tight">
          Smart Resource Allocation
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A data-driven platform that connects NGOs with the right volunteers 
          based on skills, urgency, and location.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="/ngo" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            Post a Need
          </a>
          <a href="/volunteer" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg">
            Find Work
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="font-semibold text-lg mb-2">Smart Matching</h3>
          <p className="text-gray-400 text-sm">
            Automatically match volunteers with needs using scoring logic.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="font-semibold text-lg mb-2">Urgency Prioritization</h3>
          <p className="text-gray-400 text-sm">
            Critical needs are surfaced first to maximize impact.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="font-semibold text-lg mb-2">Location Awareness</h3>
          <p className="text-gray-400 text-sm">
            Match volunteers based on proximity and availability.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-900 rounded-xl p-8 border border-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-blue-400 text-2xl mb-2">1</div>
            <p className="text-gray-400 text-sm">NGOs post their needs</p>
          </div>

          <div>
            <div className="text-blue-400 text-2xl mb-2">2</div>
            <p className="text-gray-400 text-sm">Volunteers enter skills</p>
          </div>

          <div>
            <div className="text-blue-400 text-2xl mb-2">3</div>
            <p className="text-gray-400 text-sm">System finds best matches</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;