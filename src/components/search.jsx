import PropTypes from 'prop-types';
import Input from './input';

export default function Search({ onChange, onClick }) {
  return (
    <div className="md:flex w-full p-5">
      <Input
        id="description"
        title="Job Description"
        onChange={(e) => onChange(e, 'description')}
        placeholder="Filter by title, benefits, companies, expertise"
      />
      <Input
        id="location"
        title="Location"
        onChange={(e) => onChange(e, 'location')}
        placeholder="Filter by city, state, zip or country"
      />

      <div className="items-end flex justify-center md:mr-5">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="full_time"
            onChange={(e) => onChange(e, 'full_time')}
            className="border-2 my-2 rounded-md md:mr-2 h-5 "
          />
          <span className="whitespace-nowrap">Fulltime Only</span>
        </div>
      </div>

      <div className="flex-col flex justify-end">
        <button
          onClick={onClick}
          className="bg-blue-500 hover:bg-cyan-600 text-white mx-auto px-10 py-2 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
