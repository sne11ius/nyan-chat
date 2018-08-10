<template>
  <div>
    <h1>hello from nyan-chat ;)</h1>
    <input v-model="text">
    <button @click="submitMessage">Send!</button>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{message.text}}
        <img v-if="message.imageUrl" :src="message.imageUrl">
      </li>
    </ul>
  </div>
</template>

<script>
import { firestore, serverTimestamp } from './service/api'

const messages = firestore.collection('messages')

export default {
  name: 'App',
  data () {
    return {
      text: '',
      messages: []
    }
  },
  mounted () {
    messages
      .orderBy('created', 'desc')
      .limit(10)
      .onSnapshot(querySnapshot => {
        this.messages = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
    })
  },
  methods: {
    submitMessage () {
      messages.add({
        text: this.text,
        created: serverTimestamp()
      })
    }
  }
}
</script>

<style>
img {
  height: 15px;
}
</style>
