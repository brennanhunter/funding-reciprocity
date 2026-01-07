export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex flex-col items-center justify-center gap-8 px-8 py-16 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-green-700 md:text-6xl">
            Under Development
          </h1>
          <div className="h-1 w-32 mx-auto bg-green-500 rounded"></div>
        </div>
        
        <div className="max-w-2xl space-y-6">
          <p className="text-xl text-green-800 md:text-2xl">
            This site is currently being built.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Visit <a href="https://justbegreenmedia.com" className="font-semibold text-green-600 hover:text-green-700 underline decoration-green-400 transition-colors">justbegreenmedia.com</a> to explore other sites in our network.
          </p>
        </div>
        
        <div className="mt-4 pt-8 border-t-2 border-green-100">
          <p className="text-sm text-gray-500">
            Check back soon for updates
          </p>
        </div>
      </main>
    </div>
  );
}
