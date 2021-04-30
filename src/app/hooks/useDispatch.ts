import type {AppDispatch} from 'app/state/store';
import {useDispatch as useAppDispatch} from 'react-redux';

const useDispatch = () => useAppDispatch<AppDispatch>();

export default useDispatch;
