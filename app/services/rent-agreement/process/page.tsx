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
  Home,
  Upload,
  FileText,
  Calendar,
  DollarSign,
  User,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function RentAgreementProcessPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [agreementType, setAgreementType] = useState("")
  const totalSteps = 5

  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/services/rent-agreement">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Rent Agreement Services
            </Button>
          </Link>
          <div className="flex items-center">
            <Home className="h-6 w-6 text-teal-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Rent Agreement Registration Process</h1>
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
                <CardTitle className="text-slate-800">Rent Agreement Registration</CardTitle>
                <CardDescription className="text-slate-600">
                  Complete the registration process for your rental agreement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Agreement Type */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Select Agreement Type</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card
                        className={`border-2 cursor-pointer transition-all ${
                          agreementType === "residential"
                            ? "border-teal-500 bg-teal-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                        onClick={() => setAgreementType("residential")}
                      >
                        <CardContent className="p-6 text-center">
                          <Home className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-slate-800 mb-2">Residential Agreement</h4>
                          <p className="text-sm text-slate-600 mb-3">For residential properties and homes</p>
                          <Badge variant="secondary">₹500 Registration Fee</Badge>
                          {agreementType === "residential" && (
                            <CheckCircle className="h-5 w-5 text-teal-600 mx-auto mt-3" />
                          )}
                        </CardContent>
                      </Card>

                      <Card
                        className={`border-2 cursor-pointer transition-all ${
                          agreementType === "commercial"
                            ? "border-teal-500 bg-teal-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                        onClick={() => setAgreementType("commercial")}
                      >
                        <CardContent className="p-6 text-center">
                          <FileText className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-slate-800 mb-2">Commercial Agreement</h4>
                          <p className="text-sm text-slate-600 mb-3">For shops, offices, and commercial spaces</p>
                          <Badge variant="secondary">₹1,000 Registration Fee</Badge>
                          {agreementType === "commercial" && (
                            <CheckCircle className="h-5 w-5 text-teal-600 mx-auto mt-3" />
                          )}
                        </CardContent>
                      </Card>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Choose the appropriate agreement type based on the property usage
                      </AlertDescription>
                    </Alert>

                    <Button
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      onClick={() => setCurrentStep(2)}
                      disabled={!agreementType}
                    >
                      Continue
                    </Button>
                  </div>
                )}

                {/* Step 2: Landlord Details */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Landlord Information</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="landlordName" className="text-slate-700">
                          Full Name *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input
                            id="landlordName"
                            placeholder="Enter landlord name"
                            className="pl-10 border-slate-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="landlordPhone" className="text-slate-700">
                          Phone Number *
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="landlordPhone" placeholder="+91 XXXXX XXXXX" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="landlordEmail" className="text-slate-700">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input
                            id="landlordEmail"
                            type="email"
                            placeholder="landlord@email.com"
                            className="pl-10 border-slate-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="landlordAadhaar" className="text-slate-700">
                          Aadhaar Number *
                        </Label>
                        <Input id="landlordAadhaar" placeholder="XXXX XXXX XXXX" className="border-slate-300" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="landlordAddress" className="text-slate-700">
                        Landlord Address *
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Textarea
                          id="landlordAddress"
                          placeholder="Enter complete address"
                          className="pl-10 border-slate-300"
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(1)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white flex-1"
                        onClick={() => setCurrentStep(3)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Tenant Details */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Tenant Information</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tenantName" className="text-slate-700">
                          Full Name *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="tenantName" placeholder="Enter tenant name" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tenantPhone" className="text-slate-700">
                          Phone Number *
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="tenantPhone" placeholder="+91 XXXXX XXXXX" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tenantEmail" className="text-slate-700">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input
                            id="tenantEmail"
                            type="email"
                            placeholder="tenant@email.com"
                            className="pl-10 border-slate-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tenantAadhaar" className="text-slate-700">
                          Aadhaar Number *
                        </Label>
                        <Input id="tenantAadhaar" placeholder="XXXX XXXX XXXX" className="border-slate-300" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tenantAddress" className="text-slate-700">
                        Permanent Address *
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Textarea
                          id="tenantAddress"
                          placeholder="Enter permanent address"
                          className="pl-10 border-slate-300"
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(2)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white flex-1"
                        onClick={() => setCurrentStep(4)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Property & Agreement Details */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Property & Agreement Details</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertyAddress" className="text-slate-700">
                        Property Address *
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Textarea
                          id="propertyAddress"
                          placeholder="Enter complete property address"
                          className="pl-10 border-slate-300"
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="rentAmount" className="text-slate-700">
                          Monthly Rent *
                        </Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="rentAmount" placeholder="₹25,000" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="securityDeposit" className="text-slate-700">
                          Security Deposit *
                        </Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="securityDeposit" placeholder="₹50,000" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="leasePeriod" className="text-slate-700">
                          Lease Period *
                        </Label>
                        <Select>
                          <SelectTrigger className="border-slate-300">
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="11months">11 Months</SelectItem>
                            <SelectItem value="1year">1 Year</SelectItem>
                            <SelectItem value="2years">2 Years</SelectItem>
                            <SelectItem value="3years">3 Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate" className="text-slate-700">
                          Lease Start Date *
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="startDate" type="date" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate" className="text-slate-700">
                          Lease End Date *
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input id="endDate" type="date" className="pl-10 border-slate-300" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialTerms" className="text-slate-700">
                        Special Terms & Conditions
                      </Label>
                      <Textarea
                        id="specialTerms"
                        placeholder="Enter any special terms or conditions"
                        className="border-slate-300"
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(3)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white flex-1"
                        onClick={() => setCurrentStep(5)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 5: Documents & Payment */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        5
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Documents & Payment</h3>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-slate-700">Upload Required Documents</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Property Documents</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Landlord ID Proof</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Upload
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Tenant ID Proof</p>
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
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <h4 className="font-semibold text-slate-800 mb-3">Registration Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Agreement Type</span>
                          <span className="font-medium capitalize">{agreementType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Registration Fee</span>
                          <span className="font-medium">{agreementType === "residential" ? "₹500" : "₹1,000"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Stamp Duty</span>
                          <span className="font-medium">₹100</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Processing Time</span>
                          <span className="font-medium">3-5 working days</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total Amount</span>
                          <span>{agreementType === "residential" ? "₹600" : "₹1,100"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" className="border-slate-300" />
                      <Label htmlFor="terms" className="text-sm text-slate-700">
                        I agree to the terms and conditions for rent agreement registration
                      </Label>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(4)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white flex-1">
                        Pay & Register Agreement
                      </Button>
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
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center gap-3 ${currentStep >= step ? "text-teal-600" : "text-slate-400"}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        currentStep >= step ? "bg-teal-600 text-white" : "bg-slate-200"
                      }`}
                    >
                      {currentStep > step ? <CheckCircle className="h-4 w-4" /> : step}
                    </div>
                    <span className="text-sm">
                      {step === 1 && "Agreement Type"}
                      {step === 2 && "Landlord Details"}
                      {step === 3 && "Tenant Details"}
                      {step === 4 && "Property Details"}
                      {step === 5 && "Documents & Payment"}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Registration Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Residential</span>
                  <Badge variant="secondary">₹500</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Commercial</span>
                  <Badge variant="secondary">₹1,000</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Stamp Duty</span>
                  <Badge variant="secondary">₹100</Badge>
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
                  <span className="text-sm text-slate-600">3-5 working days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
