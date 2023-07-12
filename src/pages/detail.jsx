import { faArrowLeft } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import { useDetail } from '../hooks/detail';

export default function Detail() {
  const { detail } = useDetail();
  const navigate = useNavigate();
  return (
    <div className="m-3">
      <div
        onClick={() => navigate('/dashboard')}
        className="flex items-center cursor-pointer w-min mb-3 text-blue-500"
      >
        <FontAwesomeIcon
          style={{
            fontSize: '2rem',
            width: 15,
            borderRadius: 100,
            height: 15,
          }}
          icon={faArrowLeft}
        />
        <span className="font-bold">Back</span>
      </div>

      <div className="border-8 rounded-sm text-left p-5">
        <div className="text-gray-500">{`${detail?.type} / ${detail?.location}`}</div>
        <div className="text-lg text-blue-500 font-bold ">{detail?.title}</div>
        <hr />
        <div className="flex mt-5">
          <div
            className="md:w-1/2"
            dangerouslySetInnerHTML={{ __html: detail?.description }}
          />
          <div className="grid lg:grid-cols-1 gap-5 ml-44 max-w-full place-content-start">
            <div className="w-96 h-80 justify-end rounded-lg bg-slate-400">
              <img
                src={
                  detail?.company_logo ||
                  'https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64'
                }
                alt="Company Profile"
              />
            </div>
            <div className="w-96 h-52 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-300 border-8  flex-initial">
              <h1 className="text-center font-bold py-3 border-b-2">
                How To Apply
              </h1>
              <p className="mt-5 mx-3">
                email you resume to{''}
                <a className="ml-1" href={detail?.company_url}>
                  {detail?.company_url}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
