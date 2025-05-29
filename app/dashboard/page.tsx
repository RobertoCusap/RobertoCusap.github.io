"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Shield,
  Car,
  CreditCard,
  AlertTriangle,
  LogOut,
  Bell,
  Settings,
  Download,
  Eye,
  Plus,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const userData = localStorage.getItem("user")

    if (!isLoggedIn || !userData) {
      router.push("/login")
      return
    }

    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Car className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">LTMS</span>
              </Link>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Dashboard
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" onClick={handleLogout} className="text-red-600 hover:text-red-700">
                <LogOut className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl text-center font-bold text-gray-900 mb-2">Welcome back, {user.firstName}!</h1>
          <p className="text-center text-gray-600">
            Manage your transportation services and documents from your dashboard
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Licenses</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Registered Vehicles</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
                <Car className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Violations</p>
                  <p className="text-2xl font-bold text-red-600">0</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Transactions</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-6 overflow-x-auto">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="digital-id">Digital ID</TabsTrigger>
            <TabsTrigger value="licensing">Licensing</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    Digital ID Services
                  </CardTitle>
                  <CardDescription>Apply for and manage digital identification documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Access Service</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600" />
                    Driver's Licensing
                  </CardTitle>
                  <CardDescription>Apply for new licenses and renewals</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Access Service</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Car className="h-5 w-5 mr-2 text-blue-600" />
                    Vehicle Registration
                  </CardTitle>
                  <CardDescription>Register vehicles and manage ownership</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Access Service</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
                    Violations Check
                  </CardTitle>
                  <CardDescription>View and settle traffic violations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Check Violations</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                    Payment Services
                  </CardTitle>
                  <CardDescription>Pay fees and manage transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Make Payment</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-blue-600" />
                    Documents
                  </CardTitle>
                  <CardDescription>Download and manage your documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700">View Documents</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="digital-id" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Digital ID Services</CardTitle>
                <CardDescription>Manage your digital identification documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Digital Driver's License</h3>
                      <p className="text-sm text-gray-600">License No: D01-23-123456</p>
                      <p className="text-sm text-gray-600">Status: Active</p>
                      <p className="text-sm text-gray-600">Expires: December 31, 2025</p>
                    </div>
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="licensing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Driver's Licensing</CardTitle>
                <CardDescription>Manage your professional driver's license</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Professional Driver's License</h3>
                      <p className="text-sm text-gray-600">License No: D01-23-123456</p>
                      <p className="text-sm text-gray-600">Expires: December 31, 2025</p>
                      <p className="text-sm text-gray-600">Restriction Code: 1,2,3</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                      <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download License
                    </Button>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Renew License</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vehicles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Registration</CardTitle>
                <CardDescription>Manage your registered vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Toyota Vios 2020</h3>
                      <p className="text-sm text-gray-600">Plate No: ABC 1234</p>
                      <p className="text-sm text-gray-600">Registration expires: March 15, 2024</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Register New Vehicle
                  </Button>

                  <Button variant="outline" className="w-full mt-4">
                    Report Stolen/Recovered Vehicle
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Tabs defaultValue="license" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 overflow-x-auto">
                <TabsTrigger value="license">Driver's License</TabsTrigger>
                <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                <TabsTrigger value="violations">Apprehensions</TabsTrigger>
                <TabsTrigger value="receipts">Receipts</TabsTrigger>
              </TabsList>

              <TabsContent value="license" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Driver's License</CardTitle>
                    <CardDescription>Your current driver's license document</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">Professional Driver's License</h3>
                        <p className="text-sm text-gray-600">License No: D01-23-123456</p>
                        <p className="text-sm text-gray-600">Issued: January 15, 2023</p>
                        <p className="text-sm text-gray-600">Expires: December 31, 2025</p>
                      </div>
                      <div className="flex space-x-2 mt-2 sm:mt-0">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vehicles" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Vehicle Registration Documents</CardTitle>
                    <CardDescription>Registration documents for your vehicles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Certificate of Registration</h3>
                          <p className="text-sm text-gray-600">Vehicle: Toyota Vios 2020</p>
                          <p className="text-sm text-gray-600">Plate No: ABC 1234</p>
                          <p className="text-sm text-gray-600">Issued: March 10, 2023</p>
                        </div>
                        <div className="flex space-x-2 mt-2 sm:mt-0">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Official Receipt</h3>
                          <p className="text-sm text-gray-600">Vehicle: Toyota Vios 2020</p>
                          <p className="text-sm text-gray-600">OR No: 1234567890</p>
                          <p className="text-sm text-gray-600">Amount: ₱1,200.00</p>
                        </div>
                        <div className="flex space-x-2 mt-2 sm:mt-0">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="violations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Apprehensions & Violations</CardTitle>
                    <CardDescription>Records of traffic violations and apprehensions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <AlertTriangle className="h-12 w-12 mx-auto text-green-600 mb-4" />
                      <h3 className="font-medium text-lg mb-2">No Violations Found</h3>
                      <p className="text-gray-600">You have a clean driving record. Keep up the good work!</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="receipts" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Official Receipts</CardTitle>
                    <CardDescription>All payment receipts and transaction records</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">License Renewal Payment</h3>
                          <p className="text-sm text-gray-600">OR No: 2023120001</p>
                          <p className="text-sm text-gray-600">Date: December 15, 2023</p>
                          <p className="text-sm text-gray-600">Amount: ₱585.00</p>
                        </div>
                        <div className="flex space-x-2 mt-2 sm:mt-0">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Vehicle Registration Payment</h3>
                          <p className="text-sm text-gray-600">OR No: 2023110015</p>
                          <p className="text-sm text-gray-600">Date: November 20, 2023</p>
                          <p className="text-sm text-gray-600">Amount: ₱1,200.00</p>
                        </div>
                        <div className="flex space-x-2 mt-2 sm:mt-0">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View your recent transactions and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">License Renewal</h3>
                      <p className="text-sm text-gray-600">December 15, 2023</p>
                      <p className="text-sm text-gray-600">Amount: ₱585.00</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Vehicle Registration</h3>
                      <p className="text-sm text-gray-600">November 20, 2023</p>
                      <p className="text-sm text-gray-600">Amount: ₱1,200.00</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
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
