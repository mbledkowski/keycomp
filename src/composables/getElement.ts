import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient("https://fqgcqfeyzxvqgzyyxdjg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTQyNDk5NCwiZXhwIjoxOTM3MDAwOTk0fQ.q7XT5jdIDbpK6aWuyfSd0HRinLQqZRETFDA4dW_s4bU")

const getElement = () => {
  let entry = ref<Object[]>([])
  let error = ref<Error>()
  let photos = ref<Object[]>([])
  let sources = ref<Object[]>([])
  let models = ref<Object[]>([])
  let modelGroups = ref<Object[]>([])
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
  }

  const fetchSwitchSources = async () => {

    let { data, error } = await supabase.from("switches").select("*").eq("name", name).contains("brand", `\{${brand}\}`).select(`sources(id,name,link,desc)`)
    data = data ? data : []

    console.log(sources)

    sources.value = data[0].sources
  }

  const fetchSwitchModels = async () => {
    let { data, error } = await supabase.from("switches").select("*").eq("name", name).contains("brand", `\{${brand}\}`).select(`models(id, group, name, characteristic)`)
    data = data ? data : []

    models.value = data[0]

    modelGroups.value = await fetchSwitchGroups(data[0].models)

    console.log(models.value)
    console.log(modelGroups.value)
  }
  const fetchSwitchGroups = async (models: { group: Number }[]) => {
    let groups: Number[] = models
      .map(((item: { group: Number }) => item.group))
      .filter((item: Number, i: Number, array: Array<Number>) => array.indexOf(item) === i)

    let { data, error } = await supabase.from("modelGroups").select("*").in("id", groups)

    data = data ? data : []

    return data
  }
  return { entry, error, photos, sources, models, modelGroups, switchName, fetchSwitch, fetchSwitchPhotos, fetchSwitchSources, fetchSwitchModels }
}
export default getElement