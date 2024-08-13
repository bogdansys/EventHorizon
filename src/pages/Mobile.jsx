import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Tablet, Apple, Layers } from 'lucide-react';

const Mobile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-500">Mobile Pentesting</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">General Mobile Pentesting</h2>
        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <Smartphone className="mr-2 h-6 w-6" />
              Mobile App Pentest Cheat Sheet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Comprehensive guide for mobile application penetration testing.</p>
          </CardContent>
          <CardFooter>
            <Link to="/mobile/app-pentest-cheat-sheet">
              <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                View Cheat Sheet
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">Android Pentesting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-orange-500">
                <Tablet className="mr-2 h-6 w-6" />
                Android Pentest Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Comprehensive checklist for Android application penetration testing.</p>
            </CardContent>
            <CardFooter>
              <Link to="/mobile/android-pentest-checklist">
                <Link to="/mobile/ios-pentest-checklist">
                  <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    View Checklist
                  </Button>
                </Link>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-orange-500">
                <Smartphone className="mr-2 h-6 w-6" />
                MASTG
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">OWASP Mobile Application Security Testing Guide for Android.</p>
            </CardContent>
            <CardFooter>
              <Link to="/mobile/mastg">
                <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  View Guide
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-orange-400">iOS Pentesting</h2>
        <Card className="bg-gray-800 border-orange-500 border hover:shadow-orange-500/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-orange-500">
              <Apple className="mr-2 h-6 w-6" />
              iOS Pentest Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">Comprehensive checklist for iOS application penetration testing.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              View Checklist
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Mobile;
