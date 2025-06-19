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
import {
  ArrowLeft,
  Zap,
  CreditCard,
  Search,
  Download,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function ElectricityPayBillPage() {
  const [consumerNumber, setConsumerNumber] = useState("")
  const [billFetched, setBillFetched] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")

  const handleFetchBill = () => {
    if (consumerNumber) {
      setBillFetched(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/services/electricity">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Electricity Services
            </Button>
          </Link>
          <div className="flex items-center">
            <Zap className="h-6 w-6 text-yellow-500 mr-3" />
            <h1 className="text-2xl font-bold text-slate-800">Pay Electricity Bill</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Consumer Details */}
            <Card className="border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Enter Consumer Details</CardTitle>
                <CardDescription className="text-slate-600">
                  Enter your consumer number to fetch your electricity bill
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="consumerNum" className="text-slate-700">
                    Consumer Number *
                  </Label>
                  <Input
                    id="consumerNum"
                    placeholder="Enter your consumer number"
                    className="border-slate-300"
                    value={consumerNumber}
                    onChange={(e) => setConsumerNumber(e.target.value)}
                  />
                  <p className="text-xs text-slate-500">You can find this on your previous electricity bill</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="text-slate-700">
                    Registered Mobile Number
                  </Label>
                  <Input id="mobileNumber" placeholder="+91 XXXXX XXXXX" className="border-slate-300" />
                </div>

                <Button
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                  onClick={handleFetchBill}
                  disabled={!consumerNumber}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Fetch Bill Details
                </Button>
              </CardContent>
            </Card>

            {/* Bill Details */}
            {billFetched && (
              <Card className="border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-800">Current Bill Details</CardTitle>
                  <CardDescription className="text-slate-600">Review your electricity bill information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Consumer Name</p>
                      <p className="font-medium text-slate-800">John Doe</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Consumer Number</p>
                      <p className="font-medium text-slate-800">{consumerNumber}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Bill Month</p>
                      <p className="font-medium text-slate-800">December 2023</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-slate-600">Meter Reading Date</p>
                      <p className="font-medium text-slate-800">Dec 28, 2023</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800">Usage Details</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-slate-600">Previous Reading</p>
                        <p className="font-medium text-slate-800">1,250 kWh</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-slate-600">Current Reading</p>
                        <p className="font-medium text-slate-800">1,495 kWh</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-slate-600">Units Consumed</p>
                        <p className="font-medium text-slate-800">245 kWh</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800">Bill Breakdown</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Energy Charges (245 kWh @ ₹6.00)</span>
                        <span className="font-medium">₹1,470.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Fixed Charges</span>
                        <span className="font-medium">₹150.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Fuel Surcharge</span>
                        <span className="font-medium">₹85.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Electricity Duty</span>
                        <span className="font-medium">₹73.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Other Charges</span>
                        <span className="font-medium">₹21.50</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total Amount</span>
                        <span>₹1,800.00</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span className="text-sm">Due Date</span>
                        <span className="text-sm font-medium">January 15, 2024</span>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Pay before due date to avoid late payment charges of ₹50. After due date, additional penalty of 2%
                      per month will be applicable.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}

            {/* Payment Section */}
            {billFetched && (
              <Card className="border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-800">Payment Details</CardTitle>
                  <CardDescription className="text-slate-600">
                    Choose your payment method and complete payment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-700">Payment Method *</Label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
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

                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-slate-700">
                          Card Number
                        </Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="border-slate-300" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-slate-700">
                            Expiry Date
                          </Label>
                          <Input id="expiry" placeholder="MM/YY" className="border-slate-300" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-slate-700">
                            CVV
                          </Label>
                          <Input id="cvv" placeholder="123" className="border-slate-300" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName" className="text-slate-700">
                          Name on Card
                        </Label>
                        <Input id="cardName" placeholder="John Doe" className="border-slate-300" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="space-y-2">
                      <Label htmlFor="upiId" className="text-slate-700">
                        UPI ID
                      </Label>
                      <Input id="upiId" placeholder="yourname@upi" className="border-slate-300" />
                    </div>
                  )}

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-green-800">Payment Benefits</h4>
                    </div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Instant payment confirmation</li>
                      <li>• Digital receipt via email/SMS</li>
                      <li>• No convenience charges</li>
                      <li>• 24/7 payment facility</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white" disabled={!paymentMethod}>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay ₹1,800.00
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <Download className="h-4 w-4 mr-2" />
                  Download Bill
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <FileText className="h-4 w-4 mr-2" />
                  View Bill History
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  Set Payment Reminder
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Payment Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Current Bill</span>
                  <Badge variant="destructive">Due</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Last Payment</span>
                  <Badge className="bg-green-100 text-green-800">Paid</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Due Date</span>
                  <span className="text-sm font-medium text-red-600">Jan 15, 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-800">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">Payment processing: Instant</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm text-slate-600">Late fee: ₹50 after due date</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600">Secure payment gateway</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
