<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="username">Kullanıcı Adı</label>
                    <input
                      type="text"
                      id="username"
                      v-model="user.name"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input
                      type="password"
                      id="password"
                      v-model.lazy.trim="user.password"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <input
                      type="number"
                      id="age"
                      v-model.trim.number="user.age"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br />
                  <textarea
                    v-model="user.description"
                    id="message"
                    rows="3"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input v-model="user.interests" type="checkbox" value="yazilim" />
                      Yazılım
                    </label>
                    <label>
                      <input v-model="user.interests" type="checkbox" value="donanim" />
                      Donanım
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input v-model="user.gender" type="radio" value="erkek" /> Erkek
                  </label>
                  <label>
                    <input v-model="user.gender" type="radio" value="kadin" /> Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <select v-model='user.city' class="form-control">
                    <option 
                    v-for="city in cities"
                    :selected="city=='Manisa'"
                    >{{ city }}</option>
                  </select>
                </div>
              </div>
              <div class='row'>
                <div class='col-md-12 form-group'>
                  <app-switch v-model='switched'></app-switch>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-md-12">
                  <button 
                  @click.prevent='submit'
                  class="btn btn-primary">Gönder!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-show='isSubmitted'>
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Form Verileri</h4>
          </div>
          <div class="panel-body">
            <p>Kullanıcı Adı: {{ user.name }}</p>
            <p>Şifre:{{ user.password }}</p>
            <p>Yaş:{{ user.age }}</p>
            <p style="white-space: pre">Açıklama: {{ user.description }}</p>
            <p><strong>İlgi Alanları</strong></p>
            <ul>
              <li v-for="item in user.interests">{{ item }}</li>
            </ul>
            <p>Cinsiyet:{{ user.gender }}</p>
            <p>Şehir:{{user.city}}</p>
            <p>Toggle:{{switched}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './components/Switch';

export default {
  components:{
    appSwitch:Switch
  },
  data() {
    return {
      cities: ["Istanbul", "Ankara", "Izmir", "Manisa"],
      user: {
        name: "",
        age: 0,
        password: "",
        description: "",
        interests: [],
        gender: "",
        city:''
      },
      switched:false,
      isSubmitted:false
    };
  },
  methods:{
    submit(){
      this.isSubmitted=true;
    }
  }
};
</script>

<style></style>
