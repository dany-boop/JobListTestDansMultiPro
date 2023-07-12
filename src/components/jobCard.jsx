import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useSummary } from '../hooks/summary';

export default function JobListCard() {
  const height = document.documentElement.clientHeight - 270;
  const { jobList } = useSummary();
  const navigate = useNavigate();
  

  console.log(jobList);
  return (
    <>
      <div
        className="mx-3 border-2 rounded-md"
        style={{ maxHeight: height, overflow: 'scroll' }}
      >
        <table className="w-full">
          <tbody>
            {jobList?.map((data, idx) => {
              if (data) {
                return (
                  <tr
                    onClick={() => navigate(`/summary/${data?.id}`)}
                    key={idx}
                    className="cursor-pointer border border-1 bg-gray-50 hover:bg-gray-100"
                  >
                    <td>
                      <div className="mb-3 px-2">
                        <div className="text-blue-500 text-lg font-semibold">{data?.title}</div>
                        <div className="text-left ">
                          <span className="text-gray-400 text-md">{`${data?.company} - `}</span>
                          <span className="text-green-500 text-md ">{data?.type}</span>
                        </div>
                      </div>
                    </td>
                    <td className='text-end px-3'>
                      <div>
                        <div className="text-gray-700 font-medium">{data?.location}</div>
                        <div className="text-gray-400">{data?.created_at}</div>
                      </div>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

JobListCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ),
};
