<script>
export default {
  name: "App",
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue"),
  },
};
</script>

<!-- 都可以-->
<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld: () => import("./components/HelloWorld.vue"),
  },
};
</script>
