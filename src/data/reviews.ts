interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  location: string;
  review: string;
  helpful: number;
  avatar: string;
  verified: boolean;
}

export const reviews: Review[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 days ago',
      location: 'Local Guide',
      review: 'Absolutely incredible dining experience! The ambiance was perfect for our anniversary dinner. Every dish was a masterpiece - the flavors were perfectly balanced and the presentation was stunning. The staff went above and beyond to make our evening special.',
      helpful: 24,
      avatar: 'SJ',
      verified: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      rating: 5,
      date: '1 week ago',
      location: 'Food Enthusiast',
      review: 'This place has become our go-to spot for special occasions. The chef\'s attention to detail is remarkable, and the seasonal menu keeps us coming back. The wine pairing recommendations were spot on!',
      helpful: 18,
      avatar: 'MC',
      verified: true
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      rating: 4,
      date: '2 weeks ago',
      location: 'Verified Diner',
      review: 'Beautiful restaurant with an amazing atmosphere. The food was delicious, though the service was a bit slow during peak hours. Still, the quality of ingredients and creativity in the dishes made it worth the wait.',
      helpful: 12,
      avatar: 'ER',
      verified: true
    },
    {
      id: '4',
      name: 'James Wilson',
      rating: 5,
      date: '3 weeks ago',
      location: 'Regular Customer',
      review: 'Outstanding cuisine and impeccable service. The tasting menu was an adventure for the palate. Each course told a story, and the sommelier\'s wine selections complemented every dish perfectly.',
      helpful: 31,
      avatar: 'JW',
      verified: true
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      rating: 4,
      date: '1 month ago',
      location: 'Food Blogger',
      review: 'Impressive culinary craftsmanship! The fusion of traditional and modern techniques creates unique flavors. The dessert course was particularly memorable. Definitely deserves its reputation.',
      helpful: 15,
      avatar: 'LT',
      verified: true
    },
    {
      id: '6',
      name: 'David Park',
      rating: 5,
      date: '1 month ago',
      location: 'Local Guide',
      review: 'From the moment we walked in, we were treated like VIPs. The attention to detail in both food and service is unmatched. This is fine dining at its absolute best.',
      helpful: 22,
      avatar: 'DP',
      verified: true
    },
    {
      id: '7',
      name: 'Rachel Green',
      rating: 4,
      date: '2 months ago',
      location: 'Verified Diner',
      review: 'Creative dishes with bold flavors. The atmosphere is elegant yet comfortable. Perfect for both business dinners and romantic evenings. Will definitely be back!',
      helpful: 9,
      avatar: 'RG',
      verified: false
    },
    {
      id: '8',
      name: 'Alex Martinez',
      rating: 5,
      date: '2 months ago',
      location: 'Food Critic',
      review: 'A culinary gem that exceeds expectations. The chef\'s innovative approach to classic dishes is refreshing. Every element on the plate serves a purpose. Truly exceptional.',
      helpful: 28,
      avatar: 'AM',
      verified: true
    }
  ];