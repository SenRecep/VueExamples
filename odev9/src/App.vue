<template>
  <div class="container">
    <form v-if="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-danger">
            <div class="panel-heading">
              <h4>Kayıt Ol</h4>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label for="appFullName">Full Name</label>
                <app-full-name id="appFullName" v-model="user.name"></app-full-name>
              </div>
              <div class="form-group">
                <label for="mail">Mail</label>
                <input type="mail" id="mail" class="form-control" v-model="user.mail" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  v-model="user.password"
                />
              </div>
              <div class="form-group text-center">
                <label>
                  <input v-model="user.gender" type="radio" value="Erkek" /> Erkek
                </label>
                <label>
                  <input v-model="user.gender" type="radio" value="Kadin" /> Kadın
                </label>
              </div>
              <div class="form-group text-center">
                <button class="btn btn-primary" @click.prevent="isSubmitted = true">
                  Gönder!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="row" v-else>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4>Girdiğiniz Bilgier</h4>
          </div>
          <div class="panel-body">
            <p>Ad:{{ user.name.firstName }}</p>
            <p>Soyad:{{ user.name.lastName }}</p>
            <p>E-mail:{{ user.mail }}</p>
            <p>Şifre:{{ user.password }}</p>
            <p>Cinsiyet:{{ user.gender }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./components/FullName";
export default {
  components: {
    appFullName: FullName,
  },
  data() {
    return {
      user: {
        name: {
          firstName: "Recep",
          lastName: "Sen",
        },
        fullName: "",
        mail: "",
        password: "",
        gender: "",
      },
      isSubmitted: false,
    };
  },
};
</script>
