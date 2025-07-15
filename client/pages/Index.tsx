import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Leaf,
  Sprout,
  Wheat,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
} from "lucide-react";

interface SoilData {
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  ph: number;
}

interface CropRecommendation {
  name: string;
  suitability: number;
  reasons: string[];
  icon: React.ReactNode;
}

export default function Index() {
  const [soilData, setSoilData] = useState<SoilData>({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
    ph: 7,
  });

  const [recommendations, setRecommendations] = useState<CropRecommendation[]>(
    [],
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSoil = async () => {
    setIsAnalyzing(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simple rule-based crop recommendation logic
    const cropDatabase = [
      {
        name: "Wheat",
        icon: <Wheat className="w-6 h-6" />,
        requirements: {
          nitrogen: [40, 80],
          phosphorus: [20, 50],
          potassium: [30, 60],
          ph: [6.0, 7.5],
        },
      },
      {
        name: "Corn",
        icon: <Sprout className="w-6 h-6" />,
        requirements: {
          nitrogen: [60, 120],
          phosphorus: [25, 60],
          potassium: [40, 80],
          ph: [6.0, 7.0],
        },
      },
      {
        name: "Soybeans",
        icon: <Leaf className="w-6 h-6" />,
        requirements: {
          nitrogen: [20, 50],
          phosphorus: [20, 40],
          potassium: [30, 50],
          ph: [6.0, 7.0],
        },
      },
      {
        name: "Tomatoes",
        icon: <div className="w-6 h-6 bg-red-500 rounded-full"></div>,
        requirements: {
          nitrogen: [50, 100],
          phosphorus: [30, 70],
          potassium: [50, 90],
          ph: [6.0, 7.0],
        },
      },
      {
        name: "Lettuce",
        icon: <Leaf className="w-6 h-6 text-green-600" />,
        requirements: {
          nitrogen: [30, 60],
          phosphorus: [20, 40],
          potassium: [25, 45],
          ph: [6.0, 7.0],
        },
      },
    ];

    const recommendations = cropDatabase
      .map((crop) => {
        const suitability = calculateSuitability(soilData, crop.requirements);
        const reasons = generateReasons(soilData, crop.requirements);

        return {
          name: crop.name,
          suitability,
          reasons,
          icon: crop.icon,
        };
      })
      .sort((a, b) => b.suitability - a.suitability);

    setRecommendations(recommendations);
    setIsAnalyzing(false);
  };

  const calculateSuitability = (soil: SoilData, requirements: any): number => {
    const factors = ["nitrogen", "phosphorus", "potassium", "ph"];
    let totalScore = 0;

    factors.forEach((factor) => {
      const value = soil[factor as keyof SoilData];
      const [min, max] = requirements[factor];

      if (value >= min && value <= max) {
        totalScore += 25; // Perfect score for this factor
      } else if (value < min) {
        const deficit = min - value;
        totalScore += Math.max(0, 25 - (deficit / min) * 25);
      } else {
        const excess = value - max;
        totalScore += Math.max(0, 25 - (excess / max) * 25);
      }
    });

    return Math.round(totalScore);
  };

  const generateReasons = (soil: SoilData, requirements: any): string[] => {
    const reasons = [];

    if (
      soil.nitrogen >= requirements.nitrogen[0] &&
      soil.nitrogen <= requirements.nitrogen[1]
    ) {
      reasons.push("Optimal nitrogen levels");
    } else if (soil.nitrogen < requirements.nitrogen[0]) {
      reasons.push("Low nitrogen - consider fertilization");
    } else {
      reasons.push("High nitrogen - may cause excessive growth");
    }

    if (soil.ph >= requirements.ph[0] && soil.ph <= requirements.ph[1]) {
      reasons.push("Ideal pH range");
    } else if (soil.ph < requirements.ph[0]) {
      reasons.push("Acidic soil - may need lime");
    } else {
      reasons.push("Alkaline soil - may need sulfur");
    }

    return reasons;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-nature-50 to-earth-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary-600 rounded-2xl shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-nature-700 bg-clip-text text-transparent">
              AgriSense
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Intelligent soil analysis and crop recommendations powered by
            agricultural science
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary-200 bg-primary-50/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-800">94%</p>
                  <p className="text-sm text-primary-600">Accuracy Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-nature-200 bg-nature-50/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-nature-100 rounded-lg">
                  <Users className="w-6 h-6 text-nature-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-nature-800">10K+</p>
                  <p className="text-sm text-nature-600">Farmers Served</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-earth-200 bg-earth-50/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-earth-100 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-earth-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-earth-800">50+</p>
                  <p className="text-sm text-earth-600">Crop Types</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Analysis Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-md">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary-600" />
                Soil Analysis
              </CardTitle>
              <CardDescription className="text-base">
                Enter your soil mineral levels to get personalized crop
                recommendations
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="nitrogen"
                    className="text-foreground font-medium"
                  >
                    Nitrogen (N) - mg/kg
                  </Label>
                  <Input
                    id="nitrogen"
                    type="number"
                    placeholder="40-120"
                    value={soilData.nitrogen || ""}
                    onChange={(e) =>
                      setSoilData((prev) => ({
                        ...prev,
                        nitrogen: Number(e.target.value),
                      }))
                    }
                    className="border-primary-200 focus:border-primary-500 bg-white/80"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phosphorus"
                    className="text-foreground font-medium"
                  >
                    Phosphorus (P) - mg/kg
                  </Label>
                  <Input
                    id="phosphorus"
                    type="number"
                    placeholder="20-70"
                    value={soilData.phosphorus || ""}
                    onChange={(e) =>
                      setSoilData((prev) => ({
                        ...prev,
                        phosphorus: Number(e.target.value),
                      }))
                    }
                    className="border-primary-200 focus:border-primary-500 bg-white/80"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="potassium"
                    className="text-foreground font-medium"
                  >
                    Potassium (K) - mg/kg
                  </Label>
                  <Input
                    id="potassium"
                    type="number"
                    placeholder="25-90"
                    value={soilData.potassium || ""}
                    onChange={(e) =>
                      setSoilData((prev) => ({
                        ...prev,
                        potassium: Number(e.target.value),
                      }))
                    }
                    className="border-primary-200 focus:border-primary-500 bg-white/80"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ph" className="text-foreground font-medium">
                    pH Level
                  </Label>
                  <Input
                    id="ph"
                    type="number"
                    step="0.1"
                    placeholder="6.0-7.5"
                    value={soilData.ph || ""}
                    onChange={(e) =>
                      setSoilData((prev) => ({
                        ...prev,
                        ph: Number(e.target.value),
                      }))
                    }
                    className="border-primary-200 focus:border-primary-500 bg-white/80"
                  />
                </div>
              </div>

              <Button
                onClick={analyzeSoil}
                disabled={
                  isAnalyzing ||
                  !soilData.nitrogen ||
                  !soilData.phosphorus ||
                  !soilData.potassium ||
                  !soilData.ph
                }
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Analyzing Soil...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Analyze & Recommend
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-md">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Sprout className="w-6 h-6 text-nature-600" />
                Crop Recommendations
              </CardTitle>
              <CardDescription className="text-base">
                {recommendations.length > 0
                  ? "Based on your soil analysis"
                  : "Complete the analysis to see recommendations"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {recommendations.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Leaf className="w-16 h-16 mx-auto mb-4 text-muted-foreground/40" />
                  <p className="text-lg">Enter your soil data to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recommendations.slice(0, 5).map((rec, index) => (
                    <div
                      key={rec.name}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        index === 0
                          ? "border-primary-300 bg-primary-50"
                          : "border-border bg-card hover:border-primary-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            {rec.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {rec.name}
                            </h3>
                            {index === 0 && (
                              <span className="text-xs text-primary-600 font-medium">
                                Best Match
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-2xl font-bold ${
                              rec.suitability >= 80
                                ? "text-green-600"
                                : rec.suitability >= 60
                                  ? "text-yellow-600"
                                  : "text-red-600"
                            }`}
                          >
                            {rec.suitability}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Suitability
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {rec.reasons.map((reason, i) => (
                          <span
                            key={i}
                            className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                          >
                            {reason}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
