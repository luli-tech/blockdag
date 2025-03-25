"use client"

import { useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Team member data type
export interface TeamMember {
  name: string
  title: string
  previousCompany: string
  image: string
}

interface TeamCarouselProps {
  teamMembers: TeamMember[]
  onSlideChange?: (index: number) => void
}

export default function TeamCarousel({ teamMembers, onSlideChange }: TeamCarouselProps) {
  // Refs for DOM elements
  const carouselRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const prevButtonRef = useRef<HTMLButtonElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)

  // Initialize carousel on component mount
  useEffect(() => {
    // Get DOM elements
    const carousel = carouselRef.current
    const progressBar = progressBarRef.current
    const prevButton = prevButtonRef.current
    const nextButton = nextButtonRef.current
    const pagination = paginationRef.current

    if (!carousel || !progressBar || !prevButton || !nextButton || !pagination) {
      return
    }

    // Carousel state
    let activeSlide = 0
    let autoplayInterval: NodeJS.Timeout | null = null
    let progressInterval: NodeJS.Timeout | null = null
    const itemsPerSlide = 6
    const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide)
    const autoplayDuration = 5000 // 5 seconds

    // Create pagination dots
    const createPaginationDots = () => {
      pagination.innerHTML = ""
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("button")
        dot.className = `w-2 h-2 rounded-sm transition-all ${i === activeSlide ? "bg-white" : "bg-gray-600"}`
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`)
        dot.addEventListener("click", () => {
          goToSlide(i)
        })
        pagination.appendChild(dot)
      }
    }

    // Update pagination dots
    const updatePaginationDots = () => {
      const dots = pagination.querySelectorAll("button")
      dots.forEach((dot, index) => {
        if (index === activeSlide) {
          dot.classList.remove("bg-gray-600")
          dot.classList.add("bg-white")
        } else {
          dot.classList.remove("bg-white")
          dot.classList.add("bg-gray-600")
        }
      })
    }

    // Render team members
    const renderTeamMembers = () => {
      carousel.innerHTML = ""

      // Create grid container
      const grid = document.createElement("div")
      grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"

      // Get current slide members
      const startIndex = activeSlide * itemsPerSlide
      const currentMembers = teamMembers.slice(startIndex, startIndex + itemsPerSlide)

      // Create member cards
      currentMembers.forEach((member) => {
        const memberCard = document.createElement("div")
        memberCard.className = "flex flex-col items-center"

        // Create image container
        const imageContainer = document.createElement("div")
        imageContainer.className = "bg-[#0084FF] rounded-lg p-1 mb-2 w-full max-w-[220px] aspect-square overflow-hidden"

        // Create image
        const image = document.createElement("img")
        image.src = member.image
        image.alt = member.name
        image.className = "w-full h-full object-cover rounded-lg"
        imageContainer.appendChild(image)

        // Create name
        const name = document.createElement("h3")
        name.className = "text-xl font-bold text-center"
        name.textContent =
          member.name.length > 20
            ? member.name.split(" ").slice(0, 2).join(" ") + (member.name.split(" ").length > 2 ? "..." : "")
            : member.name

        // Create title
        const title = document.createElement("p")
        title.className = "text-[#0084FF] text-sm text-center"
        title.textContent = member.title

        // Create previous company container
        const companyContainer = document.createElement("div")
        companyContainer.className = "flex items-center mt-2"

        // Create "EX —" text
        const exText = document.createElement("div")
        exText.className = "text-xs text-gray-400 mr-2"
        exText.textContent = "EX —"
        companyContainer.appendChild(exText)

        // Create previous company text if it exists
        if (member.previousCompany) {
          const company = document.createElement("div")
          company.className = "text-xs font-bold"
          company.textContent = member.previousCompany
          companyContainer.appendChild(company)
        }

        // Append all elements to member card
        memberCard.appendChild(imageContainer)
        memberCard.appendChild(name)
        memberCard.appendChild(title)
        memberCard.appendChild(companyContainer)

        // Append member card to grid
        grid.appendChild(memberCard)
      })

      // Append grid to carousel
      carousel.appendChild(grid)
    }

    // Move background (using the global function from AnimatedBackground)
    const moveBackground = (index: number) => {
      // @ts-ignore
      if (typeof window.moveBackground === "function") {
        // @ts-ignore
        window.moveBackground(index)
      }
    }

    // Go to specific slide
    const goToSlide = (index: number) => {
      activeSlide = index
      renderTeamMembers()
      updatePaginationDots()
      moveBackground(index)
      resetAutoplay()

      // Call the onSlideChange callback if provided
      if (onSlideChange) {
        onSlideChange(index)
      }

      // Add pulse animation to button
      if (index > activeSlide) {
        nextButton.classList.add("animate-pulse")
        setTimeout(() => {
          nextButton.classList.remove("animate-pulse")
        }, 500)
      } else if (index < activeSlide) {
        prevButton.classList.add("animate-pulse")
        setTimeout(() => {
          prevButton.classList.remove("animate-pulse")
        }, 500)
      }
    }

    // Next slide
    const nextSlide = () => {
      activeSlide = (activeSlide + 1) % totalSlides
      renderTeamMembers()
      updatePaginationDots()
      moveBackground(activeSlide)
      resetAutoplay()

      // Call the onSlideChange callback if provided
      if (onSlideChange) {
        onSlideChange(activeSlide)
      }

      // Add pulse animation to next button
      nextButton.classList.add("animate-pulse")
      setTimeout(() => {
        nextButton.classList.remove("animate-pulse")
      }, 500)
    }

    // Previous slide
    const prevSlide = () => {
      activeSlide = (activeSlide - 1 + totalSlides) % totalSlides
      renderTeamMembers()
      updatePaginationDots()
      moveBackground(activeSlide)
      resetAutoplay()

      // Call the onSlideChange callback if provided
      if (onSlideChange) {
        onSlideChange(activeSlide)
      }

      // Add pulse animation to prev button
      prevButton.classList.add("animate-pulse")
      setTimeout(() => {
        prevButton.classList.remove("animate-pulse")
      }, 500)
    }

    // Start autoplay
    const startAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }

      autoplayInterval = setInterval(() => {
        nextSlide()
      }, autoplayDuration)

      // Start progress bar animation
      startProgressBar()
    }

    // Reset autoplay
    const resetAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }

      if (progressInterval) {
        clearInterval(progressInterval)
      }

      // Reset progress bar
      progressBar.style.width = "0%"

      // Start autoplay again
      startAutoplay()
    }

    // Start progress bar animation
    const startProgressBar = () => {
      if (progressInterval) {
        clearInterval(progressInterval)
      }

      progressBar.style.width = "0%"

      const startTime = Date.now()
      const endTime = startTime + autoplayDuration

      progressInterval = setInterval(() => {
        const currentTime = Date.now()
        const elapsedTime = currentTime - startTime
        const progress = Math.min((elapsedTime / autoplayDuration) * 100, 100)

        progressBar.style.width = `${progress}%`

        if (currentTime >= endTime) {
          clearInterval(progressInterval)
        }
      }, 16) // ~60fps
    }

    // Add event listeners
    prevButton.addEventListener("click", prevSlide)
    nextButton.addEventListener("click", nextSlide)

    // Initialize carousel
    createPaginationDots()
    renderTeamMembers()
    startAutoplay()

    // Cleanup on component unmount
    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
      }

      if (progressInterval) {
        clearInterval(progressInterval)
      }

      prevButton.removeEventListener("click", prevSlide)
      nextButton.removeEventListener("click", nextSlide)
    }
  }, [teamMembers, onSlideChange])

  return (
    <div className="relative">
      <button
        ref={prevButtonRef}
        className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-blue-500/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Carousel container */}
      <div ref={carouselRef}></div>

      <button
        ref={nextButtonRef}
        className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-blue-500/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination dots */}
      <div ref={paginationRef} className="flex justify-center gap-2 mt-12"></div>

      {/* Progress bar */}
      <div className="flex justify-center mt-4">
        <div className="relative w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-100 ease-linear"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  )
}

