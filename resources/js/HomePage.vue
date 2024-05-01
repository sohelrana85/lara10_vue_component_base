<template>

   <div class="card">
      <div class="card-header">
         <h3>I am Card Header</h3>
      </div>
      <div class="card-body">
         <h1>Hello Vue {{ name }}</h1>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         name: 'Sohel Rana'
      }
   }
}
</script>