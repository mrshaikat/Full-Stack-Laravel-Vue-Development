<template>
  <div>
    <h1 ref="myref">Hook tutorial</h1>
    <p>may name is: {{name}}</p>
  </div>
</template>
 <script>
 export default {
     data(){
     return{
        name:'ashikujjaman'
            }
         },

         beforeCreate(){
             console.log(this.name);
         },

         created(){
             console.log('Data and other function is aviable but not html',this.name);
         },
         mounted(){
             console.log(this.$refs.myref);
         }

 }
 </script>
