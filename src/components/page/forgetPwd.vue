<template> 
    <div>
   <p style="font-size:30px" class="wow swing" data-wow-duration ="3s" data-wow-delay ="0s">头部</p>
     </div>
   </template>
   <script>
   export default({  
     data(){    
     return {  
       }   
    }, 
    mounted() {  
      // 在项目加载完成之后初始化wow    
       this.$nextTick(() => {      
         new this.$wow().init()   
        })  
     },    
      })
   </script>
   