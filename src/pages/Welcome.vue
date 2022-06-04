<script setup>
import { useUsers } from 'stores/user'

const store = useUsers()

const auth = store.authUser
</script>


<template>
      <div>
          <div v-show="auth">
            <router-link
                v-if="auth"
                to="/dashboard"
                class="text-sm text-gray-700 underline">
                Dashboard
            </router-link>
          </div>

          <div v-show="!auth">
            <router-link
                to="/login"
                class="ml-4 text-sm text-gray-700 underline">
                Log in
            </router-link>
            <router-link
                to="/register"
                class="ml-4 text-sm text-gray-700 underline">
                Register
            </router-link>
          </div>
      </div>
</template>

