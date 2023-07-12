import PropTypes from 'prop-types';

export default function Input(props) {
  const { title, placeholder, onChange } = props;

  return (
    <div className="text-left md:mr-5 w-full">
      <div className={`font-medium text-gray-400 mb-1 ${!title && 'hidden'}`}>{title}</div>
      <input
        className="border-2 px-3 py-1 rounded-md w-full md:mb-0 mb-3"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
