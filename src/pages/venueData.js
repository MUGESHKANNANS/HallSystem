const venues = [
  {
    id: '1',
    name: 'Mani Mahal',
    location: 'Peelamedu - Coimbatore, Tamil Nadu',
    price: 150000,
    capacity: 500,
    rating: 4.8,
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipObAoMfoBM1JirkX9hMLxWRfpsE8RztWPUSgMot=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOpPlRchog1RJ0fONmBtwkafqMW7wTdyRxk3FjM=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipP2i-FODgF3o46yTm7Hny_dgVjVOQ6Nbe0p-W2T=s1360-w1360-h1020',
    ],
    amenities: ['WiFi', 'Parking', 'Catering', 'DJ'],
    description:
      'Luxurious wedding venue with modern amenities and elegant decor. Perfect for grand celebrations.',
    reviews: [
      {
        id: '1',
        userName: 'Priya S.',
        rating: 5,
        comment: 'Amazing venue! Our wedding was perfect.',
        date: '2024-02-15',
      },
    ],
  },
  {
    id: '2',
    name: 'Ramalakshmi Mahal',
    location: 'Peelamedu - Coimbatore, Tamil Nadu',
    price: 200000,
    capacity: 700,
    rating: 4.9,
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipO3lI0KvJSZ60TCHtUZKkndQL0ae7qTldw6quJH=s1360-w1360-h1020',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A_oGbJGjp0C5wEG6z30EaPs2t2XTPSB9wfB60Ts7jt8KmpfwxTrfzI2GKWfm_qJBfIM&usqp=CAU',
      'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/308/872/original/ss20230327-31865-q5tam6.jpg?1679906154',
    ],
    amenities: ['WiFi', 'Parking', 'Catering', 'Live Music'],
    description:
      'A serene garden venue with lush greenery and stunning setups. Ideal for nature-inspired weddings.',
    reviews: [
      {
        id: '2',
        userName: 'Arjun R.',
        rating: 5,
        comment: 'Beautiful venue with amazing service!',
        date: '2024-01-10',
      },
    ],
  },
  // {
  //   id: '3',
  //   name: 'Suguna Kalyana Mahal',
  //   location: 'Peelamedu - Coimbatore, Tamil Nadu',
  //   price: 250000,
  //   capacity: 600,
  //   rating: 4.7,
  //   images: [
  //     'https://lh3.googleusercontent.com/p/AF1QipM_VyAmbI4ZthsZ5ihIuMyb5CHrNFlZn0W8rEl-=s1360-w1360-h1020',
  //     'https://lh3.googleusercontent.com/p/AF1QipNgMVf6H11unaKzRbHLbYwDeEpkkY0kDecwHIrW=s1360-w1360-h1020',
  //     'https://lh5.googleusercontent.com/p/AF1QipO_s7QjVFGIoYzOJeLYQvE4fmcMrvqXVOfPIjNO=w141-h101-n-k-no-nu',
  //   ],
  //   amenities: ['Beachfront', 'WiFi', 'Parking', 'Pool Access'],
  //   description:
  //     'A stunning beachfront resort with breathtaking views and premium facilities. Perfect for destination weddings.',
  //   reviews: [
  //     {
  //       id: '3',
  //       userName: 'Sneha K.',
  //       rating: 4.5,
  //       comment: 'The location is heavenly, and the amenities were top-notch.',
  //       date: '2024-03-20',
  //     },
  //   ],
  // },
  {
    id: '4',
    name: 'GP GRAND GALAXY',
    location: 'Gandhipuram - Coimbatore, Tamil Nadu',
    price: 180000,
    capacity: 550,
    rating: 4.6,
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipMP9CQlAr47_2IMqVB_xUFaKmzYFT7oyT4VtLWR=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipNmiOmNK4Tc3Hv0bV7n72f1kJ-NQX2ztoy2LPId=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipN43cWiEb7boDkfJppk5GFawyaVp2YE-3eNwB1d=s1360-w1360-h1020',
    ],
    amenities: ['WiFi', 'Parking', 'Catering', 'AC Halls'],
    description:
      'A modern convention center with state-of-the-art facilities. Ideal for weddings, conferences, and events.',
    reviews: [
      {
        id: '4',
        userName: 'Karthik N.',
        rating: 4.7,
        comment: 'Great facilities and spacious venue.',
        date: '2024-04-05',
      },
    ],
  },
  {
    id: '5',
    name: 'Balija Naidu Hall',
    location: 'RS Puram - Coimbatore, Tamil Nadu',
    price: 170000,
    capacity: 450,
    rating: 4.4,
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipPPPZ0lXWTaO6onC0uSDeodSh_Ot24H___pVUGF=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPPPZ0lXWTaO6onC0uSDeodSh_Ot24H___pVUGF=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPPPZ0lXWTaO6onC0uSDeodSh_Ot24H___pVUGF=s1360-w1360-h1020',
    ],
    amenities: ['WiFi', 'Parking', 'Catering', 'Projector'],
    description:
      'Charming wedding venue with excellent service and modern amenities.',
    reviews: [
      {
        id: '5',
        userName: 'Divya P.',
        rating: 4.4,
        comment: 'Loved the ambiance and arrangements!',
        date: '2024-05-20',
      },
    ],
  },
  {
    id: '6',
    name: 'Sree Ramalingasowdeswari Hall',
    location: 'R.S. Puram - Coimbatore, Tamil Nadu',
    price: 220000,
    capacity: 800,
    rating: 4.9,
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipNlxm4D_vF92w-vsksTsItzzycEaoQY18sdOGlB=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPzbnD2M6imz9hF0XqBHcpNvVpdHNe59aLCK3X6=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipOUQ--qdVXuRfxsG8nAbDY4tdVm_niRawSL9nrf=s1360-w1360-h1020',
    ],
    amenities: ['WiFi', 'Parking', 'Catering', 'Stage Lighting'],
    description:
      'Grand and elegant wedding venue with premium facilities and spacious interiors.',
    reviews: [
      {
        id: '6',
        userName: 'Rahul M.',
        rating: 5,
        comment: 'An amazing place for large weddings.',
        date: '2024-06-15',
      },
    ],
  },
  {
    id: '7',
    name: 'Brookefields Banquet Hall',
    location: 'RS Puram - Coimbatore, Tamil Nadu',
    price: 170000,
    capacity: 450,
    rating: 4.4,
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipPAyMecWUJGByzjeYQj698cLSXjIDA6IYKw9svt=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipPk4Bnbd5DBSLbh2uAWPGi5n1N6D0tNjGimQUK1=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipNjiWuhLGukhnCIJbYoyWglD9GNhuoaVjYR8pUT=s1360-w1360-h1020',
    ],
    amenities: ['WiFi', 'Parking', 'Catering', 'Projector'],
    description:
      'Charming wedding venue with excellent service and modern amenities.',
    reviews: [
      {
        id: '7',
        userName: 'Divya P.',
        rating: 4.4,
        comment: 'Loved the ambiance and arrangements!',
        date: '2024-05-20',
      },
    ],
  },
];

export default venues;
