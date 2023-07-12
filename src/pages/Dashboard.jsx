import { useSummary } from '../hooks/summary';
import Search from '../components/search';
import JobListCard from '../components/jobCard';

const Dashboard = () => {
  const { getJobLists, loading, onChange, onClick } = useSummary();
  if (loading) return <div>Loading</div>;

  return (
    <>
      <div className="py-3 min-w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-2xl font-bold px-4 text-white">
          GitHub{''}
          <span className="ml-2 font-light">Jobs</span>
        </h1>
      </div>
      <section>
        <Search onChange={onChange} onClick={onClick} />

        <div className="font-bold mx-5 mb-3 text-2xl ">Job List</div>
        <JobListCard />

        <div className="w-full mt-3 justify-center text-center ">
          <button
            className="rounded-lg bg-gradient-to-t from-cyan-500 to-blue-500 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-500  text-white py-3 px-44"
            onClick={() => getJobLists()}
          >
            Get More Job
          </button>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
