import Layout from '../components/Layout';
import CustomLink from '../components/utilities/CustomLink';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>
          Nextjs SASS without modules Starter by{' '}
          <CustomLink href="https://ayushsaini.com">Ayush Saini</CustomLink>
        </h1>
        <p>
          Get a <strong>headstart</strong> in developing a Nextjs app
        </p>
        <h2>
          Read{' '}
          <CustomLink href="https://github.com/AyushSaini00/next-sass-without-modules-starter#readme">
            documentation
          </CustomLink>
        </h2>
      </div>
    </Layout>
  );
}
