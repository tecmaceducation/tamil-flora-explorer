
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About E-Flora Tamil Nadu
        </h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                E-Flora Tamil Nadu is a comprehensive digital database dedicated to documenting 
                and preserving knowledge about the flowering plants, trees, and shrubs native 
                to Tamil Nadu. This initiative aims to create an accessible platform for 
                researchers, students, conservationists, and nature enthusiasts.
              </p>
              <p className="text-gray-700">
                Tamil Nadu, with its diverse ecosystems ranging from the Western Ghats to 
                coastal regions, hosts an incredible variety of plant species. Many of these 
                are endemic to the region and face conservation challenges due to habitat 
                loss and climate change.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission & Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-600">Our Mission</h3>
                  <p className="text-gray-700">
                    To create a comprehensive, scientifically accurate, and easily accessible 
                    database of Tamil Nadu's flora, supporting conservation efforts and 
                    educational initiatives while preserving traditional botanical knowledge.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-600">Our Vision</h3>
                  <p className="text-gray-700">
                    To become the definitive digital repository for Tamil Nadu's plant 
                    biodiversity, fostering scientific research, conservation awareness, 
                    and appreciation for the state's rich botanical heritage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive plant database with scientific and Tamil names</li>
                  <li>• Advanced search and filtering capabilities</li>
                  <li>• Detailed taxonomic information</li>
                  <li>• Conservation status tracking</li>
                  <li>• Habitat and distribution mapping</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Traditional and modern uses documentation</li>
                  <li>• High-quality botanical imagery</li>
                  <li>• Mobile-responsive design</li>
                  <li>• User contribution system</li>
                  <li>• Educational resources and glossary</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Sources & Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Our database is compiled from multiple authoritative sources including:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Botanical Survey of India (BSI) publications</li>
                <li>• Tamil Nadu State Forest Department records</li>
                <li>• Academic research papers and field studies</li>
                <li>• Herbarium specimens and verified collections</li>
                <li>• Traditional knowledge documentation</li>
              </ul>
              <p className="text-gray-700">
                All entries undergo rigorous verification by botanical experts to ensure 
                scientific accuracy and reliability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contributors & Acknowledgments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                This project is made possible through the collaborative efforts of:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold mb-2">Botanical Experts</h4>
                  <p>Leading botanists and taxonomists from various institutions</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Research Institutions</h4>
                  <p>Universities and botanical research centers across Tamil Nadu</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technology Partners</h4>
                  <p>Software developers and digital preservation specialists</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Future Developments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We are continuously working to enhance the platform with new features:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Interactive distribution maps</li>
                <li>• Mobile application for field use</li>
                <li>• AI-powered plant identification</li>
                <li>• Community contribution portal</li>
                <li>• Educational modules and quizzes</li>
                <li>• API for researchers and developers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
