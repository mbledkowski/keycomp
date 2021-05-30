import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient("https://fqgcqfeyzxvqgzyyxdjg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTQyNDk5NCwiZXhwIjoxOTM3MDAwOTk0fQ.q7XT5jdIDbpK6aWuyfSd0HRinLQqZRETFDA4dW_s4bU")

const getElement = () => {
  let entries = ref<any[]>([])
  let error = ref(null)
  const load = async (switchName: string) => {
    let nameSplited: Array<string> = switchName.split("-")
    let brand: string = nameSplited.shift() || ''

    let { data, error } = await supabase.from("switches").select("*").eq("name", nameSplited.join(" ")).contains("brand", `\{${brand}\}`) || []

    data = data ? data : []

    if (error) {
      console.error(error.message)
    } else {
      // entries.value = entries.value.concat(data[0])
      entries.value.push(data[0])
    }

  }
  return { entries, error, load }
}
export default getElement