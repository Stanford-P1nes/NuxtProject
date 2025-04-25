<template>
    <div class="feedbackForm">
        <strong class="feedbackFormTitle">Sign up for free</strong>
        <form class="feedbackFormForm" @submit="handleSubmit">
            <label for="email">Your email</label><br>
            <input type="email" id="email" name="email" placeholder='example@mail.com' required autocomplete='off'><br>
            <label for="password">Your password</label><br>
            <input type="number" id="password" name="password" placeholder='*************' required autocomplete='off'><br>
            <div class="feedbackFormForm__checkbox">
                <input type="checkbox" id="checkbox" name="checkbox" required>
                <span>I agree to the privacy policy</span>
            </div>
            <button class="button btnSecondary feedbackFormForm__button" @click='handleSubmit'>Submit</button><br>
            <div class="feedbackFormForm__linkContainer">
                <span>Already have an account? <a class="link feedbackFormForm__link" href='#'>Sign in</a></span>
            </div>
        </form>
    </div>
</template>

<script setup>
    function handleSubmit(event) {
        event.preventDefault();
    }
</script>

<style lang="scss">
    @import './_FeedbackForm.scss';
</style>