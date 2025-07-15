import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-nature-50 to-earth-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-lg mx-auto shadow-xl border-0 bg-white/70 backdrop-blur-md">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-100 rounded-full">
                <Leaf className="w-12 h-12 text-primary-600" />
              </div>
            </div>

            <h1 className="text-6xl font-bold text-primary-700 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The page you're looking for seems to have wandered off like seeds
              in the wind. Let's get you back to fertile ground.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
