"use client"

import { useState } from "react"
import {
  ArrowLeft,
  FileCheck,
  MapPin,
  Building,
  Truck,
  Music,
  Search,
  Plus,
  Eye,
  Download,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date-picker"
import Link from "next/link"

export default function PermitsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [selectedDate, setSelectedDate] = useState<Date>()

  const permitTypes = [
    {
      id: "event-permit",
      name: "Event Permit",
      description: "For organizing public events, concerts, and gatherings",
      category: "Events",
      icon: Music,
      fee: 5000,
      processingTime: "7-10 days",
      validity: "Event Duration",
      requirements: ["Event Details", "Venue NOC", "Security Plan", "Insurance Certificate"],
      color: "bg-pink-100 text-pink-800",
    },
    {
      id: "parking-permit",
      name: "Parking Permit",
      description: "For temporary parking arrangements and road closures",
      category: "Transportation",
      icon: MapPin,
      fee: 1500,
      processingTime: "3-5 days",
      validity: "As specified",
      requirements: ["Location Map", "Traffic Plan", "Duration Details"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "construction-permit",
      name: "Construction Permit",
      description: "For building construction, renovation, and demolition",
      category: "Construction",
      icon: Building,
      fee: 10000,
      processingTime: "15-20 days",
      validity: "2 Years",
      requirements: ["Building Plans", "Structural Certificate", "Environmental Clearance"],
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "vendor-permit",
      name: "Street Vendor Permit",
      description: "For street vending and mobile food stalls",
      category: "Business",
      icon: Truck,
      fee: 2500,
      processingTime: "5-7 days",
      validity: "1 Year",
      requirements: ["Health Certificate", "Location Approval", "Equipment List"],
      color: "bg-green-100 text-green-800",
    },
    {
      id: "excavation-permit",
      name: "Road Excavation Permit",
      description: "For utility work and road excavation",
      category: "Infrastructure",
      icon: Building,
      fee: 7500,
      processingTime: "10-12 days",
      validity: "6 Months",
      requirements: ["Work Plan", "Restoration Bond", "Traffic Management Plan"],
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "filming-permit",
      name: "Filming Permit",
      description: "For commercial filming and photography",
      category: "Media",
      icon: FileCheck,
      fee: 3500,
      processingTime: "5-8 days",
      validity: "Shoot Duration",
      requirements: ["Script Summary", "Location Details", "Equipment List", "Insurance"],
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const myPermits = [
    {
      id: "EP001",
      type: "Event Permit",
      title: "Annual Music Festival",
      location: "City Park, Sector 15",
      issueDate: "2024-05-15",
      validFrom: "2024-06-20",
      validTo: "2024-06-22",
      status: "active",
      permitNumber: "EP/2024/001234",
    },
    {
      id: "CP001",
      type: "Construction Permit",
      title: "Residential Building Construction",
      location: "Plot 45, Green Valley",
      issueDate: "2024-03-10",
      validFrom: "2024-03-15",
      validTo: "2026-03-14",
      status: "active",
      permitNumber: "CP/2024/005678",
    },
    {
      id: "VP001",
      type: "Street Vendor Permit",
      title: "Food Cart - Sector 22",
      location: "Main Market, Sector 22",
      issueDate: "2024-01-20",
      validFrom: "2024-02-01",
      validTo: "2025-01-31",
      status: "expiring_soon",
      permitNumber: "VP/2024/009876",
    },
  ]

  const applications = [
    {
      id: "APP001",
      permitType: "Filming Permit",
      title: "Documentary Shoot",
      location: "Heritage Building Complex",
      applicationDate: "2024-06-01",
      status: "under_review",
      currentStage: "Location Verification",
      expectedCompletion: "2024-06-15",
    },
    {
      id: "APP002",
      permitType: "Parking Permit",
      title: "Wedding Event Parking",
      location: "Community Hall, Sector 18",
      applicationDate: "2024-06-10",
      status: "approved",
      currentStage: "Permit Generation",
      expectedCompletion: "2024-06-17",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "expiring_soon":
        return <Badge className="bg-yellow-100 text-yellow-800">Expiring Soon</Badge>
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

  const filteredPermits = permitTypes.filter((permit) => {
    const matchesSearch =
      permit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      permit.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || permit.category === categoryFilter
    return matchesSearch && matchesCategory
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
              <FileCheck className="h-6 w-6 text-purple-600" />
              <span className="text-lg font-semibold text-gray-900">Permits & Approvals</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="available" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="available">Available Permits</TabsTrigger>
            <TabsTrigger value="my-permits">My Permits</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          {/* Available Permits Tab */}
          <TabsContent value="available" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Permits & Approvals</CardTitle>
                <CardDescription>Apply for various permits and approvals for your activities</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search permits..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Events">Events</SelectItem>
                      <SelectItem value="Transportation">Transportation</SelectItem>
                      <SelectItem value="Construction">Construction</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="Media">Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Permit Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPermits.map((permit) => (
                    <Card key={permit.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg flex items-center">
                              <permit.icon className="h-5 w-5 mr-2 text-purple-600" />
                              {permit.name}
                            </CardTitle>
                            <Badge variant="outline" className={`mt-2 ${permit.color}`}>
                              {permit.category}
                            </Badge>
                          </div>
                        </div>
                        <CardDescription>{permit.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">Fee:</span>
                              <p className="text-purple-600 font-semibold">₹{permit.fee}</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">Validity:</span>
                              <p>{permit.validity}</p>
                            </div>
                            <div className="col-span-2">
                              <span className="font-medium text-gray-700">Processing Time:</span>
                              <p className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-gray-500" />
                                {permit.processingTime}
                              </p>
                            </div>
                          </div>

                          <div>
                            <span className="font-medium text-gray-700 text-sm">Requirements:</span>
                            <ul className="text-sm text-gray-600 mt-1 space-y-1">
                              {permit.requirements.slice(0, 3).map((req, index) => (
                                <li key={index} className="flex items-center">
                                  <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                                  {req}
                                </li>
                              ))}
                              {permit.requirements.length > 3 && (
                                <li className="text-purple-600 text-xs">
                                  +{permit.requirements.length - 3} more requirements
                                </li>
                              )}
                            </ul>
                          </div>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply for Permit</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Apply for {permit.name}</DialogTitle>
                                <DialogDescription>Fill in the details to apply for this permit</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="title">Project/Event Title</Label>
                                    <Input id="title" placeholder="Enter title" />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input id="location" placeholder="Enter location" />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="description">Description</Label>
                                  <Textarea id="description" placeholder="Describe your project/event" rows={3} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label>Start Date</Label>
                                    <DatePicker />
                                  </div>
                                  <div className="space-y-2">
                                    <Label>End Date</Label>
                                    <DatePicker />
                                  </div>
                                </div>
                                <div className="flex justify-end space-x-2">
                                  <Button variant="outline">Cancel</Button>
                                  <Button className="bg-purple-600 hover:bg-purple-700">Submit Application</Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Permits Tab */}
          <TabsContent value="my-permits" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Permits</CardTitle>
                    <CardDescription>View and manage your active permits</CardDescription>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Apply for New Permit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Permit Type</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Permit Number</TableHead>
                      <TableHead>Valid From</TableHead>
                      <TableHead>Valid To</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {myPermits.map((permit) => (
                      <TableRow key={permit.id}>
                        <TableCell className="font-medium">{permit.type}</TableCell>
                        <TableCell>{permit.title}</TableCell>
                        <TableCell>{permit.location}</TableCell>
                        <TableCell className="font-mono text-sm">{permit.permitNumber}</TableCell>
                        <TableCell>{permit.validFrom}</TableCell>
                        <TableCell>{permit.validTo}</TableCell>
                        <TableCell>{getStatusBadge(permit.status)}</TableCell>
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
                <CardTitle>Permit Applications</CardTitle>
                <CardDescription>Track the status of your permit applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Application ID</TableHead>
                      <TableHead>Permit Type</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Location</TableHead>
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
                        <TableCell className="font-medium">{app.permitType}</TableCell>
                        <TableCell>{app.title}</TableCell>
                        <TableCell>{app.location}</TableCell>
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
