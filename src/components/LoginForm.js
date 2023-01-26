import React from "react"
import styles from "./LoginForm.module.css"
const LoginForm = () => {
    return (
        <form className={styles.form}>
            <label className={styles.label}>
                Name
                <input className={styles.input} type='text'></input>
            </label>
            <label className={styles.label}>
                Password
                <input className={styles.input} type='number'></input>
            </label>
            <button className={styles.submit} type='submit'>Submit</button>

        </form>
    )
}

export default LoginForm;