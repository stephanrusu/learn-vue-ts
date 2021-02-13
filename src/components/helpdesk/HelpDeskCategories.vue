<template>
  <section class="max-w-5/6 xl:max-w-3/4 mx-auto py-24 justify-center items-center">
    <div class="grid grid-cols-2 grid-flow-row gap-8 w-full">
      <template v-for="category in categories">
        <div :key="category.key" class="bg-white shadow-card hover:shadow-panel rounded-lg p-8">
          <div class="text-lg font-medium tracking-wide text-indigo-800">{{ category.title }}</div>
          <div class="text-md text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae natus eius velit commodi fugiat qui alias
            esse sunt quaerat maxime repellat.
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelpDeskCategories",
  data() {
    return {
      categories: [
        {
          key: "gettingStarted",
          title: "Getting started",
        },
        {
          key: "userAccount",
          title: "User account",
        },
        {
          key: "productFeatures",
          title: "Product features",
        },
        {
          key: "customizationOptions",
          title: "Customization options",
        },
        {
          key: "paymentGeteaways",
          title: "Payement gateaways",
        },
        {
          key: "securityOptions",
          title: "Security options",
        },
        {
          key: "digitalDownloads",
          title: "Digital downloads",
        },
        {
          key: "emailMarketing",
          title: "Email marketing",
        },
      ],
    };
  },
};
</script>
