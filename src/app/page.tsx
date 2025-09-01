const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1400px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold">Welcome to my website</h1>
            <p className="text-lg">This is a simple website built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1400px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Services Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1400px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1400px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex items-center justify-center h-[80vh] w-full px-[18px]">
        <div className="container mx-auto h-full max-w-[1400px] border-x-[0.5px] border-border-light dark:border-border-dark px-[10px]">
        </div>
      </section>
    </div>
  );
};

export default Home;