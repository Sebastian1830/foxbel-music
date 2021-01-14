<template>
  <div class="header">
    <div class="columns is-fullwidth">
      <div class="column is-9">
        <div class="has-text-left">
          <b-field>
            <b-input v-model="textSearch"
                     class="search-width"
                     placeholder="Buscar"
                     type="search"
                     icon-right="fa fa-hosp-search"
                     icon-right-clickable
                     @icon-right-click="search"
                     @keyup.native.enter="search"
                     rounded>
            </b-input>
          </b-field>
          <!--<b-autocomplete
            rounded
            v-model="textSearch"
            :data="filteredDataArray"
            placeholder="e.g. jQuery"
            icon-right="fa fa-hosp-search"
            clearable
            @select="option => selected = option"
            @typing="autocomplete">
            <template #empty>No results found</template>
          </b-autocomplete>-->
        </div>
      </div>
      <div class="column is-3">
        <div class="has-text-right is-flex">
          <figure class="image is-48x48">
            <img :src="$store.state.user.picture" alt="image user" class="is-rounded" />
          </figure>
          <div class="margin-auto">
            <span>{{ $store.state.user.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  public dataUser: any = {};

  public textSearch: string = '';

  public selected: any = null;

  public dataSearcher: string[] = [];

  created() {
    if(!this.$store.state.user.id) this.load();
  }

  async load() {
    console.log('Hola mundo');
    const data_user = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/me/?${localStorage.getItem('access_token')}`);
    this.dataUser = data_user.data;
    this.$store.commit('setUser', this.dataUser);
  }

  async search() {
    const result = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.textSearch}`);
    this.dataSearcher = result.data.data.slice(0, 9);
    this.$emit('data', this.dataSearcher);
  }

  /* Se usaria para cargar el autocomplete pero por envia mas de 50 request en menos de 1 hora y bloquea las peticiones */
  autocomplete() {
    if (this.textSearch) {
      this.$nextTick(() => {
        setTimeout(async () => {
          const data_searcher = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.textSearch}`);
          const list_names = data_searcher.data.data.slice(0, 9);
          list_names.forEach((result: any) => {
            this.dataSearcher.push(`${result.title_short} - ${result.artist.name}`);
          });
        }, 250);
      });
    }
  }

  get filteredDataArray() {
    return this.dataSearcher.filter((option) => {
      return option
        .toString()
        .toLowerCase()
        .indexOf(this.textSearch.toLowerCase()) >= 0
    })
  }
  /*FIN*/
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    ::v-deep.input {
      border-color: #b5b5b5;
    }
    .search-width {
      width: 60%;
    }
    .is-fullwidth {
      width: 100%;
    }
  }
  .margin-auto {
    margin: auto;
  }
</style>
