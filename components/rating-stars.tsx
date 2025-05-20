"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface RatingStarsProps {
  initialRating?: number
  totalStars?: number
  size?: "sm" | "md" | "lg"
  readOnly?: boolean
  onChange?: (rating: number) => void
}

export function RatingStars({
  initialRating = 0,
  totalStars = 5,
  size = "md",
  readOnly = false,
  onChange,
}: RatingStarsProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoverRating, setHoverRating] = useState(0)

  const handleStarClick = (index: number) => {
    if (readOnly) return

    const newRating = index + 1
    setRating(newRating)
    onChange?.(newRating)
  }

  const starSizes = {
    sm: "h-3 w-3",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const starSize = starSizes[size]

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1
        const isFilled = readOnly ? starValue <= rating : starValue <= (hoverRating || rating)

        return (
          <Star
            key={index}
            className={`${starSize} ${
              isFilled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } ${!readOnly && "cursor-pointer"}`}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => !readOnly && setHoverRating(starValue)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
          />
        )
      })}
    </div>
  )
}
