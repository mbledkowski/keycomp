import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
const getElements = () => {
  const entries = ref([])
  const error = ref(null)
  const load = async () => {
    try {
      const res = await projectFirestore.collection('switch').get()
      entries.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch (err) {
      error.value = err.message
      console.error(error.value)
    }
  }
  return { entries, error, load }
}
export default getElements