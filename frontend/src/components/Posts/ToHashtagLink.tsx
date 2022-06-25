import Link from 'next/link';

const toHashtagLink = (txt: string) => {
  return txt.split(/(\n|\s)/g).map((t, i) => {
    if (t === '\n') {
      return <br key={i} />;
    }
    if (t.startsWith('#')) {
      return (
        <Link key={i} href={`/hashtag/${t.substring(1)}`}>
          <a>{t}</a>
        </Link>
      );
    }
    return `${t} `;
  });
};

export default toHashtagLink;
