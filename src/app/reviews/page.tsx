
"use client"
import React, { useState, useEffect } from 'react';
import { Star, MapPin, Calendar, User, ThumbsUp, MessageCircle } from 'lucide-react';
import { reviews } from '@/data/reviews';


// Motion components simulation (since framer-motion isn't available, we'll use Intersection Observer)
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isInView] as const;
};

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [ref, isInView] = useInView(0.1);

  const getTransform = () => {
    if (!isInView) {
      switch (direction) {
        case 'up': return 'translateY(60px)';
        case 'down': return 'translateY(-60px)';
        case 'left': return 'translateX(60px)';
        case 'right': return 'translateX(-60px)';
        case 'scale': return 'scale(0.8)';
        default: return 'translateY(60px)';
      }
    }
    return 'translateY(0px) translateX(0px) scale(1)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const RestaurantReviews: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredReview, setHoveredReview] = useState<string | null>(null);
  const [visibleReviews, setVisibleReviews] = useState(6);


  

  const filterOptions = [
    { key: 'all', label: 'All Reviews', count: reviews.length },
    { key: '5', label: '5 Stars', count: reviews.filter(r => r.rating === 5).length },
    { key: '4', label: '4 Stars', count: reviews.filter(r => r.rating === 4).length },
    { key: 'verified', label: 'Verified', count: reviews.filter(r => r.verified).length }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'verified') return review.verified;
    return review.rating === parseInt(selectedFilter);
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const renderStars = (rating: number, size: string = 'w-4 h-4') => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${size} transition-all duration-300 ${
          i < rating 
            ? 'text-orange-400 fill-orange-400 hover:scale-110' 
            : 'text-gray-300 hover:text-orange-200'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-600 via-orange-500 to-red-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-orange-900/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <AnimatedSection delay={200} direction="up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent drop-shadow-lg">
                Guest Reviews
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={400} direction="up">
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
                Discover what our guests are saying about their dining experiences
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600} direction="scale">
              {/* Rating Summary */}
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-white/30 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl font-bold drop-shadow-lg">{averageRating.toFixed(1)}</span>
                  <div className="flex items-center gap-1">
                    {renderStars(Math.round(averageRating), 'w-6 h-6')}
                  </div>
                </div>
                <p className="text-orange-100">Based on {reviews.length} reviews</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AnimatedSection delay={200} direction="up">
          <div className="flex flex-wrap gap-3 justify-center">
            {filterOptions.map((option, index) => (
              <AnimatedSection key={option.key} delay={300 + index * 100} direction="scale">
                <button
                  onClick={() => setSelectedFilter(option.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-500 border-2 transform hover:scale-110 hover:shadow-lg ${
                    selectedFilter === option.key
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white border-transparent shadow-xl scale-105'
                      : 'bg-white text-red-600 border-red-200 hover:border-orange-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50'
                  }`}
                >
                  {option.label} ({option.count})
                </button>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.slice(0, visibleReviews).map((review, index) => (
            <AnimatedSection 
              key={review.id}
              delay={index * 150}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            >
              <div
                className={`relative bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 hover:border-orange-300 group cursor-pointer ${
                  hoveredReview === review.id ? 'shadow-orange-200/50' : ''
                }`}
                onMouseEnter={() => setHoveredReview(review.id)}
                onMouseLeave={() => setHoveredReview(null)}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">{review.name}</h3>
                          {review.verified && (
                            <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 flex items-center gap-1 group-hover:text-orange-600 transition-colors duration-300">
                          <MapPin className="w-3 h-3" />
                          {review.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1 group-hover:scale-110 transition-transform duration-300">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1 group-hover:text-orange-600 transition-colors duration-300">
                        <Calendar className="w-3 h-3" />
                        {review.date}
                      </p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
                    {review.review}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-orange-100 group-hover:border-orange-200 transition-colors duration-300">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-all duration-300 hover:scale-110">
                      <ThumbsUp className="w-4 h-4 hover:fill-orange-200 transition-colors duration-300" />
                      <span className="text-sm">Helpful ({review.helpful})</span>
                    </button>
                    <button className="text-gray-500 hover:text-orange-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Load More Button */}
        {visibleReviews < filteredReviews.length && (
          <AnimatedSection delay={400} direction="up">
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleReviews(prev => prev + 6)}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-medium hover:from-red-600 hover:to-orange-600 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1"
              >
                Load More Reviews
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-orange-800/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-200 rounded-full mix-blend-overlay filter blur-2xl animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={200} direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
              Ready to Create Your Own Experience?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={400} direction="up">
            <p className="text-xl text-orange-100 mb-8 drop-shadow-md">
              Join the conversation and share your dining experience with us
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={600} direction="scale">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-orange-50 hover:text-red-700 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1">
                Make a Reservation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-500 hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1">
                Write a Review
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReviews;