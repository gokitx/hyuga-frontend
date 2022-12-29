<template>
    <div class="left-nav">
    </div>
</template>

<script>
    export default {
        name: 'leftNav',
        data() {
            return {
            }
        },
        methods: {
            toCashier() {
                this.$router.push({
                    path: "/cashier"
                })
            },
            toPos() {
                this.$router.push({
                    path: "/"
                })
            },
            toGoods() {
                this.$router.push({
                    path: "/goods"
                })
            },
            toMembers() {
                this.$router.push({
                    path: "/members"
                })
            },
            toStatical() {
                this.$router.push({
                    path: "/statistical"
                })
            }

        }
    }
</script>
<style>
    .left-nav {
        color: #fff;
        font-size: 10px;
        height: 5%;
        background-color: #1D8ce0;
        float: left;
        width: 100%;
    }

    .iconfont {
        font-size: 24px;
    }

    .left-nav ul {
        padding: 0px;
        margin: 0px;
    }

    .left-nav li {
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
</style>