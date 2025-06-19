"use client"

import { useState } from "react"
import { ArrowLeft, Shield, FileText, Clock, Search, Download, Eye, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function LicensesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const availableLicenses = [
    {
      id: "trade-license",
      name: "Trade License",
      description: "Required for all commercial establishments",
      category: "Business",
      fee: 2500,
      validity: "1 Year",
      processingTime: "7-10 days",
      documents: ["Business Registration", "Address Proof", "NOC from Fire Department"],
      status: "available",
    },
    {
      id: "food-license",
      name: "Food Service License",
      description: "For restaurants, cafes, and food establishments",
      category: "Food & Beverage",
      fee: 5000,
      validity: "1 Year",
      processingTime: "15-20 days",
      documents: ["FSSAI Registration", "Health Certificate", "Water Test Report"],
      status: "available",
    },
    {
      id: "liquor-license",
      name: "Liquor License",
      description: "For establishments serving alcoholic beverages",
      category: "Food & Beverage",
      fee: 25000,
      validity: "1 Year",
      processingTime: "30-45 days",
      documents: ["Trade License", "Police Clearance", "Medical Certificate"],
      status: "available",
    },
    {
      id: "construction-permit",
      name: "Construction Permit",
      description: "For building construction and renovation",
      category: "Construction",
      fee: 10000,
      validity: "2 Years",
      processingTime: "20-30 days",
      documents: ["Approved Building Plan", "Land Documents", "NOC from Utilities"],
      status: "available",
    },
    {
      id: "signage-permit",
      name: "Signage Permit",
      description: "For outdoor advertising and signboards",
      category: "Advertising",
      fee: 1500,
      validity: "1 Year",
      processingTime: "5-7 days",
      documents: ["Trade License", "Design Layout", "Site Photograph"],
      status: "available",
    },
    {
      id: "health-license",
      name: "Health Trade License",
      description: "For medical and healthcare establishments",
      category: "Healthcare",
      fee: 7500,
      validity: "1 Year",
      processingTime: "10-15 days",
      documents: ["Medical Registration", "Facility Certificate", "Staff Qualifications"],
      status: "available",
    },
  ]

  const myLicenses = [
    {
      id: "TL001",
      name: "Trade License",
      businessName: "ABC Electronics Store",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-14",
      status: "active",
      licenseNumber: "TL/2024/001234",
    },
    {
      id: "FL001",
      name: "Food Service License",
      businessName: "Cafe Delight",
      issueDate: "2024-02-20",
      expiryDate: "2025-02-19",
      status: "active",
      licenseNumber: "FL/2024/005678",
    },
    {
      id: "CP001",
      name: "Construction Permit",
      businessName: "Residential Complex",
      issueDate: "2024-03-10",
      expiryDate: "2026-03-09",
      status: "pending_renewal",
      licenseNumber: "CP/2024/009876",
    },
  ]

  const applications = [
    {
      id: "APP001",
      licenseType: "Liquor License",
      businessName: "The Pub House",
      applicationDate: "2024-06-01",
      status: "under_review",
      expectedCompletion: "2024-07-15",
      currentStage: "Document Verification",
    },
    {
      id: "APP002",
      licenseType: "Signage Permit",
      businessName: "Digital Marketing Agency",
      applicationDate: "2024-06-10",
      status: "approved",
      expectedCompletion: "2024-06-17",
      currentStage: "License Generation",
    },
    {
      id: "APP003",
      licenseType: "Health Trade License",
      businessName: "City Clinic",
      applicationDate: "2024-06-05",
      status: "rejected",
      expectedCompletion: "-",
      currentStage: "Application Rejected",
      rejectionReason: "Incomplete medical registration documents",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "pending_renewal":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending Renewal</Badge>
      case "expired":
        return <Badge className="bg-red-100 text-red-800">Expired</Badge>
      case "under_review":
        return <Badge className="bg-blue-100 text-blue-800">Under Review</Badge>
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const filteredLicenses = availableLicenses.filter((license) => {
    const matchesSearch =
      license.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      license.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === "all" || license.category === typeFilter
    return matchesSearch && matchesType
  })

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
              <Shield className="h-6 w-6 text-purple-600" />
              <span className="text-lg font-semibold text-gray-900">License Management</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="available" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="available">Available Licenses</TabsTrigger>
            <TabsTrigger value="my-licenses">My Licenses</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          {/* Available Licenses Tab */}
          <TabsContent value="available" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Licenses & Permits</CardTitle>
                <CardDescription>Browse and apply for various business licenses and permits</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search licenses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                      <SelectItem value="Construction">Construction</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Advertising">Advertising</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* License Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLicenses.map((license) => (
                    <Card key={license.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{license.name}</CardTitle>
                            <Badge variant="outline" className="mt-1">
                              {license.category}
                            </Badge>
                          </div>
                          <Shield className="h-6 w-6 text-purple-600" />
                        </div>
                        <CardDescription>{license.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Fee:</span>
                              <p className="text-purple-600 font-semibold">₹{license.fee}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Validity:</span>
                              <p>{license.validity}</p>
                            </div>
                            <div className="col-span-2">
                              <span className="font-medium text-gray-700">Processing Time:</span>
                              <p className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-gray-500" />
                                {license.processingTime}
                              </p>
                            </div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700 text-sm">Required Documents:</span>
                            <ul className="text-sm text-gray-600 mt-1">
                              {license.documents.slice(0, 2).map((doc, index) => (
                                <li key={index} className="flex items-center">
                                  <FileText className="h-3 w-3 mr-1" />
                                  {doc}
                                </li>
                              ))}
                              {license.documents.length > 2 && (
                                <li className="text-purple-600">+{license.documents.length - 2} more</li>
                              )}
                            </ul>
                          </div>
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Licenses Tab */}
          <TabsContent value="my-licenses" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Licenses</CardTitle>
                    <CardDescription>View and manage your active licenses</CardDescription>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Apply for New License
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>License Type</TableHead>
                      <TableHead>Business Name</TableHead>
                      <TableHead>License Number</TableHead>
                      <TableHead>Issue Date</TableHead>
                      <TableHead>Expiry Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {myLicenses.map((license) => (
                      <TableRow key={license.id}>
                        <TableCell className="font-medium">{license.name}</TableCell>
                        <TableCell>{license.businessName}</TableCell>
                        <TableCell className="font-mono text-sm">{license.licenseNumber}</TableCell>
                        <TableCell>{license.issueDate}</TableCell>
                        <TableCell>{license.expiryDate}</TableCell>
                        <TableCell>{getStatusBadge(license.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>License Applications</CardTitle>
                <CardDescription>Track the status of your license applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Application ID</TableHead>
                      <TableHead>License Type</TableHead>
                      <TableHead>Business Name</TableHead>
                      <TableHead>Application Date</TableHead>
                      <TableHead>Current Stage</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Expected Completion</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-mono text-sm">{app.id}</TableCell>
                        <TableCell className="font-medium">{app.licenseType}</TableCell>
                        <TableCell>{app.businessName}</TableCell>
                        <TableCell>{app.applicationDate}</TableCell>
                        <TableCell>{app.currentStage}</TableCell>
                        <TableCell>{getStatusBadge(app.status)}</TableCell>
                        <TableCell>{app.expectedCompletion}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
