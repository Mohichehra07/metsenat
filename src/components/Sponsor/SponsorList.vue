<script setup>
import { defineProps } from 'vue';
defineProps({
    id:{
        type:Number,
    },
    full_name: {
        type:String,
    },
    phone: {
        type:Number,
    },
    sum: {
        type:Number,
    },
    title: {
        type:String,
    },
    get_status_display: {
        type: String,
    }

})


</script>
<!-- <template>
    <table>
        <thead>
            <tr>
                <th> {{ khsd }} </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in data" :key="row.id"> 
            <td v-for="head in haedings" :key="head.key">
                <slot :name="head.key" :data="row"> {{ row[head.key] }} </slot>
            </td> 
            </tr>
        </tbody>
    </table><br>
</template> -->