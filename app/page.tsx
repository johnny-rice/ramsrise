"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Heart,
  Users,
  Trophy,
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  ArrowRight,
  ExternalLink,
  ArrowDown,
} from "lucide-react"
import Link from "next/link"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { HeroBackground } from "@/components/hero-background"

export default function RamsRisePage() {
  const { addSection } = useScrollAnimation()
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-100">
        <div className="container mx-auto py-3 md:py-4">
          <div className="flex items-center justify-between">
            <SmoothScrollLink href="#top" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span className="text-lg md:text-xl font-bold tracking-tight">Rams Rise</span>
            </SmoothScrollLink>
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <SmoothScrollLink href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                The Mission
              </SmoothScrollLink>
              <SmoothScrollLink href="#events" className="text-sm font-medium hover:text-primary transition-colors">
                Events
              </SmoothScrollLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={addSection} id="top" className="relative overflow-hidden bg-background min-h-screen">
        <HeroBackground />
        <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/80 to-background" />

        <div className="relative container mx-auto py-20 md:py-32 lg:py-48 pt-32">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 lg:space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-balance px-2">Together We Rise</h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance px-2">
              SHRHS Alumni events supporting mental health awareness through community, competition, and connection
            </p>
            {/* scroll down indicator */}
            <div className="flex justify-center items-center">
              <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={addSection} id="about" className="py-12 md:py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-3 md:space-y-4 lg:space-y-6 mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter px-2">The Mission</h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed px-2">
                RamsRise brings together the SHRHS community through athletic competition and purpose-driven
                participation, raising critical funds and awareness for mental health initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              <Card className="bg-card border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-5 md:p-6 lg:p-8 space-y-3 md:space-y-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Mental Health Matters</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Every registration and donation directly supports mental health resources and programs for students
                    and community members
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-5 md:p-6 lg:p-8 space-y-3 md:space-y-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Alumni Unity</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Reconnect with fellow Rams while creating new memories and strengthening our alumni community bonds
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-5 md:p-6 lg:p-8 space-y-3 md:space-y-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Trophy className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Competitive Spirit</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Challenge yourself in our 5K race or bring your A-game in fast-paced 3v3 basketball action
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      {/* Breaking the Stigma */}
      <section ref={addSection} className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-10 lg:space-y-12">
              <div className="text-center space-y-3 md:space-y-4 lg:space-y-6 px-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">Breaking the Stigma</h2>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Mental health challenges affect 1 in 5 adults, yet stigma prevents many from seeking help. Through
                  sports and community, we're creating conversations that save lives.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  RamsRise is more than our events—it's a platform to normalize mental health discussions, celebrate
                  vulnerability as strength, and ensure everyone knows they're not alone.
                </p>
                <p className="text-base md:text-lg lg:text-xl font-semibold text-primary">Together, we rise above the silence.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-6 lg:pt-8">
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">1 in 5</div>
                  <div className="text-sm md:text-base text-muted-foreground">Adults with mental illness</div>
                </div>
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">60%</div>
                  <div className="text-sm md:text-base text-muted-foreground">Don't receive treatment</div>
                </div>
                <div className="text-center space-y-1 md:space-y-2">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">100%</div>
                  <div className="text-sm md:text-base text-muted-foreground">Can benefit from support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Events Section */}
      <section ref={addSection} id="events" className="py-12 md:py-16 lg:py-24 bg-card/30">
          <div className="container mx-auto">
            <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">Our Events</h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Two opportunities to participate with purpose and make a difference
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* 5K Event */}
              <Card className="bg-card border-2 hover:border-primary transition-all duration-300 overflow-hidden">
                <div
                  className="h-48 md:h-56 lg:h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      "url(/5k-background.svg)",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
                  <Badge className="absolute top-3 left-3 md:top-4 md:left-4 bg-muted text-muted-foreground font-semibold text-xs md:text-sm">EVENT COMPLETED</Badge>
                </div>
                <CardContent className="p-5 md:p-6 lg:p-8 space-y-4 md:space-y-5 lg:space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">Tackle the Stigma 5K</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Thank you to everyone who participated in our 2025 5K race! Stay tuned for plans for the next 5K event.
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <div className="text-sm md:text-base font-semibold">September 14, 2025</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Event Completed</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <div className="text-sm md:text-base font-semibold">Shepherd Hill Regional High School</div>
                        <div className="text-xs md:text-sm text-muted-foreground">68 Dudley Oxford Rd, Dudley, MA</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary rounded-lg p-3 md:p-4 space-y-1 md:space-y-2">
                    <div className="font-semibold text-xs md:text-sm">📢 Stay Tuned!</div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      We're planning our next 5K event. Follow us on social media or check back soon for updates on registration and event details.
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4 space-y-2 md:space-y-3">
                    <p className="text-xs md:text-sm text-muted-foreground">
                      All proceeds support Brake the Silence & JAK-L foundations for suicide prevention awareness
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Basketball Tournament */}
              <Card className="bg-card border-2 hover:border-primary transition-all duration-300 overflow-hidden">
                <div
                  className="h-48 md:h-56 lg:h-64 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      "url(/basketball-background.svg)",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
                  <Badge className="absolute top-3 left-3 md:top-4 md:left-4 bg-amber-500/90 text-white font-semibold text-xs md:text-sm">
                    PENDING
                  </Badge>
                </div>
                <CardContent className="p-5 md:p-6 lg:p-8 space-y-4 md:space-y-5 lg:space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">Alumni 3v3 Tournament</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Our 3v3 basketball tournament is in the planning stages. Stay tuned for the next tournament announcement!
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <div className="text-sm md:text-base font-semibold">SHRHS Courts</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Shepherd Hill Regional High School</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <Users className="h-4 w-4 md:h-5 md:w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <div className="text-sm md:text-base font-semibold">SHRHS Alumni</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Open to all graduating classes</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary rounded-lg p-3 md:p-4 space-y-1 md:space-y-2">
                    <div className="font-semibold text-xs md:text-sm">📢 Stay Tuned!</div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      We're working on plans for the inaugural 3v3 basketball tournament. Check back soon for dates, registration details, and prize information. Follow us on social media for the latest updates!
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4 space-y-2 md:space-y-3">
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Proceeds support mental health awareness and suicide prevention initiatives
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      {/* How You Can Help */}
      <section ref={addSection} id="support" className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto">
            <div className="text-center space-y-2 md:space-y-3 lg:space-y-4 mb-8 md:mb-12 lg:mb-16 px-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">How You Can Help</h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you play, donate, or spread the word—every action makes a difference
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Card className="bg-card border-2 text-center hover:border-primary transition-all duration-300">
                <CardContent className="p-5 md:p-6 lg:p-8 space-y-3 md:space-y-4">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Users className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Participate</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Join our 5K race or form your basketball team while supporting mental health
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 bg-transparent text-sm md:text-base"
                    onClick={() => setIsComingSoonOpen(true)}
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 text-center hover:border-primary transition-all duration-300">
                <CardContent className="p-5 md:p-6 lg:p-8 space-y-3 md:space-y-4">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Heart className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Make a Donation</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Can't participate? Your donation directly funds mental health resources
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 bg-transparent text-sm md:text-base"
                    onClick={() => setIsComingSoonOpen(true)}
                  >
                    Donate Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 text-center hover:border-primary transition-all duration-300">
                <CardContent className="p-5 md:p-6 lg:p-8 space-y-3 md:space-y-4">
                  <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <ExternalLink className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Spread the Word</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Share RamsRise with your network and amplify the message
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 bg-transparent text-sm md:text-base"
                    onClick={() => setIsComingSoonOpen(true)}
                  >
                    Share Event
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 md:mt-12 lg:mt-16 max-w-3xl mx-auto">
              <Card className="bg-primary/10 border-primary/30 border-2">
                <CardContent className="p-5 md:p-6 lg:p-8 text-center space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold">Become a Sponsor</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Partner with RamsRise to showcase your commitment to mental health and community wellness. Sponsorship
                    packages available for both events.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base h-10 md:h-11 px-5 md:px-6"
                    onClick={() => setIsComingSoonOpen(true)}
                  >
                    Sponsorship Opportunities
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      {/* Resources Section + Footer */}
      <section className="bg-background py-12">
          <div className="py-8 md:py-12 lg:py-16 bg-card/30 border-t border-border">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4 lg:space-y-6 px-2">
                <h3 className="text-xl md:text-2xl font-bold">Mental Health Resources</h3>
                <p className="text-sm md:text-base text-muted-foreground">If you or someone you know is struggling, help is available</p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 pt-2 md:pt-4">
                  <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm" asChild>
                    <a href="tel:988" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                      988 Suicide & Crisis Lifeline
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm" asChild>
                    <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                      NAMI
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent text-xs md:text-sm" asChild>
                    <a href="https://www.mentalhealth.gov" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                      MentalHealth.gov
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-card border-t border-border py-8 md:py-10 lg:py-12">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-6 md:mb-8">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    <span className="text-lg md:text-xl font-bold">Rams Rise</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    SHRHS Alumni events supporting mental health awareness and resources in our community.
                  </p>
                  <p className="text-xs md:text-sm font-semibold">Together, we unite. Together, we rise.</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-sm md:text-base font-semibold">Quick Links</h4>
                  <div className="flex flex-col gap-2 text-xs md:text-sm text-muted-foreground">
                    <Link href="#about" className="hover:text-primary transition-colors">
                      About
                    </Link>
                    <Link href="#events" className="hover:text-primary transition-colors">
                      Event Details
                    </Link>
                    <Link href="#support" className="hover:text-primary transition-colors">
                      How to Help
                    </Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-6 md:pt-8 border-t border-border text-center text-xs md:text-sm text-muted-foreground">
                <p>© 2025 RamsRise. All rights reserved. Built with purpose.</p>
              </div>
            </div>
          </footer>
        </section>

      {/* Coming Soon Dialog */}
      <Dialog open={isComingSoonOpen} onOpenChange={setIsComingSoonOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Coming Soon!</DialogTitle>
            <DialogDescription className="text-center pt-4 text-base">
              We're working hard to bring you this feature. Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setIsComingSoonOpen(false)}>
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
