/**
 * Example Page - JBOX UI Components Demo
 * 
 * This page demonstrates all available UI components in the project.
 * It can be fully rewritten or removed entirely for production use.
 * 
 * Components shown:
 * - Card, Button, Input, Textarea, Label
 * - Field (with FieldLabel, FieldDescription)
 * - InputGroup, Separator, Badge
 * - Select, ComboboxInput
 * - DropdownMenu, AlertDialog
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxLabel, ComboboxCollection } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function Page() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      padding: "3rem", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center",
      gap: "3rem",
      backgroundColor: "#f8fafc"
    }}>
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem", color: "#1e293b" }}>
          Welcome to JBOX
        </h1>
        <p style={{ color: "#64748b", fontSize: "1.1rem" }}>
          UI Components Demo Page
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
        gap: "2rem",
        maxWidth: "1200px",
        width: "100%"
      }}>
        {/* Card Section */}
        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>A flexible container with header, content, and footer</CardDescription>
          </CardHeader>
          <CardContent>
            <p style={{ color: "#64748b" }}>This is the card content area. Use it to group related content together.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Action</Button>
          </CardFooter>
        </Card>

        {/* Form Elements Section */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>Input, Textarea, Select, and Combobox</CardDescription>
          </CardHeader>
          <CardContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Input placeholder="Text input" />
            <Textarea placeholder="Textarea input" />
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
              </SelectContent>
            </Select>

            <Combobox>
              <ComboboxInput placeholder="Search or type..." />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxItem value="1">Option 1</ComboboxItem>
                  <ComboboxItem value="2">Option 2</ComboboxItem>
                  <ComboboxItem value="3">Option 3</ComboboxItem>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </CardContent>
        </Card>

        {/* Field & Label Section */}
        <Card>
          <CardHeader>
            <CardTitle>Field Component</CardTitle>
            <CardDescription>Labeled form fields with descriptions</CardDescription>
          </CardHeader>
          <CardContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Field>
              <FieldLabel>Email Address</FieldLabel>
              <Input type="email" placeholder="Enter your email" />
              <FieldDescription>We'll never share your email with anyone.</FieldDescription>
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" placeholder="Enter password" />
            </Field>
          </CardContent>
        </Card>

        {/* Interactive Components Section */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Components</CardTitle>
            <CardDescription>Buttons, Badges, Dropdowns & Dialogs</CardDescription>
          </CardHeader>
          <CardContent style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>

            <Separator />

            <div style={{ display: "flex", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Input Group Section */}
        <Card>
          <CardHeader>
            <CardTitle>Input Group</CardTitle>
            <CardDescription>Inputs with attached buttons or icons</CardDescription>
          </CardHeader>
          <CardContent>
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
            </InputGroup>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
