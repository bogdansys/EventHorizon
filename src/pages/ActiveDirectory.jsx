import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, GitBranch } from 'lucide-react';

const ActiveDirectory = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">Active Directory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <Shield className="mr-2 h-6 w-6" />
              AD Exploitation Cheat Sheet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Comprehensive cheat sheet for Active Directory exploitation techniques.</p>
          </CardContent>
          <CardFooter>
            <Link to="/active-directory/ad-exploitation-cheat-sheet">
              <Link to="/active-directory/oscp-ad-cheat-sheet">
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View Cheat Sheet
                </Button>
              </Link>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <FileText className="mr-2 h-6 w-6" />
              OSCP AD Cheat Sheet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Active Directory attack techniques used in OSCP certification.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              View Cheat Sheet
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <GitBranch className="mr-2 h-6 w-6" />
              WADComs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Interactive cheat sheet for Windows/AD environments.</p>
          </CardContent>
          <CardFooter>
            <Link to="/active-directory/wadcoms">
              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Explore WADComs
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Add more cards for other AD resources */}
      </div>
    </div>
  );
};

export default ActiveDirectory;
