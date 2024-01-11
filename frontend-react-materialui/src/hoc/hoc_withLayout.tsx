import Layout from '../layouts/Layout';

const WithLayout = <P extends object>(Component: React.ComponentType<P>) => {
  // eslint-disable-next-line react/display-name
  return (props: P) => {
    return (
      <>
        <Layout>
          <Component {...props} />
        </Layout>
      </>
    );
  };
};

export default WithLayout;
