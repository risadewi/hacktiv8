<template>
  <div id="app">
    <center>
      <h1>Aplikasi Catatan Tiana</h1>
    </center>
    <v-form class="form">
      <v-text-field label="Nama Catatan" v-model="nama" required></v-text-field>

      <v-text-field label="Keterangan" v-model="desk" required></v-text-field>

      <v-btn @click="addTodo" color="info">Kirim</v-btn>
      <v-btn @click="clear">Bersihkan</v-btn>
    </v-form>

    <v-data-table
      :headers="headers"
      :items="todos"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.nama }}</td>
        <td class="text-xs-left">{{ props.item.desk }}</td>
        <td class="text-xs-left">
          <v-btn icon @click="removeTodo(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: "Nama Catatan", value: "nama" },
      { text: "Keterangan", value: "desk" },
      { text: "Hapus", value: "" }
    ],
    nama: "",
    desk: "",
    todos: []
  }),
  methods: {
    addTodo() {
      if (this.nama.trim() === "" && this.desk.trim() === "") {
        alert("Data tidak boleh kosong!");
      } else {
        this.todos.push({
          nama: this.nama,
          desk: this.desk
        });
        this.nama = "";
        this.desk = "";
      }
    },
    removeTodo(id) {
      this.todos.splice(id, 1);
    },
    clear() {
      this.nama = "";
      this.desk = "";
    }
  }
};
</script>

<style scoped>
#app {
  margin-top: 30px;
}

* {
  margin: 30px;
}
.form {
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>