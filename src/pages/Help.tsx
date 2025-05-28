
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Filter, Book } from "lucide-react";

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Help & User Guide
        </h1>
        
        {/* Quick Start Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Quick Start Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Search</h3>
                <p className="text-sm text-gray-600">
                  Use the search bar to find plants by scientific name, Tamil name, or family
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Filter</h3>
                <p className="text-sm text-gray-600">
                  Apply filters to narrow down results by conservation status, habitat, or other criteria
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Explore</h3>
                <p className="text-sm text-gray-600">
                  Click on any plant to view detailed information, images, and uses
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I search for plants?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">You can search for plants in several ways:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Scientific name:</strong> Enter the Latin binomial name (e.g., "Delonix regia")</li>
                    <li>• <strong>Tamil name:</strong> Use the local Tamil name (e.g., "மயில் அசோகம்")</li>
                    <li>• <strong>Family name:</strong> Search by plant family (e.g., "Fabaceae")</li>
                    <li>• <strong>Common terms:</strong> Use descriptive words found in plant descriptions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do the filters work?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">Filters help you narrow down search results:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Family:</strong> Filter by taxonomic family</li>
                    <li>• <strong>Conservation Status:</strong> Show plants by threat level (LC, NT, VU, EN, CR)</li>
                    <li>• <strong>Habitat:</strong> Filter by where plants naturally grow</li>
                    <li>• <strong>Endemic Species:</strong> Show only plants native to Tamil Nadu</li>
                    <li>• <strong>Medicinal Plants:</strong> Display plants with therapeutic uses</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What do the conservation status codes mean?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm">
                    <div><strong>LC - Least Concern:</strong> Stable populations, no immediate threat</div>
                    <div><strong>NT - Near Threatened:</strong> May become threatened in the near future</div>
                    <div><strong>VU - Vulnerable:</strong> High risk of extinction in the wild</div>
                    <div><strong>EN - Endangered:</strong> Very high risk of extinction</div>
                    <div><strong>CR - Critically Endangered:</strong> Extremely high risk of extinction</div>
                    <div><strong>EW - Extinct in the Wild:</strong> Only survives in cultivation</div>
                    <div><strong>EX - Extinct:</strong> No living individuals remain</div>
                    <div><strong>DD - Data Deficient:</strong> Insufficient information for assessment</div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I save my favorite plants?</AccordionTrigger>
                <AccordionContent>
                  <p>Yes! After registering for an account, you can:</p>
                  <ul className="space-y-2 text-sm text-gray-600 mt-3">
                    <li>• Save plants to your favorites list</li>
                    <li>• Add personal notes to plant entries</li>
                    <li>• Access your saved plants from the dashboard</li>
                    <li>• Export your plant lists for research</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How can I contribute to the database?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3">We welcome contributions from botanists and researchers:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Submit new plant records with proper documentation</li>
                    <li>• Report errors or suggest corrections to existing entries</li>
                    <li>• Provide high-quality photographs of plants</li>
                    <li>• Share traditional knowledge about plant uses</li>
                    <li>• Contact us through the contact form to get involved</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What makes a plant "endemic" to Tamil Nadu?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    An endemic plant species is one that occurs naturally only in Tamil Nadu 
                    and nowhere else in the world. These species evolved in isolation and are 
                    often found in specific habitats like the Western Ghats. Endemic species 
                    are particularly important for conservation as they represent unique 
                    evolutionary heritage that could be lost forever if their habitats are destroyed.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Search Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Advanced Search Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-600">Search Strategies</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Use partial words for broader results</li>
                  <li>• Try alternative spellings for Tamil names</li>
                  <li>• Search by plant uses (e.g., "medicinal", "timber")</li>
                  <li>• Combine multiple filters for precise results</li>
                  <li>• Use botanical terms from our glossary</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-600">Filter Combinations</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Endemic + Endangered = Priority conservation species</li>
                  <li>• Family + Habitat = Ecological associations</li>
                  <li>• Medicinal + Conservation status = Traditional medicine at risk</li>
                  <li>• Flowering period + Habitat = Seasonal field guides</li>
                  <li>• Multiple families = Comparative studies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="w-5 h-5" />
              Additional Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Within this site</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <a href="/glossary" className="text-green-600 hover:underline">Botanical Glossary</a> - Essential terms and definitions</li>
                  <li>• <a href="/about" className="text-green-600 hover:underline">About the Project</a> - Background and methodology</li>
                  <li>• <a href="/contact" className="text-green-600 hover:underline">Contact Us</a> - Get help or report issues</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">External Resources</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Botanical Survey of India (BSI)</li>
                  <li>• Tamil Nadu Forest Department</li>
                  <li>• ENVIS Centre on Biodiversity</li>
                  <li>• India Biodiversity Portal</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
