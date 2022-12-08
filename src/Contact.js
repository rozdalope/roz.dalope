export default function Contact() {
	return (
		<main id='contact-html'>
			{/* <!--Contact info--> */}
			<div className='contact-form'>
				<div id='contact-address'>
					<div className='mobile-contact'>
						<img
							src='./img/location.png'
							alt='You can find me at'
							className='contact-icon'
							width='100px'
						/>
					</div>
					<h3 className='contact-heading address'>Address:</h3>
					<div className='contact-address-details'>
						Dagupan City, Pangasinan
					</div>
				</div>

				<div id='contact-number'>
					<div className='mobile-contact'>
						<img
							src='./img/call.png'
							alt='You can call me at'
							className='contact-icon'
							width='100px'
						/>
					</div>
					<h3 className='contact-heading phone'>Phone:</h3>
					<div id='contact-number-details'>
						<b>Mobile:</b> +63-995-634-0956 <br />
					</div>
				</div>

				<div id='contact-email'>
					<div className='mobile-contact'>
						<img
							src='./img/sendemail.png'
							alt='You can email me at'
							className='contact-icon'
							width='100px'
						/>
					</div>
					<h3 className='contact-heading email'>Email:</h3>
					<div className='contact-email-details'>rosheng28.rd@gmail.com</div>
				</div>
			</div>
			<br />
			<br />
			{/* <!--End of contact info--> */}

			{/* <!--Get in touch section--> */}
			<div id='inquiry-form'>
				<form className='contact-form'>
					<fieldset>
						<legend className='inquiry-legend'>For more inquiries:</legend>
						<br />
						<label for='fullname'>Full Name:</label>
						<br />
						<input
							type='text'
							id='fullname'
							name='fullname'
						/>
						<br />
						<br />
						<label for='email'>Email:</label>
						<br />
						<input
							type='email'
							id='email'
							name='email'
						/>
						<br />
						<br />
						<label for='phone'>Phone Number:</label>
						<br />
						<input
							type='tel'
							id='phone'
							name='phone'
							placeholder='09123456789'
							pattern='[0-9]{11}'
							required
						/>
						<br />
						<br />
						<label for='message'>Message:</label>
						<br />
						<textarea
							id='message'
							name='message'
							rows='5'
							cols='35'
							placeholder='Type your message here...'
						></textarea>
						<br />
						<div className='contact-mini-button'>
							<input
								type='image'
								name='submit'
								src='./img/contact.png'
								alt='Submit'
								value='Send'
							/>
							<span>Send</span>
						</div>
					</fieldset>
				</form>
			</div>
		</main>
	);
}
