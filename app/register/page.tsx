"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, User, FileText, Car, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [step, setStep] = useState(0)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
  })
  const [enrollmentType, setEnrollmentType] = useState("")
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 0 && enrollmentType !== "") {
      setStep(1)
    } else if (step === 1 && agreedToTerms) {
      setStep(2)
    } else if (step === 2) {
      // Simulate registration
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...formData,
          id: Date.now(),
          registeredAt: new Date().toISOString(),
        }),
      )
      router.push("/dashboard")
    }
  }

  const TermsDialog = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-blue-600">
          Terms of Use Agreement
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms of Use Agreement</DialogTitle>
          <DialogDescription>Land Transportation Management System (LTMS) Terms and Conditions</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <p>
              This notice is specific to the contents of the Land Transportation Management System (LTMS) Website, which
              is owned and operated by the Land Transportation Office (LTO) of the Republic of the Philippines.
            </p>

            <h3 className="font-semibold text-base">1. Acceptance of Agreement</h3>
            <p>
              You agree to the terms and conditions outlined in the Terms of Use Agreement ("Agreement"). This Agreement
              constitutes the entire and only agreement between the LTO and you, and supersedes all prior or
              contemporaneous agreements, representations, warranties and understandings with respect to the LTMS
              Website.
            </p>

            <h3 className="font-semibold text-base">2. Copyright</h3>
            <p>
              The contents, organization, graphics, design, compilation, magnetic translation, digital conversion and
              other matters related to the LTMS Website are protected under applicable copyrights, trademarks and other
              proprietary rights.
            </p>

            <h3 className="font-semibold text-base">3. Registration</h3>
            <p>
              You agree that any information provided to us will be complete and accurate, that you will not register
              under the name of another person, and that you will not adopt a user name that the LTO deems offensive.
            </p>

            <h3 className="font-semibold text-base">4. Privacy and Data Protection</h3>
            <p>
              LTO may use, combine and process your Personal Data for account creation, identity verification, service
              provision, security, and compliance with legal requirements.
            </p>

            <h3 className="font-semibold text-base">5. Age Requirement</h3>
            <p>
              You hereby confirm and warrant that you are above the age of minority and capable of understanding and
              accepting this Terms of Use Agreement.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="min-h-screen bg-[url('/images/cars.jpg')] bg-cover bg-center bg-no-repeat bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
          <p className="text-white mt-2">Join LTMS to access all transportation services</p>
        </div>
  
        <Card className="shadow-xl border-0 animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="flex items-center">
              {step === 0 ? (
                <>
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Registration
                </>
              ) : step === 1 ? (
                <>
                  <FileText className="h-5 w-5 mr-2 text-blue-600" />
                  Terms and Conditions
                </>
              ) : (
                <>
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </>
              )}
            </CardTitle>
            <CardDescription>
              {step === 0
                ? "Please select enrollment type"
                : step === 1
                  ? "Please read and accept our terms to continue"
                  : "Fill in your details to complete registration"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 0 ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 transform ${
                        enrollmentType === "individual"
                          ? "border-blue-600 bg-blue-50 scale-105 shadow-lg"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => setEnrollmentType("individual")}
                    >
                      <CardContent className="p-6 text-center">
                        <User
                          className={`h-8 w-8 mx-auto mb-3 transition-all duration-300 ${
                            enrollmentType === "individual" ? "text-blue-600 scale-110" : "text-blue-600"
                          }`}
                        />
                        <h3 className="font-semibold text-lg mb-2">Individual</h3>
                        <p className="text-sm text-gray-600">Enroll as an individual person</p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 transform ${
                        enrollmentType === "organization"
                          ? "border-blue-600 bg-blue-50 scale-105 shadow-lg"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => setEnrollmentType("organization")}
                    >
                      <CardContent className="p-6 text-center">
                        <FileText
                          className={`h-8 w-8 mx-auto mb-3 transition-all duration-300 ${
                            enrollmentType === "organization" ? "text-blue-600 scale-110" : "text-blue-600"
                          }`}
                        />
                        <h3 className="font-semibold text-lg mb-2">Organization</h3>
                        <p className="text-sm text-gray-600">Enroll as an organization</p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 transform ${
                        enrollmentType === "maird"
                          ? "border-blue-600 bg-blue-50 scale-105 shadow-lg"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => setEnrollmentType("maird")}
                    >
                      <CardContent className="p-6 text-center">
                        <Car
                          className={`h-8 w-8 mx-auto mb-3 transition-all duration-300 ${
                            enrollmentType === "maird" ? "text-blue-600 scale-110" : "text-blue-600"
                          }`}
                        />
                        <h3 className="font-semibold text-lg mb-2">MAIRD</h3>
                        <p className="text-sm text-gray-600">
                          Manufacturers, Assemblers, Importers, Rebuilders and/or Dealers
                        </p>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 transform ${
                        enrollmentType === "other"
                          ? "border-blue-600 bg-blue-50 scale-105 shadow-lg"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => setEnrollmentType("other")}
                    >
                      <CardContent className="p-6 text-center">
                        <Shield
                          className={`h-8 w-8 mx-auto mb-3 transition-all duration-300 ${
                            enrollmentType === "other" ? "text-blue-600 scale-110" : "text-blue-600"
                          }`}
                        />
                        <h3 className="font-semibold text-lg mb-2">Other Entity</h3>
                        <p className="text-sm text-gray-600">Other types of entities</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ) : step === 1 ? (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Registration Agreement</h3>
                    <div className="space-y-4 text-sm text-gray-700 max-h-60 overflow-y-auto">
                      <p>
                        By clicking "I Agree", "I Accept", "Continue", "Sign Up", or likewise, registering, accessing or
                        using the LTMS Website, you agree to enter into a legally binding contract with the Land
                        Transportation Office (LTO).
                      </p>
                      <p>
                        The Services at the LTMS Website are available only to persons with a User Account. You will be
                        held responsible for the confidentiality of your password and any statements made on your
                        account.
                      </p>
                      <p>
                        LTO may change or impose additional fees for the Services at any time without prior notice.
                        Confirmed payments are non-cancellable and fees paid are non-refundable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I have read and agree to the <TermsDialog /> and Privacy Policy
                    </Label>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input
                      id="middleName"
                      value={formData.middleName}
                      onChange={(e) => handleInputChange("middleName", e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Date of Birth *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange("birthDate", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province">Province *</Label>
                      <Input
                        id="province"
                        value={formData.province}
                        onChange={(e) => handleInputChange("province", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                {step > 0 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 ml-auto transition-all duration-300 hover:scale-105"
                  disabled={(step === 0 && enrollmentType === "") || (step === 1 && !agreedToTerms)}
                >
                  {step === 0 ? "Continue" : step === 1 ? "Continue" : "Create Account"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-white">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
