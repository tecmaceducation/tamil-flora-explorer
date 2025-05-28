
import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter } from "lucide-react";
import { mockPlants, families, conservationStatuses, habitats } from "@/data/mockPlants";
import { Plant, PlantFilter } from "@/types/plant";

const Plants = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [filters, setFilters] = useState<PlantFilter>({});
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 12;

  const filteredPlants = useMemo(() => {
    let result = mockPlants;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(plant => 
        plant.scientific_name.toLowerCase().includes(query) ||
        plant.tamil_name.toLowerCase().includes(query) ||
        plant.family.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (filters.family) {
      result = result.filter(plant => plant.family === filters.family);
    }
    if (filters.conservation_status) {
      result = result.filter(plant => plant.conservation_status === filters.conservation_status);
    }
    if (filters.habitat) {
      result = result.filter(plant => plant.habitat.includes(filters.habitat));
    }
    if (filters.is_endemic !== undefined) {
      result = result.filter(plant => plant.is_endemic === filters.is_endemic);
    }
    if (filters.is_medicinal) {
      result = result.filter(plant => plant.tags?.includes('medicinal'));
    }

    return result;
  }, [searchQuery, filters]);

  const paginatedPlants = useMemo(() => {
    const startIndex = (currentPage - 1) * plantsPerPage;
    return filteredPlants.slice(startIndex, startIndex + plantsPerPage);
  }, [filteredPlants, currentPage]);

  const totalPages = Math.ceil(filteredPlants.length / plantsPerPage);

  const resetFilters = () => {
    setFilters({});
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Plant Database</h1>
          
          {/* Search Bar */}
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Family</label>
                  <Select value={filters.family || ""} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, family: value || undefined }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="All families" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All families</SelectItem>
                      {families.map(family => (
                        <SelectItem key={family} value={family}>{family}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Conservation Status</label>
                  <Select value={filters.conservation_status || ""} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, conservation_status: value || undefined }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="All statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All statuses</SelectItem>
                      {conservationStatuses.map(status => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Habitat</label>
                  <Select value={filters.habitat || ""} onValueChange={(value) => 
                    setFilters(prev => ({ ...prev, habitat: value || undefined }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="All habitats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All habitats</SelectItem>
                      {habitats.map(habitat => (
                        <SelectItem key={habitat} value={habitat}>{habitat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium">Special Categories</label>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="endemic"
                      checked={filters.is_endemic || false}
                      onCheckedChange={(checked) => 
                        setFilters(prev => ({ ...prev, is_endemic: checked as boolean }))
                      }
                    />
                    <label htmlFor="endemic" className="text-sm">Endemic Species</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="medicinal"
                      checked={filters.is_medicinal || false}
                      onCheckedChange={(checked) => 
                        setFilters(prev => ({ ...prev, is_medicinal: checked as boolean }))
                      }
                    />
                    <label htmlFor="medicinal" className="text-sm">Medicinal Plants</label>
                  </div>
                </div>

                <div className="flex items-end">
                  <Button variant="outline" onClick={resetFilters} className="w-full">
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Results Summary */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {paginatedPlants.length} of {filteredPlants.length} plants
            </p>
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {paginatedPlants.map((plant) => (
            <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" 
                   style={{ backgroundImage: `url(${plant.images[0]})` }}>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">
                  <em>{plant.scientific_name}</em>
                </CardTitle>
                <p className="text-green-600 font-medium text-sm">{plant.tamil_name}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="secondary" className="text-xs">{plant.family}</Badge>
                  {plant.is_endemic && (
                    <Badge className="bg-orange-100 text-orange-800 text-xs">Endemic</Badge>
                  )}
                  <Badge variant={plant.conservation_status === 'LC' ? 'default' : 'destructive'} className="text-xs">
                    {plant.conservation_status}
                  </Badge>
                </div>
                <Link to={`/plants/${plant.id}`}>
                  <Button variant="outline" size="sm" className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="w-10"
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plants;
