<script setup>
// 跳转 页面 /redirect?path=route
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const { params, query } = route;
const path = params.path;
this.$router.replace({ path: '/' + path, query });
</script>
