<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate ile Form Kontrolü</h3>
    <div class="d-flex justify-content-center align-content-center flex-row">
      <div class="card p-4 mt-3 mr-4 shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input
              @blur="$v.email.$touch()"
              v-model="email" type="email"
              :class="{'is-invalid':$v.email.$error}"
              class="form-control"
              placeholder="E-posta adresini giriniz">
            <small v-if="!$v.email.required" class="form-text text-muted">Bu alan zorunludur</small>
            <small v-if="!$v.email.email" class="form-text text-muted">Lütfen geçerli bir eposta adresi giriniz</small>
            <small v-if="!$v.email.uniq" class="form-text text-muted">Bu e-posta adresi kullanilmaktadir lutfen baska
              bir e-posta adresi girin</small>
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input @blur="$v.password.$touch()" v-model="password" type="password" class="form-control"
                   placeholder="Şifrenizi giriniz">
            <small v-if="!$v.password.required" class="form-text text-muted">Bu alan zorunludur</small>
            <small v-if="!$v.password.numeric" class="form-text text-muted">Lütfen şifreniz rakamlardan oluşsun</small>
            <small v-if="!$v.password.minLength" class="form-text text-muted">Lütfen şifreniz en az
              {{ $v.password.$params.minLength.min }} karakterden oluşsun</small>
            <small v-if="!$v.password.maxLength" class="form-text text-muted">Lütfen şifreniz en fazla
              {{ $v.password.$params.maxLength.max }} karakterden oluşsun</small>
          </div>
          <div class="form-group">
            <label>Şifre Tekrar</label>
            <input v-model="repassword" type="password" class="form-control" placeholder="Şifrenizi tekrar giriniz">
            <small v-if="!$v.repassword.sameAs" class="form-text text-muted">Girdiğiniz şifreler birbiri ile
              uyuşmuyor...</small>
          </div>

          <div class="form-group">
            <label>Yaşınız</label>
            <input v-model="age" type="number" class="form-control" placeholder="Yaşınızı giriniz">
            <small v-if="!$v.age.required" class="form-text text-muted">Bu alan zorunludur</small>
            <small v-if="!$v.age.numeric" class="form-text text-muted">Lütfen yaşınız sadece rakam giriniz</small>
            <small v-if="!$v.age.between" class="form-text text-muted">Lütfen sisteme kayıt olabilmeniz için yaşınız
              {{ $v.age.$params.between.min }} ile {{ $v.age.$params.between.max }} arasında olmalıdır</small>
          </div>
          <div class="form-group">
            <label>Kayıt olmak istediğiniz kategori</label>
            <select v-model="$v.selectedCategory.$model" class="form-control">
              <option v-for="category in categories" :value="category">{{ category }}</option>
            </select>
            <small v-if="!$v.selectedCategory.checked" class="form-text text-muted">Sadece Yazilim kategorisinde kayit
              olusturabilirsiniz</small>

          </div>

          <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm">İlgi Alanı Ekle</a>
          <small v-if="!$v.hobbies.required" class="form-text text-muted">Bu alan zorunludur</small>
          <small v-if="!$v.hobbies.minLength" class="form-text text-muted">Lütfen hobileriniz en az
            {{ $v.hobbies.$params.minLength.min }} elemandan oluşsun</small>
          <small v-if="!$v.hobbies.maxLength" class="form-text text-muted">Lütfen hobileriniz en fazla
            {{ $v.hobbies.$params.maxLength.max }} elemandan oluşsun</small>
          <ul class="list-group mt-3 mb-3 border-0">
            <li v-for="(hobby,index) in hobbies" class="list-group-item d-flex pl-2">
              <input
                type="text"
                class="form-control mr-2"
                @blur="$v.hobbies.$each[index].value.$touch()"
                :class="{'is-invalid':$v.hobbies.$each[index].$error}"
                v-model="hobby.value">
              <button class="btn btn-sm btn-danger rounded-0" @click="hobbies.splice(index, 1)">Sil</button>
            </li>
          </ul>

          <button class="btn btn-outline-secondary rounded-0" :disabled="$v.$invalid">Kaydet</button>
        </form>
      </div>
      <div class="card p-4 mt-3 shadow" style="width: 400px;">
      </div>
    </div>
  </div>
</template>
<script>
import {required, email, numeric, minLength, maxLength, sameAs, between} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: null,
      password: null,
      repassword: null,
      selectedCategory: 'Yazılım',
      age: null,
      categories: ["Yazılım", "Donanım", "Cloud", "Sunucular", "Unix", "Linux", "Mac OS", "Windows"],
      hobbies: []
    }
  },
  validations: {
    email: {
      required,
      email,
      // uniq: value => {
      //   return value!=='me@senrecep.com';
      // }
      uniq: value => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(value !== 'me@senrecep.com'), 1000);
        })
      }
    },
    password: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(10)
    },
    repassword: {
      //birebir eslesme olmasi gerektiginde
      //sameAs:sameAs('password')
      sameAs: sameAs(vm => {
        //ön ek yada son ek eklenip kontrol ettirmek istendiğinde kullanılabilir
        return vm.password + '37'
      })
    },
    age: {
      required,
      numeric,
      between: between(18, 60)
    },
    selectedCategory: {
      checked(val, vm) {
        return vm.selectedCategory === 'Yazılım'
      }
    },
    hobbies: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(4),
      $each: {
        value: {
          required,
          maxLength: minLength(6)
        }
      }
    }
  },
  methods: {
    onSubmit() {
      let form = {
        email: this.email,
        password: this.password,
        category: this.category,
        hobbies: this.hobbies,
      }
      console.log(form)
    },
    newHobby() {
      let hobby = {
        id: Math.random() * Math.random() * 1000,
        value: ''
      }
      this.hobbies.push(hobby)
    }
  }
}
</script>
