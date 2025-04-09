import { useCallback } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useTranslation } from 'react-i18next';
import { Image } from 'astro:assets';

export default function FacilitiesGallery() {
  const { t } = useTranslation();
  const items = [
    {
      width: 633,
      height: 475,
    },
    {
      width: 633,
      height: 475,
    },
    {
      width: 633,
      height: 475,
    },
    {
      width: 633,
      height: 843,
    },
    {
      width: 633,
      height: 845,
    },
    {
      width: 633,
      height: 474,
    },
    {
      width: 633,
      height: 845,
    },
    {
      width: 633,
      height: 845,
    },
    {
      width: 633,
      height: 474,
    },
  ];

  const renderItem = useCallback(
    (image, index) => (
        <picture>
            <source srcSet={`/images/facilities/0${index + 1}.webp`} type="image/webp" />
            <img key={index} src={`/images/facilities/0${index + 1}.jpg`} alt={`0${index + 1}`} width={image.width} height={image.height} />
        </picture>
      
    ),
    []
  );

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {items.map((image, i) => renderItem(image, i))}
          </Masonry>
        </ResponsiveMasonry>
  );
}
