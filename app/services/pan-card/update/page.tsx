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
import { ArrowLeft, BadgeIcon as IdCard, Upload, Calendar, AlertCircle, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function PANUpdatePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [panNumber, setPanNumber] = useState("")
  const [correctionType, setCorrectionType] = useState("")
  const totalSteps = 4

  const correctionTypes = [
    { value: "name", label: "Name Correction", fee: "₹110", description: "Correct spelling errors in name" },
    { value: "dob", label: "Date of Birth", fee: "₹110", description: "Update incorrect date of birth" },
    { value: "father", label: "Father's Name", fee: "₹110", description: "Correct father's name details" },
    { value: "address", label: "Address Change", fee: "₹110", description: "Update residential address" },
    { value: "photo", label: "Photograph", fee: "₹110", description: "Update photograph on PAN card" },
    { value: "signature", label: "Signature", fee: "₹110", description: "Update signature on PAN card" },
  ]

  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/services/pan-card">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to PAN Services
            </Button>
          </Link>
          <div className="flex items-center">
            <IdCard className="h-6 w-6 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Update PAN Card Details</h1>
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
                <CardTitle className="text-slate-800">PAN Card Correction Request</CardTitle>
                <CardDescription className="text-slate-600">
                  Update your PAN card information with supporting documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: PAN Verification */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Verify Your PAN</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="panNum" className="text-slate-700">
                        PAN Number *
                      </Label>
                      <Input
                        id="panNum"
                        placeholder="ABCDE1234F"
                        className="border-slate-300 uppercase"
                        value={panNumber}
                        onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                        maxLength={10}
                      />
                      <p className="text-xs text-slate-500">Enter your 10-character PAN number</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="panName" className="text-slate-700">
                        Name as per PAN *
                      </Label>
                      <Input id="panName" placeholder="Enter name as shown on PAN card" className="border-slate-300" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="panDOB" className="text-slate-700">
                        Date of Birth *
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="panDOB" type="date" className="pl-10 border-slate-300" />
                      </div>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Please ensure the details match exactly with your existing PAN card
                      </AlertDescription>
                    </Alert>

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setCurrentStep(2)}
                    >
                      Verify & Continue
                    </Button>
                  </div>
                )}

                {/* Step 2: Select Correction Type */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Select Correction Type</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {correctionTypes.map((type) => (
                        <Card
                          key={type.value}
                          className={`border-2 cursor-pointer transition-all ${
                            correctionType === type.value
                              ? "border-blue-600 bg-blue-50"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                          onClick={() => setCorrectionType(type.value)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-slate-800">{type.label}</h4>
                              {correctionType === type.value && <CheckCircle className="h-5 w-5 text-blue-600" />}
                            </div>
                            <p className="text-sm text-slate-600 mb-2">{type.description}</p>
                            <Badge variant="secondary">{type.fee}</Badge>
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
                        className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                        onClick={() => setCurrentStep(3)}
                        disabled={!correctionType}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Correction Details */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Correction Details</h3>
                    </div>

                    {correctionType === "name" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="currentName" className="text-slate-700">
                              Current Name (as per PAN)
                            </Label>
                            <Input id="currentName" placeholder="Current name" className="border-slate-300" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="correctedName" className="text-slate-700">
                              Corrected Name *
                            </Label>
                            <Input id="correctedName" placeholder="Enter corrected name" className="border-slate-300" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nameReason" className="text-slate-700">
                            Reason for Name Correction
                          </Label>
                          <Select>
                            <SelectTrigger className="border-slate-300">
                              <SelectValue placeholder="Select reason" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="spelling">Spelling Error</SelectItem>
                              <SelectItem value="marriage">After Marriage</SelectItem>
                              <SelectItem value="legal">Legal Name Change</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {correctionType === "address" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="newAddress" className="text-slate-700">
                            New Complete Address *
                          </Label>
                          <Textarea
                            id="newAddress"
                            placeholder="Enter your new complete address"
                            className="border-slate-300"
                            rows={3}
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city" className="text-slate-700">
                              City *
                            </Label>
                            <Input id="city" placeholder="Enter city" className="border-slate-300" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state" className="text-slate-700">
                              State *
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
                              PIN Code *
                            </Label>
                            <Input id="pincode" placeholder="Enter PIN code" className="border-slate-300" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <Label className="text-slate-700">Upload Supporting Documents</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm font-medium text-slate-700 mb-1">Supporting Document</p>
                          <p className="text-xs text-slate-500 mb-3">
                            {correctionType === "name" && "Marriage certificate, Gazette notification"}
                            {correctionType === "address" && "Utility bill, Bank statement"}
                            {correctionType === "dob" && "Birth certificate, School certificate"}
                          </p>
                          <Button variant="outline" size="sm">
                            Choose File
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                          <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-sm font-medium text-slate-700 mb-1">Identity Proof</p>
                          <p className="text-xs text-slate-500 mb-3">Aadhaar, Passport, Driving License</p>
                          <Button variant="outline" size="sm">
                            Choose File
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
                        className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                        onClick={() => setCurrentStep(4)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Payment */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">Review & Payment</h3>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                      <h4 className="font-semibold text-slate-800 mb-3">Correction Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">PAN Number</span>
                          <span className="font-medium">{panNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Correction Type</span>
                          <span className="font-medium">
                            {correctionTypes.find((t) => t.value === correctionType)?.label}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Processing Fee</span>
                          <span className="font-medium">₹110</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Processing Time</span>
                          <span className="font-medium">15-20 working days</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-700">Payment Method</Label>
                      <Select>
                        <SelectTrigger className="border-slate-300">
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="netbanking">Net Banking</SelectItem>
                          <SelectItem value="upi">UPI</SelectItem>
                          <SelectItem value="wallet">Digital Wallet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="declaration" className="border-slate-300" />
                      <Label htmlFor="declaration" className="text-sm text-slate-700">
                        I declare that the information provided is true and correct
                      </Label>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setCurrentStep(3)} className="border-slate-300">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                        Pay ₹110 & Submit Request
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
                <div className={`flex items-center gap-3 ${currentStep >= 1 ? "text-blue-600" : "text-slate-400"}`}>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      currentStep >= 1 ? "bg-blue-600 text-white" : "bg-slate-200"
                    }`}
                  >
                    {currentStep > 1 ? <CheckCircle className="h-4 w-4" /> : "1"}
                  </div>
                  <span className="text-sm">Verify PAN</span>
                </div>
                <div className={`flex items-center gap-3 ${currentStep >= 2 ? "text-blue-600" : "text-slate-400"}`}>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      currentStep >= 2 ? "bg-blue-600 text-white" : "bg-slate-200"
                    }`}
                  >
                    {currentStep > 2 ? <CheckCircle className="h-4 w-4" /> : "2"}
                  </div>
                  <span className="text-sm">Select Correction</span>
                </div>
                <div className={`flex items-center gap-3 ${currentStep >= 3 ? "text-blue-600" : "text-slate-400"}`}>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      currentStep >= 3 ? "bg-blue-600 text-white" : "bg-slate-200"
                    }`}
                  >
                    {currentStep > 3 ? <CheckCircle className="h-4 w-4" /> : "3"}
                  </div>
                  <span className="text-sm">Enter Details</span>
                </div>
                <div className={`flex items-center gap-3 ${currentStep >= 4 ? "text-blue-600" : "text-slate-400"}`}>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      currentStep >= 4 ? "bg-blue-600 text-white" : "bg-slate-200"
                    }`}
                  >
                    4
                  </div>
                  <span className="text-sm">Review & Pay</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Correction Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">All Corrections</span>
                  <Badge variant="secondary">₹110</Badge>
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
                  <span className="text-sm text-slate-600">15-20 working days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
