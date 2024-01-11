import type { TypedUseSelectorHook } from "react-redux"
import { useSelector, useDispatch} from "react-redux"
import type { RootState, AppDispatch } from "./features/store"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector