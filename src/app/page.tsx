'use client'
// assumptions:
// didn't create feature branch for this since i'm the only person working on it
// the provided JSON was missing an opening array bracket so i added it
// each card has a Get Quote button
// not being particular about font library since that wasn't specified
// made eyeball estimates for things such as font size, margin size, color, padding size, border width, etc. since those weren't specified
// made the layout of the card stretch to take up the whole width of the page
// i didn't see anything in the json specifying a "featured partner", so i didn't implement a special border for that as seen in mock
// using a library of my choice is ok for icons and star rating
// the info tip next to the star rating does not need to be implemented because the design showed dummy text and the directions didn't specify what i should use to determine that a company is better than other companies
// precision for the star rating up to the .5 decimal is acceptable
// "filtering for rating and distance" should be sorts, whereas "filtering by service" is an actual filter

import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import CardItem from '@/components/CardItem'

export default function Home() {
  const providerJson = [
    {
      _id: '643817b1eeb62ebdc360736a',
      name: 'Az Custom Landscapes | Artificial Turf Specialist',
      slug: 'az-custom-landscapes-artificial-turf-specialist-361402',
      phone: '5207716602',
      website: 'http://www.azcustomlandscapes.com/',
      social_media: {
        facebook: 'https://www.facebook.com/1534320303548898',
      },
      address: '1110 E Pennsylvania St Suite 405, Tucson, AZ 85714',
      street: '1110 E Pennsylvania St Suite 405',
      city: 'Tucson',
      state: 'AZ',
      zip: '85714',
      latitude: 32.171476,
      longitude: -110.9547565,
      nearest_major_citystate: 'TUCSON,AZ',
      geolocation: {
        type: 'Point',
        coordinates: [-110.9547565, 32.171476],
      },
      categories: ['lawn'],
      services: [
        'Commercial lawn care',
        'Artificial turf',
        'Pavers',
        'Lawn maintenance',
        'Hardscapes',
        'Sod installation',
        'Residential',
        'Landscaping',
      ],
      highlights: [
        'helps educate customers',
        'free quotes',
        'punctual service',
        'transparent pricing',
      ],
      lowlights: {
        lawn: ['small online presence'],
      },
      certifications: {},
      awards: {},
      third_party_ratings: {
        google_places: {
          review_score: 4.8,
          review_count: 49,
        },
      },
      rating: {
        th: 3.6957003966275015,
        toh: 4.653198163103472,
      },
      google_places_id: {
        data_id: '0x86d67ad741ff5823:0xd37f74388996c98f',
        data_cid: '15240027450220398991',
      },
      is_hidden: false,
      status: {
        is_hidden: false,
        reason: '',
      },
      last_updated: '2023-04-13 11:42:19.993000',
      review_score: 4.8,
      review_count: 49,
      distance: 3.8392407694383315,
    },
    {
      _id: '6438165feeb62ebdc3605824',
      name: 'Horticulture Unlimited, Inc.',
      slug: 'horticulture-unlimited-inc-584543',
      phone: '5203214678',
      website: 'http://www.horticultureunlimited.com/',
      social_media: {
        facebook: 'https://www.facebook.com/HorticultureUnlimitedInc',
        twitter: 'https://twitter.com/HorticultureAZ',
      },
      address: '3237 N Richey Blvd, Tucson, AZ 85716',
      street: '3237 N Richey Blvd',
      city: 'Tucson',
      state: 'AZ',
      zip: '85716',
      latitude: 32.266126,
      longitude: -110.91618969999999,
      nearest_major_citystate: 'CATALINA FOOTHILLS,AZ',
      geolocation: {
        type: 'Point',
        coordinates: [-110.91618969999999, 32.266126],
      },
      categories: ['lawn'],
      services: [
        'Garden design and maintenance',
        'Outdoor living space',
        'Irrigation',
        'Tree and shrub trimming',
        'Commercial lawn care',
        'Lawn maintenance',
        'Fountains',
        'Pond installation and maintenance',
        'Water features',
        'Tree and shrub pruning',
        'Landscaping',
        'Outdoor lighting',
        'Snow removal',
        'Lawn mowing',
        'Residential',
        'Pavers',
        'Weed control',
        'Hardscapes',
      ],
      highlights: [
        'helps educate customers',
        'good customer service',
        'transparent pricing',
      ],
      lowlights: {
        lawn: ['small online presence'],
      },
      certifications: {},
      awards: {},
      third_party_ratings: {
        google_places: {
          review_score: 4.6,
          review_count: 92,
        },
      },
      rating: {
        th: 3.979283426196193,
        toh: 4.6,
      },
      google_places_id: {
        data_id: '0x86d671f0144a7065:0x1d67e0f12daa7026',
        data_cid: '2118909476158992422',
      },
      is_hidden: false,
      status: {
        is_hidden: false,
        reason: '',
      },
      last_updated: '2023-04-13 11:38:06.543000',
      review_score: 4.6,
      review_count: 92,
      distance: 3.1171953088226085,
    },
    {
      _id: '6438165feeb62ebdc3605823',
      name: 'Action Yard and Tree Service Tucson AZ | Landscaping Company',
      slug: 'action-yard-and-tree-service-tucson-az-landscaping-company-908547',
      phone: '5208294791',
      website: 'https://actionyardandtree.com/',
      social_media: {
        facebook: 'https://www.facebook.com/actionyardandtree/',
      },
      address: '3925 E 29th St #403, Tucson, AZ 85711',
      street: '3925 E 29th St #403',
      city: 'Tucson',
      state: 'AZ',
      zip: '85711',
      latitude: 32.200514999999996,
      longitude: -110.908356,
      nearest_major_citystate: 'TUCSON,AZ',
      geolocation: {
        type: 'Point',
        coordinates: [-110.908356, 32.200514999999996],
      },
      categories: ['lawn'],
      services: [
        'Irrigation',
        'Outdoor living space',
        'Tree and shrub pruning',
        'Lawn maintenance',
        'Weed control',
        'Residential',
        'Landscaping',
        'Commercial lawn care',
        'Tree and shrub trimming',
      ],
      highlights: [
        'helps educate customers',
        'transparent pricing',
        'good customer service',
        'free quotes',
      ],
      lowlights: {
        lawn: ['small online presence'],
      },
      certifications: {},
      awards: {},
      third_party_ratings: {
        google_places: {
          review_score: 4.4,
          review_count: 133,
        },
      },
      rating: {
        th: 3.9660275519076853,
        toh: 4.4,
      },
      google_places_id: {
        data_id: '0x86d66f59632b6fe5:0x19db957ee4e52802',
        data_cid: '1863247243086473218',
      },
      is_hidden: false,
      status: {
        is_hidden: false,
        reason: '',
      },
      last_updated: '2023-04-13 11:38:06.506000',
      review_score: 4.4,
      review_count: 133,
      distance: 1.8072380747350796,
    },
    {
      _id: '64381876eeb62ebdc3608342',
      name: 'Southwest Greens of Tucson',
      slug: 'southwest-greens-of-tucson-296576',
      phone: '5208228193',
      website: 'https://www.swgartificialgrasstucson.com/',
      social_media: {
        facebook:
          'https://www.facebook.com/Southwest-Greens-of-Tucson-172200253727',
        youtube: 'https://www.youtube.com/channel/UCHQFuGwKV9mIaNoISZW8KWw',
        instagram: 'https://www.instagram.com/swgreenstucson/?hl=en',
      },
      address: '2130 E 12th St #100, Tucson, AZ 85719',
      street: '2130 E 12th St #100',
      city: 'Tucson',
      state: 'AZ',
      zip: '85719',
      latitude: 32.2199272,
      longitude: -110.9402945,
      nearest_major_citystate: 'TUCSON,AZ',
      geolocation: {
        type: 'Point',
        coordinates: [-110.9402945, 32.2199272],
      },
      categories: ['lawn'],
      services: [
        'Residential',
        'Sod installation',
        'Landscaping',
        'Lawn maintenance',
        'Commercial lawn care',
        'Artificial turf',
        'Lawn mowing',
        'Irrigation',
        'Fertilizing',
      ],
      highlights: [
        'helps educate customers',
        'good customer service',
        'transparent pricing',
      ],
      lowlights: {
        lawn: ['small online presence'],
      },
      certifications: {},
      awards: {},
      third_party_ratings: {
        google_places: {
          review_score: 4.2,
          review_count: 16,
        },
      },
      rating: {
        th: 3.625347796087865,
        toh: 4.2,
      },
      google_places_id: {
        data_id: '0x86d673e8c37b54a7:0x5257b63ff2647fd7',
        data_cid: '5933411419849785303',
      },
      is_hidden: false,
      status: {
        is_hidden: false,
        reason: '',
      },
      last_updated: '2023-04-13 11:44:49.587000',
      review_score: 4.2,
      review_count: 16,
      distance: 0.8187568257403791,
    },
    {
      _id: '64381699eeb62ebdc3605cd3',
      name: 'Sonoran Gardens Landscaping Design & Construction',
      slug: 'sonoran-gardens-landscaping-design-and-construction-608185',
      phone: '5205799411',
      website: 'https://sonorangardensinc.com/',
      social_media: {},
      address: '4261 W Jeremy Pl Ste 2, Tucson, AZ 85741',
      street: '4261 W Jeremy Pl Ste 2',
      city: 'Tucson',
      state: 'AZ',
      zip: '85741',
      latitude: 32.3351055,
      longitude: -111.0570257,
      nearest_major_citystate: 'CASAS ADOBES,AZ',
      geolocation: {
        type: 'Point',
        coordinates: [-111.0570257, 32.3351055],
      },
      categories: ['lawn'],
      services: [
        'Irrigation',
        'Fertilizing',
        'Residential',
        'Pavers',
        'Outdoor living space',
        'Fountains',
        'Landscaping',
        'Pond installation and maintenance',
        'Tree and shrub trimming',
        'Water features',
        'Lawn maintenance',
        'Outdoor lighting',
        'Garden design and maintenance',
        'Lawn mowing',
        'Hardscapes',
        'Tree and shrub pruning',
      ],
      highlights: [
        'helps educate customers',
        'good customer service',
        'transparent pricing',
      ],
      lowlights: {
        lawn: ['small online presence'],
      },
      certifications: {},
      awards: {},
      third_party_ratings: {
        google_places: {
          review_score: 3.9,
          review_count: 27,
        },
      },
      rating: {
        th: 3.797856453440036,
        toh: 3.9,
      },
      google_places_id: {
        data_id: '0x86d6752d9ba7055f:0x8e72c22f917ac670',
        data_cid: '10264480010290775664',
      },
      is_hidden: false,
      status: {
        is_hidden: false,
        reason: '',
      },
      last_updated: '2023-04-13 11:38:50.333000',
      review_score: 3.9,
      review_count: 27,
      distance: 10.927731497095678,
    },
    {
      _id: '6438173aeeb62ebdc36069c0',
      name: 'Grasshopper Landscaping & Maintenance',
      slug: 'grasshopper-landscaping-and-maintenance-119234',
      phone: '5204568945',
      website: 'http://www.grasshopper-landscaping.com/',
      social_media: {
        twitter: 'https://twitter.com/GrasshopperLan2',
      },
      address: '698 Gonzales Blvd, Huachuca City, AZ 85616',
      street: '698 Gonzales Blvd',
      city: 'Huachuca City',
      state: 'AZ',
      zip: '85616',
      latitude: 31.637770000000003,
      longitude: -110.33650399999999,
      nearest_major_citystate: 'TUCSON,AZ',
      geolocation: {
        type: 'Point',
        coordinates: [-110.33650399999999, 31.637770000000003],
      },
      categories: ['lawn'],
      services: [
        'Debris removal',
        'Pond installation and maintenance',
        'Landscaping',
        'Residential',
        'Hardscapes',
        'Tree and shrub pruning',
        'Weed control',
        'Fertilizing',
        'Commercial lawn care',
        'Pavers',
        'Outdoor living space',
        'Lawn mowing',
        'Lawn maintenance',
        'Irrigation',
      ],
      highlights: ['helps educate customers'],
      lowlights: {
        lawn: ['small online presence'],
      },
      certifications: {},
      awards: {},
      third_party_ratings: {
        google_places: {
          review_score: 4.4,
          review_count: 111,
        },
      },
      rating: {
        th: 3.572408476616635,
        toh: 4.4,
      },
      google_places_id: {
        data_id: '0x86d71c7868efcd49:0xef4b68518718c953',
        data_cid: '17242990297686264147',
      },
      is_hidden: false,
      status: {
        is_hidden: false,
        reason: '',
      },
      last_updated: '2023-04-13 11:40:51.437000',
      review_score: 4.4,
      review_count: 111,
      distance: 53.11051088880209,
    },
    {
      _id: '6438178feeb62ebdc36070b4',
      name: 'A&L landscaping LLC',
      slug: 'aandl-landscaping-llc-172036',
      phone: '5202555986',
      website: 'https://al-landscaping-llc.business.site/',
      social_media: {},
      address: '128 6th St, Sierra Vista, AZ 85635',
      street: '128 6th St',
      city: 'Sierra Vista',
      state: 'AZ',
      zip: '85635',
      latitude: 31.557773500000003,
      longitude: -110.29251839999999,
      nearest_major_citystate: 'TUCSON,AZ',
      geolocation: {
        type: 'Point',
        coordinates: [-110.29251839999999, 31.557773500000003],
      },
      categories: ['lawn'],
      services: [
        'Residential',
        'Lawn maintenance',
        'Landscaping',
        'Commercial lawn care',
      ],
      highlights: [
        'free quotes',
        'good customer service',
        'transparent pricing',
      ],
      lowlights: {
        lawn: ['small online presence'],
      },
      certifications: {},
      awards: {},
      third_party_ratings: {
        google_places: {
          review_score: 4.9,
          review_count: 24,
        },
      },
      rating: {
        th: 3.823621810074416,
        toh: 4.5235319828815115,
      },
      google_places_id: {
        data_id: '0x86d729133540ddab:0x65ee5dffa65308a5',
        data_cid: '7344911394876360869',
      },
      is_hidden: false,
      status: {
        is_hidden: false,
        reason: '',
      },
      last_updated: '2023-04-13 11:41:54.533000',
      review_score: 4.9,
      review_count: 24,
      distance: 59.00594441673998,
    },
  ]
  const [companyData, setCompanyData] = React.useState(providerJson)
  const [filterService, setFilterService] = React.useState('')

  // TODO: dynamically retrieve these options for the label from data
  const serviceOptions = [
    { label: 'Commercial lawn care' },
    { label: 'Artificial turf' },
    { label: 'Pavers' },
    { label: 'Lawn maintenance' },
    { label: 'Hardscapes' },
    { label: 'Sod installation' },
    { label: 'Residential' },
    { label: 'Landscaping' },
    { label: 'Garden design and maintenance' },
    { label: 'Outdoor living space' },
    { label: 'Irrigation' },
    { label: 'Tree and shrub trimming' },
    { label: 'Fountains' },
    { label: 'Pond installation and maintenance' },
    { label: 'Water features' },
    { label: 'Tree and shrub pruning' },
    { label: 'Outdoor lighting' },
    { label: 'Snow removal' },
    { label: 'Lawn mowing' },
    { label: 'Weed control' },
    { label: 'Fertilizing' },
    { label: 'Debris removal' },
  ]

  const resetSorting = () => {
    setCompanyData(providerJson)
    setFilterService('')
  }

  const handleSortByReview = () => {
    const sortedByReview = [...companyData].sort(
      (a, b) => b.review_score - a.review_score
    )
    setCompanyData(sortedByReview)
  }

  const handleSortByDistance = () => {
    const sortedByDistance = [...companyData].sort(
      (a, b) => a.distance - b.distance
    )
    setCompanyData(sortedByDistance)
  }

  const handleFilter = (event: any) => {
    setFilterService(event.target.value)
    const filteredDataByService = providerJson.filter((item) =>
      item.services.includes(event.target.value)
    )
    setCompanyData(filteredDataByService)
  }

  return (
    <>
      <h1 className='sr-only'>Landscaping Companies</h1>
      {/* added this for semantic accuracy/ADA/screenreader support */}
      {/* TODO: abstract the sort buttons into their own reusable component */}
      <div className='mx-8 mt-2 py-2 flex justify-end'>
        {/* TODO change the appearance of this reset button into a more minimalistic "X" */}
        <button
          onClick={resetSorting}
          className='bg-white hover:bg-blue-700 border border-solid border-slate-300 rounded-md text-gray-500 font-bold px-4 mr-2 text-lg uppercase'
        >
          Reset
        </button>
        {/* TODO: convert this to a dropdown with options "highest to lowest" and "lowest to highest"*/}
        <button
          onClick={handleSortByReview}
          className='bg-white hover:bg-blue-700 border border-solid border-slate-300 rounded-md text-gray-500 font-bold px-4 mx-2 text-lg uppercase'
        >
          Rating
        </button>
        {/* TODO: convert this a multi-select */}
        <FormControl
          sx={{ m: 1, width: 200 }}
          className='mx-2'
          style={{ margin: 0 }}
        >
          <InputLabel className='uppercase font-bold text-lg text-gray-500'>
            Services
          </InputLabel>
          <Select value={filterService} onChange={handleFilter}>
            {serviceOptions.map((serviceOption, index) => (
              <MenuItem key={index} value={serviceOption.label}>
                {serviceOption.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* TODO: convert this to a dropdown with options "closest to furthest" and "furthest to closest"*/}
        <button
          onClick={handleSortByDistance}
          className='bg-white hover:bg-blue-700 border border-solid border-slate-300 rounded-md text-gray-500 font-bold px-4 ml-2 text-lg uppercase'
        >
          Distance
        </button>
      </div>
      {companyData?.map((company, index) => (
        <CardItem key={index} data={company} />
      ))}
    </>
  )
}
