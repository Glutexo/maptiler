export default function (apiKey) {
    maptilersdk.config.apiKey = apiKey;
    new maptilersdk.Map({
        container: 'map',
        style: maptilersdk.MapStyle.STREETS,
        center: [18.3453003, 49.6770897],
        zoom: 17,
    });
}
