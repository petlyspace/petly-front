<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { handleSubmit, errors, values } = useForm({
  validationSchema: yup.object({
    email: yup.string().email('Неверный email').required('Email обязателен'),
    password: yup
      .string()
      .min(6, 'Минимум 6 символов')
      .required('Пароль обязателен'),
  }),
});

const onSubmit = handleSubmit(values => {
  console.log('Форма отправлена:', values);
});
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
    <input
      v-model="values.email"
      type="email"
      placeholder="Email"
      class="border p-2"
    />
    <span class="text-red-500 text-sm">{{ errors.email }}</span>

    <input
      v-model="values.password"
      type="password"
      placeholder="Пароль"
      class="border p-2"
    />
    <span class="text-red-500 text-sm">{{ errors.password }}</span>

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
      Войти
    </button>
  </form>
</template>
