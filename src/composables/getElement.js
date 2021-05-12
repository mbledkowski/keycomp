import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
const getElement = () => {
  const entries = ref([])
  const error = ref(null)
  const load = async (switchname) => {
    try {
      switchname = switchname.split("-")
      let brand = switchname.shift()
      const res = await projectFirestore.collection("switch").where("name", "==", switchname.join(" ")).where("brand", "array-contains", brand).get()
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
export default getElement