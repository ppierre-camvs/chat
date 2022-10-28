<script lang="ts">
  import { Message } from "./models/message";
  import { MessageService } from "./services/message.service";

  let messages: Array<Message>;

  let pseudo = "";
  let contenu = "";
  let heure =3;

  let msgSce = new MessageService();
  msgSce.getAllMessages().subscribe((msg) => {
    messages = msg;
  });

  function envoyer() {
    let newMsg = new Message(
      (Math.random() * 100).toString(),
      pseudo,
      (heure++).toString() + ":00:00:",
      contenu
    );

    msgSce.addMessage(newMsg);
    contenu ="";
    
  }
</script>

<main>
  <input bind:value={pseudo} /><input bind:value={contenu} /><button
    on:click={envoyer}>envoyer</button
  > <br /> <br />

  <div class="chatbox">
    {#if messages != null}
      {#each messages as msg}
        <span> <b> {msg.pseudo} <i>{msg.heure} </i> :</b> {msg.contenu}</span>
        <br /> <br />
      {/each}
    {/if}
  </div>
</main>

<style>
  .chatbox {
    text-align: left;
    border: 1 solid white;
    background-color: dimgrey;
    width: 100%;
  }
</style>
