import { cafeInfo } from '../../config/cafeInfo';

export default function MapEmbedPlaceholder() {
  return (
    <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
      <iframe
        src={cafeInfo.mapEmbedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Nath Cyber Cafe Location"
        className="w-full"
      />
    </div>
  );
}
