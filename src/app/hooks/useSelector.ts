import {TypedUseSelectorHook, useSelector as useAppSelector} from 'react-redux';
import type {RootState} from 'app/state/store';

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export default useSelector;
