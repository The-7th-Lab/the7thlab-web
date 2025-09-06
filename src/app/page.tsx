const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-[90vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1080px] border-border-light dark:border-border-dark px-[10px] relative">
          {/* Attention Banner */}
          <div className="absolute top-0 left-0 right-0 z-20 dark:bg-Night px-4 py-3">
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-Vermilion">Latest</span> AI Gateway is now generally available • Global hackathon now live
              </span>
              <button className="px-4 py-1.5 bg-Vermilion text-White text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors duration-200">
                explore
              </button>
            </div>
          </div>
          {/* 12x12 Grid Background */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0 pointer-events-none">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={i}
                className="border-r border-b border-border-light dark:border-border-dark"
                style={{
                  //borderRightWidth: (i + 1) % 12 === 0 ? '0px' : '1px',
                  //borderBottomWidth: i >= 132 ? '0px' : '1px'
                }}
              />
            ))}
          </div>
          
          <div className="flex flex-col items-center justify-center h-full relative z-10">
            <h1 className="text-4xl font-bold">Welcome to my website</h1>
            <p className="text-lg">This is a simple website built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Services Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1080px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>
    </div>
  );
};

export default Home;