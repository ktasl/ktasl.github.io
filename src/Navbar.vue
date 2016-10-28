<template>
	<!-- nav bar menu -->
	<div id='navbar' class="ui fixed inverted menu">
		<div class="ui secondary menu">
			<a href="#" class="header item">
				<img class="logo" src="./assets/img/logo.png"> Project Name
			</a>
			<a href="#" class="item">{{ home }}</a>
			<div class="ui simple dropdown item">
				{{ dropdown }} <i class="dropdown icon"></i>
				<div class="menu">
					<a class="item" href="#">Link Item</a>
					<a class="item" href="#">Link Item</a>
					<div class="divider"></div>
					<div class="header">Header Item</div>
					<div class="item">
						<i class="dropdown icon"></i> Sub Menu
						<div class="menu">
							<a class="item" href="#">Link Item</a>
							<a class="item" href="#">Link Item</a>
						</div>
					</div>
					<a class="item" href="#">Link Item</a>
				</div>
			</div>

		</div>
		<div class="right menu">
			<div class="ui primary button">{{ singup }}</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                home: '專案',
                dropdown: '下拉式選單',
                singup: `登入`
            }
        }
    }
</script>