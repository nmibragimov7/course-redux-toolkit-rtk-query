import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {AppDispatch, RootStore} from "../store/store";

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
