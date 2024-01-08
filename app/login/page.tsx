import React from 'react'
import styles from "./login.module.css"
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const page = () => {
  return (
    <div>
      <Header />
      <div  className={`${styles.row}`}>
        <div className={`${styles.signUp}`}>
          <form className={`${styles.signForm}`} action="" method="">
            <div className={`${styles.container}`}>
              <label htmlFor="uname"><b>Username</b></label><br />
              <input className={`${styles.txtInput}`} type="text" placeholder="Enter Username" name="uname" required /><br />

              <label htmlFor="psw"><b>Password</b></label> <br />
              <input className={`${styles.pswInput}`} type="password" placeholder="Enter Password" name="psw" required />
                  
              <button className={`${styles.btn}`} type="submit">Login</button>
              <label htmlFor='remember'>
                <input id='remember' type="checkbox" /*checked="checked"*/ name="remember" /> Remember me
              </label>
            </div>

            <div className={`${styles.container}`} /*style="background-color:#f1f1f1"*/>
              <button type="button" className={`${styles.cancelbtn} ${styles.btn}`}>Cancel</button>
              <span className={`${styles.psw}`}>Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
        <div className={`${styles.signIn}`}>
          <form action="" className={`${styles.signForm}`}>
            <div className={`${styles.container}`}>

              <p>Please fill in this form to create an account.</p>
              <hr className={`${styles.horizontalLine}`} />

              <label htmlFor="email"><b>Email</b></label>
              <input className={`${styles.txtInput}`} type="text" placeholder="Enter Email" name="email" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input className={`${styles.pswInput}`} type="password" placeholder="Enter Password" name="psw" required />

              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input className={`${styles.pswInput}`} type="password" placeholder="Repeat Password" name="psw-repeat" required />
              
              <label>
                <input type="checkbox" /* checked="checked"*/ name="remember" /*style="margin-bottom:15px" *//> Remember me
              </label>
              
              <p>By creating an account you agree to our <a href="#" /*style="color:dodgerblue"*/>Terms & Privacy</a>.</p>

              <div className={`${styles.clearfix}`}>
                <button type="button" className={`${styles.cancelbtn} ${styles.halfWidth}`}>Cancel</button>
                <button type="submit" className={`${styles.btn} ${styles.halfWidth}`}>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page