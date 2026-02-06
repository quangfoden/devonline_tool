// components/templates/base/useAutosave.js
import { watch } from "vue";

export function useAutosave(form, draftId) {
  let timer = null;
  let lastHash = "";

  const hash = (v) => JSON.stringify(v);

  watch(
    form,
    (val) => {
      const current = hash(val);
      if (current === lastHash) return;

      clearTimeout(timer);
      timer = setTimeout(async () => {
        await axios.post(`/api/cards/${draftId}/autosave`, {
          data: val,
        });
        lastHash = current;
      }, 3000);
    },
    { deep: true }
  );
}
