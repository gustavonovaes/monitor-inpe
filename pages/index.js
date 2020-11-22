import Map from '../components/Map';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Home() {
  const apiLatamUrl = `${API_URL}/latam/markers`;
  const { data, loading, error } = useFetch(apiLatamUrl);

  const markers = data?.markers ?? [];

  return (
    <div className="App">
      <Header />

      {loading && <Loader />}

      {markers.length > 0 && <Map markers={markers} />}

      {error && (
        <div className="error-message">
          <p>Falha ao obter dados do INPE</p>
          <p>Tente novamente mais tarde.</p>
        </div>
      )}
    </div>
  );
}

export default Home;
