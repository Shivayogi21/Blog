<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 p-6">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-bold text-white mb-6 text-center">Blog</h1>

      <div v-if="pending" class="text-center text-gray-400 animate-pulse">
        Loading posts...
      </div>

      <div v-else-if="posts.length" class="space-y-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg backdrop-blur-lg transition-transform transform hover:scale-[1.02]"
        >
          <h2 class="text-2xl font-semibold text-blue-400">{{ post.title }}</h2>
          <p class="text-gray-300 line-clamp-2 mt-2">{{ post.body }}</p>
          <NuxtLink
            :to="`/posts/${post.id}`"
            class="mt-3 inline-block text-blue-500 hover:text-blue-300 transition-all"
          >
            Read more →
          </NuxtLink>
        </div>
      </div>

      <div v-else class="text-red-500 text-center">No posts found.</div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "#imports";
import { useHead } from "#imports";

const { data: posts, pending } = useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);

// Set the page title
useHead({
  title: "Blog",
});
</script>

<style>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 255, 0.5);
  border-radius: 6px;
}
</style>
