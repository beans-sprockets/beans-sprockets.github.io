<script>
let email = "";
  let school = "";
  let interests = [];
  let successMessage = "";

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log(email, school, interests)
    // Serialize the form data
    const formData = {
      Email: email,
      School: school,
      Interests: interests,
    };

    // Send a POST request to the webhook URL

    fetch("https://hooks.airtable.com/workflows/v1/genericWebhook/appHETbcQa0XSzVGP/wflFf9XtLRvn5jvwY/wtrpdK0b4SXjCDyYf", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Form submission was successful
          successMessage = "Form submitted successfully!";
        } else {
          // Handle errors if needed
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
</script>

<div class="text-xm">
  <form on:submit={handleSubmit}>
  <label for="Email">Email</label>
  <br>
  <input type="email" id="Email" bind:value={email} class="form-input px-4 py-1 rounded-full">
    <div class="py-4">
  <label for="School">School:</label>
  <br>
  <input type="text" id="School" bind:value={school} class="form-input px-4 py-1 rounded-full">
    </div>
    <div>
    <label for="Interests">Interests:</label>
    <br>
      <label for="Quant">
        <input type="checkbox" id="Quant" bind:group={interests} value="Quant"> Quant
      </label>


      <label for="Trading">
        <input type="checkbox" id="Trading" bind:group={interests} value="Trading"> Trading
      </label>


      <label for="StockPitch">
        <input type="checkbox" id="StockPitch" bind:group={interests} value="Stock Pitch"> Stock Pitch
      </label>


      <label for="CaseConsulting">
        <input type="checkbox" id="CaseConsulting" bind:group={interests} value="Case Consulting"> Case Consulting
      </label>


      <label for="MandA">
        <input type="checkbox" id="MandA" bind:group={interests} value="M&A"> M&A
      </label>

    </div>


  <input type="submit" value="Notify Me of Competitions" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">


</form>

{#if successMessage}
  <p>{successMessage}</p>
{/if}
</div>
