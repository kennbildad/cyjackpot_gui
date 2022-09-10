<template>
    <div>
        <div class="text-center mt-5"><router-link class="navbar-brand" to="/"><img alt="cyjackpotLogo" src="@/assets/logo.png"></router-link></div>
        <div>
            <div class="card-body">
                <h3 class="text-center">PASSWORD RESET</h3>
                <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                <form>
                    <div class="form-floating mb-3">
                    <input type="password" class="form-control" name="password" id="password" placeholder="Password">
                    <label for="password">New Password</label>
                    </div>
                    <div class="form-floating mb-3">
                    <input type="password" class="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password">
                    <label for="confirm_password">Confirm Password</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div class="card-footer mt-3 text-center">
                    <router-link to="/">Bact To Home Page</router-link>
                </div>
                </div>
                <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </div>
</template>
