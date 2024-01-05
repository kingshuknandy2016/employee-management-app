import { Box, Container, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Key, useEffect, useState } from 'react';
import CardDisplay from '../components/Post';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchPostAsync } from '../store/thunk/PostThunk';
import ErrorFallbackUI from '../components/ErrorFallbackUi';
import { useReduxSelector } from '../hooks/useReduxSelector';
import WithLoader from '../hoc/hoc_with_loader';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  height: '100vh',
  position: 'sticky',
  backgroundColor: theme.palette.grey[200],
}));

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostPageProps {
  error: string | null;
  loading: boolean;
  postData: PostInterface[];
}

const PostPage: React.FC<PostPageProps> = ({
  error,
  loading,
  postData,
}: PostPageProps) => {
  if (error) {
    return <ErrorFallbackUI></ErrorFallbackUI>;
  }
  return (
    <StyledContainer>
      <Box>
        <Typography variant="h4" color={'primary.light'}>
          Post Page
        </Typography>
        <Divider sx={{ marginBottom: 2 }}></Divider>
        {postData.map(
          (post: {
            title: string;
            body: string;
            id: Key | null | undefined;
          }) => (
            // eslint-disable-next-line react/jsx-key
            <CardDisplay
              title={post.title}
              body={post.body}
              key={post.id}
            ></CardDisplay>
          )
        )}
      </Box>
    </StyledContainer>
  );
};

const PostsWithLoader = WithLoader(PostPage);

export default PostsWithLoader;
