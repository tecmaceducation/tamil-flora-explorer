
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowDown, Leaf, TreePine, Flower } from "lucide-react";
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
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop)`
        }}>
        
        {/* Floating Flora Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Leaf className="absolute top-20 left-10 w-6 h-6 text-green-300 opacity-60 animate-bounce" style={{ animationDelay: '0s' }} />
          <TreePine className="absolute top-32 right-16 w-8 h-8 text-green-400 opacity-50 animate-bounce" style={{ animationDelay: '1s' }} />
          <Flower className="absolute bottom-40 left-20 w-7 h-7 text-green-200 opacity-40 animate-bounce" style={{ animationDelay: '2s' }} />
          <Leaf className="absolute bottom-60 right-24 w-5 h-5 text-green-300 opacity-70 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-scale-in">
              E-Flora of Tamil Nadu
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto drop-shadow-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Discover the rich botanical diversity of Tamil Nadu. Explore flowering plants, 
              trees, and shrubs native to this beautiful state with our comprehensive digital flora database.
            </p>
          </div>
          
          {/* Search Bar with Animation */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search by scientific name, Tamil name, or family..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-14 text-lg bg-white/90 backdrop-blur-sm border-2 border-white/20 focus:border-green-300 transition-all duration-300 hover:bg-white/95"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700 px-8 h-14 transition-all duration-300 hover:scale-105">
                  Search
                </Button>
              </div>
            </form>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Link to="/plants">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Browse All Plants
              </Button>
            </Link>
            <Link to="/glossary">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Botanical Terms
              </Button>
            </Link>
            <Link to="/help">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                Search Guide
              </Button>
            </Link>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white mx-auto drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* Featured Species with Forest Background */}
      <section className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop)`
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Species
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of the remarkable flora that makes Tamil Nadu's biodiversity so unique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPlants.map((plant, index) => (
              <Card key={plant.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
                <div className="h-56 bg-cover bg-center transition-transform duration-500 hover:scale-110" 
                     style={{ backgroundImage: `url(${plant.images[0]})` }}>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    <em className="text-gray-800">{plant.scientific_name}</em>
                  </CardTitle>
                  <p className="text-green-600 font-medium text-lg">{plant.tamil_name}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="transition-colors hover:bg-gray-200">{plant.family}</Badge>
                    {plant.is_endemic && <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors">Endemic</Badge>}
                    <Badge variant={plant.conservation_status === 'LC' ? 'default' : 'destructive'} className="transition-colors">
                      {plant.conservation_status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {plant.description}
                  </p>
                  <Link to={`/plants/${plant.id}`}>
                    <Button variant="outline" className="w-full hover:bg-green-50 hover:border-green-300 transition-all duration-300">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Link to="/plants">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 px-8 py-3">
                Explore All {mockPlants.length} Species
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics with Animated Counters */}
      <section className="py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.9), rgba(22, 163, 74, 0.8)), url(https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2000&auto=format&fit=crop)`
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">{mockPlants.length}</div>
              <div className="text-green-100 text-lg font-medium">Total Species</div>
            </div>
            <div className="animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {mockPlants.filter(p => p.is_endemic).length}
              </div>
              <div className="text-green-100 text-lg font-medium">Endemic Species</div>
            </div>
            <div className="animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {new Set(mockPlants.map(p => p.family)).size}
              </div>
              <div className="text-green-100 text-lg font-medium">Plant Families</div>
            </div>
            <div className="animate-fade-in hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.7s' }}>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {mockPlants.filter(p => p.tags?.includes('medicinal')).length}
              </div>
              <div className="text-green-100 text-lg font-medium">Medicinal Plants</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
