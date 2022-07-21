<template>
  <div>
    <Logo class="mt-8 ml-8"></Logo>
  </div>
  <div class="auth-wrapper">
    <!-- Brand logo-->

    <!-- /Brand logo-->
    <a-row class="auth-inner m-0">
      <!-- Left Text-->
      <a-col
        :lg="16"
        class="sm:hidden lg:flex align-items-center p-5 align-items-center justify-content-center"
      >
        <!-- <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        > -->
        <img :src="imgUrl" class="w-4/5" alt="Login admin4j" />
        <!-- </div> -->
      </a-col>
      <!-- /Left Text-->

      <!-- Login-->
      <a-col
        :lg="8"
        :sm="24"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <a-typography-title class="mb-1 font-weight-bold" title-tag="h2">
          Welcome to Vuexy! 👋
        </a-typography-title>
        <a-typography-paragraph class="mb-2">
          Please sign-in to your account and start the adventure
        </a-typography-paragraph>

        <a-alert
          message="测试账号密码: "
          description="Admin: admin@demo.com |admin"
          type="info"
          show-icon
        />

        <!-- form -->
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="Username"
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form>

        <!-- <b-card-text class="text-center mt-2">
            <span>New on our platform? </span>
            <b-link :to="{ name: 'auth-register' }">
              <span>&nbsp;Create an account</span>
            </b-link>
          </b-card-text> -->

        <!-- divider -->
        <div class="divider my-2">
          <div class="divider-text">or</div>
        </div>

        <!-- social buttons -->
        <!-- <div class="auth-footer-btn d-flex justify-content-center">
            <b-button variant="facebook" href="javascript:void(0)">
              <feather-icon icon="FacebookIcon" />
            </b-button>
            <b-button variant="twitter" href="javascript:void(0)">
              <feather-icon icon="TwitterIcon" />
            </b-button>
            <b-button variant="google" href="javascript:void(0)">
              <feather-icon icon="MailIcon" />
            </b-button>
            <b-button variant="github" href="javascript:void(0)">
              <feather-icon icon="GithubIcon" />
            </b-button>
          </div> -->
      </a-col>

      <!-- /Login-->
    </a-row>
  </div>
</template>

<script setup>
import imgUrl from '@/assets/images/login/login-v2.svg';
const formState = reactive({ username: '', password: '', remember: true });
</script>

<style lang="scss" scoped></style>
