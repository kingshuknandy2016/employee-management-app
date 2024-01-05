import CircularWithValueLabel from '../components/CircularLoader';

const WithLoader = (Component: any) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    return (
      <>
        {props.loading ? (
          <CircularWithValueLabel timerInput={500}></CircularWithValueLabel>
        ) : (
          <Component {...props} />
        )}
      </>
    );
  };
};

export default WithLoader;
