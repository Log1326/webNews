import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();
    return (
        <div className={classNames('', {}, [className])}>
            {id
                ? <ArticleDetails id={id} />
                : (
                    <div className={classNames('', {}, [className])}>
                        {t('Статья не найдена')}
                    </div>
                )}
        </div>
    );
};

export default memo(ArticleDetailsPage);
