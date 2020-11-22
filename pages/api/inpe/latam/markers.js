function getMarkersAmericaSul48h() {
  const INPE_URL =
    'http://queimadas.dgi.inpe.br/queimadas/dados-abertos/download/?utm_campaign=dados-abertos&outputFormat=json&utm_medium=landing-page&time=48h&utm_content=focos_ams_48h&id=focos_ams';

  return fetch(INPE_URL, {}).then((data) => data.json());
}

let hits = 0;

export default async function (request, response) {
  const data = await getMarkersAmericaSul48h();
  const { features } = data;

  const maxAge = process.env.NEXT_PUBLIC_API_REVALIDATE_MAX_AGE;

  response.setHeader(
    'Cache-Control',
    `s-maxage=${maxAge}, stale-while-revalidate`
  );

  const markers = features.map((marker) => {
    return {
      id: marker.id,
      lat: marker.geometry.coordinates[1],
      lng: marker.geometry.coordinates[0],
      ...marker,
    };
  });

  return response.json({
    meta: {
      hits: ++hits,
      lastHit: new Date().toUTCString(),
    },
    markers,
  });
}
