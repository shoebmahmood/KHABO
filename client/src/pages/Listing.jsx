import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { FaShare } from 'react-icons/fa';
import {
    FaHome,
    FaChair,
    FaMapMarkerAlt,
    FaParking,
  } from 'react-icons/fa';
import {FaBowlFood} from 'react-icons/fa6';
import { GiFoodTruck } from "react-icons/gi";
import Contact from '../components/Contact';

export default function Listing() {
    SwiperCore.use([Navigation]);
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [copied, setCopied] = useState(false);
    const [contact, setContact] = useState(false);
    const params = useParams();
    const { currentUser } = useSelector((state) => state.user);
  
    useEffect(() => {
      const fetchListing = async () => {
        try {
          setLoading(true);
          const res = await fetch(`/api/listing/get/${params.listingId}`);
          const data = await res.json();
          if (data.success === false) {
            setError(true);
            setLoading(false);
            return;
          }
          setListing(data);
          setLoading(false);
          setError(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };
      fetchListing();
    }, [params.listingId]);

    return(
        <main>
        {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
        {error && <p className='text-center my-7 text-2xl'>Something went wrong!</p>}
        {listing && !loading && !error && (
            <div>
                <Swiper navigation>
                    {listing.imageUrls.map((url) => (
                    <SwiperSlide key={url}>

                        <div className='h-[550px]' style={{background: `url(${url}) center no-repeat`, backgroundSize: 'cover'}}></div>
                    </SwiperSlide>
                ))}
                </Swiper>
                <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
                    <FaShare
                        className='text-slate-500'
                        onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            setCopied(true);
                            setTimeout(() => {
                            setCopied(false);
                }, 2000);
              }}
            />
                </div>
                {copied && (
                    <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>
                        Link copied!
                    </p>
                )}
                <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
                    <p className='text-2xl font-semibold'>
                      {listing.name} - ${' '}
                      {listing.offer
                        ? listing.willingPrice.toLocaleString('en-US')
                        : listing.regularPrice.toLocaleString('en-US')}
                      {listing.type === 'service' && ' / month'}  
                    </p>
                    <p className='flex items-center mt-6 gap-2 text-slate-600  text-sm'>
                        <FaMapMarkerAlt className='text-green-700' />
                        {listing.address}
                    </p> 
                    <div className=''>
                        <p className='bg-red-900 w-full max-w-[200px] text-[#EAE7B1]  text-center p-1 rounded-md'>
                            {listing.type === 'service' ? 'Days of Service' : 'Cash on Delivery'}
                        </p>
                        {listing.offer && (
                             <p className='bg-green-900 w-full max-w-[200px] text-[#EAE7B1] text-center p-1 rounded-md'>
                                 ${+listing.regularPrice +listing.willingPrice} +Tip
                             </p>
                        )}

                    </div>
                    <p className='text-slate-800'>
                        <span className='font-semibold text-black'>Description - </span> 
                        {listing.description}
                    </p>
                    <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
                        <li className='flex items-center gap-1 whitespace-nowrap '>
                            <FaHome className='text-lg' /> 
                            {listing.days > 1
                                ? `${listing.days} day of goods `
                                : `${listing.days} day of food `}
                        </li>
                        <li className='flex items-center gap-1 whitespace-nowrap '>
                            <FaBowlFood className='text-lg' />
                            {listing.portions > 1
                                 ? `${listing.portions} portions `
                                 : `${listing.portions} portion `}
                        </li>
                        <li className='flex items-center gap-1 whitespace-nowrap '>
                            <GiFoodTruck className='text-lg' />
                            {listing.parcel ? 'Parcel' : 'No Parcel'}
                        </li>
                        <li className='flex items-center gap-1 whitespace-nowrap '>
                            <FaHome className='text-lg' />
                            {listing.furnished ? 'Homemade' : 'Factorymade'}
                        </li>
                    </ul>
                    {currentUser && listing.userRef !== currentUser._id && !contact && (
                        <button onClick={() => setContact(true)} className='bg-[#3C6255] text-[#EAE7B1] rounded-lg uppercase hover:opacity-95 p-3' > Contact Customer</button>
                    )}
                    {contact && <Contact listing={listing} />}
                </div>
            </div>
        )}
        </main>
    );


}
