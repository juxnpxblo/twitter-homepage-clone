const FooterItem = ({ text }) => {
  return (
    <>
      <span className="inline-block mr-4 mb-2 hover:underline cursor-pointer">
        {text}
      </span>{' '}
    </>
  );
};

export default FooterItem;
