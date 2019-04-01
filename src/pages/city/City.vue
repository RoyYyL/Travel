<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :defaultCity="defaultCity"
      :hotCities="hotCities"
      :cities="cities"
      :changeAlphabet="changeAlphabet"
    >
    </city-list>
    <city-alphabet :alphabet="alphabet" @change="handleAlphabetChange"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      defaultCity: '',
      hotCities: [],
      cities: null,
      alphabet: [],
      changeAlphabet: 'A'
    }
  },
  methods: {
    getCityData () {
      axios.get('/api/city.json')
        .then(this.getCityDataSucc)
    },
    getCityDataSucc (res) {
      if (res.data.ret) {
        const data = res.data.data
        this.defaultCity = data.defaultCity
        this.hotCities = data.hotCities
        this.cities = data.cities
        for (var key in this.cities) {
          this.alphabet.push(key)
        }
      }
    },
    handleAlphabetChange (alph) {
      this.changeAlphabet = alph
    }
  },
  mounted () {
    this.getCityData()
  }
}
</script>
<style>

</style>
