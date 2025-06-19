"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Building2, CreditCard, User, MapPin, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Building2 className="h-10 w-10 text-slate-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Complete Your Profile</h1>
          <p className="text-slate-600 mt-2">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2 bg-slate-200" />
        </div>

        <Card className="border-slate-200 shadow-lg">
          {currentStep === 1 && (
            <div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Please provide your personal details for verification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-slate-700">
                      Date of Birth
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input id="dateOfBirth" type="date" className="pl-10 border-slate-300 focus:border-slate-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="pl-10 border-slate-300 focus:border-slate-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ssn" className="text-slate-700">
                    Social Security Number
                  </Label>
                  <Input
                    id="ssn"
                    type="password"
                    placeholder="XXX-XX-XXXX"
                    className="border-slate-300 focus:border-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-slate-700">
                    Street Address
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="address"
                      placeholder="123 Main Street"
                      className="pl-10 border-slate-300 focus:border-slate-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-slate-700">
                      City
                    </Label>
                    <Input id="city" placeholder="New York" className="border-slate-300 focus:border-slate-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-slate-700">
                      State
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-300 focus:border-slate-500">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                        <SelectItem value="fl">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-slate-700">
                      ZIP Code
                    </Label>
                    <Input id="zip" placeholder="10001" className="border-slate-300 focus:border-slate-500" />
                  </div>
                </div>
              </CardContent>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <Building2 className="h-5 w-5" />
                  Service Preferences
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Select the government services you're interested in
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tax-services" className="border-slate-300" />
                    <Label htmlFor="tax-services" className="text-slate-700">
                      Tax Services & Filing
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="healthcare" className="border-slate-300" />
                    <Label htmlFor="healthcare" className="text-slate-700">
                      Healthcare & Medicare
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="social-security" className="border-slate-300" />
                    <Label htmlFor="social-security" className="text-slate-700">
                      Social Security Benefits
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="veterans" className="border-slate-300" />
                    <Label htmlFor="veterans" className="text-slate-700">
                      Veterans Affairs
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="business" className="border-slate-300" />
                    <Label htmlFor="business" className="text-slate-700">
                      Business Registration & Licensing
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="immigration" className="border-slate-300" />
                    <Label htmlFor="immigration" className="text-slate-700">
                      Immigration Services
                    </Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additional-info" className="text-slate-700">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additional-info"
                    placeholder="Tell us about any specific needs or circumstances..."
                    className="border-slate-300 focus:border-slate-500"
                  />
                </div>
              </CardContent>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <Building2 className="h-5 w-5" />
                  Select Government Services
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Choose the government services you want to access through your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tax-services-select" className="border-slate-300" />
                      <Label htmlFor="tax-services-select" className="text-slate-700">
                        Tax Services & Filing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="healthcare-select" className="border-slate-300" />
                      <Label htmlFor="healthcare-select" className="text-slate-700">
                        Healthcare & Medicare
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="social-security-select" className="border-slate-300" />
                      <Label htmlFor="social-security-select" className="text-slate-700">
                        Social Security Benefits
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="business-select" className="border-slate-300" />
                      <Label htmlFor="business-select" className="text-slate-700">
                        Business Registration & Licensing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="veterans-select" className="border-slate-300" />
                      <Label htmlFor="veterans-select" className="text-slate-700">
                        Veterans Affairs
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="motor-vehicles-select" className="border-slate-300" />
                      <Label htmlFor="motor-vehicles-select" className="text-slate-700">
                        Motor Vehicles
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="education-select" className="border-slate-300" />
                      <Label htmlFor="education-select" className="text-slate-700">
                        Education Services
                      </Label>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="immigration-select" className="border-slate-300" />
                      <Label htmlFor="immigration-select" className="text-slate-700">
                        Immigration Services
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rent-agreement-select" className="border-slate-300" />
                      <Label htmlFor="rent-agreement-select" className="text-slate-700">
                        Rent Agreement Services
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="aadhaar-select" className="border-slate-300" />
                      <Label htmlFor="aadhaar-select" className="text-slate-700">
                        Aadhaar Card Services
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="property-tax-select" className="border-slate-300" />
                      <Label htmlFor="property-tax-select" className="text-slate-700">
                        Property Tax Services
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="corporation-select" className="border-slate-300" />
                      <Label htmlFor="corporation-select" className="text-slate-700">
                        Corporation Services
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="electricity-select" className="border-slate-300" />
                      <Label htmlFor="electricity-select" className="text-slate-700">
                        Electricity Services
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mngl-gas-select" className="border-slate-300" />
                      <Label htmlFor="mngl-gas-select" className="text-slate-700">
                        MNGL Gas Services
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pan-card-select" className="border-slate-300" />
                      <Label htmlFor="pan-card-select" className="text-slate-700">
                        PAN Card Services
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> You can always add or remove services later from your dashboard. Selected
                    services will be prioritized in your account setup.
                  </p>
                </div>
              </CardContent>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Set up your payment method for government services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Service Fee: $25.00</h3>
                  <p className="text-sm text-blue-700">One-time account setup and verification fee</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-slate-700">
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="border-slate-300 focus:border-slate-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-slate-700">
                      Expiry Date
                    </Label>
                    <Input id="expiry" placeholder="MM/YY" className="border-slate-300 focus:border-slate-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-slate-700">
                      CVV
                    </Label>
                    <Input id="cvv" placeholder="123" className="border-slate-300 focus:border-slate-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardName" className="text-slate-700">
                    Name on Card
                  </Label>
                  <Input id="cardName" placeholder="John Doe" className="border-slate-300 focus:border-slate-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingAddress" className="text-slate-700">
                    Billing Address
                  </Label>
                  <Input
                    id="billingAddress"
                    placeholder="Same as above"
                    className="border-slate-300 focus:border-slate-500"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" className="border-slate-300" />
                  <Label htmlFor="terms" className="text-sm text-slate-700">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>
              </CardContent>
            </div>
          )}

          <div className="flex justify-between p-6 border-t border-slate-200">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={nextStep} className="bg-slate-600 hover:bg-slate-700 text-white">
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Link href="/dashboard">
                <Button className="bg-slate-600 hover:bg-slate-700 text-white">
                  Complete Setup
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
