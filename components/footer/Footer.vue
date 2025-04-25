<template>
    <footer class="mainFooter">
        <div class="container">
            <div class="mainFooterInner">
                <div class="mainFooterInnerBlock top">
                    <Logo />
                    <button class="button btnThird" type="button">Get on Webflow</button>
                </div>
                <div class="mainFooterInnerBlock middle">
                    <FooterMenu />
                    <SocialBlock />
                </div>
                <hr class="horizontalLine">
                <div class="mainFooterInnerBlock bottom">
                    <SponsorBlock />
                    <NuxtLink class="link" to='/contact'>Contact</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang='scss'>
    @import './_Footer.scss';
</style>