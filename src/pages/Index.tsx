
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowDown } from "lucide-react";
import { mockPlants } from "@/data/mockPlants";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/plants?search=${encodeURIComponent(searchQuery)}`);
  };

  const featuredPlants = mockPlants.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            E-Flora of Tamil Nadu
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the rich botanical diversity of Tamil Nadu. Explore flowering plants, 
            trees, and shrubs native to this beautiful state with our comprehensive digital flora database.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by scientific name, Tamil name, or family..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                Search
              </Button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/plants">
              <Button variant="outline" size="lg">Browse All Plants</Button>
            </Link>
            <Link to="/glossary">
              <Button variant="outline" size="lg">Botanical Terms</Button>
            </Link>
            <Link to="/help">
              <Button variant="outline" size="lg">Search Guide</Button>
            </Link>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-green-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* Featured Species */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Species
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPlants.map((plant) => (
              <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${plant.images[0]})` }}>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    <em>{plant.scientific_name}</em>
                  </CardTitle>
                  <p className="text-green-600 font-medium">{plant.tamil_name}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{plant.family}</Badge>
                    {plant.is_endemic && <Badge className="bg-orange-100 text-orange-800">Endemic</Badge>}
                    <Badge variant={plant.conservation_status === 'LC' ? 'default' : 'destructive'}>
                      {plant.conservation_status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {plant.description}
                  </p>
                  <Link to={`/plants/${plant.id}`}>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/plants">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Explore All {mockPlants.length} Species
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600">{mockPlants.length}</div>
              <div className="text-gray-600">Total Species</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">
                {mockPlants.filter(p => p.is_endemic).length}
              </div>
              <div className="text-gray-600">Endemic Species</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">
                {new Set(mockPlants.map(p => p.family)).size}
              </div>
              <div className="text-gray-600">Plant Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">
                {mockPlants.filter(p => p.tags?.includes('medicinal')).length}
              </div>
              <div className="text-gray-600">Medicinal Plants</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
