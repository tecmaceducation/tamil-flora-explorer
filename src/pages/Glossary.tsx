
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

const glossaryTerms = [
  {
    term: "Alternate",
    definition: "Leaf arrangement where leaves are arranged singly at each node, not opposite or whorled."
  },
  {
    term: "Axil",
    definition: "The angle between a leaf and the stem from which it grows."
  },
  {
    term: "Blade",
    definition: "The expanded, flat portion of a leaf."
  },
  {
    term: "Bract",
    definition: "A specialized leaf associated with a flower or inflorescence, often different in size, shape, or color from regular leaves."
  },
  {
    term: "Calyx",
    definition: "The outermost whorl of flower parts, composed of sepals."
  },
  {
    term: "Corolla",
    definition: "The collective term for the petals of a flower."
  },
  {
    term: "Deciduous",
    definition: "Plants that shed their leaves annually, typically in response to seasonal changes."
  },
  {
    term: "Drupe",
    definition: "A fleshy fruit with a hard stone or pit containing the seed (e.g., mango, coconut)."
  },
  {
    term: "Endemic",
    definition: "Species that are native and restricted to a particular geographic region."
  },
  {
    term: "Evergreen",
    definition: "Plants that retain their leaves throughout the year."
  },
  {
    term: "Family",
    definition: "A taxonomic category ranking below order and above genus, grouping related genera."
  },
  {
    term: "Genus",
    definition: "A taxonomic category ranking below family and above species, grouping closely related species."
  },
  {
    term: "Habitat",
    definition: "The natural environment where an organism lives and meets its needs."
  },
  {
    term: "Inflorescence",
    definition: "A cluster or arrangement of flowers on a plant."
  },
  {
    term: "Lanceolate",
    definition: "Lance-shaped; much longer than wide, broadest below the middle and tapering to the apex."
  },
  {
    term: "Node",
    definition: "The point on a stem where leaves, branches, or aerial roots originate."
  },
  {
    term: "Opposite",
    definition: "Leaf arrangement where two leaves are attached at each node, directly across from each other."
  },
  {
    term: "Ovate",
    definition: "Egg-shaped with the broader end at the base."
  },
  {
    term: "Palmate",
    definition: "Having lobes, leaflets, or veins radiating from a common point, like fingers from a palm."
  },
  {
    term: "Perennial",
    definition: "Plants that live for more than two years, typically flowering and fruiting repeatedly."
  },
  {
    term: "Petiole",
    definition: "The stalk that attaches a leaf blade to the stem."
  },
  {
    term: "Pinnate",
    definition: "Having leaflets arranged on either side of a common axis, like a feather."
  },
  {
    term: "Raceme",
    definition: "An unbranched, elongated inflorescence with pediceled flowers arranged along the main axis."
  },
  {
    term: "Sepal",
    definition: "Individual segments of the calyx, typically green and leaf-like structures that protect the flower bud."
  },
  {
    term: "Simple",
    definition: "A leaf that is not divided into separate leaflets."
  },
  {
    term: "Species",
    definition: "The basic unit of biological classification; organisms that can interbreed and produce fertile offspring."
  },
  {
    term: "Stamen",
    definition: "The male reproductive organ of a flower, consisting of an anther and filament."
  },
  {
    term: "Succulent",
    definition: "Plants with thick, fleshy tissues adapted to store water."
  },
  {
    term: "Terminal",
    definition: "Located at the tip or end of a stem or branch."
  },
  {
    term: "Whorl",
    definition: "An arrangement of three or more leaves, flowers, or other organs at a single node."
  }
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Botanical Glossary
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Essential botanical terms and definitions for understanding plant descriptions
        </p>
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search terms and definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredTerms.length} of {glossaryTerms.length} terms
        </p>

        {/* Glossary Terms */}
        <div className="grid gap-4">
          {filteredTerms.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-700">{item.term}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700">{item.definition}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No terms found matching your search.</p>
          </div>
        )}

        {/* Additional Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>About This Glossary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              This glossary contains essential botanical terms used throughout the E-Flora Tamil Nadu database. 
              Understanding these terms will help you better interpret plant descriptions and scientific literature.
            </p>
            <p className="text-gray-700">
              If you encounter unfamiliar terms not listed here, please contact us and we'll consider adding them to this glossary.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Glossary;
