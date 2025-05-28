
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, Home } from "lucide-react";
import { mockPlants } from "@/data/mockPlants";

const PlantDetail = () => {
  const { id } = useParams();
  const plant = mockPlants.find(p => p.id === id);

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Plant Not Found</h1>
          <Link to="/plants">
            <Button>Back to Plants</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LC': return 'bg-green-100 text-green-800';
      case 'NT': return 'bg-yellow-100 text-yellow-800';
      case 'VU': return 'bg-orange-100 text-orange-800';
      case 'EN': return 'bg-red-100 text-red-800';
      case 'CR': return 'bg-red-200 text-red-900';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="flex items-center hover:text-green-600">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <span>/</span>
          <Link to="/plants" className="hover:text-green-600">Plants</Link>
          <span>/</span>
          <span className="text-gray-800">{plant.scientific_name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="h-96 bg-cover bg-center" 
                   style={{ backgroundImage: `url(${plant.images[0]})` }}>
              </div>
            </Card>
          </div>

          {/* Plant Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  <em>{plant.scientific_name}</em>
                </CardTitle>
                <p className="text-xl text-green-600 font-medium">{plant.tamil_name}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{plant.family}</Badge>
                  {plant.is_endemic && (
                    <Badge className="bg-orange-100 text-orange-800">Endemic to Tamil Nadu</Badge>
                  )}
                  <Badge className={getStatusColor(plant.conservation_status)}>
                    {plant.conservation_status}
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Family</h4>
                    <p className="text-gray-600">{plant.family}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Conservation Status</h4>
                    <p className="text-gray-600">
                      {plant.conservation_status} - {
                        plant.conservation_status === 'LC' ? 'Least Concern' :
                        plant.conservation_status === 'NT' ? 'Near Threatened' :
                        plant.conservation_status === 'EN' ? 'Endangered' :
                        plant.conservation_status === 'VU' ? 'Vulnerable' :
                        plant.conservation_status === 'CR' ? 'Critically Endangered' :
                        'Data Deficient'
                      }
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Flowering Period</h4>
                    <p className="text-gray-600">{plant.flowering_period}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800">Fruiting Period</h4>
                    <p className="text-gray-600">{plant.fruiting_period}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Save to Favorites
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Details
                  </Button>
                  <Button variant="outline" className="w-full">
                    Report Error
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{plant.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Habitat & Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Habitat</h4>
                <p className="text-gray-700">{plant.habitat}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Distribution</h4>
                <p className="text-gray-700">{plant.distribution}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Uses & Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{plant.uses}</p>
              {plant.tags && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {plant.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Taxonomy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-y-2">
                <span className="font-medium">Family:</span>
                <span>{plant.family}</span>
                <span className="font-medium">Scientific Name:</span>
                <span><em>{plant.scientific_name}</em></span>
                <span className="font-medium">Tamil Name:</span>
                <span>{plant.tamil_name}</span>
                <span className="font-medium">Endemic:</span>
                <span>{plant.is_endemic ? 'Yes' : 'No'}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link to="/plants">
            <Button variant="outline">← Back to Plants</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantDetail;
