import { Ref } from 'vue'

const useMacy = () => {
  const Macy: Ref<undefined | Function> = ref(undefined);

  onMounted(() => {
    import('macy').then(c => Macy.value = c.default)
  })

  return Macy
}

export default useMacy