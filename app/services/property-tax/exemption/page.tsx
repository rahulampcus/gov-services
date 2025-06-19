"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Building,
  Upload,
  Calendar,
  User,
  Heart,
  Shield,
  GraduationCap,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function PropertyTaxExemptionPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [exemptionType, setExemptionType] = useState("")
  const [propertyId, setPropertyId] = useState("")
  const totalSteps = 4

  const exemptionTypes = [
    {
      value: "senior",
      label: "Senior Citizen",
      icon: User,
      description: "For property owners aged 65 and above",
      discount: "50%",
      eligibility: "Age 65+, Annual income < ₹5 lakhs",
    },
    {
      value: "disabled",
      label: "Disabled Person",
      icon: Heart,
      description: "For physically challenged property owners",
      discount: "75%",
      eligibility: "Disability certificate, Self-occupied property",
    },
    {
      value: "widow",
      label: "Widow/Widower",
      icon: Shield,
      description: "For widowed property owners",
      discount: "50%",
      eligibility: "Death certificate, Annual income < ₹3 lakhs",
    },
    {
      value: "veteran",
      label: "War Veteran",
      icon: Shield,
      description: "For ex-servicemen and war veterans",
      discount: "100%",
      eligibility: "Service certificate, Pension book",
    },
    {
      value: "charitable",
      label: "Charitable Institution",
      icon: GraduationCap,
      description: "For registered charitable organizations",
      discount: "100%",
      eligibility: "Registration certificate, Non-profit status",
    },
  ]

  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/services/property-tax">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Property Tax Services
            </Button>
          </Link>
          <div className="flex items-center">
            <Building className="h-6 w-6 text-lime-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Property Tax Exemption</h1>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-slate-600">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2 bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Apply for Property Tax Exemption</CardTitle>
                <CardDescription className="text-slate-600">
                  Apply for property tax exemption based on your eligibility criteria
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Property Details */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Property Information</h3>
                    </div>

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
                          Property Owner Name *
                        </Label>
                        <Input id="ownerName" placeholder="Enter owner name" className="border-slate-300" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertyAddress" className="text-slate-700">
                        Property Address *
                      </Label>
                      <Textarea
                        id="propertyAddress"
                        placeholder="Enter complete property address"
                        className="border-slate-300"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="propertyType" className="text-slate-700">
                          Property Type *
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="propertyUsage" className="text-slate-700">
                          Property Usage *
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select usage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="self-occupied">Self Occupied</SelectItem>
                            <SelectItem value="rented">Rented</SelectItem>
                            <SelectItem value="vacant">Vacant</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="assessmentValue" className="text-slate-700">
                          Current Assessment Value
                        </Label>
                        <Input id="assessmentValue" placeholder="₹72,00,000" className="border-slate-300" />
                      </div>
                    </div>

                    <Button
                      className="w-full bg-lime-600 hover:bg-lime-700 text-white"
                      onClick={() => setCurrentStep(2)}
                      disabled={!propertyId}
                    >
                      Continue
                    </Button>
                  </div>
                )}

                {/* Step 2: Select Exemption Type */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Select Exemption Type</h3>
                    </div>

                    <div className="space-y-4">
                      {exemptionTypes.map((type) => (
                        <Card
                          key={type.value}
                          className={`border-2 cursor-pointer transition-all ${
                            exemptionType === type.value
                              ? "border-lime-500 bg-lime-50"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                          onClick={() => setExemptionType(type.value)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <type.icon className="h-6 w-6 text-lime-600" />
                                <div>
                                  <h4 className="font-medium text-slate-800">{type.label}</h4>
                                  <p className="text-sm text-slate-600">{type.description}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge variant="secondary" className="mb-1">
                                  {type.discount} Discount
                                </Badge>
                                {exemptionType === type.value && <CheckCircle className="h-5 w-5 text-lime-600" />}
                              </div>
                            </div>
                            <p className="text-xs text-slate-500">Eligibility: {type.eligibility}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(1)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        className="bg-lime-600 hover:bg-lime-700 text-white flex-1"
                        onClick={() => setCurrentStep(3)}
                        disabled={!exemptionType}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Details & Documents */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Personal Details & Documents</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="applicantName" className="text-slate-700">
                          Applicant Name *
                        </Label>
                        <Input id="applicantName" placeholder="Enter full name" className="border-slate-300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth" className="text-slate-700">
                          Date of Birth *
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="dateOfBirth" type="date" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="aadhaarNumber" className="text-slate-700">
                          Aadhaar Number *
                        </Label>
                        <Input id="aadhaarNumber" placeholder="XXXX XXXX XXXX" className="border-slate-300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="annualIncome" className="text-slate-700">
                          Annual Income *
                        </Label>
                        <Input id="annualIncome" placeholder="Enter annual income" className="border-slate-300" />
                      </div>
                    </div>

                    {exemptionType === "senior" && (
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-slate-700">
                          Current Age *
                        </Label>
                        <Input id="age" placeholder="Enter age" className="border-slate-300" />
                      </div>
                    )}

                    {exemptionType === "disabled" && (
                      <div className="space-y-2">
                        <Label htmlFor="disabilityType" className="text-slate-700">
                          Type of Disability *
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select disability type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="physical">Physical Disability</SelectItem>
                            <SelectItem value="visual">Visual Impairment</SelectItem>
                            <SelectItem value="hearing">Hearing Impairment</SelectItem>
                            <SelectItem value="intellectual">Intellectual Disability</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="space-y-4">
                      <Label className="text-slate-700">Upload Required Documents</Label>
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
                          <p className="text-sm text-slate-600">
                            {exemptionType === "senior" && "Age Proof"}
                            {exemptionType === "disabled" && "Disability Certificate"}
                            {exemptionType === "widow" && "Death Certificate"}
                            {exemptionType === "veteran" && "Service Certificate"}
                            {exemptionType === "charitable" && "Registration Certificate"}
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Income Certificate</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Property Documents</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(2)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        className="bg-lime-600 hover:bg-lime-700 text-white flex-1"
                        onClick={() => setCurrentStep(4)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-lime-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Review & Submit</h3>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <h4 className="font-semibold text-slate-800 mb-3">Application Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Property ID</span>
                          <span className="font-medium">{propertyId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Exemption Type</span>
                          <span className="font-medium">
                            {exemptionTypes.find((t) => t.value === exemptionType)?.label}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Discount Percentage</span>
                          <span className="font-medium text-lime-600">
                            {exemptionTypes.find((t) => t.value === exemptionType)?.discount}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Current Annual Tax</span>
                          <span className="font-medium">₹67,680</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Tax After Exemption</span>
                          <span className="font-medium text-green-600">
                            {exemptionType === "veteran" || exemptionType === "charitable"
                              ? "₹0"
                              : exemptionType === "disabled"
                                ? "₹16,920"
                                : "₹33,840"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Processing Time</span>
                          <span className="font-medium">15-30 working days</span>
                        </div>
                      </div>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Exemption will be applicable from the next assessment year. Current year tax remains unchanged.
                      </AlertDescription>
                    </Alert>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="declaration" className="border-slate-300" />
                      <Label htmlFor="declaration" className="text-sm text-slate-700">
                        I declare that all information provided is true and correct to the best of my knowledge
                      </Label>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(3)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button className="bg-lime-600 hover:bg-lime-700 text-white flex-1">Submit Application</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center gap-3 ${currentStep >= step ? "text-lime-600" : "text-slate-400"}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        currentStep >= step ? "bg-lime-600 text-white" : "bg-slate-200"
                      }`}
                    >
                      {currentStep > step ? <CheckCircle className="h-4 w-4" /> : step}
                    </div>
                    <span className="text-sm">
                      {step === 1 && "Property Details"}
                      {step === 2 && "Exemption Type"}
                      {step === 3 && "Documents"}
                      {step === 4 && "Review & Submit"}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Exemption Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Senior Citizen</span>
                  <Badge variant="secondary">50%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Disabled Person</span>
                  <Badge variant="secondary">75%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">War Veteran</span>
                  <Badge className="bg-green-100 text-green-800">100%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Processing Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">15-30 working days</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Required Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-slate-700">• Identity Proof (Aadhaar/Passport)</div>
                <div className="text-sm text-slate-700">• Age/Disability/Service Certificate</div>
                <div className="text-sm text-slate-700">• Income Certificate</div>
                <div className="text-sm text-slate-700">• Property Ownership Documents</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
