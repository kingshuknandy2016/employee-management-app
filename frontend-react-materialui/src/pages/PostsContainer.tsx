import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchPostAsync } from '../store/thunk/PostThunk';
import { useReduxSelector } from '../hooks/useReduxSelector';
import PostsWithLoader, { PostInterface } from './PostPage';

const PostsContainer = () => {
  //const [post, updatePost] = useState<PostInterface[]>([] as PostInterface[]);
  const dispatch = useAppDispatch();

  /** Normal Api call without thunk
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
      const dataFetched = data as PostInterface[];
      // console.log(dataFetched);
      updatePost(dataFetched);
    });
  }, []);
  */

  useEffect(() => {
    dispatch(fetchPostAsync());
  }, [dispatch]);

  //Using the Custom hook
  const postData = useReduxSelector('posts').data as PostInterface[];

  // Using the useAppSelector
  const postDataOther = useAppSelector(
    (state) => state.posts.data
  ) as PostInterface[];
  const loading = useAppSelector((state) => state.posts.loading);
  const error = useAppSelector((state) => state.posts.error);

  return (
    <>
      <PostsWithLoader
        loading={loading}
        postData={postData}
        error={error}
      ></PostsWithLoader>
    </>
  );
};

export default PostsContainer;
