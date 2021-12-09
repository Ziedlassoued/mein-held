import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import User, { UserProps } from '../../components/User/User';

function Blog(): JSX.Element {
  const [articles, setArticles] = useState<UserProps[]>([]);
  useEffect(() => {
    async function getArticles() {
      const response = await fetch('/users');
      const body = await response.json();
      setArticles(body);
    }
    getArticles();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        {!articles && <span>Loading...</span>}
        {articles?.length === 0 && <span>No articles</span>}
        {articles?.map((article) => (
          <User
            key={article.email}
            companyName={article.companyName}
            email={article.email}
            city={article.city}
            owner={article.owner}
            street={article.street}
            houseNr={article.houseNr}
            zip={article.zip}
            phonNumber={article.phonNumber}
            category={article.category}
          />
          /* {articles
          ? articles.map((anObjectMapped) => {
              return (
                <p key={`${anObjectMapped.email}`}>
                  {anObjectMapped.companyName} - {anObjectMapped.email}
                </p>
              );
            })
          : []} */
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
