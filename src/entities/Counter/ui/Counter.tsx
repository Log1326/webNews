import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../modal/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const inc = () => {
        dispatch(counterActions.inc());
    };
    const dec = () => {
        dispatch(counterActions.dec());
    };
    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button onClick={inc} data-testid="inc-button">
                {t('увеличить')}
            </Button>
            <Button onClick={dec} data-testid="dec-button">
                {t('уменьшить')}
            </Button>
        </div>
    );
};
