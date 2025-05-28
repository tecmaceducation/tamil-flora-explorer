
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockPlants } from "@/data/mockPlants";

const Dashboard = () => {
  // Mock user data
  const savedPlants = mockPlants.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Stats */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Your Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saved Plants</span>
                    <span className="font-semibold">{savedPlants.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Notes Created</span>
                    <span className="font-semibold">7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Searches This Month</span>
                    <span className="font-semibold">23</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Type</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-3">Free User</Badge>
                <p className="text-sm text-gray-600 mb-4">
                  Upgrade to PRO for advanced features like detailed notes, 
                  export capabilities, and exclusive content.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Upgrade to PRO
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Saved Plants */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Saved Plants</CardTitle>
              </CardHeader>
              <CardContent>
                {savedPlants.length > 0 ? (
                  <div className="space-y-4">
                    {savedPlants.map((plant) => (
                      <div key={plant.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-16 h-16 bg-cover bg-center rounded-md" 
                             style={{ backgroundImage: `url(${plant.images[0]})` }}>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">
                            <em>{plant.scientific_name}</em>
                          </h3>
                          <p className="text-green-600 text-sm">{plant.tamil_name}</p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">{plant.family}</Badge>
                            {plant.is_endemic && (
                              <Badge className="bg-orange-100 text-orange-800 text-xs">Endemic</Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" variant="outline">Remove</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">You haven't saved any plants yet.</p>
                    <Button variant="outline">Browse Plants</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
