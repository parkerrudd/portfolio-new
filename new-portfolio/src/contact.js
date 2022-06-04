import styles from './styles/style.css'; 

function Contact() {

    return (
        <section id='contactpage'>
            <h1>Reach Out!</h1>
            <p className='m-plus'>I'm always looking for new opportunities to create. Don't hesitate to get in touch!</p>

            <form action="https://formsubmit.co/parkerbrudd@gmail.com" method="POST">
                <input id='email' type="email" name="email" placeholder='example@email.com' required />
                {/*<input type="text" name="name" required /> */}
                <textarea id='email-text' name="name" cols="30" rows="10" placeholder='Your Message Here...' required></textarea>
                <button id='submit-btn' type="submit">Send</button>
            </form>

         
        </section>
    )
}

export default Contact; 