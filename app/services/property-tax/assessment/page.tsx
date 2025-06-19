"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Building,
  Search,
  FileText,
  MapPin,
  DollarSign,
  Home,
  Calculator,
  Download,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function PropertyAssessmentPage() {
  const [propertyId, setPropertyId] = useState("")
  const [assessmentFetched, setAssessmentFetched] = useState(false)
  const [propertyType, setPropertyType] = useState("")

  const handleFetchAssessment = () => {
    if (propertyId) {
      setAssessmentFetched(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/services/property-tax">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Property Tax Services
            </Button>
          </Link>
          <div className="flex items-center">
            <Building className="h-6 w-6 text-lime-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Property Assessment</h1>
          </div>
        </div>

        <Tabs defaultValue="view" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-slate-100">
            <TabsTrigger value="view" className="data-[state=active]:bg-lime-500 data-[state=active]:text-white">
              View Assessment
            </TabsTrigger>
            <TabsTrigger value="request" className="data-[state=active]:bg-lime-500 data-[state=active]:text-white">
              Request Assessment
            </TabsTrigger>
            <TabsTrigger value="appeal" className="data-[state=active]:bg-lime-500 data-[state=active]:text-white">
              Appeal Assessment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="view" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Property Search */}
                <Card className="border-slate-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Property Assessment Details</CardTitle>
                    <CardDescription className="text-slate-600">
                      Enter your property ID to view assessment details and valuation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="propertyId" className="text-slate-700">
                          Property ID *
                        </Label>
                        <Input
                          id="propertyId"
                          placeholder="Enter property ID"
                          className="border-slate-300"
                          value={propertyId}
                          onChange={(e) => setPropertyId(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ownerName" className="text-slate-700">
                          Owner Name
                        </Label>
                        <Input id="ownerName" placeholder="Enter owner name" className="border-slate-300" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertyAddress" className="text-slate-700">
                        Property Address
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="propertyAddress"
                          placeholder="Enter property address"
                          className="pl-10 border-slate-300"
                        />
                      </div>
                    </div>

                    <Button
                      className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                      onClick={handleFetchAssessment}
                      disabled={!propertyId}
                    >
                      <Search className="h-4 w-4 mr-2" />
                      View Assessment Details
                    </Button>
                  </CardContent>
                </Card>

                {/* Assessment Details */}
                {assessmentFetched && (
                  <Card className="border-slate-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-slate-800">Property Assessment Report</CardTitle>
                      <CardDescription className="text-slate-600">
                        Assessment Year 2024-25 • Last Updated: March 15, 2024
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Property Basic Info */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800">Property Information</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Property ID</span>
                              <span className="font-medium">{propertyId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Owner Name</span>
                              <span className="font-medium">John Doe</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Property Type</span>
                              <span className="font-medium">Residential</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Usage</span>
                              <span className="font-medium">Self Occupied</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Zone</span>
                              <span className="font-medium">Zone A</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800">Property Dimensions</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-600">Plot Area</span>
                              <span className="font-medium">1,200 sq ft</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Built-up Area</span>
                              <span className="font-medium">900 sq ft</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Carpet Area</span>
                              <span className="font-medium">750 sq ft</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Construction Year</span>
                              <span className="font-medium">2015</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-600">Floors</span>
                              <span className="font-medium">2</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Valuation Details */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Property Valuation</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="text-center">
                              <Home className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                              <p className="text-sm text-blue-600 mb-1">Land Value</p>
                              <p className="text-xl font-semibold text-blue-800">₹45,00,000</p>
                              <p className="text-xs text-blue-600">@ ₹3,750/sq ft</p>
                            </div>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="text-center">
                              <Building className="h-8 w-8 text-green-600 mx-auto mb-2" />
                              <p className="text-sm text-green-600 mb-1">Construction Value</p>
                              <p className="text-xl font-semibold text-green-800">₹27,00,000</p>
                              <p className="text-xs text-green-600">@ ₹3,000/sq ft</p>
                            </div>
                          </div>
                          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <div className="text-center">
                              <Calculator className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                              <p className="text-sm text-purple-600 mb-1">Total Assessment</p>
                              <p className="text-xl font-semibold text-purple-800">₹72,00,000</p>
                              <p className="text-xs text-purple-600">Market Value</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Tax Calculation */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800">Annual Tax Calculation</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Property Tax (0.8% of assessed value)</span>
                            <span className="font-medium">₹57,600</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Water Tax</span>
                            <span className="font-medium">₹3,600</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Sewerage Tax</span>
                            <span className="font-medium">₹2,400</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Street Light Tax</span>
                            <span className="font-medium">₹1,200</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Education Cess</span>
                            <span className="font-medium">₹2,880</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-semibold text-lg">
                            <span>Total Annual Tax</span>
                            <span className="text-lime-600">₹67,680</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Quarterly Payment</span>
                            <span className="font-medium">₹16,920</span>
                          </div>
                        </div>
                      </div>

                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          This assessment is valid for the current financial year. Property tax rates may vary based on
                          usage and location.
                        </AlertDescription>
                      </Alert>

                      <div className="flex gap-4">
                        <Button className="flex-1 bg-lime-600 hover:bg-lime-700 text-white">
                          <DollarSign className="h-4 w-4 mr-2" />
                          Pay Tax Now
                        </Button>
                        <Button variant="outline" className="border-slate-300">
                          <Download className="h-4 w-4 mr-2" />
                          Download Assessment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Assessment Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Assessment Year</span>
                      <Badge variant="secondary">2024-25</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Last Updated</span>
                      <span className="text-sm font-medium">Mar 15, 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Next Assessment</span>
                      <span className="text-sm font-medium">Apr 1, 2025</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Tax Rates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Residential</span>
                      <Badge variant="secondary">0.8%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Commercial</span>
                      <Badge variant="secondary">1.2%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Industrial</span>
                      <Badge variant="secondary">1.5%</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <FileText className="h-4 w-4 mr-2" />
                      View Tax History
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <Calculator className="h-4 w-4 mr-2" />
                      Tax Calculator
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-300">
                      <Download className="h-4 w-4 mr-2" />
                      Download Certificate
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="request" className="space-y-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Request New Assessment</CardTitle>
                <CardDescription className="text-slate-600">
                  Request a new property assessment for newly constructed or modified properties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="requestPropertyId" className="text-slate-700">
                      Property ID (if available)
                    </Label>
                    <Input id="requestPropertyId" placeholder="Enter property ID" className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requestType" className="text-slate-700">
                      Request Type *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-300">
                        <SelectValue placeholder="Select request type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New Construction</SelectItem>
                        <SelectItem value="modification">Property Modification</SelectItem>
                        <SelectItem value="reassessment">Reassessment Request</SelectItem>
                        <SelectItem value="correction">Assessment Correction</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requestPropertyType" className="text-slate-700">
                    Property Type *
                  </Label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="mixed">Mixed Use</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="plotArea" className="text-slate-700">
                      Plot Area (sq ft) *
                    </Label>
                    <Input id="plotArea" placeholder="Enter plot area" className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="builtupArea" className="text-slate-700">
                      Built-up Area (sq ft) *
                    </Label>
                    <Input id="builtupArea" placeholder="Enter built-up area" className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="constructionYear" className="text-slate-700">
                      Construction Year *
                    </Label>
                    <Input id="constructionYear" placeholder="YYYY" className="border-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requestReason" className="text-slate-700">
                    Reason for Assessment Request
                  </Label>
                  <Input
                    id="requestReason"
                    placeholder="Briefly describe the reason for assessment request"
                    className="border-slate-300"
                  />
                </div>

                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">
                  Submit Assessment Request - ₹500
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appeal" className="space-y-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Appeal Property Assessment</CardTitle>
                <CardDescription className="text-slate-600">
                  File an appeal if you disagree with your property assessment or tax calculation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="appealPropertyId" className="text-slate-700">
                      Property ID *
                    </Label>
                    <Input id="appealPropertyId" placeholder="Enter property ID" className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assessmentYear" className="text-slate-700">
                      Assessment Year *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-300">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-25">2024-25</SelectItem>
                        <SelectItem value="2023-24">2023-24</SelectItem>
                        <SelectItem value="2022-23">2022-23</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appealType" className="text-slate-700">
                    Appeal Type *
                  </Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select appeal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="overvaluation">Property Overvaluation</SelectItem>
                      <SelectItem value="incorrect-area">Incorrect Area Calculation</SelectItem>
                      <SelectItem value="wrong-usage">Wrong Usage Classification</SelectItem>
                      <SelectItem value="tax-calculation">Tax Calculation Error</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentAssessment" className="text-slate-700">
                      Current Assessment Value
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="currentAssessment" placeholder="₹72,00,000" className="pl-10 border-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="proposedAssessment" className="text-slate-700">
                      Proposed Assessment Value
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="proposedAssessment"
                        placeholder="Enter proposed value"
                        className="pl-10 border-slate-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appealReason" className="text-slate-700">
                    Detailed Reason for Appeal *
                  </Label>
                  <textarea
                    id="appealReason"
                    placeholder="Provide detailed reasons for your appeal with supporting facts"
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    rows={4}
                  />
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Appeal must be filed within 30 days of assessment notice. Supporting documents are required for
                    processing.
                  </AlertDescription>
                </Alert>

                <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white">Submit Appeal - ₹200</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
