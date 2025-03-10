<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 p-6">
    <div
      class="max-w-4xl mx-auto bg-gray-800 bg-opacity-60 shadow-xl rounded-lg p-6 backdrop-blur-lg"
    >
      <NuxtLink
        to="/"
        class="text-blue-400 hover:text-blue-300 transition-all inline-block mb-4"
      >
        ← Back to Blog
      </NuxtLink>

      <div v-if="pending" class="text-center text-gray-400 animate-pulse">
        Loading post...
      </div>

      <div v-else-if="post" class="space-y-4">
        <h1 class="text-3xl font-bold text-white">{{ post.title }}</h1>
        <p class="text-gray-300 leading-relaxed">{{ post.body }}</p>
      </div>

      <div v-else class="text-red-500 text-center">Post not found.</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useFetch } from "#imports";
import { useHead } from "#imports";

const route = useRoute();
const { data: post, pending } = useFetch(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);

// Set the page title dynamically
useHead({
  title: post?.value ? post.value.title : "Loading Post...",
});
</script>
