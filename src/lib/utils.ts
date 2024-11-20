import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 1. clsx 用来解决抽离样式
// 2. twMerge 用来解决在后面的样式可以覆盖前面的样式，因为tailwind 4 的修改了css的解析顺序，如果不使用twMerge的话，会导致后面的样式无法覆盖前面的样式，不满足正常的心智模型。
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
