import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient("https://fqgcqfeyzxvqgzyyxdjg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTQyNDk5NCwiZXhwIjoxOTM3MDAwOTk0fQ.q7XT5jdIDbpK6aWuyfSd0HRinLQqZRETFDA4dW_s4bU")

const getElement = () => {
  let entry = ref<Object[]>([])
  let error = ref<Error>()
  let photos = ref<Object[]>([])
  let switchName = ref<String>("")

  let brand: string, name: string

  const fetchSwitch = async () => {
    console.log("a")
    let nameSplited: string[] = switchName.value.split("-")
    brand = nameSplited.shift() || ''
    name = nameSplited.join(" ")

    console.log(name)
    let { data, error } = await supabase.from("switches").select("*").eq("name", name).contains("brand", `\{${brand}\}`)
    data = data ? data : []

    if (error) {
      console.error(error.message)
    } else {
      // entries.value = entries.value.concat(data[0])
      console.log(entry)
      entry.value.push(data[0])
    }
  }

  const fetchSwitchPhotos = async () => {

    let { data, error } = await supabase.from("switches").select("*").eq("name", name).contains("brand", `\{${brand}\}`).select(`photos(id,src,link,desc,model,type,author)`)
    data = data ? data : []

    photos.value = data[0].photos
    console.log(photos);
  }
  return { entry, error, photos, switchName, fetchSwitch, fetchSwitchPhotos }
}
export default getElement