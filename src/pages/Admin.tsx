
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockPlants } from "@/data/mockPlants";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Panel</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{mockPlants.length}</div>
                <div className="text-gray-600">Total Species</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">12</div>
                <div className="text-gray-600">Pending Reviews</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">3</div>
                <div className="text-gray-600">User Reports</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">156</div>
                <div className="text-gray-600">Registered Users</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">Add New Species</Button>
              <Button variant="outline" className="w-full">Manage Users</Button>
              <Button variant="outline" className="w-full">Review Submissions</Button>
              <Button variant="outline" className="w-full">Edit Glossary</Button>
              <Button variant="outline" className="w-full">System Settings</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>New species submitted</span>
                  <Badge variant="secondary">2 hours ago</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>User reported error</span>
                  <Badge variant="destructive">4 hours ago</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Image uploaded</span>
                  <Badge variant="secondary">6 hours ago</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>New user registered</span>
                  <Badge variant="default">8 hours ago</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
