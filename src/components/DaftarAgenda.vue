<template>
   <div>
        <ul class="list-group list-group-flush">
            <li  v-for="dataAgenda in itemAgendaArrayBind"
                    :key="dataAgenda.id" class="list-group-item">
                <div>
                    <item-agenda 
                        @hapus-item-agenda = "$emit('hapus-item-agenda',dataAgenda.id)"
                        :data-agenda-bind="dataAgenda">                         
                    </item-agenda>
                </div>
            </li>
        </ul>

        

    </div>
</template>
<script>
import ItemAgenda from './ItemAgenda'

export default {
    name: 'DaftarAgenda',
    components: {
       ItemAgenda
    },
    props: {
        'itemAgendaArrayBind' : ''
    }
}
</script>