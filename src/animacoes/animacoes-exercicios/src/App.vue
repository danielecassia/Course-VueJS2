<template>
  <div id="app" class="container">
    <h1>Animações</h1>
    <hr />
    <!-- <b-button variant="primary" class="mb-4" @click="exibir = !exibir">ALTERNAR</b-button> 
    
    <transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>		
		</transition>

		<transition name="slide" appear>
			<b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>		
		</transition>

		<transition 
			enter-active-class="animated bounce"
			leave-active-class="animated chake">
			<b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>		
    </transition>

    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">FADE</option>
      <option value="slide">SLIDE</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>

    <hr />

    <button @click="exibir2 = !exibir2">ALTERNAR</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>

    <hr />

    <div class="mb-4">
      <b-button variant="primary" class="mr-2"
	  	@click="componentSelecionado= 'AlertaInfo'">INFO</b-button>
      <b-button variant="secundary"
	  	@click="componentSelecionado= 'AlertaAdverntencia'">ADVERTENCIA</b-button>
    </div>
	<transition name="fade" mode="out-in">
      <component :is="componentSelecionado"></component>		
	</transition> -->

    <hr>
    <b-button @click="adicionarAluno" class="mb-4">ADICIONAR</b-button>
    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removerAluno(i)"> {{aluno}} </b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import AlertaAdverntencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";

export default {
  components: { AlertaAdverntencia, AlertaInfo },
  data() {
    return {
      alunos: ['Roberto', 'Deborah', 'Alexsandro', 'Suelen'],
      msg: "Uma mensagem de info para o usuário",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0,
      componentSelecionado: "AlertaInfo"
    };
  },
  methods: {
    adicionarAluno() {
      const s = Math.random().toString(36).substring(2)
      this.alunos.push(s)
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1)
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    afterEnter(el) {
      //   console.log("afterEnter");
    },
    enterCancelled(el) {
      //   console.log("enterCancelled");
    },
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    afterLeave(el) {
      //   console.log("afterLeave");
    },
    leaveCancelled(el) {
      //   console.log("leaveCancelled");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-move {
  transition: transform 1s;
}
</style>
