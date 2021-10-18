import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://fqgcqfeyzxvqgzyyxdjg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTQyNDk5NCwiZXhwIjoxOTM3MDAwOTk0fQ.q7XT5jdIDbpK6aWuyfSd0HRinLQqZRETFDA4dW_s4bU');

const getElement = () => {
  const page = ref<Record<string, any>[]>([]);
  const entry = ref<Record<string, any>[]>([]);
  const error = ref<Error>();
  const photos = ref<Record<string, any>[]>([]);
  const sources = ref<Record<string, any>[]>([]);
  const models = ref<Record<string, any>[]>([]);
  const modelGroups = ref<Record<string, any>[]>([]);
  const switchName = ref<string>('');

  let brand: string;
  let name: string;


  const fetchSwitches = async () => {
    let { data, error } = await supabase.from('switches').select('brand,name,profile,loudness,travel,stem,socket,mount,pressure,actuation,bottom,preTravel,totalTravel')
    data = data || [];
    if (error) {
      console.error(error.message);
    } else {
      page.value = data;
    }
  };

  const fetchSwitch = async () => {
    const nameSplited: string[] = switchName.value.split('-');
    brand = nameSplited.shift() || '';
    name = nameSplited.join(' ');

    let { data, error } = await supabase.from('switches').select('*').eq('name', name).contains('brand', `\{${brand}\}`);
    data = data || [];

    if (error) {
      console.error(error.message);
    } else {
      console.log(entry);
      entry.value.push(data[0]);
    }
  };

  const fetchSwitchPhotos = async () => {
    let { data, error } = await supabase.from('switches').select('*').eq('name', name).contains('brand', `\{${brand}\}`)
      .select('photos(id,src,link,desc,model,type,author)');
    data = data || [];

    if (error) {
      console.error(error.message);
    } else {
      photos.value = data[0].photos;
    }
  };

  const fetchSwitchSources = async () => {
    let { data, error } = await supabase.from('switches').select('*').eq('name', name).contains('brand', `\{${brand}\}`)
      .select('sources(id,name,link,desc)');
    data = data || [];

    if (error) {
      console.error(error.message);
    } else {
      sources.value = data[0].sources;
    }
  };

  const fetchSwitchModels = async () => {
    let { data, error } = await supabase.from('switches').select('*').eq('name', name).contains('brand', `\{${brand}\}`)
      .select('models!models_switch_fkey(id, group, name, characteristic)');
    data = data || [];

    models.value = data[0];

    if (error) {
      console.error(error.message);
    } else {
      modelGroups.value = await fetchSwitchGroups(data[0].models) || [];
    }
  };
  const fetchSwitchGroups = async (models: { group: number }[]) => {
    const groups: number[] = models
      .map(((item: { group: number }) => item.group))
      .filter((item: number, i: number, array: Array<number>) => array.indexOf(item) === i);

    let { data, error } = await supabase.from('modelGroups').select('*').in('id', groups);

    data = data || [];

    if (error) {
      console.error(error.message);
    } else {
      return data;
    }
  };
  return {entry, error, photos, sources, models, modelGroups, switchName, fetchSwitch, fetchSwitchPhotos, fetchSwitchSources, fetchSwitchModels, page, fetchSwitches
  };
};
export default getElement;
