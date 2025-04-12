import type { MaybeRef } from "vue";
import { computed, toValue } from "vue";

export const predefinedBgColors = ["neo-white", "neo-black", "neo-red", "neo-yellow", "neo-blue", "neo-green", "neo-purple", "neo-orange", "neo-pink", "neo-lime", "neo-sky", "neo-beige"];

export const useBgColor = (baseSelector: MaybeRef<string>, bgColor?: MaybeRef<string | undefined>) => {
  const color = toValue(bgColor);
  const selector = toValue(baseSelector);
  const bgClassName = computed(() => {
    return (color && predefinedBgColors.includes(color) && `${selector}--bg-${color}`) || "";
  });
  const bgStyle = computed(() => ({
    ...(color && !predefinedBgColors.includes(color) && { backgroundColor: color }),
  }));
  return {
    bgClassName,
    bgStyle,
  };
};
