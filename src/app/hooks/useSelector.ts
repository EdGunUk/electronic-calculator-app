import type {RootState} from 'app/state/store';
import {TypedUseSelectorHook, useSelector as useAppSelector} from 'react-redux';

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export default useSelector;
