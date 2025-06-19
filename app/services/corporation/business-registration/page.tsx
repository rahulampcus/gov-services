"use client"

import { useState } from "react"
import { ArrowLeft, Building2, FileText, Users, CreditCard, CheckCircle, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function BusinessRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [businessType, setBusinessType] = useState("")
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    panNumber: "",
    aadharNumber: "",
    businessActivity: "",
    investmentAmount: "",
    employeeCount: "",
  })

  const businessTypes = [
    {
      id: "sole-proprietorship",
      name: "Sole Proprietorship",
      fee: 500,
      time: "7-10 days",
      description: "Individual ownership business",
    },
    {
      id: "partnership",
      name: "Partnership Firm",
      fee: 1500,
      time: "10-15 days",
      description: "Business owned by 2 or more partners",
    },
    {
      id: "llp",
      name: "Limited Liability Partnership",
      fee: 3000,
      time: "15-20 days",
      description: "Hybrid of partnership and company",
    },
    {
      id: "private-limited",
      name: "Private Limited Company",
      fee: 5000,
      time: "20-25 days",
      description: "Separate legal entity with limited liability",
    },
    {
      id: "public-limited",
      name: "Public Limited Company",
      fee: 10000,
      time: "25-30 days",
      description: "Company that can offer shares to public",
    },
    { id: "opc", name: "One Person Company", fee: 2500, time: "12-18 days", description: "Company with single member" },
  ]

  const requiredDocuments = {
    "sole-proprietorship": ["PAN Card", "Aadhaar Card", "Address Proof", "Bank Statement"],
    partnership: ["Partnership Deed", "PAN Cards of Partners", "Address Proof", "Bank Statement"],
    llp: ["LLP Agreement", "PAN Cards", "Address Proof", "Digital Signature Certificate"],
    "private-limited": ["MOA & AOA", "PAN Cards of Directors", "Address Proof", "Digital Signature Certificate"],
    "public-limited": [
      "MOA & AOA",
      "PAN Cards of Directors",
      "Address Proof",
      "Digital Signature Certificate",
      "Prospectus",
    ],
    opc: ["MOA & AOA", "PAN Card", "Address Proof", "Digital Signature Certificate"],
  }

  const steps = [
    { id: 1, title: "Business Type", icon: Building2 },
    { id: 2, title: "Basic Details", icon: FileText },
    { id: 3, title: "Owner Details", icon: Users },
    { id: 4, title: "Documents", icon: Upload },
    { id: 5, title: "Payment", icon: CreditCard },
  ]

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const selectedBusinessType = businessTypes.find((type) => type.id === businessType)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/services/corporation" className="flex items-center text-purple-600 hover:text-purple-700">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Corporation Services
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-purple-600" />
              <span className="text-lg font-semibold text-gray-900">Business Registration</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Registration Progress</CardTitle>
                <Progress value={(currentStep / 5) * 100} className="w-full" />
                <p className="text-sm text-gray-600">Step {currentStep} of 5</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-3 p-2 rounded-lg ${
                      currentStep === step.id
                        ? "bg-purple-100 text-purple-700"
                        : currentStep > step.id
                          ? "bg-green-100 text-green-700"
                          : "text-gray-500"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                    <span className="font-medium">{step.title}</span>
                    {currentStep > step.id && <CheckCircle className="h-4 w-4 ml-auto" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-6 w-6 text-purple-600" />
                  <span>Business Registration Application</span>
                </CardTitle>
                <CardDescription>
                  Register your business with the corporation and get all necessary licenses
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step 1: Business Type Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Select Business Type</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {businessTypes.map((type) => (
                          <Card
                            key={type.id}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                              businessType === type.id ? "ring-2 ring-purple-500 bg-purple-50" : ""
                            }`}
                            onClick={() => setBusinessType(type.id)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900">{type.name}</h4>
                                  <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                                  <div className="flex items-center space-x-4 mt-3">
                                    <Badge variant="secondary">₹{type.fee}</Badge>
                                    <Badge variant="outline">{type.time}</Badge>
                                  </div>
                                </div>
                                {businessType === type.id && <CheckCircle className="h-5 w-5 text-purple-600" />}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {selectedBusinessType && (
                      <Card className="bg-purple-50 border-purple-200">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">Selected: {selectedBusinessType.name}</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-purple-700 font-medium">Registration Fee:</span>
                              <span className="ml-2">₹{selectedBusinessType.fee}</span>
                            </div>
                            <div>
                              <span className="text-purple-700 font-medium">Processing Time:</span>
                              <span className="ml-2">{selectedBusinessType.time}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* Step 2: Basic Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Business Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="Enter business name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessActivity">Business Activity *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business activity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retail">Retail Trade</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="services">Professional Services</SelectItem>
                            <SelectItem value="food">Food & Beverage</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="construction">Construction</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="investmentAmount">Investment Amount *</Label>
                        <Input
                          id="investmentAmount"
                          type="number"
                          value={formData.investmentAmount}
                          onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                          placeholder="Enter investment amount"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employeeCount">Expected Employee Count</Label>
                        <Input
                          id="employeeCount"
                          type="number"
                          value={formData.employeeCount}
                          onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                          placeholder="Number of employees"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Enter complete business address"
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Enter city"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN Code *</Label>
                        <Input
                          id="pincode"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          placeholder="Enter PIN code"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Owner Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Owner/Director Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="ownerName">Full Name *</Label>
                        <Input
                          id="ownerName"
                          value={formData.ownerName}
                          onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="panNumber">PAN Number *</Label>
                        <Input
                          id="panNumber"
                          value={formData.panNumber}
                          onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                          placeholder="Enter PAN number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="aadharNumber">Aadhaar Number *</Label>
                        <Input
                          id="aadharNumber"
                          value={formData.aadharNumber}
                          onChange={(e) => setFormData({ ...formData, aadharNumber: e.target.value })}
                          placeholder="Enter Aadhaar number"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Documents */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Required Documents</h3>
                    {businessType && (
                      <div className="space-y-4">
                        {requiredDocuments[businessType]?.map((doc, index) => (
                          <Card key={index} className="border-dashed">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <FileText className="h-5 w-5 text-purple-600" />
                                  <div>
                                    <p className="font-medium">{doc}</p>
                                    <p className="text-sm text-gray-600">PDF, JPG, PNG (Max 5MB)</p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Upload
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Step 5: Payment */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Payment Summary</h3>
                    {selectedBusinessType && (
                      <Card className="bg-gray-50">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span>Registration Fee ({selectedBusinessType.name})</span>
                              <span className="font-semibold">₹{selectedBusinessType.fee}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Processing Fee</span>
                              <span className="font-semibold">₹100</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Service Tax (18%)</span>
                              <span className="font-semibold">
                                ₹{Math.round((selectedBusinessType.fee + 100) * 0.18)}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-center text-lg font-bold">
                              <span>Total Amount</span>
                              <span>₹{Math.round((selectedBusinessType.fee + 100) * 1.18)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <div className="space-y-4">
                      <h4 className="font-semibold">Select Payment Method</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="cursor-pointer hover:shadow-md">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <CreditCard className="h-5 w-5 text-purple-600" />
                              <span className="font-medium">Credit/Debit Card</span>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="cursor-pointer hover:shadow-md">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <Building2 className="h-5 w-5 text-purple-600" />
                              <span className="font-medium">Net Banking</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                    Previous
                  </Button>
                  <Button
                    onClick={currentStep === 5 ? () => alert("Application submitted!") : handleNext}
                    disabled={currentStep === 1 && !businessType}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {currentStep === 5 ? "Submit Application" : "Next"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
