<template>
    <v-app>
        <v-navigation-drawer class="rounded-e-xl" elevation="0" v-model="open" :clipped="clipped" fixed app
            style="background: linear-gradient(to top, #003E73,#065D9E);color:white;border: none;">
            <div class="text-center">
                <div style="display: flex;justify-content: start;align-items: center;flex-direction: column;"
                    class="pt-4 pl-3">
                    <div class="pt-4" style="line-height: 18px">
                        LOGO
                    </div>
                </div>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: space-between;">
                <v-list>
                    <v-list-item to="/home">
                        <v-list-item-title class="d-flex align-center">
                            <v-icon>mdi-home</v-icon>
                            <span class="ml-2">Home</span>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </div>
        </v-navigation-drawer>
        <v-app-bar rounded="xl" class="mt-2 ml-2" style="background: linear-gradient(to left, #065D9E,#065D9E)"
            elevation="0" app fixed :clipped-left="clipped">
            <v-app-bar-nav-icon color="#fff" @click="open = !open" />
            <div class="pl-4">
                <h3 style="color: #fff;">System Name</h3>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-5">
                <v-icon color="white">mdi-power</v-icon>
            </v-btn>
            <div>
            </div>
        </v-app-bar>
        <v-main>
            <div class="pa-4 ">
                <slot></slot>
            </div>
        </v-main>
    </v-app>
</template>
<script setup lang="ts">
const open = ref<boolean>(true)
const clipped = ref<boolean>(false)

</script>
<style>
.bgggs {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>