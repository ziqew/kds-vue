<template>
  <div>
        <vuep :template="code"></vuep>
</div>

</template>

<script>
  import Vuep from 'vuep';
  export default {
    data(){
        return {
            code: `<template>
            <my-button :rounded="true">A Button with rounded edges</my-button>
            </template>`,
        };
    }
  }
</script>

<style>

  
</style>