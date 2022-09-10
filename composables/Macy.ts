import { Ref } from 'vue'

const useMacy = () => {
  const Macy: Ref<undefined | Function>  = ref(undefined);

  onMounted(() => {
    import('macy').then((lib) => {
      Macy.value = lib.default
    })
  })

  return Macy
}

export default useMacy