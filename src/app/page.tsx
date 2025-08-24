const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to The 7th Lab</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Advancing science through innovative research and cutting-edge technology
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About Our Lab</h2>
            <p className="text-lg text-gray-600 mb-8">
              The 7th Lab is a premier research facility dedicated to pushing the boundaries of scientific discovery. 
              Our team of experts works across multiple disciplines to solve complex challenges and create innovative solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">10+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Years of Research</h3>
                <p className="text-gray-600">Decades of groundbreaking discoveries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">50+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Research Papers</h3>
                <p className="text-gray-600">Published in top-tier journals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">25+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Members</h3>
                <p className="text-gray-600">Dedicated researchers and scientists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of research and development services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-blue-600 text-xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Laboratory Testing</h3>
              <p className="text-gray-600">
                Comprehensive testing and analysis services using state-of-the-art equipment and methodologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
              <p className="text-gray-600">
                Advanced statistical analysis and data interpretation for research projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-green-600 text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation Consulting</h3>
              <p className="text-gray-600">
                Strategic consulting to help organizations implement innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest research initiatives and breakthrough projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quantum Computing Research</h3>
                <p className="text-gray-600 mb-4">
                  Exploring the frontiers of quantum computing and its applications in scientific research.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Biotechnology Advancements</h3>
                <p className="text-gray-600 mb-4">
                  Developing cutting-edge biotechnological solutions for healthcare and agriculture.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-12">
              Ready to collaborate or learn more about our research? We'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">info@the7thlab.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;