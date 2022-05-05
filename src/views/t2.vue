<template>
    <div style="padding: 10px">
        <div style="background: #fff; border-radius: 8px; padding: 20px;">
            <div class="query-c">
                切换分类：
                <Input
                search
                placeholder="请输入100006~100030"
                style="width: auto"
                v-model="categoryId"
                @on-search="chooseType" 
                />&nbsp;&nbsp;&nbsp;&nbsp;
                查询：
                <Input
                search
                placeholder="请输入查询内容"
                style="width: auto"
                v-model="searchName"
                @on-search="search" 
                />
            </div>
            <br>
            <Table max-height="670" border stripe :columns="columns1" :data="data1">
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                    <Button type="error" size="small" @click="remove(index)">Delete</Button>
                </template>
            </Table>
            <br>
            <Page :total="total"
            show-elevator
            @on-change="changeIndexPage"
            />
        </div>
    </div>
</template>

<script>
import { fetchUserData, searchList } from '@/api'

export default {
    name: 't2',
    data() {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name',
                },
                {
                    title: 'Type',
                    key: 'categoryType',
                    sortable: true
                },
                {
                    title: 'Process',
                    key: 'process',
                    sortable: true
                },
                {
                    title: 'Favor',
                    key: 'favor',
                    sortable: true
                },
                {
                    title: 'Material',
                    key: 'subtitle',
                    width: 350
                },
                {
                    title: 'Action',
                    slot: 'action',
                    width: 150,
                    align: 'center'
                }      
            ],
            data1: [],
            total:0,
            pageNum:1,
            categoryId:null,
            searchName:null
        }
    },
    mounted() {
        this.getUserData()
    },
    methods: {
        getUserData() {
            fetchUserData(this.categoryId, this.pageNum, null).then(res => {
                this.data1 = res.data.list
                this.total = res.data.total
            })
        },
        changeIndexPage(i){
            this.pageNum = i
            if(this.searchName) {this.search(this.searchName)}
            else {this.getUserData()}
        },
        chooseType(e){
            this.categoryId = e
            this.getUserData()
        },
        search(e){
            this.searchName = e;
            searchList(this.searchName, this.pageNum, null).then(res => {
                this.data1 = res.data.list
                this.total = res.data.total
            })
        },
        show (index) {
            this.$Modal.info({
                title: 'Info',
                content: `Name：${this.data1[index].name}<br>
                          Type：${this.data1[index].categoryType}<br>
                          Process：${this.data1[index].process}<br>
                          Favor：${this.data1[index].favor}<br>
                          Material：${this.data1[index].subtitle}<br>`
            })
        },
        remove (index) {
            this.data1.splice(index, 1);
        }
    },
}
</script>

<style scoped>

</style>