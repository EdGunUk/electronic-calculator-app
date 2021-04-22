import {useDispatch as useAppDispatch} from 'react-redux';
import type {AppDispatch} from 'app/state/store';

const useDispatch = () => useAppDispatch<AppDispatch>();

export default useDispatch;
