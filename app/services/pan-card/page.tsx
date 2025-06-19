"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, BadgeIcon as IdCard, Download, Search, Upload, Calendar, Phone } from "lucide-react"
import Link from "next/link"

export default function PANCardPage() {
  const [panNumber, setPanNumber] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center">
            <IdCard className="h-6 w-6 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">PAN Card Services</h1>
          </div>
        </div>

        <Tabs defaultValue="apply" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-100">
            <TabsTrigger value="apply" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Apply New PAN
            </TabsTrigger>
            <TabsTrigger value="correction" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Corrections
            </TabsTrigger>
            <TabsTrigger value="download" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Download e-PAN
            </TabsTrigger>
            <TabsTrigger value="status" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Track Status
            </TabsTrigger>
          </TabsList>

          <TabsContent value="apply" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Apply for New PAN Card</CardTitle>
                    <CardDescription className="text-slate-600">
                      Apply for a new PAN card for Indian citizens and foreign nationals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="applicantCategory" className="text-slate-700">
                        Applicant Category
                      </Label>
                      <Select>
                        <SelectTrigger className="border-slate-300">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="company">Company</SelectItem>
                          <SelectItem value="firm">Firm/LLP</SelectItem>
                          <SelectItem value="trust">Trust</SelectItem>
                          <SelectItem value="association">Association</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title" className="text-slate-700">
                          Title
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mr">Mr.</SelectItem>
                            <SelectItem value="mrs">Mrs.</SelectItem>
                            <SelectItem value="ms">Ms.</SelectItem>
                            <SelectItem value="dr">Dr.</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-700">
                          First Name
                        </Label>
                        <Input id="firstName" placeholder="Enter first name" className="border-slate-300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-700">
                          Last Name
                        </Label>
                        <Input id="lastName" placeholder="Enter last name" className="border-slate-300" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fatherName" className="text-slate-700">
                          Father's Name
                        </Label>
                        <Input id="fatherName" placeholder="Enter father's name" className="border-slate-300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="text-slate-700">
                          Date of Birth
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="dateOfBirth" type="date" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700">
                          Email Address
                        </Label>
                        <Input id="email" type="email" placeholder="Enter email" className="border-slate-300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile" className="text-slate-700">
                          Mobile Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="mobile" placeholder="+91 XXXXX XXXXX" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-slate-700">
                        Complete Address
                      </Label>
                      <Textarea id="address" placeholder="Enter complete address" className="border-slate-300" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-slate-700">
                          City
                        </Label>
                        <Input id="city" placeholder="Enter city" className="border-slate-300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-slate-700">
                          State
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="gujarat">Gujarat</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode" className="text-slate-700">
                          PIN Code
                        </Label>
                        <Input id="pincode" placeholder="Enter PIN code" className="border-slate-300" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-slate-700">Upload Documents</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Identity Proof</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Address Proof</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Date of Birth Proof</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Photograph</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" className="border-slate-300" />
                      <Label htmlFor="terms" className="text-sm text-slate-700">
                        I agree to the terms and conditions and declare that the information provided is true
                      </Label>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Submit Application - ₹110
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Application Fees</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">New PAN (Indian)</span>
                      <Badge variant="secondary">₹110</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">New PAN (Foreign)</span>
                      <Badge variant="secondary">₹1,020</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Processing Time</span>
                      <Badge variant="secondary">15-20 Days</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-800">Required Documents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm text-slate-700">• Identity Proof (Aadhaar/Passport/Voter ID)</div>
                    <div className="text-sm text-slate-700">• Address Proof (Utility Bill/Bank Statement)</div>
                    <div className="text-sm text-slate-700">• Date of Birth Proof (Birth Certificate)</div>
                    <div className="text-sm text-slate-700">• Recent Passport Size Photograph</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="correction" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">PAN Card Corrections</CardTitle>
                <CardDescription className="text-slate-600">
                  Request corrections in your existing PAN card details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="existingPAN" className="text-slate-700">
                    Existing PAN Number
                  </Label>
                  <Input id="existingPAN" placeholder="Enter your PAN number" className="border-slate-300" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="correctionType" className="text-slate-700">
                    Type of Correction
                  </Label>
                  <Select>
                    <SelectTrigger className="border-slate-300">
                      <SelectValue placeholder="Select correction type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name Correction</SelectItem>
                      <SelectItem value="dob">Date of Birth Correction</SelectItem>
                      <SelectItem value="father">Father's Name Correction</SelectItem>
                      <SelectItem value="address">Address Change</SelectItem>
                      <SelectItem value="photo">Photograph Change</SelectItem>
                      <SelectItem value="signature">Signature Change</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentDetail" className="text-slate-700">
                      Current Detail
                    </Label>
                    <Input id="currentDetail" placeholder="Enter current detail" className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="correctedDetail" className="text-slate-700">
                      Corrected Detail
                    </Label>
                    <Input id="correctedDetail" placeholder="Enter corrected detail" className="border-slate-300" />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Correction Request - ₹110
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="download" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Download e-PAN Card</CardTitle>
                <CardDescription className="text-slate-600">
                  Download your PAN card in digital format instantly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="downloadPAN" className="text-slate-700">
                    PAN Number
                  </Label>
                  <Input
                    id="downloadPAN"
                    placeholder="Enter your PAN number"
                    className="border-slate-300"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="downloadDOB" className="text-slate-700">
                    Date of Birth
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="downloadDOB" type="date" className="pl-10 border-slate-300" />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download e-PAN Card
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Track Application Status</CardTitle>
                <CardDescription className="text-slate-600">
                  Check the status of your PAN card application or correction request
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="acknowledgmentNumber" className="text-slate-700">
                    Acknowledgment Number
                  </Label>
                  <Input
                    id="acknowledgmentNumber"
                    placeholder="Enter acknowledgment number"
                    className="border-slate-300"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Track Status
                </Button>

                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                  <h4 className="font-semibold text-slate-800 mb-3">Application Status</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Application Number</span>
                      <span className="font-medium">PAN123456789</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Status</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Under Process</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Expected Completion</span>
                      <span className="font-medium">Jan 25, 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
