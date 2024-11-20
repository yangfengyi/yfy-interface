import { Draft, freeze, produce } from 'immer';
import { useCallback, useState } from 'react';

export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];
//函数签名
export function useImmer<S = unknown>(initialValue: S | (() => S)): ImmerHook<S>;

export function useImmer<T>(initialValue: T) {
  const [val, updateValue] = useState(() =>
    freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true),
  );

  return [
    val,
    // 如果不使用 useCallback, 这里每次都会发生变化
    useCallback((updater: Updater<T>) => {
      if (typeof updater === 'function') {
        updateValue(produce(updater));
      } else {
        updateValue(freeze(updater));
      }
    }, []),
  ];
}
