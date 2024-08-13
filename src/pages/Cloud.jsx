import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database } from 'lucide-react';

const CloudPentesting = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">Cloud Pentesting</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">Kubernetes Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-orange-500">
                <Cloud className="mr-2 h-6 w-6" />
                Awesome K8s Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Collection of Kubernetes security resources.</p>
            </CardContent>
            <CardFooter>
              <Link to="/cloud/awesome-k8s-security">
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View Resources
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-orange-500">
                <Server className="mr-2 h-6 w-6" />
                Kubetools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Kubernetes security tools collection.</p>
            </CardContent>
            <CardFooter>
              <Link to="/cloud/kubetools">
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  Explore Tools
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-orange-500">
                <Cloud className="mr-2 h-6 w-6" />
                Kubernetes Goat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Vulnerable-by-Design Kubernetes cluster for training.</p>
            </CardContent>
            <CardFooter>
              <Link to="/cloud/kubernetes-goat">
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  Start Training
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">Azure Security</h2>
        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <Database className="mr-2 h-6 w-6" />
              Awesome Azure Pentest
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Curated list of tools and resources for Azure penetration testing.</p>
          </CardContent>
          <CardFooter>
            <Link to="/cloud/awesome-azure-pentest">
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

export default CloudPentesting;
