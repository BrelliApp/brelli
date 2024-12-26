import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation('landing');

  return (
    <div className="bg-primary py-2 text-center">
      <p className="text-primary-foreground text-sm font-medium">
        {t('banner.title')}
      </p>
    </div>
  );
};

export default Banner;