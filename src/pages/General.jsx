import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Terminal, Command, Video } from 'lucide-react';

const General = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">General Cheat Sheets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <FileText className="mr-2 h-6 w-6" />
              The Hackers' Choice Tips & Tricks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Essential tips and tricks for hackers, compiled by The Hackers' Choice.</p>
          </CardContent>
          <CardFooter>
            <Link to="/general/hackers-choice">
              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                View Cheat Sheet
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <Terminal className="mr-2 h-6 w-6" />
              Docker Cheat Sheet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Comprehensive guide for Docker commands and best practices.</p>
          </CardContent>
          <CardFooter>
            <Link to="/general/docker">
              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                View Cheat Sheet
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <Command className="mr-2 h-6 w-6" />
              PowerShell Cheat Sheet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Quick reference guide for PowerShell commands and scripting.</p>
          </CardContent>
          <CardFooter>
            <Link to="/general/powershell">
              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                View Cheat Sheet
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <Video className="mr-2 h-6 w-6" />
              Security Talks and Videos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Curated list of security talks, videos, and conference archives.</p>
          </CardContent>
          <CardFooter>
            <Link to="/general/security-talks">
              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Explore Resources
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default General;
