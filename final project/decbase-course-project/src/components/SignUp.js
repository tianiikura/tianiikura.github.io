function SignUp () {
    return (
        <section class="sign-up-form">
            <div class="title">DON’T FORGET TO SIGN UP</div>
            <div class="sign-up-form__deco"></div>
            <div class="sign-up-form__subtitle">
                Find out early about all upcoming promotions and new product releases withour newsletter.
            </div>
            <form action="#" method="post">
                <div class="form-name">
                    <input type="text" id="name" name="name" placeholder="Enter your name....." />
                    <input type="text" id="surname" name="surname" placeholder="Enter your surname....." />
                </div>
                <input type="email" id="email" name="email" placeholder="Enter your e-mail....." />
                <input type="submit" value="SUBSCRIBE" class="button" />
            </form>
        </section>
    )
}

export default SignUp;