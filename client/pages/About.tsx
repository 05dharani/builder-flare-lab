import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-nature-50 to-earth-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary-600 rounded-2xl shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-nature-700 bg-clip-text text-transparent">
              AgriSense
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering farmers with intelligent soil analysis and data-driven
            crop recommendations
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-700">
                <Target className="w-6 h-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize agriculture through intelligent soil analysis,
                helping farmers make informed decisions that optimize crop
                yields while promoting sustainable farming practices.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-nature-700">
                <Users className="w-6 h-6" />
                Our Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We've helped over 10,000 farmers worldwide increase their crop
                yields by an average of 25% through precise soil analysis and
                tailored crop recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-earth-700">
                <Award className="w-6 h-6" />
                Our Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Built on advanced agricultural science and machine learning
                algorithms, our platform provides 94% accurate crop
                recommendations based on comprehensive soil analysis.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary-700">
                <Leaf className="w-6 h-6" />
                Sustainability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to promoting sustainable agriculture practices
                that protect our environment while maximizing crop productivity
                for future generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
