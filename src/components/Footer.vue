<template>
  <footer class="bg-white text-center">
    <div class="container">
      <h4 class="fw-bold cTextDarkGray">
        {{ config.footer.title }}
      </h4>
      <div class="d-flex justify-content-center align-items-center">
        <ul class="list-unstyled d-flex mt-4">
          <li
            v-for="(contact, index) of config.footer.contacts"
            :key="`contact-${index+1}`"
            class="me-3"
          >
            <a
              :href="contact.link"
              class="cTextBlue cLogoSocial"
              target="_blank"
            >
              <i :class="['fa-2x', contact.icon]"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="text-center text-muted mt-3">
        {{ config.footer.copyright(currentYear) }}
      </div>
    </div>
  </footer>
</template>

<script src="./js/footer.js"></script>

<style scoped>
footer {
  padding: 2rem 0;
}
</style>