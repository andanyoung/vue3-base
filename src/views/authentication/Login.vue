<template>
  <!-- Brand logo-->
  <Logo class="mt-8 ml-8 absolute"></Logo>
  <!-- /Brand logo-->
  <a-row class="auth-inner m-0 h-full">
    <!-- Left Text-->
    <a-col :lg="16" class="hidden lg:flex items-center p-5">
      <div class="w-full flex px-5 h-full">
        <img
          :src="imgUrl"
          class="w-4/5"
          :alt="'Login' + $store.getters.title"
        />
      </div>
    </a-col>
    <!-- /Left Text-->

    <!-- Login-->
    <a-col :lg="8" :xs="24" class="bg-white px-4 p-lg-16">
      <div class="flex flex-col justify-center h-full max-w-md mx-auto">
        <a-typography-title class="mb-1 font-weight-bold" title-tag="h3">
          Welcome to {{ $store.getters.title }}! 👋
        </a-typography-title>
        <a-typography-paragraph class="mb-2">
          Please sign-in to your account and start the adventure
        </a-typography-paragraph>

        <a-space direction="vertical" size="large">
          <a-alert
            message="测试账号密码: "
            description="Admin: admin@demo.com |admin"
            type="info"
            show-icon
          />

          <!-- form -->
          <a-form
            validate-on-rule-change
            layout="vertical"
            :model="formState"
            name="basic"
            autocomplete="off"
            @finish="onFinish"
          >
            <a-form-item
              label="Username"
              name="username"
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                v-model:value="formState.username"
                placeholder="username"
              />
            </a-form-item>

            <a-form-item
              label="Password"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                v-model:value="formState.password"
                placeholder="password"
              />
            </a-form-item>

            <a-form-item name="remember">
              <a-checkbox v-model:checked="formState.remember"
                >Remember me</a-checkbox
              >
            </a-form-item>

            <a-form-item>
              <a-button
                shape="round"
                class="w-full"
                type="primary"
                html-type="submit"
                size="large"
                :disabled="signBtnDisabled"
                >Sign in</a-button
              >
            </a-form-item>
          </a-form>
        </a-space>
      </div>
    </a-col>

    <!-- /Login-->
  </a-row>
</template>

<script setup>
import imgUrl from '@/assets/images/login/login-v2.svg';
const formState = reactive({ username: '', password: '', remember: true });
const signBtnDisabled = computed(() => {
  return !(formState.username && formState.password);
});

function onFinish() {}
</script>

<style lang="scss" scoped></style>
