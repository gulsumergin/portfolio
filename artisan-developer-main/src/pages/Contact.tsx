import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send, MapPin, Phone, Star } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { sendContactForm } from "@/lib/formspree";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showDialog, setShowDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Called when user confirms in dialog
  const handleSend = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      const res = await sendContactForm(formData);
      if (res.ok || res.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Message could not be sent. Please try again.");
      }
    } catch (e) {
      setError("Message could not be sent. Please try again.");
    }
    setIsSubmitting(false);
    setShowDialog(false);
  };

  // Called on form submit, opens dialog
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "ummugulsumerginn@gmail.com",
      href: "mailto:ummugulsumerginn@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ümmü-gülsüm-ergin-6b584217b",
      href: "https://linkedin.com/in/ümmü-gülsüm-ergin-6b584217b/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/gulsumergin",
      href: "https://github.com/gulsumergin"
    },
    {
      icon: MapPin,
      label: "Location",
      value: (
        <>
          Istanbul, Turkey<br />
          Duisburg / Düsseldorf, Germany
        </>
      ),
      href: null
    }
  ];

  // Comment & Rating State
  const [comments, setComments] = useState<{ name: string; comment: string; rating: number }[]>([]);
  const [commentForm, setCommentForm] = useState({ name: "", comment: "", rating: 0 });
  const [commentError, setCommentError] = useState("");
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Delete comment by index
  const handleDeleteComment = (idx: number) => {
    setComments(prev => prev.filter((_, i) => i !== idx));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommentError("");
    setCommentSuccess(false);
    if (!commentForm.name.trim() || !commentForm.comment.trim() || commentForm.rating < 1) {
      setCommentError("Please enter your name, comment, and select a rating.");
      return;
    }
    setComments(prev => [
      { name: commentForm.name, comment: commentForm.comment, rating: commentForm.rating },
      ...prev
    ]);
    setCommentForm({ name: "", comment: "", rating: 0 });
    setCommentSuccess(true);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch for project ideas, collaborations, or any questions you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in shadow-card bg-white" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below to contact me directly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    className="min-h-32"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                
                <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                  <AlertDialogTrigger asChild>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure you want to send this message?</AlertDialogTitle>
                      <AlertDialogDescription>
                        <div className="text-left space-y-2 mt-2">
                          <div><b>Full Name:</b> {formData.name}</div>
                          <div><b>E-mail:</b> {formData.email}</div>
                          <div><b>Subject:</b> {formData.subject}</div>
                          <div><b>Message:</b> {formData.message}</div>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleSend} disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Yes, Send"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                {success && (
                  <div className="text-green-600 text-center font-medium mt-2">Your message has been sent successfully!</div>
                )}
                {error && (
                  <div className="text-red-600 text-center font-medium mt-2">{error}</div>
                )}
              </form>
            </CardContent>
          </Card>
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Other ways to reach me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
            {/* Availability */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm font-medium mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Available for new projects
                  </div>
                  <p className="text-muted-foreground">
                    I am open to freelance projects and full-time positions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comments & Rating Section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Leave a Comment & Rating</CardTitle>
              <CardDescription>
                Share your feedback or rate my work!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Your name"
                    value={commentForm.name}
                    onChange={e => setCommentForm(f => ({ ...f, name: e.target.value }))}
                    className="sm:w-1/3"
                  />
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(star => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setCommentForm(f => ({ ...f, rating: star }))}
                        aria-label={`Rate ${star} star`}
                        className="focus:outline-none"
                      >
                        <Star
                          size={22}
                          fill={star <= commentForm.rating ? "#facc15" : "none"}
                          stroke="#facc15"
                          className={star <= commentForm.rating ? "" : "opacity-50"}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea
                  placeholder="Write your comment..."
                  value={commentForm.comment}
                  onChange={e => setCommentForm(f => ({ ...f, comment: e.target.value }))}
                  className="min-h-24"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
                  size="lg"
                  variant="secondary"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit
                </Button>
                {commentError && <div className="text-red-600 text-sm">{commentError}</div>}
                {commentSuccess && <div className="text-green-600 text-sm">Thank you for your feedback!</div>}
              </form>
              {/* List comments with scroll and delete */}
              <div
                className="mt-8 space-y-6 max-h-64 overflow-y-auto pr-2"
                style={{ scrollbarWidth: "thin" }}
              >
                {comments.length === 0 && (
                  <div className="text-muted-foreground text-center">No comments yet.</div>
                )}
                {comments.map((c, i) => (
                  <div key={i} className="border-b pb-4 flex items-start justify-between gap-2 group">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{c.name}</span>
                        <span className="flex items-center">
                          {[1,2,3,4,5].map(star => (
                            <Star
                              key={star}
                              size={16}
                              fill={star <= c.rating ? "#facc15" : "none"}
                              stroke="#facc15"
                              className={star <= c.rating ? "" : "opacity-40"}
                            />
                          ))}
                        </span>
                      </div>
                      <div className="text-muted-foreground">{c.comment}</div>
                    </div>
                    <button
                      onClick={() => handleDeleteComment(i)}
                      className="text-xs text-red-500 opacity-0 group-hover:opacity-100 ml-2 transition"
                      title="Delete comment"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;