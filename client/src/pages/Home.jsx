import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [codListings, setCodListings] = useState([]);
  const [serviceListings, setServiceListings] = useState([]);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchServiceListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchServiceListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setServiceListings(data);
        fetchCodListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCodListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setCodListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-[#3C6255] font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-[#61876E]'>perfect</span>
          <br />
          meal order with ease
        </h1>
        <div className='text-[#61876E] text-xs sm:text-sm'>
          KHABO is the best place to find your next perfect meal to deliver.
          <br />
          We have a wide range of selections for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-[#3C6255] font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, cod and service */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-[#3C6255]'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {serviceListings && serviceListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-[#3C6255]'>Recent service based</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=service'}>Show more for service</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {serviceListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {codListings && codListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent for cash on delivery</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=cod'}>Show more for cod</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {codListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

