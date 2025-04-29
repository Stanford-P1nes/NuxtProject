<template>
    <header class="mainHeader" role="MainHeader">
        <div class="container">
            <div class="mainHeaderInner">
                <div class="miniBlockLogo">
                    <Logo />
                    <Email class="mainHeaderInner__email" />
                </div>
                <Nav class="mainHeaderInner__nav" />
            </div>
        </div>
    </header>
</template>

<style lang='scss'>
	@import './_Header.scss';
</style>